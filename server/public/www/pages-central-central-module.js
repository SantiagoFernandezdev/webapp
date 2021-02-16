(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-central-central-module"],{

/***/ "2m8S":
/*!***********************************************!*\
  !*** ./src/app/pages/central/central.page.ts ***!
  \***********************************************/
/*! exports provided: CentralPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentralPage", function() { return CentralPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_central_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./central.page.html */ "NGGT");
/* harmony import */ var _central_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./central.page.scss */ "R0fe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _providers_Registro_registro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/Registro/registro.service */ "3qam");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _providers_cargas_Entradas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/cargas/Entradas.service */ "FlrC");








let CentralPage = class CentralPage {
    // @ViewChild('tab', { static: true, read: IonTabs }) private tabsRef: IonTabs;
    // v: any = '';
    constructor(registroService, almacenamiento, menuCtrl, entrada) {
        this.registroService = registroService;
        this.almacenamiento = almacenamiento;
        this.menuCtrl = menuCtrl;
        this.entrada = entrada;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(true, 'perfilMenu').then(() => {
            // this.obtenerTab(this.tabsRef.outlet.activatedRouteData['animation']);
        });
    }
    suscribe() {
        // console.log('click')
        this.entrada.alerta('click');
    }
    abrirMenu() {
        // console.log('Hola');
        this.menuCtrl.toggle('perfilMenu').then((e) => {
            // console.log('Bine', e)
        }).catch((e) => {
            // console.log('Mal', e)
        });
    }
};
CentralPage.ctorParameters = () => [
    { type: _providers_Registro_registro_service__WEBPACK_IMPORTED_MODULE_4__["RegistroService"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_5__["InicioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
    { type: _providers_cargas_Entradas_service__WEBPACK_IMPORTED_MODULE_7__["EntradasServices"] }
];
CentralPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-central',
        template: _raw_loader_central_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_central_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CentralPage);



/***/ }),

/***/ "NGGT":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/central/central.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n    <ion-tab-bar slot=\"bottom\" color=\"muro\">\n\n        <ion-tab-button tab=\"iniciosan\" (click)=\"suscribe()\">\n            <ion-icon name=\"home\"></ion-icon>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"buscar\">\n            <ion-icon name=\"search\"></ion-icon>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"creador\" color=\"success\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-tab-button>\n\n        <ion-tab-button seleted tab=\"perfil\">\n            <ion-icon name=\"person\"></ion-icon>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"menu\">\n            <ion-icon name=\"menu\"></ion-icon>\n        </ion-tab-button>\n\n    </ion-tab-bar>\n</ion-tabs>");

/***/ }),

/***/ "R0fe":
/*!*************************************************!*\
  !*** ./src/app/pages/central/central.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZW50cmFsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "mh8C":
/*!*************************************************!*\
  !*** ./src/app/pages/central/central.module.ts ***!
  \*************************************************/
/*! exports provided: CentralPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentralPageModule", function() { return CentralPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _central_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./central.page */ "2m8S");







const routes = [
    {
        path: '',
        component: _central_page__WEBPACK_IMPORTED_MODULE_6__["CentralPage"],
        children: [
            {
                path: 'perfil',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | usuario-perfil-perfil-module */[__webpack_require__.e("default~Santiago-sancreador-sancreador-module~Santiago-saninicio-saninicio-module~usuario-perfil-per~52db56a5"), __webpack_require__.e("default~usuario-perfil-perfil-module~usuario-perfil-visita-perfil-visita-module"), __webpack_require__.e("common"), __webpack_require__.e("usuario-perfil-perfil-module")]).then(__webpack_require__.bind(null, /*! ../usuario/perfil/perfil.module */ "wZq1")).then((m) => m.PerfilPageModule)
                    },
                    {
                        path: 'solicitudes',
                        children: [
                            {
                                path: '',
                                loadChildren: () => __webpack_require__.e(/*! import() | usuario-solicitudes-solicitudes-module */ "usuario-solicitudes-solicitudes-module").then(__webpack_require__.bind(null, /*! ../usuario/solicitudes/solicitudes.module */ "erKi")).then((m) => m.SolicitudesPageModule),
                                data: {
                                    animation: 'SolicitudUsuario'
                                }
                            },
                        ]
                    }
                ],
            },
            {
                path: 'buscar',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | buscar-buscar-module */ "buscar-buscar-module").then(__webpack_require__.bind(null, /*! ../buscar/buscar.module */ "1+1D")).then((m) => m.BuscarPageModule),
                        data: {
                            animation: 'BuscarUsuario'
                        }
                    },
                    {
                        path: 'perfil-visita/:usuario',
                        children: [
                            {
                                path: '',
                                loadChildren: () => Promise.all(/*! import() | usuario-perfil-visita-perfil-visita-module */[__webpack_require__.e("default~Santiago-sancreador-sancreador-module~Santiago-saninicio-saninicio-module~usuario-perfil-per~52db56a5"), __webpack_require__.e("default~usuario-perfil-perfil-module~usuario-perfil-visita-perfil-visita-module"), __webpack_require__.e("usuario-perfil-visita-perfil-visita-module")]).then(__webpack_require__.bind(null, /*! ../usuario/perfil-visita/perfil-visita.module */ "O/O5")).then((m) => m.PerfilVisitaPageModule)
                            }
                        ]
                    }
                ]
            },
            {
                path: 'menu',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | menu-menu-module */ "menu-menu-module").then(__webpack_require__.bind(null, /*! ../menu/menu.module */ "+eMj")).then((m) => m.MenuPageModule)
                    },
                    {
                        path: 'solicitudes',
                        loadChildren: () => __webpack_require__.e(/*! import() | usuario-solicitudes-solicitudes-module */ "usuario-solicitudes-solicitudes-module").then(__webpack_require__.bind(null, /*! ../usuario/solicitudes/solicitudes.module */ "erKi")).then(m => m.SolicitudesPageModule)
                    },
                    {
                        path: 'miscitas',
                        children: [
                            {
                                path: '',
                                loadChildren: () => __webpack_require__.e(/*! import() | EstadoCitas-citas-citas-module */ "EstadoCitas-citas-citas-module").then(__webpack_require__.bind(null, /*! ../EstadoCitas/citas/citas.module */ "5EfH")).then(m => m.CitasPageModule)
                            },
                            {
                                path: 'hoja/:id',
                                loadChildren: () => __webpack_require__.e(/*! import() | EstadoCitas-hoja-hoja-module */ "EstadoCitas-hoja-hoja-module").then(__webpack_require__.bind(null, /*! ../EstadoCitas/hoja/hoja.module */ "7cAv")).then(m => m.HojaPageModule)
                            }
                        ]
                    },
                    {
                        path: 'hoja',
                        children: [
                            {
                                path: '',
                                loadChildren: () => __webpack_require__.e(/*! import() | HojadeVida-hoja-hoja-module */ "HojadeVida-hoja-hoja-module").then(__webpack_require__.bind(null, /*! ../HojadeVida/hoja/hoja.module */ "Fe5k")).then(m => m.HojaPageModule)
                            },
                            {
                                path: 'mihoja/:id/:tipo',
                                loadChildren: () => __webpack_require__.e(/*! import() | EstadoCitas-hoja-hoja-module */ "EstadoCitas-hoja-hoja-module").then(__webpack_require__.bind(null, /*! ../EstadoCitas/hoja/hoja.module */ "7cAv")).then(m => m.HojaPageModule)
                            }
                        ]
                    },
                    {
                        path: 'factura',
                        children: [
                            {
                                path: '',
                                // tslint:disable-next-line:max-line-length
                                loadChildren: () => __webpack_require__.e(/*! import() | Facturas-factura-inicio-factura-inicio-module */ "Facturas-factura-inicio-factura-inicio-module").then(__webpack_require__.bind(null, /*! ../Facturas/factura-inicio/factura-inicio.module */ "ZDfU")).then(m => m.FacturaInicioPageModule)
                            },
                            {
                                path: 'factura-configuracion',
                                // tslint:disable-next-line:max-line-length
                                loadChildren: () => Promise.all(/*! import() | Facturas-factura-configuracion-factura-configuracion-module */[__webpack_require__.e("common"), __webpack_require__.e("Facturas-factura-configuracion-factura-configuracion-module")]).then(__webpack_require__.bind(null, /*! ../Facturas/factura-configuracion/factura-configuracion.module */ "B9W8")).then(m => m.FacturaConfiguracionPageModule)
                            },
                            {
                                path: 'factura-nueva',
                                loadChildren: () => Promise.all(/*! import() | Facturas-factura-nueva-factura-nueva-module */[__webpack_require__.e("common"), __webpack_require__.e("Facturas-factura-nueva-factura-nueva-module")]).then(__webpack_require__.bind(null, /*! ../Facturas/factura-nueva/factura-nueva.module */ "NaAF")).then(m => m.FacturaNuevaPageModule)
                            },
                        ]
                    },
                    {
                        path: 'recordatorios',
                        children: [
                            {
                                path: '',
                                loadChildren: () => __webpack_require__.e(/*! import() | Recordatorios-recordatorio-recordatorio-module */ "Recordatorios-recordatorio-recordatorio-module").then(__webpack_require__.bind(null, /*! ../Recordatorios/recordatorio/recordatorio.module */ "ytyx")).then(m => m.RecordatorioPageModule)
                            }
                        ]
                    },
                    {
                        path: 'notificaciones',
                        children: [
                            {
                                path: '',
                                loadChildren: () => __webpack_require__.e(/*! import() | notificaciones-notificaciones-module */ "notificaciones-notificaciones-module").then(__webpack_require__.bind(null, /*! ../notificaciones/notificaciones.module */ "E7SW")).then(m => m.NotificacionesPageModule)
                            }
                        ]
                    },
                    {
                        path: 'empleados',
                        children: [
                            {
                                path: '',
                                loadChildren: () => __webpack_require__.e(/*! import() | empleados-empleados-module */ "empleados-empleados-module").then(__webpack_require__.bind(null, /*! ../empleados/empleados.module */ "sTCq")).then(m => m.EmpleadosPageModule)
                            }
                        ]
                    },
                    {
                        path: 'ivt-inicio',
                        children: [
                            {
                                path: '',
                                loadChildren: () => Promise.all(/*! import() | Inventarios-ivt-inicio-ivt-inicio-module */[__webpack_require__.e("default~Inventarios-ivt-inicio-ivt-inicio-module~Inventarios-ivtcategorias-ivtcategorias-module~Inve~ec849590"), __webpack_require__.e("common"), __webpack_require__.e("Inventarios-ivt-inicio-ivt-inicio-module")]).then(__webpack_require__.bind(null, /*! ../Inventarios/ivt-inicio/ivt-inicio.module */ "LXKQ")).then(m => m.IvtInicioPageModule)
                            }
                        ]
                    },
                    {
                        path: 'ivt-miinventario/:id',
                        children: [
                            {
                                path: '',
                                // tslint:disable-next-line:max-line-length
                                loadChildren: () => __webpack_require__.e(/*! import() | Inventarios-ivt-miinventario-ivt-miinventario-module */ "Inventarios-ivt-miinventario-ivt-miinventario-module").then(__webpack_require__.bind(null, /*! ../Inventarios/ivt-miinventario/ivt-miinventario.module */ "V+2o")).then(m => m.IvtMiinventarioPageModule)
                            },
                            {
                                path: 'empleados/:id',
                                children: [
                                    {
                                        path: '',
                                        // tslint:disable-next-line:max-line-length
                                        loadChildren: () => __webpack_require__.e(/*! import() | Inventarios-ivtempleados-ivtempleados-module */ "Inventarios-ivtempleados-ivtempleados-module").then(__webpack_require__.bind(null, /*! ../Inventarios/ivtempleados/ivtempleados.module */ "PKKH")).then(m => m.IVTempleadosPageModule)
                                    }
                                ]
                            },
                            {
                                path: 'proveedores/:id',
                                children: [
                                    {
                                        path: '',
                                        // tslint:disable-next-line:max-line-length
                                        loadChildren: () => Promise.all(/*! import() | Inventarios-ivtproveedores-ivtproveedores-module */[__webpack_require__.e("default~Inventarios-ivt-inicio-ivt-inicio-module~Inventarios-ivtcategorias-ivtcategorias-module~Inve~ec849590"), __webpack_require__.e("common"), __webpack_require__.e("Inventarios-ivtproveedores-ivtproveedores-module")]).then(__webpack_require__.bind(null, /*! ../Inventarios/ivtproveedores/ivtproveedores.module */ "PlGv")).then(m => m.IVTProveedoresPageModule)
                                    }
                                ]
                            },
                            {
                                path: 'categorias/:id',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: () => Promise.all(/*! import() | Inventarios-ivtcategorias-ivtcategorias-module */[__webpack_require__.e("default~Inventarios-ivt-inicio-ivt-inicio-module~Inventarios-ivtcategorias-ivtcategorias-module~Inve~ec849590"), __webpack_require__.e("Inventarios-ivtcategorias-ivtcategorias-module")]).then(__webpack_require__.bind(null, /*! ../Inventarios/ivtcategorias/ivtcategorias.module */ "oaNa")).then(m => m.IVTcategoriasPageModule)
                                    },
                                ]
                            },
                            {
                                path: 'productos/:id',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: () => Promise.all(/*! import() | Inventarios-ivtproductos-ivtproductos-module */[__webpack_require__.e("default~Inventarios-ivt-inicio-ivt-inicio-module~Inventarios-ivtcategorias-ivtcategorias-module~Inve~ec849590"), __webpack_require__.e("Inventarios-ivtproductos-ivtproductos-module")]).then(__webpack_require__.bind(null, /*! ../Inventarios/ivtproductos/ivtproductos.module */ "t8Hx")).then(m => m.IVTproductosPageModule)
                                    }
                                ]
                            },
                            {
                                path: 'productos/:id/:modal',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: () => Promise.all(/*! import() | Inventarios-ivtproductos-ivtproductos-module */[__webpack_require__.e("default~Inventarios-ivt-inicio-ivt-inicio-module~Inventarios-ivtcategorias-ivtcategorias-module~Inve~ec849590"), __webpack_require__.e("Inventarios-ivtproductos-ivtproductos-module")]).then(__webpack_require__.bind(null, /*! ../Inventarios/ivtproductos/ivtproductos.module */ "t8Hx")).then(m => m.IVTproductosPageModule)
                                    }
                                ]
                            },
                            {
                                path: 'productos',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: () => Promise.all(/*! import() | Inventarios-ivtproductos-ivtproductos-module */[__webpack_require__.e("default~Inventarios-ivt-inicio-ivt-inicio-module~Inventarios-ivtcategorias-ivtcategorias-module~Inve~ec849590"), __webpack_require__.e("Inventarios-ivtproductos-ivtproductos-module")]).then(__webpack_require__.bind(null, /*! ../Inventarios/ivtproductos/ivtproductos.module */ "t8Hx")).then(m => m.IVTproductosPageModule)
                                    }
                                ]
                            },
                            {
                                path: 'entradas/:id',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: () => Promise.all(/*! import() | Inventarios-ivtentradas-ivtentradas-module */[__webpack_require__.e("default~Inventarios-ivt-inicio-ivt-inicio-module~Inventarios-ivtcategorias-ivtcategorias-module~Inve~ec849590"), __webpack_require__.e("Inventarios-ivtentradas-ivtentradas-module")]).then(__webpack_require__.bind(null, /*! ../Inventarios/ivtentradas/ivtentradas.module */ "LwKO")).then(m => m.IVTentradasPageModule)
                                    }
                                ]
                            },
                            {
                                path: 'salidas/:id/:creador',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: () => Promise.all(/*! import() | Inventarios-ivtsalidas-ivtsalidas-module */[__webpack_require__.e("default~Inventarios-ivt-inicio-ivt-inicio-module~Inventarios-ivtcategorias-ivtcategorias-module~Inve~ec849590"), __webpack_require__.e("common"), __webpack_require__.e("Inventarios-ivtsalidas-ivtsalidas-module")]).then(__webpack_require__.bind(null, /*! ../Inventarios/ivtsalidas/ivtsalidas.module */ "sUzL")).then(m => m.IVTsalidasPageModule)
                                    }
                                ]
                            },
                            {
                                path: 'ivt-configuracion/:id',
                                children: [
                                    {
                                        path: '',
                                        // tslint:disable-next-line:max-line-length
                                        loadChildren: () => __webpack_require__.e(/*! import() | Inventarios-ivt-configuracion-ivt-configuracion-module */ "Inventarios-ivt-configuracion-ivt-configuracion-module").then(__webpack_require__.bind(null, /*! ../Inventarios/ivt-configuracion/ivt-configuracion.module */ "u6L1")).then(m => m.IvtConfiguracionPageModule)
                                    }
                                ]
                            },
                            {
                                path: 'ivt-movimientos/:id',
                                children: [
                                    {
                                        path: '',
                                        // tslint:disable-next-line:max-line-length
                                        loadChildren: () => __webpack_require__.e(/*! import() | Inventarios-ivt-movimientos-ivt-movimientos-module */ "Inventarios-ivt-movimientos-ivt-movimientos-module").then(__webpack_require__.bind(null, /*! ../Inventarios/ivt-movimientos/ivt-movimientos.module */ "4YEd")).then(m => m.IvtMovimientosPageModule)
                                    }
                                ]
                            },
                            {
                                path: 'ivt-estadisticas/:id',
                                children: [
                                    {
                                        path: '',
                                        // tslint:disable-next-line:max-line-length
                                        loadChildren: () => __webpack_require__.e(/*! import() | Inventarios-ivt-estadisticas-ivt-estadisticas-module */ "Inventarios-ivt-estadisticas-ivt-estadisticas-module").then(__webpack_require__.bind(null, /*! ../Inventarios/ivt-estadisticas/ivt-estadisticas.module */ "/kkW")).then(m => m.IvtEstadisticasPageModule)
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        path: 'grua',
                        children: [
                            {
                                path: '',
                                loadChildren: () => Promise.all(/*! import() | Mapas-grua-grua-module */[__webpack_require__.e("default~Mapas-control-mapas-control-mapas-module~Mapas-grua-grua-module"), __webpack_require__.e("Mapas-grua-grua-module")]).then(__webpack_require__.bind(null, /*! ../Mapas/grua/grua.module */ "flfU")).then(m => m.GruaPageModule)
                            }
                        ]
                    },
                    {
                        path: 'inicioMapa',
                        children: [
                            {
                                path: '',
                                loadChildren: () => __webpack_require__.e(/*! import() | Mapas-inicio-inicio-module */ "Mapas-inicio-inicio-module").then(__webpack_require__.bind(null, /*! ../Mapas/inicio/inicio.module */ "eXPJ")).then(m => m.InicioPageModule)
                            }
                        ]
                    },
                    {
                        path: 'sedeMapa',
                        children: [
                            {
                                path: '',
                                loadChildren: () => Promise.all(/*! import() | Mapas-sedes-mapa-sedes-mapa-module */[__webpack_require__.e("common"), __webpack_require__.e("Mapas-sedes-mapa-sedes-mapa-module")]).then(__webpack_require__.bind(null, /*! ../Mapas/sedes-mapa/sedes-mapa.module */ "qfE0")).then(m => m.SedesMapaPageModule)
                            }
                        ]
                    },
                    {
                        path: 'control-mapas',
                        children: [
                            {
                                path: '',
                                loadChildren: () => Promise.all(/*! import() | Mapas-control-mapas-control-mapas-module */[__webpack_require__.e("default~Mapas-control-mapas-control-mapas-module~Mapas-grua-grua-module"), __webpack_require__.e("common"), __webpack_require__.e("Mapas-control-mapas-control-mapas-module")]).then(__webpack_require__.bind(null, /*! ../Mapas/control-mapas/control-mapas.module */ "alRM")).then(m => m.ControlMapasPageModule)
                            }
                        ]
                    }
                ]
            },
            {
                path: 'iniciosan',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | Santiago-saninicio-saninicio-module */[__webpack_require__.e("default~Santiago-sancreador-sancreador-module~Santiago-saninicio-saninicio-module~usuario-perfil-per~52db56a5"), __webpack_require__.e("common"), __webpack_require__.e("Santiago-saninicio-saninicio-module")]).then(__webpack_require__.bind(null, /*! ../Santiago/saninicio/saninicio.module */ "gytv")).then(m => m.SANinicioPageModule)
                    }
                ]
            },
            {
                path: 'creador',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | Santiago-sancreador-sancreador-module */[__webpack_require__.e("default~Santiago-sancreador-sancreador-module~Santiago-saninicio-saninicio-module~usuario-perfil-per~52db56a5"), __webpack_require__.e("common"), __webpack_require__.e("Santiago-sancreador-sancreador-module")]).then(__webpack_require__.bind(null, /*! ../Santiago/sancreador/sancreador.module */ "AqZ+")).then(m => m.SANcreadorPageModule)
                    }
                ]
            },
            {
                path: 'creador/:tipo',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | Santiago-sancreador-sancreador-module */[__webpack_require__.e("default~Santiago-sancreador-sancreador-module~Santiago-saninicio-saninicio-module~usuario-perfil-per~52db56a5"), __webpack_require__.e("common"), __webpack_require__.e("Santiago-sancreador-sancreador-module")]).then(__webpack_require__.bind(null, /*! ../Santiago/sancreador/sancreador.module */ "AqZ+")).then(m => m.SANcreadorPageModule)
                    }
                ]
            },
            {
                path: 'seguridad',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | Seguridad-clave-clave-module */ "Seguridad-clave-clave-module").then(__webpack_require__.bind(null, /*! ../Seguridad/clave/clave.module */ "lBrD")).then(m => m.ClavePageModule)
                    }
                ]
            },
            {
                path: 'tickets/:id',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | Tickets-inicio-tickets-inicio-tickets-module */ "Tickets-inicio-tickets-inicio-tickets-module").then(__webpack_require__.bind(null, /*! ../Tickets/inicio-tickets/inicio-tickets.module */ "+Hj7")).then(m => m.InicioTicketsPageModule)
                    },
                    {
                        path: 'ticketsala/:sala',
                        loadChildren: () => __webpack_require__.e(/*! import() | Tickets-tickets-sala-tickets-sala-module */ "Tickets-tickets-sala-tickets-sala-module").then(__webpack_require__.bind(null, /*! ../Tickets/tickets-sala/tickets-sala.module */ "KwZs")).then(m => m.TicketsSalaPageModule)
                    },
                ]
            },
            {
                path: 'tickets',
                children: [
                    {
                        path: '',
                        // tslint:disable-next-line:max-line-length
                        loadChildren: () => __webpack_require__.e(/*! import() | Tickets-inicio-tickets-personas-inicio-tickets-personas-module */ "Tickets-inicio-tickets-personas-inicio-tickets-personas-module").then(__webpack_require__.bind(null, /*! ../Tickets/inicio-tickets-personas/inicio-tickets-personas.module */ "+Aiu")).then(m => m.InicioTicketsPersonasPageModule)
                    },
                    {
                        path: 'tallerticket/:id',
                        loadChildren: () => __webpack_require__.e(/*! import() | Tickets-taller-ticket-taller-ticket-module */ "Tickets-taller-ticket-taller-ticket-module").then(__webpack_require__.bind(null, /*! ../Tickets/taller-ticket/taller-ticket.module */ "NlP8")).then(m => m.TallerTicketPageModule)
                    },
                ]
            },
            {
                path: 'pedidos',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | Pedidos-pedidos-inicio-pedidos-inicio-module */ "Pedidos-pedidos-inicio-pedidos-inicio-module").then(__webpack_require__.bind(null, /*! ../Pedidos/pedidos-inicio/pedidos-inicio.module */ "1XrT")).then(m => m.PedidosInicioPageModule)
                    },
                    {
                        path: 'info/:id',
                        loadChildren: () => __webpack_require__.e(/*! import() | Pedidos-pedido-info-pedido-info-module */ "Pedidos-pedido-info-pedido-info-module").then(__webpack_require__.bind(null, /*! ../Pedidos/pedido-info/pedido-info.module */ "6V7b")).then(m => m.PedidoInfoPageModule)
                    },
                    {
                        path: 'mapa/:tipo/:id',
                        loadChildren: () => __webpack_require__.e(/*! import() | Pedidos-pedidos-mapa-pedidos-mapa-module */ "Pedidos-pedidos-mapa-pedidos-mapa-module").then(__webpack_require__.bind(null, /*! ../Pedidos/pedidos-mapa/pedidos-mapa.module */ "uIXr")).then(m => m.PedidosMapaPageModule)
                    }
                ]
            },
            {
                path: 'citas/:id',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | EstadoCitas-citas-citas-module */ "EstadoCitas-citas-citas-module").then(__webpack_require__.bind(null, /*! ../EstadoCitas/citas/citas.module */ "5EfH")).then(m => m.CitasPageModule)
                    },
                ]
            },
            {
                path: 'chats',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | Salas-salas-inicio-salas-inicio-module */ "Salas-salas-inicio-salas-inicio-module").then(__webpack_require__.bind(null, /*! ../Salas/salas-inicio/salas-inicio.module */ "pICn")).then(m => m.SalasInicioPageModule)
                    },
                    {
                        path: 'chat',
                        loadChildren: () => __webpack_require__.e(/*! import() | Salas-salas-chat-salas-chat-module */ "Salas-salas-chat-salas-chat-module").then(__webpack_require__.bind(null, /*! ../Salas/salas-chat/salas-chat.module */ "wYDu")).then(m => m.SalasChatPageModule)
                    },
                    {
                        path: 'modal-chat/:id',
                        loadChildren: () => __webpack_require__.e(/*! import() | Salas-sala-modal-chat-sala-modal-chat-module */ "Salas-sala-modal-chat-sala-modal-chat-module").then(__webpack_require__.bind(null, /*! ../Salas/sala-modal-chat/sala-modal-chat.module */ "mpxO")).then(m => m.SalaModalChatPageModule)
                    },
                    {
                        path: 'modal-chat/:id/:tipo',
                        loadChildren: () => __webpack_require__.e(/*! import() | Salas-sala-modal-chat-sala-modal-chat-module */ "Salas-sala-modal-chat-sala-modal-chat-module").then(__webpack_require__.bind(null, /*! ../Salas/sala-modal-chat/sala-modal-chat.module */ "mpxO")).then(m => m.SalaModalChatPageModule)
                    },
                ]
            },
            {
                path: 'patinadas',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | Patinadas-patinadas-inicio-patinadas-inicio-module */ "Patinadas-patinadas-inicio-patinadas-inicio-module").then(__webpack_require__.bind(null, /*! ../Patinadas/patinadas-inicio/patinadas-inicio.module */ "Cw8s")).then(m => m.PatinadasInicioPageModule)
                    },
                ]
            },
            {
                path: 'mispatinadas',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | Patinadas-patinadas-mias-patinadas-mias-module */ "Patinadas-patinadas-mias-patinadas-mias-module").then(__webpack_require__.bind(null, /*! ../Patinadas/patinadas-mias/patinadas-mias.module */ "ORVy")).then(m => m.PatinadasMiasPageModule)
                    }
                ]
            },
            {
                path: '**',
                redirectTo: '/central/menu'
            }
        ]
    }
];
let CentralPageModule = class CentralPageModule {
};
CentralPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_central_page__WEBPACK_IMPORTED_MODULE_6__["CentralPage"]]
    })
], CentralPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-central-central-module.js.map