(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Tickets-tickets-sala-tickets-sala-module"],{

/***/ "+WxW":
/*!**************************************************!*\
  !*** ./src/app/providers/Api/Tickets.service.ts ***!
  \**************************************************/
/*! exports provided: TicketsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsService", function() { return TicketsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let TicketsService = class TicketsService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
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
    disponibilidad(token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ticket/disponibilidad`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    Creardisponibilidad(token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ticket/disponibilidad`, {}, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    editardisponibilidad(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ticket/disponibilidad`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    crearSala(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ticket/salas`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    misSalas(token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ticket/salas`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    crearTicket(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ticket/crear`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    misTickets(token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ticket/lista`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    misTicketsLista(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ticket/lista/negocio`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    salasNegocio(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ticket/salas/usuario`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    disponibilidadnegocio(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ticket/disponibilidad/negocio`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    ticketsolo(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ticket/solo`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    ticketelimina(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ticket/eliminar`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    crearHoja(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/hoja/dos`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    consultarSala(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/ticket/consultar/chat`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
};
TicketsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
TicketsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TicketsService);



/***/ }),

/***/ "GaWm":
/*!*****************************************************************!*\
  !*** ./src/app/pages/Tickets/tickets-sala/tickets-sala.page.ts ***!
  \*****************************************************************/
/*! exports provided: TicketsSalaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsSalaPage", function() { return TicketsSalaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tickets_sala_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tickets-sala.page.html */ "VKQI");
/* harmony import */ var _tickets_sala_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tickets-sala.page.scss */ "WiUn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var src_app_providers_Api_Tickets_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/Api/Tickets.service */ "+WxW");
/* harmony import */ var src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _Components_fechas_modal_fechas_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Components/fechas-modal/fechas-modal.component */ "/Yj/");












let TicketsSalaPage = class TicketsSalaPage {
    constructor(almacenamiento, toast, apiTickets, alert, router, socket, modal, active) {
        this.almacenamiento = almacenamiento;
        this.toast = toast;
        this.apiTickets = apiTickets;
        this.alert = alert;
        this.router = router;
        this.socket = socket;
        this.modal = modal;
        this.active = active;
        this.configurando = false;
        this.usuario = '';
        this.habilitado = false;
        this.cargado = false;
        this.id = '';
        this.tickets = [];
        this.escucharMensajes().subscribe((data) => {
            // console.log(data, ' data suscribe')
            if (data.msg) {
                this.tickets = this.tickets.filter((item) => {
                    return item._id !== data.id;
                });
                this.toast.toastExitoso('Ticket rechazado');
            }
            else {
                this.toast.toastError('No se pudo rechazar el ticket, inténtelo más tarde');
            }
        });
        this.escucharRechazos().subscribe((data) => {
            if (data.exe) {
                // console.log(data, 'sus')
                this.tickets = this.tickets.filter((item) => {
                    return item._id !== data.data._id;
                });
            }
            else {
                this.toast.toastError('No se pudo rechazar tu ticket');
            }
        });
        this.escucharCreados().subscribe((data) => {
            // console.log(data, ' data suscribe')
            if (data.exe) {
                this.tickets.push(data.data);
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.misTickets();
        this.almacenamiento.insertarTicket('entrando').then((r) => {
            if (r) {
                return true;
            }
        });
    }
    refrescando(event) {
        this.tickets = [];
        this.misTickets().then(() => {
            event.detail.complete();
        }).catch(() => {
            event.detail.complete();
        });
    }
    misTickets() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.configurando = true;
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiTickets.misTicketsLista(info.token, { id: info._id }).subscribe((data) => {
                    if (data.exe) {
                        this.tickets = data.response;
                        this.tickets.forEach((item) => {
                            this.socket.emit('ticket', { id: item.negocio._id });
                        });
                    }
                    else {
                        this.toast.toastError('No se pudo traer las tickets, inténtelo más tarde');
                        this.router.navigate(['/central/menu/']);
                    }
                    this.configurando = false;
                    this.cargado = true;
                }, (err) => {
                    this.toast.toastError('No se pudo traer las tickets, inténtelo más tarde');
                    this.router.navigate(['/central/menu/']);
                    this.configurando = false;
                    this.cargado = true;
                });
            }
        });
    }
    rechazar(ticket) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.socket.emit('rechazar', { idtaller: ticket.negocio._id, id: ticket._id, idusuario: ticket.creador._id });
            }
        });
    }
    escucharMensajes() {
        const myobserver = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"](observer => {
            this.socket.on('mensajeTicket', (data) => {
                observer.next(data);
            });
        });
        return myobserver;
    }
    escucharCreados() {
        const myobserver = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"](observer => {
            this.socket.on('crear', (data) => {
                observer.next(data);
            });
        });
        return myobserver;
    }
    miModal(ticket) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _Components_fechas_modal_fechas_modal_component__WEBPACK_IMPORTED_MODULE_11__["FechasModalComponent"]
            });
            yield modal.present();
            const data = yield modal.onWillDismiss();
            if (data) {
                if (data.data) {
                    const info = yield this.almacenamiento.obtenerToken();
                    if (info) {
                        // tslint:disable-next-line:max-line-length
                        this.socket.emit('procesar', { idtaller: ticket.negocio._id, id: ticket._id, idusuario: ticket.creador._id, sala: this.active.snapshot.paramMap.get('sala'), fecha1: data.data.fecha1, fecha2: data.data.fecha2 });
                        this.alerta(ticket.creador);
                    }
                }
            }
        });
    }
    alerta(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Crear hoja de vida para este ticket',
                message: 'Crear la hoja de vida para registrar el trabajo realizado en este ticket',
                buttons: [
                    {
                        text: 'No quiero',
                        cssClass: 'cancelarAlerta',
                        role: 'cancel',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Crear',
                        cssClass: 'botonalerta',
                        handler: () => {
                            this.crearhoja(data);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    crearhoja(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiTickets.crearHoja(info.token, { idusuario: data._id, placa: data.placa }).subscribe((res) => {
                    if (res.exe) {
                        this.toast.toastExitoso('Hoja de vida creada correctamente');
                    }
                    else {
                        this.toast.toastError('No se pudo crear la hoja de vida, inténtelo más tarde');
                        this.router.navigate(['/central/menu/']);
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo crear la hoja de vida, inténtelo más tarde');
                    this.router.navigate(['/central/menu/']);
                });
            }
        });
    }
    escucharRechazos() {
        const myobserver = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"](observer => {
            this.socket.on('rechazar', (data) => {
                observer.next(data);
            });
        });
        return myobserver;
    }
    navegar(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiTickets.consultarSala(info.token, { ticket: id }).subscribe((data) => {
                    //  console.log(data)
                    if (data.exe) {
                        if (data.response.length > 0) {
                            if (data.response[0].accesos.length > 0) {
                                this.almacenamiento.insertarChat(data.response[0]).then(() => {
                                    this.router.navigate(['/central/chats/chat']);
                                }).catch(() => {
                                    this.toast.toastError('No se puede acceder al chat, inténtelo más tarde');
                                });
                            }
                            else {
                                this.toast.Especial('El ticket fue cancelado, ya no puede acceder al chat');
                            }
                        }
                        else {
                            this.toast.toastError('No se puede acceder al chat, inténtelo más tarde');
                        }
                    }
                    else {
                        this.toast.toastError('No se puede acceder al chat, inténtelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se puede acceder al chat, inténtelo más tarde');
                });
            }
        });
    }
    ionViewWillLeave() {
        this.almacenamiento.eleminarTicket().then((r) => {
            if (r) {
                return true;
            }
        });
    }
};
TicketsSalaPage.ctorParameters = () => [
    { type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_8__["InicioService"] },
    { type: src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_10__["ToastServices"] },
    { type: src_app_providers_Api_Tickets_service__WEBPACK_IMPORTED_MODULE_9__["TicketsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["Socket"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
TicketsSalaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tickets-sala',
        template: _raw_loader_tickets_sala_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tickets_sala_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TicketsSalaPage);



/***/ }),

/***/ "KwZs":
/*!*******************************************************************!*\
  !*** ./src/app/pages/Tickets/tickets-sala/tickets-sala.module.ts ***!
  \*******************************************************************/
/*! exports provided: TicketsSalaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsSalaPageModule", function() { return TicketsSalaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tickets_sala_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tickets-sala-routing.module */ "yct9");
/* harmony import */ var _tickets_sala_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tickets-sala.page */ "GaWm");







let TicketsSalaPageModule = class TicketsSalaPageModule {
};
TicketsSalaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tickets_sala_routing_module__WEBPACK_IMPORTED_MODULE_5__["TicketsSalaPageRoutingModule"]
        ],
        declarations: [_tickets_sala_page__WEBPACK_IMPORTED_MODULE_6__["TicketsSalaPage"]]
    })
], TicketsSalaPageModule);



/***/ }),

/***/ "VKQI":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Tickets/tickets-sala/tickets-sala.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"oscuro\">\n        <ion-back-button slot=\"start\" icon=\"chevron-back-outline\" defaultHref=\"/central/menu\"></ion-back-button>\n        <ion-title>Fila de usuarios en espera</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <div>\n\n    </div>\n\n    <div class=\"divider light\"></div>\n\n    <div *ngIf=\"cargado\" class=\"salas\">\n        <div class=\"flcenter ion-padding\" *ngIf=\"tickets.length === 0\">\n            <div>\n                La fila esta vacía <br>\n            </div>\n        </div>\n\n\n        <ion-card mode=\"ios\" *ngFor=\"let ticket of tickets; let i = index;\">\n            <ion-card-title>Ticket {{ i + 1 }}\n            </ion-card-title>\n            <div class=\"msg espera\">\n                <strong>esperando</strong>\n            </div>\n\n            <ion-card-content>\n                <div><strong>Negocio:</strong> {{ticket.negocio.nombrecompleto}}</div>\n                <div><strong>Teléfono:</strong> {{ticket.negocio.tel}}</div>\n                <div class=\"separador\"></div>\n                <div><strong>Usuario:</strong> {{ticket.creador.nombrecompleto}}</div>\n                <div><strong>Teléfono:</strong> {{ticket.creador.tel}}</div>\n                <div *ngIf=\"ticket.creador.correo !== ''\"><strong>Correo:</strong> {{ticket.creador.correo}}</div>\n\n                <div *ngIf=\"ticket.descripcion !== ''\"><strong>Descripción: </strong> <br> {{ticket.descripcion}}</div>\n\n                <div class=\"botones\">\n                    <ion-button mode=\"ios\" color=\"light\" expand=\"block\" (click)=\"navegar(ticket._id)\">Chat</ion-button>\n                </div>\n\n                <div class=\"botones\">\n                    <ion-button mode=\"ios\" color=\"barra\" (click)=\"miModal(ticket)\">Procesar</ion-button>\n                    <ion-button mode=\"ios\" color=\"danger\" (click)=\"rechazar(ticket)\">Rechazar</ion-button>\n                </div>\n            </ion-card-content>\n        </ion-card>\n    </div>\n\n\n\n</ion-content>");

/***/ }),

/***/ "WiUn":
/*!*******************************************************************!*\
  !*** ./src/app/pages/Tickets/tickets-sala/tickets-sala.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".separador {\n  width: 100%;\n  border-bottom: 1px solid #566520;\n  padding: 5px;\n  margin-bottom: 5px;\n}\n\n.flcenter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  text-align: center;\n}\n\nion-card {\n  position: relative;\n}\n\n.msg {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  text-align: center;\n  padding: 5px 10px;\n  border-radius: 10px;\n}\n\nion-card-title {\n  width: 100%;\n  padding: 5px 15px;\n}\n\n.espera {\n  background-color: #FFAF00;\n  color: #ffffff;\n}\n\n.botones {\n  margin: 10px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.botones ion-button {\n  width: calc(50% - 10px);\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGlja2V0cy1zYWxhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6InRpY2tldHMtc2FsYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VwYXJhZG9yIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1NjY1MjA7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5mbGNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubXNnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxufVxyXG5cclxuLmVzcGVyYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZBRjAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5ib3RvbmVzIHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3RvbmVzIGlvbi1idXR0b24ge1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgICBtYXJnaW46IDVweDtcclxufSJdfQ== */");

/***/ }),

/***/ "yct9":
/*!***************************************************************************!*\
  !*** ./src/app/pages/Tickets/tickets-sala/tickets-sala-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: TicketsSalaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsSalaPageRoutingModule", function() { return TicketsSalaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tickets_sala_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickets-sala.page */ "GaWm");




const routes = [
    {
        path: '',
        component: _tickets_sala_page__WEBPACK_IMPORTED_MODULE_3__["TicketsSalaPage"]
    }
];
let TicketsSalaPageRoutingModule = class TicketsSalaPageRoutingModule {
};
TicketsSalaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TicketsSalaPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=Tickets-tickets-sala-tickets-sala-module.js.map