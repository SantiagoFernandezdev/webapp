(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Mapas-inicio-inicio-module"],{

/***/ "Gz8P":
/*!*************************************************************!*\
  !*** ./src/app/pages/Mapas/inicio/inicio-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: InicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function() { return InicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio.page */ "nT7X");




const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"]
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ "Jrtp":
/*!*****************************************************!*\
  !*** ./src/app/pages/Mapas/inicio/inicio.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".botones {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.aviso {\n  font-weight: 300;\n  font-size: 20px;\n  background-color: #FBF5C2;\n  padding: 25px 15px;\n  margin-bottom: 10px;\n  line-height: 1.5;\n}\n\nion-card {\n  width: calc(100% - 20px);\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.5s;\n}\n\nion-card ion-card-title {\n  font-size: 22px;\n  text-align: center;\n}\n\nion-card ion-card-header {\n  text-align: center;\n  padding: 5px;\n}\n\n.texto {\n  background-color: #FFFBE5;\n  width: 100%;\n  padding: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW5pY2lvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoiaW5pY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3RvbmVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5hdmlzbyB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRjVDMjtcclxuICAgIHBhZGRpbmc6IDI1cHggMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbn1cclxuXHJcbmlvbi1jYXJkIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnRleHRvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZCRTU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "eXPJ":
/*!*****************************************************!*\
  !*** ./src/app/pages/Mapas/inicio/inicio.module.ts ***!
  \*****************************************************/
/*! exports provided: InicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio-routing.module */ "Gz8P");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio.page */ "nT7X");







let InicioPageModule = class InicioPageModule {
};
InicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioPageRoutingModule"]
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
    })
], InicioPageModule);



/***/ }),

/***/ "nT7X":
/*!***************************************************!*\
  !*** ./src/app/pages/Mapas/inicio/inicio.page.ts ***!
  \***************************************************/
/*! exports provided: InicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPage", function() { return InicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inicio.page.html */ "z7WN");
/* harmony import */ var _inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio.page.scss */ "Jrtp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");





let InicioPage = class InicioPage {
    constructor(almacenamiento) {
        this.almacenamiento = almacenamiento;
        this.role = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.datos();
    }
    datos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.role = info.role;
            }
        });
    }
};
InicioPage.ctorParameters = () => [
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"] }
];
InicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inicio',
        template: _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InicioPage);



/***/ }),

/***/ "z7WN":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Mapas/inicio/inicio.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"oscuro\">\n        <ion-back-button slot=\"start\" icon=\"chevron-back-outline\" defaultHref=\"/central/menu\"></ion-back-button>\n        <ion-title>Selecciona</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n\n    <div class=\"aviso\">\n        <strong>Recuerde</strong> encender su GPS de lo contrario el módulo de mapas no funcionará de manera correcta. <br> <br>\n\n        <div *ngIf=\"role === 'USER_ROLE'\">\n            <strong>AVISO:</strong> Los datos de su ubicación solo serán vistos por usted, no se guardarán en la aplicación ni serán compartidos con terceros.\n        </div>\n\n        <div *ngIf=\"role === 'TALLER_ROLE'\">\n            <strong>AVISO:</strong> Los datos de la ubicación de sus sedes serán vistos por cualquier usuario en la aplicación.\n        </div>\n    </div>\n\n    <div class=\"botones\">\n\n        <ion-card mode=\"ios\" [routerLink]=\"['/central/menu/control-mapas']\">\n            <ion-card-header><img src=\"/assets/Puntos.png\" width=\"100px\"></ion-card-header>\n            <ion-card-title>Mapa de Negocios</ion-card-title>\n        </ion-card>\n\n        <ion-card mode=\"ios\" *ngIf=\"role === 'TALLER_ROLE'\" [routerLink]=\"['/central/menu/sedeMapa']\">\n            <ion-card-header><img src=\"/assets/Sedes.png\" width=\"100px\"></ion-card-header>\n            <ion-card-title>Georeferencia de sedes</ion-card-title>\n        </ion-card>\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=Mapas-inicio-inicio-module.js.map