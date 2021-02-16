(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Inventarios-ivtcategorias-ivtcategorias-module"],{

/***/ "EzIU":
/*!***********************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivtcategorias/ivtcategorias.page.ts ***!
  \***********************************************************************/
/*! exports provided: IVTcategoriasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IVTcategoriasPage", function() { return IVTcategoriasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ivtcategorias_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ivtcategorias.page.html */ "PysL");
/* harmony import */ var _ivtcategorias_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ivtcategorias.page.scss */ "tRb9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/Api/Inventarios.service */ "5yQV");
/* harmony import */ var src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ivt-modal/ivt-modal.page */ "SQQW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");










let IVTcategoriasPage = class IVTcategoriasPage {
    constructor(modalCtrl, almacenamiento, ivtApi, toast, alertCtrl, activeRoute) {
        this.modalCtrl = modalCtrl;
        this.almacenamiento = almacenamiento;
        this.ivtApi = ivtApi;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.activeRoute = activeRoute;
        this.categorias = [];
        this.load = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.cargarCategorias();
    }
    refrescando(event) {
        this.cargarCategorias().then(() => {
            event.target.complete();
        }).catch(() => event.target.complete());
    }
    cargarCategorias() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.ivtApi.leerCategoria(info.token, this.activeRoute.snapshot.paramMap.get('id')).subscribe((data) => {
                    if (data.exe) {
                        this.categorias = data.response;
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
                component: _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_8__["IvtModalPage"],
                componentProps: {
                    tipo: 'categorias',
                    inventario: this.activeRoute.snapshot.paramMap.get('id')
                },
            });
            yield modal.present();
            const cerrado = yield modal.onWillDismiss();
            if (cerrado.data) {
                if (cerrado.data.exe) {
                    this.cargarCategorias();
                }
            }
        });
    }
    editar(categoria, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Editar Categoría',
                inputs: [
                    {
                        type: 'text',
                        name: 'nombre',
                        placeholder: 'Escriba el nombre de la categoría',
                        value: categoria.nombre
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
                                this.ivtApi.editarCategoria(info.token, { nombre: data.nombre, _id: categoria._id }).subscribe((res) => {
                                    if (res.exe) {
                                        this.toast.toastExitoso('Categoría editado!');
                                        this.categorias[i].nombre = res.response.nombre;
                                    }
                                    else {
                                        this.toast.toastError('No se pudo editar la categoría, intentelo más tarde');
                                    }
                                }, (err) => {
                                    this.toast.toastError('No se pudo editar la categoría, intentelo más tarde');
                                });
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    eliminar(categoria, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                // tslint:disable-next-line:max-line-length
                this.ivtApi.eliminarCategoria(info.token, categoria._id).subscribe((res) => {
                    if (res.exe) {
                        this.toast.toastExitoso('Categoría eliminada!');
                        this.categorias.splice(i, 1);
                    }
                    else {
                        this.toast.toastError('No se pudo eliminar la categoría, intentelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo eliminar la categoría, intentelo más tarde');
                });
            }
        });
    }
};
IVTcategoriasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"] },
    { type: src_app_providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_6__["InventariosService"] },
    { type: src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__["ToastServices"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }
];
IVTcategoriasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ivtcategorias',
        template: _raw_loader_ivtcategorias_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ivtcategorias_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IVTcategoriasPage);



/***/ }),

/***/ "Iaw7":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivtcategorias/ivtcategorias-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: IVTcategoriasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IVTcategoriasPageRoutingModule", function() { return IVTcategoriasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ivtcategorias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ivtcategorias.page */ "EzIU");




const routes = [
    {
        path: '',
        component: _ivtcategorias_page__WEBPACK_IMPORTED_MODULE_3__["IVTcategoriasPage"]
    }
];
let IVTcategoriasPageRoutingModule = class IVTcategoriasPageRoutingModule {
};
IVTcategoriasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IVTcategoriasPageRoutingModule);



/***/ }),

/***/ "PysL":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Inventarios/ivtcategorias/ivtcategorias.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"success\">\n\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"/central/menu/ivt-inicio\"></ion-back-button>\n        </ion-buttons>\n\n        <ion-title>Categorías</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-searchbar mode=\"ios\" placeholder=\"Buscar Categoría\"></ion-searchbar>\n\n\n\n    <div class=\"divider light\"></div>\n\n    <div class=\"divider\"></div>\n\n    <div class=\"cen\" *ngIf=\"categorias.length === 0\">\n        <img src=\"/assets/Categorias.png\" width=\"100px\" alt=\"\">\n        <h3 class=\"tituloGrande\">No tiene categorías registradas</h3>\n    </div>\n\n    <div class=\"carga\" *ngIf=\"load\">\n        <ion-list>\n            <ion-item *ngFor=\"let e of [1,1,1,1,1]\">\n                <ion-skeleton-text slot=\"start\" animated style=\"width: 50px; height: 50px\"></ion-skeleton-text>\n                <ion-label>\n                    <ion-skeleton-text animated style=\"width: 50%; height: 20px\"></ion-skeleton-text>\n                    <ion-skeleton-text animated style=\"width: 90%; height: 20px\"></ion-skeleton-text>\n                </ion-label>\n            </ion-item>\n        </ion-list>\n\n    </div>\n\n\n    <ion-list *ngIf=\"categorias.length > 0\">\n\n        <ion-item-sliding *ngFor=\"let categoria of categorias; let i = index\">\n            <ion-item>\n                <ion-avatar slot=\"start\">\n                    <img src=\"/assets/Categorias.png\">\n                </ion-avatar>\n\n                <ion-label>\n                    {{categoria.nombre}} <br>\n                </ion-label>\n            </ion-item>\n\n            <ion-item-options side=\"end\">\n                <ion-item-option color=\"warning\" (click)=\"editar( categoria, i )\">\n                    <ion-icon name=\"pencil-outline\" slot=\"icon-only\"></ion-icon>\n                </ion-item-option>\n\n                <ion-item-option color=\"danger\" (click)=\"eliminar( categoria, i )\">\n                    <ion-icon name=\"trash-outline\" slot=\"icon-only\"></ion-icon>\n                </ion-item-option>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button color=\"success\" (click)=\"modal()\">\n            <ion-icon name=\"add-outline\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>");

/***/ }),

/***/ "oaNa":
/*!*************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivtcategorias/ivtcategorias.module.ts ***!
  \*************************************************************************/
/*! exports provided: IVTcategoriasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IVTcategoriasPageModule", function() { return IVTcategoriasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ivtcategorias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ivtcategorias-routing.module */ "Iaw7");
/* harmony import */ var _ivtcategorias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ivtcategorias.page */ "EzIU");







let IVTcategoriasPageModule = class IVTcategoriasPageModule {
};
IVTcategoriasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ivtcategorias_routing_module__WEBPACK_IMPORTED_MODULE_5__["IVTcategoriasPageRoutingModule"]
        ],
        declarations: [_ivtcategorias_page__WEBPACK_IMPORTED_MODULE_6__["IVTcategoriasPage"]]
    })
], IVTcategoriasPageModule);



/***/ }),

/***/ "tRb9":
/*!*************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivtcategorias/ivtcategorias.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cen {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.tituloGrande {\n  width: 300px;\n  text-align: center;\n}\n\n.verdei {\n  color: #1E8C4A;\n}\n\nion-item-divider {\n  border: 0px !important;\n  margin-bottom: 15px;\n}\n\n.rojoi {\n  color: #C1302C;\n}\n\nion-item-sliding:nth-child(odd) ion-item {\n  --background: var(--ion-color-light) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaXZ0Y2F0ZWdvcmlhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQ0FBQTtBQUNKIiwiZmlsZSI6Iml2dGNhdGVnb3JpYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXR1bG9HcmFuZGUge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udmVyZGVpIHtcclxuICAgIGNvbG9yOiAjMUU4QzRBO1xyXG59XHJcblxyXG5pb24taXRlbS1kaXZpZGVyIHtcclxuICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ucm9qb2kge1xyXG4gICAgY29sb3I6ICNDMTMwMkM7XHJcbn1cclxuXHJcbmlvbi1pdGVtLXNsaWRpbmc6bnRoLWNoaWxkKG9kZCkgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=Inventarios-ivtcategorias-ivtcategorias-module.js.map