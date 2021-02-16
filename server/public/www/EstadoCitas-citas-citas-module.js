(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["EstadoCitas-citas-citas-module"],{

/***/ "5EfH":
/*!*********************************************************!*\
  !*** ./src/app/pages/EstadoCitas/citas/citas.module.ts ***!
  \*********************************************************/
/*! exports provided: CitasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitasPageModule", function() { return CitasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _citas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./citas-routing.module */ "L8q9");
/* harmony import */ var _citas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./citas.page */ "A0St");
/* harmony import */ var _Modales_modal_citas_modal_citas_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Modales/modal-citas/modal-citas.module */ "oFz0");
/* harmony import */ var _Modales_modal_citas_modal_citas_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Modales/modal-citas/modal-citas.page */ "Zu4W");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "iTUp");










let CitasPageModule = class CitasPageModule {
};
CitasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _Modales_modal_citas_modal_citas_page__WEBPACK_IMPORTED_MODULE_8__["ModalCitasPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _citas_routing_module__WEBPACK_IMPORTED_MODULE_5__["CitasPageRoutingModule"],
            _Modales_modal_citas_modal_citas_module__WEBPACK_IMPORTED_MODULE_7__["ModalCitasPageModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"]
        ],
        declarations: [_citas_page__WEBPACK_IMPORTED_MODULE_6__["CitasPage"]]
    })
], CitasPageModule);



/***/ }),

/***/ "A0St":
/*!*******************************************************!*\
  !*** ./src/app/pages/EstadoCitas/citas/citas.page.ts ***!
  \*******************************************************/
/*! exports provided: CitasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitasPage", function() { return CitasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_citas_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./citas.page.html */ "m4IH");
/* harmony import */ var _citas_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./citas.page.scss */ "WnBe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _providers_Api_Pedidos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/Api/Pedidos.service */ "HavB");








let CitasPage = class CitasPage {
    constructor(almacenamiento, router, active, toast, apiPedido) {
        this.almacenamiento = almacenamiento;
        this.router = router;
        this.active = active;
        this.toast = toast;
        this.apiPedido = apiPedido;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.crear();
    }
    crear() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiPedido.consultarChat(info.token, { id: this.active.snapshot.paramMap.get('id') }).subscribe((data) => {
                    // console.log(data);
                    if (data.exe) {
                        this.almacenamiento.insertarChat(data.response[0]).then(() => {
                            this.router.navigate(['/central/chats/chat']);
                        }).catch(() => {
                            this.router.navigate(['/central/menu']);
                            this.toast.toastError('No se puede acceder al chat, inténtelo más tarde');
                        });
                    }
                    else {
                        this.toast.toastError('No se pudo traer la información, inténtelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo traer la información, inténtelo más tarde');
                });
            }
        });
    }
};
CitasPage.ctorParameters = () => [
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_4__["InicioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_6__["ToastServices"] },
    { type: _providers_Api_Pedidos_service__WEBPACK_IMPORTED_MODULE_7__["PedidosService"] }
];
CitasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-citas',
        template: _raw_loader_citas_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_citas_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CitasPage);



/***/ }),

/***/ "EOND":
/*!*****************************************************************!*\
  !*** ./src/app/pages/Modales/modal-citas/modal-citas.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item img {\n  width: 100%;\n}\n\nion-item {\n  touch-action: pan-y !important;\n}\n\nion-list {\n  width: 100%;\n}\n\nion-slides,\nion-slide {\n  width: 100%;\n}\n\n.fullancho {\n  min-height: 100%;\n  height: auto;\n}\n\n.diapositiva {\n  width: 100%;\n  height: 100%;\n}\n\n.estado {\n  padding: 10px;\n}\n\n.estadobol {\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n}\n\n.estado-verde {\n  background: #85B84F;\n}\n\n.estado-amarillo {\n  background: #FCD573;\n}\n\n.estado-azul {\n  background: #5591B1;\n}\n\n.es-bottom {\n  margin-bottom: 15px;\n}\n\n.es-bottom-small {\n  margin-bottom: 10px;\n}\n\n.precio {\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 42px;\n  opacity: 0.8;\n  font-weight: bolder;\n  color: var(--ion-color-success);\n}\n\n.trabajo {\n  border-bottom: 1px solid rgba(3, 3, 3, 0.1);\n}\n\n.trabajo:nth-child(even) {\n  --background: #f9f9f9;\n}\n\nion-item-divider {\n  margin-bottom: 10px;\n}\n\n.ok {\n  opacity: 0.3;\n}\n\nvideo {\n  max-height: 100%;\n}\n\n.fl {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.aviso {\n  --background: #FEE491;\n}\n\n.aviso:hover {\n  --background: #FEE491 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbW9kYWwtY2l0YXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTs7RUFFSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksMkNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7QUFDSiIsImZpbGUiOiJtb2RhbC1jaXRhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIHRvdWNoLWFjdGlvbjogcGFuLXkgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMsXHJcbmlvbi1zbGlkZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZ1bGxhbmNobyB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZGlhcG9zaXRpdmEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5lc3RhZG8ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmVzdGFkb2JvbCB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi5lc3RhZG8tdmVyZGUge1xyXG4gICAgYmFja2dyb3VuZDogIzg1Qjg0RjtcclxufVxyXG5cclxuLmVzdGFkby1hbWFyaWxsbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkNENTczO1xyXG59XHJcblxyXG4uZXN0YWRvLWF6dWwge1xyXG4gICAgYmFja2dyb3VuZDogIzU1OTFCMTtcclxufVxyXG5cclxuLmVzLWJvdHRvbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uZXMtYm90dG9tLXNtYWxsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5wcmVjaW8ge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgIG9wYWNpdHk6IC44O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbn1cclxuXHJcbi50cmFiYWpvIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDMsIDMsIDMsIDAuMSk7XHJcbn1cclxuXHJcbi50cmFiYWpvOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbn1cclxuXHJcbmlvbi1pdGVtLWRpdmlkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm9rIHtcclxuICAgIG9wYWNpdHk6IC4zO1xyXG59XHJcblxyXG52aWRlbyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZmwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmF2aXNvIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZFRTQ5MTtcclxufVxyXG5cclxuLmF2aXNvOmhvdmVyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZFRTQ5MSAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "L8q9":
/*!*****************************************************************!*\
  !*** ./src/app/pages/EstadoCitas/citas/citas-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CitasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitasPageRoutingModule", function() { return CitasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _citas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./citas.page */ "A0St");




const routes = [
    {
        path: '',
        component: _citas_page__WEBPACK_IMPORTED_MODULE_3__["CitasPage"]
    }
];
let CitasPageRoutingModule = class CitasPageRoutingModule {
};
CitasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CitasPageRoutingModule);



/***/ }),

/***/ "RI6N":
/*!*************************************************************************!*\
  !*** ./src/app/pages/Modales/modal-citas/modal-citas-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ModalCitasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCitasPageRoutingModule", function() { return ModalCitasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_citas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-citas.page */ "Zu4W");




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

/***/ "WnBe":
/*!*********************************************************!*\
  !*** ./src/app/pages/EstadoCitas/citas/citas.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 30px !important;\n  font-weight: 300;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2l0YXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6ImNpdGFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "Zu4W":
/*!***************************************************************!*\
  !*** ./src/app/pages/Modales/modal-citas/modal-citas.page.ts ***!
  \***************************************************************/
/*! exports provided: ModalCitasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCitasPage", function() { return ModalCitasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_citas_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-citas.page.html */ "u+O8");
/* harmony import */ var _modal_citas_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-citas.page.scss */ "EOND");
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

/***/ "m4IH":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/EstadoCitas/citas/citas.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content #contenido scrollEvents=\"true\">\n\n    <div>\n        <ion-spinner name=\"crescent\" color=\"barra\"></ion-spinner>\n        <h3>Cargando...</h3>\n    </div>\n</ion-content>");

/***/ }),

/***/ "oFz0":
/*!*****************************************************************!*\
  !*** ./src/app/pages/Modales/modal-citas/modal-citas.module.ts ***!
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
/* harmony import */ var _modal_citas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-citas-routing.module */ "RI6N");
/* harmony import */ var _modal_citas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-citas.page */ "Zu4W");
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



/***/ }),

/***/ "u+O8":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Modales/modal-citas/modal-citas.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"vista === 'buscar'\">\n    <ion-toolbar color=\"blanco\">\n\n        <ion-title>Creando nuevas citas</ion-title>\n        <ion-buttons fill=\"clear\" slot=\"end\" *ngIf=\"type !== 'chat'\">\n            <ion-button (click)=\"descartar()\" fill=\"clear\">\n                <ion-icon name=\"close-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-header *ngIf=\"vista === 'media'\">\n    <ion-toolbar color=\"dark\">\n        <ion-buttons fill=\"clear\" slot=\"start\">\n            <ion-button (click)=\"descartar()\" fill=\"clear\">\n                <ion-icon name=\"close-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Fotos y Vídeos</ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-header *ngIf=\"vista === 'carpetas'\">\n    <ion-toolbar color=\"blanco\">\n        <ion-buttons fill=\"clear\" slot=\"start\">\n            <ion-button (click)=\"descartar()\" fill=\"clear\">\n                <ion-icon name=\"close-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Carpeta de Citas</ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\" *ngIf=\"vista === 'buscar' || vista === 'chat' || vista === 'setting'\">\n\n\n\n    <div class=\"divider\" *ngIf=\"vista === 'buscar'\">\n        <ion-slides #slide>\n            <ion-slide>\n                <ion-grid fixed>\n\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <ion-searchbar color=\"light\"></ion-searchbar>\n                        </ion-col>\n\n                        <ion-col size=\"12\">\n                            <div class=\"divider\"></div>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <ion-list>\n                                <ion-item *ngFor=\"let taller of listaTalleres\" (press)=\"opciones(taller.usuarioReceptor.nombrecompleto)\" (click)=\"crear(taller)\">\n                                    <ion-avatar slot=\"start\">\n                                        <img src=\"https://motocaliapp.com/{{taller.avatar}}\" width=\"100%\" alt=\"\">\n                                    </ion-avatar>\n                                    <ion-label class=\"ion-text-wrap\">\n                                        <div>{{ taller.usuarioReceptor.nombrecompleto }}</div>\n                                        <div>{{ taller.usuarioReceptor.nombreusuario }}</div>\n                                    </ion-label>\n\n                                </ion-item>\n                            </ion-list>\n\n                        </ion-col>\n                    </ion-row>\n\n                </ion-grid>\n            </ion-slide>\n\n            <ion-slide class=\"anchofull\">\n                <ion-grid fixed>\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <h3 class=\"opacity\">Creando un nuevo turno para {{usuario}}</h3>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col size=\"6\">\n                            <ion-button expand=\"block\" mode=\"ios\" color=\"light\" (click)=\"cancelar()\">Cancelar </ion-button>\n\n                        </ion-col>\n\n                        <ion-col size=\"6\">\n                            <ion-button expand=\"block\" mode=\"ios\" color=\"primary\" (click)=\"generarTicket()\">Generar </ion-button>\n\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-slide>\n        </ion-slides>\n    </div>\n\n\n\n    <div>\n\n\n\n    </div>\n\n</ion-content>\n\n<ion-content fullscreen=\"true\" *ngIf=\"vista === 'media'\" color=\"darkgold\">\n\n    <app-video *ngIf=\"tipoArchivo === 'video'\" url=\"https://motocaliapp.com/Citas/{{ urlArchivo }}\"></app-video>\n\n    <ion-slides class=\"diapositiva\" [options]=\"slideOpt\" *ngIf=\"tipoArchivo === 'imagen'\">\n        <ion-slide>\n            <img src=\"https://motocaliapp.com/Citas/{{ urlArchivo }}\" alt=\"\">\n        </ion-slide>\n    </ion-slides>\n</ion-content>\n\n\n<ion-content fullscreen=\"true\" *ngIf=\"vista === 'carpetas'\">\n    <div class=\"divider \">\n        <ion-searchbar mode=\"ios\" (ionChange)=\"filtro( $event )\"></ion-searchbar>\n    </div>\n    <ion-list>\n        <ion-item-sliding *ngFor=\"let cita of citas | miFiltro : texto\">\n            <ion-item (click)=\"escogerChat(cita._id)\">\n                <ion-avatar class=\"avatar\" slot=\"start\">\n                    <img src=\"https://motocaliapp.com/{{cita.imagenTaller}}\" width=\"100%\" />\n                </ion-avatar>\n                <ion-label class=\"ion-text-wrap\">\n                    <strong class=\"medium\">{{ cita.nombrecompleto }}</strong>\n                    <p>@{{ cita.nombreusuario }} - Estado pendiente</p>Cita creada el {{ cita.fechainicio | fecha }}\n                </ion-label>\n                <div slot=\"end\" class=\"estadobol\" [ngClass]=\"{'estado-amarillo ': cita.estado === 'PENDIENTE', 'estado-azul ': cita.estado === 'EN PROGRESO', 'estado-verde ': cita.estado === 'TERMINADO'}\">\n\n                </div>\n            </ion-item>\n            <ion-item-options side=\"start\">\n                <ion-item-option color=\"light\">\n                    <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical-outline\"></ion-icon>\n                </ion-item-option>\n                <ion-item-option color=\"secondary\">\n                    <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                </ion-item-option>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=EstadoCitas-citas-citas-module.js.map