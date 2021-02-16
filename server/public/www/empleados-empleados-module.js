(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empleados-empleados-module"],{

/***/ "31fD":
/*!*****************************************************!*\
  !*** ./src/app/pages/empleados/empleados.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cen {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.tituloGrande {\n  width: 300px;\n  text-align: center;\n}\n\n.verdei {\n  color: #1E8C4A;\n}\n\nion-item-divider {\n  border: 0px !important;\n  margin-bottom: 15px;\n}\n\n.padreflex {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.numero {\n  display: flex;\n  align-items: center;\n  padding-right: 10px;\n}\n\n.rojoi {\n  color: #C1302C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlbXBsZWFkb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDUjs7QUFFSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUNSOztBQUVJO0VBQ0ksY0FBQTtBQUNSOztBQUVJO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtBQUNSOztBQUVJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ1I7O0FBRUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNSOztBQUVJO0VBQ0ksY0FBQTtBQUNSIiwiZmlsZSI6ImVtcGxlYWRvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLmNlbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50aXR1bG9HcmFuZGUge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC52ZXJkZWkge1xyXG4gICAgICAgIGNvbG9yOiAjMUU4QzRBO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24taXRlbS1kaXZpZGVyIHtcclxuICAgICAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wYWRyZWZsZXgge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5udW1lcm8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucm9qb2kge1xyXG4gICAgICAgIGNvbG9yOiAjQzEzMDJDO1xyXG4gICAgfSJdfQ== */");

/***/ }),

/***/ "Izys":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empleados/empleados.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"oscuro\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"/central/menu\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Empleados</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-searchbar mode=\"ios\" placeholder=\"Buscar Usuario\" (ionChange)=\"buscarEmpleados( $event )\"></ion-searchbar>\n\n    <ion-list *ngIf=\"buscados.length > 0\">\n        <ion-item *ngFor=\"let usuario of buscados\" (click)=\"agregar( usuario )\">\n            <ion-avatar slot=\"start\">\n                <img [src]=\"usuario.imagen\" width=\"100%\" height=\"100%\" alt=\"\">\n            </ion-avatar>\n            <ion-label>\n                <strong>{{ usuario.nombrecompleto }}</strong><br> @{{ usuario.nombreusuario }}\n            </ion-label>\n\n        </ion-item>\n    </ion-list>\n\n    <div class=\"divider light\"></div>\n\n    <div class=\"cen\" *ngIf=\"empleados.length === 0\">\n        <img src=\"/assets/Empleados.png\" width=\"100px\" alt=\"\">\n        <h3 class=\"tituloGrande\">No tiene empleados registrados, buscalos para agregarlos a la lista</h3>\n    </div>\n\n    <ion-list *ngIf=\"empleados.length > 0\">\n        <ion-item-divider lines=\"none\" color=\"muro\">\n            <div class=\"padreflex\">\n                <div class=\"titulo\">\n                    <h3>Registrados</h3>\n                </div>\n                <div class=\"numero\">\n                    <img src=\"/assets/Empleadoslista.png\" width=\"25px\" height=\"25px\" alt=\"\">\n                    <h3>{{ empleados.length }}</h3>\n                </div>\n            </div>\n        </ion-item-divider>\n        <ion-item-sliding *ngFor=\"let empleado of empleados\">\n            <ion-item>\n                <ion-avatar slot=\"start\">\n                    <img [src]=\"empleado.usuario.imagen\" width=\"100%\" height=\"100%\" alt=\"\">\n                </ion-avatar>\n                <ion-label>\n                    <span>{{ empleado.usuario.nombrecompleto }}</span><br> <strong class=\"verdei\">@{{ empleado.usuario.nombreusuario }}</strong>\n                    <div *ngIf=\"empleado.cargo\" class=\"rojoi\">Cargo: {{ empleado.cargo }}</div>\n                    <div *ngIf=\"empleado.alias\" class=\"rojoi\">Alías: {{ empleado.alias }}</div>\n                </ion-label>\n\n            </ion-item>\n\n            <ion-item-options side=\"end\">\n                <ion-item-option color=\"warning\" (click)=\"editar( empleado )\">\n                    <ion-icon name=\"pencil-outline\" slot=\"icon-only\"></ion-icon>\n                </ion-item-option>\n\n                <ion-item-option color=\"danger\" (click)=\"eliminar( empleado )\">\n                    <ion-icon name=\"trash-outline\" slot=\"icon-only\"></ion-icon>\n                </ion-item-option>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n\n</ion-content>");

/***/ }),

/***/ "ogBF":
/*!*************************************************************!*\
  !*** ./src/app/pages/empleados/empleados-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EmpleadosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpleadosPageRoutingModule", function() { return EmpleadosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _empleados_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empleados.page */ "qi86");




const routes = [
    {
        path: '',
        component: _empleados_page__WEBPACK_IMPORTED_MODULE_3__["EmpleadosPage"]
    }
];
let EmpleadosPageRoutingModule = class EmpleadosPageRoutingModule {
};
EmpleadosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EmpleadosPageRoutingModule);



/***/ }),

/***/ "qi86":
/*!***************************************************!*\
  !*** ./src/app/pages/empleados/empleados.page.ts ***!
  \***************************************************/
/*! exports provided: EmpleadosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpleadosPage", function() { return EmpleadosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_empleados_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./empleados.page.html */ "Izys");
/* harmony import */ var _empleados_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empleados.page.scss */ "31fD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/Api/Inventarios.service */ "5yQV");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/Utilidades/ToastService.service */ "fmoy");








let EmpleadosPage = class EmpleadosPage {
    constructor(IVTapi, almacenamiento, alertCtrl, toast) {
        this.IVTapi = IVTapi;
        this.almacenamiento = almacenamiento;
        this.alertCtrl = alertCtrl;
        this.toast = toast;
        this.empleados = [];
        this.buscados = [];
        this.texto = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.traerEmpleados();
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
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.IVTapi.leerEmpleados(info.token).subscribe((data) => {
                    // console.log(data);
                    if (data.exe) {
                        data.response.forEach((item) => {
                            if (item.usuario.imagen[0].path.includes('notfound')) {
                                item.usuario.imagen = '/assets/notfound.png';
                            }
                            else {
                                item.usuario.imagen = `https://motocaliapp.com/${item.usuario.imagen[0].path}`;
                            }
                        });
                        this.empleados = data.response;
                    }
                });
            }
        });
    }
    buscarEmpleados(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info && event.detail.value !== '') {
                this.IVTapi.BuscarUsuarios(info.token, event.detail.value).subscribe((data) => {
                    // console.log(data);
                    if (data.exe) {
                        data.response.forEach((item) => {
                            if (item.imagen.length > 0) {
                                item.imagen = `https://motocaliapp.com/19927613410/${item.imagen[0].path}`;
                            }
                            else {
                                item.imagen = '/assets/notfound.png';
                            }
                        });
                        this.buscados = data.response;
                    }
                });
            }
            else {
                this.buscados = [];
            }
        });
    }
    agregar(usuario) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Marcar usuario como empleado',
                message: `¿Estas seguro de marcar a ${usuario.nombrecompleto} como empleado?`,
                buttons: [
                    {
                        role: 'cancel',
                        text: 'Cancelar'
                    },
                    {
                        text: 'Aceptar',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const info = yield this.almacenamiento.obtenerToken();
                            if (info) {
                                this.IVTapi.crearEmpleado(info.token, { nombre: usuario.nombrecompleto, _id: usuario._id }).subscribe((data) => {
                                    // console.log(data);
                                    if (data.exe) {
                                        this.traerEmpleados();
                                    }
                                    else {
                                        if (data.err.errors) {
                                            if (data.err.errors.usuario) {
                                                if (data.err.errors.usuario.kind === 'unique') {
                                                    this.toast.toastError('El usuario ya ha sido agregado como empleado');
                                                }
                                            }
                                        }
                                    }
                                });
                            }
                        })
                    }
                ]
            });
            return yield alert.present();
        });
    }
    eliminar(empleado) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Eliminar Empleado',
                message: `¿Estas seguro de eliminar a ${empleado.usuario.nombrecompleto} como empleado?`,
                buttons: [
                    {
                        role: 'cancel',
                        text: 'Cancelar'
                    },
                    {
                        text: 'Aceptar',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const info = yield this.almacenamiento.obtenerToken();
                            if (info) {
                                this.IVTapi.eliminarEmpleados(info.token, empleado._id).subscribe((data) => {
                                    if (data.exe) {
                                        this.traerEmpleados();
                                    }
                                    else {
                                        this.toast.toastError('No se pudo eliminar el empleado');
                                    }
                                }, (err) => {
                                    this.toast.toastError('No se pudo eliminar el empleado, intentelo más tarde');
                                });
                            }
                        })
                    }
                ]
            });
            return yield alert.present();
        });
    }
    editar(empleado) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Eliminar Empleado',
                message: `¿Estas seguro de eliminar a ${empleado.usuario.nombrecompleto} como empleado?`,
                inputs: [
                    {
                        type: 'text',
                        name: 'cargo',
                        placeholder: `Escriba el cargo ${empleado.usuario.nombrecompleto}`
                    },
                    {
                        type: 'text',
                        name: 'alias',
                        placeholder: `Escribe un alías`
                    },
                ],
                buttons: [
                    {
                        role: 'cancel',
                        text: 'Cancelar'
                    },
                    {
                        text: 'Aceptar',
                        handler: (re) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const info = yield this.almacenamiento.obtenerToken();
                            if (info) {
                                this.IVTapi.editarEmpleado(info.token, { _id: empleado._id, cargo: re.cargo, alias: re.alias }).subscribe((data) => {
                                    if (data.exe) {
                                        this.traerEmpleados();
                                    }
                                    else {
                                        this.toast.toastError('No se pudo editar el empleado');
                                    }
                                }, (err) => {
                                    this.toast.toastError('No se pudo editar el empleado, intentelo más tarde');
                                });
                            }
                        })
                    }
                ]
            });
            return yield alert.present();
        });
    }
};
EmpleadosPage.ctorParameters = () => [
    { type: _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_4__["InventariosService"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__["ToastServices"] }
];
EmpleadosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-empleados',
        template: _raw_loader_empleados_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_empleados_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmpleadosPage);



/***/ }),

/***/ "sTCq":
/*!*****************************************************!*\
  !*** ./src/app/pages/empleados/empleados.module.ts ***!
  \*****************************************************/
/*! exports provided: EmpleadosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpleadosPageModule", function() { return EmpleadosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _empleados_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./empleados-routing.module */ "ogBF");
/* harmony import */ var _empleados_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empleados.page */ "qi86");







let EmpleadosPageModule = class EmpleadosPageModule {
};
EmpleadosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _empleados_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmpleadosPageRoutingModule"]
        ],
        declarations: [_empleados_page__WEBPACK_IMPORTED_MODULE_6__["EmpleadosPage"]]
    })
], EmpleadosPageModule);



/***/ })

}]);
//# sourceMappingURL=empleados-empleados-module.js.map