(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Pages-usuario-perfil-perfil-module~Pages-usuario-perfil-visita-perfil-visita-module"],{

/***/ "3/e5":
/*!***************************************************!*\
  !*** ./src/app/Pages/Modales/modal/modal.page.ts ***!
  \***************************************************/
/*! exports provided: ModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPage", function() { return ModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal.page.html */ "O/aB");
/* harmony import */ var _modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.page.scss */ "aU/q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _providers_Api_Biografia_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/Api/Biografia.service */ "9ucb");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/Utilidades/LoadingService.service */ "r3ab");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../providers/Api/UsuariosLogin.service */ "oQG1");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");












let ModalPage = class ModalPage {
    constructor(modalCtrl, biografia, almacenamiento, loading, toast, statusbar, apiUsuario, plt) {
        this.modalCtrl = modalCtrl;
        this.biografia = biografia;
        this.almacenamiento = almacenamiento;
        this.loading = loading;
        this.toast = toast;
        this.statusbar = statusbar;
        this.apiUsuario = apiUsuario;
        this.plt = plt;
        this.slideOpt = {
            zoom: {
                maxRatio: 3,
                minRatio: 1,
                toggle: true
            }
        };
        this.msgEstado = '';
        this.nuevoServicio = false;
        this.textoServicio = '';
        this.listaServicios = [];
        this.data = {
            contenido: {
                desde: '',
                hasta: '',
                de: '',
                a: ''
            },
            servicios: []
        };
        this.dataNegocio = {
            direccion: '',
            pagina: '',
            desde: '',
            hasta: '',
            telefono: '',
            ciudad: '',
            pais: '',
            historia: '',
            de: '',
            a: ''
        };
        this.dataVehiculo = {
            tipo: '',
            Marca: '',
            Modelo: '',
            Nombre: ''
        };
        this.role = '';
        this.serviciosTemp = [];
        this.load = false;
        this.paises = [];
        this.ciudades = [];
        this.pais = '';
        this.paiss = '';
        this.miciudad = '';
        this.ciudad = false;
        this.cargando = false;
        this.espere = false;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        // // // console.log(this.type);
        if (this.type === 'mediap' || this.type === 'mediapor') {
            try {
                this.load = true;
                this.plt.ready().then(() => {
                    this.statusbar.hide();
                });
            }
            catch (error) {
            }
        }
        else if (this.type === 'form') {
            this.listarPaises();
            this.almacenamiento.obtenerToken().then((info) => {
                this.msgEstado = 'Información de mi negocio';
                //   // // // console.log(info, 'infon')
                this.role = info.role;
                this.biografia.getBiografia(info.token, 'none').subscribe((data) => {
                    // // // // console.log('Data', data);
                    if (data.exe) {
                        this.data = data.response.length > 0 ? data.response[0] : this.data;
                        this.dataNegocio = data.response.length > 0 ? this.data.contenido : this.dataNegocio;
                        this.espere = true;
                        this.paiss = data.response.length > 0 ? data.response[0].usuario.pais : 'Colombia';
                        //  // // // console.log(this.dataNegocio, 'dfgdgdf')
                    }
                    else {
                        this.toast.alertApplication('No se puede tarer la información', true);
                    }
                }, (err) => // // // console.log('error')
                 { });
            });
        }
        else if (this.type === 'vehiculo') {
            this.almacenamiento.obtenerToken().then((info) => {
                this.role = info.role;
                // // // console.log(info)
                this.biografia.getBiografia(info.token, 'none').subscribe((data) => {
                    // // // console.log('Data', data);
                    if (data.exe) {
                        this.data = data.response.length > 0 ? data.response[0] : this.data;
                        this.dataVehiculo = data.response.length > 0 ? this.data.contenido : this.dataVehiculo;
                        // // // console.log()
                    }
                    else {
                        this.toast.alertApplication('No se puede traer la información', true);
                    }
                });
            });
            this.msgEstado = 'Información del Vehículo';
        }
        else if (this.type === 'servis') {
            this.almacenamiento.obtenerToken().then((info) => {
                this.msgEstado = 'Servicios que ofrezco en mi negocio';
                this.role = info.role;
                this.biografia.getBiografia(info.token, 'none').subscribe((data) => {
                    // // // console.log('Data', data);
                    if (data.exe) {
                        this.data = data.response.length > 0 ? data.response[0] : this.data;
                        this.serviciosTemp = data.response.length > 0 ? data.response[0].servicios : this.data.servicios;
                        this.dataNegocio = data.response.length > 0 ? this.data.contenido : this.dataNegocio;
                    }
                    else {
                        this.toast.alertApplication('No se puede tarer la información', true);
                    }
                });
            });
        }
    }
    listarPaises() {
        this.apiUsuario.listarPaises().subscribe((data) => {
            if (data.exe) {
                this.paises = data.response;
            }
            else {
                this.paises.push('Colombia');
            }
        }, (err) => {
            this.paises.push('Colombia');
        });
    }
    listarCiudades(event, opt) {
        // // // console.log(event.detail)
        this.pais = event.detail.value.nombre;
        this.miciudad = '';
        this.cargando = true;
        this.apiUsuario.listarCiudades(event.detail.value._id).subscribe((data) => {
            if (data.exe) {
                this.ciudades = data.response;
                this.ciudad = true;
                if (opt) {
                }
            }
            else {
                this.toast.toastError('No se pudo traer las ciudades, intente registrarse más tarde');
            }
            this.cargando = false;
        }, (err) => {
            this.toast.toastError('No se pudo traer las ciudades, intente registrarse más tarde');
            this.cargando = false;
        });
    }
    seleccionarCiudad(event) {
        this.miciudad = event.detail.value;
    }
    horario(event, tipo) {
        if (tipo === 'desde') {
            this.dataNegocio.desde = event.detail.value;
        }
        else {
            this.dataNegocio.hasta = event.detail.value;
        }
    }
    dias(event, tipo) {
        if (tipo === 'de') {
            this.dataNegocio.de = event.detail.value;
        }
        else {
            this.dataNegocio.a = event.detail.value;
        }
    }
    tipoVehiculo(event) {
        this.dataVehiculo.tipo = event.detail.value;
    }
    cambiarServicio(event, idx) {
        this.serviciosTemp[idx] = event.detail.value;
        // // // console.log(event)
    }
    eliminar(idx) {
        this.data.servicios.splice(idx, 1);
    }
    salirModal() {
        this.statusbar.show();
        if (typeof this.cancelSuscribe !== 'undefined') {
            // // // console.log('Cerramos el suscribe');
            this.cancelSuscribe.unsubscribe();
        }
        // // console.log(this.data, 'saliendo');
        this.modalCtrl.dismiss({
            data: this.data
        });
    }
    habilitarTrabajo() {
        this.nuevoServicio = true;
    }
    crearTrabajoChat() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.nuevoServicio && this.textoServicio !== '') {
                this.data.servicios.unshift(this.textoServicio);
                this.textoServicio = '';
            }
        });
    }
    cancelarTrabajo() {
        this.nuevoServicio = false;
    }
    guardarCambios() {
        this.almacenamiento.obtenerToken().then((info) => {
            if (info.role === 'TALLER_ROLE' && (this.type === 'form' || this.type === 'servis')) {
                this.data.contenido = this.dataNegocio;
            }
            else if (info.role === 'USER_ROLE' && this.type === 'vehiculo') {
                this.data.contenido = this.dataVehiculo;
            }
            // // // console.log(this.data);
            this.biografia.postBiografia(info.token, this.data).subscribe((data) => {
                // // // console.log(data);
                if (data.exe) {
                    this.toast.alertApplication('Se actualizó tu perfil!', true);
                    this.modalCtrl.dismiss({
                        servicios: this.data.servicios,
                        contenido: this.data.contenido
                    });
                }
                else {
                    this.toast.alertApplication('No se pudo guardar los cambios, intentalo más tarde', true);
                }
            });
        });
    }
};
ModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _providers_Api_Biografia_service__WEBPACK_IMPORTED_MODULE_5__["BiografiaService"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__["InicioService"] },
    { type: _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_11__["ToastServices"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"] },
    { type: _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_10__["UsuariosLoginService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
ModalPage.propDecorators = {
    imagen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal',
        template: _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('entrada', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
                        opacity: 0,
                        transform: 'scale(0)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('250ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
                        opacity: 1,
                        transform: 'scale(1)'
                    }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
                        opacity: 1,
                        transform: 'scale(1)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('250ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
                        opacity: 0,
                        transform: 'scale(0)'
                    }))
                ])
            ])
        ],
        styles: [_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalPage);



/***/ }),

/***/ "9ucb":
/*!****************************************************!*\
  !*** ./src/app/providers/Api/Biografia.service.ts ***!
  \****************************************************/
/*! exports provided: BiografiaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiografiaService", function() { return BiografiaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");






let BiografiaService = class BiografiaService {
    constructor(http) {
        this.http = http;
    }
    hanflerError(error) {
        let intento = 0;
        return error.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delayWhen"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(3000)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((errorHttp) => {
            intento++;
            if (intento === 3) {
                console.log('Entramos a intentos');
                if (errorHttp instanceof ErrorEvent) {
                    throw new Error('Error de Red');
                }
                else {
                    if (errorHttp.status === 404) {
                        // throw new Error(' Credenciales incorrectas, por favor comprueba la información ');
                    }
                    else {
                        // throw new Error(' No se pudo realizar la conexión, comprueba tu red ');
                    }
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(3));
    }
    getBiografia(token, id) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token,
                'x-id': id
            })
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/biografia`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    postBiografia(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/biografia`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
};
BiografiaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
BiografiaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BiografiaService);



/***/ }),

/***/ "Mr3z":
/*!*****************************************************!*\
  !*** ./src/app/Pages/Modales/modal/modal.module.ts ***!
  \*****************************************************/
/*! exports provided: ModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal.page */ "3/e5");






let ModalPageModule = class ModalPageModule {
};
ModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_modal_page__WEBPACK_IMPORTED_MODULE_5__["ModalPage"]]
    })
], ModalPageModule);



/***/ }),

/***/ "O/aB":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Modales/modal/modal.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" *ngIf=\"type === 'form' || type === 'servis' || type === 'vehiculo'\">\n\n    <ion-toolbar color=\"oscuro\">\n        <ion-buttons slot=\"start\">\n            <ion-button fill=\"clear\" (click)=\"salirModal()\" color=\"blanco\">\n                <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Datos</ion-title>\n\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" (click)=\"guardarCambios()\" color=\"blanco\">\n                <ion-icon slot=\"icon-only\" name=\"checkmark\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content class=\"cmedia\" fullscreen=\"true\" *ngIf=\"type === 'mediapor' || type === 'mediap'\" color=\"dark\">\n    <ion-button class=\"afuera\" (click)=\"salirModal()\" color=\"danger\" mode=\"ios\">\n        Salir\n    </ion-button>\n    <ion-slides *ngIf=\"load\" class=\"diapositiva\" [options]=\"slideOpt\">\n        <ion-slide>\n            <img class=\"img\" [src]=\"imagen\">\n        </ion-slide>\n    </ion-slides>\n</ion-content>\n\n<ion-content fullscreen=\"true\" *ngIf=\"type === 'form' || type === 'servis' || type === 'vehiculo'\">\n\n    <ion-list>\n        <ion-item lines=\"none\" class=\"es-bottom aviso\">\n            <ion-label>{{ msgEstado }}</ion-label>\n\n        </ion-item>\n    </ion-list>\n\n    <div class=\"main\" *ngIf=\"type === 'form'\">\n\n        <div class=\"divider\"></div>\n\n        <ion-item-divider *ngIf=\"role === 'TALLER_ROLE'\" class=\"ion-padding \" color=\"light\">\n            <strong>Información del negocio </strong>\n        </ion-item-divider>\n\n\n        <div *ngIf=\"role === 'TALLER_ROLE'\">\n            <ion-item @entrada class=\"es-bottom\">\n                <ion-input type=\"text\" class=\"ion-text-wrap\" placeholder=\"Dirección del establecimiento\" [(ngModel)]=\"dataNegocio.direccion\"></ion-input>\n\n            </ion-item>\n\n            <ion-item @entrada class=\"es-bottom\">\n                <ion-input type=\"text\" class=\"ion-text-wrap\" placeholder=\"Página Web\" [(ngModel)]=\"dataNegocio.pagina\"></ion-input>\n\n            </ion-item>\n\n            <ion-item @entrada class=\"es-bottom\">\n                <ion-input type=\"text\" class=\"ion-text-wrap\" placeholder=\"Teléfono o Celular del establecimiento\" [(ngModel)]=\"dataNegocio.telefono\"></ion-input>\n\n            </ion-item>\n\n            <ion-item mode=\"ios\">\n                <ion-label class=\"ion-text-wrap\">Selecciona el País</ion-label>\n\n\n                <ion-select *ngIf=\"!espere\" okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"listarCiudades($event)\">\n                    <ion-select-option *ngFor=\"let pais of paises\" [value]=\"pais\">{{pais.nombre}}</ion-select-option>\n                </ion-select>\n\n                <ion-select *ngIf=\"espere\" [value]=\"paiss\" okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"listarCiudades($event)\">\n                    <ion-select-option *ngFor=\"let pais of paises\" [value]=\"pais\">{{pais.nombre}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <div class=\"flexbet\" *ngIf=\"cargando\">\n                <br>\n                <ion-spinner name=\"crescent\" color=\"primary\"> </ion-spinner> Cargando Ciudades...\n            </div>\n\n\n            <ion-item *ngIf=\"ciudad\" mode=\"ios\">\n                <ion-label class=\"ion-text-wrap\">Selecciona la ciudad</ion-label>\n                <ion-select *ngIf=\"paiss !== ''\" okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"seleccionarCiudad($event)\">\n                    <ion-select-option *ngFor=\"let ciudad of ciudades\" value=\"{{ciudad.nombre}}\">{{ciudad.nombre}}</ion-select-option>\n                </ion-select>\n\n\n            </ion-item> <br>\n\n            <ion-item-divider color=\"light\">\n                <ion-label>Horario de atención</ion-label>\n            </ion-item-divider>\n\n            <ion-item *ngIf=\"espere\">\n                <ion-label>Desde</ion-label>\n                <ion-datetime [value]=\"data.contenido.desde\" displayFormat=\"h:mm a\" (ionChange)=\"horario($event, 'desde')\"></ion-datetime>\n            </ion-item>\n\n            <ion-item *ngIf=\"espere\">\n                <ion-label>Hasta</ion-label>\n                <ion-datetime [value]=\"data.contenido.hasta\" displayFormat=\"h:mm a\" (ionChange)=\"horario($event, 'hasta')\"></ion-datetime>\n            </ion-item>\n\n            <ion-item-divider color=\"light\">\n                <ion-label>Días de atención</ion-label>\n            </ion-item-divider>\n\n            <ion-item *ngIf=\"espere\">\n                <strong>De</strong>\n                <ion-select placeholder=\"Seleccionar Día\" [value]=\"data.contenido.de\" okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"dias($event, 'de')\">\n                    <ion-select-option value=\"Lunes\">Lunes</ion-select-option>\n                    <ion-select-option value=\"Martes\">Martes</ion-select-option>\n                    <ion-select-option value=\"Miércoles\">Miércoles</ion-select-option>\n                    <ion-select-option value=\"Jueves\">Jueves</ion-select-option>\n                    <ion-select-option value=\"Viernes\">Viernes</ion-select-option>\n                    <ion-select-option value=\"Sábado\">Sábado</ion-select-option>\n                    <ion-select-option value=\"Domingo\">Domingo</ion-select-option>\n                </ion-select> <br>\n                <strong>A</strong>\n\n                <ion-select placeholder=\"Seleccionar Día\" [value]=\"data.contenido.a\" okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"dias($event, 'a')\">\n                    <ion-select-option value=\"Lunes\">Lunes</ion-select-option>\n                    <ion-select-option value=\"Martes\">Martes</ion-select-option>\n                    <ion-select-option value=\"Miércoles\">Miércoles</ion-select-option>\n                    <ion-select-option value=\"Jueves\">Jueves</ion-select-option>\n                    <ion-select-option value=\"Viernes\">Viernes</ion-select-option>\n                    <ion-select-option value=\"Sábado\">Sábado</ion-select-option>\n                    <ion-select-option value=\"Domingo\">Domingo</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item *ngIf=\"espere\" @entrada class=\"es-bottom\">\n                <ion-textarea rows=\"5\" class=\"ion-text-wrap\" placeholder=\"Cuentanos la historia del negocio, como empezó todo ?\" [(ngModel)]=\"dataNegocio.historia\"></ion-textarea>\n\n            </ion-item>\n        </div>\n\n    </div>\n\n\n    <div class=\"main\" *ngIf=\"type === 'vehiculo'\">\n\n        <div class=\"divider\"></div>\n\n\n        <ion-item-divider *ngIf=\"role === 'USER_ROLE'\" class=\"light\">\n            <ion-label class=\"ion-text-wrap\">\n                <strong>Específica las caratecristicas de tú Vehículo</strong>\n            </ion-label>\n\n        </ion-item-divider>\n\n        <div *ngIf=\"role === 'USER_ROLE'\">\n            <ion-item @entrada class=\"es-bottom\">\n                <ion-label>Tipo de Vehículo</ion-label>\n                <ion-select placeholder=\"Seleccionar Tipo de Vehículo\" [value]=\"dataVehiculo.tipo\" okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"tipoVehiculo($event)\">\n                    <ion-select-option value=\"Motocicleta\">Motocicleta</ion-select-option>\n                    <ion-select-option value=\"Carro\">Carro</ion-select-option>\n\n                </ion-select>\n            </ion-item>\n\n            <ion-item @entrada class=\"es-bottom\">\n                <ion-input type=\"text\" class=\"ion-text-wrap\" placeholder=\"Nombre del Vehículo\" [(ngModel)]=\"dataVehiculo.Nombre\"></ion-input>\n\n            </ion-item>\n\n            <ion-item @entrada class=\"es-bottom\">\n                <ion-input type=\"text\" class=\"ion-text-wrap\" placeholder=\"Marca del Vehículo\" [(ngModel)]=\"dataVehiculo.Marca\"></ion-input>\n\n            </ion-item>\n\n            <ion-item @entrada class=\"es-bottom\">\n                <ion-input type=\"text\" class=\"ion-text-wrap\" placeholder=\"Módelo del Vehículo\" [(ngModel)]=\"dataVehiculo.Modelo\"></ion-input>\n\n            </ion-item>\n        </div>\n\n    </div>\n\n\n\n\n    <div class=\"main\" *ngIf=\"type === 'servis'\">\n\n\n        <div class=\"divider\"></div>\n\n        <ion-item-divider color=\"light\">\n            <strong>Añadir Serivicos </strong>\n            <ion-buttons slot=\"end\">\n                <ion-button *ngIf=\"!nuevoServicio\" (click)=\"habilitarTrabajo()\">\n                    <ion-icon slot=\"icon-only\" name=\"add-outline\"></ion-icon>\n                </ion-button>\n\n                <ion-button *ngIf=\"nuevoServicio\" (click)=\"crearTrabajoChat()\" color=\"success\">\n                    <ion-icon slot=\"icon-only\" name=\"add-outline\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n        </ion-item-divider>\n\n        <ion-item @entrada *ngIf=\"nuevoServicio\" class=\"es-bottom\">\n            <ion-input type=\"text\" class=\"ion-text-wrap\" placeholder=\"Nombre del nuevo servicio \" [(ngModel)]=\"textoServicio\"></ion-input>\n            <ion-button color=\"danger\" shape=\"round\" slot=\"end\" (click)=\"cancelarTrabajo()\">\n                <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n            </ion-button>\n\n        </ion-item>\n\n        <ion-item-sliding *ngFor=\"let servicio of data.servicios; let i = index;\">\n            <ion-item lines=\"none\" class=\"servicio\">\n                <ion-avatar>\n                    <img src=\"/assets/Estrella.png\" width=\"30px\" alt=\"\">\n                </ion-avatar>\n                <ion-textarea type=\"text\" class=\"ion-text-wrap\" value=\"{{ servicio }}\"></ion-textarea>\n            </ion-item>\n            <ion-item-options side=\"end\">\n                <ion-item-option color=\"danger\" (click)=\"eliminar(i)\">\n                    <ion-icon name=\"trash-outline\" slot=\"icon-only\"></ion-icon>\n                </ion-item-option>\n            </ion-item-options>\n        </ion-item-sliding>\n\n\n\n\n    </div>\n\n\n</ion-content>");

/***/ }),

/***/ "aU/q":
/*!*****************************************************!*\
  !*** ./src/app/Pages/Modales/modal/modal.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides,\nion-slide {\n  width: 100%;\n}\n\n.fullancho {\n  min-height: 100%;\n  height: auto;\n}\n\n.cmedia {\n  position: relative;\n}\n\n.afuera {\n  position: absolute;\n  top: 10px;\n  left: 5px;\n  z-index: 10;\n}\n\n.img {\n  width: 100%;\n}\n\n.diapositiva {\n  width: 100%;\n  height: 100%;\n}\n\n.servicio {\n  border-bottom: 1px solid rgba(3, 3, 3, 0.1);\n}\n\n.servicio:nth-child(even) {\n  --background: #f9f9f9;\n}\n\n.campo {\n  background: #fafafa;\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.es-bottom {\n  margin-bottom: 10px;\n}\n\n.aviso {\n  --background: #FEE491;\n}\n\n.aviso:hover {\n  --background: #FEE491 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksMkNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQ0FBQTtBQUNKIiwiZmlsZSI6Im1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMsXHJcbmlvbi1zbGlkZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZ1bGxhbmNobyB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY21lZGlhIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmFmdWVyYSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiA1cHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRpYXBvc2l0aXZhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2VydmljaW8ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMywgMywgMywgMC4xKTtcclxufVxyXG5cclxuLnNlcnZpY2lvOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbn1cclxuXHJcbi5jYW1wbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5lcy1ib3R0b20ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmF2aXNvIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZFRTQ5MTtcclxufVxyXG5cclxuLmF2aXNvOmhvdmVyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZFRTQ5MSAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=default~Pages-usuario-perfil-perfil-module~Pages-usuario-perfil-visita-perfil-visita-module.js.map