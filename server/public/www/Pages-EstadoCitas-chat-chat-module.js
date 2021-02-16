(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-EstadoCitas-chat-chat-module"],{

/***/ "/9/S":
/*!***************************************************************!*\
  !*** ./src/app/Pages/EstadoCitas/chat/chat-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageRoutingModule", function() { return ChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.page */ "V+5Y");




const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_3__["ChatPage"]
    }
];
let ChatPageRoutingModule = class ChatPageRoutingModule {
};
ChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatPageRoutingModule);



/***/ }),

/***/ "03c1":
/*!***********************************************************!*\
  !*** ./src/app/Pages/EstadoCitas/chat/video.directive.ts ***!
  \***********************************************************/
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
    cargando: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['canplay',] }]
};
VideoDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[video-load]'
    })
], VideoDirective);



/***/ }),

/***/ "GHwR":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/EstadoCitas/chat/chat.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"blanco\">\n\n\n        <div class=\"title\">\n            <div class=\"taller\">\n                <ion-buttons>\n                    <ion-back-button defaultHref=\"/central/menu/miscitas\" icon=\"chevron-back-outline\">\n                    </ion-back-button>\n\n                </ion-buttons>\n                <ion-avatar *ngIf=\"imagen !== ''\">\n                    <img [src]=\"imagen\">\n                </ion-avatar>\n                <div class=\"info\" *ngIf=\"nombre !== ''\">\n                    <h4>{{ nombre }}</h4>\n                    <h5 class=\"conx\" *ngIf=\"(escribiendo === false && conexion === 'conexion')\"> <span class=\"bola verde\"></span> Conectado</h5>\n                    <h5 class=\"conx\" *ngIf=\"(escribiendo === false && conexion === 'desconexion')\"> <span class=\"bola rojo\"></span> Desconectado</h5>\n                    <h5 class=\"small\" *ngIf=\"escribiendo\"> Escribiendo...</h5>\n                </div>\n            </div>\n\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content #contenido>\n    <ion-infinite-scroll #infinito position=\"top\" threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando mensajes...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <ion-grid>\n        <ion-row *ngFor=\"let conver of conversacion\">\n            <ion-col size=\"9\" class=\"final\" push=\"3\" *ngIf=\"local === conver.emisor\">\n                <div class=\"grispo col \">\n                    <div class=\"images\" *ngIf=\"conver.archivos.length > 0\">\n                        <div class=\"imageChild\" *ngFor=\"let file of conver.archivos\">\n                            <img *ngIf=\"file.type.includes('image')\" src=\"https://motocaliapp.com/Citas/{{ file.nameBD }}\" (click)=\"seleccionarMedia(file.nameBD, 'imagen')\" alt=\" \">\n\n                            <div *ngIf=\"file.nameBD === 'none'\">\n                                <ion-spinner name=\"crescent\"></ion-spinner> El vídeo estará disponible en un momento\n                            </div>\n\n                            <div *ngIf=\"file.nameBD !== 'none'\">\n                                <div class=\"btn\" *ngIf=\"!file.type.includes('image') \" (click)=\"seleccionarMedia(file.nameBD, 'video') \" color=\"success\">\n                                    <video video-load poster=\"/assets/icon/favicon.png\" src=\"https://motocaliapp.com/Citas/{{file.nameBD}}\"></video>\n\n\n                                    <ion-button class=\"btn-f\" color=\"oscuro\" mode=\"ios\">\n                                        <ion-icon name=\"play-outline\" slot=\"icon-only\"></ion-icon>\n                                    </ion-button>\n                                </div>\n                            </div>\n\n\n\n                            <!-- <div class=\"btn\" *ngIf=\"!file.name.includes( 'image') \" (click)=\"seleccionarMedia(file.nameBD, 'video') \" color=\"success\">\n                            <h4 class=\"btn-h\">Abrir Vídeo</h4>\n                            <ion-button color=\"success\" mode=\"ios\">\n                                <ion-icon name=\"play-outline\" slot=\"icon-only\"></ion-icon>\n                            </ion-button>\n                            <h4 class=\"btn-f\">MimotoApp </h4>\n                        </div> -->\n\n\n                            <!-- <video *ngIf=\"!file.name.includes( 'image') \" width=\"100% \" src=\"https://motocaliapp.com/Citas/ \" controls></video>-->\n                        </div>\n                    </div>\n                    <div class=\"msg \">\n                        {{ conver.mensaje }}\n                    </div>\n                    <div class=\"fh \">\n                        <div class=\"fecha\">{{ conver.fechaMensaje }}</div>\n\n                    </div>\n                </div>\n            </ion-col>\n            <ion-col size=\"11\" class=\" visi\" *ngIf=\"local !== conver.emisor \">\n                <div class=\"imagen\">\n                    <ion-avatar *ngIf=\"imagen !== ''\">\n                        <img [src]=\"imagen\">\n                    </ion-avatar>\n                </div>\n                <div class=\"grispi col\">\n                    <div class=\"images\" *ngIf=\"conver.archivos.length> 0\">\n                        <div class=\"imageChild\" *ngFor=\"let file of conver.archivos\">\n                            <img *ngIf=\"file.type.includes('image')\" src=\"https://motocaliapp.com/Citas/{{ file.nameBD }}\" (click)=\"seleccionarMedia(file.nameBD, 'imagen')\" alt=\" \">\n                            <div *ngIf=\"file.nameBD === 'none'\">\n                                <ion-spinner name=\"crescent\"></ion-spinner> El vídeo estará disponible en un momento\n                            </div>\n\n                            <div *ngIf=\"file.nameBD !== 'none'\">\n                                <div class=\"btn\" *ngIf=\"!file.type.includes('image') \" (click)=\"seleccionarMedia(file.nameBD, 'video') \" color=\"success\">\n                                    <video video-load poster=\"/assets/icon/favicon.png\" src=\"https://motocaliapp.com/Citas/{{file.nameBD}}\"></video>\n\n\n                                    <ion-button class=\"btn-f\" color=\"oscuro\" mode=\"ios\">\n                                        <ion-icon name=\"play-outline\" slot=\"icon-only\"></ion-icon>\n                                    </ion-button>\n                                </div>\n                            </div>\n\n                            <!-- <div class=\"btn\" *ngIf=\"!file.name.includes( 'image') \" (click)=\"seleccionarMedia(file.nameBD, 'video') \" color=\"success\">\n                                <h4 class=\"btn-h\">Abrir Vídeo</h4>\n                                <ion-button color=\"success\" mode=\"ios\">\n                                    <ion-icon name=\"play-outline\" slot=\"icon-only\"></ion-icon>\n                                </ion-button>\n                                <h4 class=\"btn-f\">MimotoApp </h4>\n                            </div> -->\n\n\n                        </div>\n                    </div>\n                    <div class=\"msg \">\n                        {{ conver.mensaje }}\n                    </div>\n                    <div class=\"fh \">\n                        <div class=\"fecha\">{{ conver.fechaMensaje }}</div>\n\n                    </div>\n                </div>\n\n            </ion-col>\n        </ion-row><br>\n    </ion-grid>\n\n    <div class=\"fotos \" @entrada *ngIf=\"carrete.length> 0\">\n        <div class=\"titulo\">Fotos para subir</div>\n        <div class=\"carrete\">\n            <div class=\"fotoHija\" *ngFor=\"let image of carrete; let i = index\">\n                <img *ngIf=\"image.includes('jpg')\" src=\"{{image}}\" width=\"70px\">\n                <video *ngIf=\"image.includes('mp4')\" src=\"{{image}}\" width=\"70px\" controls></video>\n                <div class=\"eliminar\" (click)=\"eliminardelCarrete(i)\">\n                    <ion-chip color=\"danger\">Eliminar</ion-chip>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n</ion-content>\n\n<ion-footer class=\"flexible ion-no-border\">\n    <div class=\"text\">\n        <ion-textarea class=\"campo\" [(ngModel)]=\"mensaje\" placeholder=\"Escribe un mensaje\" (ionInput)=\"escribirMensaje()\" (ionBlur)=\"cambiar()\"></ion-textarea>\n        <div class=\"opt\">\n            <ion-button color=\"blanco\" fill=\"clear\" (click)=\"camaraOpciones()\">\n                <ion-icon slot=\"icon-only\" name=\"camera-outline\" color=\"medium\"></ion-icon>\n            </ion-button>\n        </div>\n    </div>\n    <div class=\"botones\">\n        <ion-button (click)=\"enviarMensaje()\" fill=\"clear\">\n            <ion-icon slot=\"icon-only\" name=\"send-outline\" color=\"success\"></ion-icon>\n        </ion-button>\n    </div>\n</ion-footer>");

/***/ }),

/***/ "ItI5":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Modales/modal-citas/modal-citas.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"vista === 'buscar'\">\n    <ion-toolbar color=\"blanco\">\n\n        <ion-title>Creando nuevas citas</ion-title>\n        <ion-buttons fill=\"clear\" slot=\"end\" *ngIf=\"type !== 'chat'\">\n            <ion-button (click)=\"descartar()\" fill=\"clear\">\n                <ion-icon name=\"close-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-header *ngIf=\"vista === 'media'\">\n    <ion-toolbar color=\"dark\">\n        <ion-buttons fill=\"clear\" slot=\"start\">\n            <ion-button (click)=\"descartar()\" fill=\"clear\">\n                <ion-icon name=\"close-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Fotos y Vídeos</ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-header *ngIf=\"vista === 'carpetas'\">\n    <ion-toolbar color=\"blanco\">\n        <ion-buttons fill=\"clear\" slot=\"start\">\n            <ion-button (click)=\"descartar()\" fill=\"clear\">\n                <ion-icon name=\"close-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Carpeta de Citas</ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\" *ngIf=\"vista === 'buscar' || vista === 'chat' || vista === 'setting'\">\n\n\n\n    <div class=\"divider\" *ngIf=\"vista === 'buscar'\">\n        <ion-slides #slide>\n            <ion-slide>\n                <ion-grid fixed>\n\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <ion-searchbar color=\"light\"></ion-searchbar>\n                        </ion-col>\n\n                        <ion-col size=\"12\">\n                            <div class=\"divider\"></div>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <ion-list>\n                                <ion-item *ngFor=\"let taller of listaTalleres\" (press)=\"opciones(taller.usuarioReceptor.nombrecompleto)\" (click)=\"crear(taller)\">\n                                    <ion-avatar slot=\"start\">\n                                        <img src=\"https://motocaliapp.com/{{taller.avatar}}\" width=\"100%\" alt=\"\">\n                                    </ion-avatar>\n                                    <ion-label class=\"ion-text-wrap\">\n                                        <div>{{ taller.usuarioReceptor.nombrecompleto }}</div>\n                                        <div>{{ taller.usuarioReceptor.nombreusuario }}</div>\n                                    </ion-label>\n\n                                </ion-item>\n                            </ion-list>\n\n                        </ion-col>\n                    </ion-row>\n\n                </ion-grid>\n            </ion-slide>\n\n            <ion-slide class=\"anchofull\">\n                <ion-grid fixed>\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <h3 class=\"opacity\">Creando un nuevo turno para {{usuario}}</h3>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col size=\"6\">\n                            <ion-button expand=\"block\" mode=\"ios\" color=\"light\" (click)=\"cancelar()\">Cancelar </ion-button>\n\n                        </ion-col>\n\n                        <ion-col size=\"6\">\n                            <ion-button expand=\"block\" mode=\"ios\" color=\"primary\" (click)=\"generarTicket()\">Generar </ion-button>\n\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-slide>\n        </ion-slides>\n    </div>\n\n\n\n    <div>\n\n\n\n    </div>\n\n</ion-content>\n\n<ion-content fullscreen=\"true\" *ngIf=\"vista === 'media'\" color=\"darkgold\">\n\n    <app-video *ngIf=\"tipoArchivo === 'video'\" url=\"https://motocaliapp.com/Citas/{{ urlArchivo }}\"></app-video>\n\n    <ion-slides class=\"diapositiva\" [options]=\"slideOpt\" *ngIf=\"tipoArchivo === 'imagen'\">\n        <ion-slide>\n            <img src=\"https://motocaliapp.com/Citas/{{ urlArchivo }}\" alt=\"\">\n        </ion-slide>\n    </ion-slides>\n</ion-content>\n\n\n<ion-content fullscreen=\"true\" *ngIf=\"vista === 'carpetas'\">\n    <div class=\"divider \">\n        <ion-searchbar mode=\"ios\" (ionChange)=\"filtro( $event )\"></ion-searchbar>\n    </div>\n    <ion-list>\n        <ion-item-sliding *ngFor=\"let cita of citas | miFiltro : texto\">\n            <ion-item (click)=\"escogerChat(cita._id)\">\n                <ion-avatar class=\"avatar\" slot=\"start\">\n                    <img src=\"https://motocaliapp.com/{{cita.imagenTaller}}\" width=\"100%\" />\n                </ion-avatar>\n                <ion-label class=\"ion-text-wrap\">\n                    <strong class=\"medium\">{{ cita.nombrecompleto }}</strong>\n                    <p>@{{ cita.nombreusuario }} - Estado pendiente</p>Cita creada el {{ cita.fechainicio | fecha }}\n                </ion-label>\n                <div slot=\"end\" class=\"estadobol\" [ngClass]=\"{'estado-amarillo ': cita.estado === 'PENDIENTE', 'estado-azul ': cita.estado === 'EN PROGRESO', 'estado-verde ': cita.estado === 'TERMINADO'}\">\n\n                </div>\n            </ion-item>\n            <ion-item-options side=\"start\">\n                <ion-item-option color=\"light\">\n                    <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical-outline\"></ion-icon>\n                </ion-item-option>\n                <ion-item-option color=\"secondary\">\n                    <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                </ion-item-option>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>");

/***/ }),

/***/ "O/WA":
/*!*************************************************************************!*\
  !*** ./src/app/Pages/Modales/modal-citas/modal-citas-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ModalCitasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCitasPageRoutingModule", function() { return ModalCitasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_citas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-citas.page */ "kXuA");




const routes = [
    {
        path: '',
        component: _modal_citas_page__WEBPACK_IMPORTED_MODULE_3__["ModalCitasPage"]
    }
];
let ModalCitasPageRoutingModule = class ModalCitasPageRoutingModule {
};
ModalCitasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalCitasPageRoutingModule);



/***/ }),

/***/ "U6yp":
/*!*****************************************************************!*\
  !*** ./src/app/Pages/Modales/modal-citas/modal-citas.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item img {\n  width: 100%;\n}\n\nion-item {\n  touch-action: pan-y !important;\n}\n\nion-list {\n  width: 100%;\n}\n\nion-slides,\nion-slide {\n  width: 100%;\n}\n\n.fullancho {\n  min-height: 100%;\n  height: auto;\n}\n\n.diapositiva {\n  width: 100%;\n  height: 100%;\n}\n\n.estado {\n  padding: 10px;\n}\n\n.estadobol {\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n}\n\n.estado-verde {\n  background: #85B84F;\n}\n\n.estado-amarillo {\n  background: #FCD573;\n}\n\n.estado-azul {\n  background: #5591B1;\n}\n\n.es-bottom {\n  margin-bottom: 15px;\n}\n\n.es-bottom-small {\n  margin-bottom: 10px;\n}\n\n.precio {\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 42px;\n  opacity: 0.8;\n  font-weight: bolder;\n  color: var(--ion-color-success);\n}\n\n.trabajo {\n  border-bottom: 1px solid rgba(3, 3, 3, 0.1);\n}\n\n.trabajo:nth-child(even) {\n  --background: #f9f9f9;\n}\n\nion-item-divider {\n  margin-bottom: 10px;\n}\n\n.ok {\n  opacity: 0.3;\n}\n\nvideo {\n  max-height: 100%;\n}\n\n.fl {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.aviso {\n  --background: #FEE491;\n}\n\n.aviso:hover {\n  --background: #FEE491 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbW9kYWwtY2l0YXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTs7RUFFSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksMkNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7QUFDSiIsImZpbGUiOiJtb2RhbC1jaXRhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIHRvdWNoLWFjdGlvbjogcGFuLXkgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMsXHJcbmlvbi1zbGlkZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZ1bGxhbmNobyB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZGlhcG9zaXRpdmEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5lc3RhZG8ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmVzdGFkb2JvbCB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi5lc3RhZG8tdmVyZGUge1xyXG4gICAgYmFja2dyb3VuZDogIzg1Qjg0RjtcclxufVxyXG5cclxuLmVzdGFkby1hbWFyaWxsbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkNENTczO1xyXG59XHJcblxyXG4uZXN0YWRvLWF6dWwge1xyXG4gICAgYmFja2dyb3VuZDogIzU1OTFCMTtcclxufVxyXG5cclxuLmVzLWJvdHRvbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uZXMtYm90dG9tLXNtYWxsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5wcmVjaW8ge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgIG9wYWNpdHk6IC44O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbn1cclxuXHJcbi50cmFiYWpvIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDMsIDMsIDMsIDAuMSk7XHJcbn1cclxuXHJcbi50cmFiYWpvOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbn1cclxuXHJcbmlvbi1pdGVtLWRpdmlkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm9rIHtcclxuICAgIG9wYWNpdHk6IC4zO1xyXG59XHJcblxyXG52aWRlbyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZmwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmF2aXNvIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZFRTQ5MTtcclxufVxyXG5cclxuLmF2aXNvOmhvdmVyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZFRTQ5MSAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "V+5Y":
/*!*****************************************************!*\
  !*** ./src/app/Pages/EstadoCitas/chat/chat.page.ts ***!
  \*****************************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chat.page.html */ "GHwR");
/* harmony import */ var _chat_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.page.scss */ "dX3f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/Api/EstadoCitas.service */ "AQLj");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../providers/cargas/usuarios.service */ "cb8P");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Modales_modal_citas_modal_citas_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Modales/modal-citas/modal-citas.page */ "kXuA");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../providers/Utilidades/LoadingService.service */ "r3ab");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "/sJY");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _providers_Conexiones_Conexion_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../providers/Conexiones/Conexion.service */ "1+ow");




















let ChatPage = class ChatPage {
    constructor(activeRoute, apiEstadoCitas, sockect, almacenamiento, cargarElementos, modalCtrl, geo, camera, actionSheet, myLoading, media, toast, conexiones, menu, animationCtrl) {
        this.activeRoute = activeRoute;
        this.apiEstadoCitas = apiEstadoCitas;
        this.sockect = sockect;
        this.almacenamiento = almacenamiento;
        this.cargarElementos = cargarElementos;
        this.modalCtrl = modalCtrl;
        this.geo = geo;
        this.camera = camera;
        this.actionSheet = actionSheet;
        this.myLoading = myLoading;
        this.media = media;
        this.toast = toast;
        this.conexiones = conexiones;
        this.menu = menu;
        this.animationCtrl = animationCtrl;
        this.color = '';
        this.idCita = '';
        this.data = [];
        this.imagen = '';
        this.taller = '';
        this.conversacionTemporal = [];
        this.conversacion = [];
        this.mensaje = '';
        this.usuario = '';
        this.local = '';
        this.nombre = '';
        this.red = 'wifi';
        this.tallerId = '';
        this.usuarioID = '';
        this.idActual = '';
        this.dataInfoCita = {};
        this.escribiendo = false;
        this.carrete = [];
        this.carreteArriba = [];
        // Archivos
        this.directorios = [];
        this.urlInfo = {
            url: '',
            tipo: 'video'
        };
        // Mensajes Optimizacion
        this.paginacion = 0;
        this.cargar = false;
        this.conexion = '';
        this.cargoprimero = false;
        this.video = false;
        this.cargarElementos.$cargarRed.subscribe((red) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.red = red;
            if (this.red !== 'none') {
                // console.log('Me ejecuto siii')
                this.almacenamiento.obtenerToken().then((info) => {
                    this.sockect.emit('conectar', info);
                    this.volver(info);
                });
            }
        }));
        this.recibirMensaje().subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log('2');
            // tslint:disable-next-line:max-line-length
            this.conversacion.push({ id: data._id, taller: this.taller, usuario: this.usuario, emisor: data.emisor, mensaje: data.mensaje, fechaMensaje: data.fechaMensaje, archivos: data.archivos });
            // // console.log('se jecuta el suscribe');
            const audio = new Audio('/assets/Notificacion.mp3');
            audio.play();
        }));
        this.escribirOnCita().subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log('3');
            this.escribiendo = data.exe;
        }));
        this.conexiones.$conexiones.subscribe((data) => {
            // console.log('Data de la conexión ', data, this.idActual)
            if (data.usuario === this.idActual) {
                this.conexion = data.estado;
            }
        });
        this.actualizarVideo().subscribe((data) => {
            // console.log('Data de la conexión ', data, this.idActual)
            this.conversacion = this.conversacion.map((item) => {
                if (item.id) {
                    if (item.id === data._id) {
                        item.archivos = item.archivos.map((file) => {
                            if (file.nameBD === 'none') {
                                file.nameBD = data.nameSecret;
                            }
                            return file;
                        });
                    }
                }
                return item;
            });
            console.log(this.conversacion, 'Ultimo');
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menu.enable(false, 'perfilMenu');
        this.arrancar();
    }
    volver(info) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const cita = yield this.almacenamiento.obtenerCita();
            if (cita) {
                // console.log(info, 'Todo bien por aca');
                this.idCita = cita;
                this.apiEstadoCitas.obtenerCita(info.token, this.idCita).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    // console.log(data, ' data');
                    this.data = data.response;
                    if (data.response.length > 0) {
                        if (info.nusuario === data.response[0].idtaller.nombreusuario) {
                            this.imagen = `https://motocaliapp.com/${data.response[0].usuariopedido.imagen[0].path}`;
                            this.nombre = data.response[0].usuariopedido.nombrecompleto;
                            this.sockect.emit('entrarChatCita', {
                                _id: this.idCita,
                                usuario: data.response[0].usuariopedido._id,
                                usuariohost: data.response[0].idtaller._id
                            });
                            this.idActual = data.response[0].usuariopedido._id;
                        }
                        else if (info.nusuario === data.response[0].usuariopedido.nombreusuario) {
                            this.imagen = `https://motocaliapp.com/${data.response[0].idtaller.imagen[0].path}`;
                            this.nombre = data.response[0].idtaller.nombrecompleto;
                            this.sockect.emit('entrarChatCita', {
                                _id: this.idCita,
                                usuario: data.response[0].idtaller._id,
                                usuariohost: data.response[0].usuariopedido._id
                            });
                            this.idActual = data.response[0].idtaller._id;
                        }
                        // this.estado(data.response[0].estado);
                        this.taller = data.response[0].idtaller.nombreusuario;
                        this.usuario = data.response[0].usuariopedido.nombreusuario;
                        this.tallerId = data.response[0].idtaller._id;
                        this.usuarioID = data.response[0].usuariopedido._id;
                        this.dataInfoCita.fechaInicio = data.response[0].fechainicio;
                        this.dataInfoCita.fechaprogreso = data.response[0].fechaprogreso;
                        this.dataInfoCita.fechacumplido = data.response[0].fechacumplido;
                        this.dataInfoCita.role = info.role;
                        this.dataInfoCita.precio = data.response[0].precio;
                        this.dataInfoCita.trabajos = data.response[0].listaTrabajos;
                        // console.log(this.conversacion.length, ' conversaciones');
                        if (this.conversacion.length > 0) {
                            // tslint:disable-next-line:max-line-length
                            this.apiEstadoCitas.obtenerConversacionesPendientes(info.token, this.idCita, this.conversacion[this.conversacion.length - 1].fechaMensaje).subscribe((mensajes) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                if (mensajes.exe) {
                                    mensajes.response.forEach((item) => {
                                        this.conversacion.push(item);
                                    });
                                }
                                // console.log(mensajes, this.conversacion, 'Recargar nuevos msg');
                            }));
                        }
                    }
                }));
            }
        });
    }
    arrancar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const cita = yield this.almacenamiento.obtenerCita();
            if (cita) {
                this.cargoprimero = true;
                this.idCita = cita;
                // console.log(cita, ' ionviewWillEnter');
                this.almacenamiento.obtenerToken().then((info) => {
                    this.local = info.nusuario;
                    this.apiEstadoCitas.obtenerCita(info.token, this.idCita).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        this.data = data.response;
                        if (data.response.length > 0) {
                            if (info.nusuario === data.response[0].idtaller.nombreusuario) {
                                this.imagen = `https://motocaliapp.com/${data.response[0].usuariopedido.imagen[0].path}`;
                                this.nombre = data.response[0].usuariopedido.nombrecompleto;
                                this.idActual = data.response[0].usuariopedido._id;
                                this.sockect.emit('entrarChatCita', {
                                    _id: this.idCita,
                                    usuario: data.response[0].usuariopedido._id,
                                    usuariohost: data.response[0].idtaller._id
                                });
                            }
                            else if (info.nusuario === data.response[0].usuariopedido.nombreusuario) {
                                this.imagen = `https://motocaliapp.com/${data.response[0].idtaller.imagen[0].path}`;
                                this.nombre = data.response[0].idtaller.nombrecompleto;
                                this.idActual = data.response[0].idtaller._id;
                                this.sockect.emit('entrarChatCita', {
                                    _id: this.idCita,
                                    usuario: data.response[0].idtaller._id,
                                    usuariohost: data.response[0].usuariopedido._id
                                });
                            }
                            // this.estado(data.response[0].estado);
                            this.taller = data.response[0].idtaller.nombreusuario;
                            this.usuario = data.response[0].usuariopedido.nombreusuario;
                            this.tallerId = data.response[0].idtaller._id;
                            this.usuarioID = data.response[0].usuariopedido._id;
                            // Información de la cita
                            this.dataInfoCita.estado = data.response[0].estado;
                            this.dataInfoCita.fechaInicio = data.response[0].fechainicio;
                            this.dataInfoCita.fechaprogreso = data.response[0].fechaprogreso;
                            this.dataInfoCita.fechacumplido = data.response[0].fechacumplido;
                            this.dataInfoCita.role = info.role;
                            this.dataInfoCita.precio = data.response[0].precio;
                            this.dataInfoCita.trabajos = data.response[0].listaTrabajos;
                            this.apiEstadoCitas.obtenerConversaciones(info.token, this.idCita, this.paginacion.toString()).subscribe((mensajes) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                if (mensajes.exe) {
                                    mensajes.response.forEach((item) => {
                                        this.conversacion.unshift(item);
                                    });
                                    setTimeout(() => {
                                        this.scrollbajar();
                                    }, 1000);
                                }
                                // console.log(mensajes, 'Me guta');
                            }));
                            // Scrolling
                        }
                    }));
                });
            }
        });
    }
    loadData(event) {
        if (this.cargar) {
            this.paginacion = this.paginacion + 10;
            // console.log(event, 'Cargando data', this.paginacion);
            this.almacenamiento.obtenerToken().then((info) => {
                this.apiEstadoCitas.obtenerConversaciones(info.token, this.idCita, this.paginacion.toString()).subscribe((mensajes) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (mensajes.exe) {
                        mensajes.response.forEach((item) => {
                            this.conversacion.unshift(item);
                        });
                    }
                    // console.log(mensajes, 'Me guta');
                    event.target.complete();
                    if (mensajes.response.length === 0) {
                        this.infinito.disabled = true;
                    }
                }));
            }).catch(() => {
                this.toast.alertApplication('No se pudo traer mas mensajes', false);
                event.target.complete();
            });
        }
    }
    // valid( file ) {
    //   return this.file.checkFile(this.file.dataDirectory + 'MimotoMedia/', file).then(() => {
    //     return true;
    //   }).catch(() => {
    //     return false;
    //   })
    // }
    // descargar( file ) {
    //   // console.log('Bine');
    //   this.myLoading.cargaProcesos('Descargando');
    //   this.apiEstadoCitas.descargarArchivosChat(file).subscribe((descarga) => {
    //     // console.log(descarga, ' Descargando');
    //     this.myLoading.finalizarCargado();
    //     this.file.listDir(this.file.dataDirectory, 'MimotoMedia').then((des) => {
    //       // console.log(des);
    //     }).catch((error) => {
    //       // console.log(error, ' Error al descargar')
    //     })
    //   }, (err) => {
    //     this.myLoading.finalizarCargado();
    //     // console.log('Error al descargar', err)
    //   });
    // }
    scrollbajar() {
        this.contenido.scrollToBottom(0).then(() => {
            // console.log('Vientos');
            this.cargar = true;
        });
    }
    // estado(status) {
    //   switch (status) {
    //     case 'PENDIENTE':
    //       this.color = 'warning';
    //       break;
    //     case 'EN PROGRESO':
    //       this.color = 'secondary';
    //       break;
    //     case 'TERMINADO':
    //       this.color = 'success';
    //       break;
    //   }
    //   this.dataInfoCita.estado = status;
    // }
    actualizarVideo() {
        const myobserver = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"](observer => {
            this.sockect.on('subirVideo', (data) => {
                observer.next(data);
                console.log(data, 'actualizado');
            });
        });
        return myobserver;
    }
    enviarMensaje() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(this.carreteArriba);
            if (this.carreteArriba.length > 0) {
                const info = yield this.almacenamiento.obtenerToken();
                this.myLoading.cargaProcesos('Subiendo mensaje con archivos media, por favor espere');
                if (info) {
                    // console.log(info);
                    this.apiEstadoCitas.ingresarChat(info.token, {
                        _id: this.idCita,
                        mensaje: this.mensaje,
                        emisor: this.local,
                        taller: this.tallerId,
                        usuario: this.usuarioID
                    }).subscribe((data) => {
                        // console.log(data);
                        if (data.exe) {
                            const id = data.response._id;
                            this.carreteArriba = this.carreteArriba.sort((a, b) => {
                                if (a.mime > b.mime) {
                                    return 1;
                                }
                                if (a.mime < b.mime) {
                                    return -1;
                                }
                                // a must be equal to b
                                return 0;
                            });
                            console.log(this.carreteArriba, ' imagenes');
                            let cont = this.carreteArriba.length;
                            this.carreteArriba.forEach((item) => {
                                // console.log(item, 'itm');
                                this.apiEstadoCitas.subirArchivosChat(info.token, id, item.path, item.name, item.mime).subscribe((image) => {
                                    image.response = JSON.parse(image.response);
                                    if (image.response.exe) {
                                        cont--;
                                        if (cont === 0) {
                                            image.response.response.tipo = 'file';
                                            image.response.response.idEmit = this.idActual;
                                            if (item.mime.includes('video')) {
                                                this.sockect.emit('subirarchivo', image.response.response);
                                            }
                                            this.sockect.emit('mensajeCita', image.response.response);
                                            image.response.response.id = image.response.response._id;
                                            this.conversacion.push(image.response.response);
                                            this.carrete = [];
                                            this.carreteArriba = [];
                                            this.mensaje = '';
                                            this.myLoading.finalizarCargado();
                                        }
                                    }
                                    // console.log(image, ' image cada vuelta');
                                }, (error) => {
                                    // console.log('Error ', error);
                                    this.myLoading.finalizarCargado();
                                    this.toast.alertApplication('No se pudo subir el archivo de vídeo o imagen', true);
                                });
                            });
                        }
                    });
                }
            }
            else {
                if (this.mensaje !== '') {
                    this.conversacion.push({ taller: this.taller, usuario: this.usuario, emisor: this.local, mensaje: this.mensaje, archivos: [], fechaMensaje: moment__WEBPACK_IMPORTED_MODULE_15__().format('YYYY-MM-DD HH:mm') });
                    this.sockect.emit('mensajeCita', {
                        _id: this.idCita,
                        mensaje: this.mensaje,
                        emisor: this.local,
                        taller: this.tallerId,
                        usuario: this.usuarioID,
                        tipo: 'msg',
                        idEmit: this.idActual
                    });
                    this.mensaje = '';
                }
            }
        });
    }
    escribirMensaje() {
        this.sockect.emit('escribiendoCita', { exe: true, _id: this.idCita });
    }
    cambiar() {
        this.sockect.emit('escribiendoCita', { exe: false, _id: this.idCita });
    }
    recibirMensaje() {
        const myobserver = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"](observer => {
            this.sockect.on('mensajeCita', (data) => {
                observer.next(data);
                console.log(data);
            });
        });
        return myobserver;
    }
    seleccionarMedia(url, type) {
        this.urlInfo.url = url;
        this.urlInfo.tipo = type;
        this.modal('media');
    }
    modal(type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const enterAnimation = (baseEl) => {
                const backdropAnimation = this.animationCtrl.create()
                    .addElement(baseEl.querySelector('ion-backdrop'))
                    .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');
                const wrapperAnimation = this.animationCtrl.create()
                    .addElement(baseEl.querySelector('.modal-wrapper'))
                    .keyframes([
                    { offset: 0, opacity: '0', transform: 'scale(0)' },
                    { offset: 1, opacity: '0.99', transform: 'scale(1)' }
                ]);
                return this.animationCtrl.create()
                    .addElement(baseEl)
                    .easing('ease-out')
                    .duration(500)
                    .addAnimation([backdropAnimation, wrapperAnimation]);
            };
            const leaveAnimation = (baseEl) => {
                return enterAnimation(baseEl).direction('reverse');
            };
            let data;
            if (type === 'media') {
                data = this.urlInfo;
            }
            else {
                data = this.dataInfoCita;
            }
            const modal = yield this.modalCtrl.create({
                component: _Modales_modal_citas_modal_citas_page__WEBPACK_IMPORTED_MODULE_12__["ModalCitasPage"],
                componentProps: {
                    type,
                    data
                },
                mode: 'ios',
                enterAnimation,
                leaveAnimation
            });
            yield modal.present();
            const modalInfo = yield modal.onWillDismiss();
            if (modalInfo) {
                if (modalInfo.data) {
                    if (modalInfo.data.estado) {
                        const data = {
                            listaTrabajos: modalInfo.data.info.trabajos,
                            estado: modalInfo.data.estado,
                            precio: modalInfo.data.info.precio
                        };
                        this.dataInfoCita.estado = modalInfo.data.estado;
                        // console.log(data);
                        this.almacenamiento.obtenerToken().then((info) => {
                            this.apiEstadoCitas.editarCita(info.token, this.idCita, data).subscribe((miCita) => {
                                // console.log('api', miCita);
                                // console.log(miCita.response, ' Estado');
                            });
                        });
                    }
                }
            }
        });
    }
    escribirOnCita() {
        const myobserver = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"](observer => {
            this.sockect.on('escribiendoCita', (data) => {
                observer.next(data);
            });
        });
        return myobserver;
    }
    ubicacion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log('Ubicacion');
            const ok = yield this.geo.getCurrentPosition();
            if (ok) {
                // console.log(ok);
            }
        });
    }
    // Camara
    camaraOpciones() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const miHojaAccion = yield this.actionSheet.create({
                subHeader: '',
                header: 'Selecciona cualquier opción para subir una foto, recuerda que solo puedes subir un vídeo por mensaje',
                mode: 'md',
                buttons: [
                    {
                        text: 'Tomar foto',
                        icon: 'camera-outline',
                        handler: () => {
                            this.tomarFoto(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Grabar Vídeo',
                        icon: 'videocam-outline',
                        handler: () => {
                            if (!this.video) {
                                this.capturarVideo();
                            }
                        }
                    },
                    {
                        text: 'Seleccionar Imágen de galería',
                        icon: 'image-outline',
                        handler: () => {
                            this.tomarFoto(this.camera.PictureSourceType.PHOTOLIBRARY, 'image');
                        }
                    },
                    {
                        text: 'Seleccionar Vídeo de galería',
                        icon: 'image-outline',
                        handler: () => {
                            if (!this.video) {
                                this.tomarFoto(this.camera.PictureSourceType.PHOTOLIBRARY, 'video');
                            }
                        }
                    }
                ]
            });
            return yield miHojaAccion.present();
        });
    }
    tomarFoto(sourceType, mode) {
        const options = {
            quality: 80,
            allowEdit: true,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.FILE_URI,
            mediaType: mode === 'image' ? this.camera.MediaType.PICTURE : this.camera.MediaType.VIDEO,
            sourceType
        };
        this.camera.getPicture(options).then((imageData) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let mim = '';
            let name = '';
            // console.log('image data', imageData)
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
            if (mim.includes('video') || mim.includes('Video')) {
                this.video = true;
            }
            // console.log('Mi archivo', name, mim)
            this.carreteArriba.push({ path: imageData, name, mime: mim });
            const url = window.Ionic.WebView.convertFileSrc(imageData);
            this.carrete.push(url);
            // console.log(this.carrete);
            this.camera.cleanup().then(() => console.log('Eliminado'));
        }));
    }
    capturarVideo() {
        const opctions = {
            limit: 1,
            duration: 30
        };
        this.media.captureVideo(opctions).then((url) => {
            this.carreteArriba.push({ path: url[0].fullPath, name: url[0].name, mime: url[0].type });
            // console.log(url[0].name)
            const image = window.Ionic.WebView.convertFileSrc(url[0].fullPath);
            this.carrete.push(image);
            this.video = true;
            // console.log(this.carrete);
        });
    }
    eliminardelCarrete(indice) {
        this.carrete.splice(indice, 1);
        this.carreteArriba.splice(indice, 1);
        if (!this.carreteArriba.find(item => item.mime.includes('video') || item.mime.includes('Video'))) {
            this.video = false;
        }
    }
    verMensajes(event) {
        this.contenido.getScrollElement().then((e) => {
            // console.log(' elemento ', e)
        });
    }
    ionViewWillLeave() {
        this.sockect.emit('salirChatCita', {
            _id: this.idCita,
        });
        this.almacenamiento.eleminarCita().then((r) => {
            if (r) {
                return true;
            }
        });
    }
};
ChatPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_5__["EstadoCitasService"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["Socket"] },
    { type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_8__["InicioService"] },
    { type: _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_9__["CargaElementosUsuariosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_13__["Geolocation"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ActionSheetController"] },
    { type: _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_16__["LoadingService"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_17__["MediaCapture"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_18__["ToastServices"] },
    { type: _providers_Conexiones_Conexion_service__WEBPACK_IMPORTED_MODULE_19__["ConexionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AnimationController"] }
];
ChatPage.propDecorators = {
    contenido: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['contenido', { static: false },] }],
    infinito: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['infinito', { static: false },] }]
};
ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat',
        template: _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('mensajes', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["query"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
                            transform: 'scale(0)',
                            opacity: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["stagger"])(100, [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
                                transform: 'scale(1)',
                                opacity: 1
                            }))
                        ])
                    ], { optional: true })
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('entrada', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
                        transform: 'scale(0)',
                        opacity: 0
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
                        transform: 'scale(1)',
                        opacity: 1
                    }))
                ])
            ])
        ],
        styles: [_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChatPage);



/***/ }),

/***/ "c+zm":
/*!*******************************************************!*\
  !*** ./src/app/Pages/EstadoCitas/chat/chat.module.ts ***!
  \*******************************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-routing.module */ "/9/S");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "V+5Y");
/* harmony import */ var _Modales_modal_citas_modal_citas_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Modales/modal-citas/modal-citas.page */ "kXuA");
/* harmony import */ var _Modales_modal_citas_modal_citas_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Modales/modal-citas/modal-citas.module */ "x9hZ");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Components/components.module */ "zon2");
/* harmony import */ var _video_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./video.directive */ "03c1");












let ChatPageModule = class ChatPageModule {
};
ChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _Modales_modal_citas_modal_citas_page__WEBPACK_IMPORTED_MODULE_7__["ModalCitasPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatPageRoutingModule"],
            _Modales_modal_citas_modal_citas_module__WEBPACK_IMPORTED_MODULE_8__["ModalCitasPageModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"]
        ],
        declarations: [
            _chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"],
            _video_directive__WEBPACK_IMPORTED_MODULE_11__["VideoDirective"]
        ]
    })
], ChatPageModule);



/***/ }),

/***/ "dX3f":
/*!*******************************************************!*\
  !*** ./src/app/Pages/EstadoCitas/chat/chat.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flexible {\n  display: flex !important;\n  align-items: flex-start;\n  align-items: center;\n  padding: 5px;\n  background: #FFFFFF;\n}\n\nion-content {\n  --background: #FCF9FC;\n}\n\nion-grid {\n  width: 100%;\n  margin: 0;\n}\n\nion-avatar {\n  width: 40px;\n  height: 40px;\n}\n\n.title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 3px 5px;\n}\n\n.taller {\n  display: flex;\n  align-items: flex-start;\n  align-items: center;\n}\n\n.info {\n  padding: 0 5px;\n  padding-top: 2px;\n}\n\n.info h4,\n.info h5 {\n  color: #333333;\n  margin: 0;\n}\n\n.conx {\n  font-size: 11px;\n}\n\n.bola {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 100%;\n}\n\nion-row {\n  margin-bottom: 10px;\n}\n\n.btn {\n  width: 100%;\n  height: 300px;\n  background: #fafafa;\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n}\n\n.btn .btn-h {\n  position: absolute;\n  top: 10px;\n  opacity: 0.3;\n  font-size: 16px;\n}\n\n.btn .btn-f {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 50%;\n  transform: translateX(-50%);\n  opacity: 0.5;\n  font-size: 16px;\n}\n\n.imagen {\n  padding: 0 5px;\n}\n\n.visi {\n  display: flex;\n}\n\n.col {\n  width: 90%;\n  max-width: 300px;\n  border-radius: 20px;\n  padding: 2px 5px;\n  border: 1px solid rgba(3, 3, 3, 0.1);\n}\n\n.col .msg {\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  width: 100%;\n  padding: 3px 8px;\n  padding-bottom: 1px;\n}\n\n.col .fh {\n  opacity: 0.7;\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.col .fh .fecha {\n  opacity: 0.5;\n}\n\n.grispi {\n  background: #EDEAED;\n}\n\n.grispo {\n  background: #339B42;\n  color: #FFFFFF;\n}\n\n.text {\n  width: 85%;\n  height: 50px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background-color: #FFFFFF;\n  border-radius: 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.text ion-textarea {\n  height: 50px;\n  font-size: 14px;\n}\n\n.botones {\n  width: 15%;\n  display: flex;\n  justify-content: center;\n}\n\n.opt ion-button {\n  --padding-end: 2px !important;\n  --padding-start: 2px !important;\n  --padding-bottom: 0px !important;\n}\n\n.campo {\n  width: 80%;\n  padding: 0 5px;\n}\n\n.fotos {\n  width: 100%;\n  position: fixed;\n  bottom: 57px;\n  left: 0px;\n  box-shadow: 0px 3px 25px rgba(2, 2, 2, 0.1);\n  background: #fff;\n  max-height: 50%;\n  overflow-y: scroll;\n}\n\n.titulo {\n  width: 100%;\n  color: var(--ion-color-primary);\n  padding: 10px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  background: #fff;\n}\n\n.carrete {\n  width: 100%;\n  padding: 10px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.fotoHija {\n  background-color: #fff;\n  width: calc(50% - 5px);\n  margin: 5px 2.5px;\n  box-shadow: 0px 2px 5px rgba(3, 3, 3, 0.1);\n  text-align: center;\n  overflow: hidden;\n}\n\nvideo {\n  width: auto;\n  min-width: 100%;\n  max-width: 100%;\n  filter: blur(3px);\n}\n\n.final {\n  display: flex !important;\n  justify-content: flex-end !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7O0VBRUksY0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksd0JBQUE7RUFDQSxvQ0FBQTtBQUNKIiwiZmlsZSI6ImNoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXhpYmxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZDRjlGQztcclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogM3B4IDVweDtcclxufVxyXG5cclxuLnRhbGxlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbn1cclxuXHJcbi5pbmZvIGg0LFxyXG4uaW5mbyBoNSB7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNvbngge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG4uYm9sYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG5pb24tcm93IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uYnRuIC5idG4taCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBvcGFjaXR5OiAuMztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmJ0biAuYnRuLWYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmltYWdlbiB7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxufVxyXG5cclxuLnZpc2kge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAycHggNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzLCAzLCAzLCAwLjEpO1xyXG59XHJcblxyXG4uY29sIC5tc2cge1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzcHggOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFweDtcclxufVxyXG5cclxuLmNvbCAuZmgge1xyXG4gICAgb3BhY2l0eTogLjc7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbCAuZmggLmZlY2hhIHtcclxuICAgIG9wYWNpdHk6IC41O1xyXG59XHJcblxyXG4uZ3Jpc3BpIHtcclxuICAgIGJhY2tncm91bmQ6ICNFREVBRUQ7XHJcbn1cclxuXHJcbi5ncmlzcG8ge1xyXG4gICAgYmFja2dyb3VuZDogIzMzOUI0MjtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQgaW9uLXRleHRhcmVhIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmJvdG9uZXMge1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm9wdCBpb24tYnV0dG9uIHtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAycHggIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FtcG8ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG59XHJcblxyXG4uZm90b3Mge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDU3cHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDI1cHggcmdiYSgyLCAyLCAyLCAwLjEpO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1heC1oZWlnaHQ6IDUwJTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLnRpdHVsbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5jYXJyZXRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5mb3RvSGlqYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gNXB4KTtcclxuICAgIG1hcmdpbjogNXB4IDIuNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggcmdiYSgzLCAzLCAzLCAwLjEpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxudmlkZW8ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcclxufVxyXG5cclxuLmZpbmFsIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "kXuA":
/*!***************************************************************!*\
  !*** ./src/app/Pages/Modales/modal-citas/modal-citas.page.ts ***!
  \***************************************************************/
/*! exports provided: ModalCitasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCitasPage", function() { return ModalCitasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_citas_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-citas.page.html */ "ItI5");
/* harmony import */ var _modal_citas_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-citas.page.scss */ "U6yp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/Api/EstadoCitas.service */ "AQLj");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "R0Ic");










moment__WEBPACK_IMPORTED_MODULE_8__["locale"]('es');
let ModalCitasPage = class ModalCitasPage {
    constructor(modalCtrl, actionSheetCtrl, citasService, utitlities, almacenamiento, animationCtrl, toast) {
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.citasService = citasService;
        this.utitlities = utitlities;
        this.almacenamiento = almacenamiento;
        this.animationCtrl = animationCtrl;
        this.toast = toast;
        this.titulo = 'Configuración';
        this.listaTalleres = [];
        this.mensaje = '';
        this.estado = '';
        this.estadoCambio = '';
        this.role = '';
        this.usuario = '';
        this.urlArchivo = '';
        this.tipoArchivo = '';
        this.slideOpt = {
            zoom: {
                maxRatio: 3,
                minRatio: 1,
                toggle: true
            }
        };
        this.citas = [];
        this.texto = '';
        // Sistema de Trabajos en el local
        this.listaCreados = [];
        this.trabajos = [];
        this.nuevoTrabajo = false;
        this.textoTrabajo = '';
        this.textoBuscar = '';
        this.precioconfig = false;
        this.precio = 0;
        this.msgEstado = '';
        this.msgpro = '';
        this.msgter = '';
        this.terminado = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            switch (this.type) {
                case 'setting':
                    const ui = yield this.almacenamiento.obtenerToken();
                    if (ui) {
                        this.citasService.obtenerListaTrabajos(ui.token).subscribe((res) => {
                            // console.log(res, 'Respuesta');
                            if (res.exe) {
                                this.listaCreados = res.response[0].listaTrabajos;
                            }
                        });
                        // console.log(1)
                    }
                    // console.log(2)
                    this.vista = 'setting';
                    break;
                case 'buscar':
                    this.titulo = 'Buscar Talleres';
                    this.vista = 'buscar';
                    setTimeout(() => {
                        this.slide.lockSwipes(true).then(() => {
                            // console.log('OK')
                        });
                    }, 500);
                    this.listarTalleres();
                    break;
                case 'media':
                    this.vista = 'media';
                    this.urlArchivo = this.data.url;
                    this.tipoArchivo = this.data.tipo;
                    break;
                case 'carpetas':
                    this.vista = 'carpetas';
                    // console.log(this.data, 'BUENA ESA VALLE')
                    if (this.data.role === 'TALLER_ROLE') {
                        const filtrado = this.data.info.filter((item) => item.usuariopedido._id === this.data.unico);
                        this.citas = filtrado;
                    }
                    else {
                        const filtrado = this.data.info.filter((item) => item.idtaller._id === this.data.unico);
                        this.citas = filtrado;
                    }
                    break;
                default:
                    break;
            }
        });
    }
    filtro(event) {
        this.texto = event.detail.value;
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const usuario = yield this.almacenamiento.obtenerToken();
            if (usuario) {
                this.modalCtrl.dismiss({
                    estado: this.estadoCambio,
                    info: {
                        trabajos: this.trabajos,
                        precio: this.precio
                    }
                });
                this.nuevoTrabajo = false;
            }
        });
    }
    escogerChat(cita) {
        this.modalCtrl.dismiss({
            salir: true,
            cita
        });
    }
    descartar() {
        this.modalCtrl.dismiss({
            salir: true
        });
    }
    listarTalleres() {
        this.almacenamiento.obtenerToken().then((info) => {
            this.citasService.listadoTalleres(info.token).subscribe((data) => {
                if (data.response.length > 0) {
                    data.response.forEach((item) => {
                        item.avatar = item.usuarioReceptor.imagen[0].path;
                        this.listaTalleres.push(item);
                    });
                }
                // console.log(this.listaTalleres, data);
            });
        });
    }
    opciones(usuario) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.slide.lockSwipes(true);
            const actionSheet = yield this.actionSheetCtrl.create({
                translucent: true,
                header: `Que quieres hacer con ${usuario}`,
                buttons: [
                    {
                        text: 'Compartir Perfíl',
                        icon: 'arrow-redo-outline',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Enviar mensaje',
                        icon: 'chatbubble-outline',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Invitar a grupo',
                        icon: 'people-outline',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Eliminar Usuario',
                        icon: 'trash-outline',
                        cssClass: 'eliminar',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        icon: 'close-outline'
                    }
                ]
            });
            return yield actionSheet.present();
        });
    }
    crear(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.slide.lockSwipes(false);
            yield this.slide.slideNext(300);
            this.usuario = item.usuarioReceptor.nombrecompleto;
            this.taller = item;
            yield this.slide.lockSwipes(true);
        });
    }
    generarTicket() {
        // console.log('Taller', this.taller.usuarioReceptor._id);
        this.almacenamiento.obtenerToken().then((info) => {
            this.citasService.crearCita(info.token, { idtaller: this.taller.usuarioReceptor._id }).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // console.log(data);
                yield this.modalCtrl.dismiss({});
            }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.utitlities.alertApplication('No se pudo agendar la cita', false);
                yield this.modalCtrl.dismiss({});
            }));
        });
    }
    cancelar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.slide.lockSwipes(false);
            yield this.slide.slidePrev(300);
            yield this.slide.lockSwipes(true);
        });
    }
    // CONFIGURACIONES
    filtroTrabajo(event) {
        this.textoBuscar = event.detail.value;
    }
    check(trabajo) {
        return this.trabajos.find((item) => item === trabajo);
    }
    borrarTrabajo(i) {
        this.trabajos.splice(i, 1);
    }
    habilitarTrabajo() {
        this.nuevoTrabajo = true;
    }
};
ModalCitasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: src_app_providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_5__["EstadoCitasService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__["ToastServices"] },
    { type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__["InicioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AnimationController"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__["ToastServices"] }
];
ModalCitasPage.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    slide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slide', { static: false },] }]
};
ModalCitasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-citas',
        template: _raw_loader_modal_citas_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('entrada', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
                        opacity: 0,
                        transform: 'scale(0)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('250ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
                        opacity: 1,
                        transform: 'scale(1)'
                    }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
                        opacity: 1,
                        transform: 'scale(1)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('250ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
                        opacity: 0,
                        transform: 'scale(0)'
                    }))
                ])
            ])
        ],
        styles: [_modal_citas_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalCitasPage);



/***/ }),

/***/ "x9hZ":
/*!*****************************************************************!*\
  !*** ./src/app/Pages/Modales/modal-citas/modal-citas.module.ts ***!
  \*****************************************************************/
/*! exports provided: ModalCitasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCitasPageModule", function() { return ModalCitasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_citas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-citas-routing.module */ "O/WA");
/* harmony import */ var _modal_citas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-citas.page */ "kXuA");
/* harmony import */ var src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Components/components.module */ "zon2");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "iTUp");









let ModalCitasPageModule = class ModalCitasPageModule {
};
ModalCitasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_citas_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalCitasPageRoutingModule"],
            src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
        ],
        declarations: [_modal_citas_page__WEBPACK_IMPORTED_MODULE_6__["ModalCitasPage"]]
    })
], ModalCitasPageModule);



/***/ })

}]);
//# sourceMappingURL=Pages-EstadoCitas-chat-chat-module.js.map