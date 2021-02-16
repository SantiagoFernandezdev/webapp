(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Inventarios-ivtproductos-ivtproductos-module"],{

/***/ "8F+8":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivtproductos/ivtproductos-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: IVTproductosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IVTproductosPageRoutingModule", function() { return IVTproductosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ivtproductos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ivtproductos.page */ "l5Si");




const routes = [
    {
        path: '',
        component: _ivtproductos_page__WEBPACK_IMPORTED_MODULE_3__["IVTproductosPage"]
    }
];
let IVTproductosPageRoutingModule = class IVTproductosPageRoutingModule {
};
IVTproductosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IVTproductosPageRoutingModule);



/***/ }),

/***/ "UDhn":
/*!***********************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivtproductos/ivtproductos.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cen {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.tituloGrande {\n  width: 300px;\n  text-align: center;\n}\n\n.verdei {\n  color: #1E8C4A;\n}\n\nion-item-divider {\n  border: 0px !important;\n  margin-bottom: 15px;\n}\n\n.rojoi {\n  color: #C1302C;\n}\n\nion-item-sliding:nth-child(odd) ion-item {\n  --background: var(--ion-color-light) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaXZ0cHJvZHVjdG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLCtDQUFBO0FBQ0oiLCJmaWxlIjoiaXZ0cHJvZHVjdG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGl0dWxvR3JhbmRlIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnZlcmRlaSB7XHJcbiAgICBjb2xvcjogIzFFOEM0QTtcclxufVxyXG5cclxuaW9uLWl0ZW0tZGl2aWRlciB7XHJcbiAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnJvam9pIHtcclxuICAgIGNvbG9yOiAjQzEzMDJDO1xyXG59XHJcblxyXG5pb24taXRlbS1zbGlkaW5nOm50aC1jaGlsZChvZGQpIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "l5Si":
/*!*********************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivtproductos/ivtproductos.page.ts ***!
  \*********************************************************************/
/*! exports provided: IVTproductosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IVTproductosPage", function() { return IVTproductosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ivtproductos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ivtproductos.page.html */ "lJ8+");
/* harmony import */ var _ivtproductos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ivtproductos.page.scss */ "UDhn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var src_app_providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/Api/Inventarios.service */ "5yQV");
/* harmony import */ var src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ivt-modal/ivt-modal.page */ "SQQW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");










let IVTproductosPage = class IVTproductosPage {
    constructor(modalCtrl, almacenamiento, ivtApi, toast, alertCtrl, ActiveRouter) {
        this.modalCtrl = modalCtrl;
        this.almacenamiento = almacenamiento;
        this.ivtApi = ivtApi;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.ActiveRouter = ActiveRouter;
        this.productos = [];
        this.load = false;
        this.patron = '';
        this.desde = 0;
        this.seleccion = 'Todos';
        this.mensaje = 'No hay productos registrados';
        this.prod = true;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (this.ActiveRouter.snapshot.paramMap.get('modal') === 'agotados') {
            this.seleccion = 'Agotados';
            this.cargarProductosAgotados();
        }
        else if (this.ActiveRouter.snapshot.paramMap.get('modal') === 'proximos') {
            this.seleccion = 'Próximos en agotarse';
            this.cargarProductosProximos();
        }
        else {
            this.cargarProductos();
        }
    }
    refrescando(event) {
        this.cargarProductos().then(() => {
            event.target.complete();
        }).catch(() => event.target.complete());
    }
    cargarProductos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.desde = 0;
            if (this.load) {
                this.infinite.disabled = false;
            }
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.ivtApi.leerProducto(info.token, { desde: this.desde, id: this.ActiveRouter.snapshot.paramMap.get('id') }).subscribe((data) => {
                    if (data.exe) {
                        this.productos = data.response;
                    }
                    else {
                        this.toast.toastError('No se pudo cargar los datos, intentelo más tarde');
                    }
                    this.load = true;
                }, (err) => {
                    this.toast.toastError('No se pudo cargar los datos, intentelo más tarde');
                });
            }
        });
    }
    modal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_8__["IvtModalPage"],
                componentProps: {
                    tipo: 'productos',
                    inventario: this.ActiveRouter.snapshot.paramMap.get('id')
                },
            });
            yield modal.present();
            const cerrado = yield modal.onWillDismiss();
            if (cerrado.data) {
                if (cerrado.data.exe) {
                    this.cargarProductos();
                }
            }
        });
    }
    editar(producto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_8__["IvtModalPage"],
                componentProps: {
                    tipo: 'editarproductos',
                    producto
                },
            });
            yield modal.present();
            const cerrado = yield modal.onWillDismiss();
            if (cerrado.data) {
                if (cerrado.data.exe) {
                    this.cargarProductos();
                }
            }
        });
    }
    eliminar(producto, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                const alert = yield this.alertCtrl.create({
                    header: `Eliminar Producto: ${producto.nombre}`,
                    buttons: [
                        {
                            role: 'cancel',
                            text: 'Cancelar'
                        },
                        {
                            text: 'Eliminar',
                            cssClass: 'rojoi',
                            handler: () => {
                                // tslint:disable-next-line:max-line-length
                                this.ivtApi.eliminarProducto(info.token, producto._id).subscribe((res) => {
                                    if (res.exe) {
                                        this.toast.toastExitoso('Producto eliminado!');
                                        this.productos.splice(i, 1);
                                    }
                                    else {
                                        this.toast.toastError('No se pudo eliminar el producto, intentelo más tarde');
                                    }
                                }, (err) => {
                                    this.toast.toastError('No se pudo eliminar el proveedor, intentelo más tarde');
                                });
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    buscar(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(event.detail, 'epale');
            if (event.detail.value !== '') {
                this.desde = 0;
                this.infinite.disabled = false;
                this.patron = event.detail.value;
                const info = yield this.almacenamiento.obtenerToken();
                if (info) {
                    this.ivtApi.leerProducto(info.token, { desde: this.desde, id: this.ActiveRouter.snapshot.paramMap.get('id'), patron: this.patron }).subscribe((data) => {
                        // console.log(data, 'mi data');
                        if (data.exe) {
                            this.productos = data.response;
                            if (data.response.length === 0) {
                                this.desde = 0;
                            }
                        }
                        else {
                            this.toast.toastError('No se pudo realizar la búsqueda, intentelo más tarde');
                        }
                    }, (err) => {
                        this.toast.toastError('No se pudo realizar la búsqueda, intentelo más tarde');
                    });
                }
            }
            else {
                this.desde = 0;
                // console.log(this.infinite.disabled)
                this.cargarProductos();
            }
        });
    }
    loadData(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // event.target.complete()
            this.desde = this.desde + 5;
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                if (this.patron === '') {
                    this.ivtApi.leerProducto(info.token, { desde: this.desde, id: this.ActiveRouter.snapshot.paramMap.get('id') }).subscribe((data) => {
                        // console.log(data);
                        if (data.exe) {
                            if (data.response.length > 0) {
                                data.response.forEach((hoja) => {
                                    this.productos.push(hoja);
                                });
                                event.target.complete();
                            }
                            else {
                                event.target.disabled = true;
                                this.desde = 0;
                            }
                        }
                        else {
                            this.toast.toastError('No se pudo traer las hojas de vida, inténtelo más tarde.');
                        }
                    }, (err) => {
                        this.toast.toastError('No se pudo traer las hojas de vida, inténtelo más tarde.');
                    });
                }
                else {
                    // tslint:disable-next-line:max-line-length
                    // console.log(this.desde, 'pli');
                    this.ivtApi.leerProducto(info.token, { desde: this.desde, id: this.ActiveRouter.snapshot.paramMap.get('id') }).subscribe((data) => {
                        // console.log(data, 'mi data 2', this.desde);
                        if (data.exe) {
                            if (data.response.length > 0) {
                                data.response.forEach((hoja) => {
                                    this.productos.push(hoja);
                                });
                                event.target.complete();
                            }
                            else {
                                event.target.disabled = true;
                                this.desde = 0;
                            }
                        }
                        else {
                            this.toast.toastError('No se pudo realizar la búsqueda, intentelo más tarde');
                        }
                    }, (err) => {
                        this.toast.toastError('No se pudo realizar la búsqueda, intentelo más tarde');
                    });
                }
            }
        });
    }
    cambioFiltro(event) {
        this.seleccion = event.detail.value;
        if (this.seleccion === 'Todos') {
            this.prod = true;
            this.cargarProductos();
        }
        else if (this.seleccion === 'Agotados') {
            this.prod = false;
            this.cargarProductosAgotados();
        }
        else if (this.seleccion === 'Próximos en agotarse') {
            this.prod = false;
            this.cargarProductosProximos();
        }
    }
    cargarProductosAgotados() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.ivtApi.leerAgotados(info.token, { _id: this.ActiveRouter.snapshot.paramMap.get('id') }).subscribe((data) => {
                    // console.log(data);
                    if (data.exe) {
                        if (data.response.length === 0) {
                            this.mensaje = 'No hay productos agotados';
                        }
                        this.productos = data.response;
                    }
                    else {
                        this.toast.toastError('No se pudo cargar los datos, intentelo más tarde');
                    }
                    this.load = true;
                }, (err) => {
                    this.toast.toastError('No se pudo cargar los datos, intentelo más tarde');
                });
            }
        });
    }
    cargarProductosProximos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.ivtApi.leerProximos(info.token, { _id: this.ActiveRouter.snapshot.paramMap.get('id') }).subscribe((data) => {
                    if (data.exe) {
                        if (data.response.length === 0) {
                            this.mensaje = 'No hay productos próximos para agotarse';
                        }
                        this.productos = data.response;
                    }
                    else {
                        this.toast.toastError('No se pudo cargar los datos v2, intentelo más tarde');
                    }
                    this.load = true;
                }, (err) => {
                    this.toast.toastError('No se pudo cargar los datos, intentelo más tarde');
                });
            }
        });
    }
};
IVTproductosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"] },
    { type: src_app_providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_6__["InventariosService"] },
    { type: src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__["ToastServices"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }
];
IVTproductosPage.propDecorators = {
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['inifinito', { static: false },] }]
};
IVTproductosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ivtproductos',
        template: _raw_loader_ivtproductos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ivtproductos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IVTproductosPage);



/***/ }),

/***/ "lJ8+":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Inventarios/ivtproductos/ivtproductos.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"success\">\n\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"/central/menu/ivt-inicio\"></ion-back-button>\n        </ion-buttons>\n\n        <ion-title>Productos </ion-title>\n\n        <ion-select slot=\"end\" [value]=\"seleccion\" interface=\"popover\" (ionChange)=\"cambioFiltro( $event )\">\n            <ion-select-option value=\"Todos\">Todos</ion-select-option>\n            <ion-select-option value=\"Agotados\">Agotados</ion-select-option>\n            <ion-select-option value=\"Próximos en agotarse\">Próximos en agotarse</ion-select-option>\n\n        </ion-select>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-searchbar *ngIf=\"prod\" debounce=\"300\" mode=\"ios\" placeholder=\"Buscar Productos\" (ionChange)=\"buscar($event)\"></ion-searchbar>\n\n    <div class=\"divider light\"></div>\n\n    <div class=\"divider\"></div>\n\n    <div class=\"cen\" *ngIf=\"productos.length === 0 && load\">\n        <img src=\"/assets/Productos.png\" width=\"100px\" alt=\"\">\n        <h3 class=\"tituloGrande\">{{mensaje}}</h3>\n    </div>\n\n    <div class=\"carga\" *ngIf=\"!load\">\n        <ion-list>\n            <ion-item *ngFor=\"let e of [1,1,1,1,1]\">\n                <ion-skeleton-text slot=\"start\" animated style=\"width: 50px; height: 50px\"></ion-skeleton-text>\n                <ion-label>\n                    <ion-skeleton-text animated style=\"width: 50%; height: 20px\"></ion-skeleton-text>\n                    <ion-skeleton-text animated style=\"width: 90%; height: 20px\"></ion-skeleton-text>\n                </ion-label>\n            </ion-item>\n        </ion-list>\n\n    </div>\n    <ion-list *ngIf=\"productos.length > 0\">\n        <ion-item-sliding *ngFor=\"let producto of productos; let i = index;\">\n            <ion-item lines=\"none\">\n                <ion-avatar slot=\"start\">\n                    <img src=\"/assets/Productos.png\" width=\"100%\" heigth=\"100%\">\n                </ion-avatar>\n\n                <ion-label>\n                    <div>{{producto.nombre}}</div>\n                    <div *ngIf=\"producto.codigo\"><strong>Código: </strong> {{producto.codigo}}</div>\n\n\n                    <div><strong>Categoria: </strong> <strong class=\"rojoi\">{{ producto.categoria }}</strong></div>\n\n                    <div class=\"flexbet\"><strong>Existencia:  <span class=\"verdei\">{{ producto.existencia }}</span></strong>\n                        <ion-chip color=\"success\" *ngIf=\"producto.existencia > producto.limite\">AL DIA</ion-chip>\n                        <ion-chip color=\"warning\" *ngIf=\"producto.existencia <= producto.limite && producto.existencia > 0\">SE ESTÁ AGOTANDO</ion-chip>\n                        <ion-chip color=\"danger\" *ngIf=\"producto.existencia === 0\">PRODUCTO AGOTADO</ion-chip>\n                    </div>\n                </ion-label>\n            </ion-item>\n\n            <ion-item-options side=\"end\">\n                <ion-item-option color=\"warning\" (click)=\"editar( producto )\">\n                    <ion-icon slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n                </ion-item-option>\n\n                <ion-item-option color=\"danger\" (click)=\"eliminar( producto, i )\">\n                    <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                </ion-item-option>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n\n    <ion-infinite-scroll *ngIf=\"load\" #inifinito threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando Hojas de Vida...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button color=\"success\" (click)=\"modal()\">\n            <ion-icon name=\"add-outline\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>");

/***/ }),

/***/ "t8Hx":
/*!***********************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivtproductos/ivtproductos.module.ts ***!
  \***********************************************************************/
/*! exports provided: IVTproductosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IVTproductosPageModule", function() { return IVTproductosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ivtproductos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ivtproductos-routing.module */ "8F+8");
/* harmony import */ var _ivtproductos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ivtproductos.page */ "l5Si");







let IVTproductosPageModule = class IVTproductosPageModule {
};
IVTproductosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ivtproductos_routing_module__WEBPACK_IMPORTED_MODULE_5__["IVTproductosPageRoutingModule"]
        ],
        declarations: [_ivtproductos_page__WEBPACK_IMPORTED_MODULE_6__["IVTproductosPage"]]
    })
], IVTproductosPageModule);



/***/ })

}]);
//# sourceMappingURL=Inventarios-ivtproductos-ivtproductos-module.js.map