(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-Santiago-sancreador-sancreador-module"],{

/***/ "2Lof":
/*!****************************************************************!*\
  !*** ./src/app/Pages/Santiago/sancreador/sancreador.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 10px;\n}\n\nion-slides {\n  width: 100%;\n  min-height: 100%;\n}\n\nion-slide {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  min-height: 100%;\n}\n\ndiv {\n  width: 100%;\n}\n\n.color {\n  margin: 5px;\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n}\n\n.color span {\n  opacity: 0;\n}\n\n.lienzo {\n  margin-top: 10px;\n  width: 100%;\n  max-height: auto;\n  padding: 10px;\n}\n\n.text-lienzo {\n  width: 100%;\n  text-align: center;\n  min-height: 100% !important;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 1.7;\n}\n\n.comentario {\n  width: 100%;\n  text-align: left;\n}\n\n.amarillo {\n  --background: #FEF1A7 !important;\n}\n\n.flexc {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.tituloGrande {\n  text-align: center;\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2FuY3JlYWRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InNhbmNyZWFkb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5pb24tc2xpZGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29sb3Ige1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jb2xvciBzcGFuIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5saWVuem8ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWxpZW56byB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNztcclxufVxyXG5cclxuLmNvbWVudGFyaW8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uYW1hcmlsbG8ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkVGMUE3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4YyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdHVsb0dyYW5kZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "9yuI":
/*!**************************************************************!*\
  !*** ./src/app/Pages/Santiago/sancreador/sancreador.page.ts ***!
  \**************************************************************/
/*! exports provided: SANcreadorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SANcreadorPage", function() { return SANcreadorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sancreador_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sancreador.page.html */ "hLwL");
/* harmony import */ var _sancreador_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sancreador.page.scss */ "2Lof");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Api/IGTM.service */ "WGaO");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "/sJY");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../providers/Utilidades/LoadingService.service */ "r3ab");
/* harmony import */ var _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Modales/igtmplantilla/igtmplantilla.page */ "Jmyf");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");















let SANcreadorPage = class SANcreadorPage {
    constructor(almacenamiento, modalCtrl, IGTMApi, toast, router, actionCtrl, camera, media, myLoading, socket, statusbar, activeRoute) {
        this.almacenamiento = almacenamiento;
        this.modalCtrl = modalCtrl;
        this.IGTMApi = IGTMApi;
        this.toast = toast;
        this.router = router;
        this.actionCtrl = actionCtrl;
        this.camera = camera;
        this.media = media;
        this.myLoading = myLoading;
        this.socket = socket;
        this.statusbar = statusbar;
        this.activeRoute = activeRoute;
        this.tipoPublicacion = 'dibujar';
        this.historia = false;
        this.cargado = false;
        this.colorSelect = {
            color: '#fafafa',
            letra: '#333333'
        };
        this.colores = [
            {
                color: '#fafafa',
                letra: '#333333'
            },
            {
                color: '#000000',
                letra: '#FFFFFF'
            },
            {
                color: '#8854DA',
                letra: '#FFFFFF'
            }, {
                color: '#FFD000',
                letra: '#FFFFFF'
            }, {
                color: '#BAB417',
                letra: '#FFFFFF'
            }, {
                color: '#AAD9F0',
                letra: '#FFFFFF'
            }, {
                color: '#F5AD45',
                letra: '#FFFFFF'
            }, {
                color: '#DD5347',
                letra: '#FFFFFF'
            }, {
                color: '#F8C883',
                letra: '#333333'
            },
            {
                color: '#1ABCFE',
                letra: '#333333'
            }, {
                color: '#0ACF83',
                letra: '#333333'
            }, {
                color: '#ED576B',
                letra: '#ffffff'
            }, {
                color: '#FFA300',
                letra: '#333333'
            }, {
                color: '#555555',
                letra: '#ffffff'
            }, {
                color: '#CC924E',
                letra: '#ffffff'
            }, {
                color: '#D69624',
                letra: '#ffffff'
            }, {
                color: '#FF7262',
                letra: '#ffffff'
            }
        ];
        this.texto = '';
        this.valort = '';
        this.etiquetados = [];
        this.comentario = '';
        // 2 Fase de publicacion
        this.archivos = [];
        this.carrete = [];
        this.carreteRoot = [];
        this.video = false;
        this.tipo = '';
        this.cargan = true;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.carrete = [];
        this.carreteRoot = [];
        this.etiquetados = [];
        this.comentario = '';
        this.texto = '';
        this.valort = '';
        this.tipo = this.activeRoute.snapshot.paramMap.get('tipo');
        if (this.activeRoute.snapshot.paramMap.get('tipo') === 'historia') {
            this.historia = true;
            // // console.log('Historia creando')
        }
        this.iniciar();
    }
    cambiarColor(color) {
        this.colorSelect = color;
    }
    detectar(event) {
        // // console.log(event.detail.value.length)
    }
    cambio(event) {
        this.tipoPublicacion = event.detail.value;
        this.carrete = [];
        this.carreteRoot = [];
    }
    iniciar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cargado = true;
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
            }
        });
    }
    etiquetar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_12__["IgtmplantillaPage"],
                componentProps: {
                    tipo: 'etiquetar'
                }
            });
            yield modal.present();
            const cerrado = yield modal.onWillDismiss();
            if (cerrado) {
                if (cerrado.data) {
                    if (cerrado.data.exe) {
                        if (!this.etiquetados.find((item) => item.nombreusuario === cerrado.data.persona.nombreusuario)) {
                            this.etiquetados.push(cerrado.data.persona);
                        }
                        // // console.log(this.etiquetados);
                    }
                }
            }
        });
    }
    eliminar(idx) {
        this.etiquetados.splice(idx, 1);
    }
    cambiar(event) {
        this.comentario = event.detail.value;
    }
    cambiarTexto(event) {
        this.texto = event.detail.value;
    }
    entrada(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const valor = this.comentario;
            if (event.detail.data === '@') {
                // // console.log('Arroba');
                const previo = valor.charAt(valor.length - 1);
                // // console.log(previo);
                if (previo === ' ' || previo === '') {
                    const modal = yield this.modalCtrl.create({
                        component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_12__["IgtmplantillaPage"],
                        componentProps: {
                            tipo: 'mencionar'
                        }
                    });
                    yield modal.present();
                    const cerrado = yield modal.onWillDismiss();
                    if (cerrado) {
                        if (cerrado.data.exe) {
                            // // console.log(cerrado.data.persona.nombreusuario)
                            this.comentario = this.comentario + cerrado.data.persona.nombreusuario;
                        }
                    }
                }
                else {
                    // // console.log('No se lee como eituqeta');
                }
            }
        });
    }
    opciones() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const action = yield this.actionCtrl.create({
                header: 'Escoge una opción',
                buttons: [
                    {
                        icon: 'camera-outline',
                        text: 'Tomar foto de la cámara',
                        handler: () => {
                            if (this.historia) {
                                if (this.carrete.length === 0) {
                                    this.tomarFoto(this.camera.PictureSourceType.CAMERA);
                                }
                                else {
                                    this.toast.toastNotificacion('Solo puedes añadir una imagen por historia');
                                }
                            }
                            else {
                                this.tomarFoto(this.camera.PictureSourceType.CAMERA);
                            }
                        }
                    },
                    {
                        icon: 'image-outline',
                        text: 'Subir foto de galería',
                        handler: () => {
                            if (this.historia) {
                                if (this.carrete.length === 0) {
                                    this.tomarFoto(this.camera.PictureSourceType.PHOTOLIBRARY, 'image');
                                }
                                else {
                                    this.toast.toastNotificacion('Solo puedes añadir una imagen por historia');
                                }
                            }
                            else {
                                this.tomarFoto(this.camera.PictureSourceType.PHOTOLIBRARY, 'image');
                            }
                        }
                    },
                    {
                        icon: 'people-outline',
                        text: 'Etiquetas',
                        handler: () => {
                            this.etiquetar();
                        }
                    }
                    // {
                    //   icon: 'videocam-outline',
                    //   text: 'Grabar vídeo de la cámara',
                    //   handler: () => {
                    //     if (!this.carrete.find(item => item.mime.includes('video') || item.mime.includes('Video') )) {
                    //       this.capturarVideo();
                    //     } else {
                    //       this.toast.toastError('No puede adjuntar más de un vídeo por publicación');
                    //     }
                    //   }
                    // },
                    // {
                    //   icon: 'image-outline',
                    //   text: 'Subir vídeo de galería',
                    //   handler: () => {
                    //     if (!this.carrete.find(item => item.mime.includes('video') || item.mime.includes('Video') )) {
                    //       this.tomarFoto(this.camera.PictureSourceType.PHOTOLIBRARY, 'video');
                    //     } else {
                    //       this.toast.toastError('No puede adjuntar más de un vídeo por publicación');
                    //     }
                    //   }
                    // }
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
            mediaType: mode === 'image' ? this.camera.MediaType.PICTURE : this.camera.MediaType.VIDEO,
            sourceType
        };
        this.camera.getPicture(options).then((imageData) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let mim = '';
            let name = '';
            // // // console.log('image data', imageData)
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
            // // // console.log('Mi archivo', name, mim)
            this.carrete.push({ path: imageData, name, mime: mim, cont: this.carrete.length + 1 });
            const url = window.Ionic.WebView.convertFileSrc(imageData);
            this.carreteRoot.push({ path: url, mime: mim });
            // // // console.log(this.carrete);
            this.camera.cleanup().then(() => { });
        }));
    }
    capturarVideo() {
        const opctions = {
            limit: 1,
            duration: 30
        };
        this.media.captureVideo(opctions).then((url) => {
            this.carrete.push({ path: url[0].fullPath, name: url[0].name, mime: url[0].type, cont: this.carrete.length + 1 });
            // // // console.log(url[0].name)
            const vide = window.Ionic.WebView.convertFileSrc(url[0].fullPath);
            this.carreteRoot.push({ path: vide, mime: url[0].type });
            // // // console.log(this.carrete);
        });
    }
    eliminardelCarrete(indice) {
        this.carrete.splice(indice, 1);
        this.carreteRoot.splice(indice, 1);
        if (!this.carrete.find(item => item.mime.includes('video') || item.mime.includes('Video'))) {
            this.video = false;
        }
    }
    crear() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                if (this.tipoPublicacion === 'dibujar') {
                    if (this.texto !== '') {
                        this.publicacion(info.token, { tipo: 'dibujar', grafico: this.colorSelect, texto: this.texto, comentario: this.comentario, etiquetas: this.etiquetados, historia: this.historia });
                    }
                }
                else if (this.tipoPublicacion === 'multimedia') {
                    this.enviarMensaje();
                }
            }
        });
    }
    enviarMensaje() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // // // console.log(this.carrete);
            if (this.carrete.length > 0) {
                const info = yield this.almacenamiento.obtenerToken();
                this.myLoading.cargaProcesos('Subiendo mensaje con archivos media, por favor espere');
                if (info) {
                    // // // console.log(info);
                    this.IGTMApi.crearPublicacion(info.token, {
                        tipo: 'multimedia', comentario: this.comentario, etiquetas: this.etiquetados, historia: this.historia
                    }).subscribe((data) => {
                        // // // console.log(data);
                        if (data.exe) {
                            const id = data.response._id;
                            this.carrete = this.carrete.sort((a, b) => {
                                if (a.mime > b.mime) {
                                    return 1;
                                }
                                if (a.mime < b.mime) {
                                    return -1;
                                }
                                // a must be equal to b
                                return 0;
                            });
                            // // console.log(this.carrete, ' imagenes');
                            let cont = this.carrete.length;
                            let final = this.carrete.length === 1 ? true : false;
                            this.carrete.forEach((item) => {
                                // // // console.log(item, 'itm');
                                // tslint:disable-next-line:max-line-length
                                this.IGTMApi.subirArchivosChat(info.token, id, item.path, final, item.cont, this.historia, item.name, item.mime).subscribe((image) => {
                                    image.response = JSON.parse(image.response);
                                    if (image.response.exe) {
                                        cont--;
                                        // // console.log('Entamos', image)
                                        if (cont === 1) {
                                            final = true;
                                        }
                                        if (cont === 0) {
                                            image.response.response.tipo = 'file';
                                            this.myLoading.finalizarCargado();
                                            if (item.mime.includes('video') || item.mime.includes('Video')) {
                                                this.socket.emit('subirvideo', {
                                                    nameSecret: image.response.response.ruta,
                                                    nameConvert: image.response.response.nuevo,
                                                    creador: image.response.response.creador,
                                                    mime: image.response.response.mime,
                                                    nombre: image.response.response.nombre,
                                                    _id: id,
                                                    historia: this.historia
                                                });
                                                this.toast.toastExitoso('La publicación estará disponible en unos momentos.');
                                            }
                                            else {
                                                this.toast.toastExitoso('Contenido publicado.');
                                            }
                                            this.router.navigate(['/central/iniciosan']);
                                        }
                                    }
                                    // // // console.log(image, ' image cada vuelta');
                                }, (error) => {
                                    // // // console.log('Error ', error);
                                    this.myLoading.finalizarCargado();
                                    this.toast.alertApplication('No se pudo subir el archivo de vídeo o imagen', true);
                                });
                            });
                        }
                    });
                }
            }
        });
    }
    publicacion(token, data) {
        // // console.log('DATAAAAAAAAAAAAAA', data)
        this.IGTMApi.crearPublicacion(token, data).subscribe((res) => {
            if (res.exe) {
                this.valort = '';
                this.texto = '';
                this.toast.toastExitoso('Contenido publicado.');
                this.router.navigate(['/central/iniciosan']);
            }
            else {
                this.toast.toastError('No se pudo crear la publicación, intentelo más tarde');
            }
        }, (err) => {
            this.toast.toastError('No se pudo crear la publicación, intentelo más tarde');
        });
    }
    ionViewWillLeave() {
        this.carrete = [];
        this.carreteRoot = [];
        this.etiquetados = [];
        this.comentario = '';
        this.texto = '';
        this.valort = '';
    }
};
SANcreadorPage.ctorParameters = () => [
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_6__["IGTMService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__["ToastServices"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_9__["MediaCapture"] },
    { type: _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_11__["LoadingService"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_13__["Socket"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_14__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
SANcreadorPage.propDecorators = {
    p: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['lienzo',] }]
};
SANcreadorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sancreador',
        template: _raw_loader_sancreador_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sancreador_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SANcreadorPage);



/***/ }),

/***/ "EE0I":
/*!****************************************************************!*\
  !*** ./src/app/Pages/Santiago/sancreador/sancreador.module.ts ***!
  \****************************************************************/
/*! exports provided: SANcreadorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SANcreadorPageModule", function() { return SANcreadorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sancreador_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sancreador-routing.module */ "j5pB");
/* harmony import */ var _sancreador_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sancreador.page */ "9yuI");
/* harmony import */ var _Modales_igtmplantilla_igtmplantilla_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Modales/igtmplantilla/igtmplantilla.module */ "D3OO");
/* harmony import */ var _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Modales/igtmplantilla/igtmplantilla.page */ "Jmyf");









let SANcreadorPageModule = class SANcreadorPageModule {
};
SANcreadorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_8__["IgtmplantillaPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sancreador_routing_module__WEBPACK_IMPORTED_MODULE_5__["SANcreadorPageRoutingModule"],
            _Modales_igtmplantilla_igtmplantilla_module__WEBPACK_IMPORTED_MODULE_7__["IgtmplantillaPageModule"]
        ],
        declarations: [_sancreador_page__WEBPACK_IMPORTED_MODULE_6__["SANcreadorPage"]]
    })
], SANcreadorPageModule);



/***/ }),

/***/ "hLwL":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Santiago/sancreador/sancreador.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"oscuro\">\n\n        <ion-back-button slot=\"start\" *ngIf=\"tipo === 'historia'\" icon=\"chevron-back-outline\" defaultHref=\"/central/iniciosan\"></ion-back-button>\n\n        <ion-title *ngIf=\"!historia\">Crear publicación</ion-title>\n        <ion-title *ngIf=\"historia\">Crear Noticia</ion-title>\n\n        <ion-buttons mode=\"ios\" slot=\"end\">\n            <ion-button (click)=\"crear()\">Publicar</ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n        <ion-item color=\"blanco\">\n            <ion-select value=\"dibujar\" okayText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"cambio( $event )\">\n                <ion-select-option value=\"dibujar\">Dibujar</ion-select-option>\n                <ion-select-option value=\"multimedia\">Multimedia</ion-select-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n\n\n    <div *ngIf=\"tipoPublicacion === 'dibujar'\" class=\"\">\n\n        <ion-segment scrollable=\"true\">\n            <div class=\"color\" *ngFor=\"let color of colores\" [style.background]=\"color.color\" (click)=\"cambiarColor( color )\"><span>ssfsdfsfs</span>\n\n            </div>\n        </ion-segment>\n\n        <div #lienzo class=\"lienzo\" [style.background]=\"colorSelect.color\" [style.color]=\"colorSelect.letra\">\n\n            <ion-textarea *ngIf=\"cargan\" [(ngModel)]=\"valort\" inputmode=\"text\" [autoGrow]=\"true\" maxlength=\"120\" class=\"text-lienzo\" placeholder=\"Escribe un texto para la publicación\" value=\"\" (ionChange)=\"cambiarTexto( $event )\">\n\n            </ion-textarea>\n\n\n        </div>\n\n        <ion-list>\n            <ion-item-divider color=\"light\">\n                <ion-label>Añadir Etiquetas</ion-label>\n                <ion-buttons slot=\"end\">\n                    <ion-button (click)=\"etiquetar()\">\n                        <ion-icon name=\"chevron-forward-outline\" slot=\"icon-only\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n            </ion-item-divider>\n\n            <div *ngIf=\"etiquetados.length > 0\" class=\"etiquetados\">\n                <ion-item-sliding *ngFor=\"let usuario of etiquetados; let i = index;\">\n                    <ion-item>\n                        <ion-avatar slot=\"start\">\n                            <img [src]=\"usuario.imagen\" width=\"100%\" height=\"100%\" alt=\"\">\n                        </ion-avatar>\n                        <ion-label>\n                            <strong>{{ usuario.nombrecompleto }}</strong><br> @{{ usuario.nombreusuario }}\n                        </ion-label>\n                    </ion-item>\n                    <ion-item-options side=\"end\">\n                        <ion-item-option color=\"danger\" (click)=\"eliminar(i)\">\n                            <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                        </ion-item-option>\n                    </ion-item-options>\n                </ion-item-sliding>\n            </div>\n\n\n        </ion-list>\n\n        <ion-item mode=\"ios\" class=\"sinfondo\">\n            <ion-textarea class=\"comentario\" inputmode=\"text\" [autoGrow]=\"true\" maxlength=\"120\" placeholder=\"Escribe un comentario\" (ionChange)=\"cambiar( $event )\" [value]=\"comentario\">\n\n            </ion-textarea>\n        </ion-item>\n\n\n    </div>\n\n\n\n    <div *ngIf=\"tipoPublicacion === 'multimedia'\" class=\"\">\n\n\n        <div>\n\n            <div class=\"none\" *ngIf=\"carreteRoot.length === 0\">\n                <div class=\"flexc\">\n                    <img src=\"/assets/Camara.png\" width=\"70px\" alt=\"\"> <br>\n                    <h3 class=\"tituloGrande\">No Hay archivos agregados para publicar.</h3>\n                </div>\n            </div>\n\n            <ion-slides *ngIf=\"carreteRoot.length > 0\">\n                <ion-slide *ngFor=\"let archivo of carreteRoot; let i = index;\">\n                    <img *ngIf=\"archivo.mime.includes('image')\" src=\"{{archivo.path}}\" width=\"70px\">\n                    <video *ngIf=\"archivo.mime.includes('video') || archivo.mime.includes('Video') || archivo.mime.includes('mp4') || archivo.mime.includes('MP4')\" src=\"{{archivo.path}}\" width=\"70px\" controls></video>\n                    <div class=\"eliminar\" (click)=\"eliminardelCarrete(i)\">\n                        <ion-chip color=\"danger\">Eliminar</ion-chip>\n                    </div>\n                </ion-slide>\n            </ion-slides>\n\n\n        </div>\n\n        <ion-list>\n            <!-- <ion-item-divider color=\"medium\">\n                <ion-label>Añadir Etiquetas</ion-label>\n                <ion-buttons slot=\"end\">\n                    <ion-button (click)=\"etiquetar()\">\n                        <ion-icon name=\"chevron-forward-outline\" slot=\"icon-only\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n            </ion-item-divider> -->\n\n            <div *ngIf=\"etiquetados.length > 0\" class=\"etiquetados\">\n                <ion-item-sliding *ngFor=\"let usuario of etiquetados; let i = index;\">\n                    <ion-item>\n                        <ion-avatar slot=\"start\">\n                            <img [src]=\"usuario.imagen\" width=\"100%\" height=\"100%\" alt=\"\">\n                        </ion-avatar>\n                        <ion-label>\n                            <strong>{{ usuario.nombrecompleto }}</strong><br> @{{ usuario.nombreusuario }}\n                        </ion-label>\n                    </ion-item>\n                    <ion-item-options side=\"end\">\n                        <ion-item-option color=\"danger\" (click)=\"eliminar(i)\">\n                            <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                        </ion-item-option>\n                    </ion-item-options>\n                </ion-item-sliding>\n            </div>\n        </ion-list>\n\n        <ion-item mode=\"ios\" class=\"sinfondo\">\n            <ion-textarea class=\"comentario\" inputmode=\"text\" [autoGrow]=\"true\" maxlength=\"120\" placeholder=\"Escribe un comentario\" (ionChange)=\"cambiar( $event )\" [value]=\"comentario\">\n\n            </ion-textarea>\n        </ion-item>\n\n\n    </div>\n\n\n    <ion-fab *ngIf=\"tipoPublicacion === 'multimedia'\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button color=\"danger\" (click)=\"opciones()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n\n</ion-content>");

/***/ }),

/***/ "j5pB":
/*!************************************************************************!*\
  !*** ./src/app/Pages/Santiago/sancreador/sancreador-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: SANcreadorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SANcreadorPageRoutingModule", function() { return SANcreadorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sancreador_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sancreador.page */ "9yuI");




const routes = [
    {
        path: '',
        component: _sancreador_page__WEBPACK_IMPORTED_MODULE_3__["SANcreadorPage"]
    }
];
let SANcreadorPageRoutingModule = class SANcreadorPageRoutingModule {
};
SANcreadorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SANcreadorPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=Pages-Santiago-sancreador-sancreador-module.js.map