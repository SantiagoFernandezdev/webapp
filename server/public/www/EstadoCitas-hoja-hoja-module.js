(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["EstadoCitas-hoja-hoja-module"],{

/***/ "1EHM":
/*!***************************************************************!*\
  !*** ./src/app/pages/EstadoCitas/hoja/hoja-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: HojaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HojaPageRoutingModule", function() { return HojaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _hoja_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hoja.page */ "pTjE");




const routes = [
    {
        path: '',
        component: _hoja_page__WEBPACK_IMPORTED_MODULE_3__["HojaPage"]
    }
];
let HojaPageRoutingModule = class HojaPageRoutingModule {
};
HojaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HojaPageRoutingModule);



/***/ }),

/***/ "7cAv":
/*!*******************************************************!*\
  !*** ./src/app/pages/EstadoCitas/hoja/hoja.module.ts ***!
  \*******************************************************/
/*! exports provided: HojaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HojaPageModule", function() { return HojaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _hoja_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hoja-routing.module */ "1EHM");
/* harmony import */ var _hoja_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hoja.page */ "pTjE");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");








let HojaPageModule = class HojaPageModule {
};
HojaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _hoja_routing_module__WEBPACK_IMPORTED_MODULE_5__["HojaPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_hoja_page__WEBPACK_IMPORTED_MODULE_6__["HojaPage"]]
    })
], HojaPageModule);



/***/ }),

/***/ "Kngk":
/*!*******************************************************!*\
  !*** ./src/app/pages/EstadoCitas/hoja/hoja.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".color {\n  margin: 5px;\n  max-width: 150px;\n  height: 150px;\n  border-radius: 10px;\n  background: #D7DDB8;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.color2 {\n  margin: 5px;\n  min-width: 150px;\n  height: 150px;\n  border-radius: 10px;\n  background: #f1f1f1;\n}\n\n.color2 ion-skeleton-text {\n  width: 150px;\n  height: 100% !important;\n  margin-top: 0px !important;\n}\n\n.color img {\n  width: 100%;\n  height: 150px;\n  overflow: hidden;\n}\n\n.camarillo {\n  background: #FDF2C0;\n  padding: 5px;\n}\n\n.none {\n  opacity: 0;\n  display: none;\n}\n\n.add {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: var(--ion-color-medium);\n}\n\n.tituloGrande {\n  font-size: 22px;\n  width: 250px;\n  margin: auto;\n  text-align: center;\n  opacity: 0.3;\n  padding: 8px 0;\n}\n\n.flexbet {\n  display: flex;\n  justify-content: space-between;\n}\n\n.padd {\n  padding-right: 14px;\n}\n\n.flexbet div {\n  width: 50%;\n}\n\n.nombre {\n  background-color: #FDF2C0;\n  padding: 2px 10px;\n}\n\n.verdei {\n  color: #18713C;\n}\n\n.rojoi {\n  color: red;\n}\n\n.estadobol {\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n}\n\n.estado-verde {\n  background: #85B84F;\n}\n\n.estado-amarillo {\n  background: #FCD573;\n}\n\n.estado-azul {\n  background: #5591B1;\n}\n\n.flexbetver {\n  margin-top: 15px;\n  text-align: center;\n}\n\n.flexbetver .tituloGrande {\n  opacity: 0.3;\n}\n\n.placa {\n  width: 150px;\n  background-color: #FFA800;\n  color: #000000;\n  font-size: 22px;\n  text-align: center;\n  padding: 10px;\n  border-radius: 5px;\n  font-weight: bold;\n  border: 3px solid #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaG9qYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFDSiIsImZpbGUiOiJob2phLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvciB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNEN0REQjg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNvbG9yMiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5jb2xvcjIgaW9uLXNrZWxldG9uLXRleHQge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbG9yIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2FtYXJpbGxvIHtcclxuICAgIGJhY2tncm91bmQ6ICNGREYyQzA7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5ub25lIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYWRkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxufVxyXG5cclxuLnRpdHVsb0dyYW5kZSB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAuMztcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG59XHJcblxyXG4uZmxleGJldCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ucGFkZCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xyXG59XHJcblxyXG4uZmxleGJldCBkaXYge1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLm5vbWJyZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkRGMkMwO1xyXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XHJcbn1cclxuXHJcbi52ZXJkZWkge1xyXG4gICAgY29sb3I6ICMxODcxM0M7XHJcbn1cclxuXHJcbi5yb2pvaSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZXN0YWRvYm9sIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuLmVzdGFkby12ZXJkZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODVCODRGO1xyXG59XHJcblxyXG4uZXN0YWRvLWFtYXJpbGxvIHtcclxuICAgIGJhY2tncm91bmQ6ICNGQ0Q1NzM7XHJcbn1cclxuXHJcbi5lc3RhZG8tYXp1bCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTU5MUIxO1xyXG59XHJcblxyXG4uZmxleGJldHZlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleGJldHZlciAudGl0dWxvR3JhbmRlIHtcclxuICAgIG9wYWNpdHk6IC4zO1xyXG59XHJcblxyXG4ucGxhY2Ege1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQTgwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwMDAwMDtcclxufSJdfQ== */");

/***/ }),

/***/ "pTjE":
/*!*****************************************************!*\
  !*** ./src/app/pages/EstadoCitas/hoja/hoja.page.ts ***!
  \*****************************************************/
/*! exports provided: HojaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HojaPage", function() { return HojaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_hoja_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./hoja.page.html */ "zbMN");
/* harmony import */ var _hoja_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hoja.page.scss */ "Kngk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/Api/EstadoCitas.service */ "AQLj");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");









let HojaPage = class HojaPage {
    constructor(modalCtrl, alertCtrl, almacenamiento, active, router, hojaApi, toast) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.almacenamiento = almacenamiento;
        this.active = active;
        this.router = router;
        this.hojaApi = hojaApi;
        this.toast = toast;
        this.fotos = [];
        this.repuestos = [];
        this.trabajos = [];
        this.role = '';
        this.cargaFotos = true;
        this.id = '';
        this.idHoja = '';
        this.estado = '';
        this.tipo = '';
        this.placa = '';
        this.accesos = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.tipo = this.active.snapshot.paramMap.get('tipo');
            if (this.active.snapshot.paramMap.get('tipo') === 'hoja') {
                yield this.miHoja2();
            }
            else {
                yield this.miHoja();
            }
        });
    }
    refrescando(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.active.snapshot.paramMap.get('tipo') === 'hoja') {
                yield this.miHoja2();
            }
            else {
                yield this.miHoja();
            }
            event.target.complete();
        });
    }
    tomarFoto() {
        this.router.navigate(['/hoja-vida-modal', this.active.snapshot.paramMap.get('id'), 'fotos', this.idHoja]);
    }
    verFoto(idx) {
        this.router.navigate(['/hoja-vida-modal', this.active.snapshot.paramMap.get('id'), 'ver', this.idHoja, idx]);
    }
    viajar(tipo) {
        this.router.navigate(['/hoja-vida-modal', this.active.snapshot.paramMap.get('id'), tipo, this.idHoja]);
    }
    miHoja() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.hojaApi.leeHoja(info.token, { id: this.active.snapshot.paramMap.get('id') }).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    console.log(data, 'hoja');
                    if (data.exe) {
                        if (data.response) {
                            this.idHoja = data.response._id;
                            if (data.response.accesos.filter((item) => item === info._id).length > 0) {
                                this.accesos = true;
                            }
                            this.repuestos = data.response.repuestos;
                            this.trabajos = data.response.trabajos;
                            this.estado = data.response.cita.estado;
                        }
                        yield this.traerFotos();
                    }
                    else {
                    }
                }), (err) => {
                    this.toast.toastError('No se pudo traer la información de la hoja de vida, inténtelo más tarde');
                });
            }
        });
    }
    miHoja2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.hojaApi.leeHoja2(info.token, { id: this.active.snapshot.paramMap.get('id') }).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    console.log(data);
                    if (data.exe) {
                        if (data.response) {
                            this.idHoja = data.response._id;
                            if (data.response.accesos.filter((item) => item === info._id).length > 0) {
                                this.accesos = true;
                            }
                            this.repuestos = data.response.repuestos;
                            this.trabajos = data.response.trabajos;
                            this.placa = data.response.placa;
                        }
                        yield this.traerFotos();
                    }
                    else {
                    }
                }), (err) => {
                    this.toast.toastError('No se pudo traer la información de la hoja de vida, inténtelo más tarde');
                });
            }
        });
    }
    terminar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Atención!',
                message: '¿Estas seguro de marcar esta hoja de vida como terminada?',
                buttons: [
                    {
                        text: 'No quiero',
                        cssClass: 'cancelarAlerta',
                        role: 'cancel',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Aceptar',
                        cssClass: 'botonalerta',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const info = yield this.almacenamiento.obtenerToken();
                            if (info) {
                                this.hojaApi.terminar(info.token, { id: this.active.snapshot.paramMap.get('id') }).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    console.log(data);
                                    if (data.exe) {
                                        this.toast.toastError('Hoja de vida terminada');
                                        this.router.navigate(['/central/menu/hoja']);
                                    }
                                    else {
                                        this.toast.toastError('No se pudo terminar la hoja de vida, inténtelo más tarde');
                                    }
                                }), (err) => {
                                    this.toast.toastError('No se pudo terminar la hoja de vida, inténtelo más tarde');
                                });
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    traerFotos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.role = info.role;
                this.hojaApi.leefotos(info.token, { id: this.idHoja }).subscribe((data) => {
                    if (data.exe) {
                        this.fotos = data.response;
                    }
                    else {
                    }
                    this.cargaFotos = false;
                }, (err) => {
                    this.cargaFotos = false;
                    this.toast.toastError('No se pudo traer las fotos de la hoja de vida, inténtelo más tarde');
                });
            }
        });
    }
    estados() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let msg = 'PENDIENTE';
            if (this.estado === 'PENDIENTE') {
                msg = 'Marcar como "en Progeso"';
            }
            else if (this.estado === 'EN PROGRESO') {
                msg = 'Marcar como "Terminado"';
            }
            const alert = yield this.alertCtrl.create({
                header: 'Cambiar Estado de Cita',
                message: `Actualmente la cita esta en estado ${this.estado}`,
                mode: 'ios',
                buttons: [
                    {
                        text: 'cancelar',
                        role: 'cancel',
                    },
                    {
                        text: msg,
                        handler: () => {
                            this.estado = this.estado === 'PENDIENTE' ? 'EN PROGRESO' : 'TERMINADO';
                            this.cambiarEstado();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    cambiarEstado() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.hojaApi.editarCita(info.token, this.active.snapshot.paramMap.get('id'), { estado: this.estado }).subscribe((data) => {
                    console.log(data);
                    if (data.exe) {
                        this.toast.toastExitoso('Estado cambiado');
                    }
                    else {
                        this.toast.toastError('No se pudo cambiar el estado de la cita, inténtelo ás tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo cambiar el estado de la cita, inténtelo ás tarde');
                });
            }
        });
    }
};
HojaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _providers_Api_EstadoCitas_service__WEBPACK_IMPORTED_MODULE_7__["EstadoCitasService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_8__["ToastServices"] }
];
HojaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-hoja',
        template: _raw_loader_hoja_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_hoja_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HojaPage);



/***/ }),

/***/ "zbMN":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/EstadoCitas/hoja/hoja.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"oscuro\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"/central/menu\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Hoja de Vida</ion-title>\n\n\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <div class=\"divider \"></div>\n\n    <div class=\"placa\" *ngIf=\"tipo === 'hoja'\">{{ placa }}</div>\n\n    <div class=\"divider \"></div>\n\n    <ion-list>\n        <ion-item-divider color=\"light\">\n            Registro Fotográfico\n        </ion-item-divider>\n    </ion-list>\n\n    <div *ngIf=\"fotos.length === 0 && trabajos.length === 0 && repuestos.length === 0 && !cargaFotos && role === 'USER_ROLE' && !accesos\" class=\"flexbetver\">\n        <img src=\"/assets/Hojas.png\" width=\"70px\" alt=\"\">\n        <h3 class=\"tituloGrande\">No hay información en mi hoja de vida</h3>\n    </div>\n\n    <ion-segment scrollable=\"true\">\n        <div class=\"color\" (click)=\"tomarFoto()\" *ngIf=\"role === 'TALLER_ROLE' || accesos\"><span class=\"none\">ssfsdfsfs</span>\n            <div class=\"add\">\n                <ion-buttons>\n                    <ion-button color=\"medium\">\n                        <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n                <strong>Añadir Fotografía</strong>\n            </div>\n        </div>\n\n        <div class=\"color2\" *ngIf=\"cargaFotos\"><span class=\"none\">ssfsdfsfs</span>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n        <div class=\"color2\" *ngIf=\"cargaFotos\"><span class=\"none\">ssfsdfsfs</span>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n\n        <div class=\"color\" *ngFor=\"let foto of fotos; let i = index;\" (click)=\"verFoto(i)\"><span class=\"none\">ssfsdfsfs</span>\n            <img src=\"https://motocaliapp.com/11927613402/{{foto.ruta}}\" width=\"100%\" alt=\"\">\n        </div>\n\n\n    </ion-segment>\n\n\n    <ion-list *ngIf=\"role === 'TALLER_ROLE'  || accesos || repuestos.length > 0\">\n        <ion-item-divider color=\"light\">\n            <ion-label> Añadir Repuestos</ion-label>\n            <ion-buttons slot=\"end\" *ngIf=\"role === 'TALLER_ROLE'  || accesos\">\n                <ion-button (click)=\"viajar('repuestos')\">\n                    <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n        </ion-item-divider>\n        <div class=\"divider\" *ngIf=\"repuestos.length === 0\"></div>\n\n        <ion-item *ngFor=\"let repuesto of repuestos; let i = index;\" class=\"sinfondo\">\n            <ion-label class=\"ion-text-wrap\">\n                <div class=\"nombre\">\n                    {{repuesto.nombre}}\n                </div>\n                <br>\n                <div class=\"flexbet\">\n                    <div class=\"flexbet\">\n                        <strong>Cantidad: </strong>\n                        <span class=\"verdei padd\"> {{repuesto.cantidad}} </span>\n                    </div>\n\n                    <div class=\"flexbet\">\n                        <strong>Precio: </strong>\n                        <span class=\"verdei\">$ {{repuesto.precio | decimales: 'es-CO'}}</span>\n                    </div>\n                </div>\n\n\n                <div class=\"flexbet bor\">\n                    <strong>Total: </strong>\n                    <span class=\"rojoi\">$ {{repuesto.total | decimales: 'es-CO'}}</span>\n                </div>\n\n            </ion-label>\n        </ion-item>\n    </ion-list>\n\n\n    <ion-list *ngIf=\"role === 'TALLER_ROLE'  || accesos || trabajos.length > 0\">\n        <ion-item-divider color=\"light\">\n            <ion-label>Trabajos realizados</ion-label>\n            <ion-buttons slot=\"end\" *ngIf=\"role === 'TALLER_ROLE'  || accesos\">\n                <ion-button (click)=\"viajar('trabajos')\">\n                    <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n        </ion-item-divider>\n        <div class=\"divider\" *ngIf=\"trabajos.length === 0\"></div>\n        <ion-item *ngFor=\"let trabajo of trabajos; let i = index;\" class=\"sinfondo\">\n            <ion-label class=\"ion-text-wrap\">\n                <div class=\"nombre\">\n                    {{trabajo.nombre}}\n                </div>\n                <br>\n                <div class=\"flexbet\">\n                    <strong>Precio: </strong>\n                    <span class=\"verdei\">$ {{trabajo.precio | decimales: 'es-CO'}}</span>\n                </div>\n\n\n            </ion-label>\n        </ion-item>\n    </ion-list>\n\n    <ion-button mode=\"ios\" expand=\"block\" color=\"barra\" (click)=\"terminar()\">TERMINAR HOJA DE VIDA</ion-button>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=EstadoCitas-hoja-hoja-module.js.map