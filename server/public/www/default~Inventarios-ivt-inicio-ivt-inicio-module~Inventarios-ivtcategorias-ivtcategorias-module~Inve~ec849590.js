(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Inventarios-ivt-inicio-ivt-inicio-module~Inventarios-ivtcategorias-ivtcategorias-module~Inve~ec849590"],{

/***/ "SQQW":
/*!***************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-modal/ivt-modal.page.ts ***!
  \***************************************************************/
/*! exports provided: IvtModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvtModalPage", function() { return IvtModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ivt_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ivt-modal.page.html */ "nxvD");
/* harmony import */ var _ivt_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ivt-modal.page.scss */ "UEp0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/Api/Inventarios.service */ "5yQV");
/* harmony import */ var _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/Almacenamiento/inicio.service */ "fsfq");
/* harmony import */ var _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/Utilidades/ToastService.service */ "fmoy");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");









let IvtModalPage = class IvtModalPage {
    constructor(modalCtrl, ivtApi, almacenamiento, toast, socket) {
        this.modalCtrl = modalCtrl;
        this.ivtApi = ivtApi;
        this.almacenamiento = almacenamiento;
        this.toast = toast;
        this.socket = socket;
        this.color = '';
        this.vista = '';
        this.titulo = '';
        this.ivt = {
            simple: false,
            avanzado: false
        };
        this.ivtTipo = '';
        this.nombre = 'Mi inventario';
        this.nombrep = '';
        this.tel1 = '';
        this.tel2 = '';
        this.correo = '';
        this.nombrec = '';
        this.load = false;
        this.categorias = [];
        this.proveedores = [];
        this.nombrepd = '';
        this.codigopd = '';
        this.limite = 0;
        this.selectCat = '';
        this.selectPro = '';
        // Movimientos
        this.productos = [];
        this.texto = '';
        this.mostrar = false;
        this.productoHistoria = {};
        this.productoEntrada = {
            producto: '',
            cantidad: undefined,
            precio: undefined,
            origen: '',
            origenextra: '',
            total: 0,
            ivt: '',
            mensaje: '',
            nombre: '',
            codigo: ''
        };
        this.productoSalida = {
            producto: '',
            cantidad: undefined,
            precio: undefined,
            destino: '',
            destinoivt: '',
            prodDestino: '',
            total: 0,
            ivt: '',
            mensaje: '',
            nombre: '',
            codigo: '',
            mensaje2: '',
            creador: '',
            producto2: '',
            nombre2: '',
            codigo2: ''
        };
        this.ivtPadre = false;
        this.inventarios = [];
        this.productosHijos = [];
        this.ivtSelect = '';
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.entrada();
    }
    entrada() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.tipo === 'crear') {
                this.vista = 'crear';
                this.titulo = 'Creando Inventario';
                this.color = 'barra';
            }
            else if (this.tipo === 'proveedores') {
                this.vista = 'proveedores';
                this.titulo = 'Creando Proveedor';
            }
            else if (this.tipo === 'categorias') {
                this.vista = 'categorias';
                this.titulo = 'Creando Categoría';
            }
            else if (this.tipo === 'productos') {
                this.vista = 'productos';
                this.titulo = 'Creando Producto';
                yield this.cargarCategorias();
                yield this.cargarProveedores();
            }
            else if (this.tipo === 'editarproductos') {
                this.vista = 'editarproductos';
                this.titulo = 'Editar Producto';
                this.nombrepd = this.producto.nombre;
                this.codigopd = this.producto.codigo;
                this.limite = this.producto.limite;
                // console.log(this.producto)
                yield this.cargarCategorias();
                yield this.cargarProveedores();
                this.selectCat = this.producto.categoria;
                this.selectPro = this.producto.proveedor;
            }
            else if (this.tipo === 'entradas') {
                this.vista = 'entradas';
                this.color = 'success';
                this.titulo = 'Registrar Nueva Entrada';
                this.productoEntrada.ivt = this.inventario;
                this.cargarProveedores();
                this.cargarInventario();
            }
            else if (this.tipo === 'salidas') {
                this.vista = 'salidas';
                this.color = 'success';
                this.titulo = 'Registrar Nueva Salida';
                this.productoSalida.ivt = this.inventario;
                this.cargarInventarios();
            }
        });
    }
    cargarInventarios() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load = true;
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.carga = true;
                this.ivtApi.CargarInventarios(info.token, { creador: this.creador }).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    // console.log(data, this.creador);
                    if (data.exe) {
                        yield this.slide.lockSwipes(true);
                        data.response.forEach((ivt) => {
                            if (ivt._id !== this.inventario) {
                                this.inventarios.push(ivt);
                            }
                            else {
                                this.accesos = ivt.accesos;
                            }
                        });
                    }
                    else {
                        this.toast.toastError('No se traer la lista de inventarios, intentelo más tarde');
                    }
                    this.load = false;
                }), (err) => {
                    this.toast.toastError('No se pudo crear el inventario, intentelo más tarde');
                    this.load = false;
                });
            }
        });
    }
    cargarInventario() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load = true;
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.carga = true;
                this.ivtApi.leerInventario(info.token, this.inventario).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (data.exe) {
                        this.accesos = data.accesos;
                    }
                    else {
                        this.toast.toastError('No se pudo traer el inventario, intentelo más tarde');
                    }
                    this.load = false;
                }), (err) => {
                    this.toast.toastError('No se pudo traer el inventario, intentelo más tarde');
                    this.load = false;
                });
            }
        });
    }
    // Crear
    crear() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load = true;
            const info = yield this.almacenamiento.obtenerToken();
            if (info && this.tipo !== '') {
                this.ivtApi.crearInventario(info.token, { tipo: 'simple', nombre: this.nombre }).subscribe((data) => {
                    if (data.exe) {
                        this.toast.toastExitoso('Inventario creado!');
                    }
                    else {
                        this.toast.toastError('No se pudo crear el inventario, intentelo más tarde');
                    }
                    this.load = false;
                    this.modalCtrl.dismiss({
                        exe: true
                    });
                }, (err) => {
                    this.toast.toastError('No se pudo crear el inventario, intentelo más tarde');
                    this.load = false;
                });
            }
        });
    }
    crearProveedor() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load = true;
            const info = yield this.almacenamiento.obtenerToken();
            if (info && this.tipo !== '') {
                // tslint:disable-next-line:max-line-length
                this.ivtApi.crearProveedor(info.token, { nombre: this.nombrep, tel1: this.tel1, tel2: this.tel2, correo: this.correo, ivt: this.inventario }).subscribe((data) => {
                    if (data.exe) {
                        this.toast.toastExitoso('Proveedor creado!');
                    }
                    else {
                        this.toast.toastError('No se pudo crear el proveedor, intentelo más tarde');
                    }
                    this.load = false;
                    this.modalCtrl.dismiss({
                        exe: true
                    });
                }, (err) => {
                    this.toast.toastError('No se pudo crear el proveedor, intentelo más tarde');
                    this.load = false;
                });
            }
        });
    }
    crearCategoria() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load = true;
            const info = yield this.almacenamiento.obtenerToken();
            if (info && this.tipo !== '') {
                // tslint:disable-next-line:max-line-length
                this.ivtApi.crearCategoria(info.token, { nombre: this.nombrec, ivt: this.inventario }).subscribe((data) => {
                    if (data.exe) {
                        this.toast.toastExitoso('Categoría creado!');
                    }
                    else {
                        this.toast.toastError('No se pudo crear la categoría, intentelo más tarde');
                    }
                    this.load = false;
                    this.modalCtrl.dismiss({
                        exe: true
                    });
                }, (err) => {
                    this.toast.toastError('No se pudo crear la categoría, intentelo más tarde');
                    this.load = false;
                });
            }
        });
    }
    crearProducto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load = true;
            const info = yield this.almacenamiento.obtenerToken();
            if (info && this.tipo !== '') {
                // tslint:disable-next-line:max-line-length
                this.ivtApi.crearProducto(info.token, { nombre: this.nombrepd.trim(), codigo: this.codigopd.trim(), categoria: this.selectCat, proveedor: this.selectPro, inventario: this.inventario, limite: this.limite }).subscribe((data) => {
                    if (data.exe) {
                        this.toast.toastExitoso('Producto creado!');
                        this.modalCtrl.dismiss({ exe: true });
                    }
                    else {
                        this.toast.toastError('No se pudo crear el producto, inténtelo más tarde');
                    }
                    this.load = false;
                    this.modalCtrl.dismiss({
                        exe: true
                    });
                }, (err) => {
                    this.toast.toastError('No se pudo crear el producto, intentelo más tarde');
                    this.load = false;
                });
            }
        });
    }
    editarProducto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load = true;
            const info = yield this.almacenamiento.obtenerToken();
            if (info && this.tipo !== '') {
                // tslint:disable-next-line:max-line-length
                this.ivtApi.editarProducto(info.token, { nombre: this.nombrepd.trim(), codigo: this.codigopd.trim(), categoria: this.selectCat, proveedor: this.selectPro, _id: this.producto._id, limite: this.limite }).subscribe((data) => {
                    if (data.exe) {
                        this.toast.toastExitoso('Producto editado!');
                    }
                    else {
                        this.toast.toastError('No se pudo editar el producto, inténtelo más tarde');
                    }
                    this.load = false;
                    this.modalCtrl.dismiss({
                        exe: true
                    });
                }, (err) => {
                    this.toast.toastError('No se pudo editar el producto, intentelo más tarde');
                    this.load = false;
                });
            }
        });
    }
    cambioCategoria(event) {
        this.selectCat = event.detail.value;
    }
    cambioProveedor(event) {
        this.selectPro = event.detail.value;
        this.productoEntrada.origen = event.detail.value;
    }
    cambioInventario(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.selectPro = event.detail.value.name;
            this.productoSalida.destinoivt = event.detail.value;
            this.ivtSelect = event.detail.value;
            this.ivtPadre = true;
        });
    }
    cargarCategorias() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.ivtApi.leerCategoria(info.token, this.inventario).subscribe((data) => {
                    if (data.exe) {
                        this.categorias = data.response;
                    }
                    else {
                        this.toast.toastError('No se pudo cargar los datos, intentelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo cargar los datos, intentelo más tarde');
                });
            }
        });
    }
    cargarProveedores() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield this.almacenamiento.obtenerToken();
            if (info) {
                this.carga = true;
                this.ivtApi.leerProveedor(info.token, this.inventario).subscribe((data) => {
                    if (data.exe) {
                        if (this.vista === 'entradas') {
                            this.slide.lockSwipes(true).then(() => {
                            }).catch(() => {
                                // console.log('Error')
                            });
                        }
                        this.proveedores = data.response;
                    }
                    else {
                        this.toast.toastError('No se pudo cargar los datos, intentelo más tarde');
                    }
                }, (err) => {
                    this.toast.toastError('No se pudo cargar los datos, intentelo más tarde');
                });
            }
        });
    }
    buscar(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.load = true;
            this.texto = event.detail.value;
            const info = yield this.almacenamiento.obtenerToken();
            if (info && this.tipo !== '' && event.detail.value !== '') {
                this.ivtApi.buscarProducto(info.token, { _id: this.inventario, patron: event.detail.value }).subscribe((data) => {
                    // console.log(data)
                    if (data.exe) {
                        this.productos = data.response;
                        if (data.response.length === 0) {
                            this.mostrar = true;
                        }
                        else {
                            this.mostrar = false;
                        }
                    }
                    else {
                        this.toast.toastError('No se pudo consultar los productos, intentelo más tarde');
                    }
                    this.load = false;
                }, (err) => {
                    this.toast.toastError('No se pudo consultar los productos, intentelo más tarde');
                    this.load = false;
                });
            }
            else {
                this.load = false;
                this.productos = [];
            }
        });
    }
    validarProducto(producto, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.slide.lockSwipes(false);
            yield this.slide.slideNext(300);
            yield this.slide.lockSwipes(true);
            this.productoHistoria = producto;
            this.productoEntrada.producto = this.productoHistoria._id;
            this.productoSalida.producto = this.productoHistoria._id;
        });
    }
    cancelar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.slide.lockSwipes(false);
            yield this.slide.slidePrev(300);
            yield this.slide.lockSwipes(true);
            this.productoHistoria = '';
            this.productoEntrada = {
                producto: '',
                cantidad: undefined,
                precio: undefined,
                origen: '',
                origenextra: '',
                total: 0,
                ivt: '',
                mensaje: '',
                nombre: '',
                codigo: ''
            };
            this.productoSalida = {
                producto: '',
                cantidad: undefined,
                precio: undefined,
                destino: '',
                destinoivt: '',
                prodDestino: '',
                total: 0,
                ivt: '',
                mensaje: '',
                nombre: '',
                codigo: '',
                mensaje2: '',
                creador: '',
                producto2: '',
                nombre2: '',
                codigo2: ''
            };
            this.ivtPadre = false;
            this.ivtSelect = '';
            this.selectPro = '';
        });
    }
    entradaCambioProd(event, tipo) {
        if (tipo === 'precio') {
            this.productoEntrada.precio = event.detail.value;
        }
        else if (tipo === 'canti') {
            this.productoEntrada.cantidad = event.detail.value;
        }
        this.productoEntrada.total = this.productoEntrada.precio * this.productoEntrada.cantidad;
    }
    salidaCambioProd(event, tipo) {
        if (tipo === 'precio') {
            this.productoSalida.precio = event.detail.value;
        }
        else if (tipo === 'canti') {
            this.productoSalida.cantidad = event.detail.value;
        }
        this.productoSalida.total = this.productoSalida.precio * this.productoSalida.cantidad;
    }
    productoHijo(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (event.detail.value !== '') {
                const info = yield this.almacenamiento.obtenerToken();
                if (info) {
                    this.ivtApi.leerProductosPorInventario(info.token, { id: this.ivtSelect, patron: event.detail.value }).subscribe((data) => {
                        // console.log(data)
                        if (data.exe) {
                            this.productosHijos = data.response;
                        }
                        else {
                            this.toast.toastError('No se pudo traer los productos del inventario destino, intentelo más tarde');
                        }
                    }, (err) => {
                        this.toast.toastError('No se pudo traer los productos del inventario destino, intentelo más tarde');
                    });
                }
            }
            else {
                this.productoSalida.prodDestino = '';
            }
        });
    }
    prodDestino(event) {
        // console.log(event);
        const info = this.productosHijos.filter((prod) => prod._id === event.detail.value);
        this.productoSalida.prodDestino = event.detail.value;
        this.productoSalida.producto2 = info[0]._id;
        this.productoSalida.nombre2 = info[0].nombre;
        this.productoSalida.codigo2 = info[0].codigo;
    }
    guardarEntrada() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.productoEntrada.cantidad === 0 || !this.productoEntrada.cantidad || this.productoEntrada.precio === 0 || !this.productoEntrada.precio) {
                this.toast.toastError('Verifique que la cantidad o precio de venta esten diligenciados');
            }
            else {
                const info = yield this.almacenamiento.obtenerToken();
                if (info) {
                    this.productoEntrada.nombre = this.productoHistoria.nombre;
                    this.productoEntrada.codigo = this.productoHistoria.codigo;
                    this.productoEntrada.mensaje = ` Nueva entrada del producto ${this.productoEntrada.nombre} por una cantidad de ${this.productoEntrada.cantidad}. Creado por ${info.nombre}`;
                    this.ivtApi.crearEntrada(info.token, this.productoEntrada).subscribe((data) => {
                        // console.log(data);
                        if (data.exe) {
                            this.socket.emit('eventoIVT', {
                                mensaje: `Nueva entrada del producto ${this.productoEntrada.nombre} por una cantidad de ${this.productoEntrada.cantidad}. Creado por ${info.nombre}`,
                                usuarios: this.accesos,
                                id: this.inventario,
                                tipo: 'entrada'
                            });
                            this.toast.toastExitoso('Entrada creada con éxito!');
                        }
                        else {
                            this.toast.toastError('No se pudo crear la entrada, intentelo más tarde');
                        }
                        this.modalCtrl.dismiss({
                            exe: true
                        });
                    }, (err) => {
                        this.toast.toastError('No se pudo crear la entrada, intentelo más tarde');
                    });
                }
            }
        });
    }
    guardarSalida() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(this.productoHistoria);
            if (this.productoSalida.cantidad === 0 || !this.productoSalida.cantidad || this.productoSalida.precio === 0 || !this.productoSalida.precio) {
                this.toast.toastError('Verifique que la cantidad o precio de venta esten diligenciados');
            }
            else if (this.productoSalida.cantidad > this.productoHistoria.existencia) {
                // tslint:disable-next-line:max-line-length
                this.toast.toastError(`Solo quedan ${this.productoHistoria.existencia} ${this.productoHistoria.nombre} en inventario, no puede sacar más de esa cantidad`);
            }
            else if (this.ivtSelect !== '' && this.productoSalida.prodDestino === '') {
                // tslint:disable-next-line:max-line-length
                this.toast.toastError(`Debe de seleccionar el producto al cual se le va agregar la cantidad despachada`);
            }
            else {
                const info = yield this.almacenamiento.obtenerToken();
                if (info) {
                    this.productoSalida.creador = this.creador;
                    this.productoSalida.nombre = this.productoHistoria.nombre;
                    this.productoSalida.codigo = this.productoHistoria.codigo;
                    // tslint:disable-next-line:max-line-length
                    this.productoSalida.mensaje = `Nueva Salida del producto ${this.productoSalida.nombre} por una cantidad de ${this.productoSalida.cantidad}. Creado por ${info.nombre}`;
                    if (this.productoSalida.prodDestino !== '' && this.productoSalida.destinoivt !== '') {
                        // tslint:disable-next-line:max-line-length
                        this.productoSalida.mensaje2 = `Nueva Entrada del producto ${this.productoSalida.nombre} por una cantidad de ${this.productoSalida.cantidad}. Creado por ${info.nombre}`;
                    }
                    this.ivtApi.crearSalida(info.token, this.productoSalida).subscribe((data) => {
                        // console.log(data);
                        if (data.exe) {
                            this.socket.emit('eventoIVT', {
                                // tslint:disable-next-line:max-line-length
                                mensaje: `Nueva Salida del producto ${this.productoSalida.nombre} por una cantidad de ${this.productoSalida.cantidad}. Creado por ${info.nombre}`,
                                usuarios: this.accesos,
                                creador: this.creador,
                                id: this.inventario,
                                tipo: 'salida'
                            });
                            this.toast.toastExitoso('Salida creada con éxito!');
                            this.cancelar();
                        }
                        else {
                            this.toast.toastError('No se pudo crear la salida, intentelo más tarde');
                        }
                        this.modalCtrl.dismiss({
                            exe: true
                        });
                    }, (err) => {
                        this.toast.toastError('No se pudo crear la salida, intentelo más tarde');
                    });
                }
            }
        });
    }
    cerrar() {
        this.modalCtrl.dismiss({});
    }
};
IvtModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _providers_Api_Inventarios_service__WEBPACK_IMPORTED_MODULE_5__["InventariosService"] },
    { type: _providers_Almacenamiento_inicio_service__WEBPACK_IMPORTED_MODULE_6__["InicioService"] },
    { type: _providers_Utilidades_ToastService_service__WEBPACK_IMPORTED_MODULE_7__["ToastServices"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__["Socket"] }
];
IvtModalPage.propDecorators = {
    tipo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    inventario: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    producto: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    creador: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    accesos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    slide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slide',
                { static: false },] }]
};
IvtModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ivt-modal',
        template: _raw_loader_ivt_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ivt_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IvtModalPage);



/***/ }),

/***/ "UEp0":
/*!*****************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-modal/ivt-modal.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".marginTop {\n  margin-top: 30px;\n}\n\ndiv,\nion-list,\nion-item {\n  width: 100%;\n}\n\n.miflex {\n  display: flex;\n  justify-content: space-between;\n}\n\n.tarjeta {\n  width: calc(50% - 10px);\n  margin: 5px;\n  box-shadow: none;\n  opacity: 0.5;\n  border: 1px solid rgba(3, 3, 3, 0.1);\n  transition: all 0.1s;\n  transform: scale(0.8);\n}\n\n.headercard {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.isSelect {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  opacity: 1;\n  transform: scale(1.1);\n  border: 2px solid var(--ion-color-success);\n}\n\n.colorw {\n  color: #fff !important;\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-item:hover {\n  --background: #E3E7D1 !important;\n}\n\n.tituloGrande {\n  width: 300px;\n  text-align: center;\n}\n\n.verdei {\n  color: #1E8C4A;\n}\n\n.rojoi {\n  color: #C1302C;\n}\n\n.flexbet {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nion-slides {\n  width: 100%;\n  min-height: 100%;\n}\n\nion-slide {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100%;\n}\n\n.tprod {\n  width: 100%;\n  font-size: 20px;\n  background-color: #FFFBE5;\n  padding: 10px;\n}\n\nion-card {\n  width: 100%;\n  padding: auto 0px;\n}\n\n.btn {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaXZ0LW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7OztFQUdJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLHlIQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0oiLCJmaWxlIjoiaXZ0LW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW5Ub3Age1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuZGl2LFxyXG5pb24tbGlzdCxcclxuaW9uLWl0ZW0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5taWZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnRhcmpldGEge1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMywgMywgMywgMC4xKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMXM7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbn1cclxuXHJcbi5oZWFkZXJjYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmlzU2VsZWN0IHtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggM3B4IDFweCAtMnB4LCByZ2JhKDAsIDAsIDAsIDAuMTQpIDBweCAycHggMnB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMXB4IDVweCAwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG59XHJcblxyXG4uY29sb3J3IHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWl0ZW06aG92ZXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRTNFN0QxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aXR1bG9HcmFuZGUge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udmVyZGVpIHtcclxuICAgIGNvbG9yOiAjMUU4QzRBO1xyXG59XHJcblxyXG4ucm9qb2kge1xyXG4gICAgY29sb3I6ICNDMTMwMkM7XHJcbn1cclxuXHJcbi5mbGV4YmV0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaW9uLXNsaWRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udHByb2Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGQkU1O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiBhdXRvIDBweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59Il19 */");

/***/ }),

/***/ "nxvD":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Inventarios/ivt-modal/ivt-modal.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar [color]=\"color\">\n\n        <ion-title>{{ titulo }}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"cerrar()\">\n                <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n    <ion-list *ngIf=\"vista === 'crear'\">\n\n\n        <ion-item-divider lines=\"none\" color=\"light\" class=\"ion-padding\">\n            Nombre del Inventario\n        </ion-item-divider>\n\n        <ion-item>\n            <ion-input [(ngModel)]=\"nombre\" class=\"ion-padding\" type=\"text\" placeholder=\"Escribe el nombre del inventario\"></ion-input>\n        </ion-item>\n\n        <div class=\"ion-padding\">\n            <ion-button class=\"marginTop colorw\" mode=\"ios\" shape=\"round\" expand=\"block\" color=\"warning\" (click)=\"crear()\">CREAR</ion-button>\n        </div>\n\n        <div class=\"center\" *ngIf=\"load\">\n            <ion-spinner name=\"crescent\"></ion-spinner> Creando Inventario...\n        </div>\n    </ion-list>\n\n\n\n    <ion-list *ngIf=\"vista === 'proveedores'\">\n        <ion-item-divider lines=\"none\" color=\"light\" class=\"ion-padding\">\n            Nombre del Proveedor\n        </ion-item-divider>\n        <ion-item>\n            <ion-input [(ngModel)]=\"nombrep\" class=\"ion-padding\" type=\"text\" placeholder=\"Escribe el nombre del proveedor\"></ion-input>\n        </ion-item>\n\n        <ion-item-divider lines=\"none\" color=\"light\" class=\"ion-padding\">\n            Contacto del Proveedor\n        </ion-item-divider>\n\n        <ion-item>\n            <ion-input [(ngModel)]=\"tel1\" class=\"ion-padding\" type=\"number\" placeholder=\"Teléfono de contacto\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-input [(ngModel)]=\"tel2\" class=\"ion-padding\" type=\"number\" placeholder=\"Teléfono adicional\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-input [(ngModel)]=\"correo\" class=\"ion-padding\" type=\"text\" placeholder=\"Correo electrónico de contacto\"></ion-input>\n        </ion-item>\n\n        <div class=\"ion-padding\">\n            <ion-button class=\"marginTop colorw\" mode=\"ios\" shape=\"round\" expand=\"block\" color=\"warning\" (click)=\"crearProveedor()\">CREAR</ion-button>\n        </div>\n\n        <div class=\"center\" *ngIf=\"load\">\n            <ion-spinner color=\"success\" name=\"crescent\"></ion-spinner> Creando Proveedor...\n        </div>\n    </ion-list>\n\n    <ion-list *ngIf=\"vista === 'categorias'\">\n        <ion-item-divider lines=\"none\" color=\"light\" class=\"ion-padding\">\n            Nombre de la Categoría\n        </ion-item-divider>\n        <ion-item>\n            <ion-input [(ngModel)]=\"nombrec\" class=\"ion-padding\" type=\"text\" placeholder=\"Escribe el nombre de la categoría\"></ion-input>\n        </ion-item>\n\n\n        <div class=\"ion-padding\">\n            <ion-button class=\"marginTop colorw\" mode=\"ios\" shape=\"round\" expand=\"block\" color=\"warning\" (click)=\"crearCategoria()\">CREAR</ion-button>\n        </div>\n\n        <div class=\"center\" *ngIf=\"load\">\n            <ion-spinner color=\"success\" name=\"crescent\"></ion-spinner> Creando Categoría...\n        </div>\n    </ion-list>\n\n\n\n    <ion-list *ngIf=\"vista === 'productos'\">\n        <ion-item-divider lines=\"none\" color=\"light\" class=\"ion-padding\">\n            <ion-label>INFORMACIÓN</ion-label>\n        </ion-item-divider>\n        <ion-item>\n            <ion-input [(ngModel)]=\"nombrepd\" class=\"ion-padding\" type=\"text\" placeholder=\"Escribe el nombre del producto\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-input [(ngModel)]=\"codigopd\" class=\"ion-padding\" type=\"text\" placeholder=\"Escribe el código del producto\"></ion-input>\n        </ion-item>\n\n        <ion-item-divider lines=\"none\" color=\"light\" class=\"ion-padding\">\n            <ion-label>CATEGORÍA</ion-label>\n        </ion-item-divider>\n        <ion-item>\n            <ion-label>Seleccione la categoría</ion-label>\n            <ion-select (ionChange)=\"cambioCategoria( $event )\">\n                <ion-select-option *ngFor=\"let categoria of categorias\" value=\"{{ categoria.nombre }}\">{{ categoria.nombre }}</ion-select-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item-divider lines=\"none\" color=\"light\" class=\"ion-padding\">\n            <ion-label>PROVEEDOR</ion-label>\n        </ion-item-divider>\n        <ion-item>\n            <ion-label>Seleccione la proveedor</ion-label>\n            <ion-select (ionChange)=\"cambioProveedor( $event )\">\n                <ion-select-option *ngFor=\"let proveedor of proveedores\" value=\"{{ proveedor.nombre }}\">{{ proveedor.nombre }}</ion-select-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item-divider lines=\"none\" color=\"light\" class=\"ion-padding\">\n            <ion-label class=\"ion-text-wrap\">LIMITE DE EXISTENCIA <br> Escribe la cantidad en la cual se va a notificar que el producto esta próximo a agotarse.</ion-label>\n        </ion-item-divider>\n        <ion-item>\n            <ion-input [(ngModel)]=\"limite\" class=\"ion-padding\" type=\"number\" placeholder=\"Escribe la cantidad\"></ion-input>\n        </ion-item>\n\n        <div class=\"ion-padding\">\n            <ion-button class=\"marginTop colorw\" mode=\"ios\" shape=\"round\" expand=\"block\" color=\"warning\" (click)=\"crearProducto()\">CREAR</ion-button>\n        </div>\n\n        <div class=\"center\" *ngIf=\"load\">\n            <ion-spinner color=\"success\" name=\"crescent\"></ion-spinner> Creando nuevo Producto...\n        </div>\n    </ion-list>\n\n\n\n    <ion-list *ngIf=\"vista === 'editarproductos'\">\n        <ion-item-divider lines=\"none\" color=\"light\" class=\"ion-padding\">\n            <ion-label>INFORMACIÓN</ion-label>\n        </ion-item-divider>\n        <ion-item>\n            <ion-input [(ngModel)]=\"nombrepd\" class=\"ion-padding\" type=\"text\" placeholder=\"Escribe el nombre del producto\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-input [(ngModel)]=\"codigopd\" class=\"ion-padding\" type=\"text\" placeholder=\"Escribe el código del producto\"></ion-input>\n        </ion-item>\n\n        <ion-item-divider lines=\"none\" color=\"light\" class=\"ion-padding\">\n            <ion-label>CATEGORÍA</ion-label>\n        </ion-item-divider>\n        <ion-item>\n            <ion-label>Seleccione la categoría</ion-label>\n            <ion-select placeholder=\"Seleccione una\" [value]=\"selectCat\" (ionChange)=\"cambioCategoria( $event )\">\n                <ion-select-option *ngFor=\"let categoria of categorias\" value=\"{{ categoria.nombre }}\">{{ categoria.nombre }}</ion-select-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item-divider lines=\"none\" color=\"light\" class=\"ion-padding\">\n            <ion-label>PROVEEDOR</ion-label>\n        </ion-item-divider>\n        <ion-item>\n            <ion-label>Seleccione la proveedor</ion-label>\n            <ion-select [value]=\"selectPro\" (ionChange)=\"cambioProveedor( $event )\">\n                <ion-select-option *ngFor=\"let proveedor of proveedores\" value=\"{{ proveedor.nombre }}\">{{ proveedor.nombre }}</ion-select-option>\n            </ion-select>\n        </ion-item>\n\n\n        <ion-item-divider lines=\"none\" color=\"light\" class=\"ion-padding\">\n            <ion-label>LIMITE DE EXISTENCIA</ion-label> <br> Escribe la cantidad en la cual se va a notificar que el producto esta próximo a agotarse.\n        </ion-item-divider>\n        <ion-item>\n            <ion-input [(ngModel)]=\"limite\" class=\"ion-padding\" type=\"number\" placeholder=\"Escribe la cantidad\"></ion-input>\n        </ion-item>\n\n        <div class=\"ion-padding\">\n            <ion-button class=\"marginTop colorw\" mode=\"ios\" shape=\"round\" expand=\"block\" color=\"warning\" (click)=\"editarProducto()\">EDITAR PRODUCTO</ion-button>\n        </div>\n\n        <div class=\"center\" *ngIf=\"load\">\n            <ion-spinner color=\"success\" name=\"crescent\"></ion-spinner> Editando nuevo Producto...\n        </div>\n    </ion-list>\n\n\n\n    <ion-slides *ngIf=\"carga && vista === 'entradas'\" #slide>\n        <ion-slide>\n            <ion-searchbar class=\"ion-text-left\" debounce=\"500\" placeholder=\"Buscar Producto por código o nombre\" mode=\"ios\" (ionChange)=\"buscar( $event )\"></ion-searchbar>\n\n            <div class=\"divider light\"></div>\n\n            <ion-list *ngIf=\"load\">\n                <ion-item *ngFor=\"let pdo of [1,1,1,1,1]\">\n\n                    <ion-skeleton-text slot=\"start\" animated style=\"width: 30px; height: 30px;\"></ion-skeleton-text>\n\n                    <ion-label>\n                        <ion-skeleton-text animated style=\"width: 100%; height: 10px;\"></ion-skeleton-text>\n\n                        <ion-skeleton-text animated style=\"width: 80%; height: 10px;\"></ion-skeleton-text>\n                    </ion-label>\n                </ion-item>\n            </ion-list>\n\n            <ion-list>\n                <ion-item *ngFor=\"let producto of productos; let i = index;\" (click)=\"validarProducto( producto , i)\">\n                    <ion-avatar slot=\"start\">\n                        <img src=\"/assets/Productos.png\">\n                    </ion-avatar>\n\n                    <ion-label>\n                        <div>{{producto.nombre}}</div>\n                        <div *ngIf=\"producto.codigo\"><strong>Código: </strong> {{producto.codigo}}</div>\n\n\n                        <div><strong>Categoria: </strong> <strong class=\"rojoi\">{{ producto.categoria }}</strong></div>\n\n                        <div class=\"flexbet\"><strong>Existencia:  <span class=\"verdei\">{{ producto.existencia }}</span></strong>\n                            <ion-chip color=\"success\" *ngIf=\"producto.existencia > producto.limote\">AL DIA</ion-chip>\n                            <ion-chip color=\"warning\" *ngIf=\"producto.existencia <= producto.limite && producto.existencia > 0\">SE ESTÁ AGOTANDO</ion-chip>\n                            <ion-chip color=\"danger\" *ngIf=\"producto.existencia === 0\">PRODUCTO AGOTADO</ion-chip>\n                        </div>\n                    </ion-label>\n                </ion-item>\n            </ion-list>\n\n            <div class=\"center\" *ngIf=\"mostrar\">\n                <h3 class=\"tituloGrande\">No existen productos relacionados con: <strong>{{ texto }}</strong></h3>\n            </div>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card mode=\"ios\">\n                <ion-card-content>\n                    <h3 class=\"tituloGrande tprod\">{{productoHistoria.nombre}}</h3>\n\n                    <ion-list>\n                        <ion-item-divider color=\"light\">\n                            <ion-label>Información del producto</ion-label>\n                        </ion-item-divider>\n                        <ion-item>\n                            <ion-input (ionChange)=\"entradaCambioProd($event, 'precio')\" [(ngModel)]=\"productoEntrada.precio\" type=\"number\" placeholder=\"Precio Unitario\"></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-input (ionChange)=\"entradaCambioProd($event, 'canti')\" [(ngModel)]=\"productoEntrada.cantidad\" type=\"number\" placeholder=\"Cantidad\"></ion-input>\n                        </ion-item>\n\n                        <div class=\"total \" *ngIf=\"productoEntrada.total > 0 && productoEntrada.total\">\n                            ${{productoEntrada.total | decimales:'es-CO'}}\n                        </div>\n\n                        <ion-item-divider color=\"light\">\n                            <ion-label>Origen</ion-label>\n                        </ion-item-divider>\n\n                        <ion-item>\n                            <ion-label>Seleccione la proveedor</ion-label>\n                            <ion-select [value]=\"selectPro\" (ionChange)=\"cambioProveedor( $event )\">\n                                <ion-select-option *ngFor=\"let proveedor of proveedores\" value=\"{{ proveedor.nombre }}\">{{ proveedor.nombre }}</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-input [(ngModel)]=\"productoEntrada.origenextra\" type=\"text\" placeholder=\"Otro\"></ion-input>\n                        </ion-item>\n\n\n                    </ion-list>\n\n                    <div class=\"flexbet\">\n\n\n                        <ion-button class=\"btn\" (click)=\"cancelar()\" color=\"light\" expand=\"block\" mode=\"ios\" shape=\"round\">CANCELAR</ion-button>\n\n                        <ion-button class=\"btn\" (click)=\"guardarEntrada()\" color=\"warning\" expand=\"block\" mode=\"ios\" shape=\"round\">GUARDAR</ion-button>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n\n\n\n\n    <ion-slides *ngIf=\"carga && vista === 'salidas'\" #slide>\n        <ion-slide>\n            <ion-searchbar class=\"ion-text-left\" debounce=\"500\" placeholder=\"Buscar Producto por código o nombre\" mode=\"ios\" (ionChange)=\"buscar( $event )\"></ion-searchbar>\n\n            <div class=\"divider light\"></div>\n\n            <ion-list *ngIf=\"load\">\n                <ion-item *ngFor=\"let pdo of [1,1,1,1,1]\">\n\n                    <ion-skeleton-text slot=\"start\" animated style=\"width: 30px; height: 30px;\"></ion-skeleton-text>\n\n                    <ion-label>\n                        <ion-skeleton-text animated style=\"width: 100%; height: 10px;\"></ion-skeleton-text>\n\n                        <ion-skeleton-text animated style=\"width: 80%; height: 10px;\"></ion-skeleton-text>\n                    </ion-label>\n                </ion-item>\n            </ion-list>\n\n            <ion-list>\n                <ion-item *ngFor=\"let producto of productos; let i = index;\" (click)=\"validarProducto( producto , i)\">\n                    <ion-avatar slot=\"start\">\n                        <img src=\"/assets/Productos.png\">\n                    </ion-avatar>\n\n                    <ion-label>\n                        <div>{{producto.nombre}}</div>\n                        <div *ngIf=\"producto.codigo\"><strong>Código: </strong> {{producto.codigo}}</div>\n\n\n                        <div><strong>Categoria: </strong> <strong class=\"rojoi\">{{ producto.categoria }}</strong></div>\n\n                        <div class=\"flexbet\"><strong>Existencia:  <span class=\"verdei\">{{ producto.existencia }}</span></strong>\n                            <ion-chip color=\"success\" *ngIf=\"producto.existencia > producto.limote\">AL DIA</ion-chip>\n                            <ion-chip color=\"warning\" *ngIf=\"producto.existencia <= producto.limite && producto.existencia > 0\">SE ESTÁ AGOTANDO</ion-chip>\n                            <ion-chip color=\"danger\" *ngIf=\"producto.existencia === 0\">PRODUCTO AGOTADO</ion-chip>\n                        </div>\n                    </ion-label>\n                </ion-item>\n            </ion-list>\n\n            <div class=\"center\" *ngIf=\"mostrar\">\n                <h3 class=\"tituloGrande\">No existen productos relacionados con: <strong>{{ texto }}</strong></h3>\n            </div>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card mode=\"ios\">\n                <ion-card-content>\n                    <h3 class=\"tituloGrande tprod\">{{productoHistoria.nombre}}</h3>\n\n                    <ion-list>\n                        <ion-item-divider color=\"light\">\n                            <ion-label>Información del producto</ion-label>\n                        </ion-item-divider>\n                        <ion-item>\n                            <ion-input (ionChange)=\"salidaCambioProd($event, 'precio')\" [(ngModel)]=\"productoSalida.precio\" type=\"number\" placeholder=\"Precio Unitario de Venta\"></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-input (ionChange)=\"salidaCambioProd($event, 'canti')\" [(ngModel)]=\"productoSalida.cantidad\" type=\"number\" placeholder=\"Cantidad de Productos que salen\"></ion-input>\n                        </ion-item>\n\n                        <div clss=\"ion-padding\" class=\"total \" *ngIf=\"productoSalida.total > 0 && productoSalida.total\">\n                            ${{productoSalida.total | decimales:'es-CO'}}\n                        </div>\n\n                        <ion-item-divider color=\"light\">\n                            <ion-label>Destino de Salida</ion-label> <br>\n\n                        </ion-item-divider>\n\n                        <ion-item>\n                            <ion-label>¿Mover para otro Inventario?</ion-label>\n                            <ion-select [value]=\"selectPro\" (ionChange)=\"cambioInventario( $event )\">\n                                <ion-select-option *ngFor=\"let ivt of inventarios\" value=\"{{ ivt._id }}\">{{ ivt.name }}</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n\n                        <div *ngIf=\"ivtPadre\">\n                            <ion-item-divider color=\"light\">\n                                <ion-label class=\"ion-text-wrap\">¿ A que producto se le va a realizar </ion-label> <br>\n\n                            </ion-item-divider>\n                            <ion-searchbar [placeholder]=\"'Buscar producto de ' + selectPro\" debounce=\"500\" (ionChange)=\"productoHijo( $event )\"></ion-searchbar>\n\n                            <ion-radio-group (ionChange)=\"prodDestino( $event )\">\n                                <ion-item *ngFor=\"let producto of productosHijos; let i = index;\">\n                                    <ion-avatar slot=\"start\">\n                                        <img src=\"/assets/Productos.png\">\n                                    </ion-avatar>\n\n                                    <ion-label>\n                                        <div>{{producto.nombre}}</div>\n                                        <div *ngIf=\"producto.codigo\"><strong>Código: </strong> {{producto.codigo}}</div>\n\n\n                                        <div><strong>Categoria: </strong> <strong class=\"rojoi\">{{ producto.categoria }}</strong></div>\n\n                                        <div class=\"flexbet\"><strong>Existencia:  <span class=\"verdei\">{{ producto.existencia }}</span></strong>\n                                            <ion-chip color=\"success\" *ngIf=\"producto.existencia > producto.limote\">AL DIA</ion-chip>\n                                            <ion-chip color=\"warning\" *ngIf=\"producto.existencia <= producto.limite && producto.existencia > 0\">SE ESTÁ AGOTANDO</ion-chip>\n                                            <ion-chip color=\"danger\" *ngIf=\"producto.existencia === 0\">PRODUCTO AGOTADO</ion-chip>\n                                        </div>\n                                    </ion-label>\n                                    <ion-radio value=\"{{producto._id}}\"></ion-radio>\n                                </ion-item>\n                            </ion-radio-group>\n                        </div>\n\n\n                        <ion-item *ngIf=\"!ivtPadre\">\n                            <ion-input [(ngModel)]=\"productoSalida.destino\" type=\"text\" placeholder=\"Nombre del cliente (opcional)\"></ion-input>\n                        </ion-item>\n\n\n                    </ion-list>\n\n                    <div class=\"flexbet\">\n\n\n                        <ion-button class=\"btn\" (click)=\"cancelar()\" color=\"light\" expand=\"block\" mode=\"ios\" shape=\"round\">CANCELAR</ion-button>\n\n                        <ion-button class=\"btn\" (click)=\"guardarSalida()\" color=\"warning\" expand=\"block\" mode=\"ios\" shape=\"round\">GUARDAR</ion-button>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default~Inventarios-ivt-inicio-ivt-inicio-module~Inventarios-ivtcategorias-ivtcategorias-module~Inve~ec849590.js.map