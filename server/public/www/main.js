(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+GRR":
/*!***********************************************!*\
  !*** ./src/app/Guard/login/registro.guard.ts ***!
  \***********************************************/
/*! exports provided: RegistroGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroGuard", function() { return RegistroGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _providers_Registro_registro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/Registro/registro.service */ "3qam");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let RegistroGuard = class RegistroGuard {
    constructor(registroService) {
        this.registroService = registroService;
    }
    canDeactivate() {
        return this.registroService.observer.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["find"])(x => {
            return x !== 'a';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(x => { console.log(`ESTADO ${x}`); return x; }));
    }
};
RegistroGuard.ctorParameters = () => [
    { type: _providers_Registro_registro_service__WEBPACK_IMPORTED_MODULE_2__["RegistroService"] }
];
RegistroGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RegistroGuard);



/***/ }),

/***/ "+Whw":
/*!************************************************************!*\
  !*** ./src/app/Components/Menu/menuComponent.component.ts ***!
  \************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menuComponent_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menuComponent.component.html */ "3B50");
/* harmony import */ var _menuComponent_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuComponent.component.scss */ "4xrW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/Utilidades/LoadingService.service */ "r3ab");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../providers/Api/Seguimiento.service */ "Gq8O");
/* harmony import */ var _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../providers/cargas/usuarios.service */ "cb8P");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _providers_Conexiones_Conexion_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../providers/Conexiones/Conexion.service */ "1+ow");












let MenuComponent = class MenuComponent {
    constructor(almacenamiento, loading, toastService, navCtrl, apiSeguimiento, cargaElementos, router, menuCtrl, conexion) {
        this.almacenamiento = almacenamiento;
        this.loading = loading;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.apiSeguimiento = apiSeguimiento;
        this.cargaElementos = cargaElementos;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.conexion = conexion;
        this.cantidadSeguimiento = 0;
        this.red = 'wifi';
        this.cargaElementos.$seguimientoCantidad.subscribe((cant) => {
            this.cantidadSeguimiento = cant;
            console.log(cant, 'Cantidad de seguimiento');
        });
        this.cargaElementos.$cargarRed.subscribe((red) => {
            console.log('Menu suscrbiendose', red);
            this.red = red;
        });
    }
    ngOnInit() {
    }
    terminar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const estado = yield this.almacenamiento.terminarPartida();
                if (estado) {
                    console.log(estado, 'ESTADO');
                    this.loading.cargaProcesos('Cerrando sesión, te esperamos pronto').then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        const abandonarPartida = yield this.conexion.destruir();
                        if (abandonarPartida) {
                            console.log(abandonarPartida);
                            console.log('Abandonar partida');
                            this.cargaElementos.cancelarSuscripciones();
                            this.router.navigate(['/home']);
                            this.loading.finalizarCargado();
                        }
                        else {
                            console.log('Abandonar partida falló');
                            this.loading.finalizarCargado();
                        }
                    }));
                }
                else {
                    console.log('MUY MAL');
                    this.router.navigate(['/home']);
                }
            }
            catch (error) {
                this.router.navigate(['/home']);
                this.loading.finalizarCargado();
                yield this.toastService.alertApplication('No se pudo cerrar la sesión', false);
            }
        });
    }
    ir() {
        this.menuCtrl.close('perfilMenu').then(() => {
            this.router.navigate(['/central/perfil/solicitudes']);
        });
    }
    citas() {
        this.menuCtrl.close('perfilMenu').then(() => {
            this.router.navigate(['/citas']);
        });
    }
};
MenuComponent.ctorParameters = () => [
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"] },
    { type: _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__["ToastServices"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_8__["ApiSeguimientoService"] },
    { type: _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_9__["CargaElementosUsuariosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
    { type: _providers_Conexiones_Conexion_service__WEBPACK_IMPORTED_MODULE_11__["ConexionService"] }
];
MenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu',
        template: _raw_loader_menuComponent_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menuComponent_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuComponent);



/***/ }),

/***/ "/G1h":
/*!***************************************************************!*\
  !*** ./src/app/Components/modal-chat/modal-chat.component.ts ***!
  \***************************************************************/
/*! exports provided: ModalChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalChatComponent", function() { return ModalChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_chat_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-chat.component.html */ "rYne");
/* harmony import */ var _modal_chat_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-chat.component.scss */ "emyi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../providers/Utilidades/LoadingService.service */ "r3ab");
/* harmony import */ var _providers_Api_Pedidos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../providers/Api/Pedidos.service */ "HavB");











let ModalChatComponent = class ModalChatComponent {
    constructor(almacenamiento, modal, toast, socket, actionCtrl, camera, myLoading, apiPedido) {
        this.almacenamiento = almacenamiento;
        this.modal = modal;
        this.toast = toast;
        this.socket = socket;
        this.actionCtrl = actionCtrl;
        this.camera = camera;
        this.myLoading = myLoading;
        this.apiPedido = apiPedido;
        this.carga = false;
        this.slide = {
            zoom: {
                maxRation: 8,
            }
        };
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.crear();
    }
    crear() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.carga = true;
            }
        });
    }
    cerrar() {
        this.modal.dismiss();
    }
};
ModalChatComponent.ctorParameters = () => [
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__["InicioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__["ToastServices"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
    { type: _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"] },
    { type: _providers_Api_Pedidos_service__WEBPACK_IMPORTED_MODULE_10__["PedidosService"] }
];
ModalChatComponent.propDecorators = {
    img: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalChatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-chat',
        template: _raw_loader_modal_chat_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_chat_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalChatComponent);



/***/ }),

/***/ "/Yj/":
/*!*******************************************************************!*\
  !*** ./src/app/Components/fechas-modal/fechas-modal.component.ts ***!
  \*******************************************************************/
/*! exports provided: FechasModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FechasModalComponent", function() { return FechasModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_fechas_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./fechas-modal.component.html */ "2uw8");
/* harmony import */ var _fechas_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fechas-modal.component.scss */ "fpZc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/Utilidades/ToastService.service */ "fmoy");






let FechasModalComponent = class FechasModalComponent {
    constructor(modal, toast) {
        this.modal = modal;
        this.toast = toast;
        this.fecha1 = '';
        this.fecha2 = '';
    }
    ngOnInit() { }
    filtro(event, tipo) {
        if (tipo === 1) {
            this.fecha1 = event.detail.value;
        }
        else {
            this.fecha2 = event.detail.value;
        }
    }
    procesar() {
        if (this.fecha1 !== '' && this.fecha2 !== '') {
            this.modal.dismiss({
                fecha1: this.fecha1,
                fecha2: this.fecha2
            });
        }
        else {
            this.toast.toastError('Debe de seleccionar un tiempo estimado');
        }
    }
    cerrar() {
        this.modal.dismiss();
    }
};
FechasModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__["ToastServices"] }
];
FechasModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-fechas-modal',
        template: _raw_loader_fechas_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_fechas_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FechasModalComponent);



/***/ }),

/***/ "/cRh":
/*!********************************************!*\
  !*** ./src/app/pipes/Fechas/fecha.pipe.ts ***!
  \********************************************/
/*! exports provided: MiFechaPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiFechaPipe", function() { return MiFechaPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



let MiFechaPipe = class MiFechaPipe {
    transform(value) {
        moment__WEBPACK_IMPORTED_MODULE_2__["locale"]('es');
        return moment__WEBPACK_IMPORTED_MODULE_2__(value).format('LLLL');
    }
};
MiFechaPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'fecha'
    })
], MiFechaPipe);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\mimotoweb\src\main.ts */"zUnb");


/***/ }),

/***/ "0KDG":
/*!**********************************************!*\
  !*** ./src/app/Guard/login/central.guard.ts ***!
  \**********************************************/
/*! exports provided: CentralGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentralGuard", function() { return CentralGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let CentralGuard = class CentralGuard {
    constructor(inicioService, route) {
        this.inicioService = inicioService;
        this.route = route;
        this.sesion = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        this.$sesion = this.sesion.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["auditTime"])(3000));
    }
    canActivate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const login = yield this.inicioService.comprobarSesion();
                console.log('Bien central');
                if (login) {
                    console.log(login, ' central');
                    this.route.navigate(['/home']);
                    return false;
                }
                else {
                    return true;
                }
            }
            catch (error) {
                return true;
            }
        });
    }
};
CentralGuard.ctorParameters = () => [
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CentralGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CentralGuard);



/***/ }),

/***/ "0jW/":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/alertapopover/alertapopover.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\n    <ion-item (click)=\"alerta()\">\n        <ion-icon slot=\"start\" name=\"trash-outline\" color=\"danger\"></ion-icon>\n        <ion-label>Eliminar</ion-label>\n    </ion-item>\n</ion-list>");

/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1+ow":
/*!**********************************************************!*\
  !*** ./src/app/providers/Conexiones/Conexion.service.ts ***!
  \**********************************************************/
/*! exports provided: ConexionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConexionService", function() { return ConexionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _cargas_Entradas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cargas/Entradas.service */ "FlrC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let ConexionService = class ConexionService {
    constructor(plt, socket, storage, toast, entradas, router) {
        this.plt = plt;
        this.socket = socket;
        this.storage = storage;
        this.toast = toast;
        this.entradas = entradas;
        this.router = router;
        this.carga = false;
        this.conexionBh = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]('');
        this.$conexiones = this.conexionBh.asObservable();
        this.escucharFondo();
        this.escucharEntrada();
        this.conexiones().subscribe((data) => {
            this.conexionBh.next(data);
        });
        this.notificaciones().subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const audio = new Audio('/assets/Timbre/Timbre.mp3');
            audio.play();
            if (data.action === 'citaschat') {
                const cita = yield this.storage.obtenerCita();
                let buttons;
                let marcado = false;
                if (cita) {
                    console.log(cita, 'Mi cita');
                    if (cita !== data.idCita) {
                        marcado = true;
                    }
                }
                else {
                    buttons = {
                        action: true,
                        info: {
                            type: 'citas',
                            data: {
                                id: data.idCita
                            }
                        },
                        ruta: '/chat'
                    };
                    this.toast.alertApplication(data.mensaje, true, 'bottom', buttons);
                }
            }
            else if (data.action === 'recargo') {
                this.entradas.crearEntrada();
                console.log('LLego');
            }
            else if (data.action === 'salidaIVT') {
                this.toast.Especial(data.mensaje, 10000, [{
                        text: 'Navegar',
                        handler: () => {
                            this.router.navigate(['/central/menu/ivt-miinventario/', data.id, 'salidas', data.id, data.creador]);
                        }
                    }]);
                console.log('LLego');
            }
            else if (data.action === 'entradaIVT') {
                this.toast.Especial(data.mensaje, 10000, [{
                        text: 'Navegar',
                        handler: () => {
                            this.router.navigate(['/central/menu/ivt-miinventario/', data.id, 'entradas', data.id]);
                        }
                    }]);
                console.log('LLego');
            }
            else if (data.action === 'megusta') {
                this.toast.Especial(data.mensaje, 10000, [{
                        text: 'Navegar',
                        handler: () => {
                            this.router.navigate(['/igtmpublic/', data.id, 'publicacion']);
                        }
                    }]);
            }
            else if (data.action === 'comentario') {
                this.toast.Especial(data.mensaje, 10000, [{
                        text: 'Navegar',
                        handler: () => {
                            this.router.navigate(['/igtmpublic/', data.id, 'publicacion']);
                        }
                    }]);
            }
            else if (data.action === 'Ticket') {
                const ticket = yield this.storage.obtenerTicket();
                if (ticket) {
                    if (ticket.exe) {
                        const info = yield this.storage.obtenerToken();
                        if (info) {
                            if (info._id === data.idtaller) {
                                this.toast.Especial(data.mensaje, 8000);
                            }
                            else {
                                this.toast.Especial(data.mensaje2, 8000);
                            }
                        }
                    }
                    else {
                        const info = yield this.storage.obtenerToken();
                        if (info) {
                            if (info._id === data.idtaller) {
                                this.toast.Especial(data.mensaje, 10000, [{
                                        text: 'Entrar',
                                        handler: () => {
                                            this.router.navigate(['/central/tickets/', data.idtaller]);
                                        }
                                    }]);
                            }
                            else {
                                this.toast.Especial(data.mensaje2, 5000, [{
                                        text: 'Entrar',
                                        handler: () => {
                                            this.router.navigate(['/central/tickets']);
                                        }
                                    }]);
                            }
                        }
                    }
                }
            }
            else if (data.action === 'TicketRechazado') {
                const ticket = yield this.storage.obtenerTicket();
                if (ticket) {
                    if (ticket.exe) {
                        const info = yield this.storage.obtenerToken();
                        if (info) {
                            if (info._id !== data.idusuario) {
                                this.toast.Especial(data.mensaje, 8000);
                            }
                            else {
                                this.socket.emit('ticketDespedida', { id: data.idtaller });
                                this.toast.Especial(data.mensaje2, 8000);
                            }
                        }
                    }
                    else {
                        const info = yield this.storage.obtenerToken();
                        if (info) {
                            if (info._id !== data.idusuario) {
                                this.toast.Especial(data.mensaje, 5000, [{
                                        text: 'Entrar',
                                        handler: () => {
                                            this.router.navigate(['/central/tickets']);
                                        }
                                    }]);
                            }
                            else {
                                this.socket.emit('ticketDespedida', { id: data.idtaller });
                                this.toast.Especial(data.mensaje2, 5000, [{
                                        text: 'Entrar',
                                        handler: () => {
                                            this.router.navigate(['/central/tickets']);
                                        }
                                    }]);
                            }
                        }
                    }
                }
            }
            else if (data.action === 'TicketProcesado') {
                const ticket = yield this.storage.obtenerTicket();
                if (ticket) {
                    if (ticket.exe) {
                        const info = yield this.storage.obtenerToken();
                        if (info) {
                            console.log(data, data.idusuario, info._id, 'careta');
                            if (info._id !== data.idusuario) {
                                this.toast.Especial(data.mensaje, 8000);
                            }
                            else {
                                this.toast.Especial(data.mensaje2, 8000);
                            }
                        }
                    }
                    else {
                        const info = yield this.storage.obtenerToken();
                        if (info) {
                            if (info._id !== data.idusuario) {
                                this.toast.Especial(data.mensaje, 5000, [{
                                        text: 'Entrar',
                                        handler: () => {
                                            this.router.navigate(['/central/tickets']);
                                        }
                                    }]);
                            }
                            else {
                                this.socket.emit('ticketDespedida', { id: data.idtaller });
                                this.toast.Especial(data.mensaje2, 5000, [{
                                        text: 'Entrar',
                                        handler: () => {
                                            this.router.navigate(['/central/tickets']);
                                        }
                                    }]);
                            }
                        }
                    }
                }
            }
            else if (data.action === 'chat') {
                const sala = yield this.storage.obtenerSala();
                if (sala) {
                    console.log(sala, 'Sala', 'entramos');
                    if (sala.length > 0) {
                        if (sala[0]._id === data.idChat) {
                        }
                        else {
                            this.toast.Especial('Nuevo mensaje', 5000, [{
                                    text: 'Entrar',
                                    handler: () => {
                                        this.storage.insertarChat(data.sala).then(() => {
                                            this.router.navigate(['/central/chats/chat']);
                                        }).catch(() => {
                                            this.toast.toastError('No se puede acceder al chat, inténtelo más tarde');
                                        });
                                    }
                                }]);
                        }
                    }
                    else {
                        console.log('Nada');
                        this.toast.Especial('Nuevo mensaje', 5000, [{
                                text: 'Entrar',
                                handler: () => {
                                    this.storage.insertarChat(data.sala).then(() => {
                                        this.router.navigate(['/central/chats/chat']);
                                    }).catch(() => {
                                        this.toast.toastError('No se puede acceder al chat, inténtelo más tarde');
                                    });
                                }
                            }]);
                    }
                }
            }
            else if (data.action === 'pedido') {
                this.toast.Especial(data.mensaje, 5000, [{
                        text: 'Ver',
                        handler: () => {
                            this.router.navigate(['/central/pedidos/info', data.id]);
                        }
                    }]);
            }
            else if (data.action === 'patinada') {
                this.toast.Especial(data.mensaje, 5000, [{
                        text: 'Patinadas',
                        handler: () => {
                            this.router.navigate(['/central/patinadas']);
                        }
                    }]);
            }
            else if (data.action === 'patinadasmias') {
                this.toast.Especial(data.mensaje, 5000, [{
                        text: 'Ver',
                        handler: () => {
                            this.router.navigate(['/central/mispatinadas']);
                        }
                    }]);
            }
        }));
    }
    cargaLista() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.carga = true;
                const login = yield this.storage.obtenerToken();
                if (login) {
                    console.log(login, ' Empezando');
                    if (login.estado === 'true') {
                        this.socket.emit('conectar', login);
                    }
                    else {
                        //  this.toast.alertApplication('No se pudo iniciar la conexión', false);
                    }
                }
            }
            catch (error) {
                this.toast.alertApplication('No se pudo iniciar la conexión', false);
            }
        });
    }
    conexiones() {
        const conx = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"]((obs) => {
            this.socket.on('conexiones', (data) => {
                obs.next(data);
            });
        });
        return conx;
    }
    escucharFondo() {
        return this.plt.pause.subscribe((e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('plataforma en fondo', e);
            const login = yield this.storage.obtenerToken();
            if (login) {
                console.log('login salida', login);
                this.socket.emit('desconectar', login);
            }
        }));
    }
    escucharEntrada() {
        return this.plt.resume.subscribe((e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.carga) {
                console.log('plataforma en entrada', e);
                const login = yield this.storage.obtenerToken();
                if (login) {
                    console.log('login entrada', login);
                    this.socket.emit('conectar', login);
                }
            }
        }));
    }
    notificaciones() {
        const notificaciones = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"]((obs) => {
            this.socket.on('notificacion', (data) => {
                console.log('mala', data);
                obs.next(data);
            });
        });
        return notificaciones;
    }
    destruir() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const login = yield this.storage.dataLogin();
                if (login) {
                    console.log(login, ' Terminando');
                    login.apagar = true;
                    if (login.estado === 'false') {
                        this.socket.connect();
                        this.socket.emit('desconectar', login);
                        const cerrar = yield this.storage.limpiarBD();
                        if (cerrar) {
                            this.escucharEntrada().unsubscribe();
                            this.escucharFondo().unsubscribe();
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            catch (error) {
                return false;
            }
        });
    }
};
ConexionService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"] },
    { type: _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"] },
    { type: _Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__["ToastServices"] },
    { type: _cargas_Entradas_service__WEBPACK_IMPORTED_MODULE_7__["EntradasServices"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
ConexionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConexionService);



/***/ }),

/***/ "2qE+":
/*!****************************************************!*\
  !*** ./src/app/providers/Api/Patinadas.service.ts ***!
  \****************************************************/
/*! exports provided: PatinadasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatinadasService", function() { return PatinadasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let PatinadasService = class PatinadasService {
    constructor(http, router, MmyTransfer) {
        this.http = http;
        this.router = router;
        this.MmyTransfer = MmyTransfer;
    }
    hanflerError(error) {
        let intento = 0;
        return error.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delayWhen"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(3000)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((errorHttp) => {
            console.log('Entramos a intentos');
            if (errorHttp instanceof ErrorEvent) {
                throw new Error('Error de Red');
            }
            else {
                if (errorHttp.status === 404) {
                    throw new Error(' Página no encontrada');
                }
                if (errorHttp.status === 401) {
                    throw new Error(' No tiene permisos ');
                }
                else {
                    throw new Error(' No se pudo realizar la conexión, comprueba tu red ');
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(3));
    }
    crearPatinada(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/patinadas/crear`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    consultarPatinada(token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/patinadas/traer`, {}, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    consultarPatinadaMias(token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/patinadas/traer/mios`, {}, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    patinadaEditar(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/patinadas/editar`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    patinadaEliminar(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/patinadas/eliminar`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    consultarChat(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/patinada/consultar/chat`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    consultarChatUsuario(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/patinada/consultar/chat/usuario`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
};
PatinadasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"] }
];
PatinadasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PatinadasService);



/***/ }),

/***/ "2uw8":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/fechas-modal/fechas-modal.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"oscuro\">\n        <ion-title> Configurar ticket</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"cerrar()\">\n                <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n\n    <ion-list>\n        <ion-item-divider color=\"light\">\n            <ion-label class=\"ion-text-wrap\">Configure un tiempo estimado que tardará con este ticket</ion-label>\n        </ion-item-divider>\n        <ion-item>\n            <ion-label position=\"floating\">Seleccionar desde que fecha</ion-label>\n            <ion-datetime (ionChange)=\"filtro( $event, 1 )\" displayFormat=\"DD-MM-YYYY hh:mm:a\" pickerFormat=\"DD MM YYYY, hh:mm:a\" done-text=\"Aceptar\" cancel-text=\"Cancelar\" placeholder=\"Seleccione Desde\"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">Seleccionar hasta que fecha</ion-label>\n            <ion-datetime (ionChange)=\"filtro( $event, 2 )\" displayFormat=\"DD-MM-YYYY hh:mm:a\" pickerFormat=\"DD MM YYYY, hh:mm:a\" done-text=\"Aceptar\" placeholder=\"Seleccione Hasta\" cancel-text=\"Cancelar\"></ion-datetime>\n        </ion-item> <br>\n\n        <ion-button expand=\"block\" color=\"barra\" mode=\"ios\" (click)=\"procesar()\">Procesar Ticket</ion-button>\n    </ion-list>\n</ion-content>");

/***/ }),

/***/ "3B50":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Menu/menuComponent.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu contentId=\"perfil\" menuId=\"perfilMenu\" side=\"end\">\r\n\r\n    <ion-header class=\"ion-no-border\">\r\n        <ion-toolbar color=\"blanco\">\r\n            <ion-title>Menú</ion-title>\r\n        </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-content color=\"blanco\">\r\n        <ion-list class=\"blanco\">\r\n\r\n            <ion-item color=\"blanco\" [ngClass]=\"{'opacity': red === 'none'}\" (click)=\"ir()\">\r\n                <ion-icon name=\"people-outline\" slot=\"start\"></ion-icon>\r\n                <ion-label>Seguimiento</ion-label>\r\n                <ion-badge *ngIf=\"red !== 'none'\" slot=\"end\" color=\"primary\">{{cantidadSeguimiento}}</ion-badge>\r\n                <ion-icon name=\"wifi-outline\" color=\"danger\" *ngIf=\"red === 'none'\" slot=\"end\"></ion-icon>\r\n            </ion-item>\r\n\r\n            <ion-item color=\"blanco\" (click)=\"ir()\">\r\n                <ion-icon name=\"albums-outline\" slot=\"start\"></ion-icon>\r\n                <ion-label>Hoja de Vida</ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item color=\"blanco\" [ngClass]=\"{'opacity': red === 'none'}\">\r\n                <ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\r\n                <ion-label>Eventos</ion-label>\r\n                <ion-icon name=\"wifi-outline\" color=\"danger\" *ngIf=\"red === 'none'\" slot=\"end\"></ion-icon>\r\n            </ion-item>\r\n\r\n            <ion-item color=\"blanco\" [ngClass]=\"{'opacity': red === 'none'}\">\r\n                <ion-icon name=\"chatbubbles-outline\" slot=\"start\"></ion-icon>\r\n                <ion-label>Chats</ion-label>\r\n                <ion-icon name=\"wifi-outline\" color=\"danger\" *ngIf=\"red === 'none'\" slot=\"end\"></ion-icon>\r\n            </ion-item>\r\n\r\n            <ion-item color=\"blanco\" [ngClass]=\"{'opacity': red === 'none'}\">\r\n                <ion-icon name=\"build-outline\" slot=\"start\"></ion-icon>\r\n                <ion-label>Grúa</ion-label>\r\n                <ion-icon name=\"wifi-outline\" color=\"danger\" *ngIf=\"red === 'none'\" slot=\"end\"></ion-icon>\r\n            </ion-item>\r\n\r\n            <ion-item color=\"blanco\" [ngClass]=\"{'opacity': red === 'none'}\" (click)=\"citas()\">\r\n                <ion-icon name=\"folder-open-outline\" slot=\"start\"></ion-icon>\r\n                <ion-label>Estado de citas</ion-label>\r\n                <ion-icon name=\"wifi-outline\" color=\"danger\" *ngIf=\"red === 'none'\" slot=\"end\"></ion-icon>\r\n            </ion-item>\r\n\r\n            <ion-item color=\"blanco\">\r\n                <ion-icon name=\"pricetags-outline\" slot=\"start\"></ion-icon>\r\n                <ion-label>Inventarios</ion-label>\r\n            </ion-item>\r\n\r\n\r\n            <ion-item color=\"blanco\" (click)=\"terminar()\">\r\n                <ion-icon name=\"power-outline\" slot=\"start\"></ion-icon>\r\n                <ion-label>Cerrar sesión</ion-label>\r\n            </ion-item>\r\n\r\n        </ion-list>\r\n    </ion-content>\r\n</ion-menu>");

/***/ }),

/***/ "3KoX":
/*!*******************************************************!*\
  !*** ./src/app/providers/Red/servicio-red.service.ts ***!
  \*******************************************************/
/*! exports provided: ServicioRedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioRedService", function() { return ServicioRedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cargas/usuarios.service */ "cb8P");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let ServicioRedService = class ServicioRedService {
    constructor(red, cargarElementos, socket, modalCtrl, router) {
        this.red = red;
        this.cargarElementos = cargarElementos;
        this.socket = socket;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.conectarRed();
    }
    conectarRed() {
        return this.red.onChange().subscribe((e) => {
            console.log(this.red.type, ' Tipo de red');
            if (this.red.type === 'none') {
                this.sacarModal();
            }
            else if (this.red.type !== 'none') {
                this.cerrar();
            }
            this.cargarElementos.cargarRed(this.red.type);
        });
    }
    sacarModal() {
        // this.router.navigate
    }
    cerrar() {
        this.modalCtrl.dismiss();
    }
    cancelarServicio() {
        this.conectarRed().unsubscribe();
    }
};
ServicioRedService.ctorParameters = () => [
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_1__["Network"] },
    { type: _cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["CargaElementosUsuariosService"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
ServicioRedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ServicioRedService);



/***/ }),

/***/ "3qam":
/*!********************************************************!*\
  !*** ./src/app/providers/Registro/registro.service.ts ***!
  \********************************************************/
/*! exports provided: RegistroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroService", function() { return RegistroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "e8h1");




let RegistroService = class RegistroService {
    constructor(storage) {
        this.storage = storage;
        this.estado = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('a');
        this.observer = this.estado.asObservable();
    }
    cambioEstado(status) {
        this.estado.next(status);
    }
};
RegistroService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
RegistroService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RegistroService);



/***/ }),

/***/ "4xrW":
/*!**************************************************************!*\
  !*** ./src/app/Components/Menu/menuComponent.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51Q29tcG9uZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "5aPb":
/*!*********************************************!*\
  !*** ./src/app/Guard/login/inicio.guard.ts ***!
  \*********************************************/
/*! exports provided: InicioGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioGuard", function() { return InicioGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let InicioGuard = class InicioGuard {
    constructor(inicioService, route) {
        this.inicioService = inicioService;
        this.route = route;
        this.sesion = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        this.$sesion = this.sesion.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["auditTime"])(3000));
    }
    canActivate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const login = yield this.inicioService.comprobarSesion();
                if (login) {
                    return true;
                }
                else {
                    this.route.navigate(['/central']);
                    return false;
                }
            }
            catch (error) {
                this.route.navigate(['/central']);
                return false;
            }
        });
    }
};
InicioGuard.ctorParameters = () => [
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
InicioGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InicioGuard);



/***/ }),

/***/ "5yQV":
/*!******************************************************!*\
  !*** ./src/app/providers/Api/Inventarios.service.ts ***!
  \******************************************************/
/*! exports provided: InventariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventariosService", function() { return InventariosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");






let InventariosService = class InventariosService {
    constructor(http) {
        this.http = http;
    }
    hanflerError(error) {
        let intento = 0;
        return error.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delayWhen"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(3000)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((errorHttp) => {
            console.log('Entramos a intentos');
            if (errorHttp instanceof ErrorEvent) {
                throw new Error('Error de Red');
            }
            else {
                if (errorHttp.status === 404) {
                    throw new Error(' Página no encontrada');
                }
                else {
                    // throw new Error(' No se pudo realizar la conexión, comprueba tu red ');
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(3));
    }
    crearInventario(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/tipo/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    actualizarInventario(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/cierre/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerInventarios(token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/tipo/`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerInventario(token, id) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token,
                'x-id': id
            })
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/tipo/uno`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    editarAcceso(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/tipo/accesos/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    // EMPLEADOS ************************************************************
    BuscarUsuarios(token, patron) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/empleados/buscar/`, { patron }, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    crearEmpleado(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/empleados/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    editarEmpleado(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/empleados/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerEmpleados(token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/empleados/`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    eliminarEmpleados(token, id) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token,
                'x-id': id
            })
        };
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/empleados/`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    // Proveedores ******************************************************************
    crearProveedor(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/proveedores/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    editarProveedor(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/proveedores/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    eliminarProveedor(token, id) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token,
                'x-id': id
            })
        };
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/proveedores/`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerProveedor(token, ivt) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token,
                'x-ivt': ivt
            })
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/proveedores/`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    // Categorias ******************************************************************
    crearCategoria(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/categorias/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    editarCategoria(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/categorias/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    eliminarCategoria(token, id) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token,
                'x-id': id
            })
        };
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/categorias/`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerCategoria(token, ivt) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token,
                'x-ivt': ivt
            })
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/categorias/`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    // Productos ******************************************************************
    crearProducto(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/productos/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    editarProducto(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/productos/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    eliminarProducto(token, id) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token,
                'x-id': id
            })
        };
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/productos/`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerProducto(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/productos/filtro/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerProductoEstadistica(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/productos/filtro/estadistica/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerProductosPorInventario(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/productos/buscarivt/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    // Entradas  y Salidas ******
    buscarProducto(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/productos/buscar`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    crearEntrada(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/entradas/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerEntrada(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/entradas/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    filtrarEntradas(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/entradas/buscar/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    filtrarEntradasPatron(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/entradas/buscar/patron/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    crearSalida(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/salidas/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerSalida(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/salidas/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    filtrarSalidas(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/salidas/buscar/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    filtrarSalidasPatron(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/salidas/buscar/patron/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    CargarInventarios(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/tipo/almacen/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    // Estadisticas
    CierresInventario(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/cierre/buscar/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    MovCantidades(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/mov/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    MovCantidades2(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/mov/salidas/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerMovmientos(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/movimientos/filtro/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerAgotados(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/productos/agotados/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerProximos(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ivt/productos/proximos/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
};
InventariosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
InventariosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InventariosService);



/***/ }),

/***/ "69E9":
/*!***********************************************************!*\
  !*** ./src/app/Components/detalles/detalles.component.ts ***!
  \***********************************************************/
/*! exports provided: DetallesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesComponent", function() { return DetallesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalles_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalles.component.html */ "C016");
/* harmony import */ var _detalles_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalles.component.scss */ "ZuHd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let DetallesComponent = class DetallesComponent {
    constructor(router, popover) {
        this.router = router;
        this.popover = popover;
    }
    ngOnInit() { }
    ver() {
        this.router.navigate(['/central/chats/modal-chat', this.id, 'ver']);
        this.popover.dismiss();
    }
    abrir() {
        this.router.navigate(['/central/chats/modal-chat', this.id]);
        this.popover.dismiss();
    }
};
DetallesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] }
];
DetallesComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DetallesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalles',
        template: _raw_loader_detalles_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalles_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetallesComponent);



/***/ }),

/***/ "6h90":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Media/video/video.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"reproductor\">\n\n    <!-- <ion-slides [options]=\"slideOpts\">\n        <ion-slide >\n           \n        </ion-slide>\n    </ion-slides> -->\n\n    <div class=\"video\" (click)=\"toggle()\">\n        <video poster=\"/assets/Video.png\" #video [src]=\"url\">\n        </video>\n\n        <ion-chip class=\"cargando\" *ngIf=\"carga\" color=\"success\">\n            <ion-spinner name=\"crescent\"></ion-spinner>Cargando Video...</ion-chip>\n\n    </div>\n\n    <div class=\"controles\" *ngIf=\"mostrar\">\n        <div class=\"botones\">\n            <ion-button *ngIf=\"!paused\" (click)=\"play()\" fill=\"clear\" color=\"blanco\" mode=\"ios\">\n                <ion-icon name=\"play-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n            <ion-button *ngIf=\"paused\" (click)=\"pause()\" fill=\"clear\" color=\"blanco\" mode=\"ios\">\n                <ion-icon name=\"pause-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n\n\n\n            <div class=\"volumen\">\n                <ion-range #range debounce=\"500\" min=\"0\" max=\"100\" (ionChange)=\"progreso( $event )\" (ionFocus)=\"foco( $event )\" (ionBlur)=\"foco( $event )\" [value]=\"currProgress\" color=\"success\"></ion-range>\n            </div>\n\n            <div class=\"tiempo\"><strong>{{ currentt }}</strong></div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "71hY":
/*!********************************************************!*\
  !*** ./src/app/providers/Api/Recordatorios.service.ts ***!
  \********************************************************/
/*! exports provided: RecordatoriosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordatoriosService", function() { return RecordatoriosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");






let RecordatoriosService = class RecordatoriosService {
    constructor(http) {
        this.http = http;
    }
    hanflerError(error) {
        let intento = 0;
        return error.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delayWhen"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(3000)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((errorHttp) => {
            console.log('Entramos a intentos');
            if (errorHttp instanceof ErrorEvent) {
                throw new Error('Error de Red');
            }
            else {
                if (errorHttp.status === 404) {
                    // throw new Error(' Credenciales incorrectas, por favor comprueba la información ');
                }
                else {
                    // throw new Error(' No se pudo realizar la conexión, comprueba tu red ');
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(3));
    }
    postRecordatorio(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/recordatorios`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    getRecordatorio(token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/recordatorios`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    getRecordatorioPersona(token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/recordatorios/personas`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    getRecordatorioLeer(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/recordatorios/leer`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    deleteRecordatorio(token, id) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token,
                'x-id': id
            })
        };
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/recordatorios`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    putRecordatorio(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/recordatorios`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    putRecordatorioPersona(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/recordatorios/personas`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
};
RecordatoriosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
RecordatoriosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RecordatoriosService);



/***/ }),

/***/ "8zVV":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Modales/entradas/entradas.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"oscuro\">\n        <ion-title>Recordatorios</ion-title>\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"cerrar()\">\n                <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\" color=\"oscuro\">\n    <div class=\"content\">\n        <div class=\"leer\">\n            <strong>{{ creador }}</strong>\n        </div>\n        <div class=\"imagen\">\n            <ion-avatar class=\"avatar\">\n                <img src=\"https://motocaliapp.com/{{ img }}\">\n            </ion-avatar>\n        </div>\n    </div>\n    <ion-card color=\"oscuro\" mode=\"ios\">\n        <ion-card-title class=\"titulo\">{{ titulo }}</ion-card-title>\n        <ion-card-content class=\"contenido\">\n            <p>{{ contenido }}</p>\n            <ion-button expand=\"block\" color=\"danger\" (click)=\"guardar()\">ACEPTAR</ion-button>\n        </ion-card-content>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ "AQLj":
/*!******************************************************!*\
  !*** ./src/app/providers/Api/EstadoCitas.service.ts ***!
  \******************************************************/
/*! exports provided: EstadoCitasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoCitasService", function() { return EstadoCitasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");








let EstadoCitasService = class EstadoCitasService {
    constructor(http, MmyTransfer, file) {
        this.http = http;
        this.MmyTransfer = MmyTransfer;
        this.file = file;
    }
    hanflerError(error) {
        return error.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delayWhen"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(3000)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((errorHttp) => {
            console.log('Entramos a intentos');
            if (errorHttp instanceof ErrorEvent) {
                throw new Error('Error de Red');
            }
            else {
                if (errorHttp.status === 401) {
                    throw new Error('No tiene permisos para realizar esta petición, vuelva a iniciar sesión ');
                }
                else {
                    throw new Error(' No se pudo realizar la conexión, comprueba tu red ');
                }
            }
        }));
    }
    listadoTalleres(token) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/citas/talleres`, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    crearCita(token, data) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/citas/crear`, data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    listarCitas(token) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/citas/miscitas`, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    listarCitasTaller(token) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/citas/miscitas/taller`, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    obtenerCita(token, cita) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
                'x-cita': cita
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/citas/micita`, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    obtenerConversaciones(token, cita, desde) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
                'x-idCita': cita,
                'x-desde': desde
            })
        };
        console.log(desde);
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/citas/chat/uno`, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    obtenerConversacionesPendientes(token, cita, fecha) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
                'x-idCita': cita,
                'x-fecha': fecha
            })
        };
        console.log(fecha);
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/citas/chat/pendientes`, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    obtenerListaTrabajos(token) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/citas/trabajos/taller`, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    ingresarListaTrabajos(token, data) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/citas/trabajos`, data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    editarCita(token, cita, data) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
                'x-cita': cita
            })
        };
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/citas/micita`, data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    ingresarChat(token, data) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/citas/chat`, data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    subirArchivosChat(token, idCita, imagen, name, mime) {
        console.log('archivo', imagen);
        const options = {
            fileKey: 'archivo',
            fileName: name,
            mimeType: mime,
            httpMethod: 'POST',
            headers: {
                'x-token': token,
                'x-idCita': idCita
            }
        };
        const fileTransfer = this.MmyTransfer.create();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(fileTransfer.upload(imagen, `${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/citas/chat/upload`, options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            console.log(`No se pudo subir la imagen `, error);
            throw new Error(`No se pudo subir la imagen `);
        }));
    }
    descargarArchivosChat(file) {
        const fileTransfer = this.MmyTransfer.create();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(fileTransfer.download(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/Citas/${file}`, this.file.dataDirectory + 'MimotoMedia/' + file)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            console.log(`No se pudo subir la imagen `, error);
            throw new Error(`No se pudo subir la imagen `);
        }));
    }
    subirArchivosHoja(token, id, imagen, asunto, tipo, name, mime) {
        console.log('archivo', imagen);
        const options = {
            fileKey: 'archivo',
            fileName: name,
            mimeType: mime,
            httpMethod: 'POST',
            headers: {
                'x-token': token,
                'x-idhoja': id,
                'x-asunto': asunto,
                'x-tipo': tipo,
            }
        };
        const fileTransfer = this.MmyTransfer.create();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(fileTransfer.upload(imagen, `${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/hoja/upload`, options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            console.log(`No se pudo subir la imagen `, error);
            throw new Error(`No se pudo subir la imagen `);
        }));
    }
    leefotos(token, data) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/hoja/fotos`, data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    terminar(token, data) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/hoja/terminado`, data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    leeHoja(token, data) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/hoja`, data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    leeHoja2(token, data) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/hoja/leer`, data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    crearHoja(token, data) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/hoja`, data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    editarHoja(token, data) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/hoja/datos`, data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    buscarHojas(token, data) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/hoja/mios`, data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    buscarHojasFiltro(token, data) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
            })
        };
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["URL_SERVER"]}/hoja/buscar/`, data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
};
EstadoCitasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] }
];
EstadoCitasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EstadoCitasService);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, URL_SERVER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_SERVER", function() { return URL_SERVER; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
const URL_SERVER = 'https://motocaliapp.com';
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BEft":
/*!*********************************************************!*\
  !*** ./src/app/Pages/Modales/entradas/entradas.page.ts ***!
  \*********************************************************/
/*! exports provided: EntradasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntradasPage", function() { return EntradasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_entradas_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./entradas.page.html */ "8zVV");
/* harmony import */ var _entradas_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entradas.page.scss */ "aG1+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Api/Recordatorios.service */ "71hY");







let EntradasPage = class EntradasPage {
    constructor(modalCtrl, almacenamiento, apiRecordatorio) {
        this.modalCtrl = modalCtrl;
        this.almacenamiento = almacenamiento;
        this.apiRecordatorio = apiRecordatorio;
        this.titulo = '';
        this.contenido = '';
        this.creador = '';
        this.img = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        // console.log(this.data);
        this.titulo = this.data.informacion.titulo;
        this.contenido = this.data.informacion.contenido;
        this.creador = this.data.creador.nombrecompleto;
        this.img = this.data.creador.imagen.length > 0 ? this.data.creador.imagen[0].path : '';
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                // console.log(info, this.data)
                const miUsuario = this.data.destinatarios.filter((item) => item.id === info._id);
                if (miUsuario.length > 0) {
                    const objeto = miUsuario[0];
                    objeto.visto = 'SI';
                    this.apiRecordatorio.putRecordatorioPersona(info.token, { _id: this.data._id, destino: objeto }).subscribe((data) => {
                        this.cerrar();
                        if (data.exe) {
                            // console.log('BIEN HECHO ', data);
                        }
                        else {
                        }
                    });
                }
            }
        });
    }
    cerrar() {
        this.modalCtrl.dismiss({});
    }
};
EntradasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"] },
    { type: _providers_Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_6__["RecordatoriosService"] }
];
EntradasPage.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
EntradasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-entradas',
        template: _raw_loader_entradas_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_entradas_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EntradasPage);



/***/ }),

/***/ "C016":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/detalles/detalles.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\n    <ion-item (click)=\"ver()\">\n        <ion-icon slot=\"start\" name=\"image-outline\" color=\"oscuro\"></ion-icon>\n        <ion-label>Ver Fotos</ion-label>\n    </ion-item>\n    <ion-item (click)=\"abrir()\">\n        <ion-icon slot=\"start\" name=\"add-outline\" color=\"barra\"></ion-icon>\n        <ion-label>Añadir Fotos</ion-label>\n    </ion-item>\n</ion-list>");

/***/ }),

/***/ "CB8+":
/*!****************************************************!*\
  !*** ./src/app/pipes/Fechas/ConversionUTC.pipe.ts ***!
  \****************************************************/
/*! exports provided: ConvertirUTCPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertirUTCPipe", function() { return ConvertirUTCPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



let ConvertirUTCPipe = class ConvertirUTCPipe {
    transform(value) {
        console.log(value, 'Fechs');
        return moment__WEBPACK_IMPORTED_MODULE_2__(value).format('DD-MM-YYYY hh:mm:a');
    }
};
ConvertirUTCPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'convertFecha'
    })
], ConvertirUTCPipe);



/***/ }),

/***/ "CDls":
/*!****************************************************!*\
  !*** ./src/app/pipes/filtros/filtrociudad.pipe.ts ***!
  \****************************************************/
/*! exports provided: FiltroCiudad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroCiudad", function() { return FiltroCiudad; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let FiltroCiudad = class FiltroCiudad {
    transform(listado, texto) {
        // console.log(listado);
        if (texto === '') {
            return listado;
        }
        else {
            return listado.filter((item) => {
                let temp = item.nombre.toLowerCase();
                return temp.includes(texto);
            });
        }
    }
};
FiltroCiudad = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtrociudad'
    })
], FiltroCiudad);



/***/ }),

/***/ "CkIw":
/*!**************************************************************!*\
  !*** ./src/app/providers/PushService/PushService.service.ts ***!
  \**************************************************************/
/*! exports provided: PushService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushService", function() { return PushService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "wljF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let PushService = class PushService {
    constructor(oneSignal, router) {
        this.oneSignal = oneSignal;
        this.router = router;
        this.usuarioIDSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.$usuarioID = this.usuarioIDSubject.asObservable();
    }
    configuracionInicial() {
        try {
            console.log('Entro a la notificación');
            this.oneSignal.startInit('1de7b081-0773-484d-a7b2-139f15ff8586', '954770608713');
            this.oneSignal.getIds().then((data) => {
                this.usuarioIDSubject.next(data.userId);
                console.log('User ID', data.userId);
            });
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
            this.oneSignal.handleNotificationReceived().subscribe((noti) => {
                // do something when notification is received
                console.log(noti);
            });
            this.oneSignal.handleNotificationOpened().subscribe((noti) => {
                // do something when a notification is opened
                console.log(noti.notification.payload.additionalData.tipo);
                const notificacion = noti.notification.payload.additionalData;
                this.detectarCambio(notificacion);
            });
            this.oneSignal.endInit();
        }
        catch (error) {
            console.log('No permitido servicio');
        }
    }
    detectarCambio(data) {
        console.log(data);
        if (data.tipo === 'Seguimiento') {
            this.router.navigate(['/central/menu/solicitudes']);
        }
        else if (data.tipo === 'Recordatorio') {
        }
        else if (data.tipo === 'Publicacion') {
            this.router.navigate(['/igtmpublic/', data.adicional.id, 'publicacion']);
        }
        else if (data.tipo === 'Historia') {
            this.router.navigate(['/igtmpublic/', data.adicional.id, 'historia']);
        }
        else if (data.tipo === 'InventarioProximos') {
            this.router.navigate(['/central/menu/ivt-miinventario/', data.adicional.id, 'productos', data.adicional.ivt, 'proximos']);
        }
        else if (data.tipo === 'InventarioAgotados') {
            this.router.navigate(['/central/menu/ivt-miinventario/', data.adicional.id, 'productos', data.adicional.ivt, 'agotados']);
        }
        else if (data.tipo === 'EntradaIVT') {
            this.router.navigate(['/central/menu/ivt-miinventario/', data.adicional.ivt, 'entradas', data.adicional.ivt]);
        }
        else if (data.tipo === 'SalidaIVT') {
            this.router.navigate(['/central/menu/ivt-miinventario/', data.adicional.ivt, 'salidas', data.adicional.ivt]);
        }
        else if (data.tipo === 'Ticket') {
            this.router.navigate(['/central/tickets/', data.adicional.id,]);
        }
        else if (data.tipo === 'TicketRechazado') {
            this.router.navigate(['/central/tickets']);
        }
        else if (data.tipo === 'TicketProcesado') {
            this.router.navigate(['/central/tickets']);
        }
        else if (data.tipo === 'Pedido') {
            this.router.navigate(['/central/pedidos/info', data.adicional.id]);
        }
        else if (data.tipo === 'Chat') {
            this.router.navigate(['/central/citas', data.adicional.idChat]);
        }
        else if (data.tipo === 'patinada') {
            this.router.navigate(['/central/patinadas']);
        }
        else if (data.tipo === 'mispatinadas') {
            this.router.navigate(['/central/mispatinadas']);
        }
    }
};
PushService.ctorParameters = () => [
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_2__["OneSignal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PushService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PushService);



/***/ }),

/***/ "EvSv":
/*!**********************************************!*\
  !*** ./src/app/pipes/Textos/colores.pipe.ts ***!
  \**********************************************/
/*! exports provided: ColoresPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColoresPipe", function() { return ColoresPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ColoresPipe = class ColoresPipe {
    transform(value) {
        if (value.tipo === 'dibujar') {
            return `background-color: ${value.dibujo.fondo}; color: ${value.dibujo.color};`;
        }
    }
};
ColoresPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'colores'
    })
], ColoresPipe);



/***/ }),

/***/ "FlrC":
/*!******************************************************!*\
  !*** ./src/app/providers/cargas/Entradas.service.ts ***!
  \******************************************************/
/*! exports provided: EntradasServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntradasServices", function() { return EntradasServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Api/Recordatorios.service */ "71hY");
/* harmony import */ var _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _Components_entradas_entradas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/entradas/entradas.component */ "MUpS");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");







let EntradasServices = class EntradasServices {
    constructor(modalCtrl, apiRecordatorio, almacenamiento) {
        this.modalCtrl = modalCtrl;
        this.apiRecordatorio = apiRecordatorio;
        this.almacenamiento = almacenamiento;
        this.inicio = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]('');
        this.$inicio = this.inicio.asObservable();
    }
    alerta(txt) {
        this.inicio.next(txt);
    }
    crearEntrada() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiRecordatorio.getRecordatorioPersona(info.token).subscribe((data) => {
                    console.log('Data del servicio entrada', data);
                    if (data.exe) {
                        data.response.forEach((item, ind) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            console.log('DANDOME LA VUELTA*******************');
                            if (item.destinatarios.find((dest) => dest.id === info._id && dest.visto === 'NO')) {
                                const modal = yield this.modalCtrl.create({
                                    component: _Components_entradas_entradas_component__WEBPACK_IMPORTED_MODULE_5__["EntradasComponent"],
                                    componentProps: {
                                        type: 'recordatorio',
                                        data: item
                                    }
                                });
                                yield modal.present();
                                const finalice = yield modal.onWillDismiss();
                                if (finalice) {
                                    console.log('Siguiente', ind);
                                }
                            }
                        }));
                    }
                });
            }
        });
    }
    mostrarSoloUna(recor) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Components_entradas_entradas_component__WEBPACK_IMPORTED_MODULE_5__["EntradasComponent"],
                componentProps: {
                    type: 'recordatorio',
                    data: recor
                }
            });
            yield modal.present();
        });
    }
};
EntradasServices.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_3__["RecordatoriosService"] },
    { type: _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"] }
];
EntradasServices = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EntradasServices);



/***/ }),

/***/ "Gq8O":
/*!******************************************************!*\
  !*** ./src/app/providers/Api/Seguimiento.service.ts ***!
  \******************************************************/
/*! exports provided: ApiSeguimientoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiSeguimientoService", function() { return ApiSeguimientoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");








let ApiSeguimientoService = class ApiSeguimientoService {
    constructor(almacenamiento, navCtrl, http) {
        this.almacenamiento = almacenamiento;
        this.navCtrl = navCtrl;
        this.http = http;
    }
    handlerError(error) {
        return error.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delayWhen"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(3000)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((errorHttp) => {
            if (errorHttp instanceof ErrorEvent) {
                throw new Error('Error de Red');
            }
            else {
                if (errorHttp.status === 404) {
                    throw new Error(' al realizar la solicictud ');
                }
                else if (errorHttp.status === 401) {
                    try {
                        this.almacenamiento.terminarPartida().then(() => {
                            this.navCtrl.navigateRoot('/home');
                        });
                    }
                    catch (error) {
                        throw new Error('No tiene permisos para realizar la petición ');
                    }
                    throw new Error('No tiene permisos para realizar la petición ');
                }
                else {
                    throw new Error(' No se pudo realizar la conexión, comprueba tu red ');
                }
            }
        }));
    }
    solicitudesRecibidas(token) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["URL_SERVER"]}/seguimiento/usuarios/`, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.handlerError(error)));
    }
    enviarSolicitud(data) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'x-token': data.token
            })
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["URL_SERVER"]}/seguimiento`, {
            IDreceptor: data.IDreceptor
        }, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.handlerError(error)));
    }
    consultarSolicitud(token, idReceptor) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'x-token': token,
                'x-idReceptor': idReceptor
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["URL_SERVER"]}/seguimiento/consultar/`, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.handlerError(error)));
    }
    cancelarSolicitud(token, idReceptor, type) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'x-token': token,
                'x-idReceptor': idReceptor,
                'x-tipo': type
            })
        };
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["URL_SERVER"]}/seguimiento/usuario/`, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.handlerError(error)));
    }
    aceptarSolicitud(token, idReceptor) {
        console.log('Datos ', token, idReceptor);
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'x-token': token,
                'x-idReceptor': idReceptor
            })
        };
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["URL_SERVER"]}/seguimiento/usuario/`, {}, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.handlerError(error)));
    }
    solicitudesAceptadas(token, idReceptor, type) {
        //   console.log(type, idReceptor, 'LLamando a todo');
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'x-token': token,
                'x-idReceptor': idReceptor,
                'x-tipo': type
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["URL_SERVER"]}/seguimiento/usuarios/aceptados/`, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.handlerError(error)));
    }
    solicitudesAceptadasSeguidos(token, idReceptor, type) {
        // console.log(type, idReceptor, 'LLamando a todo');
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'x-token': token,
                'x-idReceptor': idReceptor,
                'x-tipo': type
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["URL_SERVER"]}/seguimiento/usuarios/aceptados/seguidos/`, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => this.handlerError(error)));
    }
};
ApiSeguimientoService.ctorParameters = () => [
    { type: _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_2__["InicioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
ApiSeguimientoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiSeguimientoService);



/***/ }),

/***/ "HavB":
/*!**************************************************!*\
  !*** ./src/app/providers/Api/Pedidos.service.ts ***!
  \**************************************************/
/*! exports provided: PedidosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosService", function() { return PedidosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let PedidosService = class PedidosService {
    constructor(http, router, MmyTransfer) {
        this.http = http;
        this.router = router;
        this.MmyTransfer = MmyTransfer;
    }
    hanflerError(error) {
        let intento = 0;
        return error.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delayWhen"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(3000)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((errorHttp) => {
            console.log('Entramos a intentos');
            if (errorHttp instanceof ErrorEvent) {
                throw new Error('Error de Red');
            }
            else {
                if (errorHttp.status === 404) {
                    throw new Error(' Página no encontrada');
                }
                if (errorHttp.status === 401) {
                    throw new Error(' No tiene permisos ');
                }
                else {
                    // throw new Error(' No se pudo realizar la conexión, comprueba tu red ');
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(3));
    }
    crearPedido(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/pedidos/crear/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    misPedido(token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/pedidos/lista/`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    misChats(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/chats/lista/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    misPedidoUsuario(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/pedidos/lista/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    misSalas(token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ticket/salas`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    mensajes(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/pedidos/chat`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    traermensajesNoVistos(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/pedidos/chat/vistos`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    marcarvisto(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/pedidos/chat/vistos`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    infoPedido(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/pedidos/info`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    infoPedidoPut(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/pedidos/info`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    crearEstados(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/pedidos/estados`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    consultarEstados(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/pedidos/estados`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    consultarChat(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/unico/consultar/chat`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    consultarChatFotos(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/unico/consultar/chat/fotos`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    consultarSala(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/pedidos/consultar/chat`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    consultarMapa(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/pedidos/consultar/mapa`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    consultarMapaUnico(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/pedidos/consultar/mapa/unico`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    crearMapa(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/pedidos/crear/mapa`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    editarMapa(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/pedidos/editar/mapa`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    editarMapaInfo(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/pedidos/editar/mapa/info`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    editarMapaInfoD(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/pedidos/editar/mapa/infod`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    editarPedido(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/pedidos/editar`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    editarChat(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/chat/editar`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    subirArchivosChat(token, id, imagen, final, cont, name, mime) {
        console.log('archivo', imagen);
        const options = {
            fileKey: 'archivo',
            fileName: name,
            mimeType: mime,
            httpMethod: 'PUT',
            headers: {
                'x-token': token,
                'x-sala': id,
                'x-final': final,
                'x-cont': cont
            }
        };
        const fileTransfer = this.MmyTransfer.create();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(fileTransfer.upload(imagen, `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/pedido/upload`, options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            // console.log(`No se pudo subir la imagen `, error);
            throw new Error(imagen);
        }));
    }
};
PedidosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"] }
];
PedidosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PedidosService);



/***/ }),

/***/ "KkZy":
/*!***********************************************************!*\
  !*** ./src/app/Pages/Modales/entradas/entradas.module.ts ***!
  \***********************************************************/
/*! exports provided: EntradasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntradasPageModule", function() { return EntradasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _entradas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entradas-routing.module */ "Tclo");
/* harmony import */ var _entradas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entradas.page */ "BEft");







let EntradasPageModule = class EntradasPageModule {
};
EntradasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _entradas_routing_module__WEBPACK_IMPORTED_MODULE_5__["EntradasPageRoutingModule"]
        ],
        declarations: [_entradas_page__WEBPACK_IMPORTED_MODULE_6__["EntradasPage"]]
    })
], EntradasPageModule);



/***/ }),

/***/ "LClq":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/modal-mapas/modal-mapas.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"oscuro\">\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"cerrar()\">\n                <ion-icon name=\"chevron-back-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Añadir Empleados al pedido</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n\n    <div class=\"divider light\"></div>\n\n    <div class=\"divider\"></div>\n\n    <!-- <div class=\"cen\" *ngIf=\"empleados.length === 0\">\n        <img src=\"/assets/Empleados.png\" width=\"100px\" alt=\"\">\n        <h3 class=\"tituloGrande\">No tiene empleados registrados</h3>\n    </div> -->\n\n    <div class=\"carga\" *ngIf=\"load\">\n        <ion-list>\n            <ion-item *ngFor=\"let e of [1,1,1,1,1]\">\n                <ion-skeleton-text slot=\"start\" animated style=\"width: 50px; height: 50px\"></ion-skeleton-text>\n                <ion-label>\n                    <ion-skeleton-text animated style=\"width: 50%; height: 20px\"></ion-skeleton-text>\n                    <ion-skeleton-text animated style=\"width: 90%; height: 20px\"></ion-skeleton-text>\n                </ion-label>\n            </ion-item>\n        </ion-list>\n\n    </div>\n\n    <ion-list *ngIf=\"incluidos.length > 0\">\n\n        <ion-item-divider color=\"secondary\">Miembros</ion-item-divider>\n\n        <ion-item-sliding *ngFor=\"let empleado of incluidos; let i = index;\">\n            <ion-item>\n                <ion-avatar slot=\"start\">\n                    <img [src]=\"empleado.usuario.imagen\" width=\"100%\" height=\"100%\" alt=\"\">\n                </ion-avatar>\n                <ion-label>\n                    <span>{{ empleado.usuario.nombrecompleto }}</span><br> <strong class=\"verdei\">@{{ empleado.usuario.nombreusuario }}</strong>\n                    <div *ngIf=\"empleado.cargo\" class=\"rojoi\">Cargo: {{ empleado.cargo }}</div>\n                    <div *ngIf=\"empleado.alias\" class=\"rojoi\">Alías: {{ empleado.alias }}</div>\n                </ion-label>\n            </ion-item>\n\n            <ion-item-options side=\"end\">\n                <ion-item-option color=\"danger\" (click)=\"quitar(empleado, i)\">\n                    <ion-icon name=\"trash-outline\" slot=\"icon-only\"></ion-icon>\n                </ion-item-option>\n            </ion-item-options>\n\n        </ion-item-sliding>\n    </ion-list>\n\n\n    <ion-list *ngIf=\"empleados.length > 0\">\n\n        <ion-item-divider color=\"primary\">Empleados</ion-item-divider>\n\n        <ion-item-sliding *ngFor=\"let empleado of empleados; let i = index;\">\n            <ion-item>\n                <ion-avatar slot=\"start\">\n                    <img [src]=\"empleado.usuario.imagen\" width=\"100%\" height=\"100%\" alt=\"\">\n                </ion-avatar>\n                <ion-label>\n                    <span>{{ empleado.usuario.nombrecompleto }}</span><br> <strong class=\"verdei\">@{{ empleado.usuario.nombreusuario }}</strong>\n                    <div *ngIf=\"empleado.cargo\" class=\"rojoi\">Cargo: {{ empleado.cargo }}</div>\n                    <div *ngIf=\"empleado.alias\" class=\"rojoi\">Alías: {{ empleado.alias }}</div>\n                </ion-label>\n\n\n\n            </ion-item>\n            <ion-item-options side=\"end\">\n                <ion-item-option color=\"barra\" (click)=\"agregar(empleado, i)\">\n                    <ion-icon name=\"add-outline\" slot=\"icon-only\"></ion-icon>\n                </ion-item-option>\n            </ion-item-options>\n\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>");

/***/ }),

/***/ "Lg4h":
/*!*************************************************************************!*\
  !*** ./src/app/Components/modal-megustas/modal-megustas.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1tZWd1c3Rhcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "MUWe":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/entradas/entradas.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"oscuro\">\n        <ion-title>Recordatorios</ion-title>\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"cerrar()\">\n                <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\" color=\"oscuro\">\n    <div class=\"content\">\n        <div class=\"leer\">\n            <strong>{{ creador }}</strong>\n        </div>\n        <div class=\"imagen\">\n            <ion-avatar class=\"avatar\">\n                <img src=\"https://motocaliapp.com/{{ img }}\">\n            </ion-avatar>\n        </div>\n    </div>\n    <ion-card color=\"oscuro\" mode=\"ios\">\n        <ion-card-title class=\"titulo\">{{ titulo }}</ion-card-title>\n        <ion-card-content class=\"contenido\">\n            <p>{{ contenido }}</p>\n            <ion-button expand=\"block\" color=\"danger\" (click)=\"guardar()\">ACEPTAR</ion-button>\n        </ion-card-content>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ "MUpS":
/*!***********************************************************!*\
  !*** ./src/app/Components/entradas/entradas.component.ts ***!
  \***********************************************************/
/*! exports provided: EntradasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntradasComponent", function() { return EntradasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_entradas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./entradas.component.html */ "MUWe");
/* harmony import */ var _entradas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entradas.component.scss */ "aT1Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/Api/Recordatorios.service */ "71hY");







let EntradasComponent = class EntradasComponent {
    constructor(modalCtrl, almacenamiento, apiRecordatorio) {
        this.modalCtrl = modalCtrl;
        this.almacenamiento = almacenamiento;
        this.apiRecordatorio = apiRecordatorio;
        this.titulo = '';
        this.contenido = '';
        this.creador = '';
        this.img = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        console.log(this.data);
        this.titulo = this.data.informacion.titulo;
        this.contenido = this.data.informacion.contenido;
        this.creador = this.data.creador.nombrecompleto;
        this.img = this.data.creador.imagen.length > 0 ? this.data.creador.imagen[0].path : '';
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                console.log(info, this.data);
                const miUsuario = this.data.destinatarios.filter((item) => item.id === info._id);
                if (miUsuario.length > 0) {
                    const objeto = miUsuario[0];
                    objeto.visto = 'SI';
                    this.apiRecordatorio.putRecordatorioPersona(info.token, { _id: this.data._id, destino: objeto }).subscribe((data) => {
                        this.cerrar();
                        if (data.exe) {
                            console.log('BIEN HECHO ', data);
                        }
                        else {
                        }
                    });
                }
            }
        });
    }
    cerrar() {
        this.modalCtrl.dismiss({});
    }
};
EntradasComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"] },
    { type: _providers_Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_6__["RecordatoriosService"] }
];
EntradasComponent.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
EntradasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-entradas',
        template: _raw_loader_entradas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_entradas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EntradasComponent);



/***/ }),

/***/ "MeGx":
/*!*************************************************!*\
  !*** ./src/app/pipes/archivos/descarga.pipe.ts ***!
  \*************************************************/
/*! exports provided: DescargaPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescargaPipe", function() { return DescargaPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/Api/EstadoCitas.service */ "AQLj");





let DescargaPipe = class DescargaPipe {
    constructor(file, apiCitas, dom) {
        this.file = file;
        this.apiCitas = apiCitas;
        this.dom = dom;
    }
    transform(file) {
        return this.validar(file).then((e) => {
            return e;
        });
    }
    validar(file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const html = yield this.file.checkFile(this.file.dataDirectory + 'MimotoMedia/', file);
                if (html) {
                    console.log(html, ' html');
                    const url = window.Ionic.WebView.convertFileSrc(this.file.dataDirectory + 'MimotoMedia/' + file);
                    console.log('url', url, this.dom.bypassSecurityTrustUrl(url));
                    return '<video width="100%" src="' + url + '" controls></video>';
                }
            }
            catch (error) {
                // tslint:disable-next-line: deprecation
                this.apiCitas.descargarArchivosChat(file).subscribe((descarga) => {
                    console.log(descarga, ' Descargando');
                    const url = window.Ionic.WebView.convertFileSrc(this.file.dataDirectory + 'MimotoMedia/' + file);
                    console.log('url descargada', url, this.dom.bypassSecurityTrustUrl(url));
                    return '<video width="100%" src="' + url + '" controls></video>';
                }, (error) => {
                    return '<ion-chip color="danger">Error al escargar  ' + error + '</ion-chip>';
                });
            }
        });
    }
};
DescargaPipe.ctorParameters = () => [
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"] },
    { type: _providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_4__["EstadoCitasService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
DescargaPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'descarga'
    })
], DescargaPipe);



/***/ }),

/***/ "Mgl2":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/modal-patinada/modal-patinada.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"oscuro\">\n        <ion-title>Configurar patinada</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"guardar()\">\n                <ion-icon name=\"checkmark-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"cerrar()\">\n                <ion-icon name=\"close-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n        <ion-item-divider color=\"light\">\n            <ion-label>Descripción</ion-label>\n        </ion-item-divider>\n\n        <ion-item class=\"sinfondo\" mode=\"ios\">\n            <ion-textarea rows=\"5\" placeholder=\"Escriba la descripción de la patinada\" (ionChange)=\"escribir($event)\"></ion-textarea>\n        </ion-item> <br>\n        <ion-item-divider color=\"light\">\n            <ion-label>Enviar notificación a:</ion-label>\n        </ion-item-divider>\n        <ion-radio-group (ionChange)=\"cambiar($event)\">\n\n\n            <ion-item>\n                <ion-label>País</ion-label>\n                <ion-radio slot=\"start\" value=\"pais\"></ion-radio>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Ciudades</ion-label>\n                <ion-radio slot=\"start\" value=\"ciudad\"></ion-radio>\n            </ion-item>\n\n        </ion-radio-group>\n\n        <ion-item-divider *ngIf=\"vista === 1\" color=\"light\">\n            <ion-label>Escoja un país</ion-label>\n        </ion-item-divider>\n\n        <ion-item *ngIf=\"vista === 1\" lines=\"none\" class=\"noborder\" mode=\"md\">\n            <ion-label class=\"ion-text-wrap\">Selecciona el País</ion-label>\n            <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"paissel($event)\" [value]=\"pais\">\n                <ion-select-option *ngFor=\"let paiss of paises\" value=\"{{paiss.nombre}}\">{{paiss.nombre}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item-divider *ngIf=\"vista === 2\" color=\"light\">\n            <ion-label>Escoja un país y luego las ciudades</ion-label>\n        </ion-item-divider>\n\n\n        <ion-item *ngIf=\"vista === 2\" lines=\"none\" class=\"noborder\" mode=\"md\">\n            <ion-label class=\"ion-text-wrap\">Selecciona el País</ion-label>\n            <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"listarCiudades($event)\" [value]=\"pais\">\n                <ion-select-option *ngFor=\"let paiss of paises\" value=\"{{paiss.nombre}}\">{{paiss.nombre}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngIf=\"ciudad && vista === 2\">\n        <ion-searchbar mode=\"ios\" placeholder=\"Buscar Ciudad\" (ionChange)=\"buscar($event)\"></ion-searchbar>\n        <ion-item *ngFor=\"let ciudad of ciudades | filtrociudad : texto; let i = index;\">\n            <ion-label>{{ciudad.nombre}}</ion-label>\n            <ion-checkbox [checked]=\"ciudad.check\" mode=\"ios\" slot=\"end\" value=\"{{ciudad.nombre}}\" color=\"success\" (ionChange)=\"seleccionarCiudad($event, i)\"></ion-checkbox>\n        </ion-item>\n    </ion-list>\n\n</ion-content>");

/***/ }),

/***/ "NdY2":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/modal-megustas/modal-megustas.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"oscuro\">\n        <ion-title>Le gusta a:</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"cerrar()\">\n                <ion-icon name=\"close-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item *ngFor=\"let persona of listado\" (click)=\"perfil(persona.creador.nombreusuario)\">\n            <ion-avatar slot=\"start\">\n                <img src=\"https://www.motocaliapp.com/{{ persona.creador.imagen[0].path }}\">\n            </ion-avatar>\n            <ion-label class=\"ion-text-wrap\">\n                <div>{{ persona.creador.nombrecompleto }}</div>\n                <strong>{{ persona.creador.nombreusuario }}</strong>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n</ion-content>");

/***/ }),

/***/ "OKd0":
/*!*************************************************!*\
  !*** ./src/app/pipes/Fechas/Diferencia.pipe.ts ***!
  \*************************************************/
/*! exports provided: DiferenciaPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiferenciaPipe", function() { return DiferenciaPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



let DiferenciaPipe = class DiferenciaPipe {
    transform(fecha1, fecha2, tipo) {
        const fecha = moment__WEBPACK_IMPORTED_MODULE_2__(fecha1).format('DD-MM-YYYY HH:mm');
        const fechaf = moment__WEBPACK_IMPORTED_MODULE_2__(fecha2).format('DD-MM-YYYY HH:mm');
        console.log(fecha, fechaf);
        if (tipo === 1) {
            console.log(moment__WEBPACK_IMPORTED_MODULE_2__(fechaf).diff(moment__WEBPACK_IMPORTED_MODULE_2__(fecha), 'minutes'));
            if (moment__WEBPACK_IMPORTED_MODULE_2__(fechaf).diff(moment__WEBPACK_IMPORTED_MODULE_2__(fecha), 'minutes') > 60) {
                const msg = ((moment__WEBPACK_IMPORTED_MODULE_2__(fechaf).diff(moment__WEBPACK_IMPORTED_MODULE_2__(fecha), 'minutes')) / 60).toFixed();
                return msg + ' Horas';
            }
            else {
                const msg = moment__WEBPACK_IMPORTED_MODULE_2__(fechaf).diff(moment__WEBPACK_IMPORTED_MODULE_2__(fecha), 'minutes');
                return msg + ' Minutos';
            }
        }
        else {
            if (moment__WEBPACK_IMPORTED_MODULE_2__(moment__WEBPACK_IMPORTED_MODULE_2__().format('DD-MM-YYYY HH:mm')).diff(moment__WEBPACK_IMPORTED_MODULE_2__(fecha), 'minutes') > 60) {
                const msg = ((moment__WEBPACK_IMPORTED_MODULE_2__(moment__WEBPACK_IMPORTED_MODULE_2__().format('DD-MM-YYYY HH:mm')).diff(moment__WEBPACK_IMPORTED_MODULE_2__(fecha), 'minutes')) / 60).toFixed();
                return msg + ' Horas';
            }
            else {
                const msg = moment__WEBPACK_IMPORTED_MODULE_2__(moment__WEBPACK_IMPORTED_MODULE_2__().format('DD-MM-YYYY HH:mm')).diff(moment__WEBPACK_IMPORTED_MODULE_2__(fecha), 'minutes');
                return msg + ' Minutos';
            }
        }
    }
};
DiferenciaPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'diferencia'
    })
], DiferenciaPipe);



/***/ }),

/***/ "PeIZ":
/*!************************************************!*\
  !*** ./src/app/pipes/numeros/calculos.pipe.ts ***!
  \************************************************/
/*! exports provided: ValoresPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValoresPipe", function() { return ValoresPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ValoresPipe = class ValoresPipe {
    transform(value) {
        console.log(value, 'valor');
        let cantidad = 0;
        value.forEach((item) => {
            cantidad = cantidad + parseFloat(item.valoru);
        });
        console.log(cantidad);
        return cantidad;
    }
};
ValoresPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'calculo'
    })
], ValoresPipe);



/***/ }),

/***/ "QsUc":
/*!*******************************************************************!*\
  !*** ./src/app/Components/modal-mapas/modal-mapas.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cen {\n  max-width: 350px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb2RhbC1tYXBhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6Im1vZGFsLW1hcGFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbiB7XHJcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "SpuA":
/*!************************************************!*\
  !*** ./src/app/pipes/Fechas/CambioUTC.pipe.ts ***!
  \************************************************/
/*! exports provided: CambioUTCaLocalPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CambioUTCaLocalPipe", function() { return CambioUTCaLocalPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



let CambioUTCaLocalPipe = class CambioUTCaLocalPipe {
    transform(date) {
        console.log(date, 'fechin');
        let fecha = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](date).toDate();
        return moment__WEBPACK_IMPORTED_MODULE_2__(fecha).format('dddd, DD MMMM YYYY h:mm:a');
    }
};
CambioUTCaLocalPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'cambioUTC'
    })
], CambioUTCaLocalPipe);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _providers_PushService_PushService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./providers/PushService/PushService.service */ "CkIw");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Red_servicio_red_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./providers/Red/servicio-red.service */ "3KoX");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _providers_Conexiones_Conexion_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./providers/Conexiones/Conexion.service */ "1+ow");
/* harmony import */ var _providers_cargas_Entradas_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./providers/cargas/Entradas.service */ "FlrC");













let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, almacenamiento, redService, conexion, entradas, pushService, socket) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.almacenamiento = almacenamiento;
        this.redService = redService;
        this.conexion = conexion;
        this.entradas = entradas;
        this.pushService = pushService;
        this.socket = socket;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.statusBar.backgroundColorByHexString('#273238');
            this.splashScreen.hide();
            const info = yield this.almacenamiento.crearBaseDeDatosSQLite();
            this.pushService.configuracionInicial();
            yield this.conexion.cargaLista();
            this.entradas.crearEntrada();
            if (info) {
                const login = yield this.almacenamiento.obtenerToken();
                if (login) {
                    this.socket.emit('conectar', login);
                }
            }
        }));
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_8__["InicioService"] },
    { type: _providers_Red_servicio_red_service__WEBPACK_IMPORTED_MODULE_9__["ServicioRedService"] },
    { type: _providers_Conexiones_Conexion_service__WEBPACK_IMPORTED_MODULE_11__["ConexionService"] },
    { type: _providers_cargas_Entradas_service__WEBPACK_IMPORTED_MODULE_12__["EntradasServices"] },
    { type: _providers_PushService_PushService_service__WEBPACK_IMPORTED_MODULE_7__["PushService"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__["Socket"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "Tclo":
/*!*******************************************************************!*\
  !*** ./src/app/Pages/Modales/entradas/entradas-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: EntradasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntradasPageRoutingModule", function() { return EntradasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _entradas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entradas.page */ "BEft");




const routes = [
    {
        path: '',
        component: _entradas_page__WEBPACK_IMPORTED_MODULE_3__["EntradasPage"]
    }
];
let EntradasPageRoutingModule = class EntradasPageRoutingModule {
};
EntradasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EntradasPageRoutingModule);



/***/ }),

/***/ "Tsh3":
/*!*****************************************************!*\
  !*** ./src/app/pipes/filtros/filtroAccesos.pipe.ts ***!
  \*****************************************************/
/*! exports provided: FiltroChatAccesos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroChatAccesos", function() { return FiltroChatAccesos; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let FiltroChatAccesos = class FiltroChatAccesos {
    transform(listado, arr, tipo) {
        const resultado = [];
        if (tipo === 1) {
            arr.forEach((item => {
                let miarr = listado.filter((acc) => acc._id === item);
                if (miarr.length > 0) {
                    resultado.push(miarr[0].nombrecompleto);
                }
            }));
        }
        else {
            listado.forEach((item => {
                let miarr = arr.filter((acc) => acc === item._id);
                if (miarr.length === 0) {
                    resultado.push(item.nombrecompleto);
                }
            }));
        }
        // console.log(listado, 'otro', arr, 'listado')
        return resultado;
    }
};
FiltroChatAccesos = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'fchat'
    })
], FiltroChatAccesos);



/***/ }),

/***/ "UInZ":
/*!***********************************************************************!*\
  !*** ./src/app/Components/modal-megustas/modal-megustas.component.ts ***!
  \***********************************************************************/
/*! exports provided: ModalMegustasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalMegustasComponent", function() { return ModalMegustasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_megustas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-megustas.component.html */ "NdY2");
/* harmony import */ var _modal_megustas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-megustas.component.scss */ "Lg4h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/Almacenamiento/inicio.service */ "fsfq");







let ModalMegustasComponent = class ModalMegustasComponent {
    constructor(almacenamiento, modal, router) {
        this.almacenamiento = almacenamiento;
        this.modal = modal;
        this.router = router;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        console.log(this.listado);
    }
    perfil(usuario) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                if (info.nusuario === usuario) {
                    this.router.navigate(['/perfil/', 's']);
                    this.cerrar();
                }
                else {
                    this.router.navigate(['/visita/', usuario, 's']);
                    this.cerrar();
                }
            }
        });
    }
    cerrar() {
        this.modal.dismiss();
    }
};
ModalMegustasComponent.ctorParameters = () => [
    { type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__["InicioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ModalMegustasComponent.propDecorators = {
    listado: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalMegustasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-megustas',
        template: _raw_loader_modal_megustas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_megustas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalMegustasComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n    <!-- <app-menu></app-menu> -->\n    <ion-router-outlet id=\"perfil\"></ion-router-outlet>\n</ion-app>");

/***/ }),

/***/ "W7Eg":
/*!***********************************************************!*\
  !*** ./src/app/Components/Media/video/video.component.ts ***!
  \***********************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_video_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./video.component.html */ "6h90");
/* harmony import */ var _video_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video.component.scss */ "qRVJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "R0Ic");





let VideoComponent = class VideoComponent {
    constructor() {
        this.paused = true;
        this.currProgress = 0;
        this.slideOpts = {
            zoom: {
                maxRatio: 3,
                minRatio: 1,
                toggle: true
            },
        };
        this.focus = false;
        this.progress = 0;
        this.value = 0;
        this.bandera = true;
        this.carga = true;
        this.mostrar = false;
    }
    ngAfterViewInit() {
        this.current();
        console.log(this.url, ' archivo');
    }
    play() {
        this.paused = true;
        this.bandera = true;
        this.focus = true;
        this.video.nativeElement.play();
    }
    pause() {
        // console.log('Hola pause')
        this.paused = false;
        this.bandera = false;
        this.focus = false;
        this.video.nativeElement.pause();
    }
    current() {
        this.video.nativeElement.addEventListener('canplay', () => {
            this.carga = false;
            if (this.bandera) {
                this.play();
            }
        });
        this.video.nativeElement.addEventListener('progress', () => {
            this.carga = true;
        });
        this.video.nativeElement.addEventListener('timeupdate', () => {
            this.currProgress = (this.video.nativeElement.currentTime * 100) / this.video.nativeElement.duration;
            this.currentt = Math.round(this.video.nativeElement.currentTime);
            if (this.currentt < 10) {
                this.currentt = '0' + this.currentt;
            }
            if (this.video.nativeElement.currentTime === this.video.nativeElement.duration) {
                this.play();
            }
        });
    }
    toggle() {
        console.log(this.bandera, this.focus);
        if (this.bandera) {
            this.mostrar = true;
            this.bandera = false;
            this.pause();
        }
        else {
            this.mostrar = false;
            // console.log(this.focus);
            if (this.focus) {
                this.pause();
            }
            else {
                this.play();
            }
        }
    }
    progreso(event) {
        this.progress = event.detail.value;
        if (this.focus) {
            this.play();
            this.focus = false;
        }
        this.video.nativeElement.currentTime = Number((this.video.nativeElement.duration * (event.detail.value / 100)).toFixed(6));
    }
    foco(e) {
        this.bandera = true;
        this.focus = true;
        this.pause();
    }
    onProgress() {
    }
    ngOnDestroy() {
        this.video.nativeElement.pause();
        console.log('Destrucción');
    }
};
VideoComponent.ctorParameters = () => [];
VideoComponent.propDecorators = {
    url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['video', { static: true },] }],
    range: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['range', { static: false },] }]
};
VideoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-video',
        template: _raw_loader_video_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('entry', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    transform: 'scale(0)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    transform: 'scale(1)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* <=> *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('50ms')
                ])
            ])
        ],
        styles: [_video_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VideoComponent);



/***/ }),

/***/ "WGaO":
/*!***********************************************!*\
  !*** ./src/app/providers/Api/IGTM.service.ts ***!
  \***********************************************/
/*! exports provided: IGTMService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IGTMService", function() { return IGTMService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");







let IGTMService = class IGTMService {
    constructor(http, MmyTransfer) {
        this.http = http;
        this.MmyTransfer = MmyTransfer;
    }
    hanflerError(error) {
        let intento = 0;
        return error.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delayWhen"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(3000)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((errorHttp) => {
            console.log('Entramos a intentos');
            if (errorHttp instanceof ErrorEvent) {
                throw new Error('Error de Red');
            }
            else {
                if (errorHttp.status === 404) {
                    throw new Error(' Página no encontrada');
                }
                else {
                    // throw new Error(' No se pudo realizar la conexión, comprueba tu red ');
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(3));
    }
    BuscarUsuarios(token, patron) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/empleados/buscar/`, { patron }, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    crearPublicacion(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/igtm/crear/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerPublicacion(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/igtm/leer/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerPublicacionUsuario(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/igtm/leer/usuario`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    subirArchivosChat(token, id, imagen, final, cont, historia, name, mime) {
        console.log('archivo', imagen);
        const options = {
            fileKey: 'archivo',
            fileName: name,
            mimeType: mime,
            httpMethod: 'POST',
            headers: {
                'x-token': token,
                'x-idpublicacion': id,
                'x-final': final,
                'x-cont': cont,
                'x-historia': historia
            }
        };
        const fileTransfer = this.MmyTransfer.create();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(fileTransfer.upload(imagen, `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/igtm/upload`, options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            console.log(`No se pudo subir la imagen `, error);
            throw new Error(`No se pudo subir la imagen `);
        }));
    }
    leerFotos(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/igtm/fotos/leer/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    vistos(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/igtm/historias/vistos/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    eliminar(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/igtm/eliminar/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    meGusta(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/igtm/megusta/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    saber(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/igtm/publicacion/seguidos/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    saberHistorias(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/igtm/historias/seguidos/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerUna(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/igtm/leer/uno/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    leerUna2(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/igtm/leer/uno/historia`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    crearComentario(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/igtm/comentarios/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    crearCompartida(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/igtm/compartir/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    crearGuardado(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/igtm/guardado/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
};
IGTMService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"] }
];
IGTMService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IGTMService);



/***/ }),

/***/ "X7xD":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/politica/politica.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"oscuro\">\n        <ion-title>POLÍTICA DE DATOS</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"cerrar()\">\n                <ion-icon slot=\"icon-only\" name=\"close-outline\" color=\"blanco\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n    <div class=\"titulo2\">En esta Política, se describe la información que tratamos para respaldar a AlmecApp.</div>\n    <div class=\"titulo\">\n        ¿Qué tipo de información recopilamos?\n    </div>\n\n    <p>A fin de proporcionarte los Productos de (AlmecApp) debemos tratar información sobre los dos tipos de perfiles que se utilizan usuarios y administradores que hagan parte o estén vinculados. El tipo de información que recopilamos depende de la forma\n        en la que uses nuestros productos.</p> <br>\n\n    <p>La información que se recopila abarca solamente al sector de mecánica y almacenes de repuestos para vehículos que esté inscrito o tenga una cuenta con nuestros productos AlmecApp. Es una APP personalizada que permitirá relacionar al establecimiento\n        que presta servicios para vehículos con sus clientes o personas que estén interesadas en sus servicios, adicional a esto podrá tener múltiples funciones que podrá utilizar para interactuar con los usuarios. </p> <br>\n\n    <div class=\"s\"> <strong>Información y contenido que nos proporcionas:</strong></div>\n    <p>Recopilamos el contenido, las comunicaciones y otros datos que proporcionas cuando usas nuestro Producto. Por ejemplo, cuando te registras para crear una cuenta, creas o compartas contenido, y envías mensajes a otras personas o te comunicas con ellas.</p>\n    <br>\n\n    <div class=\"s\"><strong>  Información relacionada con la Hoja de Vida: </strong></div>\n\n    <p>Solamente tendrá acceso a revisión, modificación, quien tenga perfil de ADMINISTRADOR y será visible para el usuario con que esté relacionada la hoja de vida. </p><br>\n\n    <div class=\"s\"><strong> Contacto: </strong></div>\n    <p>Recopilamos información sobre los vehículos de las personas, información de los almacenes de venta de repuestos, talleres y demás establecimientos que prestan servicios para vehículos.</p> <br>\n\n    <div class=\"s\"><strong>Tu uso:</strong></div>\n    <p>\n        Recopilamos información sobre cómo usas nuestro Producto, como los tipos de contenido que compartes, las funciones que utilizas, las acciones que llevas a cabo y las personas o cuentas con las que interactúas\n    </p> <br>\n\n    <div class=\"s\"> <strong>Información sobre transacciones realizadas en nuestros Productos:</strong></div>\n    <p>Si usas nuestros Productos para efectuar una solicitud de servicio (ejemplo: cuando genera un Ticket de servicio), recopilamos información sobre dicha solicitud. Esto incluye fecha de la solicitud, duración de la solicitud, estado de la solicitud\n        , Número de Ticket, finalización del servicio y detalles de contacto. </p> <br>\n    <div class=\"titulo\">¿Cómo usamos esta información?</div>\n    <div class=\"s\"> <strong> Información relacionada con la ubicación:</strong></div>\n    <p>\n        usamos la información relacionada con la ubicación, como la ubicación actual del lugar que has decidido solicitar el servicio y te gustaría visitar, así como los demás establecimientos que se encuentran cerca de ti. La información relacionada con la ubicación\n        no se guardará en el histórico , solamente se visualizará en el momento de la búsqueda a excepción de los establecimientos registrados en la aplicación, ya que estos necesitan su ubicación pública para ser encontrados por los usuarios.</p>\n    <br>\n\n    <div class=\"s\"><strong> Información relacionada con la Hoja de Vida:</strong></div>\n    <p>Usamos esta información que tenemos para generar estadísticas e informar al ADMINISTRADOR y al cliente sobre el estado de su vehículo durante el trabajo realizado.</p> <br>\n    <div class=\"titulo\">\n        ¿Cómo se comparte esta información?\n    </div>\n    <p>\n        La información que compartes en noticias o en el inicio, será vista únicamente por los usuarios que te siguen al igual que la información de tu vehículo o establecimiento. Si su usuario es ADMINISTRADOR la información pública será la ubicación de su negocio.\n        ¿Cómo puedo administrar o eliminar la información sobre mí? Te damos la posibilidad de acceder a tus datos, rectificarlos, transferirlos y suprimirlos. siempre y cuando lo hayas creado con tu usuario.\n    </p> <br>\n\n    <div class=\"titulo\">¿Cómo respondemos a solicitudes legales o evitamos daños?</div>\n    <div class=\"s\">Accedemos a tu información, la conservamos y la compartimos con organismos reguladores, autoridades u otras partes en los siguientes casos:\n    </div>\n    <p> En respuesta a un requerimiento legal (como una orden de registro, una orden judicial o una citación) si creemos de buena fe que la ley así lo exige. </p> <br>\n\n    <p>Si creemos de buena fe que es necesario para detectar, impedir y abordar casos de fraude, usos no autorizados de los Productos, incumplimientos de las condiciones o las políticas aplicables, así como otras actividades perjudiciales o ilegales; para\n        protegernos (incluidos nuestros derechos, nuestra propiedad o nuestros Productos), así como para proteger a ti o a otras personas, también como parte de investigaciones o indagaciones reglamentarias; o para evitar la muerte o lesiones físicas\n        inminentes.\n    </p> <br>\n    <div class=\"titulo\">¿Cómo te notificaremos sobre cambios que se efectúen en esta Política?</div>\n    <p>Te notificaremos antes de realizar cambios en esta política y te daremos la oportunidad de revisar las modificaciones antes de seguir usando nuestros Productos.</p> <br>\n\n    <div class=\"titulo\"> ¿Cómo puedes hacer llegar tus dudas a AlmecApp?</div>\n    <p>Si tienes preguntas sobre esta política, puedes ponerte en contacto con nosotros.Contactarnos </p> <br>\n    <div class=\"s\"><strong>Teléfono: 3167097692</strong> </div>\n\n</ion-content>");

/***/ }),

/***/ "XoHZ":
/*!***************************************************!*\
  !*** ./src/app/pipes/filtros/filtro-chat.pipe.ts ***!
  \***************************************************/
/*! exports provided: FiltroChat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroChat", function() { return FiltroChat; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let FiltroChat = class FiltroChat {
    transform(listado, param) {
        param = param.toLowerCase();
        if (param === '') {
            return listado;
        }
        else {
            console.log(param);
            return listado.filter((item) => {
                const val = item;
                item = item.toLowerCase();
                if (item.includes(param)) {
                    item = val;
                    return val;
                }
            });
        }
    }
};
FiltroChat = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroChat'
    })
], FiltroChat);



/***/ }),

/***/ "Y6Il":
/*!*************************************************!*\
  !*** ./src/app/pipes/filtros/mi-filtro.pipe.ts ***!
  \*************************************************/
/*! exports provided: MiFiltroPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiFiltroPipe", function() { return MiFiltroPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let MiFiltroPipe = class MiFiltroPipe {
    transform(value, texto) {
        texto = texto.toLowerCase();
        const array = value.filter((item) => {
            item.nombrecompleto = item.nombrecompleto.toLowerCase();
            return item.nombrecompleto.includes(texto);
        });
        return array;
    }
};
MiFiltroPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'miFiltro'
    })
], MiFiltroPipe);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MyHammerConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! chartjs-plugin-zoom */ "9jQl");
/* harmony import */ var chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "G769");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "wljF");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Components/components.module */ "zon2");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "/sJY");
/* harmony import */ var _Pages_Modales_entradas_entradas_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Pages/Modales/entradas/entradas.page */ "BEft");
/* harmony import */ var _Pages_Modales_entradas_entradas_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Pages/Modales/entradas/entradas.module */ "KkZy");












class MyHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerGestureConfig"] {
    constructor() {
        super(...arguments);
        this.overrides = {
            swipe: { direction: hammerjs__WEBPACK_IMPORTED_MODULE_11__["DIRECTION_ALL"] },
        };
    }
}
// Sockets

// n const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
const config = { url: 'https://motocaliapp.com', options: {} };

// PLUGIN












let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [
            _Pages_Modales_entradas_entradas_page__WEBPACK_IMPORTED_MODULE_24__["EntradasPage"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_22__["IonicStorageModule"].forRoot({
                name: '__mimoto',
                driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage']
            }),
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_12__["SocketIoModule"].forRoot(config),
            _Components_components_module__WEBPACK_IMPORTED_MODULE_19__["ComponentsModule"],
            _Pages_Modales_entradas_entradas_module__WEBPACK_IMPORTED_MODULE_25__["EntradasPageModule"]
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_21__["Geolocation"],
            _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_23__["MediaCapture"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__["File"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_16__["FileTransfer"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_17__["FilePath"],
            _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_18__["OneSignal"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_20__["Network"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] },
            { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HAMMER_GESTURE_CONFIG"], useClass: MyHammerConfig }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "ZuHd":
/*!*************************************************************!*\
  !*** ./src/app/Components/detalles/detalles.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhbGxlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "aG1+":
/*!***********************************************************!*\
  !*** ./src/app/Pages/Modales/entradas/entradas.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titulo,\n.contenido {\n  text-align: center;\n}\n\n.contenido p {\n  text-align: left;\n  font-size: 18px;\n  margin-bottom: 20px;\n  white-space: pre-wrap;\n}\n\nion-card {\n  padding: 10px auto;\n}\n\nion-card-title {\n  margin-top: 20px;\n}\n\n.leer {\n  max-width: calc(100% - 70px);\n  width: auto;\n  margin-top: 10px;\n  padding: 5px;\n  border-radius: 5px;\n  background-color: var(--ion-color-success);\n  color: #ffffff;\n  font-size: 18px;\n}\n\n.content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.imagen {\n  margin-right: 5px;\n  width: 50px;\n}\n\n.avatar {\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZW50cmFkYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJOztFQUVJLGtCQUFBO0FBQ1I7O0FBRUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQ1I7O0FBRUk7RUFDSSxrQkFBQTtBQUNSOztBQUVJO0VBQ0ksZ0JBQUE7QUFDUjs7QUFFSTtFQUNJLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNSOztBQUVJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDUjs7QUFFSTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQUNSOztBQUVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDUiIsImZpbGUiOiJlbnRyYWRhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLnRpdHVsbyxcclxuICAgIC5jb250ZW5pZG8ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbnRlbmlkbyBwIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggYXV0bztcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sZWVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmltYWdlbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hdmF0YXIge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH0iXX0= */");

/***/ }),

/***/ "aT1Z":
/*!*************************************************************!*\
  !*** ./src/app/Components/entradas/entradas.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n}\n\n.leer {\n  background-color: #819830;\n  padding: 5px;\n  max-width: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlbnRyYWRhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoiZW50cmFkYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmxlZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgxOTgzMDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1heC13aWR0aDogMzUwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "c6Yc":
/*!*********************************************************************!*\
  !*** ./src/app/Components/alertapopover/alertapopover.component.ts ***!
  \*********************************************************************/
/*! exports provided: AlertapopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertapopoverComponent", function() { return AlertapopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_alertapopover_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./alertapopover.component.html */ "0jW/");
/* harmony import */ var _alertapopover_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alertapopover.component.scss */ "wagy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var src_app_providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/Api/IGTM.service */ "WGaO");
/* harmony import */ var src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/Utilidades/ToastService.service */ "fmoy");








let AlertapopoverComponent = class AlertapopoverComponent {
    constructor(almacenamiento, modalCtrl, toast, apiIgtm, alert, popover) {
        this.almacenamiento = almacenamiento;
        this.modalCtrl = modalCtrl;
        this.toast = toast;
        this.apiIgtm = apiIgtm;
        this.alert = alert;
        this.popover = popover;
    }
    ngOnInit() {
    }
    alerta() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: '¿Esta seguro de eliminar esta publicación?',
                message: 'esta acción será de forma permanente',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel'
                    }, {
                        text: 'Aceptar',
                        handler: () => {
                            this.eliminar();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    eliminar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiIgtm.eliminar(info.token, { id: this.id }).subscribe((data) => {
                    if (data.exe) {
                        this.popover.dismiss({
                            exe: true
                        });
                    }
                    else {
                        this.toast.toastError('No se pudo eliminar la publicación, intentelo mpas tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo eliminar la publicación, intentelo mpas tarde');
                });
            }
        });
    }
};
AlertapopoverComponent.ctorParameters = () => [
    { type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__["ToastServices"] },
    { type: src_app_providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_6__["IGTMService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
AlertapopoverComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AlertapopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-alertapopover',
        template: _raw_loader_alertapopover_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_alertapopover_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AlertapopoverComponent);



/***/ }),

/***/ "cb8P":
/*!******************************************************!*\
  !*** ./src/app/providers/cargas/usuarios.service.ts ***!
  \******************************************************/
/*! exports provided: CargaElementosUsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargaElementosUsuariosService", function() { return CargaElementosUsuariosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Api/Seguimiento.service */ "Gq8O");
/* harmony import */ var _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");





let CargaElementosUsuariosService = class CargaElementosUsuariosService {
    constructor(apiSeguimiento, almacenamiento) {
        this.apiSeguimiento = apiSeguimiento;
        this.almacenamiento = almacenamiento;
        this.seguimientoBehaviour = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](0);
        this.$seguimientoCantidad = this.seguimientoBehaviour.asObservable();
        this.cargared = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('wifi');
        this.$cargarRed = this.cargared.asObservable();
    }
    cargarSeguimientos() {
        this.almacenamiento.obtenerToken().then((info) => {
            this.cancelarSeguimiento = this.apiSeguimiento.solicitudesRecibidas(info.token).subscribe((data) => {
                this.seguimientoBehaviour.next(data.response.SeguimientoData.length);
                console.log(data.response.SeguimientoData, ' seguimientos cant');
            }, (err) => {
                console.log('Error en la solicitud');
            });
        });
    }
    cancelarSuscripciones() {
        this.cancelarSeguimiento.unsubscribe();
    }
    cargarRed(red) {
        console.log('Mi red', red);
        this.cargared.next(red);
    }
};
CargaElementosUsuariosService.ctorParameters = () => [
    { type: _Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_2__["ApiSeguimientoService"] },
    { type: _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_3__["InicioService"] }
];
CargaElementosUsuariosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CargaElementosUsuariosService);



/***/ }),

/***/ "emyi":
/*!*****************************************************************!*\
  !*** ./src/app/Components/modal-chat/modal-chat.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flexc {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-slides {\n  width: 100%;\n  min-height: 100%;\n}\n\nion-slide {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  min-height: 100%;\n  align-items: center;\n}\n\nion-slide img {\n  max-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb2RhbC1jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJtb2RhbC1jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXhjIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5pb24tc2xpZGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1zbGlkZSBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "fmoy":
/*!**************************************************************!*\
  !*** ./src/app/providers/Utilidades/ToastService.service.ts ***!
  \**************************************************************/
/*! exports provided: ToastServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastServices", function() { return ToastServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Almacenamiento/inicio.service */ "fsfq");





let ToastServices = class ToastServices {
    constructor(toasCTRL, router, navCtrl, almacenamiento) {
        this.toasCTRL = toasCTRL;
        this.router = router;
        this.navCtrl = navCtrl;
        this.almacenamiento = almacenamiento;
    }
    alertApplication(mensaje, estado, location, buttons) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!location || typeof location === 'undefined') {
                location = 'bottom';
            }
            else if (location === 'm') {
                location = 'middle';
            }
            let boton = [];
            if (!buttons || typeof buttons === 'undefined') {
                boton = [];
            }
            else {
                boton = [{
                        text: 'Navegar',
                        handler: () => {
                            if (buttons.action) {
                                if (buttons.info.type === 'citas') {
                                    this.almacenamiento.insertarCita(buttons.info.data.id).then(() => {
                                        console.log('agregado');
                                        this.router.navigate(['/chat', buttons.info.data.id]);
                                    });
                                }
                            }
                        }
                    }];
            }
            const toast = yield this.toasCTRL.create({
                message: mensaje,
                // cssClass: estado ? 'msg-ok' : 'msg-not',
                position: location,
                header: 'Mensaje de Mimoto',
                duration: 5000,
                buttons: boton,
                mode: 'ios'
            });
            return yield toast.present();
        });
    }
    toastError(mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toas = yield this.toasCTRL.create({
                cssClass: 'errorAPP',
                position: 'bottom',
                duration: 3000,
                message: mensaje,
                header: 'Mensaje de la aplicación'
            });
            return yield toas.present();
        });
    }
    toastExitoso(mensaje, duration, buttons) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toas = yield this.toasCTRL.create({
                cssClass: 'exitoApp',
                position: 'bottom',
                duration: duration ? duration : 3000,
                message: mensaje,
                buttons,
                header: 'Mensaje de la aplicación'
            });
            return yield toas.present();
        });
    }
    toastNotificacion(mensaje, duration, buttons) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toas = yield this.toasCTRL.create({
                cssClass: 'notiApp',
                position: 'bottom',
                duration: duration ? duration : 3000,
                message: mensaje,
                buttons,
                header: 'Mensaje de la aplicación'
            });
            return yield toas.present();
        });
    }
    Especial(mensaje, duration, buttons) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toas = yield this.toasCTRL.create({
                cssClass: 'notiAppDark',
                position: 'bottom',
                duration: duration ? duration : 5000,
                message: mensaje,
                buttons,
                header: 'Tienes un nuevo mensaje'
            });
            return yield toas.present();
        });
    }
};
ToastServices.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"] }
];
ToastServices = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastServices);

// #tab [@routeAnimationsCentral]='obtenerTab("h")' (ionTabsWillChange)="ver($event)"


/***/ }),

/***/ "fpZc":
/*!*********************************************************************!*\
  !*** ./src/app/Components/fechas-modal/fechas-modal.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWNoYXMtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "fqim":
/*!*************************************************!*\
  !*** ./src/app/pipes/numeros/decimales.pipe.ts ***!
  \*************************************************/
/*! exports provided: DecimalesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecimalesPipe", function() { return DecimalesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let DecimalesPipe = class DecimalesPipe {
    transform(value, locale) {
        if (value === 0) {
            return 0;
        }
        else {
            return new Intl.NumberFormat(locale, {
                minimumFractionDigits: 1
            }).format(value);
        }
    }
};
DecimalesPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'decimales'
    })
], DecimalesPipe);



/***/ }),

/***/ "fsfq":
/*!************************************************************!*\
  !*** ./src/app/providers/Almacenamiento/inicio.service.ts ***!
  \************************************************************/
/*! exports provided: InicioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioService", function() { return InicioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _PushService_PushService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PushService/PushService.service */ "CkIw");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "e8h1");






let InicioService = class InicioService {
    constructor(oneSignal, storage) {
        this.oneSignal = oneSignal;
        this.storage = storage;
        this.motoValue = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.sesion = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('a');
        this.motoObserver = this.motoValue.asObservable();
        this.sesionValue = this.sesion.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["find"])(x => {
            return x !== 'a';
        }));
    }
    crearBaseDeDatosSQLite() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const login = yield this.storage.get('login');
            const citas = yield this.storage.get('citas');
            const sala = yield this.storage.get('sala');
            const ticket = yield this.storage.get('tickets');
            if (login) {
                this.comprobarSesion().then(res => {
                    this.sesion.next(res);
                });
            }
            else {
                this.comprobarSesion().then(res => {
                    this.sesion.next(res);
                });
                yield this.storage.set('login', []);
            }
            if (sala) {
                yield this.storage.set('sala', []);
            }
            else {
                yield this.storage.set('sala', []);
            }
            if (citas) {
            }
            else {
                yield this.storage.set('citas', []);
            }
            if (ticket) {
            }
            else {
                yield this.storage.set('tickets', []);
            }
        });
    }
    comprobarSesion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const login = yield this.storage.get('login');
            if (login) {
                const data = login.filter((item) => {
                    return item.estado === 'true';
                });
                if (data.length > 0) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                return false;
            }
        });
    }
    cambiarEstado(status) {
        this.sesion.next(status);
    }
    guardarUsuario(datos) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const login = yield this.storage.get('login');
            if (login) {
                const data = login.filter((item) => {
                    return item.nusuario === datos.nombreusuario;
                });
                if (data.length > 0) {
                    let beforeData = login.filter((item) => {
                        return item.nusuario !== datos.nombreusuario;
                    });
                    beforeData.push({
                        _id: datos._id,
                        nombre: datos.nombrecompleto,
                        nusuario: datos.nombreusuario,
                        clave: datos.clave,
                        telefono: datos.tel,
                        correo: datos.correo,
                        role: datos.role,
                        token: datos.token,
                        pais: datos.pais,
                        ciudad: datos.ciudad,
                        usuarioID: datos.usuarioID,
                        placa: datos.placa,
                        estado: 'true',
                    });
                    yield this.storage.set('login', beforeData);
                }
                else {
                    login.push({
                        _id: datos._id,
                        nombre: datos.nombrecompleto,
                        nusuario: datos.nombreusuario,
                        clave: datos.clave,
                        telefono: datos.tel,
                        correo: datos.correo,
                        role: datos.role,
                        token: datos.token,
                        pais: datos.pais,
                        ciudad: datos.ciudad,
                        usuarioID: datos.usuarioID,
                        placa: datos.placa,
                        estado: 'true',
                    });
                    yield this.storage.set('login', login);
                }
            }
            else {
                return false;
            }
        });
    }
    reRenerarToken(nusuario, token) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const login = yield this.storage.get('login');
            if (login) {
                const data = login.filter((item) => {
                    return item.nusuario === nusuario;
                });
                if (data.length > 0) {
                    let beforeData = login.filter((item) => {
                        return item.nusuario !== nusuario;
                    });
                    beforeData.push({
                        token,
                    });
                    yield this.storage.set('login', beforeData);
                }
            }
            else {
                return false;
            }
        });
    }
    insertarCita(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let cita = yield this.storage.get('citas');
            if (cita) {
                cita = [];
                cita.push({
                    idCita: id,
                });
                const insertar = yield this.storage.set('citas', cita);
                if (insertar) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                cita = [];
                cita.push({
                    idCita: id,
                });
                const insertar = yield this.storage.set('citas', cita);
                if (insertar) {
                    return true;
                }
                else {
                    return false;
                }
            }
        });
    }
    obtenerCita() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const cita = yield this.storage.get('citas');
            if (cita) {
                if (cita.length > 0) {
                    return cita[0].idCita;
                }
                else {
                    return;
                }
            }
        });
    }
    eleminarCita() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const cita = yield this.storage.set('citas', []);
            if (cita) {
                return true;
            }
        });
    }
    insertarTicket(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let ticket = yield this.storage.get('tickets');
            if (ticket) {
                ticket = [];
                ticket.push({
                    idticket: id,
                });
                const insertar = yield this.storage.set('tickets', ticket);
                if (insertar) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                ticket = [];
                ticket.push({
                    idticket: id,
                });
                const insertar = yield this.storage.set('tickets', ticket);
                if (insertar) {
                    return true;
                }
                else {
                    return false;
                }
            }
        });
    }
    obtenerTicket() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const cita = yield this.storage.get('tickets');
            if (cita) {
                if (cita.length > 0) {
                    return { exe: true };
                }
                else {
                    return { exe: false };
                }
            }
        });
    }
    eleminarTicket() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const cita = yield this.storage.set('tickets', []);
            if (cita) {
                return true;
            }
        });
    }
    insertarChat(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sala = yield this.storage.get('sala');
            if (sala) {
                sala = [];
                sala.push(id);
                const insertar = yield this.storage.set('sala', sala);
                if (insertar) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                sala = [];
                sala.push(id);
                const insertar = yield this.storage.set('sala', sala);
                if (insertar) {
                    return true;
                }
                else {
                    return false;
                }
            }
        });
    }
    obtenerSala() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const sala = yield this.storage.get('sala');
            if (sala) {
                if (sala.length > 0) {
                    return sala;
                }
                else {
                    return { exe: false };
                }
            }
        });
    }
    eleminarSala() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const sala = yield this.storage.set('sala', []);
            if (sala) {
                return true;
            }
        });
    }
    obtenerToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const login = yield this.storage.get('login');
            if (login) {
                console.log(login, 'login fjsdf');
                const data = login.filter((item) => {
                    return item.estado === 'true';
                });
                if (data.length > 0) {
                    return data[0];
                }
                else {
                    return [];
                }
            }
        });
    }
    dataLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const login = yield this.storage.get('login');
            if (login) {
                if (login.length > 0) {
                    return login[0];
                }
                return login;
            }
        });
    }
    terminarPartida() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const login = yield this.storage.get('login');
            if (login) {
                login.forEach((item) => {
                    item.estado = 'false';
                });
                const cerrar = yield this.storage.set('login', login);
                if (cerrar) {
                    return true;
                }
                else {
                    return false;
                }
            }
        });
    }
    limpiarBD() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const login = yield this.storage.set('login', []);
            if (login) {
                return true;
            }
        });
    }
};
InicioService.ctorParameters = () => [
    { type: _PushService_PushService_service__WEBPACK_IMPORTED_MODULE_4__["PushService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
InicioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InicioService);



/***/ }),

/***/ "h3oO":
/*!********************************************************!*\
  !*** ./src/app/pipes/filtros/filtro-recorlist.pipe.ts ***!
  \********************************************************/
/*! exports provided: FiltroRecordatoriosLista */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroRecordatoriosLista", function() { return FiltroRecordatoriosLista; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let FiltroRecordatoriosLista = class FiltroRecordatoriosLista {
    transform(lista, tipoRetorno, texto) {
        texto = texto.toLowerCase();
        console.log(texto, lista);
        let listado = lista;
        if (texto !== '') {
            listado = lista.filter((item) => {
                const titulo = (item.informacion.titulo).toLowerCase();
                const contenido = (item.informacion.contenido).toLowerCase();
                if (titulo.includes(texto) || contenido.includes(texto)) {
                    item.nada = false;
                    return item;
                }
            });
        }
        listado = listado.filter((item) => item.tipo === tipoRetorno);
        if (listado.length === 0) {
            return [{ nada: true }];
        }
        return listado;
    }
};
FiltroRecordatoriosLista = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroRecorList'
    })
], FiltroRecordatoriosLista);



/***/ }),

/***/ "h7Pn":
/*!***********************************************************!*\
  !*** ./src/app/Components/politica/politica.component.ts ***!
  \***********************************************************/
/*! exports provided: PoliticaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliticaComponent", function() { return PoliticaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_politica_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./politica.component.html */ "X7xD");
/* harmony import */ var _politica_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./politica.component.scss */ "mhYR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let PoliticaComponent = class PoliticaComponent {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() { }
    cerrar() {
        this.modal.dismiss();
    }
};
PoliticaComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
PoliticaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-politica',
        template: _raw_loader_politica_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_politica_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PoliticaComponent);



/***/ }),

/***/ "iTUp":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _filtros_mi_filtro_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filtros/mi-filtro.pipe */ "Y6Il");
/* harmony import */ var _archivos_descarga_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./archivos/descarga.pipe */ "MeGx");
/* harmony import */ var _numeros_decimales_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./numeros/decimales.pipe */ "fqim");
/* harmony import */ var _filtros_filtro_chat_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filtros/filtro-chat.pipe */ "XoHZ");
/* harmony import */ var _Fechas_fecha_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Fechas/fecha.pipe */ "/cRh");
/* harmony import */ var _filtros_filtro_recordatorio_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filtros/filtro-recordatorio.pipe */ "uUCS");
/* harmony import */ var _Textos_recortar_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Textos/recortar.pipe */ "oyPm");
/* harmony import */ var _filtros_filtro_recorlist_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filtros/filtro-recorlist.pipe */ "h3oO");
/* harmony import */ var _Fechas_horario_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Fechas/horario.pipe */ "mg06");
/* harmony import */ var _Fechas_ConversionUTC_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Fechas/ConversionUTC.pipe */ "CB8+");
/* harmony import */ var _Fechas_CambioUTC_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Fechas/CambioUTC.pipe */ "SpuA");
/* harmony import */ var _Textos_Imagen_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Textos/Imagen.pipe */ "jl+2");
/* harmony import */ var _numeros_Contar_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./numeros/Contar.pipe */ "pJu/");
/* harmony import */ var _numeros_calculos_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./numeros/calculos.pipe */ "PeIZ");
/* harmony import */ var _Textos_colores_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Textos/colores.pipe */ "EvSv");
/* harmony import */ var _Fechas_Diferencia_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Fechas/Diferencia.pipe */ "OKd0");
/* harmony import */ var _filtros_filtroAccesos_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./filtros/filtroAccesos.pipe */ "Tsh3");
/* harmony import */ var _filtros_filtrociudad_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./filtros/filtrociudad.pipe */ "CDls");




















let PipesModule = class PipesModule {
};
PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _filtros_mi_filtro_pipe__WEBPACK_IMPORTED_MODULE_2__["MiFiltroPipe"],
            _filtros_filtro_chat_pipe__WEBPACK_IMPORTED_MODULE_5__["FiltroChat"],
            _archivos_descarga_pipe__WEBPACK_IMPORTED_MODULE_3__["DescargaPipe"],
            _numeros_decimales_pipe__WEBPACK_IMPORTED_MODULE_4__["DecimalesPipe"],
            _Fechas_fecha_pipe__WEBPACK_IMPORTED_MODULE_6__["MiFechaPipe"],
            _filtros_filtro_recordatorio_pipe__WEBPACK_IMPORTED_MODULE_7__["FiltroRecordatorio"],
            _Textos_recortar_pipe__WEBPACK_IMPORTED_MODULE_8__["RecortarTextoPipe"],
            _filtros_filtro_recorlist_pipe__WEBPACK_IMPORTED_MODULE_9__["FiltroRecordatoriosLista"],
            _Fechas_horario_pipe__WEBPACK_IMPORTED_MODULE_10__["HorarioPipe"],
            _Fechas_ConversionUTC_pipe__WEBPACK_IMPORTED_MODULE_11__["ConvertirUTCPipe"],
            _Fechas_CambioUTC_pipe__WEBPACK_IMPORTED_MODULE_12__["CambioUTCaLocalPipe"],
            _Textos_Imagen_pipe__WEBPACK_IMPORTED_MODULE_13__["ImagenSelectPipe"],
            _numeros_Contar_pipe__WEBPACK_IMPORTED_MODULE_14__["ContarPipe"],
            _numeros_calculos_pipe__WEBPACK_IMPORTED_MODULE_15__["ValoresPipe"],
            _Textos_colores_pipe__WEBPACK_IMPORTED_MODULE_16__["ColoresPipe"],
            _Fechas_Diferencia_pipe__WEBPACK_IMPORTED_MODULE_17__["DiferenciaPipe"],
            _filtros_filtroAccesos_pipe__WEBPACK_IMPORTED_MODULE_18__["FiltroChatAccesos"],
            _filtros_filtrociudad_pipe__WEBPACK_IMPORTED_MODULE_19__["FiltroCiudad"]
        ],
        imports: [],
        exports: [
            _filtros_mi_filtro_pipe__WEBPACK_IMPORTED_MODULE_2__["MiFiltroPipe"],
            _archivos_descarga_pipe__WEBPACK_IMPORTED_MODULE_3__["DescargaPipe"],
            _numeros_decimales_pipe__WEBPACK_IMPORTED_MODULE_4__["DecimalesPipe"],
            _filtros_filtro_chat_pipe__WEBPACK_IMPORTED_MODULE_5__["FiltroChat"],
            _Fechas_fecha_pipe__WEBPACK_IMPORTED_MODULE_6__["MiFechaPipe"],
            _filtros_filtro_recordatorio_pipe__WEBPACK_IMPORTED_MODULE_7__["FiltroRecordatorio"],
            _Textos_recortar_pipe__WEBPACK_IMPORTED_MODULE_8__["RecortarTextoPipe"],
            _filtros_filtro_recorlist_pipe__WEBPACK_IMPORTED_MODULE_9__["FiltroRecordatoriosLista"],
            _Fechas_horario_pipe__WEBPACK_IMPORTED_MODULE_10__["HorarioPipe"],
            _Fechas_ConversionUTC_pipe__WEBPACK_IMPORTED_MODULE_11__["ConvertirUTCPipe"],
            _Fechas_CambioUTC_pipe__WEBPACK_IMPORTED_MODULE_12__["CambioUTCaLocalPipe"],
            _Textos_Imagen_pipe__WEBPACK_IMPORTED_MODULE_13__["ImagenSelectPipe"],
            _numeros_Contar_pipe__WEBPACK_IMPORTED_MODULE_14__["ContarPipe"],
            _numeros_calculos_pipe__WEBPACK_IMPORTED_MODULE_15__["ValoresPipe"],
            _Textos_colores_pipe__WEBPACK_IMPORTED_MODULE_16__["ColoresPipe"],
            _Fechas_Diferencia_pipe__WEBPACK_IMPORTED_MODULE_17__["DiferenciaPipe"],
            _filtros_filtroAccesos_pipe__WEBPACK_IMPORTED_MODULE_18__["FiltroChatAccesos"],
            _filtros_filtrociudad_pipe__WEBPACK_IMPORTED_MODULE_19__["FiltroCiudad"]
        ]
    })
], PipesModule);



/***/ }),

/***/ "jl+2":
/*!*********************************************!*\
  !*** ./src/app/pipes/Textos/Imagen.pipe.ts ***!
  \*********************************************/
/*! exports provided: ImagenSelectPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagenSelectPipe", function() { return ImagenSelectPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ImagenSelectPipe = class ImagenSelectPipe {
    transform(valor) {
        let ruta = '';
        valor = valor.toLowerCase();
        if (valor.includes('entrada')) {
            ruta = '/assets/Entradas.png';
        }
        else if (valor.includes('salida')) {
            ruta = '/assets/Salidas.png';
        }
        return ruta;
    }
};
ImagenSelectPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'ImagenSelect'
    })
], ImagenSelectPipe);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "mg06":
/*!**********************************************!*\
  !*** ./src/app/pipes/Fechas/horario.pipe.ts ***!
  \**********************************************/
/*! exports provided: HorarioPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorarioPipe", function() { return HorarioPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



let HorarioPipe = class HorarioPipe {
    transform(value) {
        moment__WEBPACK_IMPORTED_MODULE_2__["locale"]('es');
        return moment__WEBPACK_IMPORTED_MODULE_2__(value).format('h:mm a');
    }
};
HorarioPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'horario'
    })
], HorarioPipe);



/***/ }),

/***/ "mhYR":
/*!*************************************************************!*\
  !*** ./src/app/Components/politica/politica.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titulo {\n  font-weight: bold;\n  font-size: 28px;\n  background-color: #D5EBB7;\n  padding: 25px 15px;\n  margin-bottom: 10px;\n  line-height: 1.5;\n}\n\n.titulo2 {\n  font-weight: 300;\n  font-size: 20px;\n  background-color: #FBF5C2;\n  padding: 25px 15px;\n  margin-bottom: 10px;\n  line-height: 1.5;\n}\n\np {\n  line-height: 1.7;\n  font-size: 18px;\n  font-weight: 300;\n  padding: 15px;\n}\n\n.s {\n  padding: 0 15px;\n}\n\nstrong {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb2xpdGljYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoicG9saXRpY2EuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxvIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q1RUJCNztcclxuICAgIHBhZGRpbmc6IDI1cHggMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4udGl0dWxvMiB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRjVDMjtcclxuICAgIHBhZGRpbmc6IDI1cHggMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLnMge1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG59XHJcblxyXG5zdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59Il19 */");

/***/ }),

/***/ "oQG1":
/*!********************************************************!*\
  !*** ./src/app/providers/Api/UsuariosLogin.service.ts ***!
  \********************************************************/
/*! exports provided: UsuariosLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosLoginService", function() { return UsuariosLoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









let UsuariosLoginService = class UsuariosLoginService {
    constructor(http, transfer, almacenamiento, navCtrl) {
        this.http = http;
        this.transfer = transfer;
        this.almacenamiento = almacenamiento;
        this.navCtrl = navCtrl;
    }
    hanflerError(error) {
        let intento = 0;
        return error.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delayWhen"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(5000)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((errorHttp) => {
            intento++;
            console.log('Entramos a intentos');
            if (errorHttp instanceof ErrorEvent) {
                if (intento === 3) {
                    throw new Error('Error de Red');
                }
            }
            else if (errorHttp instanceof ProgressEvent) {
                if (intento === 3) {
                    throw new Error('Error de Red');
                }
            }
            else {
                if (errorHttp.status === 404) {
                    throw new Error(' al realizar la solicictud ');
                }
                else if (errorHttp.status === 401) {
                    this.almacenamiento.terminarPartida().then(() => {
                        this.navCtrl.navigateRoot('/home');
                    });
                    throw new Error('No tiene permisos para realizar la petición ');
                }
                else {
                    console.log(errorHttp, 'Error de servidor');
                    throw new Error(' No se pudo realizar la petición, intentalo más tarde ');
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(3));
    }
    registrar(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/usuarios`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => {
            if (res.exe) {
                res.response.exe = res.exe;
                res.response.token = res.token;
                return res.response;
            }
            else {
                return res;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    usuario(usuario) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/usuarios/unico`, { buscar: usuario }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    iniciarPartida(usuario, dispositivoID) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-dispositivoID': dispositivoID
            })
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/login`, usuario, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => {
            console.log(res);
            if (res.exe) {
                res.response.exe = res.exe;
                res.response.token = res.token;
                return res.response;
            }
            else {
                return res.exe;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    fotoPerfilUsuarioMoto(imagen, token, tipo) {
        const options = {
            fileKey: 'archivo',
            httpMethod: 'PUT',
            headers: {
                'x-token': token
            },
            params: {
                tipo
            }
        };
        // 4912685137238652
        const fileTransfer = this.transfer.create();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(fileTransfer.upload(imagen, `${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/upload`, options))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            console.log(`No se pudo subir la imagen `);
            throw new Error(`No se pudo subir la imagen `);
        }));
    }
    fotoPortada(imagen, token, old) {
        const options = {
            fileKey: 'archivo',
            httpMethod: 'PUT',
            headers: {
                'x-token': token
            },
            params: {
                old
            }
        };
        // 4912685137238652
        const fileTransfer = this.transfer.create();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(fileTransfer.upload(imagen, `${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/upload/portada/`, options))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            console.log(`No se pudo subir la imagen `);
            throw new Error(`No se pudo subir la imagen `);
        }));
    }
    viewImagen(token) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/ver`, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    buscarUsuario(termino, token) {
        const headerOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/usuarios/${termino}`, headerOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    cerrar(token) {
        const headerOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/usuarios/cerrar/`, {}, headerOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    usuarioDatos(token) {
        const headerOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/usuarios/uno/`, {}, headerOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    editarUusuario(token, data) {
        const headerOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/usuarios/editar/uno/`, data, headerOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    buscarPerfilUsuario(usuario, token) {
        const HeaderOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/usuarios/perfil/${usuario}`, HeaderOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    traerMisNotificaciones(token, desde) {
        const HeaderOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token,
                'x-desde': desde.toString()
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/notificaciones/misnotificaciones/`, HeaderOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    notiCantidad(token) {
        const HeaderOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/notificaciones/numero/`, HeaderOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    ActualizarNotificaciones(token, id) {
        const HeaderOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/notificaciones/misnotificaciones/cambiarestado/`, { id }, HeaderOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    validarClave(token, data) {
        const HeaderOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/usuarios/claves/`, data, HeaderOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    editarClaves(token, data) {
        const HeaderOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/usuarios/claves/editar`, data, HeaderOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    editarClaves2(data) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/usuarios/claves/editar/dos`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    listarPaises() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/paises`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    listarCiudades(pais) {
        const headerOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-pais': pais
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/ciudad`, headerOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    CodigoComprobar(data) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/codigos`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    EditarCodigo(data) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/codigos/cambiar`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    negocios() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/tiponegocio`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    modulos(token) {
        const headerOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/modulos`, headerOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    modulosTALLER(token, data) {
        const headerOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/modulos`, data, headerOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    Cambio(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/cambio`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    Validar(data) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["URL_SERVER"]}/cambio`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
};
UsuariosLoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"] },
    { type: _Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__["InicioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] }
];
UsuariosLoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsuariosLoginService);



/***/ }),

/***/ "oyPm":
/*!***********************************************!*\
  !*** ./src/app/pipes/Textos/recortar.pipe.ts ***!
  \***********************************************/
/*! exports provided: RecortarTextoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecortarTextoPipe", function() { return RecortarTextoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let RecortarTextoPipe = class RecortarTextoPipe {
    transform(value) {
        if (value.length >= 50) {
            return value.substr(0, 50) + '...';
        }
        else {
            return value;
        }
    }
};
RecortarTextoPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'recortar'
    })
], RecortarTextoPipe);



/***/ }),

/***/ "pJu/":
/*!**********************************************!*\
  !*** ./src/app/pipes/numeros/Contar.pipe.ts ***!
  \**********************************************/
/*! exports provided: ContarPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContarPipe", function() { return ContarPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ContarPipe = class ContarPipe {
    transform(value) {
        let cantidad = 0;
        value.forEach((item) => {
            cantidad = cantidad + parseFloat(item.cantidad);
        });
        return cantidad;
    }
};
ContarPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'contar'
    })
], ContarPipe);



/***/ }),

/***/ "qRVJ":
/*!*************************************************************!*\
  !*** ./src/app/Components/Media/video/video.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".reproductor {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\nvideo {\n  width: 100vw;\n  height: 100vh;\n}\n\n.cargando {\n  position: absolute;\n  width: 200px;\n  bottom: 10px;\n  right: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 100;\n}\n\n.oculto {\n  opacity: 0;\n}\n\n.controles {\n  width: 100%;\n  height: 70px;\n  padding: 5px;\n  background: rgba(0, 0, 0, 0.01);\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n}\n\n.botones {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n}\n\n.volumen {\n  padding-left: 5px;\n  width: 60%;\n}\n\n.tiempo {\n  width: calc(100% - 80%);\n  color: #fff;\n  font-size: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-range {\n  --bar-height: 10px;\n}\n\nion-slides {\n  width: 100%;\n  height: calc(100% - 70px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlkZW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUVBLHlCQUFBO0FBQUoiLCJmaWxlIjoidmlkZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVwcm9kdWN0b3Ige1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbnZpZGVvIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jYXJnYW5kbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbi5vY3VsdG8ge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNvbnRyb2xlcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxufVxyXG5cclxuLmJvdG9uZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnZvbHVtZW4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4udGllbXBvIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MCUpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pb24tcmFuZ2Uge1xyXG4gICAgLS1iYXItaGVpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3MHB4KTtcclxufSJdfQ== */");

/***/ }),

/***/ "r3ab":
/*!****************************************************************!*\
  !*** ./src/app/providers/Utilidades/LoadingService.service.ts ***!
  \****************************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let LoadingService = class LoadingService {
    constructor(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    cargaProcesos(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message
            });
            return this.loading.present();
        });
    }
    finalizarCargado() {
        this.loading.dismiss();
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
LoadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ "rRd4":
/*!*************************************************************************!*\
  !*** ./src/app/Components/modal-patinada/modal-patinada.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1wYXRpbmFkYS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "rYne":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/modal-chat/modal-chat.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"darkgold\">\n        <ion-title>Foto</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"cerrar()\">\n                <ion-icon name=\"close-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"darkgold\">\n    <ion-slides *ngIf=\"carga && img \" [options]=\"slide\">\n        <ion-slide>\n            <img src=\"https://www.motocaliapp.com/2807/{{img}}\" width=\"100%\">\n\n        </ion-slide>\n    </ion-slides>\n</ion-content>");

/***/ }),

/***/ "ssWy":
/*!***********************************************************************!*\
  !*** ./src/app/Components/modal-patinada/modal-patinada.component.ts ***!
  \***********************************************************************/
/*! exports provided: ModalPatinadaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPatinadaComponent", function() { return ModalPatinadaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_patinada_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-patinada.component.html */ "Mgl2");
/* harmony import */ var _modal_patinada_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-patinada.component.scss */ "rRd4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/Api/UsuariosLogin.service */ "oQG1");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Api_Patinadas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../providers/Api/Patinadas.service */ "2qE+");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");










let ModalPatinadaComponent = class ModalPatinadaComponent {
    constructor(modal, apiUsuario, toast, almacenamiento, apiPatinada, socket) {
        this.modal = modal;
        this.apiUsuario = apiUsuario;
        this.toast = toast;
        this.almacenamiento = almacenamiento;
        this.apiPatinada = apiPatinada;
        this.socket = socket;
        this.descripcion = '';
        this.paises = [];
        this.ciudades = [];
        this.ciudad = false;
        this.load = false;
        this.pais = '';
        this.miciudad = '';
        this.vista = 0;
        this.selecionadas = [];
        this.texto = '';
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.listarPaises();
    }
    cerrar() {
        this.modal.dismiss();
    }
    listarPaises() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiUsuario.listarPaises().subscribe((data) => {
                    if (data.exe) {
                        this.paises = data.response;
                        console.log(this.paises, this.pais);
                    }
                    else {
                        this.paises.push('Colombia');
                    }
                }, (err) => {
                    this.paises.push('Colombia');
                });
            }
        });
    }
    listarCiudades(event) {
        this.miciudad = this.miciudad !== '' ? this.miciudad : '';
        const _id = this.paises.filter((item) => item.nombre === event.detail.value)[0]._id;
        this.apiUsuario.listarCiudades(_id).subscribe((data) => {
            if (data.exe) {
                data.response.forEach((item) => {
                    item.check = false;
                    this.ciudades.push(item);
                });
                console.log(this.ciudades);
                this.ciudad = true;
            }
            else {
                this.toast.toastError('No se pudo traer las ciudades, intente registrarse más tarde');
            }
        }, (err) => {
            this.toast.toastError('No se pudo traer las ciudades, intente registrarse más tarde');
        });
    }
    seleccionarCiudad(event, i) {
        this.ciudades[i].check = event.detail.checked;
        if (event.detail.checked) {
            if (!this.selecionadas.find((item) => item === event.detail.value)) {
                this.selecionadas.push(event.detail.value);
            }
        }
        else {
            this.selecionadas = this.selecionadas.filter((item) => item !== event.detail.value);
        }
        console.log(this.selecionadas);
    }
    cambiar(event) {
        this.pais = '';
        this.selecionadas = [];
        if (event.detail.value === 'pais') {
            this.vista = 1;
        }
        else if (event.detail.value === 'ciudad') {
            this.vista = 2;
        }
        else {
            this.vista = 0;
        }
    }
    paissel(event) {
        this.pais = event.detail.value;
    }
    buscar(event) {
        this.texto = event.detail.value;
    }
    escribir(event) {
        this.descripcion = event.detail.value;
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.descripcion !== '' && (this.pais !== '' || this.selecionadas.length > 0)) {
                const info = yield this.almacenamiento.obtenerToken();
                if (info) {
                    // tslint:disable-next-line:max-line-length
                    this.apiPatinada.crearPatinada(info.token, { pais: this.pais, ciudad: this.selecionadas, descripcion: this.descripcion }).subscribe((data) => {
                        if (data.exe) {
                            this.toast.Especial('Patinada creada correctamente');
                            console.log(data, 'midata');
                            this.socket.emit('patinada', {
                                dispositivos: data.response,
                                usuarios: data.response2,
                                nombre: info.nombre,
                                _id: info._id
                            });
                            this.modal.dismiss({ exe: true });
                        }
                        else {
                            this.toast.toastError('No se pudo crer la patinada, inténtelo más tarde');
                            this.modal.dismiss();
                        }
                    }, (err) => {
                        this.toast.toastError('No se pudo crer la patinada, inténtelo más tarde');
                        this.modal.dismiss();
                    });
                }
            }
            else {
                this.toast.toastError('Verifique que tenga la descripción de la patinada, el país o ciudad de notificación');
            }
        });
    }
};
ModalPatinadaComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_5__["UsuariosLoginService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__["ToastServices"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__["InicioService"] },
    { type: _providers_Api_Patinadas_service__WEBPACK_IMPORTED_MODULE_8__["PatinadasService"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__["Socket"] }
];
ModalPatinadaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-patinada',
        template: _raw_loader_modal_patinada_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_patinada_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalPatinadaComponent);



/***/ }),

/***/ "uUCS":
/*!***********************************************************!*\
  !*** ./src/app/pipes/filtros/filtro-recordatorio.pipe.ts ***!
  \***********************************************************/
/*! exports provided: FiltroRecordatorio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroRecordatorio", function() { return FiltroRecordatorio; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let FiltroRecordatorio = class FiltroRecordatorio {
    transform(listado, param, arr) {
        param = param.toLowerCase();
        if (param === '') {
            return [];
        }
        else {
            return listado.filter((item) => {
                item.usuarioEmisor.checked = false;
                if (arr.length > 0) {
                    if (arr.find((person) => person.id === item.usuarioEmisor._id)) {
                        item.usuarioEmisor.checked = true;
                    }
                }
                const val = item.usuarioEmisor.nombrecompleto;
                item.usuarioEmisor.nombrecompleto = item.usuarioEmisor.nombrecompleto.toLowerCase();
                if (item.usuarioEmisor.nombrecompleto.includes(param)) {
                    item.usuarioEmisor.nombrecompleto = val;
                    return val;
                }
            });
        }
    }
};
FiltroRecordatorio = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroRepo'
    })
], FiltroRecordatorio);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Guard_login_registro_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Guard/login/registro.guard */ "+GRR");
/* harmony import */ var _Guard_login_inicio_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Guard/login/inicio.guard */ "5aPb");
/* harmony import */ var _Guard_login_central_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Guard/login/central.guard */ "0KDG");






const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => Promise.all(/*! import() | pages-home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "99Un")).then(m => m.HomePageModule), canActivate: [_Guard_login_inicio_guard__WEBPACK_IMPORTED_MODULE_4__["InicioGuard"]] },
    // tslint:disable-next-line:max-line-length
    { path: 'registro', loadChildren: () => __webpack_require__.e(/*! import() | pages-registro-registro-module */ "pages-registro-registro-module").then(__webpack_require__.bind(null, /*! ./pages/registro/registro.module */ "8+ML")).then(m => m.RegistroPageModule), canDeactivate: [_Guard_login_registro_guard__WEBPACK_IMPORTED_MODULE_3__["RegistroGuard"]], canActivate: [_Guard_login_inicio_guard__WEBPACK_IMPORTED_MODULE_4__["InicioGuard"]], data: { animation: 'Registropage' } },
    // tslint:disable-next-line:max-line-length
    { path: 'central', loadChildren: () => __webpack_require__.e(/*! import() | pages-central-central-module */ "pages-central-central-module").then(__webpack_require__.bind(null, /*! ./pages/central/central.module */ "mh8C")).then(m => m.CentralPageModule), canActivate: [_Guard_login_central_guard__WEBPACK_IMPORTED_MODULE_5__["CentralGuard"]] },
    {
        path: 'chat/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | Pages-EstadoCitas-chat-chat-module */ "Pages-EstadoCitas-chat-chat-module").then(__webpack_require__.bind(null, /*! ./Pages/EstadoCitas/chat/chat.module */ "c+zm")).then(m => m.ChatPageModule), canActivate: [_Guard_login_central_guard__WEBPACK_IMPORTED_MODULE_5__["CentralGuard"]]
    },
    {
        path: 'igtmpublic/:id/:tipo',
        loadChildren: () => Promise.all(/*! import() | Pages-Modales-igtmpublic-igtmpublic-module */[__webpack_require__.e("default~Pages-Modales-igtmpublic-igtmpublic-module~Pages-Santiago-sancreador-sancreador-module~Pages~28037653"), __webpack_require__.e("common"), __webpack_require__.e("Pages-Modales-igtmpublic-igtmpublic-module")]).then(__webpack_require__.bind(null, /*! ./Pages/Modales/igtmpublic/igtmpublic.module */ "cITA")).then(m => m.IgtmpublicPageModule)
    },
    {
        path: 'visita/:usuario/:tipo',
        loadChildren: () => Promise.all(/*! import() | Pages-usuario-perfil-visita-perfil-visita-module */[__webpack_require__.e("default~Pages-Modales-igtmpublic-igtmpublic-module~Pages-Santiago-sancreador-sancreador-module~Pages~28037653"), __webpack_require__.e("default~Pages-usuario-perfil-perfil-module~Pages-usuario-perfil-visita-perfil-visita-module"), __webpack_require__.e("Pages-usuario-perfil-visita-perfil-visita-module")]).then(__webpack_require__.bind(null, /*! ./Pages/usuario/perfil-visita/perfil-visita.module */ "YGUY")).then(m => m.PerfilVisitaPageModule)
    },
    {
        path: 'perfil/:tipo',
        loadChildren: () => Promise.all(/*! import() | Pages-usuario-perfil-perfil-module */[__webpack_require__.e("default~Pages-Modales-igtmpublic-igtmpublic-module~Pages-Santiago-sancreador-sancreador-module~Pages~28037653"), __webpack_require__.e("default~Pages-usuario-perfil-perfil-module~Pages-usuario-perfil-visita-perfil-visita-module"), __webpack_require__.e("common"), __webpack_require__.e("Pages-usuario-perfil-perfil-module")]).then(__webpack_require__.bind(null, /*! ./Pages/usuario/perfil/perfil.module */ "GQ40")).then(m => m.PerfilPageModule)
    },
    {
        path: 'hoja-vida-modal/:id/:tipo/:hoja',
        loadChildren: () => __webpack_require__.e(/*! import() | Pages-Modales-hoja-vida-modal-hoja-vida-modal-module */ "Pages-Modales-hoja-vida-modal-hoja-vida-modal-module").then(__webpack_require__.bind(null, /*! ./Pages/Modales/hoja-vida-modal/hoja-vida-modal.module */ "8Loi")).then(m => m.HojaVidaModalPageModule)
    },
    {
        path: 'hoja-vida-modal/:id/:tipo/:hoja/:idx',
        loadChildren: () => __webpack_require__.e(/*! import() | Pages-Modales-hoja-vida-modal-hoja-vida-modal-module */ "Pages-Modales-hoja-vida-modal-hoja-vida-modal-module").then(__webpack_require__.bind(null, /*! ./Pages/Modales/hoja-vida-modal/hoja-vida-modal.module */ "8Loi")).then(m => m.HojaVidaModalPageModule)
    },
    {
        path: 'historias-modal',
        loadChildren: () => __webpack_require__.e(/*! import() | Pages-Santiago-historias-modal-historias-modal-module */ "Pages-Santiago-historias-modal-historias-modal-module").then(__webpack_require__.bind(null, /*! ./Pages/Santiago/historias-modal/historias-modal.module */ "Qv/D")).then(m => m.HistoriasModalPageModule)
    },
    {
        path: 'historias/:tipo',
        loadChildren: () => Promise.all(/*! import() | Pages-Santiago-sancreador-sancreador-module */[__webpack_require__.e("default~Pages-Modales-igtmpublic-igtmpublic-module~Pages-Santiago-sancreador-sancreador-module~Pages~28037653"), __webpack_require__.e("common"), __webpack_require__.e("Pages-Santiago-sancreador-sancreador-module")]).then(__webpack_require__.bind(null, /*! ./Pages/Santiago/sancreador/sancreador.module */ "EE0I")).then(m => m.SANcreadorPageModule)
    },
    {
        path: 'redmodal',
        loadChildren: () => __webpack_require__.e(/*! import() | Pages-redmodal-redmodal-module */ "Pages-redmodal-redmodal-module").then(__webpack_require__.bind(null, /*! ./Pages/redmodal/redmodal.module */ "fpKe")).then(m => m.RedmodalPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "wagy":
/*!***********************************************************************!*\
  !*** ./src/app/Components/alertapopover/alertapopover.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydGFwb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ypew":
/*!*****************************************************************!*\
  !*** ./src/app/Components/modal-mapas/modal-mapas.component.ts ***!
  \*****************************************************************/
/*! exports provided: ModalMapasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalMapasComponent", function() { return ModalMapasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_mapas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-mapas.component.html */ "LClq");
/* harmony import */ var _modal_mapas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-mapas.component.scss */ "QsUc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var src_app_providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/Api/Inventarios.service */ "5yQV");
/* harmony import */ var src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _providers_Api_Pedidos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../providers/Api/Pedidos.service */ "HavB");









let ModalMapasComponent = class ModalMapasComponent {
    constructor(almacenamiento, IVTapi, toast, loading, modal, apiPedido) {
        this.almacenamiento = almacenamiento;
        this.IVTapi = IVTapi;
        this.toast = toast;
        this.loading = loading;
        this.modal = modal;
        this.apiPedido = apiPedido;
        this.empleados = [];
        this.incluidos = [];
        this.accesos = [];
        this.load = false;
        this.marcar = false;
        this.id = '';
        this.ivt = {};
        this.cargauno = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.sala) {
                yield this.traerEmpleados2();
            }
            else {
                yield this.traerEmpleados();
            }
        });
    }
    refrescando(event) {
        this.traerEmpleados().then(() => {
            event.target.complete();
        }).catch(() => {
            event.target.complete();
        });
    }
    traerEmpleados() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load = true;
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.IVTapi.leerEmpleados(info.token).subscribe((data) => {
                    console.log(this.pedido);
                    if (data.exe) {
                        data.response.forEach((item) => {
                            if (item.usuario.imagen[0].path.includes('notfound')) {
                                item.usuario.imagen = '/assets/notfound.png';
                            }
                            else {
                                item.usuario.imagen = `https://motocaliapp.com/${item.usuario.imagen[0].path}`;
                            }
                            if (this.pedido.accesos.filter((acceso) => acceso._id === item.usuario._id).length === 0) {
                                this.empleados.push(item);
                            }
                            else {
                                this.incluidos.push(item);
                            }
                        });
                    }
                    else {
                        this.toast.toastError('No se pudo traer la información, intentelo más tarde');
                    }
                    this.load = false;
                }, (err) => {
                    this.toast.toastError('No se pudo traer la información, intentelo más tarde');
                });
            }
        });
    }
    traerEmpleados2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load = true;
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.IVTapi.leerEmpleados(info.token).subscribe((data) => {
                    if (data.exe) {
                        data.response.forEach((item) => {
                            if (item.usuario.imagen[0].path.includes('notfound')) {
                                item.usuario.imagen = '/assets/notfound.png';
                            }
                            else {
                                item.usuario.imagen = `https://motocaliapp.com/${item.usuario.imagen[0].path}`;
                            }
                            console.log('INCLUIDOS', this.sala.accesos);
                            const arr = this.sala.accesos.filter((acceso) => acceso._id === item.usuario._id);
                            if (arr.length === 0) {
                                this.empleados.push(item);
                            }
                            else {
                                this.incluidos.push(item);
                            }
                        });
                    }
                    else {
                        this.toast.toastError('No se pudo traer la información, intentelo más tarde');
                    }
                    this.load = false;
                }, (err) => {
                    this.toast.toastError('No se pudo traer la información, intentelo más tarde');
                });
            }
        });
    }
    quitar(empleado, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                // tslint:disable-next-line:max-line-length
                if (this.pedido) {
                    let nuevo = this.pedido.accesos.map((item) => {
                        return item._id;
                    });
                    nuevo = nuevo.filter((item) => {
                        return item !== empleado.usuario._id;
                    });
                    this.apiPedido.editarPedido(info.token, { id: this.pedido._id, accesos: nuevo }).subscribe((data) => {
                        // console.log(data)
                        if (data.exe) {
                            this.empleados.push(empleado);
                            this.incluidos.splice(i, 1);
                            this.toast.Especial('Empleado excluido de esta sala');
                        }
                        else {
                            this.toast.toastError('No se pudo realizar la petición, inténtelo más tarde');
                            this.cerrar();
                        }
                    }, (err) => {
                        this.toast.toastError('No se pudo realizar la petición, inténtelo más tarde');
                        this.cerrar();
                    });
                }
                else {
                    let nuevo = this.sala.accesos.map((item) => {
                        return item;
                    });
                    nuevo = nuevo.filter((item) => {
                        return item._id !== empleado.usuario._id;
                    });
                    this.apiPedido.editarChat(info.token, { id: this.sala._id, accesos: nuevo }).subscribe((data) => {
                        // console.log(data)
                        if (data.exe) {
                            this.empleados.push(empleado);
                            this.incluidos.splice(i, 1);
                            this.toast.Especial('Empleado excluido de esta sala');
                        }
                        else {
                            this.toast.toastError('No se pudo realizar la petición, inténtelo más tarde');
                            this.cerrar();
                        }
                    }, (err) => {
                        this.toast.toastError('No se pudo realizar la petición, inténtelo más tarde');
                        this.cerrar();
                    });
                }
            }
        });
    }
    agregar(empleado, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                // tslint:disable-next-line:max-line-length
                if (this.pedido) {
                    let nuevo = this.pedido.accesos.map((item) => {
                        return item._id;
                    });
                    nuevo.push(empleado.usuario._id);
                    console.log(nuevo, 'nuevo');
                    this.apiPedido.editarPedido(info.token, { id: this.pedido._id, accesos: nuevo }).subscribe((data) => {
                        // console.log(data)
                        if (data.exe) {
                            this.toast.Especial('Empleado añadido a esta sala');
                            this.incluidos.push(empleado);
                            this.empleados.splice(i, 1);
                        }
                        else {
                            this.toast.toastError('No se pudo realizar la petición, inténtelo más tarde');
                            this.cerrar();
                        }
                    }, (err) => {
                        this.toast.toastError('No se pudo realizar la petición, inténtelo más tarde');
                        this.cerrar();
                    });
                }
                else {
                    let nuevo = this.sala.accesos.map((item) => {
                        return item;
                    });
                    nuevo.push(empleado.usuario._id);
                    console.log(nuevo, 'nuevo');
                    this.apiPedido.editarChat(info.token, { id: this.sala._id, accesos: nuevo }).subscribe((data) => {
                        // console.log(data)
                        if (data.exe) {
                            this.toast.Especial('Empleado añadido a esta sala');
                            this.incluidos.push(empleado);
                            this.empleados.splice(i, 1);
                        }
                        else {
                            this.toast.toastError('No se pudo realizar la petición, inténtelo más tarde');
                            this.cerrar();
                        }
                    }, (err) => {
                        this.toast.toastError('No se pudo realizar la petición, inténtelo más tarde');
                        this.cerrar();
                    });
                }
            }
        });
    }
    cerrar() {
        this.modal.dismiss();
    }
    ionViewDidLeave() {
        // console.log('sale');
        this.cargauno = false;
        this.empleados = [];
    }
};
ModalMapasComponent.ctorParameters = () => [
    { type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"] },
    { type: src_app_providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_6__["InventariosService"] },
    { type: src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__["ToastServices"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _providers_Api_Pedidos_service__WEBPACK_IMPORTED_MODULE_8__["PedidosService"] }
];
ModalMapasComponent.propDecorators = {
    pedido: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    sala: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalMapasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-mapas',
        template: _raw_loader_modal_mapas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_mapas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalMapasComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zon2":
/*!*************************************************!*\
  !*** ./src/app/Components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Menu_menuComponent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Menu/menuComponent.component */ "+Whw");
/* harmony import */ var _Media_video_video_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Media/video/video.component */ "W7Eg");
/* harmony import */ var _alertapopover_alertapopover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alertapopover/alertapopover.component */ "c6Yc");
/* harmony import */ var _entradas_entradas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entradas/entradas.component */ "MUpS");
/* harmony import */ var _fechas_modal_fechas_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fechas-modal/fechas-modal.component */ "/Yj/");
/* harmony import */ var _politica_politica_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./politica/politica.component */ "h7Pn");
/* harmony import */ var _modal_mapas_modal_mapas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal-mapas/modal-mapas.component */ "ypew");
/* harmony import */ var _modal_chat_modal_chat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal-chat/modal-chat.component */ "/G1h");
/* harmony import */ var _detalles_detalles_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./detalles/detalles.component */ "69E9");
/* harmony import */ var _modal_patinada_modal_patinada_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modal-patinada/modal-patinada.component */ "ssWy");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");
/* harmony import */ var _modal_megustas_modal_megustas_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modal-megustas/modal-megustas.component */ "UInZ");

















let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _Menu_menuComponent_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
            _Media_video_video_component__WEBPACK_IMPORTED_MODULE_6__["VideoComponent"],
            _alertapopover_alertapopover_component__WEBPACK_IMPORTED_MODULE_7__["AlertapopoverComponent"],
            _entradas_entradas_component__WEBPACK_IMPORTED_MODULE_8__["EntradasComponent"],
            _fechas_modal_fechas_modal_component__WEBPACK_IMPORTED_MODULE_9__["FechasModalComponent"],
            _politica_politica_component__WEBPACK_IMPORTED_MODULE_10__["PoliticaComponent"],
            _modal_mapas_modal_mapas_component__WEBPACK_IMPORTED_MODULE_11__["ModalMapasComponent"],
            _modal_chat_modal_chat_component__WEBPACK_IMPORTED_MODULE_12__["ModalChatComponent"],
            _detalles_detalles_component__WEBPACK_IMPORTED_MODULE_13__["DetallesComponent"],
            _modal_patinada_modal_patinada_component__WEBPACK_IMPORTED_MODULE_14__["ModalPatinadaComponent"],
            _modal_megustas_modal_megustas_component__WEBPACK_IMPORTED_MODULE_16__["ModalMegustasComponent"]
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"]
        ],
        exports: [
            _Menu_menuComponent_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
            _Media_video_video_component__WEBPACK_IMPORTED_MODULE_6__["VideoComponent"],
            _alertapopover_alertapopover_component__WEBPACK_IMPORTED_MODULE_7__["AlertapopoverComponent"],
            _entradas_entradas_component__WEBPACK_IMPORTED_MODULE_8__["EntradasComponent"],
            _fechas_modal_fechas_modal_component__WEBPACK_IMPORTED_MODULE_9__["FechasModalComponent"],
            _politica_politica_component__WEBPACK_IMPORTED_MODULE_10__["PoliticaComponent"],
            _modal_mapas_modal_mapas_component__WEBPACK_IMPORTED_MODULE_11__["ModalMapasComponent"],
            _modal_chat_modal_chat_component__WEBPACK_IMPORTED_MODULE_12__["ModalChatComponent"],
            _detalles_detalles_component__WEBPACK_IMPORTED_MODULE_13__["DetallesComponent"],
            _modal_patinada_modal_patinada_component__WEBPACK_IMPORTED_MODULE_14__["ModalPatinadaComponent"],
            _modal_megustas_modal_megustas_component__WEBPACK_IMPORTED_MODULE_16__["ModalMegustasComponent"]
        ]
    })
], ComponentsModule);



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map