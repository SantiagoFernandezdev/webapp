(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pedidos-pedidos-inicio-pedidos-inicio-module"],{

/***/ "1XrT":
/*!***********************************************************************!*\
  !*** ./src/app/pages/Pedidos/pedidos-inicio/pedidos-inicio.module.ts ***!
  \***********************************************************************/
/*! exports provided: PedidosInicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosInicioPageModule", function() { return PedidosInicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pedidos_inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pedidos-inicio-routing.module */ "2I1P");
/* harmony import */ var _pedidos_inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pedidos-inicio.page */ "mzER");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");








let PedidosInicioPageModule = class PedidosInicioPageModule {
};
PedidosInicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pedidos_inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["PedidosInicioPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_pedidos_inicio_page__WEBPACK_IMPORTED_MODULE_6__["PedidosInicioPage"]]
    })
], PedidosInicioPageModule);



/***/ }),

/***/ "2I1P":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/Pedidos/pedidos-inicio/pedidos-inicio-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PedidosInicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosInicioPageRoutingModule", function() { return PedidosInicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pedidos_inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pedidos-inicio.page */ "mzER");




const routes = [
    {
        path: '',
        component: _pedidos_inicio_page__WEBPACK_IMPORTED_MODULE_3__["PedidosInicioPage"]
    }
];
let PedidosInicioPageRoutingModule = class PedidosInicioPageRoutingModule {
};
PedidosInicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PedidosInicioPageRoutingModule);



/***/ }),

/***/ "O5qF":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Pedidos/pedidos-inicio/pedidos-inicio.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"oscuro\">\n        <ion-back-button slot=\"start\" icon=\"chevron-back-outline\" defaultHref=\"/central/menu\"></ion-back-button>\n        <ion-title>Pedidos</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <div class=\"flcenter ion-padding\" *ngIf=\"!cargado\">\n        <ion-spinner name=\"crescent\" color=\"oscuro\"></ion-spinner>\n        <div>\n            Cargando pedidos... <br>\n            <strong> {{ usuario }}</strong>\n        </div>\n\n    </div>\n\n    <div class=\"divider light\"></div>\n\n    <div *ngIf=\"cargado\">\n\n        <div class=\"flcenter ion-padding \" *ngIf=\"pedidos.length === 0\">\n            <div class=\"ct\">\n                <img src=\"/assets/Citas.png\" width=\"80px\" alt=\"\"> <br> Aún no tiene pedidos creados <br>\n            </div>\n\n\n        </div>\n\n\n        <div class=\" \" *ngIf=\"pedidos.length > 0\">\n\n            <ion-list>\n                <ion-item-sliding *ngFor=\"let pedido of pedidos; let i = index;\">\n                    <ion-item (click)=\"info(pedido._id)\">\n                        <ion-avatar slot=\"start\">\n                            <img src=\"/assets/Estados.png\">\n                        </ion-avatar>\n                        <ion-label class=\"ion-text-wrap\">\n                            <strong *ngIf=\"pedido.creador._id !== id\">Solicitado por {{ pedido.creador.nombrecompleto }}</strong>\n                            <strong *ngIf=\"pedido.creador._id === id\">Solicitado a {{ pedido.taller.nombrecompleto }}</strong>\n                            <div>Fecha {{ pedido.fecha | cambioUTC}}</div>\n                            <div class=\"carga\" *ngIf=\"pedido.chat\">\n                                <ion-spinner name=\"crescent\"></ion-spinner> Cargando Chat...</div>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item-options side=\"end\">\n                        <ion-item-option *ngIf=\"id === pedido.taller._id\" color=\"barra\" (click)=\"agregar(pedido)\">\n                            <ion-icon name=\"add-outline\" slot=\"icon-only\"></ion-icon>\n                        </ion-item-option>\n                        <ion-item-option color=\"primary\" (click)=\"navegar(pedido._id, i)\">\n                            <ion-icon name=\"chatbubble-outline\" slot=\"icon-only\"></ion-icon>\n                        </ion-item-option>\n                        <ion-item-option color=\"danger\" (click)=\"quitar(pedido._id)\">\n                            <ion-icon name=\"trash-outline\" slot=\"icon-only\"></ion-icon>\n                        </ion-item-option>\n                    </ion-item-options>\n                </ion-item-sliding>\n\n            </ion-list>\n        </div>\n\n    </div>\n\n    <ion-fab *ngIf=\"role === 'USER_ROLE'\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button color=\"oscuro\" (click)=\"crear()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n</ion-content>");

/***/ }),

/***/ "mzER":
/*!*********************************************************************!*\
  !*** ./src/app/pages/Pedidos/pedidos-inicio/pedidos-inicio.page.ts ***!
  \*********************************************************************/
/*! exports provided: PedidosInicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosInicioPage", function() { return PedidosInicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pedidos_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pedidos-inicio.page.html */ "O5qF");
/* harmony import */ var _pedidos_inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pedidos-inicio.page.scss */ "uB3x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _providers_Api_Pedidos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../providers/Api/Pedidos.service */ "HavB");
/* harmony import */ var _Components_modal_mapas_modal_mapas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Components/modal-mapas/modal-mapas.component */ "ypew");










let PedidosInicioPage = class PedidosInicioPage {
    constructor(router, alert, almacenamiento, toast, apiPedidos, modal) {
        this.router = router;
        this.alert = alert;
        this.almacenamiento = almacenamiento;
        this.toast = toast;
        this.apiPedidos = apiPedidos;
        this.modal = modal;
        this.configurando = false;
        this.usuario = '';
        this.habilitado = false;
        this.cargado = false;
        this.id = '';
        this.pedidos = [];
        this.role = '';
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
                this.apiPedidos.misPedido(info.token).subscribe((data) => {
                    console.log(data);
                    if (data.exe) {
                        this.pedidos = data.response;
                    }
                    else {
                        this.toast.toastError('No se pudo consultar los pedidos, inténtelo más tarde');
                        this.router.navigate(['/central/menu/']);
                    }
                    this.cargado = true;
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
    navegar(id, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.pedidos[i].chat = true;
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiPedidos.consultarSala(info.token, { pedido: id }).subscribe((data) => {
                    //  console.log(data)
                    if (data.exe) {
                        if (data.response.length > 0) {
                            this.almacenamiento.insertarChat(data.response[0]).then(() => {
                                this.router.navigate(['/central/chats/chat']);
                                this.pedidos[i].chat = false;
                            }).catch(() => {
                                this.pedidos[i].chat = false;
                                this.toast.toastError('No se puede acceder al chat, inténtelo más tarde');
                            });
                        }
                        else {
                            this.pedidos[i].chat = false;
                            this.toast.toastError('No se puede acceder al chat, inténtelo más tarde');
                        }
                        this.pedidos[i].chat = false;
                    }
                    else {
                        this.toast.toastError('No se puede acceder al chat, inténtelo más tarde');
                        this.pedidos[i].chat = false;
                    }
                }, (err) => {
                    this.pedidos[i].chat = false;
                    this.toast.toastError('No se puede acceder al chat, inténtelo más tarde');
                });
            }
        });
    }
    info(id) {
        this.router.navigate(['/central/pedidos/info', id]);
    }
    agregar(pedido) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _Components_modal_mapas_modal_mapas_component__WEBPACK_IMPORTED_MODULE_9__["ModalMapasComponent"],
                componentProps: {
                    pedido
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
                                let nuevo = this.pedidos.filter((item) => {
                                    return item._id === id;
                                })[0].accesos;
                                nuevo = nuevo.map((item) => {
                                    return item._id;
                                });
                                nuevo = nuevo.filter((item) => {
                                    return item !== info._id;
                                });
                                console.log(nuevo);
                                this.apiPedidos.editarPedido(info.token, { id, accesos: nuevo }).subscribe((data) => {
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
};
PedidosInicioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__["InicioService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__["ToastServices"] },
    { type: _providers_Api_Pedidos_service__WEBPACK_IMPORTED_MODULE_8__["PedidosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
PedidosInicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pedidos-inicio',
        template: _raw_loader_pedidos_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pedidos_inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PedidosInicioPage);



/***/ }),

/***/ "uB3x":
/*!***********************************************************************!*\
  !*** ./src/app/pages/Pedidos/pedidos-inicio/pedidos-inicio.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flcenter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  text-align: center;\n}\n\nion-card {\n  position: relative;\n}\n\n.carga {\n  display: flex;\n  align-items: center;\n}\n\n.ct {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 300;\n}\n\n.msg {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  text-align: center;\n  padding: 5px 10px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGVkaWRvcy1pbmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6InBlZGlkb3MtaW5pY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FyZ2Ege1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5tc2cge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=Pedidos-pedidos-inicio-pedidos-inicio-module.js.map