(window.webpackJsonp=window.webpackJsonp||[]).push([[1,166],{W7Eg:function(t,i,o){"use strict";o.d(i,"a",function(){return p});var e=o("R0Ic"),n=o("fXoL"),r=o("ofXK"),s=o("TEn/");const a=["video"],c=["range"];function l(t,i){1&t&&(n.Ob(0,"ion-chip",6),n.Mb(1,"ion-spinner",7),n.wc(2,"Cargando Video..."),n.Nb())}function b(t,i){if(1&t){const t=n.Pb();n.Ob(0,"ion-button",15),n.Wb("click",function(){return n.pc(t),n.Yb(2).play()}),n.Mb(1,"ion-icon",16),n.Nb()}}function u(t,i){if(1&t){const t=n.Pb();n.Ob(0,"ion-button",15),n.Wb("click",function(){return n.pc(t),n.Yb(2).pause()}),n.Mb(1,"ion-icon",17),n.Nb()}}function h(t,i){if(1&t){const t=n.Pb();n.Ob(0,"div",8),n.Ob(1,"div",9),n.vc(2,b,2,0,"ion-button",10),n.vc(3,u,2,0,"ion-button",10),n.Ob(4,"div",11),n.Ob(5,"ion-range",12,13),n.Wb("ionChange",function(i){return n.pc(t),n.Yb().progreso(i)})("ionFocus",function(i){return n.pc(t),n.Yb().foco(i)})("ionBlur",function(i){return n.pc(t),n.Yb().foco(i)}),n.Nb(),n.Nb(),n.Ob(7,"div",14),n.Ob(8,"strong"),n.wc(9),n.Nb(),n.Nb(),n.Nb(),n.Nb()}if(2&t){const t=n.Yb();n.Ab(2),n.fc("ngIf",!t.paused),n.Ab(1),n.fc("ngIf",t.paused),n.Ab(2),n.fc("value",t.currProgress),n.Ab(4),n.xc(t.currentt)}}let p=(()=>{class t{constructor(){this.paused=!0,this.currProgress=0,this.slideOpts={zoom:{maxRatio:3,minRatio:1,toggle:!0}},this.focus=!1,this.progress=0,this.value=0,this.bandera=!0,this.carga=!0,this.mostrar=!1}ngAfterViewInit(){this.current(),console.log(this.url," archivo")}play(){this.paused=!0,this.bandera=!0,this.focus=!0,this.video.nativeElement.play()}pause(){this.paused=!1,this.bandera=!1,this.focus=!1,this.video.nativeElement.pause()}current(){this.video.nativeElement.addEventListener("canplay",()=>{this.carga=!1,this.bandera&&this.play()}),this.video.nativeElement.addEventListener("progress",()=>{this.carga=!0}),this.video.nativeElement.addEventListener("timeupdate",()=>{this.currProgress=100*this.video.nativeElement.currentTime/this.video.nativeElement.duration,this.currentt=Math.round(this.video.nativeElement.currentTime),this.currentt<10&&(this.currentt="0"+this.currentt),this.video.nativeElement.currentTime===this.video.nativeElement.duration&&this.play()})}toggle(){console.log(this.bandera,this.focus),this.bandera?(this.mostrar=!0,this.bandera=!1,this.pause()):(this.mostrar=!1,this.focus?this.pause():this.play())}progreso(t){this.progress=t.detail.value,this.focus&&(this.play(),this.focus=!1),this.video.nativeElement.currentTime=Number((this.video.nativeElement.duration*(t.detail.value/100)).toFixed(6))}foco(t){this.bandera=!0,this.focus=!0,this.pause()}onProgress(){}ngOnDestroy(){this.video.nativeElement.pause(),console.log("Destrucci\xf3n")}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=n.Fb({type:t,selectors:[["app-video"]],viewQuery:function(t,i){if(1&t&&(n.Ac(a,3),n.Ac(c,1)),2&t){let t;n.oc(t=n.Xb())&&(i.video=t.first),n.oc(t=n.Xb())&&(i.range=t.first)}},inputs:{url:"url"},decls:6,vars:3,consts:[[1,"reproductor"],[1,"video",3,"click"],["poster","/assets/Video.png",3,"src"],["video",""],["class","cargando","color","success",4,"ngIf"],["class","controles",4,"ngIf"],["color","success",1,"cargando"],["name","crescent"],[1,"controles"],[1,"botones"],["fill","clear","color","blanco","mode","ios",3,"click",4,"ngIf"],[1,"volumen"],["debounce","500","min","0","max","100","color","success",3,"value","ionChange","ionFocus","ionBlur"],["range",""],[1,"tiempo"],["fill","clear","color","blanco","mode","ios",3,"click"],["name","play-outline","slot","icon-only"],["name","pause-outline","slot","icon-only"]],template:function(t,i){1&t&&(n.Ob(0,"div",0),n.Ob(1,"div",1),n.Wb("click",function(){return i.toggle()}),n.Mb(2,"video",2,3),n.vc(4,l,3,0,"ion-chip",4),n.Nb(),n.vc(5,h,10,4,"div",5),n.Nb()),2&t&&(n.Ab(2),n.fc("src",i.url,n.qc),n.Ab(2),n.fc("ngIf",i.carga),n.Ab(1),n.fc("ngIf",i.mostrar))},directives:[r.j,s.r,s.cb,s.P,s.xb,s.j,s.A],styles:[".reproductor[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}video[_ngcontent-%COMP%]{width:100vw;height:100vh}.cargando[_ngcontent-%COMP%]{position:absolute;width:200px;bottom:10px;right:10px;display:flex;justify-content:center;align-items:center;z-index:100}.oculto[_ngcontent-%COMP%]{opacity:0}.controles[_ngcontent-%COMP%]{width:100%;height:70px;padding:5px;background:rgba(0,0,0,.01);position:absolute;bottom:0;left:0}.botones[_ngcontent-%COMP%]{width:100%;height:50px;display:flex;align-items:center}.volumen[_ngcontent-%COMP%]{padding-left:5px;width:60%}.tiempo[_ngcontent-%COMP%]{width:calc(100% - 80%);color:#fff;font-size:12px;display:flex;justify-content:center;align-items:center}ion-range[_ngcontent-%COMP%]{--bar-height:10px}ion-slides[_ngcontent-%COMP%]{width:100%;height:calc(100% - 70px)}"],data:{animation:[Object(e.m)("entry",[Object(e.j)("closed",Object(e.k)({transform:"scale(0)"})),Object(e.j)("open",Object(e.k)({transform:"scale(1)"})),Object(e.l)("* <=> *",[Object(e.e)("50ms")])])]}}),t})()},WGaO:function(t,i,o){"use strict";o.d(i,"a",function(){return d});var e=o("AytR"),n=o("tk/3"),r=o("coGc"),s=o("lJxs"),a=o("IzEk"),c=o("MtjB"),l=o("JIr8"),b=o("PqYM"),u=o("Cfvw"),h=o("fXoL"),p=o("B7Rs");let d=(()=>{class t{constructor(t,i){this.http=t,this.MmyTransfer=i}hanflerError(t){return t.pipe(Object(r.a)(()=>Object(b.a)(3e3)),Object(s.a)(t=>{if(console.log("Entramos a intentos"),t instanceof ErrorEvent)throw new Error("Error de Red");if(404===t.status)throw new Error(" P\xe1gina no encontrada")}),Object(a.a)(3))}BuscarUsuarios(t,i){const o={headers:new n.c({"x-token":t})};return this.http.put(`${e.a}/empleados/buscar/`,{patron:i},o).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearPublicacion(t,i){const o={headers:new n.c({"x-token":t})};return this.http.post(`${e.a}/igtm/crear/`,i,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearPublicacionGrupo(t,i){const o={headers:new n.c({"x-token":t})};return this.http.post(`${e.a}/igtm/crear/grupo`,i,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerPublicacion(t,i){const o={headers:new n.c({"x-token":t})};return this.http.put(`${e.a}/igtm/leer/`,i,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerPublicacionUsuario(t,i){const o={headers:new n.c({"x-token":t})};return this.http.put(`${e.a}/igtm/leer/usuario`,i,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}subirArchivosChat(t,i,o,n,r,s,a,c){console.log("archivo",o);const b={fileKey:"archivo",fileName:a,mimeType:c,httpMethod:"POST",headers:{"x-token":t,"x-idpublicacion":i,"x-final":n,"x-cont":r,"x-historia":s}},h=this.MmyTransfer.create();return Object(u.a)(h.upload(o,`${e.a}/igtm/upload`,b)).pipe(Object(l.a)(t=>{throw console.log("No se pudo subir la imagen ",t),new Error("No se pudo subir la imagen ")}))}subirweb(t,i,o,r,s,a){console.log(t,i,o,r,s);const l={headers:new n.c({"x-final":o.toString(),"x-cont":r.toString(),"x-historia":s.toString(),"x-token":t,"x-idpublicacion":i})};return this.http.post(`${e.a}/igtm/upload`,a,l).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerFotos(t,i){const o={headers:new n.c({"x-token":t})};return this.http.put(`${e.a}/igtm/fotos/leer/`,i,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}vistos(t,i){const o={headers:new n.c({"x-token":t})};return this.http.post(`${e.a}/igtm/historias/vistos/`,i,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}eliminar(t,i){const o={headers:new n.c({"x-token":t})};return this.http.put(`${e.a}/igtm/eliminar/`,i,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}eliminarHistoria(t,i){const o={headers:new n.c({"x-token":t})};return this.http.put(`${e.a}/igtm/historia/eliminar/`,i,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}meGusta(t,i){const o={headers:new n.c({"x-token":t})};return this.http.put(`${e.a}/igtm/megusta/`,i,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}saber(t,i){const o={headers:new n.c({"x-token":t})};return this.http.put(`${e.a}/igtm/publicacion/seguidos/`,i,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}saberHistorias(t,i){const o={headers:new n.c({"x-token":t})};return this.http.put(`${e.a}/igtm/historias/seguidos/`,i,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerUna(t,i){const o={headers:new n.c({"x-token":t})};return this.http.put(`${e.a}/igtm/leer/uno/`,i,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}leerUna2(t,i){const o={headers:new n.c({"x-token":t})};return this.http.put(`${e.a}/igtm/leer/uno/historia`,i,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearComentario(t,i){const o={headers:new n.c({"x-token":t})};return this.http.post(`${e.a}/igtm/comentarios/`,i,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearCompartida(t,i){const o={headers:new n.c({"x-token":t})};return this.http.post(`${e.a}/igtm/compartir/`,i,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}crearGuardado(t,i){const o={headers:new n.c({"x-token":t})};return this.http.post(`${e.a}/igtm/guardado/`,i,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}eliminarComentario(t,i){const o={headers:new n.c({"x-token":t})};return this.http.post(`${e.a}/igtm/comentarios/eliminar`,i,o).pipe(Object(c.a)(t=>this.hanflerError(t)))}}return t.\u0275fac=function(i){return new(i||t)(h.Sb(n.a),h.Sb(p.a))},t.\u0275prov=h.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},rE7l:function(t,i,o){"use strict";o.d(i,"a",function(){return z});var e=o("mrSG"),n=o("R0Ic"),r=o("fXoL"),s=o("fsfq"),a=o("WGaO"),c=o("fmoy"),l=o("TEn/"),b=o("VYYF"),u=o("tyNb"),h=o("7JkF"),p=o("ofXK"),d=o("W7Eg");const m=["slide"],f=["text"];function g(t,i){if(1&t){const t=r.Pb();r.Ob(0,"ion-header",6),r.Ob(1,"ion-toolbar",7),r.Ob(2,"ion-title"),r.wc(3),r.Nb(),r.Ob(4,"ion-buttons",8),r.Ob(5,"ion-button",9),r.Wb("click",function(){return r.pc(t),r.Yb().cerrar()}),r.Mb(6,"ion-icon",10),r.Nb(),r.Nb(),r.Nb(),r.Nb()}if(2&t){const t=r.Yb();r.Ab(3),r.xc(t.titulo)}}function v(t,i){if(1&t){const t=r.Pb();r.Ob(0,"ion-item",9),r.Wb("click",function(){r.pc(t);const o=i.$implicit;return r.Yb(2).seleccionar(o)}),r.Ob(1,"ion-avatar",15),r.Mb(2,"img",16),r.Nb(),r.Ob(3,"ion-label"),r.Ob(4,"strong"),r.wc(5),r.Nb(),r.Mb(6,"br"),r.wc(7),r.Nb(),r.Nb()}if(2&t){const t=i.$implicit;r.Ab(2),r.fc("src",t.imagen,r.qc),r.Ab(3),r.xc(t.nombrecompleto),r.Ab(2),r.yc(" @",t.nombreusuario," ")}}function O(t,i){if(1&t){const t=r.Pb();r.Ob(0,"div",11),r.Ob(1,"ion-searchbar",12),r.Wb("ionChange",function(i){return r.pc(t),r.Yb().buscar(i)}),r.Nb(),r.Mb(2,"div",13),r.Ob(3,"ion-list"),r.vc(4,v,8,3,"ion-item",14),r.Nb(),r.Nb()}if(2&t){const t=r.Yb();r.Ab(4),r.fc("ngForOf",t.usuarios)}}function x(t,i){if(1&t&&r.Mb(0,"img",29),2&t){const t=r.Yb().$implicit;r.hc("src","https://motocaliapp.com/11927613401/",t.ruta,"",r.qc)}}function N(t,i){if(1&t&&r.Mb(0,"app-video",30),2&t){const t=r.Yb().$implicit;r.hc("url","https://motocaliapp.com/11927613401/",t.ruta,"")}}function w(t,i){if(1&t&&(r.Ob(0,"ion-slide",26),r.vc(1,x,1,1,"img",27),r.vc(2,N,1,1,"app-video",28),r.Nb()),2&t){const t=i.$implicit;r.Ab(1),r.fc("ngIf",t.mime.includes("image")),r.Ab(1),r.fc("ngIf",t.mime.includes("video")||t.mime.includes("Video")||t.mime.includes("mp4")||t.mime.includes("MP4"))}}function C(t,i){if(1&t&&(r.Ob(0,"ion-slides",23,24),r.vc(2,w,3,2,"ion-slide",25),r.Nb()),2&t){const t=r.Yb(2);r.fc("options",t.opt),r.Ab(2),r.fc("ngForOf",t.archivos)}}function k(t,i){if(1&t){const t=r.Pb();r.Ob(0,"div",17),r.Ob(1,"div",18),r.Ob(2,"ion-item",19),r.Ob(3,"ion-avatar",15),r.Mb(4,"img",16),r.Nb(),r.Ob(5,"ion-label",20),r.wc(6),r.Mb(7,"br"),r.wc(8),r.Nb(),r.Ob(9,"ion-buttons",8),r.Ob(10,"ion-button",9),r.Wb("click",function(){return r.pc(t),r.Yb().cerrar()}),r.Mb(11,"ion-icon",21),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.vc(12,C,3,2,"ion-slides",22),r.Nb()}if(2&t){const t=r.Yb();r.Ab(4),r.fc("src",t.info.image,r.qc),r.Ab(2),r.yc("",t.info.creador.nombrecompleto," "),r.Ab(2),r.yc(" ",t.info.creador.nombreusuario,""),r.Ab(4),r.fc("ngIf",t.cargado)}}function M(t,i){if(1&t){const t=r.Pb();r.Ob(0,"ion-item",32),r.Wb("click",function(){r.pc(t);const o=i.$implicit;return r.Yb(2).perfilNavegar(o)}),r.Ob(1,"ion-avatar",15),r.Mb(2,"img",16),r.Nb(),r.Ob(3,"ion-label",33),r.Ob(4,"strong"),r.wc(5),r.Nb(),r.Mb(6,"br"),r.wc(7),r.Nb(),r.Nb()}if(2&t){const t=i.$implicit;r.Ab(2),r.fc("src",t.image,r.qc),r.Ab(3),r.xc(t.nombrecompleto),r.Ab(2),r.yc(" @",t.nombreusuario," ")}}function j(t,i){if(1&t&&(r.Ob(0,"div",11),r.Mb(1,"div",13),r.Ob(2,"ion-list"),r.vc(3,M,8,3,"ion-item",31),r.Nb(),r.Nb()),2&t){const t=r.Yb();r.Ab(3),r.fc("ngForOf",t.etiquetados)}}function P(t,i){1&t&&(r.Ob(0,"h3",37),r.wc(1,"No hay comentarios para esta publicaci\xf3n"),r.Nb())}function A(t,i){if(1&t){const t=r.Pb();r.Ob(0,"div",48),r.Wb("click",function(){r.pc(t);const i=r.Yb(),o=i.$implicit,e=i.index;return r.Yb(2).eliminarComentario(o._id,e)}),r.wc(1,"Eliminar"),r.Nb()}}function E(t,i){if(1&t){const t=r.Pb();r.Ob(0,"div",49),r.Wb("click",function(){r.pc(t);const i=r.Yb().index;return r.Yb(2).verRespuestas(i)}),r.wc(1,"Ver respuestas"),r.Nb()}}function y(t,i){if(1&t){const t=r.Pb();r.Ob(0,"div",49),r.Wb("click",function(){r.pc(t);const i=r.Yb().index;return r.Yb(2).verRespuestas(i)}),r.wc(1,"Ocultar respuestas"),r.Nb()}}function _(t,i){if(1&t){const t=r.Pb();r.Ob(0,"div",48),r.Wb("click",function(){r.pc(t);const i=r.Yb().$implicit,o=r.Yb(2),e=o.$implicit,n=o.index;return r.Yb(2).eliminarRespuesta(e._id,i._id,n)}),r.wc(1,"Eliminar"),r.Nb()}}function $(t,i){if(1&t){const t=r.Pb();r.Ob(0,"div"),r.Ob(1,"ion-label",39),r.Ob(2,"ion-avatar",40),r.Wb("click",function(){r.pc(t);const o=i.$implicit;return r.Yb(4).perfilNavegar(o.nombre)}),r.Mb(3,"img",16),r.Nb(),r.Ob(4,"div",41),r.Ob(5,"div",9),r.Wb("click",function(){r.pc(t);const o=i.$implicit;return r.Yb(4).perfilNavegar(o.nombre)}),r.Ob(6,"span",42),r.wc(7),r.Nb(),r.Mb(8,"br"),r.wc(9),r.Nb(),r.Ob(10,"div",43),r.Ob(11,"div",44),r.Wb("click",function(){r.pc(t);const o=i.$implicit,e=r.Yb(2),n=e.$implicit,s=e.index;return r.Yb(2).responder(n,2,o,s)}),r.wc(12,"Responder"),r.Nb(),r.vc(13,_,2,0,"div",45),r.Nb(),r.Nb(),r.Nb(),r.Nb()}if(2&t){const t=i.$implicit,o=r.Yb(4);r.Ab(3),r.fc("src",t.image,r.qc),r.Ab(4),r.yc("@",t.nombre.nombreusuario,""),r.Ab(2),r.yc(" ",t.comentario," "),r.Ab(4),r.fc("ngIf",o.id===t.nombre._id)}}function I(t,i){if(1&t&&(r.Ob(0,"div",50),r.vc(1,$,14,4,"div",36),r.Nb()),2&t){const t=r.Yb().$implicit;r.fc("@entrada",void 0),r.Ab(1),r.fc("ngForOf",t.hijos)}}function Y(t,i){if(1&t){const t=r.Pb();r.Ob(0,"ion-item-sliding"),r.Ob(1,"ion-item",38),r.Ob(2,"ion-label",39),r.Ob(3,"ion-avatar",40),r.Wb("click",function(){r.pc(t);const o=i.$implicit;return r.Yb(2).perfilNavegar(o.creador)}),r.Mb(4,"img",16),r.Nb(),r.Ob(5,"div",41),r.Ob(6,"div",9),r.Wb("click",function(){r.pc(t);const o=i.$implicit;return r.Yb(2).perfilNavegar(o.creador)}),r.Ob(7,"span",42),r.wc(8),r.Nb(),r.Mb(9,"br"),r.wc(10),r.Nb(),r.Ob(11,"div",43),r.Ob(12,"div",44),r.Wb("click",function(){r.pc(t);const o=i.$implicit,e=i.index;return r.Yb(2).responder(o,1,"",e)}),r.wc(13,"Responder"),r.Nb(),r.vc(14,A,2,0,"div",45),r.Nb(),r.vc(15,E,2,0,"div",46),r.vc(16,y,2,0,"div",46),r.vc(17,I,2,2,"div",47),r.Nb(),r.Nb(),r.Nb(),r.Nb()}if(2&t){const t=i.$implicit,o=r.Yb(2);r.Ab(4),r.fc("src",t.image,r.qc),r.Ab(4),r.yc("@",t.creador.nombreusuario,""),r.Ab(2),r.yc(" ",t.comentario," "),r.Ab(4),r.fc("ngIf",o.id===t.creador._id),r.Ab(1),r.fc("ngIf",t.hijos.length>0&&!t.habilitar),r.Ab(1),r.fc("ngIf",t.hijos.length>0&&t.habilitar),r.Ab(1),r.fc("ngIf",t.habilitar)}}function q(t,i){if(1&t&&(r.Ob(0,"div",34),r.vc(1,P,2,0,"h3",35),r.Ob(2,"ion-list"),r.vc(3,Y,18,7,"ion-item-sliding",36),r.Nb(),r.Nb()),2&t){const t=r.Yb();r.Ab(1),r.fc("ngIf",0===t.comentarios.length),r.Ab(2),r.fc("ngForOf",t.comentarios)}}function W(t,i){if(1&t){const t=r.Pb();r.Ob(0,"div",60),r.Ob(1,"ion-avatar"),r.Mb(2,"img",61),r.Nb(),r.Ob(3,"div",62),r.Wb("click",function(){r.pc(t);const o=i.index;return r.Yb(3).eliminar(o)}),r.wc(4,"x"),r.Nb(),r.Nb()}if(2&t){const t=i.$implicit;r.Ab(2),r.fc("src",t.imagen,r.qc)}}function F(t,i){if(1&t&&(r.Ob(0,"div",58),r.vc(1,W,5,1,"div",59),r.Nb()),2&t){const t=r.Yb(2);r.Ab(1),r.fc("ngForOf",t.etiquetadosc)}}function R(t,i){1&t&&(r.Ob(0,"div",56),r.Mb(1,"ion-spinner",63),r.wc(2," Buscando usuarios... "),r.Nb())}function T(t,i){if(1&t){const t=r.Pb();r.Ob(0,"ion-item",9),r.Wb("click",function(){r.pc(t);const o=i.$implicit;return r.Yb(2).seleccion(o)}),r.Ob(1,"ion-avatar",15),r.Mb(2,"img",16),r.Nb(),r.Ob(3,"ion-label"),r.Ob(4,"strong"),r.wc(5),r.Nb(),r.Mb(6,"br"),r.wc(7),r.Nb(),r.Nb()}if(2&t){const t=i.$implicit;r.Ab(2),r.fc("src",t.imagen,r.qc),r.Ab(3),r.xc(t.nombrecompleto),r.Ab(2),r.yc(" @",t.nombreusuario," ")}}function L(t,i){if(1&t){const t=r.Pb();r.Ob(0,"div",11),r.vc(1,F,2,1,"div",51),r.Ob(2,"ion-searchbar",52),r.Wb("ionChange",function(i){return r.pc(t),r.Yb().buscar(i)}),r.Nb(),r.Mb(3,"div",13),r.vc(4,R,3,0,"div",53),r.Ob(5,"ion-list"),r.vc(6,T,8,3,"ion-item",14),r.Ob(7,"ion-item",54),r.Ob(8,"ion-textarea",55),r.Wb("ionChange",function(i){return r.pc(t),r.Yb().cambiar(i)}),r.Nb(),r.Nb(),r.Nb(),r.Ob(9,"div",56),r.Ob(10,"ion-button",57),r.Wb("click",function(){return r.pc(t),r.Yb().publicarCompartido()}),r.wc(11,"COMPARTIR PUBLICACI\xd3N"),r.Nb(),r.Nb(),r.Nb()}if(2&t){const t=r.Yb();r.Ab(1),r.fc("ngIf",t.etiquetadosc.length>0),r.Ab(3),r.fc("ngIf",t.cargares),r.Ab(2),r.fc("ngForOf",t.usuarios),r.Ab(2),r.fc("autoGrow",t.auto)}}function G(t,i){if(1&t){const t=r.Pb();r.Ob(0,"ion-footer"),r.Ob(1,"ion-toolbar"),r.Ob(2,"ion-item",64),r.Ob(3,"ion-textarea",65,66),r.Wb("ionChange",function(i){return r.pc(t),r.Yb().comentar(i)}),r.Nb(),r.Ob(5,"ion-buttons",8),r.Ob(6,"ion-button",67),r.Wb("click",function(){return r.pc(t),r.Yb().crearComentario()}),r.Mb(7,"ion-icon",68),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb()}if(2&t){const t=r.Yb();r.Ab(3),r.gc("placeholder",t.usuario),r.fc("autofocus",t.focus)("autoGrow",!0)("value",t.comentario),r.Ab(3),r.fc("disabled",t.boton)}}let z=(()=>{class t{constructor(t,i,o,e,n,r,s,a){this.almacenamiento=t,this.igtmApi=i,this.toast=o,this.modalCtrl=e,this.statusbar=n,this.router=r,this.socket=s,this.alertCtrl=a,this.usuarios=[],this.titulo="",this.color="blanco",this.colorheader="blanco",this.header=!0,this.opt={zoom:{maxRation:5,toggle:!0}},this.cargado=!1,this.usuario="",this.comentario="",this.focus=!1,this.tipoComentario="nuevo",this.padre="",this.boton=!1,this.texto="",this.auto=!1,this.etiquetadosc=[],this.etiquetadoscid=[],this.cargares=!1,this.id=""}ngOnInit(){}ionViewWillEnter(){return Object(e.a)(this,void 0,void 0,function*(){if("etiquetar"===this.tipo)this.titulo="Etiquetar personas";else if("mencionar"===this.tipo)this.titulo="Mencionar personas";else if("visualizador"===this.tipo)this.header=!1,this.color="darkgold",this.colorheader="darkgold",this.cargar();else if("etiquetados"===this.tipo)this.titulo="Etiquetados",this.color="blanco",this.colorheader="blanco",this.etiquetados.forEach(t=>{t.image=t.imagen.length>0?`https://motocaliapp.com/${t.imagen[0].path}`:"/assets/notfound.png"});else if("comentar"===this.tipo){this.colorheader="light",this.titulo=0===this.comentarios.length?" Comentarios":this.comentarios.length+" Comentarios";const t=yield this.almacenamiento.obtenerToken();t&&(console.log("info",t),this.id=t._id,this.usuario=(t.nusuario?`@${t.nusuario}`:"")+" escribe un comentario",this.comentarios.length>0&&this.comentarios.forEach(t=>{t.image=t.creador.imagen.length>0?`https://motocaliapp.com/${t.creador.imagen[0].path}`:"/assets/notfound.png",t.habilitar=!1,t.hijos.length>0&&t.hijos.forEach(t=>{t.image=t.nombre.imagen.length>0?`https://motocaliapp.com/${t.nombre.imagen[0].path}`:"/assets/notfound.png"})}))}else"compartir"===this.tipo&&(this.titulo="Compartir publicaci\xf3n")})}cargar(){return Object(e.a)(this,void 0,void 0,function*(){this.cargado=!0,(yield this.almacenamiento.obtenerToken())&&(yield this.slide.slideTo(this.indice,0))})}buscar(t){return Object(e.a)(this,void 0,void 0,function*(){this.cargares=!0;const i=yield this.almacenamiento.obtenerToken();i&&this.igtmApi.BuscarUsuarios(i.token,t.detail.value).subscribe(t=>{t.exe?(t.response.forEach(t=>{t.imagen=t.imagen.length>0?`https://motocaliapp.com/${t.imagen[0].path}`:"/assets/notfound.png"}),this.usuarios=t.response,this.cargares=!1):(this.cargares=!1,this.toast.toastError("No se pudo taer los usuarios, intentelo mas tarde"))},t=>{this.cargares=!1,this.toast.toastError("No se puede etiquetar esta publicaci\xf3n, intentelo mas tarde")})})}seleccionar(t){this.modalCtrl.dismiss({exe:!0,persona:t})}navegar(t){this.router.navigate(["/central/buscar/perfil-visita",t.nombreusuario]),this.cerrar()}comentar(t){this.comentario=t.detail.value,this.comentario.includes("@")&&""!==this.comentario||(this.tipoComentario="nuevo")}responder(t,i,o,e){2===i?(o.nombre.padre=e,this.usuarioRespuesta=o.nombre,this.comentario=`@${o.nombre.nombreusuario} `):(this.comentario=`@${t.creador.nombreusuario} `,this.usuarioRespuesta=t.creador,this.usuarioRespuesta.padre=e),this.padre=t._id,this.tipoComentario="respuesta",this.text.setFocus()}cerrar(){"comentar"===this.tipo?this.modalCtrl.dismiss({exe:!0,comentarios:this.comentarios}):this.modalCtrl.dismiss()}crearComentario(){return Object(e.a)(this,void 0,void 0,function*(){this.boton=!0;const t=yield this.almacenamiento.obtenerToken();t&&this.igtmApi.crearComentario(t.token,{comentario:this.comentario,_id:this.publicacion,tipo:this.tipoComentario,padre:this.padre}).subscribe(i=>{i.exe?("nuevo"===this.tipoComentario?(i.response.image=i.response.creador.imagen.length>0?`https://motocaliapp.com/${i.response.creador.imagen[0].path}`:"/assets/notfound.png",this.comentarios.push(i.response)):(i.response.hijos.length>0&&(i.response.hijos[i.response.hijos.length-1].image=i.response.hijos[i.response.hijos.length-1].nombre.imagen.length>0?`https://motocaliapp.com/${i.response.hijos[i.response.hijos.length-1].nombre.imagen[0].path}`:"/assets/notfound.png"),this.comentarios[this.usuarioRespuesta.padre].hijos.push(i.response.hijos[i.response.hijos.length-1])),this.toast.toastNotificacion("Comentario enviado correctamente"),t._id!==this.creador._id?this.socket.emit("comentario","nuevo"===this.tipoComentario?{creador:this.creador._id,persona:`@${t.nusuario}`,celular:[this.creador.usuarioID],ids:[this.creador._id],motivo:"a comentado en tu publicaci\xf3n",comentario:this.comentario,publicacion:this.publicacion}:{creador:this.creador._id,persona:`@${t.nusuario}`,celular:[this.creador.usuarioID,this.usuarioRespuesta.usuarioID],ids:[this.creador._id,this.usuarioRespuesta._id],comentario:this.comentario,motivo:"respondi\xf3 a tu comentario",publicacion:this.publicacion}):"respuesta"===this.tipoComentario&&this.socket.emit("comentario",{creador:this.creador._id,persona:`@${t.nusuario}`,celular:[this.usuarioRespuesta.usuarioID],ids:[this.usuarioRespuesta._id],comentario:this.comentario,motivo:"respondi\xf3 a tu comentario",publicacion:this.publicacion}),this.comentario="",this.tipoComentario="respuesta",this.boton=!1):this.toast.toastError("No se pudo enviar el comentario, int\xe9ntelo m\xe1s tarde")},t=>{this.toast.toastError("No se pudo enviar el comentario, int\xe9ntelo m\xe1s tarde")})})}verRespuestas(t){this.comentarios[t].habilitar=!this.comentarios[t].habilitar}cambiar(t){this.texto=t.detail.value,this.auto=""!==this.texto}seleccion(t){this.etiquetadosc.find(i=>i._id===t._id)&&0!==this.etiquetadosc.length||(this.etiquetadosc.push(t),this.etiquetadoscid.push(t._id))}eliminar(t){this.etiquetadosc.splice(t,1),this.etiquetadoscid.splice(t,1)}publicarCompartido(){return Object(e.a)(this,void 0,void 0,function*(){this.boton=!0;const t=yield this.almacenamiento.obtenerToken();t&&this.igtmApi.crearCompartida(t.token,{etiquetas:this.etiquetadoscid,comentario:this.texto,publicacion:this.publicacionc}).subscribe(t=>{t.exe?this.modalCtrl.dismiss({recargo:!0}):this.toast.toastError("No se pudo compartir la publicaci\xf3n, int\xe9ntelo m\xe1s tarde")},t=>{this.toast.toastError("No se pudo compartir la publicaci\xf3n, int\xe9ntelo m\xe1s tarde")})})}eliminarComentario(t,i){return Object(e.a)(this,void 0,void 0,function*(){const o=yield this.alertCtrl.create({header:"Atenci\xf3n!",message:"\xbfEstas seguro de eliminar el comentario de forma permanente? ",buttons:[{text:"Cancelar",cssClass:"cancelarAlerta",role:"cancel",handler:()=>{}},{text:"Aceptar",cssClass:"botonalerta",handler:()=>Object(e.a)(this,void 0,void 0,function*(){const o=yield this.almacenamiento.obtenerToken();o&&this.igtmApi.eliminarComentario(o.token,{_id:t,tipo:"nuevo"}).subscribe(t=>{t.exe?(this.toast.Especial("Comentario Eliminado"),this.comentarios.splice(i,1)):this.toast.toastError("No se pudo eliminar \xe9l comentario, int\xe9ntelo m\xe1s tarde")},t=>{this.toast.toastError("No se pudo eliminar \xe9l comentario, int\xe9ntelo m\xe1s tarde")})})}]});yield o.present()})}eliminarRespuesta(t,i,o){return Object(e.a)(this,void 0,void 0,function*(){const n=yield this.alertCtrl.create({header:"Atenci\xf3n!",message:"\xbfEstas seguro de eliminar el comentario de forma permanente? ",buttons:[{text:"Cancelar",cssClass:"cancelarAlerta",role:"cancel",handler:()=>{}},{text:"Aceptar",cssClass:"botonalerta",handler:()=>Object(e.a)(this,void 0,void 0,function*(){const e=yield this.almacenamiento.obtenerToken();if(e){const n=this.comentarios[o].hijos.filter(t=>t._id!==i);this.igtmApi.eliminarComentario(e.token,{_id:t,tipo:"respuesta",padre:t,hijos:n}).subscribe(t=>{t.exe?(this.toast.Especial("Comentario Eliminado"),this.comentarios[o].hijos=n):this.toast.toastError("No se pudo eliminar \xe9l comentario, int\xe9ntelo m\xe1s tarde")},t=>{this.toast.toastError("No se pudo eliminar \xe9l comentario, int\xe9ntelo m\xe1s tarde")})}})}]});yield n.present()})}perfilNavegar(t){return Object(e.a)(this,void 0,void 0,function*(){const i=yield this.almacenamiento.obtenerToken();i&&(this.modalCtrl.dismiss(),this.router.navigate(i.nusuario===t.nombreusuario?["/perfil/","s"]:["/visita/",t.nombreusuario,"s"]))})}}return t.\u0275fac=function(i){return new(i||t)(r.Lb(s.a),r.Lb(a.a),r.Lb(c.a),r.Lb(l.qb),r.Lb(b.a),r.Lb(u.g),r.Lb(h.a),r.Lb(l.b))},t.\u0275cmp=r.Fb({type:t,selectors:[["app-igtmplantilla"]],viewQuery:function(t,i){if(1&t&&(r.Ac(m,1),r.Ac(f,1)),2&t){let t;r.oc(t=r.Xb())&&(i.slide=t.first),r.oc(t=r.Xb())&&(i.text=t.first)}},inputs:{tipo:"tipo",archivos:"archivos",indice:"indice",info:"info",etiquetados:"etiquetados",publicacion:"publicacion",creador:"creador",comentarios:"comentarios",publicacionc:"publicacionc"},decls:8,vars:8,consts:[["class","ion-no-border",4,"ngIf"],[3,"color"],["class","etiquetar",4,"ngIf"],["class","visualizador",4,"ngIf"],["class","comentar",4,"ngIf"],[4,"ngIf"],[1,"ion-no-border"],["color","oscuro"],["slot","end"],[3,"click"],["name","close-outline","slot","icon-only"],[1,"etiquetar"],["mode","ios","placeholder","Buscar Usuario",3,"ionChange"],[1,"divider"],[3,"click",4,"ngFor","ngForOf"],["slot","start"],["width","100%","height","100%","alt","",3,"src"],[1,"visualizador"],[1,"cerrar"],["lines","none",1,"transparente","sinfondo"],[1,"bl","ion-text-wrap"],["color","blanco","name","close-outline","slot","icon-only"],["class","fullancho","color","dark","mode","ios",3,"options",4,"ngIf"],["color","dark","mode","ios",1,"fullancho",3,"options"],["slide",""],["class","diapo",4,"ngFor","ngForOf"],[1,"diapo"],["width","100%",3,"src",4,"ngIf"],[3,"url",4,"ngIf"],["width","100%",3,"src"],[3,"url"],["color","blanco",3,"click",4,"ngFor","ngForOf"],["color","blanco",3,"click"],[1,""],[1,"comentar"],["class","tituloGrande",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"tituloGrande"],["lines","none",1,"sinfondo"],[1,"ion-text-wrap","esp","resp"],[1,"avatar",3,"click"],[1,"info"],[1,"titulo"],[1,"respuesta"],[1,"rp",3,"click"],["class","el",3,"click",4,"ngIf"],["class","btn",3,"click",4,"ngIf"],["class","respuestas",4,"ngIf"],[1,"el",3,"click"],[1,"btn",3,"click"],[1,"respuestas"],["class","etiquetadosc",4,"ngIf"],["mode","ios","placeholder","Buscar usuario para etiquetarlo",3,"ionChange"],["class","botonc",4,"ngIf"],["mode","ios",1,"sinfondo"],["inputmode","text","maxlength","120","placeholder","Escribe un comentario",1,"comentario",3,"autoGrow","ionChange"],[1,"botonc"],["mode","ios","shape","round","color","success",3,"click"],[1,"etiquetadosc"],["class","targe",4,"ngFor","ngForOf"],[1,"targe"],["width","100%","height","100%",3,"src"],[1,"eliminar",3,"click"],["name","crescent"],["lines","none",1,"pie","sinfondo"],["inputmode","text","maxlength","200",1,"comentario",3,"autofocus","autoGrow","placeholder","value","ionChange"],["text",""],["color","primary",3,"disabled","click"],["name","send-outline","slot","icon-only"]],template:function(t,i){1&t&&(r.vc(0,g,7,1,"ion-header",0),r.Ob(1,"ion-content",1),r.vc(2,O,5,1,"div",2),r.vc(3,k,13,4,"div",3),r.vc(4,j,4,1,"div",2),r.vc(5,q,4,2,"div",4),r.vc(6,L,12,4,"div",2),r.Nb(),r.vc(7,G,8,5,"ion-footer",5)),2&t&&(r.fc("ngIf",i.header),r.Ab(1),r.fc("color",i.color),r.Ab(1),r.fc("ngIf","etiquetar"===i.tipo||"mencionar"===i.tipo),r.Ab(1),r.fc("ngIf","visualizador"===i.tipo),r.Ab(1),r.fc("ngIf","etiquetados"===i.tipo),r.Ab(1),r.fc("ngIf","comentar"===i.tipo),r.Ab(1),r.fc("ngIf","compartir"===i.tipo),r.Ab(1),r.fc("ngIf","comentar"===i.tipo))},directives:[p.j,l.t,l.z,l.lb,l.jb,l.k,l.j,l.A,l.U,l.yb,l.L,p.i,l.F,l.f,l.K,l.bb,l.ab,d.a,l.J,l.hb,l.cb,l.x],styles:["ion-slide[_ngcontent-%COMP%], ion-slides[_ngcontent-%COMP%]{width:100%}.bl[_ngcontent-%COMP%]{color:#fff!important;font-size:12px!important}.visualizador[_ngcontent-%COMP%]{width:100%;position:relative}.fullancho[_ngcontent-%COMP%]{min-height:100%;height:100vh}.diapo[_ngcontent-%COMP%]{width:100%;height:100%}.cerrar[_ngcontent-%COMP%]{width:100%;position:absolute;top:0;z-index:100}.cblanco[_ngcontent-%COMP%], .cerrar[_ngcontent-%COMP%]{color:#fff}.comentario[_ngcontent-%COMP%]{margin:0}.titulo[_ngcontent-%COMP%]{font-weight:700;color:#777}.esp[_ngcontent-%COMP%]{white-space:pre-wrap}.respuesta[_ngcontent-%COMP%]{color:#0288d1;padding:5px 0;width:100%;display:flex}.respuesta[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:2px 5px}.respuesta[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{color:#015a8b}.respuestas[_ngcontent-%COMP%]{padding-left:15px;width:100%}.resp[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:flex-start}.res[_ngcontent-%COMP%]{margin-top:20px}.avatar[_ngcontent-%COMP%]{width:60px;height:30px;margin-right:20px}.info[_ngcontent-%COMP%]{width:calc(199% - 50px)}.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.btn[_ngcontent-%COMP%]{color:#777;opacity:.7;margin-bottom:10px}.tituloGrande[_ngcontent-%COMP%]{width:300px;margin:30px auto;opacity:.5;text-align:center}.comentario[_ngcontent-%COMP%]{width:100%;text-align:left;margin-top:15px}.etiquetadosc[_ngcontent-%COMP%]{width:100%;display:flex;flex-wrap:wrap}.etiquetadosc[_ngcontent-%COMP%]   .targe[_ngcontent-%COMP%]{width:calc(60px - 20px);margin:10px;position:relative}.etiquetadosc[_ngcontent-%COMP%]   .targe[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:60px;height:60px}.etiquetadosc[_ngcontent-%COMP%]   .targe[_ngcontent-%COMP%]   .eliminar[_ngcontent-%COMP%]{position:absolute;width:20px;height:20px;top:0;right:-15px;border-radius:100%;background-color:#f3c5c1;color:red;display:flex;justify-content:center;align-items:center}.botonc[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}"],data:{animation:[Object(n.m)("entrada",[Object(n.l)(":enter",[Object(n.k)({opacity:0}),Object(n.e)("300ms",Object(n.k)({opacity:1}))]),Object(n.l)(":leave",[Object(n.k)({opacity:1}),Object(n.e)("100ms",Object(n.k)({opacity:0}))])])]}}),t})()}}]);