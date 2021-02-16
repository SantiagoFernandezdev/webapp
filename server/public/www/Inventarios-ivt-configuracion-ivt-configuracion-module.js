(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Inventarios-ivt-configuracion-ivt-configuracion-module"],{

/***/ "0iAW":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-configuracion/ivt-configuracion-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: IvtConfiguracionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvtConfiguracionPageRoutingModule", function() { return IvtConfiguracionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ivt_configuracion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ivt-configuracion.page */ "3sKi");




const routes = [
    {
        path: '',
        component: _ivt_configuracion_page__WEBPACK_IMPORTED_MODULE_3__["IvtConfiguracionPage"]
    }
];
let IvtConfiguracionPageRoutingModule = class IvtConfiguracionPageRoutingModule {
};
IvtConfiguracionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IvtConfiguracionPageRoutingModule);



/***/ }),

/***/ "3sKi":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-configuracion/ivt-configuracion.page.ts ***!
  \*******************************************************************************/
/*! exports provided: IvtConfiguracionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvtConfiguracionPage", function() { return IvtConfiguracionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ivt_configuracion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ivt-configuracion.page.html */ "krbK");
/* harmony import */ var _ivt_configuracion_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ivt-configuracion.page.scss */ "k6cR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/Api/Inventarios.service */ "5yQV");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









let IvtConfiguracionPage = class IvtConfiguracionPage {
    constructor(almacenamiento, ivtApi, toast, activeRoute, alertCtrl, router) {
        this.almacenamiento = almacenamiento;
        this.ivtApi = ivtApi;
        this.toast = toast;
        this.activeRoute = activeRoute;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.nombre = '';
        this.cambio = false;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.cargarCategorias();
    }
    refrescando(event) {
        this.cargarCategorias().then(() => {
            event.target.complete();
        }).catch(() => event.target.complete());
    }
    cargarCategorias() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.ivtApi.leerInventario(info.token, this.activeRoute.snapshot.paramMap.get('id')).subscribe((data) => {
                    if (data.exe) {
                        this.nombre = data.response.name;
                    }
                    else {
                        this.toast.toastError('No se pudo cargar los datos, intentelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo cargar los datos, intentelo más tarde');
                });
            }
        });
    }
    toggle(event) {
        // console.log(event)
        this.cambio = event.detail.checked;
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.cambio) {
                const alert = yield this.alertCtrl.create({
                    header: 'Cerrar periodo',
                    message: 'Al cerrar el periodo de inventario comezará un nuevo periodo a partir de ahora. Esta acción no se puede revsersar',
                    buttons: [
                        {
                            text: 'cancelar',
                            role: 'cancel'
                        },
                        {
                            text: 'Aceptar',
                            handler: () => {
                                this.actualizar(true);
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            else {
                this.actualizar(false);
            }
        });
    }
    actualizar(bool) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.ivtApi.actualizarInventario(info.token, { ivt: this.activeRoute.snapshot.paramMap.get('id'), nombre: this.nombre, exe: bool }).subscribe((data) => {
                    if (data.exe) {
                        this.toast.toastExitoso('Información actualizada!');
                        this.router.navigate(['/central/menu/ivt-miinventario', this.activeRoute.snapshot.paramMap.get('id')]);
                    }
                    else {
                        this.toast.toastError('No se pudo actualizar el inventario, intentelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo actualizar el inventario, intentelo más tarde');
                });
            }
        });
    }
};
IvtConfiguracionPage.ctorParameters = () => [
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"] },
    { type: _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_5__["InventariosService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__["ToastServices"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
IvtConfiguracionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ivt-configuracion',
        template: _raw_loader_ivt_configuracion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ivt_configuracion_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IvtConfiguracionPage);



/***/ }),

/***/ "k6cR":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-configuracion/ivt-configuracion.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdnQtY29uZmlndXJhY2lvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "krbK":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Inventarios/ivt-configuracion/ivt-configuracion.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"success\">\n        <ion-back-button slot=\"start\" icon=\"chevron-back-outline\" defaultHref=\"/central/menu/ivt-inicio\"></ion-back-button>\n        <ion-title>Configuración</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"divider\"></div>\n    <ion-list>\n        <ion-item mode=\"ios\">\n            <ion-label position=\"floating\">\n                Nombre del Inventario\n            </ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"nombre\"></ion-input>\n        </ion-item>\n\n        <ion-item mode=\"ios\">\n            <ion-label class=\"ion-text-wrap\">\n                Cerrar periodo de inventario\n            </ion-label>\n            <ion-toggle slot=\"end\" color=\"tertiary\" (ionChange)=\"toggle( $event )\"></ion-toggle>\n        </ion-item> <br>\n\n        <ion-button color=\"light\" expand=\"block\" mode=\"ios\" shape=\"round\" (click)=\"guardar()\">Guardar Cambios</ion-button>\n    </ion-list>\n\n</ion-content>");

/***/ }),

/***/ "u6L1":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-configuracion/ivt-configuracion.module.ts ***!
  \*********************************************************************************/
/*! exports provided: IvtConfiguracionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvtConfiguracionPageModule", function() { return IvtConfiguracionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ivt_configuracion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ivt-configuracion-routing.module */ "0iAW");
/* harmony import */ var _ivt_configuracion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ivt-configuracion.page */ "3sKi");







let IvtConfiguracionPageModule = class IvtConfiguracionPageModule {
};
IvtConfiguracionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ivt_configuracion_routing_module__WEBPACK_IMPORTED_MODULE_5__["IvtConfiguracionPageRoutingModule"]
        ],
        declarations: [_ivt_configuracion_page__WEBPACK_IMPORTED_MODULE_6__["IvtConfiguracionPage"]]
    })
], IvtConfiguracionPageModule);



/***/ })

}]);
//# sourceMappingURL=Inventarios-ivt-configuracion-ivt-configuracion-module.js.map