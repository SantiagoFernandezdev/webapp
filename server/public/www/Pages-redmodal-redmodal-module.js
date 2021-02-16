(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-redmodal-redmodal-module"],{

/***/ "APqJ":
/*!***************************************************!*\
  !*** ./src/app/Pages/redmodal/redmodal.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWRtb2RhbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "LoUh":
/*!***********************************************************!*\
  !*** ./src/app/Pages/redmodal/redmodal-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RedmodalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedmodalPageRoutingModule", function() { return RedmodalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _redmodal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redmodal.page */ "zxRA");




const routes = [
    {
        path: '',
        component: _redmodal_page__WEBPACK_IMPORTED_MODULE_3__["RedmodalPage"]
    }
];
let RedmodalPageRoutingModule = class RedmodalPageRoutingModule {
};
RedmodalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RedmodalPageRoutingModule);



/***/ }),

/***/ "fpKe":
/*!***************************************************!*\
  !*** ./src/app/Pages/redmodal/redmodal.module.ts ***!
  \***************************************************/
/*! exports provided: RedmodalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedmodalPageModule", function() { return RedmodalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _redmodal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redmodal-routing.module */ "LoUh");
/* harmony import */ var _redmodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redmodal.page */ "zxRA");







let RedmodalPageModule = class RedmodalPageModule {
};
RedmodalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _redmodal_routing_module__WEBPACK_IMPORTED_MODULE_5__["RedmodalPageRoutingModule"]
        ],
        declarations: [_redmodal_page__WEBPACK_IMPORTED_MODULE_6__["RedmodalPage"]]
    })
], RedmodalPageModule);



/***/ }),

/***/ "nLSG":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/redmodal/redmodal.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Redmodal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "zxRA":
/*!*************************************************!*\
  !*** ./src/app/Pages/redmodal/redmodal.page.ts ***!
  \*************************************************/
/*! exports provided: RedmodalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedmodalPage", function() { return RedmodalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_redmodal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./redmodal.page.html */ "nLSG");
/* harmony import */ var _redmodal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redmodal.page.scss */ "APqJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RedmodalPage = class RedmodalPage {
    constructor() { }
    ngOnInit() {
    }
};
RedmodalPage.ctorParameters = () => [];
RedmodalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-redmodal',
        template: _raw_loader_redmodal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_redmodal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RedmodalPage);



/***/ })

}]);
//# sourceMappingURL=Pages-redmodal-redmodal-module.js.map