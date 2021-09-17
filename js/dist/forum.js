module.exports=function(t){var e={};function o(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=22)}([function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat["models/Discussion"]},function(t,e){t.exports=flarum.core.compat["components/Link"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["helpers/username"]},function(t,e){t.exports=flarum.core.compat["helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["states/DiscussionListState"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionList"]},function(t,e){t.exports=flarum.core.compat["utils/abbreviateNumber"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["helpers/punctuateSeries"]},function(t,e){t.exports=flarum.core.compat["utils/ItemList"]},function(t,e){t.exports=flarum.core.compat["utils/humanTime"]},function(t,e){t.exports=flarum.core.compat["components/CommentPost"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["components/FieldSet"]},function(t,e){t.exports=flarum.core.compat["common/components/Modal"]},function(t,e,o){"use strict";o.r(e);var s=o(2),n=o.n(s),r=o(1),i=o(8),a=o.n(i),u=o(0),c=o.n(u),l=o(3),p=o.n(l),f=o(9),d=o.n(f),v=o(10),h=o.n(v),b=o(11),w=o.n(b);function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function x(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,y(t,e)}var g=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),n=0;n<o;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))||this).visitedAt=c.a.attribute("visited_at",c.a.transformDate),e.user=c.a.hasOne("user"),e.discussion=c.a.hasOne("discussion"),e}return x(e,t),e}(c.a),_=o(5),O=o.n(_),N=o(12),j=o.n(N),M=o(13),V=function(t){function e(){return t.apply(this,arguments)||this}x(e,t);var o=e.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e),this.discussion=this.attrs.discussion,this.currentViewsCount=this.discussion.viewCount()},o.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("p",null,app.translator.trans("michaelbelgium-discussion-views.forum.modal_resetviews.label",{count:this.currentViewsCount})),m("div",{className:"Form-group"},O.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading},app.translator.trans("michaelbelgium-discussion-views.forum.modal_resetviews.submit_button")))))},o.title=function(){return app.translator.trans("michaelbelgium-discussion-views.forum.modal_resetviews.title")},o.className=function(){return"Modal--small"},o.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0,this.attrs.discussion.save({resetViews:!0}).catch((function(){e.loaded()})),this.hide()},e}(o.n(M).a),D=o(6),P=o.n(D),C=o(14),L=o.n(C),S=o(15),k=o.n(S),F=o(7),q=o.n(F),A=o(16),B=o.n(A),I=o(17),U=o.n(I),R=o(18),T=o.n(R),z=o(4),E=o.n(z),G=o(19),H=o.n(G),J=o(20),K=o.n(J),Q=o(21),W=function(t){function e(){return t.apply(this,arguments)||this}x(e,t);var o=e.prototype;return o.className=function(){return"Modal--small"},o.title=function(){return app.translator.trans("michaelbelgium-discussion-views.forum.post.modal_title_text")},o.content=function(){var t=this.attrs.post.discussion().uniqueViews().map((function(t){var e=t.user();return m("li",null,m(E.a,{href:app.route.user(e)},q()(e)," "," ",P()(e)))}));return m("div",{className:"Modal-body"},m("ul",{className:"PostLikesModal-list"},t))},e}(o.n(Q).a);n.a.initializers.add("michaelbelgium-discussion-views",(function(){Object(r.extend)(a.a.prototype,"sortMap",(function(t){1==app.forum.attribute("toggleFilter")&&(t.popular="-view_count",t.unpopular="view_count")})),n.a.store.models.discussionviews=g,p.a.prototype.views=c.a.hasMany("latestViews"),p.a.prototype.uniqueViews=c.a.hasMany("uniqueViews"),p.a.prototype.canReset=c.a.attribute("canReset"),p.a.prototype.canViewNumber=c.a.attribute("canViewNumber"),p.a.prototype.viewCount=c.a.attribute("viewCount"),Object(r.extend)(d.a.prototype,"infoItems",(function(t){if(this.attrs.discussion.canViewNumber()){var e=this.attrs.discussion.viewCount(),o=1==n.a.forum.attribute("abbrNumber")?w()(e):e;t.add("discussion-views",m("span",null,o))}})),Object(r.extend)(h.a.prototype,"requestParams",(function(t){t.include.push("latestViews")})),Object(r.extend)(j.a,"moderationControls",(function(t,e){e.canReset()&&e.viewCount()>0&&t.add("reset",m(O.a,{icon:"far fa-eye-slash",onclick:function(){return app.modal.show(V,{discussion:e})}},app.translator.trans("michaelbelgium-discussion-views.forum.discussion_controls.resetviews_button")))})),Object(r.extend)(H.a.prototype,"sidebarItems",(function(t){if(0!=app.forum.attribute("showViewList")){var e=this.discussion.views(),o=new B.a;$.each(e,(function(t,e){var s=!1===e.user()?app.translator.trans("michaelbelgium-discussion-views.forum.viewlist.guest"):e.user().username(),n=m("div",{className:"item-lastUser-content"},q()(e.user()),m("div",null,s,m("span",{className:"lastUser-visited",title:e.visitedAt().toLocaleString()},U()(e.visitedAt()))));!1!==e.user()&&(n=m("a",{href:app.route.user(e.user())},n)),o.add("lastUser-"+t,n)})),t.add("lastDiscussionViewers",m(K.a,{className:"LastDiscussionUsers",label:app.translator.trans("michaelbelgium-discussion-views.forum.viewlist.title")},o.toArray()))}})),Object(r.extend)(T.a.prototype,"footerItems",(function(t){if(0!=app.forum.attribute("showFooterViewList")){var e=this.attrs.post,o=e.discussion(),s=o.uniqueViews();if(o.posts()[0].id()===e.id()&&s&&s.length>0){var n=s.slice(0,5).map((function(t){return m(E.a,{href:app.route.user(t.user())},t.user()===app.session.user?app.translator.trans("michaelbelgium-discussion-views.forum.post.you"):P()(t.user()))}));if(s.length>5){var r=s.length-5;n.push(m(E.a,{href:"#",onclick:function(t){t.preventDefault(),app.modal.show(W,{post:e})}},app.translator.trans("michaelbelgium-discussion-views.forum.post.others_link",{count:r})))}n.length>0&&t.add("viewed",m("div",{className:"Post-Discussion-viewedBy"},L()("fas fa-eye"),app.translator.trans("michaelbelgium-discussion-views.forum.post.viewed_by",{users:k()(n)})))}}}))}))}]);
//# sourceMappingURL=forum.js.map