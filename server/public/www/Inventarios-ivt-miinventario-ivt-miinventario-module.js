(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Inventarios-ivt-miinventario-ivt-miinventario-module"],{

/***/ "BU1H":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-miinventario/ivt-miinventario.page.ts ***!
  \*****************************************************************************/
/*! exports provided: IvtMiinventarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvtMiinventarioPage", function() { return IvtMiinventarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ivt_miinventario_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ivt-miinventario.page.html */ "LVt/");
/* harmony import */ var _ivt_miinventario_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ivt-miinventario.page.scss */ "DwjI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Api/Inventarios.service */ "5yQV");







let IvtMiinventarioPage = class IvtMiinventarioPage {
    constructor(almacenamiento, active, ivtApi) {
        this.almacenamiento = almacenamiento;
        this.active = active;
        this.ivtApi = ivtApi;
        this.id = '';
        this.ver = false;
        this.creador = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.id = this.active.snapshot.paramMap.get('id');
        this.iniciar();
    }
    iniciar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.ivtApi.leerInventario(info.token, this.id).subscribe((data) => {
                    if (data.exe) {
                        this.creador = data.response.creador;
                        if (data.response.creador !== info._id) {
                            this.ver = false;
                        }
                        else {
                            this.ver = true;
                        }
                    }
                });
            }
        });
    }
};
IvtMiinventarioPage.ctorParameters = () => [
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_6__["InventariosService"] }
];
IvtMiinventarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ivt-miinventario',
        template: _raw_loader_ivt_miinventario_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ivt_miinventario_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IvtMiinventarioPage);



/***/ }),

/***/ "DwjI":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-miinventario/ivt-miinventario.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".opts {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.opts ion-card {\n  width: calc(50% - 10px);\n  margin: 10px 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.5s;\n}\n\n.opts ion-card ion-card-title {\n  font-size: 22px;\n  text-align: center;\n}\n\n.opts ion-card ion-card-header {\n  text-align: center;\n  padding: 5px;\n}\n\n@media screen and (min-width: 800px) {\n  .opts ion-card {\n    width: calc(33.33% - 10px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaXZ0LW1paW52ZW50YXJpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSwwQkFBQTtFQUNOO0FBQ0YiLCJmaWxlIjoiaXZ0LW1paW52ZW50YXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3B0cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ub3B0cyBpb24tY2FyZCB7XHJcbiAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgIG1hcmdpbjogMTBweCA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbn1cclxuXHJcbi5vcHRzIGlvbi1jYXJkIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm9wdHMgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAgIC5vcHRzIGlvbi1jYXJkIHtcclxuICAgICAgICB3aWR0aDogY2FsYygzMy4zMyUgLSAxMHB4KTtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "LVt/":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Inventarios/ivt-miinventario/ivt-miinventario.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"success\">\n\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"/central/menu/ivt-inicio\"></ion-back-button>\n        </ion-buttons>\n\n        <ion-title>Herramientas</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\">\n\n    <ion-list>\n\n\n\n        <div class=\"opts\">\n            <ion-card mode=\"ios\" [routerLink]=\"['proveedores', id]\">\n                <ion-card-header><img src=\"/assets/Proveedores.png\" width=\"100px\"></ion-card-header>\n                <ion-card-title>Proveedores</ion-card-title>\n            </ion-card>\n\n            <ion-card mode=\"ios\" *ngIf=\"ver\" [routerLink]=\"['empleados', id]\">\n                <ion-card-header><img src=\"/assets/Empleados.png\" width=\"100px\"></ion-card-header>\n                <ion-card-title>Empleados</ion-card-title>\n            </ion-card>\n\n            <ion-card mode=\"ios\" [routerLink]=\"['categorias', id]\">\n                <ion-card-header><img src=\"/assets/Categorias.png\" width=\"100px\"></ion-card-header>\n                <ion-card-title>Categorias</ion-card-title>\n            </ion-card>\n\n            <ion-card mode=\"ios\" [routerLink]=\"['productos', id]\">\n                <ion-card-header><img src=\"/assets/Productos.png\" width=\"100px\"></ion-card-header>\n                <ion-card-title>Productos</ion-card-title>\n            </ion-card>\n\n\n            <ion-card mode=\"ios\" [routerLink]=\"['entradas', id]\">\n                <ion-card-header><img src=\"/assets/Entradas.png\" width=\"100px\"></ion-card-header>\n                <ion-card-title>Entradas</ion-card-title>\n            </ion-card>\n\n            <ion-card mode=\"ios\" [routerLink]=\"['salidas', id, creador]\">\n                <ion-card-header><img src=\"/assets/Salidas.png\" width=\"100px\"></ion-card-header>\n                <ion-card-title>Salidas</ion-card-title>\n            </ion-card>\n\n            <ion-card mode=\"ios\" *ngIf=\"ver\" [routerLink]=\"['ivt-movimientos', id]\">\n                <ion-card-header><img src=\"/assets/Movimientos.png\" width=\"100px\"></ion-card-header>\n                <ion-card-title>Movimientos</ion-card-title>\n            </ion-card>\n\n            <ion-card mode=\"ios\" *ngIf=\"ver\" [routerLink]=\"['ivt-configuracion', id]\">\n                <ion-card-header><img src=\"/assets/Configuracion.png\" width=\"100px\"></ion-card-header>\n                <ion-card-title>Configuración</ion-card-title>\n            </ion-card>\n\n            <ion-card mode=\"ios\" *ngIf=\"ver\" [routerLink]=\"['ivt-estadisticas', id]\">\n                <ion-card-header><img src=\"/assets/Estadisticas.png\" width=\"100px\"></ion-card-header>\n                <ion-card-title>Estadísticas</ion-card-title>\n            </ion-card>\n        </div>\n\n    </ion-list>\n\n</ion-content>");

/***/ }),

/***/ "V+2o":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-miinventario/ivt-miinventario.module.ts ***!
  \*******************************************************************************/
/*! exports provided: IvtMiinventarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvtMiinventarioPageModule", function() { return IvtMiinventarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ivt_miinventario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ivt-miinventario-routing.module */ "gHPO");
/* harmony import */ var _ivt_miinventario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ivt-miinventario.page */ "BU1H");







let IvtMiinventarioPageModule = class IvtMiinventarioPageModule {
};
IvtMiinventarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ivt_miinventario_routing_module__WEBPACK_IMPORTED_MODULE_5__["IvtMiinventarioPageRoutingModule"]
        ],
        declarations: [_ivt_miinventario_page__WEBPACK_IMPORTED_MODULE_6__["IvtMiinventarioPage"]]
    })
], IvtMiinventarioPageModule);



/***/ }),

/***/ "gHPO":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-miinventario/ivt-miinventario-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: IvtMiinventarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvtMiinventarioPageRoutingModule", function() { return IvtMiinventarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ivt_miinventario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ivt-miinventario.page */ "BU1H");




const routes = [
    {
        path: '',
        component: _ivt_miinventario_page__WEBPACK_IMPORTED_MODULE_3__["IvtMiinventarioPage"]
    }
];
let IvtMiinventarioPageRoutingModule = class IvtMiinventarioPageRoutingModule {
};
IvtMiinventarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IvtMiinventarioPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=Inventarios-ivt-miinventario-ivt-miinventario-module.js.map