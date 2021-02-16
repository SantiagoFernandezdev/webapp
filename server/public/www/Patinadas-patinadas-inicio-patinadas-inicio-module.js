(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Patinadas-patinadas-inicio-patinadas-inicio-module"],{

/***/ "Cw8s":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/Patinadas/patinadas-inicio/patinadas-inicio.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PatinadasInicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatinadasInicioPageModule", function() { return PatinadasInicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _patinadas_inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patinadas-inicio-routing.module */ "iiZe");
/* harmony import */ var _patinadas_inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patinadas-inicio.page */ "ufy1");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");








let PatinadasInicioPageModule = class PatinadasInicioPageModule {
};
PatinadasInicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _patinadas_inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["PatinadasInicioPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_patinadas_inicio_page__WEBPACK_IMPORTED_MODULE_6__["PatinadasInicioPage"]]
    })
], PatinadasInicioPageModule);



/***/ }),

/***/ "iiZe":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/Patinadas/patinadas-inicio/patinadas-inicio-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: PatinadasInicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatinadasInicioPageRoutingModule", function() { return PatinadasInicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _patinadas_inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patinadas-inicio.page */ "ufy1");




const routes = [
    {
        path: '',
        component: _patinadas_inicio_page__WEBPACK_IMPORTED_MODULE_3__["PatinadasInicioPage"]
    }
];
let PatinadasInicioPageRoutingModule = class PatinadasInicioPageRoutingModule {
};
PatinadasInicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PatinadasInicioPageRoutingModule);



/***/ }),

/***/ "lJRB":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Patinadas/patinadas-inicio/patinadas-inicio.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"oscuro\">\n        <ion-back-button slot=\"start\" icon=\"chevron-back-outline\" defaultHref=\"/central/menu\"></ion-back-button>\n        <ion-title>Patinadas</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <div class=\"flcenter ion-padding\" *ngIf=\"!cargado\">\n        <ion-spinner name=\"crescent\" color=\"oscuro\"></ion-spinner>\n        <div>\n            Cargando patinadas... <br>\n            <strong></strong>\n        </div>\n\n    </div>\n\n    <div class=\"divider light\"></div>\n\n    <div *ngIf=\"cargado\">\n\n        <div class=\"flcenter ion-padding \" *ngIf=\"patinadas.length === 0\">\n            <div class=\"ct\">\n                <img src=\"/assets/Estados.png\" width=\"80px\" alt=\"\"> <br> No hay patinas solicitadas por los usuarios hasta el momento <br>\n            </div>\n\n\n        </div>\n\n\n        <div class=\" \" *ngIf=\"patinadas.length > 0\">\n\n            <div class=\"opts\">\n                <ion-card mode=\"ios\" *ngFor=\"let patinada of patinadas; let i = index;\">\n\n                    <ion-card-header><img src=\"/assets/Estados.png\" width=\"100px\"></ion-card-header>\n                    <strong>{{ patinada.fecha | cambioUTC}}</strong>\n                    <ion-card-title>{{ patinada.creador.nombrecompleto}}\n                    </ion-card-title>\n                    <ion-chip mode=\"ios\" color=\"success\" (click)=\"mostrar(i)\">Ver información\n                    </ion-chip> <br>\n\n                    <div *ngIf=\"patinada.vs\" class=\"info\">\n\n                        <p>{{ patinada.descripcion }}</p>\n\n                        <div class=\"separador\"></div>\n\n                        <div><strong>Ubicado en {{ patinada.creador.ciudad}}, {{ patinada.creador.pais}}</strong></div>\n                        <div><strong>Teléfono: </strong> {{ patinada.creador.tel}}</div>\n                        <div><strong>Correo: </strong> {{ patinada.creador.correo}}</div> <br>\n\n                        <ion-button mode=\"ios\" color=\"barra\" expand=\"block\" (click)=\"ayudar(patinada)\">ACEPTAR PATINADA</ion-button>\n\n                    </div>\n                </ion-card>\n\n            </div>\n        </div>\n\n    </div>\n\n\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button color=\"oscuro\" (click)=\"crear()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n</ion-content>");

/***/ }),

/***/ "ufy1":
/*!***************************************************************************!*\
  !*** ./src/app/pages/Patinadas/patinadas-inicio/patinadas-inicio.page.ts ***!
  \***************************************************************************/
/*! exports provided: PatinadasInicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatinadasInicioPage", function() { return PatinadasInicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_patinadas_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./patinadas-inicio.page.html */ "lJRB");
/* harmony import */ var _patinadas_inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patinadas-inicio.page.scss */ "vGCG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_providers_Api_Patinadas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/Api/Patinadas.service */ "2qE+");
/* harmony import */ var _Components_modal_patinada_modal_patinada_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Components/modal-patinada/modal-patinada.component */ "ssWy");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");











let PatinadasInicioPage = class PatinadasInicioPage {
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
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
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
                this.apiPatinada.consultarPatinada(info.token).subscribe((data) => {
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
    crear() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _Components_modal_patinada_modal_patinada_component__WEBPACK_IMPORTED_MODULE_9__["ModalPatinadaComponent"]
            });
            yield modal.present();
            const cerrar = yield modal.onWillDismiss();
            if (cerrar) {
                if (cerrar.data) {
                    this.router.navigate(['/central/mispatinadas']);
                }
            }
        });
    }
    ayudar(patinada) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Atención!',
                // tslint:disable-next-line:max-line-length
                message: '¿Quieres colaborarle a ' + patinada.creador.nombrecompleto + ' en su patinada? al aceptar se creará una sala de chat para que puedan hablar del asunto.',
                buttons: [
                    {
                        text: 'No Acepto',
                        cssClass: 'cancelarAlerta',
                        role: 'cancel',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Acepto',
                        cssClass: 'botonalerta',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const info = yield this.almacenamiento.obtenerToken();
                            if (info) {
                                this.apiPatinada.patinadaEditar(info.token, { id: patinada._id }).subscribe((data) => {
                                    console.log(data, 'wu');
                                    if (data.exe) {
                                        this.socket.emit('patinadasayuda', {
                                            nombre: info.nombre,
                                            usuario: data.response.creador._id
                                        });
                                        this.router.navigate(['/central/mispatinadas']);
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
};
PatinadasInicioPage.ctorParameters = () => [
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_5__["ToastServices"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: src_app_providers_Api_Patinadas_service__WEBPACK_IMPORTED_MODULE_8__["PatinadasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__["Socket"] }
];
PatinadasInicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-patinadas-inicio',
        template: _raw_loader_patinadas_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_patinadas_inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PatinadasInicioPage);



/***/ }),

/***/ "vGCG":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/Patinadas/patinadas-inicio/patinadas-inicio.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flcenter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  text-align: center;\n}\n\n.opts {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.opts ion-card {\n  width: calc(100% - 10px);\n  margin: 10px 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.5s;\n}\n\n.opts ion-card ion-card-header {\n  width: 100%;\n  text-align: center;\n  padding: 5px;\n  background-color: #f1f1ff;\n}\n\n.opts ion-card ion-card-title {\n  font-size: 22px;\n  text-align: center;\n  padding: 10px;\n}\n\n.info {\n  padding: 10px;\n}\n\ndiv p {\n  margin-top: 10px;\n  font-size: 18px;\n  line-height: 1.5;\n}\n\n.separador {\n  margin: 10px;\n  padding: 1px;\n  background-color: #333333;\n}\n\n@media screen and (min-width: 600px) {\n  .opts ion-card {\n    width: calc(50% - 10px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGF0aW5hZGFzLWluaWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLHVCQUFBO0VBQ047QUFDRiIsImZpbGUiOiJwYXRpbmFkYXMtaW5pY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm9wdHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLm9wdHMgaW9uLWNhcmQge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xyXG4gICAgbWFyZ2luOiAxMHB4IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxufVxyXG5cclxuLm9wdHMgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmZjtcclxufVxyXG5cclxuLm9wdHMgaW9uLWNhcmQgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuZGl2IHAge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi5zZXBhcmFkb3Ige1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIC5vcHRzIGlvbi1jYXJkIHtcclxuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgIH1cclxufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=Patinadas-patinadas-inicio-patinadas-inicio-module.js.map