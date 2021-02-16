(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Mapas-control-mapas-control-mapas-module~Mapas-grua-grua-module"],{

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

/***/ "1zKl":
/*!***************************************************************!*\
  !*** ./src/app/pages/Mapas/modal-mapas/modal-mapas.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-avatar img {\n  width: 100% !important;\n}\n\nion-slides,\nion-slide,\nion-list,\ndiv {\n  width: 100%;\n}\n\n.tarjeta {\n  border-radius: 0px;\n  width: 100%;\n  margin: 0px;\n}\n\n.tarje {\n  margin: auto 0px;\n  margin-top: 10px;\n}\n\n.tarjeta ion-card-content {\n  padding: 0px;\n}\n\n.portada {\n  width: 100%;\n  background-color: #f9f9f9;\n  height: 120px;\n  max-height: 120px;\n  position: relative;\n  margin-bottom: 50px;\n}\n\n.portada .img {\n  max-height: 120px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n}\n\n.portada .img img {\n  width: 100%;\n}\n\n.avatar {\n  position: absolute;\n  bottom: -50px;\n  left: 50%;\n  transform: translateX(-50%);\n  margin: 0px auto;\n  width: 100px !important;\n  height: 100px !important;\n  z-index: 11;\n}\n\n.avatar h3 {\n  color: #fff;\n}\n\n.avatar-peque {\n  margin-left: 8px;\n  width: 30px !important;\n  height: 30px !important;\n}\n\n.avatar-peque img {\n  width: 100% !important;\n  height: 100% !important;\n}\n\nion-card-content {\n  margin-top: 20px;\n}\n\n.titulo {\n  position: absolute;\n  bottom: -50px;\n  left: 120px;\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.peque {\n  width: 25px;\n  height: 40px;\n}\n\n.zul {\n  background-color: #55636B;\n}\n\n.verdem {\n  color: #819830;\n}\n\n.seguido {\n  width: 90%;\n  margin: 20px auto;\n}\n\n.barra {\n  position: absolute;\n  width: 120px;\n  height: 25px;\n  left: 0;\n  bottom: -25px;\n  background-color: #819830;\n  color: #ffffff;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.ama {\n  background-color: #2C8F53;\n  color: #ffffff;\n}\n\n.rj {\n  background-color: #CA0900;\n  color: #ffffff;\n}\n\n.opts {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.opts ion-card {\n  width: calc(50% - 10px);\n  margin: 10px 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.5s;\n}\n\n.opts ion-card ion-card-title {\n  font-size: 22px;\n  text-align: center;\n}\n\n.opts ion-card ion-card-header {\n  text-align: center;\n  padding: 5px;\n}\n\n@media screen and (min-width: 800px) {\n  .opts ion-card {\n    width: calc(33.33% - 10px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbW9kYWwtbWFwYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUFDSjs7QUFFQTs7OztFQUlJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJO0lBQ0ksMEJBQUE7RUFBTjtBQUNGIiwiZmlsZSI6Im1vZGFsLW1hcGFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMsXHJcbmlvbi1zbGlkZSxcclxuaW9uLWxpc3QsXHJcbmRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhcmpldGEge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnRhcmplIHtcclxuICAgIG1hcmdpbjogYXV0byAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4udGFyamV0YSBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnBvcnRhZGEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIG1heC1oZWlnaHQ6IDEyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLnBvcnRhZGEgLmltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBvcnRhZGEgLmltZyBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtNTBweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDExO1xyXG59XHJcblxyXG4uYXZhdGFyIGgzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYXZhdGFyLXBlcXVlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hdmF0YXItcGVxdWUgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udGl0dWxvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTUwcHg7XHJcbiAgICBsZWZ0OiAxMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4ucGVxdWUge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi56dWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NjM2QjtcclxufVxyXG5cclxuLnZlcmRlbSB7XHJcbiAgICBjb2xvcjogIzgxOTgzMDtcclxuICAgIDtcclxufVxyXG5cclxuLnNlZ3VpZG8ge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG59XHJcblxyXG4uYmFycmEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogLTI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODE5ODMwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJDOEY1MztcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ucmoge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NBMDkwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ub3B0cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ub3B0cyBpb24tY2FyZCB7XHJcbiAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgIG1hcmdpbjogMTBweCA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbn1cclxuXHJcbi5vcHRzIGlvbi1jYXJkIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm9wdHMgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAgIC5vcHRzIGlvbi1jYXJkIHtcclxuICAgICAgICB3aWR0aDogY2FsYygzMy4zMyUgLSAxMHB4KTtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "9ucb":
/*!****************************************************!*\
  !*** ./src/app/providers/Api/Biografia.service.ts ***!
  \****************************************************/
/*! exports provided: BiografiaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiografiaService", function() { return BiografiaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");






let BiografiaService = class BiografiaService {
    constructor(http) {
        this.http = http;
    }
    hanflerError(error) {
        let intento = 0;
        return error.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delayWhen"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(3000)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((errorHttp) => {
            intento++;
            if (intento === 3) {
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
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(3));
    }
    getBiografia(token, id) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token,
                'x-id': id
            })
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/biografia`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    postBiografia(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/biografia`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
};
BiografiaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
BiografiaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BiografiaService);



/***/ }),

/***/ "K5el":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Mapas/modal-mapas/modal-mapas.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"oscuro\">\n        <ion-buttons slot=\"start\" *ngIf=\"vista === 1\">\n            <ion-button (click)=\"cerrar()\">\n                <ion-icon name=\"chevron-back-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title *ngIf=\"vista === 1\">Configuración</ion-title>\n        <ion-title *ngIf=\"vista === 2\">Filtrar</ion-title>\n\n        <ion-buttons slot=\"end\" *ngIf=\"vista === 2\">\n            <ion-button (click)=\"guardar()\">\n                <ion-icon name=\"checkmark-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"info\" *ngIf=\"vista === 1\">\n        <ion-card class=\"tarjeta\" mode=\"ios\">\n            <div class=\"portada\">\n                <div class=\"img\" [class.zul]=\"info.portada === 'cl'\">\n                    <img *ngIf=\"info.portada !== 'cl'\" src=\"https://motocaliapp.com/19927613410/{{info.portada}}\" alt=\"\">\n                    <div *ngIf=\"amigos && ejecutado\" class=\"barra\">Siguiendo</div>\n\n\n                    <div *ngIf=\"!amigos && ejecutado\" class=\"barra ama\">\n                        <div [class.rj]=\"solicitudEnviada\" [class.ama]=\"!solicitudEnviada\" (click)=\"seguimiento()\">{{ titulo }}</div>\n                    </div>\n\n\n                </div>\n\n                <ion-avatar class=\"avatar\" *ngIf=\"info.imagen !== 'pl'\">\n                    <ion-img [src]=\"info.imagen\" type='media' width=\"200px\"></ion-img>\n                </ion-avatar>\n                <ion-avatar class=\"avatar\" *ngIf=\"info.imagen === 'none'\">\n                </ion-avatar>\n            </div>\n\n            <ion-card-header>\n                <ion-card-title class=\" ion-text-center ion-text-wrap\">{{ info.creador.nombrecompleto }}</ion-card-title>\n            </ion-card-header>\n\n            <ion-card-content>\n                <ion-list>\n                    <ion-item lines=\"none\">\n                        <ion-avatar class=\"peque\" slot=\"start\">\n                            <img src=\"/assets/Marcador.png\" alt=\"\">\n                        </ion-avatar>\n                        <ion-label>{{info.nombre}} </ion-label>\n                    </ion-item> <br>\n\n                    <ion-item lines=\"none\">\n                        <ion-thumbnail class=\"peque\" slot=\"start\">\n                            <img src=\"/assets/Estrella.png\" alt=\"\">\n                        </ion-thumbnail>\n                        <ion-label class=\"ion-text-wrap\"> <strong *ngFor=\"let neg of info.tipoNegocio\"> {{ neg }} </strong> </ion-label>\n                    </ion-item>\n\n\n                    <ion-item lines=\"none\" color=\"light\">\n                        <ion-avatar slot=\"start\">\n                            <img src=\"/assets/reloj.png\" alt=\"\">\n                        </ion-avatar>\n                        <ion-label class=\"ion-text-wrap\">\n                            <div>HORARIOS DE ATENCIÓN</div>\n                            <div>De <strong class=\"verdem\">{{info.de}}</strong> A <strong class=\"verdem\">{{info.a}}</strong></div> <strong>Desde las {{ info.desde | horario}} Hasta las {{info.hasta | horario}}</strong>\n                        </ion-label>\n                    </ion-item> <br>\n\n\n\n\n                </ion-list>\n            </ion-card-content>\n\n        </ion-card>\n\n        <div class=\"seguido\">\n\n        </div>\n\n    </div>\n\n    <div class=\"filtro\" *ngIf=\"vista === 2\">\n        <ion-list>\n            <ion-item mode=\"ios\">\n                <ion-label class=\"ion-text-wrap\">Selecciona el País</ion-label>\n                <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"listarCiudades($event)\">\n                    <ion-select-option *ngFor=\"let pais of paises\" [value]=\"pais\">{{pais.nombre}}</ion-select-option>\n                </ion-select>\n\n            </ion-item>\n\n            <div class=\"flexbet\" *ngIf=\"cargando\">\n                <br>\n                <ion-spinner name=\"crescent\" color=\"primary\"> </ion-spinner> Cargando Ciudades...\n            </div>\n\n\n            <ion-item *ngIf=\"ciudad\" mode=\"ios\">\n                <ion-label class=\"ion-text-wrap\">Selecciona la ciudad</ion-label>\n                <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"seleccionarCiudad($event)\">\n                    <ion-select-option *ngFor=\"let ciudad of ciudades\" value=\"{{ciudad.nombre}}\">{{ciudad.nombre}}</ion-select-option>\n                </ion-select>\n\n            </ion-item> <br>\n\n            <ion-item *ngFor=\"let negocio of negocios\">\n                <ion-checkbox [checked]=\"negocio.checked\" [value]=\"negocio.nombre\" slot=\"start\" (ionChange)=\"cambio( $event)\"></ion-checkbox>\n                <ion-label>{{negocio.nombre}}</ion-label>\n            </ion-item>\n        </ion-list>\n    </div>\n\n    <div class=\"opts\">\n        <ion-card (click)=\"crearTicket()\" mode=\"ios\" *ngIf=\"cargado\">\n            <ion-card-header><img src=\"/assets/Ticket.png\" width=\"100px\"></ion-card-header>\n            <ion-card-title>Sistema de Ticket\n\n            </ion-card-title>\n        </ion-card>\n\n\n        <ion-card (click)=\"crearPedido()\" mode=\"ios\" *ngIf=\"listaModulos.includes('pedidos')\">\n            <ion-card-header><img src=\"/assets/Estados.png\" width=\"100px\"></ion-card-header>\n            <ion-card-title>Pedido\n\n            </ion-card-title>\n        </ion-card>\n\n    </div>\n\n</ion-content>");

/***/ }),

/***/ "PHEo":
/*!***********************************************************************!*\
  !*** ./src/app/pages/Mapas/modal-mapas/modal-mapas-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ModalMapasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalMapasPageRoutingModule", function() { return ModalMapasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_mapas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-mapas.page */ "iM4M");




const routes = [
    {
        path: '',
        component: _modal_mapas_page__WEBPACK_IMPORTED_MODULE_3__["ModalMapasPage"]
    }
];
let ModalMapasPageRoutingModule = class ModalMapasPageRoutingModule {
};
ModalMapasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalMapasPageRoutingModule);



/***/ }),

/***/ "iM4M":
/*!*************************************************************!*\
  !*** ./src/app/pages/Mapas/modal-mapas/modal-mapas.page.ts ***!
  \*************************************************************/
/*! exports provided: ModalMapasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalMapasPage", function() { return ModalMapasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_mapas_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-mapas.page.html */ "K5el");
/* harmony import */ var _modal_mapas_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-mapas.page.scss */ "1zKl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Api_Biografia_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Api/Biografia.service */ "9ucb");
/* harmony import */ var _providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/Api/Seguimiento.service */ "Gq8O");
/* harmony import */ var _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../providers/Api/UsuariosLogin.service */ "oQG1");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _providers_Api_Tickets_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../providers/Api/Tickets.service */ "+WxW");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _providers_Api_Pedidos_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../providers/Api/Pedidos.service */ "HavB");















let ModalMapasPage = class ModalMapasPage {
    constructor(modalCtrl, almacenamiento, biografia, seguimientoService, toasCtrl, popov, apiUsuario, alert, router, apiTickets, socket, apiPedidos) {
        this.modalCtrl = modalCtrl;
        this.almacenamiento = almacenamiento;
        this.biografia = biografia;
        this.seguimientoService = seguimientoService;
        this.toasCtrl = toasCtrl;
        this.popov = popov;
        this.apiUsuario = apiUsuario;
        this.alert = alert;
        this.router = router;
        this.apiTickets = apiTickets;
        this.socket = socket;
        this.apiPedidos = apiPedidos;
        this.contenido = {};
        this.servicios = [];
        this.estado = true;
        this.ejecutado = false;
        this.amigos = false;
        this.negocios = [];
        this.escogidos = [];
        this.cargando = false;
        this.paises = [];
        this.ciudades = [];
        this.miciudad = '';
        this.pais = '';
        this.ciudad = false;
        this.solicitudEnviada = false;
        this.estadoSolicitud = false;
        this.titulo = 'Enviar solicitud';
        this.id = '';
        this.nombre = '';
        this.cargado = false;
        this.listaModulos = '';
        this.escucharMensajes().subscribe((data) => {
            // console.log(data, ' data suscribe')
            if (data.msg) {
                this.toasCtrl.toastExitoso('Ticket creado correctamente');
                this.router.navigate(['/central/tickets']);
                this.cerrar();
            }
            else {
                this.toasCtrl.toastError('No se pudo crear el ticket, inténtelo más tarde');
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (this.vista === 1) {
            const portada = this.info.creador.portada.path ? this.info.creador.portada.path : 'cl';
            const imagen = this.info.creador.imagen.length > 0 ? 'https://motocaliapp.com/' + this.info.creador.imagen[0].path : 'pl';
            this.info.portada = portada;
            this.id = this.info.creador._id;
            this.nombre = this.info.creador.nombrecompleto;
            this.info.imagen = imagen;
            this.informacion(this.info.creador._id);
            this.cargarSolicitud(this.info.creador._id);
            this.disponibilidad();
            this.modulos();
            // console.log(this.info);
        }
        else if (this.vista === 2) {
            this.listarPaises();
            this.listarNegocios();
        }
    }
    modulos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiUsuario.modulosTALLER(info.token, { _id: this.id }).subscribe((data) => {
                    if (data.exe) {
                        console.log(data.response, 'respon');
                        if (data.response.length > 0) {
                            this.listaModulos = data.response[0].modulos;
                        }
                    }
                    else {
                        this.toasCtrl.toastError('No se pudo cargar los módulos, intentelo más tarde');
                    }
                }, (err) => {
                    this.toasCtrl.toastError('No se pudo cargar los módulos, intentelo más tarde');
                });
            }
        });
    }
    disponibilidad() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiTickets.disponibilidadnegocio(info.token, { id: this.id }).subscribe((data) => {
                    // console.log(data, 'DATONNNNNN')
                    if (data.exe) {
                        if (data.response === 'no') {
                            this.cargado = false;
                        }
                        else {
                            this.cargado = true;
                        }
                    }
                    else {
                    }
                }, (err) => {
                    this.toasCtrl.toastError('No se pudo consultar la disponibilidad, inténtelo más tarde');
                });
            }
        });
    }
    listarNegocios() {
        this.apiUsuario.negocios().subscribe((data) => {
            if (data.exe) {
                data.response.forEach((item) => {
                    item.checked = true;
                    this.escogidos.push(item.nombre);
                });
                this.negocios = data.response;
            }
            else {
                this.negocios.push('Taller Mécanico');
            }
        }, (err) => {
            this.negocios.push('Taller Mécanico');
        });
    }
    informacion(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(id)
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.biografia.getBiografia(info.token, id).subscribe((data) => {
                    // console.log(data.response);
                    if (data.response.length > 0) {
                        // console.log(data);
                        this.contenido = data.response[0].contenido;
                        this.servicios = data.response[0].servicios;
                        this.estado = false;
                    }
                    else {
                        this.estado = true;
                    }
                    // // // console.log(`Estado ${this.estado}`);
                }, (err) => {
                    // this.estado = true;
                });
            }
        });
    }
    cerrar() {
        this.modalCtrl.dismiss({});
    }
    cargarSolicitud(idReceptor) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // // console.log(idReceptor);
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.seguimientoService.consultarSolicitud(info.token, idReceptor).subscribe((data) => {
                    // // console.log(data);
                    if (data.response.length > 0) {
                        if (data.response[0].estado === 'pendiente') {
                            // console.log('NO AMIGOS')
                            this.amigos = false;
                            this.solicitudEnviada = true;
                            this.titulo = 'Cancelar solicitud';
                        }
                        else if (data.response[0].estado === 'aceptado') {
                            // console.log('SI AMIGOS')
                            this.amigos = true;
                            this.titulo = 'Dejar de seguir';
                            this.solicitudEnviada = true;
                        }
                    }
                    else {
                        this.solicitudEnviada = false;
                        this.titulo = 'Enviar solicitud';
                    }
                    this.ejecutado = true;
                }, (err) => {
                    this.ejecutado = true;
                    this.toasCtrl.toastError('No se pudo traer toda la información, inténtelo más tarde');
                });
            }
        });
    }
    listarPaises() {
        this.apiUsuario.listarPaises().subscribe((data) => {
            if (data.exe) {
                this.paises = data.response;
            }
            else {
                this.paises.push('Colombia');
            }
        }, (err) => {
            this.paises.push('Colombia');
        });
    }
    listarCiudades(event, opt) {
        // console.log(event.detail)
        this.pais = event.detail.value.nombre;
        this.miciudad = '';
        this.cargando = true;
        this.apiUsuario.listarCiudades(event.detail.value._id).subscribe((data) => {
            if (data.exe) {
                this.ciudades = data.response;
                this.ciudad = true;
                if (opt) {
                }
            }
            else {
                this.toasCtrl.toastError('No se pudo traer las ciudades, intente registrarse más tarde');
            }
            this.cargando = false;
        }, (err) => {
            this.toasCtrl.toastError('No se pudo traer las ciudades, intente registrarse más tarde');
            this.cargando = false;
        });
    }
    seleccionarCiudad(event) {
        this.miciudad = event.detail.value;
    }
    cambio(event) {
        // console.log(event.detail);
        if (event.detail.checked) {
            if (!this.escogidos.find((item) => item === event.detail.value)) {
                this.escogidos.push(event.detail.value);
            }
        }
        else {
            this.escogidos = this.escogidos.filter((item) => item !== event.detail.value);
        }
        // console.log(this.escogidos);
    }
    guardar() {
        this.popov.dismiss({
            validado: true,
            arreglo: this.escogidos,
            ciudad: this.miciudad === '' ? false : this.miciudad,
            pais: this.pais === '' ? false : this.pais
        });
    }
    seguir() {
    }
    seguimiento() {
        if (!this.solicitudEnviada) {
            this.almacenamiento.obtenerToken().then((info) => {
                this.estadoSolicitud = true;
                this.seguimientoService.enviarSolicitud({
                    token: info.token,
                    IDreceptor: this.id
                }).subscribe((data) => {
                    this.estadoSolicitud = false;
                    this.solicitudEnviada = true;
                    this.titulo = 'Cancelar Solicitud';
                    // console.log(`Data del seguimiento ${data}`);
                }, (error) => {
                    // console.log(error.message);
                    this.estadoSolicitud = false;
                    this.toasCtrl.alertApplication(error.message, false);
                });
            });
        }
        else {
            this.almacenamiento.obtenerToken().then((info) => {
                this.seguimientoService.cancelarSolicitud(info.token, this.id, '1').subscribe((data) => {
                    this.solicitudEnviada = false;
                    this.titulo = 'Seguir Cuenta';
                }, (error) => {
                    this.toasCtrl.alertApplication(error.message, false);
                });
            }).catch((err) => {
            });
        }
    }
    crearTicket() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Crear Ticket',
                // tslint:disable-next-line:max-line-length
                message: 'Al crear el ticket entrarás en la fila de espera de ' + this.nombre,
                inputs: [
                    {
                        type: 'textarea',
                        placeholder: 'Asunto del ficho',
                        name: 'des'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        cssClass: 'cancelarAlerta',
                        role: 'cancel',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Crear Ticket',
                        cssClass: 'botonalerta',
                        handler: (dt) => {
                            this.generarTicket(dt);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    crearPedido() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Crear Pedido',
                // tslint:disable-next-line:max-line-length
                message: 'Al crear el pedido se creará una sala de chat con ' + this.nombre,
                buttons: [
                    {
                        text: 'Cancelar',
                        cssClass: 'cancelarAlerta',
                        role: 'cancel',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Crear Pedido',
                        cssClass: 'botonalerta',
                        handler: (dt) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            if (this.id !== '') {
                                const info = yield this.almacenamiento.obtenerToken();
                                if (info) {
                                    this.apiPedidos.crearPedido(info.token, { taller: this.id }).subscribe((data) => {
                                        console.log(data);
                                        if (data.exe) {
                                            this.modalCtrl.dismiss();
                                            this.toasCtrl.toastExitoso('Pedido creado correctamente');
                                            this.router.navigate(['/central/pedidos']);
                                        }
                                        else {
                                            this.toasCtrl.toastError('No se pudo generar el pedido para ' + this.nombre);
                                        }
                                    }, (err) => {
                                        this.toasCtrl.toastError('No se pudo generar el pedido para ' + this.nombre);
                                    });
                                }
                            }
                            else {
                                this.toasCtrl.toastError('No se pudo generar el pedido para ' + this.nombre);
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    generarTicket(dt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.id !== '') {
                const info = yield this.almacenamiento.obtenerToken();
                if (info) {
                    this.socket.emit('crear', { idtaller: this.id, id: info._id, usuario: info.nusuario, nombre: info.nombre, des: dt.des });
                }
            }
            else {
                this.toasCtrl.toastError('No se pudo generar el ticket para ' + this.nombre);
            }
        });
    }
    escucharMensajes() {
        const myobserver = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Observable"](observer => {
            this.socket.on('mensajeTicket', (data) => {
                observer.next(data);
            });
        });
        return myobserver;
    }
};
ModalMapasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"] },
    { type: _providers_Api_Biografia_service__WEBPACK_IMPORTED_MODULE_6__["BiografiaService"] },
    { type: _providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_7__["ApiSeguimientoService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_9__["ToastServices"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_8__["UsuariosLoginService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _providers_Api_Tickets_service__WEBPACK_IMPORTED_MODULE_11__["TicketsService"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_12__["Socket"] },
    { type: _providers_Api_Pedidos_service__WEBPACK_IMPORTED_MODULE_14__["PedidosService"] }
];
ModalMapasPage.propDecorators = {
    info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    vista: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    seleccionados: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalMapasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-mapas',
        template: _raw_loader_modal_mapas_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_mapas_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalMapasPage);



/***/ }),

/***/ "utQI":
/*!***************************************************************!*\
  !*** ./src/app/pages/Mapas/modal-mapas/modal-mapas.module.ts ***!
  \***************************************************************/
/*! exports provided: ModalMapasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalMapasPageModule", function() { return ModalMapasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_mapas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-mapas-routing.module */ "PHEo");
/* harmony import */ var _modal_mapas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-mapas.page */ "iM4M");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");








let ModalMapasPageModule = class ModalMapasPageModule {
};
ModalMapasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_mapas_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalMapasPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_modal_mapas_page__WEBPACK_IMPORTED_MODULE_6__["ModalMapasPage"]]
    })
], ModalMapasPageModule);



/***/ })

}]);
//# sourceMappingURL=default~Mapas-control-mapas-control-mapas-module~Mapas-grua-grua-module.js.map