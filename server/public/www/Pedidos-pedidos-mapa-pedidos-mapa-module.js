(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pedidos-pedidos-mapa-pedidos-mapa-module"],{

/***/ "GWov":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Pedidos/pedidos-mapa/pedidos-mapa.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"oscuro\">\n        <ion-back-button slot=\"start\" icon=\"chevron-back-outline\" defaultHref=\"/central/pedidos\"></ion-back-button>\n        <ion-title>Seguimiento del pedido</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"refrescando()\">\n                <ion-icon name=\"reload-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n\n            <ion-button *ngIf=\"pedido && !pedido.ubicacion\" (click)=\"guardar()\">\n                <ion-icon name=\"checkmark-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n            <ion-button *ngIf=\"pedido && pedido.ubicacionactual && id === pedido.domiciliario._id\" (click)=\"entregado()\">\n                <ion-icon name=\"checkmark-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"mapa\" #mapa>\n\n    </div>\n</ion-content>");

/***/ }),

/***/ "PAz7":
/*!*******************************************************************!*\
  !*** ./src/app/pages/Pedidos/pedidos-mapa/pedidos-mapa.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mapa {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGVkaWRvcy1tYXBhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoicGVkaWRvcy1tYXBhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXBhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWFya2VyIHt9Il19 */");

/***/ }),

/***/ "Wpkb":
/*!***************************************************************************!*\
  !*** ./src/app/pages/Pedidos/pedidos-mapa/pedidos-mapa-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: PedidosMapaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosMapaPageRoutingModule", function() { return PedidosMapaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pedidos_mapa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pedidos-mapa.page */ "lYa7");




const routes = [
    {
        path: '',
        component: _pedidos_mapa_page__WEBPACK_IMPORTED_MODULE_3__["PedidosMapaPage"]
    }
];
let PedidosMapaPageRoutingModule = class PedidosMapaPageRoutingModule {
};
PedidosMapaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PedidosMapaPageRoutingModule);



/***/ }),

/***/ "lYa7":
/*!*****************************************************************!*\
  !*** ./src/app/pages/Pedidos/pedidos-mapa/pedidos-mapa.page.ts ***!
  \*****************************************************************/
/*! exports provided: PedidosMapaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosMapaPage", function() { return PedidosMapaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pedidos_mapa_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pedidos-mapa.page.html */ "GWov");
/* harmony import */ var _pedidos_mapa_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pedidos-mapa.page.scss */ "PAz7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var src_app_providers_Api_Pedidos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/Api/Pedidos.service */ "HavB");
/* harmony import */ var src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../providers/cargas/usuarios.service */ "cb8P");













let PedidosMapaPage = class PedidosMapaPage {
    constructor(router, alert, almacenamiento, toast, apiPedidos, active, socket, geoReferencia, plt, cargarElementos) {
        this.router = router;
        this.alert = alert;
        this.almacenamiento = almacenamiento;
        this.toast = toast;
        this.apiPedidos = apiPedidos;
        this.active = active;
        this.socket = socket;
        this.geoReferencia = geoReferencia;
        this.plt = plt;
        this.cargarElementos = cargarElementos;
        this.configurando = false;
        this.cargado = false;
        this.id = '';
        this.texto = '';
        this.estados = [];
        this.habilitado = false;
        this.domicilios = [];
        this.coord = {
            lat: 0,
            lng: 0
        };
        this.mensaje = '';
        this.draggable = true;
        this.creado = false;
        this.parar = false;
        this.escucharCoords().subscribe((data) => {
            if (data) {
                console.log(data);
                this.graficar2(data.coords);
            }
        });
        this.escucharPedido().subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (data) {
                const alert = yield this.alert.create({
                    header: 'Pedido Entregado',
                    message: this.pedido.domiciliario.nombrecompleto + ' finalizó tu pedido',
                    buttons: [
                        {
                            text: 'Terminar Pedido',
                            cssClass: 'botonalerta',
                            handler: () => {
                                this.router.navigate(['/central/pedidos']);
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        }));
        this.cargarElementos.$cargarRed.subscribe((red) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (red === 'none') {
                this.almacenamiento.eleminarSala().then(() => {
                    this.toast.Especial('Perdiste la conexión, verifica la red de internet e intenta nuevamente');
                    this.router.navigate(['/central/pedidos']);
                }).catch(() => {
                    this.toast.Especial('Perdiste la conexión, verifica la red de internet e intenta nuevamente');
                    this.router.navigate(['/central/pedidos']);
                });
            }
        }));
        this.plt.resume.subscribe((e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.active.snapshot.paramMap.get('tipo') === 'entrega') {
                this.informaciónPedidoVivo();
            }
            else if (this.active.snapshot.paramMap.get('tipo') === 'vivo') {
                this.informaciónPedidoVivo();
            }
            else {
                this.toast.toastError('Se perdión la conexión, por favor volver a ingresar al pedido');
                this.router.navigate(['/central/pedidos']);
            }
        }));
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (this.active.snapshot.paramMap.get('tipo') === 'entrega') {
            this.informaciónPedidoVivo();
        }
        else if (this.active.snapshot.paramMap.get('tipo') === 'vivo') {
            this.informaciónPedidoVivo();
        }
        else {
            this.informaciónPedido();
        }
    }
    refrescando() {
        this.parar = false;
        if (this.active.snapshot.paramMap.get('tipo') === 'entrega') {
            this.informaciónPedidoVivo();
        }
        else if (this.active.snapshot.paramMap.get('tipo') === 'vivo') {
            this.informaciónPedidoVivo();
        }
        else {
            this.informaciónPedido();
        }
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
                this.toast.toastError('No se pudo captruar su ubicación, verifique que el GPS este prendido o inténtelo más tarde');
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
            zoom: 12
        });
        mapa.addControl(new mapboxgl.NavigationControl());
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = 'url("/assets/Marcador.png")';
        el.style.backgroundSize = '100%';
        el.style.width = 50 + 'px';
        el.style.height = 80 + 'px';
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
    calcular2() {
        console.log('MAPON');
        mapboxgl.accessToken = 'pk.eyJ1Ijoic2FudGlhZ29mZXJuYW5kZXpkZXYiLCJhIjoiY2tmYmh6cXdzMDM0bDJ2cHRucTI4cHpkaSJ9.-01EYvsLdJOU1Oy4BtwBwA';
        const mapa = new mapboxgl.Map({
            container: this.mapa.nativeElement,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.pedido.ubicacion.lng, this.pedido.ubicacion.lat],
            zoom: 12
        });
        mapa.addControl(new mapboxgl.NavigationControl());
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = 'url("/assets/Marcador.png")';
        el.style.backgroundSize = '100%';
        el.style.width = 50 + 'px';
        el.style.height = 80 + 'px';
        const marker = new mapboxgl.Marker({
            element: el,
            draggable: false
        })
            .setLngLat([this.pedido.ubicacion.lng, this.pedido.ubicacion.lat])
            .addTo(mapa);
        this.posicion = this.geoReferencia.watchPosition({ enableHighAccuracy: true }).subscribe((data) => {
            console.log(data.coords, ' DATOS DEL WATH', this.pedido);
            if (!this.parar) {
                this.coord.lat = data.coords.latitude;
                this.coord.lng = data.coords.longitude;
                this.socket.emit('coordenadas', {
                    id: this.pedido._id,
                    accesos: this.pedido.pedido.accesos,
                    coord: {
                        lat: data.coords.latitude,
                        lng: data.coords.longitude
                    }
                });
                if (this.eltemp) {
                    this.eltemp.style.display = 'none';
                }
                this.eltemp = document.createElement('div');
                this.eltemp.className = 'marker2';
                this.eltemp.style.backgroundImage = 'url("/assets/Caja.png")';
                this.eltemp.style.backgroundSize = '100%';
                this.eltemp.style.width = 50 + 'px';
                this.eltemp.style.height = 80 + 'px';
                const marker2 = new mapboxgl.Marker({
                    element: this.eltemp,
                    draggable: false
                })
                    .setLngLat([this.coord.lng, this.coord.lat])
                    .addTo(mapa);
            }
        }, (err) => {
            this.toast.toastError('No se pudo captruar su ubicación, verifique que el GPS este prendido o inténtelo más tarde');
        });
    }
    graficar2(coord) {
        // console.log('Bien');
        if (this.creado) {
            if (this.eltemp) {
                this.eltemp.style.display = 'none';
            }
            this.eltemp = document.createElement('div');
            this.eltemp.className = 'marker2';
            this.eltemp.style.backgroundImage = 'url("/assets/Caja.png")';
            this.eltemp.style.backgroundSize = '100%';
            this.eltemp.style.width = 50 + 'px';
            this.eltemp.style.height = 80 + 'px';
            const marker2 = new mapboxgl.Marker({
                element: this.eltemp,
                draggable: false
            })
                .setLngLat([coord.lng, coord.lat])
                .addTo(this.mapon);
        }
        else {
            mapboxgl.accessToken = 'pk.eyJ1Ijoic2FudGlhZ29mZXJuYW5kZXpkZXYiLCJhIjoiY2tmYmh6cXdzMDM0bDJ2cHRucTI4cHpkaSJ9.-01EYvsLdJOU1Oy4BtwBwA';
            this.mapon = new mapboxgl.Map({
                container: this.mapa.nativeElement,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [this.pedido.ubicacion.lng, this.pedido.ubicacion.lat],
                zoom: 12
            });
            this.mapon.addControl(new mapboxgl.NavigationControl());
            const el = document.createElement('div');
            el.className = 'marker';
            el.style.backgroundImage = 'url("/assets/Marcador.png")';
            el.style.backgroundSize = '100%';
            el.style.width = 50 + 'px';
            el.style.height = 80 + 'px';
            const marker = new mapboxgl.Marker({
                element: el,
            })
                .setLngLat([this.pedido.ubicacion.lng, this.pedido.ubicacion.lat])
                .addTo(this.mapon);
            if (this.pedido.ubicacionactual) {
                console.log(this.pedido.ubicacionactual);
                const mk = document.createElement('div');
                mk.className = 'marker2';
                mk.style.backgroundImage = 'url("/assets/Caja.png")';
                mk.style.backgroundSize = '100%';
                mk.style.width = 50 + 'px';
                mk.style.height = 80 + 'px';
                this.eltemp = mk;
                const marker2 = new mapboxgl.Marker({
                    element: mk,
                })
                    .setLngLat([coord.lng, coord.lat])
                    .addTo(this.mapon);
            }
            this.creado = true;
        }
    }
    informaciónPedido() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.id = info._id;
                this.apiPedidos.consultarMapaUnico(info.token, { id: this.active.snapshot.paramMap.get('id') }).subscribe((data) => {
                    console.log(data);
                    if (data.exe) {
                        if (data.response.length > 0) {
                            this.pedido = data.response[0];
                            if (this.pedido.ubicacion) {
                                this.lat = this.pedido.ubicacion.lat;
                                this.lng = this.pedido.ubicacion.lng;
                                this.draggable = false;
                                this.graficar();
                            }
                            else {
                                this.calcular();
                            }
                        }
                    }
                    else {
                        this.toast.toastError('No se pudo consultar el pedido, inténtelo más tarde');
                        this.router.navigate(['/central/menu/']);
                    }
                    this.cargado = true;
                }, (err) => {
                    this.toast.toastError('No se pudo consultar el pedido, inténtelo más tarde');
                    this.router.navigate(['/central/menu/']);
                });
            }
        });
    }
    informaciónPedidoVivo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.id = info._id;
                this.apiPedidos.consultarMapaUnico(info.token, { id: this.active.snapshot.paramMap.get('id') }).subscribe((data) => {
                    console.log(data);
                    if (data.exe) {
                        if (data.response.length > 0) {
                            this.pedido = data.response[0];
                            console.log(this.active.snapshot.paramMap.get('tipo'));
                            if (this.active.snapshot.paramMap.get('tipo') === 'vivo') {
                                this.graficar2(this.pedido.ubicacionactual);
                            }
                            else {
                                console.log('Entrar');
                                this.calcular2();
                            }
                        }
                    }
                    else {
                        this.toast.toastError('No se pudo consultar el pedido, inténtelo más tarde');
                        this.router.navigate(['/central/menu/']);
                    }
                    this.cargado = true;
                }, (err) => {
                    this.toast.toastError('No se pudo consultar el pedido, inténtelo más tarde');
                    this.router.navigate(['/central/menu/']);
                });
            }
        });
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                const alert = yield this.alert.create({
                    header: 'Atención!',
                    message: '¿Estas seguro de tu ubicación?, una vez que aceptes no podras cambiarla de nuevo',
                    buttons: [
                        {
                            text: 'Cancelar',
                            cssClass: 'cancelarAlerta',
                            role: 'cancel'
                        },
                        {
                            text: 'Confirmar',
                            cssClass: 'botonalerta',
                            handler: () => {
                                if (this.lat !== '' && this.lng !== '') {
                                    // tslint:disable-next-line:max-line-length
                                    this.apiPedidos.editarMapa(info.token, { id: this.active.snapshot.paramMap.get('id'), ubicacion: { lat: this.lat, lng: this.lng } }).subscribe((data) => {
                                        console.log(data);
                                        if (data.exe) {
                                            this.router.navigate(['/central/pedidos/info', data.response.pedido._id]);
                                            this.toast.Especial('Ubicación actualizada');
                                        }
                                        else {
                                            this.toast.toastError('No se pudo editar la ubicación para el pedido, inténtelo más tarde');
                                            this.router.navigate(['/central/pedidos']);
                                        }
                                        this.cargado = true;
                                    }, (err) => {
                                        this.toast.toastError('No se pudo edita, inténtelo más tarde');
                                        this.router.navigate(['/central/pedidos']);
                                    });
                                }
                                else {
                                    this.toast.toastError('No ha seleccionado la ubicación');
                                }
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    escucharCoords() {
        const myobserver = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Observable"](observer => {
            this.socket.on('coordenadas', (data) => {
                observer.next(data);
            });
        });
        return myobserver;
    }
    escucharPedido() {
        const myobserver = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Observable"](observer => {
            this.socket.on('finalizarPedido', (data) => {
                observer.next(data);
            });
        });
        return myobserver;
    }
    entregado() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                const alert = yield this.alert.create({
                    header: '¿Has terminado el pedido?!',
                    message: 'Al marcar terminar ' + this.pedido.destino.nombrecompleto + ' ya no recibirá más tu ubicación',
                    buttons: [
                        {
                            text: 'Cancelar',
                            cssClass: 'cancelarAlerta',
                            role: 'cancel'
                        },
                        {
                            text: 'Terminar',
                            cssClass: 'botonalerta',
                            handler: () => {
                                this.parar = true;
                                this.posicion.unsubscribe();
                                this.socket.emit('finalizarPedido', {
                                    pedido: this.pedido
                                });
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    ionViewWillLeave() {
        this.parar = true;
        this.posicion.unsubscribe();
    }
};
PedidosMapaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__["InicioService"] },
    { type: src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_9__["ToastServices"] },
    { type: src_app_providers_Api_Pedidos_service__WEBPACK_IMPORTED_MODULE_8__["PedidosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["Socket"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _providers_cargas_usuarios_service__WEBPACK_IMPORTED_MODULE_12__["CargaElementosUsuariosService"] }
];
PedidosMapaPage.propDecorators = {
    mapa: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['mapa',] }]
};
PedidosMapaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pedidos-mapa',
        template: _raw_loader_pedidos_mapa_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pedidos_mapa_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PedidosMapaPage);



/***/ }),

/***/ "uIXr":
/*!*******************************************************************!*\
  !*** ./src/app/pages/Pedidos/pedidos-mapa/pedidos-mapa.module.ts ***!
  \*******************************************************************/
/*! exports provided: PedidosMapaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosMapaPageModule", function() { return PedidosMapaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pedidos_mapa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pedidos-mapa-routing.module */ "Wpkb");
/* harmony import */ var _pedidos_mapa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pedidos-mapa.page */ "lYa7");







let PedidosMapaPageModule = class PedidosMapaPageModule {
};
PedidosMapaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pedidos_mapa_routing_module__WEBPACK_IMPORTED_MODULE_5__["PedidosMapaPageRoutingModule"]
        ],
        declarations: [_pedidos_mapa_page__WEBPACK_IMPORTED_MODULE_6__["PedidosMapaPage"]]
    })
], PedidosMapaPageModule);



/***/ })

}]);
//# sourceMappingURL=Pedidos-pedidos-mapa-pedidos-mapa-module.js.map