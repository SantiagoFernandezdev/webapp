(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Tickets-taller-ticket-taller-ticket-module"],{

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

/***/ "Fs51":
/*!*******************************************************************!*\
  !*** ./src/app/pages/Tickets/taller-ticket/taller-ticket.page.ts ***!
  \*******************************************************************/
/*! exports provided: TallerTicketPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TallerTicketPage", function() { return TallerTicketPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_taller_ticket_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./taller-ticket.page.html */ "f9LY");
/* harmony import */ var _taller_ticket_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taller-ticket.page.scss */ "aby/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_providers_Api_Tickets_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/Api/Tickets.service */ "+WxW");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");











let TallerTicketPage = class TallerTicketPage {
    constructor(almacenamiento, toast, apiTickets, alert, router, active, socket) {
        this.almacenamiento = almacenamiento;
        this.toast = toast;
        this.apiTickets = apiTickets;
        this.alert = alert;
        this.router = router;
        this.active = active;
        this.socket = socket;
        this.configurando = false;
        this.usuario = '';
        this.habilitado = false;
        this.cargado = false;
        this.id = '';
        this.salas = [];
        this.escucharProcesados().subscribe((data) => {
            if (data.exe) {
                this.salas.forEach((item) => {
                    if (item._id === data.data.sala._id) {
                        item.ocupada = true;
                        item.info = true;
                        item.mas = data.data.doc;
                    }
                });
            }
        });
        this.escucharFinalizados().subscribe((data) => {
            if (data.exe) {
                this.salas.forEach((item) => {
                    if (item._id === data.data._id) {
                        item.ocupada = false;
                        item.info = false;
                    }
                });
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
                this.usuario = info.nombre;
                this.apiTickets.disponibilidadnegocio(info.token, { id: this.active.snapshot.paramMap.get('id') }).subscribe((data) => {
                    // console.log(data)
                    if (data.exe) {
                        this.cargado = true;
                        this.habilitado = data.data[0].estado;
                        this.id = data.data[0]._id;
                        if (data.response === 'no') {
                            this.toast.toastNotificacion('No hay disponibilidad en este momento');
                            this.misSalas();
                        }
                        else {
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
        });
    }
    misSalas() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.configurando = true;
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiTickets.salasNegocio(info.token, { id: this.active.snapshot.paramMap.get('id') }).subscribe((data) => {
                    if (data.exe) {
                        data.response.forEach((item) => {
                            item.info = false;
                            this.socket.emit('ticket', { id: item.creador });
                            return new Promise((resolve, reject) => {
                                if (item.ocupada) {
                                    this.apiTickets.ticketsolo(info.token, { id: item.ticket._id }).subscribe((data2) => {
                                        // console.log(data2, ' mi data')
                                        if (data2.exe) {
                                            item.info = true;
                                            item.mas = data2.response;
                                            resolve(true);
                                        }
                                        else {
                                            item.info = false;
                                            resolve(false);
                                        }
                                    }, (err) => {
                                        item.info = false;
                                        resolve(false);
                                    });
                                }
                            });
                        });
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
    escucharProcesados() {
        const myobserver = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"](observer => {
            this.socket.on('procesar', (data) => {
                observer.next(data);
            });
        });
        return myobserver;
    }
    escucharFinalizados() {
        const myobserver = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"](observer => {
            this.socket.on('finalizar', (data) => {
                observer.next(data);
            });
        });
        return myobserver;
    }
    ionViewWillLeave() {
        this.almacenamiento.eleminarTicket().then((r) => {
            if (r) {
                return true;
            }
        });
    }
};
TallerTicketPage.ctorParameters = () => [
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_9__["InicioService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_10__["ToastServices"] },
    { type: src_app_providers_Api_Tickets_service__WEBPACK_IMPORTED_MODULE_8__["TicketsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["Socket"] }
];
TallerTicketPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-taller-ticket',
        template: _raw_loader_taller_ticket_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_taller_ticket_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TallerTicketPage);



/***/ }),

/***/ "NlP8":
/*!*********************************************************************!*\
  !*** ./src/app/pages/Tickets/taller-ticket/taller-ticket.module.ts ***!
  \*********************************************************************/
/*! exports provided: TallerTicketPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TallerTicketPageModule", function() { return TallerTicketPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _taller_ticket_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taller-ticket-routing.module */ "m53r");
/* harmony import */ var _taller_ticket_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taller-ticket.page */ "Fs51");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");








let TallerTicketPageModule = class TallerTicketPageModule {
};
TallerTicketPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _taller_ticket_routing_module__WEBPACK_IMPORTED_MODULE_5__["TallerTicketPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_taller_ticket_page__WEBPACK_IMPORTED_MODULE_6__["TallerTicketPage"]]
    })
], TallerTicketPageModule);



/***/ }),

/***/ "aby/":
/*!*********************************************************************!*\
  !*** ./src/app/pages/Tickets/taller-ticket/taller-ticket.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flcenter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  text-align: center;\n}\n\n.separador {\n  width: 100%;\n  border-bottom: 1px solid #566520;\n  padding: 5px;\n  margin-bottom: 5px;\n}\n\nion-card {\n  position: relative;\n}\n\n.msg {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  text-align: center;\n  padding: 5px 10px;\n  border-radius: 10px;\n}\n\nion-card-title {\n  width: 100%;\n  padding: 5px 15px;\n}\n\n.ocupado {\n  background-color: #CA0900 !important;\n  color: #ffffff;\n}\n\n.desocupado {\n  background-color: #819830 !important;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGFsbGVyLXRpY2tldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoidGFsbGVyLXRpY2tldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxjZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZXBhcmFkb3Ige1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzU2NjUyMDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubXNnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxufVxyXG5cclxuLm9jdXBhZG8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NBMDkwMCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5kZXNvY3VwYWRvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MTk4MzAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59Il19 */");

/***/ }),

/***/ "f9LY":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Tickets/taller-ticket/taller-ticket.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"oscuro\">\n        <ion-back-button slot=\"start\" icon=\"chevron-back-outline\" defaultHref=\"/central/menu\"></ion-back-button>\n        <ion-title>Turnos</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <div class=\"flcenter ion-padding\" *ngIf=\"configurando\">\n        <ion-spinner name=\"crescent\" color=\"oscuro\"></ion-spinner>\n        <div>\n            Cargando sistema de turno para <br>\n        </div>\n\n    </div>\n\n\n    <div class=\"divider light\"></div>\n\n    <div *ngIf=\"cargado\" class=\"salas\">\n        <div class=\"flcenter ion-padding\" *ngIf=\"salas.length === 0\">\n            <div>\n                Aún no tiene salas creadas <br>\n            </div>\n\n        </div>\n\n\n        <ion-card mode=\"ios\" *ngFor=\"let sala of salas; let i = index;\">\n            <ion-card-title>Sala {{ i + 1 }}\n            </ion-card-title>\n            <div class=\"msg\" [class.ocupado]=\"sala.ocupada\" [class.desocupado]=\"!sala.ocupada\">\n                <strong *ngIf=\"!sala.ocupada\">Libre</strong>\n                <strong *ngIf=\"sala.ocupada\">Ocupada</strong>\n            </div>\n\n            <ion-card-content>\n                <div><strong>Persona que atiende:</strong> {{sala.atiende}}</div>\n                <div *ngIf=\"sala.info\">\n                    <div class=\"separador\"></div>\n                    <div><strong>Usuario:</strong> {{sala.mas.creador.nombrecompleto}}</div>\n                    <div *ngIf=\"sala.fechainicio !== ''\"><strong>Dureción estimada del trabajo:</strong> {{sala.fechainicio | diferencia : sala.fechafinal: 1}}</div>\n                    <div *ngIf=\"sala.fechainicio !== ''\"><strong>Tiempo transcurrido:</strong> {{sala.fechainicio | diferencia : sala.fechafinal: 2}}</div>\n                </div>\n            </ion-card-content>\n        </ion-card>\n    </div>\n\n\n</ion-content>");

/***/ }),

/***/ "m53r":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/Tickets/taller-ticket/taller-ticket-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: TallerTicketPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TallerTicketPageRoutingModule", function() { return TallerTicketPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _taller_ticket_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taller-ticket.page */ "Fs51");




const routes = [
    {
        path: '',
        component: _taller_ticket_page__WEBPACK_IMPORTED_MODULE_3__["TallerTicketPage"]
    }
];
let TallerTicketPageRoutingModule = class TallerTicketPageRoutingModule {
};
TallerTicketPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TallerTicketPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=Tickets-taller-ticket-taller-ticket-module.js.map