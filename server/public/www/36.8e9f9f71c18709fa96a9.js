(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"5yQV":function(t,e,o){"use strict";o.d(e,"a",function(){return p});var i=o("AytR"),r=o("tk/3"),a=o("coGc"),n=o("lJxs"),s=o("IzEk"),c=o("MtjB"),h=o("PqYM"),d=o("fXoL");let p=(()=>{class t{constructor(t){this.http=t}hanflerError(t){return t.pipe(Object(a.a)(()=>Object(h.a)(3e3)),Object(n.a)(t=>{if(console.log("Entramos a intentos"),t instanceof ErrorEvent)throw new Error("Error de Red");if(404===t.status)throw new Error(" P\xe1gina no encontrada")}),Object(s.a)(3))}crearInventario(t,e){const o={headers:new r.c({"x-token":t})};return this.http.post(`${i.a}/ivt/tipo/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}actualizarInventario(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/ivt/cierre/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerInventarios(t){const e={headers:new r.c({"x-token":t})};return this.http.get(`${i.a}/ivt/tipo/`,e).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerInventario(t,e){const o={headers:new r.c({"x-token":t,"x-id":e})};return this.http.get(`${i.a}/ivt/tipo/uno`,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarAcceso(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/ivt/tipo/accesos/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}BuscarUsuarios(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/empleados/buscar/`,{patron:e},o).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearEmpleado(t,e){const o={headers:new r.c({"x-token":t})};return this.http.post(`${i.a}/empleados/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarEmpleado(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/empleados/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerEmpleados(t){const e={headers:new r.c({"x-token":t})};return this.http.get(`${i.a}/empleados/`,e).pipe(Object(c.a)(t=>this.hanflerError(t)))}eliminarEmpleados(t,e){const o={headers:new r.c({"x-token":t,"x-id":e})};return this.http.delete(`${i.a}/empleados/`,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearProveedor(t,e){const o={headers:new r.c({"x-token":t})};return this.http.post(`${i.a}/ivt/proveedores/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarProveedor(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/ivt/proveedores/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}eliminarProveedor(t,e){const o={headers:new r.c({"x-token":t,"x-id":e})};return this.http.delete(`${i.a}/ivt/proveedores/`,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerProveedor(t,e){const o={headers:new r.c({"x-token":t,"x-ivt":e})};return this.http.get(`${i.a}/ivt/proveedores/`,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearCategoria(t,e){const o={headers:new r.c({"x-token":t})};return this.http.post(`${i.a}/ivt/categorias/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarCategoria(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/ivt/categorias/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}eliminarCategoria(t,e){const o={headers:new r.c({"x-token":t,"x-id":e})};return this.http.delete(`${i.a}/ivt/categorias/`,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerCategoria(t,e){const o={headers:new r.c({"x-token":t,"x-ivt":e})};return this.http.get(`${i.a}/ivt/categorias/`,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearProducto(t,e){const o={headers:new r.c({"x-token":t})};return this.http.post(`${i.a}/ivt/productos/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarProducto(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/ivt/productos/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}eliminarProducto(t,e){const o={headers:new r.c({"x-token":t,"x-id":e})};return this.http.delete(`${i.a}/ivt/productos/`,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerProducto(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/ivt/productos/filtro/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerProductoEstadistica(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/ivt/productos/filtro/estadistica/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerProductosPorInventario(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/ivt/productos/buscarivt/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}buscarProducto(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/ivt/productos/buscar`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}buscarProductoEntrada(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/ivt/productos/buscar/entrada`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearEntrada(t,e){const o={headers:new r.c({"x-token":t})};return this.http.post(`${i.a}/ivt/entradas/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerEntrada(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/ivt/entradas/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}filtrarEntradas(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/ivt/entradas/buscar/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}filtrarEntradasPatron(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/ivt/entradas/buscar/patron/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearSalida(t,e){const o={headers:new r.c({"x-token":t})};return this.http.post(`${i.a}/ivt/salidas/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerSalida(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/ivt/salidas/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}filtrarSalidas(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/ivt/salidas/buscar/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}filtrarSalidasPatron(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/ivt/salidas/buscar/patron/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}CargarInventarios(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/ivt/tipo/almacen/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}CierresInventario(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/ivt/cierre/buscar/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}MovCantidades(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/ivt/mov/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}MovCantidades2(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/ivt/mov/salidas/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerMovmientos(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/ivt/movimientos/filtro/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerAgotados(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/ivt/productos/agotados/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerProximos(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/ivt/productos/proximos/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}}return t.\u0275fac=function(e){return new(e||t)(d.Sb(r.a))},t.\u0275prov=d.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},HavB:function(t,e,o){"use strict";o.d(e,"a",function(){return f});var i=o("AytR"),r=o("tk/3"),a=o("coGc"),n=o("lJxs"),s=o("IzEk"),c=o("MtjB"),h=o("JIr8"),d=o("PqYM"),p=o("Cfvw"),l=o("fXoL"),b=o("tyNb"),u=o("B7Rs");let f=(()=>{class t{constructor(t,e,o){this.http=t,this.router=e,this.MmyTransfer=o}hanflerError(t){return t.pipe(Object(a.a)(()=>Object(d.a)(3e3)),Object(n.a)(t=>{if(console.log("Entramos a intentos"),t instanceof ErrorEvent)throw new Error("Error de Red");if(404===t.status)throw new Error(" P\xe1gina no encontrada");if(401===t.status)throw new Error(" No tiene permisos ")}),Object(s.a)(3))}crearPedido(t,e){const o={headers:new r.c({"x-token":t})};return this.http.post(`${i.a}/pedidos/crear/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}misPedido(t){const e={headers:new r.c({"x-token":t})};return this.http.get(`${i.a}/pedidos/lista/`,e).pipe(Object(c.a)(t=>this.hanflerError(t)))}misChats(t,e){const o={headers:new r.c({"x-token":t})};return this.http.post(`${i.a}/chats/lista/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}misChatsGrupos(t,e){const o={headers:new r.c({"x-token":t})};return this.http.post(`${i.a}/chats/lista/grupos`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}misPedidoUsuario(t,e){const o={headers:new r.c({"x-token":t})};return this.http.post(`${i.a}/pedidos/lista/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}misSalas(t){const e={headers:new r.c({"x-token":t})};return this.http.get(`${i.a}/ticket/salas`,e).pipe(Object(c.a)(t=>this.hanflerError(t)))}mensajes(t,e){const o={headers:new r.c({"x-token":t})};return this.http.post(`${i.a}/pedidos/chat`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}traermensajesNoVistos(t,e){const o={headers:new r.c({"x-token":t})};return this.http.post(`${i.a}/pedidos/chat/vistos`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}marcarvisto(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/pedidos/chat/vistos`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}infoPedido(t,e){const o={headers:new r.c({"x-token":t})};return this.http.post(`${i.a}/pedidos/info`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}infoPedidoPut(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/pedidos/info`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearEstados(t,e){const o={headers:new r.c({"x-token":t})};return this.http.post(`${i.a}/pedidos/estados`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarEstados(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/pedidos/estados`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarChat(t,e){const o={headers:new r.c({"x-token":t})};return this.http.post(`${i.a}/unico/consultar/chat`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarChatFotos(t,e){const o={headers:new r.c({"x-token":t})};return this.http.post(`${i.a}/unico/consultar/chat/fotos`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarSala(t,e){const o={headers:new r.c({"x-token":t})};return this.http.post(`${i.a}/pedidos/consultar/chat`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarMapa(t,e){const o={headers:new r.c({"x-token":t})};return this.http.post(`${i.a}/pedidos/consultar/mapa`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarMapaUnico(t,e){const o={headers:new r.c({"x-token":t})};return this.http.post(`${i.a}/pedidos/consultar/mapa/unico`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearMapa(t,e){const o={headers:new r.c({"x-token":t})};return this.http.post(`${i.a}/pedidos/crear/mapa`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarMapa(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/pedidos/editar/mapa`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarMapaInfo(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/pedidos/editar/mapa/info`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarMapaInfoD(t,e){const o={headers:new r.c({"x-token":t})};return this.http.put(`${i.a}/pedidos/editar/mapa/infod`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarPedido(t,e){const o={headers:new r.c({"x-token":t})};return this.http.post(`${i.a}/pedidos/editar`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarChat(t,e){const o={headers:new r.c({"x-token":t})};return this.http.post(`${i.a}/chat/editar`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}subirArchivosChat(t,e,o,r,a,n,s){console.log("archivo",o);const c={fileKey:"archivo",fileName:n,mimeType:s,httpMethod:"PUT",headers:{"x-token":t,"x-sala":e,"x-final":r,"x-cont":a}},d=this.MmyTransfer.create();return Object(p.a)(d.upload(o,`${i.a}/pedido/upload`,c)).pipe(Object(h.a)(t=>{throw new Error(o)}))}subirweb(t,e,o,a,n){console.log(t,e,o,a);const s={headers:new r.c({"x-token":t,"x-sala":e,"x-final":o.toString(),"x-cont":a.toString()})};return this.http.put(`${i.a}/pedido/upload`,n,s).pipe(Object(c.a)(t=>this.hanflerError(t)))}}return t.\u0275fac=function(e){return new(e||t)(l.Sb(r.a),l.Sb(b.g),l.Sb(u.a))},t.\u0275prov=l.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},SpuA:function(t,e,o){"use strict";o.d(e,"a",function(){return a});var i=o("wd/R"),r=o("fXoL");let a=(()=>{class t{transform(t){console.log(t,"fechin");let e=i.utc(t).toDate();return i(e).format("dddd, DD MMMM YYYY h:mm:a")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=r.Kb({name:"cambioUTC",type:t,pure:!0}),t})()},YkIF:function(t,e,o){"use strict";o.r(e),o.d(e,"ListagruaTomadosPageModule",function(){return H});var i=o("ofXK"),r=o("3Pt+"),a=o("TEn/"),n=o("tyNb"),s=o("mrSG"),c=o("HDdC"),h=o("R0Ic"),d=o("fXoL"),p=o("fsfq"),l=o("5yQV"),b=o("fmoy"),u=o("0xwK");function f(t,e){1&t&&(d.Ob(0,"ion-item"),d.Mb(1,"ion-skeleton-text",9),d.Ob(2,"ion-label"),d.Mb(3,"ion-skeleton-text",10),d.Mb(4,"ion-skeleton-text",11),d.Nb(),d.Nb())}const m=function(){return[1,1,1,1,1]};function g(t,e){1&t&&(d.Ob(0,"div",7),d.Ob(1,"ion-list"),d.vc(2,f,5,0,"ion-item",8),d.Nb(),d.Nb()),2&t&&(d.Ab(2),d.fc("ngForOf",d.kc(1,m)))}function v(t,e){if(1&t&&(d.Ob(0,"div",18),d.wc(1),d.Nb()),2&t){const t=d.Yb().$implicit;d.Ab(1),d.yc("Cargo: ",t.cargo,"")}}function O(t,e){if(1&t&&(d.Ob(0,"div",18),d.wc(1),d.Nb()),2&t){const t=d.Yb().$implicit;d.Ab(1),d.yc("Al\xedas: ",t.alias,"")}}function w(t,e){if(1&t){const t=d.Pb();d.Ob(0,"ion-item-sliding"),d.Ob(1,"ion-item"),d.Ob(2,"ion-avatar",1),d.Mb(3,"img",12),d.Nb(),d.Ob(4,"ion-label"),d.Ob(5,"span"),d.wc(6),d.Nb(),d.Mb(7,"br"),d.Ob(8,"strong",13),d.wc(9),d.Nb(),d.vc(10,v,2,1,"div",14),d.vc(11,O,2,1,"div",14),d.Nb(),d.Nb(),d.Ob(12,"ion-item-options",15),d.Ob(13,"ion-item-option",16),d.Wb("click",function(){d.pc(t);const o=e.$implicit,i=e.index;return d.Yb(2).quitar(o,i)}),d.Mb(14,"ion-icon",17),d.Nb(),d.Nb(),d.Nb()}if(2&t){const t=e.$implicit;d.Ab(3),d.fc("src",t.usuario.imagen,d.qc),d.Ab(3),d.xc(t.usuario.nombrecompleto),d.Ab(3),d.yc("@",t.usuario.nombreusuario,""),d.Ab(1),d.fc("ngIf",t.cargo),d.Ab(1),d.fc("ngIf",t.alias)}}function x(t,e){if(1&t&&(d.Ob(0,"ion-list"),d.Ob(1,"ion-item-divider",0),d.wc(2,"Miembros"),d.Nb(),d.vc(3,w,15,5,"ion-item-sliding",8),d.Nb()),2&t){const t=d.Yb();d.Ab(3),d.fc("ngForOf",t.incluidos)}}function E(t,e){if(1&t&&(d.Ob(0,"div",18),d.wc(1),d.Nb()),2&t){const t=d.Yb().$implicit;d.Ab(1),d.yc("Cargo: ",t.cargo,"")}}function k(t,e){if(1&t&&(d.Ob(0,"div",18),d.wc(1),d.Nb()),2&t){const t=d.Yb().$implicit;d.Ab(1),d.yc("Al\xedas: ",t.alias,"")}}function j(t,e){if(1&t){const t=d.Pb();d.Ob(0,"ion-item-sliding"),d.Ob(1,"ion-item"),d.Ob(2,"ion-avatar",1),d.Mb(3,"img",12),d.Nb(),d.Ob(4,"ion-label"),d.Ob(5,"span"),d.wc(6),d.Nb(),d.Mb(7,"br"),d.Ob(8,"strong",13),d.wc(9),d.Nb(),d.vc(10,E,2,1,"div",14),d.vc(11,k,2,1,"div",14),d.Nb(),d.Nb(),d.Ob(12,"ion-item-options",15),d.Ob(13,"ion-item-option",19),d.Wb("click",function(){d.pc(t);const o=e.$implicit,i=e.index;return d.Yb(2).agregar(o,i)}),d.Mb(14,"ion-icon",20),d.Nb(),d.Nb(),d.Nb()}if(2&t){const t=e.$implicit;d.Ab(3),d.fc("src",t.usuario.imagen,d.qc),d.Ab(3),d.xc(t.usuario.nombrecompleto),d.Ab(3),d.yc("@",t.usuario.nombreusuario,""),d.Ab(1),d.fc("ngIf",t.cargo),d.Ab(1),d.fc("ngIf",t.alias)}}function N(t,e){if(1&t&&(d.Ob(0,"ion-list"),d.Ob(1,"ion-item-divider",0),d.wc(2,"Empleados"),d.Nb(),d.vc(3,j,15,5,"ion-item-sliding",8),d.Nb()),2&t){const t=d.Yb();d.Ab(3),d.fc("ngForOf",t.empleados)}}let $=(()=>{class t{constructor(t,e,o,i,r,a){this.almacenamiento=t,this.IVTapi=e,this.toast=o,this.loading=i,this.modal=r,this.apiMonitoreo=a,this.empleados=[],this.incluidos=[],this.accesos=[],this.load=!1,this.marcar=!1,this.id="",this.ivt={},this.cargauno=!1}ngOnInit(){}ionViewWillEnter(){return Object(s.a)(this,void 0,void 0,function*(){yield this.traerEmpleados2()})}refrescando(t){this.traerEmpleados2().then(()=>{t.target.complete()}).catch(()=>{t.target.complete()})}traerEmpleados2(){return Object(s.a)(this,void 0,void 0,function*(){this.load=!0;const t=yield this.almacenamiento.obtenerToken();t&&this.IVTapi.leerEmpleados(t.token).subscribe(t=>{t.exe?t.response.forEach(t=>{t.usuario.imagen=t.usuario.imagen[0].path.includes("notfound")?"/assets/notfound.png":`https://motocaliapp.com/${t.usuario.imagen[0].path}`,0===this.sala.adicionales.filter(e=>e===t.usuario._id).length?this.empleados.push(t):this.incluidos.push(t)}):this.toast.toastError("No se pudo traer la informaci\xf3n, intentelo m\xe1s tarde"),this.load=!1},t=>{this.toast.toastError("No se pudo traer la informaci\xf3n, intentelo m\xe1s tarde")})})}agregar(t,e){return Object(s.a)(this,void 0,void 0,function*(){const o=yield this.almacenamiento.obtenerToken();if(o){let i=this.sala.adicionales.map(t=>t);i.push(t.usuario._id),console.log(i,"nuevo"),this.apiMonitoreo.agregar(o.token,{id:this.sala._id,chat:this.sala.salas[0]._id,usuario:t.usuario._id,dis:t.usuario.usuarioID}).subscribe(o=>{o.exe?(this.toast.Especial("Empleado a\xf1adido a esta sala"),this.incluidos.push(t),this.empleados.splice(e,1),this.sala.adicionales.push(t.usuario._id)):(this.toast.toastError("No se pudo realizar la petici\xf3n, int\xe9ntelo m\xe1s tarde"),this.cerrar())},t=>{this.toast.toastError("No se pudo realizar la petici\xf3n, int\xe9ntelo m\xe1s tarde"),this.cerrar()})}})}quitar(t,e){return Object(s.a)(this,void 0,void 0,function*(){const o=yield this.almacenamiento.obtenerToken();if(o){let i=this.sala.adicionales.map(t=>t);i=i.filter(e=>e!==t.usuario._id),console.log(i,"nuevo"),this.apiMonitoreo.quitar(o.token,{id:this.sala._id,chat:this.sala.salas[0]._id,usuario:t.usuario._id,dis:t.usuario.usuarioID}).subscribe(o=>{o.exe?(this.empleados.push(t),this.incluidos.splice(e,1),this.toast.Especial("Empleado excluido de esta sala"),this.sala.adicionales=this.sala.adicionales.filter(e=>e!==t.usuario._id)):(this.toast.toastError("No se pudo realizar la petici\xf3n, int\xe9ntelo m\xe1s tarde"),this.cerrar())},t=>{this.toast.toastError("No se pudo realizar la petici\xf3n, int\xe9ntelo m\xe1s tarde"),this.cerrar()})}})}cerrar(){this.modal.dismiss({adicionales:this.sala.adicionales})}ionViewDidLeave(){this.cargauno=!1,this.empleados=[]}}return t.\u0275fac=function(e){return new(e||t)(d.Lb(p.a),d.Lb(l.a),d.Lb(b.a),d.Lb(a.ob),d.Lb(a.qb),d.Lb(u.a))},t.\u0275cmp=d.Fb({type:t,selectors:[["app-modal-empleados-grua"]],inputs:{sala:"sala"},decls:12,vars:3,consts:[["color","oscuro"],["slot","start"],[3,"click"],["name","chevron-back-outline","slot","icon-only"],[1,"divider"],["class","carga",4,"ngIf"],[4,"ngIf"],[1,"carga"],[4,"ngFor","ngForOf"],["color","medium","slot","start","animated","",2,"width","50px","height","50px"],["color","medium","animated","",2,"width","50%","height","20px"],["color","medium","animated","",2,"width","90%","height","20px"],["width","100%","height","100%","alt","",3,"src"],[1,"verdei"],["class","rojoi",4,"ngIf"],["side","end"],["color","danger",3,"click"],["name","trash-outline","slot","icon-only"],[1,"rojoi"],["color","barra",3,"click"],["name","add-outline","slot","icon-only"]],template:function(t,e){1&t&&(d.Ob(0,"ion-header"),d.Ob(1,"ion-toolbar",0),d.Ob(2,"ion-buttons",1),d.Ob(3,"ion-button",2),d.Wb("click",function(){return e.cerrar()}),d.Mb(4,"ion-icon",3),d.Nb(),d.Nb(),d.Ob(5,"ion-title"),d.wc(6,"A\xf1adir empleados a la solicitud"),d.Nb(),d.Nb(),d.Nb(),d.Ob(7,"ion-content"),d.Mb(8,"div",4),d.vc(9,g,3,2,"div",5),d.vc(10,x,4,1,"ion-list",6),d.vc(11,N,4,1,"ion-list",6),d.Nb()),2&t&&(d.Ab(9),d.fc("ngIf",e.load),d.Ab(1),d.fc("ngIf",e.incluidos.length>0),d.Ab(1),d.fc("ngIf",e.empleados.length>0))},directives:[a.z,a.lb,a.k,a.j,a.A,a.jb,a.t,i.j,a.L,i.i,a.F,a.Z,a.K,a.G,a.J,a.f,a.I,a.H],styles:[""]}),t})();var M=o("7JkF"),A=o("HavB"),P=o("F6wp"),y=o("SpuA");function I(t,e){1&t&&(d.Ob(0,"div",8),d.Ob(1,"h3",9),d.wc(2,"No tienes ninguna solicitud activa en este momento"),d.Nb(),d.Nb())}function _(t,e){if(1&t){const t=d.Pb();d.Ob(0,"div",20),d.Wb("click",function(){d.pc(t);const e=d.Yb(),o=e.$implicit,i=e.index;return d.Yb(2).agregar(o,i)}),d.wc(1," Compartir Ubicaci\xf3n con un empleado "),d.Nb()}}function C(t,e){if(1&t&&(d.Ob(0,"ion-avatar",32),d.Mb(1,"img",33),d.Nb()),2&t){const t=d.Yb().$implicit;d.fc("@escribiendo",t.escribiendo?"activo":"noactivo"),d.Ab(1),d.hc("src","https://www.motocaliapp.com/",t.taller.imagen[0].path,"",d.qc)}}function Y(t,e){if(1&t&&(d.Ob(0,"ion-avatar",32),d.Mb(1,"img",33),d.Nb()),2&t){const t=d.Yb().$implicit;d.fc("@escribiendo",t.escribiendo?"activo":"noactivo"),d.Ab(1),d.hc("src","https://www.motocaliapp.com/",t.creador.imagen[0].path,"",d.qc)}}function L(t,e){if(1&t&&(d.Ob(0,"strong"),d.wc(1),d.Nb()),2&t){const t=d.Yb().$implicit;d.Ab(1),d.yc(" ",t.creador.nombrecompleto,"")}}function T(t,e){if(1&t&&(d.Ob(0,"strong"),d.wc(1),d.Nb()),2&t){const t=d.Yb().$implicit;d.Ab(1),d.yc(" ",t.taller.nombrecompleto,"")}}function S(t,e){1&t&&(d.Ob(0,"span"),d.wc(1," Escribiendo..."),d.Nb())}function F(t,e){if(1&t&&(d.Ob(0,"div",34),d.wc(1),d.Nb()),2&t){const t=d.Yb().$implicit;d.Ab(1),d.xc(t.novistos)}}function z(t,e){if(1&t){const t=d.Pb();d.Ob(0,"ion-item-sliding"),d.Ob(1,"ion-item",25),d.Wb("click",function(){d.pc(t);const o=e.$implicit;return d.Yb(4).entrar(o)}),d.vc(2,C,2,2,"ion-avatar",26),d.vc(3,Y,2,2,"ion-avatar",26),d.Ob(4,"ion-label",27),d.Ob(5,"div",28),d.vc(6,L,2,1,"strong",29),d.vc(7,T,2,1,"strong",29),d.Nb(),d.Ob(8,"div"),d.Ob(9,"strong"),d.wc(10),d.Nb(),d.Nb(),d.Ob(11,"div"),d.wc(12),d.Zb(13,"cambioUTC"),d.Nb(),d.Ob(14,"div",30),d.vc(15,S,2,0,"span",29),d.Nb(),d.vc(16,F,2,1,"div",31),d.Nb(),d.Nb(),d.Nb()}if(2&t){const t=e.$implicit,o=d.Yb(4);d.Ab(2),d.fc("ngIf",t.creador._id===o.id),d.Ab(1),d.fc("ngIf",t.creador._id!==o.id),d.Ab(2),d.fc("@escribiendo",t.escribiendo?"activo":"noactivo"),d.Ab(1),d.fc("ngIf",t.creador._id!==o.id),d.Ab(1),d.fc("ngIf",t.creador._id===o.id),d.Ab(2),d.Db("ticket","ticket"===t.tipo)("pedido","pedido"===t.tipo)("hoja","hoja"===t.tipo),d.fc("@escribiendo",t.escribiendo?"activo":"noactivo"),d.Ab(1),d.yc("Chat Tipo: ",t.tipo,""),d.Ab(1),d.fc("@escribiendo",t.escribiendo?"activo":"noactivo"),d.Ab(1),d.xc(d.ac(13,17,t.fecha)),d.Ab(3),d.fc("ngIf",t.escribiendo),d.Ab(1),d.fc("ngIf",t.novistos>0)}}function D(t,e){if(1&t&&(d.Ob(0,"div",21),d.Ob(1,"div",22),d.wc(2,"Lista de Conversaciones"),d.Nb(),d.Ob(3,"ion-list",23),d.vc(4,z,17,19,"ion-item-sliding",24),d.Nb(),d.Nb()),2&t){const t=d.Yb().$implicit;d.Ab(4),d.fc("ngForOf",t.salas)}}function q(t,e){if(1&t&&(d.Ob(0,"ion-card",12),d.Ob(1,"ion-card-header"),d.Mb(2,"app-mapas",13),d.Nb(),d.Ob(3,"strong",14),d.wc(4),d.Zb(5,"cambioUTC"),d.Nb(),d.Ob(6,"ion-card-title",15),d.wc(7),d.Nb(),d.vc(8,_,2,0,"div",16),d.Ob(9,"div",17),d.Ob(10,"p"),d.wc(11),d.Nb(),d.Mb(12,"div",18),d.Ob(13,"div"),d.Ob(14,"strong"),d.wc(15),d.Nb(),d.Nb(),d.Ob(16,"div"),d.Ob(17,"strong"),d.wc(18,"Tel\xe9fono: "),d.Nb(),d.wc(19),d.Nb(),d.Ob(20,"div"),d.Ob(21,"strong"),d.wc(22,"Correo: "),d.Nb(),d.wc(23),d.Nb(),d.Mb(24,"br"),d.Nb(),d.vc(25,D,5,1,"div",19),d.Nb()),2&t){const t=e.$implicit;d.Ab(2),d.fc("lng",t.ubicacion.lng)("lat",t.ubicacion.lat),d.Ab(2),d.xc(d.ac(5,11,t.fecha)),d.Ab(3),d.yc("",t.creador.nombrecompleto," "),d.Ab(1),d.fc("ngIf",t.marcado),d.Ab(3),d.xc(t.descripcion),d.Ab(4),d.zc("Ubicado en ",t.creador.ciudad,", ",t.creador.pais,""),d.Ab(4),d.yc(" ",t.creador.tel,""),d.Ab(4),d.yc(" ",t.creador.correo,""),d.Ab(2),d.fc("ngIf",t.salas.length>0)}}function U(t,e){if(1&t&&(d.Ob(0,"div",10),d.vc(1,q,26,13,"ion-card",11),d.Nb()),2&t){const t=d.Yb();d.Ab(1),d.fc("ngForOf",t.gruas)}}const J=[{path:"",component:(()=>{class t{constructor(t,e,o,i,r,a,n,c){this.router=t,this.almacenamiento=e,this.apiMonitoreo=o,this.toast=i,this.socket=r,this.alert=a,this.apiPedido=n,this.modal=c,this.cargado=!1,this.gruas=[],this.salas=[],this.usuario="",this.role="",this.id="",this.marcado=!1,this.parar=!1,this.escucharEscritoss().subscribe(t=>{console.log("escribiendo...",t),t.exe&&this.salas.forEach(e=>{e._id===t.idsala&&(console.log("existe"),e.escribiendo=!0,setTimeout(()=>{e.escribiendo=!1},500))})}),this.escucharMarcados().subscribe(t=>{console.log(t,"socket"),this.gruas.forEach(e=>{e._id===t.id&&(e.marcado=!0)})}),this.escucharSacados().subscribe(t=>{this.gruas=this.gruas.filter(e=>e._id!==t.id)}),this.escuchareliminados().subscribe(t=>{this.gruas=this.gruas.filter(e=>e._id!==t.id)}),this.escucharMensaje().subscribe(t=>Object(s.a)(this,void 0,void 0,function*(){if(!this.parar&&(console.log("mensaje",t),t.exe)){const e=yield this.almacenamiento.obtenerToken();if(e){const o=this.salas.filter(e=>e._id===t.resp.sala._id);console.log(o,"data del temp"),this.apiPedido.mensajes(e.token,{idsala:o[0]._id}).subscribe(e=>{this.salas=this.salas.filter(e=>e._id!==t.resp.sala._id),o[0].novistos=e.exe?e.response.length:0,this.salas.unshift(o[0])},e=>{this.salas=this.salas.filter(e=>e._id!==t.resp.sala._id),o[0].novistos=0,this.salas.unshift(o[0])})}}}))}ngOnInit(){}ionViewWillEnter(){this.parar=!0,this.comprobar()}refrescando(){this.comprobar()}entrar(t){this.almacenamiento.insertarChat(t).then(()=>{this.router.navigate(["/central/menu/monitoreo/grua/chat","lista"])}).catch(()=>{this.toast.toastError("No se puede acceder al chat, int\xe9ntelo m\xe1s tarde")})}escucharEscritoss(){return new c.a(t=>{this.socket.on("escribiendoChat",e=>{t.next(e)})})}escucharMensaje(){return new c.a(t=>{this.socket.on("mensajeChat",e=>{t.next(e)})})}escucharMarcados(){return new c.a(t=>{this.socket.on("gruapersona",e=>{t.next(e)})})}escucharSacados(){return new c.a(t=>{this.socket.on("gruasacados",e=>{t.next(e)})})}escuchareliminados(){return new c.a(t=>{this.socket.on("gruachao",e=>{t.next(e)})})}crear(){this.router.navigate(["/central/menu/monitoreo/grua/crear/"])}comprobar(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&(this.gruas=[],this.apiMonitoreo.consultarGruaMias(t.token).subscribe(e=>{if(console.log(e,"DATON"),this.cargado=!0,e.exe){let o=e.response.length;new Promise((o,i)=>{e.response.forEach(e=>{e.marcado=!(!e.persona||e.persona!==t._id),this.role=t.role,this.id=t._id,this.usuario=t.nombre,this.apiMonitoreo.consultarChats(t.token,{grua:e._id}).subscribe(i=>{if(i.exe){let r=i.response.length;i.response.forEach(a=>Object(s.a)(this,void 0,void 0,function*(){a.escribiendo=!1,this.socket.emit("iniciochat",{id:a._id}),(yield new Promise((e,o)=>{this.apiPedido.mensajes(t.token,{idsala:a._id}).subscribe(t=>{t.exe?(console.log(t,"RESPUESTA DEL TODO"),a.fechamsg=t.response.lemgth>0?t.response[t.response.length-1]:a.fecha,a.novistos=t.response.length,e(!0)):(a.novistos=0,e(!0))},t=>{a.novistos=0,e(!0)})}))&&(r-=1,0===r&&(e.salas=i.response,console.log(e.salas,"salas",r),e.salas.sort((t,e)=>(console.log(t.novistos),t.novistos<e.novistos?(console.log("meno"),1):t.novistos>e.novistos?(console.log("mayor"),-1):0)),o(!0)),this.cargado=!0)})),0===i.response.length&&(this.cargado=!0)}else this.toast.toastError("No se pudo consultar los chats, int\xe9ntelo m\xe1s tarde"),this.router.navigate(["/central/menu/"]),this.cargado=!0},t=>{this.toast.toastError("No se pudo consultar los chats, int\xe9ntelo m\xe1s tarde"),this.router.navigate(["/central/menu/"])})})}).then(t=>{o-=1,0===o&&(this.gruas=e.response)})}else this.toast.toastError("No se pudo completar la petici\xf3n, int\xe9ntelo m\xe1s tarde")},t=>{this.toast.toastError("No se pudo completar la petici\xf3n, int\xe9ntelo m\xe1s tarde")}))})}agregar(t,e){return Object(s.a)(this,void 0,void 0,function*(){t.adicionales||(t.adicionales=[]);const o=yield this.modal.create({component:$,componentProps:{sala:t}});yield o.present();const i=yield o.onWillDismiss();i&&i.data&&(this.gruas[e].adicionales=i.data.adicionales)})}ionViewWillLeave(){this.parar=!0}}return t.\u0275fac=function(e){return new(e||t)(d.Lb(n.g),d.Lb(p.a),d.Lb(u.a),d.Lb(b.a),d.Lb(M.a),d.Lb(a.b),d.Lb(A.a),d.Lb(a.qb))},t.\u0275cmp=d.Fb({type:t,selectors:[["app-listagrua-tomados"]],decls:11,vars:2,consts:[[1,"ion-no-border"],["color","oscuro"],["slot","start","icon","chevron-back-outline","defaultHref","/central/menu/monitoreo"],["slot","end"],[3,"click"],["name","reload-outline","slot","icon-only"],["class","flex",4,"ngIf"],["class","opts",4,"ngIf"],[1,"flex"],[1,"titulo"],[1,"opts"],["color","light","mode","ios",4,"ngFor","ngForOf"],["color","light","mode","ios"],[3,"lng","lat"],[1,"gris"],[1,"tit"],["class","marcado",3,"click",4,"ngIf"],[1,"info"],[1,"separador"],["class"," ",4,"ngIf"],[1,"marcado",3,"click"],[1,""],[1,"separadorr"],[1,"light"],[4,"ngFor","ngForOf"],["color","light",3,"click"],["slot","start",4,"ngIf"],[1,"relativo"],[1,"infoo"],[4,"ngIf"],[1,"escribiendo"],["class","nv",4,"ngIf"],["slot","start"],[3,"src"],[1,"nv"]],template:function(t,e){1&t&&(d.Ob(0,"ion-header",0),d.Ob(1,"ion-toolbar",1),d.Mb(2,"ion-back-button",2),d.Ob(3,"ion-title"),d.wc(4,"Solicitudes agregadas"),d.Nb(),d.Ob(5,"ion-buttons",3),d.Ob(6,"ion-button",4),d.Wb("click",function(){return e.refrescando()}),d.Mb(7,"ion-icon",5),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(8,"ion-content"),d.vc(9,I,3,0,"div",6),d.vc(10,U,2,1,"div",7),d.Nb()),2&t&&(d.Ab(9),d.fc("ngIf",e.cargado&&0===e.gruas.length),d.Ab(1),d.fc("ngIf",e.cargado))},directives:[a.z,a.lb,a.g,a.h,a.jb,a.k,a.j,a.A,a.t,i.j,i.i,a.l,a.n,P.a,a.p,a.L,a.J,a.F,a.K,a.f],pipes:[y.a],styles:[".flex[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;align-items:center;margin:100px 0}.titulo[_ngcontent-%COMP%]{text-align:center;max-width:300px;font-size:18px;font-weight:300}.mapa[_ngcontent-%COMP%]{width:100%;height:300px}.tit[_ngcontent-%COMP%]{font-size:18px}.gris[_ngcontent-%COMP%], .tit[_ngcontent-%COMP%]{padding:10px}.gris[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.info[_ngcontent-%COMP%]{padding:10px}.tp[_ngcontent-%COMP%]{z-index:10;background-color:initial}.ct[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:20px;font-weight:300}.separadorr[_ngcontent-%COMP%]{padding:10px;color:#fff;background-color:#4a4a4a}.msg[_ngcontent-%COMP%]{position:absolute;top:0;right:0;text-align:center;padding:5px 10px;border-radius:10px}.escribiendo[_ngcontent-%COMP%]{color:#627e42;font-weight:700;font-size:14px;height:20px}.relativo[_ngcontent-%COMP%]{position:relative}.nv[_ngcontent-%COMP%]{position:absolute;bottom:5px;right:5px;background-color:#627e42;color:#fff;text-align:center;min-width:20px;min-height:20px;max-width:50px;max-height:50px;border-radius:100%}.infoo[_ngcontent-%COMP%]{font-size:14px}.ticket[_ngcontent-%COMP%]{color:#e53935}.pedido[_ngcontent-%COMP%]{color:orange}.hoja[_ngcontent-%COMP%]{color:#4a4a4a}.marcado[_ngcontent-%COMP%]{width:100%;padding:10px;background-color:var(--ion-color-danger);color:#fff}"],data:{animation:[Object(h.m)("escribiendo",[Object(h.j)("activo",Object(h.k)({opacity:.5})),Object(h.j)("noactivo",Object(h.k)({opacity:1})),Object(h.l)("activo <=> noactivo",[Object(h.e)("300ms")])])]}}),t})()}];let W=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({imports:[[n.j.forChild(J)],n.j]}),t})();var V=o("iTUp"),R=o("zon2");let H=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({imports:[[i.b,r.e,a.mb,W,V.a,R.a]]}),t})()}}]);