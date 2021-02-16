(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Facturas-factura-inicio-factura-inicio-module"],{

/***/ "KCVw":
/*!********************************************************************************!*\
  !*** ./src/app/pages/Facturas/factura-inicio/factura-inicio-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: FacturaInicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaInicioPageRoutingModule", function() { return FacturaInicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _factura_inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factura-inicio.page */ "Luee");




const routes = [
    {
        path: '',
        component: _factura_inicio_page__WEBPACK_IMPORTED_MODULE_3__["FacturaInicioPage"]
    }
];
let FacturaInicioPageRoutingModule = class FacturaInicioPageRoutingModule {
};
FacturaInicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FacturaInicioPageRoutingModule);



/***/ }),

/***/ "L+bH":
/*!************************************************************************!*\
  !*** ./src/app/pages/Facturas/factura-inicio/factura-inicio.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".botones {\n  display: flex;\n  flex-wrap: wrap;\n}\n\nion-card {\n  width: calc(100% - 30px);\n  margin: 10px;\n  transition: all 0.5s;\n}\n\n.p {\n  width: 100%;\n  display: flex;\n}\n\nion-card .title {\n  width: calc(100% - 100px);\n}\n\nion-card ion-card-title {\n  font-size: 28px;\n  margin-top: 20px;\n  margin-left: 10px;\n}\n\nion-card p {\n  padding: 5px;\n  font-size: 18px;\n  line-height: 1.7;\n}\n\nion-card ion-card-header {\n  width: 100px;\n  text-align: center;\n  padding: 5px;\n}\n\n.texto {\n  background-color: #FFFBE5;\n  width: 100%;\n  padding: 10px;\n  text-align: center;\n}\n\n.vd {\n  background-color: #F4F4D9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZmFjdHVyYS1pbmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0FBQ0oiLCJmaWxlIjoiZmFjdHVyYS1pbmljaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdG9uZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxufVxyXG5cclxuLnAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5pb24tY2FyZCAudGl0bGUge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxufVxyXG5cclxuaW9uLWNhcmQgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5pb24tY2FyZCBwIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbn1cclxuXHJcbmlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi50ZXh0byB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGQkU1O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjREOSAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "Luee":
/*!**********************************************************************!*\
  !*** ./src/app/pages/Facturas/factura-inicio/factura-inicio.page.ts ***!
  \**********************************************************************/
/*! exports provided: FacturaInicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaInicioPage", function() { return FacturaInicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_factura_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./factura-inicio.page.html */ "UsTX");
/* harmony import */ var _factura_inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factura-inicio.page.scss */ "L+bH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FacturaInicioPage = class FacturaInicioPage {
    constructor() { }
    ngOnInit() {
    }
};
FacturaInicioPage.ctorParameters = () => [];
FacturaInicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-factura-inicio',
        template: _raw_loader_factura_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_factura_inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FacturaInicioPage);



/***/ }),

/***/ "UsTX":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Facturas/factura-inicio/factura-inicio.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"oscuro\">\n        <ion-back-button slot=\"start\" icon=\"chevron-back-outline\" defaultHref=\"/central/menu\"></ion-back-button>\n        <ion-title>Facturero</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n    <div class=\"botones\">\n\n\n        <ion-card class=\"vd\" mode=\"ios\" [routerLink]=\"['/central/menu/factura/factura-configuracion']\">\n            <div class=\"p\">\n                <ion-card-header><img src=\"/assets/ConfiguracionFactura.png\" width=\"100px\"></ion-card-header>\n                <div class=\"title\">\n                    <ion-card-title>Configurar Facturas</ion-card-title>\n\n                </div>\n\n            </div>\n            <p>Configura la información que sale en tu factura como la dirección, el teléfono, el NIT y muchos más detalles.</p>\n        </ion-card>\n\n        <ion-card color=\"muro\" mode=\"ios\" [routerLink]=\"['/central/menu/factura/factura-nueva']\">\n            <div class=\"p\">\n                <ion-card-header><img src=\"/assets/NuevaFactura.png\" width=\"100px\"></ion-card-header>\n                <div class=\"title\">\n                    <ion-card-title>Crear nueva factura</ion-card-title>\n\n                </div>\n            </div>\n            <p>Puedes crear una factura directamente desde aquí sin necesidad de tener previamente una hoja de vida del vehículo</p>\n        </ion-card>\n    </div>\n\n</ion-content>");

/***/ }),

/***/ "ZDfU":
/*!************************************************************************!*\
  !*** ./src/app/pages/Facturas/factura-inicio/factura-inicio.module.ts ***!
  \************************************************************************/
/*! exports provided: FacturaInicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaInicioPageModule", function() { return FacturaInicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _factura_inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./factura-inicio-routing.module */ "KCVw");
/* harmony import */ var _factura_inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factura-inicio.page */ "Luee");







let FacturaInicioPageModule = class FacturaInicioPageModule {
};
FacturaInicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _factura_inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["FacturaInicioPageRoutingModule"]
        ],
        declarations: [_factura_inicio_page__WEBPACK_IMPORTED_MODULE_6__["FacturaInicioPage"]]
    })
], FacturaInicioPageModule);



/***/ })

}]);
//# sourceMappingURL=Facturas-factura-inicio-factura-inicio-module.js.map