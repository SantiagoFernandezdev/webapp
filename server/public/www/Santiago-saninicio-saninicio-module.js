(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Santiago-saninicio-saninicio-module"],{

/***/ "/bSI":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/Santiago/historias-modal/historias-modal-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: HistoriasModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriasModalPageRoutingModule", function() { return HistoriasModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _historias_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./historias-modal.page */ "mKXi");




const routes = [
    {
        path: '',
        component: _historias_modal_page__WEBPACK_IMPORTED_MODULE_3__["HistoriasModalPage"]
    }
];
let HistoriasModalPageRoutingModule = class HistoriasModalPageRoutingModule {
};
HistoriasModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HistoriasModalPageRoutingModule);



/***/ }),

/***/ "21cG":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Santiago/saninicio/saninicio.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content *ngIf=\"cr\" [fullscreen]=\"true\" #contenido>\n    <ion-segment scrollable=\"true\" class=\"ct\">\n        <div (click)=\"crearHistoria()\" class=\"color\" *ngFor=\"let noticia of noticias\"> +\n        </div>\n\n        <ion-avatar class=\"avatar\" *ngFor=\"let historia of historias\" (click)=\"navegarHistoria( historia )\" [class.borde]=\"historia.marcado\">\n            <img src=\"{{ historia.img }}\">\n        </ion-avatar>\n    </ion-segment>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <div *ngIf=\"!cargaTodo\">\n        <div class=\"skt\" *ngFor=\"let kl of [1,1,1,1,1]\">\n            <ion-item lines=\"none\" class=\"sinfondo\">\n                <ion-avatar slot=\"start\">\n                    <ion-skeleton-text animated width=\"100%\" height=\"100%\"></ion-skeleton-text>\n                </ion-avatar>\n                <ion-label>\n                    <ion-skeleton-text animated width=\"100%\" height=\"30px\"></ion-skeleton-text>\n                    <ion-skeleton-text animated width=\"100px\" height=\"30px\"></ion-skeleton-text>\n                </ion-label>\n            </ion-item>\n            <div style=\"height:200px\">\n                <ion-skeleton-text animated width=\"100%\" height=\"200px\"></ion-skeleton-text>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"cargaTodo\">\n\n        <div *ngFor=\"let publicacion of publicaciones; let o = index;\">\n            <div class=\"divider ligth\"></div>\n\n\n\n            <div class=\"publicacion dibujar\" *ngIf=\"publicacion.tipo === 'dibujar'\">\n                <ion-item lines=\"none\" class=\"sinfondo\">\n                    <ion-avatar slot=\"start\" (click)=\"perfilNavegar(publicacion.creador)\">\n                        <img [src]=\"publicacion.image\" width=\"100%\" height=\"100%\" alt=\"\">\n                    </ion-avatar>\n                    <ion-label class=\"ion-text-wrap\" (click)=\"perfilNavegar(publicacion.creador)\">{{publicacion.creador.nombrecompleto}} <br> @{{publicacion.creador.nombreusuario}}</ion-label>\n                    <ion-buttons slot=\"end\" *ngIf=\"publicacion.eliminar\">\n                        <ion-button (click)=\"opciones($event, publicacion._id, o)\">\n                            <ion-icon name=\"ellipsis-vertical-outline\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                    </ion-buttons>\n                </ion-item>\n                <div class=\"lienzo\" [style.background]=\"publicacion.dibujo.fondo\" [style.color]=\"publicacion.dibujo.color\">\n                    {{ publicacion.dibujo.texto }}\n                </div>\n                <div class=\"etiquetas\" *ngIf=\"publicacion.etiquetas.length > 0\" (click)=\"etiquetas( publicacion.etiquetas )\">\n                    <h3>Etiquetas</h3>\n                </div>\n\n                <div class=\"opciones\">\n                    <ion-item lines=\"none\" mode=\"md\" class=\"sinfondo\">\n                        <ion-buttons slot=\"start\">\n\n                            <ion-button (click)=\"comentarios( publicacion, o )\">\n                                <ion-icon name=\"chatbubble-outline\" slot=\"icon-only\"></ion-icon>\n\n                            </ion-button>\n\n                            <ion-button (click)=\"compartir( publicacion )\">\n                                <ion-icon name=\"arrow-redo-outline\" slot=\"icon-only\"></ion-icon>\n                            </ion-button>\n\n                            <!-- <ion-button *ngIf=\"!publicacion.guardado\" (click)=\"guardado(  publicacion,'crear', o )\">\n                                <ion-icon name=\"bookmark-outline\" slot=\"icon-only\"></ion-icon>\n                            </ion-button>\n\n                            <ion-button *ngIf=\"publicacion.guardado\" (click)=\"guardado(  publicacion,'eliminar', o )\">\n                                <ion-icon name=\"bookmark\" color=\"darkgold\" slot=\"icon-only\"></ion-icon>\n                            </ion-button> -->\n                        </ion-buttons>\n\n\n                        <ion-buttons slot=\"end\">\n                            <ion-chip mode=\"ios\" color=\"medium\" (click)=\"mglista(publicacion.mglista)\"> {{publicacion.valormg}}</ion-chip>\n                            <ion-button *ngIf=\"!publicacion.megusta\" (click)=\"megusta(publicacion, 'megusta', o)\">\n                                <ion-icon name=\"heart-outline\" slot=\"icon-only\"></ion-icon>\n\n                            </ion-button>\n\n                            <ion-button *ngIf=\"publicacion.megusta\" (click)=\"megusta(publicacion, 'nomegusta', o)\">\n                                <ion-icon name=\"heart\" color=\"danger\" slot=\"icon-only\"></ion-icon>\n                            </ion-button>\n                        </ion-buttons>\n                    </ion-item>\n\n                    <ion-item lines=\"none\" class=\"sinfondo opacity\" *ngIf=\"publicacion.cog\">\n                        <ion-avatar slot=\"start\" (click)=\"perfilNavegar(publicacion.creadororiginal)\">\n                            <img [src]=\"publicacion.imageori\" width=\"100%\" height=\"100%\" alt=\"\">\n                        </ion-avatar>\n                        <ion-label (click)=\"perfilNavegar(publicacion.creadororiginal)\"> Publicación original creada por <br> @{{publicacion.creadororiginal.nombreusuario}}</ion-label>\n                    </ion-item>\n                </div>\n\n                <div class=\"comentarios\">\n                    <strong class=\"gris espacio\" (click)=\"perfilNavegar(publicacion.creador)\">{{ publicacion.creador.nombreusuario }}</strong>\n                    <span>{{publicacion.comentario}}</span>\n                </div>\n\n\n                <div class=\"comentar\" (click)=\"comentarios( publicacion, o )\">\n                    <span class=\"opt\">{{publicacion.msg}}</span> <br> Añadir Comentario\n                </div>\n                <div class=\"fecha \">{{ publicacion.fecha | cambioUTC}}</div>\n            </div>\n\n\n            <div class=\"publicacion dibujar\" *ngIf=\"publicacion.tipo === 'multimedia'\">\n                <ion-item lines=\"none\" class=\"sinfondo\">\n                    <ion-avatar slot=\"start\" (click)=\"perfilNavegar(publicacion.creador)\">\n                        <img [src]=\"publicacion.image\" width=\"100%\" height=\"100%\" alt=\"\">\n                    </ion-avatar>\n                    <ion-label class=\"ion-text-wrap\" (click)=\"perfilNavegar(publicacion.creador)\">{{publicacion.creador.nombrecompleto}} <br> @{{publicacion.creador.nombreusuario}}</ion-label>\n                    <ion-buttons slot=\"end\" *ngIf=\"publicacion.eliminar\">\n                        <ion-button (click)=\"opciones($event, publicacion._id, o)\">\n                            <ion-icon name=\"ellipsis-vertical-outline\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                    </ion-buttons>\n                </ion-item>\n                <ion-slides *ngIf=\"cargadentro\" color=\"dark\" mode=\"ios\" [pager]=\"publicacion.pager\">\n                    <ion-slide class=\"diapo\" *ngFor=\"let archivo of publicacion.archivos; let i = index;\" (click)=\"ver(publicacion.archivos, i, publicacion)\">\n                        <img *ngIf=\"archivo.mime.includes('image')\" src=\"https://motocaliapp.com/11927613401/{{archivo.ruta}}\" width=\"100%\">\n                        <video video-load poster=\"/assets/Video.png\" *ngIf=\"archivo.mime.includes('video') || archivo.mime.includes('Video') || archivo.mime.includes('mp4') || archivo.mime.includes('MP4')\" src=\"https://motocaliapp.com/11927613401/{{archivo.ruta}}\" width=\"100%\"></video>\n                        <ion-button *ngIf=\"archivo.mime.includes('video') || archivo.mime.includes('Video') || archivo.mime.includes('mp4') || archivo.mime.includes('MP4')\" class=\"btonDiapo\" fill=\"outline\" color=\"blanco\" mode=\"md\" expand=\"block\">Abrir Vídeo</ion-button>\n                    </ion-slide>\n                </ion-slides>\n                <div class=\"etiquetas\" *ngIf=\"publicacion.etiquetas.length > 0\" (click)=\"etiquetas( publicacion.etiquetas )\">\n                    <h3>Etiquetas</h3>\n                </div>\n                <div class=\"opciones\">\n                    <ion-item lines=\"none\" mode=\"md\" class=\"sinfondo\">\n                        <ion-buttons slot=\"start\">\n\n                            <ion-button (click)=\"comentarios( publicacion, o )\">\n                                <ion-icon name=\"chatbubble-outline\" slot=\"icon-only\"></ion-icon>\n\n                            </ion-button>\n\n                            <ion-button (click)=\"compartir( publicacion )\">\n                                <ion-icon name=\"arrow-redo-outline\" slot=\"icon-only\"></ion-icon>\n                            </ion-button>\n\n                            <!-- <ion-button *ngIf=\"!publicacion.guardado\" (click)=\"guardado(  publicacion,'crear', o )\">\n                                <ion-icon name=\"bookmark-outline\" slot=\"icon-only\"></ion-icon>\n                            </ion-button>\n\n                            <ion-button *ngIf=\"publicacion.guardado\" (click)=\"guardado(  publicacion,'eliminar', o )\">\n                                <ion-icon name=\"bookmark\" color=\"darkgold\" slot=\"icon-only\"></ion-icon>\n                            </ion-button> -->\n                        </ion-buttons>\n\n\n                        <ion-buttons slot=\"end\">\n                            <ion-chip mode=\"ios\" color=\"medium\" (click)=\"mglista(publicacion.mglista)\"> {{publicacion.valormg}}</ion-chip>\n                            <ion-button *ngIf=\"!publicacion.megusta\" (click)=\"megusta(publicacion, 'megusta', o)\">\n                                <ion-icon name=\"heart-outline\" slot=\"icon-only\"></ion-icon>\n\n                            </ion-button>\n\n                            <ion-button *ngIf=\"publicacion.megusta\" (click)=\"megusta(publicacion, 'nomegusta', o)\">\n                                <ion-icon name=\"heart\" color=\"danger\" slot=\"icon-only\"></ion-icon>\n                            </ion-button>\n                        </ion-buttons>\n                    </ion-item>\n\n\n                    <ion-item lines=\"none\" class=\"sinfondo opacity\" *ngIf=\"publicacion.cog\">\n                        <ion-avatar slot=\"start\" (click)=\"perfilNavegar(publicacion.creadororiginal)\">\n                            <img [src]=\"publicacion.imageori\" width=\"100%\" height=\"100%\" alt=\"\">\n                        </ion-avatar>\n                        <ion-label (click)=\"perfilNavegar(publicacion.creadororiginal)\">{{publicacion.creadororiginal.nombrecompleto}} <br> {{publicacion.creadororiginal.nombreusuario}}</ion-label>\n                    </ion-item>\n                </div>\n\n                <div class=\"comentarios\">\n                    <strong class=\"gris espacio\" (click)=\"perfilNavegar(publicacion.creador)\">{{ publicacion.creador.nombreusuario }}</strong>\n                    <span>{{ publicacion.comentario }}</span>\n                </div>\n\n                <div class=\"comentar\" (click)=\"comentarios( publicacion, o )\">\n                    <span class=\"opt\">{{publicacion.msg}}</span> <br> Añadir Comentario\n                </div>\n\n                <div class=\"fecha \">{{ publicacion.fecha | cambioUTC}}</div>\n            </div>\n\n        </div>\n    </div>\n\n    <ion-infinite-scroll *ngIf=\"cargainfinite\" #inifinito threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando Publicaciones...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-content>");

/***/ }),

/***/ "3Wyg":
/*!************************************************************!*\
  !*** ./src/app/pages/Santiago/saninicio/saninicio.page.ts ***!
  \************************************************************/
/*! exports provided: SANinicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SANinicioPage", function() { return SANinicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_saninicio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./saninicio.page.html */ "21cG");
/* harmony import */ var _saninicio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saninicio.page.scss */ "e6V/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var src_app_providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/Api/IGTM.service */ "WGaO");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Modales/igtmplantilla/igtmplantilla.page */ "rE7l");
/* harmony import */ var _historias_modal_historias_modal_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../historias-modal/historias-modal.page */ "mKXi");
/* harmony import */ var src_app_Components_alertapopover_alertapopover_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/Components/alertapopover/alertapopover.component */ "c6Yc");
/* harmony import */ var _providers_cargas_Entradas_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../providers/cargas/Entradas.service */ "FlrC");
/* harmony import */ var _Components_modal_megustas_modal_megustas_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../Components/modal-megustas/modal-megustas.component */ "UInZ");

















let SANinicioPage = class SANinicioPage {
    constructor(almacenamiento, modalCtrl, IGTMApi, toast, router, statusbar, socket, poipover, entrada) {
        this.almacenamiento = almacenamiento;
        this.modalCtrl = modalCtrl;
        this.IGTMApi = IGTMApi;
        this.toast = toast;
        this.router = router;
        this.statusbar = statusbar;
        this.socket = socket;
        this.poipover = poipover;
        this.entrada = entrada;
        this.slideOpt = {
            zoom: {
                maxRatio: 8,
                toggle: true
            }
        };
        this.click = false;
        this.publicaciones = [];
        this.cargadentro = false;
        this.noticias = [1];
        this.historias = [];
        this.historiasBase = [];
        this.cargaTodo = false;
        this.cargainfinite = true;
        this.desde = 0;
        this.cr = false;
        this.entrada.$inicio.subscribe((data) => {
            console.log(data);
            console.log('dataaaaaa');
            if (data !== '') {
                if (this.cr) {
                    this.contenido.scrollToTop(300).then(() => {
                    }).catch(() => {
                    });
                }
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.cr = true;
        this.desde = 0;
        // // // console.log('Comenzando')
        this.historias = [];
        this.historiasBase = [];
        this.iniciar2();
        this.iniciar();
    }
    refrescando(event) {
        this.cr = true;
        this.desde = 0;
        this.infinite.disabled = false;
        this.historias = [];
        this.historiasBase = [];
        this.iniciar().then(() => {
            this.iniciar2();
            event.detail.complete();
        }).catch(() => {
            this.iniciar2();
            event.detail.complete();
        });
    }
    clicks() {
        const obst = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"]((obs) => {
            if (this.enlace) {
                obs.next('Bien');
                this.enlace.nativeElement.addEventListener('click', () => {
                    // // // console.log('Hola')
                });
            }
        });
        return obst;
    }
    iniciar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.IGTMApi.saber(info.token, { desde: this.desde }).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    // // // console.log(data)
                    if (data.exe) {
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
    iniciar2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.infinite.disabled = false;
                // // // console.log('Info', info)
                this.IGTMApi.saberHistorias(info.token, {}).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    // // console.log(data, 'Historias')
                    if (data.exe) {
                        //this.cargaTodo = true;
                        this.historias = [];
                        if (data.response.length > 0) {
                            data.response.forEach((item, i) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                if (item.length > 0) {
                                    // item.guardado = false;
                                    if (item[0].creador.imagen.length > 0) {
                                        item[0].image = `https://motocaliapp.com/${item[0].creador.imagen[0].path}`;
                                    }
                                    else {
                                        item[0].image = '/assets/notfound.png';
                                    }
                                    let obj = {
                                        img: item[0].image,
                                        idx: i,
                                        nombre: item[0].creador.nombrecompleto,
                                        usuario: item[0].creador.nombreusuario,
                                        marcado: false,
                                        visto: 0
                                    };
                                    item.forEach((histo, l) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                        if (histo.vistos.filter((it) => it.toString() === info._id).length === 0) {
                                            obj.marcado = true;
                                            obj.visto = l;
                                        }
                                        yield new Promise((resolve, reject) => {
                                            this.IGTMApi.leerFotos(info.token, { id: histo._id, historia: 'true' }).subscribe((res) => {
                                                // // // console.log( res.response, 'fotosssssssssssssssssssssss')
                                                if (res.exe) {
                                                    histo.archivos = res.response;
                                                    // // // console.log(res.response.length, 'Bien fotos')
                                                    if (res.response.length > 1) {
                                                        resolve({ exe: true });
                                                    }
                                                    else {
                                                        resolve({ exe: false });
                                                    }
                                                }
                                                else {
                                                    resolve({ exe: true });
                                                    histo.archivos = [];
                                                }
                                            }, (err) => {
                                                resolve({ exe: false });
                                                histo.archivos = [];
                                            });
                                        });
                                    }));
                                    this.historias.push(obj);
                                    this.historiasBase.push(item);
                                }
                            }));
                        }
                    }
                }), (err) => {
                    // // // console.log('Error', err);
                });
            }
        });
    }
    megusta(publicacion, tipo, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // // // console.log(this.publicaciones[i]);
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
    etiquetar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_12__["IgtmplantillaPage"],
                componentProps: {
                    tipo: 'etiquetar'
                }
            });
            yield modal.present();
        });
    }
    etiquetas(etiquetados) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_12__["IgtmplantillaPage"],
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
                    component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_12__["IgtmplantillaPage"],
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
    comentarios(publicacion, indice) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_12__["IgtmplantillaPage"],
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
    compartir(publicacion) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_12__["IgtmplantillaPage"],
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
    perfil(usuario) {
        // // // console.log('Holaa')
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
    crearHistoria() {
        this.router.navigate(['historias/historia']);
    }
    navegarHistoria(historia) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _historias_modal_historias_modal_page__WEBPACK_IMPORTED_MODULE_13__["HistoriasModalPage"],
                componentProps: {
                    info: historia,
                    historias: this.historiasBase
                }
            });
            yield modal.present();
            modal.onWillDismiss().then(() => {
                this.historias = [];
                this.historiasBase = [];
                this.iniciar2();
            }).catch(() => {
                this.historias = [];
                this.historiasBase = [];
                this.iniciar2();
            });
        });
    }
    opciones(event, id, idx) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.poipover.create({
                component: src_app_Components_alertapopover_alertapopover_component__WEBPACK_IMPORTED_MODULE_14__["AlertapopoverComponent"],
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
    loadData(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.desde = this.desde + 10;
            // console.log(this.desde)
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.IGTMApi.saber(info.token, { desde: this.desde }).subscribe((data) => {
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
    mglista(listado) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Components_modal_megustas_modal_megustas_component__WEBPACK_IMPORTED_MODULE_16__["ModalMegustasComponent"],
                componentProps: {
                    listado: listado
                }
            });
            yield modal.present();
        });
    }
    ionViewWillLeave() {
        this.cr = false;
    }
};
SANinicioPage.ctorParameters = () => [
    { type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__["InicioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: src_app_providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_5__["IGTMService"] },
    { type: src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_4__["ToastServices"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__["StatusBar"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__["Socket"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _providers_cargas_Entradas_service__WEBPACK_IMPORTED_MODULE_15__["EntradasServices"] }
];
SANinicioPage.propDecorators = {
    enlace: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['.enlace', { static: false },] }],
    contenido: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['contenido', { static: false },] }],
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['inifinito', { static: false },] }]
};
SANinicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-saninicio',
        template: _raw_loader_saninicio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_saninicio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SANinicioPage);



/***/ }),

/***/ "9ptP":
/*!**************************************************************************!*\
  !*** ./src/app/pages/Santiago/historias-modal/historias-modal.module.ts ***!
  \**************************************************************************/
/*! exports provided: HistoriasModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriasModalPageModule", function() { return HistoriasModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _historias_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./historias-modal-routing.module */ "/bSI");
/* harmony import */ var _historias_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./historias-modal.page */ "mKXi");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");








let HistoriasModalPageModule = class HistoriasModalPageModule {
};
HistoriasModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _historias_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoriasModalPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_historias_modal_page__WEBPACK_IMPORTED_MODULE_6__["HistoriasModalPage"]]
    })
], HistoriasModalPageModule);



/***/ }),

/***/ "OXO1":
/*!**************************************************************************!*\
  !*** ./src/app/pages/Santiago/historias-modal/historias-modal.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contenedor {\n  width: 100%;\n  min-height: 100vh;\n  height: auto;\n}\n\n.encabezado {\n  width: 100%;\n  padding: 5px 10px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  font-size: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 10;\n  touch-action: auto !important;\n}\n\n.pie {\n  width: 100%;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  font-size: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 10;\n}\n\n.pie .data {\n  width: 150px;\n  background: #333333;\n  color: #ffffff !important;\n  text-align: center;\n  padding: 5px 10px;\n  font-size: 14px;\n}\n\n.encabezado .data {\n  width: 80%;\n  display: flex;\n  align-items: center;\n  color: #ffffff;\n}\n\n.encabezado .data .titulo {\n  padding-left: 10px;\n  text-align: left;\n}\n\n.encabezado .data span {\n  font-size: 14px;\n  font-weight: normal;\n}\n\n.encabezado .data strong {\n  font-size: 12px;\n}\n\nion-slides {\n  width: 100%;\n  min-height: 100vh;\n  height: auto;\n}\n\nion-slide {\n  width: 100%;\n  height: 100%;\n}\n\nion-slide ion-slides {\n  width: 100%;\n  height: 100vh;\n}\n\n.one {\n  height: 100vh !important;\n}\n\n.sl {\n  width: 100%;\n  min-height: 100%;\n  height: auto;\n}\n\n.sl ion-slide {\n  width: 100%;\n  max-width: 600px;\n  margin: auto;\n  height: 100%;\n  position: relative;\n}\n\n.sl ion-slide img {\n  width: 100%;\n}\n\n.texto h3 {\n  font-size: 22px;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  font-weight: bold;\n}\n\n.etiquetados {\n  width: 100%;\n  height: 100%;\n  padding: 5px 10px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  font-size: 20px;\n  z-index: 20;\n  background: #3B4B54;\n}\n\n.etiquetados ion-list {\n  background: #3B4B54;\n}\n\n.etiquetados .dataa {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.etiquetados .dataa .cerrarr {\n  text-align: right;\n  color: #ffffff;\n  z-index: 30;\n  font-size: 18px;\n  padding: 5px;\n}\n\n.etiquetados .dataa .com {\n  margin-top: 50px;\n  color: #ffffff;\n  font-size: 16px;\n  padding: 10px;\n}\n\n.cc {\n  background: #536169;\n  color: #cccccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGlzdG9yaWFzLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoiaGlzdG9yaWFzLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5lZG9yIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5lbmNhYmV6YWRvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICB0b3VjaC1hY3Rpb246IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBpZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLnBpZSAuZGF0YSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZW5jYWJlemFkbyAuZGF0YSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmVuY2FiZXphZG8gLmRhdGEgLnRpdHVsbyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uZW5jYWJlemFkbyAuZGF0YSBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5lbmNhYmV6YWRvIC5kYXRhIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuaW9uLXNsaWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5pb24tc2xpZGUgaW9uLXNsaWRlcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5vbmUge1xyXG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2wge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uc2wgaW9uLXNsaWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNsIGlvbi1zbGlkZSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50ZXh0byBoMyB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmV0aXF1ZXRhZG9zIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgYmFja2dyb3VuZDogIzNCNEI1NDtcclxufVxyXG5cclxuLmV0aXF1ZXRhZG9zIGlvbi1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6ICMzQjRCNTQ7XHJcbn1cclxuXHJcbi5ldGlxdWV0YWRvcyAuZGF0YWEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5ldGlxdWV0YWRvcyAuZGF0YWEgLmNlcnJhcnIge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHotaW5kZXg6IDMwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uZXRpcXVldGFkb3MgLmRhdGFhIC5jb20ge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmNjIHtcclxuICAgIGJhY2tncm91bmQ6ICM1MzYxNjk7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxufSJdfQ== */");

/***/ }),

/***/ "PEMb":
/*!*************************************************************!*\
  !*** ./src/app/pages/Santiago/saninicio/video.directive.ts ***!
  \*************************************************************/
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

/***/ "XJfs":
/*!**********************************************************************!*\
  !*** ./src/app/pages/Santiago/saninicio/saninicio-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: SANinicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SANinicioPageRoutingModule", function() { return SANinicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _saninicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saninicio.page */ "3Wyg");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");





const routes = [
    {
        path: '',
        component: _saninicio_page__WEBPACK_IMPORTED_MODULE_3__["SANinicioPage"]
    }
];
let SANinicioPageRoutingModule = class SANinicioPageRoutingModule {
};
SANinicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SANinicioPageRoutingModule);



/***/ }),

/***/ "e6V/":
/*!**************************************************************!*\
  !*** ./src/app/pages/Santiago/saninicio/saninicio.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  width: 100%;\n}\n\n.ct {\n  background-color: var(--ion-color-oscuro);\n}\n\n.color {\n  margin: 10px 5px;\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n  background-color: #58656D;\n  color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 22px;\n}\n\n.color span {\n  opacity: 0;\n}\n\n.avatar {\n  width: 50px;\n  height: 50px;\n  margin: 10px 5px;\n}\n\n.borde {\n  border: 4px solid #ffffff;\n}\n\n.publicacion {\n  background: #ffffff;\n  border-top: 1px solid rgba(3, 3, 3, 0.1);\n  max-width: 800px;\n  margin: auto;\n}\n\n.publicacion ion-label {\n  font-size: 12px !important;\n}\n\n.lienzo {\n  padding: 10px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  white-space: pre-wrap;\n  min-height: 300px;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 1.7;\n}\n\n.info {\n  padding: 15px;\n}\n\n.opciones {\n  width: 100%;\n}\n\n.comentarios {\n  padding: 10px;\n  padding-left: 15px;\n  font-weight: 300;\n  line-height: 1.6;\n  font-size: 16px;\n}\n\n.gris {\n  color: #333;\n}\n\n.espacio {\n  padding-right: 10px;\n}\n\n.diapo {\n  background-color: #000000 !important;\n  width: 100%;\n  max-height: calc(100vh - 270px);\n  overflow: hidden;\n  position: relative;\n}\n\n.diapo video {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.diapo .btonDiapo {\n  margin: auto 5%;\n  width: 90%;\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  z-index: 10;\n}\n\n.etiquetas h3 {\n  width: 100px;\n  border-radius: 3px;\n  text-align: center;\n  background-color: #f1f1f1;\n  color: #333333;\n  cursor: pointer;\n}\n\n.comentar {\n  color: #333333;\n  padding: 5px 15px;\n  font-size: 14px;\n}\n\n.fecha {\n  color: #777777;\n  padding: 5px 15px;\n  font-size: 14px;\n  opacity: 0.7;\n}\n\n.opt {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2FuaW5pY2lvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLHlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJzYW5pbmljaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW9zY3Vybyk7XHJcbn1cclxuXHJcbi5jb2xvciB7XHJcbiAgICBtYXJnaW46IDEwcHggNXB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4NjU2RDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLmNvbG9yIHNwYW4ge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMTBweCA1cHg7XHJcbn1cclxuXHJcbi5ib3JkZSB7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjZmZmZmZmO1xyXG59XHJcblxyXG4ucHVibGljYWNpb24ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDMsIDMsIDMsIDAuMSk7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ucHVibGljYWNpb24gaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGllbnpvIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5vcGNpb25lcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbWVudGFyaW9zIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmdyaXMge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5lc3BhY2lvIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5kaWFwbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyNzBweCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZGlhcG8gdmlkZW8ge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmRpYXBvIC5idG9uRGlhcG8ge1xyXG4gICAgbWFyZ2luOiBhdXRvIDUlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLmV0aXF1ZXRhcyBoMyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb21lbnRhciB7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZmVjaGEge1xyXG4gICAgY29sb3I6ICM3Nzc3Nzc7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG9wYWNpdHk6IC43O1xyXG59XHJcblxyXG4ub3B0IHtcclxuICAgIG9wYWNpdHk6IC41O1xyXG59Il19 */");

/***/ }),

/***/ "gytv":
/*!**************************************************************!*\
  !*** ./src/app/pages/Santiago/saninicio/saninicio.module.ts ***!
  \**************************************************************/
/*! exports provided: SANinicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SANinicioPageModule", function() { return SANinicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _saninicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saninicio-routing.module */ "XJfs");
/* harmony import */ var _saninicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saninicio.page */ "3Wyg");
/* harmony import */ var _video_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./video.directive */ "PEMb");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Modales/igtmplantilla/igtmplantilla.page */ "rE7l");
/* harmony import */ var _Modales_igtmplantilla_igtmplantilla_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Modales/igtmplantilla/igtmplantilla.module */ "J1J0");
/* harmony import */ var _historias_modal_historias_modal_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../historias-modal/historias-modal.module */ "9ptP");
/* harmony import */ var _historias_modal_historias_modal_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../historias-modal/historias-modal.page */ "mKXi");













let SANinicioPageModule = class SANinicioPageModule {
};
SANinicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_9__["IgtmplantillaPage"],
            _historias_modal_historias_modal_page__WEBPACK_IMPORTED_MODULE_12__["HistoriasModalPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _saninicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["SANinicioPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            _Modales_igtmplantilla_igtmplantilla_module__WEBPACK_IMPORTED_MODULE_10__["IgtmplantillaPageModule"],
            _historias_modal_historias_modal_module__WEBPACK_IMPORTED_MODULE_11__["HistoriasModalPageModule"]
        ],
        declarations: [_saninicio_page__WEBPACK_IMPORTED_MODULE_6__["SANinicioPage"], _video_directive__WEBPACK_IMPORTED_MODULE_7__["VideoDirective"]]
    })
], SANinicioPageModule);



/***/ }),

/***/ "mKXi":
/*!************************************************************************!*\
  !*** ./src/app/pages/Santiago/historias-modal/historias-modal.page.ts ***!
  \************************************************************************/
/*! exports provided: HistoriasModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriasModalPage", function() { return HistoriasModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_historias_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./historias-modal.page.html */ "xe+t");
/* harmony import */ var _historias_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./historias-modal.page.scss */ "OXO1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../providers/Api/IGTM.service */ "WGaO");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");










let HistoriasModalPage = class HistoriasModalPage {
    constructor(modalCtrl, statusbar, router, almacenamiento, IGTMApi, toast) {
        this.modalCtrl = modalCtrl;
        this.statusbar = statusbar;
        this.router = router;
        this.almacenamiento = almacenamiento;
        this.IGTMApi = IGTMApi;
        this.toast = toast;
        this.ht = ['fsdf', 'asdfasf', 'asfas'];
        this.slideopts = {
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            on: {
                beforeInit: function () {
                    const swiper = this;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}cube`);
                    swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                    const overwriteParams = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: false,
                        virtualTranslate: true,
                    };
                    this.params = Object.assign(this.params, overwriteParams);
                    this.originalParams = Object.assign(this.originalParams, overwriteParams);
                },
                setTranslate: function () {
                    const swiper = this;
                    const { $el, $wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize, } = swiper;
                    const params = swiper.params.cubeEffect;
                    const isHorizontal = swiper.isHorizontal();
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    let wrapperRotate = 0;
                    let $cubeShadowEl;
                    if (params.shadow) {
                        if (isHorizontal) {
                            $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
                            if ($cubeShadowEl.length === 0) {
                                $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
                                $wrapperEl.append($cubeShadowEl);
                            }
                            $cubeShadowEl.css({ height: `${swiperWidth}px` });
                        }
                        else {
                            $cubeShadowEl = $el.find('.swiper-cube-shadow');
                            if ($cubeShadowEl.length === 0) {
                                $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
                                $el.append($cubeShadowEl);
                            }
                        }
                    }
                    for (let i = 0; i < slides.length; i += 1) {
                        const $slideEl = slides.eq(i);
                        let slideIndex = i;
                        if (isVirtual) {
                            slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
                        }
                        let slideAngle = slideIndex * 90;
                        let round = Math.floor(slideAngle / 360);
                        if (rtl) {
                            slideAngle = -slideAngle;
                            round = Math.floor(-slideAngle / 360);
                        }
                        const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                        let tx = 0;
                        let ty = 0;
                        let tz = 0;
                        if (slideIndex % 4 === 0) {
                            tx = -round * 4 * swiperSize;
                            tz = 0;
                        }
                        else if ((slideIndex - 1) % 4 === 0) {
                            tx = 0;
                            tz = -round * 4 * swiperSize;
                        }
                        else if ((slideIndex - 2) % 4 === 0) {
                            tx = swiperSize + (round * 4 * swiperSize);
                            tz = swiperSize;
                        }
                        else if ((slideIndex - 3) % 4 === 0) {
                            tx = -swiperSize;
                            tz = (3 * swiperSize) + (swiperSize * 4 * round);
                        }
                        if (rtl) {
                            tx = -tx;
                        }
                        if (!isHorizontal) {
                            ty = tx;
                            tx = 0;
                        }
                        const transform$$1 = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
                        if (progress <= 1 && progress > -1) {
                            wrapperRotate = (slideIndex * 90) + (progress * 90);
                            if (rtl)
                                wrapperRotate = (-slideIndex * 90) - (progress * 90);
                        }
                        $slideEl.transform(transform$$1);
                        if (params.slideShadows) {
                            // Set shadows
                            let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                            let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
                                $slideEl.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
                                $slideEl.append(shadowAfter);
                            }
                            if (shadowBefore.length)
                                shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length)
                                shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
                    }
                    $wrapperEl.css({
                        '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
                        '-moz-transform-origin': `50% 50% -${swiperSize / 2}px`,
                        '-ms-transform-origin': `50% 50% -${swiperSize / 2}px`,
                        'transform-origin': `50% 50% -${swiperSize / 2}px`,
                    });
                    if (params.shadow) {
                        if (isHorizontal) {
                            $cubeShadowEl.transform(`translate3d(0px, ${(swiperWidth / 2) + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
                        }
                        else {
                            const shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
                            const multiplier = 1.5 - ((Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
                                + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2));
                            const scale1 = params.shadowScale;
                            const scale2 = params.shadowScale / multiplier;
                            const offset$$1 = params.shadowOffset;
                            $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${(swiperHeight / 2) + offset$$1}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
                        }
                    }
                    const zFactor = (swiper.browser.isSafari || swiper.browser.isUiWebView) ? (-swiperSize / 2) : 0;
                    $wrapperEl
                        .transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
                },
                setTransition: function (duration) {
                    const swiper = this;
                    const { $el, slides } = swiper;
                    slides
                        .transition(duration)
                        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                        .transition(duration);
                    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                        $el.find('.swiper-cube-shadow').transition(duration);
                    }
                },
            }
        };
        this.opt = {
            direction: 'vertical'
        };
        this.historiasbase = [];
        this.estilos = '';
        this.cargo = true;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.historiasbase = this.historias;
        // console.log(this.historias, this.info);
        this.miSlide.slideTo(this.info.idx, 0).then(() => {
            // console.log('VIajando')
        });
    }
    saludar(i, a) {
        // console.log('tocando ando')
        this.vistos(this.historiasbase[i][a]._id);
    }
    rotar() {
        this.miSlide.getActiveIndex().then((ind) => {
            // console.log('VIajando')
            this.slide.getActiveIndex().then((idx) => {
                // console.log(ind, idx)
                this.vistos(this.historiasbase[ind][idx]._id);
            });
        });
    }
    vistos(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.IGTMApi.vistos(info.token, { id: id }).subscribe((data) => {
                    // console.log(data, 'vistos', id)
                }, (err) => {
                });
            }
        });
    }
    cerrar(i, a) {
        this.vistos(this.historiasbase[i][a]._id);
        this.modalCtrl.dismiss();
        this.historias = [];
        this.info = {};
    }
    cambio(histo, idx) {
        this.slide.getActiveIndex().then((num) => {
            let historia = this.historias[idx];
            // console.log(historia);
            if (historia[num].tipo === 'dibujar') {
                // this.statusbar.backgroundColorByHexString(historia[num].dibujo.fondo);
            }
            else {
                //  this.statusbar.backgroundColorByHexString('#273238');
            }
        });
    }
    ver(histo) {
        if (histo.tipo === 'dibujar') {
            //   this.statusbar.backgroundColorByHexString(histo.dibujo.fondo);
        }
        else {
            // this.statusbar.backgroundColorByHexString('#273238');
        }
    }
    abrir(i, a) {
        this.historias[i][a].etiqueta = true;
    }
    cerrar2(i, a) {
        this.historias[i][a].etiqueta = false;
    }
    perfilNavegar(u) {
        this.modalCtrl.dismiss();
        this.router.navigate(['/visita/', u, 's']);
    }
    ionViewWillLeave() {
        // this.statusbar.backgroundColorByHexString('#273238');
    }
};
HistoriasModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__["InicioService"] },
    { type: _providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_8__["IGTMService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_9__["ToastServices"] }
];
HistoriasModalPage.propDecorators = {
    info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    historias: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    slide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slide', { static: false },] }],
    miSlide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['miSlide', { static: false },] }]
};
HistoriasModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-historias-modal',
        template: _raw_loader_historias_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_historias_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HistoriasModalPage);



/***/ }),

/***/ "xe+t":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Santiago/historias-modal/historias-modal.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"darkgold\">\n    <ion-slides #miSlide *ngIf=\"cargo\" [options]=\"slideopts\">\n        <ion-slide class=\"red\" *ngFor=\"let historia of historiasbase; let i = index;\">\n\n\n            <ion-slides #slide class=\"sl\" [options]=\"opt\">\n                <ion-slide *ngFor=\"let ht of historia; let a = index;\" [class.one]=\"historia.length === 1\" style=\"{{ ht | colores }}\" (swipe)=\"saludar(i, a)\">\n\n\n                    <div class=\"encabezado\">\n                        <div class=\"data\">\n                            <ion-avatar>\n                                <img src=\"{{historia[0].image}}\" alt=\"\">\n                            </ion-avatar>\n                            <div class=\"titulo\">\n                                <span>{{ info.nombre }}</span> <br>\n                                <strong>@{{ info.usuario }}</strong>\n                            </div>\n                        </div>\n                        <h1 (click)=\"cerrar(i, a)\">x</h1>\n                    </div>\n                    <div class=\"texto\" *ngIf=\"ht.tipo === 'dibujar'\">\n                        <h3>{{ ht.dibujo.texto }}</h3>\n                    </div>\n\n                    <img *ngIf=\"ht.tipo === 'multimedia'\" src=\"https://www.motocaliapp.com/11927613401/{{ht.archivos[0].ruta}}\" alt=\"\">\n\n                    <div class=\"pie\" *ngIf=\"ht.comentario !== '' || ht.etiquetas.length > 0\">\n                        <div class=\"data\" (click)=\"abrir(i, a)\">\n                            Ver más...\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"ht.etiqueta\" class=\"etiquetados\">\n\n                        <div class=\"dataa\">\n                            <div class=\"cerrarr\" (click)=\"cerrar2(i, a)\">x</div>\n                            <div class=\"com\">{{ ht.comentario }}</div>\n                            <ion-list *ngIf=\"ht.etiquetas.length > 0\">\n                                <ion-item-divider class=\"cc\">Usuarios etiquetados</ion-item-divider>\n                                <ion-item color=\"oscuro\" *ngFor=\"let persona of ht.etiquetas\" (click)=\"perfilNavegar(persona.nombreusuario)\">\n                                    <ion-avatar slot=\"start\">\n                                        <img src=\"https://www.motocaliapp.com/{{persona.imagen[0].path}}\">\n                                    </ion-avatar>\n                                    <ion-label>\n                                        <div>{{persona.nombrecompleto}}</div>\n                                        <strong>@{{persona.nombreusuario}}</strong>\n                                    </ion-label>\n                                </ion-item>\n                            </ion-list>\n                        </div>\n                    </div>\n                </ion-slide>\n            </ion-slides>\n\n\n        </ion-slide>\n    </ion-slides>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=Santiago-saninicio-saninicio-module.js.map