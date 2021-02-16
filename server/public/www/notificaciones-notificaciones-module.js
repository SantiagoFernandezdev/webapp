(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notificaciones-notificaciones-module"],{

/***/ "3X26":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notificaciones/notificaciones.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"oscuro\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"/central/menu/\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Notificaciones</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <h3 class=\"tituloGrande\" *ngIf=\"notificaciones.length === 0\">La bandeja de notificaciones está vacía</h3>\n    <ion-list class=\"blanco \" *ngIf=\"notificaciones.length > 0\">\n        <ion-item lines=\"none\" *ngFor=\"let notificacion of notificaciones; let i = index;\" [color]=\"notificacion.abierta ? 'blanco' : 'light'\" (click)=\"navegar(notificacion)\">\n            <ion-avatar class=\"avatar\" slot=\"start\">\n                <ion-img *ngIf=\"notificacion.cd\" src=\"https://motocaliapp.com/{{notificacion.imagen}}\"></ion-img>\n                <ion-img *ngIf=\"!notificacion.cd\" src=\"{{notificacion.rutaApp}}\"></ion-img>\n            </ion-avatar>\n            <ion-label class=\"ion-text-wrap\">\n                <strong>{{notificacion.titulo}}</strong><br>\n                <div>{{notificacion.mensaje}}</div>\n                <div class=\"ion-text-right\">{{notificacion.fechaCreado | cambioUTC}}</div>\n\n            </ion-label>\n\n        </ion-item>\n    </ion-list>\n\n    <ion-infinite-scroll *ngIf=\"carga\" #inifinito threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando entradas...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-content>");

/***/ }),

/***/ "E7SW":
/*!***************************************************************!*\
  !*** ./src/app/pages/notificaciones/notificaciones.module.ts ***!
  \***************************************************************/
/*! exports provided: NotificacionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionesPageModule", function() { return NotificacionesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notificaciones-routing.module */ "p8H3");
/* harmony import */ var _notificaciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notificaciones.page */ "Iiqj");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");








let NotificacionesPageModule = class NotificacionesPageModule {
};
NotificacionesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificacionesPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_notificaciones_page__WEBPACK_IMPORTED_MODULE_6__["NotificacionesPage"]]
    })
], NotificacionesPageModule);



/***/ }),

/***/ "Iiqj":
/*!*************************************************************!*\
  !*** ./src/app/pages/notificaciones/notificaciones.page.ts ***!
  \*************************************************************/
/*! exports provided: NotificacionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionesPage", function() { return NotificacionesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notificaciones_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notificaciones.page.html */ "3X26");
/* harmony import */ var _notificaciones_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notificaciones.page.scss */ "tiF8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var src_app_providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/Api/UsuariosLogin.service */ "oQG1");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let NotificacionesPage = class NotificacionesPage {
    constructor(almacenamiento, usuarioApi, toastCtrl, router) {
        this.almacenamiento = almacenamiento;
        this.usuarioApi = usuarioApi;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.notificaciones = [''];
        this.desde = 0;
        this.carga = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.inicio();
    }
    inicio() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const login = yield this.almacenamiento.obtenerToken();
            if (login) {
                this.usuarioApi.traerMisNotificaciones(login.token, this.desde).subscribe((data) => {
                    if (data.exe) {
                        data.response.forEach((item) => {
                            if (item.usuarioCreador) {
                                item.cd = true;
                                if (item.usuarioCreador.imagen.length > 0) {
                                    item.imagen = item.usuarioCreador.imagen[0].path;
                                }
                            }
                            else {
                                item.cd = false;
                            }
                        });
                        this.notificaciones = data.response;
                        this.carga = true;
                    }
                    else {
                        this.toastCtrl.alertApplication('No se pudo traer las notificaciones, intentelo más tarde', false);
                    }
                }, (error) => {
                    // console.log(error)
                    this.toastCtrl.alertApplication('No se pudo traer las notificaciones, intentelo más tarde', false);
                });
            }
        });
    }
    refrescando(event) {
        this.desde = 0;
        this.inicio().then(() => {
            event.detail.complete();
        });
    }
    loadData(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.desde = this.desde + 10;
            // console.log(this.desde)
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.usuarioApi.traerMisNotificaciones(info.token, this.desde).subscribe((data) => {
                    // console.log(data);
                    if (data.exe) {
                        if (data.response.length > 0) {
                            data.response.forEach((item) => {
                                if (item.usuarioCreador) {
                                    item.cd = true;
                                    if (item.usuarioCreador.imagen.length > 0) {
                                        item.imagen = item.usuarioCreador.imagen[0].path;
                                    }
                                }
                                else {
                                    item.cd = false;
                                }
                                this.notificaciones.push(item);
                            });
                            event.target.complete();
                        }
                        else {
                            event.target.disabled = true;
                            this.desde = 0;
                        }
                    }
                    else {
                        this.toastCtrl.alertApplication('No se pudo traer las notificaciones, intentelo más tarde', false);
                    }
                }, (error) => {
                    // console.log(error)
                    this.toastCtrl.alertApplication('No se pudo traer las notificaciones, intentelo más tarde', false);
                });
            }
        });
    }
    navegar(noti) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.usuarioApi.ActualizarNotificaciones(info.token, noti._id).subscribe((data) => {
                    if (data.exe) {
                        if (noti.accion.tipo === 'Seguimiento') {
                            this.router.navigate(['/central/menu/solicitudes']);
                        }
                        else if (noti.accion.tipo === 'SeguimientoAceptado') {
                            this.router.navigate(['/central/buscar/perfil-visita/', noti.usuarioCreador.nombreusuario]);
                        }
                        else if (noti.accion.tipo === 'Productos') {
                            this.router.navigate(['/central/menu/ivt-miinventario/', noti.accion.data.id, 'productos', noti.accion.data.id]);
                        }
                        else if (noti.accion.tipo === 'SalidaIVT') {
                            this.router.navigate(['/central/menu/ivt-miinventario/', noti.accion.data.id, 'salidas', noti.accion.data.id, noti.accion.data.creador]);
                        }
                        else if (noti.accion.tipo === 'EntradaIVT') {
                            this.router.navigate(['/central/menu/ivt-miinventario/', noti.accion.data.id, 'entradas', noti.accion.data.id]);
                        }
                        else if (noti.accion.tipo === 'Publicacion') {
                            this.router.navigate(['/igtmpublic/', noti.accion.data.id, 'publicacion']);
                        }
                        else if (noti.accion.tipo === 'Historia') {
                            this.router.navigate(['/igtmpublic/', noti.accion.data.id, 'historia']);
                        }
                        else if (noti.accion.tipo === 'Historia') {
                            this.router.navigate(['/central/tickets/', noti.accion.data.id]);
                        }
                        else if (noti.accion.tipo === 'TicketRechazado') {
                            this.router.navigate(['/central/tickets']);
                        }
                        else if (noti.accion.tipo === 'TicketProcesado') {
                            this.router.navigate(['/central/tickets']);
                        }
                        else if (noti.accion.tipo === 'Pedido') {
                            this.router.navigate(['/central/pedidos/info', noti.accion.data.id]);
                        }
                        else if (noti.accion.tipo === 'Chat') {
                            this.router.navigate(['/central/citas', noti.accion.data.idChat]);
                        }
                        else if (noti.accion.tipo === 'patinada') {
                            this.router.navigate(['/central/patinadas']);
                        }
                        else if (noti.accion.tipo === 'mispatinadas') {
                            this.router.navigate(['/central/mispatinadas']);
                        }
                    }
                });
            }
        });
    }
};
NotificacionesPage.ctorParameters = () => [
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"] },
    { type: src_app_providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_5__["UsuariosLoginService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__["ToastServices"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
NotificacionesPage.propDecorators = {
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['inifinito', { static: false },] }]
};
NotificacionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-notificaciones',
        template: _raw_loader_notificaciones_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notificaciones_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotificacionesPage);



/***/ }),

/***/ "p8H3":
/*!***********************************************************************!*\
  !*** ./src/app/pages/notificaciones/notificaciones-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: NotificacionesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionesPageRoutingModule", function() { return NotificacionesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _notificaciones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notificaciones.page */ "Iiqj");




const routes = [
    {
        path: '',
        component: _notificaciones_page__WEBPACK_IMPORTED_MODULE_3__["NotificacionesPage"]
    }
];
let NotificacionesPageRoutingModule = class NotificacionesPageRoutingModule {
};
NotificacionesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificacionesPageRoutingModule);



/***/ }),

/***/ "tiF8":
/*!***************************************************************!*\
  !*** ./src/app/pages/notificaciones/notificaciones.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".avatar {\n  width: 80px;\n  height: 80px;\n}\n\n.moto-padre {\n  display: flex;\n  justify-content: space-between;\n}\n\n.tituloGrande {\n  margin: 50px auto;\n  opacity: 0.5;\n  text-align: center;\n  width: 300px;\n}\n\nion-item {\n  border-bottom: 2px solid rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxub3RpZmljYWNpb25lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLDJDQUFBO0FBQ0oiLCJmaWxlIjoibm90aWZpY2FjaW9uZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhciB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxufVxyXG5cclxuLm1vdG8tcGFkcmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnRpdHVsb0dyYW5kZSB7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=notificaciones-notificaciones-module.js.map