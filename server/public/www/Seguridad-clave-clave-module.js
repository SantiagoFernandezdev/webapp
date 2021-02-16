(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Seguridad-clave-clave-module"],{

/***/ "+cgI":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Seguridad/clave/clave.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"oscuro\">\n        <ion-back-button slot=\"start\" icon=\"chevron-back-outline\" defaultHref=\"/central/menu\"></ion-back-button>\n        <ion-title>Seguridad</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-list>\n\n        <div *ngIf=\"!validado\">\n            <ion-item lines=\"none\" class=\" ion-margin-top\" mode=\"md\">\n                <ion-label class=\"ion-text-wrap\">Contraseña Actual</ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" mode=\"ios\">\n                <ion-input placeholder=\"Escribe tu contraseña\" type=\"password\" [(ngModel)]=\"valido\"></ion-input>\n            </ion-item>\n\n            <ion-button color=\"barra\" expand=\"block\" mode=\"ios\" (click)=\"validar()\">Validar Contraseña</ion-button>\n        </div>\n        <div *ngIf=\"!validado && vl\" class=\"fl\">\n            <ion-spinner name=\"crescent\" color=\"oscuro\"></ion-spinner> Validando, por favor espere...\n        </div>\n\n        <div *ngIf=\"validado\">\n            <ion-item lines=\"none\" class=\"sinfondo ion-margin-top\" mode=\"md\">\n                <ion-label class=\"ion-text-wrap\">Escriba su contraseña</ion-label>\n            </ion-item>\n            <ion-item color=\"light\" lines=\"none\" class=\"campo ion-margin-top\" mode=\"ios\">\n                <ion-input placeholder=\"Escriba nueva contraseña\" type=\"password\" [(ngModel)]=\"clave\"></ion-input>\n            </ion-item>\n            <ion-item lines=\"none\" class=\"sinfondo ion-margin-top\" mode=\"md\">\n                <ion-label class=\"ion-text-wrap\">Confirmar la contraseña</ion-label>\n            </ion-item>\n            <ion-item color=\"light\" lines=\"none\" class=\"campo ion-margin-top\" mode=\"ios\">\n                <ion-input placeholder=\"Confirmar nueva contraseña\" type=\"password\" [(ngModel)]=\"confirmar\"></ion-input>\n            </ion-item>\n\n            <ion-button color=\"barra\" expand=\"block\" mode=\"ios\" (click)=\"actualizar()\">Actualizar Contraseña</ion-button>\n        </div>\n    </ion-list>\n\n\n    <ion-list *ngIf=\"cargatodo\">\n\n        <ion-item-divider color=\"success\">DATOS DEL USUARIO</ion-item-divider>\n\n        <ion-item color=\"light\" lines=\"none\" class=\" ion-margin-top\" mode=\"md\">\n            <ion-label class=\"ion-text-wrap\">NOMBRE</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" mode=\"ios\">\n            <ion-input placeholder=\"Escribe tu Nombre\" type=\"text\" [(ngModel)]=\"ncompleto\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"role === 'USER_ROLE'\" lines=\"none\" class=\" ion-margin-top\" mode=\"md\" color=\"light\">\n            <ion-label class=\"ion-text-wrap\">PLACA DEL VEHÍCULO</ion-label>\n        </ion-item>\n        <ion-item *ngIf=\"role === 'USER_ROLE'\" lines=\"none\" mode=\"ios\">\n            <ion-input placeholder=\"Escribe la placa del vehículo\" type=\"text\" [(ngModel)]=\"placa\"></ion-input>\n        </ion-item>\n\n        <ion-item color=\"light\" lines=\"none\" class=\" ion-margin-top\" mode=\"md\">\n            <ion-label class=\"ion-text-wrap\">TELÉFONO O CELULAR</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" mode=\"ios\">\n            <ion-input placeholder=\"Digita tu número teléfono o celular\" type=\"number\" [(ngModel)]=\"tel\"></ion-input>\n        </ion-item>\n\n        <ion-item color=\"light\" lines=\"none\" class=\" ion-margin-top\" mode=\"md\">\n            <ion-label class=\"ion-text-wrap\">CORREO ELECTRÓNICO</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" mode=\"ios\">\n            <ion-input placeholder=\"Escribe tu correo\" type=\"text\" [(ngModel)]=\"correo\"></ion-input>\n        </ion-item>\n\n        <ion-item color=\"light\" lines=\"none\" class=\" ion-margin-top\" mode=\"md\">\n            <ion-label class=\"ion-text-wrap\">PAIS</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"noborder\" mode=\"md\">\n            <ion-label class=\"ion-text-wrap\">Selecciona el País</ion-label>\n            <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"listarCiudades($event)\" [value]=\"pais\">\n                <ion-select-option *ngFor=\"let paiss of paises\" value=\"{{paiss.nombre}}\">{{paiss.nombre}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n\n\n\n\n\n\n\n\n        <ion-item color=\"light\" lines=\"none\" class=\" ion-margin-top\" mode=\"md\">\n            <ion-label class=\"ion-text-wrap\">CIUDAD</ion-label>\n        </ion-item>\n        <ion-item *ngIf=\"ciudad\" lines=\"none\" class=\" noborder\" mode=\"md\">\n            <ion-label class=\"ion-text-wrap\">Selecciona la ciudad</ion-label>\n            <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"seleccionarCiudad($event)\" [value]=\"miciudad\">\n                <ion-select-option *ngFor=\"let ciudad of ciudades\" value=\"{{ciudad.nombre}}\">{{ciudad.nombre}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-button color=\"barra\" expand=\"block\" mode=\"ios\" (click)=\"guardar()\">GUARDAR DATOS</ion-button>\n\n    </ion-list>\n\n</ion-content>");

/***/ }),

/***/ "/j9f":
/*!*******************************************************!*\
  !*** ./src/app/pages/Seguridad/clave/clave.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fl {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px 0;\n}\n\nion-spinner {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2xhdmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKIiwiZmlsZSI6ImNsYXZlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbn1cclxuXHJcbmlvbi1zcGlubmVyIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59Il19 */");

/***/ }),

/***/ "T99j":
/*!*****************************************************!*\
  !*** ./src/app/pages/Seguridad/clave/clave.page.ts ***!
  \*****************************************************/
/*! exports provided: ClavePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClavePage", function() { return ClavePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_clave_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./clave.page.html */ "+cgI");
/* harmony import */ var _clave_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clave.page.scss */ "/j9f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/Api/UsuariosLogin.service */ "oQG1");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");







let ClavePage = class ClavePage {
    constructor(almacenamiento, apiUsuario, toast) {
        this.almacenamiento = almacenamiento;
        this.apiUsuario = apiUsuario;
        this.toast = toast;
        this.validado = false;
        this.clave = '';
        this.confirmar = '';
        this.valido = '';
        this.vl = false;
        this.paises = [];
        this.ciudades = [];
        this.ciudad = false;
        this.load = false;
        this.pais = '';
        this.miciudad = '';
        this.correo = '';
        this.tel = 0;
        this.ncompleto = '';
        this.placa = '';
        this.cargatodo = false;
        this.role = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.datos();
    }
    refrescando(event) {
        this.cargatodo = false;
        this.datos().then(() => {
            event.detail.complete();
        }).catch(() => {
            event.detail.complete();
        });
    }
    validar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.vl = true;
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiUsuario.validarClave(info.token, { clave: this.valido }).subscribe((data) => {
                    if (data.exe) {
                        this.validado = true;
                    }
                    else {
                        this.toast.toastError('la contraseña no es correcta');
                    }
                    this.vl = false;
                }, (err) => {
                    this.vl = false;
                    this.toast.toastError('No se pudo validar la contraseña, inténtelo más tarde');
                });
            }
        });
    }
    actualizar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.clave === this.confirmar && this.clave !== '' && this.confirmar !== '') {
                const info = yield this.almacenamiento.obtenerToken();
                if (info) {
                    this.apiUsuario.editarClaves(info.token, { clave: this.confirmar }).subscribe((data) => {
                        if (data.exe) {
                            this.validado = false;
                            this.toast.toastExitoso('Contraseña actualizada');
                        }
                        else {
                            this.toast.toastError('No se pudo actualizar la contraseña, inténtelo más tarde');
                        }
                    }, (err) => {
                        this.toast.toastError('No se pudo actualizar la contraseña, inténtelo más tarde');
                    });
                }
            }
            else {
                this.toast.toastError('Las contraseñas no coínciden');
            }
        });
    }
    datos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.role = info.role;
                this.apiUsuario.usuarioDatos(info.token).subscribe((data) => {
                    if (data.exe) {
                        this.ncompleto = data.response.nombrecompleto;
                        this.tel = data.response.tel;
                        this.correo = data.response.correo;
                        this.placa = data.response.placa ? data.response.placa : '';
                        this.pais = data.response.pais;
                        this.miciudad = data.response.ciudad;
                        this.cargatodo = true;
                        this.listarPaises();
                    }
                    else {
                        this.toast.toastError('No se pudo traer los datos del usuario, inténtelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo traer los datos del usuario, inténtelo más tarde');
                });
            }
        });
    }
    listarPaises() {
        this.apiUsuario.listarPaises().subscribe((data) => {
            if (data.exe) {
                this.paises = data.response;
                if (this.pais !== '') {
                    this.listarCiudades({ detail: { value: this.pais } });
                }
            }
            else {
                this.paises.push('Colombia');
            }
        }, (err) => {
            this.paises.push('Colombia');
        });
    }
    listarCiudades(event) {
        this.pais = event.detail.value;
        this.miciudad = this.miciudad !== '' ? this.miciudad : '';
        const _id = this.paises.filter((item) => item.nombre === this.pais)[0]._id;
        this.apiUsuario.listarCiudades(_id).subscribe((data) => {
            if (data.exe) {
                this.ciudades = data.response;
                this.ciudad = true;
            }
            else {
                this.toast.toastError('No se pudo traer las ciudades, intente registrarse más tarde');
            }
        }, (err) => {
            this.toast.toastError('No se pudo traer las ciudades, intente registrarse más tarde');
        });
    }
    seleccionarCiudad(event) {
        this.miciudad = event.detail.value;
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.role = info.role;
                // tslint:disable-next-line:max-line-length
                this.apiUsuario.editarUusuario(info.token, { ciudad: this.miciudad, pais: this.pais, placa: this.placa, nombrecompleto: this.ncompleto, telefono: this.tel, correo: this.correo }).subscribe((data) => {
                    if (data.exe) {
                        this.toast.Especial('Uusario editado correctamente');
                    }
                    else {
                        this.toast.toastError('No se pudo editar los datos del usuario, inténtelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo editar los datos del usuario, inténtelo más tarde');
                });
            }
        });
    }
};
ClavePage.ctorParameters = () => [
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"] },
    { type: _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_5__["UsuariosLoginService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__["ToastServices"] }
];
ClavePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-clave',
        template: _raw_loader_clave_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_clave_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ClavePage);



/***/ }),

/***/ "lBrD":
/*!*******************************************************!*\
  !*** ./src/app/pages/Seguridad/clave/clave.module.ts ***!
  \*******************************************************/
/*! exports provided: ClavePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClavePageModule", function() { return ClavePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _clave_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clave-routing.module */ "sH6S");
/* harmony import */ var _clave_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clave.page */ "T99j");







let ClavePageModule = class ClavePageModule {
};
ClavePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _clave_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClavePageRoutingModule"]
        ],
        declarations: [_clave_page__WEBPACK_IMPORTED_MODULE_6__["ClavePage"]]
    })
], ClavePageModule);



/***/ }),

/***/ "sH6S":
/*!***************************************************************!*\
  !*** ./src/app/pages/Seguridad/clave/clave-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ClavePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClavePageRoutingModule", function() { return ClavePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _clave_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clave.page */ "T99j");




const routes = [
    {
        path: '',
        component: _clave_page__WEBPACK_IMPORTED_MODULE_3__["ClavePage"]
    }
];
let ClavePageRoutingModule = class ClavePageRoutingModule {
};
ClavePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClavePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=Seguridad-clave-clave-module.js.map