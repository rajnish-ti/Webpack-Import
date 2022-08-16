/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
  "use strict";
  var __webpack_modules__ = {
    "./src/index.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      console.log("index", {
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      });
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");\n\n\nconsole.log((0,_utils__WEBPACK_IMPORTED_MODULE_0__.addTwoNumber)(2, 10));\n\n\n//# sourceURL=webpack://webpack-import/./src/index.js?'
      );
    },

    "./src/utils.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      console.log("util ", {
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      });
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "addTwoNumber": () => (/* binding */ addTwoNumber)\n/* harmony export */ });\nconst addTwoNumber = (a, b) => a + b;\n\n\n//# sourceURL=webpack://webpack-import/./src/utils.js?'
      );

      /***/
    },
  };

  // console.log('webpack module', __webpack_modules__);
  var __webpack_module_cache__ = {};

  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    console.log("path", moduleId, __webpack_module_cache__[moduleId]);
    var module = (__webpack_module_cache__[moduleId] = {
      exports: {},
    });
    console.log("module-data", module, module.exports);

    // console.log(module, cachedModule, moduleId);

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    return module.exports;
  }

  (() => {
    __webpack_require__.d = (exports, definition) => {
      console.log("definition_1", definition, exports);
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
      console.log("definition_2", exports);
    };
  })();

  (() => {
    __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
  })();

  (() => {
    __webpack_require__.r = (exports) => {
      console.log("require__r_1", exports);
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
      }
      Object.defineProperty(exports, "__esModule", { value: true });
      console.log("require__r_2", exports);
    };
  })();

  var __webpack_exports__ = __webpack_require__("./src/index.js");
})();
