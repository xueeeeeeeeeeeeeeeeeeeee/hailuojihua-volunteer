(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/hailuochat/hailuochat"],{

/***/ 215:
/*!*************************************************************************************************!*\
  !*** E:/海螺计划/hailuojihua/uniapp/hailuojihua/main.js?{"page":"pages%2Fhailuochat%2Fhailuochat"} ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _hailuochat = _interopRequireDefault(__webpack_require__(/*! ./pages/hailuochat/hailuochat.vue */ 216));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_hailuochat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 216:
/*!******************************************************************************!*\
  !*** E:/海螺计划/hailuojihua/uniapp/hailuojihua/pages/hailuochat/hailuochat.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hailuochat_vue_vue_type_template_id_18bb0286_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hailuochat.vue?vue&type=template&id=18bb0286&scoped=true& */ 217);
/* harmony import */ var _hailuochat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hailuochat.vue?vue&type=script&lang=js& */ 219);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hailuochat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hailuochat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _hailuochat_vue_vue_type_style_index_0_id_18bb0286_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hailuochat.vue?vue&type=style&index=0&id=18bb0286&lang=scss&scoped=true& */ 221);
/* harmony import */ var _G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _hailuochat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _hailuochat_vue_vue_type_template_id_18bb0286_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _hailuochat_vue_vue_type_template_id_18bb0286_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "18bb0286",
  null,
  false,
  _hailuochat_vue_vue_type_template_id_18bb0286_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/hailuochat/hailuochat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 217:
/*!*************************************************************************************************************************!*\
  !*** E:/海螺计划/hailuojihua/uniapp/hailuojihua/pages/hailuochat/hailuochat.vue?vue&type=template&id=18bb0286&scoped=true& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hailuochat_vue_vue_type_template_id_18bb0286_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./hailuochat.vue?vue&type=template&id=18bb0286&scoped=true& */ 218);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hailuochat_vue_vue_type_template_id_18bb0286_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hailuochat_vue_vue_type_template_id_18bb0286_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hailuochat_vue_vue_type_template_id_18bb0286_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hailuochat_vue_vue_type_template_id_18bb0286_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 218:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/海螺计划/hailuojihua/uniapp/hailuojihua/pages/hailuochat/hailuochat.vue?vue&type=template&id=18bb0286&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 219:
/*!*******************************************************************************************************!*\
  !*** E:/海螺计划/hailuojihua/uniapp/hailuojihua/pages/hailuochat/hailuochat.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _G_Hbudlier_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hailuochat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./hailuochat.vue?vue&type=script&lang=js& */ 220);
/* harmony import */ var _G_Hbudlier_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hailuochat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_G_Hbudlier_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hailuochat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _G_Hbudlier_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hailuochat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _G_Hbudlier_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hailuochat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_G_Hbudlier_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hailuochat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 220:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/海螺计划/hailuojihua/uniapp/hailuojihua/pages/hailuochat/hailuochat.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      token: "",
      hailuoid: 1,
      scrollTop: '',
      change: 'user2',
      user: {
        id: 10002,
        userstate: 0,
        headpicurl: "../../static/user/headpic.jpg"
      },
      chatname: "",
      totle: 10,
      chatcontent: [],
      infodata: null,
      bubbleinput: "",
      bubbleword: "",
      inputting: 0,
      test: {
        "code": 605,
        "hailuo_id": 31,
        "content": "你好",
        "time": "25:12"
      },
      ws: null
    };
  },
  watch: {
    bubbleinput: function bubbleinput(newName, oldName) {
      if (newName == "") {
        console.log(1);
        this.inputting = 0;
      } else {
        this.inputting = 1;
      }
    }
  },
  onLoad: function onLoad(e) {
    this.token = uni.getStorageSync("token");
    this.hailuoid = e.id;
    console.log(e);
    this.gethailuodetail();
  },
  onShow: function onShow() {
    this.returninfo();
    this.gethailuodetail();
  },
  onLaunch: function onLaunch() {
    uni.connectSocket({
      url: 'ws://hailuojihua.top:81/chat/2',
      success: function success(res) {
        console.log(res);
      }
    });
    uni.onSocketMessage(function (res) {
      console.log('收到服务器内容：' + res.data);
    });
  },
  methods: {
    gethailuodetail: function gethailuodetail() {
      var _this = this;
      console.log(this.hailuoid);
      uni.request({
        url: 'http://hailuojihua.top:81/hailuo/readOne',
        method: 'POST',
        data: {
          'Authorization': this.token,
          hailuo_id: this.hailuoid,
          read: 1
        },
        header: {
          'Authorization': this.token,
          'content-type': 'application/json;charset=UTF-8'
        },
        success: function success(res) {
          if (res.data.msg == "没有登录") {
            uni.navigateTo({
              url: '/pages/login/login'
            });
          }
          _this.chatcontent = res.data.data.chatLog;
          _this.chatname = res.data.data.children_username;
          console.log(res.data);
          _this.$nextTick(function () {
            this.scrollTop = 'msg' + String(this.chatcontent.length - 1);
          });
        },
        fail: function fail(res) {
          console.log(2);
          console.log(res.data);
        }
      });
    },
    returninfo: function returninfo() {
      var _this2 = this;
      uni.request({
        url: 'http://hailuojihua.top:81/user/get_info',
        method: 'POST',
        header: {
          'Authorization': this.token,
          'content-type': 'application/json;charset=UTF-8'
        },
        success: function success(res) {
          if (res.data.msg == "没有登录") {
            uni.navigateTo({
              url: '/pages/login/login'
            });
          }
          _this2.user.headpicurl = "http://hailuojihua.top:81/uploadFile/" + res.data.data.id + ".jpg";
          console.log(res.data);
          _this2.userinfo = res.data.data;
          console.log(_this2.userinfo);
          uni.connectSocket({
            url: 'ws://hailuojihua.top:81/chat/' + _this2.userinfo.id,
            success: function success(res) {
              console.log(res);
              uni.onSocketMessage(function (res) {
                this.WebSocketstaut = 1;
                console.log('收到服务器内容：' + res.data);
                console.log(this.WebSocketstaut);
              });
            }
          });
          var tempid = _this2.hailuoid;
          var st = 0;
          console.log(tempid);
          uni.onSocketOpen(function (res) {
            console.log('WebSocket连接已打开！');
            st = 1;
          });
          uni.onSocketError(function (res) {
            console.log('WebSocket连接打开失败，请检查！');
          });
          uni.onSocketMessage(function (res) {
            console.log('收到服务器内容：' + res.data);
            this.WebSocketstaut = 1;
            console.log(JSON.parse(res.data).hailuo_id);
            console.log(tempid);
            if (JSON.parse(res.data).hailuo_id == tempid) {
              setTimeout(function () {
                uni.navigateTo({
                  url: "/pages/hailuochat/hailuochat?id=".concat(tempid)
                });
              }, 500);
            }
            console.log(this.WebSocketstaut);
          });
          console.log(_this2.WebSocketstaut);
          setTimeout(function () {
            if (st == 0) {
              setTimeout(function () {
                _this2.$router.go(0);
              }, 500);
            }
          }, 1000);
        },
        fail: function fail(res) {
          console.log(2);
          console.log(res.data);
        }
      });
    },
    changeing: function changeing() {
      this.inputting = 1;
    },
    oninput: function oninput(e) {
      this.bubbleinput = e.detail.value;
    },
    lose: function lose() {
      if (this.bubbleinput == "") {
        this.inputting = 0;
      }
    },
    send: function send() {
      var _this3 = this;
      uni.sendSocketMessage({
        data: JSON.stringify({
          "code": 605,
          "hailuo_id": this.hailuoid,
          "content": this.bubbleinput,
          "time": ""
        }),
        success: function success() {
          console.log(11);
        }
      });
      uni.request({
        url: 'http://hailuojihua.top:81/hailuo/reply_hailuo',
        method: 'POST',
        data: {
          hailuo_id: this.hailuoid,
          content: this.bubbleinput
        },
        header: {
          'Authorization': this.token,
          'content-type': 'application/json;charset=UTF-8'
        },
        success: function success(res) {
          if (res.data.msg == "没有登录") {
            uni.navigateTo({
              url: '/pages/login/login'
            });
          } else if (res.data.msg == "回复成功") {
            uni.showToast({
              title: "回复成功",
              icon: 'exception',
              duration: 500
            });
            _this3.gethailuodetail();
          }
        },
        fail: function fail(res) {
          console.log(2);
          console.log(res.data);
        }
      });
      this.bubbleinput = "";
      setTimeout(function () {
        _this3.$router.go(0);
      }, 500);
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 221:
/*!****************************************************************************************************************************************!*\
  !*** E:/海螺计划/hailuojihua/uniapp/hailuojihua/pages/hailuochat/hailuochat.vue?vue&type=style&index=0&id=18bb0286&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _G_Hbudlier_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_G_Hbudlier_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_G_Hbudlier_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hailuochat_vue_vue_type_style_index_0_id_18bb0286_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./hailuochat.vue?vue&type=style&index=0&id=18bb0286&lang=scss&scoped=true& */ 222);
/* harmony import */ var _G_Hbudlier_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_G_Hbudlier_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_G_Hbudlier_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hailuochat_vue_vue_type_style_index_0_id_18bb0286_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_G_Hbudlier_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_G_Hbudlier_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_G_Hbudlier_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hailuochat_vue_vue_type_style_index_0_id_18bb0286_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _G_Hbudlier_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_G_Hbudlier_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_G_Hbudlier_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hailuochat_vue_vue_type_style_index_0_id_18bb0286_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _G_Hbudlier_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_G_Hbudlier_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_G_Hbudlier_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hailuochat_vue_vue_type_style_index_0_id_18bb0286_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_G_Hbudlier_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_G_Hbudlier_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_G_Hbudlier_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_G_Hbudlier_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hailuochat_vue_vue_type_style_index_0_id_18bb0286_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 222:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/海螺计划/hailuojihua/uniapp/hailuojihua/pages/hailuochat/hailuochat.vue?vue&type=style&index=0&id=18bb0286&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[215,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/hailuochat/hailuochat.js.map