(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+WxW":function(t,e,i){"use strict";i.d(e,"a",function(){return p});var o=i("AytR"),r=i("tk/3"),n=i("coGc"),a=i("lJxs"),s=i("IzEk"),c=i("MtjB"),d=i("PqYM"),h=i("fXoL"),l=i("tyNb");let p=(()=>{class t{constructor(t,e){this.http=t,this.router=e}hanflerError(t){return t.pipe(Object(n.a)(()=>Object(d.a)(3e3)),Object(a.a)(t=>{if(console.log("Entramos a intentos"),t instanceof ErrorEvent)throw new Error("Error de Red");if(404===t.status)throw new Error(" P\xe1gina no encontrada");if(401===t.status)throw new Error(" No tiene permisos ")}),Object(s.a)(3))}disponibilidad(t){const e={headers:new r.c({"x-token":t})};return this.http.get(`${o.a}/ticket/disponibilidad`,e).pipe(Object(c.a)(t=>this.hanflerError(t)))}Creardisponibilidad(t){const e={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/ticket/disponibilidad`,{},e).pipe(Object(c.a)(t=>this.hanflerError(t)))}editardisponibilidad(t,e){const i={headers:new r.c({"x-token":t})};return this.http.put(`${o.a}/ticket/disponibilidad`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearSala(t,e){const i={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/ticket/salas`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}misSalas(t){const e={headers:new r.c({"x-token":t})};return this.http.get(`${o.a}/ticket/salas`,e).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearTicket(t,e){const i={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/ticket/crear`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}misTickets(t){const e={headers:new r.c({"x-token":t})};return this.http.get(`${o.a}/ticket/lista`,e).pipe(Object(c.a)(t=>this.hanflerError(t)))}misTicketsLista(t,e){const i={headers:new r.c({"x-token":t})};return this.http.put(`${o.a}/ticket/lista/negocio`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}salasNegocio(t,e){const i={headers:new r.c({"x-token":t})};return this.http.put(`${o.a}/ticket/salas/usuario`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}disponibilidadnegocio(t,e){const i={headers:new r.c({"x-token":t})};return this.http.put(`${o.a}/ticket/disponibilidad/negocio`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}ticketsolo(t,e){const i={headers:new r.c({"x-token":t})};return this.http.put(`${o.a}/ticket/solo`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}ticketelimina(t,e){const i={headers:new r.c({"x-token":t})};return this.http.put(`${o.a}/ticket/eliminar`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearHoja(t,e){const i={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/hoja/dos`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarSala(t,e){const i={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/ticket/consultar/chat`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}}return t.\u0275fac=function(e){return new(e||t)(h.Qb(r.a),h.Qb(l.g))},t.\u0275prov=h.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"9ucb":function(t,e,i){"use strict";i.d(e,"a",function(){return l});var o=i("AytR"),r=i("tk/3"),n=i("coGc"),a=i("lJxs"),s=i("IzEk"),c=i("MtjB"),d=i("PqYM"),h=i("fXoL");let l=(()=>{class t{constructor(t){this.http=t}hanflerError(t){let e=0;return t.pipe(Object(n.a)(()=>Object(d.a)(3e3)),Object(a.a)(t=>{if(e++,3===e&&(console.log("Entramos a intentos"),t instanceof ErrorEvent))throw new Error("Error de Red")}),Object(s.a)(3))}getBiografia(t,e){const i={headers:new r.c({"x-token":t,"x-id":e})};return this.http.get(`${o.a}/biografia`,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}postBiografia(t,e){const i={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/biografia`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}}return t.\u0275fac=function(e){return new(e||t)(h.Qb(r.a))},t.\u0275prov=h.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},HavB:function(t,e,i){"use strict";i.d(e,"a",function(){return f});var o=i("AytR"),r=i("tk/3"),n=i("coGc"),a=i("lJxs"),s=i("IzEk"),c=i("MtjB"),d=i("JIr8"),h=i("PqYM"),l=i("Cfvw"),p=i("fXoL"),b=i("tyNb"),u=i("B7Rs");let f=(()=>{class t{constructor(t,e,i){this.http=t,this.router=e,this.MmyTransfer=i}hanflerError(t){return t.pipe(Object(n.a)(()=>Object(h.a)(3e3)),Object(a.a)(t=>{if(console.log("Entramos a intentos"),t instanceof ErrorEvent)throw new Error("Error de Red");if(404===t.status)throw new Error(" P\xe1gina no encontrada");if(401===t.status)throw new Error(" No tiene permisos ")}),Object(s.a)(3))}crearPedido(t,e){const i={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/crear/`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}misPedido(t){const e={headers:new r.c({"x-token":t})};return this.http.get(`${o.a}/pedidos/lista/`,e).pipe(Object(c.a)(t=>this.hanflerError(t)))}misChats(t,e){const i={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/chats/lista/`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}misPedidoUsuario(t,e){const i={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/lista/`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}misSalas(t){const e={headers:new r.c({"x-token":t})};return this.http.get(`${o.a}/ticket/salas`,e).pipe(Object(c.a)(t=>this.hanflerError(t)))}mensajes(t,e){const i={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/chat`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}traermensajesNoVistos(t,e){const i={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/chat/vistos`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}marcarvisto(t,e){const i={headers:new r.c({"x-token":t})};return this.http.put(`${o.a}/pedidos/chat/vistos`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}infoPedido(t,e){const i={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/info`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}infoPedidoPut(t,e){const i={headers:new r.c({"x-token":t})};return this.http.put(`${o.a}/pedidos/info`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearEstados(t,e){const i={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/estados`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarEstados(t,e){const i={headers:new r.c({"x-token":t})};return this.http.put(`${o.a}/pedidos/estados`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarChat(t,e){const i={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/unico/consultar/chat`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarChatFotos(t,e){const i={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/unico/consultar/chat/fotos`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarSala(t,e){const i={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/consultar/chat`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarMapa(t,e){const i={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/consultar/mapa`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarMapaUnico(t,e){const i={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/consultar/mapa/unico`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearMapa(t,e){const i={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/crear/mapa`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarMapa(t,e){const i={headers:new r.c({"x-token":t})};return this.http.put(`${o.a}/pedidos/editar/mapa`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarMapaInfo(t,e){const i={headers:new r.c({"x-token":t})};return this.http.put(`${o.a}/pedidos/editar/mapa/info`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarMapaInfoD(t,e){const i={headers:new r.c({"x-token":t})};return this.http.put(`${o.a}/pedidos/editar/mapa/infod`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarPedido(t,e){const i={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/editar`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarChat(t,e){const i={headers:new r.c({"x-token":t})};return this.http.post(`${o.a}/chat/editar`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}subirArchivosChat(t,e,i,r,n,a,s){console.log("archivo",i);const c={fileKey:"archivo",fileName:a,mimeType:s,httpMethod:"PUT",headers:{"x-token":t,"x-sala":e,"x-final":r,"x-cont":n}},h=this.MmyTransfer.create();return Object(l.a)(h.upload(i,`${o.a}/pedido/upload`,c)).pipe(Object(d.a)(t=>{throw new Error(i)}))}subirweb(t,e,i,n,a){console.log(t,e,i,n);const s={headers:new r.c({"x-token":t,"x-sala":e,"x-final":i.toString(),"x-cont":n.toString()})};return this.http.put(`${o.a}/pedido/upload`,a,s).pipe(Object(c.a)(t=>this.hanflerError(t)))}}return t.\u0275fac=function(e){return new(e||t)(p.Qb(r.a),p.Qb(b.g),p.Qb(u.a))},t.\u0275prov=p.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},iM4M:function(t,e,i){"use strict";i.d(e,"a",function(){return S});var o=i("mrSG"),r=i("HDdC"),n=i("fXoL"),a=i("TEn/"),s=i("fsfq"),c=i("9ucb"),d=i("Gq8O"),h=i("fmoy"),l=i("oQG1"),p=i("tyNb"),b=i("+WxW"),u=i("7JkF"),f=i("HavB"),g=i("ofXK"),m=i("mg06");function k(t,e){if(1&t){const t=n.Nb();n.Mb(0,"ion-buttons",8),n.Mb(1,"ion-button",9),n.Ub("click",function(){return n.lc(t),n.Wb().cerrar()}),n.Kb(2,"ion-icon",10),n.Lb(),n.Lb()}}function O(t,e){1&t&&(n.Mb(0,"ion-title"),n.rc(1,"Configuraci\xf3n"),n.Lb())}function v(t,e){1&t&&(n.Mb(0,"ion-title"),n.rc(1,"Filtrar"),n.Lb())}function E(t,e){if(1&t){const t=n.Nb();n.Mb(0,"ion-buttons",11),n.Mb(1,"ion-button",9),n.Ub("click",function(){return n.lc(t),n.Wb().guardar()}),n.Kb(2,"ion-icon",12),n.Lb(),n.Lb()}}function x(t,e){if(1&t&&n.Kb(0,"img",32),2&t){const t=n.Wb(2);n.fc("src","https://motocaliapp.com/19927613410/",t.info.portada,"",n.mc)}}function M(t,e){1&t&&(n.Mb(0,"div",33),n.rc(1,"Siguiendo"),n.Lb())}function j(t,e){if(1&t){const t=n.Nb();n.Mb(0,"div",34),n.Mb(1,"div",9),n.Ub("click",function(){return n.lc(t),n.Wb(2).seguimiento()}),n.rc(2),n.Lb(),n.Lb()}if(2&t){const t=n.Wb(2);n.zb(1),n.Bb("rj",t.solicitudEnviada)("ama",!t.solicitudEnviada),n.zb(1),n.sc(t.titulo)}}function w(t,e){if(1&t&&(n.Mb(0,"ion-avatar",35),n.Kb(1,"ion-img",36),n.Lb()),2&t){const t=n.Wb(2);n.zb(1),n.dc("src",t.info.imagen)}}function C(t,e){1&t&&n.Kb(0,"ion-avatar",35)}function P(t,e){if(1&t&&(n.Mb(0,"strong"),n.rc(1),n.Lb()),2&t){const t=e.$implicit;n.zb(1),n.tc(" ",t," ")}}function $(t,e){if(1&t&&(n.Mb(0,"div",13),n.Mb(1,"ion-card",14),n.Mb(2,"div",15),n.Mb(3,"div",16),n.qc(4,x,1,1,"img",17),n.qc(5,M,2,0,"div",18),n.qc(6,j,3,5,"div",19),n.Lb(),n.qc(7,w,2,1,"ion-avatar",20),n.qc(8,C,1,0,"ion-avatar",20),n.Lb(),n.Mb(9,"ion-card-header"),n.Mb(10,"ion-card-title",21),n.rc(11),n.Lb(),n.Lb(),n.Mb(12,"ion-card-content"),n.Mb(13,"ion-list"),n.Mb(14,"ion-item",22),n.Mb(15,"ion-avatar",23),n.Kb(16,"img",24),n.Lb(),n.Mb(17,"ion-label"),n.rc(18),n.Lb(),n.Lb(),n.Kb(19,"br"),n.Mb(20,"ion-item",22),n.Mb(21,"ion-thumbnail",23),n.Kb(22,"img",25),n.Lb(),n.Mb(23,"ion-label",26),n.qc(24,P,2,1,"strong",27),n.Lb(),n.Lb(),n.Mb(25,"ion-item",28),n.Mb(26,"ion-avatar",8),n.Kb(27,"img",29),n.Lb(),n.Mb(28,"ion-label",26),n.Mb(29,"div"),n.rc(30,"HORARIOS DE ATENCI\xd3N"),n.Lb(),n.Mb(31,"div"),n.rc(32,"De "),n.Mb(33,"strong",30),n.rc(34),n.Lb(),n.rc(35," A "),n.Mb(36,"strong",30),n.rc(37),n.Lb(),n.Lb(),n.Mb(38,"strong"),n.rc(39),n.Xb(40,"horario"),n.Xb(41,"horario"),n.Lb(),n.Lb(),n.Lb(),n.Kb(42,"br"),n.Lb(),n.Lb(),n.Lb(),n.Kb(43,"div",31),n.Lb()),2&t){const t=n.Wb();n.zb(3),n.Bb("zul","cl"===t.info.portada),n.zb(1),n.dc("ngIf","cl"!==t.info.portada),n.zb(1),n.dc("ngIf",t.amigos&&t.ejecutado),n.zb(1),n.dc("ngIf",!t.amigos&&t.ejecutado),n.zb(1),n.dc("ngIf","pl"!==t.info.imagen),n.zb(1),n.dc("ngIf","none"===t.info.imagen),n.zb(3),n.sc(t.info.creador.nombrecompleto),n.zb(7),n.tc("",t.info.nombre," "),n.zb(6),n.dc("ngForOf",t.info.tipoNegocio),n.zb(10),n.sc(t.info.de),n.zb(3),n.sc(t.info.a),n.zb(2),n.uc("Desde las ",n.Yb(40,14,t.info.desde)," Hasta las ",n.Yb(41,16,t.info.hasta),"")}}function L(t,e){if(1&t&&(n.Mb(0,"ion-select-option",43),n.rc(1),n.Lb()),2&t){const t=e.$implicit;n.dc("value",t),n.zb(1),n.sc(t.nombre)}}function _(t,e){1&t&&(n.Mb(0,"div",44),n.Kb(1,"br"),n.Kb(2,"ion-spinner",45),n.rc(3," Cargando Ciudades... "),n.Lb())}function y(t,e){if(1&t&&(n.Mb(0,"ion-select-option",43),n.rc(1),n.Lb()),2&t){const t=e.$implicit;n.ec("value",t.nombre),n.zb(1),n.sc(t.nombre)}}function z(t,e){if(1&t){const t=n.Nb();n.Mb(0,"ion-item",38),n.Mb(1,"ion-label",26),n.rc(2,"Selecciona la ciudad"),n.Lb(),n.Mb(3,"ion-select",39),n.Ub("ionChange",function(e){return n.lc(t),n.Wb(2).seleccionarCiudad(e)}),n.qc(4,y,2,2,"ion-select-option",40),n.Lb(),n.Lb()}if(2&t){const t=n.Wb(2);n.zb(4),n.dc("ngForOf",t.ciudades)}}function I(t,e){if(1&t){const t=n.Nb();n.Mb(0,"ion-item"),n.Mb(1,"ion-checkbox",46),n.Ub("ionChange",function(e){return n.lc(t),n.Wb(2).cambio(e)}),n.Lb(),n.Mb(2,"ion-label"),n.rc(3),n.Lb(),n.Lb()}if(2&t){const t=e.$implicit;n.zb(1),n.dc("checked",t.checked)("value",t.nombre),n.zb(2),n.sc(t.nombre)}}function N(t,e){if(1&t){const t=n.Nb();n.Mb(0,"div",37),n.Mb(1,"ion-list"),n.Mb(2,"ion-item",38),n.Mb(3,"ion-label",26),n.rc(4,"Selecciona el Pa\xeds"),n.Lb(),n.Mb(5,"ion-select",39),n.Ub("ionChange",function(e){return n.lc(t),n.Wb().listarCiudades(e)}),n.qc(6,L,2,2,"ion-select-option",40),n.Lb(),n.Lb(),n.qc(7,_,4,0,"div",41),n.qc(8,z,5,1,"ion-item",42),n.Kb(9,"br"),n.qc(10,I,4,3,"ion-item",27),n.Lb(),n.Lb()}if(2&t){const t=n.Wb();n.zb(6),n.dc("ngForOf",t.paises),n.zb(1),n.dc("ngIf",t.cargando),n.zb(1),n.dc("ngIf",t.ciudad),n.zb(2),n.dc("ngForOf",t.negocios)}}function T(t,e){if(1&t){const t=n.Nb();n.Mb(0,"ion-card",47),n.Ub("click",function(){return n.lc(t),n.Wb().crearTicket()}),n.Mb(1,"ion-card-header"),n.Kb(2,"img",48),n.Lb(),n.Mb(3,"ion-card-title"),n.rc(4,"Sistema de Ticket "),n.Lb(),n.Lb()}}function q(t,e){if(1&t){const t=n.Nb();n.Mb(0,"ion-card",47),n.Ub("click",function(){return n.lc(t),n.Wb().crearPedido()}),n.Mb(1,"ion-card-header"),n.Kb(2,"img",49),n.Lb(),n.Mb(3,"ion-card-title"),n.rc(4,"Pedido "),n.Lb(),n.Lb()}}let S=(()=>{class t{constructor(t,e,i,o,r,n,a,s,c,d,h,l){this.modalCtrl=t,this.almacenamiento=e,this.biografia=i,this.seguimientoService=o,this.toasCtrl=r,this.popov=n,this.apiUsuario=a,this.alert=s,this.router=c,this.apiTickets=d,this.socket=h,this.apiPedidos=l,this.contenido={},this.servicios=[],this.estado=!0,this.ejecutado=!1,this.amigos=!1,this.negocios=[],this.escogidos=[],this.cargando=!1,this.paises=[],this.ciudades=[],this.miciudad="",this.pais="",this.ciudad=!1,this.solicitudEnviada=!1,this.estadoSolicitud=!1,this.titulo="Enviar solicitud",this.id="",this.nombre="",this.cargado=!1,this.listaModulos="",this.escucharMensajes().subscribe(t=>{t.msg?(this.toasCtrl.toastExitoso("Ticket creado correctamente"),this.router.navigate(["/central/tickets"]),this.cerrar()):this.toasCtrl.toastError("No se pudo crear el ticket, int\xe9ntelo m\xe1s tarde")})}ngOnInit(){}ionViewWillEnter(){if(1===this.vista){const t=this.info.creador.imagen.length>0?"https://motocaliapp.com/"+this.info.creador.imagen[0].path:"pl";this.info.portada=this.info.creador.portada.path?this.info.creador.portada.path:"cl",this.id=this.info.creador._id,this.nombre=this.info.creador.nombrecompleto,this.info.imagen=t,this.informacion(this.info.creador._id),this.cargarSolicitud(this.info.creador._id),this.disponibilidad(),this.modulos()}else 2===this.vista&&(this.listarPaises(),this.listarNegocios())}modulos(){return Object(o.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&this.apiUsuario.modulosTALLER(t.token,{_id:this.id}).subscribe(t=>{t.exe?(console.log(t.response,"respon"),t.response.length>0&&(this.listaModulos=t.response[0].modulos)):this.toasCtrl.toastError("No se pudo cargar los m\xf3dulos, intentelo m\xe1s tarde")},t=>{this.toasCtrl.toastError("No se pudo cargar los m\xf3dulos, intentelo m\xe1s tarde")})})}disponibilidad(){return Object(o.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&this.apiTickets.disponibilidadnegocio(t.token,{id:this.id}).subscribe(t=>{t.exe&&(this.cargado="no"!==t.response)},t=>{this.toasCtrl.toastError("No se pudo consultar la disponibilidad, int\xe9ntelo m\xe1s tarde")})})}listarNegocios(){this.apiUsuario.negocios().subscribe(t=>{t.exe?(t.response.forEach(t=>{t.checked=!0,this.escogidos.push(t.nombre)}),this.negocios=t.response):this.negocios.push("Taller M\xe9canico")},t=>{this.negocios.push("Taller M\xe9canico")})}informacion(t){return Object(o.a)(this,void 0,void 0,function*(){const e=yield this.almacenamiento.obtenerToken();e&&this.biografia.getBiografia(e.token,t).subscribe(t=>{t.response.length>0?(this.contenido=t.response[0].contenido,this.servicios=t.response[0].servicios,this.estado=!1):this.estado=!0},t=>{})})}cerrar(){this.modalCtrl.dismiss({})}cargarSolicitud(t){return Object(o.a)(this,void 0,void 0,function*(){const e=yield this.almacenamiento.obtenerToken();e&&this.seguimientoService.consultarSolicitud(e.token,t).subscribe(t=>{t.response.length>0?"pendiente"===t.response[0].estado?(this.amigos=!1,this.solicitudEnviada=!0,this.titulo="Cancelar solicitud"):"aceptado"===t.response[0].estado&&(this.amigos=!0,this.titulo="Dejar de seguir",this.solicitudEnviada=!0):(this.solicitudEnviada=!1,this.titulo="Enviar solicitud"),this.ejecutado=!0},t=>{this.ejecutado=!0,this.toasCtrl.toastError("No se pudo traer toda la informaci\xf3n, int\xe9ntelo m\xe1s tarde")})})}listarPaises(){this.apiUsuario.listarPaises().subscribe(t=>{t.exe?this.paises=t.response:this.paises.push("Colombia")},t=>{this.paises.push("Colombia")})}listarCiudades(t,e){this.pais=t.detail.value.nombre,this.miciudad="",this.cargando=!0,this.apiUsuario.listarCiudades(t.detail.value._id).subscribe(t=>{t.exe?(this.ciudades=t.response,this.ciudad=!0):this.toasCtrl.toastError("No se pudo traer las ciudades, intente registrarse m\xe1s tarde"),this.cargando=!1},t=>{this.toasCtrl.toastError("No se pudo traer las ciudades, intente registrarse m\xe1s tarde"),this.cargando=!1})}seleccionarCiudad(t){this.miciudad=t.detail.value}cambio(t){t.detail.checked?this.escogidos.find(e=>e===t.detail.value)||this.escogidos.push(t.detail.value):this.escogidos=this.escogidos.filter(e=>e!==t.detail.value)}guardar(){this.popov.dismiss({validado:!0,arreglo:this.escogidos,ciudad:""!==this.miciudad&&this.miciudad,pais:""!==this.pais&&this.pais})}seguir(){}seguimiento(){this.solicitudEnviada?this.almacenamiento.obtenerToken().then(t=>{this.seguimientoService.cancelarSolicitud(t.token,this.id,"1").subscribe(t=>{this.solicitudEnviada=!1,this.titulo="Seguir Cuenta"},t=>{this.toasCtrl.alertApplication(t.message,!1)})}).catch(t=>{}):this.almacenamiento.obtenerToken().then(t=>{this.estadoSolicitud=!0,this.seguimientoService.enviarSolicitud({token:t.token,IDreceptor:this.id}).subscribe(t=>{this.estadoSolicitud=!1,this.solicitudEnviada=!0,this.titulo="Cancelar Solicitud"},t=>{this.estadoSolicitud=!1,this.toasCtrl.alertApplication(t.message,!1)})})}crearTicket(){return Object(o.a)(this,void 0,void 0,function*(){const t=yield this.alert.create({header:"Crear Ticket",message:"Al crear el ticket entrar\xe1s en la fila de espera de "+this.nombre,inputs:[{type:"textarea",placeholder:"Asunto del ficho",name:"des"}],buttons:[{text:"Cancelar",cssClass:"cancelarAlerta",role:"cancel",handler:()=>{}},{text:"Crear Ticket",cssClass:"botonalerta",handler:t=>{this.generarTicket(t)}}]});yield t.present()})}crearPedido(){return Object(o.a)(this,void 0,void 0,function*(){const t=yield this.alert.create({header:"Crear Pedido",message:"Al crear el pedido se crear\xe1 una sala de chat con "+this.nombre,buttons:[{text:"Cancelar",cssClass:"cancelarAlerta",role:"cancel",handler:()=>{}},{text:"Crear Pedido",cssClass:"botonalerta",handler:t=>Object(o.a)(this,void 0,void 0,function*(){if(""!==this.id){const t=yield this.almacenamiento.obtenerToken();t&&this.apiPedidos.crearPedido(t.token,{taller:this.id}).subscribe(t=>{console.log(t),t.exe?(this.modalCtrl.dismiss(),this.toasCtrl.toastExitoso("Pedido creado correctamente"),this.router.navigate(["/central/pedidos"])):this.toasCtrl.toastError("No se pudo generar el pedido para "+this.nombre)},t=>{this.toasCtrl.toastError("No se pudo generar el pedido para "+this.nombre)})}else this.toasCtrl.toastError("No se pudo generar el pedido para "+this.nombre)})}]});yield t.present()})}generarTicket(t){return Object(o.a)(this,void 0,void 0,function*(){if(""!==this.id){const e=yield this.almacenamiento.obtenerToken();e&&this.socket.emit("crear",{idtaller:this.id,id:e._id,usuario:e.nusuario,nombre:e.nombre,des:t.des})}else this.toasCtrl.toastError("No se pudo generar el ticket para "+this.nombre)})}escucharMensajes(){return new r.a(t=>{this.socket.on("mensajeTicket",e=>{t.next(e)})})}}return t.\u0275fac=function(e){return new(e||t)(n.Jb(a.ob),n.Jb(s.a),n.Jb(c.a),n.Jb(d.a),n.Jb(h.a),n.Jb(a.sb),n.Jb(l.a),n.Jb(a.b),n.Jb(p.g),n.Jb(b.a),n.Jb(u.a),n.Jb(f.a))},t.\u0275cmp=n.Db({type:t,selectors:[["app-modal-mapas"]],inputs:{info:"info",vista:"vista",seleccionados:"seleccionados"},decls:12,vars:8,consts:[["color","oscuro"],["slot","start",4,"ngIf"],[4,"ngIf"],["slot","end",4,"ngIf"],["class","info",4,"ngIf"],["class","filtro",4,"ngIf"],[1,"opts"],["mode","ios",3,"click",4,"ngIf"],["slot","start"],[3,"click"],["name","chevron-back-outline","slot","icon-only"],["slot","end"],["name","checkmark-outline","slot","icon-only"],[1,"info"],["mode","ios",1,"tarjeta"],[1,"portada"],[1,"img"],["alt","",3,"src",4,"ngIf"],["class","barra",4,"ngIf"],["class","barra ama",4,"ngIf"],["class","avatar",4,"ngIf"],[1,"ion-text-center","ion-text-wrap"],["lines","none"],["slot","start",1,"peque"],["src","/assets/Marcador.png","alt",""],["src","/assets/Estrella.png","alt",""],[1,"ion-text-wrap"],[4,"ngFor","ngForOf"],["lines","none","color","light"],["src","/assets/reloj.png","alt",""],[1,"verdem"],[1,"seguido"],["alt","",3,"src"],[1,"barra"],[1,"barra","ama"],[1,"avatar"],["type","media","width","200px",3,"src"],[1,"filtro"],["mode","ios"],["okText","Aceptar","cancelText","Cancelar",3,"ionChange"],[3,"value",4,"ngFor","ngForOf"],["class","flexbet",4,"ngIf"],["mode","ios",4,"ngIf"],[3,"value"],[1,"flexbet"],["name","crescent","color","primary"],["slot","start",3,"checked","value","ionChange"],["mode","ios",3,"click"],["src","/assets/Ticket.png","width","100px"],["src","/assets/Estados.png","width","100px"]],template:function(t,e){1&t&&(n.Mb(0,"ion-header"),n.Mb(1,"ion-toolbar",0),n.qc(2,k,3,0,"ion-buttons",1),n.qc(3,O,2,0,"ion-title",2),n.qc(4,v,2,0,"ion-title",2),n.qc(5,E,3,0,"ion-buttons",3),n.Lb(),n.Lb(),n.Mb(6,"ion-content"),n.qc(7,$,44,18,"div",4),n.qc(8,N,11,4,"div",5),n.Mb(9,"div",6),n.qc(10,T,5,0,"ion-card",7),n.qc(11,q,5,0,"ion-card",7),n.Lb(),n.Lb()),2&t&&(n.zb(2),n.dc("ngIf",1===e.vista),n.zb(1),n.dc("ngIf",1===e.vista),n.zb(1),n.dc("ngIf",2===e.vista),n.zb(1),n.dc("ngIf",2===e.vista),n.zb(2),n.dc("ngIf",1===e.vista),n.zb(1),n.dc("ngIf",2===e.vista),n.zb(2),n.dc("ngIf",e.cargado),n.zb(1),n.dc("ngIf",e.listaModulos.includes("pedidos")))},directives:[a.z,a.jb,g.j,a.t,a.k,a.j,a.A,a.hb,a.l,a.n,a.p,a.m,a.L,a.F,a.f,a.K,a.gb,g.i,a.B,a.W,a.vb,a.X,a.bb,a.q,a.d],pipes:[m.a],styles:["ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%!important}.tarjeta[_ngcontent-%COMP%], div[_ngcontent-%COMP%], ion-list[_ngcontent-%COMP%], ion-slide[_ngcontent-%COMP%], ion-slides[_ngcontent-%COMP%]{width:100%}.tarjeta[_ngcontent-%COMP%]{border-radius:0;margin:0}.tarje[_ngcontent-%COMP%]{margin:10px 0 auto}.tarjeta[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:0}.portada[_ngcontent-%COMP%]{width:100%;background-color:#f9f9f9;height:120px;max-height:120px;position:relative;margin-bottom:50px}.portada[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{max-height:120px;overflow:hidden;display:flex;align-items:center}.portada[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.avatar[_ngcontent-%COMP%]{position:absolute;bottom:-50px;left:50%;transform:translateX(-50%);margin:0 auto;width:100px!important;height:100px!important;z-index:11}.avatar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff}.avatar-peque[_ngcontent-%COMP%]{margin-left:8px;width:30px!important;height:30px!important}.avatar-peque[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%!important;height:100%!important}ion-card-content[_ngcontent-%COMP%]{margin-top:20px}.titulo[_ngcontent-%COMP%]{position:absolute;bottom:-50px;left:120px;font-weight:700;font-size:20px}.peque[_ngcontent-%COMP%]{width:25px;height:40px}.zul[_ngcontent-%COMP%]{background-color:#55636b}.verdem[_ngcontent-%COMP%]{color:#819830}.seguido[_ngcontent-%COMP%]{width:90%;margin:20px auto}.barra[_ngcontent-%COMP%]{position:absolute;width:120px;height:25px;left:0;bottom:-25px;background-color:#819830;color:#fff;font-weight:700;display:flex;justify-content:center;align-items:center}.ama[_ngcontent-%COMP%]{background-color:#2c8f53}.ama[_ngcontent-%COMP%], .rj[_ngcontent-%COMP%]{color:#fff}.rj[_ngcontent-%COMP%]{background-color:#ca0900}.opts[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap}.opts[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{width:calc(50% - 10px);margin:10px 5px;display:flex;flex-direction:column;justify-content:center;align-items:center;transition:all .5s}.opts[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:22px;text-align:center}.opts[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{text-align:center;padding:5px}@media screen and (min-width:800px){.opts[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{width:calc(33.33% - 10px)}}"]}),t})()},mg06:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var o=i("wd/R"),r=i("fXoL");let n=(()=>{class t{transform(t){return o.locale("es"),o(t).format("h:mm a")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=r.Ib({name:"horario",type:t,pure:!0}),t})()},oQG1:function(t,e,i){"use strict";i.d(e,"a",function(){return g});var o=i("tk/3"),r=i("PqYM"),n=i("Cfvw"),a=i("coGc"),s=i("lJxs"),c=i("IzEk"),d=i("MtjB"),h=i("JIr8"),l=i("AytR"),p=i("fXoL"),b=i("B7Rs"),u=i("fsfq"),f=i("TEn/");let g=(()=>{class t{constructor(t,e,i,o){this.http=t,this.transfer=e,this.almacenamiento=i,this.navCtrl=o}hanflerError(t){let e=0;return t.pipe(Object(a.a)(()=>Object(r.a)(5e3)),Object(s.a)(t=>{if(e++,console.log("Entramos a intentos"),t instanceof ErrorEvent){if(3===e)throw new Error("Error de Red")}else{if(!(t instanceof ProgressEvent))throw 404===t.status?new Error(" al realizar la solicictud "):401===t.status?(this.almacenamiento.terminarPartida().then(()=>{this.navCtrl.navigateRoot("/home")}),new Error("No tiene permisos para realizar la petici\xf3n ")):(console.log(t,"Error de servidor"),new Error(" No se pudo realizar la petici\xf3n, intentalo m\xe1s tarde "));if(3===e)throw new Error("Error de Red")}}),Object(c.a)(3))}registrar(t){return this.http.post(`${l.a}/usuarios`,t).pipe(Object(s.a)(t=>t.exe?(t.response.exe=t.exe,t.response.token=t.token,t.response):t),Object(d.a)(t=>this.hanflerError(t)))}usuario(t){return this.http.post(`${l.a}/usuarios/unico`,{buscar:t}).pipe(Object(d.a)(t=>this.hanflerError(t)))}iniciarPartida(t,e){const i={headers:new o.c({"x-dispositivoID":e})};return this.http.post(`${l.a}/login`,t,i).pipe(Object(s.a)(t=>(console.log(t),t.exe?(t.response.exe=t.exe,t.response.token=t.token,t.response):t.exe)),Object(d.a)(t=>this.hanflerError(t)))}fotoPerfilUsuarioMoto(t,e,i){const o={fileKey:"archivo",httpMethod:"PUT",headers:{"x-token":e},params:{tipo:i}},r=this.transfer.create();return Object(n.a)(r.upload(t,`${l.a}/upload`,o)).pipe(Object(h.a)(t=>{throw console.log("No se pudo subir la imagen "),new Error("No se pudo subir la imagen ")}))}fotoPortada(t,e,i){const o={fileKey:"archivo",httpMethod:"PUT",headers:{"x-token":e},params:{old:i}},r=this.transfer.create();return Object(n.a)(r.upload(t,`${l.a}/upload/portada/`,o)).pipe(Object(h.a)(t=>{throw console.log("No se pudo subir la imagen "),new Error("No se pudo subir la imagen ")}))}viewImagen(t){const e={headers:new o.c({"x-token":t})};return this.http.get(`${l.a}/ver`,e).pipe(Object(d.a)(t=>this.hanflerError(t)))}buscarUsuario(t,e){const i={headers:new o.c({"x-token":e})};return this.http.get(`${l.a}/usuarios/${t}`,i).pipe(Object(d.a)(t=>this.hanflerError(t)))}cerrar(t){const e={headers:new o.c({"x-token":t})};return this.http.put(`${l.a}/usuarios/cerrar/`,{},e).pipe(Object(d.a)(t=>this.hanflerError(t)))}usuarioDatos(t){const e={headers:new o.c({"x-token":t})};return this.http.put(`${l.a}/usuarios/uno/`,{},e).pipe(Object(d.a)(t=>this.hanflerError(t)))}editarUusuario(t,e){const i={headers:new o.c({"x-token":t})};return this.http.put(`${l.a}/usuarios/editar/uno/`,e,i).pipe(Object(d.a)(t=>this.hanflerError(t)))}buscarPerfilUsuario(t,e){const i={headers:new o.c({"x-token":e})};return this.http.get(`${l.a}/usuarios/perfil/${t}`,i).pipe(Object(d.a)(t=>this.hanflerError(t)))}traerMisNotificaciones(t,e){const i={headers:new o.c({"x-token":t,"x-desde":e.toString()})};return this.http.get(`${l.a}/notificaciones/misnotificaciones/`,i).pipe(Object(d.a)(t=>this.hanflerError(t)))}notiCantidad(t){const e={headers:new o.c({"x-token":t})};return this.http.get(`${l.a}/notificaciones/numero/`,e).pipe(Object(d.a)(t=>this.hanflerError(t)))}ActualizarNotificaciones(t,e){const i={headers:new o.c({"x-token":t})};return this.http.put(`${l.a}/notificaciones/misnotificaciones/cambiarestado/`,{id:e},i).pipe(Object(d.a)(t=>this.hanflerError(t)))}validarClave(t,e){const i={headers:new o.c({"x-token":t})};return this.http.put(`${l.a}/usuarios/claves/`,e,i).pipe(Object(d.a)(t=>this.hanflerError(t)))}editarClaves(t,e){const i={headers:new o.c({"x-token":t})};return this.http.put(`${l.a}/usuarios/claves/editar`,e,i).pipe(Object(d.a)(t=>this.hanflerError(t)))}editarClaves2(t){return this.http.put(`${l.a}/usuarios/claves/editar/dos`,t).pipe(Object(d.a)(t=>this.hanflerError(t)))}listarPaises(){return this.http.get(`${l.a}/paises`).pipe(Object(d.a)(t=>this.hanflerError(t)))}listarCiudades(t){const e={headers:new o.c({"x-pais":t})};return this.http.get(`${l.a}/ciudad`,e).pipe(Object(d.a)(t=>this.hanflerError(t)))}CodigoComprobar(t){return this.http.put(`${l.a}/codigos`,t).pipe(Object(d.a)(t=>this.hanflerError(t)))}EditarCodigo(t){return this.http.put(`${l.a}/codigos/cambiar`,t).pipe(Object(d.a)(t=>this.hanflerError(t)))}negocios(){return this.http.get(`${l.a}/tiponegocio`).pipe(Object(d.a)(t=>this.hanflerError(t)))}modulos(t){const e={headers:new o.c({"x-token":t})};return this.http.get(`${l.a}/modulos`,e).pipe(Object(d.a)(t=>this.hanflerError(t)))}modulosTALLER(t,e){const i={headers:new o.c({"x-token":t})};return this.http.post(`${l.a}/modulos`,e,i).pipe(Object(d.a)(t=>this.hanflerError(t)))}Cambio(t){return this.http.post(`${l.a}/cambio`,t).pipe(Object(d.a)(t=>this.hanflerError(t)))}Validar(t){return this.http.put(`${l.a}/cambio`,t).pipe(Object(d.a)(t=>this.hanflerError(t)))}}return t.\u0275fac=function(e){return new(e||t)(p.Qb(o.a),p.Qb(b.a),p.Qb(u.a),p.Qb(f.pb))},t.\u0275prov=p.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},utQI:function(t,e,i){"use strict";i.d(e,"a",function(){return p});var o=i("ofXK"),r=i("3Pt+"),n=i("TEn/"),a=i("tyNb"),s=i("iM4M"),c=i("fXoL");const d=[{path:"",component:s.a}];let h=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[a.i.forChild(d)],a.i]}),t})();var l=i("iTUp");let p=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[o.b,r.e,n.kb,h,l.a]]}),t})()}}]);