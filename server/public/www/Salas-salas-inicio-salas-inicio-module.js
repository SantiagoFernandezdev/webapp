(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Salas-salas-inicio-salas-inicio-module"],{

/***/ "4dgt":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Salas/salas-inicio/salas-inicio.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"oscuro\">\n        <ion-back-button slot=\"start\" icon=\"chevron-back-outline\" defaultHref=\"/central/menu\"></ion-back-button>\n        <ion-title>Sistema de Chats</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content #contenido *ngIf=\"scroll\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-searchbar debounce=\"300\" mode=\"ios\" placeholder=\"Buscar chats por tipo\" (ionChange)=\"buscar($event)\"></ion-searchbar>\n\n    <div class=\"flcenter ion-padding\" *ngIf=\"!cargado\">\n        <ion-spinner name=\"crescent\" color=\"oscuro\"></ion-spinner>\n        <div>\n            Cargando chats... <br>\n            <strong> {{ usuario }}</strong>\n        </div>\n\n    </div>\n\n    <div class=\"divider light\"></div>\n\n    <div *ngIf=\"cargado\">\n\n        <div class=\"flcenter ion-padding \" *ngIf=\"salas.length === 0\">\n            <div class=\"ct\">\n                <img src=\"/assets/Citas.png\" width=\"80px\" alt=\"\"> <br> Aún no tiene chats creados <br>\n            </div>\n\n\n        </div>\n\n\n        <div class=\" \" *ngIf=\"salas.length > 0\">\n\n            <ion-list>\n                <ion-item-sliding *ngFor=\"let sala of salas; let i = index;\">\n\n                    <ion-item (click)=\"entrar(sala)\">\n                        <ion-avatar [@escribiendo]=\" sala.escribiendo ?  'activo' : 'noactivo'\" *ngIf=\"sala.creador._id === id\" slot=\"start\">\n                            <img src=\"https://www.motocaliapp.com/{{ sala.taller.imagen[0].path}}\">\n                        </ion-avatar>\n\n                        <ion-avatar [@escribiendo]=\" sala.escribiendo ?  'activo' : 'noactivo'\" *ngIf=\"sala.creador._id !== id\" slot=\"start\">\n                            <img src=\"https://www.motocaliapp.com/{{ sala.creador.imagen[0].path}}\">\n                        </ion-avatar>\n                        <ion-label class=\"relativo\">\n                            <div [@escribiendo]=\" sala.escribiendo ?  'activo' : 'noactivo'\" class=\"info\">\n                                <strong *ngIf=\"sala.creador._id !== id\"> {{ sala.creador.nombrecompleto}}</strong>\n                                <strong *ngIf=\"sala.creador._id === id\"> {{ sala.taller.nombrecompleto}}</strong>\n\n                            </div>\n                            <strong [@escribiendo]=\" sala.escribiendo ?  'activo' : 'noactivo'\" [class.ticket]=\"sala.tipo === 'ticket'\" [class.pedido]=\"sala.tipo === 'pedido'\" [class.hoja]=\"sala.tipo === 'hoja'\">Chat Tipo:  {{ sala.tipo }}</strong>\n                            <div [@escribiendo]=\" sala.escribiendo ?  'activo' : 'noactivo'\">{{ sala.fecha | cambioUTC}}</div>\n                            <div class=\"escribiendo\"> <span *ngIf=\"sala.escribiendo\"> Escribiendo...</span></div>\n\n                            <div class=\"nv\" *ngIf=\"sala.novistos > 0\">{{ sala.novistos}}</div>\n\n                        </ion-label>\n                    </ion-item>\n                    <ion-item-options side=\"end\">\n                        <ion-item-option color=\"barra\" *ngIf=\"sala.taller._id === id  || role === 'TALLER_ROLE'\" (click)=\"agregar(sala)\">\n                            <ion-icon name=\"add-outline\" slot=\"icon-only\"></ion-icon>\n                        </ion-item-option>\n\n                        <ion-item-option color=\"danger\" (click)=\"quitar(sala._id)\">\n                            <ion-icon name=\"trash-outline\" slot=\"icon-only\"></ion-icon>\n                        </ion-item-option>\n                    </ion-item-options>\n                </ion-item-sliding>\n\n            </ion-list>\n        </div>\n\n    </div>\n\n    <ion-infinite-scroll *ngIf=\"cargado\" #inifinito threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando Hojas de Vida...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n\n\n</ion-content>");

/***/ }),

/***/ "Ycjp":
/*!*************************************************************************!*\
  !*** ./src/app/pages/Salas/salas-inicio/salas-inicio-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: SalasInicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalasInicioPageRoutingModule", function() { return SalasInicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _salas_inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./salas-inicio.page */ "aiHF");




const routes = [
    {
        path: '',
        component: _salas_inicio_page__WEBPACK_IMPORTED_MODULE_3__["SalasInicioPage"]
    }
];
let SalasInicioPageRoutingModule = class SalasInicioPageRoutingModule {
};
SalasInicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SalasInicioPageRoutingModule);



/***/ }),

/***/ "aiHF":
/*!***************************************************************!*\
  !*** ./src/app/pages/Salas/salas-inicio/salas-inicio.page.ts ***!
  \***************************************************************/
/*! exports provided: SalasInicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalasInicioPage", function() { return SalasInicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_salas_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./salas-inicio.page.html */ "4dgt");
/* harmony import */ var _salas_inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./salas-inicio.page.scss */ "mz3g");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_Components_modal_mapas_modal_mapas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Components/modal-mapas/modal-mapas.component */ "ypew");
/* harmony import */ var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var src_app_providers_Api_Pedidos_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/providers/Api/Pedidos.service */ "HavB");
/* harmony import */ var src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/providers/Utilidades/ToastService.service */ "fmoy");













let SalasInicioPage = class SalasInicioPage {
    constructor(router, alert, almacenamiento, toast, apiPedidos, socket, modal) {
        this.router = router;
        this.alert = alert;
        this.almacenamiento = almacenamiento;
        this.toast = toast;
        this.apiPedidos = apiPedidos;
        this.socket = socket;
        this.modal = modal;
        this.configurando = false;
        this.usuario = '';
        this.habilitado = false;
        this.cargado = false;
        this.id = '';
        this.salas = [];
        this.desde = 0;
        this.patron = '';
        this.scroll = true;
        this.role = '';
        this.escucharEscritoss().subscribe((data) => {
            console.log('escribiendo...', data);
            if (data.exe) {
                this.salas.forEach((it) => {
                    if (it._id === data.idsala) {
                        console.log('existe');
                        it.escribiendo = true;
                        setTimeout(() => {
                            it.escribiendo = false;
                        }, 500);
                    }
                });
            }
        });
        this.escucharMensaje().subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('mensaje', data);
            if (data.exe) {
                const info = yield this.almacenamiento.obtenerToken();
                if (info) {
                    const temp = this.salas.filter((item) => {
                        return item._id === data.resp.sala._id;
                    });
                    this.apiPedidos.mensajes(info.token, { idsala: temp[0]._id }).subscribe((resp) => {
                        this.salas = this.salas.filter((item) => {
                            return item._id !== data.resp.sala._id;
                        });
                        if (resp.exe) {
                            temp[0].novistos = resp.response.length;
                        }
                        else {
                            temp[0].novistos = 0;
                        }
                        this.salas.unshift(temp[0]);
                    }, (err) => {
                        this.salas = this.salas.filter((item) => {
                            return item._id !== data.resp.sala._id;
                        });
                        temp[0].novistos = 0;
                        this.salas.unshift(temp[0]);
                    });
                }
            }
        }));
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.pedidosListar();
    }
    refrescando(event) {
        this.pedidosListar().then(() => {
            event.detail.complete();
        }).catch(() => {
            event.detail.complete();
        });
    }
    pedidosListar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.role = info.role;
                this.id = info._id;
                this.usuario = info.nombre;
                this.apiPedidos.misChats(info.token, { patron: '', desde: this.desde }).subscribe((data) => {
                    // console.log(data)
                    if (data.exe) {
                        let f = data.response.length;
                        data.response.forEach((item) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            item.escribiendo = false;
                            this.socket.emit('iniciochat', { id: item._id });
                            const l = yield new Promise((resolve, reject) => {
                                this.apiPedidos.mensajes(info.token, { idsala: item._id }).subscribe((resp) => {
                                    if (resp.exe) {
                                        console.log(resp, 'RESPUESTA DEL TODO');
                                        item.fechamsg = resp.response.lemgth > 0 ? resp.response[resp.response.length - 1] : item.fecha;
                                        item.novistos = resp.response.length;
                                        resolve(true);
                                    }
                                    else {
                                        item.novistos = 0;
                                        resolve(true);
                                    }
                                }, (err) => {
                                    item.novistos = 0;
                                    resolve(true);
                                });
                            });
                            if (l) {
                                f = f - 1;
                                if (f === 0) {
                                    this.salas = data.response;
                                    console.log(this.salas, 'salas', f);
                                    this.salas.sort((a, b) => {
                                        console.log(a.novistos);
                                        if (a.novistos < b.novistos) {
                                            console.log('meno');
                                            return 1;
                                        }
                                        if (a.novistos > b.novistos) {
                                            console.log('mayor');
                                            return -1;
                                        }
                                        return 0;
                                    });
                                }
                                this.cargado = true;
                            }
                        }));
                        if (data.response.length === 0) {
                            this.cargado = true;
                        }
                    }
                    else {
                        this.toast.toastError('No se pudo consultar los pedidos, inténtelo más tarde');
                        this.router.navigate(['/central/menu/']);
                        this.cargado = true;
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo consultar los pedidos, inténtelo más tarde');
                    this.router.navigate(['/central/menu/']);
                });
            }
        });
    }
    crear() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Crear Pedido',
                // tslint:disable-next-line:max-line-length
                message: 'Los pedidos puedes realizarlos para comprar los repuestos o productos que necesites para tu vehículo.',
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
                        handler: (data) => {
                            this.router.navigate(['/central/menu/control-mapas']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    escucharEscritoss() {
        const myobserver = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"](observer => {
            this.socket.on('escribiendoChat', (data) => {
                observer.next(data);
            });
        });
        return myobserver;
    }
    escucharMensaje() {
        const myobserver = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"](observer => {
            this.socket.on('mensajeChat', (data) => {
                observer.next(data);
            });
        });
        return myobserver;
    }
    entrar(sala) {
        this.almacenamiento.insertarChat(sala).then(() => {
            this.router.navigate(['/central/chats/chat']);
        }).catch(() => {
            this.toast.toastError('No se puede acceder al chat, inténtelo más tarde');
        });
    }
    agregar(sala) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_Components_modal_mapas_modal_mapas_component__WEBPACK_IMPORTED_MODULE_9__["ModalMapasComponent"],
                componentProps: {
                    sala
                }
            });
            yield modal.present();
        });
    }
    quitar(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Atención!',
                // tslint:disable-next-line:max-line-length
                message: '¿Estas seguro de abandonar esta sala? No podras visualizar de nuevo la  información dentro de ella',
                buttons: [
                    {
                        text: 'Cancelar',
                        cssClass: 'cancelarAlerta',
                        role: 'cancel',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Salir',
                        cssClass: 'botonalerta',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const info = yield this.almacenamiento.obtenerToken();
                            if (info) {
                                // tslint:disable-next-line:max-line-length
                                let nuevo = this.salas.filter((item) => {
                                    return item._id === id;
                                })[0].accesos;
                                nuevo = nuevo.map((item) => {
                                    return item;
                                });
                                nuevo = nuevo.filter((item) => {
                                    return item !== info._id;
                                });
                                console.log(nuevo);
                                this.apiPedidos.editarChat(info.token, { id, accesos: nuevo }).subscribe((data) => {
                                    // console.log(data)
                                    if (data.exe) {
                                        this.toast.Especial('Saliste de la sala');
                                        this.pedidosListar();
                                    }
                                    else {
                                        this.toast.toastError('No se pudo realizar la petición, inténtelo más tarde');
                                    }
                                }, (err) => {
                                    this.toast.toastError('No se pudo realizar la petición, inténtelo más tarde');
                                });
                            }
                        })
                    }
                ]
            });
            yield alert.present();
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
                    this.apiPedidos.misChats(info.token, { desde: this.desde, patron: this.patron }).subscribe((data) => {
                        // // console.log(data, 'mi data');
                        if (data.exe) {
                            this.salas = data.response;
                            if (data.response.length === 0) {
                                this.desde = 0;
                            }
                        }
                        else {
                            this.toast.toastError('No se pudo realizar la consulta, intentelo más tarde');
                        }
                    }, (err) => {
                        this.toast.toastError('No se pudo realizar la consulta, intentelo más tarde');
                    });
                }
            }
            else {
                this.desde = 0;
                this.pedidosListar();
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
                    this.apiPedidos.misChats(info.token, { desde: this.desde, patron: this.patron }).subscribe((data) => {
                        // // console.log(data, 'CARGADA OFICIAL');
                        if (data.exe) {
                            if (data.response.length > 0) {
                                data.response.forEach((hoja) => {
                                    this.salas.push(hoja);
                                });
                                event.target.complete();
                            }
                            else {
                                event.target.disabled = true;
                                this.desde = 0;
                            }
                        }
                        else {
                            this.toast.toastError('No se pudo traer los chats, inténtelo más tarde.');
                        }
                    }, (err) => {
                        this.toast.toastError('No se pudo traer los chats, inténtelo más tarde.');
                    });
                }
                else {
                    // tslint:disable-next-line:max-line-length
                    // // console.log(this.desde, 'pli');
                    this.apiPedidos.misChats(info.token, { desde: this.desde, patron: this.patron }).subscribe((data) => {
                        // // console.log(data, 'mi data 2', this.desde);
                        if (data.exe) {
                            if (data.response.length > 0) {
                                data.response.forEach((hoja) => {
                                    this.salas.push(hoja);
                                });
                                event.target.complete();
                            }
                            else {
                                event.target.disabled = true;
                                this.desde = 0;
                            }
                        }
                        else {
                            this.toast.toastError('No se pudo realizar la consulta, intentelo más tarde');
                        }
                    }, (err) => {
                        this.toast.toastError('No se pudo realizar la consulta, intentelo más tarde');
                    });
                }
            }
        });
    }
    ionViewWillLeave() {
        this.salas.forEach((item) => {
            this.socket.emit('salidachat', { id: item._id });
        });
    }
};
SalasInicioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_10__["InicioService"] },
    { type: src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_12__["ToastServices"] },
    { type: src_app_providers_Api_Pedidos_service__WEBPACK_IMPORTED_MODULE_11__["PedidosService"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__["Socket"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
SalasInicioPage.propDecorators = {
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['inifinito', { static: false },] }],
    contenido: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['contenido', { static: false },] }]
};
SalasInicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-salas-inicio',
        template: _raw_loader_salas_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('escribiendo', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('activo', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    opacity: .5
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('noactivo', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('activo <=> noactivo', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms')
                ])
            ])
        ],
        styles: [_salas_inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SalasInicioPage);



/***/ }),

/***/ "mz3g":
/*!*****************************************************************!*\
  !*** ./src/app/pages/Salas/salas-inicio/salas-inicio.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flcenter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  text-align: center;\n}\n\nion-card {\n  position: relative;\n}\n\n.tp {\n  z-index: 10;\n  background-color: transparent;\n}\n\n.ct {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 300;\n}\n\n.msg {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  text-align: center;\n  padding: 5px 10px;\n  border-radius: 10px;\n}\n\n.escribiendo {\n  color: #627E42;\n  font-weight: bold;\n  font-size: 14px;\n  height: 20px;\n}\n\n.relativo {\n  position: relative;\n}\n\n.nv {\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  background-color: #627E42;\n  color: #ffffff;\n  text-align: center;\n  min-width: 20px;\n  min-height: 20px;\n  max-width: 50px;\n  max-height: 50px;\n  border-radius: 100%;\n}\n\n.info {\n  width: 70%;\n}\n\n.ticket {\n  color: #E53935;\n}\n\n.pedido {\n  color: #FFA500;\n}\n\n.hoja {\n  color: #4A4A4A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2FsYXMtaW5pY2lvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJzYWxhcy1pbmljaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50cCB7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4ubXNnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmVzY3JpYmllbmRvIHtcclxuICAgIGNvbG9yOiAjNjI3RTQyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5yZWxhdGl2byB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5udiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDVweDtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjI3RTQyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtaW4td2lkdGg6IDIwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gICAgbWF4LWhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi50aWNrZXQge1xyXG4gICAgY29sb3I6ICNFNTM5MzU7XHJcbn1cclxuXHJcbi5wZWRpZG8ge1xyXG4gICAgY29sb3I6ICNGRkE1MDA7XHJcbn1cclxuXHJcbi5ob2phIHtcclxuICAgIGNvbG9yOiAjNEE0QTRBO1xyXG59Il19 */");

/***/ }),

/***/ "pICn":
/*!*****************************************************************!*\
  !*** ./src/app/pages/Salas/salas-inicio/salas-inicio.module.ts ***!
  \*****************************************************************/
/*! exports provided: SalasInicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalasInicioPageModule", function() { return SalasInicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _salas_inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./salas-inicio-routing.module */ "Ycjp");
/* harmony import */ var _salas_inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./salas-inicio.page */ "aiHF");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");








let SalasInicioPageModule = class SalasInicioPageModule {
};
SalasInicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _salas_inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["SalasInicioPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_salas_inicio_page__WEBPACK_IMPORTED_MODULE_6__["SalasInicioPage"]]
    })
], SalasInicioPageModule);



/***/ })

}]);
//# sourceMappingURL=Salas-salas-inicio-salas-inicio-module.js.map