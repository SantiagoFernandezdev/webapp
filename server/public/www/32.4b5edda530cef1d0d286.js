(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"+Aiu":function(t,e,r){"use strict";r.r(e),r.d(e,"InicioTicketsPersonasPageModule",function(){return $});var o=r("ofXK"),n=r("3Pt+"),a=r("TEn/"),i=r("tyNb"),s=r("mrSG"),c=r("HDdC"),h=r("Si6o"),d=r("fXoL"),p=r("fsfq"),l=r("fmoy"),u=r("+WxW"),b=r("7JkF"),f=r("SpuA");function m(t,e){1&t&&(d.Ob(0,"div",12),d.Ob(1,"div"),d.wc(2," A\xfan no tiene fichos creados "),d.Mb(3,"br"),d.Nb(),d.Nb())}function k(t,e){1&t&&(d.Ob(0,"strong"),d.wc(1,"Esperando"),d.Nb())}function g(t,e){1&t&&(d.Ob(0,"strong"),d.wc(1,"Cancelada"),d.Nb())}function O(t,e){1&t&&(d.Ob(0,"strong"),d.wc(1,"Procesada"),d.Nb())}function w(t,e){if(1&t){const t=d.Pb();d.Ob(0,"div",21),d.Wb("click",function(){d.pc(t);const e=d.Yb().$implicit;return d.Yb(2).eliminar(e)}),d.Ob(1,"strong"),d.wc(2,"Cancelar Ticket"),d.Nb(),d.Nb()}}function x(t,e){if(1&t){const t=d.Pb();d.Ob(0,"ion-card",13),d.Ob(1,"div",14),d.Wb("click",function(){d.pc(t);const r=e.$implicit;return d.Yb(2).viajar(r)}),d.Ob(2,"ion-card-title"),d.wc(3),d.Nb(),d.Ob(4,"div",15),d.vc(5,k,2,0,"strong",16),d.vc(6,g,2,0,"strong",16),d.vc(7,O,2,0,"strong",16),d.Nb(),d.Ob(8,"ion-card-content"),d.Ob(9,"div"),d.Ob(10,"strong"),d.wc(11,"Negocio:"),d.Nb(),d.wc(12),d.Nb(),d.Ob(13,"div"),d.Ob(14,"strong"),d.wc(15,"Tel\xe9fono:"),d.Nb(),d.wc(16),d.Nb(),d.Mb(17,"div",17),d.Ob(18,"div"),d.Ob(19,"strong"),d.wc(20,"Usuario:"),d.Nb(),d.wc(21),d.Nb(),d.Ob(22,"div"),d.Ob(23,"strong"),d.wc(24,"Tel\xe9fono:"),d.Nb(),d.wc(25),d.Nb(),d.Ob(26,"div"),d.Ob(27,"strong"),d.wc(28,"Fecha Ticket:"),d.Nb(),d.wc(29),d.Zb(30,"cambioUTC"),d.Nb(),d.Nb(),d.Nb(),d.Ob(31,"div",18),d.Ob(32,"ion-button",19),d.Wb("click",function(){d.pc(t);const r=e.$implicit;return d.Yb(2).navegar(r._id)}),d.wc(33,"Chat"),d.Nb(),d.Nb(),d.vc(34,w,3,0,"div",20),d.Nb()}if(2&t){const t=e.$implicit,r=e.index;d.Ab(3),d.yc("Ficho ",r+1," "),d.Ab(1),d.Db("ocupado",t.cancelado&&!t.procesado)("procesado",t.procesado&&!t.cancelado)("espera",!t.cancelado&&!t.procesado),d.Ab(1),d.fc("ngIf",!t.cancelado&&!t.procesado),d.Ab(1),d.fc("ngIf",t.cancelado&&!t.procesado),d.Ab(1),d.fc("ngIf",t.procesado&&!t.cancelado),d.Ab(5),d.yc(" ",t.negocio.nombrecompleto,""),d.Ab(4),d.yc(" ",t.negocio.tel,""),d.Ab(5),d.yc(" ",t.creador.nombrecompleto,""),d.Ab(4),d.yc(" ",t.creador.tel,""),d.Ab(4),d.yc(" ",d.ac(30,16,t.fecha),""),d.Ab(5),d.fc("ngIf",!t.cancelado&&!t.procesado)}}function E(t,e){if(1&t&&(d.Ob(0,"div",9),d.vc(1,m,4,0,"div",10),d.vc(2,x,35,18,"ion-card",11),d.Nb()),2&t){const t=d.Yb();d.Ab(1),d.fc("ngIf",0===t.tickets.length),d.Ab(1),d.fc("ngForOf",t.tickets)}}const j=[{path:"",component:(()=>{class t{constructor(t,e,r,o,n,a,i){this.almacenamiento=t,this.toast=e,this.apiTickets=r,this.alert=o,this.router=n,this.socket=a,this.modal=i,this.configurando=!1,this.usuario="",this.habilitado=!1,this.cargado=!1,this.id="",this.tickets=[],this.escucharRechazos().subscribe(t=>{t.exe?this.tickets.forEach(e=>{e._id===t.data._id&&(e.cancelado=!0)}):this.toast.toastError("No se pudo rechazar tu ficho")}),this.escucharProcesados().subscribe(t=>{t.exe?this.tickets.forEach(e=>{e._id===t.data.doc._id&&(e.procesado=!0)}):this.toast.toastError("No se pudo procesar tu ficho")}),this.escucharMensajes().subscribe(t=>{t.msg?t.eli&&(this.tickets=this.tickets.filter(e=>e._id!==t.id),this.toast.toastExitoso("Ficho rechazado")):this.toast.toastError("No se pudo rechazar el ficho, int\xe9ntelo m\xe1s tarde")})}ngOnInit(){}ionViewWillEnter(){this.misTickets(),this.almacenamiento.insertarTicket("entrando").then(t=>{if(t)return!0})}refrescando(t){this.tickets=[],this.misTickets().then(()=>{t.detail.complete()}).catch(()=>{t.detail.complete()})}misTickets(){return Object(s.a)(this,void 0,void 0,function*(){this.configurando=!0;const t=yield this.almacenamiento.obtenerToken();t&&this.apiTickets.misTickets(t.token).subscribe(t=>{t.exe?(this.tickets=t.response,this.tickets.forEach(t=>{t.procesado||t.cancelado||this.socket.emit("ticket",{id:t.negocio._id})})):(this.toast.toastError("No se pudo traer los fichos, int\xe9ntelo m\xe1s tarde"),this.router.navigate(["/central/menu/"])),this.configurando=!1,this.cargado=!0},t=>{this.toast.toastError("No se pudo traer los fichos, int\xe9ntelo m\xe1s tarde"),this.router.navigate(["/central/menu/"]),this.configurando=!1,this.cargado=!0})})}viajar(t){t.cancelado||this.router.navigate(["/central/menu/tickets/tallerticket",t.negocio._id])}crear(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.modal.create({component:h.a,componentProps:{crear:"ficho"}});yield t.present();const e=yield t.onWillDismiss();e&&e.data&&e.data.exe&&this.misTickets()})}escucharRechazos(){return new c.a(t=>{this.socket.on("rechazar",e=>{t.next(e)})})}escucharProcesados(){return new c.a(t=>{this.socket.on("procesar",e=>{t.next(e)})})}eliminar(t){return Object(s.a)(this,void 0,void 0,function*(){const e=yield this.alert.create({header:"\xbfEstas seguro de eliminar este ficho?",message:"se eliminar\xe1 de forma permanente",buttons:[{text:"Cancelar",cssClass:"cancelarAlerta",role:"cancel"},{text:"Configurar",cssClass:"botonalerta",handler:()=>Object(s.a)(this,void 0,void 0,function*(){(yield this.almacenamiento.obtenerToken())&&this.socket.emit("rechazar",{idtaller:t.negocio._id,id:t._id,idusuario:t.negocio._id})})}]});yield e.present()})}escucharMensajes(){return new c.a(t=>{this.socket.on("mensajeTicket",e=>{t.next(e)})})}ionViewWillLeave(){this.almacenamiento.eleminarTicket().then(t=>{if(t)return!0})}navegar(t){return Object(s.a)(this,void 0,void 0,function*(){const e=yield this.almacenamiento.obtenerToken();e&&this.apiTickets.consultarSala(e.token,{ticket:t}).subscribe(t=>{t.exe&&t.response.length>0?t.response[0].accesos.length>0?this.almacenamiento.insertarChat(t.response[0]).then(()=>{this.router.navigate(["/central/menu/chats/chat"])}).catch(()=>{this.toast.toastError("No se puede acceder al chat, int\xe9ntelo m\xe1s tarde")}):this.toast.Especial("El ficho fue cancelado, ya no puede acceder al chat"):this.toast.toastError("No se puede acceder al chat, int\xe9ntelo m\xe1s tarde")},t=>{this.toast.toastError("No se puede acceder al chat, int\xe9ntelo m\xe1s tarde")})})}}return t.\u0275fac=function(e){return new(e||t)(d.Lb(p.a),d.Lb(l.a),d.Lb(u.a),d.Lb(a.b),d.Lb(i.g),d.Lb(b.a),d.Lb(a.qb))},t.\u0275cmp=d.Fb({type:t,selectors:[["app-inicio-tickets-personas"]],decls:13,vars:1,consts:[["color","oscuro"],["slot","start","icon","chevron-back-outline","defaultHref","/central/menu"],["slot","fixed","pullFactor","0.5","pullMin","50","pullMax","150",3,"ionRefresh"],["pullingIcon","arrow-dropdown","refreshingSpinner","circles"],[1,"divider","light"],["class","salas",4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed"],["color","oscuro",3,"click"],["name","add"],[1,"salas"],["class","flcenter ion-padding",4,"ngIf"],["mode","ios",4,"ngFor","ngForOf"],[1,"flcenter","ion-padding"],["mode","ios"],[1,"san",3,"click"],[1,"msg"],[4,"ngIf"],[1,"separador"],[1,"botones"],["mode","ios","color","light","expand","block",3,"click"],["class","msg2",3,"click",4,"ngIf"],[1,"msg2",3,"click"]],template:function(t,e){1&t&&(d.Ob(0,"ion-header"),d.Ob(1,"ion-toolbar",0),d.Mb(2,"ion-back-button",1),d.Ob(3,"ion-title"),d.wc(4,"Turnos"),d.Nb(),d.Nb(),d.Nb(),d.Ob(5,"ion-content"),d.Ob(6,"ion-refresher",2),d.Wb("ionRefresh",function(t){return e.refrescando(t)}),d.Mb(7,"ion-refresher-content",3),d.Nb(),d.Mb(8,"div",4),d.vc(9,E,3,2,"div",5),d.Ob(10,"ion-fab",6),d.Ob(11,"ion-fab-button",7),d.Wb("click",function(){return e.crear()}),d.Mb(12,"ion-icon",8),d.Nb(),d.Nb(),d.Nb()),2&t&&(d.Ab(9),d.fc("ngIf",e.cargado))},directives:[a.z,a.lb,a.g,a.h,a.jb,a.t,a.Q,a.R,o.j,a.v,a.w,a.A,o.i,a.l,a.p,a.m,a.j],pipes:[f.a],styles:[".flcenter[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:18px;text-align:center}.separador[_ngcontent-%COMP%]{width:100%;border-bottom:1px solid #566520;padding:5px;margin-bottom:5px}.san[_ngcontent-%COMP%], ion-card[_ngcontent-%COMP%]{position:relative}.msg[_ngcontent-%COMP%]{top:0}.msg[_ngcontent-%COMP%], .msg2[_ngcontent-%COMP%]{position:absolute;right:0;text-align:center;padding:5px 10px;border-radius:10px}.msg2[_ngcontent-%COMP%]{bottom:0;background-color:#7b2e18;color:#fff;z-index:10}ion-card-title[_ngcontent-%COMP%]{width:100%;padding:5px 15px}.ocupado[_ngcontent-%COMP%]{background-color:#ca0900!important;color:#fff}.espera[_ngcontent-%COMP%]{background-color:#ffaf00;color:#fff}.procesado[_ngcontent-%COMP%]{background-color:#819830!important;color:#fff}"]}),t})()}];let v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({imports:[[i.j.forChild(j)],i.j]}),t})();var N=r("iTUp");let $=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({imports:[[o.b,n.e,a.mb,v,N.a]]}),t})()},"+WxW":function(t,e,r){"use strict";r.d(e,"a",function(){return l});var o=r("AytR"),n=r("tk/3"),a=r("coGc"),i=r("lJxs"),s=r("IzEk"),c=r("MtjB"),h=r("PqYM"),d=r("fXoL"),p=r("tyNb");let l=(()=>{class t{constructor(t,e){this.http=t,this.router=e}hanflerError(t){return t.pipe(Object(a.a)(()=>Object(h.a)(3e3)),Object(i.a)(t=>{if(console.log("Entramos a intentos"),t instanceof ErrorEvent)throw new Error("Error de Red");if(404===t.status)throw new Error(" P\xe1gina no encontrada");if(401===t.status)throw new Error(" No tiene permisos ")}),Object(s.a)(3))}disponibilidad(t){const e={headers:new n.c({"x-token":t})};return this.http.get(`${o.a}/ticket/disponibilidad`,e).pipe(Object(c.a)(t=>this.hanflerError(t)))}Creardisponibilidad(t){const e={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/ticket/disponibilidad`,{},e).pipe(Object(c.a)(t=>this.hanflerError(t)))}editardisponibilidad(t,e){const r={headers:new n.c({"x-token":t})};return this.http.put(`${o.a}/ticket/disponibilidad`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearSala(t,e){const r={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/ticket/salas`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}misSalas(t){const e={headers:new n.c({"x-token":t})};return this.http.get(`${o.a}/ticket/salas`,e).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearTicket(t,e){const r={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/ticket/crear`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}misTickets(t){const e={headers:new n.c({"x-token":t})};return this.http.get(`${o.a}/ticket/lista`,e).pipe(Object(c.a)(t=>this.hanflerError(t)))}misTicketsLista(t,e){const r={headers:new n.c({"x-token":t})};return this.http.put(`${o.a}/ticket/lista/negocio`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}salasNegocio(t,e){const r={headers:new n.c({"x-token":t})};return this.http.put(`${o.a}/ticket/salas/usuario`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}disponibilidadnegocio(t,e){const r={headers:new n.c({"x-token":t})};return this.http.put(`${o.a}/ticket/disponibilidad/negocio`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}ticketsolo(t,e){const r={headers:new n.c({"x-token":t})};return this.http.put(`${o.a}/ticket/solo`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}ticketelimina(t,e){const r={headers:new n.c({"x-token":t})};return this.http.put(`${o.a}/ticket/eliminar`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearHoja(t,e){const r={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/hoja/dos`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarSala(t,e){const r={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/ticket/consultar/chat`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}}return t.\u0275fac=function(e){return new(e||t)(d.Sb(n.a),d.Sb(p.g))},t.\u0275prov=d.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},HavB:function(t,e,r){"use strict";r.d(e,"a",function(){return f});var o=r("AytR"),n=r("tk/3"),a=r("coGc"),i=r("lJxs"),s=r("IzEk"),c=r("MtjB"),h=r("JIr8"),d=r("PqYM"),p=r("Cfvw"),l=r("fXoL"),u=r("tyNb"),b=r("B7Rs");let f=(()=>{class t{constructor(t,e,r){this.http=t,this.router=e,this.MmyTransfer=r}hanflerError(t){return t.pipe(Object(a.a)(()=>Object(d.a)(3e3)),Object(i.a)(t=>{if(console.log("Entramos a intentos"),t instanceof ErrorEvent)throw new Error("Error de Red");if(404===t.status)throw new Error(" P\xe1gina no encontrada");if(401===t.status)throw new Error(" No tiene permisos ")}),Object(s.a)(3))}crearPedido(t,e){const r={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/crear/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}misPedido(t){const e={headers:new n.c({"x-token":t})};return this.http.get(`${o.a}/pedidos/lista/`,e).pipe(Object(c.a)(t=>this.hanflerError(t)))}misChats(t,e){const r={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/chats/lista/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}misChatsGrupos(t,e){const r={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/chats/lista/grupos`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}misPedidoUsuario(t,e){const r={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/lista/`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}misSalas(t){const e={headers:new n.c({"x-token":t})};return this.http.get(`${o.a}/ticket/salas`,e).pipe(Object(c.a)(t=>this.hanflerError(t)))}mensajes(t,e){const r={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/chat`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}traermensajesNoVistos(t,e){const r={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/chat/vistos`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}marcarvisto(t,e){const r={headers:new n.c({"x-token":t})};return this.http.put(`${o.a}/pedidos/chat/vistos`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}infoPedido(t,e){const r={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/info`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}infoPedidoPut(t,e){const r={headers:new n.c({"x-token":t})};return this.http.put(`${o.a}/pedidos/info`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearEstados(t,e){const r={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/estados`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarEstados(t,e){const r={headers:new n.c({"x-token":t})};return this.http.put(`${o.a}/pedidos/estados`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarChat(t,e){const r={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/unico/consultar/chat`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarChatFotos(t,e){const r={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/unico/consultar/chat/fotos`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarSala(t,e){const r={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/consultar/chat`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarMapa(t,e){const r={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/consultar/mapa`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarMapaUnico(t,e){const r={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/consultar/mapa/unico`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearMapa(t,e){const r={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/crear/mapa`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarMapa(t,e){const r={headers:new n.c({"x-token":t})};return this.http.put(`${o.a}/pedidos/editar/mapa`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarMapaInfo(t,e){const r={headers:new n.c({"x-token":t})};return this.http.put(`${o.a}/pedidos/editar/mapa/info`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarMapaInfoD(t,e){const r={headers:new n.c({"x-token":t})};return this.http.put(`${o.a}/pedidos/editar/mapa/infod`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarPedido(t,e){const r={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/pedidos/editar`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarChat(t,e){const r={headers:new n.c({"x-token":t})};return this.http.post(`${o.a}/chat/editar`,e,r).pipe(Object(c.a)(t=>this.hanflerError(t)))}subirArchivosChat(t,e,r,n,a,i,s){console.log("archivo",r);const c={fileKey:"archivo",fileName:i,mimeType:s,httpMethod:"PUT",headers:{"x-token":t,"x-sala":e,"x-final":n,"x-cont":a}},d=this.MmyTransfer.create();return Object(p.a)(d.upload(r,`${o.a}/pedido/upload`,c)).pipe(Object(h.a)(t=>{throw new Error(r)}))}subirweb(t,e,r,a,i){console.log(t,e,r,a);const s={headers:new n.c({"x-token":t,"x-sala":e,"x-final":r.toString(),"x-cont":a.toString()})};return this.http.put(`${o.a}/pedido/upload`,i,s).pipe(Object(c.a)(t=>this.hanflerError(t)))}}return t.\u0275fac=function(e){return new(e||t)(l.Sb(n.a),l.Sb(u.g),l.Sb(b.a))},t.\u0275prov=l.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},SpuA:function(t,e,r){"use strict";r.d(e,"a",function(){return a});var o=r("wd/R"),n=r("fXoL");let a=(()=>{class t{transform(t){console.log(t,"fechin");let e=o.utc(t).toDate();return o(e).format("dddd, DD MMMM YYYY h:mm:a")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=n.Kb({name:"cambioUTC",type:t,pure:!0}),t})()},r3ab:function(t,e,r){"use strict";r.d(e,"a",function(){return i});var o=r("mrSG"),n=r("fXoL"),a=r("TEn/");let i=(()=>{class t{constructor(t){this.loadingCtrl=t}cargaProcesos(t){return Object(o.a)(this,void 0,void 0,function*(){return this.loading=yield this.loadingCtrl.create({message:t}),this.loading.present()})}finalizarCargado(){this.loading.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(n.Sb(a.ob))},t.\u0275prov=n.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);