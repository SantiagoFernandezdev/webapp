(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{WGaO:function(t,e,r){"use strict";r.d(e,"a",function(){return d});var a=r("AytR"),o=r("tk/3"),i=r("coGc"),n=r("lJxs"),s=r("IzEk"),h=r("MtjB"),c=r("JIr8"),p=r("PqYM"),u=r("Cfvw"),l=r("fXoL"),b=r("B7Rs");let d=(()=>{class t{constructor(t,e){this.http=t,this.MmyTransfer=e}hanflerError(t){return t.pipe(Object(i.a)(()=>Object(p.a)(3e3)),Object(n.a)(t=>{if(console.log("Entramos a intentos"),t instanceof ErrorEvent)throw new Error("Error de Red");if(404===t.status)throw new Error(" P\xe1gina no encontrada")}),Object(s.a)(3))}BuscarUsuarios(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/empleados/buscar/`,{patron:e},r).pipe(Object(h.a)(t=>this.hanflerError(t)))}crearPublicacion(t,e){const r={headers:new o.c({"x-token":t})};return this.http.post(`${a.a}/igtm/crear/`,e,r).pipe(Object(h.a)(t=>this.hanflerError(t)))}crearPublicacionGrupo(t,e){const r={headers:new o.c({"x-token":t})};return this.http.post(`${a.a}/igtm/crear/grupo`,e,r).pipe(Object(h.a)(t=>this.hanflerError(t)))}leerPublicacion(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/igtm/leer/`,e,r).pipe(Object(h.a)(t=>this.hanflerError(t)))}leerPublicacionUsuario(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/igtm/leer/usuario`,e,r).pipe(Object(h.a)(t=>this.hanflerError(t)))}subirArchivosChat(t,e,r,o,i,n,s,h){console.log("archivo",r);const p={fileKey:"archivo",fileName:s,mimeType:h,httpMethod:"POST",headers:{"x-token":t,"x-idpublicacion":e,"x-final":o,"x-cont":i,"x-historia":n}},l=this.MmyTransfer.create();return Object(u.a)(l.upload(r,`${a.a}/igtm/upload`,p)).pipe(Object(c.a)(t=>{throw console.log("No se pudo subir la imagen ",t),new Error("No se pudo subir la imagen ")}))}subirweb(t,e,r,i,n,s){console.log(t,e,r,i,n);const c={headers:new o.c({"x-final":r.toString(),"x-cont":i.toString(),"x-historia":n.toString(),"x-token":t,"x-idpublicacion":e})};return this.http.post(`${a.a}/igtm/upload`,s,c).pipe(Object(h.a)(t=>this.hanflerError(t)))}leerFotos(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/igtm/fotos/leer/`,e,r).pipe(Object(h.a)(t=>this.hanflerError(t)))}vistos(t,e){const r={headers:new o.c({"x-token":t})};return this.http.post(`${a.a}/igtm/historias/vistos/`,e,r).pipe(Object(h.a)(t=>this.hanflerError(t)))}eliminar(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/igtm/eliminar/`,e,r).pipe(Object(h.a)(t=>this.hanflerError(t)))}eliminarHistoria(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/igtm/historia/eliminar/`,e,r).pipe(Object(h.a)(t=>this.hanflerError(t)))}meGusta(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/igtm/megusta/`,e,r).pipe(Object(h.a)(t=>this.hanflerError(t)))}saber(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/igtm/publicacion/seguidos/`,e,r).pipe(Object(h.a)(t=>this.hanflerError(t)))}saberHistorias(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/igtm/historias/seguidos/`,e,r).pipe(Object(h.a)(t=>this.hanflerError(t)))}leerUna(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/igtm/leer/uno/`,e,r).pipe(Object(h.a)(t=>this.hanflerError(t)))}leerUna2(t,e){const r={headers:new o.c({"x-token":t})};return this.http.put(`${a.a}/igtm/leer/uno/historia`,e,r).pipe(Object(h.a)(t=>this.hanflerError(t)))}crearComentario(t,e){const r={headers:new o.c({"x-token":t})};return this.http.post(`${a.a}/igtm/comentarios/`,e,r).pipe(Object(h.a)(t=>this.hanflerError(t)))}crearCompartida(t,e){const r={headers:new o.c({"x-token":t})};return this.http.post(`${a.a}/igtm/compartir/`,e,r).pipe(Object(h.a)(t=>this.hanflerError(t)))}crearGuardado(t,e){const r={headers:new o.c({"x-token":t})};return this.http.post(`${a.a}/igtm/guardado/`,e,r).pipe(Object(h.a)(t=>this.hanflerError(t)))}eliminarComentario(t,e){const r={headers:new o.c({"x-token":t})};return this.http.post(`${a.a}/igtm/comentarios/eliminar`,e,r).pipe(Object(h.a)(t=>this.hanflerError(t)))}}return t.\u0275fac=function(e){return new(e||t)(l.Sb(o.a),l.Sb(b.a))},t.\u0275prov=l.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);