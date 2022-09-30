/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 450:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  var windowHeight = window.innerHeight;

  if (document.querySelector('.jsHeader')) {
    var headerClose = function headerClose() {
      jsHeader.classList.remove('is-active');
      jsHeaderMenu.classList.remove('is-active');
      jsBurgerTrigger.classList.remove('is-active');
      body.classList.remove('_lock');
      rotateIndex = rotateTrigger(rotateIndex);
    };

    var rotateTrigger = function rotateTrigger(index) {
      index += 1;
      jsBurgerTrigger.style.transform = 'rotate(' + index * 360 + 'deg)';
      return index;
    };

    var jsHeader = document.querySelector('.jsHeader');
    var jsHeaderMenu = document.querySelector('.jsBurgerContent');
    var jsBurgerTrigger = document.querySelector('.jsBurgerTrigger');
    var body = document.querySelector('body');
    var rotateIndex = 0;
    jsBurgerTrigger.addEventListener('click', function () {
      if (jsHeader.classList.contains('is-active')) {
        headerClose();
      } else {
        jsHeader.classList.add('is-active');
        jsHeaderMenu.classList.add('is-active');
        jsBurgerTrigger.classList.add('is-active');
        body.classList.add('_lock');
        rotateIndex = rotateTrigger(rotateIndex);
      }
    });
    document.addEventListener('click', function (e) {
      var target = e.target;

      if (jsHeader.classList.contains('is-active')) {
        if (!target.closest('.jsHeader')) {
          headerClose();
        }
      }
    });
    document.addEventListener('scroll', function () {
      if (window.pageYOffset >= windowHeight * 0.25) {
        jsHeader.classList.add('is-fixed');
      } else {
        jsHeader.classList.remove('is-fixed');
      }
    });
  }
}); // function headerFixedToggle() {
// 	let header = document.querySelector('.jsHeader');
// 	let	headerSourceBottom = document.querySelector('.jsHeader').clientHeight;
//     console.log(headerSourceBottom);
// 	if (header.classList.contains('is-fixed') && window.pageYOffset < headerSourceBottom) {
// 		header.classList.remove('is-fixed');
// 	} else if (window.pageYOffset > headerSourceBottom) {
// 		header.classList.add('is-fixed');
// 	}
// }
// document.addEventListener('DOMContentLoaded', function(){
// 	headerFixedToggle();
// })
// window.addEventListener('scroll', function() {
//     headerFixedToggle();
// });

/***/ }),

/***/ 410:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.jsPreloader')) {
    var img_load = function img_load() {
      progress += percent;
      loadedImg++;
      unlock(progress, loadedImg);
    };

    var unlock = function unlock(progress, loadedImg) {
      preloaderPercentage.innerHTML = Math.round(progress) + ' %';
      preloaderShadow.style.opacity = Math.round(progress) / 100;

      if (progress >= 100 || loadedImg == imagesCount) {
        setTimeout(function () {
          preloader.classList.add('is-loaded');
          body.classList.remove('is-loaded');
        }, 250);
      }
    };

    var preloader = document.querySelector('.jsPreloader');
    var preloaderPercentage = document.querySelector('.jsPreloaderPercentage');
    var preloaderShadow = document.querySelector('.jsPreloaderShadow');
    var imagesCount = document.querySelectorAll('img').length;
    var body = document.querySelector('body');
    var percent = 100 / imagesCount;
    var progress = 0;
    var loadedImg = 0;
    body.classList.add('is-loaded');
    preloaderShadow.style.opacity = '0';
    setTimeout(function () {
      if (imagesCount != 0) {
        for (var i = 0; i < imagesCount; i++) {
          var img_copy = new Image();
          img_copy.src = document.images[i].src;
          img_copy.onload = img_load;
          img_copy.onerror = img_load;
        }
      } else {
        progress = 100;
        loadedImg;
        unlock(progress, loadedImg);
      }
    }, 500);
  }
});

/***/ }),

/***/ 363:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.jsSrollItem')) {
    var scrollItem = document.querySelector('.jsSrollItem');
    document.addEventListener('scroll', function () {
      var angle = window.pageYOffset / 10;
      scrollItem.style.transform = 'rotate(' + angle + 'deg)';
    });
  }
});

/***/ }),

/***/ 334:
/***/ (function() {

var serviceCards = document.querySelectorAll('.jsCardService');

var _loop = function _loop(index) {
  var element = serviceCards[index];
  var trigger = element.querySelector('.jsCardServiceTrigger');
  trigger.addEventListener('click', function () {
    if (element.classList.contains('is-active')) {
      removeClasses();
    } else {
      removeClasses();
      element.classList.add('is-active');
    }
  });

  function removeClasses() {
    var cards = document.querySelectorAll('.jsCardService');

    for (var _index = 0; _index < cards.length; _index++) {
      var _element = cards[_index];

      _element.classList.remove('is-active');
    }
  }
};

for (var index = 0; index < serviceCards.length; index++) {
  _loop(index);
}

/***/ }),

/***/ 235:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/gsap/index.js + 2 modules
var gsap = __webpack_require__(358);
// EXTERNAL MODULE: ./node_modules/gsap/ScrollTrigger.js + 1 modules
var ScrollTrigger = __webpack_require__(92);
// EXTERNAL MODULE: ./node_modules/gsap/ScrollToPlugin.js
var ScrollToPlugin = __webpack_require__(127);
;// CONCATENATED MODULE: ./src/components/anim/scripts.js



gsap/* gsap.registerPlugin */.p8.registerPlugin(ScrollTrigger/* ScrollTrigger */.i, ScrollToPlugin/* ScrollToPlugin */.L);
document.addEventListener('DOMContentLoaded', function () {
  // INTRO
  if (document.querySelector('.section-intro')) {
    var introItems = document.querySelectorAll('.section-intro__item');
    var sectionIntro = document.querySelector('.section-intro');
    var tl = gsap/* gsap.timeline */.p8.timeline();

    for (var index = 0; index < introItems.length; index++) {
      var item = introItems[index];
      tl.fromTo(item, {
        opacity: 0
      }, {
        opacity: 1,
        delay: index * 0.25,
        duration: 0.5
      });
    }

    tl.play().delay(0.5);
  } // PROJECTS


  if (document.querySelector('.section-projects')) {
    var projects = document.querySelectorAll('.card-project');

    var _tl = gsap/* gsap.timeline */.p8.timeline();

    for (var _index = 0; _index < projects.length; _index++) {
      var _item = projects[_index];

      var img = _item.querySelector('.card-project__img');

      var title = _item.querySelector('.card-project__title');

      var text = _item.querySelector('.card-project__text');

      var logo = _item.querySelector('.card-project__logo');

      _tl.fromTo(img, {
        webkitClipPath: 'inset(0% 100% 100% 0%)',
        clipPath: 'inset(0% 100% 100% 0%)'
      }, {
        webkitClipPath: 'inset(0% 0% 0% 0%)',
        clipPath: 'inset(0% 0% 0% 0%)',
        scrollTrigger: {
          trigger: _item,
          scrub: 1,
          start: 'top 95%',
          end: 'top 65%'
        }
      });

      _tl.fromTo(logo, {
        opacity: 0
      }, {
        opacity: 1,
        scrollTrigger: {
          trigger: _item,
          scrub: 1,
          start: 'top 85%',
          end: 'top 65%'
        }
      });

      _tl.fromTo(title, {
        y: -15,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: title,
          scrub: 1.25,
          start: 'top bottom-=10%',
          end: 'top center+=10%'
        }
      });

      _tl.fromTo(text, {
        y: -35,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: text,
          scrub: 1.5,
          start: 'top bottom-=10%',
          end: 'top center+=10%'
        }
      });
    }
  } // SERVICES


  if (document.querySelector('.section-services')) {
    var services = document.querySelectorAll('.card-service');

    var _tl2 = gsap/* gsap.timeline */.p8.timeline();

    for (var _index2 = 0; _index2 < services.length; _index2++) {
      var _item2 = services[_index2];

      _tl2.fromTo(_item2, {
        y: _index2 * 50,
        opacity: 0,
        duration: 1
      }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: _item2,
          scrub: 1,
          start: 'top 90%',
          end: 'top 70%'
        }
      });
    }
  } // REASONS


  if (document.querySelector('.section-reasons')) {
    var _tl3 = gsap/* gsap.timeline */.p8.timeline();

    var reasons = document.querySelectorAll('.section-reasons__item');
    var jsReasonsTitle = document.querySelector('.jsReasonsTitle');
    var titleIcon = jsReasonsTitle.querySelector('.icon');
    var sectionReasons = document.querySelector('.section-reasons');
    var reasonsList = document.querySelector('.section-reasons__list');

    _tl3.fromTo(titleIcon, {
      x: 100
    }, {
      delay: 0.5,
      x: 0,
      scrollTrigger: {
        trigger: sectionReasons,
        start: 'top 75%'
      }
    });

    _tl3.fromTo(titleIcon, {
      fill: '#262626',
      duration: 0.5
    }, {
      fill: '#C34F44',
      delay: 0.5,
      scrollTrigger: {
        trigger: sectionReasons,
        start: 'top 75%'
      }
    });

    _tl3.fromTo(sectionReasons, {
      color: '#262626',
      backgroundColor: '#F6F6F6',
      duration: 0.5
    }, {
      delay: 1.25,
      color: '#fff',
      backgroundColor: '#151515',
      scrollTrigger: {
        trigger: sectionReasons,
        start: 'top 75%'
      }
    });

    _tl3.fromTo(reasonsList, {
      marginTop: 250
    }, {
      marginTop: 0,
      scrollTrigger: {
        trigger: sectionReasons,
        start: 'top 65%',
        end: 'top 35%',
        scrub: 1
      }
    });

    for (var _index3 = 0; _index3 < reasons.length; _index3++) {
      var _item3 = reasons[_index3];

      _tl3.fromTo(_item3, {
        top: _index3 == 0 ? _index3 * 100 + 200 : _index3 * 492
      }, {
        top: _index3 * 100,
        delay: 2,
        scrollTrigger: {
          trigger: reasonsList,
          start: 'top ' + (95 - _index3 * 7.5) + '%',
          end: 'top ' + (60 - _index3 * 7.5) + '%',
          scrub: 1
        }
      });
    }
  } // BITRIX


  if (document.querySelector('.section-bitrix')) {
    var _tl4 = gsap/* gsap.timeline */.p8.timeline();

    var bitrixItems = document.querySelectorAll('.section-bitrix__item');
    var jsBitrixTitle = document.querySelector('.jsBitrixTitle');
    var sectionBitrix = document.querySelector('.section-bitrix');

    _tl4.to(jsBitrixTitle, {
      className: 'is-swapped',
      delay: 1,
      scrollTrigger: {
        trigger: sectionBitrix,
        start: 'top 75%'
      }
    });

    for (var _index4 = 0; _index4 < bitrixItems.length; _index4++) {
      var _item4 = bitrixItems[_index4];

      var content = _item4.querySelector('.section-bitrix__item-content');

      var xStart = '100%';

      if (_index4 == 0) {
        xStart = '-100%';
      } else if (_index4 % 2 == 0) {
        xStart = '-100%';
      }

      _tl4.fromTo(_item4, {
        x: xStart,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: _item4,
          start: 'top bottom',
          end: 'top 75%',
          scrub: true
        }
      });

      _tl4.fromTo(content, {
        opacity: 0
      }, {
        opacity: 1,
        scrollTrigger: {
          trigger: _item4,
          start: 'top 90%',
          end: 'top 50%',
          scrub: true
        }
      });
    }
  } // PRODUCTS


  if (document.querySelector('.section-products')) {
    var _tl5 = gsap/* gsap.timeline */.p8.timeline();

    var products = document.querySelectorAll('.card-product');

    for (var _index5 = 0; _index5 < products.length; _index5++) {
      var _item5 = products[_index5];

      _tl5.fromTo(products[_index5], {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: products[_index5],
          start: '-25% 100%',
          end: 'top 85%',
          scrub: true
        }
      });
    }
  } // if(document.querySelector('.section-services')){
  //     const tl = gsap.timeline();
  // }   
  // if(document.querySelector('.section-services')){
  //     const tl = gsap.timeline();
  // }


  if (document.querySelector('.jsProject')) {
    var _projects = document.querySelectorAll('.jsProject');

    var _loop = function _loop(_index6) {
      var project = _projects[_index6];

      window.onload = function () {
        preloaderReset();
      };

      var introButton = project.querySelector('.jsProjectIntroButton');
      var preloader = project.querySelector('.jsProjectPreloader');
      var preloaderLogo = project.querySelector('.jsProjectPreloaderLogo');
      var body = document.querySelector('body');
      introButton.addEventListener('click', function (e) {
        preloaderReset();
        gsap/* gsap.to */.p8.to(window, {
          duration: 2,
          ease: "expo.inOut",
          scrollTo: preloader
        });
        gsap/* gsap.fromTo */.p8.fromTo(preloaderLogo, {
          opacity: 0
        }, {
          opacity: 1,
          delay: 1.75,
          duration: 1.5,
          ease: "expo.inOut"
        });
        setTimeout(function () {
          gsap/* gsap.to */.p8.to(preloader, {
            opacity: 0,
            duration: 2,
            ease: "expo.inOut"
          });
        }, 3000);
        setTimeout(function () {
          body.classList.remove('is-locked');
        }, 4000);
      });

      function preloaderReset() {
        body.classList.add('is-locked');
        gsap/* gsap.to */.p8.to(preloader, {
          opacity: 1,
          duration: 0
        });
        gsap/* gsap.to */.p8.to(preloaderLogo, {
          opacity: 1,
          duration: 0
        });
      }
    };

    for (var _index6 = 0; _index6 < _projects.length; _index6++) {
      _loop(_index6);
    }
  }

  if (document.querySelector('.richness')) {
    var _tl6 = gsap/* gsap.timeline */.p8.timeline();

    var screen1img = document.querySelector('.richness__screen--1 .richness__screen-img');
    var screen2img = document.querySelector('.richness__screen--2 .richness__screen-img');
    var screen3img = document.querySelector('.richness__screen--3 .richness__screen-img');
    var screen4img = document.querySelector('.richness__screen--4 .richness__screen-img--2');
    var screen5img = document.querySelector('.richness__screen--5 .richness__screen-img');
    var screen6img = document.querySelector('.richness__screen--6 .richness__screen-img');

    _tl6.fromTo(screen1img, {
      x: '-10%'
    }, {
      x: '0%',
      scrollTrigger: {
        trigger: screen1img,
        start: 'top 100%',
        end: 'bottom 0%',
        scrub: 1
      }
    });

    _tl6.fromTo(screen2img, {
      y: '100px'
    }, {
      y: '0%',
      scrollTrigger: {
        trigger: screen2img,
        start: 'top 100%',
        end: 'center 50%',
        scrub: 1
      }
    });

    _tl6.fromTo(screen3img, {
      x: '0%'
    }, {
      x: '-15%',
      scrollTrigger: {
        trigger: screen3img,
        start: 'top 100%',
        end: 'bottom 0%',
        scrub: 1
      }
    });

    _tl6.fromTo(screen4img, {
      y: '100px'
    }, {
      y: '0px',
      scrollTrigger: {
        trigger: screen4img,
        start: 'top 100%',
        end: 'center 50%',
        scrub: 1
      }
    });

    _tl6.fromTo(screen5img, {
      x: '80%'
    }, {
      x: '52%',
      scrollTrigger: {
        trigger: screen5img,
        start: 'top 100%',
        end: 'center 50%',
        scrub: 1
      }
    });

    _tl6.fromTo(screen6img, {
      x: '-48%'
    }, {
      x: '-24%',
      scrollTrigger: {
        trigger: screen6img,
        start: 'top 100%',
        end: 'center 50%',
        scrub: 1
      }
    });
  }
});
// EXTERNAL MODULE: ./src/components/preloader/scripts.js
var scripts = __webpack_require__(410);
// EXTERNAL MODULE: ./src/components/header/scripts.js
var header_scripts = __webpack_require__(450);
// EXTERNAL MODULE: ./node_modules/imask/esm/index.js + 21 modules
var esm = __webpack_require__(647);
;// CONCATENATED MODULE: ./src/components/input/scripts.js

var regexpPhone = new RegExp('(7|8)\\s[\(][0-9]{3}[\)]\\s[0-9]{3}[\-][0-9]{2}[\-][0-9]{2}');
var regexpMail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
var phoneElement = document.querySelectorAll('.jsPhoneMask');
var mailElement = document.querySelectorAll('.jsMailMask');
var phoneMaskSettings = {
  mask: [{
    mask: '8 (000) 000-00-00',
    startsWith: '8',
    lazy: true
  }, {
    mask: '+{7} (000) 000-00-00',
    startsWith: '7',
    lazy: true
  }, {
    mask: '+{7} (000) 000-00-00',
    startsWith: '',
    lazy: true
  }, {
    mask: '+{7} (000) 000-00-00',
    startsWith: '9',
    lazy: true
  }],
  dispatch: function dispatch(appended, dynamicMasked) {
    var number = (dynamicMasked.value + appended).replace(/\D/g, '');
    return dynamicMasked.compiledMasks.find(function (m) {
      return number.indexOf(m.startsWith) === 0;
    }) || this.dynamicMasked.compiledMasks[this.dynamicMasked.compiledMasks.length - 1];
  }
};

if (phoneElement.length > 0) {
  for (var i = 0; i < phoneElement.length; i++) {
    var mask = (0,esm/* default */.ZP)(phoneElement[i], phoneMaskSettings);
  }
}

var jsInput = document.querySelectorAll('.jsInput');

var _loop = function _loop(index) {
  var input = jsInput[index];

  input.onblur = function () {
    window.inputStatusRemove(input, 'focus');
  };

  input.onfocus = function () {
    window.inputStatusAdd(input, 'focus');
    window.inputStatusRemove(input, 'error');
  };
};

for (var index = 0; index < jsInput.length; index++) {
  _loop(index);
} // let mailInputs = document.querySelectorAll('.jsMailMask');
// for (let index = 0; index < mailInputs.length; index++){
//     let input = mailInputs[index];
//     input.addEventListener('input', function(){
//         let result = window.InputCheckMask(input, 'mail');
//         console.log(result);
//     })
// }
// Input status
// Варианты:  'focus' ; 'error' ; 'fill' ; 'ok' ;
// window.inputStatusAdd(input, 'error')
// window.inputStatusRemove(input, 'error')


window.inputStatusAdd = function (input, status) {
  if (input.classList.contains('.input')) {
    input.classList.add('is-' + status);
  } else {
    input.closest('.input').classList.add('is-' + status);
  }
};

window.inputStatusRemove = function (input, status) {
  if (input.classList.contains('.input')) {
    input.classList.remove('is-' + status);
  } else {
    input.closest('.input').classList.remove('is-' + status);
  }
}; // Input masks
// Варианты:  'mail' ; 'phone'
// window.InputCheckMask(input, 'mail')


window.InputCheckMask = function (input, type) {
  if (type === 'mail') {
    // console.log('mail');
    return regexpMail.test(input.value);
  }

  if (type === 'phone') {
    // console.log('phone');
    return regexpPhone.test(input.value);
  }
};

window.runMask = function () {
  var phoneElement = document.querySelectorAll('.jsPhoneMask');
  var phoneMaskSettings = {
    mask: [{
      mask: '8 (000) 000-00-00',
      startsWith: '8',
      lazy: true
    }, {
      mask: '+{7} (000) 000-00-00',
      startsWith: '7',
      lazy: true
    }, {
      mask: '+{7} (000) 000-00-00',
      startsWith: '',
      lazy: true
    }, {
      mask: '+{7} (000) 000-00-00',
      startsWith: '9',
      lazy: true
    }],
    dispatch: function dispatch(appended, dynamicMasked) {
      var number = (dynamicMasked.value + appended).replace(/\D/g, '');
      return dynamicMasked.compiledMasks.find(function (m) {
        return number.indexOf(m.startsWith) === 0;
      }) || this.dynamicMasked.compiledMasks[this.dynamicMasked.compiledMasks.length - 1];
    }
  };

  if (phoneElement.length > 0) {
    for (var _i = 0; _i < phoneElement.length; _i++) {
      var _mask = (0,esm/* default */.ZP)(phoneElement[_i], phoneMaskSettings);
    }
  }
}; // window.runMask() перезвапуск маски
// EXTERNAL MODULE: ./node_modules/swiper/swiper.esm.js + 88 modules
var swiper_esm = __webpack_require__(99);
;// CONCATENATED MODULE: ./src/components/slider/scripts.js
 // const jsSlider = new Swiper('.jsSlider .slider__inner', {
// 	modules: [Navigation, Pagination, Autoplay],
// 	autoplay: {
// 		delay: 5000,
// 	},
// 	pagination: {
// 		el: ".jsSlider .swiper-pagination",
// 		clickable: true,
// 		bulletClass: "slider__pagination-item",
// 	},
//     navigation: {
//         nextEl: '.jsSlider .swiper-button-next',
//         prevEl: '.jsSlider .swiper-button-prev',
//     },
// 	loop: false,
// 	slidesPerView: 4,
// 	speed: 600,
// 	centeredSlides: true,
// 	initialSlide: 1,
// 	breakpoints: {
// 		0:{
// 			spaceBetween: 16,
// 			slidesPerView: 1,
// 		},
// 		576: {
// 			spaceBetween: 16,
// 			slidesPerView: 1,
// 		},
// 		768: {
// 			slidesPerView: "auto",
// 			spaceBetween: 24,
// 		},
// 		992: {
// 			spaceBetween: 24,
// 		},
// 	}
// });

var jsSliderReviews = new swiper_esm/* default */.ZP('.jsSliderReviews .slider__inner', {
  modules: [swiper_esm/* Navigation */.W_, swiper_esm/* Pagination */.tl, swiper_esm/* FreeMode */.Rv, swiper_esm/* EffectCreative */.gI],
  pagination: {
    el: ".jsSliderReviews .swiper-pagination",
    clickable: true,
    bulletClass: "slider__pagination-item"
  },
  loop: true,
  // freeMode: true,
  grabCursor: true,
  effect: "creative",
  slidesPerView: "auto",
  speed: 750,
  creativeEffect: {
    limitProgress: 2,
    prev: {
      translate: ["-125%", 0, 2]
    },
    next: {
      translate: ["50%", 0, -180]
    }
  }
});
var jsSliderAboutServices = new swiper_esm/* default */.ZP('.jsSliderAboutServices .slider__inner', {
  modules: [swiper_esm/* Navigation */.W_, swiper_esm/* Pagination */.tl, swiper_esm/* FreeMode */.Rv, swiper_esm/* EffectCreative */.gI],
  loop: true,
  // freeMode: true,
  grabCursor: true,
  effect: "creative",
  slidesPerView: "auto",
  speed: 750,
  creativeEffect: {
    limitProgress: 3,
    prev: {
      translate: ["-125%", 0, 2]
    },
    next: {
      translate: ['30%', 0, 0]
    }
  }
});
// EXTERNAL MODULE: ./src/components/section/section-services/scripts.js
var section_services_scripts = __webpack_require__(334);
// EXTERNAL MODULE: ./src/components/section/section-intro/scripts.js
var section_intro_scripts = __webpack_require__(363);
;// CONCATENATED MODULE: ./src/init.js










var init = function init() {};

/* harmony default export */ var src_init = (init);
;// CONCATENATED MODULE: ./src/script.js

src_init();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	!function() {
/******/ 		__webpack_require__.j = 940;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			940: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmarkup_starter_kit"] = self["webpackChunkmarkup_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [216], function() { return __webpack_require__(235); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main_script.js.map