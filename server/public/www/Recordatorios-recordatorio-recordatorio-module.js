(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Recordatorios-recordatorio-recordatorio-module"],{

/***/ "+sX1":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/Modales/recordatorio-modal/recordatorio-modal.page.ts ***!
  \*****************************************************************************/
/*! exports provided: RecordatorioModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordatorioModalPage", function() { return RecordatorioModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_recordatorio_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./recordatorio-modal.page.html */ "hoPA");
/* harmony import */ var _recordatorio_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recordatorio-modal.page.scss */ "/cPV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Api/Seguimiento.service */ "Gq8O");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../providers/Api/Recordatorios.service */ "71hY");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");










let RecordatorioModalPage = class RecordatorioModalPage {
    constructor(modalCtrl, plt, apiSeguimiento, apiRecordatorio, almacenamiento, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.plt = plt;
        this.apiSeguimiento = apiSeguimiento;
        this.apiRecordatorio = apiRecordatorio;
        this.almacenamiento = almacenamiento;
        this.toastCtrl = toastCtrl;
        this.configuracion = true;
        this.predeterminado = {
            semanal: false,
            mensual: false,
            diario: false
        };
        this.clientes = [];
        this.texto = '';
        this.personasSelect = [];
        this.msgFrecuencia = 'Cada cuantos días';
        this.tipo = '';
        this.frecuencia = {
            patron: 'diario',
            cantidad: 0
        };
        this.informacion = {
            titulo: '',
            contenido: '',
            archivos: []
        };
        this.repetirRecordatorio = 'SI';
        this.repetirProgramacion = 'SI';
        this.repetirchecked = true;
        this.recheckedRecord = true;
        this.plt.backButton.subscribe((e) => {
            if (this.configuracion) {
                this.cerrar();
            }
            else {
                this.configuracion = false;
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        // console.log('entre')
        if (this.type === 'editar') {
            this.configuracion = true;
            this.evaluar();
        }
        else if (this.type === 'informacion') {
        }
        else {
            this.configuracion = false;
        }
        this.alAbrir();
    }
    evaluar() {
        if (this.recordatorioData.tipo === 'personalizado') {
            this.vista = '2';
            // console.log(this.recordatorioData);
            const data = this.recordatorioData;
            this.informacion = data.informacion;
            this.repetirProgramacion = data.repetirprograma;
            this.repetirRecordatorio = data.repetir;
            this.repetirchecked = data.repetirprograma === 'SI' ? true : false;
            this.recheckedRecord = data.repetir === 'SI' ? true : false;
            this.frecuencia = data.frecuencia;
            this.cambiarMensaje(data.frecuencia.patron);
            this.personasSelect = data.destinatarios;
        }
        else if (this.recordatorioData.tipo === 'predeterminado') {
            this.vista = '1';
            const data = this.recordatorioData;
            this.informacion = data.informacion;
            this.repetirProgramacion = data.repetirprograma;
            this.repetirRecordatorio = data.repetir;
            this.recheckedRecord = data.repetir === 'SI' ? true : false;
            this.frecuencia = data.frecuencia;
            this.personasSelect = data.destinatarios;
            this.predeterminado[data.frecuencia.patron] = true;
        }
    }
    cambiarMensaje(tipo) {
        switch (tipo) {
            case 'diario':
                this.msgFrecuencia = 'Cada cuantos días';
                break;
            case 'semanal':
                this.msgFrecuencia = 'Cada cuantas semanas';
                break;
            case 'mensual':
                this.msgFrecuencia = 'Cada cuantos meses';
                break;
        }
    }
    alAbrir() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.apiSeguimiento.solicitudesAceptadas(info.token, 'sin receptor', '0').subscribe((cli) => {
                    // console.log(cli);
                    if (cli.exe) {
                        if (cli.response.length > 0) {
                            cli.response.forEach((item) => {
                                item.usuarioEmisor.image = item.usuarioEmisor.imagen.length > 0 ? item.usuarioEmisor.imagen[0].path : 'ruta de app';
                            });
                        }
                    }
                    else {
                        // error
                    }
                    this.clientes = cli.response;
                }, (err) => {
                });
            }
        });
    }
    buscarPersona(event) {
        this.texto = event.detail.value;
    }
    selectPersona(event) {
        if (event.detail.checked) {
            if (!this.personasSelect.find(item => item.id === event.detail.value)) {
                const cli = this.clientes.filter((item) => item.usuarioEmisor._id === event.detail.value);
                this.personasSelect.push({
                    id: event.detail.value,
                    visto: 'NO',
                    dispositivo: cli[0].usuarioEmisor.usuarioID
                });
            }
        }
        else {
            this.personasSelect = this.personasSelect.filter(item => item.id !== event.detail.value);
        }
        // console.log(this.personasSelect);
    }
    crear(tipo) {
        switch (tipo) {
            case 'predeterminado_cliente':
                this.vista = '1';
                break;
            case 'personalizado_cliente':
                this.vista = '2';
                break;
        }
        this.configuracion = true;
    }
    cancelar() {
        if (this.type === 'editar') {
            this.cerrar();
        }
        else {
            this.configuracion = false;
        }
    }
    // Configuracion predeterminado
    selectPredeterminado(tipo) {
        switch (tipo) {
            case 'diario':
                this.predeterminado.diario = !this.predeterminado.diario;
                this.frecuencia.cantidad = 1;
                this.frecuencia.patron = 'diario';
                this.predeterminado.mensual = false;
                break;
            case 'semanal':
                this.predeterminado.semanal = !this.predeterminado.semanal;
                break;
            case 'mensual':
                this.frecuencia.cantidad = 1;
                this.frecuencia.patron = 'mensual';
                this.predeterminado.mensual = !this.predeterminado.mensual;
                this.predeterminado.diario = false;
                break;
        }
    }
    frecuenciaPersonalizada(event) {
        this.frecuencia.patron = event.detail.value;
        switch (event.detail.value) {
            case 'diario':
                this.msgFrecuencia = 'Cada cuantos días';
                break;
            case 'semanal':
                this.msgFrecuencia = 'Cada cuantas semanas';
                break;
            case 'mensual':
                this.msgFrecuencia = 'Cada cuantos meses';
                break;
        }
    }
    repetir(event) {
        if (event.detail.checked) {
            this.repetirRecordatorio = 'SI';
            this.recheckedRecord = true;
        }
        else {
            this.repetirRecordatorio = 'NO';
            this.recheckedRecord = false;
        }
    }
    reprogramar(event) {
        if (event.detail.checked) {
            this.repetirProgramacion = 'SI';
            this.repetirchecked = true;
        }
        else {
            this.repetirProgramacion = 'NO';
            this.repetirchecked = false;
        }
    }
    cerrar() {
        this.modalCtrl.dismiss({});
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // tslint:disable-next-line:max-line-length
            if (this.personasSelect.length > 0 && this.informacion.titulo !== '' && this.informacion.contenido !== '' && this.frecuencia.patron !== '' && this.frecuencia.cantidad > 0) {
                const info = yield this.almacenamiento.obtenerToken();
                const data = {
                    tipo: this.vista === '1' ? 'predeterminado' : 'personalizado',
                    destinos: this.personasSelect,
                    informacion: this.informacion,
                    frecuencia: this.frecuencia,
                    repetir: this.repetirRecordatorio,
                    repetirprograma: this.repetirProgramacion
                };
                // console.log(data);
                if (info) {
                    if (this.type === 'editar') {
                        data._id = this.recordatorioData._id;
                        this.apiRecordatorio.putRecordatorio(info.token, data).subscribe((res) => {
                            if (res.exe) {
                                this.toastCtrl.alertApplication('Recordatorio actualizado con éxito', true);
                                this.cerrar();
                            }
                            else {
                                this.toastCtrl.alertApplication('No se pudo actualizar el recordatorio, intentelo más tarde', false);
                            }
                        }, (err) => {
                        });
                    }
                    else {
                        this.apiRecordatorio.postRecordatorio(info.token, data).subscribe((res) => {
                            if (res.exe) {
                                this.toastCtrl.alertApplication('Recordatorio creado con éxito', true);
                                this.cerrar();
                            }
                            else {
                                this.toastCtrl.alertApplication('No se pudo crear el recordatorio, intentelo más tarde', false);
                            }
                        }, (err) => {
                        });
                    }
                }
            }
            else {
                this.toastCtrl.alertApplication('Debe completar toda la información', false);
            }
        });
    }
};
RecordatorioModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_6__["ApiSeguimientoService"] },
    { type: _providers_Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_8__["RecordatoriosService"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__["InicioService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_9__["ToastServices"] }
];
RecordatorioModalPage.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    recordatorioData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
RecordatorioModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-recordatorio-modal',
        template: _raw_loader_recordatorio_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('entrada', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                        opacity: 0
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                        opacity: 1
                    }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                        opacity: 0
                    }),
                ])
            ])
        ],
        styles: [_recordatorio_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RecordatorioModalPage);



/***/ }),

/***/ "/cPV":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/Modales/recordatorio-modal/recordatorio-modal.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".caja-flex {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n.avatar {\n  width: 50px;\n  height: 50px;\n}\n\n.avatar img {\n  width: 100%;\n  height: 100%;\n}\n\n.opt {\n  width: calc(50% - 10px);\n  margin: 5px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.opt .des {\n  padding: 5px;\n}\n\n.boton {\n  width: 80px;\n  height: 80px;\n  border-radius: 100%;\n  color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 40px;\n  font-weight: 100;\n}\n\n.btn-verde:hover {\n  background-color: #1E8C4A;\n}\n\n.btn-verde {\n  background-color: var(--ion-color-success);\n}\n\n.btn-amarillo {\n  background-color: var(--ion-color-warning);\n}\n\n.btn-amarillo:hover {\n  background-color: #AA8206;\n}\n\n.btn-rojo {\n  background-color: var(--ion-color-danger);\n}\n\n.btn-rojo:hover {\n  background-color: #9C2D3C;\n}\n\n.btn-gris {\n  background-color: var(--ion-color-light);\n}\n\n.btn-rojo:hover {\n  background-color: #9C2D3C;\n}\n\n.miflex {\n  display: flex;\n  justify-content: space-between;\n}\n\n.tarjeta {\n  width: calc(50% - 10px);\n  margin: 5px;\n  box-shadow: none;\n  opacity: 0.5;\n  border: 1px solid rgba(3, 3, 3, 0.1);\n  transition: all 0.1s;\n}\n\n.headercard {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.isSelect {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  opacity: 1;\n  border: 2px solid var(--ion-color-success);\n}\n\n.anuncio {\n  background-color: #FFFBE5 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVjb3JkYXRvcmlvLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksMENBQUE7QUFDSjs7QUFFQTtFQUNJLDBDQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUNBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx3Q0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSx5SEFBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7QUFDSiIsImZpbGUiOiJyZWNvcmRhdG9yaW8tbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhamEtZmxleCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmF2YXRhciBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5vcHQge1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm9wdCAuZGVzIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmJvdG9uIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi5idG4tdmVyZGU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFOEM0QTtcclxufVxyXG5cclxuLmJ0bi12ZXJkZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbn1cclxuXHJcbi5idG4tYW1hcmlsbG8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xyXG59XHJcblxyXG4uYnRuLWFtYXJpbGxvOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBQTgyMDY7XHJcbn1cclxuXHJcbi5idG4tcm9qbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxufVxyXG5cclxuLmJ0bi1yb2pvOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5QzJEM0M7XHJcbn1cclxuXHJcbi5idG4tZ3JpcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG59XHJcblxyXG4uYnRuLXJvam86aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlDMkQzQztcclxufVxyXG5cclxuLm1pZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4udGFyamV0YSB7XHJcbiAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzLCAzLCAzLCAwLjEpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcztcclxufVxyXG5cclxuLmhlYWRlcmNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaXNTZWxlY3Qge1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAzcHggMXB4IC0ycHgsIHJnYmEoMCwgMCwgMCwgMC4xNCkgMHB4IDJweCAycHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggNXB4IDBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbn1cclxuXHJcbi5hbnVuY2lvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZCRTUgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "1Amz":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/Modales/recordatorio-modal/recordatorio-modal-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: RecordatorioModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordatorioModalPageRoutingModule", function() { return RecordatorioModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _recordatorio_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recordatorio-modal.page */ "+sX1");




const routes = [
    {
        path: '',
        component: _recordatorio_modal_page__WEBPACK_IMPORTED_MODULE_3__["RecordatorioModalPage"]
    }
];
let RecordatorioModalPageRoutingModule = class RecordatorioModalPageRoutingModule {
};
RecordatorioModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecordatorioModalPageRoutingModule);



/***/ }),

/***/ "89us":
/*!***********************************************************************!*\
  !*** ./src/app/pages/Recordatorios/recordatorio/recordatorio.page.ts ***!
  \***********************************************************************/
/*! exports provided: RecordatorioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordatorioPage", function() { return RecordatorioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_recordatorio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./recordatorio.page.html */ "8Xat");
/* harmony import */ var _recordatorio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recordatorio.page.scss */ "xNeQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Modales_recordatorio_modal_recordatorio_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Modales/recordatorio-modal/recordatorio-modal.page */ "+sX1");
/* harmony import */ var _providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Api/Seguimiento.service */ "Gq8O");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../providers/Api/Recordatorios.service */ "71hY");
/* harmony import */ var src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _providers_cargas_Entradas_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../providers/cargas/Entradas.service */ "FlrC");
/* harmony import */ var _Components_entradas_entradas_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../Components/entradas/entradas.component */ "MUpS");













let RecordatorioPage = class RecordatorioPage {
    constructor(modalCtrl, animationCtrl, apiSeguimiento, apiRecordatorios, almacenamiento, miToast, alertCtrl, entrada) {
        this.modalCtrl = modalCtrl;
        this.animationCtrl = animationCtrl;
        this.apiSeguimiento = apiSeguimiento;
        this.apiRecordatorios = apiRecordatorios;
        this.almacenamiento = almacenamiento;
        this.miToast = miToast;
        this.alertCtrl = alertCtrl;
        this.entrada = entrada;
        this.lista = [];
        this.vista = '1';
        this.role = '';
        this.texto = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.listaRecordatorios();
    }
    refrescando(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.listaRecordatorios();
            if (res) {
                // console.log(res);
                event.target.complete();
            }
            else {
                event.target.complete();
            }
        });
    }
    listaRecordatorios() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.role = info.role;
                if (info.role !== 'USER_ROLE') {
                    this.apiRecordatorios.getRecordatorio(info.token).subscribe((data) => {
                        // console.log(data);
                        if (data.exe) {
                            data.response.forEach((item) => {
                                item.checked = false;
                            });
                            this.lista = data.response;
                        }
                        else {
                            this.miToast.alertApplication('No se pudo traer los recordatorios, intentelo más tarde', false);
                        }
                    });
                }
                else {
                    this.apiRecordatorios.getRecordatorioPersona(info.token).subscribe((data) => {
                        // console.log(data);
                        if (data.exe) {
                            data.response.forEach((item) => {
                                item.checked = false;
                            });
                            this.lista = data.response;
                        }
                        else {
                            this.miToast.alertApplication('No se pudo traer los recordatorios, intentelo más tarde', false);
                        }
                    });
                }
                return true;
            }
        });
    }
    opciones(item) {
        if (!this.recordatorio) {
            this.vista = '2';
            item.checked = !item.checked;
            this.recordatorio = item;
        }
    }
    eliminarRecordatorio() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Borrar Recordatorio',
                message: '¿Está seguro de eliminar este recordatorio de forma permanente?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                    },
                    {
                        text: 'Aceptar',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const info = yield this.almacenamiento.obtenerToken();
                            if (info) {
                                this.apiRecordatorios.deleteRecordatorio(info.token, this.recordatorio._id).subscribe((data) => {
                                    if (data.exe) {
                                        this.miToast.alertApplication('El recordatorio ha sido eliminado', true);
                                        this.listaRecordatorios();
                                    }
                                    else {
                                        this.miToast.alertApplication('No se pudo borrar el recordatorio, intentelo más tarde', false);
                                    }
                                    this.recordatorio = false;
                                });
                            }
                        })
                    }
                ]
            });
            return yield alert.present();
        });
    }
    cerrarOpt() {
        this.vista = '1';
        this.lista.forEach((item) => item.checked = false);
        this.recordatorio = false;
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
                    { offset: 0, opacity: '0', transform: 'scale(0)  translateX(300px)' },
                    { offset: 1, opacity: '0.99', transform: 'scale(1) translateX(0)' }
                ]);
                return this.animationCtrl.create()
                    .addElement(baseEl)
                    .easing('ease-out')
                    .duration(300)
                    .addAnimation([backdropAnimation, wrapperAnimation]);
            };
            const leaveAnimation = (baseEl) => {
                return enterAnimation(baseEl).direction('reverse');
            };
            const mimodal = yield this.modalCtrl.create({
                component: _Modales_recordatorio_modal_recordatorio_modal_page__WEBPACK_IMPORTED_MODULE_5__["RecordatorioModalPage"],
                componentProps: {
                    type,
                    // recorType: this.recordatorio.tipo,
                    recordatorioData: this.recordatorio
                },
                mode: 'ios',
                enterAnimation,
                leaveAnimation
            });
            yield mimodal.present();
            const cerrado = yield mimodal.onWillDismiss();
            if (cerrado) {
                this.recordatorio = false;
                this.vista = '1';
                this.listaRecordatorios();
            }
        });
    }
    informacion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Components_entradas_entradas_component__WEBPACK_IMPORTED_MODULE_12__["EntradasComponent"],
                componentProps: {
                    type: 'recordatorio',
                    data: this.recordatorio
                }
            });
            yield modal.present();
            const finalice = yield modal.onWillDismiss();
            if (finalice) {
            }
        });
    }
    filtrar(event) {
        this.texto = event.detail.value;
    }
    ver(recor) {
        this.entrada.mostrarSoloUna(recor);
    }
};
RecordatorioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AnimationController"] },
    { type: _providers_Api_Seguimiento_service__WEBPACK_IMPORTED_MODULE_6__["ApiSeguimientoService"] },
    { type: _providers_Api_Recordatorios_service__WEBPACK_IMPORTED_MODULE_8__["RecordatoriosService"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_7__["InicioService"] },
    { type: src_app_providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_9__["ToastServices"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _providers_cargas_Entradas_service__WEBPACK_IMPORTED_MODULE_11__["EntradasServices"] }
];
RecordatorioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-recordatorio',
        template: _raw_loader_recordatorio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('entrada', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
                        opacity: 0
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 1 }))
                ])
            ])
        ],
        styles: [_recordatorio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RecordatorioPage);



/***/ }),

/***/ "8Xat":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Recordatorios/recordatorio/recordatorio.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"oscuro\" @entrada *ngIf=\"vista === '1'\" mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"/central/menu\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Recordatorios</ion-title>\n\n\n    </ion-toolbar>\n\n    <ion-toolbar color=\"barra\" @entrada *ngIf=\"vista === '2'\" mode=\"md\">\n        <ion-title>Opciones</ion-title>\n\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"informacion()\">\n                <ion-icon name=\"information-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"modal('editar')\">\n                <ion-icon name=\"pencil-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"eliminarRecordatorio()\">\n                <ion-icon name=\"trash-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n\n            <ion-button (click)=\"cerrarOpt()\">\n                <ion-icon name=\"close-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrescando($event)\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"150\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <div class=\"divider\"></div>\n\n    <div class=\"divider blanco\">\n        <ion-searchbar mode=\"ios\" placeholder=\"Buscar Recordatorio\" (ionChange)=\"filtrar( $event )\"></ion-searchbar>\n    </div>\n\n    <div class=\"divider\"></div>\n\n    <div class=\"blanco\" *ngIf=\"role !== 'USER_ROLE'\">\n        <ion-list>\n            <ion-item-divider color=\"medium\" class=\"color-blanco\">Personalizados</ion-item-divider>\n\n            <div class=\"divider\">\n                <ion-item *ngFor=\"let recor of lista | filtroRecorList : 'personalizado' : texto\" (press)=\"opciones( recor )\" [class.select]=\"recor.checked\" [lines]=\"recor.nada ? 'none' : ''\">\n                    <ion-icon *ngIf=\"!recor.nada\" name=\"megaphone-outline\" slot=\"start\"></ion-icon>\n                    <ion-label *ngIf=\"!recor.nada\" class=\"ion-text-wrap\">\n                        <strong>{{recor.informacion.titulo}}</strong><br> {{recor.informacion.contenido | recortar}} <br>\n                        <strong class=\"color-verde\">Frecuencia {{ recor.frecuencia.patron}}</strong>\n                    </ion-label>\n\n                    <div *ngIf=\"recor.nada\" class=\"nada\">\n                        <h3>No hay resultados</h3>\n                    </div>\n                </ion-item>\n            </div>\n\n        </ion-list>\n    </div>\n\n    <div class=\"divider\" *ngIf=\"role !== 'USER_ROLE'\"></div>\n\n    <div class=\" blanco\" *ngIf=\"role !== 'USER_ROLE'\">\n        <ion-list>\n            <ion-item-divider color=\"medium\" class=\"color-blanco\">Predeterminados</ion-item-divider>\n\n            <div class=\"divider\">\n                <ion-item *ngFor=\"let recor of lista | filtroRecorList : 'predeterminado' : texto\" (press)=\"opciones( recor )\" [class.select]=\"recor.checked\" [lines]=\"recor.nada ? 'none' : ''\">\n                    <ion-icon *ngIf=\"!recor.nada\" name=\"megaphone-outline\" slot=\"start\"></ion-icon>\n                    <ion-label *ngIf=\"!recor.nada\" class=\"ion-text-wrap\">\n                        <strong>{{recor.informacion.titulo}}</strong><br> {{recor.informacion.contenido | recortar}} <br>\n                        <strong class=\"color-verde\">Frecuencia {{ recor.frecuencia.patron}}</strong>\n                    </ion-label>\n\n                    <div *ngIf=\"recor.nada\" class=\"nada\">\n                        <h3>No hay resultados</h3>\n                    </div>\n                </ion-item>\n            </div>\n\n        </ion-list>\n    </div>\n\n    <div class=\"divider light\" *ngIf=\"role === 'USER_ROLE'\"></div>\n\n\n    <div class=\"blanco\" *ngIf=\"role === 'USER_ROLE'\">\n        <ion-list>\n            <ion-item-divider color=\"medium\">Personalizados</ion-item-divider>\n\n            <div class=\"divider\">\n                <ion-item *ngFor=\"let recor of lista\" (click)=\"ver(recor)\">\n                    <ion-icon name=\"megaphone-outline\" slot=\"start\"></ion-icon>\n                    <ion-label class=\"ion-text-wrap\">\n                        <strong>{{recor.informacion.titulo}}</strong><br> {{recor.informacion.contenido | recortar}} <br>\n                        <strong class=\"color-verde\">Frecuencia {{ recor.frecuencia.patron}}</strong>\n                    </ion-label>\n                </ion-item>\n            </div>\n\n        </ion-list>\n    </div>\n\n\n    <ion-fab *ngIf=\"role !== 'USER_ROLE'\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button color=\"barra\" (click)=\"modal('normal')\">\n            <ion-icon name=\"add-outline\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n\n</ion-content>");

/***/ }),

/***/ "APG/":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/Modales/recordatorio-modal/recordatorio-modal.module.ts ***!
  \*******************************************************************************/
/*! exports provided: RecordatorioModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordatorioModalPageModule", function() { return RecordatorioModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _recordatorio_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recordatorio-modal-routing.module */ "1Amz");
/* harmony import */ var _recordatorio_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recordatorio-modal.page */ "+sX1");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");








let RecordatorioModalPageModule = class RecordatorioModalPageModule {
};
RecordatorioModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _recordatorio_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecordatorioModalPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_recordatorio_modal_page__WEBPACK_IMPORTED_MODULE_6__["RecordatorioModalPage"]]
    })
], RecordatorioModalPageModule);



/***/ }),

/***/ "GzdQ":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/Recordatorios/recordatorio/recordatorio-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: RecordatorioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordatorioPageRoutingModule", function() { return RecordatorioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _recordatorio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recordatorio.page */ "89us");




const routes = [
    {
        path: '',
        component: _recordatorio_page__WEBPACK_IMPORTED_MODULE_3__["RecordatorioPage"]
    }
];
let RecordatorioPageRoutingModule = class RecordatorioPageRoutingModule {
};
RecordatorioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecordatorioPageRoutingModule);



/***/ }),

/***/ "hoPA":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Modales/recordatorio-modal/recordatorio-modal.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen=\"true\" *ngIf=\"!configuracion\">\n    <ion-list>\n        <ion-item-divider color=\"light\" class=\"ion-padding\">\n            Recordatorios para mis clientes\n        </ion-item-divider>\n    </ion-list>\n\n    <div class=\"divider caja-flex\">\n        <div class=\"opt\">\n            <div class=\"boton btn-verde\" (click)=\"crear('predeterminado_cliente')\">\n                <ion-icon color=\"blanco\" slot=\"icon-only\" name=\"add-outline\"></ion-icon>\n            </div>\n            <div class=\"des\">\n                <ion-label class=\"ion-text-center\"><strong>Crear Predeterminado</strong> <br></ion-label>\n            </div>\n        </div>\n        <div class=\"opt\">\n            <div class=\"boton btn-verde\" (click)=\"crear('personalizado_cliente')\">\n                <ion-icon color=\"blanco\" slot=\"icon-only\" name=\"add-outline\"></ion-icon>\n            </div>\n            <div class=\"des\">\n                <ion-label class=\"ion-text-center\"><strong>Crear Personalizado</strong> <br> </ion-label>\n            </div>\n        </div>\n    </div>\n\n\n    <ion-list>\n        <ion-item-divider color=\"light\" class=\"ion-padding\">\n            Opciones\n        </ion-item-divider>\n    </ion-list>\n\n\n    <div class=\"divider caja-flex\">\n\n        <div class=\"opt\">\n            <div class=\"boton btn-rojo\" (click)=\"cerrar()\">\n                <ion-icon color=\"blanco\" slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n            </div>\n            <div class=\"des\">\n                <ion-label class=\"ion-text-center\"><strong>Cerrar</strong> <br> </ion-label>\n            </div>\n        </div>\n    </div>\n\n</ion-content>\n\n<ion-header *ngIf=\"configuracion\" class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-chip slot=\"start\" color=\"danger\" (click)=\"cancelar()\">\n            <ion-icon name=\"close\"></ion-icon>\n            <ion-label>Cancelar</ion-label>\n        </ion-chip>\n\n        <ion-title class=\"ion-text-wrap\">Predeterminados</ion-title>\n        <ion-chip slot=\"end\" color=\"success\" (click)=\"guardar()\">\n            <ion-icon name=\"close\"></ion-icon>\n            <ion-label>Guardar</ion-label>\n        </ion-chip>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content @entrada fullscreen=\"true\" *ngIf=\"configuracion && vista === '1'\" color=\"muro\">\n\n    <div class=\"divider \"></div>\n\n    <ion-list>\n        <ion-item-divider color=\"light\">\n            <ion-label class=\"ion-text-wrap\">¿Para que cliente está dirigido?</ion-label>\n        </ion-item-divider>\n    </ion-list>\n\n    <div class=\"divider blanco\">\n        <ion-searchbar mode=\"ios\" placeholder=\"Buscar Cliente\" class=\"ion-margin-bottom\" (ionChange)=\"buscarPersona( $event )\"></ion-searchbar>\n    </div>\n\n    <div class=\"blanco ion-margin-bottom\">\n        <ion-list>\n            <ion-item *ngFor=\"let cliente of clientes | filtroRepo : texto : personasSelect\">\n                <ion-avatar class=\"avatar\" slot=\"start\">\n                    <img src=\"https://motocaliapp.com/{{cliente.usuarioEmisor.image}}\">\n                </ion-avatar>\n                <ion-label>\n                    <strong>{{ cliente.usuarioEmisor.nombrecompleto }}</strong> <br> {{ cliente.usuarioEmisor.nombreusuario }}\n                </ion-label>\n\n                <ion-checkbox checked=\"{{cliente.usuarioEmisor.checked}}\" value=\"{{cliente.usuarioEmisor._id}}\" slot=\"end\" color=\"success\" (ionChange)=\"selectPersona( $event )\"></ion-checkbox>\n            </ion-item>\n        </ion-list>\n    </div>\n\n    <div class=\"divider\"></div>\n\n    <ion-list>\n        <ion-item-divider color=\"light\">\n            <ion-label class=\"ion-text-wrap\">Frecuencia del recordatorio</ion-label>\n\n        </ion-item-divider>\n    </ion-list>\n\n    <div class=\"divider blanco\">\n        <div class=\"miflex\">\n            <ion-card mode=\"md\" class=\"tarjeta\" (click)=\"selectPredeterminado('diario')\" [class.isSelect]=\"predeterminado.diario\">\n                <ion-card-header class=\"headercard\">\n                    <div class=\"boton btn-gris\">\n                        <ion-icon *ngIf=\"!predeterminado.diario\" color=\"dark\" slot=\"icon-only\" name=\"megaphone-outline\"></ion-icon>\n\n                        <ion-icon *ngIf=\"predeterminado.diario\" color=\"success\" slot=\"icon-only\" name=\"megaphone-outline\"></ion-icon>\n                    </div>\n                </ion-card-header>\n                <ion-card-content class=\"ion-text-center\">\n                    <ion-label class=\"ion-text-center\">Ejecutar cada día </ion-label>\n                </ion-card-content>\n            </ion-card>\n\n            <ion-card mode=\"md\" class=\"tarjeta\" (click)=\"selectPredeterminado('mensual')\" [class.isSelect]=\"predeterminado.mensual\">\n                <ion-card-header class=\"headercard\">\n                    <div class=\"boton btn-gris\">\n                        <ion-icon *ngIf=\"!predeterminado.mensual\" color=\"dark\" slot=\"icon-only\" name=\"megaphone-outline\"></ion-icon>\n\n                        <ion-icon *ngIf=\"predeterminado.mensual\" color=\"success\" slot=\"icon-only\" name=\"megaphone-outline\"></ion-icon>\n                    </div>\n                </ion-card-header>\n                <ion-card-content class=\"ion-text-center\">\n                    <ion-label class=\"ion-text-center\">Ejecutar cada Mes </ion-label>\n                </ion-card-content>\n            </ion-card>\n        </div>\n\n\n    </div>\n\n    <div class=\"divider\"></div>\n\n\n\n    <ion-list>\n        <ion-item-divider color=\"light\">\n            <ion-label class=\"ion-text-wrap\">Información</ion-label>\n\n        </ion-item-divider>\n    </ion-list>\n\n    <div class=\"divider blanco\">\n        <ion-list>\n            <ion-item>\n                <ion-input [(ngModel)]=\"informacion.titulo\" type=\"text\" placeholder=\"Titulo del Recordatorio\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-textarea [(ngModel)]=\"informacion.contenido\" rows=\"5\" placeholder=\"Contenido del Recordatorio\"></ion-textarea>\n            </ion-item>\n        </ion-list>\n    </div>\n\n    <div class=\"divider\"></div>\n\n    <ion-list>\n        <ion-item-divider color=\"light\">\n            <ion-label class=\"ion-text-wrap\">Configuraciones</ion-label>\n        </ion-item-divider>\n    </ion-list>\n\n    <div class=\"divider blanco\">\n        <ion-list>\n            <ion-item lines=\"none\" class=\"ion-margin-bottom\">\n                <ion-checkbox checked=\"true\" slot=\"start\" color=\"success\"></ion-checkbox>\n                <ion-label>Seguir recordando </ion-label>\n            </ion-item>\n\n\n        </ion-list>\n\n    </div>\n</ion-content>\n\n\n\n\n\n<ion-content @entrada fullscreen=\"true\" *ngIf=\"configuracion && vista === '2'\" color=\"muro\">\n\n    <div class=\"divider \"></div>\n\n    <ion-list>\n        <ion-item-divider color=\"light\">\n            <ion-label class=\"ion-text-wrap\">¿Para que cliente está dirigido?</ion-label>\n        </ion-item-divider>\n    </ion-list>\n\n    <div class=\"divider blanco\">\n        <ion-searchbar mode=\"ios\" placeholder=\"Buscar Cliente\" class=\"ion-margin-bottom\" (ionChange)=\"buscarPersona( $event )\"></ion-searchbar>\n    </div>\n\n    <div class=\"blanco ion-margin-bottom\">\n        <ion-list>\n            <ion-item *ngFor=\"let cliente of clientes | filtroRepo : texto : personasSelect\">\n                <ion-avatar class=\"avatar\" slot=\"start\">\n                    <img src=\"https://motocaliapp.com/{{cliente.usuarioEmisor.image}}\">\n                </ion-avatar>\n                <ion-label>\n                    <strong>{{ cliente.usuarioEmisor.nombrecompleto }}</strong> <br> {{ cliente.usuarioEmisor.nombreusuario }}\n                </ion-label>\n\n                <ion-checkbox checked=\"{{cliente.usuarioEmisor.checked}}\" value=\"{{cliente.usuarioEmisor._id}}\" slot=\"end\" color=\"success\" (ionChange)=\"selectPersona( $event )\"></ion-checkbox>\n            </ion-item>\n        </ion-list>\n    </div>\n\n    <div class=\"divider\"></div>\n\n    <ion-list>\n        <ion-item-divider color=\"light\">\n            <ion-label class=\"ion-text-wrap\">Frecuencia del recordatorio</ion-label>\n\n        </ion-item-divider>\n    </ion-list>\n\n    <div class=\"divider blanco\">\n        <ion-list>\n            <ion-item>\n                <ion-label>Seleccione Frecuencia</ion-label>\n                <ion-select [value]=\"frecuencia.patron\" okText=\"Aceptar\" cancelText=\"Cerrar\" (ionChange)=\"frecuenciaPersonalizada( $event )\">\n                    <ion-select-option value=\"diario\">Diario</ion-select-option>\n                    <ion-select-option value=\"semanal\">Semanal</ion-select-option>\n                    <ion-select-option value=\"mensual\">Mensual</ion-select-option>\n                </ion-select>\n            </ion-item>\n\n\n            <ion-item *ngIf=\"msgFrecuencia !== ''\">\n                <ion-label>{{ msgFrecuencia }}</ion-label>\n                <ion-input type=\"number\" value=\"1\" [(ngModel)]=\"frecuencia.cantidad\"></ion-input>\n            </ion-item>\n        </ion-list>\n\n    </div>\n\n    <div class=\"divider\"></div>\n\n\n\n    <ion-list>\n        <ion-item-divider color=\"light\">\n            <ion-label class=\"ion-text-wrap\">Información</ion-label>\n\n        </ion-item-divider>\n    </ion-list>\n\n    <div class=\"divider blanco\">\n        <ion-list>\n            <ion-item>\n                <ion-input type=\"text\" placeholder=\"Titulo del Recordatorio\" [(ngModel)]=\"informacion.titulo\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-textarea rows=\"5\" placeholder=\"Contenido del Recordatorio\" [(ngModel)]=\"informacion.contenido\"></ion-textarea>\n            </ion-item>\n        </ion-list>\n    </div>\n\n    <div class=\"divider\"></div>\n\n    <ion-list>\n        <ion-item-divider color=\"light\">\n            <ion-label class=\"ion-text-wrap\">Configuraciones</ion-label>\n        </ion-item-divider>\n    </ion-list>\n\n    <div class=\"divider blanco\">\n        <ion-list>\n            <ion-item lines=\"none\" class=\"ion-margin-bottom\">\n                <ion-checkbox [checked]=\"recheckedRecord\" slot=\"start\" color=\"success\" (ionChange)=\"repetir( $event )\"></ion-checkbox>\n                <ion-label class=\"ion-text-wrap\">Seguir recordando al usuario cada hora</ion-label>\n            </ion-item>\n            <ion-item-divider class=\"anuncio\">\n                <ion-label class=\"ion-text-wrap\">Le recuerda al usuario hasta que confirme que visualizó el recordatorio</ion-label>\n            </ion-item-divider>\n\n            <ion-item lines=\"none\" class=\"ion-margin-bottom\">\n                <ion-checkbox [checked]=\"repetirchecked\" slot=\"start\" color=\"success\" (ionChange)=\"reprogramar( $event )\"></ion-checkbox>\n                <ion-label class=\"ion-text-wrap\">Ejecutar de nuevo el recordatorio con el tiempo que tiene configurado</ion-label>\n            </ion-item>\n            <ion-item-divider class=\"anuncio\">\n                <ion-label class=\"ion-text-wrap\">Programa una nueva fecha para la ejecución del recordatorio en base a la frecuencia configurada </ion-label>\n            </ion-item-divider>\n\n\n        </ion-list>\n\n    </div>\n</ion-content>");

/***/ }),

/***/ "xNeQ":
/*!*************************************************************************!*\
  !*** ./src/app/pages/Recordatorios/recordatorio/recordatorio.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  margin: 0px;\n}\n\n.color-verde {\n  color: var(--ion-color-success);\n}\n\n.select {\n  border: 2px solid var(--ion-color-success) !important;\n}\n\n.nada {\n  width: 100%;\n  padding: 10px;\n  background: #fafafa;\n  opacity: 0.7;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.nada h3 {\n  font-size: 22px;\n  font-weight: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVjb3JkYXRvcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxREFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoicmVjb3JkYXRvcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIG1hcmdpbjogMHB4XHJcbn1cclxuXHJcbi5jb2xvci12ZXJkZSB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG59XHJcblxyXG4uc2VsZWN0IHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmFkYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgb3BhY2l0eTogLjc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubmFkYSBoMyB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG59Il19 */");

/***/ }),

/***/ "ytyx":
/*!*************************************************************************!*\
  !*** ./src/app/pages/Recordatorios/recordatorio/recordatorio.module.ts ***!
  \*************************************************************************/
/*! exports provided: RecordatorioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordatorioPageModule", function() { return RecordatorioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _recordatorio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recordatorio-routing.module */ "GzdQ");
/* harmony import */ var _recordatorio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recordatorio.page */ "89us");
/* harmony import */ var _Modales_recordatorio_modal_recordatorio_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Modales/recordatorio-modal/recordatorio-modal.module */ "APG/");
/* harmony import */ var _Modales_recordatorio_modal_recordatorio_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Modales/recordatorio-modal/recordatorio-modal.page */ "+sX1");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");










let RecordatorioPageModule = class RecordatorioPageModule {
};
RecordatorioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _Modales_recordatorio_modal_recordatorio_modal_page__WEBPACK_IMPORTED_MODULE_8__["RecordatorioModalPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _recordatorio_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecordatorioPageRoutingModule"],
            _Modales_recordatorio_modal_recordatorio_modal_module__WEBPACK_IMPORTED_MODULE_7__["RecordatorioModalPageModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"]
        ],
        declarations: [_recordatorio_page__WEBPACK_IMPORTED_MODULE_6__["RecordatorioPage"]]
    })
], RecordatorioPageModule);



/***/ })

}]);
//# sourceMappingURL=Recordatorios-recordatorio-recordatorio-module.js.map