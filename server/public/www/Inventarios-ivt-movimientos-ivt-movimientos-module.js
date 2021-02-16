(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Inventarios-ivt-movimientos-ivt-movimientos-module"],{

/***/ "4YEd":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-movimientos/ivt-movimientos.module.ts ***!
  \*****************************************************************************/
/*! exports provided: IvtMovimientosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvtMovimientosPageModule", function() { return IvtMovimientosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ivt_movimientos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ivt-movimientos-routing.module */ "Jwl+");
/* harmony import */ var _ivt_movimientos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ivt-movimientos.page */ "rE/s");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");








let IvtMovimientosPageModule = class IvtMovimientosPageModule {
};
IvtMovimientosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ivt_movimientos_routing_module__WEBPACK_IMPORTED_MODULE_5__["IvtMovimientosPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_ivt_movimientos_page__WEBPACK_IMPORTED_MODULE_6__["IvtMovimientosPage"]]
    })
], IvtMovimientosPageModule);



/***/ }),

/***/ "BCI1":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Inventarios/ivt-movimientos/ivt-movimientos.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"success\">\n        <ion-back-button slot=\"start\" icon=\"chevron-back-outline\" defaultHref=\"/central/menu/ivt-inicio\"></ion-back-button>\n        <ion-title>Movimientos</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <h3 class=\"tituloGrande\" *ngIf=\"movimientos.length === 0\">No hay movimientos en el inventario</h3>\n    <ion-list class=\"blanco \" *ngIf=\"movimientos.length > 0\">\n        <ion-item mode=\"ios\" *ngFor=\"let movimiento of movimientos; let i = index;\">\n            <ion-avatar class=\"avatar\" slot=\"start\">\n                <ion-img src=\"{{movimiento.mensaje | ImagenSelect}}\"></ion-img>\n            </ion-avatar>\n            <ion-label class=\"ion-text-wrap\">\n                <div>{{movimiento.mensaje}}</div><br>\n                <div class=\"ion-text-right\"><strong class=\"ama\">{{movimiento.fecha | cambioUTC}}</strong></div>\n\n            </ion-label>\n\n        </ion-item>\n    </ion-list>\n\n    <ion-infinite-scroll *ngIf=\"carga\" #inifinito threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando entradas...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-content>");

/***/ }),

/***/ "Jwl+":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-movimientos/ivt-movimientos-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: IvtMovimientosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvtMovimientosPageRoutingModule", function() { return IvtMovimientosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ivt_movimientos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ivt-movimientos.page */ "rE/s");




const routes = [
    {
        path: '',
        component: _ivt_movimientos_page__WEBPACK_IMPORTED_MODULE_3__["IvtMovimientosPage"]
    }
];
let IvtMovimientosPageRoutingModule = class IvtMovimientosPageRoutingModule {
};
IvtMovimientosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IvtMovimientosPageRoutingModule);



/***/ }),

/***/ "TVdc":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-movimientos/ivt-movimientos.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ama {\n  color: #777777;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaXZ0LW1vdmltaWVudG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJpdnQtbW92aW1pZW50b3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFtYSB7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxufSJdfQ== */");

/***/ }),

/***/ "rE/s":
/*!***************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-movimientos/ivt-movimientos.page.ts ***!
  \***************************************************************************/
/*! exports provided: IvtMovimientosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvtMovimientosPage", function() { return IvtMovimientosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ivt_movimientos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ivt-movimientos.page.html */ "BCI1");
/* harmony import */ var _ivt_movimientos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ivt-movimientos.page.scss */ "TVdc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/Api/Inventarios.service */ "5yQV");








let IvtMovimientosPage = class IvtMovimientosPage {
    constructor(almacenamiento, ivtApi, toastCtrl, router, activeRoute) {
        this.almacenamiento = almacenamiento;
        this.ivtApi = ivtApi;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.activeRoute = activeRoute;
        this.movimientos = [];
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
                this.ivtApi.leerMovmientos(login.token, { desde: this.desde, id: this.activeRoute.snapshot.paramMap.get('id') }).subscribe((data) => {
                    if (data.exe) {
                        this.movimientos = data.response;
                        this.carga = true;
                    }
                    else {
                        this.toastCtrl.alertApplication('No se pudo traer los movimientos, intentelo más tarde', false);
                    }
                }, (error) => {
                    // console.log(error)
                    this.toastCtrl.alertApplication('No se pudo traer los movimientos, intentelo más tarde', false);
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
                this.ivtApi.leerMovmientos(info.token, { desde: this.desde, id: this.activeRoute.snapshot.paramMap.get('id') }).subscribe((data) => {
                    // console.log(data);
                    if (data.exe) {
                        if (data.response.length > 0) {
                            data.response.forEach((item) => {
                                this.movimientos.push(item);
                            });
                            event.target.complete();
                        }
                        else {
                            event.target.disabled = true;
                            this.desde = 0;
                        }
                    }
                    else {
                        this.toastCtrl.alertApplication('No se pudo traer los movimientos, intentelo más tarde', false);
                    }
                }, (error) => {
                    // console.log(error)
                    this.toastCtrl.alertApplication('No se pudo traer los movimientos, intentelo más tarde', false);
                });
            }
        });
    }
};
IvtMovimientosPage.ctorParameters = () => [
    { type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"] },
    { type: _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_7__["InventariosService"] },
    { type: src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__["ToastServices"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
IvtMovimientosPage.propDecorators = {
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['inifinito', { static: false },] }]
};
IvtMovimientosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ivt-movimientos',
        template: _raw_loader_ivt_movimientos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ivt_movimientos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IvtMovimientosPage);



/***/ })

}]);
//# sourceMappingURL=Inventarios-ivt-movimientos-ivt-movimientos-module.js.map