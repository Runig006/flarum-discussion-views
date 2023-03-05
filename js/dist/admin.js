/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);

flarum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('michaelbelgium-admin-discussion-views', function (app) {
  app.extensionData["for"]('michaelbelgium-discussion-views').registerSetting({
    setting: 'michaelbelgium-discussionviews.track_unique',
    label: app.translator.trans('michaelbelgium-discussion-views.admin.settings.track_unique_label'),
    type: 'boolean',
    help: app.translator.trans('michaelbelgium-discussion-views.admin.settings.track_unique_text')
  }).registerSetting({
    setting: 'michaelbelgium-discussionviews.ignore_crawlers',
    label: app.translator.trans('michaelbelgium-discussion-views.admin.settings.ignore_crawlers_label'),
    type: 'boolean',
    help: app.translator.trans('michaelbelgium-discussion-views.admin.settings.ignore_crawlers_text')
  }).registerSetting({
    setting: 'michaelbelgium-discussionviews.track_guests',
    label: app.translator.trans('michaelbelgium-discussion-views.admin.settings.track_guests_label'),
    type: 'boolean'
  }).registerSetting({
    setting: 'michaelbelgium-discussionviews.abbr_numbers',
    label: app.translator.trans('michaelbelgium-discussion-views.admin.settings.abbr_numbers_label'),
    type: 'boolean',
    help: app.translator.trans('michaelbelgium-discussion-views.admin.settings.abbr_numbers_text')
  }).registerSetting({
    setting: 'michaelbelgium-discussionviews.show_filter',
    label: app.translator.trans('michaelbelgium-discussion-views.admin.settings.show_filter_label'),
    type: 'boolean'
  }).registerSetting({
    setting: 'michaelbelgium-discussionviews.show_viewlist',
    label: app.translator.trans('michaelbelgium-discussion-views.admin.settings.show_viewlist_label'),
    type: 'boolean',
    help: app.translator.trans('michaelbelgium-discussion-views.admin.settings.show_viewlist_text')
  }).registerSetting({
    setting: 'michaelbelgium-discussionviews.show_footer_viewlist',
    label: app.translator.trans('michaelbelgium-discussion-views.admin.settings.show_footer_viewlist_label'),
    type: 'boolean',
    help: app.translator.trans('michaelbelgium-discussion-views.admin.settings.show_footer_viewlist_text')
  }).registerSetting({
    setting: 'michaelbelgium-discussionviews.max_listcount',
    label: app.translator.trans('michaelbelgium-discussion-views.admin.settings.max_viewcount_label'),
    type: 'number',
    help: app.translator.trans('michaelbelgium-discussion-views.admin.settings.max_viewcount_text')
  }).registerPermission({
    icon: 'far fa-eye',
    label: app.translator.trans('michaelbelgium-discussion-views.admin.permissions.reset_views_label'),
    permission: 'discussion.resetViews'
  }, 'moderate').registerPermission({
    icon: 'far fa-eye',
    label: app.translator.trans('michaelbelgium-discussion-views.admin.permissions.view_number_label'),
    permission: 'discussion.readViewnumber',
    allowGuest: true
  }, 'view');
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['app'];

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
  !*** ./admin.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map