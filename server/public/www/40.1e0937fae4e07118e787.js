(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"5yQV":function(t,e,r){"use strict";r.d(e,"a",function(){return d});var n=r("AytR"),i=r("tk/3"),o=r("coGc"),a=r("lJxs"),s=r("IzEk"),c=r("MtjB"),h=r("PqYM"),p=r("fXoL");let d=(()=>{class t{constructor(t){this.http=t}hanflerError(t){return t.pipe(Object(o.a)(()=>Object(h.a)(3e3)),Object(a.a)(t=>{if(console.log("Entramos a intentos"),t instanceof ErrorEvent)throw new Error("Error de Red");if(404===t.status)throw new Error(" P\xe1gina no encontrada")}),Object(s.a)(3))}crearInventario(t,e){const r={headers:new i.c({"x-token":t})};return this.http.post(`${n.a}/ivt/tipo/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}actualizarInventario(t,e){const r={headers:new i.c({"x-token":t})};return this.http.put(`${n.a}/ivt/cierre/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerInventarios(t){const e={headers:new i.c({"x-token":t})};return this.http.get(`${n.a}/ivt/tipo/`,e).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerInventario(t,e){const r={headers:new i.c({"x-token":t,"x-id":e})};return this.http.get(`${n.a}/ivt/tipo/uno`,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarAcceso(t,e){const r={headers:new i.c({"x-token":t})};return this.http.put(`${n.a}/ivt/tipo/accesos/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}BuscarUsuarios(t,e){const r={headers:new i.c({"x-token":t})};return this.http.put(`${n.a}/empleados/buscar/`,{patron:e},r).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearEmpleado(t,e){const r={headers:new i.c({"x-token":t})};return this.http.post(`${n.a}/empleados/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarEmpleado(t,e){const r={headers:new i.c({"x-token":t})};return this.http.put(`${n.a}/empleados/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerEmpleados(t){const e={headers:new i.c({"x-token":t})};return this.http.get(`${n.a}/empleados/`,e).pipe(Object(c.a)(t=>this.hanflerError(t)))}eliminarEmpleados(t,e){const r={headers:new i.c({"x-token":t,"x-id":e})};return this.http.delete(`${n.a}/empleados/`,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearProveedor(t,e){const r={headers:new i.c({"x-token":t})};return this.http.post(`${n.a}/ivt/proveedores/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarProveedor(t,e){const r={headers:new i.c({"x-token":t})};return this.http.put(`${n.a}/ivt/proveedores/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}eliminarProveedor(t,e){const r={headers:new i.c({"x-token":t,"x-id":e})};return this.http.delete(`${n.a}/ivt/proveedores/`,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerProveedor(t,e){const r={headers:new i.c({"x-token":t,"x-ivt":e})};return this.http.get(`${n.a}/ivt/proveedores/`,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearCategoria(t,e){const r={headers:new i.c({"x-token":t})};return this.http.post(`${n.a}/ivt/categorias/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarCategoria(t,e){const r={headers:new i.c({"x-token":t})};return this.http.put(`${n.a}/ivt/categorias/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}eliminarCategoria(t,e){const r={headers:new i.c({"x-token":t,"x-id":e})};return this.http.delete(`${n.a}/ivt/categorias/`,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerCategoria(t,e){const r={headers:new i.c({"x-token":t,"x-ivt":e})};return this.http.get(`${n.a}/ivt/categorias/`,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearProducto(t,e){const r={headers:new i.c({"x-token":t})};return this.http.post(`${n.a}/ivt/productos/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarProducto(t,e){const r={headers:new i.c({"x-token":t})};return this.http.put(`${n.a}/ivt/productos/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}eliminarProducto(t,e){const r={headers:new i.c({"x-token":t,"x-id":e})};return this.http.delete(`${n.a}/ivt/productos/`,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerProducto(t,e){const r={headers:new i.c({"x-token":t})};return this.http.put(`${n.a}/ivt/productos/filtro/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerProductoEstadistica(t,e){const r={headers:new i.c({"x-token":t})};return this.http.put(`${n.a}/ivt/productos/filtro/estadistica/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerProductosPorInventario(t,e){const r={headers:new i.c({"x-token":t})};return this.http.put(`${n.a}/ivt/productos/buscarivt/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}buscarProducto(t,e){const r={headers:new i.c({"x-token":t})};return this.http.put(`${n.a}/ivt/productos/buscar`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearEntrada(t,e){const r={headers:new i.c({"x-token":t})};return this.http.post(`${n.a}/ivt/entradas/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerEntrada(t,e){const r={headers:new i.c({"x-token":t})};return this.http.put(`${n.a}/ivt/entradas/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}filtrarEntradas(t,e){const r={headers:new i.c({"x-token":t})};return this.http.put(`${n.a}/ivt/entradas/buscar/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}filtrarEntradasPatron(t,e){const r={headers:new i.c({"x-token":t})};return this.http.put(`${n.a}/ivt/entradas/buscar/patron/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearSalida(t,e){const r={headers:new i.c({"x-token":t})};return this.http.post(`${n.a}/ivt/salidas/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerSalida(t,e){const r={headers:new i.c({"x-token":t})};return this.http.put(`${n.a}/ivt/salidas/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}filtrarSalidas(t,e){const r={headers:new i.c({"x-token":t})};return this.http.put(`${n.a}/ivt/salidas/buscar/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}filtrarSalidasPatron(t,e){const r={headers:new i.c({"x-token":t})};return this.http.put(`${n.a}/ivt/salidas/buscar/patron/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}CargarInventarios(t,e){const r={headers:new i.c({"x-token":t})};return this.http.put(`${n.a}/ivt/tipo/almacen/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}CierresInventario(t,e){const r={headers:new i.c({"x-token":t})};return this.http.put(`${n.a}/ivt/cierre/buscar/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}MovCantidades(t,e){const r={headers:new i.c({"x-token":t})};return this.http.put(`${n.a}/ivt/mov/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}MovCantidades2(t,e){const r={headers:new i.c({"x-token":t})};return this.http.put(`${n.a}/ivt/mov/salidas/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerMovmientos(t,e){const r={headers:new i.c({"x-token":t})};return this.http.put(`${n.a}/ivt/movimientos/filtro/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerAgotados(t,e){const r={headers:new i.c({"x-token":t})};return this.http.put(`${n.a}/ivt/productos/agotados/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerProximos(t,e){const r={headers:new i.c({"x-token":t})};return this.http.put(`${n.a}/ivt/productos/proximos/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}}return t.\u0275fac=function(e){return new(e||t)(p.Qb(i.a))},t.\u0275prov=p.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"V+2o":function(t,e,r){"use strict";r.r(e),r.d(e,"IvtMiinventarioPageModule",function(){return L});var n=r("ofXK"),i=r("3Pt+"),o=r("TEn/"),a=r("tyNb"),s=r("mrSG"),c=r("fXoL"),h=r("fsfq"),p=r("5yQV");const d=function(t){return["empleados",t]};function u(t,e){if(1&t&&(c.Mb(0,"ion-card",6),c.Mb(1,"ion-card-header"),c.Kb(2,"img",13),c.Lb(),c.Mb(3,"ion-card-title"),c.rc(4,"Empleados"),c.Lb(),c.Lb()),2&t){const t=c.Wb();c.dc("routerLink",c.hc(1,d,t.id))}}const b=function(t){return["ivt-movimientos",t]};function l(t,e){if(1&t&&(c.Mb(0,"ion-card",6),c.Mb(1,"ion-card-header"),c.Kb(2,"img",14),c.Lb(),c.Mb(3,"ion-card-title"),c.rc(4,"Movimientos"),c.Lb(),c.Lb()),2&t){const t=c.Wb();c.dc("routerLink",c.hc(1,b,t.id))}}const f=function(t){return["ivt-configuracion",t]};function v(t,e){if(1&t&&(c.Mb(0,"ion-card",6),c.Mb(1,"ion-card-header"),c.Kb(2,"img",15),c.Lb(),c.Mb(3,"ion-card-title"),c.rc(4,"Configuraci\xf3n"),c.Lb(),c.Lb()),2&t){const t=c.Wb();c.dc("routerLink",c.hc(1,f,t.id))}}const x=function(t){return["ivt-estadisticas",t]};function w(t,e){if(1&t&&(c.Mb(0,"ion-card",6),c.Mb(1,"ion-card-header"),c.Kb(2,"img",16),c.Lb(),c.Mb(3,"ion-card-title"),c.rc(4,"Estad\xedsticas"),c.Lb(),c.Lb()),2&t){const t=c.Wb();c.dc("routerLink",c.hc(1,x,t.id))}}const g=function(t){return["proveedores",t]},E=function(t){return["categorias",t]},k=function(t){return["productos",t]},m=function(t){return["entradas",t]},O=function(t,e){return["salidas",t,e]},M=[{path:"",component:(()=>{class t{constructor(t,e,r){this.almacenamiento=t,this.active=e,this.ivtApi=r,this.id="",this.ver=!1,this.creador=""}ngOnInit(){}ionViewWillEnter(){this.id=this.active.snapshot.paramMap.get("id"),this.iniciar()}iniciar(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&this.ivtApi.leerInventario(t.token,this.id).subscribe(e=>{e.exe&&(this.creador=e.response.creador,this.ver=e.response.creador===t._id)})})}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(h.a),c.Jb(a.a),c.Jb(p.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-ivt-miinventario"]],decls:38,vars:20,consts:[[1,"ion-no-border"],["color","success"],["slot","start"],["icon","chevron-back-outline","defaultHref","/central/menu/ivt-inicio"],["fullscreen","true"],[1,"opts"],["mode","ios",3,"routerLink"],["src","/assets/Proveedores.png","width","100px"],["mode","ios",3,"routerLink",4,"ngIf"],["src","/assets/Categorias.png","width","100px"],["src","/assets/Productos.png","width","100px"],["src","/assets/Entradas.png","width","100px"],["src","/assets/Salidas.png","width","100px"],["src","/assets/Empleados.png","width","100px"],["src","/assets/Movimientos.png","width","100px"],["src","/assets/Configuracion.png","width","100px"],["src","/assets/Estadisticas.png","width","100px"]],template:function(t,e){1&t&&(c.Mb(0,"ion-header",0),c.Mb(1,"ion-toolbar",1),c.Mb(2,"ion-buttons",2),c.Kb(3,"ion-back-button",3),c.Lb(),c.Mb(4,"ion-title"),c.rc(5,"Herramientas"),c.Lb(),c.Lb(),c.Lb(),c.Mb(6,"ion-content",4),c.Mb(7,"ion-list"),c.Mb(8,"div",5),c.Mb(9,"ion-card",6),c.Mb(10,"ion-card-header"),c.Kb(11,"img",7),c.Lb(),c.Mb(12,"ion-card-title"),c.rc(13,"Proveedores"),c.Lb(),c.Lb(),c.qc(14,u,5,3,"ion-card",8),c.Mb(15,"ion-card",6),c.Mb(16,"ion-card-header"),c.Kb(17,"img",9),c.Lb(),c.Mb(18,"ion-card-title"),c.rc(19,"Categorias"),c.Lb(),c.Lb(),c.Mb(20,"ion-card",6),c.Mb(21,"ion-card-header"),c.Kb(22,"img",10),c.Lb(),c.Mb(23,"ion-card-title"),c.rc(24,"Productos"),c.Lb(),c.Lb(),c.Mb(25,"ion-card",6),c.Mb(26,"ion-card-header"),c.Kb(27,"img",11),c.Lb(),c.Mb(28,"ion-card-title"),c.rc(29,"Entradas"),c.Lb(),c.Lb(),c.Mb(30,"ion-card",6),c.Mb(31,"ion-card-header"),c.Kb(32,"img",12),c.Lb(),c.Mb(33,"ion-card-title"),c.rc(34,"Salidas"),c.Lb(),c.Lb(),c.qc(35,l,5,3,"ion-card",8),c.qc(36,v,5,3,"ion-card",8),c.qc(37,w,5,3,"ion-card",8),c.Lb(),c.Lb(),c.Lb()),2&t&&(c.zb(9),c.dc("routerLink",c.hc(9,g,e.id)),c.zb(5),c.dc("ngIf",e.ver),c.zb(1),c.dc("routerLink",c.hc(11,E,e.id)),c.zb(5),c.dc("routerLink",c.hc(13,k,e.id)),c.zb(5),c.dc("routerLink",c.hc(15,m,e.id)),c.zb(5),c.dc("routerLink",c.ic(17,O,e.id,e.creador)),c.zb(5),c.dc("ngIf",e.ver),c.zb(1),c.dc("ngIf",e.ver),c.zb(1),c.dc("ngIf",e.ver))},directives:[o.z,o.jb,o.k,o.g,o.h,o.hb,o.t,o.L,o.l,o.ub,a.h,o.n,o.p,n.j],styles:[".opts[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap}.opts[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{width:calc(50% - 10px);margin:10px 5px;display:flex;flex-direction:column;justify-content:center;align-items:center;transition:all .5s}.opts[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:22px;text-align:center}.opts[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{text-align:center;padding:5px}@media screen and (min-width:800px){.opts[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{width:calc(33.33% - 10px)}}"]}),t})()}];let j=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[a.i.forChild(M)],a.i]}),t})(),L=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[n.b,i.e,o.kb,j]]}),t})()}}]);