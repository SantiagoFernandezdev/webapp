(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Inventarios-ivtsalidas-ivtsalidas-module"],{

/***/ "5Pmk":
/*!*****************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivtsalidas/ivtsalidas.page.ts ***!
  \*****************************************************************/
/*! exports provided: IVTsalidasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IVTsalidasPage", function() { return IVTsalidasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ivtsalidas_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ivtsalidas.page.html */ "DQUj");
/* harmony import */ var _ivtsalidas_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ivtsalidas.page.scss */ "HXfc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var src_app_providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/Api/Inventarios.service */ "5yQV");
/* harmony import */ var src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ivt-modal/ivt-modal.page */ "SQQW");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");











let IVTsalidasPage = class IVTsalidasPage {
    constructor(modalCtrl, almacenamiento, ivtApi, toast, alertCtrl, ActiveRouter, sockect) {
        this.modalCtrl = modalCtrl;
        this.almacenamiento = almacenamiento;
        this.ivtApi = ivtApi;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.ActiveRouter = ActiveRouter;
        this.sockect = sockect;
        this.salidas = [];
        this.load = false;
        this.fecha1 = '';
        this.fecha2 = '';
        this.formato1 = 'AAAA-MM-DDTHH: mm: ssTZD';
        this.formato2 = 'AAAA-MM-DDTHH: mm: ssTZD';
        this.filtros = false;
        this.partida = 0;
        this.partida2 = 0;
        this.patron = '';
        this.carga = true;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.cargarsalidas();
    }
    refrescando(event) {
        this.partida = 0;
        this.partida2 = 0;
        this.cargarsalidas().then(() => {
            event.target.complete();
        }).catch(() => event.target.complete());
    }
    cargarsalidas() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.carga = true;
                this.ivtApi.leerSalida(info.token, { ivt: this.ActiveRouter.snapshot.paramMap.get('id'), partida: this.partida2, patron: this.patron }).subscribe((data) => {
                    // console.log(data, 'mi data');
                    if (data.exe) {
                        this.salidas = data.response;
                    }
                    else {
                        this.toast.toastError('No se pudo listar las salidas, intentelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo listar las salidas, intentelo más tarde');
                });
            }
        });
    }
    modal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_9__["IvtModalPage"],
                componentProps: {
                    tipo: 'salidas',
                    creador: this.ActiveRouter.snapshot.paramMap.get('creador'),
                    inventario: this.ActiveRouter.snapshot.paramMap.get('id')
                },
            });
            yield modal.present();
            const cerrado = yield modal.onWillDismiss();
            if (cerrado.data) {
                if (cerrado.data.exe) {
                    this.cargarsalidas();
                }
            }
        });
    }
    eliminar(entrada, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    editar(entrada) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    filtro(event, tipo) {
        if (tipo === 1) {
            this.fecha1 = event.detail.value;
        }
        else {
            this.fecha2 = event.detail.value;
        }
    }
    filtrar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.partida = 0;
                if (this.fecha1 !== '' && this.fecha2 !== '') {
                    this.ivtApi.filtrarSalidas(info.token, { desde: this.fecha1, hasta: this.fecha2, partida: this.partida }).subscribe((data) => {
                        // console.log(data, 'mi data');
                        if (data.exe) {
                            this.salidas = data.response;
                            this.filtros = false;
                        }
                        else {
                            this.toast.toastError('No se pudo consultar las salidas, intentelo más tarde');
                        }
                    }, (err) => {
                        this.toast.toastError('No se pudo consultar las salidas, intentelo más tarde');
                    });
                }
                else {
                    this.toast.toastError('Debe de especificar las fechas (desde, hasta)');
                }
            }
        });
    }
    loadData(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // event.target.complete()
            // console.log(this.partida, this.partida2)
            this.partida = this.partida + 10;
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                if (this.fecha1 !== '' && this.fecha2 !== '') {
                    this.ivtApi.filtrarSalidas(info.token, { desde: this.fecha1, hasta: this.fecha2, partida: this.partida, patron: this.patron }).subscribe((data) => {
                        // console.log(data, 'mi data scroll');
                        if (data.exe) {
                            if (data.response.length > 0) {
                                data.response.forEach((item) => {
                                    this.salidas.push(item);
                                });
                                event.target.complete();
                            }
                            else {
                                event.target.disabled = true;
                                this.partida = 0;
                            }
                        }
                        else {
                            this.toast.toastError('No se pudo consultar las salidas, intentelo más tarde');
                        }
                    }, (err) => {
                        this.toast.toastError('No se pudo consultar las salidas, intentelo más tarde');
                    });
                }
                else {
                    this.partida2 = this.partida2 + 10;
                    this.ivtApi.leerSalida(info.token, { ivt: this.ActiveRouter.snapshot.paramMap.get('id'), partida: this.partida2, patron: this.patron }).subscribe((data) => {
                        // console.log(data, 'mi data');
                        if (data.exe) {
                            if (data.response.length > 0) {
                                data.response.forEach((item) => {
                                    this.salidas.push(item);
                                });
                                event.target.complete();
                            }
                            else {
                                event.target.disabled = true;
                                this.partida2 = 0;
                            }
                        }
                        else {
                            this.toast.toastError('No se pudo listar las salidas, intentelo más tarde');
                        }
                    }, (err) => {
                        this.toast.toastError('No se pudo listar las salidas, intentelo más tarde');
                    });
                }
            }
        });
    }
    buscarProducto(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.partida = 0;
            this.partida2 = 0;
            const info = yield this.almacenamiento.obtenerToken();
            yield this.contenido.scrollToTop();
            if (info) {
                if (event.detail.value === '') {
                    if (this.fecha1 !== '' && this.fecha2 !== '' && this.filtros) {
                        this.filtrar();
                    }
                    else {
                        this.cargarsalidas();
                    }
                }
                else {
                    this.patron = event.detail.value;
                    if (this.fecha1 !== '' && this.fecha2 !== '' && this.filtros) {
                        this.ivtApi.filtrarEntradasPatron(info.token, { desde: this.fecha1, hasta: this.fecha2, patron: event.detail.value, tipo: 'filtro' }).subscribe((data) => {
                            // console.log(data, 'mi data filtro');
                            if (data.exe) {
                                if (data.response.length > 0) {
                                    this.inifinito.disabled = false;
                                }
                                else {
                                    this.inifinito.disabled = true;
                                }
                                this.salidas = data.response;
                            }
                            else {
                                this.toast.toastError('No se pudo consultar las salidas, intentelo más tarde');
                            }
                        }, (err) => {
                            this.toast.toastError('No se pudo consultar las salidas, intentelo más tarde');
                        });
                    }
                    else {
                        this.ivtApi.filtrarSalidasPatron(info.token, { patron: event.detail.value, tipo: 'normal' }).subscribe((data) => {
                            // console.log(data, 'mi data filtro 2');
                            if (data.exe) {
                                if (data.response.length > 0) {
                                    this.inifinito.disabled = false;
                                }
                                else {
                                    this.inifinito.disabled = true;
                                }
                                this.salidas = data.response;
                            }
                            else {
                                this.toast.toastError('No se pudo consultar las salidas, intentelo más tarde');
                            }
                        }, (err) => {
                            this.toast.toastError('No se pudo consultar las salidas, intentelo más tarde');
                        });
                    }
                }
            }
        });
    }
    borrar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.fecha1 = '';
            this.fecha2 = '';
            yield this.contenido.scrollToTop();
            this.partida = 0;
            this.partida2 = 0;
            this.inifinito.disabled = false;
            this.cargarsalidas();
        });
    }
    toggleFiltro() {
        this.filtros = !this.filtros;
    }
};
IVTsalidasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"] },
    { type: src_app_providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_6__["InventariosService"] },
    { type: src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__["ToastServices"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__["Socket"] }
];
IVTsalidasPage.propDecorators = {
    inifinito: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['inifinito', { static: false },] }],
    contenido: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['contenido', { static: false },] }]
};
IVTsalidasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ivtsalidas',
        template: _raw_loader_ivtsalidas_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ivtsalidas_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IVTsalidasPage);



/***/ }),

/***/ "DQUj":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Inventarios/ivtsalidas/ivtsalidas.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"success\">\n\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"/central/menu/ivt-inicio\"></ion-back-button>\n        </ion-buttons>\n\n        <ion-title>Inventario - Salidas</ion-title>\n\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"toggleFiltro()\">\n                <ion-icon name=\"search-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n            <ion-button *ngIf=\"fecha1 !== '' && fecha2 !== ''\" (click)=\"borrar()\">\n                <ion-icon name=\"trash-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n    <div class=\"filtros blanco\" *ngIf=\"filtros\">\n        <ion-item>\n            <ion-label position=\"floating\">Seleccionar desde que fecha</ion-label>\n            <ion-datetime (ionChange)=\"filtro( $event, 1 )\" displayFormat=\"DD-MM-YYYY hh:mm:a\" pickerFormat=\"DD MM YYYY, hh:mm:a\" done-text=\"Aceptar\" cancel-text=\"Cancelar\" [value]=\"fecha1\" placeholder=\"Seleccione Desde\"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">Seleccionar hasta que fecha</ion-label>\n            <ion-datetime (ionChange)=\"filtro( $event, 2 )\" displayFormat=\"DD-MM-YYYY hh:mm:a\" pickerFormat=\"DD MM YYYY, hh:mm:a\" done-text=\"Aceptar\" placeholder=\"Seleccione Hasta\" [value]=\"fecha2\" cancel-text=\"Cancelar\"></ion-datetime>\n        </ion-item>\n\n        <div class=\"btns divider\">\n            <ion-button color=\"medium\" shape=\"round\" mode=\"ios\" (click)=\"toggleFiltro()\">CERRAR</ion-button>\n\n            <ion-button color=\"warning\" shape=\"round\" mode=\"ios\" (click)=\"filtrar()\">BUSCAR</ion-button>\n\n        </div>\n    </div>\n\n\n\n    <div class=\"buscar\">\n        <ion-searchbar mode=\"ios\" placeholder=\"Buscar Productos\" (ionChange)=\"buscarProducto( $event );\"></ion-searchbar>\n    </div>\n\n    <div class=\"divider verdeo\">\n        CANTIDAD DE SALIDAS <strong> {{ salidas.length }}</strong>\n    </div>\n\n\n</ion-header>\n\n<ion-content #contenido *ngIf=\"carga\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n\n\n\n    <div class=\"divider light\"></div>\n\n    <div class=\"divider\"></div>\n\n    <div class=\"cen\" *ngIf=\"salidas.length === 0\">\n        <img src=\"/assets/Salidas.png\" width=\"100px\" alt=\"\">\n        <h3 class=\"tituloGrande\">No tiene salidas registrados</h3>\n    </div>\n\n    <div class=\"carga\" *ngIf=\"load\">\n        <ion-list>\n            <ion-item *ngFor=\"let e of [1,1,1,1,1]\">\n                <ion-skeleton-text slot=\"start\" animated style=\"width: 50px; height: 50px\"></ion-skeleton-text>\n                <ion-label>\n                    <ion-skeleton-text animated style=\"width: 50%; height: 20px\"></ion-skeleton-text>\n                    <ion-skeleton-text animated style=\"width: 90%; height: 20px\"></ion-skeleton-text>\n                </ion-label>\n            </ion-item>\n        </ion-list>\n\n    </div>\n    <ion-list *ngIf=\"salidas.length > 0\">\n\n        <ion-item-sliding *ngFor=\"let salida of salidas; let i = index;\">\n            <ion-item>\n                <ion-avatar slot=\"start\">\n                    <img src=\"/assets/Salidas.png\" width=\"100%\" heigth=\"100%\">\n                </ion-avatar>\n\n                <ion-label class=\"ion-text-wrap\">\n                    <div class=\"titulo\">{{ salida.producto.nombre}}</div>\n                    <div class=\"info\">\n                        <br>\n                        <strong class=\"flexbet\">Cantidad: <span class=\"verdei\">{{ salida.cantidad }}</span></strong>\n                        <strong class=\"flexbet\">Precio Unitario: <span class=\"verdei\">${{ salida.precio | decimales: 'es-CO' }}</span></strong>\n                        <strong class=\"flexbet\">Costo Total : <span class=\"verdei\"> ${{ salida.total | decimales: 'es-CO' }}</span></strong> <br>\n\n                        <strong class=\"flexbet\">Creador: <span class=\"rojoi\">{{ salida.creador.nombrecompleto}}</span></strong>\n                        <strong class=\"flexbet\">Fecha: <span class=\"amarilloi\">{{ salida.fecha | cambioUTC}}</span></strong>\n                    </div>\n                </ion-label>\n\n            </ion-item>\n\n            <ion-item-options side=\"end\">\n                <ion-item-option color=\"warning\" (click)=\"editar( salida )\">\n                    <ion-icon slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n                </ion-item-option>\n\n                <ion-item-option color=\"danger\" (click)=\"eliminar( salida, i )\">\n                    <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                </ion-item-option>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n\n\n    <ion-infinite-scroll *ngIf=\"carga\" #inifinito threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando salidas...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button color=\"success\" (click)=\"modal()\">\n            <ion-icon name=\"add-outline\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>");

/***/ }),

/***/ "HXfc":
/*!*******************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivtsalidas/ivtsalidas.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cen {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.tituloGrande {\n  width: 300px;\n  text-align: center;\n}\n\n.verdei {\n  color: #1E8C4A;\n}\n\nion-item-divider {\n  border: 0px !important;\n  margin-bottom: 15px;\n}\n\n.rojoi {\n  color: #C1302C;\n}\n\n.amarilloi {\n  color: #aaaaaa;\n}\n\n.flexbet {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.btns {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.verdeo {\n  background-color: #FEF4C5;\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaXZ0c2FsaWRhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJpdnRzYWxpZGFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGl0dWxvR3JhbmRlIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnZlcmRlaSB7XHJcbiAgICBjb2xvcjogIzFFOEM0QTtcclxufVxyXG5cclxuaW9uLWl0ZW0tZGl2aWRlciB7XHJcbiAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnJvam9pIHtcclxuICAgIGNvbG9yOiAjQzEzMDJDO1xyXG59XHJcblxyXG4uYW1hcmlsbG9pIHtcclxuICAgIGNvbG9yOiAjYWFhYWFhO1xyXG59XHJcblxyXG4uZmxleGJldCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi52ZXJkZW8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRjRDNTtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG59Il19 */");

/***/ }),

/***/ "auHn":
/*!***************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivtsalidas/ivtsalidas-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: IVTsalidasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IVTsalidasPageRoutingModule", function() { return IVTsalidasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ivtsalidas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ivtsalidas.page */ "5Pmk");




const routes = [
    {
        path: '',
        component: _ivtsalidas_page__WEBPACK_IMPORTED_MODULE_3__["IVTsalidasPage"]
    }
];
let IVTsalidasPageRoutingModule = class IVTsalidasPageRoutingModule {
};
IVTsalidasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IVTsalidasPageRoutingModule);



/***/ }),

/***/ "sUzL":
/*!*******************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivtsalidas/ivtsalidas.module.ts ***!
  \*******************************************************************/
/*! exports provided: IVTsalidasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IVTsalidasPageModule", function() { return IVTsalidasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ivtsalidas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ivtsalidas-routing.module */ "auHn");
/* harmony import */ var _ivtsalidas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ivtsalidas.page */ "5Pmk");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _ivt_modal_ivt_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ivt-modal/ivt-modal.module */ "5Wwd");
/* harmony import */ var _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ivt-modal/ivt-modal.page */ "SQQW");










let IVTsalidasPageModule = class IVTsalidasPageModule {
};
IVTsalidasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_9__["IvtModalPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ivtsalidas_routing_module__WEBPACK_IMPORTED_MODULE_5__["IVTsalidasPageRoutingModule"],
            _ivt_modal_ivt_modal_module__WEBPACK_IMPORTED_MODULE_8__["IvtModalPageModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_ivtsalidas_page__WEBPACK_IMPORTED_MODULE_6__["IVTsalidasPage"]]
    })
], IVTsalidasPageModule);



/***/ })

}]);
//# sourceMappingURL=Inventarios-ivtsalidas-ivtsalidas-module.js.map