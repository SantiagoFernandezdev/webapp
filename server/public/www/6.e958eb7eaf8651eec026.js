(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{HavB:function(t,e,i){"use strict";i.d(e,"a",function(){return m});var n=i("AytR"),o=i("tk/3"),a=i("coGc"),r=i("lJxs"),s=i("IzEk"),c=i("MtjB"),h=i("JIr8"),d=i("PqYM"),p=i("Cfvw"),l=i("fXoL"),b=i("tyNb"),u=i("B7Rs");let m=(()=>{class t{constructor(t,e,i){this.http=t,this.router=e,this.MmyTransfer=i}hanflerError(t){return t.pipe(Object(a.a)(()=>Object(d.a)(3e3)),Object(r.a)(t=>{if(console.log("Entramos a intentos"),t instanceof ErrorEvent)throw new Error("Error de Red");if(404===t.status)throw new Error(" P\xe1gina no encontrada");if(401===t.status)throw new Error(" No tiene permisos ")}),Object(s.a)(3))}crearPedido(t,e){const i={headers:new o.c({"x-token":t})};return this.http.post(`${n.a}/pedidos/crear/`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}misPedido(t){const e={headers:new o.c({"x-token":t})};return this.http.get(`${n.a}/pedidos/lista/`,e).pipe(Object(c.a)(t=>this.hanflerError(t)))}misChats(t,e){const i={headers:new o.c({"x-token":t})};return this.http.post(`${n.a}/chats/lista/`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}misChatsGrupos(t,e){const i={headers:new o.c({"x-token":t})};return this.http.post(`${n.a}/chats/lista/grupos`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}misPedidoUsuario(t,e){const i={headers:new o.c({"x-token":t})};return this.http.post(`${n.a}/pedidos/lista/`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}misSalas(t){const e={headers:new o.c({"x-token":t})};return this.http.get(`${n.a}/ticket/salas`,e).pipe(Object(c.a)(t=>this.hanflerError(t)))}mensajes(t,e){const i={headers:new o.c({"x-token":t})};return this.http.post(`${n.a}/pedidos/chat`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}traermensajesNoVistos(t,e){const i={headers:new o.c({"x-token":t})};return this.http.post(`${n.a}/pedidos/chat/vistos`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}marcarvisto(t,e){const i={headers:new o.c({"x-token":t})};return this.http.put(`${n.a}/pedidos/chat/vistos`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}infoPedido(t,e){const i={headers:new o.c({"x-token":t})};return this.http.post(`${n.a}/pedidos/info`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}infoPedidoPut(t,e){const i={headers:new o.c({"x-token":t})};return this.http.put(`${n.a}/pedidos/info`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearEstados(t,e){const i={headers:new o.c({"x-token":t})};return this.http.post(`${n.a}/pedidos/estados`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarEstados(t,e){const i={headers:new o.c({"x-token":t})};return this.http.put(`${n.a}/pedidos/estados`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarChat(t,e){const i={headers:new o.c({"x-token":t})};return this.http.post(`${n.a}/unico/consultar/chat`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarChatFotos(t,e){const i={headers:new o.c({"x-token":t})};return this.http.post(`${n.a}/unico/consultar/chat/fotos`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarSala(t,e){const i={headers:new o.c({"x-token":t})};return this.http.post(`${n.a}/pedidos/consultar/chat`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarMapa(t,e){const i={headers:new o.c({"x-token":t})};return this.http.post(`${n.a}/pedidos/consultar/mapa`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}consultarMapaUnico(t,e){const i={headers:new o.c({"x-token":t})};return this.http.post(`${n.a}/pedidos/consultar/mapa/unico`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearMapa(t,e){const i={headers:new o.c({"x-token":t})};return this.http.post(`${n.a}/pedidos/crear/mapa`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarMapa(t,e){const i={headers:new o.c({"x-token":t})};return this.http.put(`${n.a}/pedidos/editar/mapa`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarMapaInfo(t,e){const i={headers:new o.c({"x-token":t})};return this.http.put(`${n.a}/pedidos/editar/mapa/info`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarMapaInfoD(t,e){const i={headers:new o.c({"x-token":t})};return this.http.put(`${n.a}/pedidos/editar/mapa/infod`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarPedido(t,e){const i={headers:new o.c({"x-token":t})};return this.http.post(`${n.a}/pedidos/editar`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}editarChat(t,e){const i={headers:new o.c({"x-token":t})};return this.http.post(`${n.a}/chat/editar`,e,i).pipe(Object(c.a)(t=>this.hanflerError(t)))}subirArchivosChat(t,e,i,o,a,r,s){console.log("archivo",i);const c={fileKey:"archivo",fileName:r,mimeType:s,httpMethod:"PUT",headers:{"x-token":t,"x-sala":e,"x-final":o,"x-cont":a}},d=this.MmyTransfer.create();return Object(p.a)(d.upload(i,`${n.a}/pedido/upload`,c)).pipe(Object(h.a)(t=>{throw new Error(i)}))}subirweb(t,e,i,a,r){console.log(t,e,i,a);const s={headers:new o.c({"x-token":t,"x-sala":e,"x-final":i.toString(),"x-cont":a.toString()})};return this.http.put(`${n.a}/pedido/upload`,r,s).pipe(Object(c.a)(t=>this.hanflerError(t)))}}return t.\u0275fac=function(e){return new(e||t)(l.Sb(o.a),l.Sb(b.g),l.Sb(u.a))},t.\u0275prov=l.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},mpxO:function(t,e,i){"use strict";i.r(e),i.d(e,"SalaModalChatPageModule",function(){return C});var n=i("ofXK"),o=i("3Pt+"),a=i("TEn/"),r=i("tyNb"),s=i("mrSG"),c=i("fXoL"),h=i("fsfq"),d=i("fmoy"),p=i("7JkF"),l=i("a/9d"),b=i("r3ab"),u=i("HavB");function m(t,e){if(1&t&&(c.Ob(0,"ion-slides",6),c.Ob(1,"ion-slide"),c.Mb(2,"img",7),c.Nb(),c.Nb()),2&t){const t=c.Yb();c.fc("options",t.slide),c.Ab(2),c.hc("src","https://www.motocaliapp.com/2807/",t.img,"",c.qc)}}let f=(()=>{class t{constructor(t,e,i,n,o,a,r,s){this.almacenamiento=t,this.modal=e,this.toast=i,this.socket=n,this.actionCtrl=o,this.camera=a,this.myLoading=r,this.apiPedido=s,this.carga=!1,this.slide={zoom:{maxRation:8}}}ngOnInit(){}ionViewWillEnter(){this.crear()}crear(){return Object(s.a)(this,void 0,void 0,function*(){(yield this.almacenamiento.obtenerToken())&&(this.carga=!0)})}cerrar(){this.modal.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(h.a),c.Lb(a.qb),c.Lb(d.a),c.Lb(p.a),c.Lb(a.a),c.Lb(l.a),c.Lb(b.a),c.Lb(u.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-modal-chat"]],inputs:{img:"img"},decls:9,vars:1,consts:[[1,"ion-no-border"],["color","darkgold"],["slot","end"],[3,"click"],["name","close-outline","slot","icon-only"],[3,"options",4,"ngIf"],[3,"options"],["width","100%",3,"src"]],template:function(t,e){1&t&&(c.Ob(0,"ion-header",0),c.Ob(1,"ion-toolbar",1),c.Ob(2,"ion-title"),c.wc(3,"Foto"),c.Nb(),c.Ob(4,"ion-buttons",2),c.Ob(5,"ion-button",3),c.Wb("click",function(){return e.cerrar()}),c.Mb(6,"ion-icon",4),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(7,"ion-content",1),c.vc(8,m,3,2,"ion-slides",5),c.Nb()),2&t&&(c.Ab(8),c.fc("ngIf",e.carga&&e.img))},directives:[a.z,a.lb,a.jb,a.k,a.j,a.A,a.t,n.j,a.bb,a.ab],styles:[".flexc[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}ion-slide[_ngcontent-%COMP%], ion-slides[_ngcontent-%COMP%]{width:100%;min-height:100%}ion-slide[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center}ion-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:100%}"]}),t})();function g(t,e){if(1&t){const t=c.Pb();c.Ob(0,"ion-buttons",7),c.Ob(1,"ion-button",3),c.Wb("click",function(){return c.pc(t),c.Yb().enviarMensaje()}),c.wc(2,"Enviar"),c.Nb(),c.Nb()}}function O(t,e){1&t&&(c.Ob(0,"div",10),c.Ob(1,"div",11),c.Mb(2,"img",12),c.Mb(3,"br"),c.Ob(4,"h3",13),c.wc(5,"No Hay fotos agregados para enviat."),c.Nb(),c.Nb(),c.Nb())}function v(t,e){if(1&t&&c.Mb(0,"img",19),2&t){const t=c.Yb().$implicit;c.gc("src",t.path,c.qc)}}function w(t,e){if(1&t&&c.Mb(0,"video",20),2&t){const t=c.Yb().$implicit;c.gc("src",t.path,c.qc)}}function x(t,e){if(1&t){const t=c.Pb();c.Ob(0,"ion-slide"),c.vc(1,v,1,1,"img",15),c.vc(2,w,1,1,"video",16),c.Ob(3,"div",17),c.Wb("click",function(){c.pc(t);const i=e.index;return c.Yb(3).eliminardelCarrete(i)}),c.Ob(4,"ion-chip",18),c.wc(5,"Eliminar"),c.Nb(),c.Nb(),c.Nb()}if(2&t){const t=e.$implicit;c.Ab(1),c.fc("ngIf",t.mime.includes("image")),c.Ab(1),c.fc("ngIf",t.mime.includes("video")||t.mime.includes("Video")||t.mime.includes("mp4")||t.mime.includes("MP4"))}}function j(t,e){if(1&t&&(c.Ob(0,"ion-slides"),c.vc(1,x,6,2,"ion-slide",14),c.Nb()),2&t){const t=c.Yb(2);c.Ab(1),c.fc("ngForOf",t.carreteRoot)}}function k(t,e){if(1&t){const t=c.Pb();c.Ob(0,"div"),c.Ob(1,"ion-button",8),c.Wb("click",function(){return c.pc(t),c.Yb().opciones()}),c.wc(2,"A\xf1adir Imagen"),c.Nb(),c.Mb(3,"br"),c.vc(4,O,6,0,"div",9),c.vc(5,j,2,1,"ion-slides",6),c.Nb()}if(2&t){const t=c.Yb();c.Ab(4),c.fc("ngIf",0===t.carreteRoot.length),c.Ab(1),c.fc("ngIf",t.carreteRoot.length>0)}}function E(t,e){if(1&t){const t=c.Pb();c.Ob(0,"ion-card",23),c.Wb("click",function(){c.pc(t);const i=e.$implicit;return c.Yb(2).modalFoto(i.ruta)}),c.Ob(1,"ion-card-header"),c.Mb(2,"img",24),c.Nb(),c.Ob(3,"ion-card-subtitle"),c.wc(4),c.Nb(),c.Nb()}if(2&t){const t=e.$implicit;c.Ab(2),c.hc("src","https://www.motocaliapp.com/2807/",t.ruta,"",c.qc),c.Ab(2),c.yc(" @",t.creador.nombreusuario," ")}}function M(t,e){if(1&t&&(c.Ob(0,"div"),c.Ob(1,"div",21),c.vc(2,E,5,2,"ion-card",22),c.Nb(),c.Nb()),2&t){const t=c.Yb();c.Ab(2),c.fc("ngForOf",t.fotos)}}const y=[{path:"",component:(()=>{class t{constructor(t,e,i,n,o,a,r,s,c,h,d,p){this.almacenamiento=t,this.modal=e,this.toast=i,this.socket=n,this.actionCtrl=o,this.camera=a,this.myLoading=r,this.apiPedido=s,this.active=c,this.router=h,this.plt=d,this.nav=p,this.cargado=!1,this.carrete=[],this.carreteRoot=[],this.carga=!1,this.id="",this.fotos=[],this.vista=1,this.parar=!0,this.tipo="",this.plt.backButton.subscribe(()=>{})}ngOnInit(){}ionViewWillEnter(){this.parar=!0,this.id=this.active.snapshot.paramMap.get("id"),this.tipo=this.active.snapshot.paramMap.get("estado"),this.crear()}crear(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&this.apiPedido.consultarChat(t.token,{id:this.active.snapshot.paramMap.get("id")}).subscribe(t=>{t.exe?(this.sala=t.response,"ver"===this.active.snapshot.paramMap.get("tipo")?this.ver():(this.carga=!0,this.vista=1)):this.toast.toastError("No se pudo traer la informaci\xf3n, int\xe9ntelo m\xe1s tarde")},t=>{this.toast.toastError("No se pudo traer la informaci\xf3n, int\xe9ntelo m\xe1s tarde")})})}ver(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&this.apiPedido.consultarChatFotos(t.token,{id:this.active.snapshot.paramMap.get("id")}).subscribe(t=>{t.exe?(t.response.forEach(t=>{this.fotos.unshift(t)}),this.vista=2):this.toast.toastError("No se pudo traer las fotos, int\xe9ntelo m\xe1s tarde"),this.carga=!0},t=>{this.toast.toastError("No se pudo traer las fotos, int\xe9ntelo m\xe1s tarde")})})}opciones(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.actionCtrl.create({header:"Escoge una opci\xf3n",buttons:[{icon:"camera-outline",text:"Tomar foto de la c\xe1mara",handler:()=>{this.tomarFoto(this.camera.PictureSourceType.CAMERA,"image")}},{icon:"image-outline",text:"Subir foto de galer\xeda",handler:()=>{this.tomarFoto(this.camera.PictureSourceType.PHOTOLIBRARY,"image")}}]});yield t.present()})}tomarFoto(t,e){this.camera.getPicture({quality:100,targetWidth:900,targetHeight:600,correctOrientation:!0,destinationType:this.camera.DestinationType.FILE_URI,encodingType:0,mediaType:this.camera.MediaType.PICTURE,sourceType:t}).then(t=>Object(s.a)(this,void 0,void 0,function*(){let e="",i="";t.includes("jpg")?(e="image/jpg",i="image.jpg"):t.includes("png")?(e="image/png",i="image.png"):t.includes("jpeg")?(e="image/jpeg",i="image.jpeg"):t.includes("gif")?(e="image/gif",i="image.gif"):(e="image/jpg",i="image.jpg"),this.carrete.push({path:t,name:i,mime:e,cont:this.carrete.length+1});const n=window.Ionic.WebView.convertFileSrc(t);this.carreteRoot.push({path:n,mime:e}),this.camera.cleanup().then(()=>{})}))}enviarMensaje(){return Object(s.a)(this,void 0,void 0,function*(){if(this.carrete.length>0){const t=yield this.almacenamiento.obtenerToken();if(this.myLoading.cargaProcesos("Subiendo mensaje con archivos media, por favor espere"),t){let e=this.carrete.length,i=1===this.carrete.length;this.carrete.forEach(n=>{this.apiPedido.subirArchivosChat(t.token,this.id,n.path,i,n.cont,n.name,n.mime).subscribe(t=>{t.response=JSON.parse(t.response),t.response.exe&&(e-=1,0===e&&(this.myLoading.finalizarCargado(),this.toast.Especial("Enviado"),this.cerrar()))},t=>{this.myLoading.finalizarCargado(),this.toast.alertApplication("No se pudo subir el archivo de v\xeddeo o imagen"+t,!0)})})}}})}eliminardelCarrete(t){this.carrete.splice(t,1),this.carreteRoot.splice(t,1)}modalFoto(t){return Object(s.a)(this,void 0,void 0,function*(){const e=yield this.modal.create({component:f,componentProps:{img:t}});yield e.present()})}ionViewWillleave(){this.parar=!1}cerrar(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&this.apiPedido.consultarChat(t.token,{id:this.id}).subscribe(t=>{t.exe?this.almacenamiento.insertarChat(t.response[0]).then(()=>{this.nav.navigateBack("lista"===this.tipo?["/central/menu/monitoreo/grua/chat/lista"]:["/central/menu/chats/chat"])}).catch(()=>{this.nav.navigateBack(["/central/menu"]),this.toast.toastError("No se puede acceder al chat, int\xe9ntelo m\xe1s tarde")}):this.toast.toastError("No se pudo traer la informaci\xf3n, int\xe9ntelo m\xe1s tarde")},t=>{this.toast.toastError("No se pudo traer la informaci\xf3n, int\xe9ntelo m\xe1s tarde")})})}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(h.a),c.Lb(a.qb),c.Lb(d.a),c.Lb(p.a),c.Lb(a.a),c.Lb(l.a),c.Lb(b.a),c.Lb(u.a),c.Lb(r.a),c.Lb(r.g),c.Lb(a.tb),c.Lb(a.rb))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-sala-modal-chat"]],decls:11,vars:3,consts:[[1,"ion-no-border"],["color","oscuro"],["slot","start"],[3,"click"],["name","chevron-back-outline","slot","icon-only"],["mode","ios","slot","end",4,"ngIf"],[4,"ngIf"],["mode","ios","slot","end"],["expand","block","mode","ios","color","danger",3,"click"],["class","none",4,"ngIf"],[1,"none"],[1,"flexc"],["src","/assets/Camara.png","width","70px","alt",""],[1,"tituloGrande"],[4,"ngFor","ngForOf"],["width","70px",3,"src",4,"ngIf"],["width","70px","controls","",3,"src",4,"ngIf"],[1,"eliminar",3,"click"],["color","danger"],["width","70px",3,"src"],["width","70px","controls","",3,"src"],[1,"opts"],["mode","ios",3,"click",4,"ngFor","ngForOf"],["mode","ios",3,"click"],["width","100%",3,"src"]],template:function(t,e){1&t&&(c.Ob(0,"ion-header",0),c.Ob(1,"ion-toolbar",1),c.Ob(2,"ion-buttons",2),c.Ob(3,"ion-button",3),c.Wb("click",function(){return e.cerrar()}),c.Mb(4,"ion-icon",4),c.Nb(),c.Nb(),c.Ob(5,"ion-title"),c.wc(6,"Enviar Fotos"),c.Nb(),c.vc(7,g,3,0,"ion-buttons",5),c.Nb(),c.Nb(),c.Ob(8,"ion-content"),c.vc(9,k,6,2,"div",6),c.vc(10,M,3,1,"div",6),c.Nb()),2&t&&(c.Ab(7),c.fc("ngIf",1===e.vista),c.Ab(2),c.fc("ngIf",e.carga&&1===e.vista),c.Ab(1),c.fc("ngIf",e.carga&&2===e.vista))},directives:[a.z,a.lb,a.k,a.j,a.A,a.jb,n.j,a.t,a.bb,n.i,a.ab,a.r,a.l,a.n,a.o],styles:[".flexc[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}ion-slide[_ngcontent-%COMP%], ion-slides[_ngcontent-%COMP%]{width:100%;min-height:100%}.opts[_ngcontent-%COMP%], ion-slide[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.opts[_ngcontent-%COMP%]{justify-content:space-between}.opts[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{width:calc(50% - 10px);margin:10px 5px;display:flex;flex-direction:column;justify-content:center;align-items:center;transition:all .5s}.opts[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:22px;text-align:center}.opts[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{text-align:center;padding:5px}@media screen and (min-width:800px){.opts[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{width:calc(33.33% - 10px)}}"]}),t})()}];let P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({imports:[[r.j.forChild(y)],r.j]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({imports:[[n.b,o.e,a.mb,P]]}),t})()},r3ab:function(t,e,i){"use strict";i.d(e,"a",function(){return r});var n=i("mrSG"),o=i("fXoL"),a=i("TEn/");let r=(()=>{class t{constructor(t){this.loadingCtrl=t}cargaProcesos(t){return Object(n.a)(this,void 0,void 0,function*(){return this.loading=yield this.loadingCtrl.create({message:t}),this.loading.present()})}finalizarCargado(){this.loading.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(o.Sb(a.ob))},t.\u0275prov=o.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);