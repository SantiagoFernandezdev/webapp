(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Mapas-sedes-mapa-sedes-mapa-module"],{

/***/ "1IfV":
/*!***************************************************************!*\
  !*** ./src/app/pages/Mapas/mapaeditable/mapaeditable.page.ts ***!
  \***************************************************************/
/*! exports provided: MapaeditablePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaeditablePage", function() { return MapaeditablePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mapaeditable_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mapaeditable.page.html */ "8GSD");
/* harmony import */ var _mapaeditable_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapaeditable.page.scss */ "lujK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var src_app_providers_Api_Mapar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/Api/Mapar.service */ "2c91");
/* harmony import */ var src_app_providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/Api/UsuariosLogin.service */ "oQG1");
/* harmony import */ var src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/Utilidades/ToastService.service */ "fmoy");










let MapaeditablePage = class MapaeditablePage {
    constructor(almacenamiento, alertCtrl, apiMapas, apiUsuario, toastService, geoReferencia, modalCtrl) {
        this.almacenamiento = almacenamiento;
        this.alertCtrl = alertCtrl;
        this.apiMapas = apiMapas;
        this.apiUsuario = apiUsuario;
        this.toastService = toastService;
        this.geoReferencia = geoReferencia;
        this.modalCtrl = modalCtrl;
        this.mensaje = '';
        this.draggable = true;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        // console.log(this.lat, this.lng, 'data', this.editable)
        if (this.primero) {
            this.configurar();
        }
        else {
            if (!this.editable) {
                this.draggable = false;
                setTimeout(() => {
                    this.graficar();
                }, 1000);
            }
            else {
                this.configurar();
            }
        }
    }
    cerrar() {
        this.modalCtrl.dismiss();
    }
    calcular() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // console.log('entramos al click')
                // tslint:disable-next-line:max-line-length
                const data = yield this.geoReferencia.getCurrentPosition({ enableHighAccuracy: true, timeout: 20000 });
                if (data) {
                    // console.log(data);
                    this.lat = data.coords.latitude;
                    this.lng = data.coords.longitude;
                    this.graficar();
                }
            }
            catch (error) {
                this.mensaje = error;
                this.toastService.toastError('No se pudo captruar su ubicación, verifique que el GPS este prendido o inténtelo más tarde');
                this.modalCtrl.dismiss();
            }
        });
    }
    configurar() {
        // tslint:disable-next-line:max-line-length
        if (this.ncompleto !== '' && this.pais !== '' && this.miciudad !== '' && this.escogidos.length > 0 && this.de !== '' && this.a !== '' && this.desde !== '' && this.hasta !== '') {
            // console.log('entramos a configurar')
            if (this.editable) {
                setTimeout(() => {
                    this.graficar();
                }, 1000);
            }
            else {
                this.calcular();
            }
        }
        else {
            this.toastService.toastError('Hay datos que no se han diligenciado correctamente');
        }
    }
    graficar() {
        // console.log('Bien');
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
            draggable: this.draggable
        })
            .setLngLat([this.lng, this.lat])
            .addTo(mapa);
        marker.on('dragend', () => {
            const lngLat = marker.getLngLat();
            this.lat = lngLat.lat;
            this.lng = lngLat.lng;
            // console.log('Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat)
        });
    }
    guardar2() {
        if (this.primero && !this.editable) {
            this.guardar();
        }
        else if (this.editable) {
            this.editarGuardar();
        }
    }
    editarGuardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                // tslint:disable-next-line:max-line-length
                this.apiMapas.editarSede(info.token, { ubicacion: { lat: this.lat, lng: this.lng }, nombre: this.ncompleto, tipo: this.escogidos, pais: this.pais, ciudad: this.miciudad, _id: this.id, desde: this.desde, hasta: this.hasta, de: this.de, a: this.a }).subscribe((data) => {
                    if (data.exe) {
                        this.toastService.toastExitoso('Sede editada');
                    }
                    else {
                        this.toastService.toastError('No se pudo editar la sede, inténtelo más tarde');
                    }
                    this.modalCtrl.dismiss();
                }, (err) => {
                    this.modalCtrl.dismiss();
                    this.toastService.toastError('No se pudo editar la sede, inténtelo más tarde');
                });
            }
        });
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                // tslint:disable-next-line:max-line-length
                this.apiMapas.crearSede(info.token, { ubicacion: { lat: this.lat, lng: this.lng }, nombre: this.ncompleto, tipo: this.escogidos, pais: this.pais, ciudad: this.miciudad, desde: this.desde, hasta: this.hasta, de: this.de, a: this.a }).subscribe((data) => {
                    if (data) {
                        this.toastService.toastExitoso('Sede creada');
                    }
                    else {
                        this.toastService.toastError('No se pudo crear la sede, inténtelo más tarde');
                    }
                    this.modalCtrl.dismiss();
                }, (err) => {
                    this.modalCtrl.dismiss();
                    this.toastService.toastError('No se pudo crear la sede, inténtelo más tarde');
                });
            }
        });
    }
};
MapaeditablePage.ctorParameters = () => [
    { type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__["InicioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_providers_Api_Mapar_service__WEBPACK_IMPORTED_MODULE_7__["MapasService"] },
    { type: src_app_providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_8__["UsuariosLoginService"] },
    { type: src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_9__["ToastServices"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
MapaeditablePage.propDecorators = {
    lng: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    lat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    ncompleto: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    pais: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    miciudad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    escogidos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    de: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    a: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    desde: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    hasta: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    primero: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    imagen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    imagenLocal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    mapa: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['mapa',] }]
};
MapaeditablePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mapaeditable',
        template: _raw_loader_mapaeditable_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mapaeditable_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MapaeditablePage);



/***/ }),

/***/ "4frP":
/*!*************************************************************!*\
  !*** ./src/app/pages/Mapas/sedes-mapa/sedes-mapa.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".amrillo {\n  --background: #FBF6D8 !important;\n}\n\n.flexbet {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.mapa {\n  width: 100%;\n  height: 100%;\n  background-color: #f3f3f3;\n  opacity: 0;\n}\n\n.visible {\n  opacity: 1;\n}\n\n.avatar {\n  width: 50px;\n  height: 60px;\n}\n\n.avatar img {\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2VkZXMtbWFwYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InNlZGVzLW1hcGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFtcmlsbG8ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkJGNkQ4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4YmV0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXBhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi52aXNpYmxlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5hdmF0YXIgaW1nIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG59Il19 */");

/***/ }),

/***/ "6G9z":
/*!*****************************************************************!*\
  !*** ./src/app/pages/Mapas/mapaeditable/mapaeditable.module.ts ***!
  \*****************************************************************/
/*! exports provided: MapaeditablePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaeditablePageModule", function() { return MapaeditablePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _mapaeditable_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapaeditable-routing.module */ "OEO3");
/* harmony import */ var _mapaeditable_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapaeditable.page */ "1IfV");







let MapaeditablePageModule = class MapaeditablePageModule {
};
MapaeditablePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mapaeditable_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapaeditablePageRoutingModule"]
        ],
        declarations: [_mapaeditable_page__WEBPACK_IMPORTED_MODULE_6__["MapaeditablePage"]]
    })
], MapaeditablePageModule);



/***/ }),

/***/ "7x0z":
/*!*********************************************************************!*\
  !*** ./src/app/pages/Mapas/sedes-mapa/sedes-mapa-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SedesMapaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SedesMapaPageRoutingModule", function() { return SedesMapaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sedes_mapa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sedes-mapa.page */ "BVrX");




const routes = [
    {
        path: '',
        component: _sedes_mapa_page__WEBPACK_IMPORTED_MODULE_3__["SedesMapaPage"]
    }
];
let SedesMapaPageRoutingModule = class SedesMapaPageRoutingModule {
};
SedesMapaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SedesMapaPageRoutingModule);



/***/ }),

/***/ "8GSD":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Mapas/mapaeditable/mapaeditable.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"oscuro\">\n        <ion-title>Mapa</ion-title>\n\n        <ion-buttons slot=\"end\">\n\n            <ion-button *ngIf=\"editable || primero\" (click)=\"guardar2()\">\n                <ion-icon name=\"checkmark-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n\n            <ion-button (click)=\"cerrar()\">\n                <ion-icon name=\"close-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"mapa\" #mapa>\n\n    </div>\n\n</ion-content>");

/***/ }),

/***/ "BVrX":
/*!***********************************************************!*\
  !*** ./src/app/pages/Mapas/sedes-mapa/sedes-mapa.page.ts ***!
  \***********************************************************/
/*! exports provided: SedesMapaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SedesMapaPage", function() { return SedesMapaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sedes_mapa_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sedes-mapa.page.html */ "br0y");
/* harmony import */ var _sedes_mapa_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sedes-mapa.page.scss */ "4frP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_providers_Api_Mapar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/Api/Mapar.service */ "2c91");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../providers/Api/UsuariosLogin.service */ "oQG1");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _mapaeditable_mapaeditable_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mapaeditable/mapaeditable.page */ "1IfV");











let SedesMapaPage = class SedesMapaPage {
    constructor(almacenamiento, alertCtrl, apiMapas, apiUsuario, toastService, geoReferencia, modalCtrl) {
        this.almacenamiento = almacenamiento;
        this.alertCtrl = alertCtrl;
        this.apiMapas = apiMapas;
        this.apiUsuario = apiUsuario;
        this.toastService = toastService;
        this.geoReferencia = geoReferencia;
        this.modalCtrl = modalCtrl;
        this.cargando = false;
        this.primero = false;
        this.vista = 3;
        this.negocios = [];
        this.paises = [];
        this.ciudades = [];
        this.pais = '';
        this.paiss = '';
        this.miciudad = '';
        this.escogidos = [];
        this.ciudad = false;
        this.ncompleto = '';
        this.sedes = [];
        this.imagen = '';
        this.lat = 0;
        this.lng = 0;
        this.mensaje = '';
        this.draggable = true;
        this.editable = false;
        this.id = '';
        this.imagenLocal = '';
        this.hasta = '';
        this.desde = '';
        this.de = '';
        this.a = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.vista = 1;
        this.listarPaises();
        this.listarNegocios();
        this.traerSedes();
        this.llamarFoto();
    }
    llamarFoto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiUsuario.viewImagen(info.token).subscribe((url) => {
                    // // // console.log(url);
                    this.imagen = `https://motocaliapp.com/${url.paquete}`;
                    this.imagenLocal = url.paquete;
                    // console.log(this.imagen)
                }, (error) => {
                    // // // console.log(error);
                });
            }
        });
    }
    traerSedes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiMapas.traerSedes(info.token, {}).subscribe((data) => {
                    if (data) {
                        this.sedes = data.response;
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
    agregarNegocios(event) {
        if (event.detail.checked) {
            if (!this.escogidos.find((item) => item === event.detail.value)) {
                this.escogidos.push(event.detail.value);
            }
        }
        else {
            this.escogidos = this.escogidos.filter((item) => item !== event.detail.value);
        }
        // console.log(this.escogidos);
    }
    configurar() {
        // tslint:disable-next-line:max-line-length
        if (this.ncompleto !== '' && this.pais !== '' && this.miciudad !== '' && this.escogidos.length > 0 && this.de !== '' && this.a !== '' && this.desde !== '' && this.hasta !== '') {
            this.vista = 3;
            this.primero = true;
            this.abrirModal();
        }
        else {
            this.toastService.toastError('Hay datos que no se han diligenciado correctamente');
        }
    }
    abrirModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _mapaeditable_mapaeditable_page__WEBPACK_IMPORTED_MODULE_10__["MapaeditablePage"],
                componentProps: {
                    lng: this.lng,
                    lat: this.lat,
                    ncompleto: this.ncompleto,
                    pais: this.pais,
                    miciudad: this.miciudad,
                    escogidos: this.escogidos,
                    de: this.de,
                    a: this.a,
                    desde: this.desde,
                    hasta: this.hasta,
                    editable: this.editable,
                    id: this.id,
                    imagenLocal: this.imagenLocal,
                    imagen: this.imagen,
                    primero: this.primero
                }
            });
            yield modal.present();
            const info = yield modal.onWillDismiss();
            if (info) {
                this.primero = false;
                this.vista = 1;
                this.sedes = [];
                this.traerSedes();
            }
        });
    }
    crear() {
        this.draggable = true;
        this.editable = false;
        this.escogidos = [];
        this.pais = '';
        this.miciudad = '';
        this.de = '';
        this.desde = '';
        this.a = '';
        this.hasta = '';
        this.listarNegocios();
        this.ncompleto = 'Escriba el nombre';
        this.vista = 2;
    }
    retroceder() {
        this.vista = 1;
    }
    ver(sede) {
        this.lat = sede.ubicacion.lat;
        this.lng = sede.ubicacion.lng;
        this.abrirModal();
    }
    eliminar(sede, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiMapas.eliminarSede(info.token, { id: sede._id }).subscribe((data) => {
                    if (data.exe) {
                        this.toastService.toastExitoso('Sede eliminada');
                        this.sedes.splice(i, 1);
                    }
                    else {
                        this.toastService.toastError('No se pudo eliminar la sede, inténtelo más tarde');
                    }
                }, (err) => {
                    this.toastService.toastError('No se pudo eliminar la sede, inténtelo más tarde');
                });
            }
        });
    }
    editar(sede, i) {
        const pais = this.paises.filter((item) => item.nombre === sede.pais)[0];
        // console.log('PAIS', pais)
        this.paiss = pais;
        this.pais = sede.pais;
        this.editable = true;
        this.primero = false;
        this.listarCiudades({ detail: { value: pais } }, true);
        this.miciudad = sede.ciudad;
        this.ncompleto = sede.nombre;
        this.desde = sede.desde;
        this.hasta = sede.hasta;
        this.de = sede.de;
        this.a = sede.a;
        this.lat = sede.ubicacion.lat;
        this.lng = sede.ubicacion.lng;
        this.negocios.forEach((item) => {
            sede.tipoNegocio.forEach((it) => {
                if (item.nombre === it) {
                    item.checked = true;
                }
            });
        });
        this.draggable = true;
        this.escogidos = sede.tipoNegocio;
        this.vista = 2;
        this.id = sede._id;
    }
    horario(event, tipo) {
        if (tipo === 'desde') {
            this.desde = event.detail.value;
        }
        else {
            this.hasta = event.detail.value;
        }
    }
    dias(event, tipo) {
        if (tipo === 'de') {
            this.de = event.detail.value;
        }
        else {
            this.a = event.detail.value;
        }
    }
};
SedesMapaPage.ctorParameters = () => [
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__["InicioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_providers_Api_Mapar_service__WEBPACK_IMPORTED_MODULE_6__["MapasService"] },
    { type: _providers_Api_UsuariosLogin_service__WEBPACK_IMPORTED_MODULE_8__["UsuariosLoginService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_9__["ToastServices"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
SedesMapaPage.propDecorators = {
    mapa: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['mapa',] }]
};
SedesMapaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sedes-mapa',
        template: _raw_loader_sedes_mapa_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sedes_mapa_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SedesMapaPage);



/***/ }),

/***/ "OEO3":
/*!*************************************************************************!*\
  !*** ./src/app/pages/Mapas/mapaeditable/mapaeditable-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: MapaeditablePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaeditablePageRoutingModule", function() { return MapaeditablePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mapaeditable_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mapaeditable.page */ "1IfV");




const routes = [
    {
        path: '',
        component: _mapaeditable_page__WEBPACK_IMPORTED_MODULE_3__["MapaeditablePage"]
    }
];
let MapaeditablePageRoutingModule = class MapaeditablePageRoutingModule {
};
MapaeditablePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MapaeditablePageRoutingModule);



/***/ }),

/***/ "br0y":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Mapas/sedes-mapa/sedes-mapa.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"oscuro\">\n        <ion-back-button slot=\"start\" icon=\"chevron-back-outline\" defaultHref=\"/central/menu/inicioMapa\"></ion-back-button>\n        <ion-title>Administrar sedes</ion-title>\n\n        <ion-buttons slot=\"end\">\n\n            <ion-button *ngIf=\"draggable && vista !== 1\" (click)=\"retroceder()\">\n                <ion-icon name=\"close-outline\" slot=\"icon-only\" color=\"blanco\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n    <div class=\"recuadro\" *ngIf=\"vista === 1\">\n        <ion-list>\n            <ion-item-sliding *ngFor=\"let sede of sedes; let i = index;\">\n                <ion-item (click)=\"ver( sede )\">\n                    <ion-avatar class=\"avatar\" slot=\"start\">\n                        <img src=\"/assets/Marcador.png\" alt=\"\">\n                    </ion-avatar>\n                    <ion-label class=\"ion-text-wrap\">\n                        <div>{{ sede.nombre }}</div>\n                        <div class=\"info\">\n                            <strong>Pais: </strong> {{sede.pais}}\n                        </div>\n                        <div class=\"info\">\n                            <strong>Ciudad: </strong> {{sede.ciudad}}\n                        </div>\n                    </ion-label>\n                </ion-item>\n                <ion-item-options side=\"end\">\n                    <ion-item-option (click)=\"editar( sede, i )\" color=\"warning\">\n                        <ion-icon name=\"pencil-outline\" slot=\"icon-only\"></ion-icon>\n                    </ion-item-option>\n                    <ion-item-option (click)=\"eliminar( sede, i )\" color=\"danger\">\n                        <ion-icon name=\"trash-outline\" slot=\"icon-only\"></ion-icon>\n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n\n        </ion-list>\n        <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n            <ion-fab-button color=\"success\" (click)=\"crear()\">\n                <ion-icon name=\"location-outline\"></ion-icon>\n            </ion-fab-button>\n        </ion-fab>\n    </div>\n\n\n    <div class=\"recuadro\" *ngIf=\"vista === 2\">\n        <ion-list>\n            <ion-item class=\"noborder\" lines=\"none\" mode=\"ios\">\n                <ion-label>Nombre de la Sede</ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" mode=\"ios\">\n                <ion-input class=\"privado\" type=\"text\" placeholder=\"Ingrese nombre completo de la sede\" [(ngModel)]=\"ncompleto\"></ion-input>\n\n            </ion-item> <br>\n\n            <ion-item lines=\"none\" class=\"amrillo\" mode=\"md\">\n                <ion-label class=\"ion-text-wrap\">Tipo de negocio</ion-label>\n            </ion-item>\n            <ion-item *ngFor=\"let tipo of negocios\" class=\"noborder\" mode=\"md\">\n                <ion-checkbox slot=\"start\" color=\"success\" [checked]=\"tipo.checked\" value=\"{{ tipo.nombre }}\" (ionChange)=\"agregarNegocios( $event )\"></ion-checkbox>\n                <ion-label>{{ tipo.nombre }}</ion-label>\n            </ion-item> <br>\n            <ion-item mode=\"ios\">\n                <ion-label class=\"ion-text-wrap\">Selecciona el País</ion-label>\n                <ion-select *ngIf=\"!editable\" okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"listarCiudades($event)\">\n                    <ion-select-option *ngFor=\"let pais of paises\" [value]=\"pais\">{{pais.nombre}}</ion-select-option>\n                </ion-select>\n\n                <ion-select *ngIf=\"editable\" [value]=\"paiss\" okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"listarCiudades($event)\">\n                    <ion-select-option *ngFor=\"let pais of paises\" [value]=\"pais\">{{pais.nombre}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <div class=\"flexbet\" *ngIf=\"cargando\">\n                <br>\n                <ion-spinner name=\"crescent\" color=\"primary\"> </ion-spinner> Cargando Ciudades...\n            </div>\n\n\n            <ion-item *ngIf=\"ciudad\" mode=\"ios\">\n                <ion-label class=\"ion-text-wrap\">Selecciona la ciudad</ion-label>\n                <ion-select *ngIf=\"!editable\" okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"seleccionarCiudad($event)\">\n                    <ion-select-option *ngFor=\"let ciudad of ciudades\" value=\"{{ciudad.nombre}}\">{{ciudad.nombre}}</ion-select-option>\n                </ion-select>\n\n                <ion-select *ngIf=\"editable\" [value]=\"miciudad\" okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"seleccionarCiudad($event)\">\n                    <ion-select-option *ngFor=\"let ciudad of ciudades\" value=\"{{ciudad.nombre}}\">{{ciudad.nombre}}</ion-select-option>\n                </ion-select>\n            </ion-item> <br>\n\n            <ion-item-divider class=\"amrillo\">\n                <ion-label>Horario de atención</ion-label>\n            </ion-item-divider>\n\n            <ion-item class=\"sinfondo\">\n                <ion-label>Desde</ion-label>\n                <ion-datetime [value]=\"desde\" displayFormat=\"h:mm a\" (ionChange)=\"horario($event, 'desde')\"></ion-datetime>\n            </ion-item>\n\n            <ion-item class=\"sinfondo\">\n                <ion-label>Hasta</ion-label>\n                <ion-datetime [value]=\"hasta\" displayFormat=\"h:mm a\" (ionChange)=\"horario($event, 'hasta')\"></ion-datetime>\n            </ion-item>\n\n            <ion-item-divider color=\"light\">\n                <ion-label>Días de atención</ion-label>\n            </ion-item-divider>\n\n            <ion-item class=\"sinfondo\">\n                <strong>De</strong>\n                <ion-select placeholder=\"Seleccionar Día\" [value]=\"de\" okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"dias($event, 'de')\">\n                    <ion-select-option value=\"Lunes\">Lunes</ion-select-option>\n                    <ion-select-option value=\"Martes\">Martes</ion-select-option>\n                    <ion-select-option value=\"Miércoles\">Miércoles</ion-select-option>\n                    <ion-select-option value=\"Jueves\">Jueves</ion-select-option>\n                    <ion-select-option value=\"Viernes\">Viernes</ion-select-option>\n                    <ion-select-option value=\"Sábado\">Sábado</ion-select-option>\n                    <ion-select-option value=\"Domingo\">Domingo</ion-select-option>\n                </ion-select> <br>\n                <strong>A</strong>\n\n                <ion-select placeholder=\"Seleccionar Día\" [value]=\"a\" okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"dias($event, 'a')\">\n                    <ion-select-option value=\"Lunes\">Lunes</ion-select-option>\n                    <ion-select-option value=\"Martes\">Martes</ion-select-option>\n                    <ion-select-option value=\"Miércoles\">Miércoles</ion-select-option>\n                    <ion-select-option value=\"Jueves\">Jueves</ion-select-option>\n                    <ion-select-option value=\"Viernes\">Viernes</ion-select-option>\n                    <ion-select-option value=\"Sábado\">Sábado</ion-select-option>\n                    <ion-select-option value=\"Domingo\">Domingo</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <ion-button expand=\"block\" color=\"light\" mode=\"ios\" shape=\"round\" (click)=\"configurar()\">Crear Sede</ion-button>\n        </ion-list>\n    </div>\n\n\n\n\n</ion-content>");

/***/ }),

/***/ "lujK":
/*!*****************************************************************!*\
  !*** ./src/app/pages/Mapas/mapaeditable/mapaeditable.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mapa {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFwYWVkaXRhYmxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoibWFwYWVkaXRhYmxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXBhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ "qfE0":
/*!*************************************************************!*\
  !*** ./src/app/pages/Mapas/sedes-mapa/sedes-mapa.module.ts ***!
  \*************************************************************/
/*! exports provided: SedesMapaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SedesMapaPageModule", function() { return SedesMapaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sedes_mapa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sedes-mapa-routing.module */ "7x0z");
/* harmony import */ var _sedes_mapa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sedes-mapa.page */ "BVrX");
/* harmony import */ var _mapaeditable_mapaeditable_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mapaeditable/mapaeditable.page */ "1IfV");
/* harmony import */ var _mapaeditable_mapaeditable_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mapaeditable/mapaeditable.module */ "6G9z");









let SedesMapaPageModule = class SedesMapaPageModule {
};
SedesMapaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _mapaeditable_mapaeditable_page__WEBPACK_IMPORTED_MODULE_7__["MapaeditablePage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sedes_mapa_routing_module__WEBPACK_IMPORTED_MODULE_5__["SedesMapaPageRoutingModule"],
            _mapaeditable_mapaeditable_module__WEBPACK_IMPORTED_MODULE_8__["MapaeditablePageModule"]
        ],
        declarations: [_sedes_mapa_page__WEBPACK_IMPORTED_MODULE_6__["SedesMapaPage"]]
    })
], SedesMapaPageModule);



/***/ })

}]);
//# sourceMappingURL=Mapas-sedes-mapa-sedes-mapa-module.js.map