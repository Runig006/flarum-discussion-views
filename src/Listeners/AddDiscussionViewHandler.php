<?php

namespace Michaelbelgium\Discussionviews\Listeners;

use Carbon\Carbon;
use Exception;
use Flarum\Api\Controller\ShowDiscussionController;
use Flarum\Discussion\Discussion;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;
use Jaybizzle\CrawlerDetect\CrawlerDetect;
use Michaelbelgium\Discussionviews\Events\DiscussionWasViewed;
use Psr\Http\Message\ServerRequestInterface;

class AddDiscussionViewHandler
{
    private $settings;
    private $events;

    public function __construct(SettingsRepositoryInterface $settings, Dispatcher $events) {
        $this->settings = $settings;
        $this->events = $events;
    }

    public function __invoke(ShowDiscussionController $controller, Discussion $discussion, ServerRequestInterface $request, $document)
    {
        if($this->settings->get('michaelbelgium-discussionviews.ignore_crawlers', false))
        {
            $crDetect = new CrawlerDetect($request->getHeader('User-Agent'));

            if ($crDetect->isCrawler()) {
                return;
            }
        }

        //for the (un)popular filter
        $discussion->view_count++;
        $discussion->save();
        
        $this->events->dispatch(new DiscussionWasViewed($request->getAttribute('actor'), $discussion));
    }
}