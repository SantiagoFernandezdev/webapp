(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"4kKk":function(t,i,e){"use strict";e.d(i,"a",function(){return k});var s=e("mrSG"),n=e("fXoL"),o=e("fsfq"),a=e("TEn/"),r=e("fmoy"),c=e("WGaO");let d=(()=>{class t{constructor(t,i,e,s,n,o){this.almacenamiento=t,this.modalCtrl=i,this.toast=e,this.apiIgtm=s,this.alert=n,this.popover=o}ngOnInit(){}alerta(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.alert.create({header:"\xbfEsta seguro de eliminar esta historia?",message:"esta acci\xf3n ser\xe1 de forma permanente",buttons:[{text:"Cancelar",cssClass:"cancelarAlerta",role:"cancel",handler:()=>{this.cancelar()}},{text:"Aceptar",cssClass:"botonalerta",handler:()=>{this.eliminar()}}]});yield t.present()})}cancelar(){this.popover.dismiss()}eliminar(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&this.apiIgtm.eliminarHistoria(t.token,{id:this.id}).subscribe(t=>{t.exe?this.popover.dismiss({exe:!0}):this.toast.toastError("No se pudo eliminar la historia, intentelo mpas tarde")},t=>{this.toast.toastError("No se pudo eliminar la historia, intentelo mpas tarde")})})}}return t.\u0275fac=function(i){return new(i||t)(n.Jb(o.a),n.Jb(a.pb),n.Jb(r.a),n.Jb(c.a),n.Jb(a.b),n.Jb(a.tb))},t.\u0275cmp=n.Db({type:t,selectors:[["app-alert-historias"]],inputs:{id:"id"},decls:5,vars:0,consts:[[3,"click"],["slot","start","name","trash-outline","color","danger"]],template:function(t,i){1&t&&(n.Mb(0,"ion-list"),n.Mb(1,"ion-item",0),n.Ub("click",function(){return i.alerta()}),n.Kb(2,"ion-icon",1),n.Mb(3,"ion-label"),n.rc(4,"Eliminar"),n.Lb(),n.Lb(),n.Lb())},directives:[a.L,a.F,a.A,a.K],styles:[""]}),t})();var l=e("VYYF"),b=e("tyNb"),h=e("ofXK");let p=(()=>{class t{transform(t){if("dibujar"===t.tipo)return`background-color: ${t.dibujo.fondo}; color: ${t.dibujo.color};`}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275pipe=n.Ib({name:"colores",type:t,pure:!0}),t})();const f=["slide"],g=["miSlide"];function u(t,i){if(1&t){const t=n.Nb();n.Mb(0,"ion-button",14),n.Ub("click",function(i){n.lc(t);const e=n.Wb().index,s=n.Wb().index;return n.Wb(2).opciones(i,s,e)}),n.Kb(1,"ion-icon",21),n.Lb()}}function m(t,i){if(1&t&&(n.Mb(0,"div",22),n.Mb(1,"h3"),n.rc(2),n.Lb(),n.Lb()),2&t){const t=n.Wb().$implicit;n.zb(2),n.sc(t.dibujo.texto)}}function v(t,i){if(1&t&&n.Kb(0,"img",12),2&t){const t=n.Wb().$implicit;n.fc("src","https://www.motocaliapp.com/11927613401/",t.archivos[0].ruta,"",n.mc)}}function M(t,i){if(1&t){const t=n.Nb();n.Mb(0,"div",23),n.Mb(1,"div",24),n.Ub("click",function(){n.lc(t);const i=n.Wb().index,e=n.Wb().index;return n.Wb(2).abrir(e,i)}),n.rc(2," Ver m\xe1s... "),n.Lb(),n.Lb()}}function w(t,i){if(1&t&&(n.Mb(0,"div",30),n.rc(1),n.Lb()),2&t){const t=n.Wb(2).$implicit;n.zb(1),n.sc(t.comentario)}}function x(t,i){if(1&t){const t=n.Nb();n.Mb(0,"ion-item",33),n.Ub("click",function(){n.lc(t);const e=i.$implicit;return n.Wb(6).perfilNavegar(e.nombreusuario)}),n.Mb(1,"ion-avatar",34),n.Kb(2,"img",35),n.Lb(),n.Mb(3,"ion-label"),n.Mb(4,"div"),n.rc(5),n.Lb(),n.Mb(6,"strong"),n.rc(7),n.Lb(),n.Lb(),n.Lb()}if(2&t){const t=i.$implicit;n.zb(2),n.fc("src","https://www.motocaliapp.com/",t.imagen[0].path,"",n.mc),n.zb(3),n.sc(t.nombrecompleto),n.zb(2),n.tc("@",t.nombreusuario,"")}}function O(t,i){if(1&t&&(n.Mb(0,"ion-list"),n.Mb(1,"ion-item-divider",31),n.rc(2,"Usuarios etiquetados"),n.Lb(),n.qc(3,x,8,3,"ion-item",32),n.Lb()),2&t){const t=n.Wb(2).$implicit;n.zb(3),n.dc("ngForOf",t.etiquetas)}}function C(t,i){if(1&t){const t=n.Nb();n.Mb(0,"ion-item",33),n.Ub("click",function(){n.lc(t);const e=i.$implicit;return n.Wb(6).perfilNavegar(e.nombreusuario)}),n.Mb(1,"ion-avatar",34),n.Kb(2,"img",35),n.Lb(),n.Mb(3,"ion-label"),n.Mb(4,"div"),n.rc(5),n.Lb(),n.Mb(6,"strong"),n.rc(7),n.Lb(),n.Lb(),n.Lb()}if(2&t){const t=i.$implicit;n.zb(2),n.fc("src","https://www.motocaliapp.com/",t.imagen[0].path,"",n.mc),n.zb(3),n.sc(t.nombrecompleto),n.zb(2),n.tc("@",t.nombreusuario,"")}}function _(t,i){if(1&t&&(n.Mb(0,"ion-list"),n.Mb(1,"ion-item-divider",31),n.rc(2),n.Lb(),n.qc(3,C,8,3,"ion-item",32),n.Lb()),2&t){const t=n.Wb(2).$implicit;n.zb(2),n.tc("Visto por ",t.vistos.length," "),n.zb(1),n.dc("ngForOf",t.vistos)}}function P(t,i){if(1&t){const t=n.Nb();n.Mb(0,"div",25),n.Mb(1,"div",26),n.Mb(2,"div",27),n.Ub("click",function(){n.lc(t);const i=n.Wb().index,e=n.Wb().index;return n.Wb(2).cerrar2(e,i)}),n.rc(3,"x"),n.Lb(),n.qc(4,w,2,1,"div",28),n.qc(5,O,4,1,"ion-list",29),n.qc(6,_,4,2,"ion-list",29),n.Lb(),n.Lb()}if(2&t){const t=n.Wb().$implicit,i=n.Wb(3);n.zb(4),n.dc("ngIf",""!==t.comentario),n.zb(1),n.dc("ngIf",t.etiquetas.length>0),n.zb(1),n.dc("ngIf",i.id===t.creador._id)}}function z(t,i){if(1&t){const t=n.Nb();n.Mb(0,"div",7),n.Xb(1,"colores"),n.Mb(2,"div",8),n.Ub("click",function(){n.lc(t);const e=i.index,s=n.Wb().index;return n.Wb(2).siguiente(s,e)}),n.Lb(),n.Mb(3,"div",9),n.Ub("click",function(){n.lc(t);const e=i.index,s=n.Wb().index;return n.Wb(2).anterior(s,e)}),n.Lb(),n.Mb(4,"div",10),n.Mb(5,"div",11),n.Mb(6,"ion-avatar"),n.Kb(7,"img",12),n.Lb(),n.Mb(8,"div",13),n.Mb(9,"span"),n.rc(10),n.Lb(),n.Kb(11,"br"),n.Mb(12,"strong"),n.rc(13),n.Lb(),n.Lb(),n.Lb(),n.Mb(14,"ion-buttons"),n.Mb(15,"ion-button",14),n.Ub("click",function(){n.lc(t);const e=i.index,s=n.Wb().index;return n.Wb(2).cerrar(s,e)}),n.Kb(16,"ion-icon",15),n.Lb(),n.qc(17,u,2,0,"ion-button",16),n.Lb(),n.Lb(),n.qc(18,m,3,1,"div",17),n.qc(19,v,1,1,"img",18),n.qc(20,M,3,0,"div",19),n.qc(21,P,7,3,"div",20),n.Lb()}if(2&t){const t=i.$implicit,e=n.Wb().$implicit,s=n.Wb(2);n.oc(n.Yb(1,17,t)),n.Bb("one",1===e.length)("ocultar",t.vista)("mostrar",!t.vista),n.zb(7),n.ec("src",e[0].image,n.mc),n.zb(3),n.sc(s.info.nombre),n.zb(3),n.tc("@",s.info.usuario,""),n.zb(4),n.dc("ngIf",s.id===t.creador._id),n.zb(1),n.dc("ngIf","dibujar"===t.tipo),n.zb(1),n.dc("ngIf","multimedia"===t.tipo),n.zb(1),n.dc("ngIf",""!==t.comentario||t.etiquetas.length>0||s.id===t.creador._id),n.zb(1),n.dc("ngIf",t.etiqueta)}}function $(t,i){if(1&t&&(n.Mb(0,"ion-slide",5),n.qc(1,z,22,19,"div",6),n.Lb()),2&t){const t=i.$implicit;n.zb(1),n.dc("ngForOf",t)}}function L(t,i){if(1&t&&(n.Mb(0,"ion-slides",2,3),n.qc(2,$,2,1,"ion-slide",4),n.Lb()),2&t){const t=n.Wb();n.dc("options",t.slideopts),n.zb(2),n.dc("ngForOf",t.historiasbase)}}let k=(()=>{class t{constructor(t,i,e,s,n,o,a){this.modalCtrl=t,this.statusbar=i,this.router=e,this.almacenamiento=s,this.IGTMApi=n,this.toast=o,this.popover=a,this.ht=["fsdf","asdfasf","asfas"],this.slideopts={grabCursor:!0,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},on:{beforeInit:function(){const t=this;t.classNames.push(`${t.params.containerModifierClass}cube`),t.classNames.push(`${t.params.containerModifierClass}3d`);const i={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};this.params=Object.assign(this.params,i),this.originalParams=Object.assign(this.originalParams,i)},setTranslate:function(){const t=this,{$el:i,$wrapperEl:e,slides:s,width:n,height:o,rtlTranslate:a,size:r}=t,c=t.params.cubeEffect,d=t.isHorizontal(),l=t.virtual&&t.params.virtual.enabled;let b,h=0;c.shadow&&(d?(b=e.find(".swiper-cube-shadow"),0===b.length&&(b=t.$('<div class="swiper-cube-shadow"></div>'),e.append(b)),b.css({height:`${n}px`})):(b=i.find(".swiper-cube-shadow"),0===b.length&&(b=t.$('<div class="swiper-cube-shadow"></div>'),i.append(b))));for(let p=0;p<s.length;p+=1){const i=s.eq(p);let e=p;l&&(e=parseInt(i.attr("data-swiper-slide-index"),10));let n=90*e,o=Math.floor(n/360);a&&(n=-n,o=Math.floor(-n/360));const b=Math.max(Math.min(i[0].progress,1),-1);let f=0,g=0,u=0;e%4==0?(f=4*-o*r,u=0):(e-1)%4==0?(f=0,u=4*-o*r):(e-2)%4==0?(f=r+4*o*r,u=r):(e-3)%4==0&&(f=-r,u=3*r+4*r*o),a&&(f=-f),d||(g=f,f=0);const m=`rotateX(${d?0:-n}deg) rotateY(${d?n:0}deg) translate3d(${f}px, ${g}px, ${u}px)`;if(b<=1&&b>-1&&(h=90*e+90*b,a&&(h=90*-e-90*b)),i.transform(m),c.slideShadows){let e=i.find(d?".swiper-slide-shadow-left":".swiper-slide-shadow-top"),s=i.find(d?".swiper-slide-shadow-right":".swiper-slide-shadow-bottom");0===e.length&&(e=t.$(`<div class="swiper-slide-shadow-${d?"left":"top"}"></div>`),i.append(e)),0===s.length&&(s=t.$(`<div class="swiper-slide-shadow-${d?"right":"bottom"}"></div>`),i.append(s)),e.length&&(e[0].style.opacity=Math.max(-b,0)),s.length&&(s[0].style.opacity=Math.max(b,0))}}if(e.css({"-webkit-transform-origin":`50% 50% -${r/2}px`,"-moz-transform-origin":`50% 50% -${r/2}px`,"-ms-transform-origin":`50% 50% -${r/2}px`,"transform-origin":`50% 50% -${r/2}px`}),c.shadow)if(d)b.transform(`translate3d(0px, ${n/2+c.shadowOffset}px, ${-n/2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`);else{const t=Math.abs(h)-90*Math.floor(Math.abs(h)/90),i=1.5-(Math.sin(2*t*Math.PI/360)/2+Math.cos(2*t*Math.PI/360)/2),e=c.shadowScale/i;b.transform(`scale3d(${c.shadowScale}, 1, ${e}) translate3d(0px, ${o/2+c.shadowOffset}px, ${-o/2/e}px) rotateX(-90deg)`)}e.transform(`translate3d(0px,0,${t.browser.isSafari||t.browser.isUiWebView?-r/2:0}px) rotateX(${t.isHorizontal()?0:h}deg) rotateY(${t.isHorizontal()?-h:0}deg)`)},setTransition:function(t){const i=this,{$el:e,slides:s}=i;s.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),i.params.cubeEffect.shadow&&!i.isHorizontal()&&e.find(".swiper-cube-shadow").transition(t)}}},this.opt={direction:"vertical"},this.historiasbase=[],this.estilos="",this.cargo=!0,this.id=""}ngOnInit(){}ionViewWillEnter(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.almacenamiento.obtenerToken();t&&(this.id=t._id,this.historiasbase=this.historias,this.historiasbase.forEach(i=>{let e=!1;i.forEach(i=>{i.vistos.filter(i=>i._id===t._id).length>0||e?i.vista=!0:(i.vista=!1,e=!0)}),0===i.filter(t=>!1===t.vista).length&&(i[0].vista=!1)}),console.log(this.historias,this.info),this.miSlide.slideTo(this.info.idx,0).then(()=>{}))})}saludar(t,i){}opciones(t,i,e){return Object(s.a)(this,void 0,void 0,function*(){const s=yield this.popover.create({component:d,componentProps:{id:this.historiasbase[i][e]._id},event:t});yield s.present();const n=yield s.onWillDismiss();n&&n.data&&n.data.exe&&(this.toast.toastExitoso("Historia eliminada"),this.historiasbase[i].splice(e,1),this.modalCtrl.dismiss())})}siguiente(t,i){return Object(s.a)(this,void 0,void 0,function*(){if(i===this.historiasbase[t].length-1)t===this.historiasbase.length-1?this.modalCtrl.dismiss():this.miSlide.slideNext().then(()=>{if(this.historiasbase[t+1]){let i=this.historiasbase[t+1].findIndex(t=>!1===t.vista);i>0&&this.vistos(this.historiasbase[t+1][i]._id)}});else{this.historiasbase[t][i].vista=!0,this.historiasbase[t][i+1].vista=!1;const e=yield this.almacenamiento.obtenerToken();e&&0===this.historiasbase[t][i].vistos.filter(t=>t._id===e._id).length&&this.vistos(this.historiasbase[t][i]._id),this.vistos(this.historiasbase[t][i+1]._id)}})}anterior(t,i){return Object(s.a)(this,void 0,void 0,function*(){0===i?0===t?this.modalCtrl.dismiss():this.miSlide.slidePrev().then(()=>{if(this.historiasbase[t-1]){let i=this.historiasbase[t-1].findIndex(t=>!1===t.vista);i>0&&this.vistos(this.historiasbase[t-1][i]._id)}}):(this.historiasbase[t][i].vista=!0,this.historiasbase[t][i-1].vista=!1)})}rotar(){this.miSlide.getActiveIndex().then(t=>{this.slide.getActiveIndex().then(i=>{this.vistos(this.historiasbase[t][i]._id)})})}vistos(t){return Object(s.a)(this,void 0,void 0,function*(){const i=yield this.almacenamiento.obtenerToken();i&&this.IGTMApi.vistos(i.token,{id:t}).subscribe(t=>{},t=>{})})}cerrar(t,i){this.vistos(this.historiasbase[t][i]._id),this.modalCtrl.dismiss(),this.historias=[],this.info={}}cambio(t,i){this.slide.getActiveIndex().then(t=>{})}ver(t){}abrir(t,i){this.historias[t][i].etiqueta=!0}cerrar2(t,i){this.historias[t][i].etiqueta=!1}perfilNavegar(t){this.modalCtrl.dismiss(),this.router.navigate(["/visita/",t,"s"])}ionViewWillLeave(){}}return t.\u0275fac=function(i){return new(i||t)(n.Jb(a.pb),n.Jb(l.a),n.Jb(b.g),n.Jb(o.a),n.Jb(c.a),n.Jb(r.a),n.Jb(a.tb))},t.\u0275cmp=n.Db({type:t,selectors:[["app-historias-modal"]],viewQuery:function(t,i){if(1&t&&(n.vc(f,1),n.vc(g,1)),2&t){let t;n.kc(t=n.Vb())&&(i.slide=t.first),n.kc(t=n.Vb())&&(i.miSlide=t.first)}},inputs:{info:"info",historias:"historias"},decls:2,vars:1,consts:[["color","darkgold"],[3,"options",4,"ngIf"],[3,"options"],["miSlide",""],["class","red",4,"ngFor","ngForOf"],[1,"red"],["class"," divhistoria",3,"one","ocultar","mostrar","style",4,"ngFor","ngForOf"],[1,"divhistoria"],[1,"derecha",3,"click"],[1,"izquierda",3,"click"],[1,"encabezado"],[1,"data"],["alt","",3,"src"],[1,"titulo"],[3,"click"],["slot","icon-only","name","close"],[3,"click",4,"ngIf"],["class","texto",4,"ngIf"],["alt","",3,"src",4,"ngIf"],["class","pie",4,"ngIf"],["class","etiquetados",4,"ngIf"],["slot","icon-only","name","ellipsis-vertical"],[1,"texto"],[1,"pie"],[1,"data",3,"click"],[1,"etiquetados"],[1,"dataa"],[1,"cerrarr",3,"click"],["class","com",4,"ngIf"],[4,"ngIf"],[1,"com"],[1,"cc"],["color","oscuro",3,"click",4,"ngFor","ngForOf"],["color","oscuro",3,"click"],["slot","start"],[3,"src"]],template:function(t,i){1&t&&(n.Mb(0,"ion-content",0),n.qc(1,L,3,2,"ion-slides",1),n.Lb()),2&t&&(n.zb(1),n.dc("ngIf",i.cargo))},directives:[a.t,h.j,a.bb,h.i,a.ab,a.f,a.k,a.j,a.A,a.L,a.G,a.F,a.K],pipes:[p],styles:[".contenedor[_ngcontent-%COMP%]{width:100%;min-height:100vh;height:auto}.encabezado[_ngcontent-%COMP%]{padding:5px 10px;top:0;touch-action:auto!important}.encabezado[_ngcontent-%COMP%], .pie[_ngcontent-%COMP%]{width:100%;position:absolute;left:0;font-size:20px;display:flex;justify-content:space-between;align-items:center;z-index:10}.pie[_ngcontent-%COMP%]{bottom:0}.pie[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]{width:150px;background:#333;color:#fff!important;text-align:center;padding:5px 10px;font-size:14px}.encabezado[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]{width:80%;display:flex;align-items:center}.encabezado[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{padding-left:10px;text-align:left}.encabezado[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;font-weight:400}.encabezado[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:12px}ion-slides[_ngcontent-%COMP%]{width:100%;min-height:100vh;height:auto}ion-slide[_ngcontent-%COMP%]{width:100%;height:100%}ion-slide[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]{width:100%;height:100vh}.one[_ngcontent-%COMP%]{height:100vh!important}.sl[_ngcontent-%COMP%]{min-height:100%;height:auto;max-width:600px;margin:auto;height:100%;position:relative}.sl[_ngcontent-%COMP%], .sl[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.texto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:22px;word-wrap:break-word;white-space:pre-wrap;font-weight:700}.etiquetados[_ngcontent-%COMP%]{width:100%;height:100%;padding:5px 10px;position:absolute;top:0;left:0;font-size:20px;z-index:20}.etiquetados[_ngcontent-%COMP%], .etiquetados[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{background:#3b4b54}.etiquetados[_ngcontent-%COMP%]   .dataa[_ngcontent-%COMP%]{position:relative;width:100%;height:100%}.etiquetados[_ngcontent-%COMP%]   .dataa[_ngcontent-%COMP%]   .cerrarr[_ngcontent-%COMP%]{text-align:right;color:#fff;z-index:30;font-size:18px;padding:5px}.etiquetados[_ngcontent-%COMP%]   .dataa[_ngcontent-%COMP%]   .com[_ngcontent-%COMP%]{margin-top:50px;color:#fff;font-size:16px;padding:10px}.cc[_ngcontent-%COMP%]{background:#536169;color:#ccc}.divhistoria[_ngcontent-%COMP%]{width:100%;height:100vh;position:relative}.derecha[_ngcontent-%COMP%]{right:0;width:calc(100% - 100px)}.derecha[_ngcontent-%COMP%], .izquierda[_ngcontent-%COMP%]{position:absolute;top:0;height:100%}.izquierda[_ngcontent-%COMP%]{left:0;width:100px}.ocultar[_ngcontent-%COMP%]{display:none}.mostrar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:70px;height:70px;border-radius:100%}"]}),t})()},"Qv/D":function(t,i,e){"use strict";e.r(i),e.d(i,"HistoriasModalPageModule",function(){return h});var s=e("ofXK"),n=e("3Pt+"),o=e("TEn/"),a=e("tyNb"),r=e("4kKk"),c=e("fXoL");const d=[{path:"",component:r.a}];let l=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(i){return new(i||t)},imports:[[a.i.forChild(d)],a.i]}),t})();var b=e("iTUp");let h=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(i){return new(i||t)},imports:[[s.b,n.e,o.lb,l,b.a]]}),t})()}}]);