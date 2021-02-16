(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buscar-buscar-module"],{

/***/ "1+1D":
/*!***********************************************!*\
  !*** ./src/app/pages/buscar/buscar.module.ts ***!
  \***********************************************/
/*! exports provided: BuscarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarPageModule", function() { return BuscarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _buscar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buscar.page */ "OOhs");







const routes = [
    {
        path: '',
        component: _buscar_page__WEBPACK_IMPORTED_MODULE_6__["BuscarPage"],
    }
];
let BuscarPageModule = class BuscarPageModule {
};
BuscarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_buscar_page__WEBPACK_IMPORTED_MODULE_6__["BuscarPage"]]
    })
], BuscarPageModule);



/***/ }),

/***/ "OOhs":
/*!*********************************************!*\
  !*** ./src/app/pages/buscar/buscar.page.ts ***!
  \*********************************************/
/*! exports provided: BuscarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarPage", function() { return BuscarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_buscar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./buscar.page.html */ "x/9Z");
/* harmony import */ var _buscar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buscar.page.scss */ "kYZv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/Api/UsuariosLogin.service */ "oQG1");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/cargas/usuarios.service */ "cb8P");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");










let BuscarPage = class BuscarPage {
    constructor(apiUsuario, almacenamiento, toast, cargarElementos, menuCtrl, statusbar) {
        this.apiUsuario = apiUsuario;
        this.almacenamiento = almacenamiento;
        this.toast = toast;
        this.cargarElementos = cargarElementos;
        this.menuCtrl = menuCtrl;
        this.statusbar = statusbar;
        this.data = [];
        this.red = 'wifi';
        this.cargarElementos.$cargarRed.subscribe((red) => {
            this.red = red;
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.statusbar.backgroundColorByHexString('#777777');
    }
    buscar(event) {
        // // console.log( event.detail.value);
        const termino = event.detail.value.trimLeft() === '' ? '<<<<<<<<<<<<<<<<<<<<' : event.detail.value.trimLeft();
        this.almacenamiento.obtenerToken().then((info) => {
            //// console.log(info);
            this.apiUsuario.buscarUsuario(termino, info.token).subscribe((usuarios) => {
                // for (let i = 0; i <= usuario.response.length; i++)
                this.data = usuarios.response;
                // console.log(this.data);
            }, (error) => {
                this.toast.alertApplication(error.message, false);
            });
        }).catch((e) => {
            this.toast.alertApplication('Error al buscar el usuario', false);
        });
    }
    viajar() {
        // console.log('Holiii');
    }
    abrirMenu() {
        this.menuCtrl.toggle('perfilMenu');
    }
};
BuscarPage.ctorParameters = () => [
    { type: _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosLoginService"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__["ToastServices"] },
    { type: _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_7__["CargaElementosUsuariosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"] }
];
BuscarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-buscar',
        template: _raw_loader_buscar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_buscar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BuscarPage);



/***/ }),

/***/ "kYZv":
/*!***********************************************!*\
  !*** ./src/app/pages/buscar/buscar.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".usuario {\n  opacity: 0.7;\n  font-size: 14px;\n}\n\n.nombre {\n  font-size: 16px !important;\n  font-weight: bold;\n}\n\nh4 {\n  margin: 1px;\n}\n\n.in {\n  color: #2C8F53;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxidXNjYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJidXNjYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzdWFyaW8ge1xyXG4gICAgb3BhY2l0eTogLjc7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5ub21icmUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaDQge1xyXG4gICAgbWFyZ2luOiAxcHg7XHJcbn1cclxuXHJcbi5pbiB7XHJcbiAgICBjb2xvcjogIzJDOEY1MztcclxufSJdfQ== */");

/***/ }),

/***/ "x/9Z":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/buscar/buscar.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" *ngIf=\"red !== 'none'\">\n    <ion-toolbar color=\"oscuro\">\n        <ion-searchbar mode=\"ios\" placeholder=\"Buscar usuario\" (ionChange)=\"buscar( $event );\"></ion-searchbar>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-header class=\"ion-no-border\" *ngIf=\"red === 'none'\">\n    <ion-toolbar color=\"light\">\n\n        <ion-title class=\"titulo\">Fuera de Línea</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button>\n                <ion-icon color=\"danger\" name=\"wifi-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n\n</ion-header>\n\n<ion-content *ngIf=\"red !== 'none'\">\n\n    <ion-list>\n        <ion-item *ngFor=\"let usuario of data\" class=\"hero\" [routerLink]=\"['/central//buscar/perfil-visita/', usuario.nombreusuario]\">\n\n            <ion-avatar *ngIf=\"usuario.imagen.length > 0 && usuario.imagen[0].path !== 'notfound.png'\" slot=\"start\">\n                <img src=\"https://motocaliapp.com/{{ usuario.imagen[0].path }}\">\n            </ion-avatar>\n            <ion-avatar *ngIf=\"usuario.imagen[0].path === 'notfound.png'\" slot=\"start\">\n                <img src=\"/assets/notfound.png\">\n            </ion-avatar>\n\n            <ion-label class=\"ion-text-wrap\">\n                <h4 class=\"nombre\">{{ usuario.nombrecompleto }}</h4>\n                <span class=\"usuario\">{{ usuario.nombreusuario }}</span> <br>\n                <div *ngIf=\"usuario.role === 'TALLER_ROLE'\">\n                    <strong class=\"in\">{{ usuario.tipoNegocio.join() }}</strong>\n                </div>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n</ion-content>\n\n<ion-content color=\"blanco\" *ngIf=\"red === 'none'\">\n    <div class=\"main ion-padding\">\n        <h2 class=\"ion-text-center opacity\">\n            Ups! lo sentimos, <br> no tienes acceso a internet\n        </h2> <br>\n\n        <p class=\"ion-text-center\">Te invitamos a que disfrutes de los módulos offline que ofrecemos</p>\n\n\n        <br>\n        <ion-button (click)=\"abrirMenu()\" fill=\"outline\" mode=\"ios\" expand=\"block\" color=\"success\">Módulos Offline</ion-button>\n\n    </div>\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=buscar-buscar-module.js.map