(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "+eMj":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-routing.module */ "ckNQ");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "agdb");







let MenuPageModule = class MenuPageModule {
};
MenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"]
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "3Gdt":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".alerta {\n  width: 50px;\n  height: 100%;\n}\n\n.opts {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.opts ion-card {\n  width: calc(50% - 10px);\n  margin: 10px 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.5s;\n}\n\n.opts ion-card ion-card-title {\n  font-size: 22px;\n  text-align: center;\n}\n\n.opts ion-card ion-card-header {\n  text-align: center;\n  padding: 5px;\n}\n\n@media screen and (min-width: 800px) {\n  .opts ion-card {\n    width: calc(33.33% - 10px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSwwQkFBQTtFQUNOO0FBQ0YiLCJmaWxlIjoibWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRhIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ub3B0cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ub3B0cyBpb24tY2FyZCB7XHJcbiAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgIG1hcmdpbjogMTBweCA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbn1cclxuXHJcbi5vcHRzIGlvbi1jYXJkIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm9wdHMgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAgIC5vcHRzIGlvbi1jYXJkIHtcclxuICAgICAgICB3aWR0aDogY2FsYygzMy4zMyUgLSAxMHB4KTtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "V3Oe":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"oscuro\">\n        <ion-title>Herramientas</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <div class=\"opts\">\n        <ion-card mode=\"ios\" [routerLink]=\"['/central/menu/solicitudes']\">\n            <ion-card-header><img src=\"/assets/Seguimiento.png\" width=\"100px\"></ion-card-header>\n            <ion-card-title>Solicitudes\n                <ion-badge mode=\"ios\" *ngIf=\"red !== 'none'\" color=\"barra\">{{cantidadSeguimiento}}</ion-badge>\n            </ion-card-title>\n        </ion-card>\n\n        <ion-card mode=\"ios\" [routerLink]=\"['/central/menu/notificaciones']\">\n            <ion-card-header><img src=\"/assets/Notificaciones.png\" width=\"100px\"></ion-card-header>\n            <ion-card-title>Notificaciones\n                <ion-badge mode=\"ios\" *ngIf=\"red !== 'none'\" color=\"danger\">{{notificaciones}}</ion-badge>\n            </ion-card-title>\n        </ion-card>\n\n        <ion-card *ngIf=\"role === 'TALLER_ROLE'\" mode=\"ios\" [routerLink]=\"['/central/menu/empleados']\">\n            <ion-card-header><img src=\"/assets/Empleados.png\" width=\"100px\"></ion-card-header>\n            <ion-card-title>Empleados\n            </ion-card-title>\n        </ion-card>\n\n\n\n        <ion-card *ngIf=\"role === 'USER_ROLE'\" mode=\"ios\" [routerLink]=\"['/central/menu/hoja']\">\n            <ion-card-header><img src=\"/assets/Hoja.png\" width=\"100px\"></ion-card-header>\n            <ion-card-title>Hojas de Vida\n            </ion-card-title>\n        </ion-card>\n\n        <ion-card *ngIf=\"role === 'TALLER_ROLE' && listaModulos.includes('hoja')\" mode=\"ios\" [routerLink]=\"['/central/menu/hoja']\">\n            <ion-card-header><img src=\"/assets/Hoja.png\" width=\"100px\"></ion-card-header>\n            <ion-card-title>Hojas de Vida\n            </ion-card-title>\n        </ion-card>\n\n        <ion-card *ngIf=\"role === 'TALLER_ROLE' && listaModulos.includes('factura')\" mode=\"ios\" [routerLink]=\"['/central/menu/factura']\">\n            <ion-card-header><img src=\"/assets/NuevaFactura.png\" width=\"100px\"></ion-card-header>\n            <ion-card-title>Facturero\n            </ion-card-title>\n        </ion-card>\n\n\n        <ion-card mode=\"ios\" [routerLink]=\"['/central/menu/inicioMapa']\">\n            <ion-card-header><img src=\"/assets/Mapas.png\" width=\"100px\"></ion-card-header>\n            <ion-card-title>Sistema de Mapas\n            </ion-card-title>\n        </ion-card>\n\n        <ion-card *ngIf=\"role === 'USER_ROLE'\" mode=\"ios\" [routerLink]=\"['/central/menu/recordatorios']\">\n            <ion-card-header><img src=\"/assets/Anuncios.png\" width=\"100px\"></ion-card-header>\n            <ion-card-title>Recordatorios\n            </ion-card-title>\n        </ion-card>\n\n        <ion-card *ngIf=\"role === 'TALLER_ROLE' && listaModulos.includes('recordatorios')\" mode=\"ios\" [routerLink]=\"['/central/menu/recordatorios']\">\n            <ion-card-header><img src=\"/assets/Anuncios.png\" width=\"100px\"></ion-card-header>\n            <ion-card-title>Recordatorios\n            </ion-card-title>\n        </ion-card>\n\n        <ion-card *ngIf=\"role === 'USER_ROLE' && ivt\" mode=\"ios\" [routerLink]=\"['/central/menu/ivt-inicio']\">\n            <ion-card-header><img src=\"/assets/Ivt.png\" width=\"100px\"></ion-card-header>\n            <ion-card-title>Inventarios\n            </ion-card-title>\n        </ion-card>\n\n\n        <ion-card *ngIf=\"role === 'TALLER_ROLE' && listaModulos.includes('inventarios')\" mode=\"ios\" [routerLink]=\"['/central/menu/ivt-inicio']\">\n            <ion-card-header><img src=\"/assets/Ivt.png\" width=\"100px\"></ion-card-header>\n            <ion-card-title>Inventarios\n            </ion-card-title>\n        </ion-card>\n\n        <ion-card *ngIf=\"role === 'TALLER_ROLE' && listaModulos.includes('tickets')\" mode=\"ios\" [routerLink]=\"['/central/tickets', id]\">\n            <ion-card-header><img src=\"/assets/Ticket.png\" width=\"100px\"></ion-card-header>\n            <ion-card-title>Tickets\n            </ion-card-title>\n        </ion-card>\n\n        <ion-card *ngIf=\"role === 'USER_ROLE'\" mode=\"ios\" [routerLink]=\"['/central/tickets']\">\n            <ion-card-header><img src=\"/assets/Ticket.png\" width=\"100px\"></ion-card-header>\n            <ion-card-title>Tickets\n            </ion-card-title>\n        </ion-card>\n\n        <ion-card *ngIf=\"role === 'USER_ROLE'\" mode=\"ios\" [routerLink]=\"['/central/pedidos']\">\n            <ion-card-header><img src=\"/assets/Estados.png\" width=\"100px\"></ion-card-header>\n            <ion-card-title>Pedidos\n            </ion-card-title>\n        </ion-card>\n\n\n        <ion-card *ngIf=\"role === 'TALLER_ROLE' && listaModulos.includes('pedidos')\" mode=\"ios\" [routerLink]=\"['/central/pedidos']\">\n            <ion-card-header><img src=\"/assets/Estados.png\" width=\"100px\"></ion-card-header>\n            <ion-card-title>Pedidos\n            </ion-card-title>\n        </ion-card>\n\n        <ion-card mode=\"ios\" [routerLink]=\"['/central/chats']\">\n            <ion-card-header><img src=\"/assets/Chats.png\" width=\"100px\"></ion-card-header>\n            <ion-card-title>Chats\n            </ion-card-title>\n        </ion-card>\n\n        <ion-card *ngIf=\"role === 'TALLER_ROLE' && listaModulos.includes('patinadas')\" mode=\"ios\" [routerLink]=\"['/central/patinadas']\">\n            <ion-card-header><img src=\"/assets/Patinada.png\" width=\"100px\"></ion-card-header>\n            <ion-card-title>Bandeja Patinadas\n            </ion-card-title>\n        </ion-card>\n        <ion-card *ngIf=\"role === 'TALLER_ROLE' && listaModulos.includes('patinadas')\" mode=\"ios\" [routerLink]=\"['/central/mispatinadas']\">\n            <ion-card-header><img src=\"/assets/Mispatinadas.png\" width=\"100px\"></ion-card-header>\n            <ion-card-title>Mia Patinadas\n            </ion-card-title>\n        </ion-card>\n\n        <ion-card mode=\"ios\" [routerLink]=\"['/central/seguridad']\">\n            <ion-card-header><img src=\"/assets/seguridad.png\" width=\"100px\"></ion-card-header>\n            <ion-card-title>Seguridad\n            </ion-card-title>\n        </ion-card>\n\n\n\n\n    </div>\n\n    <ion-list class=\"light\">\n\n\n        <div class=\"divider light\"></div>\n\n        <ion-item color=\"danger\" (click)=\"terminar()\">\n            <ion-icon name=\"power-outline\" slot=\"start\"></ion-icon>\n            <ion-label>Cerrar sesión</ion-label>\n        </ion-item>\n\n    </ion-list>\n\n\n</ion-content>");

/***/ }),

/***/ "agdb":
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu.page.html */ "V3Oe");
/* harmony import */ var _menu_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.page.scss */ "3Gdt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var src_app_providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/Utilidades/LoadingService.service */ "r3ab");
/* harmony import */ var src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/Api/Seguimiento.service */ "Gq8O");
/* harmony import */ var src_app_providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/cargas/usuarios.service */ "cb8P");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_providers_Conexiones_Conexion_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/providers/Conexiones/Conexion.service */ "1+ow");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../providers/Api/UsuariosLogin.service */ "oQG1");
/* harmony import */ var _providers_Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../providers/Api/Recordatorios.service */ "71hY");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../providers/Api/Inventarios.service */ "5yQV");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");


















let MenuPage = class MenuPage {
    constructor(almacenamiento, loading, toastService, navCtrl, apiSeguimiento, cargaElementos, router, menuCtrl, conexion, usuarioApi, apiRecordatorios, statusbar, ivtApi, socket) {
        this.almacenamiento = almacenamiento;
        this.loading = loading;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.apiSeguimiento = apiSeguimiento;
        this.cargaElementos = cargaElementos;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.conexion = conexion;
        this.usuarioApi = usuarioApi;
        this.apiRecordatorios = apiRecordatorios;
        this.statusbar = statusbar;
        this.ivtApi = ivtApi;
        this.socket = socket;
        this.cantidadSeguimiento = 0;
        this.notificaciones = 0;
        this.recordatorios = 0;
        this.red = 'wifi';
        this.role = '';
        this.ivt = false;
        this.id = '';
        this.listaModulos = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        // console.log('ENTRANDOOO')
        this.statusbar.backgroundColorByHexString('#273238');
        this.capturarRole();
        this.cargar();
        this.modulos();
    }
    refrescando(event) {
        this.capturarRole().then(() => {
            event.detail.complete();
            this.cargar();
            this.modulos();
        }).catch(() => {
            event.detail.complete();
            this.cargar();
            this.modulos();
        });
    }
    capturarRole() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                console.log('inicio', info);
                if (info._id && info._id !== '') {
                    if (info.role === 'TALLER_ROLE') {
                        this.socket.emit('ticket', { id: info._id });
                    }
                    this.role = info.role;
                    this.id = info._id;
                    this.apiSeguimiento.solicitudesRecibidas(info.token).subscribe((data) => {
                        if (data.exe) {
                            this.cantidadSeguimiento = data.response.SeguimientoData.length;
                        }
                    });
                    this.usuarioApi.notiCantidad(info.token).subscribe((data) => {
                        // // console.log(data);
                        if (data.exe) {
                            this.notificaciones = data.response;
                        }
                    });
                    this.apiRecordatorios.getRecordatorioPersona(info.token).subscribe((data) => {
                        this.recordatorios = data.response.length;
                    });
                }
                else {
                    this.navCtrl.navigateRoot('/home');
                }
            }
        });
    }
    modulos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                if (info._id && info._id !== '') {
                    this.usuarioApi.modulos(info.token).subscribe((data) => {
                        if (data.exe) {
                            // console.log(data.response, 'respon')
                            if (data.response.length > 0) {
                                this.listaModulos = data.response[0].modulos;
                            }
                        }
                        else {
                            this.toastService.toastError('No se pudo cargar los módulos, intentelo más tarde');
                        }
                    }, (err) => {
                        this.toastService.toastError('No se pudo cargar los módulos, intentelo más tarde');
                    });
                }
                else {
                    this.navCtrl.navigateRoot('/home');
                }
            }
        });
    }
    cargar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                if (info._id && info._id !== '') {
                    this.ivtApi.leerInventarios(info.token).subscribe((data) => {
                        if (data.exe) {
                            if (data.response.length > 0) {
                                this.ivt = true;
                            }
                            else {
                                this.ivt = false;
                            }
                        }
                        else {
                            this.toastService.toastError('No se pudo crear el inventario, intentelo más tarde');
                        }
                    }, (err) => {
                        this.toastService.toastError('No se pudo crear el inventario, intentelo más tarde');
                    });
                }
                else {
                    this.navCtrl.navigateRoot('/home');
                }
            }
        });
    }
    terminar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const info = yield this.almacenamiento.obtenerToken();
                if (info) {
                    // // console.log(estado, 'ESTADO');
                    this.usuarioApi.cerrar(info.token).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (data.exe) {
                            const estado = yield this.almacenamiento.terminarPartida();
                            if (estado) {
                                this.loading.cargaProcesos('Cerrando sesión, te esperamos pronto').then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    const abandonarPartida = yield this.conexion.destruir();
                                    if (abandonarPartida) {
                                        // // console.log(abandonarPartida)
                                        // // console.log('Abandonar partida');
                                        this.role = '';
                                        this.ivt = false;
                                        // this.cargaElementos.cancelarSuscripciones();
                                        this.navCtrl.navigateRoot('/home');
                                        this.loading.finalizarCargado();
                                    }
                                    else {
                                        // // console.log('Abandonar partida falló');
                                        this.loading.finalizarCargado();
                                    }
                                }));
                            }
                            else {
                                // // console.log('MUY MAL');
                                this.navCtrl.navigateRoot('/home');
                            }
                        }
                        else {
                            this.toastService.toastError('No se pudo cerrar la sesión');
                        }
                    }), (err) => {
                        this.toastService.toastError('No se pudo cerrar la sesión');
                    });
                }
                else {
                    // // console.log('MUY MAL');
                    this.navCtrl.navigateRoot('/home');
                    this.toastService.toastError('No se pudo cerrar la sesión');
                }
            }
            catch (error) {
                this.navCtrl.navigateRoot('/home');
                this.loading.finalizarCargado();
                yield this.toastService.toastError('No se pudo cerrar la sesión');
            }
        });
    }
};
MenuPage.ctorParameters = () => [
    { type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"] },
    { type: src_app_providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
    { type: src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__["ToastServices"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: src_app_providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_8__["ApiSeguimientoService"] },
    { type: src_app_providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_9__["CargaElementosUsuariosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
    { type: src_app_providers_Conexiones_Conexion_service__WEBPACK_IMPORTED_MODULE_11__["ConexionService"] },
    { type: _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_13__["UsuariosLoginService"] },
    { type: _providers_Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_14__["RecordatoriosService"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_15__["StatusBar"] },
    { type: _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_16__["InventariosService"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_17__["Socket"] }
];
MenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu',
        template: _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["trigger"])('alerta', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({
                    background: '#FFEBAD',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["state"])('close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({
                    background: '#FFFFFF'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('300ms')
                ])
            ])
        ],
        styles: [_menu_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuPage);



/***/ }),

/***/ "ckNQ":
/*!***************************************************!*\
  !*** ./src/app/pages/menu/menu-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function() { return MenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.page */ "agdb");




const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"]
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=menu-menu-module.js.map