(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-Santiago-historias-modal-historias-modal-module"],{

/***/ "4kKk":
/*!************************************************************************!*\
  !*** ./src/app/Pages/Santiago/historias-modal/historias-modal.page.ts ***!
  \************************************************************************/
/*! exports provided: HistoriasModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriasModalPage", function() { return HistoriasModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_historias_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./historias-modal.page.html */ "L/W/");
/* harmony import */ var _historias_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./historias-modal.page.scss */ "6hyz");
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

/***/ "6hyz":
/*!**************************************************************************!*\
  !*** ./src/app/Pages/Santiago/historias-modal/historias-modal.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contenedor {\n  width: 100%;\n  min-height: 100vh;\n  height: auto;\n}\n\n.encabezado {\n  width: 100%;\n  padding: 5px 10px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  font-size: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 10;\n  touch-action: auto !important;\n}\n\n.pie {\n  width: 100%;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  font-size: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 10;\n}\n\n.pie .data {\n  width: 150px;\n  background: #333333;\n  color: #ffffff !important;\n  text-align: center;\n  padding: 5px 10px;\n  font-size: 14px;\n}\n\n.encabezado .data {\n  width: 80%;\n  display: flex;\n  align-items: center;\n  color: #ffffff;\n}\n\n.encabezado .data .titulo {\n  padding-left: 10px;\n  text-align: left;\n}\n\n.encabezado .data span {\n  font-size: 14px;\n  font-weight: normal;\n}\n\n.encabezado .data strong {\n  font-size: 12px;\n}\n\nion-slides {\n  width: 100%;\n  min-height: 100vh;\n  height: auto;\n}\n\nion-slide {\n  width: 100%;\n  height: 100%;\n}\n\nion-slide ion-slides {\n  width: 100%;\n  height: 100vh;\n}\n\n.one {\n  height: 100vh !important;\n}\n\n.sl {\n  width: 100%;\n  min-height: 100%;\n  height: auto;\n}\n\n.sl ion-slide {\n  width: 100%;\n  max-width: 600px;\n  margin: auto;\n  height: 100%;\n  position: relative;\n}\n\n.sl ion-slide img {\n  width: 100%;\n}\n\n.texto h3 {\n  font-size: 22px;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  font-weight: bold;\n}\n\n.etiquetados {\n  width: 100%;\n  height: 100%;\n  padding: 5px 10px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  font-size: 20px;\n  z-index: 20;\n  background: #3B4B54;\n}\n\n.etiquetados ion-list {\n  background: #3B4B54;\n}\n\n.etiquetados .dataa {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.etiquetados .dataa .cerrarr {\n  text-align: right;\n  color: #ffffff;\n  z-index: 30;\n  font-size: 18px;\n  padding: 5px;\n}\n\n.etiquetados .dataa .com {\n  margin-top: 50px;\n  color: #ffffff;\n  font-size: 16px;\n  padding: 10px;\n}\n\n.cc {\n  background: #536169;\n  color: #cccccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGlzdG9yaWFzLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoiaGlzdG9yaWFzLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5lZG9yIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5lbmNhYmV6YWRvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICB0b3VjaC1hY3Rpb246IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBpZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLnBpZSAuZGF0YSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZW5jYWJlemFkbyAuZGF0YSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmVuY2FiZXphZG8gLmRhdGEgLnRpdHVsbyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uZW5jYWJlemFkbyAuZGF0YSBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5lbmNhYmV6YWRvIC5kYXRhIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuaW9uLXNsaWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5pb24tc2xpZGUgaW9uLXNsaWRlcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5vbmUge1xyXG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2wge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uc2wgaW9uLXNsaWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNsIGlvbi1zbGlkZSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50ZXh0byBoMyB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmV0aXF1ZXRhZG9zIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgYmFja2dyb3VuZDogIzNCNEI1NDtcclxufVxyXG5cclxuLmV0aXF1ZXRhZG9zIGlvbi1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6ICMzQjRCNTQ7XHJcbn1cclxuXHJcbi5ldGlxdWV0YWRvcyAuZGF0YWEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5ldGlxdWV0YWRvcyAuZGF0YWEgLmNlcnJhcnIge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHotaW5kZXg6IDMwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uZXRpcXVldGFkb3MgLmRhdGFhIC5jb20ge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmNjIHtcclxuICAgIGJhY2tncm91bmQ6ICM1MzYxNjk7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxufSJdfQ== */");

/***/ }),

/***/ "L/W/":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Santiago/historias-modal/historias-modal.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"darkgold\">\n    <ion-slides #miSlide *ngIf=\"cargo\" [options]=\"slideopts\">\n        <ion-slide class=\"red\" *ngFor=\"let historia of historiasbase; let i = index;\">\n\n\n            <ion-slides #slide class=\"sl\" [options]=\"opt\">\n                <ion-slide *ngFor=\"let ht of historia; let a = index;\" [class.one]=\"historia.length === 1\" style=\"{{ ht | colores }}\" (swipe)=\"saludar(i, a)\">\n\n\n                    <div class=\"encabezado\">\n                        <div class=\"data\">\n                            <ion-avatar>\n                                <img src=\"{{historia[0].image}}\" alt=\"\">\n                            </ion-avatar>\n                            <div class=\"titulo\">\n                                <span>{{ info.nombre }}</span> <br>\n                                <strong>@{{ info.usuario }}</strong>\n                            </div>\n                        </div>\n                        <h1 (click)=\"cerrar(i, a)\">x</h1>\n                    </div>\n                    <div class=\"texto\" *ngIf=\"ht.tipo === 'dibujar'\">\n                        <h3>{{ ht.dibujo.texto }}</h3>\n                    </div>\n\n                    <img *ngIf=\"ht.tipo === 'multimedia'\" src=\"https://www.motocaliapp.com/11927613401/{{ht.archivos[0].ruta}}\" alt=\"\">\n\n                    <div class=\"pie\" *ngIf=\"ht.comentario !== '' || ht.etiquetas.length > 0\">\n                        <div class=\"data\" (click)=\"abrir(i, a)\">\n                            Ver más...\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"ht.etiqueta\" class=\"etiquetados\">\n\n                        <div class=\"dataa\">\n                            <div class=\"cerrarr\" (click)=\"cerrar2(i, a)\">x</div>\n                            <div class=\"com\">{{ ht.comentario }}</div>\n                            <ion-list *ngIf=\"ht.etiquetas.length > 0\">\n                                <ion-item-divider class=\"cc\">Usuarios etiquetados</ion-item-divider>\n                                <ion-item color=\"oscuro\" *ngFor=\"let persona of ht.etiquetas\" (click)=\"perfilNavegar(persona.nombreusuario)\">\n                                    <ion-avatar slot=\"start\">\n                                        <img src=\"https://www.motocaliapp.com/{{persona.imagen[0].path}}\">\n                                    </ion-avatar>\n                                    <ion-label>\n                                        <div>{{persona.nombrecompleto}}</div>\n                                        <strong>@{{persona.nombreusuario}}</strong>\n                                    </ion-label>\n                                </ion-item>\n                            </ion-list>\n                        </div>\n                    </div>\n                </ion-slide>\n            </ion-slides>\n\n\n        </ion-slide>\n    </ion-slides>\n\n</ion-content>");

/***/ }),

/***/ "Qv/D":
/*!**************************************************************************!*\
  !*** ./src/app/Pages/Santiago/historias-modal/historias-modal.module.ts ***!
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
/* harmony import */ var _historias_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./historias-modal-routing.module */ "WycC");
/* harmony import */ var _historias_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./historias-modal.page */ "4kKk");
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

/***/ "WycC":
/*!**********************************************************************************!*\
  !*** ./src/app/Pages/Santiago/historias-modal/historias-modal-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: HistoriasModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriasModalPageRoutingModule", function() { return HistoriasModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _historias_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./historias-modal.page */ "4kKk");




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



/***/ })

}]);
//# sourceMappingURL=Pages-Santiago-historias-modal-historias-modal-module.js.map