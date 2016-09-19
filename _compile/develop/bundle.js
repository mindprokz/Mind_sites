/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _sendForm = __webpack_require__(1);

	var _sendForm2 = _interopRequireDefault(_sendForm);

	var _floatMenu = __webpack_require__(2);

	var _floatMenu2 = _interopRequireDefault(_floatMenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//   $(document).ready(function () {
	//     'use strict';
	// //Аякс отправка форм
	//     $("#application").submit(function () {
	//       var data = {
	//         name : document.querySelector('input[name="name"]').value,
	//         email : document.querySelector('input[name="email"]').value,
	//         telephone : document.querySelector('input[name="telephone"]').value
	//       };
	//       $.ajax({
	//         type: "POST",
	//         url: "mail.php",
	//         data: data
	//       }).done(function (value) {
	//         $('#mail')[0].innerHTML = value;
	//         $('#mail').removeClass('not_visible_mail');
	//         setTimeout(function () {
	//           $("#form").trigger("reset");
	//         }, 1000);
	//       });
	//     return false;
	//     });
	// }
	//         $("img, a").on("dragstart", function (event) { event.preventDefault(); });
	//   });

	//Плавающее меню
	var paramsMenu = {
	  elem: document.getElementById('nav'),
	  height: 100,
	  first_class: 'menu_fixed_on_top',
	  second_class: 'float_menu'
	};

	new _floatMenu2.default().init(paramsMenu);

	$(document).on('click', 'a.anchor', function () {
	  $('html, body').animate({ scrollTop: $('a[name="' + this.hash.slice(1) + '"]').offset().top - 86 }, 1000);
	  return false;
	});

	// Отправка формы обратной связи скрипту для отправления по почте
	// let data = {
	//   name : 'input[name="name"]',
	//   email : 'input[name="email"]',
	//   telephone : 'input[name="telephone"]'
	// };
	//
	// new SendFunc('application', data, 'mail');

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var sendForm = function sendForm(id, dates, idMail) {
	  _classCallCheck(this, sendForm);

	  document.getElementById(id).addEventListener('submit', function () {

	    var data = {
	      name: document.querySelector(dates.name.value),
	      email: document.querySelector(dates.email.value),
	      telephone: document.querySelector(dates.telephone.value)
	    };

	    $("#application").submit(function () {
	      $.ajax({
	        type: "POST",
	        url: "mail.php",
	        data: data
	      }).done(function (value) {
	        var mail = document.getElementById(idMail);

	        mail.innerHTML = value;
	        mail.classList.remove('not_visible_mail');

	        setTimeout(function () {
	          $("#" + id).trigger("reset");
	          mail.classList.add('not_visible_mail');
	        }, 1000);
	      });

	      return false;
	    });
	  });
	};

	exports.default = sendForm;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// Принимает объект с настройками для меню
	var FloatMenu = function () {
	  function FloatMenu() {
	    _classCallCheck(this, FloatMenu);
	  }

	  _createClass(FloatMenu, [{
	    key: 'init',
	    value: function init(params) {
	      params.active_class = params.first_class;

	      if (window.pageYOffset > params.height) {
	        params.elem.classList.add(params.first_class);
	        params.elem.classList.add(params.second_class);
	      } else {
	        params.elem.classList.add(params.first_class);
	      }

	      window.addEventListener('scroll', function () {
	        if (window.pageYOffset > params.height && params.active_class === params.first_class) {
	          params.elem.classList.add(params.second_class);
	          params.active_class = params.second_class;
	        } else if (window.pageYOffset < params.height && params.active_class === params.second_class) {
	          params.elem.classList.remove(params.second_class);
	          params.active_class = params.first_class;
	        }
	      });

	      document.querySelector('nav ul .closer').addEventListener('click', function () {
	        this.parentNode.classList.remove('open');
	      });

	      document.querySelector('nav .burger').addEventListener('click', function () {
	        this.previousElementSibling.classList.add('open');
	      });
	    }
	  }]);

	  return FloatMenu;
	}();

	exports.default = FloatMenu;

/***/ }
/******/ ]);