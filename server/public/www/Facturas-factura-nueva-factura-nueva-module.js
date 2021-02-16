(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Facturas-factura-nueva-factura-nueva-module"],{

/***/ "1Mwc":
/*!********************************************************************!*\
  !*** ./src/app/pages/Facturas/factura-nueva/factura-nueva.page.ts ***!
  \********************************************************************/
/*! exports provided: FacturaNuevaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaNuevaPage", function() { return FacturaNuevaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_factura_nueva_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./factura-nueva.page.html */ "GPlX");
/* harmony import */ var _factura_nueva_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factura-nueva.page.scss */ "Mnwi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _providers_Api_Facturas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Api/Facturas.service */ "6POk");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../providers/Utilidades/LoadingService.service */ "r3ab");
/* harmony import */ var _modal_factura_modal_factura_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modal-factura/modal-factura.page */ "Gc/K");










let FacturaNuevaPage = class FacturaNuevaPage {
    constructor(almacenamiento, toast, apiFactura, modalCtrl, loading, alert) {
        this.almacenamiento = almacenamiento;
        this.toast = toast;
        this.apiFactura = apiFactura;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.alert = alert;
        this.facturas = [];
        this.car = true;
        this.load = false;
        this.nuevo = false;
        this.mostrar = false;
        this.nit = '';
        this.direccion = '';
        this.regimen = '';
        this.titular = '';
        this.iva = false;
        this.valorIva = 0;
        this.id = '';
        this.mensaje = true;
        this.desde = 0;
        this.patron = '';
    }
    ngOnInit() {
        setTimeout(() => {
            this.mensaje = false;
        }, 7000);
    }
    ionViewWillEnter() {
        this.mostrar = false;
        this.consultar();
    }
    refrescando(event) {
        this.cargarFacturas().then(() => {
            event.target.complete();
        }).catch(() => event.target.complete());
    }
    cargarFacturas() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.desde = 0;
            if (this.load) {
                this.infinite.disabled = false;
            }
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiFactura.consultarFacturas(info.token, { desde: this.desde }).subscribe((data) => {
                    if (data.exe) {
                        this.facturas = data.response;
                    }
                    else {
                        this.toast.toastError('No se pudo cargar las facturas, intentelo más tarde');
                    }
                    this.load = true;
                }, (err) => {
                    this.toast.toastError('No se pudo cargar las facturas, intentelo más tarde');
                });
            }
        });
    }
    buscar(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // // console.log(event.detail, 'epale');
            if (event.detail.value !== '') {
                this.desde = 0;
                this.infinite.disabled = false;
                this.patron = event.detail.value;
                const info = yield this.almacenamiento.obtenerToken();
                if (info) {
                    this.apiFactura.consultarFacturas(info.token, { desde: this.desde, patron: this.patron }).subscribe((data) => {
                        // // console.log(data, 'mi data');
                        if (data.exe) {
                            this.facturas = data.response;
                            if (data.response.length === 0) {
                                this.desde = 0;
                            }
                        }
                        else {
                            this.toast.toastError('No se pudo realizar la búsqueda, intentelo más tarde');
                        }
                    }, (err) => {
                        this.toast.toastError('No se pudo realizar la búsqueda, intentelo más tarde');
                    });
                }
            }
            else {
                this.desde = 0;
            }
        });
    }
    loadData(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // event.target.complete()
            this.desde = this.desde + 15;
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                if (this.patron === '') {
                    this.apiFactura.consultarFacturas(info.token, { desde: this.desde, patron: this.patron }).subscribe((data) => {
                        // // console.log(data, 'CARGADA OFICIAL');
                        if (data.exe) {
                            if (data.response.length > 0) {
                                data.response.forEach((hoja) => {
                                    this.facturas.push(hoja);
                                });
                                event.target.complete();
                            }
                            else {
                                event.target.disabled = true;
                                this.desde = 0;
                            }
                        }
                        else {
                            this.toast.toastError('No se pudo traer las hojas de vida, inténtelo más tarde.');
                        }
                    }, (err) => {
                        this.toast.toastError('No se pudo traer las hojas de vida, inténtelo más tarde.');
                    });
                }
                else {
                    // tslint:disable-next-line:max-line-length
                    // // console.log(this.desde, 'pli');
                    this.apiFactura.consultarFacturas(info.token, { desde: this.desde, patron: this.patron }).subscribe((data) => {
                        // // console.log(data, 'mi data 2', this.desde);
                        if (data.exe) {
                            if (data.response.length > 0) {
                                data.response.forEach((hoja) => {
                                    this.facturas.push(hoja);
                                });
                                event.target.complete();
                            }
                            else {
                                event.target.disabled = true;
                                this.desde = 0;
                            }
                        }
                        else {
                            this.toast.toastError('No se pudo realizar la búsqueda, intentelo más tarde');
                        }
                    }, (err) => {
                        this.toast.toastError('No se pudo realizar la búsqueda, intentelo más tarde');
                    });
                }
            }
        });
    }
    consultar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiFactura.consultarConfiguracion(info.token).subscribe((data) => {
                    // console.log(data);
                    if (data.exe) {
                        if (!data.response) {
                            this.nuevo = true;
                        }
                        else {
                            // // console.log(data)
                            this.regimen = data.response.regimen;
                            this.direccion = data.response.direccion;
                            this.titular = data.response.titular;
                            this.nit = data.response.nit;
                            this.iva = data.response.iva;
                            this.valorIva = data.response.valorIva;
                            this.id = data.response._id;
                            this.mostrar = true;
                            this.cargarFacturas();
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
    abrir() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_factura_modal_factura_page__WEBPACK_IMPORTED_MODULE_9__["ModalFacturaPage"],
                componentProps: {
                    data: {
                        iva: this.iva,
                        regimen: this.regimen,
                        direccion: this.direccion,
                        nit: this.nit,
                        valorIva: this.valorIva,
                        id: this.id
                    }
                }
            });
            yield modal.present();
            const cerrado = yield modal.onWillDismiss();
            if (cerrado) {
                if (cerrado.data) {
                    if (cerrado.data.exe) {
                        this.cargarFacturas();
                    }
                }
            }
        });
    }
    editar(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            id.iva = this.iva;
            const modal = yield this.modalCtrl.create({
                component: _modal_factura_modal_factura_page__WEBPACK_IMPORTED_MODULE_9__["ModalFacturaPage"],
                componentProps: {
                    info: id
                }
            });
            yield modal.present();
            const cerrado = yield modal.onWillDismiss();
            if (cerrado) {
                if (cerrado.data) {
                    if (cerrado.data.exe) {
                        this.cargarFacturas();
                    }
                }
            }
        });
    }
    alerta(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Correo electrónico',
                message: 'Escriba el correo electrónico donde se enviará el documento pdf de la factura',
                inputs: [
                    {
                        type: 'text',
                        name: 'correo'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel'
                    },
                    {
                        text: 'Enviar',
                        handler: (data) => {
                            this.pdf(data.correo, id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    pdf(correo, id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            this.loading.cargaProcesos('Creando Factura y enviandola al correo');
            if (info) {
                this.apiFactura.enviarrFacturas(info.token, { id, correo }).subscribe((data) => {
                    // // console.log(data, 'respuesta')
                    if (data.exe) {
                        this.toast.toastExitoso('Factura generada y enviada al correo electrónico del cliente');
                    }
                    else {
                        this.toast.toastError('No se pudo enviar la factura, intentelo mpas tarde');
                    }
                    this.loading.finalizarCargado();
                }, (err) => {
                    this.loading.finalizarCargado();
                    this.toast.toastError('No se pudo enviar la factura, intentelo mpas tarde');
                });
            }
        });
    }
};
FacturaNuevaPage.ctorParameters = () => [
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__["ToastServices"] },
    { type: _providers_Api_Facturas_service__WEBPACK_IMPORTED_MODULE_6__["FacturasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] }
];
FacturaNuevaPage.propDecorators = {
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['inifinito', { static: false },] }]
};
FacturaNuevaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-factura-nueva',
        template: _raw_loader_factura_nueva_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_factura_nueva_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FacturaNuevaPage);



/***/ }),

/***/ "3ayL":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Facturas/modal-factura/modal-factura.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"oscuro\">\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"cerrar()\">\n                <ion-icon name=\"chevron-back-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Crear Factura</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"cargador\" *ngIf=\"!cargador\">\n        <ion-spinner name=\"crescent\" color=\"barra\"></ion-spinner>\n        <strong>Cargando la interfaz...</strong>\n    </div>\n\n    <div class=\"\" *ngIf=\"vista === 1\">\n        <ion-list *ngIf=\" data || info\">\n            <ion-item color=\"light\">\n                <ion-label>Añadir un nuevo item</ion-label>\n                <ion-buttons slot=\"end\">\n                    <ion-button (click)=\"crear()\">\n                        <ion-icon name=\"add-outline\" slot=\"icon-only\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n            </ion-item>\n\n            <div class=\"divider\"></div>\n            <ion-item-sliding *ngFor=\"let item of items; let i = index;\">\n                <ion-item>\n                    <ion-label class=\"ion-text-wrap\">\n                        <div>{{ item.item }}</div>\n                        <div class=\"fl\"><strong>Cantidad: </strong> <span>{{item.cantidad }}</span></div>\n                        <div class=\"fl\"><strong>Valor unitario: </strong> <span>${{ item.valoru | decimales: 'es-CO' }}</span></div>\n                        <div class=\"fl\"><strong>Total: </strong><span> ${{ (item.total | decimales: 'es-CO') }}</span></div>\n                    </ion-label>\n                </ion-item>\n                <ion-item-options side=\"end\">\n                    <ion-item-option color=\"danger\" (click)=\"eliminar(i)\">\n                        <ion-icon name=\"trash-outline\" slot=\"icon-only\"></ion-icon>\n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n\n            <div class=\"divider\"></div>\n\n            <div class=\"td\" *ngFor=\"let tl of totales\">\n                <div class=\"valores\" *ngIf=\"items.length > 0 && carga\">\n                    <h3><strong class=\"verdei\">Subtotal: </strong> <span>${{ tl.subtotal | decimales: 'es-CO' }}</span></h3>\n                </div>\n                <div *ngIf=\"data\">\n                    <div class=\"valores\" *ngIf=\"items.length > 0 && data.iva\">\n                        <h3><strong class=\"rojoi\">Iva: </strong> <span>${{ tl.iva | decimales: 'es-CO' }}</span></h3>\n                    </div>\n                </div>\n                <div *ngIf=\"info\">\n                    <div class=\"valores\" *ngIf=\"items.length > 0 && info.iva\">\n                        <h3><strong class=\"rojoi\">Iva: </strong> <span>${{ tl.iva | decimales: 'es-CO' }}</span></h3>\n                    </div>\n                </div>\n                <div class=\"valores\" *ngIf=\"items.length > 0 && carga\">\n                    <h3><strong>Total: </strong> <span>${{ tl.total | decimales: 'es-CO' }}</span></h3>\n                </div>\n            </div>\n\n            <div class=\"divider\"></div>\n            <ion-item mode=\"ios\">\n                <ion-icon slot=\"start\" name=\"alert-circle-outline\" color=\"danger\"></ion-icon>\n                <ion-input type=\"text\" placeholder=\"Nombre del cliente\" [(ngModel)]=\"cliente\"></ion-input>\n            </ion-item>\n            <ion-item mode=\"ios\">\n                <ion-icon slot=\"start\" name=\"alert-circle-outline\" color=\"blanco\"></ion-icon>\n                <ion-input type=\"text\" placeholder=\"Teléfono del cliente\" [(ngModel)]=\"telefono\"></ion-input>\n            </ion-item>\n            <ion-item mode=\"ios\">\n                <ion-icon slot=\"start\" name=\"alert-circle-outline\" color=\"blanco\"></ion-icon>\n                <ion-input type=\"text\" placeholder=\"Dirección del cliente\" [(ngModel)]=\"direccion\"></ion-input>\n            </ion-item>\n            <ion-item mode=\"ios\">\n                <ion-icon slot=\"start\" name=\"alert-circle-outline\" color=\"danger\"></ion-icon>\n                <ion-input type=\"text\" placeholder=\"Cédula o Nit del cliente\" [(ngModel)]=\"cc\"></ion-input>\n            </ion-item>\n            <ion-item mode=\"ios\">\n                <ion-icon slot=\"start\" name=\"alert-circle-outline\" color=\"blanco\"></ion-icon>\n                <ion-input type=\"text\" placeholder=\"Ciudad del cliente\" [(ngModel)]=\"ciudad\"></ion-input>\n            </ion-item>\n\n            <div class=\"divider\"></div>\n            <ion-button mode=\"ios\" color=\"barra\" expand=\"block\" (click)=\"guardar()\">CREAR FACTURA</ion-button>\n        </ion-list>\n    </div>\n\n    <div *ngIf=\"vista === 2\">\n\n    </div>\n\n</ion-content>");

/***/ }),

/***/ "F/QZ":
/*!******************************************************************************!*\
  !*** ./src/app/pages/Facturas/factura-nueva/factura-nueva-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: FacturaNuevaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaNuevaPageRoutingModule", function() { return FacturaNuevaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _factura_nueva_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factura-nueva.page */ "1Mwc");




const routes = [
    {
        path: '',
        component: _factura_nueva_page__WEBPACK_IMPORTED_MODULE_3__["FacturaNuevaPage"]
    }
];
let FacturaNuevaPageRoutingModule = class FacturaNuevaPageRoutingModule {
};
FacturaNuevaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FacturaNuevaPageRoutingModule);



/***/ }),

/***/ "GPlX":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Facturas/factura-nueva/factura-nueva.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"oscuro\">\n        <ion-back-button slot=\"start\" icon=\"chevron-back-outline\" defaultHref=\"/central/menu/factura\"></ion-back-button>\n        <ion-title>Crear Factura</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-list *ngIf=\"mensaje\">\n        <ion-item-divider color=\"barra\">\n            <ion-label class=\"ion-text-wrap\">La factura se estructura de acuerdo a los parámetros de configuración establecidos</ion-label>\n        </ion-item-divider>\n    </ion-list>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-searchbar debounce=\"300\" mode=\"ios\" placeholder=\"Buscar Facturas\" (ionChange)=\"buscar($event)\"></ion-searchbar>\n\n\n    <div class=\"divider\"></div>\n\n    <div class=\"cen\" *ngIf=\"!load\" style=\"text-align: center;\">\n        <ion-spinner name=\"crescent\" color=\"oscuro\"></ion-spinner> <br>\n        <h3 class=\"tituloGrande\">Cargando información...</h3>\n    </div>\n\n    <div class=\"cen\" *ngIf=\"facturas.length === 0 && load\">\n        <img src=\"/assets/NuevaFactura.png\" width=\"100px\" alt=\"\">\n        <h3 class=\"tituloGrande\">No tiene facturas creadas hasta el momento</h3>\n        <ion-button mode=\"ios\" shape=\"round\" color=\"success\" (click)=\"abrir()\">Crear Factura</ion-button>\n    </div>\n\n    <ion-list>\n        <ion-item-sliding *ngFor=\"let factura of facturas\">\n            <ion-item>\n\n                <ion-label class=\"ion-text-wrap\">\n                    <div class=\"fl\">\n                        <div class=\"caja\">FACTURA NÚMERO {{ factura.consecutivo }}</div>\n                    </div>\n                    <div class=\"flex\"><strong>Total: </strong> <span>${{ factura.total | decimales: 'es-CO'}}</span></div>\n                    <div class=\"flex\"><strong>Cliente: </strong> <span>{{ factura.cliente }}</span></div>\n                    <div class=\"flex\"><strong>Nit o CC: </strong> <span>{{ factura.cc }}</span></div>\n                </ion-label>\n            </ion-item>\n            <ion-item-options side=\"end\">\n                <ion-item-option color=\"medium\" (click)=\"alerta(factura._id)\">\n                    <ion-icon name=\"document-text-outline\" slot=\"icon-only\"></ion-icon>\n                </ion-item-option>\n                <ion-item-option color=\"warning\" (click)=\"editar(factura)\">\n                    <ion-icon name=\"pencil-outline\" slot=\"icon-only\"></ion-icon>\n                </ion-item-option>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n\n\n    <ion-infinite-scroll *ngIf=\"load\" #inifinito threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando Facturas...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <ion-fab *ngIf=\"facturas.length > 0\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button color=\"barra\" (click)=\"abrir()\">\n            <ion-icon name=\"add-outline\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n</ion-content>");

/***/ }),

/***/ "Gc/K":
/*!********************************************************************!*\
  !*** ./src/app/pages/Facturas/modal-factura/modal-factura.page.ts ***!
  \********************************************************************/
/*! exports provided: ModalFacturaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFacturaPage", function() { return ModalFacturaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_factura_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-factura.page.html */ "3ayL");
/* harmony import */ var _modal_factura_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-factura.page.scss */ "mjzI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _providers_Api_Facturas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/Api/Facturas.service */ "6POk");








let ModalFacturaPage = class ModalFacturaPage {
    constructor(modalCtrl, almacenamiento, toast, alertCtrl, apiFactura) {
        this.modalCtrl = modalCtrl;
        this.almacenamiento = almacenamiento;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.apiFactura = apiFactura;
        this.items = [];
        this.totales = [];
        this.subtotal = 0;
        this.iva = 0;
        this.total = 0;
        this.cliente = '';
        this.telefono = '0';
        this.direccion = '';
        this.cc = '';
        this.ciudad = '';
        this.id = '';
        this.carga = false;
        this.vista = 1;
        this.cargador = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        console.log(this.info);
        this.cargador = true;
        if (this.info) {
            this.vista = 1;
            this.items = this.info.lista;
            this.subtotal = this.info.subtotal;
            this.total = this.info.total;
            this.iva = this.info.ivatotal;
            this.ciudad = this.info.ciudad;
            this.telefono = this.info.tel;
            this.cc = this.info.nitcc;
            this.cliente = this.info.cliente;
            this.direccion = this.info.direccion;
            this.carga = true;
            this.totales.push({
                total: this.total,
                subtotal: this.subtotal,
                iva: this.iva
            });
            console.log(this.totales);
        }
        else {
            this.vista = 1;
        }
    }
    cerrar() {
        this.modalCtrl.dismiss();
    }
    crear() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.alertCtrl.create({
                header: 'Crear Item',
                inputs: [
                    {
                        type: 'number',
                        name: 'cantidad',
                        placeholder: 'Ingrese la cantidad'
                    },
                    {
                        type: 'text',
                        name: 'item',
                        placeholder: 'Descripción'
                    },
                    {
                        type: 'number',
                        name: 'valoru',
                        placeholder: 'Ingrese el valor unitario'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                    },
                    {
                        text: 'Guardar',
                        handler: (data) => {
                            // // console.log(data);
                            data.total = data.cantidad * data.valoru;
                            this.items.push(data);
                            this.carga = false;
                            this.calculo();
                        }
                    }
                ]
            });
            yield info.present();
        });
    }
    eliminar(idx) {
        this.items.splice(idx, 1);
        this.calculo();
    }
    calculo() {
        this.subtotal = 0;
        this.total = 0;
        this.iva = 0;
        let sb = 0;
        this.totales = [];
        this.items.forEach((item) => {
            sb = sb + parseFloat(item.total);
        });
        this.subtotal = sb;
        if (this.data) {
            if (this.data.iva) {
                this.iva = this.subtotal * 0.19;
            }
        }
        else {
            if (this.info.iva) {
                this.iva = this.subtotal * 0.19;
            }
        }
        this.total = this.subtotal + this.iva;
        this.carga = true;
        this.totales.push({
            total: this.total,
            subtotal: this.subtotal,
            iva: this.iva
        });
        // // // console.log('data de la factura',  this.subtotal, this.total, this.iva, this.data.iva, this.items)
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.items.length > 0 && this.cliente !== '' && this.cc !== '') {
                const info = yield this.almacenamiento.obtenerToken();
                if (info) {
                    if (this.data) {
                        // tslint:disable-next-line:max-line-length
                        this.apiFactura.guardarConfiguracion(info.token, { cliente: this.cliente, direccion: this.direccion, telefono: this.telefono, iva: this.iva, cc: this.cc, ciudad: this.ciudad, subtotal: this.subtotal, total: this.total, lista: this.items, descuento: 0, idconfig: this.data.id }).subscribe((data) => {
                            if (data.exe) {
                                this.toast.toastExitoso('Factura actualizada con éxito');
                                this.modalCtrl.dismiss({
                                    exe: true
                                });
                            }
                            else {
                                this.toast.toastError('No se pudo guardar la información de la factura, intentelo mpas tarde');
                            }
                        }, (err) => {
                            this.toast.toastError('No se pudo guardar la información de la factura, intentelo mpas tarde');
                        });
                    }
                    else {
                        // tslint:disable-next-line:max-line-length
                        this.apiFactura.editarFactura(info.token, { id: this.info._id, cliente: this.cliente, direccion: this.direccion, telefono: this.telefono, iva: this.iva, cc: this.cc, ciudad: this.ciudad, subtotal: this.subtotal, total: this.total, lista: this.items, descuento: 0 }).subscribe((data) => {
                            if (data.exe) {
                                this.toast.toastExitoso('Factura actualizada con éxito');
                                this.modalCtrl.dismiss({
                                    exe: true
                                });
                            }
                            else {
                                this.toast.toastError('No se pudo actualizar la información de la factura, intentelo mpas tarde');
                            }
                        }, (err) => {
                            this.toast.toastError('No se pudo actualizar la información de la factura, intentelo mpas tarde');
                        });
                    }
                    // tslint:disable-next-line:max-line-length
                }
            }
            else {
                this.toast.toastError('La información requerida aún esta icompleta, veirifca el nombre del cliente, su cédula y la descripción de la factura');
            }
        });
    }
};
ModalFacturaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__["ToastServices"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _providers_Api_Facturas_service__WEBPACK_IMPORTED_MODULE_7__["FacturasService"] }
];
ModalFacturaPage.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalFacturaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-factura',
        template: _raw_loader_modal_factura_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_factura_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalFacturaPage);



/***/ }),

/***/ "Mnwi":
/*!**********************************************************************!*\
  !*** ./src/app/pages/Facturas/factura-nueva/factura-nueva.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cen {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.tituloGrande {\n  width: 300px;\n  text-align: center;\n}\n\n.fl {\n  display: flex;\n  justify-content: flex-end;\n  font-size: 18px !important;\n  color: red;\n  font-weight: bold;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding-bottom: 5px;\n}\n\n.fl .caja {\n  text-align: center;\n  width: 60%;\n  max-width: 80%;\n  background-color: #FCF3AA;\n  padding: 3px;\n}\n\n.flex {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZmFjdHVyYS1udWV2YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNKIiwiZmlsZSI6ImZhY3R1cmEtbnVldmEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXR1bG9HcmFuZGUge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uZmwgLmNhamEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjNBQTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxufVxyXG5cclxuLmZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufSJdfQ== */");

/***/ }),

/***/ "NaAF":
/*!**********************************************************************!*\
  !*** ./src/app/pages/Facturas/factura-nueva/factura-nueva.module.ts ***!
  \**********************************************************************/
/*! exports provided: FacturaNuevaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaNuevaPageModule", function() { return FacturaNuevaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _factura_nueva_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./factura-nueva-routing.module */ "F/QZ");
/* harmony import */ var _factura_nueva_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factura-nueva.page */ "1Mwc");
/* harmony import */ var _modal_factura_modal_factura_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal-factura/modal-factura.page */ "Gc/K");
/* harmony import */ var _modal_factura_modal_factura_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-factura/modal-factura.module */ "gaaM");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");










let FacturaNuevaPageModule = class FacturaNuevaPageModule {
};
FacturaNuevaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _modal_factura_modal_factura_page__WEBPACK_IMPORTED_MODULE_7__["ModalFacturaPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _factura_nueva_routing_module__WEBPACK_IMPORTED_MODULE_5__["FacturaNuevaPageRoutingModule"],
            _modal_factura_modal_factura_module__WEBPACK_IMPORTED_MODULE_8__["ModalFacturaPageModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"]
        ],
        declarations: [_factura_nueva_page__WEBPACK_IMPORTED_MODULE_6__["FacturaNuevaPage"]]
    })
], FacturaNuevaPageModule);



/***/ }),

/***/ "RBp+":
/*!******************************************************************************!*\
  !*** ./src/app/pages/Facturas/modal-factura/modal-factura-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ModalFacturaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFacturaPageRoutingModule", function() { return ModalFacturaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_factura_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-factura.page */ "Gc/K");




const routes = [
    {
        path: '',
        component: _modal_factura_page__WEBPACK_IMPORTED_MODULE_3__["ModalFacturaPage"]
    }
];
let ModalFacturaPageRoutingModule = class ModalFacturaPageRoutingModule {
};
ModalFacturaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalFacturaPageRoutingModule);



/***/ }),

/***/ "gaaM":
/*!**********************************************************************!*\
  !*** ./src/app/pages/Facturas/modal-factura/modal-factura.module.ts ***!
  \**********************************************************************/
/*! exports provided: ModalFacturaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFacturaPageModule", function() { return ModalFacturaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_factura_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-factura-routing.module */ "RBp+");
/* harmony import */ var _modal_factura_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-factura.page */ "Gc/K");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");








let ModalFacturaPageModule = class ModalFacturaPageModule {
};
ModalFacturaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_factura_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalFacturaPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_modal_factura_page__WEBPACK_IMPORTED_MODULE_6__["ModalFacturaPage"]]
    })
], ModalFacturaPageModule);



/***/ }),

/***/ "mjzI":
/*!**********************************************************************!*\
  !*** ./src/app/pages/Facturas/modal-factura/modal-factura.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".valores {\n  font-size: 24px !important;\n  margin: 0px !important;\n}\n\n.valores h3 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.verdei {\n  color: green;\n}\n\n.rojoi {\n  color: red;\n}\n\n.cargador {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.fl {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.td {\n  padding: 0 10px;\n  background: #FCF3AA;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbW9kYWwtZmFjdHVyYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoibW9kYWwtZmFjdHVyYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFsb3JlcyB7XHJcbiAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52YWxvcmVzIGgzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udmVyZGVpIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnJvam9pIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5jYXJnYWRvciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRkIHtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGQ0YzQUE7XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=Facturas-factura-nueva-factura-nueva-module.js.map