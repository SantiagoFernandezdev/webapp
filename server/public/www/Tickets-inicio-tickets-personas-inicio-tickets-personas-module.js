(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Tickets-inicio-tickets-personas-inicio-tickets-personas-module"],{

/***/ "+Aiu":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/Tickets/inicio-tickets-personas/inicio-tickets-personas.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: InicioTicketsPersonasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioTicketsPersonasPageModule", function() { return InicioTicketsPersonasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inicio_tickets_personas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio-tickets-personas-routing.module */ "DLyf");
/* harmony import */ var _inicio_tickets_personas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio-tickets-personas.page */ "bZl8");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");








let InicioTicketsPersonasPageModule = class InicioTicketsPersonasPageModule {
};
InicioTicketsPersonasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inicio_tickets_personas_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioTicketsPersonasPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_inicio_tickets_personas_page__WEBPACK_IMPORTED_MODULE_6__["InicioTicketsPersonasPage"]]
    })
], InicioTicketsPersonasPageModule);



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

/***/ "DLyf":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/Tickets/inicio-tickets-personas/inicio-tickets-personas-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: InicioTicketsPersonasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioTicketsPersonasPageRoutingModule", function() { return InicioTicketsPersonasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inicio_tickets_personas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio-tickets-personas.page */ "bZl8");




const routes = [
    {
        path: '',
        component: _inicio_tickets_personas_page__WEBPACK_IMPORTED_MODULE_3__["InicioTicketsPersonasPage"]
    }
];
let InicioTicketsPersonasPageRoutingModule = class InicioTicketsPersonasPageRoutingModule {
};
InicioTicketsPersonasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InicioTicketsPersonasPageRoutingModule);



/***/ }),

/***/ "TMZy":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Tickets/inicio-tickets-personas/inicio-tickets-personas.page.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"oscuro\">\n        <ion-back-button slot=\"start\" icon=\"chevron-back-outline\" defaultHref=\"/central/menu\"></ion-back-button>\n        <ion-title>Turnos</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <div class=\"divider light\"></div>\n\n    <div *ngIf=\"cargado\" class=\"salas\">\n        <div class=\"flcenter ion-padding\" *ngIf=\"tickets.length === 0\">\n            <div>\n                Aún no tiene tickets creados <br>\n            </div>\n\n        </div>\n\n\n        <ion-card mode=\"ios\" *ngFor=\"let ticket of tickets; let i = index;\">\n            <div class=\"san\" (click)=\"viajar(ticket)\">\n                <ion-card-title>Ticket {{ i + 1 }}\n                </ion-card-title>\n                <div class=\"msg\" [class.ocupado]=\"ticket.cancelado && !ticket.procesado \" [class.procesado]=\"ticket.procesado && !ticket.cancelado\" [class.espera]=\"!ticket.cancelado && !ticket.procesado\">\n                    <strong *ngIf=\"!ticket.cancelado && !ticket.procesado\">Esperando</strong>\n                    <strong *ngIf=\"ticket.cancelado && !ticket.procesado \">Cancelada</strong>\n                    <strong *ngIf=\"ticket.procesado&& !ticket.cancelado\">Procesada</strong>\n                </div>\n\n\n\n                <ion-card-content>\n                    <div><strong>Negocio:</strong> {{ticket.negocio.nombrecompleto}}</div>\n                    <div><strong>Teléfono:</strong> {{ticket.negocio.tel}}</div>\n                    <div class=\"separador\"></div>\n                    <div><strong>Usuario:</strong> {{ticket.creador.nombrecompleto}}</div>\n                    <div><strong>Teléfono:</strong> {{ticket.creador.tel}}</div>\n                    <div><strong>Fecha Ticket:</strong> {{ticket.fecha | cambioUTC}}</div>\n                </ion-card-content>\n            </div>\n\n            <div class=\"botones\">\n                <ion-button mode=\"ios\" color=\"light\" expand=\"block\" (click)=\"navegar(ticket._id)\">Chat</ion-button>\n            </div>\n\n            <div class=\"msg2\" *ngIf=\"!ticket.cancelado && !ticket.procesado\" (click)=\"eliminar(ticket)\">\n                <strong>Cancelar Ticket</strong>\n            </div>\n        </ion-card>\n    </div>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button color=\"oscuro\" (click)=\"crear()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n</ion-content>");

/***/ }),

/***/ "XCb6":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/Tickets/inicio-tickets-personas/inicio-tickets-personas.page.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flcenter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  text-align: center;\n}\n\n.separador {\n  width: 100%;\n  border-bottom: 1px solid #566520;\n  padding: 5px;\n  margin-bottom: 5px;\n}\n\nion-card,\n.san {\n  position: relative;\n}\n\n.msg {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  text-align: center;\n  padding: 5px 10px;\n  border-radius: 10px;\n}\n\n.msg2 {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  text-align: center;\n  padding: 5px 10px;\n  border-radius: 10px;\n  background-color: #7B2E18;\n  color: #ffffff;\n  z-index: 10;\n}\n\nion-card-title {\n  width: 100%;\n  padding: 5px 15px;\n}\n\n.ocupado {\n  background-color: #CA0900 !important;\n  color: #ffffff;\n}\n\n.espera {\n  background-color: #FFAF00;\n  color: #ffffff;\n}\n\n.procesado {\n  background-color: #819830 !important;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW5pY2lvLXRpY2tldHMtcGVyc29uYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7O0VBRUksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJpbmljaW8tdGlja2V0cy1wZXJzb25hcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxjZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZXBhcmFkb3Ige1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzU2NjUyMDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuaW9uLWNhcmQsXHJcbi5zYW4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubXNnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLm1zZzIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdCMkUxODtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5vY3VwYWRvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQTA5MDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uZXNwZXJhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkFGMDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnByb2Nlc2FkbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODE5ODMwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufSJdfQ== */");

/***/ }),

/***/ "bZl8":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/Tickets/inicio-tickets-personas/inicio-tickets-personas.page.ts ***!
  \***************************************************************************************/
/*! exports provided: InicioTicketsPersonasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioTicketsPersonasPage", function() { return InicioTicketsPersonasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inicio_tickets_personas_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inicio-tickets-personas.page.html */ "TMZy");
/* harmony import */ var _inicio_tickets_personas_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio-tickets-personas.page.scss */ "XCb6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var src_app_providers_Api_Tickets_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/Api/Tickets.service */ "+WxW");
/* harmony import */ var src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/providers/Utilidades/ToastService.service */ "fmoy");











let InicioTicketsPersonasPage = class InicioTicketsPersonasPage {
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
        this.tickets = [];
        this.escucharRechazos().subscribe((data) => {
            if (data.exe) {
                // console.log(data, 'sus')
                this.tickets.forEach((item) => {
                    if (item._id === data.data._id) {
                        item.cancelado = true;
                    }
                });
            }
            else {
                this.toast.toastError('No se pudo rechazar tu ticket');
            }
        });
        this.escucharProcesados().subscribe((data) => {
            if (data.exe) {
                // console.log(data, 'sus')
                this.tickets.forEach((item) => {
                    if (item._id === data.data.doc._id) {
                        item.procesado = true;
                    }
                });
            }
            else {
                this.toast.toastError('No se pudo procesar tu ticket');
            }
        });
        this.escucharMensajes().subscribe((data) => {
            // console.log(data, ' data suscribe')
            if (data.msg) {
                if (data.eli) {
                    this.tickets = this.tickets.filter((item) => {
                        return item._id !== data.id;
                    });
                    this.toast.toastExitoso('Ticket rechazado');
                }
            }
            else {
                this.toast.toastError('No se pudo rechazar el ticket, inténtelo más tarde');
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
                this.apiTickets.misTickets(info.token).subscribe((data) => {
                    if (data.exe) {
                        this.tickets = data.response;
                        this.tickets.forEach((item) => {
                            if (!item.procesado && !item.cancelado) {
                                this.socket.emit('ticket', { id: item.negocio._id });
                            }
                        });
                        // console.log('tickets', data)
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
    viajar(ticket) {
        if (!ticket.procesado && !ticket.cancelado) {
            this.router.navigate(['/central/tickets/tallerticket', ticket.negocio._id]);
        }
    }
    crear() {
        this.router.navigate(['/central/menu/control-mapas']);
    }
    escucharRechazos() {
        const myobserver = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"](observer => {
            this.socket.on('rechazar', (data) => {
                observer.next(data);
            });
        });
        return myobserver;
    }
    escucharProcesados() {
        const myobserver = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"](observer => {
            this.socket.on('procesar', (data) => {
                observer.next(data);
            });
        });
        return myobserver;
    }
    eliminar(ticket) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: '¿Estas seguro de eliminar este ticket?',
                message: 'se eliminará de forma permanente',
                buttons: [
                    {
                        text: 'Cancelar',
                        cssClass: 'cancelarAlerta',
                        role: 'cancel',
                    },
                    {
                        text: 'Configurar',
                        cssClass: 'botonalerta',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const info = yield this.almacenamiento.obtenerToken();
                            if (info) {
                                this.socket.emit('rechazar', { idtaller: ticket.negocio._id, id: ticket._id, idusuario: ticket.negocio._id });
                            }
                        })
                    }
                ]
            });
            yield alert.present();
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
    ionViewWillLeave() {
        this.almacenamiento.eleminarTicket().then((r) => {
            if (r) {
                return true;
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
};
InicioTicketsPersonasPage.ctorParameters = () => [
    { type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_8__["InicioService"] },
    { type: src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_10__["ToastServices"] },
    { type: src_app_providers_Api_Tickets_service__WEBPACK_IMPORTED_MODULE_9__["TicketsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["Socket"] }
];
InicioTicketsPersonasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inicio-tickets-personas',
        template: _raw_loader_inicio_tickets_personas_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inicio_tickets_personas_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InicioTicketsPersonasPage);



/***/ })

}]);
//# sourceMappingURL=Tickets-inicio-tickets-personas-inicio-tickets-personas-module.js.map