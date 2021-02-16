(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Mapas-control-mapas-control-mapas-module"],{

/***/ "/JbI":
/*!*****************************************************************!*\
  !*** ./src/app/pages/Mapas/control-mapas/control-mapas.page.ts ***!
  \*****************************************************************/
/*! exports provided: ControlMapasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlMapasPage", function() { return ControlMapasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_control_mapas_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./control-mapas.page.html */ "ySxn");
/* harmony import */ var _control_mapas_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control-mapas.page.scss */ "DtRe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var src_app_providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/Api/UsuariosLogin.service */ "oQG1");
/* harmony import */ var _providers_Api_Mapar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../providers/Api/Mapar.service */ "2c91");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _modal_mapas_modal_mapas_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modal-mapas/modal-mapas.page */ "iM4M");











let ControlMapasPage = class ControlMapasPage {
    constructor(almacenamiento, alertCtrl, apiMapas, apiUsuario, toastService, geoReferencia, modalCtrl, popover, loading) {
        this.almacenamiento = almacenamiento;
        this.alertCtrl = alertCtrl;
        this.apiMapas = apiMapas;
        this.apiUsuario = apiUsuario;
        this.toastService = toastService;
        this.geoReferencia = geoReferencia;
        this.modalCtrl = modalCtrl;
        this.popover = popover;
        this.loading = loading;
        this.cargando = false;
        this.negocios = [];
        this.paises = [];
        this.ciudades = [];
        this.pais = '';
        this.paiss = '';
        this.miciudad = '';
        this.escogidos = [];
        this.ciudad = false;
        this.sedes = [];
        this.imagen = '';
        this.lat = 0;
        this.lng = 0;
        this.mensaje = '';
        this.draggable = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.listarPaises();
        this.listarNegocios();
        //this.traerSedes();
        this.llamarFoto();
        //this.calcular();
    }
    calcular() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingg = yield this.loading.create({
                message: 'Cargando Mapa...',
                spinner: 'circles'
            });
            try {
                yield this.loadingg.present();
                // console.log('entramos al click')
                const data = yield this.geoReferencia.getCurrentPosition({ enableHighAccuracy: true, timeout: 20000 });
                if (data) {
                    // console.log(data);
                    this.lat = data.coords.latitude;
                    this.lng = data.coords.longitude;
                    // this.graficar();
                    this.traerSedes();
                }
                else {
                    yield this.loadingg.dismiss();
                }
            }
            catch (error) {
                yield this.loadingg.dismiss();
                this.toastService.toastError('No se pudo capturar su posición');
            }
        });
    }
    llamarFoto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiUsuario.viewImagen(info.token).subscribe((url) => {
                    // // // console.log(url);
                    this.imagen = `https://motocaliapp.com/${url.paquete}`;
                    // console.log(this.imagen)
                    this.calcular();
                }, (error) => {
                    // // // console.log(error);
                });
            }
        });
    }
    graficar() {
        // console.log('Bien');
        mapboxgl.accessToken = 'pk.eyJ1Ijoic2FudGlhZ29mZXJuYW5kZXpkZXYiLCJhIjoiY2tmYmh6cXdzMDM0bDJ2cHRucTI4cHpkaSJ9.-01EYvsLdJOU1Oy4BtwBwA';
        const mapa = new mapboxgl.Map({
            container: this.mapa.nativeElement,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.lng, this.lat],
            zoom: 11
        });
        mapa.addControl(new mapboxgl.NavigationControl());
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = 'url(/assets/Marcador.png)';
        el.style.backgroundSize = '100%';
        el.style.width = 50 + 'px';
        el.style.height = 70 + 'px';
        const marker = new mapboxgl.Marker({
            element: el,
            draggable: false
        })
            .setLngLat([this.lng, this.lat])
            .addTo(mapa);
        this.sedes.forEach((sede) => {
            const imagen = sede.creador.imagen.length > 0 ? 'https://motocaliapp.com/' + sede.creador.imagen[0].path : '/assets/Punto.png';
            const miSede = document.createElement('div');
            miSede.className = 'marker';
            miSede.style.backgroundImage = 'url(' + imagen + ')';
            miSede.style.backgroundSize = '100%';
            miSede.style.width = 50 + 'px';
            miSede.style.height = 50 + 'px';
            const markerSede = new mapboxgl.Marker({
                element: miSede,
                draggable: false
            })
                .setLngLat([sede.ubicacion.lng, sede.ubicacion.lat])
                .addTo(mapa);
            miSede.addEventListener('click', () => {
                // console.log(sede);
                this.miModal(sede, 1);
            });
        });
        this.loading.dismiss();
    }
    traerSedes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiMapas.buscarSedes(info.token, { ciudad: false, pais: false, filtros: false }).subscribe((data) => {
                    if (data) {
                        // console.log(data.response);
                        this.sedes = data.response;
                        this.graficar();
                    }
                    else {
                        this.toastService.toastError('No se pudo traer las sedes, inténtelo más tarde');
                    }
                }, (err) => {
                    this.toastService.toastError('No se pudo traer las sedes, inténtelo más tarde');
                });
            }
        });
    }
    listarNegocios() {
        this.apiUsuario.negocios().subscribe((data) => {
            if (data.exe) {
                data.response.forEach((item) => {
                    item.checked = false;
                });
                this.negocios = data.response;
            }
            else {
                this.negocios.push('Taller Mécanico');
            }
        }, (err) => {
            this.negocios.push('Taller Mécanico');
        });
    }
    listarPaises() {
        this.apiUsuario.listarPaises().subscribe((data) => {
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
    listarCiudades(event, opt) {
        // console.log(event.detail)
        this.pais = event.detail.value.nombre;
        this.miciudad = '';
        this.cargando = true;
        this.apiUsuario.listarCiudades(event.detail.value._id).subscribe((data) => {
            if (data.exe) {
                this.ciudades = data.response;
                this.ciudad = true;
                if (opt) {
                }
            }
            else {
                this.toastService.toastError('No se pudo traer las ciudades, intente registrarse más tarde');
            }
            this.cargando = false;
        }, (err) => {
            this.toastService.toastError('No se pudo traer las ciudades, intente registrarse más tarde');
            this.cargando = false;
        });
    }
    seleccionarCiudad(event) {
        this.miciudad = event.detail.value;
    }
    miModal(sede, vista) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_mapas_modal_mapas_page__WEBPACK_IMPORTED_MODULE_10__["ModalMapasPage"],
                componentProps: {
                    info: sede,
                    vista
                }
            });
            yield modal.present();
        });
    }
    filtrar(evet) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popov = yield this.popover.create({
                component: _modal_mapas_modal_mapas_page__WEBPACK_IMPORTED_MODULE_10__["ModalMapasPage"],
                componentProps: {
                    vista: 2
                },
                event: evet
            });
            yield popov.present();
            const res = yield popov.onWillDismiss();
            if (res) {
                if (res.data) {
                    const ciudad = res.data.ciudad ? res.data.ciudad : false;
                    const pais = res.data.pais ? res.data.pais : false;
                    // console.log(res.data);
                    const info = yield this.almacenamiento.obtenerToken();
                    if (info) {
                        const loading = yield this.loading.create({
                            message: 'Cargando Mapa...',
                            spinner: 'circles'
                        });
                        yield loading.present();
                        this.apiMapas.buscarSedes(info.token, { ciudad, pais, filtros: true, negocios: res.data.arreglo }).subscribe((data) => {
                            if (data) {
                                // console.log(data.response);
                                this.sedes = data.response;
                                this.graficar();
                            }
                            else {
                                this.toastService.toastError('No se pudo traer las sedes, inténtelo más tarde');
                            }
                        }, (err) => {
                            this.toastService.toastError('No se pudo traer las sedes, inténtelo más tarde');
                        });
                    }
                }
            }
        });
    }
    ionViewWillLeave() {
        this.loadingg.dismiss();
    }
};
ControlMapasPage.ctorParameters = () => [
    { type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__["InicioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _providers_Api_Mapar_service__WEBPACK_IMPORTED_MODULE_8__["MapasService"] },
    { type: src_app_providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_7__["UsuariosLoginService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_9__["ToastServices"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
ControlMapasPage.propDecorators = {
    mapa: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['mapa',] }]
};
ControlMapasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-control-mapas',
        template: _raw_loader_control_mapas_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_control_mapas_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ControlMapasPage);



/***/ }),

/***/ "DQtl":
/*!***************************************************************************!*\
  !*** ./src/app/pages/Mapas/control-mapas/control-mapas-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ControlMapasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlMapasPageRoutingModule", function() { return ControlMapasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _control_mapas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control-mapas.page */ "/JbI");




const routes = [
    {
        path: '',
        component: _control_mapas_page__WEBPACK_IMPORTED_MODULE_3__["ControlMapasPage"]
    }
];
let ControlMapasPageRoutingModule = class ControlMapasPageRoutingModule {
};
ControlMapasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ControlMapasPageRoutingModule);



/***/ }),

/***/ "DtRe":
/*!*******************************************************************!*\
  !*** ./src/app/pages/Mapas/control-mapas/control-mapas.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flexbet {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.mapa {\n  width: 100%;\n  height: 100%;\n  background-color: #f3f3f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29udHJvbC1tYXBhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUNKIiwiZmlsZSI6ImNvbnRyb2wtbWFwYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXhiZXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hcGEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG59Il19 */");

/***/ }),

/***/ "alRM":
/*!*******************************************************************!*\
  !*** ./src/app/pages/Mapas/control-mapas/control-mapas.module.ts ***!
  \*******************************************************************/
/*! exports provided: ControlMapasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlMapasPageModule", function() { return ControlMapasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _control_mapas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./control-mapas-routing.module */ "DQtl");
/* harmony import */ var _control_mapas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./control-mapas.page */ "/JbI");
/* harmony import */ var _modal_mapas_modal_mapas_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal-mapas/modal-mapas.page */ "iM4M");
/* harmony import */ var _modal_mapas_modal_mapas_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-mapas/modal-mapas.module */ "utQI");









let ControlMapasPageModule = class ControlMapasPageModule {
};
ControlMapasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _modal_mapas_modal_mapas_page__WEBPACK_IMPORTED_MODULE_7__["ModalMapasPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _control_mapas_routing_module__WEBPACK_IMPORTED_MODULE_5__["ControlMapasPageRoutingModule"],
            _modal_mapas_modal_mapas_module__WEBPACK_IMPORTED_MODULE_8__["ModalMapasPageModule"]
        ],
        declarations: [_control_mapas_page__WEBPACK_IMPORTED_MODULE_6__["ControlMapasPage"]]
    })
], ControlMapasPageModule);



/***/ }),

/***/ "ySxn":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Mapas/control-mapas/control-mapas.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"oscuro\">\n        <ion-back-button slot=\"start\" icon=\"chevron-back-outline\" defaultHref=\"/central/menu/inicioMapa\"></ion-back-button>\n        <ion-title>Ver Negocios</ion-title>\n\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"filtrar( $event )\">\n                <ion-icon name=\"caret-down-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"mapa\" #mapa></div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=Mapas-control-mapas-control-mapas-module.js.map