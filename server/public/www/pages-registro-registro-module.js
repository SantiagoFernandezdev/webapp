(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registro-registro-module"],{

/***/ "//jU":
/*!**************************************************************!*\
  !*** ./src/app/providers/Utilidades/AlertService.service.ts ***!
  \**************************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let AlertService = class AlertService {
    constructor(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    // tslint:disable-next-line:ban-types
    alertBasicApplication(header, message, handlerFunction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header,
                message,
                buttons: [
                    {
                        role: 'cancel',
                        text: 'Cancelar'
                    },
                    {
                        text: 'Confirmar',
                        handler: () => {
                            handlerFunction();
                        }
                    }
                ]
            });
            return yield alert.present();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ "8+ML":
/*!***************************************************!*\
  !*** ./src/app/pages/registro/registro.module.ts ***!
  \***************************************************/
/*! exports provided: RegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro.page */ "AYF9");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Components/components.module */ "zon2");








const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]
    }
];
let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
    })
], RegistroPageModule);



/***/ }),

/***/ "AYF9":
/*!*************************************************!*\
  !*** ./src/app/pages/registro/registro.page.ts ***!
  \*************************************************/
/*! exports provided: RegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPage", function() { return RegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registro.page.html */ "SpOn");
/* harmony import */ var _registro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registro.page.scss */ "QzJ1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/Api/UsuariosLogin.service */ "oQG1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _providers_Registro_registro_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../providers/Registro/registro.service */ "3qam");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _providers_Utilidades_AlertService_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../providers/Utilidades/AlertService.service */ "//jU");
/* harmony import */ var _providers_PushService_PushService_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../providers/PushService/PushService.service */ "CkIw");
/* harmony import */ var src_app_Components_politica_politica_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/Components/politica/politica.component */ "h7Pn");














let RegistroPage = class RegistroPage {
    constructor(usuarioService, toastService, router, navCtrl, registroService, almacenamiento, platform, alertService, OSSignal, modal) {
        this.usuarioService = usuarioService;
        this.toastService = toastService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.registroService = registroService;
        this.almacenamiento = almacenamiento;
        this.platform = platform;
        this.alertService = alertService;
        this.OSSignal = OSSignal;
        this.modal = modal;
        this.usuarioValido = true;
        this.colorStatus = 'blanco';
        this.mensaje = 'Ingresa su nombre completo';
        this.usuarioID = '';
        this.paises = [];
        this.ciudades = [];
        this.ciudad = false;
        this.load = false;
        this.correo = '';
        this.pais = '';
        this.miciudad = '';
        this.placa = '';
        this.index = 0;
        this.acepto = false;
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'nombreCompleto': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)]),
            'nombreUsuario': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)]),
            // 'correo'        : new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
            'clave': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)]),
            'confirmarClave': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            'tel': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
        this.forma.controls['confirmarClave'].setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), this.compareClaves.bind(this.forma)
        ]);
        this.OSSignal.$usuarioID.subscribe((usuarioID) => {
            this.usuarioID = usuarioID;
            // // console.log('Entramos al usuarioID ', usuarioID);
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.colorStatus = 'blanco';
        this.mensaje = 'Ingresa su nombre completo';
        this.paises = [];
        this.ciudades = [];
        this.ciudad = false;
        this.load = false;
        this.correo = '';
        this.pais = '';
        this.miciudad = '';
        this.placa = '';
        this.index = 0;
        this.probar();
        this.listarPaises();
    }
    listarPaises() {
        this.usuarioService.listarPaises().subscribe((data) => {
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
    correom(event) {
        this.correo = event.detail.value;
    }
    placam(event) {
        this.placa = event.detail.value;
    }
    listarCiudades(event) {
        this.ciudad = true;
        this.pais = event.detail.value.nombre;
        this.miciudad = '';
        this.usuarioService.listarCiudades(event.detail.value._id).subscribe((data) => {
            if (data.exe) {
                this.ciudades = data.response;
                this.changeOne2();
            }
            else {
                this.toastService.toastError('No se pudo traer las ciudades, intente registrarse más tarde');
            }
        }, (err) => {
            this.toastService.toastError('No se pudo traer las ciudades, intente registrarse más tarde');
        });
    }
    seleccionarCiudad(event) {
        this.miciudad = event.detail.value;
        this.changeOne2();
    }
    probar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load = true;
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.Slide.lockSwipes(true).then(() => {
                    // // console.log('bien');
                });
            }
        });
    }
    changeOne2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(this.index, this.correo, this.placa);
            if (this.index === 1 && this.pais !== '' && this.miciudad !== '' && this.placa !== '' && this.correo !== '') {
                this.colorStatus = 'success';
            }
            else if (this.index !== 1) {
                this.colorStatus = 'success';
            }
            else {
                this.colorStatus = 'blanco';
            }
        });
    }
    changeOne(campoForma) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // // console.log(this.index);
            const item = campoForma.filter((dato) => dato === null);
            if (item.length === campoForma.length) {
                if (this.index === 1 && this.pais !== '' && this.miciudad !== '') {
                }
                else if (this.index !== 1) {
                    this.colorStatus = 'success';
                }
                else {
                    this.colorStatus = 'blanco';
                }
            }
            else {
                this.colorStatus = 'blanco';
            }
        });
    }
    retroceso() {
        this.alertService.alertBasicApplication('Mensaje', '¿Estas seguro de que deseas cancelar el registro?', () => {
            this.registroService.cambioEstado(true);
            this.navCtrl.navigateBack('/home');
        });
    }
    // Validaciones Funcines
    compareClaves(control) {
        if (control.value !== this.controls['clave'].value) {
            return {
                compare: true
            };
        }
        return null;
    }
    guardarCambios() {
        const dataRegistro = this.forma.value;
        dataRegistro.usuarioID = this.usuarioID === '' ? 'hola' : this.usuarioID;
        dataRegistro.pais = this.pais,
            dataRegistro.ciudad = this.miciudad;
        dataRegistro.placa = this.placa;
        dataRegistro.correo = this.correo;
        dataRegistro.acepto = this.acepto;
        if (this.acepto) {
            this.usuarioValido = false;
            this.usuarioService.registrar(dataRegistro).subscribe((datos) => {
                this.usuarioValido = true;
                delete datos.clave;
                datos.clave = this.forma.controls.clave.value;
                datos.usuarioID = 'hola';
                this.almacenamiento.guardarUsuario(datos).then(() => {
                    this.toastService.alertApplication('Usuario registrado corectamente', true);
                    this.registroService.cambioEstado(true);
                    this.almacenamiento.cambiarEstado(false);
                    this.navCtrl.navigateForward(['/central']);
                }, (error) => {
                    this.usuarioValido = true;
                    this.toastService.alertApplication(error, false);
                });
            }, (error) => { this.toastService.alertApplication(error, false); this.usuarioValido = true; }, () => { });
        }
        else {
            this.toastService.toastError('Debe aceptar las políticas de la aplicación');
        }
    }
    comprobarUsuario(event) {
        if (!this.forma.controls.nombreUsuario.errors) {
            this.usuarioValido = false;
            this.usuarioService.usuario(event.detail.value).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (data.exe) {
                    this.usuarioValido = true;
                    this.colorStatus = 'blanco';
                    this.mensaje = 'El usuario ya existe, por favor escoge otro nombre';
                }
                else {
                    this.colorStatus = 'success';
                    this.usuarioValido = true;
                    this.mensaje = 'El nombre de usuario esta disponible';
                }
            }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.toastService.alertApplication(error, false);
                this.usuarioValido = true;
            }), () => {
                // // console.log('Listo Completado');
            });
        }
        else {
            this.colorStatus = 'blanco';
        }
    }
    next() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // // console.log('Next');
            if (this.colorStatus === 'success') {
                yield this.Content.scrollToTop(100);
                this.Slide.getActiveIndex().then((index) => {
                    this.index = index;
                    if (index === 3) {
                        this.guardarCambios();
                        return;
                    }
                    else if (index === 0) {
                        this.mensaje = 'Escge un nombre de usuario personalizado';
                    }
                    else if (index === 1) {
                        this.mensaje = 'Ingresa un correo y número celular válido al cual se contacten contigo';
                    }
                    else if (index === 2) {
                        this.mensaje = 'Tú contraseña debe tener almenos 8 caracteres';
                    }
                    this.avanzar();
                });
            }
        });
    }
    avanzar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // // console.log('Avanzar');
            this.colorStatus = 'blanco';
            this.registroService.cambioEstado(false);
            yield this.Slide.lockSwipes(false);
            yield this.Slide.lockSwipeToPrev(true);
            yield this.Slide.slideNext(300);
            yield this.Slide.lockSwipeToNext(true);
        });
    }
    politicas() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_Components_politica_politica_component__WEBPACK_IMPORTED_MODULE_13__["PoliticaComponent"]
            });
            yield modal.present();
        });
    }
    aceptar(event) {
        this.acepto = event.detail.checked;
    }
    ioniewDidLeave() {
        this.Slide.lockSwipes(true).then(() => {
            // // console.log('bien');
        });
    }
};
RegistroPage.ctorParameters = () => [
    { type: src_app_providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_6__["UsuariosLoginService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_10__["ToastServices"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _providers_Registro_registro_service__WEBPACK_IMPORTED_MODULE_8__["RegistroService"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_9__["InicioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _providers_Utilidades_AlertService_service__WEBPACK_IMPORTED_MODULE_11__["AlertService"] },
    { type: _providers_PushService_PushService_service__WEBPACK_IMPORTED_MODULE_12__["PushService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
RegistroPage.propDecorators = {
    Slide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slide', { static: false },] }],
    Content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['content',] }]
};
RegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registro',
        template: _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegistroPage);



/***/ }),

/***/ "QzJ1":
/*!***************************************************!*\
  !*** ./src/app/pages/registro/registro.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contenedor {\n  width: auto;\n  max-width: 600px;\n  margin: auto;\n}\n\n.cancelar {\n  display: flex;\n  align-items: center;\n}\n\nion-item {\n  width: 100% !important;\n}\n\n.campo {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n}\n\n.contenido .load {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.contenido {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.contenido p {\n  text-align: center;\n  width: 80%;\n  opacity: 0.7;\n}\n\n.message {\n  background: #FFEEC0;\n}\n\n.sizeM {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3Ryby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ2hCOztBQUVZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ2hCOztBQUVZO0VBQ0ksc0JBQUE7QUFDaEI7O0FBRVk7RUFDSSxvQ0FBQTtBQUNoQjs7QUFFWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ2hCOztBQUVZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDaEI7O0FBRVk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQ2hCOztBQUVZO0VBQ0ksbUJBQUE7QUFDaEI7O0FBRVk7RUFDSSxlQUFBO0FBQ2hCIiwiZmlsZSI6InJlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAgICAgICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmNhbmNlbGFyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuY2FtcG8ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuY29udGVuaWRvIC5sb2FkIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jb250ZW5pZG8ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuY29udGVuaWRvIHAge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZFRUMwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc2l6ZU0ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB9Il19 */");

/***/ }),

/***/ "SpOn":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro/registro.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"\" class=\"ion-no-border\">\n    <ion-toolbar color=\"success\">\n        <ion-buttons slot=\"start\">\n            <ion-button class=\"cancelar\" (click)=\"retroceso()\" fill=\"clear\">\n                <ion-icon name=\"arrow-back-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Crear cuenta</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content #content color=\"blanco\">\n    <div class=\"contenedor\">\n\n        <form [formGroup]=\"forma\" (ngSubmit)=\"guardarCambios()\">\n\n            <ion-slides *ngIf=\"load\" #slide class=\"slide-full\">\n\n                <ion-slide class=\"slide\">\n                    <div class=\"content\" style=\"width: 100%;\">\n\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col size=\"12\">\n                                    <p class=\"ion-margin-top\"></p>\n                                    <ion-item lines=\"none\" class=\" ion-margin-top\" mode=\"md\">\n                                        <ion-label class=\"ion-text-wrap\">Escriba su nombre completo de Persona o negocio correspondiente</ion-label>\n                                    </ion-item>\n                                    <ion-item lines=\"none\" class=\"campo ion-margin-top\" mode=\"ios\">\n                                        <ion-input placeholder=\"Nombre Completo\" type=\"text\" formControlName=\"nombreCompleto\" (ionChange)=\"changeOne([forma.controls.nombreCompleto.errors])\"></ion-input>\n                                    </ion-item>\n\n                                </ion-col>\n                            </ion-row>\n\n                        </ion-grid>\n\n\n                    </div>\n                </ion-slide>\n\n\n\n\n                <ion-slide class=\"slide\">\n                    <div class=\"content\" style=\"width: 100%;\">\n\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col size=\"12\">\n                                    <ion-item lines=\"none\" class=\" ion-margin-top\" mode=\"md\">\n                                        <ion-label class=\"ion-text-wrap\">Escriba un nombre de usuario para la aplicación</ion-label>\n                                    </ion-item>\n                                    <ion-item lines=\"none\" class=\"campo ion-margin-top\" mode=\"ios\">\n                                        <ion-input placeholder=\"Moto_28\" type=\"text\" formControlName=\"nombreUsuario\" (ionChange)=\"comprobarUsuario($event)\"></ion-input>\n                                    </ion-item>\n                                </ion-col>\n\n                                <ion-col size=\"12\">\n                                    <br>\n\n                                </ion-col>\n\n                                <ion-col size=\"12\">\n                                    <br>\n\n                                    <div class=\"contenido\" *ngIf=\"!usuarioValido\">\n                                        <div class=\"load\">\n                                            <ion-spinner color=\"primary\" name=\"crescent\"></ion-spinner>\n                                            <p>Validando Usuario...</p>\n                                        </div>\n\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n\n\n                    </div>\n                </ion-slide>\n\n\n                <ion-slide class=\"slide\">\n                    <div class=\"content\" style=\"width: 100%;\">\n\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col size=\"12\">\n                                    <ion-item lines=\"none\" class=\" ion-margin-top sinfondo\" mode=\"md\">\n                                        <ion-chip color=\"danger\">Requerido</ion-chip>\n                                    </ion-item>\n                                    <ion-item lines=\"none\" class=\" ion-margin-top\" mode=\"md\">\n                                        <ion-label class=\"ion-text-wrap\">Placa del vehículo</ion-label>\n                                    </ion-item>\n                                    <ion-item lines=\"none\" class=\"campo ion-margin-top\" mode=\"ios\">\n                                        <ion-input placeholder=\"Número de Placa\" type=\"text\" (ionChange)=\"placam($event)\"></ion-input>\n                                    </ion-item>\n                                    <ion-item lines=\"none\" class=\" ion-margin-top sinfondo\" mode=\"md\">\n                                        <ion-chip color=\"danger\">Requerido</ion-chip>\n                                    </ion-item>\n\n                                    <ion-item lines=\"none\" class=\" ion-margin-top\" mode=\"md\">\n                                        <ion-label class=\"ion-text-wrap\">Escriba su correo electrónico (obligatorio)</ion-label>\n                                    </ion-item>\n\n                                    <ion-item lines=\"none\" class=\"campo ion-margin-top\" mode=\"ios\">\n                                        <ion-input placeholder=\"Correo Electrónico\" type=\"email\" (ionChange)=\"correom($event)\"></ion-input>\n                                    </ion-item>\n\n                                    <ion-item lines=\"none\" class=\" ion-margin-top\" mode=\"md\">\n                                        <ion-label class=\"ion-text-wrap\">Escriba su teléfono celular (opcional)</ion-label>\n                                    </ion-item>\n                                    <ion-item lines=\"none\" class=\"campo ion-margin-top\" mode=\"ios\">\n                                        <ion-input placeholder=\"Número de Celular\" type=\"tel\" formControlName=\"tel\" (ionChange)=\"changeOne([forma.controls.correo.errors, forma.controls.tel.errors])\"></ion-input>\n                                    </ion-item>\n\n                                    <ion-item lines=\"none\" class=\" ion-margin-top sinfondo\" mode=\"md\">\n                                        <ion-chip color=\"danger\">Requerido</ion-chip>\n                                    </ion-item>\n\n                                    <ion-item lines=\"none\" class=\"\" mode=\"md\">\n                                        <ion-label class=\"ion-text-wrap\">Selecciona el País</ion-label>\n                                        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"listarCiudades($event)\">\n                                            <ion-select-option *ngFor=\"let pais of paises\" [value]=\"pais\">{{pais.nombre}}</ion-select-option>\n                                        </ion-select>\n                                    </ion-item>´\n\n\n\n                                    <ion-item *ngIf=\"ciudad\" lines=\"none\" class=\" ion-margin-top sinfondo\" mode=\"md\">\n                                        <ion-chip color=\"danger\">Requerido</ion-chip>\n                                    </ion-item>\n                                    <ion-item *ngIf=\"ciudad\" lines=\"none\" class=\" \" mode=\"md\">\n                                        <ion-label class=\"ion-text-wrap\">Selecciona la ciudad</ion-label>\n                                        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"seleccionarCiudad($event)\">\n                                            <ion-select-option *ngFor=\"let ciudad of ciudades\" value=\"{{ciudad.nombre}}\">{{ciudad.nombre}}</ion-select-option>\n                                        </ion-select>\n                                    </ion-item>\n\n                                </ion-col>\n\n\n                            </ion-row>\n                        </ion-grid>\n\n\n                    </div>\n                </ion-slide>\n\n\n                <ion-slide class=\"slide\">\n                    <div class=\"content\" style=\"width: 100%;\">\n\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col size=\"12\">\n                                    <ion-item lines=\"none\" class=\" ion-margin-top\" mode=\"md\" color=\"light\">\n                                        <ion-label class=\"ion-text-wrap\">Contraseña de mínimo 8 caracteres</ion-label>\n                                    </ion-item>\n\n                                    <ion-item lines=\"none\" class=\" ion-margin-top\" mode=\"md\">\n                                        <ion-label class=\"ion-text-wrap\">Escriba su contraseña</ion-label>\n                                    </ion-item>\n                                    <ion-item lines=\"none\" class=\"campo ion-margin-top\" mode=\"ios\">\n                                        <ion-input type=\"password\" formControlName=\"clave\" (ionChange)=\"changeOne([forma.controls.clave.errors, forma.controls.confirmarClave.errors])\"></ion-input>\n                                    </ion-item>\n                                </ion-col>\n\n\n                                <ion-col size=\"12\">\n                                    <ion-item lines=\"none\" class=\" ion-margin-top\" mode=\"md\">\n                                        <ion-label class=\"ion-text-wrap\">Confirmar la contraseña</ion-label>\n                                    </ion-item>\n                                    <ion-item lines=\"none\" class=\"campo ion-margin-top\" mode=\"ios\">\n                                        <ion-input type=\"password\" formControlName=\"confirmarClave\" (ionChange)=\"changeOne([forma.controls.clave.errors, forma.controls.confirmarClave.errors])\"></ion-input>\n                                    </ion-item>\n                                    <h4 class=\"ion-text-center ion-margin-top opacity\">Clave Privada</h4><br><br>\n                                </ion-col>\n\n                                <ion-col size=\"12\">\n                                    <ion-item color=\"light\" lines=\"none\" class=\"noborder ion-margin-top\" mode=\"md\" (click)=\"politicas()\">\n                                        <ion-label class=\"ion-text-wrap azul\">Leer políticas de datos</ion-label>\n                                    </ion-item>\n\n                                    <ion-item lines=\"none\" class=\"noborder ion-margin-top\" color=\"light\" mode=\"md\">\n\n                                        <ion-checkbox color=\"barra\" slot=\"start\" (ionChange)=\"aceptar($event)\"></ion-checkbox>\n                                        <ion-label class=\"ion-text-wrap\">Acepto políticas de datos</ion-label>\n                                    </ion-item>\n                                    <br><br>\n\n                                </ion-col>\n\n                                <ion-col size=\"12\">\n                                    <br>\n\n                                    <div *ngIf=\"!usuarioValido\" class=\"contenido\">\n                                        <ion-spinner color=\"primary\" name=\"crescent\"> Guardando información</ion-spinner>\n\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n\n\n                    </div>\n                </ion-slide>\n\n            </ion-slides>\n\n\n        </form>\n    </div>\n</ion-content>\n\n<ion-footer mode=\"md\">\n    <ion-toolbar [color]=\"colorStatus\" (click)=\"next()\">\n        <ion-title slot=\"start\">Continuar</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\">\n                <ion-icon name=\"arrow-round-forward\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n\n        </ion-buttons>\n    </ion-toolbar>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=pages-registro-registro-module.js.map