(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Mapas-grua-grua-module"],{

/***/ "+InX":
/*!***********************************************!*\
  !*** ./src/app/pages/Mapas/grua/grua.page.ts ***!
  \***********************************************/
/*! exports provided: GruaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruaPage", function() { return GruaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_grua_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./grua.page.html */ "r53s");
/* harmony import */ var _grua_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grua.page.scss */ "hKpx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Api/UsuariosLogin.service */ "oQG1");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../providers/Utilidades/LoadingService.service */ "r3ab");
/* harmony import */ var _modal_mapas_modal_mapas_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modal-mapas/modal-mapas.page */ "iM4M");













let GruaPage = class GruaPage {
    constructor(alertCtrl, geoReferencia, usuaripService, almacenamiento, statusbar, router, toast, loading, modalCtrl) {
        this.alertCtrl = alertCtrl;
        this.geoReferencia = geoReferencia;
        this.usuaripService = usuaripService;
        this.almacenamiento = almacenamiento;
        this.statusbar = statusbar;
        this.router = router;
        this.toast = toast;
        this.loading = loading;
        this.modalCtrl = modalCtrl;
        this.lat = 0;
        this.lng = 0;
        this.mensaje = '';
        this.imagen = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.statusbar.backgroundColorByHexString('#273238');
        this.llamarFoto();
        this.confirmarUbicacion();
    }
    confirmarUbicacion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Mensaje de la App',
                message: 'Permitir compartir la ubciación para realizar esta acción',
                backdropDismiss: false,
                buttons: [
                    {
                        role: 'cancel',
                        text: 'Cancelar',
                        handler: () => {
                            this.toast.toastNotificacion('No se puede realizar la acción debido a no compartir la ubicación', 3000);
                            this.router.navigate(['/central/menu/inicioMapa']);
                        }
                    },
                    {
                        text: 'Permitir',
                        handler: () => {
                            this.calcular();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    calcular() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                console.log('entramos al click');
                const data = yield this.geoReferencia.getCurrentPosition();
                if (data) {
                    console.log(data);
                    this.lat = data.coords.latitude;
                    this.lng = data.coords.longitude;
                    this.graficar();
                }
            }
            catch (error) {
                this.mensaje = error;
            }
        });
    }
    llamarFoto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.usuaripService.viewImagen(info.token).subscribe((url) => {
                    // // console.log(url);
                    this.imagen = `https://motocaliapp.com/${url.paquete}`;
                    console.log(this.imagen);
                }, (error) => {
                    // // console.log(error);
                });
            }
        });
    }
    graficar() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoic2FudGlhZ29mZXJuYW5kZXpkZXYiLCJhIjoiY2tmYmh6cXdzMDM0bDJ2cHRucTI4cHpkaSJ9.-01EYvsLdJOU1Oy4BtwBwA';
        const mapa = new mapboxgl.Map({
            container: this.mapa.nativeElement,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.lng, this.lat],
            zoom: 15
        });
        mapa.addControl(new mapboxgl.NavigationControl());
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = 'url(' + this.imagen + ')';
        el.style.backgroundSize = '100%';
        el.style.width = 50 + 'px';
        el.style.height = 50 + 'px';
        const marker = new mapboxgl.Marker({
            element: el,
            draggable: true
        })
            .setLngLat([this.lng, this.lat])
            .addTo(mapa);
        const el2 = document.createElement('div');
        el2.className = 'marker';
        el2.style.backgroundImage = 'url(' + this.imagen + ')';
        el2.style.backgroundSize = '100%';
        el2.style.width = 50 + 'px';
        el2.style.height = 50 + 'px';
        marker.on('dragend', () => {
            const lngLat = marker.getLngLat();
            console.log('Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat);
        });
        const marker2 = new mapboxgl.Marker({
            element: el2,
            draggable: true
        })
            .setLngLat([-76.49279796685475, 3.4727944759127922])
            .addTo(mapa);
        marker2.on('dragend', () => {
            const lngLat = marker2.getLngLat();
            console.log('Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat);
        });
    }
    modal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_mapas_modal_mapas_page__WEBPACK_IMPORTED_MODULE_12__["ModalMapasPage"],
                componentProps: {}
            });
            yield modal.present();
        });
    }
    ionViewWillLeave() {
        this.statusbar.backgroundColorByHexString('#777777');
    }
};
GruaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_6__["UsuariosLoginService"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__["InicioService"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_10__["ToastServices"] },
    { type: _providers_Utilidades_LoadingService_service__WEBPACK_IMPORTED_MODULE_11__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
GruaPage.propDecorators = {
    mapa: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['mapa',] }]
};
GruaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-grua',
        template: _raw_loader_grua_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_grua_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GruaPage);



/***/ }),

/***/ "OxdS":
/*!*********************************************************!*\
  !*** ./src/app/pages/Mapas/grua/grua-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: GruaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruaPageRoutingModule", function() { return GruaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _grua_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grua.page */ "+InX");




const routes = [
    {
        path: '',
        component: _grua_page__WEBPACK_IMPORTED_MODULE_3__["GruaPage"]
    }
];
let GruaPageRoutingModule = class GruaPageRoutingModule {
};
GruaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GruaPageRoutingModule);



/***/ }),

/***/ "flfU":
/*!*************************************************!*\
  !*** ./src/app/pages/Mapas/grua/grua.module.ts ***!
  \*************************************************/
/*! exports provided: GruaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruaPageModule", function() { return GruaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _grua_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grua-routing.module */ "OxdS");
/* harmony import */ var _grua_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grua.page */ "+InX");
/* harmony import */ var _modal_mapas_modal_mapas_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal-mapas/modal-mapas.page */ "iM4M");
/* harmony import */ var _modal_mapas_modal_mapas_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-mapas/modal-mapas.module */ "utQI");









let GruaPageModule = class GruaPageModule {
};
GruaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _modal_mapas_modal_mapas_page__WEBPACK_IMPORTED_MODULE_7__["ModalMapasPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _grua_routing_module__WEBPACK_IMPORTED_MODULE_5__["GruaPageRoutingModule"],
            _modal_mapas_modal_mapas_module__WEBPACK_IMPORTED_MODULE_8__["ModalMapasPageModule"]
        ],
        declarations: [_grua_page__WEBPACK_IMPORTED_MODULE_6__["GruaPage"]]
    })
], GruaPageModule);



/***/ }),

/***/ "hKpx":
/*!*************************************************!*\
  !*** ./src/app/pages/Mapas/grua/grua.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mapa {\n  width: 100%;\n  height: 100%;\n  background-color: #f3f3f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ3J1YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQ0oiLCJmaWxlIjoiZ3J1YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbn0iXX0= */");

/***/ }),

/***/ "r53s":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Mapas/grua/grua.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"oscuro\">\n        <ion-back-button slot=\"start\" icon=\"chevron-back-outline\" defaultHref=\"/central/menu/inicioMapa\"></ion-back-button>\n        <ion-title>Sistema de Grúa</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"modal()\">\n                <ion-icon name=\"add-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"mapa\" #mapa>\n\n    </div>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=Mapas-grua-grua-module.js.map