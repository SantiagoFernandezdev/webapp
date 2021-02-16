(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-usuario-perfil-visita-perfil-visita-module"],{

/***/ "2hNS":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/usuario/perfil-visita/perfil-visita.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" *ngIf=\"red === 'none'\">\n    <ion-toolbar color=\"light\">\n\n        <ion-title class=\"titulo\">Fuera de Línea</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button>\n                <ion-icon color=\"danger\" name=\"wifi-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content #miContenido [scrollEvents]=\"scroll\" color=\"blanco\" *ngIf=\"red !== 'none'\" (ionScroll)=\"scrollable( $event )\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <div class=\"main\">\n        <div class=\"contenedor\">\n            <div class=\"info\">\n                <ion-card class=\"tarjeta\" mode=\"ios\">\n                    <div class=\"portada\">\n                        <ion-back-button *ngIf=\"atrasBoton\" mode=\"md\" class=\"boton\" color=\"blanco\" icon=\"chevron-back-outline\" defaultHref=\"/central/iniciosan\"></ion-back-button>\n                        <div class=\"img\" (click)=\"modal('mediapor')\">\n                            <img src=\"https://motocaliapp.com/19927613410/{{portada}}\" alt=\"\">\n                        </div>\n\n                        <div *ngIf=\"eliminado\" class=\"barra \">\n                            <div class=\"ama\" [class.rj]=\"eliminado\" (click)=\"seguimiento()\">{{ titulo2 }}</div>\n                        </div>\n\n                        <ion-avatar class=\"avatar\" *ngIf=\"Image !== 'none'\" (click)=\"modal('mediap')\">\n                            <ion-img [src]=\"Image\" type='media' width=\"200px\"></ion-img>\n                        </ion-avatar>\n                        <ion-avatar class=\"avatar\" *ngIf=\"Image === 'none'\">\n                        </ion-avatar>\n                    </div>\n\n\n                    <ion-card-header>\n                        <ion-card-title class=\"ion-text-center ion-text-wrap\">{{ nombreUsuario }}</ion-card-title>\n                    </ion-card-header>\n\n                    <ion-card-content>\n\n\n                        <ion-segment *ngIf=\"cargarInformacion\" #segment [value]=\"segmento\" mode=\"md\" scrollable=\"true\" color=\"success\" (ionChange)=\"segmentos($event)\">\n                            <ion-segment-button value=\"info\">\n                                <ion-label class=\"up\">\n                                    <strong>Sobre Mi</strong>\n                                    <div class=\"ion-text-center\"></div>\n                                </ion-label>\n                            </ion-segment-button>\n\n                            <ion-segment-button value=\"public\">\n                                <ion-label class=\"up\">\n                                    <strong>Social</strong>\n                                    <div class=\"ion-text-center\"></div>\n                                </ion-label>\n                            </ion-segment-button>\n\n\n\n                            <ion-segment-button value=\"clientes\">\n                                <ion-label class=\"up\">\n                                    <strong>Seguidores</strong>\n                                    <div class=\"ion-text-center\">{{ personasTemp.length }}</div>\n                                </ion-label>\n                            </ion-segment-button>\n\n                            <ion-segment-button value=\"seguidos\">\n                                <ion-label class=\"up\">\n                                    <strong>Seguidos</strong>\n                                    <div class=\"ion-text-center\">{{ seguidosTemp.length }}</div>\n                                </ion-label>\n                            </ion-segment-button>\n\n\n                        </ion-segment>\n\n\n                    </ion-card-content>\n                </ion-card>\n\n\n            </div>\n\n        </div>\n\n        <div class=\"blanco mensajeCuenta\" *ngIf=\"!cargarInformacion\">\n            <ion-grid fixed>\n                <ion-row>\n\n                    <ion-col size=\"10\" offset=\"1\">\n                        <h2 class=\"ion-text-center opacity message\">Esta cuenta es privada</h2>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col size=\"12\">\n                        <div class=\"anchofull centrado\">\n                            <ion-button *ngIf=\"cargarBoton\" mode=\"ios\" shape=\"round\" [color]=\"solicitudEnviada ? 'danger' :'success'\" (click)=\"seguimiento()\">{{ estado }}</ion-button>\n                        </div>\n                        <div *ngIf=\"estadoSolicitud\" class=\"anchofull centrado ion-padding\">\n                            <div>\n                                <div class=\"centrado\">\n                                    <ion-spinner *ngIf=\"estadoSolicitud\" name=\"crescent\" color=\"oscuro\"></ion-spinner>\n                                </div>\n                                <div>\n                                    <h4 class=\"opacity\">Enviando una solicitud</h4>\n                                </div>\n                            </div>\n                        </div>\n                    </ion-col>\n\n\n                    <ion-col *ngIf=\"solicitudEnviada\" size=\"12\" [@solicitud]=\"solicitudEnviada ? 'pendiente' : 'default'\">\n                        <div class=\"anchofull ion-padding\">\n                            <h3 class=\"ion-text-center\">Tú solicitud está pendiente</h3>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n\n        <div class=\"divider \"></div>\n\n        <ion-slides *ngIf=\"cargarInformacion\" #miSlide (ionSlideDidChange)=\"cambioDiapositiva( $event )\">\n            <ion-slide class=\"diapositiva\">\n                <h3 class=\"tituloGrande per\" *ngIf=\"role === 'TALLER_ROLE' && !contenido && servicios.length === 0\">Aún no hay información sobre tu negocio</h3>\n                <div class=\"blanco\" *ngIf=\"contenido && role === 'TALLER_ROLE'\">\n                    <h3 class=\"tituloGrande\">Establecimiento</h3>\n                    <div class=\"contenido\">\n\n                        <ion-card mode=\"ios\">\n\n                            <ion-card-content>\n                                <ion-list>\n                                    <ion-item lines=\"none\">\n                                        <ion-icon name=\"home\" slot=\"start\" color=\"medium\"></ion-icon>\n                                        <ion-label class=\"ion-text-wrap\">{{ contenido.direccion}}</ion-label>\n                                    </ion-item>\n                                    <ion-item lines=\"none\">\n                                        <ion-icon name=\"call\" slot=\"start\" color=\"medium\"></ion-icon>\n                                        <ion-label class=\"ion-text-wrap\">{{ contenido.telefono}}</ion-label>\n                                    </ion-item>\n                                    <ion-item lines=\"none\">\n                                        <ion-icon name=\"desktop\" slot=\"start\" color=\"medium\"></ion-icon>\n                                        <ion-label class=\"ion-text-wrap\">{{ contenido.pagina}}</ion-label>\n                                    </ion-item>\n                                    <ion-item lines=\"none\">\n                                        <ion-icon name=\"location\" slot=\"start\" color=\"medium\"></ion-icon>\n                                        <ion-label class=\"ion-text-wrap\">{{ contenido.ciudad}}, {{ contenido.pais}}</ion-label>\n                                    </ion-item>\n\n                                    <ion-item lines=\"none\">\n                                        <ion-icon name=\"alarm\" slot=\"start\" color=\"medium\"></ion-icon>\n                                        <ion-label class=\"ion-text-wrap\">Abierto desde las {{ contenido.desde | horario}} hasta las {{ contenido.hasta | horario}}</ion-label>\n                                    </ion-item>\n\n                                    <ion-item>\n                                        <ion-icon name=\"today\" slot=\"start\" color=\"medium\"></ion-icon>\n                                        <ion-label class=\"ion-text-wrap\"> De {{ contenido.de}} a {{ contenido.a}}</ion-label>\n                                    </ion-item>\n\n                                </ion-list>\n                            </ion-card-content>\n                        </ion-card>\n                    </div>\n\n                </div>\n\n                <div class=\"blanco\" *ngIf=\"servicios.length > 0\">\n                    <h3 class=\"tituloGrande\">Servicios</h3>\n                    <div class=\"servicio\" *ngIf=\"role === 'TALLER_ROLE'\">\n\n                        <ion-card mode=\"ios\" *ngFor=\"let item of servicios; let i = index\">\n                            <ion-card-header class=\"centrarHijo\">\n                                <div class=\"marca\">\n                                    <ion-icon name=\"build\"></ion-icon>\n                                </div>\n                            </ion-card-header>\n                            <ion-card-content>\n                                {{ item }}\n                            </ion-card-content>\n                        </ion-card>\n                    </div>\n\n\n\n\n                </div>\n\n\n                <div class=\"blanco\" *ngIf=\"contenido && role === 'USER_ROLE'\">\n                    <h3 class=\"tituloGrande\">Vehículo</h3>\n                    <div class=\"contenido\">\n\n                        <ion-card mode=\"ios\">\n\n                            <ion-card-content>\n                                <ion-list>\n                                    <ion-item lines=\"none\">\n                                        <ion-icon name=\"aperture\" slot=\"start\" color=\"medium\"></ion-icon>\n                                        <ion-label class=\"ion-text-wrap\">{{ contenido.tipo}}</ion-label>\n                                    </ion-item>\n                                    <ion-item lines=\"none\">\n                                        <ion-icon name=\"information-circle\" slot=\"start\" color=\"medium\"></ion-icon>\n                                        <ion-label class=\"ion-text-wrap\">{{ contenido.Nombre}}</ion-label>\n                                    </ion-item>\n                                    <ion-item lines=\"none\">\n                                        <ion-icon name=\"flag\" slot=\"start\" color=\"medium\"></ion-icon>\n                                        <ion-label class=\"ion-text-wrap\">{{ contenido.Marca}}</ion-label>\n                                    </ion-item>\n\n                                    <ion-item lines=\"none\">\n                                        <ion-icon name=\"ellipse\" slot=\"start\" color=\"medium\"></ion-icon>\n                                        <ion-label class=\"ion-text-wrap\">Módelo {{ contenido.Modelo}}</ion-label>\n                                    </ion-item>\n\n\n                                </ion-list>\n                            </ion-card-content>\n                        </ion-card>\n                    </div>\n\n                </div>\n            </ion-slide>\n            <ion-slide [class.over]=\"over\" class=\"diapositiva\">\n                <div *ngIf=\"!cargaTodo\">\n                    <div class=\"skt\" *ngFor=\"let kl of [1,1,1,1,1]\">\n                        <ion-item lines=\"none\" class=\"sinfondo\">\n                            <ion-avatar slot=\"start\">\n                                <ion-skeleton-text animated width=\"100%\" height=\"100%\"></ion-skeleton-text>\n                            </ion-avatar>\n                            <ion-label>\n                                <ion-skeleton-text animated width=\"100%\" height=\"30px\"></ion-skeleton-text>\n                                <ion-skeleton-text animated width=\"100px\" height=\"30px\"></ion-skeleton-text>\n                            </ion-label>\n                        </ion-item>\n                        <div style=\"height:200px\">\n                            <ion-skeleton-text animated width=\"100%\" height=\"200px\"></ion-skeleton-text>\n                        </div>\n                    </div>\n                </div>\n\n                <div *ngIf=\"cargaTodo\">\n\n                    <div *ngFor=\"let publicacion of publicaciones; let o = index;\">\n                        <div class=\"divider ligth\"></div>\n\n\n\n                        <div class=\"publicacion dibujar\" *ngIf=\"publicacion.tipo === 'dibujar'\">\n                            <ion-item lines=\"none\" class=\"sinfondo\">\n                                <ion-avatar slot=\"start\" (click)=\"perfilNavegar(publicacion.creador)\">\n                                    <img [src]=\"publicacion.image\" width=\"100%\" height=\"100%\" alt=\"\">\n                                </ion-avatar>\n                                <ion-label (click)=\"perfilNavegar(publicacion.creador)\">{{publicacion.creador.nombrecompleto}} <br> {{publicacion.creador.nombreusuario}}</ion-label>\n\n                            </ion-item>\n                            <div class=\"lienzo\" [style.background]=\"publicacion.dibujo.fondo\" [style.color]=\"publicacion.dibujo.color\">\n                                {{ publicacion.dibujo.texto }}\n                            </div>\n                            <div class=\"etiquetas\" *ngIf=\"publicacion.etiquetas.length > 0\" (click)=\"etiquetas( publicacion.etiquetas )\">\n                                <h3>Etiquetas</h3>\n                            </div>\n\n                            <div class=\"opciones\">\n                                <ion-item lines=\"none\" mode=\"md\" class=\"sinfondo\">\n                                    <ion-buttons slot=\"start\">\n\n                                        <ion-button (click)=\"comentarios( publicacion, o )\">\n                                            <ion-icon name=\"chatbubble-outline\" slot=\"icon-only\"></ion-icon>\n\n                                        </ion-button>\n\n                                        <ion-button (click)=\"compartir( publicacion )\">\n                                            <ion-icon name=\"arrow-redo-outline\" slot=\"icon-only\"></ion-icon>\n                                        </ion-button>\n\n                                        <!-- <ion-button *ngIf=\"!publicacion.guardado\" (click)=\"guardado(  publicacion,'crear', o )\">\n                                            <ion-icon name=\"bookmark-outline\" slot=\"icon-only\"></ion-icon>\n                                        </ion-button>\n\n                                        <ion-button *ngIf=\"publicacion.guardado\" (click)=\"guardado(  publicacion,'eliminar', o )\">\n                                            <ion-icon name=\"bookmark\" color=\"darkgold\" slot=\"icon-only\"></ion-icon>\n                                        </ion-button> -->\n                                    </ion-buttons>\n\n\n                                    <ion-buttons slot=\"end\">\n                                        <ion-chip mode=\"ios\" color=\"medium\" (click)=\"mglista(publicacion.mglista)\"> {{publicacion.valormg}}</ion-chip>\n                                        <ion-button *ngIf=\"!publicacion.megusta\" (click)=\"megusta(publicacion, 'megusta', o)\">\n                                            <ion-icon name=\"heart-outline\" slot=\"icon-only\"></ion-icon>\n\n                                        </ion-button>\n\n                                        <ion-button *ngIf=\"publicacion.megusta\" (click)=\"megusta(publicacion, 'nomegusta', o)\">\n                                            <ion-icon name=\"heart\" color=\"danger\" slot=\"icon-only\"></ion-icon>\n                                        </ion-button>\n                                    </ion-buttons>\n                                </ion-item>\n\n                                <ion-item lines=\"none\" class=\"sinfondo opacity\" *ngIf=\"publicacion.cog\">\n                                    <ion-avatar slot=\"start\" (click)=\"perfilNavegar(publicacion.creadororiginal)\">\n                                        <img [src]=\"publicacion.imageori\" width=\"100%\" height=\"100%\" alt=\"\">\n                                    </ion-avatar>\n                                    <ion-label (click)=\"perfilNavegar(publicacion.creadororiginal)\"> Publicación original creada por <br> @{{publicacion.creadororiginal.nombreusuario}}</ion-label>\n                                </ion-item>\n                            </div>\n\n                            <div class=\"comentarios\">\n                                <strong class=\"gris espacio\" (click)=\"perfilNavegar(publicacion.creador)\">{{ publicacion.creador.nombreusuario }}</strong>\n                                <span>{{publicacion.comentario}}</span>\n                            </div>\n\n\n                            <div class=\"comentar\" (click)=\"comentarios( publicacion, o )\">\n                                <span class=\"opt\">{{publicacion.msg}}</span> <br> Añadir Comentario\n                            </div>\n\n                            <div class=\"fecha \">{{ publicacion.fecha | fecha}}</div>\n                        </div>\n\n\n                        <div class=\"publicacion dibujar\" *ngIf=\"publicacion.tipo === 'multimedia'\">\n                            <ion-item lines=\"none\" class=\"sinfondo\">\n                                <ion-avatar slot=\"start\" (click)=\"perfilNavegar(publicacion.creador)\">\n                                    <img [src]=\"publicacion.image\" width=\"100%\" height=\"100%\" alt=\"\">\n                                </ion-avatar>\n                                <ion-label (click)=\"perfilNavegar(publicacion.creador)\">{{publicacion.creador.nombrecompleto}} <br> {{publicacion.creador.nombreusuario}}</ion-label>\n\n                            </ion-item>\n                            <ion-slides *ngIf=\"cargadentro\" color=\"dark\" mode=\"ios\" [pager]=\"publicacion.pager\">\n                                <ion-slide class=\"diapo\" *ngFor=\"let archivo of publicacion.archivos; let i = index;\" (click)=\"ver(publicacion.archivos, i, publicacion)\">\n                                    <img *ngIf=\"archivo.mime.includes('image')\" src=\"https://motocaliapp.com/11927613401/{{archivo.ruta}}\" width=\"100%\">\n                                    <video video-load poster=\"/assets/Video.png\" *ngIf=\"archivo.mime.includes('video') || archivo.mime.includes('Video') || archivo.mime.includes('mp4') || archivo.mime.includes('MP4')\" src=\"https://motocaliapp.com/11927613401/{{archivo.ruta}}\" width=\"100%\"></video>\n                                    <ion-button *ngIf=\"archivo.mime.includes('video') || archivo.mime.includes('Video') || archivo.mime.includes('mp4') || archivo.mime.includes('MP4')\" class=\"btonDiapo\" fill=\"outline\" color=\"blanco\" mode=\"md\" expand=\"block\">Abrir Vídeo</ion-button>\n                                </ion-slide>\n                            </ion-slides>\n                            <div class=\"etiquetas\" *ngIf=\"publicacion.etiquetas.length > 0\" (click)=\"etiquetas( publicacion.etiquetas )\">\n                                <h3>Etiquetas</h3>\n                            </div>\n                            <div class=\"opciones\">\n                                <ion-item lines=\"none\" mode=\"md\" class=\"sinfondo\">\n                                    <ion-buttons slot=\"start\">\n\n                                        <ion-button (click)=\"comentarios( publicacion, o )\">\n                                            <ion-icon name=\"chatbubble-outline\" slot=\"icon-only\"></ion-icon>\n\n                                        </ion-button>\n\n                                        <ion-button (click)=\"compartir( publicacion )\">\n                                            <ion-icon name=\"arrow-redo-outline\" slot=\"icon-only\"></ion-icon>\n                                        </ion-button>\n                                        <!-- \n                                        <ion-button *ngIf=\"!publicacion.guardado\" (click)=\"guardado(  publicacion,'crear', o )\">\n                                            <ion-icon name=\"bookmark-outline\" slot=\"icon-only\"></ion-icon>\n                                        </ion-button>\n\n                                        <ion-button *ngIf=\"publicacion.guardado\" (click)=\"guardado(  publicacion,'eliminar', o )\">\n                                            <ion-icon name=\"bookmark\" color=\"darkgold\" slot=\"icon-only\"></ion-icon>\n                                        </ion-button> -->\n                                    </ion-buttons>\n\n\n                                    <ion-buttons slot=\"end\">\n                                        <ion-chip mode=\"ios\" color=\"medium\" (click)=\"mglista(publicacion.mglista)\"> {{publicacion.valormg}}</ion-chip>\n                                        <ion-button *ngIf=\"!publicacion.megusta\" (click)=\"megusta(publicacion, 'megusta', o)\">\n                                            <ion-icon name=\"heart-outline\" slot=\"icon-only\"></ion-icon>\n\n                                        </ion-button>\n\n                                        <ion-button *ngIf=\"publicacion.megusta\" (click)=\"megusta(publicacion, 'nomegusta', o)\">\n                                            <ion-icon name=\"heart\" color=\"danger\" slot=\"icon-only\"></ion-icon>\n                                        </ion-button>\n                                    </ion-buttons>\n                                </ion-item>\n\n\n                                <ion-item lines=\"none\" class=\"sinfondo opacity\" *ngIf=\"publicacion.cog\">\n                                    <ion-avatar slot=\"start\" (click)=\"perfilNavegar(publicacion.creadororiginal)\">\n                                        <img [src]=\"publicacion.imageori\" width=\"100%\" height=\"100%\" alt=\"\">\n                                    </ion-avatar>\n                                    <ion-label (click)=\"perfilNavegar(publicacion.creadororiginal)\">{{publicacion.creadororiginal.nombrecompleto}} <br> {{publicacion.creadororiginal.nombreusuario}}</ion-label>\n                                </ion-item>\n                            </div>\n\n                            <div class=\"comentarios\">\n                                <strong class=\"gris espacio\" (click)=\"perfilNavegar(publicacion.creador)\">{{ publicacion.creador.nombreusuario }}</strong>\n                                <span>{{ publicacion.comentario }}</span>\n                            </div>\n\n                            <div class=\"comentar\" (click)=\"comentarios( publicacion, o )\">\n                                <span class=\"opt\">{{publicacion.msg}}</span> <br> Añadir Comentario\n                            </div>\n\n                            <div class=\"fecha \">{{ publicacion.fecha | fecha}}</div>\n                        </div>\n\n                    </div>\n                </div>\n\n\n                <ion-infinite-scroll *ngIf=\"cargainfinite\" #inifinito threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n                    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando publicaciones...\">\n                    </ion-infinite-scroll-content>\n                </ion-infinite-scroll>\n            </ion-slide>\n\n\n            <ion-slide class=\"diapositiva\">\n                <div class=\"blanco\">\n\n\n\n                    <ion-list class=\"blanco \" [@personas]=\"personas.length\">\n\n                        <ion-item color=\"blanco\" *ngFor=\"let persona of personas; let i = index;\" (click)=\"perfilNavegar(persona.usuarioEmisor)\">\n                            <ion-avatar slot=\"start\">\n                                <ion-img src=\"https://motocaliapp.com/{{persona.imagen}}\"></ion-img>\n                            </ion-avatar>\n                            <ion-label class=\"ion-text-wrap\">\n                                <strong class=\"small\">{{persona.usuarioEmisor.nombrecompleto}}</strong><br>\n                                <div>@{{persona.usuarioEmisor.nombreusuario}}</div>\n                            </ion-label>\n                        </ion-item>\n                    </ion-list>\n                </div>\n            </ion-slide>\n\n            <ion-slide class=\"diapositiva\">\n                <div class=\"blanco\">\n\n\n\n                    <ion-list class=\"blanco \" [@personas]=\"personasSeguidas.length\" *ngIf=\"personasSeguidas.length > 0\">\n\n\n\n                        <ion-item lines=\"none\" color=\"blanco\" *ngFor=\"let persona of personasSeguidas; let i = index;\" (click)=\"perfilNavegar(persona.usuarioReceptor)\">\n                            <ion-avatar slot=\"start\">\n                                <ion-img src=\"https://motocaliapp.com/{{persona.imagen}}\"></ion-img>\n                            </ion-avatar>\n                            <ion-label class=\"ion-text-wrap\">\n                                <strong class=\"small\">{{persona.usuarioReceptor.nombrecompleto}}</strong><br>\n                                <div>@{{persona.usuarioReceptor.nombreusuario}}</div>\n                            </ion-label>\n                        </ion-item>\n                    </ion-list>\n                </div>\n\n            </ion-slide>\n\n        </ion-slides>\n    </div>\n\n\n\n</ion-content>\n\n\n\n<ion-content color=\"blanco\" *ngIf=\"red === 'none'\">\n\n\n    <div class=\"main ion-padding\">\n        <h2 class=\"ion-text-center opacity\">\n            Ups! lo sentimos, <br> no tienes acceso a internet\n        </h2> <br>\n\n        <p class=\"ion-text-center\">Te invitamos a que disfrutes de los módulos offline que ofrecemos</p>\n        <br>\n        <ion-button (click)=\"abrirMenu()\" fill=\"outline\" mode=\"ios\" expand=\"block\" shape=\"round\" color=\"success\">Módulos Offline</ion-button>\n\n    </div>\n\n\n\n</ion-content>");

/***/ }),

/***/ "PhDp":
/*!*********************************************************************!*\
  !*** ./src/app/Pages/usuario/perfil-visita/perfil-visita.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contenedor {\n  width: 100%;\n}\n\nion-avatar img {\n  width: 100% !important;\n}\n\n.contenedor .info {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\nion-slides,\nion-slide,\nion-list,\ndiv {\n  width: 100%;\n}\n\n.fullancho2 {\n  min-height: 100%;\n}\n\n.over {\n  overflow-y: scroll;\n}\n\n.diapositiva {\n  width: 100%;\n  max-height: 800px;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n\n.tarjeta {\n  width: 100%;\n  margin: 0px;\n}\n\n.segment div {\n  padding-bottom: 0px;\n  font-size: 11px;\n}\n\n.tarjeta ion-card-content {\n  padding: 0px;\n}\n\n.portada {\n  width: 100%;\n  background-color: #3B4B54;\n  height: 150px;\n  max-height: 150px;\n  position: relative;\n  margin-bottom: 50px;\n}\n\n.fecha {\n  color: #777777;\n  padding: 5px 15px;\n  font-size: 14px;\n  opacity: 0.7;\n}\n\n.boton {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  border-radius: 0 10px 50px 0px;\n  background: rgba(0, 0, 0, 0.7);\n}\n\n.barra {\n  position: absolute;\n  width: 130px;\n  height: 25px;\n  left: 0;\n  bottom: -25px;\n  color: #ffffff;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.ama {\n  background-color: #2C8F53;\n  color: #ffffff;\n}\n\n.rj {\n  background-color: #CA0900;\n  color: #ffffff;\n}\n\n.portada .img {\n  max-height: 150px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n}\n\n.portada .opciones {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  z-index: 10;\n  background-color: rgba(3, 3, 3, 0.3);\n  display: flex;\n  justify-content: flex-end;\n  color: #fff;\n}\n\n.portada .img img {\n  width: 100%;\n}\n\n.avatar {\n  position: absolute;\n  bottom: -50px;\n  left: 50%;\n  transform: translateX(-50%);\n  margin: 0px auto;\n  width: 100px !important;\n  height: 100px !important;\n  background-color: #273238;\n  z-index: 11;\n}\n\n.avatar h3 {\n  color: #fff;\n}\n\n.avatar-peque {\n  margin-left: 8px;\n  width: 30px !important;\n  height: 30px !important;\n}\n\n.avatar-peque img {\n  width: 100% !important;\n  height: 100% !important;\n}\n\n.mensajeCuenta {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.break {\n  white-space: pre-wrap;\n  text-align: justify;\n}\n\n.wrap {\n  word-wrap: break-word;\n}\n\n.up {\n  height: 35px;\n}\n\n.aviso {\n  --background: #FEE491;\n}\n\n.gris {\n  --background: #f9f9f9;\n}\n\n.aviso:hover {\n  --background: #FEE491 !important;\n}\n\n.veh ion-item:nth-child(odd) {\n  --background: #f9f9f9;\n}\n\n.servicio {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.centrarHijo {\n  display: flex;\n  justify-content: center;\n}\n\n.marca {\n  width: 50px;\n  height: 50px;\n  background-color: #e9e9e9;\n  border-radius: 100%;\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.tituloGrande {\n  width: 100%;\n  background: #3B4B54;\n  color: #ffffff;\n  font-weight: 100;\n  text-align: center;\n  padding: 15px;\n}\n\n.servicio ion-card:nth-child(1n) .marca {\n  background-color: #2C8F53;\n  color: #ffffff;\n}\n\n.servicio ion-card-content {\n  font-size: 18px !important;\n}\n\n.per {\n  margin: 50px auto;\n  opacity: 0.5;\n  text-align: center;\n  width: 300px;\n}\n\n.publicaciones {\n  width: 100%;\n  display: flex;\n}\n\n.publicacion {\n  background: #ffffff;\n  border-top: 1px solid rgba(3, 3, 3, 0.1);\n}\n\n.lienzo {\n  padding: 10px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  white-space: pre-wrap;\n  min-height: 300px;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 1.7;\n}\n\n.publicaciones .info {\n  padding: 15px;\n}\n\n.publicaciones ion-avatar img {\n  width: 100%;\n  height: 100%;\n}\n\n.opciones {\n  width: 100%;\n}\n\n.comentarios {\n  text-align: left;\n  padding: 10px;\n  padding-left: 15px;\n  font-weight: 300;\n  line-height: 1.6;\n  font-size: 16px;\n}\n\n.gris {\n  color: #333;\n}\n\n.espacio {\n  padding-right: 10px;\n}\n\n.diapo {\n  background-color: #000000 !important;\n  width: 100%;\n  max-height: calc(100vh - 270px);\n  overflow: hidden;\n  position: relative;\n}\n\n.diapo video {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.diapo .btonDiapo {\n  margin: auto 5%;\n  width: 90%;\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  z-index: 10;\n}\n\n.etiquetas h3 {\n  width: 100px;\n  border-radius: 3px;\n  text-align: center;\n  background-color: #f1f1f1;\n  color: #333333;\n}\n\n.comentar {\n  color: #777777;\n  padding: 5px 15px;\n  font-size: 14px;\n  text-align: left;\n}\n\n.opt {\n  opacity: 0.5;\n}\n\n@media screen and (max-width: 600px) {\n  .contenido {\n    width: 100%;\n  }\n\n  .contenido ion-card {\n    width: calc(90% - 10px);\n  }\n\n  .servicio {\n    justify-content: center;\n  }\n\n  .servicio ion-card {\n    width: calc(90% - 10px);\n    margin: 10px 10px;\n  }\n}\n\n@media screen and (max-width: 1000px) and (min-width: 601px) {\n  .servicio ion-card {\n    width: calc(50% - 10px);\n    margin: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGVyZmlsLXZpc2l0YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBOzs7O0VBSUksV0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLHdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxXQUFBO0VBQ047O0VBQ0U7SUFDSSx1QkFBQTtFQUVOOztFQUFFO0lBQ0ksdUJBQUE7RUFHTjs7RUFERTtJQUNJLHVCQUFBO0lBQ0EsaUJBQUE7RUFJTjtBQUNGOztBQURBO0VBQ0k7SUFDSSx1QkFBQTtJQUNBLFdBQUE7RUFHTjtBQUNGIiwiZmlsZSI6InBlcmZpbC12aXNpdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbmVkb3Ige1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1hdmF0YXIgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yIC5pbmZvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pb24tc2xpZGVzLFxyXG5pb24tc2xpZGUsXHJcbmlvbi1saXN0LFxyXG5kaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mdWxsYW5jaG8yIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5vdmVyIHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLmRpYXBvc2l0aXZhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogODAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnRhcmpldGEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnNlZ21lbnQgZGl2IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi50YXJqZXRhIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4ucG9ydGFkYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQjRCNTQ7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uZmVjaGEge1xyXG4gICAgY29sb3I6ICM3Nzc3Nzc7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG9wYWNpdHk6IC43O1xyXG59XHJcblxyXG4uYm90b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDEwcHggNTBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbn1cclxuXHJcbi5iYXJyYSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAtMjVweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYW1hIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzhGNTM7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnJqIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQTA5MDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnBvcnRhZGEgLmltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBvcnRhZGEgLm9wY2lvbmVzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDMsIDMsIDAuMyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucG9ydGFkYSAuaW1nIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC01MHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MzIzODtcclxuICAgIHotaW5kZXg6IDExO1xyXG59XHJcblxyXG4uYXZhdGFyIGgzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYXZhdGFyLXBlcXVlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hdmF0YXItcGVxdWUgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1lbnNhamVDdWVudGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJyZWFrIHtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi53cmFwIHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuLnVwIHtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuLmF2aXNvIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZFRTQ5MTtcclxufVxyXG5cclxuLmdyaXMge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG59XHJcblxyXG4uYXZpc286aG92ZXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkVFNDkxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52ZWggaW9uLWl0ZW06bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG59XHJcblxyXG4uc2VydmljaW8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmNlbnRyYXJIaWpvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hcmNhIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGl0dWxvR3JhbmRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzNCNEI1NDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5zZXJ2aWNpbyBpb24tY2FyZDpudGgtY2hpbGQoMW4pIC5tYXJjYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkM4RjUzO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5zZXJ2aWNpbyBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGVyIHtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5wdWJsaWNhY2lvbmVzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnB1YmxpY2FjaW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgzLCAzLCAzLCAwLjEpO1xyXG59XHJcblxyXG4ubGllbnpvIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbn1cclxuXHJcbi5wdWJsaWNhY2lvbmVzIC5pbmZvIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5wdWJsaWNhY2lvbmVzIGlvbi1hdmF0YXIgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ub3BjaW9uZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb21lbnRhcmlvcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uZ3JpcyB7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmVzcGFjaW8ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmRpYXBvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDI3MHB4KTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5kaWFwbyB2aWRlbyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZGlhcG8gLmJ0b25EaWFwbyB7XHJcbiAgICBtYXJnaW46IGF1dG8gNSU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uZXRpcXVldGFzIGgzIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxufVxyXG5cclxuLmNvbWVudGFyIHtcclxuICAgIGNvbG9yOiAjNzc3Nzc3O1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ub3B0IHtcclxuICAgIG9wYWNpdHk6IC41O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNvbnRlbmlkbyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY29udGVuaWRvIGlvbi1jYXJkIHtcclxuICAgICAgICB3aWR0aDogY2FsYyg5MCUgLSAxMHB4KTtcclxuICAgIH1cclxuICAgIC5zZXJ2aWNpbyB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuc2VydmljaW8gaW9uLWNhcmQge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDkwJSAtIDEwcHgpO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogMTAwMHB4KSBhbmQgKG1pbi13aWR0aDogNjAxcHgpIHtcclxuICAgIC5zZXJ2aWNpbyBpb24tY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "YGUY":
/*!*********************************************************************!*\
  !*** ./src/app/Pages/usuario/perfil-visita/perfil-visita.module.ts ***!
  \*********************************************************************/
/*! exports provided: PerfilVisitaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilVisitaPageModule", function() { return PerfilVisitaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _perfil_visita_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil-visita.page */ "nCdl");
/* harmony import */ var _Modales_modal_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Modales/modal/modal.page */ "3/e5");
/* harmony import */ var _Modales_modal_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Modales/modal/modal.module */ "Mr3z");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");










const routes = [
    {
        path: '',
        component: _perfil_visita_page__WEBPACK_IMPORTED_MODULE_6__["PerfilVisitaPage"]
    }
];
let PerfilVisitaPageModule = class PerfilVisitaPageModule {
};
PerfilVisitaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _Modales_modal_modal_page__WEBPACK_IMPORTED_MODULE_7__["ModalPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _Modales_modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["ModalPageModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"]
        ],
        declarations: [_perfil_visita_page__WEBPACK_IMPORTED_MODULE_6__["PerfilVisitaPage"]]
    })
], PerfilVisitaPageModule);



/***/ }),

/***/ "nCdl":
/*!*******************************************************************!*\
  !*** ./src/app/Pages/usuario/perfil-visita/perfil-visita.page.ts ***!
  \*******************************************************************/
/*! exports provided: PerfilVisitaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilVisitaPage", function() { return PerfilVisitaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_perfil_visita_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./perfil-visita.page.html */ "2hNS");
/* harmony import */ var _perfil_visita_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil-visita.page.scss */ "PhDp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/Utilidades/LoadingService.service */ "r3ab");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/Api/UsuariosLogin.service */ "oQG1");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../providers/Api/Seguimiento.service */ "Gq8O");
/* harmony import */ var _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../providers/cargas/usuarios.service */ "cb8P");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _providers_Api_Biografia_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../providers/Api/Biografia.service */ "9ucb");
/* harmony import */ var _Modales_modal_modal_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Modales/modal/modal.page */ "3/e5");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../providers/Api/IGTM.service */ "WGaO");
/* harmony import */ var _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../Modales/igtmplantilla/igtmplantilla.page */ "Jmyf");
/* harmony import */ var src_app_Components_modal_megustas_modal_megustas_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/Components/modal-megustas/modal-megustas.component */ "UInZ");



















let PerfilVisitaPage = class PerfilVisitaPage {
    constructor(activeRouter, loading, almacenamiento, usuarioApi, toast, router, seguimientoService, cargarElementos, menuCtrl, popoverCtrl, actionCtrl, biografia, modalCtrl, socket, statusbar, IGTMApi) {
        this.activeRouter = activeRouter;
        this.loading = loading;
        this.almacenamiento = almacenamiento;
        this.usuarioApi = usuarioApi;
        this.toast = toast;
        this.router = router;
        this.seguimientoService = seguimientoService;
        this.cargarElementos = cargarElementos;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.actionCtrl = actionCtrl;
        this.biografia = biografia;
        this.modalCtrl = modalCtrl;
        this.socket = socket;
        this.statusbar = statusbar;
        this.IGTMApi = IGTMApi;
        this.dataUsuario = [];
        this.infoSegment = [];
        this.servicios = [];
        this.contenido = {};
        this.nombreUsuario = '';
        this.Image = '';
        this.role = '';
        this.red = 'wifi';
        // Banderas
        this.solicitudEnviada = false;
        this.estado = 'Seguir Cuenta';
        this.estadoSolicitud = false;
        this.cargarBoton = false; // habilita el estado del botón
        this.segmento = 'info';
        this.ocultar = true;
        // clientes o personas que me siguen 
        this.personas = [];
        this.personasSeguidas = [];
        this.personasTemp = [];
        this.seguidosTemp = [];
        this.scroll = true;
        this.bajando = false;
        this.titulo = 'Perfíl de usuario';
        this.titulo2 = '';
        this.color = 'blanco';
        this.portada = '';
        //
        this.publicaciones = [];
        this.click = false;
        this.cargadentro = false;
        this.over = false;
        this.atrasBoton = false;
        this.cargaTodo = false;
        this.eliminado = false;
        this.cargainfinite = true;
        this.desde = 0;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.publicaciones = [];
        this.desde = 0;
        this.usuario = this.activeRouter.snapshot.paramMap.get('usuario');
        if (this.activeRouter.snapshot.paramMap.get('tipo')) {
            this.atrasBoton = true;
        }
        this.arrancar();
    }
    refrescando(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.desde = 0;
            this.publicaciones = [];
            yield this.arrancar();
            event.detail.complete();
        });
    }
    loadData(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.desde = this.desde + 5;
            // // console.log(this.desde)
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.IGTMApi.leerPublicacionUsuario(info.token, { _id: this.IDreceptor, desde: this.desde }).subscribe((data) => {
                    // // console.log(data);
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
                                            // // // // console.log(res.response.length, 'Bien fotos')
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
                                        // // // // console.log(res, 'Guardado')
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
                                        // // // // console.log(res.response, 'comentarios', item._id)
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
                                // // // // console.log(item._id);
                                // if(item.comentario !== '') {
                                //   let array = item.comentario.split(' ');
                                //   // // // // console.log(array, 'array')
                                //   array = array.map((arr: string) => {
                                //     if (arr.charAt(0) === '@') {
                                //       let viaje = arr.substr(1);
                                //       arr = `<a class="enlace" href="/central/buscar/perfil-visita/${viaje}">${arr}</a>`;
                                //       // // // // console.log(arr);
                                //     }
                                //     return arr;
                                //   })
                                //   array = array.join(' ');
                                //   // // // // console.log(array);
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
                    // // console.log(error)
                    this.toast.alertApplication('No se pudo traer las publicaciones, intentelo más tarde', false);
                });
            }
        });
    }
    publicacion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.IGTMApi.leerPublicacionUsuario(info.token, { _id: this.IDreceptor, desde: this.desde }).subscribe((data) => {
                    // // // console.log(data)
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
                                        // // console.log(res.response.length, 'Bien fotos')
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
                                    // // console.log(res.response, 'comentarios', item._id)
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
                            // // console.log(item._id);
                            // if(item.comentario !== '') {
                            //   let array = item.comentario.split(' ');
                            //   // // console.log(array, 'array')
                            //   array = array.map((arr: string) => {
                            //     if (arr.charAt(0) === '@') {
                            //       let viaje = arr.substr(1);
                            //       arr = `<a class="enlace" href="/central/buscar/perfil-visita/${viaje}">${arr}</a>`;
                            //       // // console.log(arr);
                            //     }
                            //     return arr;
                            //   })
                            //   array = array.join(' ');
                            //   // // console.log(array);
                            //   item.comentario = array;
                            // }
                        }));
                        this.publicaciones = data.response;
                    }
                    else {
                    }
                    this.cargaTodo = true;
                    this.infinite.disabled = false;
                }, (err) => {
                });
            }
        });
    }
    compartir(publicacion) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_17__["IgtmplantillaPage"],
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
                component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_17__["IgtmplantillaPage"],
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
                component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_17__["IgtmplantillaPage"],
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
                    component: _Modales_igtmplantilla_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_17__["IgtmplantillaPage"],
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
    arrancar() {
        this.scroll = true;
        // this.loading.cargaProcesos(`Cargando los datos de ${this.usuario}`).then(() => {
        this.almacenamiento.obtenerToken().then((info) => {
            this.cancelSuscribe = this.usuarioApi.buscarPerfilUsuario(this.usuario, info.token).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.dataUsuario = data.response;
                this.dataUsuario.tokenIDEmisor = info.token;
                // // // console.log(this.dataUsuario, 'Info de todo');
                if (this.dataUsuario.usuario[0].imagen.length > 0) {
                    this.Image = 'https://motocaliapp.com/' + this.dataUsuario.usuario[0].imagen[0].path;
                }
                else {
                    this.Image = 'none';
                }
                this.portada = this.dataUsuario.usuario[0].portada.path;
                this.nombreUsuario = this.dataUsuario.usuario[0].nombrecompleto;
                this.IDreceptor = this.dataUsuario.usuario[0]._id;
                this.role = this.dataUsuario.usuario[0].role;
                // this.loading.finalizarCargado();
                yield this.publicacion();
                yield this.cargarListados(info.token);
                yield this.cargarSolicitud(this.IDreceptor);
                yield this.informacion();
            }), (err) => {
                // this.loading.finalizarCargado();
                this.toast.alertApplication(err, false);
            });
        }).catch((err) => {
            //  this.loading.finalizarCargado();
            this.toast.alertApplication(err, false);
        });
        // });
    }
    cargarListados(token) {
        this.seguimientoService.solicitudesAceptadas(token, this.IDreceptor, '1').subscribe((data) => {
            this.personasTemp = [];
            if (data.response.length > 0) {
                data.response.forEach((item) => {
                    item.imagen = item.usuarioEmisor.imagen[0].path;
                    this.personasTemp.push(item);
                });
                this.solicitudes();
                // // console.log(data.response, 'Bien')
            }
        }, (error) => {
            this.toast.alertApplication('No se pudo traer los usuarios', false);
        });
        this.seguimientoService.solicitudesAceptadasSeguidos(token, this.IDreceptor, '1').subscribe((data) => {
            this.seguidosTemp = [];
            if (data.response.length > 0) {
                // // console.log(data.response, 'Bien 2')
                data.response.forEach((item) => {
                    item.imagen = item.usuarioReceptor.imagen[0].path;
                    this.seguidosTemp.push(item);
                });
                this.seguidos();
            }
        }, (error) => {
            this.toast.alertApplication('No se pudo traer los usuarios', false);
        });
    }
    cargarSolicitud(idReceptor) {
        // // // console.log(idReceptor);
        this.almacenamiento.obtenerToken().then((info) => {
            this.seguimientoService.consultarSolicitud(info.token, idReceptor).subscribe((data) => {
                // // // console.log(data);
                if (data.response.length > 0) {
                    if (data.response[0].estado === 'pendiente') {
                        this.cargarBoton = true;
                        this.solicitudEnviada = true;
                        this.cargarInformacion = false;
                        this.estado = 'Cancelar Solicitud';
                    }
                    else if (data.response[0].estado === 'aceptado') {
                        this.cargarInformacion = true;
                        this.titulo2 = 'Dejar de seguir';
                        this.eliminado = true;
                        this.solicitudEnviada = true;
                    }
                }
                else {
                    this.cargarInformacion = false;
                    this.cargarBoton = true;
                }
            }, (err) => {
                this.toast.alertApplication('No se pudo realizar la petición', false);
            });
        }).catch((err) => {
            this.loading.finalizarCargado();
            this.toast.alertApplication(err, false);
        });
    }
    atras() {
        this.router.navigate(['/central/buscar']);
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
                component: _Modales_modal_modal_page__WEBPACK_IMPORTED_MODULE_13__["ModalPage"],
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
                        this.contenido = dataRetorno.data.contenido;
                        this.servicios = dataRetorno.data.servicios;
                    }
                }
            }
        });
    }
    seguimiento() {
        if (!this.solicitudEnviada) {
            this.almacenamiento.obtenerToken().then((info) => {
                this.estadoSolicitud = true;
                this.seguimientoService.enviarSolicitud({
                    token: info.token,
                    IDreceptor: this.IDreceptor
                }).subscribe((data) => {
                    this.estadoSolicitud = false;
                    this.solicitudEnviada = true;
                    this.estado = 'Cancelar Solicitud';
                    // // console.log(`Data del seguimiento ${data}`);
                }, (error) => {
                    // // console.log(error.message);
                    this.estadoSolicitud = false;
                    this.toast.alertApplication(error.message, false);
                });
            });
        }
        else {
            this.almacenamiento.obtenerToken().then((info) => {
                this.seguimientoService.cancelarSolicitud(info.token, this.IDreceptor, '1').subscribe((data) => {
                    if (this.eliminado) {
                        this.arrancar();
                        this.eliminado = false;
                    }
                    else {
                        this.solicitudEnviada = false;
                        this.estado = 'Seguir Cuenta';
                    }
                }, (error) => {
                    this.toast.alertApplication(error.message, false);
                });
            }).catch((err) => {
                this.loading.finalizarCargado();
                this.toast.alertApplication(err, false);
            });
        }
    }
    solicitudes() {
        this.personas = [];
        this.personasTemp.forEach((item) => {
            this.personas.push(item);
        });
        // // console.log(this.personas, 'personas')
    }
    informacion() {
        this.almacenamiento.obtenerToken().then((info) => {
            this.biografia.getBiografia(info.token, this.IDreceptor).subscribe((data) => {
                // // // console.log(data.response, ' bien todo');
                if (data.response.length > 0) {
                    this.infoSegment = data.response;
                    this.contenido = data.response[0].contenido;
                    this.servicios = data.response[0].servicios;
                }
                // // // console.log(`Estado ${this.estado}`);
            }, (err) => {
                // // // console.log('Error');
                this.infoSegment = [];
            });
        });
    }
    seguidos() {
        this.personasSeguidas = [];
        this.seguidosTemp.forEach((item) => {
            this.personasSeguidas.push(item);
        });
    }
    visitar(usuario) {
        this.router.navigate(['/central/buscar/perfil-visita/', usuario]);
    }
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
    swipeleft(event) {
        // // // console.log('Evento ', event);
        this.toast.alertApplication('Evento deslizar', true);
    }
    abrirMenu() {
        this.menuCtrl.open('perfilMenu');
    }
    opciones() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionCtrl.create({
                translucent: true,
                header: `Que quieres hacer con ${this.nombreUsuario}`,
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
                            this.eliminar();
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
    eliminar() {
        this.almacenamiento.obtenerToken().then((info) => {
            this.seguimientoService.cancelarSolicitud(info.token, this.IDreceptor, '1').subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.cargarBoton = true;
                this.cargarInformacion = false;
                this.solicitudEnviada = false;
            }), () => {
            });
        }).catch((e) => {
        });
    }
    scrollable(event) {
        if (event.detail.scrollTop > 300) {
            // // // console.log('Holaaaaaaaaaaaaaaaa')
            this.over = true;
        }
        else {
            this.over = false;
        }
    }
    mglista(listado) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_Components_modal_megustas_modal_megustas_component__WEBPACK_IMPORTED_MODULE_18__["ModalMegustasComponent"],
                componentProps: {
                    listado: listado
                }
            });
            yield modal.present();
        });
    }
    // Salimos del prfil y cancelamos los suscribe
    ionViewDidLeave() {
        // this.cancelSuscribe.unsuscribe();
        this.scroll = false;
    }
};
PerfilVisitaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__["InicioService"] },
    { type: _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_7__["UsuariosLoginService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_8__["ToastServices"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_9__["ApiSeguimientoService"] },
    { type: _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_10__["CargaElementosUsuariosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ActionSheetController"] },
    { type: _providers_Api_Biografia_service__WEBPACK_IMPORTED_MODULE_12__["BiografiaService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_14__["Socket"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_15__["StatusBar"] },
    { type: _providers_Api_IGTM_service__WEBPACK_IMPORTED_MODULE_16__["IGTMService"] }
];
PerfilVisitaPage.propDecorators = {
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['inifinito', { static: false },] }],
    miSlide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['miSlide', { static: false },] }],
    miContenido: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['miContenido', { static: false },] }]
};
PerfilVisitaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-perfil-visita',
        template: _raw_loader_perfil_visita_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_perfil_visita_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PerfilVisitaPage);



/***/ })

}]);
//# sourceMappingURL=Pages-usuario-perfil-visita-perfil-visita-module.js.map