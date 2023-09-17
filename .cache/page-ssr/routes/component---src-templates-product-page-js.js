"use strict";
exports.id = "component---src-templates-product-page-js";
exports.ids = ["component---src-templates-product-page-js"];
exports.modules = {

/***/ "./src/templates/product-page.js?export=default":
/*!******************************************************!*\
  !*** ./src/templates/product-page.js?export=default ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ProductPage = ({
  data
}) => {
  const product = data.productsJson;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, product.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, product.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Price: $", product.price));
};
const query = "1888452168";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductPage);

/***/ })

};
;
//# sourceMappingURL=component---src-templates-product-page-js.js.map