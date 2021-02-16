(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-Modales-hoja-vida-modal-hoja-vida-modal-module"],{

/***/ "0Ilk":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Modales/hoja-vida-modal/hoja-vida-modal.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"darkgold\" [fullscreen]=\"true\" *ngIf=\"tipoVista === 'fotos'\">\n    <ion-item color=\"darkgold\">\n\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"/central/menu/hoja\">\n\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"guardar()\" color=\"blanco\">\n                <ion-icon name=\"save-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-item>\n\n    <ion-item color=\"darkgold\">\n        <ion-label>Seleccione el tipo</ion-label>\n        <ion-select (ionChange)=\"cambiar( $event )\" value=\"Fotos de Entrada\" cancelText=\"Cancelar\" okText=\"Aplicar\">\n            <ion-select-option value=\"Fotos de Entrada\">Fotos de Entrada</ion-select-option>\n            <ion-select-option value=\"Fotos de Salida\">Fotos de Salida</ion-select-option>\n            <ion-select-option value=\"Novedades\">Novedades</ion-select-option>\n        </ion-select>\n\n\n    </ion-item>\n\n    <ion-slides *ngIf=\"cargado\" [options]=\"slideOpt\">\n        <ion-slide *ngFor=\"let archivo of carreteRoot; let i = index;\">\n            <img *ngIf=\"archivo.mime.includes('image')\" src=\"{{archivo.path}}\" width=\"100%\">\n            <ion-textarea inputmode=\"text\" [autoGrow]=\"gorw\" maxlength=\"200\" placeholder=\"Escribe alguna descripción\" (ionChange)=\"descripcion($event, i)\" [value]=\"archivo.texto\"></ion-textarea>\n\n            <div class=\"eliminar\" (click)=\"eliminardelCarrete(i)\">\n                <ion-chip color=\"danger\">Eliminar</ion-chip>\n            </div>\n        </ion-slide>\n    </ion-slides>\n\n\n    <ion-fab slot=\"fixed\" horizontal=\"end\" vertical=\"bottom\">\n        <ion-fab-button (click)=\"seleccione()\" color=\"dark\">\n            <ion-icon name=\"camera-outline\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n\n<ion-header *ngIf=\"tipoVista === 'repuestos' || tipoVista === 'trabajos'\" class=\"ion-no-border\">\n    <ion-toolbar color=\"oscuro\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"/central/menu/hoja\">\n\n            </ion-back-button>\n        </ion-buttons>\n\n        <ion-title>Añadir</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"dark\" *ngIf=\"tipoVista === 'ver'\">\n    <div class=\"barra\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"/central/menu/hoja\">\n\n            </ion-back-button>\n\n            {{ titulotipo }}\n        </ion-buttons>\n\n    </div>\n    <ion-slides #ele class=\"verslide\" *ngIf=\"cargado\" [options]=\"slideOpt\" (ionSlideDidChange)=\"cambiarSlide()\">\n\n        <ion-slide *ngFor=\"let archivo of fotos; let i = index;\">\n\n            <img *ngIf=\"archivo.mime.includes('image')\" src=\"https://motocaliapp.com/11927613402/{{archivo.ruta}}\">\n\n        </ion-slide>\n    </ion-slides>\n    <div class=\"texto\" *ngIf=\"mt\">{{textoActual}}</div>\n</ion-content>\n\n<ion-content *ngIf=\"tipoVista === 'repuestos' || tipoVista === 'trabajos'\">\n\n    <ion-card mode=\"ios\" *ngIf=\"tipoVista === 'repuestos'\">\n        <ion-card-content>\n\n\n            <ion-list>\n\n                <ion-item class=\"sinfondo\" lines=\"none\">\n                    <ion-label slot=\"start\" class=\"ion-text-wrap\">\n                        Nombre del prodcuto\n                    </ion-label>\n                </ion-item>\n\n                <ion-item class=\"sinfondo\">\n                    <ion-input [(ngModel)]=\"repuesto.nombre\" type=\"text\" placeholder=\"Nombre del producto\"></ion-input>\n                </ion-item>\n                <br>\n                <ion-item class=\"sinfondo\" lines=\"none\">\n                    <ion-label slot=\"start\">\n                        Precio Unitario\n                    </ion-label>\n                </ion-item>\n\n                <ion-item class=\"sinfondo\">\n                    <ion-input (ionChange)=\"salidaCambioProd($event, 'precio')\" [(ngModel)]=\"repuesto.precio\" type=\"number\" placeholder=\"Digitar valor\"></ion-input>\n                </ion-item>\n\n                <ion-item class=\"sinfondo\" lines=\"none\">\n                    <ion-label slot=\"start\">\n                        Cantidad\n                    </ion-label>\n\n                </ion-item>\n\n                <ion-item class=\"sinfondo\">\n                    <ion-input (ionChange)=\"salidaCambioProd($event, 'canti')\" [(ngModel)]=\"repuesto.cantidad\" type=\"number\" placeholder=\"Digitar valor\"></ion-input>\n\n                </ion-item>\n                <br>\n\n                <div class=\"total \">\n                    <div class=\"flexbet\">\n                        <strong>Total: </strong> <span class=\"verdei\">${{repuesto.total | decimales:'es-CO'}}</span>\n                    </div>\n\n                </div>\n\n\n\n            </ion-list>\n\n            <div class=\"flexbet\">\n\n\n\n                <ion-button class=\"btn\" color=\"barra\" expand=\"block\" mode=\"ios\" shape=\"round\" (click)=\"guardarHoja('rep')\">GUARDAR</ion-button>\n            </div>\n        </ion-card-content>\n    </ion-card>\n\n\n\n    <ion-card mode=\"ios\" *ngIf=\"tipoVista === 'trabajos'\">\n        <ion-card-content>\n\n\n            <ion-list>\n\n                <ion-item class=\"sinfondo\" lines=\"none\">\n                    <ion-label slot=\"start\" class=\"ion-text-wrap\">\n                        Nombre del trabajo\n                    </ion-label>\n                </ion-item>\n\n                <ion-item class=\"sinfondo\">\n                    <ion-input [(ngModel)]=\"trabajo.nombre\" type=\"text\" placeholder=\"Nombre del trabajo\"></ion-input>\n                </ion-item>\n\n                <br>\n                <ion-item class=\"sinfondo\" lines=\"none\">\n                    <ion-label slot=\"start\" class=\"ion-text-wrap\">\n                        Precio Mano de Obra\n                    </ion-label>\n                </ion-item>\n\n                <ion-item class=\"sinfondo\">\n                    <ion-input [(ngModel)]=\"trabajo.precio\" type=\"number\" placeholder=\"Digitar valor\"></ion-input>\n                </ion-item>\n\n                <br>\n\n                <div class=\"total \">\n                    <div class=\"flexbet\">\n                        <strong>Total: </strong> <span class=\"verdei\">${{trabajo.precio | decimales:'es-CO'}}</span>\n                    </div>\n\n                </div>\n\n\n\n            </ion-list>\n\n            <div class=\"flexbet\">\n\n\n\n                <ion-button class=\"btn\" color=\"barra\" expand=\"block\" mode=\"ios\" shape=\"round\" (click)=\"guardarHoja('tra')\">GUARDAR</ion-button>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ "8Loi":
/*!*************************************************************************!*\
  !*** ./src/app/Pages/Modales/hoja-vida-modal/hoja-vida-modal.module.ts ***!
  \*************************************************************************/
/*! exports provided: HojaVidaModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HojaVidaModalPageModule", function() { return HojaVidaModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _hoja_vida_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hoja-vida-modal-routing.module */ "pHVU");
/* harmony import */ var _hoja_vida_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hoja-vida-modal.page */ "WlOG");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");








let HojaVidaModalPageModule = class HojaVidaModalPageModule {
};
HojaVidaModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _hoja_vida_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["HojaVidaModalPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_hoja_vida_modal_page__WEBPACK_IMPORTED_MODULE_6__["HojaVidaModalPage"]]
    })
], HojaVidaModalPageModule);



/***/ }),

/***/ "WlOG":
/*!***********************************************************************!*\
  !*** ./src/app/Pages/Modales/hoja-vida-modal/hoja-vida-modal.page.ts ***!
  \***********************************************************************/
/*! exports provided: HojaVidaModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HojaVidaModalPage", function() { return HojaVidaModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_hoja_vida_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./hoja-vida-modal.page.html */ "0Ilk");
/* harmony import */ var _hoja_vida_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hoja-vida-modal.page.scss */ "Xtlb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../providers/Utilidades/LoadingService.service */ "r3ab");
/* harmony import */ var _providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../providers/Api/EstadoCitas.service */ "AQLj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");











let HojaVidaModalPage = class HojaVidaModalPage {
    constructor(modalCtrl, actionCtrl, almacenamiento, camera, toast, myLoading, hojaApi, activeRoute, router) {
        this.modalCtrl = modalCtrl;
        this.actionCtrl = actionCtrl;
        this.almacenamiento = almacenamiento;
        this.camera = camera;
        this.toast = toast;
        this.myLoading = myLoading;
        this.hojaApi = hojaApi;
        this.activeRoute = activeRoute;
        this.router = router;
        this.carrete = [];
        this.carreteRoot = [];
        this.tipo = 'Fotos de Entrada';
        this.cargado = false;
        this.gorw = false;
        this.mt = true;
        this.slideOpt = {
            zoom: {
                maxRation: 8,
                toggle: true
            }
        };
        this.tipoVista = '';
        this.repuesto = {
            nombre: '',
            precio: undefined,
            cantidad: undefined,
            total: 0
        };
        this.trabajo = {
            nombre: '',
            precio: 0
        };
        this.repuestos = [];
        this.trabajos = [];
        this.id = '';
        this.idHoja = '';
        this.fotos = [];
        this.titulo = '';
        this.textoActual = '';
        this.titulotipo = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.tipoVista = this.activeRoute.snapshot.paramMap.get('tipo');
            this.id = this.activeRoute.snapshot.paramMap.get('id');
            this.idHoja = this.activeRoute.snapshot.paramMap.get('hoja');
            if (this.activeRoute.snapshot.paramMap.get('tipo') === 'ver') {
                this.traerFotos();
            }
            this.miHoja();
        });
    }
    traerFotos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.cargado = true;
                this.hojaApi.leefotos(info.token, { id: this.idHoja }).subscribe((data) => {
                    // console.log(data, 'ft')
                    if (data.exe) {
                        this.fotos = data.response;
                        this.textoActual = this.fotos[0].asunto;
                        this.titulotipo = this.fotos[0].tipo;
                        this.slide.slideTo(parseFloat(this.activeRoute.snapshot.paramMap.get('idx')), 300).then(() => {
                        }).catch(() => {
                        });
                    }
                    else {
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo traer las fotos de la hoja de vida, inténtelo más tarde');
                });
            }
        });
    }
    cambiarSlide() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.slide.getActiveIndex().then((indx) => {
                this.titulotipo = this.fotos[indx].tipo;
                this.textoActual = this.fotos[indx].asunto;
            });
        });
    }
    miHoja() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.cargado = true;
                this.hojaApi.leeHoja2(info.token, { id: this.id }).subscribe((data) => {
                    if (data.exe) {
                        // console.log(data);
                        this.idHoja = data.response._id;
                        this.repuestos = data.response.repuestos;
                        this.trabajos = data.response.trabajos;
                    }
                    else {
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo traer la información de la hoja de vida, inténtelo más tarde');
                });
            }
        });
    }
    cambiar(event) {
        this.tipo = event.detail.value;
    }
    descripcion(event, idx) {
        if (event.detail.value !== '') {
            this.gorw = true;
        }
        else {
            this.gorw = false;
        }
        this.carreteRoot[idx].texto = event.detail.value;
        this.carrete[idx].texto = event.detail.value;
    }
    seleccione() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const action = yield this.actionCtrl.create({
                header: 'Escoge una opción',
                buttons: [
                    {
                        icon: 'camera-outline',
                        text: 'Tomar foto de la cámara',
                        handler: () => {
                            this.tomarFoto(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        icon: 'image-outline',
                        text: 'Subir foto de galería',
                        handler: () => {
                            this.tomarFoto(this.camera.PictureSourceType.PHOTOLIBRARY, 'image');
                        }
                    }
                ]
            });
            yield action.present();
        });
    }
    tomarFoto(sourceType, mode) {
        const options = {
            quality: 100,
            allowEdit: true,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.FILE_URI,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType
        };
        this.camera.getPicture(options).then((imageData) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let mim = '';
            let name = '';
            // // console.log('image data', imageData)
            if (imageData.includes('jpg')) {
                mim = 'image/jpg';
                name = 'image.jpg';
            }
            else if (imageData.includes('png')) {
                mim = 'image/png';
                name = 'image.png';
            }
            else if (imageData.includes('jpeg')) {
                mim = 'image/jpeg';
                name = 'image.jpeg';
            }
            else if (imageData.includes('gif')) {
                mim = 'image/gif';
                name = 'image.gif';
            }
            else {
                name = 'video.mp4';
                mim = 'video/mp4';
            }
            // console.log('Mi archivo', name, mim)
            this.carrete.push({ path: imageData, name, mime: mim, cont: this.carrete.length + 1, texto: '' });
            const url = window.Ionic.WebView.convertFileSrc(imageData);
            this.carreteRoot.push({ path: url, mime: mim, texto: '' });
            // // console.log(this.carrete);
            this.camera.cleanup().then(() => { });
        }));
    }
    eliminardelCarrete(indice) {
        this.carrete.splice(indice, 1);
        this.carreteRoot.splice(indice, 1);
    }
    salidaCambioProd(event, tipo) {
        if (tipo === 'precio') {
            this.repuesto.precio = event.detail.value;
        }
        else if (tipo === 'canti') {
            this.repuesto.cantidad = event.detail.value;
        }
        this.repuesto.total = this.repuesto.precio * this.repuesto.cantidad;
    }
    guardarHoja(tipo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                let msg = '';
                if (tipo === 'rep') {
                    if (this.repuesto.nombre === '' || this.repuesto.nombre === ' ') {
                        this.toast.toastError('Debe específicar el nombre del repuesto');
                        return;
                    }
                    if (!this.repuesto.precio || this.repuesto.precio === 0) {
                        this.toast.toastError('Ingrese un precio para el repuesto');
                        return;
                    }
                    if (!this.repuesto.cantidad || this.repuesto.cantidad === 0) {
                        this.toast.toastError('Ingrese una cantidad para el repuesto');
                        return;
                    }
                    msg = 'Repuesto agregado';
                    this.repuestos.push(this.repuesto);
                }
                else if (tipo === 'tra') {
                    if (this.trabajo.nombre === '' || this.trabajo.nombre === ' ') {
                        this.toast.toastError('Debe específicar el trabajo realizado');
                        return;
                    }
                    if (!this.trabajo.precio || this.trabajo.precio === 0) {
                        this.toast.toastError('Ingrese un valor de mano de obrao');
                        return;
                    }
                    msg = 'Trabajo agregado';
                    this.trabajos.push(this.trabajo);
                }
                this.cargado = true;
                this.hojaApi.editarHoja(info.token, { id: this.idHoja, repuestos: this.repuestos, trabajos: this.trabajos }).subscribe((data) => {
                    if (data.exe) {
                        this.toast.toastExitoso(msg, 3000);
                    }
                    else {
                        this.toast.toastError('No se pudo realizar la petición, inténtelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo realizar la petición, inténtelo más tarde');
                });
            }
        });
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // // console.log(this.carrete);
            if (this.carrete.length > 0) {
                const info = yield this.almacenamiento.obtenerToken();
                this.myLoading.cargaProcesos('subiendo imágenes, por favor espere');
                if (info) {
                    const id = this.idHoja;
                    // console.log(this.carrete, ' imagenes');
                    let cont = this.carrete.length;
                    let final = this.carrete.length === 1 ? true : false;
                    this.carrete.forEach((item) => {
                        // // console.log(item, 'itm');
                        // tslint:disable-next-line:max-line-length
                        this.hojaApi.subirArchivosHoja(info.token, id, item.path, item.texto, this.tipo, item.name, item.mime).subscribe((image) => {
                            image.response = JSON.parse(image.response);
                            if (image.response.exe) {
                                cont--;
                                // console.log('Entamos')
                                if (cont === 1) {
                                    final = true;
                                }
                                if (cont === 0) {
                                    image.response.response.tipo = 'file';
                                    this.myLoading.finalizarCargado();
                                    this.toast.toastNotificacion('Fotos subidas a la hoja de vida');
                                    this.router.navigate(['/central/menu/miscitas/hoja', this.activeRoute.snapshot.paramMap.get('id')]);
                                }
                            }
                            // // console.log(image, ' image cada vuelta');
                        }, (error) => {
                            // // console.log('Error ', error);
                            this.myLoading.finalizarCargado();
                            this.toast.alertApplication('No se pudo subir la imagen', true);
                        });
                    });
                }
            }
        });
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
};
HojaVidaModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__["ToastServices"] },
    { type: _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"] },
    { type: _providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_9__["EstadoCitasService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
];
HojaVidaModalPage.propDecorators = {
    slide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['ele', { static: false },] }]
};
HojaVidaModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-hoja-vida-modal',
        template: _raw_loader_hoja_vida_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_hoja_vida_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HojaVidaModalPage);



/***/ }),

/***/ "Xtlb":
/*!*************************************************************************!*\
  !*** ./src/app/Pages/Modales/hoja-vida-modal/hoja-vida-modal.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\nion-slides {\n  width: 100%;\n  min-height: 100%;\n}\n\n.verslide {\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  max-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\nion-slide {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  min-height: 100%;\n  position: relative;\n}\n\n.verslide ion-slide {\n  max-height: 100vh;\n}\n\nion-slide div {\n  max-width: 100%;\n  max-height: 100vh;\n}\n\nion-slide div img {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.barra {\n  width: 100%;\n  position: fixed;\n  top: 0px;\n  background-color: var(--ion-color-oscuro);\n  color: #ffffff;\n  font-size: 16px;\n  z-index: 100;\n}\n\nion-textarea,\n.texto {\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n  padding: 5px;\n  margin: 0px;\n  opacity: 0.7;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.7);\n}\n\n.texto {\n  text-align: center;\n  font-size: 14px;\n}\n\n.eliminar {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 10;\n}\n\nion-card {\n  width: 100%;\n  margin: auto 0px;\n}\n\n.flexbet {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.flexbet ion-button {\n  width: 50%;\n}\n\n.tprod {\n  text-align: center;\n  width: 100%;\n  font-size: 18px;\n  color: #333333;\n  padding: 0 10px !important;\n}\n\n.verdei {\n  color: #0c6809;\n}\n\n.total {\n  border-top: 1px solid rgba(255, 255, 255, 0.3);\n  color: #333333;\n  font-size: 22px;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaG9qYS12aWRhLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EseUNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTs7RUFFSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLDhDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoiaG9qYS12aWRhLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi52ZXJzbGlkZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmlvbi1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udmVyc2xpZGUgaW9uLXNsaWRlIHtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5pb24tc2xpZGUgZGl2IHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5pb24tc2xpZGUgZGl2IGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYmFycmEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1vc2N1cm8pO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbmlvbi10ZXh0YXJlYSxcclxuLnRleHRvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG9wYWNpdHk6IC43O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbn1cclxuXHJcbi50ZXh0byB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5lbGltaW5hciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0byAwcHg7XHJcbn1cclxuXHJcbi5mbGV4YmV0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleGJldCBpb24tYnV0dG9uIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi50cHJvZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52ZXJkZWkge1xyXG4gICAgY29sb3I6ICMwYzY4MDk7XHJcbn1cclxuXHJcbi50b3RhbCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "pHVU":
/*!*********************************************************************************!*\
  !*** ./src/app/Pages/Modales/hoja-vida-modal/hoja-vida-modal-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: HojaVidaModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HojaVidaModalPageRoutingModule", function() { return HojaVidaModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _hoja_vida_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hoja-vida-modal.page */ "WlOG");




const routes = [
    {
        path: '',
        component: _hoja_vida_modal_page__WEBPACK_IMPORTED_MODULE_3__["HojaVidaModalPage"]
    }
];
let HojaVidaModalPageRoutingModule = class HojaVidaModalPageRoutingModule {
};
HojaVidaModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HojaVidaModalPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=Pages-Modales-hoja-vida-modal-hoja-vida-modal-module.js.map