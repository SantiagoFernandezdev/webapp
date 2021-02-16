(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pedidos-pedido-info-pedido-info-module"],{

/***/ "6V7b":
/*!*****************************************************************!*\
  !*** ./src/app/pages/Pedidos/pedido-info/pedido-info.module.ts ***!
  \*****************************************************************/
/*! exports provided: PedidoInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoInfoPageModule", function() { return PedidoInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pedido_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pedido-info-routing.module */ "brBa");
/* harmony import */ var _pedido_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pedido-info.page */ "K8uv");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");








let PedidoInfoPageModule = class PedidoInfoPageModule {
};
PedidoInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pedido_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["PedidoInfoPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_pedido_info_page__WEBPACK_IMPORTED_MODULE_6__["PedidoInfoPage"]]
    })
], PedidoInfoPageModule);



/***/ }),

/***/ "K8uv":
/*!***************************************************************!*\
  !*** ./src/app/pages/Pedidos/pedido-info/pedido-info.page.ts ***!
  \***************************************************************/
/*! exports provided: PedidoInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoInfoPage", function() { return PedidoInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pedido_info_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pedido-info.page.html */ "q8b+");
/* harmony import */ var _pedido_info_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pedido-info.page.scss */ "r04t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var src_app_providers_Api_Pedidos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/Api/Pedidos.service */ "HavB");
/* harmony import */ var src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/providers/Utilidades/ToastService.service */ "fmoy");











let PedidoInfoPage = class PedidoInfoPage {
    constructor(router, alert, almacenamiento, toast, apiPedidos, active, socket) {
        this.router = router;
        this.alert = alert;
        this.almacenamiento = almacenamiento;
        this.toast = toast;
        this.apiPedidos = apiPedidos;
        this.active = active;
        this.socket = socket;
        this.configurando = false;
        this.cargado = false;
        this.id = '';
        this.texto = '';
        this.estados = [];
        this.habilitado = false;
        this.domicilios = [];
        this.editar = false;
        this.cargan = false;
        this.frenar = false;
        this.escucharNotificacion().subscribe((data) => {
            if (data.action === 'pedido') {
                this.informaciónPedido();
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.frenar = false;
        this.informaciónPedido();
    }
    refrescando(event) {
        this.informaciónPedido().then(() => {
            event.detail.complete();
        }).catch(() => {
            event.detail.complete();
        });
    }
    informaciónPedido() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.id = info._id;
                this.apiPedidos.infoPedido(info.token, { id: this.active.snapshot.paramMap.get('id') }).subscribe((data) => {
                    console.log(data);
                    if (data.exe) {
                        if (data.response.length > 0) {
                            this.pedido = data.response[0];
                            this.domicilios = data.response[0].accesos.filter((item) => {
                                return item._id !== this.pedido.creador._id;
                            });
                            this.texto = data.response[0].descripcion;
                            this.estadosLista(this.pedido);
                            this.estadosMapa(this.pedido);
                        }
                    }
                    else {
                        this.toast.toastError('No se pudo consultar el pedido, inténtelo más tarde');
                        this.router.navigate(['/central/menu/']);
                    }
                    this.cargado = true;
                }, (err) => {
                    this.toast.toastError('No se pudo consultar el pedido, inténtelo más tarde');
                    this.router.navigate(['/central/menu/']);
                });
            }
        });
    }
    estadosLista(pedido) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiPedidos.consultarEstados(info.token, { pedido }).subscribe((data) => {
                    if (data.exe) {
                        console.log(data);
                        this.estados = data.response;
                    }
                    else {
                        this.toast.toastError('No se pudo consultar el pedido, inténtelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo consultar el pedido, inténtelo más tarde');
                });
            }
        });
    }
    estadosMapa(pedido) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiPedidos.consultarMapa(info.token, { pedido }).subscribe((data) => {
                    if (data.exe) {
                        console.log(data);
                        if (data.response.length > 0) {
                            this.mapa = data.response[0];
                            this.habilitado = this.mapa.apagar;
                        }
                        this.cargan = true;
                    }
                    else {
                        this.toast.toastError('No se pudo consultar el mapa, inténtelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo consultar el mapa, inténtelo más tarde');
                });
            }
        });
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                // tslint:disable-next-line:max-line-length
                this.apiPedidos.infoPedidoPut(info.token, { id: this.active.snapshot.paramMap.get('id'), texto: this.texto }).subscribe((data) => {
                    console.log(data);
                    if (data.exe) {
                        if (data.response) {
                            this.texto = data.response.descripcion;
                        }
                        this.toast.toastExitoso('Descripción actualizada');
                    }
                    else {
                        this.toast.toastError('No se pudo guardar la descripción del pedido, inténtelo más tarde');
                        this.router.navigate(['/central/menu/']);
                    }
                    this.cargado = true;
                }, (err) => {
                    this.toast.toastError('No se pudo guardar la descripción del pedido, inténtelo más tarde');
                    this.router.navigate(['/central/menu/']);
                });
            }
        });
    }
    cambiarEstado(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(event);
            const alert = yield this.alert.create({
                header: 'Cambiar Estado',
                // tslint:disable-next-line:max-line-length
                message: '¿Estas seguro de cambiar el estado del pedido a:' + event.detail.value,
                buttons: [
                    {
                        text: 'Cancelar',
                        cssClass: 'cancelarAlerta',
                        role: 'cancel',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Crear',
                        cssClass: 'botonalerta',
                        handler: (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const info = yield this.almacenamiento.obtenerToken();
                            if (info) {
                                // tslint:disable-next-line:max-line-length
                                this.apiPedidos.crearEstados(info.token, { pedido: this.pedido._id, estado: event.detail.value, destino: this.pedido.creador._id, usuarioID: this.pedido.creador.usuarioID }).subscribe((res) => {
                                    if (res.exe) {
                                        this.estados.push(res.response);
                                        this.toast.Especial('El pedido ha cambiado de estado');
                                        this.socket.emit('estadosPedido', { accesos: this.pedido.accesos, id: this.pedido._id, estado: event.detail.value });
                                    }
                                    else {
                                        this.toast.toastError('No se pudo cambiar el estado, inténtelo más tarde');
                                    }
                                }, (err) => {
                                    this.toast.toastError('No se pudo cambiar el estado, inténtelo más tarde');
                                });
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    habilitar(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(event.detail.checked);
            this.habilitado = event.detail.checked;
            if (!this.mapa) {
                const info = yield this.almacenamiento.obtenerToken();
                if (info) {
                    this.apiPedidos.crearMapa(info.token, { pedido: this.pedido._id, destino: this.pedido.creador._id }).subscribe((data) => {
                        if (data.exe) {
                            this.mapa = data.response;
                            this.habilitado = true;
                            this.toast.toastExitoso('Domicilio habilitado');
                        }
                        else {
                            this.toast.toastError('No se pudo crear el domicilio, inténtelo más tarde');
                        }
                    }, (err) => {
                        this.toast.toastError('No se pudo crear el domicilio, inténtelo más tarde');
                    });
                }
            }
            else {
                const info = yield this.almacenamiento.obtenerToken();
                if (info) {
                    if (this.editar) {
                        // tslint:disable-next-line:max-line-length
                        this.apiPedidos.editarMapaInfo(info.token, { id: this.mapa._id, destino: this.pedido.creador._id, apagar: event.detail.checked }).subscribe((data) => {
                            if (data.exe) {
                                this.mapa = data.response;
                                this.toast.toastExitoso('Domicilio editado');
                            }
                            else {
                                this.toast.toastError('No se pudo editar el domicilio, inténtelo más tarde');
                            }
                        }, (err) => {
                            this.toast.toastError('No se pudo editar el domicilio, inténtelo más tarde');
                        });
                    }
                    else {
                        this.editar = true;
                    }
                }
            }
        });
    }
    escogerdomiciliario(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(event);
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                // tslint:disable-next-line:max-line-length
                this.apiPedidos.editarMapaInfoD(info.token, { id: this.mapa._id, domiciliario: event.detail.value._id }).subscribe((data) => {
                    if (data.exe) {
                        this.mapa = data.response;
                        this.toast.toastExitoso('Domicilio editado');
                    }
                    else {
                        this.toast.toastError('No se pudo editar el domicilio, inténtelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo editar el domicilio, inténtelo más tarde');
                });
            }
        });
    }
    escucharNotificacion() {
        if (!this.frenar) {
            const myobserver = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"](observer => {
                this.socket.on('notificacion', (data) => {
                    observer.next(data);
                });
            });
            return myobserver;
        }
    }
    navegar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Atención!',
                // tslint:disable-next-line:max-line-length
                message: 'No olvide encender su GPS, si lo tiene encendido haga caso omiso al mensaje',
                buttons: [
                    {
                        text: 'Cancelar',
                        cssClass: 'cancelarAlerta',
                        role: 'cancel',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Listo',
                        cssClass: 'botonalerta',
                        handler: (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            if (this.mapa.ubicacion) {
                                if (this.mapa.ubicacionactual) {
                                    this.router.navigate(['/central/pedidos/mapa', 'vivo', this.mapa._id]);
                                }
                                else {
                                    this.toast.toastError('Aún no se ha confirmado la ubicación del domiciliario');
                                }
                            }
                            else {
                                this.router.navigate(['/central/pedidos/mapa', 'destino', this.mapa._id]);
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    entregar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.mapa.ubicacionactual) {
                this.router.navigate(['/central/pedidos/mapa', 'entrega', this.mapa._id]);
            }
            else {
                const alert = yield this.alert.create({
                    header: 'Atención!',
                    message: '¿Ya vas a despachar el pedido?, una vez que aceptes el cliente recibirá una notificación de que su pedido esta en camino, no olvides encender tu GPS ',
                    buttons: [
                        {
                            text: 'Cancelar',
                            cssClass: 'cancelarAlerta',
                            role: 'cancel'
                        },
                        {
                            text: 'Confirmar',
                            cssClass: 'botonalerta',
                            handler: () => {
                                this.socket.emit('entregaPedido', {
                                    pedido: this.pedido
                                });
                                this.router.navigate(['/central/pedidos/mapa', 'entrega', this.mapa._id]);
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    entregar2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.mapa.ubicacionactual) {
                this.router.navigate(['/central/pedidos/mapa', 'vivo', this.mapa._id]);
            }
        });
    }
    ionViewWillLeave() {
        this.frenar = true;
    }
};
PedidoInfoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_8__["InicioService"] },
    { type: src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_10__["ToastServices"] },
    { type: src_app_providers_Api_Pedidos_service__WEBPACK_IMPORTED_MODULE_9__["PedidosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["Socket"] }
];
PedidoInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pedido-info',
        template: _raw_loader_pedido_info_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pedido_info_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PedidoInfoPage);



/***/ }),

/***/ "brBa":
/*!*************************************************************************!*\
  !*** ./src/app/pages/Pedidos/pedido-info/pedido-info-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: PedidoInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoInfoPageRoutingModule", function() { return PedidoInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pedido_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pedido-info.page */ "K8uv");




const routes = [
    {
        path: '',
        component: _pedido_info_page__WEBPACK_IMPORTED_MODULE_3__["PedidoInfoPage"]
    }
];
let PedidoInfoPageRoutingModule = class PedidoInfoPageRoutingModule {
};
PedidoInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PedidoInfoPageRoutingModule);



/***/ }),

/***/ "q8b+":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Pedidos/pedido-info/pedido-info.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"oscuro\">\n        <ion-back-button slot=\"start\" icon=\"chevron-back-outline\" defaultHref=\"/central/pedidos\"></ion-back-button>\n        <ion-title>Mi pedido</ion-title>\n\n        <ion-buttons slot=\"end\" *ngIf=\"pedido && id === pedido.taller._id\">\n            <ion-button (click)=\"guardar()\">\n                <ion-icon name=\"checkmark-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <div class=\"flcenter ion-padding\" *ngIf=\"!cargan\">\n        <ion-spinner name=\"crescent\" color=\"oscuro\"></ion-spinner>\n        <div>\n            Cargando información del pedido... <br>\n        </div>\n\n    </div>\n\n    <div class=\"divider light\"></div>\n\n    <div *ngIf=\"cargan\">\n\n        <h2 class=\"titulo\">Descrición del pedido</h2>\n\n        <div class=\"pedido\" *ngIf=\"pedido\">\n            <ion-textarea rows=\"3\" *ngIf=\"id === pedido.taller._id\" placeholder=\"Escriba la descripción del pedido\" [(ngModel)]=\"texto\" [value]=\"texto\"></ion-textarea> <br>\n\n            <p *ngIf=\"id !== pedido.taller._id\">{{ texto }}</p>\n        </div>\n\n\n\n        <div class=\"opts\" *ngIf=\"cargan\">\n            <ion-card mode=\"ios\">\n                <ion-card-header><img src=\"/assets/Estados.png\" width=\"100px\"></ion-card-header>\n                <ion-card-title>Estados del pedido\n                </ion-card-title>\n\n                <ion-card-content>\n                    <div class=\"cambiar\" *ngIf=\"id === pedido.taller._id\">\n                        <ion-item color=\"light\">\n                            <ion-label>Cambiar estado del pedido</ion-label>\n                            <ion-select color=\"light\" value=\"\" (ionChange)=\"cambiarEstado( $event )\">\n                                <ion-select-option value=\"Pedido en preparación\">Pedido en preparación</ion-select-option>\n\n                                <ion-select-option value=\"Pedido listo para su entrega\">Pedido listo para su entrega</ion-select-option>\n\n                                <ion-select-option value=\"Pedido en camino\">Pedido en camino</ion-select-option>\n\n                                <ion-select-option value=\"Pedido entregado\">Pedido entregado</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                    </div> <br>\n\n                    <div *ngIf=\"estados.length > 0\">\n                        <h3>Estados</h3>\n\n                        <ion-item *ngFor=\"let estado of estados\" [class.verdee]=\"estado.estado.includes('entregado')\">\n                            <ion-label class=\"ion-text-wrap\">\n                                <strong>{{ estado.estado }}</strong>\n                                <div>{{estado.fecha | cambioUTC}}</div>\n                            </ion-label>\n                        </ion-item>\n\n\n                    </div>\n                </ion-card-content>\n            </ion-card>\n\n            <ion-card mode=\"ios\" *ngIf=\"id === pedido.taller._id\">\n                <ion-card-header><img src=\"/assets/MapaDomicilio.png\" width=\"100px\"></ion-card-header>\n                <ion-card-title>Mapa del Domicilio\n                </ion-card-title>\n\n                <ion-card-content>\n                    <div class=\"cambiar\">\n                        <ion-item color=\"light\">\n                            <ion-label>Habilitar domicilio</ion-label>\n                            <ion-toggle [checked]=\"habilitado\" mode=\"ios\" slot=\"end\" color=\"barra\" (ionChange)=\"habilitar($event)\"></ion-toggle>\n                        </ion-item> <br>\n                        <ion-item *ngIf=\"mapa && mapa.domiciliario && mapa.domiciliario.nombrecompleto !== ''\">\n                            <ion-label><strong>Domiciliario actual: </strong> <br>{{ mapa.domiciliario.nombrecompleto}}</ion-label>\n                        </ion-item> <br>\n                        <ion-item color=\"light\" *ngIf=\"mapa && mapa.apagar\">\n                            <ion-label>Escoger Domiciliario</ion-label>\n                            <ion-select color=\"light\" value=\"\" (ionChange)=\"escogerdomiciliario( $event )\">\n                                <ion-select-option *ngFor=\"let acc of domicilios\" [value]=\"acc\">{{ acc.nombrecompleto}}</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                    </div> <br>\n                    <div *ngIf=\"mapa && mapa.domiciliario\">\n                        <ion-chip color=\"danger\" *ngIf=\"!mapa.ubicacion\">El usuario aún no ha compartido su ubicación</ion-chip>\n                        <ion-button (click)=\"entregar()\" *ngIf=\"id === mapa.domiciliario._id && mapa.ubicacion\" color=\"primary\" expand=\"block\" mode=\"ios\">ENTREGAR PEDIDO</ion-button>\n\n                        <ion-button (click)=\"entregar2()\" *ngIf=\"id !== mapa.domiciliario._id && mapa.ubicacion\" color=\"primary\" expand=\"block\" mode=\"ios\">RASTREAR PEDIDO</ion-button>\n                    </div>\n\n                </ion-card-content>\n            </ion-card>\n\n\n            <ion-card mode=\"ios\" *ngIf=\"mapa && mapa.domiciliario && id === mapa.domiciliario._id && id !== pedido.taller._id\">\n                <ion-card-header><img src=\"/assets/MapaDomicilio.png\" width=\"100px\"></ion-card-header>\n                <ion-card-title>Mapa del Domicilio\n                </ion-card-title>\n\n                <ion-card-content>\n                    <ion-chip color=\"danger\" *ngIf=\"!mapa.ubicacion\">El usuario aún no ha compartido su ubicación</ion-chip>\n\n                    <ion-button *ngIf=\"mapa.ubicacion\" (click)=\"entregar()\" mode=\"ios\" color=\"primary\" expand=\"block\">ENTREGAR PEDIDO</ion-button>\n                </ion-card-content>\n            </ion-card>\n\n            <ion-card mode=\"ios\" *ngIf=\"mapa && mapa.domiciliario  && id !== mapa.domiciliario._id && id !== pedido.creador._id && id !== pedido.taller._id\">\n                <ion-card-header><img src=\"/assets/MapaDomicilio.png\" width=\"100px\"></ion-card-header>\n                <ion-card-title>Mapa del Domicilio\n                </ion-card-title>\n\n                <ion-card-content>\n                    <ion-button (click)=\"entregar2()\" mode=\"ios\" color=\"primary\" expand=\"block\">RASTREAR PEDIDO</ion-button>\n                </ion-card-content>\n            </ion-card>\n\n\n            <ion-card mode=\"ios\" *ngIf=\"mapa && id === pedido.creador._id && mapa.apagar\" (click)=\"navegar()\">\n\n                <ion-card-header>\n                    <br>\n                    <img src=\"/assets/MapaDomicilio.png\" width=\"100px\"></ion-card-header>\n                <ion-card-title>Mapa del Domicilio\n                </ion-card-title>\n                <ion-card-subtitle *ngIf=\"!mapa.ubicacion\">Comparte tu ubcicación para que el domiciliario lleve tu pedido\n                </ion-card-subtitle>\n\n                <ion-card-subtitle *ngIf=\"mapa.ubicacion\">Ya compartiste la ubicación, puedes ingresar para saber por donde viene tu pedido\n                </ion-card-subtitle>\n                <div>\n                    <ion-chip color=\"barra\" *ngIf=\"mapa.ubicacion\">Ubicación compartida para el taller</ion-chip> <br>\n                    <ion-chip color=\"warning\" *ngIf=\"mapa.ubicacion && !mapa.ubicacionactual\">Espera hasta que el domiciliario comparta su ubicación</ion-chip>\n\n                    <ion-chip color=\"danger\" *ngIf=\"!mapa.ubicacion\">Aún no has compartido la ubicación</ion-chip>\n                </div>\n            </ion-card>\n\n\n\n        </div>\n\n\n    </div>\n\n\n\n</ion-content>");

/***/ }),

/***/ "r04t":
/*!*****************************************************************!*\
  !*** ./src/app/pages/Pedidos/pedido-info/pedido-info.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flcenter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  text-align: center;\n}\n\n.opts {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.opts ion-card {\n  width: 100%;\n  margin: 10px 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transition: all 0.5s;\n}\n\n.opts ion-card ion-card-title {\n  font-size: 22px;\n  text-align: center;\n}\n\n.opts ion-card ion-card-header {\n  text-align: center;\n  padding: 5px;\n}\n\nion-card-header {\n  width: 100%;\n  padding: 10px;\n  background-color: #f1f1ff;\n  position: relative;\n}\n\n.titulo {\n  width: 100%;\n  padding: 10px;\n  margin: 0px;\n  background-color: #FFF3E2;\n  margin-bottom: 10px;\n}\n\np {\n  padding: 10px;\n  word-wrap: break-word;\n}\n\nion-card-content {\n  width: 100%;\n  padding: 10px;\n}\n\n.cambiar {\n  width: 100%;\n}\n\n.cambiar ion-item {\n  width: 100%;\n}\n\n.verdee {\n  --background: #B7B218 !important;\n}\n\nion-card-subtitle {\n  text-align: center;\n  padding: 10px;\n  margin-top: 10px;\n  font-weight: 300;\n}\n\n@media screen and (min-width: 800px) {\n  .opts ion-card {\n    width: calc(50% - 10px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGVkaWRvLWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksdUJBQUE7RUFDTjtBQUNGIiwiZmlsZSI6InBlZGlkby1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm9wdHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLm9wdHMgaW9uLWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDEwcHggNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxufVxyXG5cclxuLm9wdHMgaW9uLWNhcmQgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ub3B0cyBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG5pb24tY2FyZC1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnRpdHVsbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkYzRTI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uY2FtYmlhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhbWJpYXIgaW9uLWl0ZW0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi52ZXJkZWUge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjQjdCMjE4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXN1YnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAgIC5vcHRzIGlvbi1jYXJkIHtcclxuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgIH1cclxufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=Pedidos-pedido-info-pedido-info-module.js.map