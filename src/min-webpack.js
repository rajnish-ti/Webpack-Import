() => {
  "use strict";
  var __webpack_modules__ = {
    "./src/index.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");\n\n\nconsole.log((0,_utils__WEBPACK_IMPORTED_MODULE_0__.addTwoNumber)(2, 10));\n\n\n//# sourceURL=webpack://webpack-import/./src/index.js?'
      );
    },

    "./src/utils.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "addTwoNumber": () => (/* binding */ addTwoNumber)\n/* harmony export */ });\nconst addTwoNumber = (a, b) => a + b;\n\n\n//# sourceURL=webpack://webpack-import/./src/utils.js?'
      );
    },
  };

  var __webpack_module_cache__ = {};

  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
      exports: {},
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
  }

  // Harmony exports
  (() => {
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
        }
      }
    };
  })();

  (() => {
    __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
  })();

  (() => {
    __webpack_require__.r = (exports) => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        exports[Symbol.toStringTag] = "Module";
      }
      exports["__esModule"] = true;
    };
    // initial empty object
    // {
    //     __esModule: true, => It is a flag helps us to correctly import a default export
    //     Symbol(Symbol.toStringTag): "Module",
    //     addTwoNumber: (...)
    // }
  })();
};
