(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Tickets-inicio-tickets-inicio-tickets-module"],{

/***/ "+Hj7":
/*!***********************************************************************!*\
  !*** ./src/app/pages/Tickets/inicio-tickets/inicio-tickets.module.ts ***!
  \***********************************************************************/
/*! exports provided: InicioTicketsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioTicketsPageModule", function() { return InicioTicketsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inicio_tickets_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio-tickets-routing.module */ "4LCW");
/* harmony import */ var _inicio_tickets_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio-tickets.page */ "UAvU");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");








let InicioTicketsPageModule = class InicioTicketsPageModule {
};
InicioTicketsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inicio_tickets_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioTicketsPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_inicio_tickets_page__WEBPACK_IMPORTED_MODULE_6__["InicioTicketsPage"]]
    })
], InicioTicketsPageModule);



/***/ }),

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

/***/ "4LCW":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/Tickets/inicio-tickets/inicio-tickets-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: InicioTicketsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioTicketsPageRoutingModule", function() { return InicioTicketsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inicio_tickets_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio-tickets.page */ "UAvU");




const routes = [
    {
        path: '',
        component: _inicio_tickets_page__WEBPACK_IMPORTED_MODULE_3__["InicioTicketsPage"]
    }
];
let InicioTicketsPageRoutingModule = class InicioTicketsPageRoutingModule {
};
InicioTicketsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InicioTicketsPageRoutingModule);



/***/ }),

/***/ "7j4g":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Tickets/inicio-tickets/inicio-tickets.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"oscuro\">\n        <ion-back-button slot=\"start\" icon=\"chevron-back-outline\" defaultHref=\"/central/menu\"></ion-back-button>\n        <ion-title>Turnos</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <div class=\"flcenter ion-padding\" *ngIf=\"configurando\">\n        <ion-spinner name=\"crescent\" color=\"oscuro\"></ion-spinner>\n        <div>\n            Configurando sistema de turno para <br>\n            <strong> {{ usuario }}</strong>\n        </div>\n\n    </div>\n\n    <ion-list *ngIf=\"cargado\">\n        <ion-item lines=\"none\" color=\"light\">\n            <ion-label *ngIf=\"habilitado\">Apagar mi sala de turnos</ion-label>\n            <ion-label *ngIf=\"!habilitado\">Encender mi sala de turnos</ion-label>\n            <ion-toggle slot=\"end\" mode=\"ios\" [checked]=\"habilitado\" color=\"barra\" (ionChange)=\"cambiar($event)\"></ion-toggle>\n        </ion-item>\n    </ion-list>\n    <div class=\"divider light\"></div>\n\n    <div *ngIf=\"cargado\" class=\"salas\">\n        <div class=\"flcenter ion-padding\" *ngIf=\"salas.length === 0\">\n            <div>\n                Aún no tiene salas creadas <br>\n            </div>\n\n        </div>\n\n\n        <ion-card mode=\"ios\" *ngFor=\"let sala of salas; let i = index;\" (click)=\"salon(sala)\">\n            <ion-card-title>Sala {{ i + 1 }}\n            </ion-card-title>\n            <div class=\"msg\" [class.ocupado]=\"sala.ocupada\" [class.desocupado]=\"!sala.ocupada\">\n                <strong *ngIf=\"!sala.ocupada\">Libre</strong>\n                <strong *ngIf=\"sala.ocupada\">Ocupada</strong>\n            </div>\n\n            <ion-card-content>\n                <div><strong>Persona que atiende:</strong> {{sala.atiende}}</div>\n                <br>\n                <div *ngIf=\"sala.fechainicio !== '' && sala.ocupada\"><strong>Dureción estimada del trabajo:</strong> {{sala.fechainicio | diferencia : sala.fechafinal: 1}}</div>\n                <div *ngIf=\"sala.fechainicio !== '' && sala.ocupada\"><strong>Tiempo transcurrido:</strong> {{sala.fechainicio | diferencia : sala.fechafinal: 2}}</div><br>\n                <div class=\"botones\" *ngIf=\"sala.ocupada\">\n                    <ion-button mode=\"ios\" color=\"light\" expand=\"block\" (click)=\"navegar(sala.ticket._id)\">Chat</ion-button>\n                </div>\n                <div class=\"botones\" *ngIf=\"sala.ocupada\">\n                    <ion-button mode=\"ios\" color=\"light\" expand=\"block\" (click)=\"finalizar(sala)\">Finalizar Ticket</ion-button>\n                </div>\n            </ion-card-content>\n        </ion-card>\n    </div>\n\n    <ion-fab *ngIf=\"cargado\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button color=\"oscuro\" (click)=\"crear()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n</ion-content>");

/***/ }),

/***/ "UAvU":
/*!*********************************************************************!*\
  !*** ./src/app/pages/Tickets/inicio-tickets/inicio-tickets.page.ts ***!
  \*********************************************************************/
/*! exports provided: InicioTicketsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioTicketsPage", function() { return InicioTicketsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inicio_tickets_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inicio-tickets.page.html */ "7j4g");
/* harmony import */ var _inicio_tickets_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio-tickets.page.scss */ "VAaI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_providers_Api_Tickets_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/Api/Tickets.service */ "+WxW");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");











let InicioTicketsPage = class InicioTicketsPage {
    constructor(almacenamiento, toast, apiTickets, alert, router, socket) {
        this.almacenamiento = almacenamiento;
        this.toast = toast;
        this.apiTickets = apiTickets;
        this.alert = alert;
        this.router = router;
        this.socket = socket;
        this.configurando = false;
        this.usuario = '';
        this.habilitado = false;
        this.cargado = false;
        this.id = '';
        this.salas = [];
        this.escucharMensajes().subscribe((data) => {
            // console.log(data, ' data suscribe')
            if (data.msg) {
                this.salas.forEach((item) => {
                    if (item._id === data.id) {
                        item.ocupada = false;
                        item.info = false;
                    }
                });
                this.toast.toastExitoso('Ticket Finalizado');
            }
            else {
                this.toast.toastError('No se pudo finalizar el ticket, inténtelo más tarde');
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.disponibilidad();
        this.almacenamiento.insertarTicket('entrando').then((r) => {
            if (r) {
                return true;
            }
        });
    }
    refrescando(event) {
        this.salas = [];
        this.disponibilidad().then(() => {
            event.detail.complete();
        }).catch(() => {
            event.detail.complete();
        });
    }
    disponibilidad() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                if (info.role === 'USER_ROLE') {
                    this.router.navigate(['/central/menu']);
                }
                else {
                    this.socket.emit('ticket', { id: info._id });
                    this.usuario = info.nombre;
                    this.apiTickets.disponibilidad(info.token).subscribe((data) => {
                        // console.log(data)
                        if (data.exe) {
                            if (data.response === 'no') {
                                this.alerta();
                            }
                            else {
                                this.cargado = true;
                                this.habilitado = data.data[0].estado;
                                this.id = data.data[0]._id;
                                this.misSalas();
                            }
                        }
                        else {
                            this.toast.toastError('No se pudo consultar la disponibilidad, inténtelo más tarde');
                            this.router.navigate(['/central/menu/']);
                        }
                    }, (err) => {
                        this.toast.toastError('No se pudo consultar la disponibilidad, inténtelo más tarde');
                        this.router.navigate(['/central/menu/']);
                    });
                }
            }
        });
    }
    Creardisponibilidad() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.configurando = true;
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiTickets.Creardisponibilidad(info.token).subscribe((data) => {
                    if (data.exe) {
                        this.toast.toastExitoso('Configuración realizada correcxtamente, ya puedes disfrutar de este módulo');
                        this.disponibilidad();
                    }
                    else {
                        this.toast.toastError('No se pudo configurar tu sala de turnos, inténtelo más tarde');
                        this.router.navigate(['/central/menu/']);
                    }
                    this.configurando = false;
                }, (err) => {
                    this.toast.toastError('No se pudo configurar tu sala de turnos, inténtelo más tarde');
                    this.router.navigate(['/central/menu/']);
                    this.configurando = false;
                });
            }
        });
    }
    alerta() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Configurar sistema de turnos',
                message: 'Aún no has comenzado a usar este módulo, si quieres empezar a crear tus salas de turno puedes dar click en configurar',
                buttons: [
                    {
                        text: 'Cancelar',
                        cssClass: 'cancelarAlerta',
                        role: 'cancel',
                        handler: () => {
                            this.router.navigate(['/central/menu/']);
                        }
                    },
                    {
                        text: 'Configurar',
                        cssClass: 'botonalerta',
                        handler: () => {
                            this.Creardisponibilidad();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    cambiar(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.configurando = true;
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiTickets.editardisponibilidad(info.token, { id: this.id, estado: event.detail.checked }).subscribe((data) => {
                    if (data.exe) {
                        this.habilitado = data.response.estado;
                    }
                    else {
                        this.toast.toastError('No se pudo configurar tu sala de turnos, inténtelo más tarde');
                        this.router.navigate(['/central/menu/']);
                    }
                    this.configurando = false;
                }, (err) => {
                    this.toast.toastError('No se pudo configurar tu sala de turnos, inténtelo más tarde');
                    this.router.navigate(['/central/menu/']);
                    this.configurando = false;
                });
            }
        });
    }
    crear() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Crear sala',
                // tslint:disable-next-line:max-line-length
                message: 'Por medio de una sala puedes atender los usuarios que esten esperando en la fila, crea tus salas dependiendo de la capacidad del negocio.',
                inputs: [
                    {
                        type: 'text',
                        placeholder: 'Persona que atiende',
                        name: 'persona'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        cssClass: 'cancelarAlerta',
                        role: 'cancel'
                    },
                    {
                        text: 'Crear Sala',
                        cssClass: 'botonalerta',
                        handler: (data) => {
                            this.CrearSala({ persona: data.persona });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    misSalas() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.configurando = true;
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiTickets.misSalas(info.token).subscribe((data) => {
                    if (data.exe) {
                        this.salas = data.response;
                        // console.log('salas', data)
                    }
                    else {
                        this.toast.toastError('No se pudo traer las salas, inténtelo más tarde');
                        this.router.navigate(['/central/menu/']);
                    }
                    this.configurando = false;
                }, (err) => {
                    this.toast.toastError('No se pudo traer las salas, inténtelo más tarde');
                    this.router.navigate(['/central/menu/']);
                    this.configurando = false;
                });
            }
        });
    }
    CrearSala(datos) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.configurando = true;
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiTickets.crearSala(info.token, datos).subscribe((data) => {
                    if (data.exe) {
                        this.toast.toastExitoso('La sala se creó correctamente');
                        this.salas.push(data.response);
                    }
                    else {
                        this.toast.toastError('No se pudo crear la sala, inténtelo más tarde');
                        this.router.navigate(['/central/menu/']);
                    }
                    this.configurando = false;
                }, (err) => {
                    this.toast.toastError('No se pudo crear la sala, inténtelo más tarde');
                    this.router.navigate(['/central/menu/']);
                    this.configurando = false;
                });
            }
        });
    }
    salon(sala) {
        if (!sala.ocupada) {
            this.router.navigate(['/central/tickets', this.id, 'ticketsala', sala._id]);
        }
    }
    escucharMensajes() {
        const myobserver = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"](observer => {
            this.socket.on('mensajeTicket', (data) => {
                observer.next(data);
            });
        });
        return myobserver;
    }
    finalizar(sala) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.socket.emit('finalizar', { idtaller: info._id, id: sala._id, ticket: sala.ticket._id });
            }
        });
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
InicioTicketsPage.ctorParameters = () => [
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_9__["InicioService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_10__["ToastServices"] },
    { type: src_app_providers_Api_Tickets_service__WEBPACK_IMPORTED_MODULE_8__["TicketsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["Socket"] }
];
InicioTicketsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inicio-tickets',
        template: _raw_loader_inicio_tickets_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inicio_tickets_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InicioTicketsPage);



/***/ }),

/***/ "VAaI":
/*!***********************************************************************!*\
  !*** ./src/app/pages/Tickets/inicio-tickets/inicio-tickets.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flcenter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  text-align: center;\n}\n\nion-card {\n  position: relative;\n}\n\n.msg {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  text-align: center;\n  padding: 5px 10px;\n  border-radius: 10px;\n}\n\nion-card-title {\n  width: 100%;\n  padding: 5px 15px;\n}\n\n.ocupado {\n  background-color: #CA0900 !important;\n  color: #ffffff;\n}\n\n.desocupado {\n  background-color: #819830 !important;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW5pY2lvLXRpY2tldHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJpbmljaW8tdGlja2V0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxjZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1zZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5vY3VwYWRvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQTA5MDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uZGVzb2N1cGFkbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODE5ODMwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=Tickets-inicio-tickets-inicio-tickets-module.js.map