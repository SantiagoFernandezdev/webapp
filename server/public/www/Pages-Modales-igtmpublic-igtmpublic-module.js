(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-Modales-igtmpublic-igtmpublic-module"],{

/***/ "42Ns":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Modales/igtmpublic/igtmpublic.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"oscuro\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"central/iniciosan\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Contenido</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" #contenido>\n\n    <div *ngIf=\"!cargaTodo\">\n        <div class=\"skt\" *ngFor=\"let kl of [1,1]\">\n            <ion-item lines=\"none\" class=\"sinfondo\">\n                <ion-avatar slot=\"start\">\n                    <ion-skeleton-text animated width=\"100%\" height=\"100%\"></ion-skeleton-text>\n                </ion-avatar>\n                <ion-label>\n                    <ion-skeleton-text animated width=\"100%\" height=\"30px\"></ion-skeleton-text>\n                    <ion-skeleton-text animated width=\"100px\" height=\"30px\"></ion-skeleton-text>\n                </ion-label>\n            </ion-item>\n            <div style=\"height:200px\">\n                <ion-skeleton-text animated width=\"100%\" height=\"200px\"></ion-skeleton-text>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"cargaTodo\">\n\n        <div class=\"center\" *ngIf=\"publicaciones.length === 0\">\n            <img src=\"/assets/No.png\" width=\"150px\" alt=\"\">\n            <h3>El contenido no se encuentra disponible</h3>\n        </div>\n\n        <div *ngIf=\"tipo === 'publicacion'\">\n            <div *ngFor=\"let publicacion of publicaciones; let o = index;\">\n                <div class=\"divider ligth\"></div>\n\n\n\n                <div class=\"publicacion dibujar\" *ngIf=\"publicacion.tipo === 'dibujar'\">\n                    <ion-item lines=\"none\" class=\"sinfondo\">\n                        <ion-avatar slot=\"start\" (click)=\"perfilNavegar(publicacion.creador)\">\n                            <img [src]=\"publicacion.image\" width=\"100%\" height=\"100%\" alt=\"\">\n                        </ion-avatar>\n                        <ion-label (click)=\"perfilNavegar(publicacion.creador)\">{{publicacion.creador.nombrecompleto}} <br> {{publicacion.creador.nombreusuario}}</ion-label>\n\n                    </ion-item>\n                    <div class=\"lienzo\" [style.background]=\"publicacion.dibujo.fondo\" [style.color]=\"publicacion.dibujo.color\">\n                        {{ publicacion.dibujo.texto }}\n                    </div>\n                    <div class=\"etiquetas\" *ngIf=\"publicacion.etiquetas.length > 0\" (click)=\"etiquetas( publicacion.etiquetas )\">\n                        <h3>Etiquetas</h3>\n                    </div>\n\n                    <div class=\"opciones\">\n                        <ion-item lines=\"none\" mode=\"md\" class=\"sinfondo\">\n                            <ion-buttons slot=\"start\">\n\n                                <ion-button (click)=\"comentarios( publicacion, o )\">\n                                    <ion-icon name=\"chatbubble-outline\" slot=\"icon-only\"></ion-icon>\n\n                                </ion-button>\n\n                                <ion-button (click)=\"compartir( publicacion )\">\n                                    <ion-icon name=\"arrow-redo-outline\" slot=\"icon-only\"></ion-icon>\n                                </ion-button>\n                                <!-- \n                                <ion-button *ngIf=\"!publicacion.guardado\" (click)=\"guardado(  publicacion,'crear', o )\">\n                                    <ion-icon name=\"bookmark-outline\" slot=\"icon-only\"></ion-icon>\n                                </ion-button>\n\n                                <ion-button *ngIf=\"publicacion.guardado\" (click)=\"guardado(  publicacion,'crear', o )\">\n                                    <ion-icon name=\"bookmark\" color=\"darkgold\" slot=\"icon-only\"></ion-icon>\n                                </ion-button> -->\n                            </ion-buttons>\n\n\n                            <ion-buttons slot=\"end\">\n                                <ion-chip mode=\"ios\" color=\"medium\" (click)=\"mglista(publicacion.mglista)\"> {{publicacion.valormg}}</ion-chip>\n                                <ion-button *ngIf=\"!publicacion.megusta\" (click)=\"megusta(publicacion, 'megusta', o)\">\n                                    <ion-icon name=\"heart-outline\" slot=\"icon-only\"></ion-icon>\n\n                                </ion-button>\n\n                                <ion-button *ngIf=\"publicacion.megusta\" (click)=\"megusta(publicacion, 'nomegusta', o)\">\n                                    <ion-icon name=\"heart\" color=\"danger\" slot=\"icon-only\"></ion-icon>\n                                </ion-button>\n                            </ion-buttons>\n                        </ion-item>\n\n                        <ion-item lines=\"none\" class=\"sinfondo opacity\" *ngIf=\"publicacion.cog\">\n                            <ion-avatar slot=\"start\" (click)=\"perfilNavegar(publicacion.creadororiginal)\">\n                                <img [src]=\"publicacion.imageori\" width=\"100%\" height=\"100%\" alt=\"\">\n                            </ion-avatar>\n                            <ion-label (click)=\"perfilNavegar(publicacion.creadororiginal)\"> Publicación original creada por <br> @{{publicacion.creadororiginal.nombreusuario}}</ion-label>\n                        </ion-item>\n                    </div>\n\n                    <div class=\"comentarios\">\n                        <strong class=\"gris espacio\" (click)=\"perfilNavegar(publicacion.creador)\">{{ publicacion.creador.nombreusuario }}</strong>\n                        <span>{{publicacion.comentario}}</span>\n                    </div>\n\n\n                    <div class=\"comentar\" (click)=\"comentarios( publicacion, o )\">\n                        <span class=\"opt\">{{publicacion.msg}}</span> <br> Añadir Comentario\n                    </div>\n                </div>\n\n\n                <div class=\"publicacion dibujar\" *ngIf=\"publicacion.tipo === 'multimedia'\">\n                    <ion-item lines=\"none\" class=\"sinfondo\">\n                        <ion-avatar slot=\"start\" (click)=\"perfilNavegar(publicacion.creador)\">\n                            <img [src]=\"publicacion.image\" width=\"100%\" height=\"100%\" alt=\"\">\n                        </ion-avatar>\n                        <ion-label (click)=\"perfilNavegar(publicacion.creador)\">{{publicacion.creador.nombrecompleto}} <br> {{publicacion.creador.nombreusuario}}</ion-label>\n\n                    </ion-item>\n                    <ion-slides *ngIf=\"cargadentro\" color=\"dark\" mode=\"ios\" [pager]=\"publicacion.pager\">\n                        <ion-slide class=\"diapo\" *ngFor=\"let archivo of publicacion.archivos; let i = index;\" (click)=\"ver(publicacion.archivos, i, publicacion)\">\n                            <img *ngIf=\"archivo.mime.includes('image')\" src=\"https://motocaliapp.com/11927613401/{{archivo.ruta}}\" width=\"100%\">\n                            <video video-load poster=\"/assets/Video.png\" *ngIf=\"archivo.mime.includes('video') || archivo.mime.includes('Video') || archivo.mime.includes('mp4') || archivo.mime.includes('MP4')\" src=\"https://motocaliapp.com/11927613401/{{archivo.ruta}}\" width=\"100%\"></video>\n                            <ion-button *ngIf=\"archivo.mime.includes('video') || archivo.mime.includes('Video') || archivo.mime.includes('mp4') || archivo.mime.includes('MP4')\" class=\"btonDiapo\" fill=\"outline\" color=\"blanco\" mode=\"md\" expand=\"block\">Abrir Vídeo</ion-button>\n                        </ion-slide>\n                    </ion-slides>\n                    <div class=\"etiquetas\" *ngIf=\"publicacion.etiquetas.length > 0\" (click)=\"etiquetas( publicacion.etiquetas )\">\n                        <h3>Etiquetas</h3>\n                    </div>\n                    <div class=\"opciones\">\n                        <ion-item lines=\"none\" mode=\"md\" class=\"sinfondo\">\n                            <ion-buttons slot=\"start\">\n\n                                <ion-button (click)=\"comentarios( publicacion, o )\">\n                                    <ion-icon name=\"chatbubble-outline\" slot=\"icon-only\"></ion-icon>\n\n                                </ion-button>\n\n                                <ion-button (click)=\"compartir( publicacion )\">\n                                    <ion-icon name=\"arrow-redo-outline\" slot=\"icon-only\"></ion-icon>\n                                </ion-button>\n\n                                <!-- <ion-button *ngIf=\"!publicacion.guardado\" (click)=\"guardado(  publicacion,'crear', o )\">\n                                    <ion-icon name=\"bookmark-outline\" slot=\"icon-only\"></ion-icon>\n                                </ion-button>\n\n                                <ion-button *ngIf=\"publicacion.guardado\" (click)=\"guardado(  publicacion,'crear', o )\">\n                                    <ion-icon name=\"bookmark\" color=\"darkgold\" slot=\"icon-only\"></ion-icon>\n                                </ion-button> -->\n                            </ion-buttons>\n\n\n                            <ion-buttons slot=\"end\">\n                                <ion-chip mode=\"ios\" color=\"medium\" (click)=\"mglista(publicacion.mglista)\"> {{publicacion.valormg}}</ion-chip>\n                                <ion-button *ngIf=\"!publicacion.megusta\" (click)=\"megusta(publicacion, 'megusta', o)\">\n                                    <ion-icon name=\"heart-outline\" slot=\"icon-only\"></ion-icon>\n\n                                </ion-button>\n\n                                <ion-button *ngIf=\"publicacion.megusta\" (click)=\"megusta(publicacion, 'nomegusta', o)\">\n                                    <ion-icon name=\"heart\" color=\"danger\" slot=\"icon-only\"></ion-icon>\n                                </ion-button>\n                            </ion-buttons>\n                        </ion-item>\n\n\n                        <ion-item lines=\"none\" class=\"sinfondo opacity\" *ngIf=\"publicacion.cog\">\n                            <ion-avatar slot=\"start\" (click)=\"perfilNavegar(publicacion.creadororiginal)\">\n                                <img [src]=\"publicacion.imageori\" width=\"100%\" height=\"100%\" alt=\"\">\n                            </ion-avatar>\n                            <ion-label (click)=\"perfilNavegar(publicacion.creadororiginal)\">{{publicacion.creadororiginal.nombrecompleto}} <br> {{publicacion.creadororiginal.nombreusuario}}</ion-label>\n                        </ion-item>\n                    </div>\n\n                    <div class=\"comentarios\">\n                        <strong class=\"gris espacio\" (click)=\"perfilNavegar(publicacion.creador)\">{{ publicacion.creador.nombreusuario }}</strong>\n                        <span>{{ publicacion.comentario }}</span>\n                    </div>\n\n                    <div class=\"comentar\" (click)=\"comentarios( publicacion, o )\">\n                        <span class=\"opt\">{{publicacion.msg}}</span> <br> Añadir Comentario\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n        <div *ngIf=\"tipo === 'historia'\">\n\n            <div *ngFor=\"let publicacion of publicaciones; let o = index;\">\n                <div class=\"divider ligth\"></div>\n\n\n\n                <div class=\"publicacion dibujar\" *ngIf=\"publicacion.tipo === 'dibujar'\">\n                    <ion-item lines=\"none\" class=\"sinfondo\">\n                        <ion-avatar slot=\"start\" (click)=\"perfilNavegar(publicacion.creador)\">\n                            <img [src]=\"publicacion.image\" width=\"100%\" height=\"100%\" alt=\"\">\n                        </ion-avatar>\n                        <ion-label (click)=\"perfilNavegar(publicacion.creador)\">{{publicacion.creador.nombrecompleto}} <br> {{publicacion.creador.nombreusuario}}</ion-label>\n\n                    </ion-item>\n                    <div class=\"lienzo\" [style.background]=\"publicacion.dibujo.fondo\" [style.color]=\"publicacion.dibujo.color\">\n                        {{ publicacion.dibujo.texto }}\n                    </div>\n                    <div class=\"etiquetas\" *ngIf=\"publicacion.etiquetas.length > 0\" (click)=\"etiquetas( publicacion.etiquetas )\">\n                        <h3>Etiquetas</h3>\n                    </div>\n\n\n\n                    <div class=\"comentarios\">\n                        <strong class=\"gris espacio\" (click)=\"perfilNavegar(publicacion.creador)\">{{ publicacion.creador.nombreusuario }}</strong>\n                        <span>{{publicacion.comentario}}</span>\n                    </div>\n\n\n\n                </div>\n\n\n                <div class=\"publicacion dibujar\" *ngIf=\"publicacion.tipo === 'multimedia'\">\n                    <ion-item lines=\"none\" class=\"sinfondo\">\n                        <ion-avatar slot=\"start\" (click)=\"perfilNavegar(publicacion.creador)\">\n                            <img [src]=\"publicacion.image\" width=\"100%\" height=\"100%\" alt=\"\">\n                        </ion-avatar>\n                        <ion-label (click)=\"perfilNavegar(publicacion.creador)\">{{publicacion.creador.nombrecompleto}} <br> {{publicacion.creador.nombreusuario}}</ion-label>\n\n                    </ion-item>\n                    <ion-slides *ngIf=\"cargadentro\" color=\"dark\" mode=\"ios\" [pager]=\"publicacion.pager\">\n                        <ion-slide class=\"diapo\" *ngFor=\"let archivo of publicacion.archivos; let i = index;\" (click)=\"ver(publicacion.archivos, i, publicacion)\">\n                            <img *ngIf=\"archivo.mime.includes('image')\" src=\"https://motocaliapp.com/11927613401/{{archivo.ruta}}\" width=\"100%\">\n\n                        </ion-slide>\n                    </ion-slides>\n                    <div class=\"etiquetas\" *ngIf=\"publicacion.etiquetas.length > 0\" (click)=\"etiquetas( publicacion.etiquetas )\">\n                        <h3>Etiquetas</h3>\n                    </div>\n                    <div class=\"comentarios\">\n                        <strong class=\"gris espacio\" (click)=\"perfilNavegar(publicacion.creador)\">{{ publicacion.creador.nombreusuario }}</strong>\n                        <span>{{ publicacion.comentario }}</span>\n                    </div>\n\n                    <div class=\"comentar\">\n                        <span class=\"opt\">{{publicacion.msg}}</span>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n\n</ion-content>");

/***/ }),

/***/ "BYfC":
/*!***************************************************************!*\
  !*** ./src/app/Pages/Modales/igtmpublic/igtmpublic.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  width: 100%;\n}\n\n.publicacion {\n  background: #ffffff;\n}\n\n.publicacion ion-label {\n  font-size: 12px !important;\n}\n\n.lienzo {\n  padding: 10px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  white-space: pre-wrap;\n  min-height: 300px;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 1.7;\n}\n\n.info {\n  padding: 15px;\n}\n\n.opciones {\n  width: 100%;\n}\n\n.comentarios {\n  padding: 10px;\n  padding-left: 15px;\n  font-weight: 300;\n  line-height: 1.6;\n  font-size: 16px;\n}\n\n.gris {\n  color: #333;\n}\n\n.espacio {\n  padding-right: 10px;\n}\n\n.diapo {\n  background-color: #000000 !important;\n  width: 100%;\n  max-height: calc(100vh - 270px);\n  overflow: hidden;\n  position: relative;\n}\n\n.diapo video {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.diapo .btonDiapo {\n  margin: auto 5%;\n  width: 90%;\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  z-index: 10;\n}\n\n.etiquetas h3 {\n  width: 100px;\n  border-radius: 3px;\n  text-align: center;\n  background-color: #f1f1f1;\n  color: #333333;\n}\n\n.comentar {\n  color: #777777;\n  padding: 5px 15px;\n  font-size: 14px;\n}\n\n.opt {\n  opacity: 0.5;\n}\n\n.center {\n  width: 300px;\n  margin: 100px auto;\n  text-align: center;\n}\n\n.center h3 {\n  font-weight: bold;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaWd0bXB1YmxpYy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6ImlndG1wdWJsaWMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHVibGljYWNpb24ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG5cclxuLnB1YmxpY2FjaW9uIGlvbi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxpZW56byB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS43O1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4ub3BjaW9uZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb21lbnRhcmlvcyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5ncmlzIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uZXNwYWNpbyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZGlhcG8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjcwcHgpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRpYXBvIHZpZGVvIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5kaWFwbyAuYnRvbkRpYXBvIHtcclxuICAgIG1hcmdpbjogYXV0byA1JTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5ldGlxdWV0YXMgaDMge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcblxyXG4uY29tZW50YXIge1xyXG4gICAgY29sb3I6ICM3Nzc3Nzc7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLm9wdCB7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXIgaDMge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "S+GQ":
/*!***********************************************************************!*\
  !*** ./src/app/Pages/Modales/igtmpublic/igtmpublic-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: IgtmpublicPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IgtmpublicPageRoutingModule", function() { return IgtmpublicPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _igtmpublic_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./igtmpublic.page */ "sFwh");




const routes = [
    {
        path: '',
        component: _igtmpublic_page__WEBPACK_IMPORTED_MODULE_3__["IgtmpublicPage"]
    }
];
let IgtmpublicPageRoutingModule = class IgtmpublicPageRoutingModule {
};
IgtmpublicPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IgtmpublicPageRoutingModule);



/***/ }),

/***/ "cITA":
/*!***************************************************************!*\
  !*** ./src/app/Pages/Modales/igtmpublic/igtmpublic.module.ts ***!
  \***************************************************************/
/*! exports provided: IgtmpublicPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IgtmpublicPageModule", function() { return IgtmpublicPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _igtmpublic_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./igtmpublic-routing.module */ "S+GQ");
/* harmony import */ var _igtmpublic_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./igtmpublic.page */ "sFwh");
/* harmony import */ var _igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../igtmplantilla/igtmplantilla.page */ "Jmyf");
/* harmony import */ var _igtmplantilla_igtmplantilla_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../igtmplantilla/igtmplantilla.module */ "D3OO");









let IgtmpublicPageModule = class IgtmpublicPageModule {
};
IgtmpublicPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_7__["IgtmplantillaPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _igtmpublic_routing_module__WEBPACK_IMPORTED_MODULE_5__["IgtmpublicPageRoutingModule"],
            _igtmplantilla_igtmplantilla_module__WEBPACK_IMPORTED_MODULE_8__["IgtmplantillaPageModule"]
        ],
        declarations: [_igtmpublic_page__WEBPACK_IMPORTED_MODULE_6__["IgtmpublicPage"]]
    })
], IgtmpublicPageModule);



/***/ }),

/***/ "sFwh":
/*!*************************************************************!*\
  !*** ./src/app/Pages/Modales/igtmpublic/igtmpublic.page.ts ***!
  \*************************************************************/
/*! exports provided: IgtmpublicPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IgtmpublicPage", function() { return IgtmpublicPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_igtmpublic_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./igtmpublic.page.html */ "42Ns");
/* harmony import */ var _igtmpublic_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./igtmpublic.page.scss */ "BYfC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/Api/IGTM.service */ "WGaO");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../igtmplantilla/igtmplantilla.page */ "Jmyf");
/* harmony import */ var src_app_Components_modal_megustas_modal_megustas_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/Components/modal-megustas/modal-megustas.component */ "UInZ");













let IgtmpublicPage = class IgtmpublicPage {
    constructor(IGTMApi, almacenamiento, activeRoute, modalCtrl, statusbar, toast, socket, router) {
        this.IGTMApi = IGTMApi;
        this.almacenamiento = almacenamiento;
        this.activeRoute = activeRoute;
        this.modalCtrl = modalCtrl;
        this.statusbar = statusbar;
        this.toast = toast;
        this.socket = socket;
        this.router = router;
        this.publicaciones = [];
        this.cargadentro = false;
        this.click = false;
        this.cargaTodo = false;
        this.tipo = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.tipo = this.activeRoute.snapshot.paramMap.get('tipo');
        this.publicaciones = [];
        if (this.activeRoute.snapshot.paramMap.get('tipo') === 'historia') {
            this.iniciar2();
        }
        else {
            this.iniciar();
        }
    }
    iniciar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.IGTMApi.leerUna(info.token, { id: this.activeRoute.snapshot.paramMap.get('id') }).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    // console.log(data)
                    if (data.exe) {
                        if (data.response) {
                            data.response.guardado = false;
                            if (data.response.creador.imagen.length > 0) {
                                data.response.image = `https://motocaliapp.com/${data.response.creador.imagen[0].path}`;
                            }
                            else {
                                data.response.image = '/assets/notfound.png';
                            }
                            if (data.response.creadororiginal) {
                                data.response.cog = true;
                                if (data.response.creadororiginal.imagen.length > 0) {
                                    data.response.imageori = `https://motocaliapp.com/${data.response.creadororiginal.imagen[0].path}`;
                                }
                                else {
                                    data.response.imageori = '/assets/notfound.png';
                                }
                            }
                            else {
                                data.response.cog = false;
                            }
                            yield new Promise((resolve, reject) => {
                                this.IGTMApi.leerFotos(info.token, { id: data.response._id }).subscribe((res) => {
                                    if (res.exe) {
                                        data.response.archivos = res.response;
                                        // console.log(res.response.length, 'Bien fotos')
                                        if (res.response.length > 1) {
                                            data.response.pager = true;
                                            resolve({ exe: true });
                                        }
                                        else {
                                            resolve({ exe: false });
                                            data.response.pager = false;
                                        }
                                    }
                                    else {
                                        resolve({ exe: true });
                                        data.response.archivos = [];
                                    }
                                    this.cargadentro = true;
                                }, (err) => {
                                    resolve({ exe: false });
                                    data.response.archivos = [];
                                });
                            });
                            yield new Promise((resolve, reject) => {
                                this.IGTMApi.crearGuardado(info.token, { publicacion: data.response._id, tipo: 'leer' }).subscribe((res) => {
                                    if (res.exe) {
                                        data.response.guardado = true;
                                    }
                                    else {
                                        data.response.guardado = false;
                                    }
                                    resolve(true);
                                }, (err) => {
                                    resolve(true);
                                    data.response.guardado = false;
                                });
                            });
                            yield new Promise((resolve, reject) => {
                                this.IGTMApi.meGusta(info.token, { id: data.response._id, tipo: 'leer' }).subscribe((res) => {
                                    if (res.response.find((itemmg) => itemmg.creador._id === info._id)) {
                                        data.response.megusta = true;
                                    }
                                    else {
                                        data.response.megusta = false;
                                    }
                                    resolve(true);
                                    data.response.valormg = res.response.length;
                                    data.response.mglista = res.response;
                                }, (err) => {
                                    resolve(true);
                                    data.response.megusta = false;
                                    data.response.valormg = '';
                                });
                            });
                            yield new Promise((resolve, reject) => {
                                this.IGTMApi.crearComentario(info.token, { _id: data.response._id, tipo: 'leer' }).subscribe((res) => {
                                    // console.log(res.response, 'comentarios', data.response._id)
                                    if (res.exe) {
                                        data.response.comentarios = res.response;
                                        if (res.response.length > 0) {
                                            data.response.msg = `${data.response.comentarios.length} comentarios...`;
                                        }
                                        else {
                                            data.response.msg = 'No hay ningún comentario paraesta publicación';
                                        }
                                    }
                                    else {
                                        data.response.comentarios = [];
                                    }
                                    resolve(true);
                                    this.cargadentro = true;
                                }, (err) => {
                                    resolve(true);
                                    data.response.comentarios = [];
                                });
                            });
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
                            this.publicaciones.push(data.response);
                        }
                        else {
                            this.publicaciones = [];
                        }
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
                this.IGTMApi.leerUna2(info.token, { id: this.activeRoute.snapshot.paramMap.get('id') }).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    // console.log(data, 'DATA PRATA')
                    if (data.exe) {
                        if (data.response) {
                            if (data.response.creador.imagen.length > 0) {
                                data.response.image = `https://motocaliapp.com/${data.response.creador.imagen[0].path}`;
                            }
                            else {
                                data.response.image = '/assets/notfound.png';
                            }
                            yield new Promise((resolve, reject) => {
                                this.IGTMApi.leerFotos(info.token, { id: data.response._id }).subscribe((res) => {
                                    if (res.exe) {
                                        data.response.archivos = res.response;
                                        // console.log(res.response.length, 'Bien fotos')
                                        if (res.response.length > 1) {
                                            data.response.pager = true;
                                            resolve({ exe: true });
                                        }
                                        else {
                                            resolve({ exe: false });
                                            data.response.pager = false;
                                        }
                                    }
                                    else {
                                        resolve({ exe: true });
                                        data.response.archivos = [];
                                    }
                                    this.cargadentro = true;
                                }, (err) => {
                                    resolve({ exe: false });
                                    data.response.archivos = [];
                                });
                            });
                            this.publicaciones.push(data.response);
                        }
                        else {
                            this.publicaciones = [];
                        }
                    }
                    else {
                    }
                    this.cargaTodo = true;
                }), (err) => {
                });
            }
        });
    }
    compartir(publicacion) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_11__["IgtmplantillaPage"],
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
    comentarios(publicacion, indice) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_11__["IgtmplantillaPage"],
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
    etiquetar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_11__["IgtmplantillaPage"],
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
                component: _igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_11__["IgtmplantillaPage"],
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
                    component: _igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_11__["IgtmplantillaPage"],
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
    mglista(listado) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_Components_modal_megustas_modal_megustas_component__WEBPACK_IMPORTED_MODULE_12__["ModalMegustasComponent"],
                componentProps: {
                    listado: listado
                }
            });
            yield modal.present();
        });
    }
};
IgtmpublicPage.ctorParameters = () => [
    { type: src_app_providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_4__["IGTMService"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_9__["ToastServices"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__["Socket"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
IgtmpublicPage.propDecorators = {
    contenido: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['contenido', { static: false },] }]
};
IgtmpublicPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-igtmpublic',
        template: _raw_loader_igtmpublic_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_igtmpublic_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IgtmpublicPage);



/***/ })

}]);
//# sourceMappingURL=Pages-Modales-igtmpublic-igtmpublic-module.js.map