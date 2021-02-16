(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuario-perfil-perfil-module"],{

/***/ "/aZ8":
/*!*****************************************************!*\
  !*** ./src/app/pages/usuario/perfil/perfil.page.ts ***!
  \*****************************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./perfil.page.html */ "L8dg");
/* harmony import */ var _perfil_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil.page.scss */ "MvCF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/Api/UsuariosLogin.service */ "oQG1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../providers/Utilidades/LoadingService.service */ "r3ab");
/* harmony import */ var _providers_Api_Biografia_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../providers/Api/Biografia.service */ "9ucb");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../providers/cargas/usuarios.service */ "cb8P");
/* harmony import */ var _providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../providers/Api/Seguimiento.service */ "Gq8O");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _Modales_modal_modal_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../Modales/modal/modal.page */ "Zkx3");
/* harmony import */ var _providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../providers/Api/IGTM.service */ "WGaO");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../Modales/igtmplantilla/igtmplantilla.page */ "rE7l");
/* harmony import */ var src_app_Components_alertapopover_alertapopover_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/Components/alertapopover/alertapopover.component */ "c6Yc");
/* harmony import */ var src_app_Components_modal_megustas_modal_megustas_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/Components/modal-megustas/modal-megustas.component */ "UInZ");























let PerfilPage = class PerfilPage {
    constructor(camera, actionCtrl, almacenamiento, usuaripService, toastService, loadingService, mneuCtrl, navCtrl, biografia, loading, toast, cargarElementos, seguimientoService, router, plt, socket, modalCtrl, IGTMApi, statusbar, activeRoute, poipover) {
        // // // console.log('Holita')
        this.camera = camera;
        this.actionCtrl = actionCtrl;
        this.almacenamiento = almacenamiento;
        this.usuaripService = usuaripService;
        this.toastService = toastService;
        this.loadingService = loadingService;
        this.mneuCtrl = mneuCtrl;
        this.navCtrl = navCtrl;
        this.biografia = biografia;
        this.loading = loading;
        this.toast = toast;
        this.cargarElementos = cargarElementos;
        this.seguimientoService = seguimientoService;
        this.router = router;
        this.plt = plt;
        this.socket = socket;
        this.modalCtrl = modalCtrl;
        this.IGTMApi = IGTMApi;
        this.statusbar = statusbar;
        this.activeRoute = activeRoute;
        this.poipover = poipover;
        this.Image = 'none';
        this.tokenTemp = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]('none');
        this.$token = this.tokenTemp.asObservable();
        this.segmento = 'info';
        // variables para manejar la info
        this.infoSegment = [];
        this.estado = false;
        this.servicios = [];
        this.nombreUsuario = '';
        this.role = '';
        this.ocultar = true;
        // variable que maneja la red
        this.red = 'wifi';
        // para los clientes o seguimientos que tengo
        this.personasTemp = [];
        this.personas = [];
        this.personasSeguidas = [];
        this.seguidosTemp = [];
        this.scroll = true;
        this.bajando = false;
        this.titulo = '';
        this.color = 'blanco';
        this.datos = {
            pais: '',
            ciudad: '', placa: ''
        };
        this.portada = '';
        // Social
        this.publicaciones = [];
        this.cargadentro = false;
        this.click = false;
        this.over = false;
        this.atrasBoton = false;
        this.cargaTodo = false;
        this.cargainfinite = true;
        this.desde = 0;
    }
    ngOnInit() {
        // // // console.log('Jujuuu 2')
    }
    ionViewWillEnter() {
        this.desde = 0;
        this.personasTemp = [];
        this.personas = [];
        this.personasSeguidas = [];
        this.seguidosTemp = [];
        this.publicaciones = [];
        if (this.activeRoute.snapshot.paramMap.get('tipo')) {
            this.atrasBoton = true;
        }
        this.arrancar();
    }
    refrescando(event) {
        this.desde = 0;
        this.publicaciones = [];
        // this.infinite.disabled = false;
        this.arrancar().then(() => {
            event.detail.complete();
        }).catch(() => {
            event.detail.complete();
        });
    }
    arrancar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.scroll = true;
                yield this.llamarBio();
                yield this.llamarFoto();
                yield this.publicacion();
                this.cargarElementos.cargarSeguimientos();
                this.informacion();
                this.seguidos();
                this.solicitudes();
            }
            catch (e) {
                // // // console.log('Error del resfresh', e)
                this.estado = true;
            }
        });
    }
    loadData(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.desde = this.desde + 5;
            // console.log(this.desde)
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.IGTMApi.leerPublicacion(info.token, { desde: this.desde }).subscribe((data) => {
                    // console.log(data);
                    if (data.exe) {
                        if (data.response.length > 0) {
                            event.target.complete();
                            data.response.forEach((item, i) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                if (item.creador._id === info._id) {
                                    item.eliminar = true;
                                }
                                else {
                                    item.eliminar = false;
                                }
                                item.guardado = false;
                                if (item.creador.imagen.length > 0) {
                                    item.image = `https://motocaliapp.com/${item.creador.imagen[0].path}`;
                                }
                                else {
                                    item.image = '/assets/notfound.png';
                                }
                                if (item.creadororiginal) {
                                    item.cog = true;
                                    if (item.creadororiginal.imagen.length > 0) {
                                        item.imageori = `https://motocaliapp.com/${item.creadororiginal.imagen[0].path}`;
                                    }
                                    else {
                                        item.imageori = '/assets/notfound.png';
                                    }
                                }
                                else {
                                    item.cog = false;
                                }
                                yield new Promise((resolve, reject) => {
                                    this.IGTMApi.leerFotos(info.token, { id: item._id, historia: 'false' }).subscribe((res) => {
                                        if (res.exe) {
                                            item.archivos = res.response;
                                            // // // console.log(res.response.length, 'Bien fotos')
                                            if (res.response.length > 1) {
                                                item.pager = true;
                                                resolve({ exe: true });
                                            }
                                            else {
                                                resolve({ exe: false });
                                                item.pager = false;
                                            }
                                        }
                                        else {
                                            resolve({ exe: true });
                                            item.archivos = [];
                                        }
                                        this.cargadentro = true;
                                    }, (err) => {
                                        resolve({ exe: false });
                                        item.archivos = [];
                                    });
                                });
                                yield new Promise((resolve, reject) => {
                                    this.IGTMApi.crearGuardado(info.token, { publicacion: item._id, tipo: 'leer' }).subscribe((res) => {
                                        // // // console.log(res, 'Guardado')
                                        if (res.exe) {
                                            item.guardado = true;
                                        }
                                        else {
                                            item.guardado = false;
                                        }
                                        resolve(true);
                                    }, (err) => {
                                        resolve(true);
                                        item.guardado = false;
                                    });
                                });
                                yield new Promise((resolve, reject) => {
                                    this.IGTMApi.meGusta(info.token, { id: item._id, tipo: 'leer' }).subscribe((res) => {
                                        if (res.response.find((itemmg) => itemmg.creador._id === info._id)) {
                                            item.megusta = true;
                                        }
                                        else {
                                            item.megusta = false;
                                        }
                                        resolve(true);
                                        item.valormg = res.response.length;
                                        item.mglista = res.response;
                                    }, (err) => {
                                        resolve(true);
                                        item.megusta = false;
                                        item.valormg = '';
                                    });
                                });
                                yield new Promise((resolve, reject) => {
                                    this.IGTMApi.crearComentario(info.token, { _id: item._id, tipo: 'leer' }).subscribe((res) => {
                                        // // // console.log(res.response, 'comentarios', item._id)
                                        if (res.exe) {
                                            item.comentarios = res.response;
                                            if (res.response.length > 0) {
                                                item.msg = `${item.comentarios.length} comentarios...`;
                                            }
                                            else {
                                                item.msg = 'No hay ningún comentario paraesta publicación';
                                            }
                                        }
                                        else {
                                            item.comentarios = [];
                                        }
                                        resolve(true);
                                        this.cargadentro = true;
                                    }, (err) => {
                                        resolve(true);
                                        item.comentarios = [];
                                    });
                                });
                                // // // console.log(item._id);
                                // if(item.comentario !== '') {
                                //   let array = item.comentario.split(' ');
                                //   // // // console.log(array, 'array')
                                //   array = array.map((arr: string) => {
                                //     if (arr.charAt(0) === '@') {
                                //       let viaje = arr.substr(1);
                                //       arr = `<a class="enlace" href="/central/buscar/perfil-visita/${viaje}">${arr}</a>`;
                                //       // // // console.log(arr);
                                //     }
                                //     return arr;
                                //   })
                                //   array = array.join(' ');
                                //   // // // console.log(array);
                                //   item.comentario = array;
                                // }
                                this.publicaciones.push(item);
                            }));
                        }
                        else {
                            event.target.disabled = true;
                            this.desde = 0;
                        }
                    }
                    else {
                        this.toast.alertApplication('No se pudo traer las publicaciones, intentelo más tarde', false);
                    }
                }, (error) => {
                    // console.log(error)
                    this.toast.alertApplication('No se pudo traer las publicaciones, intentelo más tarde', false);
                });
            }
        });
    }
    publicacion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.IGTMApi.leerPublicacion(info.token, { desde: this.desde }).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    // console.log(data)
                    if (data.exe) {
                        data.response.forEach((item, i) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            item.guardado = false;
                            if (item.creador.imagen.length > 0) {
                                item.image = `https://motocaliapp.com/${item.creador.imagen[0].path}`;
                            }
                            else {
                                item.image = '/assets/notfound.png';
                            }
                            if (item.creadororiginal) {
                                item.cog = true;
                                if (item.creadororiginal.imagen.length > 0) {
                                    item.imageori = `https://motocaliapp.com/${item.creadororiginal.imagen[0].path}`;
                                }
                                else {
                                    item.imageori = '/assets/notfound.png';
                                }
                            }
                            else {
                                item.cog = false;
                            }
                            yield new Promise((resolve, reject) => {
                                this.IGTMApi.leerFotos(info.token, { id: item._id }).subscribe((res) => {
                                    if (res.exe) {
                                        item.archivos = res.response;
                                        // console.log(res.response.length, 'Bien fotos')
                                        if (res.response.length > 1) {
                                            item.pager = true;
                                            resolve({ exe: true });
                                        }
                                        else {
                                            resolve({ exe: false });
                                            item.pager = false;
                                        }
                                    }
                                    else {
                                        resolve({ exe: true });
                                        item.archivos = [];
                                    }
                                    this.cargadentro = true;
                                }, (err) => {
                                    resolve({ exe: false });
                                    item.archivos = [];
                                });
                            });
                            yield new Promise((resolve, reject) => {
                                this.IGTMApi.crearGuardado(info.token, { publicacion: item._id, tipo: 'leer' }).subscribe((res) => {
                                    if (res.exe) {
                                        item.guardado = true;
                                    }
                                    else {
                                        item.guardado = false;
                                    }
                                    resolve(true);
                                }, (err) => {
                                    resolve(true);
                                    item.guardado = false;
                                });
                            });
                            yield new Promise((resolve, reject) => {
                                this.IGTMApi.meGusta(info.token, { id: item._id, tipo: 'leer' }).subscribe((res) => {
                                    if (res.response.find((itemmg) => itemmg.creador === info._id)) {
                                        item.megusta = true;
                                    }
                                    else {
                                        item.megusta = false;
                                    }
                                    resolve(true);
                                    item.valormg = res.response.length;
                                }, (err) => {
                                    resolve(true);
                                    item.megusta = false;
                                    item.valormg = '';
                                });
                            });
                            yield new Promise((resolve, reject) => {
                                this.IGTMApi.crearComentario(info.token, { _id: item._id, tipo: 'leer' }).subscribe((res) => {
                                    // console.log(res.response, 'comentarios', item._id)
                                    if (res.exe) {
                                        item.comentarios = res.response;
                                        if (res.response.length > 0) {
                                            item.msg = `${item.comentarios.length} comentarios...`;
                                        }
                                        else {
                                            item.msg = 'No hay ningún comentario paraesta publicación';
                                        }
                                    }
                                    else {
                                        item.comentarios = [];
                                    }
                                    resolve(true);
                                    this.cargadentro = true;
                                }, (err) => {
                                    resolve(true);
                                    item.comentarios = [];
                                });
                            });
                            // console.log(item._id);
                            // if(item.comentario !== '') {
                            //   let array = item.comentario.split(' ');
                            //   // console.log(array, 'array')
                            //   array = array.map((arr: string) => {
                            //     if (arr.charAt(0) === '@') {
                            //       let viaje = arr.substr(1);
                            //       arr = `<a class="enlace" href="/central/buscar/perfil-visita/${viaje}">${arr}</a>`;
                            //       // console.log(arr);
                            //     }
                            //     return arr;
                            //   })
                            //   array = array.join(' ');
                            //   // console.log(array);
                            //   item.comentario = array;
                            // }
                        }));
                        this.publicaciones = data.response;
                    }
                    else {
                    }
                    this.cargaTodo = true;
                }), (err) => {
                });
            }
        });
    }
    opciones2(event, id, idx) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.poipover.create({
                component: src_app_Components_alertapopover_alertapopover_component__WEBPACK_IMPORTED_MODULE_21__["AlertapopoverComponent"],
                componentProps: {
                    id
                },
                event
            });
            yield popover.present();
            const cerrado = yield popover.onWillDismiss();
            if (cerrado) {
                if (cerrado.data) {
                    if (cerrado.data.exe) {
                        this.toast.toastExitoso('Publicación eliminada');
                        this.publicaciones.splice(idx, 1);
                    }
                }
            }
        });
    }
    compartir(publicacion) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_20__["IgtmplantillaPage"],
                componentProps: {
                    tipo: 'compartir',
                    publicacionc: publicacion,
                }
            });
            yield modal.present();
            const cerrado = yield modal.onWillDismiss();
            if (cerrado) {
                this.statusbar.show();
                this.click = false;
                if (cerrado.data) {
                    if (cerrado.data.recargo) {
                        yield this.contenido.scrollToTop();
                    }
                }
            }
        });
    }
    guardado(publicacion, tipo, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (tipo === 'crear') {
                this.publicaciones[i].guardado = true;
            }
            else {
                this.publicaciones[i].guardado = false;
            }
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.IGTMApi.crearGuardado(info.token, { tipo, publicacion: publicacion._id }).subscribe((data) => {
                    if (data.exe) {
                        if (tipo === 'crear') {
                            this.toast.toastNotificacion('Publicación guardada en colecciones');
                        }
                        else {
                            this.toast.toastNotificacion('Publicación eliminada de colecciones');
                        }
                    }
                    else {
                        this.toast.toastError('No se pudo guardar, intentelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo guardar, intentelo más tarde');
                });
            }
        });
    }
    perfilNavegar(usuario) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                if (info.nusuario === usuario.nombreusuario) {
                    this.router.navigate(['/perfil/', 's']);
                }
                else {
                    this.router.navigate(['/visita/', usuario.nombreusuario, 's']);
                }
            }
        });
    }
    comentarios(publicacion, indice) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_20__["IgtmplantillaPage"],
                componentProps: {
                    tipo: 'comentar',
                    publicacion: publicacion._id,
                    creador: publicacion.creador,
                    comentarios: publicacion.comentarios
                }
            });
            yield modal.present();
            const cerrado = yield modal.onWillDismiss();
            if (cerrado) {
                this.statusbar.show();
                this.click = false;
                if (cerrado.data) {
                    if (cerrado.data.exe) {
                        this.publicaciones[indice].comentarios = cerrado.data.comentarios;
                        if (cerrado.data.comentarios.length > 0) {
                            this.publicaciones[indice].msg = `${cerrado.data.comentarios.length} comentarios...`;
                        }
                        else {
                            this.publicaciones[indice].msg = 'No hay ningún comentario paraesta publicación';
                        }
                    }
                }
            }
        });
    }
    megusta(publicacion, tipo, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (tipo === 'megusta') {
                this.publicaciones[i].megusta = true;
                this.publicaciones[i].valormg = parseFloat(this.publicaciones[i].valormg) + 1;
            }
            else {
                this.publicaciones[i].megusta = false;
                this.publicaciones[i].valormg = parseFloat(this.publicaciones[i].valormg) - 1;
            }
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.IGTMApi.meGusta(info.token, { tipo, id: publicacion._id, creador: publicacion.creador }).subscribe((data) => {
                    if (data.exe) {
                        if (info._id !== publicacion.creador._id) {
                            if (tipo === 'megusta') {
                                this.socket.emit('megusta', {
                                    id: publicacion._id,
                                    mensaje: `@${info.nusuario} le gusta tu publicación`,
                                    creador: publicacion.creador._id
                                });
                            }
                        }
                    }
                    else {
                        this.toast.toastError('No se pudo dar me gusta, intentelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo dar me gusta, intentelo más tarde');
                });
            }
        });
    }
    etiquetas(etiquetados) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_20__["IgtmplantillaPage"],
                componentProps: {
                    tipo: 'etiquetados',
                    etiquetados
                }
            });
            yield modal.present();
            const cerrado = yield modal.onWillDismiss();
            if (cerrado) {
                this.statusbar.show();
                this.click = false;
            }
        });
    }
    ver(archivos, indice, info) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.click) {
                this.click = true;
                const modal = yield this.modalCtrl.create({
                    component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_20__["IgtmplantillaPage"],
                    componentProps: {
                        tipo: 'visualizador',
                        archivos,
                        indice,
                        info
                    }
                });
                yield modal.present();
                const cerrado = yield modal.onWillDismiss();
                if (cerrado) {
                    this.statusbar.show();
                    this.click = false;
                }
            }
        });
    }
    llamarFoto() {
        return new Promise((resolve, reject) => {
            resolve(this.cerrarToken = this.$token.subscribe((token) => {
                this.usuaripService.viewImagen(token).subscribe((url) => {
                    // // // console.log(url);
                    this.Image = `https://motocaliapp.com/${url.paquete}`;
                    this.portada = url.portada.path;
                }, (error) => {
                    // // // console.log(error);
                });
            }));
        });
    }
    llamarBio() {
        return new Promise((resolve, reject) => {
            try {
                this.almacenamiento.obtenerToken().then((info) => {
                    // // // console.log(`Datos de toda la app `, info);
                    this.role = info.role;
                    this.nombreUsuario = info.nombre;
                    this.tokenTemp.next(info.token);
                    resolve(this.cargarListados(info.token));
                }).catch(e => {
                    reject(e);
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }
    cargarListados(token) {
        this.seguimientoService.solicitudesAceptadas(token, 'Sin receptor', '0').subscribe((data) => {
            this.personasTemp = [];
            if (data.response.length > 0) {
                data.response.forEach((item) => {
                    item.imagen = item.usuarioEmisor.imagen.length > 0 ? item.usuarioEmisor.imagen[0].path : '';
                    this.personasTemp.push(item);
                });
                this.personas = this.personasTemp;
            }
        }, (error) => {
            this.toast.alertApplication('No se pudo traer los usuarios', false);
        });
        this.seguimientoService.solicitudesAceptadasSeguidos(token, '', '0').subscribe((data) => {
            this.cargarInformacion = true;
            this.seguidosTemp = [];
            if (data.response.length > 0) {
                data.response.forEach((item) => {
                    item.imagen = item.usuarioReceptor.imagen.length > 0 ? item.usuarioReceptor.imagen[0].path : '';
                    this.seguidosTemp.push(item);
                });
                this.personasSeguidas = this.seguidosTemp;
            }
        }, (error) => {
            this.toast.alertApplication('No se pudo traer los usuarios', false);
        });
    }
    abrirMenu() {
        this.mneuCtrl.toggle('perfilMenu');
    }
    cambiarToken(token) {
        this.tokenTemp.next(token);
    }
    herramientas() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.preventAction();
        });
    }
    herramientasperfil() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const opciones = [{
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'rojo'
                }];
            if (this.role === 'TALLER_ROLE') {
                opciones.unshift({
                    text: 'Servicios que ofrezco',
                    icon: 'checkmark-circle-outline',
                    handler: () => {
                        this.modal('servis');
                    }
                }, {
                    text: 'Información de mi negocio',
                    icon: 'information-outline',
                    handler: () => {
                        this.modal('form');
                    }
                });
            }
            if (this.role === 'USER_ROLE') {
                opciones.unshift({
                    text: 'Información del Vehículo',
                    icon: 'information-outline',
                    handler: () => {
                        this.modal('vehiculo');
                    }
                });
            }
            const action = yield this.actionCtrl.create({
                header: 'Crear',
                buttons: opciones
            });
            yield action.present();
        });
    }
    modal(type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // // console.log(this.Image);
            let image = '';
            if (type === 'mediapor') {
                image = `https://motocaliapp.com/19927613410/${this.portada}`;
            }
            else if (type === 'mediap') {
                image = this.Image;
            }
            const miModal = yield this.modalCtrl.create({
                component: _Modales_modal_modal_page__WEBPACK_IMPORTED_MODULE_17__["ModalPage"],
                componentProps: {
                    type,
                    imagen: image
                }
            });
            yield miModal.present();
            if (type !== 'mediapor' && type !== 'mediap') {
                const dataRetorno = yield miModal.onWillDismiss();
                if (dataRetorno) {
                    if (dataRetorno.data) {
                        this.contenido = dataRetorno.data.data ? dataRetorno.data.data.contenido : dataRetorno.data.contenido;
                        this.servicios = dataRetorno.data.data ? dataRetorno.data.data.servicios : dataRetorno.data.servicios;
                        // // console.log( this.contenido, this.servicios, 'todo')
                    }
                }
            }
        });
    }
    preventAction() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionCtrl.create({
                translucent: true,
                header: 'Fotos',
                buttons: [
                    {
                        text: 'Seleccionar Foto de Perfil en Galeria',
                        icon: 'image',
                        handler: () => {
                            this.tomarFoto(this.camera.PictureSourceType.PHOTOLIBRARY, 'perfil');
                        }
                    },
                    {
                        text: 'Seleccionar Foto de Portada en Galeria',
                        icon: 'image',
                        handler: () => {
                            this.tomarFoto(this.camera.PictureSourceType.PHOTOLIBRARY, 'portada');
                        }
                    },
                    {
                        text: 'Tomar Foto de Perfíl',
                        icon: 'camera',
                        handler: () => {
                            this.tomarFoto(this.camera.PictureSourceType.CAMERA, 'perfil');
                        }
                    },
                    {
                        text: 'Tomar Foto de Portada',
                        icon: 'camera',
                        handler: () => {
                            this.tomarFoto(this.camera.PictureSourceType.CAMERA, 'portada');
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        icon: 'close',
                        cssClass: 'rojo'
                    }
                ]
            });
            return yield actionSheet.present();
        });
    }
    tomarFoto(sourceType, accion) {
        // // // console.log(this.portada);
        const options = {
            quality: 100,
            allowEdit: true,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType
        };
        this.camera.getPicture(options).then((imageData) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadingService.cargaProcesos('Subiendo Imagen, por favor espera.');
            this.almacenamiento.obtenerToken().then((info) => {
                if (accion === 'perfil') {
                    this.usuaripService.fotoPerfilUsuarioMoto(imageData, info.token, 'perfil').subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        this.cambiarToken(info.token);
                        this.loadingService.finalizarCargado();
                        yield this.toastService.alertApplication('Imagen subida con éxito', true);
                    }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        // // // console.log(JSON.stringify(error.message));
                        this.loadingService.finalizarCargado();
                        yield this.toastService.alertApplication(error.message, false);
                    }));
                }
                else {
                    const old = this.portada === 'notfound.jpg' ? '' : this.portada;
                    this.usuaripService.fotoPortada(imageData, info.token, old).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        // // // console.log(data, 'respuesta');
                        this.cambiarToken(info.token);
                        this.loadingService.finalizarCargado();
                        yield this.toastService.alertApplication('Foto de portada actualizada', true);
                    }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        // // // console.log(JSON.stringify(error.message));
                        yield this.toastService.alertApplication(error.message, false);
                    }));
                }
            }).catch(() => {
                this.loadingService.finalizarCargado();
            });
        }), (err) => {
            // Handle error
        });
    }
    // Lógica de segmentos
    segmentos(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            switch (event.detail.value) {
                case 'info':
                    // // // console.log('Info');
                    yield this.miSlide.slideTo(0, 300);
                    break;
                case 'public':
                    yield this.miSlide.slideTo(1, 300);
                    break;
                case 'clientes':
                    yield this.miSlide.slideTo(2, 300);
                    break;
                case 'seguidos':
                    yield this.miSlide.slideTo(3, 300);
                    break;
            }
        });
    }
    cambioDiapositiva(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.miSlide.getActiveIndex().then((index) => {
                // // // console.log(index);
                if (index === 0) {
                    this.segmento = 'info';
                }
                else if (index === 1) {
                    this.segmento = 'public';
                }
                else if (index === 2) {
                    this.segmento = 'clientes';
                }
                else if (index === 3) {
                    this.segmento = 'seguidos';
                }
            });
        });
    }
    solicitudes() {
        this.personas = [];
        this.personasTemp.forEach((item) => {
            this.personas.push(item);
        });
    }
    seguidos() {
        this.personasSeguidas = [];
        this.seguidosTemp.forEach((item) => {
            this.personasSeguidas.push(item);
        });
        // // // console.log(this.personasSeguidas, 'ok')
    }
    visitar(usuario) {
        this.router.navigate(['/central/buscar/perfil-visita/', usuario]);
    }
    informacion() {
        this.almacenamiento.obtenerToken().then((info) => {
            // console.log(info);
            this.datos.pais = info.pais;
            this.datos.ciudad = info.ciudad;
            this.datos.placa = info.placa;
            this.biografia.getBiografia(info.token, 'none').subscribe((data) => {
                // console.log(data.response, this.contenido, 'INFORMACION ->>>>>>>>>>>>>>>>>>>>');
                if (data.response.length > 0) {
                    this.infoSegment = data.response;
                    this.contenido = data.response[0].contenido;
                    this.servicios = data.response[0].servicios;
                    this.estado = false;
                }
                else {
                    this.estado = true;
                }
                // // // console.log(`Estado ${this.estado}`);
            }, (err) => {
                // // // console.log('Error');
                this.infoSegment = [];
                this.estado = true;
            });
        });
    }
    scrollable(event) {
        if (event.detail.scrollTop > 300) {
            // // console.log('Holaaaaaaaaaaaaaaaa')
            this.over = true;
        }
        else {
            this.over = false;
        }
    }
    mglista(listado) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_Components_modal_megustas_modal_megustas_component__WEBPACK_IMPORTED_MODULE_22__["ModalMegustasComponent"],
                componentProps: {
                    listado: listado
                }
            });
            yield modal.present();
        });
    }
    ionViewDidLeave() {
        this.scroll = false;
        // // // console.log('Salimos');
        this.cerrarToken.unsubscribe();
    }
};
PerfilPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__["InicioService"] },
    { type: _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_7__["UsuariosLoginService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_9__["ToastServices"] },
    { type: _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _providers_Api_Biografia_service__WEBPACK_IMPORTED_MODULE_11__["BiografiaService"] },
    { type: _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_9__["ToastServices"] },
    { type: _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_13__["CargaElementosUsuariosService"] },
    { type: _providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_14__["ApiSeguimientoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_16__["Socket"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_18__["IGTMService"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_19__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
PerfilPage.propDecorators = {
    miSlide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['mislidedos', { static: false },] }],
    miContenido: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['miContenido', { static: false },] }],
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['inifinito', { static: false },] }]
};
PerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-perfil',
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["trigger"])('openClose', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({ opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('100ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({ opacity: 0 }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["trigger"])('chao', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({ marginLeft: '300px', opacity: 0 }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["trigger"])('personas', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["query"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({
                            opacity: 0,
                            transform: 'scale(0)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["stagger"])(300, [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('400ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({
                                opacity: 1,
                                transform: 'none'
                            }))
                        ])
                    ], { optional: true })
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["trigger"])('entrada', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({
                        opacity: 0,
                        transform: 'scale(0)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({
                        opacity: 1,
                        transform: 'scale(1)'
                    }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({
                        opacity: 1,
                        transform: 'scale(1)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({
                        opacity: 0,
                        transform: 'scale(0)'
                    }))
                ])
            ])
        ],
        template: _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_perfil_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PerfilPage);



/***/ }),

/***/ "Ejjj":
/*!*********************************************************!*\
  !*** ./src/app/pages/usuario/perfil/video.directive.ts ***!
  \*********************************************************/
/*! exports provided: VideoDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDirective", function() { return VideoDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let VideoDirective = class VideoDirective {
    constructor(el) {
        this.el = el;
    }
    cargando() {
        this.el.nativeElement.currentTime = 0.3;
    }
};
VideoDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
VideoDirective.propDecorators = {
    cargando: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['loadstart',] }]
};
VideoDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[video-load]'
    })
], VideoDirective);



/***/ }),

/***/ "L8dg":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/usuario/perfil/perfil.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" #miContenido [scrollEvents]=\"scroll\" color=\"blanco\" *ngIf=\"red !== 'none'\" (ionScroll)=\"scrollable( $event )\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <div class=\"main\">\n        <div class=\"contenedor\">\n            <div class=\"info\">\n\n\n\n                <ion-card class=\"tarjeta\" mode=\"ios\">\n                    <div class=\"portada\">\n                        <ion-back-button *ngIf=\"atrasBoton\" mode=\"md\" class=\"boton\" color=\"blanco\" icon=\"chevron-back-outline\" defaultHref=\"/central/iniciosan\"></ion-back-button>\n                        <div class=\"img\" (click)=\"modal('mediapor')\">\n                            <img src=\"https://motocaliapp.com/19927613410/{{portada}}\" alt=\"\">\n                        </div>\n                        <div class=\"opciones\">\n                            <ion-buttons slot=\"end\">\n                                <ion-button (click)=\"herramientas()\">\n                                    <ion-icon color=\"blanco\" name=\"camera-outline\" slot=\"icon-only\"></ion-icon>\n                                </ion-button>\n                                <ion-button (click)=\"herramientasperfil()\">\n                                    <ion-icon color=\"blanco\" name=\"add-outline\" slot=\"icon-only\"></ion-icon>\n                                </ion-button>\n                            </ion-buttons>\n                        </div>\n                        <ion-avatar class=\"avatar\" *ngIf=\"Image !== 'none'\" (click)=\"modal('mediap')\">\n                            <ion-img [src]=\"Image\" type='media' width=\"200px\"></ion-img>\n                        </ion-avatar>\n                        <ion-avatar class=\"avatar\" *ngIf=\"Image === 'none'\">\n                        </ion-avatar>\n                    </div>\n\n                    <ion-card-header>\n                        <ion-card-title class=\"ion-text-center ion-text-wrap\">{{ nombreUsuario }}</ion-card-title>\n                    </ion-card-header>\n\n                    <ion-card-content>\n\n                        <ion-segment [value]=\"segmento\" mode=\"md\" scrollable color=\"success\" (ionChange)=\"segmentos($event)\">\n\n                            <ion-segment-button value=\"info\">\n                                <ion-label class=\"up\">\n                                    <strong>Historia</strong>\n                                </ion-label>\n                            </ion-segment-button>\n\n                            <ion-segment-button value=\"public\">\n                                <ion-label class=\"up\">\n                                    <strong>Social</strong>\n                                </ion-label>\n                            </ion-segment-button>\n\n\n\n\n                            <ion-segment-button value=\"clientes\">\n                                <ion-label class=\"up\">\n                                    <strong>Seguidores</strong> <br> {{ personas.length }}\n\n                                </ion-label>\n                            </ion-segment-button>\n\n                            <ion-segment-button value=\"seguidos\">\n                                <ion-label class=\"up\">\n                                    <strong>Siguiendo</strong> <br> {{ personasSeguidas.length }}\n                                </ion-label>\n                            </ion-segment-button>\n\n\n                        </ion-segment>\n                    </ion-card-content>\n                </ion-card>\n\n\n            </div>\n\n\n\n\n        </div>\n\n\n        <div class=\"content\">\n            <div class=\"divider \"></div>\n\n\n            <ion-slides class=\"fullancho2\" *ngIf=\"cargarInformacion\" #mislidedos (ionSlideDidChange)=\"cambioDiapositiva( $event )\">\n                <ion-slide [class.over]=\"over\" class=\"diapositiva\">\n\n                    <h3 class=\"tituloGrande per\" *ngIf=\"role === 'TALLER_ROLE' && !contenido && servicios.length === 0\">Aún no hay información sobre tu negocio</h3>\n                    <div class=\"blanco\" *ngIf=\"contenido && role === 'TALLER_ROLE'\">\n                        <h3 class=\"tituloGrande\">Establecimiento</h3>\n                        <div class=\"contenido\">\n\n                            <ion-card mode=\"ios\">\n\n                                <ion-card-content>\n                                    <ion-list>\n                                        <ion-item lines=\"none\">\n                                            <ion-icon name=\"home\" slot=\"start\" color=\"medium\"></ion-icon>\n                                            <ion-label class=\"ion-text-wrap\">{{ contenido.direccion}}</ion-label>\n                                        </ion-item>\n                                        <ion-item lines=\"none\">\n                                            <ion-icon name=\"call\" slot=\"start\" color=\"medium\"></ion-icon>\n                                            <ion-label class=\"ion-text-wrap\">{{ contenido.telefono}}</ion-label>\n                                        </ion-item>\n                                        <ion-item lines=\"none\">\n                                            <ion-icon name=\"desktop\" slot=\"start\" color=\"medium\"></ion-icon>\n                                            <ion-label class=\"ion-text-wrap\">{{ contenido.pagina}}</ion-label>\n                                        </ion-item>\n                                        <ion-item lines=\"none\">\n                                            <ion-icon name=\"location\" slot=\"start\" color=\"medium\"></ion-icon>\n                                            <ion-label class=\"ion-text-wrap\">{{ contenido.ciudad}}, {{ contenido.pais}}</ion-label>\n                                        </ion-item>\n\n                                        <ion-item lines=\"none\">\n                                            <ion-icon name=\"alarm\" slot=\"start\" color=\"medium\"></ion-icon>\n                                            <ion-label class=\"ion-text-wrap\">Abierto desde las {{ contenido.desde | horario}} hasta las {{ contenido.hasta | horario}}</ion-label>\n                                        </ion-item>\n\n                                        <ion-item>\n                                            <ion-icon name=\"today\" slot=\"start\" color=\"medium\"></ion-icon>\n                                            <ion-label class=\"ion-text-wrap\"> De {{ contenido.de}} a {{ contenido.a}}</ion-label>\n                                        </ion-item>\n\n                                    </ion-list>\n                                </ion-card-content>\n                            </ion-card>\n                        </div>\n\n                    </div>\n\n                    <div class=\"blanco\" *ngIf=\"servicios.length > 0\">\n                        <h3 class=\"tituloGrande\">Servicios</h3>\n                        <div class=\"servicio\" *ngIf=\"role === 'TALLER_ROLE'\">\n\n                            <ion-card mode=\"ios\" *ngFor=\"let item of servicios; let i = index\">\n                                <ion-card-header class=\"centrarHijo\">\n                                    <div class=\"marca\">\n                                        <ion-icon name=\"build\"></ion-icon>\n                                    </div>\n                                </ion-card-header>\n                                <ion-card-content>\n                                    {{ item }}\n                                </ion-card-content>\n                            </ion-card>\n                        </div>\n\n\n\n\n                    </div>\n\n\n                    <div class=\"blanco\" *ngIf=\"role === 'USER_ROLE'\">\n                        <h3 class=\"tituloGrande\">Información</h3>\n                        <div class=\"contenido\">\n\n                            <ion-card mode=\"ios\">\n\n                                <ion-card-content>\n                                    <div class=\"placa\" *ngIf=\"datos.placa !== ''\">{{ datos.placa }}</div>\n\n                                    <ion-list>\n                                        <ion-item *ngIf=\"contenido\" lines=\"none\">\n                                            <ion-icon name=\"aperture\" slot=\"start\" color=\"medium\"></ion-icon>\n                                            <ion-label class=\"ion-text-wrap\">{{ contenido.tipo}}</ion-label>\n                                        </ion-item>\n                                        <ion-item *ngIf=\"contenido\" lines=\"none\">\n                                            <ion-icon name=\"information-circle\" slot=\"start\" color=\"medium\"></ion-icon>\n                                            <ion-label class=\"ion-text-wrap\">{{ contenido.Nombre}}</ion-label>\n                                        </ion-item>\n                                        <ion-item *ngIf=\"contenido\" lines=\"none\">\n                                            <ion-icon name=\"flag\" slot=\"start\" color=\"medium\"></ion-icon>\n                                            <ion-label class=\"ion-text-wrap\">{{ contenido.Marca}}</ion-label>\n                                        </ion-item>\n\n                                        <ion-item *ngIf=\"contenido\" lines=\"none\">\n                                            <ion-icon name=\"ellipse\" slot=\"start\" color=\"medium\"></ion-icon>\n                                            <ion-label class=\"ion-text-wrap\">Módelo {{ contenido.Modelo}}</ion-label>\n                                        </ion-item>\n\n\n                                        <ion-item lines=\"none\">\n                                            <ion-avatar class=\"av\">\n                                                <img src=\"/assets/Marcador.png\" alt=\"\">\n                                            </ion-avatar>\n                                            <ion-label class=\"ion-text-wrap\">{{ datos.ciudad}}, {{ datos.pais}}</ion-label>\n                                        </ion-item>\n\n\n                                    </ion-list>\n                                </ion-card-content>\n                            </ion-card>\n                        </div>\n\n                    </div>\n                </ion-slide>\n                <ion-slide [class.over]=\"over\" class=\"diapositiva\">\n                    <div *ngIf=\"!cargaTodo\">\n                        <div class=\"skt\" *ngFor=\"let kl of [1,1,1,1,1]\">\n                            <ion-item lines=\"none\" class=\"sinfondo\">\n                                <ion-avatar slot=\"start\">\n                                    <ion-skeleton-text animated width=\"100%\" height=\"100%\"></ion-skeleton-text>\n                                </ion-avatar>\n                                <ion-label>\n                                    <ion-skeleton-text animated width=\"100%\" height=\"30px\"></ion-skeleton-text>\n                                    <ion-skeleton-text animated width=\"100px\" height=\"30px\"></ion-skeleton-text>\n                                </ion-label>\n                            </ion-item>\n                            <div style=\"height:200px\">\n                                <ion-skeleton-text animated width=\"100%\" height=\"200px\"></ion-skeleton-text>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"cargaTodo\">\n\n                        <div *ngFor=\"let publicacion of publicaciones; let o = index;\">\n                            <div class=\"divider ligth\"></div>\n\n\n\n                            <div class=\"publicacion dibujar\" *ngIf=\"publicacion.tipo === 'dibujar'\">\n                                <ion-item lines=\"none\" class=\"sinfondo\">\n                                    <ion-avatar slot=\"start\" (click)=\"perfilNavegar(publicacion.creador)\">\n                                        <img [src]=\"publicacion.image\" width=\"100%\" height=\"100%\" alt=\"\">\n                                    </ion-avatar>\n                                    <ion-label (click)=\"perfilNavegar(publicacion.creador)\">{{publicacion.creador.nombrecompleto}} <br> {{publicacion.creador.nombreusuario}}</ion-label>\n                                    <ion-buttons slot=\"end\">\n                                        <ion-button (click)=\"opciones2($event, publicacion._id, o)\">\n                                            <ion-icon name=\"ellipsis-vertical-outline\" slot=\"icon-only\"></ion-icon>\n                                        </ion-button>\n                                    </ion-buttons>\n                                </ion-item>\n                                <div class=\"lienzo\" [style.background]=\"publicacion.dibujo.fondo\" [style.color]=\"publicacion.dibujo.color\">\n                                    {{ publicacion.dibujo.texto }}\n                                </div>\n                                <div class=\"etiquetas\" *ngIf=\"publicacion.etiquetas.length > 0\" (click)=\"etiquetas( publicacion.etiquetas )\">\n                                    <h3>Etiquetas</h3>\n                                </div>\n\n                                <div class=\"opciones\">\n                                    <ion-item lines=\"none\" mode=\"md\" class=\"sinfondo\">\n                                        <ion-buttons slot=\"start\">\n\n                                            <ion-button (click)=\"comentarios( publicacion, o )\">\n                                                <ion-icon name=\"chatbubble-outline\" slot=\"icon-only\"></ion-icon>\n\n                                            </ion-button>\n\n                                            <ion-button (click)=\"compartir( publicacion )\">\n                                                <ion-icon name=\"arrow-redo-outline\" slot=\"icon-only\"></ion-icon>\n                                            </ion-button>\n\n                                            <!-- <ion-button *ngIf=\"!publicacion.guardado\" (click)=\"guardado(  publicacion,'crear', o )\">\n                                                <ion-icon name=\"bookmark-outline\" slot=\"icon-only\"></ion-icon>\n                                            </ion-button>\n\n                                            <ion-button *ngIf=\"publicacion.guardado\" (click)=\"guardado(  publicacion,'eliminar', o )\">\n                                                <ion-icon name=\"bookmark\" color=\"darkgold\" slot=\"icon-only\"></ion-icon>\n                                            </ion-button> -->\n                                        </ion-buttons>\n\n\n                                        <ion-buttons slot=\"end\">\n                                            <ion-chip mode=\"ios\" color=\"medium\" (click)=\"mglista(publicacion.mglista)\"> {{publicacion.valormg}}</ion-chip>\n                                            <ion-button *ngIf=\"!publicacion.megusta\" (click)=\"megusta(publicacion, 'megusta', o)\">\n                                                <ion-icon name=\"heart-outline\" slot=\"icon-only\"></ion-icon>\n\n                                            </ion-button>\n\n                                            <ion-button *ngIf=\"publicacion.megusta\" (click)=\"megusta(publicacion, 'nomegusta', o)\">\n                                                <ion-icon name=\"heart\" color=\"danger\" slot=\"icon-only\"></ion-icon>\n                                            </ion-button>\n                                        </ion-buttons>\n                                    </ion-item>\n\n                                    <ion-item lines=\"none\" class=\"sinfondo opacity\" *ngIf=\"publicacion.cog\">\n                                        <ion-avatar slot=\"start\" (click)=\"perfilNavegar(publicacion.creadororiginal)\">\n                                            <img [src]=\"publicacion.imageori\" width=\"100%\" height=\"100%\" alt=\"\">\n                                        </ion-avatar>\n                                        <ion-label (click)=\"perfilNavegar(publicacion.creadororiginal)\"> Publicación original creada por <br> @{{publicacion.creadororiginal.nombreusuario}}</ion-label>\n                                    </ion-item>\n                                </div>\n\n                                <div class=\"comentarios\">\n                                    <strong class=\"gris espacio\" (click)=\"perfilNavegar(publicacion.creador)\">{{ publicacion.creador.nombreusuario }}</strong>\n                                    <span>{{publicacion.comentario}}</span>\n                                </div>\n\n\n                                <div class=\"comentar\" (click)=\"comentarios( publicacion, o )\">\n                                    <span class=\"opt\">{{publicacion.msg}}</span> <br> Añadir Comentario\n                                </div>\n\n                                <div class=\"fecha \">{{ publicacion.fecha | fecha}}</div>\n                            </div>\n\n\n                            <div class=\"publicacion dibujar\" *ngIf=\"publicacion.tipo === 'multimedia'\">\n                                <ion-item lines=\"none\" class=\"sinfondo\">\n                                    <ion-avatar slot=\"start\" (click)=\"perfilNavegar(publicacion.creador)\">\n                                        <img [src]=\"publicacion.image\" width=\"100%\" height=\"100%\" alt=\"\">\n                                    </ion-avatar>\n                                    <ion-label (click)=\"perfilNavegar(publicacion.creador)\">{{publicacion.creador.nombrecompleto}} <br> {{publicacion.creador.nombreusuario}}</ion-label>\n                                    <ion-buttons slot=\"end\">\n                                        <ion-button (click)=\"opciones2($event, publicacion._id, o)\">\n                                            <ion-icon name=\"ellipsis-vertical-outline\" slot=\"icon-only\"></ion-icon>\n                                        </ion-button>\n                                    </ion-buttons>\n                                </ion-item>\n                                <ion-slides *ngIf=\"cargadentro\" color=\"dark\" mode=\"ios\" [pager]=\"publicacion.pager\">\n                                    <ion-slide class=\"diapo\" *ngFor=\"let archivo of publicacion.archivos; let i = index;\" (click)=\"ver(publicacion.archivos, i, publicacion)\">\n                                        <img *ngIf=\"archivo.mime.includes('image')\" src=\"https://motocaliapp.com/11927613401/{{archivo.ruta}}\" width=\"100%\">\n                                        <video video-load poster=\"/assets/Video.png\" *ngIf=\"archivo.mime.includes('video') || archivo.mime.includes('Video') || archivo.mime.includes('mp4') || archivo.mime.includes('MP4')\" src=\"https://motocaliapp.com/11927613401/{{archivo.ruta}}\" width=\"100%\"></video>\n                                        <ion-button *ngIf=\"archivo.mime.includes('video') || archivo.mime.includes('Video') || archivo.mime.includes('mp4') || archivo.mime.includes('MP4')\" class=\"btonDiapo\" fill=\"outline\" color=\"blanco\" mode=\"md\" expand=\"block\">Abrir Vídeo</ion-button>\n                                    </ion-slide>\n                                </ion-slides>\n                                <div class=\"etiquetas\" *ngIf=\"publicacion.etiquetas.length > 0\" (click)=\"etiquetas( publicacion.etiquetas )\">\n                                    <h3>Etiquetas</h3>\n                                </div>\n                                <div class=\"opciones\">\n                                    <ion-item lines=\"none\" mode=\"md\" class=\"sinfondo\">\n                                        <ion-buttons slot=\"start\">\n\n                                            <ion-button (click)=\"comentarios( publicacion, o )\">\n                                                <ion-icon name=\"chatbubble-outline\" slot=\"icon-only\"></ion-icon>\n\n                                            </ion-button>\n\n                                            <ion-button (click)=\"compartir( publicacion )\">\n                                                <ion-icon name=\"arrow-redo-outline\" slot=\"icon-only\"></ion-icon>\n                                            </ion-button>\n\n                                            <!-- <ion-button *ngIf=\"!publicacion.guardado\" (click)=\"guardado(  publicacion,'crear', o )\">\n                                                <ion-icon name=\"bookmark-outline\" slot=\"icon-only\"></ion-icon>\n                                            </ion-button>\n\n                                            <ion-button *ngIf=\"publicacion.guardado\" (click)=\"guardado(  publicacion,'eliminar', o )\">\n                                                <ion-icon name=\"bookmark\" color=\"darkgold\" slot=\"icon-only\"></ion-icon>\n                                            </ion-button> -->\n                                        </ion-buttons>\n\n\n                                        <ion-buttons slot=\"end\">\n                                            <ion-chip mode=\"ios\" color=\"medium\" (click)=\"mglista(publicacion.mglista)\"> {{publicacion.valormg}}</ion-chip>\n                                            <ion-button *ngIf=\"!publicacion.megusta\" (click)=\"megusta(publicacion, 'megusta', o)\">\n                                                <ion-icon name=\"heart-outline\" slot=\"icon-only\"></ion-icon>\n\n                                            </ion-button>\n\n                                            <ion-button *ngIf=\"publicacion.megusta\" (click)=\"megusta(publicacion, 'nomegusta', o)\">\n                                                <ion-icon name=\"heart\" color=\"danger\" slot=\"icon-only\"></ion-icon>\n                                            </ion-button>\n                                        </ion-buttons>\n                                    </ion-item>\n\n\n                                    <ion-item lines=\"none\" class=\"sinfondo opacity\" *ngIf=\"publicacion.cog\">\n                                        <ion-avatar slot=\"start\" (click)=\"perfilNavegar(publicacion.creadororiginal)\">\n                                            <img [src]=\"publicacion.imageori\" width=\"100%\" height=\"100%\" alt=\"\">\n                                        </ion-avatar>\n                                        <ion-label (click)=\"perfilNavegar(publicacion.creadororiginal)\">{{publicacion.creadororiginal.nombrecompleto}} <br> {{publicacion.creadororiginal.nombreusuario}}</ion-label>\n                                    </ion-item>\n                                </div>\n\n                                <div class=\"comentarios\">\n                                    <strong class=\"gris espacio\" (click)=\"perfilNavegar(publicacion.creador)\">{{ publicacion.creador.nombreusuario }}</strong>\n                                    <span>{{ publicacion.comentario }}</span>\n                                </div>\n\n                                <div class=\"comentar\" (click)=\"comentarios( publicacion, o )\">\n                                    <span class=\"opt\">{{publicacion.msg}}</span> <br> Añadir Comentario\n                                </div>\n\n                                <div class=\"fecha \">{{ publicacion.fecha | fecha}}</div>\n                            </div>\n\n                        </div>\n                    </div>\n\n\n                    <ion-infinite-scroll *ngIf=\"cargainfinite\" #inifinito threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n                        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando publicaciones...\">\n                        </ion-infinite-scroll-content>\n                    </ion-infinite-scroll>\n                </ion-slide>\n\n\n                <ion-slide [class.over]=\"over\" class=\"diapositiva\">\n                    <div class=\"blanco\">\n\n\n\n                        <ion-list class=\"blanco \" [@personas]=\"personas.length\">\n                            <ion-item lines=\"none\" class=\"es-bottom\">\n                                <ion-title>Seguidores {{ personas.length }}</ion-title>\n\n                            </ion-item>\n                            <ion-item color=\"blanco\" *ngFor=\"let persona of personas; let i = index;\" (click)=\"perfilNavegar(persona.usuarioEmisor)\">\n                                <ion-avatar slot=\"start\">\n                                    <img src=\"https://motocaliapp.com/{{persona.imagen}}\" width=\"100%\" height=\"100%\">\n                                </ion-avatar>\n                                <ion-label class=\"ion-text-wrap\">\n                                    <strong class=\"small\">{{persona.usuarioEmisor.nombrecompleto}}</strong><br>\n                                    <div>@{{persona.usuarioEmisor.nombreusuario}}</div>\n                                </ion-label>\n                            </ion-item>\n                        </ion-list>\n                    </div>\n                </ion-slide>\n\n                <ion-slide [class.over]=\"over\" class=\"diapositiva\">\n                    <div class=\"blanco\">\n\n\n\n                        <ion-list class=\"blanco \" [@personas]=\"personasSeguidas.length\" *ngIf=\"personasSeguidas.length > 0\">\n\n                            <ion-item lines=\"none\" class=\"es-bottom\">\n                                <ion-title>Siguiendo {{ personasSeguidas.length }}</ion-title>\n\n                            </ion-item>\n\n                            <ion-item lines=\"none\" color=\"blanco\" *ngFor=\"let persona of personasSeguidas; let i = index;\" (click)=\"perfilNavegar(persona.usuarioReceptor)\">\n                                <ion-avatar slot=\"start\">\n                                    <ion-img src=\"https://motocaliapp.com/{{persona.imagen}}\"></ion-img>\n                                </ion-avatar>\n                                <ion-label class=\"ion-text-wrap\">\n                                    <strong class=\"small\">{{persona.usuarioReceptor.nombrecompleto}}</strong><br>\n                                    <div>@{{persona.usuarioReceptor.nombreusuario}}</div>\n                                </ion-label>\n                            </ion-item>\n                        </ion-list>\n                    </div>\n\n                </ion-slide>\n\n            </ion-slides>\n        </div>\n    </div>\n</ion-content>\n\n\n<ion-content color=\"blanco\" *ngIf=\"red === 'none'\">\n    <div class=\"main ion-padding\">\n        <h2 class=\"ion-text-center opacity\">\n            Ups! lo sentimos, <br> no tienes acceso a internet\n        </h2> <br>\n\n        <p class=\"ion-text-center\">Te invitamos a que disfrutes de los módulos offline que ofrecemos</p>\n\n\n        <br>\n        <ion-button (click)=\"abrirMenu()\" fill=\"outline\" mode=\"ios\" expand=\"block\" color=\"success\">Módulos Offline</ion-button>\n\n    </div>\n\n\n\n\n</ion-content>");

/***/ }),

/***/ "MvCF":
/*!*******************************************************!*\
  !*** ./src/app/pages/usuario/perfil/perfil.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contenedor {\n  width: 100%;\n}\n\n.fecha {\n  color: #777777;\n  padding: 5px 15px;\n  font-size: 14px;\n  opacity: 0.7;\n}\n\nion-avatar img {\n  width: 100% !important;\n}\n\nion-slides,\nion-slide,\nion-list,\ndiv {\n  width: 100%;\n}\n\n.fullancho2 {\n  min-height: 100%;\n}\n\n.over {\n  overflow-y: scroll;\n}\n\n.diapositiva {\n  width: 100%;\n  max-height: 800px;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n\n.contenedor .info {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.tarjeta {\n  border-radius: 0px;\n  width: 100%;\n  margin: 0px;\n}\n\n.tarje {\n  margin: auto 0px;\n  margin-top: 10px;\n}\n\n.tarjeta ion-card-content {\n  padding: 0px;\n}\n\n.segment div {\n  padding-bottom: 2px;\n  font-size: 11px;\n}\n\n.portada {\n  width: 100%;\n  background-color: #3B4B54;\n  height: 150px;\n  max-height: 150px;\n  position: relative;\n  margin-bottom: 50px;\n}\n\n.boton {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  border-radius: 0 10px 50px 0px;\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.portada .img {\n  max-height: 150px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n}\n\n.portada .opciones {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  z-index: 10;\n  background-color: rgba(3, 3, 3, 0.3);\n  display: flex;\n  justify-content: flex-end;\n  color: #fff;\n}\n\n.portada .img img {\n  width: 100%;\n}\n\n.avatar {\n  position: absolute;\n  bottom: -50px;\n  left: 50%;\n  transform: translateX(-50%);\n  margin: 0px auto;\n  width: 100px !important;\n  height: 100px !important;\n  background-color: #273238;\n  z-index: 11;\n}\n\n.avatar h3 {\n  color: #fff;\n}\n\n.avatar-peque {\n  margin-left: 8px;\n  width: 30px !important;\n  height: 30px !important;\n}\n\n.avatar-peque img {\n  width: 100% !important;\n  height: 100% !important;\n}\n\n.titulo {\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.titulo2 {\n  font-weight: lighter;\n}\n\n.line {\n  padding-bottom: 15px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n  margin-bottom: 5px;\n}\n\n.sombre h3 {\n  color: #fff;\n}\n\n.message {\n  font-weight: lighter;\n  padding: 10px;\n  opacity: 0.5 !important;\n}\n\n.break {\n  white-space: pre-wrap;\n  text-align: justify;\n}\n\n.wrap {\n  word-wrap: break-word;\n}\n\n.up {\n  height: 35px;\n}\n\n.aviso {\n  --background: #FEE491;\n}\n\n.gris {\n  --background: #f9f9f9;\n}\n\n.aviso:hover {\n  --background: #FEE491 !important;\n}\n\n.veh ion-item:nth-child(odd) {\n  --background: #f9f9f9;\n}\n\n.servicio {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.centrarHijo {\n  display: flex;\n  justify-content: center;\n}\n\n.marca {\n  width: 50px;\n  height: 50px;\n  background-color: #e9e9e9;\n  border-radius: 100%;\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.tituloGrande {\n  width: 100%;\n  background: #3B4B54;\n  color: #ffffff;\n  font-weight: 100;\n  text-align: center;\n  padding: 15px;\n}\n\n.servicio ion-card:nth-child(1n) .marca {\n  background-color: #2C8F53;\n  color: #ffffff;\n}\n\n.servicio ion-card-content {\n  font-size: 18px !important;\n}\n\n.per {\n  margin: 50px auto;\n  opacity: 0.5;\n  text-align: center;\n  width: 300px;\n}\n\n.publicaciones {\n  width: 100%;\n  display: flex;\n}\n\n.publicacion {\n  background: #ffffff;\n  border-top: 1px solid rgba(3, 3, 3, 0.1);\n}\n\n.lienzo {\n  padding: 10px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  white-space: pre-wrap;\n  min-height: 300px;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 1.7;\n}\n\n.publicaciones .info {\n  padding: 15px;\n}\n\n.publicaciones ion-avatar img {\n  width: 100%;\n  height: 100%;\n}\n\n.opciones {\n  width: 100%;\n}\n\n.comentarios {\n  text-align: left;\n  padding: 10px;\n  padding-left: 15px;\n  font-weight: 300;\n  line-height: 1.6;\n  font-size: 16px;\n}\n\n.gris {\n  color: #333;\n}\n\n.espacio {\n  padding-right: 10px;\n}\n\n.diapo {\n  background-color: #000000 !important;\n  width: 100%;\n  max-height: calc(100vh - 270px);\n  overflow: hidden;\n  position: relative;\n}\n\n.diapo video {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.diapo .btonDiapo {\n  margin: auto 5%;\n  width: 90%;\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  z-index: 10;\n}\n\n.etiquetas h3 {\n  width: 100px;\n  border-radius: 3px;\n  text-align: center;\n  background-color: #f1f1f1;\n  color: #333333;\n}\n\n.comentar {\n  color: #777777;\n  padding: 5px 15px;\n  font-size: 14px;\n  text-align: left;\n}\n\n.opt {\n  opacity: 0.5;\n}\n\n.placa {\n  width: 150px;\n  background-color: #FFA800;\n  color: #000000;\n  font-size: 22px;\n  text-align: center;\n  padding: 5px 10px;\n  border-radius: 5px;\n  font-weight: bold;\n  border: 3px solid #000000;\n  margin-bottom: 15px;\n}\n\n.av {\n  width: 30px;\n  height: 70px;\n}\n\n@media screen and (max-width: 600px) {\n  .contenido {\n    width: 100%;\n  }\n\n  .contenido ion-card {\n    width: calc(90% - 10px);\n  }\n\n  .servicio {\n    justify-content: center;\n  }\n\n  .servicio ion-card {\n    width: calc(100% - 10px);\n    margin: 5px;\n  }\n}\n\n@media screen and (min-width: 600px) {\n  .servicio ion-card {\n    width: calc(50% - 10px);\n    margin: 5px;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .servicio ion-card {\n    width: calc(33.33% - 10px);\n    margin: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGVyZmlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKOztBQUVBOzs7O0VBSUksV0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUlBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLG9CQUFBO0FBREo7O0FBSUE7RUFDSSxvQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7QUFESjs7QUFJQTtFQUNJLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtBQURKOztBQUlBO0VBQ0kscUJBQUE7QUFESjs7QUFJQTtFQUNJLHFCQUFBO0FBREo7O0FBSUE7RUFDSSxnQ0FBQTtBQURKOztBQUlBO0VBQ0kscUJBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFESjs7QUFJQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksMEJBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0Esd0NBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtBQURKOztBQUlBO0VBQ0ksbUJBQUE7QUFESjs7QUFJQTtFQUNJLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJO0lBQ0ksV0FBQTtFQUROOztFQUdFO0lBQ0ksdUJBQUE7RUFBTjs7RUFFRTtJQUNJLHVCQUFBO0VBQ047O0VBQ0U7SUFDSSx3QkFBQTtJQUNBLFdBQUE7RUFFTjtBQUNGOztBQUNBO0VBQ0k7SUFDSSx1QkFBQTtJQUNBLFdBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0k7SUFDSSwwQkFBQTtJQUNBLFdBQUE7RUFBTjtBQUNGIiwiZmlsZSI6InBlcmZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVuZWRvciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZlY2hhIHtcclxuICAgIGNvbG9yOiAjNzc3Nzc3O1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBvcGFjaXR5OiAuNztcclxufVxyXG5cclxuaW9uLWF2YXRhciBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXNsaWRlcyxcclxuaW9uLXNsaWRlLFxyXG5pb24tbGlzdCxcclxuZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZnVsbGFuY2hvMiB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ub3ZlciB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5kaWFwb3NpdGl2YSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDgwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yIC5pbmZvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udGFyamV0YSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4udGFyamUge1xyXG4gICAgbWFyZ2luOiBhdXRvIDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi50YXJqZXRhIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uc2VnbWVudCB7fVxyXG5cclxuLnNlZ21lbnQgZGl2IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5wb3J0YWRhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNCNEI1NDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5ib3RvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCA1MHB4IDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLnBvcnRhZGEgLmltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBvcnRhZGEgLm9wY2lvbmVzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDMsIDMsIDAuMyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucG9ydGFkYSAuaW1nIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC01MHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MzIzODtcclxuICAgIHotaW5kZXg6IDExO1xyXG59XHJcblxyXG4uYXZhdGFyIGgzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYXZhdGFyLXBlcXVlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hdmF0YXItcGVxdWUgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRpdHVsbyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnRpdHVsbzIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnNvbWJyZSBoMyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgb3BhY2l0eTogLjUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJyZWFrIHtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi53cmFwIHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuLnVwIHtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuLmF2aXNvIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZFRTQ5MTtcclxufVxyXG5cclxuLmdyaXMge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG59XHJcblxyXG4uYXZpc286aG92ZXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkVFNDkxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52ZWggaW9uLWl0ZW06bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG59XHJcblxyXG4uc2VydmljaW8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmNlbnRyYXJIaWpvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hcmNhIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGl0dWxvR3JhbmRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzNCNEI1NDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5zZXJ2aWNpbyBpb24tY2FyZDpudGgtY2hpbGQoMW4pIC5tYXJjYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkM4RjUzO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5zZXJ2aWNpbyBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGVyIHtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5wdWJsaWNhY2lvbmVzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnB1YmxpY2FjaW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgzLCAzLCAzLCAwLjEpO1xyXG59XHJcblxyXG4ubGllbnpvIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbn1cclxuXHJcbi5wdWJsaWNhY2lvbmVzIC5pbmZvIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5wdWJsaWNhY2lvbmVzIGlvbi1hdmF0YXIgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ub3BjaW9uZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb21lbnRhcmlvcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uZ3JpcyB7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmVzcGFjaW8ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmRpYXBvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDI3MHB4KTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5kaWFwbyB2aWRlbyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZGlhcG8gLmJ0b25EaWFwbyB7XHJcbiAgICBtYXJnaW46IGF1dG8gNSU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uZXRpcXVldGFzIGgzIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxufVxyXG5cclxuLmNvbWVudGFyIHtcclxuICAgIGNvbG9yOiAjNzc3Nzc3O1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ub3B0IHtcclxuICAgIG9wYWNpdHk6IC41O1xyXG59XHJcblxyXG4ucGxhY2Ege1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQTgwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDAwMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uYXYge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY29udGVuaWRvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jb250ZW5pZG8gaW9uLWNhcmQge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDkwJSAtIDEwcHgpO1xyXG4gICAgfVxyXG4gICAgLnNlcnZpY2lvIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5zZXJ2aWNpbyBpb24tY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAoIG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIC5zZXJ2aWNpbyBpb24tY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kICggbWluLXdpZHRoOiA4MDBweCkge1xyXG4gICAgLnNlcnZpY2lvIGlvbi1jYXJkIHtcclxuICAgICAgICB3aWR0aDogY2FsYygzMy4zMyUgLSAxMHB4KTtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "wZq1":
/*!*******************************************************!*\
  !*** ./src/app/pages/usuario/perfil/perfil.module.ts ***!
  \*******************************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "/aZ8");
/* harmony import */ var _Modales_modal_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Modales/modal/modal.module */ "8Udq");
/* harmony import */ var _Modales_modal_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Modales/modal/modal.page */ "Zkx3");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _video_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./video.directive */ "Ejjj");
/* harmony import */ var _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Modales/igtmplantilla/igtmplantilla.page */ "rE7l");
/* harmony import */ var _Modales_igtmplantilla_igtmplantilla_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Modales/igtmplantilla/igtmplantilla.module */ "J1J0");













const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]
    }
];
let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _Modales_modal_modal_page__WEBPACK_IMPORTED_MODULE_8__["ModalPage"],
            _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_11__["IgtmplantillaPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _Modales_modal_modal_module__WEBPACK_IMPORTED_MODULE_7__["ModalPageModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
            _Modales_igtmplantilla_igtmplantilla_module__WEBPACK_IMPORTED_MODULE_12__["IgtmplantillaPageModule"]
        ],
        declarations: [
            _perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"],
            _video_directive__WEBPACK_IMPORTED_MODULE_10__["VideoDirective"]
        ]
    })
], PerfilPageModule);



/***/ })

}]);
//# sourceMappingURL=usuario-perfil-perfil-module.js.map