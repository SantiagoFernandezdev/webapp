(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{HavB:function(t,e,o){"use strict";o.d(e,"a",function(){return f});var i=o("AytR"),n=o("tk/3"),s=o("coGc"),r=o("lJxs"),a=o("IzEk"),c=o("MtjB"),d=o("JIr8"),h=o("PqYM"),p=o("Cfvw"),l=o("fXoL"),b=o("tyNb"),u=o("B7Rs");let f=(()=>{class t{constructor(t,e,o){this.http=t,this.router=e,this.MmyTransfer=o}hanflerError(t){return t.pipe(Object(s.a)(()=>Object(h.a)(3e3)),Object(r.a)(t=>{if(console.log("Entramos a intentos"),t instanceof ErrorEvent)throw new Error("Error de Red");if(404===t.status)throw new Error(" P\xe1gina no encontrada");if(401===t.status)throw new Error(" No tiene permisos ")}),Object(a.a)(3))}crearPedido(t,e){const o={headers:new n.c({"x-token":t})};return this.http.post(`${i.a}/pedidos/crear/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}misPedido(t){const e={headers:new n.c({"x-token":t})};return this.http.get(`${i.a}/pedidos/lista/`,e).pipe(Object(c.a)(t=>this.hanflerError(t)))}misChats(t,e){const o={headers:new n.c({"x-token":t})};return this.http.post(`${i.a}/chats/lista/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}misChatsGrupos(t,e){const o={headers:new n.c({"x-token":t})};return this.http.post(`${i.a}/chats/lista/grupos`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}misPedidoUsuario(t,e){const o={headers:new n.c({"x-token":t})};return this.http.post(`${i.a}/pedidos/lista/`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}misSalas(t){const e={headers:new n.c({"x-token":t})};return this.http.get(`${i.a}/ticket/salas`,e).pipe(Object(c.a)(t=>this.hanflerError(t)))}mensajes(t,e){const o={headers:new n.c({"x-token":t})};return this.http.post(`${i.a}/pedidos/chat`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}traermensajesNoVistos(t,e){const o={headers:new n.c({"x-token":t})};return this.http.post(`${i.a}/pedidos/chat/vistos`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}marcarvisto(t,e){const o={headers:new n.c({"x-token":t})};return this.http.put(`${i.a}/pedidos/chat/vistos`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}infoPedido(t,e){const o={headers:new n.c({"x-token":t})};return this.http.post(`${i.a}/pedidos/info`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}infoPedidoPut(t,e){const o={headers:new n.c({"x-token":t})};return this.http.put(`${i.a}/pedidos/info`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearEstados(t,e){const o={headers:new n.c({"x-token":t})};return this.http.post(`${i.a}/pedidos/estados`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarEstados(t,e){const o={headers:new n.c({"x-token":t})};return this.http.put(`${i.a}/pedidos/estados`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarChat(t,e){const o={headers:new n.c({"x-token":t})};return this.http.post(`${i.a}/unico/consultar/chat`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarChatFotos(t,e){const o={headers:new n.c({"x-token":t})};return this.http.post(`${i.a}/unico/consultar/chat/fotos`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarSala(t,e){const o={headers:new n.c({"x-token":t})};return this.http.post(`${i.a}/pedidos/consultar/chat`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarMapa(t,e){const o={headers:new n.c({"x-token":t})};return this.http.post(`${i.a}/pedidos/consultar/mapa`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarMapaUnico(t,e){const o={headers:new n.c({"x-token":t})};return this.http.post(`${i.a}/pedidos/consultar/mapa/unico`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearMapa(t,e){const o={headers:new n.c({"x-token":t})};return this.http.post(`${i.a}/pedidos/crear/mapa`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarMapa(t,e){const o={headers:new n.c({"x-token":t})};return this.http.put(`${i.a}/pedidos/editar/mapa`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarMapaInfo(t,e){const o={headers:new n.c({"x-token":t})};return this.http.put(`${i.a}/pedidos/editar/mapa/info`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarMapaInfoD(t,e){const o={headers:new n.c({"x-token":t})};return this.http.put(`${i.a}/pedidos/editar/mapa/infod`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarPedido(t,e){const o={headers:new n.c({"x-token":t})};return this.http.post(`${i.a}/pedidos/editar`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarChat(t,e){const o={headers:new n.c({"x-token":t})};return this.http.post(`${i.a}/chat/editar`,e,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}subirArchivosChat(t,e,o,n,s,r,a){console.log("archivo",o);const c={fileKey:"archivo",fileName:r,mimeType:a,httpMethod:"PUT",headers:{"x-token":t,"x-sala":e,"x-final":n,"x-cont":s}},h=this.MmyTransfer.create();return Object(p.a)(h.upload(o,`${i.a}/pedido/upload`,c)).pipe(Object(d.a)(t=>{throw new Error(o)}))}subirweb(t,e,o,s,r){console.log(t,e,o,s);const a={headers:new n.c({"x-token":t,"x-sala":e,"x-final":o.toString(),"x-cont":s.toString()})};return this.http.put(`${i.a}/pedido/upload`,r,a).pipe(Object(c.a)(t=>this.hanflerError(t)))}}return t.\u0275fac=function(e){return new(e||t)(l.Sb(n.a),l.Sb(b.g),l.Sb(u.a))},t.\u0275prov=l.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},SpuA:function(t,e,o){"use strict";o.d(e,"a",function(){return s});var i=o("wd/R"),n=o("fXoL");let s=(()=>{class t{transform(t){console.log(t,"fechin");let e=i.utc(t).toDate();return i(e).format("dddd, DD MMMM YYYY h:mm:a")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=n.Kb({name:"cambioUTC",type:t,pure:!0}),t})()},gx6W:function(t,e,o){"use strict";o.r(e),o.d(e,"ListagruaCompartidosPageModule",function(){return I});var i=o("ofXK"),n=o("3Pt+"),s=o("TEn/"),r=o("tyNb"),a=o("mrSG"),c=o("HDdC"),d=o("R0Ic"),h=o("fXoL"),p=o("fsfq"),l=o("0xwK"),b=o("fmoy"),u=o("7JkF"),f=o("HavB"),g=o("F6wp"),m=o("SpuA");function O(t,e){1&t&&(h.Ob(0,"div",8),h.Ob(1,"h3",9),h.wc(2,"No tienes ninguna solicitud activa en este momento"),h.Nb(),h.Nb())}function v(t,e){if(1&t&&(h.Ob(0,"ion-avatar",30),h.Mb(1,"img",31),h.Nb()),2&t){const t=h.Yb().$implicit;h.fc("@escribiendo",t.escribiendo?"activo":"noactivo"),h.Ab(1),h.hc("src","https://www.motocaliapp.com/",t.taller.imagen[0].path,"",h.qc)}}function w(t,e){if(1&t&&(h.Ob(0,"ion-avatar",30),h.Mb(1,"img",31),h.Nb()),2&t){const t=h.Yb().$implicit;h.fc("@escribiendo",t.escribiendo?"activo":"noactivo"),h.Ab(1),h.hc("src","https://www.motocaliapp.com/",t.creador.imagen[0].path,"",h.qc)}}function x(t,e){if(1&t&&(h.Ob(0,"strong"),h.wc(1),h.Nb()),2&t){const t=h.Yb().$implicit;h.Ab(1),h.yc(" ",t.creador.nombrecompleto,"")}}function j(t,e){if(1&t&&(h.Ob(0,"strong"),h.wc(1),h.Nb()),2&t){const t=h.Yb().$implicit;h.Ab(1),h.yc(" ",t.taller.nombrecompleto,"")}}function k(t,e){1&t&&(h.Ob(0,"span"),h.wc(1," Escribiendo..."),h.Nb())}function E(t,e){if(1&t&&(h.Ob(0,"div",32),h.wc(1),h.Nb()),2&t){const t=h.Yb().$implicit;h.Ab(1),h.xc(t.novistos)}}function M(t,e){if(1&t){const t=h.Pb();h.Ob(0,"ion-item-sliding"),h.Ob(1,"ion-item",23),h.Wb("click",function(){h.pc(t);const o=e.$implicit;return h.Yb(4).entrar(o)}),h.vc(2,v,2,2,"ion-avatar",24),h.vc(3,w,2,2,"ion-avatar",24),h.Ob(4,"ion-label",25),h.Ob(5,"div",26),h.vc(6,x,2,1,"strong",27),h.vc(7,j,2,1,"strong",27),h.Nb(),h.Ob(8,"div"),h.Ob(9,"strong"),h.wc(10),h.Nb(),h.Nb(),h.Ob(11,"div"),h.wc(12),h.Zb(13,"cambioUTC"),h.Nb(),h.Ob(14,"div",28),h.vc(15,k,2,0,"span",27),h.Nb(),h.vc(16,E,2,1,"div",29),h.Nb(),h.Nb(),h.Nb()}if(2&t){const t=e.$implicit,o=h.Yb(4);h.Ab(2),h.fc("ngIf",t.creador._id===o.id),h.Ab(1),h.fc("ngIf",t.creador._id!==o.id),h.Ab(2),h.fc("@escribiendo",t.escribiendo?"activo":"noactivo"),h.Ab(1),h.fc("ngIf",t.creador._id!==o.id),h.Ab(1),h.fc("ngIf",t.creador._id===o.id),h.Ab(2),h.Db("ticket","ticket"===t.tipo)("pedido","pedido"===t.tipo)("hoja","hoja"===t.tipo),h.fc("@escribiendo",t.escribiendo?"activo":"noactivo"),h.Ab(1),h.yc("Chat Tipo: ",t.tipo,""),h.Ab(1),h.fc("@escribiendo",t.escribiendo?"activo":"noactivo"),h.Ab(1),h.xc(h.ac(13,17,t.fecha)),h.Ab(3),h.fc("ngIf",t.escribiendo),h.Ab(1),h.fc("ngIf",t.novistos>0)}}function N(t,e){if(1&t&&(h.Ob(0,"div",19),h.Ob(1,"div",20),h.wc(2,"Lista de Conversaciones"),h.Nb(),h.Ob(3,"ion-list",21),h.vc(4,M,17,19,"ion-item-sliding",22),h.Nb(),h.Nb()),2&t){const t=h.Yb().$implicit;h.Ab(4),h.fc("ngForOf",t.salas)}}function C(t,e){if(1&t&&(h.Ob(0,"ion-card",12),h.Ob(1,"ion-card-header"),h.Mb(2,"app-mapas",13),h.Nb(),h.Ob(3,"strong",14),h.wc(4),h.Zb(5,"cambioUTC"),h.Nb(),h.Ob(6,"ion-card-title",15),h.wc(7),h.Nb(),h.Ob(8,"div",16),h.Ob(9,"p"),h.wc(10),h.Nb(),h.Mb(11,"div",17),h.Ob(12,"div"),h.Ob(13,"strong"),h.wc(14),h.Nb(),h.Nb(),h.Ob(15,"div"),h.Ob(16,"strong"),h.wc(17,"Tel\xe9fono: "),h.Nb(),h.wc(18),h.Nb(),h.Ob(19,"div"),h.Ob(20,"strong"),h.wc(21,"Correo: "),h.Nb(),h.wc(22),h.Nb(),h.Mb(23,"br"),h.Nb(),h.vc(24,N,5,1,"div",18),h.Nb()),2&t){const t=e.$implicit;h.Ab(2),h.fc("lng",t.ubicacion.lng)("lat",t.ubicacion.lat),h.Ab(2),h.xc(h.ac(5,10,t.fecha)),h.Ab(3),h.yc("",t.creador.nombrecompleto," "),h.Ab(3),h.xc(t.descripcion),h.Ab(4),h.zc("Ubicado en ",t.creador.ciudad,", ",t.creador.pais,""),h.Ab(4),h.yc(" ",t.creador.tel,""),h.Ab(4),h.yc(" ",t.creador.correo,""),h.Ab(2),h.fc("ngIf",t.salas.length>0)}}function _(t,e){if(1&t&&(h.Ob(0,"div",10),h.vc(1,C,25,12,"ion-card",11),h.Nb()),2&t){const t=h.Yb();h.Ab(1),h.fc("ngForOf",t.gruas)}}const P=[{path:"",component:(()=>{class t{constructor(t,e,o,i,n,s,r,c){this.router=t,this.almacenamiento=e,this.apiMonitoreo=o,this.toast=i,this.socket=n,this.alert=s,this.apiPedido=r,this.modal=c,this.cargado=!1,this.gruas=[],this.salas=[],this.usuario="",this.role="",this.id="",this.marcado=!1,this.parar=!1,this.escucharEscritoss().subscribe(t=>{console.log("escribiendo...",t),t.exe&&this.salas.forEach(e=>{e._id===t.idsala&&(console.log("existe"),e.escribiendo=!0,setTimeout(()=>{e.escribiendo=!1},500))})}),this.escucharMarcados().subscribe(t=>{console.log(t,"socket"),this.gruas.forEach(e=>{e._id===t.id&&(e.marcado=!0)})}),this.escucharSacados().subscribe(t=>{this.gruas=this.gruas.filter(e=>e._id!==t.id)}),this.escuchareliminados().subscribe(t=>{this.gruas=this.gruas.filter(e=>e._id!==t.id)}),this.escucharMensaje().subscribe(t=>Object(a.a)(this,void 0,void 0,function*(){if(!this.parar&&(console.log("mensaje",t),t.exe)){const e=yield this.almacenamiento.obtenerToken();if(e){const o=this.salas.filter(e=>e._id===t.resp.sala._id);console.log(o,"data del temp"),this.apiPedido.mensajes(e.token,{idsala:o[0]._id}).subscribe(e=>{this.salas=this.salas.filter(e=>e._id!==t.resp.sala._id),o[0].novistos=e.exe?e.response.length:0,this.salas.unshift(o[0])},e=>{this.salas=this.salas.filter(e=>e._id!==t.resp.sala._id),o[0].novistos=0,this.salas.unshift(o[0])})}}}))}ngOnInit(){}ionViewWillEnter(){this.parar=!0,this.comprobar()}refrescando(){this.comprobar()}entrar(t){this.almacenamiento.insertarChat(t).then(()=>{this.router.navigate(["/central/menu/monitoreo/grua/chat","lista"])}).catch(()=>{this.toast.toastError("No se puede acceder al chat, int\xe9ntelo m\xe1s tarde")})}escucharEscritoss(){return new c.a(t=>{this.socket.on("escribiendoChat",e=>{t.next(e)})})}escucharMensaje(){return new c.a(t=>{this.socket.on("mensajeChat",e=>{t.next(e)})})}escucharMarcados(){return new c.a(t=>{this.socket.on("gruapersona",e=>{t.next(e)})})}escuchareliminados(){return new c.a(t=>{this.socket.on("gruachao",e=>{t.next(e)})})}escucharSacados(){return new c.a(t=>{this.socket.on("gruasacados",e=>{t.next(e)})})}comprobar(){return Object(a.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&(this.gruas=[],this.apiMonitoreo.compartidos(t.token,{}).subscribe(e=>{if(console.log(e,"DATON"),this.cargado=!0,e.exe){let o=e.response.length;new Promise((o,i)=>{e.response.forEach(e=>{e.marcado=!(!e.persona||e.persona!==t._id),this.role=t.role,this.id=t._id,this.usuario=t.nombre,this.apiMonitoreo.consultarChats(t.token,{grua:e._id}).subscribe(i=>{if(i.exe){let n=i.response.length;i.response.forEach(s=>Object(a.a)(this,void 0,void 0,function*(){s.escribiendo=!1,this.socket.emit("iniciochat",{id:s._id}),(yield new Promise((e,o)=>{this.apiPedido.mensajes(t.token,{idsala:s._id}).subscribe(t=>{t.exe?(console.log(t,"RESPUESTA DEL TODO"),s.fechamsg=t.response.lemgth>0?t.response[t.response.length-1]:s.fecha,s.novistos=t.response.length,e(!0)):(s.novistos=0,e(!0))},t=>{s.novistos=0,e(!0)})}))&&(n-=1,0===n&&(e.salas=i.response,console.log(e.salas,"salas",n),e.salas.sort((t,e)=>(console.log(t.novistos),t.novistos<e.novistos?(console.log("meno"),1):t.novistos>e.novistos?(console.log("mayor"),-1):0)),o(!0)),this.cargado=!0)})),0===i.response.length&&(this.cargado=!0)}else this.toast.toastError("No se pudo consultar los chats, int\xe9ntelo m\xe1s tarde"),this.router.navigate(["/central/menu/"]),this.cargado=!0},t=>{this.toast.toastError("No se pudo consultar los chats, int\xe9ntelo m\xe1s tarde"),this.router.navigate(["/central/menu/"])})})}).then(t=>{o-=1,0===o&&(this.gruas=e.response)})}else this.toast.toastError("No se pudo completar la petici\xf3n, int\xe9ntelo m\xe1s tarde")},t=>{this.toast.toastError("No se pudo completar la petici\xf3n, int\xe9ntelo m\xe1s tarde")}))})}ionViewWillLeave(){this.parar=!0}}return t.\u0275fac=function(e){return new(e||t)(h.Lb(r.g),h.Lb(p.a),h.Lb(l.a),h.Lb(b.a),h.Lb(u.a),h.Lb(s.b),h.Lb(f.a),h.Lb(s.qb))},t.\u0275cmp=h.Fb({type:t,selectors:[["app-listagrua-compartidos"]],decls:11,vars:2,consts:[[1,"ion-no-border"],["color","oscuro"],["slot","start","icon","chevron-back-outline","defaultHref","/central/menu/monitoreo"],["slot","end"],[3,"click"],["name","reload-outline","slot","icon-only"],["class","flex",4,"ngIf"],["class","opts",4,"ngIf"],[1,"flex"],[1,"titulo"],[1,"opts"],["color","light","mode","ios",4,"ngFor","ngForOf"],["color","light","mode","ios"],[3,"lng","lat"],[1,"gris"],[1,"tit"],[1,"info"],[1,"separador"],["class"," ",4,"ngIf"],[1,""],[1,"separadorr"],[1,"light"],[4,"ngFor","ngForOf"],["color","light",3,"click"],["slot","start",4,"ngIf"],[1,"relativo"],[1,"infoo"],[4,"ngIf"],[1,"escribiendo"],["class","nv",4,"ngIf"],["slot","start"],[3,"src"],[1,"nv"]],template:function(t,e){1&t&&(h.Ob(0,"ion-header",0),h.Ob(1,"ion-toolbar",1),h.Mb(2,"ion-back-button",2),h.Ob(3,"ion-title"),h.wc(4,"Solicitudes compartidas conmigo"),h.Nb(),h.Ob(5,"ion-buttons",3),h.Ob(6,"ion-button",4),h.Wb("click",function(){return e.refrescando()}),h.Mb(7,"ion-icon",5),h.Nb(),h.Nb(),h.Nb(),h.Nb(),h.Ob(8,"ion-content"),h.vc(9,O,3,0,"div",6),h.vc(10,_,2,1,"div",7),h.Nb()),2&t&&(h.Ab(9),h.fc("ngIf",e.cargado&&0===e.gruas.length),h.Ab(1),h.fc("ngIf",e.cargado))},directives:[s.z,s.lb,s.g,s.h,s.jb,s.k,s.j,s.A,s.t,i.j,i.i,s.l,s.n,g.a,s.p,s.L,s.J,s.F,s.K,s.f],pipes:[m.a],styles:[".flex[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;align-items:center;margin:100px 0}.titulo[_ngcontent-%COMP%]{text-align:center;max-width:300px;font-size:18px;font-weight:300}.mapa[_ngcontent-%COMP%]{width:100%;height:300px}.tit[_ngcontent-%COMP%]{font-size:18px}.gris[_ngcontent-%COMP%], .tit[_ngcontent-%COMP%]{padding:10px}.gris[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.info[_ngcontent-%COMP%]{padding:10px}.tp[_ngcontent-%COMP%]{z-index:10;background-color:initial}.ct[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:20px;font-weight:300}.separadorr[_ngcontent-%COMP%]{padding:10px;color:#fff;background-color:#4a4a4a}.msg[_ngcontent-%COMP%]{position:absolute;top:0;right:0;text-align:center;padding:5px 10px;border-radius:10px}.escribiendo[_ngcontent-%COMP%]{color:#627e42;font-weight:700;font-size:14px;height:20px}.relativo[_ngcontent-%COMP%]{position:relative}.nv[_ngcontent-%COMP%]{position:absolute;bottom:5px;right:5px;background-color:#627e42;color:#fff;text-align:center;min-width:20px;min-height:20px;max-width:50px;max-height:50px;border-radius:100%}.infoo[_ngcontent-%COMP%]{font-size:14px}.ticket[_ngcontent-%COMP%]{color:#e53935}.pedido[_ngcontent-%COMP%]{color:orange}.hoja[_ngcontent-%COMP%]{color:#4a4a4a}.marcado[_ngcontent-%COMP%]{width:100%;padding:10px;background-color:#555;color:#fff}"],data:{animation:[Object(d.m)("escribiendo",[Object(d.j)("activo",Object(d.k)({opacity:.5})),Object(d.j)("noactivo",Object(d.k)({opacity:1})),Object(d.l)("activo <=> noactivo",[Object(d.e)("300ms")])])]}}),t})()}];let A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h.Jb({type:t}),t.\u0275inj=h.Ib({imports:[[r.j.forChild(P)],r.j]}),t})();var $=o("iTUp"),y=o("zon2");let I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h.Jb({type:t}),t.\u0275inj=h.Ib({imports:[[i.b,n.e,s.mb,A,$.a,y.a]]}),t})()}}]);