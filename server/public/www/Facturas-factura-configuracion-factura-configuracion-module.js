(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Facturas-factura-configuracion-factura-configuracion-module"],{

/***/ "A/kI":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/Facturas/factura-configuracion/factura-configuracion-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: FacturaConfiguracionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaConfiguracionPageRoutingModule", function() { return FacturaConfiguracionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _factura_configuracion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factura-configuracion.page */ "Xbuh");




const routes = [
    {
        path: '',
        component: _factura_configuracion_page__WEBPACK_IMPORTED_MODULE_3__["FacturaConfiguracionPage"]
    }
];
let FacturaConfiguracionPageRoutingModule = class FacturaConfiguracionPageRoutingModule {
};
FacturaConfiguracionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FacturaConfiguracionPageRoutingModule);



/***/ }),

/***/ "AGQj":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Facturas/factura-configuracion/factura-configuracion.page.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"oscuro\">\n        <ion-back-button slot=\"start\" icon=\"chevron-back-outline\" defaultHref=\"/central/menu/factura\"></ion-back-button>\n        <ion-title>Configuración</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"ion-padding\" *ngIf=\"nuevo\">\n        <ion-button expand=\"block\" mode=\"ios\" color=\"success\" (click)=\"habilitar()\">ABRIR CONFIGURACIÓN</ion-button>\n    </div>\n\n    <ion-list *ngIf=\"mostrar\">\n        <ion-item lines=\"none\" mode=\"ios\">\n            <ion-label>NIT DE LA EMPRESA</ion-label>\n\n        </ion-item>\n        <ion-item mode=\"ios\">\n            <ion-input placeholder=\"Escribir\" [(ngModel)]=\"nit\"></ion-input>\n        </ion-item>\n\n\n        <ion-item lines=\"none\" mode=\"ios\">\n            <ion-label>DIRECCIÓN DE LA EMPRESA</ion-label>\n\n        </ion-item>\n        <ion-item mode=\"ios\">\n            <ion-input placeholder=\"Escribir\" [(ngModel)]=\"direccion\"></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"none\" mode=\"ios\">\n            <ion-label>RÉGIMEN DE LA EMPRESA</ion-label>\n\n        </ion-item>\n        <ion-item mode=\"ios\">\n            <ion-select placeholder=\"Seleccionar\" okText=\"Aceptar\" cancelText=\"Cancelar\" [value]=\"regimen\" (ionChange)=\"regimenc( $event )\">\n                <ion-select-option value=\"Régimen simplificado\">Régimen simplificado</ion-select-option>\n                <ion-select-option value=\"Régimen simplificado\">Régimen común</ion-select-option>\n            </ion-select>\n        </ion-item>\n\n\n        <ion-item lines=\"none\" mode=\"ios\">\n            <ion-label>TITULAR DE LA EMPRESA (OPCIONAL)</ion-label>\n\n        </ion-item>\n        <ion-item mode=\"ios\">\n            <ion-input placeholder=\"Escribir\" [(ngModel)]=\"titular\"></ion-input>\n        </ion-item>\n\n        <ion-item class=\"sinfondo\" lines=\"none\" mode=\"ios\">\n            <ion-label>\n                <div class=\"flexbet\">\n                    CONSECUTIVO <strong>{{ consecutivo }}</strong>\n                </div>\n            </ion-label>\n        </ion-item>\n\n        <ion-item lines=\"none\" mode=\"ios\" color=\"light\">\n            <ion-label>HABILITAR IVA</ion-label>\n            <ion-toggle [checked]=\"iva\" slot=\"end\" color=\"success\" mode=\"ios\" (ionChange)=\"cambiar( $event )\"></ion-toggle>\n\n        </ion-item> <br>\n\n        <ion-item *ngIf=\"iva\" lines=\"none\" mode=\"ios\">\n            <ion-label>PORCENTAJE DEL IVA</ion-label>\n\n        </ion-item>\n        <ion-item *ngIf=\"iva\" mode=\"ios\">\n            <ion-input type=\"number\" placeholder=\"Escribir\" [(ngModel)]=\"ivaValor\"></ion-input>\n        </ion-item> <br>\n\n        <ion-button expand=\"block\" mode=\"ios\" color=\"secondary\" (click)=\"guardar()\">GUDARDAR CONFIGURACIÓN</ion-button>\n    </ion-list>\n\n\n\n</ion-content>");

/***/ }),

/***/ "B9W8":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/Facturas/factura-configuracion/factura-configuracion.module.ts ***!
  \**************************************************************************************/
/*! exports provided: FacturaConfiguracionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaConfiguracionPageModule", function() { return FacturaConfiguracionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _factura_configuracion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./factura-configuracion-routing.module */ "A/kI");
/* harmony import */ var _factura_configuracion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factura-configuracion.page */ "Xbuh");







let FacturaConfiguracionPageModule = class FacturaConfiguracionPageModule {
};
FacturaConfiguracionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _factura_configuracion_routing_module__WEBPACK_IMPORTED_MODULE_5__["FacturaConfiguracionPageRoutingModule"]
        ],
        declarations: [_factura_configuracion_page__WEBPACK_IMPORTED_MODULE_6__["FacturaConfiguracionPage"]]
    })
], FacturaConfiguracionPageModule);



/***/ }),

/***/ "F3m4":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/Facturas/factura-configuracion/factura-configuracion.page.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flexbet {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.cien {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZmFjdHVyYS1jb25maWd1cmFjaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoiZmFjdHVyYS1jb25maWd1cmFjaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4YmV0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2llbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "Xbuh":
/*!************************************************************************************!*\
  !*** ./src/app/pages/Facturas/factura-configuracion/factura-configuracion.page.ts ***!
  \************************************************************************************/
/*! exports provided: FacturaConfiguracionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaConfiguracionPage", function() { return FacturaConfiguracionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_factura_configuracion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./factura-configuracion.page.html */ "AGQj");
/* harmony import */ var _factura_configuracion_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factura-configuracion.page.scss */ "F3m4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Api_Facturas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/Api/Facturas.service */ "6POk");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");







let FacturaConfiguracionPage = class FacturaConfiguracionPage {
    constructor(almacenamiento, apiFactura, toast) {
        this.almacenamiento = almacenamiento;
        this.apiFactura = apiFactura;
        this.toast = toast;
        this.nuevo = false;
        this.mostrar = false;
        this.nit = '';
        this.direccion = '';
        this.regimen = '';
        this.titular = '';
        this.iva = false;
        this.ivaValor = 0;
        this.consecutivo = '';
        this.proceso = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.mostrar = false;
        this.consultar();
    }
    consultar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiFactura.consultarConfiguracion(info.token).subscribe((data) => {
                    if (data.exe) {
                        if (!data.response) {
                            this.nuevo = true;
                        }
                        else {
                            // console.log(data)
                            this.regimen = data.response.regimen;
                            this.direccion = data.response.direccion;
                            this.titular = data.response.titular;
                            this.nit = data.response.nit;
                            this.iva = data.response.iva;
                            this.ivaValor = data.response.valorIva;
                            this.consecutivo = data.response.consecutivo;
                            this.mostrar = true;
                        }
                    }
                    else {
                        this.toast.toastError('No se pudo consultar la información de la configuración, intentelo mpas tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo consultar la información de la configuración, intentelo mpas tarde');
                });
            }
        });
    }
    habilitar() {
        this.nuevo = false;
        this.mostrar = true;
    }
    cambiar(event) {
        // console.log(event);
        this.iva = event.detail.checked;
    }
    regimenc(event) {
        this.regimen = event.detail.value;
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                // tslint:disable-next-line:max-line-length
                this.apiFactura.editarConfiguracion(info.token, { regimen: this.regimen, direccion: this.direccion, titular: this.titular, iva: this.iva, nit: this.nit, valorIva: this.ivaValor }).subscribe((data) => {
                    if (data.exe) {
                        this.toast.toastExitoso('Configuración actualizada');
                    }
                    else {
                        this.toast.toastError('No se pudo guardar la información de la configuración, intentelo mpas tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo guardar la información de la configuración, intentelo mpas tarde');
                });
            }
        });
    }
};
FacturaConfiguracionPage.ctorParameters = () => [
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"] },
    { type: _providers_Api_Facturas_service__WEBPACK_IMPORTED_MODULE_5__["FacturasService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__["ToastServices"] }
];
FacturaConfiguracionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-factura-configuracion',
        template: _raw_loader_factura_configuracion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_factura_configuracion_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FacturaConfiguracionPage);



/***/ })

}]);
//# sourceMappingURL=Facturas-factura-configuracion-factura-configuracion-module.js.map