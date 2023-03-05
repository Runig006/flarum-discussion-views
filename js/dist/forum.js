/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/components/AddLists.js":
/*!******************************************!*\
  !*** ./src/forum/components/AddLists.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_punctuateSeries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/punctuateSeries */ "flarum/helpers/punctuateSeries");
/* harmony import */ var flarum_helpers_punctuateSeries__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_punctuateSeries__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_utils_humanTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/utils/humanTime */ "flarum/utils/humanTime");
/* harmony import */ var flarum_utils_humanTime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_humanTime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/CommentPost */ "flarum/components/CommentPost");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/Link */ "flarum/components/Link");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/components/DiscussionPage */ "flarum/components/DiscussionPage");
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/components/FieldSet */ "flarum/components/FieldSet");
/* harmony import */ var flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_PostDiscussionViewsModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/PostDiscussionViewsModal */ "./src/forum/components/PostDiscussionViewsModal.js");












/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_9___default().prototype), 'sidebarItems', function (items) {
    if (app.forum.attribute('showViewList') == 0) return;
    var views = this.discussion.views();
    var viewList = new (flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default())();
    $.each(views, function (key, view) {
      var userName = view.user() === false ? app.translator.trans('michaelbelgium-discussion-views.forum.viewlist.guest') : view.user().username();
      var listitem = m("div", {
        className: "item-lastUser-content"
      }, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default()(view.user()), m("div", null, userName, m("span", {
        className: "lastUser-visited",
        title: view.visitedAt().toLocaleString()
      }, flarum_utils_humanTime__WEBPACK_IMPORTED_MODULE_6___default()(view.visitedAt()))));
      if (view.user() !== false) {
        listitem = m((flarum_components_Link__WEBPACK_IMPORTED_MODULE_8___default()), {
          href: app.route.user(view.user())
        }, listitem);
      }
      viewList.add('lastUser-' + key, listitem);
    });
    items.add('lastDiscussionViewers', m((flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_10___default()), {
      className: "LastDiscussionUsers",
      label: app.translator.trans('michaelbelgium-discussion-views.forum.viewlist.title')
    }, viewList.toArray()));
  });
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_7___default().prototype), 'footerItems', function (items) {
    if (app.forum.attribute('showFooterViewList') == 0) return;
    var post = this.attrs.post;
    var discussion = post.discussion();
    var views = discussion.uniqueViews();
    if (discussion.posts() === false || discussion.posts().length == 0) return;
    var firstPostId = discussion.posts()[0].id();
    if (firstPostId === post.id()) {
      if (views && views.length > 0) {
        var limit = 5;
        var names = views.slice(0, limit).map(function (view) {
          return m((flarum_components_Link__WEBPACK_IMPORTED_MODULE_8___default()), {
            href: app.route.user(view.user())
          }, view.user() === app.session.user ? app.translator.trans('michaelbelgium-discussion-views.forum.post.you') : flarum_helpers_username__WEBPACK_IMPORTED_MODULE_1___default()(view.user()));
        });
        if (views.length > limit) {
          var count = views.length - limit;
          names.push(m((flarum_components_Link__WEBPACK_IMPORTED_MODULE_8___default()), {
            href: "#",
            onclick: function onclick(e) {
              e.preventDefault();
              app.modal.show(_components_PostDiscussionViewsModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
                post: post
              });
            }
          }, app.translator.trans('michaelbelgium-discussion-views.forum.post.others_link', {
            count: count
          })));
        }
        if (names.length > 0) {
          items.add('viewed', m("div", {
            className: "Post-Discussion-viewedBy"
          }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()('fas fa-eye'), app.translator.trans('michaelbelgium-discussion-views.forum.post.viewed_by', {
            users: flarum_helpers_punctuateSeries__WEBPACK_IMPORTED_MODULE_3___default()(names)
          })));
        }
      }
    }
  });
}

/***/ }),

/***/ "./src/forum/components/AddModerationControl.js":
/*!******************************************************!*\
  !*** ./src/forum/components/AddModerationControl.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/DiscussionControls */ "flarum/utils/DiscussionControls");
/* harmony import */ var flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ResetDiscussionViewsModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResetDiscussionViewsModal */ "./src/forum/components/ResetDiscussionViewsModal.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_2___default()), 'moderationControls', function (items, discussion) {
    if (discussion.canReset() && discussion.viewCount() > 0) {
      items.add('reset', m((flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
        icon: "far fa-eye-slash",
        onclick: function onclick() {
          return app.modal.show(_ResetDiscussionViewsModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
            discussion: discussion
          });
        }
      }, app.translator.trans('michaelbelgium-discussion-views.forum.discussion_controls.resetviews_button')));
    }
  });
}

/***/ }),

/***/ "./src/forum/components/AddPopularSort.js":
/*!************************************************!*\
  !*** ./src/forum/components/AddPopularSort.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/states/DiscussionListState */ "flarum/states/DiscussionListState");
/* harmony import */ var flarum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_1___default().prototype), 'sortMap', function (map) {
    if (app.forum.attribute('toggleFilter') == 1) {
      map.popular = '-view_count';
      map.unpopular = 'view_count';
    }
  });
}

/***/ }),

/***/ "./src/forum/components/AddViewsToModelAndDisplay.js":
/*!***********************************************************!*\
  !*** ./src/forum/components/AddViewsToModelAndDisplay.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/models/Discussion */ "flarum/models/Discussion");
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/DiscussionListItem */ "flarum/components/DiscussionListItem");
/* harmony import */ var flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/DiscussionList */ "flarum/components/DiscussionList");
/* harmony import */ var flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_abbreviateNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/abbreviateNumber */ "flarum/utils/abbreviateNumber");
/* harmony import */ var flarum_utils_abbreviateNumber__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_abbreviateNumber__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default().prototype.views) = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().hasMany('latestViews');
  (flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default().prototype.uniqueViews) = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().hasMany('uniqueViews');
  (flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default().prototype.canReset) = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('canReset');
  (flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default().prototype.canViewNumber) = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('canViewNumber');
  (flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default().prototype.viewCount) = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('viewCount');
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'infoItems', function (items) {
    if (this.attrs.discussion.canViewNumber()) {
      var views = this.attrs.discussion.viewCount();
      var number = flarum_app__WEBPACK_IMPORTED_MODULE_6___default().forum.attribute('abbrNumber') == 1 ? flarum_utils_abbreviateNumber__WEBPACK_IMPORTED_MODULE_5___default()(views) : views;
      items.add('discussion-views', m("span", null, number));
    }
  });
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'requestParams', function (params) {
    params.include.push('latestViews'); //fixes not loading relationship when navigating back to the discussion list if you directly went to a discussion or another page
  });
}

/***/ }),

/***/ "./src/forum/components/PostDiscussionViewsModal.js":
/*!**********************************************************!*\
  !*** ./src/forum/components/PostDiscussionViewsModal.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostDiscussionViewsModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Link */ "flarum/components/Link");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__);





var PostDiscussionViewsModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PostDiscussionViewsModal, _Modal);
  function PostDiscussionViewsModal() {
    return _Modal.apply(this, arguments) || this;
  }
  var _proto = PostDiscussionViewsModal.prototype;
  _proto.className = function className() {
    return 'Modal--small';
  };
  _proto.title = function title() {
    return app.translator.trans('michaelbelgium-discussion-views.forum.post.modal_title_text');
  };
  _proto.content = function content() {
    var views = this.attrs.post.discussion().uniqueViews();
    var names = views.map(function (view) {
      var user = view.user();
      return m("li", null, m((flarum_components_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: app.route.user(user)
      }, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default()(user), " ", ' ', flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default()(user)));
    });
    return m("div", {
      className: "Modal-body"
    }, m("ul", {
      className: "PostLikesModal-list"
    }, names));
  };
  return PostDiscussionViewsModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/ResetDiscussionViewsModal.js":
/*!***********************************************************!*\
  !*** ./src/forum/components/ResetDiscussionViewsModal.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetDiscussionViewsModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);



var ResetDiscussionViewsModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ResetDiscussionViewsModal, _Modal);
  function ResetDiscussionViewsModal() {
    return _Modal.apply(this, arguments) || this;
  }
  var _proto = ResetDiscussionViewsModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
    this.discussion = this.attrs.discussion;
    this.currentViewsCount = this.discussion.viewCount();
  };
  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form Form--centered"
    }, m("p", null, app.translator.trans('michaelbelgium-discussion-views.forum.modal_resetviews.label', {
      count: this.currentViewsCount
    })), m("div", {
      className: "Form-group"
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default().component({
      className: 'Button Button--primary Button--block',
      type: 'submit',
      loading: this.loading
    }, app.translator.trans('michaelbelgium-discussion-views.forum.modal_resetviews.submit_button')))));
  };
  _proto.title = function title() {
    return app.translator.trans('michaelbelgium-discussion-views.forum.modal_resetviews.title');
  };
  _proto.className = function className() {
    return 'Modal--small';
  };
  _proto.onsubmit = function onsubmit(e) {
    var _this = this;
    e.preventDefault();
    this.loading = true;
    this.attrs.discussion.save({
      resetViews: true
    })["catch"](function () {
      _this.loaded();
    });
    this.hide();
  };
  return ResetDiscussionViewsModal;
}((flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AddPopularSort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AddPopularSort */ "./src/forum/components/AddPopularSort.js");
/* harmony import */ var _components_AddViewsToModelAndDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AddViewsToModelAndDisplay */ "./src/forum/components/AddViewsToModelAndDisplay.js");
/* harmony import */ var _components_AddModerationControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AddModerationControl */ "./src/forum/components/AddModerationControl.js");
/* harmony import */ var _components_AddLists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/AddLists */ "./src/forum/components/AddLists.js");





flarum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('michaelbelgium-discussion-views', function () {
  (0,_components_AddPopularSort__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_components_AddViewsToModelAndDisplay__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_components_AddModerationControl__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_components_AddLists__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/CommentPost":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/CommentPost']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/CommentPost'];

/***/ }),

/***/ "flarum/components/DiscussionList":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionList']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/DiscussionList'];

/***/ }),

/***/ "flarum/components/DiscussionListItem":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionListItem']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/DiscussionListItem'];

/***/ }),

/***/ "flarum/components/DiscussionPage":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionPage']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/DiscussionPage'];

/***/ }),

/***/ "flarum/components/FieldSet":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/FieldSet']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/FieldSet'];

/***/ }),

/***/ "flarum/components/Link":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Link']" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Link'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/avatar":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['helpers/avatar']" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['helpers/avatar'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "flarum/helpers/punctuateSeries":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['helpers/punctuateSeries']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['helpers/punctuateSeries'];

/***/ }),

/***/ "flarum/helpers/username":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['helpers/username']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['helpers/username'];

/***/ }),

/***/ "flarum/models/Discussion":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['models/Discussion']" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['models/Discussion'];

/***/ }),

/***/ "flarum/states/DiscussionListState":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['states/DiscussionListState']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['states/DiscussionListState'];

/***/ }),

/***/ "flarum/utils/DiscussionControls":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['utils/DiscussionControls']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['utils/DiscussionControls'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['utils/ItemList'];

/***/ }),

/***/ "flarum/utils/abbreviateNumber":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['utils/abbreviateNumber']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['utils/abbreviateNumber'];

/***/ }),

/***/ "flarum/utils/humanTime":
/*!********************************************************!*\
  !*** external "flarum.core.compat['utils/humanTime']" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['utils/humanTime'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map