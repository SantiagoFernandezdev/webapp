(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "0/6H":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "A36C");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "2c91":
/*!************************************************!*\
  !*** ./src/app/providers/Api/Mapar.service.ts ***!
  \************************************************/
/*! exports provided: MapasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapasService", function() { return MapasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");






let MapasService = class MapasService {
    constructor(http) {
        this.http = http;
    }
    hanflerError(error) {
        ;
        return error.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delayWhen"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(3000)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((errorHttp) => {
            if (errorHttp instanceof ErrorEvent) {
                throw new Error('Error de Red');
            }
            else {
                if (errorHttp.status === 404) {
                    throw new Error(' Página no encontrada');
                }
                else {
                    // throw new Error(' No se pudo realizar la conexión, comprueba tu red ');
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(3));
    }
    crearSede(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/mapas/sede/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    actualizarSede(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/mapas/sede/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    traerSedes(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/mapas/sede/traer/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    eliminarSede(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/mapas/sede/eliminar/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    editarSede(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/mapas/sede/editar/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    buscarSedes(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/mapas/sede/buscar/`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
};
MapasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
MapasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MapasService);



/***/ }),

/***/ "5Wwd":
/*!*****************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-modal/ivt-modal.module.ts ***!
  \*****************************************************************/
/*! exports provided: IvtModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvtModalPageModule", function() { return IvtModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ivt_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ivt-modal-routing.module */ "hOHk");
/* harmony import */ var _ivt_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ivt-modal.page */ "SQQW");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");








let IvtModalPageModule = class IvtModalPageModule {
};
IvtModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ivt_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["IvtModalPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_ivt_modal_page__WEBPACK_IMPORTED_MODULE_6__["IvtModalPage"]]
    })
], IvtModalPageModule);



/***/ }),

/***/ "6POk":
/*!***************************************************!*\
  !*** ./src/app/providers/Api/Facturas.service.ts ***!
  \***************************************************/
/*! exports provided: FacturasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturasService", function() { return FacturasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");






let FacturasService = class FacturasService {
    constructor(http) {
        this.http = http;
    }
    hanflerError(error) {
        ;
        return error.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delayWhen"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(3000)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((errorHttp) => {
            if (errorHttp instanceof ErrorEvent) {
                throw new Error('Error de Red');
            }
            else {
                if (errorHttp.status === 404) {
                    throw new Error(' Página no encontrada');
                }
                else {
                    // throw new Error(' No se pudo realizar la conexión, comprueba tu red ');
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(3));
    }
    consultarConfiguracion(token) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/facturas/configuracion`, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    editarConfiguracion(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/facturas/configuracion`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    guardarConfiguracion(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/factura/guardar`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    consultarFacturas(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/facturas/creadas`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    enviarrFacturas(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/factura/pdf`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
    editarFactura(token, data) {
        const httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'x-token': token
            })
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"]}/facturas/editar`, data, httpHeader).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(error => this.hanflerError(error)));
    }
};
FacturasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
FacturasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FacturasService);



/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "D3OO":
/*!*********************************************************************!*\
  !*** ./src/app/Pages/Modales/igtmplantilla/igtmplantilla.module.ts ***!
  \*********************************************************************/
/*! exports provided: IgtmplantillaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IgtmplantillaPageModule", function() { return IgtmplantillaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _igtmplantilla_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./igtmplantilla.page */ "Jmyf");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Components/components.module */ "zon2");







let IgtmplantillaPageModule = class IgtmplantillaPageModule {
};
IgtmplantillaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
        ],
        declarations: [_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_5__["IgtmplantillaPage"]]
    })
], IgtmplantillaPageModule);



/***/ }),

/***/ "J1J0":
/*!*********************************************************************!*\
  !*** ./src/app/pages/Modales/igtmplantilla/igtmplantilla.module.ts ***!
  \*********************************************************************/
/*! exports provided: IgtmplantillaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IgtmplantillaPageModule", function() { return IgtmplantillaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _igtmplantilla_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./igtmplantilla.page */ "rE7l");
/* harmony import */ var _Components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Components/components.module */ "zon2");







let IgtmplantillaPageModule = class IgtmplantillaPageModule {
};
IgtmplantillaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _Components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
        ],
        declarations: [_igtmplantilla_page__WEBPACK_IMPORTED_MODULE_5__["IgtmplantillaPage"]]
    })
], IgtmplantillaPageModule);



/***/ }),

/***/ "ZaV5":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "hOHk":
/*!*************************************************************************!*\
  !*** ./src/app/pages/Inventarios/ivt-modal/ivt-modal-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: IvtModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvtModalPageRoutingModule", function() { return IvtModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ivt_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ivt-modal.page */ "SQQW");




const routes = [
    {
        path: '',
        component: _ivt_modal_page__WEBPACK_IMPORTED_MODULE_3__["IvtModalPage"]
    }
];
let IvtModalPageRoutingModule = class IvtModalPageRoutingModule {
};
IvtModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IvtModalPageRoutingModule);



/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ })

}]);
//# sourceMappingURL=common.js.map