(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"5yQV":function(t,e,r){"use strict";r.d(e,"a",function(){return d});var a=r("AytR"),o=r("tk/3"),n=r("coGc"),i=r("lJxs"),s=r("IzEk"),c=r("MtjB"),h=r("PqYM"),p=r("fXoL");let d=(()=>{class t{constructor(t){this.http=t}hanflerError(t){return t.pipe(Object(n.a)(()=>Object(h.a)(3e3)),Object(i.a)(t=>{if(console.log("Entramos a intentos"),t instanceof ErrorEvent)throw new Error("Error de Red");if(404===t.status)throw new Error(" P\xe1gina no encontrada")}),Object(s.a)(3))}crearInventario(t,e){const r={headers:new o.c({"x-token":t})};return this.http.post(`${a.a}/ivt/tipo/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}actualizarInventario(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/ivt/cierre/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerInventarios(t){const e={headers:new o.c({"x-token":t})};return this.http.get(`${a.a}/ivt/tipo/`,e).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerInventario(t,e){const r={headers:new o.c({"x-token":t,"x-id":e})};return this.http.get(`${a.a}/ivt/tipo/uno`,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarAcceso(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/ivt/tipo/accesos/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}BuscarUsuarios(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/empleados/buscar/`,{patron:e},r).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearEmpleado(t,e){const r={headers:new o.c({"x-token":t})};return this.http.post(`${a.a}/empleados/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarEmpleado(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/empleados/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerEmpleados(t){const e={headers:new o.c({"x-token":t})};return this.http.get(`${a.a}/empleados/`,e).pipe(Object(c.a)(t=>this.hanflerError(t)))}eliminarEmpleados(t,e){const r={headers:new o.c({"x-token":t,"x-id":e})};return this.http.delete(`${a.a}/empleados/`,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearProveedor(t,e){const r={headers:new o.c({"x-token":t})};return this.http.post(`${a.a}/ivt/proveedores/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarProveedor(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/ivt/proveedores/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}eliminarProveedor(t,e){const r={headers:new o.c({"x-token":t,"x-id":e})};return this.http.delete(`${a.a}/ivt/proveedores/`,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerProveedor(t,e){const r={headers:new o.c({"x-token":t,"x-ivt":e})};return this.http.get(`${a.a}/ivt/proveedores/`,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearCategoria(t,e){const r={headers:new o.c({"x-token":t})};return this.http.post(`${a.a}/ivt/categorias/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarCategoria(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/ivt/categorias/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}eliminarCategoria(t,e){const r={headers:new o.c({"x-token":t,"x-id":e})};return this.http.delete(`${a.a}/ivt/categorias/`,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerCategoria(t,e){const r={headers:new o.c({"x-token":t,"x-ivt":e})};return this.http.get(`${a.a}/ivt/categorias/`,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearProducto(t,e){const r={headers:new o.c({"x-token":t})};return this.http.post(`${a.a}/ivt/productos/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarProducto(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/ivt/productos/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}eliminarProducto(t,e){const r={headers:new o.c({"x-token":t,"x-id":e})};return this.http.delete(`${a.a}/ivt/productos/`,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerProducto(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/ivt/productos/filtro/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerProductoEstadistica(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/ivt/productos/filtro/estadistica/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerProductosPorInventario(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/ivt/productos/buscarivt/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}buscarProducto(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/ivt/productos/buscar`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}buscarProductoEntrada(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/ivt/productos/buscar/entrada`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearEntrada(t,e){const r={headers:new o.c({"x-token":t})};return this.http.post(`${a.a}/ivt/entradas/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerEntrada(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/ivt/entradas/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}filtrarEntradas(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/ivt/entradas/buscar/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}filtrarEntradasPatron(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/ivt/entradas/buscar/patron/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearSalida(t,e){const r={headers:new o.c({"x-token":t})};return this.http.post(`${a.a}/ivt/salidas/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerSalida(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/ivt/salidas/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}filtrarSalidas(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/ivt/salidas/buscar/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}filtrarSalidasPatron(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/ivt/salidas/buscar/patron/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}CargarInventarios(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/ivt/tipo/almacen/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}CierresInventario(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/ivt/cierre/buscar/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}MovCantidades(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/ivt/mov/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}MovCantidades2(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/ivt/mov/salidas/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerMovmientos(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/ivt/movimientos/filtro/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerAgotados(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/ivt/productos/agotados/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerProximos(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/ivt/productos/proximos/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}}return t.\u0275fac=function(e){return new(e||t)(p.Qb(o.a))},t.\u0275prov=p.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},u6L1:function(t,e,r){"use strict";r.r(e),r.d(e,"IvtConfiguracionPageModule",function(){return b});var a=r("ofXK"),o=r("3Pt+"),n=r("TEn/"),i=r("tyNb"),s=r("mrSG"),c=r("fXoL"),h=r("fsfq"),p=r("5yQV"),d=r("fmoy");const u=[{path:"",component:(()=>{class t{constructor(t,e,r,a,o,n){this.almacenamiento=t,this.ivtApi=e,this.toast=r,this.activeRoute=a,this.alertCtrl=o,this.router=n,this.nombre="",this.cambio=!1}ngOnInit(){}ionViewWillEnter(){this.cargarCategorias()}refrescando(t){this.cargarCategorias().then(()=>{t.target.complete()}).catch(()=>t.target.complete())}cargarCategorias(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&this.ivtApi.leerInventario(t.token,this.activeRoute.snapshot.paramMap.get("id")).subscribe(t=>{t.exe?this.nombre=t.response.name:this.toast.toastError("No se pudo cargar los datos, intentelo m\xe1s tarde")},t=>{this.toast.toastError("No se pudo cargar los datos, intentelo m\xe1s tarde")})})}toggle(t){this.cambio=t.detail.checked}guardar(){return Object(s.a)(this,void 0,void 0,function*(){if(this.cambio){const t=yield this.alertCtrl.create({header:"Cerrar periodo",message:"Al cerrar el periodo de inventario comezar\xe1 un nuevo periodo a partir de ahora. Esta acci\xf3n no se puede revsersar",buttons:[{text:"cancelar",role:"cancel"},{text:"Aceptar",handler:()=>{this.actualizar(!0)}}]});yield t.present()}else this.actualizar(!1)})}actualizar(t){return Object(s.a)(this,void 0,void 0,function*(){const e=yield this.almacenamiento.obtenerToken();e&&this.ivtApi.actualizarInventario(e.token,{ivt:this.activeRoute.snapshot.paramMap.get("id"),nombre:this.nombre,exe:t}).subscribe(t=>{t.exe?(this.toast.toastExitoso("Informaci\xf3n actualizada!"),this.router.navigate(["/central/menu/ivt-miinventario",this.activeRoute.snapshot.paramMap.get("id")])):this.toast.toastError("No se pudo actualizar el inventario, intentelo m\xe1s tarde")},t=>{this.toast.toastError("No se pudo actualizar el inventario, intentelo m\xe1s tarde")})})}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(h.a),c.Jb(p.a),c.Jb(d.a),c.Jb(i.a),c.Jb(n.b),c.Jb(i.g))},t.\u0275cmp=c.Db({type:t,selectors:[["app-ivt-configuracion"]],decls:19,vars:1,consts:[[1,"ion-no-border"],["color","oscuro"],["slot","start","icon","chevron-back-outline","defaultHref","/central/menu/ivt-inicio"],[1,"divider"],["mode","ios"],["position","floating"],["type","text",3,"ngModel","ngModelChange"],[1,"ion-text-wrap"],["slot","end","color","tertiary",3,"ionChange"],["color","light","expand","block","mode","ios","shape","round",3,"click"]],template:function(t,e){1&t&&(c.Mb(0,"ion-header",0),c.Mb(1,"ion-toolbar",1),c.Kb(2,"ion-back-button",2),c.Mb(3,"ion-title"),c.rc(4,"Configuraci\xf3n"),c.Lb(),c.Lb(),c.Lb(),c.Mb(5,"ion-content"),c.Kb(6,"div",3),c.Mb(7,"ion-list"),c.Mb(8,"ion-item",4),c.Mb(9,"ion-label",5),c.rc(10," Nombre del Inventario "),c.Lb(),c.Mb(11,"ion-input",6),c.Ub("ngModelChange",function(t){return e.nombre=t}),c.Lb(),c.Lb(),c.Mb(12,"ion-item",4),c.Mb(13,"ion-label",7),c.rc(14," Cerrar periodo de inventario "),c.Lb(),c.Mb(15,"ion-toggle",8),c.Ub("ionChange",function(t){return e.toggle(t)}),c.Lb(),c.Lb(),c.Kb(16,"br"),c.Mb(17,"ion-button",9),c.Ub("click",function(){return e.guardar()}),c.rc(18,"Guardar Cambios"),c.Lb(),c.Lb(),c.Lb()),2&t&&(c.zb(11),c.dc("ngModel",e.nombre))},directives:[n.z,n.kb,n.g,n.h,n.ib,n.t,n.L,n.F,n.K,n.E,n.xb,o.i,o.k,n.jb,n.d,n.j],styles:[""]}),t})()}];let l=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[i.i.forChild(u)],i.i]}),t})(),b=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[a.b,o.e,n.lb,l]]}),t})()}}]);