(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Inventarios-ivtproveedores-ivtproveedores-module"],{

/***/ "/vIQ":
/*!*************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivtproveedores/ivtproveedores.page.ts ***!
  \*************************************************************************/
/*! exports provided: IVTProveedoresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IVTProveedoresPage", function() { return IVTProveedoresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ivtproveedores_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ivtproveedores.page.html */ "qwh4");
/* harmony import */ var _ivtproveedores_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ivtproveedores.page.scss */ "4v5z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Api/Inventarios.service */ "5yQV");
/* harmony import */ var _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ivt-modal/ivt-modal.page */ "SQQW");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");











let IVTProveedoresPage = class IVTProveedoresPage {
    constructor(modalCtrl, almacenamiento, ivtApi, toast, alertCtrl, activeRoute) {
        this.modalCtrl = modalCtrl;
        this.almacenamiento = almacenamiento;
        this.ivtApi = ivtApi;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.activeRoute = activeRoute;
        this.proveedores = [];
        this.load = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.cargarProveedores();
    }
    refrescando(event) {
        this.cargarProveedores().then(() => {
            event.target.complete();
        }).catch(() => event.target.complete());
    }
    cargarProveedores() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.ivtApi.leerProveedor(info.token, this.activeRoute.snapshot.paramMap.get('id')).subscribe((data) => {
                    if (data.exe) {
                        this.proveedores = data.response;
                    }
                    else {
                        this.toast.toastError('No se pudo cargar los datos, intentelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo cargar los datos, intentelo más tarde');
                });
            }
        });
    }
    modal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_7__["IvtModalPage"],
                componentProps: {
                    tipo: 'proveedores',
                    inventario: this.activeRoute.snapshot.paramMap.get('id')
                },
            });
            yield modal.present();
            const cerrado = yield modal.onWillDismiss();
            if (cerrado.data) {
                if (cerrado.data.exe) {
                    this.cargarProveedores();
                }
            }
        });
    }
    editar(proveedor, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Editar Proveedor',
                inputs: [
                    {
                        type: 'text',
                        name: 'nombre',
                        placeholder: 'Escriba el nombre del proveedor',
                        value: proveedor.nombre
                    },
                    {
                        type: 'number',
                        name: 'tel1',
                        placeholder: 'Teléfono de contacto',
                        value: proveedor.telefono
                    },
                    {
                        type: 'number',
                        name: 'tel2',
                        placeholder: 'Teléfono de contacto adicional',
                        value: proveedor.telefono2
                    },
                    {
                        type: 'text',
                        name: 'correo',
                        placeholder: 'Correo electrónico de contacto',
                        value: proveedor.correo
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel'
                    },
                    {
                        text: 'Aceptar',
                        handler: (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const info = yield this.almacenamiento.obtenerToken();
                            if (info) {
                                // tslint:disable-next-line:max-line-length
                                this.ivtApi.editarProveedor(info.token, { nombre: data.nombre, tel1: data.tel1, tel2: data.tel2, correo: data.correo, _id: proveedor._id }).subscribe((res) => {
                                    if (res.exe) {
                                        this.toast.toastExitoso('Proveedor editado!');
                                        this.proveedores[i].nombre = res.response.nombre;
                                        this.proveedores[i].telefono = res.response.telefono;
                                        this.proveedores[i].telefono2 = res.response.telefono2;
                                        this.proveedores[i].correo = res.response.correo;
                                    }
                                    else {
                                        this.toast.toastError('No se pudo editar el proveedor, intentelo más tarde');
                                    }
                                }, (err) => {
                                    this.toast.toastError('No se pudo editar el proveedor, intentelo más tarde');
                                });
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    eliminar(proveedor, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                // tslint:disable-next-line:max-line-length
                this.ivtApi.eliminarProveedor(info.token, proveedor._id).subscribe((res) => {
                    if (res.exe) {
                        this.toast.toastExitoso('Proveedor eliminado!');
                        this.proveedores.splice(i, 1);
                    }
                    else {
                        this.toast.toastError('No se pudo eliminar el proveedor, intentelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo eliminar el proveedor, intentelo más tarde');
                });
            }
        });
    }
};
IVTProveedoresPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"] },
    { type: _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_6__["InventariosService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_8__["ToastServices"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }
];
IVTProveedoresPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ivtproveedores',
        template: _raw_loader_ivtproveedores_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('salida', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
                        transform: 'scale(1)',
                        opacity: 1
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
                        transform: 'scale(0)',
                        opacity: 0
                    }))
                ])
            ])
        ],
        styles: [_ivtproveedores_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IVTProveedoresPage);



/***/ }),

/***/ "4v5z":
/*!***************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivtproveedores/ivtproveedores.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cen {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.tituloGrande {\n  width: 300px;\n  text-align: center;\n}\n\n.verdei {\n  color: #1E8C4A;\n}\n\nion-item-divider {\n  border: 0px !important;\n  margin-bottom: 15px;\n}\n\n.rojoi {\n  color: #C1302C;\n}\n\n.padreflex {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.numero {\n  display: flex;\n  align-items: center;\n  padding-right: 10px;\n}\n\nion-item-sliding:nth-child(odd) ion-item {\n  --background: var(--ion-color-light) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaXZ0cHJvdmVlZG9yZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksK0NBQUE7QUFDSiIsImZpbGUiOiJpdnRwcm92ZWVkb3Jlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdHVsb0dyYW5kZSB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi52ZXJkZWkge1xyXG4gICAgY29sb3I6ICMxRThDNEE7XHJcbn1cclxuXHJcbmlvbi1pdGVtLWRpdmlkZXIge1xyXG4gICAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5yb2pvaSB7XHJcbiAgICBjb2xvcjogI0MxMzAyQztcclxufVxyXG5cclxuLnBhZHJlZmxleCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubnVtZXJvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuaW9uLWl0ZW0tc2xpZGluZzpudGgtY2hpbGQob2RkKSBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "7jEE":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivtproveedores/ivtproveedores-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: IVTProveedoresPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IVTProveedoresPageRoutingModule", function() { return IVTProveedoresPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ivtproveedores_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ivtproveedores.page */ "/vIQ");




const routes = [
    {
        path: '',
        component: _ivtproveedores_page__WEBPACK_IMPORTED_MODULE_3__["IVTProveedoresPage"]
    }
];
let IVTProveedoresPageRoutingModule = class IVTProveedoresPageRoutingModule {
};
IVTProveedoresPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IVTProveedoresPageRoutingModule);



/***/ }),

/***/ "PlGv":
/*!***************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivtproveedores/ivtproveedores.module.ts ***!
  \***************************************************************************/
/*! exports provided: IVTProveedoresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IVTProveedoresPageModule", function() { return IVTProveedoresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ivtproveedores_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ivtproveedores-routing.module */ "7jEE");
/* harmony import */ var _ivtproveedores_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ivtproveedores.page */ "/vIQ");
/* harmony import */ var _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ivt-modal/ivt-modal.page */ "SQQW");
/* harmony import */ var _ivt_modal_ivt_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ivt-modal/ivt-modal.module */ "5Wwd");









let IVTProveedoresPageModule = class IVTProveedoresPageModule {
};
IVTProveedoresPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_7__["IvtModalPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ivtproveedores_routing_module__WEBPACK_IMPORTED_MODULE_5__["IVTProveedoresPageRoutingModule"],
            _ivt_modal_ivt_modal_module__WEBPACK_IMPORTED_MODULE_8__["IvtModalPageModule"]
        ],
        declarations: [_ivtproveedores_page__WEBPACK_IMPORTED_MODULE_6__["IVTProveedoresPage"]]
    })
], IVTProveedoresPageModule);



/***/ }),

/***/ "qwh4":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Inventarios/ivtproveedores/ivtproveedores.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"success\">\n\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"/central/menu/ivt-inicio\"></ion-back-button>\n        </ion-buttons>\n\n        <ion-title>Proveedores</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-searchbar mode=\"ios\" placeholder=\"Buscar Proveedor\"></ion-searchbar>\n\n\n\n    <div class=\"divider light\"></div>\n\n    <div class=\"divider\"></div>\n\n    <div class=\"cen\" *ngIf=\"proveedores.length === 0\">\n        <img src=\"/assets/Proveedores.png\" width=\"100px\" alt=\"\">\n        <h3 class=\"tituloGrande\">No tiene proveedores registrados</h3>\n    </div>\n\n    <div class=\"carga\" *ngIf=\"load\">\n        <ion-list>\n            <ion-item *ngFor=\"let e of [1,1,1,1,1]\">\n                <ion-skeleton-text slot=\"start\" animated style=\"width: 50px; height: 50px\"></ion-skeleton-text>\n                <ion-label>\n                    <ion-skeleton-text animated style=\"width: 50%; height: 20px\"></ion-skeleton-text>\n                    <ion-skeleton-text animated style=\"width: 90%; height: 20px\"></ion-skeleton-text>\n                </ion-label>\n            </ion-item>\n        </ion-list>\n\n    </div>\n\n\n    <ion-list *ngIf=\"proveedores.length > 0\">\n\n        <ion-item-sliding @salida *ngFor=\"let proveedor of proveedores; let i = index\">\n            <ion-item>\n                <ion-avatar slot=\"start\">\n                    <img src=\"/assets/Proveedores.png\">\n                </ion-avatar>\n\n                <ion-label>\n                    {{proveedor.nombre}} <br>\n                    <strong class=\"verdei\">{{proveedor.telefono}} </strong>\n                    <strong *ngIf=\"proveedor.telefono2 !== ''\" class=\"verdei\"> - {{proveedor.telefono2}} </strong> <br>\n                    <div class=\"rojoi\">{{ proveedor.correo }}</div>\n                </ion-label>\n            </ion-item>\n\n            <ion-item-options side=\"end\">\n                <ion-item-option color=\"warning\" (click)=\"editar( proveedor, i )\">\n                    <ion-icon name=\"pencil-outline\" slot=\"icon-only\"></ion-icon>\n                </ion-item-option>\n\n                <ion-item-option color=\"danger\" (click)=\"eliminar( proveedor, i )\">\n                    <ion-icon name=\"trash-outline\" slot=\"icon-only\"></ion-icon>\n                </ion-item-option>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button color=\"success\" (click)=\"modal()\">\n            <ion-icon name=\"add-outline\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=Inventarios-ivtproveedores-ivtproveedores-module.js.map