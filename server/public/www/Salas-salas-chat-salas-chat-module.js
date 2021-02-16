(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Salas-salas-chat-salas-chat-module"],{

/***/ "/qCi":
/*!*************************************************************!*\
  !*** ./src/app/pages/Salas/salas-chat/salas-chat.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".barra {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.barra ion-textarea {\n  width: 80%;\n  border-radius: 10px;\n  padding: 10px;\n  background-color: #f1f1ff;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n}\n\n.tipo {\n  color: #E3B61C;\n}\n\n.chats {\n  padding: 10px 5px;\n}\n\n.chat {\n  width: 100%;\n}\n\n.mensaje {\n  width: 80%;\n  padding: 15px 10px;\n  border-radius: 10px 0 10px;\n  background-color: #f1f1ff;\n  margin-top: 10px;\n  position: relative;\n}\n\n.av {\n  width: 100%;\n  border-radius: 10px;\n  margin: 10px auto;\n  background-color: #FBE9AA;\n  text-align: center;\n  font-size: 14px;\n  padding: 5px;\n  color: #333333;\n}\n\n.fc {\n  font-size: 12px;\n  opacity: 0.5;\n}\n\n.visto {\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  width: 10px;\n  height: 10px;\n  background-color: #4B8BF4;\n  border-radius: 100%;\n}\n\n.right {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.right .mensaje {\n  background-color: #3B4B54;\n  color: #f1f1ff;\n  font-size: 14px;\n  font-weight: 300;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\n.left {\n  font-size: 14px;\n  font-weight: 300;\n}\n\n.left .emisor {\n  font-weight: bold;\n  color: #819830 !important;\n  margin-bottom: 5px;\n}\n\n.vistopor {\n  color: #008DD4;\n}\n\n.novistopor {\n  color: #E53935;\n}\n\n.usuario {\n  color: #eeeeee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2FsYXMtY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoic2FsYXMtY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFycmEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJhcnJhIGlvbi10ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4udGlwbyB7XHJcbiAgICBjb2xvcjogI0UzQjYxQztcclxufVxyXG5cclxuLmNoYXRzIHtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG59XHJcblxyXG4uY2hhdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1lbnNhamUge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmZjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5hdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkU5QUE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxufVxyXG5cclxuLmZjIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG9wYWNpdHk6IC41O1xyXG59XHJcblxyXG4udmlzdG8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEI4QkY0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4ucmlnaHQgLm1lbnNhamUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNCNEI1NDtcclxuICAgIGNvbG9yOiAjZjFmMWZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmxlZnQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmxlZnQgLmVtaXNvciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjODE5ODMwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi52aXN0b3BvciB7XHJcbiAgICBjb2xvcjogIzAwOERENDtcclxufVxyXG5cclxuLm5vdmlzdG9wb3Ige1xyXG4gICAgY29sb3I6ICNFNTM5MzU7XHJcbn1cclxuXHJcbi51c3VhcmlvIHtcclxuICAgIGNvbG9yOiAjZWVlZWVlO1xyXG59Il19 */");

/***/ }),

/***/ "DqVE":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Salas/salas-chat/salas-chat.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"oscuro\">\n        <ion-back-button slot=\"start\" icon=\"chevron-back-outline\" defaultHref=\"/central/chats\"></ion-back-button>\n        <ion-title>Chat <span *ngIf=\"sala\" class=\"tipo\">{{ sala.tipo }}</span> <br>\n            <div *ngIf=\"sala && sala.creador._id !== id\">{{ sala.creador.nombrecompleto}}</div>\n\n            <div *ngIf=\"sala && sala.creador._id === id\">{{ sala.taller.nombrecompleto}}</div>\n        </ion-title>\n        <ion-avatar (click)=\"abrir($event)\" slot=\"end\" *ngIf=\"sala && sala.creador._id !== id\">\n            <img src=\"{{sala.creador.imagen[0].path}}\" alt=\"\">\n        </ion-avatar>\n\n        <ion-avatar (click)=\"abrir($event)\" slot=\"end\" *ngIf=\"sala && sala.creador._id === id\">\n            <img src=\"{{sala.taller.imagen[0].path}}\" alt=\"\">\n        </ion-avatar>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content #contenido *ngIf=\"carga\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-infinite-scroll *ngIf=\"carga\" #inifinito threshold=\"100px\" (ionInfinite)=\"cargaMensajesLimite($event)\" position=\"top\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando Mensajes...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <div class=\"chats\" [@escribiendo]=\" escribiendo ?  'activo' : 'noactivo'\">\n        <div class=\"chat\" *ngFor=\"let msg of mensajes; let i = index;\" [class.right]=\"msg.creador._id === id\" [class.left]=\"msg.creador._id !== id\" (click)=\"ver(msg, i)\">\n            <div class=\"mensaje\" *ngIf=\"!msg.ms\">\n\n                <div *ngIf=\"msg.creador._id !== id\" class=\"emisor\">\n                    {{msg.creador.nombrecompleto}}\n                </div>\n\n                <div *ngIf=\"msg.creador._id === id\" class=\"\">\n                    Tú\n                    <br>\n                </div>\n\n                <div class=\"texto\">\n                    {{msg.mensaje}}\n                </div>\n\n                <div *ngIf=\"msg.vistos.length === 0 && msg.creador._id === id\" class=\"visto\"></div>\n\n\n\n\n                <div *ngIf=\"msg.vs\" class=\"vistos\">\n                    <div class=\"fc\">{{ msg.fecha | cambioUTC}}</div>\n                    <br>\n                    <strong class=\"vistopor\">Visto por: </strong> <br>\n                    <div class=\"usuario\" *ngFor=\"let usu of msg.accesos | fchat : msg.vistos: 2\">\n                        - {{usu}}\n                    </div>\n\n\n                    <br>\n                    <strong class=\"novistopor\">No lo ha visto: </strong> <br>\n                    <div class=\"usuario\" *ngFor=\"let usu of msg.accesos | fchat : msg.vistos: 1\">\n                        - {{usu}}\n                    </div>\n\n                </div>\n            </div>\n\n            <div class=\"mensaje av\" *ngIf=\"msg.ms\">\n\n                <div>\n                    Mensajes sin leer\n                </div>\n\n            </div>\n\n\n        </div>\n    </div>\n\n\n</ion-content>\n\n<ion-footer *ngIf=\"cargamsg\">\n    <ion-toolbar>\n        <div class=\"barra\">\n            <ion-textarea (ionChange)=\"escribir($event)\" rows=\"1\" placeholder=\"Escriba el mensaje\" [(ngModel)]=\"mensaje\"></ion-textarea>\n            <ion-buttons>\n                <ion-button (click)=\"enviarmensaje()\">\n                    <ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n        </div>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "SXFk":
/*!***********************************************************!*\
  !*** ./src/app/pages/Salas/salas-chat/salas-chat.page.ts ***!
  \***********************************************************/
/*! exports provided: SalasChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalasChatPage", function() { return SalasChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_salas_chat_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./salas-chat.page.html */ "DqVE");
/* harmony import */ var _salas_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./salas-chat.page.scss */ "/qCi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _providers_Api_Pedidos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../providers/Api/Pedidos.service */ "HavB");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../providers/cargas/usuarios.service */ "cb8P");
/* harmony import */ var _Components_detalles_detalles_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../Components/detalles/detalles.component */ "69E9");














let SalasChatPage = class SalasChatPage {
    constructor(almacenamiento, router, toast, socket, apiPedidos, cargarElementos, plt, modal, popover) {
        this.almacenamiento = almacenamiento;
        this.router = router;
        this.toast = toast;
        this.socket = socket;
        this.apiPedidos = apiPedidos;
        this.cargarElementos = cargarElementos;
        this.plt = plt;
        this.modal = modal;
        this.popover = popover;
        this.mensaje = '';
        this.mensajes = [];
        this.desde = 0;
        this.carga = true;
        this.escribiendo = false;
        this.frenar = false;
        this.parar = false;
        this.cargamsg = false;
        this.escucharEnvios().subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(data);
            if (!this.parar) {
                if (data.exe) {
                    this.mensaje = '';
                    data.resp.ms = false;
                    data.resp.vs = false;
                    this.mensajes.push(data.resp);
                    const info = yield this.almacenamiento.obtenerToken();
                    if (info) {
                        console.log('entrando', info);
                        this.contenido.scrollToBottom().then(() => {
                        }).catch(() => {
                        });
                        if (data.resp.creador._id !== info._id) {
                            console.log('marcar', data, this.parar);
                            if (!this.parar) {
                                this.marcar(data.resp._id, (this.mensajes.length - 1));
                            }
                        }
                        else {
                        }
                    }
                }
            }
        }));
        this.escucharVistos().subscribe((data) => {
            console.log(data, 'vistos');
            if (!this.parar) {
                if (data.exe) {
                    this.mensajes.map((item) => {
                        if (item._id === data.id) {
                            item.vistos = item.vistos.filter((it) => {
                                return it !== data.usuario;
                            });
                        }
                    });
                }
            }
        });
        this.escucharEscritoss().subscribe((data) => {
            console.log('escribiendo...');
            if (data.exe) {
                this.escribiendo = true;
                setTimeout(() => {
                    this.escribiendo = false;
                }, 1000);
            }
        });
        this.cargarElementos.$cargarRed.subscribe((red) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (red === 'none') {
                this.almacenamiento.eleminarSala().then(() => {
                    this.toast.Especial('Perdiste la conexión, verifica la red de internet e intenta nuevamente');
                    this.router.navigate(['/central/chats']);
                    this.socket.emit('salidachat', { id: this.sala._id });
                }).catch(() => {
                    this.toast.Especial('Perdiste la conexión, verifica la red de internet e intenta nuevamente');
                    this.router.navigate(['/central/chats']);
                    this.socket.emit('salidachat', { id: this.sala._id });
                });
            }
        }));
        this.plt.resume.subscribe((e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.parar) {
                this.contenido.scrollToBottom().then(() => {
                    this.arranca();
                }).catch(() => {
                    this.arranca();
                });
            }
        }));
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.parar = false;
        this.arranca();
    }
    arranca() {
        this.mensajes = [];
        this.almacenamiento.obtenerToken().then((info) => {
            this.id = info._id;
            this.almacenamiento.obtenerSala().then((sala) => {
                if (sala.length > 0) {
                    console.log(sala, 'info');
                    this.sala = sala[0];
                    this.sala2 = sala[0];
                    this.socket.emit('iniciochat', { id: this.sala._id });
                    if (this.sala.creador.imagen[0].path === 'notfound.png') {
                        this.sala.creador.imagen[0].path = '/assets/notfound.png';
                    }
                    else {
                        if (this.sala.creador.imagen[0].path.includes('https://www.motocaliapp.com')) {
                            this.sala.creador.imagen[0].path = this.sala.creador.imagen[0].path;
                        }
                        else {
                            this.sala.creador.imagen[0].path = 'https://www.motocaliapp.com/' + this.sala.creador.imagen[0].path;
                        }
                    }
                    if (this.sala.taller.imagen[0].path === 'notfound.png') {
                        this.sala.taller.imagen[0].path = '/assets/notfound.png';
                    }
                    else {
                        if (this.sala.taller.imagen[0].path.includes('https://www.motocaliapp.com')) {
                            this.sala.taller.imagen[0].path = this.sala.taller.imagen[0].path;
                        }
                        else {
                            this.sala.taller.imagen[0].path = 'https://www.motocaliapp.com/' + this.sala.taller.imagen[0].path;
                        }
                    }
                    this.cargarmensajesVistos();
                }
                else {
                    this.router.navigate(['/central/chats']);
                }
            });
        });
    }
    refrescando(event) {
        event.detail.complete();
    }
    cargaMensajesLimite(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.desde = this.desde + 15;
            // console.log(this.desde)
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiPedidos.traermensajesNoVistos(info.token, { idsala: this.sala._id, desde: this.desde, accesos: this.sala.accesos }).subscribe((data) => {
                    console.log(data);
                    if (data.exe) {
                        if (data.response.length > 0) {
                            event.target.complete();
                            data.response.forEach((item) => {
                                item.ms = false;
                                item.vs = false;
                                this.mensajes.unshift(item);
                            });
                        }
                        else {
                            event.target.disabled = true;
                            this.desde = 0;
                        }
                    }
                    else {
                        this.toast.toastError('No se pudo traer los mensajes, inténtelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo traer los mensajes, inténtelo más tarde');
                });
            }
        });
    }
    cargarmensajes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiPedidos.mensajes(info.token, { idsala: this.sala._id, accesos: this.sala.accesos }).subscribe((data) => {
                    console.log(data);
                    if (data.exe) {
                        if (data.response.length > 0) {
                            this.mensajes.push({ ms: true, creador: { _id: '' } });
                        }
                        data.response.forEach((item) => {
                            item.ms = false;
                            item.vs = false;
                            this.mensajes.push(item);
                            this.marcar(item._id, (this.mensajes.length - 1));
                            this.socket.emit('vistoChat', {
                                idsala: this.sala._id,
                                usuario: info._id,
                                id: item._id
                            });
                        });
                        this.cargamsg = true;
                    }
                    else {
                        this.toast.toastError('No se pudo traer los mensajes, inténtelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo traer los mensajes, inténtelo más tarde');
                });
            }
        });
    }
    cargarmensajesVistos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiPedidos.traermensajesNoVistos(info.token, { idsala: this.sala._id, desde: this.desde }).subscribe((data) => {
                    console.log(data);
                    if (data.exe) {
                        data.response.forEach((item) => {
                            item.ms = false;
                            this.mensajes.unshift(item);
                        });
                        this.contenido.scrollToBottom().then(() => {
                            this.cargarmensajes();
                        }).catch(() => {
                            this.cargarmensajes();
                        });
                    }
                    else {
                        this.toast.toastError('No se pudo traer los mensajes, inténtelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo traer los mensajes, inténtelo más tarde');
                });
            }
        });
    }
    marcar(id, idx) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiPedidos.marcarvisto(info.token, { id: id }).subscribe((data) => {
                    console.log(data, 'MARCADO');
                    if (data.exe) {
                        this.mensajes[idx].vistos = this.mensajes[idx].vistos.filter((item) => {
                            console.log(item, 'ITEMMMM', this.mensajes[idx]);
                            return item !== info._id;
                        });
                        this.socket.emit('vistoChat', {
                            idsala: this.sala._id,
                            usuario: info._id,
                            id: this.mensajes[idx]._id
                        });
                        // console.log(this.mensajes);
                    }
                    else {
                        this.toast.toastError('No se marcó en visto el mensaje, inténtelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se marcó en visto el mensaje, inténtelo más tarde');
                });
            }
        });
    }
    escribir(event) {
        this.escribiendo = false;
        this.mensaje = event.detail.value;
        this.socket.emit('escribiendoChat', { idsala: this.sala._id });
    }
    escucharEnvios() {
        if (!this.frenar) {
            const myobserver = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](observer => {
                this.socket.on('mensajeChat', (data) => {
                    observer.next(data);
                });
            });
            return myobserver;
        }
    }
    escucharEscritoss() {
        if (!this.frenar) {
            const myobserver = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](observer => {
                this.socket.on('escribiendoChat', (data) => {
                    observer.next(data);
                });
            });
            return myobserver;
        }
    }
    escucharVistos() {
        if (!this.frenar) {
            const myobserver = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](observer => {
                this.socket.on('vistoChat', (data) => {
                    observer.next(data);
                });
            });
            return myobserver;
        }
    }
    enviarmensaje() {
        if (this.mensaje !== '') {
            let idenvio = '';
            let emisor = '';
            if (this.id !== this.sala.creador._id) {
                idenvio = this.sala.creador._id;
                emisor = this.sala.creador.nombreusuario;
            }
            else {
                idenvio = this.sala.taller._id;
                emisor = this.sala.taller.nombreusuario;
            }
            console.log(this.sala.accesos);
            this.socket.emit('mensajeChat', { idsala: this.sala._id, idenvio, emisor, id: this.id, msg: this.mensaje, sala: this.sala2, accesos: this.sala.accesos, emite: this.id });
        }
    }
    cerrar() {
    }
    ver(msg, i) {
        if (msg.creador._id === this.id) {
            if (this.mensajes[i].vs) {
                this.mensajes[i].vs = false;
            }
            else {
                this.mensajes[i].vs = true;
            }
        }
    }
    abrir(eventt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.parar = true;
            const popover = yield this.popover.create({
                component: _Components_detalles_detalles_component__WEBPACK_IMPORTED_MODULE_13__["DetallesComponent"],
                componentProps: {
                    id: this.sala._id
                },
                event: eventt
            });
            return yield popover.present();
        });
    }
    ionViewWillLeave() {
        this.parar = true;
        this.socket.emit('salidachat', { id: this.sala._id });
        this.almacenamiento.eleminarSala().then(() => {
            this.socket.emit('salidachat', { id: this.sala._id });
        }).catch(() => {
            this.socket.emit('salidachat', { id: this.sala._id });
        });
    }
};
SalasChatPage.ctorParameters = () => [
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__["InicioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_8__["ToastServices"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"] },
    { type: _providers_Api_Pedidos_service__WEBPACK_IMPORTED_MODULE_9__["PedidosService"] },
    { type: _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_12__["CargaElementosUsuariosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["PopoverController"] }
];
SalasChatPage.propDecorators = {
    contenido: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['contenido', { static: false },] }]
};
SalasChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-salas-chat',
        template: _raw_loader_salas_chat_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('escribiendo', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('activo', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
                    opacity: 1,
                    background: '#BDC3C6'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('noactivo', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
                    opacity: 1,
                    background: '#ffffff'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('activo <=> noactivo', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('300ms')
                ])
            ])
        ],
        styles: [_salas_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SalasChatPage);



/***/ }),

/***/ "pEXU":
/*!*********************************************************************!*\
  !*** ./src/app/pages/Salas/salas-chat/salas-chat-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SalasChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalasChatPageRoutingModule", function() { return SalasChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _salas_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./salas-chat.page */ "SXFk");




const routes = [
    {
        path: '',
        component: _salas_chat_page__WEBPACK_IMPORTED_MODULE_3__["SalasChatPage"]
    }
];
let SalasChatPageRoutingModule = class SalasChatPageRoutingModule {
};
SalasChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SalasChatPageRoutingModule);



/***/ }),

/***/ "wYDu":
/*!*************************************************************!*\
  !*** ./src/app/pages/Salas/salas-chat/salas-chat.module.ts ***!
  \*************************************************************/
/*! exports provided: SalasChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalasChatPageModule", function() { return SalasChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _salas_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./salas-chat-routing.module */ "pEXU");
/* harmony import */ var _salas_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./salas-chat.page */ "SXFk");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Components/components.module */ "zon2");









let SalasChatPageModule = class SalasChatPageModule {
};
SalasChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _salas_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["SalasChatPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_salas_chat_page__WEBPACK_IMPORTED_MODULE_6__["SalasChatPage"]]
    })
], SalasChatPageModule);



/***/ })

}]);
//# sourceMappingURL=Salas-salas-chat-salas-chat-module.js.map