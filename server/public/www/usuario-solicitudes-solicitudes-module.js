(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuario-solicitudes-solicitudes-module"],{

/***/ "JDag":
/*!***************************************************************!*\
  !*** ./src/app/pages/usuario/solicitudes/solicitudes.page.ts ***!
  \***************************************************************/
/*! exports provided: SolicitudesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudesPage", function() { return SolicitudesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_solicitudes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./solicitudes.page.html */ "lnmF");
/* harmony import */ var _solicitudes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solicitudes.page.scss */ "mvev");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/Api/Seguimiento.service */ "Gq8O");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../providers/cargas/usuarios.service */ "cb8P");









let SolicitudesPage = class SolicitudesPage {
    constructor(apiSeguimiento, almacenamiento, toastUtilidad, cargarElementos) {
        this.apiSeguimiento = apiSeguimiento;
        this.almacenamiento = almacenamiento;
        this.toastUtilidad = toastUtilidad;
        this.cargarElementos = cargarElementos;
        this.seguimientos = [];
        this.red = 'wifi';
        this.cargarElementos.$cargarRed.subscribe((red) => {
            this.red = red;
            if (this.red !== 'none') {
                this.arrancar();
            }
        });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        if (this.red !== 'none') {
            this.arrancar();
        }
    }
    arrancar() {
        this.almacenamiento.obtenerToken().then((info) => {
            this.cancelSuscribe = this.apiSeguimiento.solicitudesRecibidas(info.token).subscribe((solicitudes) => {
                this.seguimientos = [];
                // console.log(solicitudes.response, 11);
                const data = solicitudes.response.SeguimientoData;
                if (data.length > 0) {
                    data.forEach((item) => {
                        if (item.usuarioEmisor.imagen.length > 0) {
                            item.imagen = item.usuarioEmisor.imagen[0].path;
                        }
                        else {
                            item.imagen = '';
                        }
                        this.seguimientos.push(item);
                    });
                }
                // console.log(this.seguimientos, ' Seguimientos');
            }, (err) => {
                this.toastUtilidad.alertApplication('No se pudo aceptar la solicitud', false);
            });
        });
    }
    aceptar(solicitud, idx) {
        // console.log('Datos del aceptar ', solicitud, idx)
        this.almacenamiento.obtenerToken().then((info) => {
            this.apiSeguimiento.aceptarSolicitud(info.token, solicitud.usuarioEmisor._id).subscribe((seguimiento) => {
                // console.log(seguimiento, ' Solicitud aceptada');
                this.toastUtilidad.alertApplication('Solicitud aceptada', true);
                this.seguimientos.splice(idx, 1);
            }, (err) => {
                this.toastUtilidad.alertApplication('No se pudo aceptar la solicitud', false);
            });
        });
    }
    eliminar(seguimiento, idx) {
        this.almacenamiento.obtenerToken().then((info) => {
            this.apiSeguimiento.cancelarSolicitud(info.token, seguimiento.usuarioEmisor._id, '0').subscribe(() => {
                this.seguimientos.splice(idx, 1);
            }, (err) => {
                this.toastUtilidad.alertApplication('No se pudo aceptar la solicitud', false);
            });
        });
    }
    ionViewDidLeave() {
        // tslint:disable-next-line:no-unused-expression
        this.cancelSuscribe.unsubscribe;
    }
};
SolicitudesPage.ctorParameters = () => [
    { type: src_app_providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_4__["ApiSeguimientoService"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__["ToastServices"] },
    { type: _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_8__["CargaElementosUsuariosService"] }
];
SolicitudesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-solicitudes',
        template: _raw_loader_solicitudes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('solicitudes', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                            opacity: 0,
                            transform: 'translateY(400px)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["stagger"])(300, [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                opacity: 1,
                                transform: 'none'
                            }))
                        ])
                    ], { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                            opacity: 1,
                            transform: 'none'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["stagger"])(300, [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                opacity: 0,
                                transform: 'translateY(-100%)'
                            }))
                        ])
                    ], { optional: true })
                ])
            ])
        ],
        styles: [_solicitudes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SolicitudesPage);



/***/ }),

/***/ "c5Ym":
/*!*************************************************************************!*\
  !*** ./src/app/pages/usuario/solicitudes/solicitudes-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: SolicitudesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudesPageRoutingModule", function() { return SolicitudesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _solicitudes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solicitudes.page */ "JDag");




const routes = [
    {
        path: '',
        component: _solicitudes_page__WEBPACK_IMPORTED_MODULE_3__["SolicitudesPage"]
    }
];
let SolicitudesPageRoutingModule = class SolicitudesPageRoutingModule {
};
SolicitudesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SolicitudesPageRoutingModule);



/***/ }),

/***/ "erKi":
/*!*****************************************************************!*\
  !*** ./src/app/pages/usuario/solicitudes/solicitudes.module.ts ***!
  \*****************************************************************/
/*! exports provided: SolicitudesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudesPageModule", function() { return SolicitudesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _solicitudes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./solicitudes-routing.module */ "c5Ym");
/* harmony import */ var _solicitudes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./solicitudes.page */ "JDag");







let SolicitudesPageModule = class SolicitudesPageModule {
};
SolicitudesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _solicitudes_routing_module__WEBPACK_IMPORTED_MODULE_5__["SolicitudesPageRoutingModule"]
        ],
        declarations: [_solicitudes_page__WEBPACK_IMPORTED_MODULE_6__["SolicitudesPage"]]
    })
], SolicitudesPageModule);



/***/ }),

/***/ "lnmF":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/solicitudes/solicitudes.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"oscuro\">\n        <ion-back-button slot=\"start\" defaultHref=\"/central/menu/\" icon=\"chevron-back-outline\">\n        </ion-back-button>\n        <ion-title class=\"medium\">solicitudes de Seguimiento {{seguimientos.length}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n    <div class=\"divider\"></div>\n\n\n    <div class=\"blanco\" [ngClass]=\"{'hauto centrar': seguimientos.length === 0}\">\n\n        <ion-list class=\"blanco \" [@solicitudes]=\"seguimientos.length\" *ngIf=\"seguimientos.length > 0\">\n            <ion-item lines=\"none\" color=\"blanco\" *ngFor=\"let solicitud of seguimientos; let i = index;\">\n                <ion-avatar class=\"avatar\" slot=\"start\">\n                    <ion-img src=\"https://motocaliapp.com/{{solicitud.imagen}}\"></ion-img>\n                </ion-avatar>\n                <ion-label class=\"ion-text-wrap\">\n                    <strong class=\"small\">{{solicitud.usuarioEmisor.nombrecompleto}}</strong><br>\n                    <div>@{{solicitud.usuarioEmisor.nombreusuario}}</div>\n                    <div class=\"moto-padre\">\n                        <ion-button (click)=\"aceptar(solicitud, i)\" color=\"success\" shape=\"round\" mode=\"ios\">Aceptar</ion-button>\n\n                        <ion-button (click)=\"eliminar(solicitud, i)\" color=\"light\" shape=\"round\" mode=\"ios\">Eliminar</ion-button>\n                    </div>\n                </ion-label>\n\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>");

/***/ }),

/***/ "mvev":
/*!*****************************************************************!*\
  !*** ./src/app/pages/usuario/solicitudes/solicitudes.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".avatar {\n  width: 80px;\n  height: 80px;\n}\n\n.moto-padre {\n  display: flex;\n}\n\n.moto-padre ion-button {\n  width: calc(50% - 2px);\n  max-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc29saWNpdHVkZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJzb2xpY2l0dWRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGFyIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4ubW90by1wYWRyZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubW90by1wYWRyZSBpb24tYnV0dG9uIHtcclxuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDJweCk7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=usuario-solicitudes-solicitudes-module.js.map