(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Inventarios-ivtempleados-ivtempleados-module"],{

/***/ "7FuF":
/*!*********************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivtempleados/ivtempleados.page.ts ***!
  \*********************************************************************/
/*! exports provided: IVTempleadosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IVTempleadosPage", function() { return IVTempleadosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ivtempleados_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ivtempleados.page.html */ "Y5Ki");
/* harmony import */ var _ivtempleados_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ivtempleados.page.scss */ "XRv5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/Api/Inventarios.service */ "5yQV");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









let IVTempleadosPage = class IVTempleadosPage {
    constructor(almacenamiento, IVTapi, toast, active, loading) {
        this.almacenamiento = almacenamiento;
        this.IVTapi = IVTapi;
        this.toast = toast;
        this.active = active;
        this.loading = loading;
        this.empleados = [];
        this.buscados = [];
        this.accesos = [];
        this.load = false;
        this.marcar = false;
        this.id = '';
        this.ivt = {};
        this.cargauno = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.id = this.active.snapshot.paramMap.get('id');
            yield this.traerEmpleados();
        });
    }
    refrescando(event) {
        this.traerEmpleados().then(() => {
            event.target.complete();
        }).catch(() => {
            event.target.complete();
        });
    }
    traerEmpleados() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load = true;
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.IVTapi.leerEmpleados(info.token).subscribe((data) => {
                    // console.log(data);
                    if (data.exe) {
                        let arr = [];
                        data.response.forEach((item) => {
                            if (item.usuario.imagen.length > 0) {
                                item.usuario.imagen = `https://motocaliapp.com/${item.usuario.imagen[0].path}`;
                            }
                            else {
                                item.usuario.imagen = '/assets/notfound.png';
                            }
                        });
                        arr = data.response;
                        // console.log(this.id);
                        this.IVTapi.leerInventario(info.token, this.id).subscribe((re) => {
                            // console.log(re, 'mio');
                            if (re.exe) {
                                this.ivt = re.response;
                                arr.forEach((item) => {
                                    if (re.response.accesos.find((acceso) => acceso === item.usuario._id)) {
                                        item.checked = true;
                                    }
                                    // console.log('bien')
                                });
                                this.cargauno = true;
                                // console.log(this.cargauno)
                                this.empleados = arr;
                            }
                        });
                    }
                    else {
                        this.toast.toastError('No se pudo traer la información, intentelo más tarde');
                    }
                    this.load = false;
                }, (err) => {
                    this.toast.toastError('No se pudo traer la información, intentelo más tarde');
                });
            }
        });
    }
    marcando(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(event.detail)
            if (this.cargauno) {
                const loading = yield this.loading.create({
                    message: 'Procesando información...',
                    translucent: true,
                    mode: 'ios'
                });
                yield loading.present();
                const info = yield this.almacenamiento.obtenerToken();
                if (info) {
                    // tslint:disable-next-line:max-line-length
                    this.IVTapi.editarAcceso(info.token, { id: event.detail.value, estado: event.detail.checked, _id: this.id }).subscribe((re) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (re.exe) {
                        }
                        yield loading.dismiss();
                    }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        yield loading.dismiss();
                    }));
                }
            }
        });
    }
    ionViewDidLeave() {
        // console.log('sale');
        this.cargauno = false;
        this.empleados = [];
    }
};
IVTempleadosPage.ctorParameters = () => [
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"] },
    { type: _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_5__["InventariosService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__["ToastServices"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] }
];
IVTempleadosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ivtempleados',
        template: _raw_loader_ivtempleados_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ivtempleados_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IVTempleadosPage);



/***/ }),

/***/ "PKKH":
/*!***********************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivtempleados/ivtempleados.module.ts ***!
  \***********************************************************************/
/*! exports provided: IVTempleadosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IVTempleadosPageModule", function() { return IVTempleadosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ivtempleados_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ivtempleados-routing.module */ "oVH4");
/* harmony import */ var _ivtempleados_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ivtempleados.page */ "7FuF");







let IVTempleadosPageModule = class IVTempleadosPageModule {
};
IVTempleadosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ivtempleados_routing_module__WEBPACK_IMPORTED_MODULE_5__["IVTempleadosPageRoutingModule"]
        ],
        declarations: [_ivtempleados_page__WEBPACK_IMPORTED_MODULE_6__["IVTempleadosPage"]]
    })
], IVTempleadosPageModule);



/***/ }),

/***/ "XRv5":
/*!***********************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivtempleados/ivtempleados.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cen {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.tituloGrande {\n  width: 300px;\n  text-align: center;\n}\n\n.verdei {\n  color: #1E8C4A;\n}\n\nion-item-divider {\n  border: 0px !important;\n  margin-bottom: 15px;\n}\n\n.rojoi {\n  color: #C1302C;\n}\n\n.padreflex {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.numero {\n  display: flex;\n  align-items: center;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaXZ0ZW1wbGVhZG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJpdnRlbXBsZWFkb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXR1bG9HcmFuZGUge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udmVyZGVpIHtcclxuICAgIGNvbG9yOiAjMUU4QzRBO1xyXG59XHJcblxyXG5pb24taXRlbS1kaXZpZGVyIHtcclxuICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ucm9qb2kge1xyXG4gICAgY29sb3I6ICNDMTMwMkM7XHJcbn1cclxuXHJcbi5wYWRyZWZsZXgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm51bWVybyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "Y5Ki":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Inventarios/ivtempleados/ivtempleados.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"success\">\n\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"/central/menu/ivt-inicio\"></ion-back-button>\n        </ion-buttons>\n\n        <ion-title>Mis Empleados</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-searchbar mode=\"ios\" placeholder=\"Buscar Empleado\"></ion-searchbar>\n\n\n\n    <div class=\"divider light\"></div>\n\n    <div class=\"divider\"></div>\n\n    <div class=\"cen\" *ngIf=\"empleados.length === 0\">\n        <img src=\"/assets/Empleadoslista.png\" width=\"100px\" alt=\"\">\n        <h3 class=\"tituloGrande\">No tiene empleados registrados</h3>\n    </div>\n\n    <div class=\"carga\" *ngIf=\"load\">\n        <ion-list>\n            <ion-item *ngFor=\"let e of [1,1,1,1,1]\">\n                <ion-skeleton-text slot=\"start\" animated style=\"width: 50px; height: 50px\"></ion-skeleton-text>\n                <ion-label>\n                    <ion-skeleton-text animated style=\"width: 50%; height: 20px\"></ion-skeleton-text>\n                    <ion-skeleton-text animated style=\"width: 90%; height: 20px\"></ion-skeleton-text>\n                </ion-label>\n            </ion-item>\n        </ion-list>\n\n    </div>\n\n\n    <ion-list *ngIf=\"empleados.length > 0\">\n        <ion-item-divider lines=\"none\" color=\"muro\">\n            <div class=\"padreflex\">\n                <div class=\"titulo\">\n                    <h3>Registrados</h3>\n                </div>\n                <div class=\"numero\">\n                    <img src=\"/assets/Empleadoslista.png\" width=\"25px\" height=\"25px\" alt=\"\">\n                    <h3>{{ empleados.length }}</h3>\n                </div>\n            </div>\n        </ion-item-divider>\n        <ion-item-sliding *ngFor=\"let empleado of empleados\">\n            <ion-item>\n                <ion-avatar slot=\"start\">\n                    <img [src]=\"empleado.usuario.imagen\" width=\"100%\" height=\"100%\" alt=\"\">\n                </ion-avatar>\n                <ion-label>\n                    <span>{{ empleado.usuario.nombrecompleto }}</span><br> <strong class=\"verdei\">@{{ empleado.usuario.nombreusuario }}</strong>\n                    <div *ngIf=\"empleado.cargo\" class=\"rojoi\">Cargo: {{ empleado.cargo }}</div>\n                    <div *ngIf=\"empleado.alias\" class=\"rojoi\">Alías: {{ empleado.alias }}</div>\n                </ion-label>\n\n                <ion-checkbox [checked]=\"empleado.checked\" slot=\"end\" color=\"danger\" value=\"{{ empleado.usuario._id }}\" (ionChange)=\"marcando( $event )\"></ion-checkbox>\n\n            </ion-item>\n\n\n        </ion-item-sliding>\n    </ion-list>\n\n\n</ion-content>");

/***/ }),

/***/ "oVH4":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivtempleados/ivtempleados-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: IVTempleadosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IVTempleadosPageRoutingModule", function() { return IVTempleadosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ivtempleados_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ivtempleados.page */ "7FuF");




const routes = [
    {
        path: '',
        component: _ivtempleados_page__WEBPACK_IMPORTED_MODULE_3__["IVTempleadosPage"]
    }
];
let IVTempleadosPageRoutingModule = class IVTempleadosPageRoutingModule {
};
IVTempleadosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IVTempleadosPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=Inventarios-ivtempleados-ivtempleados-module.js.map