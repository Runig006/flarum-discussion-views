<?php

use Flarum\Api\Controller\ListDiscussionsController;
use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Api\Controller\ShowDiscussionController;
use Flarum\Discussion\Event\Saving;
use Flarum\Extend\ApiController;
use Flarum\Extend\ApiSerializer;
use Flarum\Extend\Event;
use Michaelbelgium\Discussionviews\Listeners;
use Flarum\Extend\Locales;
use Flarum\Extend\Frontend;
use Flarum\Extend\Settings;
use Flarum\Settings\SettingsRepositoryInterface;

$settings = resolve(SettingsRepositoryInterface::class);

return [
    (new Frontend('forum'))
        ->css(__DIR__ . '/less/extension.less')
        ->js(__DIR__. '/js/dist/forum.js'),

    (new Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),

    new Locales(__DIR__ . '/locale'),

    (new Settings)
        ->default('michaelbelgium-discussionviews.show_footer_viewlist', false)
        ->default('michaelbelgium-discussionviews.track_guests', true)
        ->default('michaelbelgium-discussionviews.max_listcount', 5)
        ->default('michaelbelgium-discussionviews.show_filter', true)
        ->default('michaelbelgium-discussionviews.abbr_numbers', false)
        ->default('michaelbelgium-discussionviews.ignore_crawlers', false)
        ->serializeToForum('toggleFilter', 'michaelbelgium-discussionviews.show_filter', null, true)
        ->serializeToForum('abbrNumber', 'michaelbelgium-discussionviews.abbr_numbers', null, false),

    (new ApiSerializer(DiscussionSerializer::class))
        ->attribute('canReset', function (DiscussionSerializer $serializer, $discussion) {
            return (bool)$serializer->getActor()->can('resetViews', $discussion);
        })->attribute('viewCount', function (DiscussionSerializer $serializer, $discussion) {
            return $discussion->view_count;
        })->attribute('canViewNumber', function (DiscussionSerializer $serializer, $discussion) {
            return (bool)$serializer->getActor()->can('readViewnumber', $discussion);
        }),

    (new ApiController(ShowDiscussionController::class))
        ->prepareDataForSerialization(Listeners\AddDiscussionViewHandler::class),


    (new ApiController(ListDiscussionsController::class))
        ->addSortField('view_count'),

    (new Event())
        ->listen(Saving::class, Listeners\SaveDiscussionFromModal::class),
]; 
