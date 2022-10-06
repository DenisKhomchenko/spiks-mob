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

    for (var _index = 0; _index < projects.length; _index++) {
      var _item = projects[_index]; // let img = item.querySelector('.card-project__img');
      // let logo = item.querySelector('.card-project__logo');

      var title = _item.querySelector('.card-project__title');

      var text = _item.querySelector('.card-project__text');

      var _tl = gsap/* gsap.timeline */.p8.timeline();

      _tl.to(_item, {
        scrollTrigger: {
          trigger: _item,
          start: 'top 95%',
          toggleClass: 'is-visible'
        }
      }); // tl.fromTo(
      //     img,
      //     {
      //         webkitClipPath: 'inset(0% 100% 100% 0%)',
      //         clipPath: 'inset(0% 100% 100% 0%)',
      //     },
      //     {
      //         webkitClipPath: 'inset(0% 0% 0% 0%)',
      //         clipPath: 'inset(0% 0% 0% 0%)',
      //         scrollTrigger: {
      //             trigger: item, 
      //             // scrub: 1,
      //             start: 'top 95%',
      //             // end: 'top 65%',
      //             toggleClass: 'is-visible', 
      //         },
      //     },
      // )
      // tl.fromTo(
      //     logo,
      //     {
      //         opacity: 0,
      //     },
      //     {
      //         opacity: 1,
      //         scrollTrigger: {
      //             trigger: item, 
      //             scrub: 1,
      //             start: 'top 85%',
      //             end: 'top 65%',
      //         },
      //     },
      // )


      _tl.fromTo(title, {
        y: -15,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: title,
          scrub: 1.25,
          start: 'top 100%',
          end: 'bottom 80%'
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
          start: 'top 100%',
          end: 'bottom 80%'
        }
      });
    }
  } // SERVICES


  if (document.querySelector('.section-services')) {
    var services = document.querySelectorAll('.card-service');

    for (var _index2 = 0; _index2 < services.length; _index2++) {
      var _item2 = services[_index2];

      var _tl2 = gsap/* gsap.timeline */.p8.timeline();

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
    }); // tl.fromTo(
    //     reasonsList,
    //     {
    //         marginTop: 500,
    //         // y:0,
    //     },
    //     {
    //         marginTop:0,
    //         // y: -50,
    //         scrollTrigger: {
    //             trigger: reasonsList, 
    //             start: 'top 100%',
    //             end: 'top 65%',
    //             scrub: 1,
    //         },
    //     },
    // )


    for (var _index3 = 0; _index3 < reasons.length; _index3++) {
      var _item3 = reasons[_index3];

      _tl3.fromTo(_item3, {
        // top: (index == 0 ? (index * 100 + 200) : (index * 492))
        marginTop: 492
      }, {
        // top: (index * 100),
        marginTop: 0,
        delay: 2,
        scrollTrigger: {
          trigger: _item3,
          // start: 'top ' + (95 - index * 7.5) +'%',
          // end: 'top ' + (60 - index * 7.5) +'%',
          start: 'top 100%',
          end: 'top 50%',
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
    var products = document.querySelectorAll('.card-product');

    for (var _index5 = 0; _index5 < products.length; _index5++) {
      var _item5 = products[_index5];

      var _tl5 = gsap/* gsap.timeline */.p8.timeline();

      _tl5.to(_item5, {
        scrollTrigger: {
          trigger: _item5,
          start: 'top 85%',
          scrub: true,
          toggleClass: 'is-visible'
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
        gsap/* gsap.to */.p8.to(window, {
          duration: 0.1,
          scrollTo: 0
        });
        preloaderReset();
      };

      var introButton = project.querySelector('.jsProjectIntroButton');
      var preloader = project.querySelector('.jsProjectPreloader');
      var preloaderLogo = project.querySelector('.jsProjectPreloaderLogo');
      var content = project.querySelector('.jsProjectContent');
      var body = document.querySelector('body');
      introButton.addEventListener('click', function (e) {
        if (project.querySelector('.jsProjectPreloader')) {
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
            gsap/* gsap.to */.p8.to(preloaderLogo, {
              opacity: 0,
              duration: 1.5,
              ease: "expo.inOut"
            });
          }, 3500);
          setTimeout(function () {
            gsap/* gsap.to */.p8.to(preloader, {
              opacity: 0,
              duration: 1.5,
              ease: "expo.inOut"
            });
          }, 3750);
          setTimeout(function () {
            body.style = '';
          }, 4750);
        } else {
          gsap/* gsap.to */.p8.to(window, {
            duration: 2,
            ease: "expo.inOut",
            scrollTo: content
          });
          setTimeout(function () {
            body.style = '';
          }, 2000);
        }
      });

      function preloaderReset() {
        body.style.overflow = 'hidden';

        if (project.querySelector('.jsProjectPreloader')) {
          gsap/* gsap.to */.p8.to(preloader, {
            opacity: 1,
            duration: 0
          });
          gsap/* gsap.to */.p8.to(preloaderLogo, {
            opacity: 1,
            duration: 0
          });
        }
      }
    };

    for (var _index6 = 0; _index6 < _projects.length; _index6++) {
      _loop(_index6);
    }
  }

  if (document.querySelector('.richness')) {
    var _tl6 = gsap/* gsap.timeline */.p8.timeline();

    var typograpyImg = document.querySelector('.richness__typography-img');
    var screen1img = document.querySelector('.richness__screen--1 .richness__img');
    var screen2img = document.querySelector('.richness__screen--2 .richness__img-wrapper');
    var screen3img = document.querySelector('.richness__screen--3 .richness__img');
    var screen4img = document.querySelector('.richness__screen--4 .richness__img-wrapper');
    var screen5img1 = document.querySelector('.richness__screen--5 .richness__img-wrapper--1');
    var screen5img2 = document.querySelector('.richness__screen--5 .richness__img-wrapper--2');

    _tl6.fromTo(typograpyImg, {
      y: '100px',
      opacity: 0
    }, {
      y: '0%',
      opacity: 1,
      scrollTrigger: {
        trigger: typograpyImg,
        start: 'top 100%',
        end: 'center 50%',
        scrub: 1
      }
    });

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

    _tl6.fromTo(screen5img1, {
      x: '60%'
    }, {
      x: '40%',
      scrollTrigger: {
        trigger: screen5img1,
        start: 'top 100%',
        end: 'center 50%',
        scrub: 1
      }
    });

    _tl6.fromTo(screen5img2, {
      x: '-52%'
    }, {
      x: '-32%',
      scrollTrigger: {
        trigger: screen5img2,
        start: 'top 100%',
        end: 'center 50%',
        scrub: 1
      }
    });
  }

  if (document.querySelector('.olympia')) {
    var _tl7 = gsap/* gsap.timeline */.p8.timeline();

    var screen1img1 = document.querySelector('.olympia__screen--1 .olympia__img--1');
    var screen1img2 = document.querySelector('.olympia__screen--1 .olympia__img--2');
    var typographyImg = document.querySelector('.olympia__screen--typography .olympia__typography-img');
    var typographyColorsWrapper = document.querySelector('.olympia__typography-colors');
    var typographyColors = document.querySelectorAll('.olympia__typography-color');

    var _screen2img = document.querySelector('.olympia__screen--2 .olympia__img');

    var _screen3img = document.querySelectorAll('.olympia__screen--3 .olympia__img');

    var _screen4img = document.querySelector('.olympia__screen--4 .olympia__img');

    _tl7.fromTo(screen1img1, {
      x: '-20%'
    }, {
      x: '0%',
      scrollTrigger: {
        trigger: screen1img1,
        start: 'top 100%',
        end: '25% 50%',
        scrub: 1
      }
    });

    _tl7.fromTo(screen1img2, {
      x: '35%'
    }, {
      x: '0%',
      scrollTrigger: {
        trigger: screen1img2,
        start: 'top 100%',
        end: 'center 50%',
        scrub: 1
      }
    });

    _tl7.fromTo(typographyImg, {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: typographyImg,
        start: 'top 100%',
        end: 'center 50%',
        scrub: 1
      }
    });

    for (var _index7 = 0; _index7 < typographyColors.length; _index7++) {
      var _item6 = typographyColors[_index7];

      _tl7.fromTo(_item6, {
        scale: 0,
        y: 25
      }, {
        scale: 1,
        y: 0,
        scrollTrigger: {
          trigger: typographyColorsWrapper,
          start: 'top ' + (100 - _index7 * 10) + '%',
          end: 'bottom ' + (85 - _index7 * 10) + '%',
          scrub: true
        }
      });
    }

    _tl7.fromTo(_screen2img, {
      y: '100px'
    }, {
      y: '0%',
      scrollTrigger: {
        trigger: _screen2img,
        start: 'top 100%',
        end: 'center 50%',
        scrub: 1
      }
    });

    for (var _index8 = 0; _index8 < _screen3img.length; _index8++) {
      var _item7 = _screen3img[_index8];

      _tl7.fromTo(_item7, {
        marginTop: 50 + _index8 * 50 // opacity: 0,

      }, {
        marginTop: 0,
        // opacity: 1,
        scrollTrigger: {
          trigger: _item7,
          start: 'top 100%',
          end: 'center 50%',
          scrub: true
        }
      });
    }

    _tl7.fromTo(_screen4img, {
      y: 30
    }, {
      y: 0,
      scrollTrigger: {
        trigger: _screen4img,
        start: 'top 100%',
        end: 'bottom 100%',
        scrub: 1
      }
    });
  }

  if (document.querySelector('.fidesco')) {
    var _tl8 = gsap/* gsap.timeline */.p8.timeline();

    var _screen1img = document.querySelector('.fidesco__screen--1 .fidesco__img--2');

    var _screen1img2 = document.querySelector('.fidesco__screen--1 .fidesco__img--4');

    var _typographyImg = document.querySelector('.fidesco__screen--typography .fidesco__typography-img');

    var _typographyColorsWrapper = document.querySelector('.fidesco__typography-colors');

    var _typographyColors = document.querySelectorAll('.fidesco__typography-color');

    var screen2imgs = document.querySelectorAll('.fidesco__screen--2 .fidesco__img-wrapper');

    _tl8.fromTo(_typographyImg, {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: _typographyImg,
        start: 'top 100%',
        end: 'center 50%',
        scrub: 1
      }
    });

    for (var _index9 = 0; _index9 < _typographyColors.length; _index9++) {
      var _item8 = _typographyColors[_index9];

      _tl8.fromTo(_item8, {
        // y: (50 + (index * 50)),
        // backgroundColor: '#fff',
        opacity: 0
      }, {
        // backgroundColor: 'initial',
        // y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: _item8,
          start: 'top 100%',
          end: 'top 75%',
          scrub: true
        }
      });
    }

    _tl8.fromTo(_screen1img, {
      y: 50
    }, {
      y: -20,
      scrollTrigger: {
        trigger: _screen1img,
        start: 'top 100%',
        end: 'bottom 50%',
        scrub: 1
      }
    });

    _tl8.fromTo(_screen1img2, {
      y: 50
    }, {
      y: -20,
      scrollTrigger: {
        trigger: _screen1img2,
        start: 'top 100%',
        end: 'bottom 50%',
        scrub: 1
      }
    });

    for (var _index10 = 0; _index10 < screen2imgs.length; _index10++) {
      var _item9 = screen2imgs[_index10];
      var _xStart = '15%';

      if (_index10 == 0) {
        _xStart = '-15%';
      } else if (_index10 % 2 == 0) {
        _xStart = '-15%';
      }

      _tl8.fromTo(_item9, {
        x: _xStart
      }, {
        x: 0,
        scrollTrigger: {
          trigger: _item9,
          start: 'top 100%',
          end: 'center 50%',
          scrub: true
        }
      });
    }
  }

  if (document.querySelector('.bonagarden')) {
    var _tl9 = gsap/* gsap.timeline */.p8.timeline();

    var _screen1img3 = document.querySelector('.bonagarden__screen--1 .bonagarden__img-wrapper');

    var _typographyImg2 = document.querySelector('.bonagarden__screen--typography .bonagarden__typography-img');

    var _typographyColors2 = document.querySelectorAll('.bonagarden__typography-color');

    var _screen2imgs = document.querySelectorAll('.bonagarden__screen--2 .bonagarden__img-wrapper');

    var screen3imgs = document.querySelectorAll('.bonagarden__screen--3 .bonagarden__img');
    var screen4imgs = document.querySelectorAll('.bonagarden__screen--4 .bonagarden__img-wrapper');

    _tl9.fromTo(_screen1img3, {
      y: 50
    }, {
      y: -20,
      scrollTrigger: {
        trigger: _screen1img3,
        start: 'top 100%',
        end: 'bottom 50%',
        scrub: 1
      }
    });

    _tl9.fromTo(_typographyImg2, {
      y: -50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: _typographyImg2,
        start: 'top 100%',
        end: 'center 50%',
        scrub: 1
      }
    });

    for (var _index11 = 0; _index11 < _typographyColors2.length; _index11++) {
      var _item10 = _typographyColors2[_index11];

      _tl9.fromTo(_item10, {
        y: 30,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: _item10,
          start: 'top ' + (100 - _index11 * 5) + '%',
          end: 'top ' + (85 - _index11 * 5) + '%',
          scrub: true
        }
      });
    }

    for (var _index12 = 0; _index12 < _screen2imgs.length; _index12++) {
      var _item11 = _screen2imgs[_index12];

      _tl9.fromTo(_item11, {
        y: 80,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: _item11,
          start: 'top 100%',
          end: 'center 50%',
          scrub: true
        }
      });
    }

    for (var _index13 = 0; _index13 < screen3imgs.length; _index13++) {
      var _item12 = screen3imgs[_index13];

      _tl9.fromTo(_item12, {
        y: 30,
        scale: 0.9,
        opacity: 0
      }, {
        y: 0,
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: _item12,
          start: 'top 100%',
          end: 'center 75%',
          scrub: true
        }
      });
    }

    for (var _index14 = 0; _index14 < screen4imgs.length; _index14++) {
      var _item13 = screen4imgs[_index14];
      var _xStart2 = '25%';

      if (_index14 == 0) {
        _xStart2 = '-25%';
      } else if (_index14 % 2 == 0) {
        _xStart2 = '-25%';
      }

      _tl9.fromTo(_item13, {
        x: _xStart2,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: _item13,
          start: 'top 100%',
          end: 'center 50%',
          scrub: true
        }
      });
    }
  }

  if (document.querySelector('.getman')) {
    var _tl10 = gsap/* gsap.timeline */.p8.timeline();

    var _screen1img4 = document.querySelector('.getman__screen--1 .getman__img-wrapper');

    var _typographyImg3 = document.querySelector('.getman__screen--typography .getman__typography-img');

    var _typographyColors3 = document.querySelectorAll('.getman__typography-color');

    var _screen2imgs2 = document.querySelectorAll('.getman__screen--2 .getman__img-wrapper .getman__img');

    var screen3img1 = document.querySelector('.getman__screen--3 .getman__img--1');
    var screen3img2 = document.querySelector('.getman__screen--3 .getman__img--5');

    var _screen3imgs = document.querySelectorAll('.getman__screen--3 .getman__img-wrapper .getman__img');

    _tl10.fromTo(_screen1img4, {
      y: 50,
      scale: 0.9,
      opacity: 0
    }, {
      y: 0,
      scale: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: _screen1img4,
        start: 'top 100%',
        end: 'top 50%',
        scrub: 1
      }
    });

    _tl10.fromTo(_typographyImg3, {
      y: -50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: _typographyImg3,
        start: 'top 100%',
        end: 'top 65%',
        scrub: 1
      }
    });

    for (var _index15 = 0; _index15 < _typographyColors3.length; _index15++) {
      var _item14 = _typographyColors3[_index15];

      _tl10.fromTo(_item14, {
        scale: 1.2,
        opacity: 0
      }, {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: _item14,
          start: 'top 90%',
          end: 'bottom 85%',
          scrub: true
        }
      });
    }

    for (var _index16 = 0; _index16 < _screen2imgs2.length; _index16++) {
      var _item15 = _screen2imgs2[_index16];

      _tl10.fromTo(_item15, {
        y: 50,
        scale: 1.2,
        opacity: 0
      }, {
        y: 0,
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: _item15,
          start: 'top 100%',
          end: 'center 50%',
          scrub: true
        }
      });
    }

    _tl10.fromTo(screen3img1, {
      y: 30,
      scale: 1.2,
      opacity: 0
    }, {
      y: 0,
      scale: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: screen3img1,
        start: 'top 100%',
        end: 'center 50%',
        scrub: true
      }
    });

    _tl10.fromTo(screen3img2, {
      x: '30%',
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: screen3img2,
        start: 'top 95%',
        end: 'top 65%',
        scrub: true
      }
    });

    for (var _index17 = 0; _index17 < _screen3imgs.length; _index17++) {
      var _item16 = _screen3imgs[_index17];

      _tl10.fromTo(_item16, {
        x: '-30%',
        scale: 0.8,
        opacity: 0
      }, {
        x: 0,
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: _item16,
          start: 'top 100%',
          end: 'center 75%',
          scrub: true
        }
      });
    }
  }

  if (document.querySelector('.wedu')) {
    var _tl11 = gsap/* gsap.timeline */.p8.timeline();

    var _screen1img5 = document.querySelector('.wedu__screen--1 .wedu__img-wrapper');

    var _typographyImg4 = document.querySelector('.wedu__screen--typography .wedu__typography-img');

    var _typographyColors4 = document.querySelectorAll('.wedu__typography-color');

    var screen2img1 = document.querySelector('.wedu__screen--2 .wedu__img-wrapper--1');
    var screen2img2 = document.querySelector('.wedu__screen--2 .wedu__img-wrapper--2');

    var _screen3img2 = document.querySelector('.wedu__screen--3 .wedu__img--1');

    var _screen4imgs = document.querySelectorAll('.wedu__screen--4 .wedu__img');

    _tl11.fromTo(_typographyImg4, {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: _typographyImg4,
        start: 'top 100%',
        end: 'top 65%',
        scrub: 1
      }
    });

    for (var _index18 = 0; _index18 < _typographyColors4.length; _index18++) {
      var _item17 = _typographyColors4[_index18];

      _tl11.fromTo(_item17, {
        scale: 1.2,
        opacity: 0
      }, {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: _item17,
          start: 'top ' + (95 - _index18 * 5) + '%',
          end: 'top ' + (80 - _index18 * 5) + '%',
          scrub: true
        }
      });
    }

    _tl11.fromTo(_screen1img5, {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: _screen1img5,
        start: 'top 100%',
        end: 'top 65%',
        scrub: 1
      }
    });

    _tl11.fromTo(screen2img1, {
      y: 50,
      scale: 0.7
    }, {
      y: 0,
      scale: 1,
      scrollTrigger: {
        trigger: screen2img1,
        start: 'top 100%',
        end: 'center 50%',
        scrub: true
      }
    });

    _tl11.fromTo(screen2img1.querySelector('img'), {
      rotate: 0
    }, {
      rotate: 220,
      ease: 'none',
      scrollTrigger: {
        trigger: screen2img1.querySelector('img'),
        start: 'top 100%',
        end: 'bottom 0%',
        scrub: true
      }
    });

    _tl11.fromTo(screen2img2, {
      y: 50,
      scale: 1.2
    }, {
      y: 0,
      scale: 1,
      scrollTrigger: {
        trigger: screen2img2,
        start: 'top 100%',
        end: 'center 50%',
        scrub: true
      }
    });

    _tl11.fromTo(_screen3img2, {
      scale: 1.2
    }, {
      scale: 1,
      scrollTrigger: {
        trigger: _screen3img2,
        start: 'top 100%',
        end: 'bottom 50%',
        scrub: true
      }
    });

    for (var _index19 = 0; _index19 < _screen4imgs.length; _index19++) {
      var _item18 = _screen4imgs[_index19];

      _tl11.fromTo(_item18, {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: _item18,
          start: 'top 100%',
          end: 'center 75%',
          scrub: true
        }
      });
    }
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