(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Inventarios-ivt-inicio-ivt-inicio-module"],{

/***/ "0PeK":
/*!***************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-inicio/ivt-inicio-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: IvtInicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvtInicioPageRoutingModule", function() { return IvtInicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ivt_inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ivt-inicio.page */ "Sh0t");




const routes = [
    {
        path: '',
        component: _ivt_inicio_page__WEBPACK_IMPORTED_MODULE_3__["IvtInicioPage"]
    }
];
let IvtInicioPageRoutingModule = class IvtInicioPageRoutingModule {
};
IvtInicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IvtInicioPageRoutingModule);



/***/ }),

/***/ "LXKQ":
/*!*******************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-inicio/ivt-inicio.module.ts ***!
  \*******************************************************************/
/*! exports provided: IvtInicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvtInicioPageModule", function() { return IvtInicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ivt_inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ivt-inicio-routing.module */ "0PeK");
/* harmony import */ var _ivt_inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ivt-inicio.page */ "Sh0t");
/* harmony import */ var _ivt_modal_ivt_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ivt-modal/ivt-modal.module */ "5Wwd");
/* harmony import */ var _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ivt-modal/ivt-modal.page */ "SQQW");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");










let IvtInicioPageModule = class IvtInicioPageModule {
};
IvtInicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_8__["IvtModalPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ivt_inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["IvtInicioPageRoutingModule"],
            _ivt_modal_ivt_modal_module__WEBPACK_IMPORTED_MODULE_7__["IvtModalPageModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"]
        ],
        declarations: [_ivt_inicio_page__WEBPACK_IMPORTED_MODULE_6__["IvtInicioPage"]]
    })
], IvtInicioPageModule);



/***/ }),

/***/ "Sh0t":
/*!*****************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-inicio/ivt-inicio.page.ts ***!
  \*****************************************************************/
/*! exports provided: IvtInicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvtInicioPage", function() { return IvtInicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ivt_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ivt-inicio.page.html */ "x5fD");
/* harmony import */ var _ivt_inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ivt-inicio.page.scss */ "tQQD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ivt-modal/ivt-modal.page */ "SQQW");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/Api/Inventarios.service */ "5yQV");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");











let IvtInicioPage = class IvtInicioPage {
    constructor(modalCtrl, almacenamiento, ivtApi, toast, statusbar, router) {
        this.modalCtrl = modalCtrl;
        this.almacenamiento = almacenamiento;
        this.ivtApi = ivtApi;
        this.toast = toast;
        this.statusbar = statusbar;
        this.router = router;
        this.load = false;
        this.ivts = [];
        this.role = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.cargar();
    }
    refrescando(event) {
        this.cargar().then(() => {
            event.target.complete();
        }).catch(() => event.target.complete());
    }
    cargar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.statusbar.backgroundColorByHexString('#1E8C4A');
            this.load = true;
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.role = info.role;
                this.ivtApi.leerInventarios(info.token).subscribe((data) => {
                    if (data.exe) {
                        // console.log(data.response);
                        this.ivts = data.response;
                    }
                    else {
                        this.toast.toastError('No se pudo crear el inventario, intentelo más tarde');
                    }
                    this.load = false;
                }, (err) => {
                    this.toast.toastError('No se pudo crear el inventario, intentelo más tarde');
                    this.load = false;
                });
            }
        });
    }
    crearInventario() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _ivt_modal_ivt_modal_page__WEBPACK_IMPORTED_MODULE_5__["IvtModalPage"],
                componentProps: {
                    tipo: 'crear'
                }
            });
            yield modal.present();
        });
    }
    inventario(ivt) {
        this.router.navigate(['/central/menu/ivt-miinventario', ivt._id]);
    }
};
IvtInicioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__["InicioService"] },
    { type: _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_7__["InventariosService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_8__["ToastServices"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
];
IvtInicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ivt-inicio',
        template: _raw_loader_ivt_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ivt_inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IvtInicioPage);



/***/ }),

/***/ "tQQD":
/*!*******************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-inicio/ivt-inicio.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tituloGrande {\n  margin: 50px auto;\n  opacity: 0.5;\n  text-align: center;\n  width: 300px;\n}\n\nion-card-title {\n  padding: 5px 10px;\n}\n\n.info {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.verdei {\n  color: #1E8C4A;\n}\n\n.rojoi {\n  color: #C1302C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaXZ0LWluaWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoiaXZ0LWluaWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxvR3JhbmRlIHtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi52ZXJkZWkge1xyXG4gICAgY29sb3I6ICMxRThDNEE7XHJcbn1cclxuXHJcbi5yb2pvaSB7XHJcbiAgICBjb2xvcjogI0MxMzAyQztcclxufSJdfQ== */");

/***/ }),

/***/ "x5fD":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Inventarios/ivt-inicio/ivt-inicio.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"success\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"/central/menu\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Inventarios</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <div class=\"msg\" *ngIf=\"!load && ivts.length === 0\">\n        <h3 class=\"tituloGrande\">No tiene inventarios creados.</h3>\n    </div>\n\n    <div *ngIf=\"load\">\n        <ion-card>\n            <ion-skeleton-text animated style=\"width: 100%; height: 30px;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 100%; height: 150px;\"></ion-skeleton-text>\n\n        </ion-card>\n\n    </div>\n    <ion-list *ngIf=\"ivts.length > 0\">\n        <ion-card mode=\"ios\" *ngFor=\"let ivt of ivts\" (click)=\"inventario( ivt )\">\n            <ion-card-title>\n                {{ ivt.name }}\n            </ion-card-title>\n            <ion-card-content>\n\n                <div class=\"info\">\n                    <h4>Participantes</h4>\n                    <strong class=\"rojoi\">{{ ivt.accesos.length }}</strong>\n                </div>\n\n                <div class=\"info\">\n                    <h4>Fecha de Creado</h4>\n                    <strong class=\"verdei\">{{ ivt.fecha | cambioUTC }}</strong>\n                </div>\n            </ion-card-content>\n        </ion-card>\n    </ion-list>\n\n    <ion-fab *ngIf=\"role === 'TALLER_ROLE'\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button color=\"warning\" (click)=\"crearInventario()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=Inventarios-ivt-inicio-ivt-inicio-module.js.map