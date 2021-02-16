(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Patinadas-patinadas-mias-patinadas-mias-module"],{

/***/ "4Y+5":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Patinadas/patinadas-mias/patinadas-mias.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"oscuro\">\n        <ion-back-button slot=\"start\" icon=\"chevron-back-outline\" defaultHref=\"/central/menu\"></ion-back-button>\n        <ion-title>Mis Patinadas</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <div class=\"flcenter ion-padding\" *ngIf=\"!cargado\">\n        <ion-spinner name=\"crescent\" color=\"oscuro\"></ion-spinner>\n        <div>\n            Cargando patinadas... <br>\n            <strong></strong>\n        </div>\n\n    </div>\n\n    <div class=\"divider light\"></div>\n\n    <div *ngIf=\"cargado\">\n\n        <div class=\"flcenter ion-padding \" *ngIf=\"patinadas.length === 0\">\n            <div class=\"ct\">\n                <img src=\"/assets/Estados.png\" width=\"80px\" alt=\"\"> <br> Aún no tiene patinadas para mostrar <br>\n            </div>\n\n\n        </div>\n\n\n        <div class=\" \" *ngIf=\"patinadas.length > 0\">\n\n            <div class=\"opts\">\n                <ion-card mode=\"ios\" *ngFor=\"let patinada of patinadas; let i = index;\">\n\n                    <ion-card-header><img src=\"/assets/Estados.png\" width=\"100px\"></ion-card-header>\n                    <strong>{{ patinada.fecha | cambioUTC}}</strong>\n                    <ion-card-title>{{ patinada.creador.nombrecompleto}}\n                    </ion-card-title>\n                    <ion-chip mode=\"ios\" color=\"success\" (click)=\"mostrar(i)\">Ver información\n                    </ion-chip> <br>\n\n                    <div *ngIf=\"patinada.vs\" class=\"info\">\n\n                        <p>{{ patinada.descripcion }}</p>\n\n                        <div class=\"separador\"></div>\n\n                        <div><strong>Ubicado en {{ patinada.creador.ciudad}}, {{ patinada.creador.pais}}</strong></div>\n                        <div><strong>Teléfono: </strong> {{ patinada.creador.tel}}</div>\n                        <div><strong>Correo: </strong> {{ patinada.creador.correo}}</div> <br>\n\n                        <ion-button *ngIf=\"patinada.creador._id !== id\" mode=\"ios\" color=\"light\" expand=\"block\" (click)=\"navegar(patinada._id)\">CHAT</ion-button>\n\n\n\n                        <ion-list *ngIf=\"patinada.creador._id === id\">\n                            <ion-item-divider>\n                                <ion-label>Usuarios que apoyan para tu patinada</ion-label>\n                            </ion-item-divider>\n                            <ion-item *ngFor=\"let usuario of patinada.tomados\">\n                                <ion-label class=\"ion-text-wrap\" mode=\"ios\">\n                                    <div>{{ usuario.nombrecompleto }}</div>\n                                    <strong>{{ usuario.nombreusuario }}</strong>\n                                </ion-label>\n                                <ion-button expand=\"block\" color=\"success\" slot=\"end\" (click)=\"navegarChat(patinada._id, usuario._id)\">CHAT</ion-button>\n                            </ion-item>\n                        </ion-list>\n\n                        <ion-button *ngIf=\"patinada.creador._id === id\" mode=\"ios\" color=\"danger\" expand=\"block\" (click)=\"cancelar(patinada)\">CANCELAR PATINADA</ion-button>\n\n\n                    </div>\n                </ion-card>\n\n            </div>\n        </div>\n\n    </div>\n\n</ion-content>");

/***/ }),

/***/ "IOUh":
/*!*************************************************************************!*\
  !*** ./src/app/pages/Patinadas/patinadas-mias/patinadas-mias.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flcenter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  text-align: center;\n}\n\n.opts {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.opts ion-card {\n  width: calc(100% - 10px);\n  margin: 10px 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.5s;\n}\n\n.opts ion-card ion-card-header {\n  width: 100%;\n  text-align: center;\n  padding: 5px;\n  background-color: #D5DCBA;\n}\n\n.opts ion-card ion-card-title {\n  font-size: 22px;\n  text-align: center;\n  padding: 10px;\n}\n\n.info {\n  padding: 10px;\n}\n\ndiv p {\n  margin-top: 10px;\n  font-size: 18px;\n  line-height: 1.5;\n}\n\n.separador {\n  margin: 10px;\n  padding: 1px;\n  background-color: #333333;\n}\n\n@media screen and (min-width: 600px) {\n  .opts ion-card {\n    width: calc(50% - 10px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGF0aW5hZGFzLW1pYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSx1QkFBQTtFQUNOO0FBQ0YiLCJmaWxlIjoicGF0aW5hZGFzLW1pYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ub3B0cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ub3B0cyBpb24tY2FyZCB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgICBtYXJnaW46IDEwcHggNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG59XHJcblxyXG4ub3B0cyBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDVEQ0JBO1xyXG59XHJcblxyXG4ub3B0cyBpb24tY2FyZCBpb24tY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5kaXYgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLnNlcGFyYWRvciB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgLm9wdHMgaW9uLWNhcmQge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "ORVy":
/*!*************************************************************************!*\
  !*** ./src/app/pages/Patinadas/patinadas-mias/patinadas-mias.module.ts ***!
  \*************************************************************************/
/*! exports provided: PatinadasMiasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatinadasMiasPageModule", function() { return PatinadasMiasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _patinadas_mias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patinadas-mias-routing.module */ "l8YH");
/* harmony import */ var _patinadas_mias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patinadas-mias.page */ "nDFO");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");








let PatinadasMiasPageModule = class PatinadasMiasPageModule {
};
PatinadasMiasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _patinadas_mias_routing_module__WEBPACK_IMPORTED_MODULE_5__["PatinadasMiasPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_patinadas_mias_page__WEBPACK_IMPORTED_MODULE_6__["PatinadasMiasPage"]]
    })
], PatinadasMiasPageModule);



/***/ }),

/***/ "l8YH":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/Patinadas/patinadas-mias/patinadas-mias-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PatinadasMiasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatinadasMiasPageRoutingModule", function() { return PatinadasMiasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _patinadas_mias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patinadas-mias.page */ "nDFO");




const routes = [
    {
        path: '',
        component: _patinadas_mias_page__WEBPACK_IMPORTED_MODULE_3__["PatinadasMiasPage"]
    }
];
let PatinadasMiasPageRoutingModule = class PatinadasMiasPageRoutingModule {
};
PatinadasMiasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PatinadasMiasPageRoutingModule);



/***/ }),

/***/ "nDFO":
/*!***********************************************************************!*\
  !*** ./src/app/pages/Patinadas/patinadas-mias/patinadas-mias.page.ts ***!
  \***********************************************************************/
/*! exports provided: PatinadasMiasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatinadasMiasPage", function() { return PatinadasMiasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_patinadas_mias_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./patinadas-mias.page.html */ "4Y+5");
/* harmony import */ var _patinadas_mias_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patinadas-mias.page.scss */ "IOUh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var src_app_providers_Api_Patinadas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/Api/Patinadas.service */ "2qE+");
/* harmony import */ var src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/Utilidades/ToastService.service */ "fmoy");










let PatinadasMiasPage = class PatinadasMiasPage {
    constructor(almacenamiento, toast, router, alert, apiPatinada, modal, socket) {
        this.almacenamiento = almacenamiento;
        this.toast = toast;
        this.router = router;
        this.alert = alert;
        this.apiPatinada = apiPatinada;
        this.modal = modal;
        this.socket = socket;
        this.patinadas = [];
        this.cargado = false;
        this.id = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.patinadas = [];
        this.traer();
    }
    refrescando(event) {
        this.traer().then(() => {
            event.detail.complete();
        }).catch(() => {
            event.detail.complete();
        });
    }
    traer() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.patinadas = [];
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.id = info._id;
                this.apiPatinada.consultarPatinadaMias(info.token).subscribe((data) => {
                    console.log(data, 'wu');
                    if (data.exe) {
                        data.response.forEach((item) => {
                            item.vs = false;
                            this.patinadas.push(item);
                        });
                        this.cargado = true;
                    }
                    else {
                        this.toast.toastError('No se pudo consultar las patinadas, inténtelo más tarde');
                        this.router.navigate(['/central/menu']);
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo consultar las patinadas, inténtelo más tarde');
                    this.router.navigate(['/central/menu']);
                });
            }
        });
    }
    cancelar(patinada) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Atención!',
                // tslint:disable-next-line:max-line-length
                message: '¿Quieres finalizar esta patinada? al aceptar ya nadie podrá ver tu solicitud en la bandeja de patinadas.',
                buttons: [
                    {
                        text: 'Cancelar',
                        cssClass: 'cancelarAlerta',
                        role: 'cancel',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Finalizar',
                        cssClass: 'botonalerta',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const info = yield this.almacenamiento.obtenerToken();
                            if (info) {
                                const dispositivos = patinada.tomados.map((item) => {
                                    if (item._id !== this.id) {
                                        return item.usuarioID;
                                    }
                                });
                                this.apiPatinada.patinadaEliminar(info.token, { id: patinada._id, accesos: patinada.tomados, dispositivos: dispositivos }).subscribe((data) => {
                                    //  console.log(data, 'wu')
                                    if (data.exe) {
                                        this.toast.Especial('Patinada finalizada');
                                        this.traer();
                                    }
                                    else {
                                        this.toast.toastError('No se pudo eliminar las patinadas, inténtelo más tarde');
                                        this.router.navigate(['/central/menu']);
                                    }
                                }, (err) => {
                                    this.toast.toastError('No se pudo eliminar las patinadas, inténtelo más tarde');
                                    this.router.navigate(['/central/menu']);
                                });
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    mostrar(i) {
        this.patinadas[i].vs = !this.patinadas[i].vs;
    }
    navegar(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiPatinada.consultarChat(info.token, { patinada: id }).subscribe((data) => {
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
                                this.toast.Especial('Este chat ya no tiene usuarios por dentro');
                            }
                        }
                        else {
                            this.toast.toastError('No se encuentra la sala de chat, seguramente la patina ya ha sido cancelada');
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
    navegarChat(id, usuario) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiPatinada.consultarChat(info.token, { patinada: id, usuario }).subscribe((data) => {
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
                                this.toast.Especial('Este chat ya no tiene usuarios por dentro');
                            }
                        }
                        else {
                            this.toast.toastError('No se encuentra la sala de chat, seguramente la patina ya ha sido cancelada');
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
PatinadasMiasPage.ctorParameters = () => [
    { type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__["InicioService"] },
    { type: src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_9__["ToastServices"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_providers_Api_Patinadas_service__WEBPACK_IMPORTED_MODULE_8__["PatinadasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["Socket"] }
];
PatinadasMiasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-patinadas-mias',
        template: _raw_loader_patinadas_mias_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_patinadas_mias_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PatinadasMiasPage);



/***/ })

}]);
//# sourceMappingURL=Patinadas-patinadas-mias-patinadas-mias-module.js.map