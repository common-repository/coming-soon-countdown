/*!jQuery preloader*/
(function (a) {
    var b = new Array(),
        c = new Array(),
        d = function () {},
        e = 0;
    var f = { splashVPos: "35%", loaderVPos: "75%", splashID: "#jpreContent", showSplash: true, showPercentage: true, autoClose: true, closeBtnText: "Start!", onetimeLoad: false, debugMode: false, splashFunction: function () {} };
    var g = function () {
        if (f.onetimeLoad) {
            var a = document.cookie.split("; ");
            for (var b = 0, c; (c = a[b] && a[b].split("=")); b++) {
                if (c.shift() === "jpreLoader") {
                    return c.join("=");
                }
            }
            return false;
        } else {
            return false;
        }
    };
    var h = function (a) {
        if (f.onetimeLoad) {
            var b = new Date();
            b.setDate(b.getDate() + a);
            var c = a == null ? "" : "expires=" + b.toUTCString();
            document.cookie = "jpreLoader=loaded; " + c;
        }
    };
    var i = function () {
        jOverlay = a("<div></div>").attr("id", "jpreOverlay").css({ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 9999999 }).appendTo("body");
        if (f.showSplash) {
            jContent = a("<div></div>").attr("id", "jpreSlide").appendTo(jOverlay);
            var b = a(window).width() - a(jContent).width();
            a(jContent).css({ position: "absolute", top: f.splashVPos, left: Math.round((50 / a(window).width()) * b) + "%" });
            a(jContent).html(a(f.splashID).wrap("<div/>").parent().html());
            a(f.splashID).remove();
            f.splashFunction();
        }
        jLoader = a("<div></div>").attr("id", "jpreLoader").appendTo(jOverlay);
        var c = a(window).width() - a(jLoader).width();
        a(jLoader).css({ position: "absolute", top: f.loaderVPos, left: Math.round((50 / a(window).width()) * c) + "%" });
        jBar = a("<div></div>").attr("id", "jpreBar").css({ width: "0%", height: "100%" }).appendTo(jLoader);
        if (f.showPercentage) {
            jPer = a("<div></div>").attr("id", "jprePercentage").css({ position: "relative", height: "100%" }).appendTo(jLoader).html("Loading...");
        }
        if (!f.autoclose) {
            jButton = a("<div></div>")
                .attr("id", "jpreButton")
                .on("click", function () {
                    n();
                })
                .css({ position: "relative", height: "100%" })
                .appendTo(jLoader)
                .text(f.closeBtnText)
                .hide();
        }
    };
    var j = function (c) {
        a(c)
            .find("*:not(script)")
            .each(function () {
                var c = "";
                if (a(this).css("background-image").indexOf("none") == -1 && a(this).css("background-image").indexOf("-gradient") == -1) {
                    c = a(this).css("background-image");
                    if (c.indexOf("url") != -1) {
                        var d = c.match(/url\((.*?)\)/);
                        c = d[1].replace(/\"/g, "");
                    }
                } else if (a(this).get(0).nodeName.toLowerCase() == "img" && typeof a(this).attr("src") != "undefined") {
                    c = a(this).attr("src");
                }
                if (c.length > 0) {
                    b.push(c);
                }
            });
    };
    var k = function () {
        for (var a = 0; a < b.length; a++) {
            if (l(b[a]));
        }
    };
    var l = function (b) {
        var d = new Image();
        a(d)
            jQuery(window).on('load', function () {
                m();
            })

           /* .error(function () {
                 c.push(a(this).attr("src"));
                 m();
            })*/
            
            jQuery(window).attr("src", b);
    };
    var m = function () {
        e++;
        var c = Math.round((e / b.length) * 100);
        a(jBar)
            .stop()
            .animate({ width: c + "%" }, 500, "linear");
        if (f.showPercentage) {
            a(jPer).text(c + "%");
        }
        if (e >= b.length) {
            e = b.length;
            h();
            if (f.showPercentage) {
                a(jPer).text("100%");
            }
            if (f.debugMode) {
                var d = o();
            }
            a(jBar)
                .stop()
                .animate({ width: "100%" }, 500, "linear", function () {
                    if (f.autoClose) n();
                    else a(jButton).fadeIn(1e3);
                });
        }
    };
    var n = function () {
        a(jOverlay).fadeOut(800, function () {
            a(jOverlay).remove();
            d();
        });
    };
    var o = function () {
        if (c.length > 0) {
            var a = "ERROR - IMAGE FILES MISSING!!!\n\r";
            a += c.length + " image files cound not be found. \n\r";
            a += "Please check your image paths and filenames:\n\r";
            for (var b = 0; b < c.length; b++) {
                a += "- " + c[b] + "\n\r";
            }
            return true;
        } else {
            return false;
        }
    };
    a.fn.jpreLoader = function (b, c) {
        if (b) {
            a.extend(f, b);
        }
        if (typeof c == "function") {
            d = c;
        }
        a("body").css({ display: "block" });
        return this.each(function () {
            if (!g()) {
                i();
                j(this);
                k();
            } else {
                a(f.splashID).remove();
                d();
            }
        });
    };
})(jQuery);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 */
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g);
    },
    easeInQuad: function (e, f, a, h, g) {
        return h * (f /= g) * f + a;
    },
    easeOutQuad: function (e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a;
    },
    easeInOutQuad: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return (h / 2) * f * f + a;
        }
        return (-h / 2) * (--f * (f - 2) - 1) + a;
    },
    easeInCubic: function (e, f, a, h, g) {
        return h * (f /= g) * f * f + a;
    },
    easeOutCubic: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a;
    },
    easeInOutCubic: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return (h / 2) * f * f * f + a;
        }
        return (h / 2) * ((f -= 2) * f * f + 2) + a;
    },
    easeInQuart: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a;
    },
    easeOutQuart: function (e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a;
    },
    easeInOutQuart: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return (h / 2) * f * f * f * f + a;
        }
        return (-h / 2) * ((f -= 2) * f * f * f - 2) + a;
    },
    easeInQuint: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a;
    },
    easeOutQuint: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a;
    },
    easeInOutQuint: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return (h / 2) * f * f * f * f * f + a;
        }
        return (h / 2) * ((f -= 2) * f * f * f * f + 2) + a;
    },
    easeInSine: function (e, f, a, h, g) {
        return -h * Math.cos((f / g) * (Math.PI / 2)) + h + a;
    },
    easeOutSine: function (e, f, a, h, g) {
        return h * Math.sin((f / g) * (Math.PI / 2)) + a;
    },
    easeInOutSine: function (e, f, a, h, g) {
        return (-h / 2) * (Math.cos((Math.PI * f) / g) - 1) + a;
    },
    easeInExpo: function (e, f, a, h, g) {
        return f == 0 ? a : h * Math.pow(2, 10 * (f / g - 1)) + a;
    },
    easeOutExpo: function (e, f, a, h, g) {
        return f == g ? a + h : h * (-Math.pow(2, (-10 * f) / g) + 1) + a;
    },
    easeInOutExpo: function (e, f, a, h, g) {
        if (f == 0) {
            return a;
        }
        if (f == g) {
            return a + h;
        }
        if ((f /= g / 2) < 1) {
            return (h / 2) * Math.pow(2, 10 * (f - 1)) + a;
        }
        return (h / 2) * (-Math.pow(2, -10 * --f) + 2) + a;
    },
    easeInCirc: function (e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a;
    },
    easeOutCirc: function (e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a;
    },
    easeInOutCirc: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return (-h / 2) * (Math.sqrt(1 - f * f) - 1) + a;
        }
        return (h / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + a;
    },
    easeInElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e;
        }
        if ((h /= k) == 1) {
            return e + l;
        }
        if (!j) {
            j = k * 0.3;
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4;
        } else {
            var i = (j / (2 * Math.PI)) * Math.asin(l / g);
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin(((h * k - i) * (2 * Math.PI)) / j)) + e;
    },
    easeOutElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e;
        }
        if ((h /= k) == 1) {
            return e + l;
        }
        if (!j) {
            j = k * 0.3;
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4;
        } else {
            var i = (j / (2 * Math.PI)) * Math.asin(l / g);
        }
        return g * Math.pow(2, -10 * h) * Math.sin(((h * k - i) * (2 * Math.PI)) / j) + l + e;
    },
    easeInOutElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e;
        }
        if ((h /= k / 2) == 2) {
            return e + l;
        }
        if (!j) {
            j = k * (0.3 * 1.5);
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4;
        } else {
            var i = (j / (2 * Math.PI)) * Math.asin(l / g);
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin(((h * k - i) * (2 * Math.PI)) / j)) + e;
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin(((h * k - i) * (2 * Math.PI)) / j) * 0.5 + l + e;
    },
    easeInBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158;
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a;
    },
    easeOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158;
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a;
    },
    easeInOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158;
        }
        if ((f /= h / 2) < 1) {
            return (i / 2) * (f * f * (((g *= 1.525) + 1) * f - g)) + a;
        }
        return (i / 2) * ((f -= 2) * f * (((g *= 1.525) + 1) * f + g) + 2) + a;
    },
    easeInBounce: function (e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a;
    },
    easeOutBounce: function (e, f, a, h, g) {
        if ((f /= g) < 1 / 2.75) {
            return h * (7.5625 * f * f) + a;
        } else {
            if (f < 2 / 2.75) {
                return h * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + a;
            } else {
                if (f < 2.5 / 2.75) {
                    return h * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + a;
                } else {
                    return h * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + a;
                }
            }
        }
    },
    easeInOutBounce: function (e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a;
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a;
    },
}); // JavaScript Document

/*
 * Swiper 2.0 - Mobile Touch Slider
 * http://www.idangero.us/sliders/swiper/
 *
 * Copyright 2012-2013, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Updated on: June 9, 2013
 */
var Swiper = function (a, b) {
    function d(a) {
        return document.querySelectorAll ? document.querySelectorAll(a) : jQuery(a);
    }
    function v() {
        var a = h - k;
        return b.freeMode && (a = h - k), b.slidesPerView > e.slides.length && (a = 0), 0 > a && (a = 0), a;
    }
    function x() {
        function f(a) {
            var c = new Image();
            (c.onload = function () {
                e.imagesLoaded++, e.imagesLoaded == e.imagesToLoad.length && (e.reInit(), b.onImagesReady && b.onImagesReady(e));
            }),
                (c.src = a);
        }
        if (
            (e.browser.ie10
                ? (e.h.addEventListener(e.wrapper, e.touchEvents.touchStart, J, !1), e.h.addEventListener(document, e.touchEvents.touchMove, M, !1), e.h.addEventListener(document, e.touchEvents.touchEnd, N, !1))
                : (e.support.touch && (e.h.addEventListener(e.wrapper, "touchstart", J, !1), e.h.addEventListener(e.wrapper, "touchmove", M, !1), e.h.addEventListener(e.wrapper, "touchend", N, !1)),
                  b.simulateTouch && (e.h.addEventListener(e.wrapper, "mousedown", J, !1), e.h.addEventListener(document, "mousemove", M, !1), e.h.addEventListener(document, "mouseup", N, !1))),
            b.autoResize && e.h.addEventListener(window, "resize", e.resizeFix, !1),
            y(),
            (e._wheelEvent = !1),
            b.mousewheelControl)
        ) {
            void 0 !== document.onmousewheel && (e._wheelEvent = "mousewheel");
            try {
                WheelEvent("wheel"), (e._wheelEvent = "wheel");
            } catch (a) {}
            e._wheelEvent || (e._wheelEvent = "DOMMouseScroll"), e._wheelEvent && e.h.addEventListener(e.container, e._wheelEvent, B, !1);
        }
        if ((b.keyboardControl && e.h.addEventListener(document, "keydown", A, !1), b.updateOnImagesReady)) {
            document.querySelectorAll ? (e.imagesToLoad = e.container.querySelectorAll("img")) : window.jQuery && (e.imagesToLoad = d(e.container).find("img"));
            for (var c = 0; e.imagesToLoad.length > c; c++) f(e.imagesToLoad[c].getAttribute("src"));
        }
    }
    function y() {
        if (b.preventLinks) {
            var a = [];
            document.querySelectorAll ? (a = e.container.querySelectorAll("a")) : window.jQuery && (a = d(e.container).find("a"));
            for (var c = 0; a.length > c; c++) e.h.addEventListener(a[c], "click", E, !1);
        }
        if (b.releaseFormElements)
            for (var f = document.querySelectorAll ? e.container.querySelectorAll("input, textarea, select") : d(e.container).find("input, textarea, select"), c = 0; f.length > c; c++)
                e.h.addEventListener(f[c], e.touchEvents.touchStart, F, !0);
        if (b.onSlideClick) for (var c = 0; e.slides.length > c; c++) e.h.addEventListener(e.slides[c], "click", C, !1);
        if (b.onSlideTouch) for (var c = 0; e.slides.length > c; c++) e.h.addEventListener(e.slides[c], e.touchEvents.touchStart, D, !1);
    }
    function z() {
        if (b.onSlideClick) for (var a = 0; e.slides.length > a; a++) e.h.removeEventListener(e.slides[a], "click", C, !1);
        if (b.onSlideTouch) for (var a = 0; e.slides.length > a; a++) e.h.removeEventListener(e.slides[a], e.touchEvents.touchStart, D, !1);
        if (b.releaseFormElements)
            for (var c = document.querySelectorAll ? e.container.querySelectorAll("input, textarea, select") : d(e.container).find("input, textarea, select"), a = 0; c.length > a; a++)
                e.h.removeEventListener(c[a], e.touchEvents.touchStart, F, !0);
        if (b.preventLinks) {
            var f = [];
            document.querySelectorAll ? (f = e.container.querySelectorAll("a")) : window.jQuery && (f = d(e.container).find("a"));
            for (var a = 0; f.length > a; a++) e.h.removeEventListener(f[a], "click", E, !1);
        }
    }
    function A(a) {
        var b = a.keyCode || a.charCode;
        if (37 == b || 39 == b || 38 == b || 40 == b) {
            for (
                var c = !1,
                    d = e.h.getOffset(e.container),
                    f = e.h.windowScroll().left,
                    g = e.h.windowScroll().top,
                    h = e.h.windowWidth(),
                    i = e.h.windowHeight(),
                    j = [
                        [d.left, d.top],
                        [d.left + e.width, d.top],
                        [d.left, d.top + e.height],
                        [d.left + e.width, d.top + e.height],
                    ],
                    k = 0;
                j.length > k;
                k++
            ) {
                var l = j[k];
                l[0] >= f && f + h >= l[0] && l[1] >= g && g + i >= l[1] && (c = !0);
            }
            if (!c) return;
        }
        o
            ? ((37 == b || 39 == b) && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)), 39 == b && e.swipeNext(), 37 == b && e.swipePrev())
            : ((38 == b || 40 == b) && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)), 40 == b && e.swipeNext(), 38 == b && e.swipePrev());
    }
    function B(a) {
        var d,
            c = e._wheelEvent;
        if ((a.detail ? (d = -a.detail) : "mousewheel" == c ? (d = a.wheelDelta) : "DOMMouseScroll" == c ? (d = -a.detail) : "wheel" == c && (d = Math.abs(a.deltaX) > Math.abs(a.deltaY) ? -a.deltaX : -a.deltaY), b.freeMode)) {
            o ? e.getWrapperTranslate("x") : e.getWrapperTranslate("y");
            var g, h;
            o
                ? ((g = e.getWrapperTranslate("x") + d), (h = e.getWrapperTranslate("y")), g > 0 && (g = 0), -v() > g && (g = -v()))
                : ((g = e.getWrapperTranslate("x")), (h = e.getWrapperTranslate("y") + d), h > 0 && (h = 0), -v() > h && (h = -v())),
                e.setWrapperTransition(0),
                e.setWrapperTranslate(g, h, 0);
        } else 0 > d ? e.swipeNext() : e.swipePrev();
        return b.autoplay && e.stopAutoplay(), a.preventDefault ? a.preventDefault() : (a.returnValue = !1), !1;
    }
    function C() {
        e.allowSlideClick && ((e.clickedSlide = this), (e.clickedSlideIndex = e.slides.indexOf(this)), b.onSlideClick(e));
    }
    function D() {
        (e.clickedSlide = this), (e.clickedSlideIndex = e.slides.indexOf(this)), b.onSlideTouch(e);
    }
    function E(a) {
        return e.allowLinks ? void 0 : (a.preventDefault ? a.preventDefault() : (a.returnValue = !1), !1);
    }
    function F(a) {
        return a.stopPropagation ? a.stopPropagation() : (a.returnValue = !1), !1;
    }
    function J(a) {
        if ((b.preventLinks && (e.allowLinks = !0), e.isTouched || b.onlyExternal)) return !1;
        if (b.noSwiping && a.target && a.target.className && a.target.className.indexOf(b.noSwipingClass) > -1) return !1;
        if (((I = !1), (e.isTouched = !0), (G = "touchstart" == a.type), !G || 1 == a.targetTouches.length)) {
            b.loop && e.fixLoop(), e.callPlugins("onTouchStartBegin"), G || (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
            var c = G ? a.targetTouches[0].pageX : a.pageX || a.clientX,
                d = G ? a.targetTouches[0].pageY : a.pageY || a.clientY;
            (e.touches.startX = e.touches.currentX = c),
                (e.touches.startY = e.touches.currentY = d),
                (e.touches.start = e.touches.current = o ? c : d),
                e.setWrapperTransition(0),
                (e.positions.start = e.positions.current = o ? e.getWrapperTranslate("x") : e.getWrapperTranslate("y")),
                o ? e.setWrapperTranslate(e.positions.start, 0, 0) : e.setWrapperTranslate(0, e.positions.start, 0),
                (e.times.start = new Date().getTime()),
                (j = void 0),
                b.moveStartThreshold > 0 && (H = !1),
                b.onTouchStart && b.onTouchStart(e),
                e.callPlugins("onTouchStartEnd");
        }
    }
    function M(a) {
        if (e.isTouched && !b.onlyExternal && (!G || "mousemove" != a.type)) {
            var c = G ? a.targetTouches[0].pageX : a.pageX || a.clientX,
                d = G ? a.targetTouches[0].pageY : a.pageY || a.clientY;
            if ((j === void 0 && o && (j = !!(j || Math.abs(d - e.touches.startY) > Math.abs(c - e.touches.startX))), void 0 !== j || o || (j = !!(j || Math.abs(d - e.touches.startY) < Math.abs(c - e.touches.startX))), j))
                return (e.isTouched = !1), void 0;
            if (a.assignedToSwiper) return (e.isTouched = !1), void 0;
            if (((a.assignedToSwiper = !0), (e.isMoved = !0), b.preventLinks && (e.allowLinks = !1), b.onSlideClick && (e.allowSlideClick = !1), b.autoplay && e.stopAutoplay(), !G || 1 == a.touches.length)) {
                if (
                    (e.callPlugins("onTouchMoveStart"),
                    a.preventDefault ? a.preventDefault() : (a.returnValue = !1),
                    (e.touches.current = o ? c : d),
                    (e.positions.current = (e.touches.current - e.touches.start) * b.touchRatio + e.positions.start),
                    e.positions.current > 0 && b.onResistanceBefore && b.onResistanceBefore(e, e.positions.current),
                    e.positions.current < -v() && b.onResistanceBefore && b.onResistanceAfter(e, Math.abs(e.positions.current + v())),
                    b.resistance && "100%" != b.resistance)
                ) {
                    if (e.positions.current > 0) {
                        var f = 1 - e.positions.current / k / 2;
                        e.positions.current = 0.5 > f ? k / 2 : e.positions.current * f;
                    }
                    if (e.positions.current < -v()) {
                        var g = (e.touches.current - e.touches.start) * b.touchRatio + (v() + e.positions.start),
                            f = (k + g) / k,
                            h = e.positions.current - (g * (1 - f)) / 2,
                            i = -v() - k / 2;
                        e.positions.current = i > h || 0 >= f ? i : h;
                    }
                }
                if (
                    (b.resistance &&
                        "100%" == b.resistance &&
                        (e.positions.current > 0 && (!b.freeMode || b.freeModeFluid) && (e.positions.current = 0), e.positions.current < -v() && (!b.freeMode || b.freeModeFluid) && (e.positions.current = -v())),
                    !b.followFinger)
                )
                    return;
                return (
                    b.moveStartThreshold
                        ? Math.abs(e.touches.current - e.touches.start) > b.moveStartThreshold || H
                            ? ((H = !0), o ? e.setWrapperTranslate(e.positions.current, 0, 0) : e.setWrapperTranslate(0, e.positions.current, 0))
                            : (e.positions.current = e.positions.start)
                        : o
                        ? e.setWrapperTranslate(e.positions.current, 0, 0)
                        : e.setWrapperTranslate(0, e.positions.current, 0),
                    (b.freeMode || b.watchActiveIndex) && e.updateActiveSlide(e.positions.current),
                    b.grabCursor && ((e.container.style.cursor = "move"), (e.container.style.cursor = "grabbing"), (e.container.style.cursor = "-moz-grabbin"), (e.container.style.cursor = "-webkit-grabbing")),
                    K || (K = e.touches.current),
                    L || (L = new Date().getTime()),
                    (e.velocity = (e.touches.current - K) / (new Date().getTime() - L) / 2),
                    2 > Math.abs(e.touches.current - K) && (e.velocity = 0),
                    (K = e.touches.current),
                    (L = new Date().getTime()),
                    e.callPlugins("onTouchMoveEnd"),
                    b.onTouchMove && b.onTouchMove(e),
                    !1
                );
            }
        }
    }
    function N() {
        if ((j && e.swipeReset(), !b.onlyExternal && e.isTouched)) {
            (e.isTouched = !1),
                b.grabCursor && ((e.container.style.cursor = "move"), (e.container.style.cursor = "grab"), (e.container.style.cursor = "-moz-grab"), (e.container.style.cursor = "-webkit-grab")),
                e.positions.current || 0 === e.positions.current || (e.positions.current = e.positions.start),
                b.followFinger && (o ? e.setWrapperTranslate(e.positions.current, 0, 0) : e.setWrapperTranslate(0, e.positions.current, 0)),
                (e.times.end = new Date().getTime()),
                (e.touches.diff = e.touches.current - e.touches.start),
                (e.touches.abs = Math.abs(e.touches.diff)),
                (e.positions.diff = e.positions.current - e.positions.start),
                (e.positions.abs = Math.abs(e.positions.diff));
            var c = e.positions.diff,
                d = e.positions.abs,
                f = e.times.end - e.times.start;
            if (
                (5 > d && 300 > f && 0 == e.allowLinks && (b.freeMode || 0 == d || e.swipeReset(), b.preventLinks && (e.allowLinks = !0), b.onSlideClick && (e.allowSlideClick = !0)),
                setTimeout(function () {
                    b.preventLinks && (e.allowLinks = !0), b.onSlideClick && (e.allowSlideClick = !0);
                }, 100),
                !e.isMoved)
            )
                return (e.isMoved = !1), b.onTouchEnd && b.onTouchEnd(e), e.callPlugins("onTouchEnd"), void 0;
            e.isMoved = !1;
            var h = v();
            if (e.positions.current > 0) return e.swipeReset(), b.onTouchEnd && b.onTouchEnd(e), e.callPlugins("onTouchEnd"), void 0;
            if (-h > e.positions.current) return e.swipeReset(), b.onTouchEnd && b.onTouchEnd(e), e.callPlugins("onTouchEnd"), void 0;
            if (b.freeMode) {
                if (b.freeModeFluid) {
                    var q,
                        l = 1e3 * b.momentumRatio,
                        m = e.velocity * l,
                        n = e.positions.current + m,
                        p = !1,
                        r = 20 * Math.abs(e.velocity) * b.momentumBounceRatio;
                    -h > n && (b.momentumBounce && e.support.transitions ? (-r > n + h && (n = -h - r), (q = -h), (p = !0), (I = !0)) : (n = -h)),
                        n > 0 && (b.momentumBounce && e.support.transitions ? (n > r && (n = r), (q = 0), (p = !0), (I = !0)) : (n = 0)),
                        0 != e.velocity && (l = Math.abs((n - e.positions.current) / e.velocity)),
                        o ? e.setWrapperTranslate(n, 0, 0) : e.setWrapperTranslate(0, n, 0),
                        e.setWrapperTransition(l),
                        b.momentumBounce &&
                            p &&
                            e.wrapperTransitionEnd(function () {
                                I && (b.onMomentumBounce && b.onMomentumBounce(e), o ? e.setWrapperTranslate(q, 0, 0) : e.setWrapperTranslate(0, q, 0), e.setWrapperTransition(300));
                            }),
                        e.updateActiveSlide(n);
                }
                return (!b.freeModeFluid || f >= 300) && e.updateActiveSlide(e.positions.current), b.onTouchEnd && b.onTouchEnd(e), e.callPlugins("onTouchEnd"), void 0;
            }
            (i = 0 > c ? "toNext" : "toPrev"), "toNext" == i && 300 >= f && (30 > d || !b.shortSwipes ? e.swipeReset() : e.swipeNext(!0)), "toPrev" == i && 300 >= f && (30 > d || !b.shortSwipes ? e.swipeReset() : e.swipePrev(!0));
            var s = 0;
            if ("auto" == b.slidesPerView) {
                for (var w, t = Math.abs(o ? e.getWrapperTranslate("x") : e.getWrapperTranslate("y")), u = 0, x = 0; e.slides.length > x; x++)
                    if (((w = o ? e.slides[x].getWidth(!0) : e.slides[x].getHeight(!0)), (u += w), u > t)) {
                        s = w;
                        break;
                    }
                s > k && (s = k);
            } else s = g * b.slidesPerView;
            "toNext" == i && f > 300 && (d >= 0.5 * s ? e.swipeNext(!0) : e.swipeReset()), "toPrev" == i && f > 300 && (d >= 0.5 * s ? e.swipePrev(!0) : e.swipeReset()), b.onTouchEnd && b.onTouchEnd(e), e.callPlugins("onTouchEnd");
        }
    }
    function O(a, c, d) {
        function k() {
            (g += h),
                (j = "toNext" == i ? g > a : a > g),
                j
                    ? (o ? e.setWrapperTranslate(Math.round(g), 0) : e.setWrapperTranslate(0, Math.round(g)),
                      (e._DOMAnimating = !0),
                      window.setTimeout(function () {
                          k();
                      }, 1e3 / 60))
                    : (b.onSlideChangeEnd && b.onSlideChangeEnd(e), o ? e.setWrapperTranslate(a, 0) : e.setWrapperTranslate(0, a), (e._DOMAnimating = !1));
        }
        if (e.support.transitions || !b.DOMAnimation) {
            o ? e.setWrapperTranslate(a, 0, 0) : e.setWrapperTranslate(0, a, 0);
            var f = "to" == c && d.speed >= 0 ? d.speed : b.speed;
            e.setWrapperTransition(f);
        } else {
            var g = o ? e.getWrapperTranslate("x") : e.getWrapperTranslate("y"),
                f = "to" == c && d.speed >= 0 ? d.speed : b.speed,
                h = Math.ceil(((a - g) / f) * (1e3 / 60)),
                i = g > a ? "toNext" : "toPrev",
                j = "toNext" == i ? g > a : a > g;
            if (e._DOMAnimating) return;
            k();
        }
        e.updateActiveSlide(a),
            b.onSlideNext && "next" == c && b.onSlideNext(e, a),
            b.onSlidePrev && "prev" == c && b.onSlidePrev(e, a),
            b.onSlideReset && "reset" == c && b.onSlideReset(e, a),
            ("next" == c || "prev" == c || ("to" == c && 1 == d.runCallbacks)) && P();
    }
    function P() {
        if ((e.callPlugins("onSlideChangeStart"), b.onSlideChangeStart))
            if (b.queueStartCallbacks && e.support.transitions) {
                if (e._queueStartCallbacks) return;
                (e._queueStartCallbacks = !0),
                    b.onSlideChangeStart(e),
                    e.wrapperTransitionEnd(function () {
                        e._queueStartCallbacks = !1;
                    });
            } else b.onSlideChangeStart(e);
        if (b.onSlideChangeEnd)
            if (e.support.transitions)
                if (b.queueEndCallbacks) {
                    if (e._queueEndCallbacks) return;
                    (e._queueEndCallbacks = !0), e.wrapperTransitionEnd(b.onSlideChangeEnd);
                } else e.wrapperTransitionEnd(b.onSlideChangeEnd);
            else
                b.DOMAnimation ||
                    setTimeout(function () {
                        b.onSlideChangeEnd(e);
                    }, 10);
    }
    function Q() {
        for (var a = e.paginationButtons, b = 0; a.length > b; b++) e.h.removeEventListener(a[b], "click", S, !1);
    }
    function R() {
        for (var a = e.paginationButtons, b = 0; a.length > b; b++) e.h.addEventListener(a[b], "click", S, !1);
    }
    function S(a) {
        for (var b, c = a.target || a.srcElement, d = e.paginationButtons, f = 0; d.length > f; f++) c === d[f] && (b = f);
        e.swipeTo(b);
    }
    function U() {
        e.calcSlides(),
            b.loader.slides.length > 0 && 0 == e.slides.length && e.loadSlides(),
            b.loop && e.createLoop(),
            e.init(),
            x(),
            b.pagination && b.createPagination && e.createPagination(!0),
            b.loop || b.initialSlide > 0 ? e.swipeTo(b.initialSlide, 0, !1) : e.updateActiveSlide(0),
            b.autoplay && e.startAutoplay();
    }
    if (document.body.__defineGetter__ && HTMLElement) {
        var c = HTMLElement.prototype;
        c.__defineGetter__ &&
            c.__defineGetter__("outerHTML", function () {
                return new XMLSerializer().serializeToString(this);
            });
    }
    if (
        (window.getComputedStyle ||
            (window.getComputedStyle = function (a) {
                return (
                    (this.el = a),
                    (this.getPropertyValue = function (b) {
                        var c = /(\-([a-z]){1})/g;
                        return (
                            "float" === b && (b = "styleFloat"),
                            c.test(b) &&
                                (b = b.replace(c, function () {
                                    return arguments[2].toUpperCase();
                                })),
                            a.currentStyle[b] ? a.currentStyle[b] : null
                        );
                    }),
                    this
                );
            }),
        Array.prototype.indexOf ||
            (Array.prototype.indexOf = function (a, b) {
                for (var c = b || 0, d = this.length; d > c; c++) if (this[c] === a) return c;
                return -1;
            }),
        (document.querySelectorAll || window.jQuery) && void 0 !== a && (a.nodeType || 0 !== d(a).length))
    ) {
        var e = this;
        (e.touches = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, diff: 0, abs: 0 }),
            (e.positions = { start: 0, abs: 0, diff: 0, current: 0 }),
            (e.times = { start: 0, end: 0 }),
            (e.id = new Date().getTime()),
            (e.container = a.nodeType ? a : d(a)[0]),
            (e.isTouched = !1),
            (e.isMoved = !1),
            (e.activeIndex = 0),
            (e.activeLoaderIndex = 0),
            (e.activeLoopIndex = 0),
            (e.previousIndex = null),
            (e.velocity = 0),
            (e.snapGrid = []),
            (e.slidesGrid = []),
            (e.imagesToLoad = []),
            (e.imagesLoaded = 0),
            (e.wrapperLeft = 0),
            (e.wrapperRight = 0),
            (e.wrapperTop = 0),
            (e.wrapperBottom = 0);
        var f,
            g,
            h,
            i,
            j,
            k,
            l = {
                mode: "horizontal",
                touchRatio: 1,
                speed: 300,
                freeMode: !1,
                freeModeFluid: !1,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                slidesPerView: 1,
                slidesPerGroup: 1,
                simulateTouch: !0,
                followFinger: !0,
                shortSwipes: !0,
                moveStartThreshold: !1,
                autoplay: !1,
                onlyExternal: !1,
                createPagination: !0,
                pagination: !1,
                paginationElement: "span",
                paginationClickable: !1,
                paginationAsRange: !0,
                resistance: !0,
                scrollContainer: !1,
                preventLinks: !0,
                noSwiping: !1,
                noSwipingClass: "swiper-no-swiping",
                initialSlide: 0,
                keyboardControl: !1,
                mousewheelControl: !1,
                useCSS3Transforms: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                calculateHeight: !1,
                updateOnImagesReady: !0,
                releaseFormElements: !0,
                watchActiveIndex: !1,
                visibilityFullFit: !1,
                offsetPxBefore: 0,
                offsetPxAfter: 0,
                offsetSlidesBefore: 0,
                offsetSlidesAfter: 0,
                centeredSlides: !1,
                queueStartCallbacks: !1,
                queueEndCallbacks: !1,
                autoResize: !0,
                resizeReInit: !1,
                DOMAnimation: !0,
                loader: { slides: [], slidesHTMLType: "inner", surroundGroups: 1, logic: "reload", loadAllSlides: !1 },
                slideElement: "div",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                wrapperClass: "swiper-wrapper",
                paginationElementClass: "swiper-pagination-switch",
                paginationActiveClass: "swiper-active-switch",
                paginationVisibleClass: "swiper-visible-switch",
            };
        b = b || {};
        for (var m in l)
            if (m in b && "object" == typeof b[m]) for (var n in l[m]) n in b[m] || (b[m][n] = l[m][n]);
            else m in b || (b[m] = l[m]);
        (e.params = b), b.scrollContainer && ((b.freeMode = !0), (b.freeModeFluid = !0)), b.loop && (b.resistance = "100%");
        var o = "horizontal" === b.mode;
        e.touchEvents = {
            touchStart: e.support.touch || !b.simulateTouch ? "touchstart" : e.browser.ie10 ? "MSPointerDown" : "mousedown",
            touchMove: e.support.touch || !b.simulateTouch ? "touchmove" : e.browser.ie10 ? "MSPointerMove" : "mousemove",
            touchEnd: e.support.touch || !b.simulateTouch ? "touchend" : e.browser.ie10 ? "MSPointerUp" : "mouseup",
        };
        for (var p = e.container.childNodes.length - 1; p >= 0; p--)
            if (e.container.childNodes[p].className) for (var q = e.container.childNodes[p].className.split(" "), r = 0; q.length > r; r++) q[r] === b.wrapperClass && (f = e.container.childNodes[p]);
        (e.wrapper = f),
            (e._extendSwiperSlide = function (a) {
                return (
                    (a.append = function () {
                        return b.loop ? (a.insertAfter(e.slides.length - e.loopedSlides), e.removeLoopedSlides(), e.calcSlides(), e.createLoop()) : e.wrapper.appendChild(a), e.reInit(), a;
                    }),
                    (a.prepend = function () {
                        return b.loop ? (e.wrapper.insertBefore(a, e.slides[e.loopedSlides]), e.removeLoopedSlides(), e.calcSlides(), e.createLoop()) : e.wrapper.insertBefore(a, e.wrapper.firstChild), e.reInit(), a;
                    }),
                    (a.insertAfter = function (c) {
                        if (c === void 0) return !1;
                        var d;
                        return b.loop ? ((d = e.slides[c + 1 + e.loopedSlides]), e.wrapper.insertBefore(a, d), e.removeLoopedSlides(), e.calcSlides(), e.createLoop()) : ((d = e.slides[c + 1]), e.wrapper.insertBefore(a, d)), e.reInit(), a;
                    }),
                    (a.clone = function () {
                        return e._extendSwiperSlide(a.cloneNode(!0));
                    }),
                    (a.remove = function () {
                        e.wrapper.removeChild(a), e.reInit();
                    }),
                    (a.html = function (b) {
                        return b === void 0 ? a.innerHTML : ((a.innerHTML = b), a);
                    }),
                    (a.index = function () {
                        for (var b, c = e.slides.length - 1; c >= 0; c--) a === e.slides[c] && (b = c);
                        return b;
                    }),
                    (a.isActive = function () {
                        return a.index() === e.activeIndex ? !0 : !1;
                    }),
                    a.swiperSlideDataStorage || (a.swiperSlideDataStorage = {}),
                    (a.getData = function (b) {
                        return a.swiperSlideDataStorage[b];
                    }),
                    (a.setData = function (b, c) {
                        return (a.swiperSlideDataStorage[b] = c), a;
                    }),
                    (a.data = function (b, c) {
                        return c ? (a.setAttribute("data-" + b, c), a) : a.getAttribute("data-" + b);
                    }),
                    (a.getWidth = function (b) {
                        return e.h.getWidth(a, b);
                    }),
                    (a.getHeight = function (b) {
                        return e.h.getHeight(a, b);
                    }),
                    (a.getOffset = function () {
                        return e.h.getOffset(a);
                    }),
                    a
                );
            }),
            (e.calcSlides = function (a) {
                var c = e.slides ? e.slides.length : !1;
                (e.slides = []), (e.displaySlides = []);
                for (var d = 0; e.wrapper.childNodes.length > d; d++)
                    if (e.wrapper.childNodes[d].className) for (var f = e.wrapper.childNodes[d].className, g = f.split(" "), h = 0; g.length > h; h++) g[h] === b.slideClass && e.slides.push(e.wrapper.childNodes[d]);
                for (d = e.slides.length - 1; d >= 0; d--) e._extendSwiperSlide(e.slides[d]);
                c && (c !== e.slides.length || a) && (z(), y(), e.updateActiveSlide(), b.createPagination && e.params.pagination && e.createPagination(), e.callPlugins("numberOfSlidesChanged"));
            }),
            (e.createSlide = function (a, c, d) {
                var c = c || e.params.slideClass,
                    d = d || b.slideElement,
                    f = document.createElement(d);
                return (f.innerHTML = a || ""), (f.className = c), e._extendSwiperSlide(f);
            }),
            (e.appendSlide = function (a, b, c) {
                return a ? (a.nodeType ? e._extendSwiperSlide(a).append() : e.createSlide(a, b, c).append()) : void 0;
            }),
            (e.prependSlide = function (a, b, c) {
                return a ? (a.nodeType ? e._extendSwiperSlide(a).prepend() : e.createSlide(a, b, c).prepend()) : void 0;
            }),
            (e.insertSlideAfter = function (a, b, c, d) {
                return a === void 0 ? !1 : b.nodeType ? e._extendSwiperSlide(b).insertAfter(a) : e.createSlide(b, c, d).insertAfter(a);
            }),
            (e.removeSlide = function (a) {
                if (e.slides[a]) {
                    if (b.loop) {
                        if (!e.slides[a + e.loopedSlides]) return !1;
                        e.slides[a + e.loopedSlides].remove(), e.removeLoopedSlides(), e.calcSlides(), e.createLoop();
                    } else e.slides[a].remove();
                    return !0;
                }
                return !1;
            }),
            (e.removeLastSlide = function () {
                return e.slides.length > 0 ? (b.loop ? (e.slides[e.slides.length - 1 - e.loopedSlides].remove(), e.removeLoopedSlides(), e.calcSlides(), e.createLoop()) : e.slides[e.slides.length - 1].remove(), !0) : !1;
            }),
            (e.removeAllSlides = function () {
                for (var a = e.slides.length - 1; a >= 0; a--) e.slides[a].remove();
            }),
            (e.getSlide = function (a) {
                return e.slides[a];
            }),
            (e.getLastSlide = function () {
                return e.slides[e.slides.length - 1];
            }),
            (e.getFirstSlide = function () {
                return e.slides[0];
            }),
            (e.activeSlide = function () {
                return e.slides[e.activeIndex];
            });
        var s = [];
        for (var t in e.plugins)
            if (b[t]) {
                var u = e.plugins[t](e, b[t]);
                u && s.push(u);
            }
        (e.callPlugins = function (a, b) {
            b || (b = {});
            for (var c = 0; s.length > c; c++) a in s[c] && s[c][a](b);
        }),
            e.browser.ie10 && !b.onlyExternal && (o ? e.wrapper.classList.add("swiper-wp8-horizontal") : e.wrapper.classList.add("swiper-wp8-vertical")),
            b.freeMode && (e.container.className += " swiper-free-mode"),
            (e.initialized = !1),
            (e.init = function (a, c) {
                var d = e.h.getWidth(e.container),
                    f = e.h.getHeight(e.container);
                if (d !== e.width || f !== e.height || a) {
                    (e.width = d), (e.height = f), (k = o ? d : f);
                    var i = e.wrapper;
                    if ((a && e.calcSlides(c), "auto" === b.slidesPerView)) {
                        var j = 0,
                            l = 0;
                        b.slidesOffset > 0 && ((i.style.paddingLeft = ""), (i.style.paddingRight = ""), (i.style.paddingTop = ""), (i.style.paddingBottom = "")),
                            (i.style.width = ""),
                            (i.style.height = ""),
                            b.offsetPxBefore > 0 && (o ? (e.wrapperLeft = b.offsetPxBefore) : (e.wrapperTop = b.offsetPxBefore)),
                            b.offsetPxAfter > 0 && (o ? (e.wrapperRight = b.offsetPxAfter) : (e.wrapperBottom = b.offsetPxAfter)),
                            b.centeredSlides &&
                                (o
                                    ? ((e.wrapperLeft = (k - this.slides[0].getWidth(!0)) / 2), (e.wrapperRight = (k - e.slides[e.slides.length - 1].getWidth(!0)) / 2))
                                    : ((e.wrapperTop = (k - e.slides[0].getHeight(!0)) / 2), (e.wrapperBottom = (k - e.slides[e.slides.length - 1].getHeight(!0)) / 2))),
                            o
                                ? (e.wrapperLeft >= 0 && (i.style.paddingLeft = e.wrapperLeft + "px"), e.wrapperRight >= 0 && (i.style.paddingRight = e.wrapperRight + "px"))
                                : (e.wrapperTop >= 0 && (i.style.paddingTop = e.wrapperTop + "px"), e.wrapperBottom >= 0 && (i.style.paddingBottom = e.wrapperBottom + "px"));
                        var m = 0,
                            n = 0;
                        (e.snapGrid = []), (e.slidesGrid = []);
                        for (var p = 0, q = 0; e.slides.length > q; q++) {
                            var r = e.slides[q].getWidth(!0),
                                s = e.slides[q].getHeight(!0);
                            b.calculateHeight && (p = Math.max(p, s));
                            var t = o ? r : s;
                            if (b.centeredSlides) {
                                var u = q === e.slides.length - 1 ? 0 : e.slides[q + 1].getWidth(!0),
                                    v = q === e.slides.length - 1 ? 0 : e.slides[q + 1].getHeight(!0),
                                    w = o ? u : v;
                                if (t > k) {
                                    for (var x = 0; Math.floor(t / (k + e.wrapperLeft)) >= x; x++) 0 === x ? e.snapGrid.push(m + e.wrapperLeft) : e.snapGrid.push(m + e.wrapperLeft + k * x);
                                    e.slidesGrid.push(m + e.wrapperLeft);
                                } else e.snapGrid.push(n), e.slidesGrid.push(n);
                                n += t / 2 + w / 2;
                            } else {
                                if (t > k) for (var x = 0; Math.floor(t / k) >= x; x++) e.snapGrid.push(m + k * x);
                                else e.snapGrid.push(m);
                                e.slidesGrid.push(m);
                            }
                            (m += t), (j += r), (l += s);
                        }
                        b.calculateHeight && (e.height = p),
                            o
                                ? ((h = j + e.wrapperRight + e.wrapperLeft), (i.style.width = j + "px"), (i.style.height = e.height + "px"))
                                : ((h = l + e.wrapperTop + e.wrapperBottom), (i.style.width = e.width + "px"), (i.style.height = l + "px"));
                    } else if (b.scrollContainer) {
                        (i.style.width = ""), (i.style.height = "");
                        var y = e.slides[0].getWidth(!0),
                            z = e.slides[0].getHeight(!0);
                        (h = o ? y : z), (i.style.width = y + "px"), (i.style.height = z + "px"), (g = o ? y : z);
                    } else {
                        if (b.calculateHeight) {
                            var p = 0,
                                z = 0;
                            o || (e.container.style.height = ""), (i.style.height = "");
                            for (var q = 0; e.slides.length > q; q++) (e.slides[q].style.height = ""), (p = Math.max(e.slides[q].getHeight(!0), p)), o || (z += e.slides[q].getHeight(!0));
                            var s = p;
                            if (o) var z = s;
                            (k = e.height = s), o || (e.container.style.height = k + "px");
                        } else
                            var s = o ? e.height : e.height / b.slidesPerView,
                                z = o ? e.height : e.slides.length * s;
                        var r = o ? e.width / b.slidesPerView : e.width,
                            y = o ? e.slides.length * r : e.width;
                        (g = o ? r : s),
                            b.offsetSlidesBefore > 0 && (o ? (e.wrapperLeft = g * b.offsetSlidesBefore) : (e.wrapperTop = g * b.offsetSlidesBefore)),
                            b.offsetSlidesAfter > 0 && (o ? (e.wrapperRight = g * b.offsetSlidesAfter) : (e.wrapperBottom = g * b.offsetSlidesAfter)),
                            b.offsetPxBefore > 0 && (o ? (e.wrapperLeft = b.offsetPxBefore) : (e.wrapperTop = b.offsetPxBefore)),
                            b.offsetPxAfter > 0 && (o ? (e.wrapperRight = b.offsetPxAfter) : (e.wrapperBottom = b.offsetPxAfter)),
                            b.centeredSlides && (o ? ((e.wrapperLeft = (k - g) / 2), (e.wrapperRight = (k - g) / 2)) : ((e.wrapperTop = (k - g) / 2), (e.wrapperBottom = (k - g) / 2))),
                            o
                                ? (e.wrapperLeft > 0 && (i.style.paddingLeft = e.wrapperLeft + "px"), e.wrapperRight > 0 && (i.style.paddingRight = e.wrapperRight + "px"))
                                : (e.wrapperTop > 0 && (i.style.paddingTop = e.wrapperTop + "px"), e.wrapperBottom > 0 && (i.style.paddingBottom = e.wrapperBottom + "px")),
                            (h = o ? y + e.wrapperRight + e.wrapperLeft : z + e.wrapperTop + e.wrapperBottom),
                            (i.style.width = y + "px"),
                            (i.style.height = z + "px");
                        var m = 0;
                        (e.snapGrid = []), (e.slidesGrid = []);
                        for (var q = 0; e.slides.length > q; q++) e.snapGrid.push(m), e.slidesGrid.push(m), (m += g), (e.slides[q].style.width = r + "px"), (e.slides[q].style.height = s + "px");
                    }
                    e.initialized ? e.callPlugins("onInit") : e.callPlugins("onFirstInit"), (e.initialized = !0);
                }
            }),
            (e.reInit = function (a) {
                e.init(!0, a);
            }),
            (e.resizeFix = function (a) {
                if ((e.callPlugins("beforeResizeFix"), e.init(b.resizeReInit || a), b.freeMode)) {
                    var c = o ? e.getWrapperTranslate("x") : e.getWrapperTranslate("y");
                    if (-v() > c) {
                        var d = o ? -v() : 0,
                            f = o ? 0 : -v();
                        e.setWrapperTransition(0), e.setWrapperTranslate(d, f, 0);
                    }
                } else b.loop ? e.swipeTo(e.activeLoopIndex, 0, !1) : e.swipeTo(e.activeIndex, 0, !1);
                e.callPlugins("afterResizeFix");
            }),
            (e.destroy = function () {
                e.browser.ie10
                    ? (e.h.removeEventListener(e.wrapper, e.touchEvents.touchStart, J, !1), e.h.removeEventListener(document, e.touchEvents.touchMove, M, !1), e.h.removeEventListener(document, e.touchEvents.touchEnd, N, !1))
                    : (e.support.touch && (e.h.removeEventListener(e.wrapper, "touchstart", J, !1), e.h.removeEventListener(e.wrapper, "touchmove", M, !1), e.h.removeEventListener(e.wrapper, "touchend", N, !1)),
                      b.simulateTouch && (e.h.removeEventListener(e.wrapper, "mousedown", J, !1), e.h.removeEventListener(document, "mousemove", M, !1), e.h.removeEventListener(document, "mouseup", N, !1))),
                    b.autoResize && e.h.removeEventListener(window, "resize", e.resizeFix, !1),
                    z(),
                    b.paginationClickable && Q(),
                    b.mousewheelControl && e._wheelEvent && e.h.removeEventListener(e.container, e._wheelEvent, B, !1),
                    b.keyboardControl && e.h.removeEventListener(document, "keydown", A, !1),
                    b.autoplay && e.stopAutoplay(),
                    e.callPlugins("onDestroy");
            }),
            b.grabCursor && ((e.container.style.cursor = "move"), (e.container.style.cursor = "grab"), (e.container.style.cursor = "-moz-grab"), (e.container.style.cursor = "-webkit-grab")),
            (e.allowSlideClick = !0),
            (e.allowLinks = !0);
        var H,
            K,
            L,
            G = !1,
            I = !0;
        (e.swipeNext = function (a) {
            !a && b.loop && e.fixLoop(), e.callPlugins("onSwipeNext");
            var c = o ? e.getWrapperTranslate("x") : e.getWrapperTranslate("y"),
                d = c;
            if ("auto" == b.slidesPerView) {
                for (var f = 0; e.snapGrid.length > f; f++)
                    if (-c >= e.snapGrid[f] && e.snapGrid[f + 1] > -c) {
                        d = -e.snapGrid[f + 1];
                        break;
                    }
            } else {
                var h = g * b.slidesPerGroup;
                d = -(Math.floor(Math.abs(c) / Math.floor(h)) * h + h);
            }
            return -v() > d && (d = -v()), d == c ? !1 : (O(d, "next"), !0);
        }),
            (e.swipePrev = function (a) {
                !a && b.loop && e.fixLoop(), !a && b.autoplay && e.stopAutoplay(), e.callPlugins("onSwipePrev");
                var d,
                    c = Math.ceil(o ? e.getWrapperTranslate("x") : e.getWrapperTranslate("y"));
                if ("auto" == b.slidesPerView) {
                    d = 0;
                    for (var f = 1; e.snapGrid.length > f; f++) {
                        if (-c == e.snapGrid[f]) {
                            d = -e.snapGrid[f - 1];
                            break;
                        }
                        if (-c > e.snapGrid[f] && e.snapGrid[f + 1] > -c) {
                            d = -e.snapGrid[f];
                            break;
                        }
                    }
                } else {
                    var h = g * b.slidesPerGroup;
                    d = -(Math.ceil(-c / h) - 1) * h;
                }
                return d > 0 && (d = 0), d == c ? !1 : (O(d, "prev"), !0);
            }),
            (e.swipeReset = function () {
                e.callPlugins("onSwipeReset");
                var d,
                    a = o ? e.getWrapperTranslate("x") : e.getWrapperTranslate("y"),
                    c = g * b.slidesPerGroup;
                if ((-v(), "auto" == b.slidesPerView)) {
                    d = 0;
                    for (var h = 0; e.snapGrid.length > h; h++) {
                        if (-a === e.snapGrid[h]) return;
                        if (-a >= e.snapGrid[h] && e.snapGrid[h + 1] > -a) {
                            d = e.positions.diff > 0 ? -e.snapGrid[h + 1] : -e.snapGrid[h];
                            break;
                        }
                    }
                    -a >= e.snapGrid[e.snapGrid.length - 1] && (d = -e.snapGrid[e.snapGrid.length - 1]), -v() >= a && (d = -v());
                } else d = 0 > a ? Math.round(a / c) * c : 0;
                return b.scrollContainer && (d = 0 > a ? a : 0), -v() > d && (d = -v()), b.scrollContainer && k > g && (d = 0), d == a ? !1 : (O(d, "reset"), !0);
            }),
            (e.swipeTo = function (a, c, d) {
                (a = parseInt(a, 10)), e.callPlugins("onSwipeTo", { index: a, speed: c }), b.loop && (a += e.loopedSlides);
                var f = o ? e.getWrapperTranslate("x") : e.getWrapperTranslate("y");
                if (!(a > e.slides.length - 1 || 0 > a)) {
                    var h;
                    return (h = "auto" == b.slidesPerView ? -e.slidesGrid[a] : -a * g), -v() > h && (h = -v()), h == f ? !1 : ((d = d === !1 ? !1 : !0), O(h, "to", { index: a, speed: c, runCallbacks: d }), !0);
                }
            }),
            (e._queueStartCallbacks = !1),
            (e._queueEndCallbacks = !1),
            (e.updateActiveSlide = function (a) {
                if (e.initialized && 0 != e.slides.length) {
                    if (((e.previousIndex = e.activeIndex), a > 0 && (a = 0), a === void 0 && (a = o ? e.getWrapperTranslate("x") : e.getWrapperTranslate("y")), "auto" == b.slidesPerView)) {
                        if (((e.activeIndex = e.slidesGrid.indexOf(-a)), 0 > e.activeIndex)) {
                            for (var d = 0; e.slidesGrid.length - 1 > d && !(-a > e.slidesGrid[d] && e.slidesGrid[d + 1] > -a); d++);
                            var f = Math.abs(e.slidesGrid[d] + a),
                                h = Math.abs(e.slidesGrid[d + 1] + a);
                            e.activeIndex = h >= f ? d : d + 1;
                        }
                    } else e.activeIndex = b.visibilityFullFit ? Math.ceil(-a / g) : Math.round(-a / g);
                    if ((e.activeIndex == e.slides.length && (e.activeIndex = e.slides.length - 1), 0 > e.activeIndex && (e.activeIndex = 0), e.slides[e.activeIndex])) {
                        e.calcVisibleSlides(a);
                        for (var i = RegExp("\\s*" + b.slideActiveClass), j = RegExp("\\s*" + b.slideVisibleClass), d = 0; e.slides.length > d; d++)
                            (e.slides[d].className = e.slides[d].className.replace(i, "").replace(j, "")), e.visibleSlides.indexOf(e.slides[d]) >= 0 && (e.slides[d].className += " " + b.slideVisibleClass);
                        if (((e.slides[e.activeIndex].className += " " + b.slideActiveClass), b.loop)) {
                            var k = e.loopedSlides;
                            (e.activeLoopIndex = e.activeIndex - k),
                                e.activeLoopIndex >= e.slides.length - 2 * k && (e.activeLoopIndex = e.slides.length - 2 * k - e.activeLoopIndex),
                                0 > e.activeLoopIndex && (e.activeLoopIndex = e.slides.length - 2 * k + e.activeLoopIndex);
                        } else e.activeLoopIndex = e.activeIndex;
                        b.pagination && e.updatePagination(a);
                    }
                }
            }),
            (e.createPagination = function (a) {
                b.paginationClickable && e.paginationButtons && Q();
                var c = "",
                    f = e.slides.length,
                    g = f;
                b.loop && (g -= 2 * e.loopedSlides);
                for (var h = 0; g > h; h++) c += "<" + b.paginationElement + ' class="' + b.paginationElementClass + '"></' + b.paginationElement + ">";
                (e.paginationContainer = b.pagination.nodeType ? b.pagination : d(b.pagination)[0]),
                    (e.paginationContainer.innerHTML = c),
                    (e.paginationButtons = []),
                    document.querySelectorAll
                        ? (e.paginationButtons = e.paginationContainer.querySelectorAll("." + b.paginationElementClass))
                        : window.jQuery && (e.paginationButtons = d(e.paginationContainer).find("." + b.paginationElementClass)),
                    a || e.updatePagination(),
                    e.callPlugins("onCreatePagination"),
                    b.paginationClickable && R();
            }),
            (e.updatePagination = function (a) {
                if (!(1 > e.slides.length)) {
                    if (document.querySelectorAll) var c = e.paginationContainer.querySelectorAll("." + b.paginationActiveClass);
                    else if (window.jQuery) var c = d(e.paginationContainer).find("." + b.paginationActiveClass);
                    if (c) {
                        for (var f = e.paginationButtons, g = 0; f.length > g; g++) f[g].className = b.paginationElementClass;
                        var h = b.loop ? e.loopedSlides : 0;
                        if (b.paginationAsRange) {
                            e.visibleSlides || e.calcVisibleSlides(a);
                            for (var i = [], g = 0; e.visibleSlides.length > g; g++) {
                                var j = e.slides.indexOf(e.visibleSlides[g]) - h;
                                b.loop && 0 > j && (j = e.slides.length - 2 * e.loopedSlides + j), b.loop && j >= e.slides.length - 2 * e.loopedSlides && ((j = e.slides.length - 2 * e.loopedSlides - j), (j = Math.abs(j))), i.push(j);
                            }
                            for (g = 0; i.length > g; g++) f[i[g]] && (f[i[g]].className += " " + b.paginationVisibleClass);
                            b.loop ? (f[e.activeLoopIndex].className += " " + b.paginationActiveClass) : (f[e.activeIndex].className += " " + b.paginationActiveClass);
                        } else b.loop ? (f[e.activeLoopIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass) : (f[e.activeIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass);
                    }
                }
            }),
            (e.calcVisibleSlides = function (a) {
                var c = [],
                    d = 0,
                    f = 0,
                    h = 0;
                o && e.wrapperLeft > 0 && (a += e.wrapperLeft), !o && e.wrapperTop > 0 && (a += e.wrapperTop);
                for (var i = 0; e.slides.length > i; i++) {
                    (d += f), (f = "auto" == b.slidesPerView ? (o ? e.h.getWidth(e.slides[i], !0) : e.h.getHeight(e.slides[i], !0)) : g), (h = d + f);
                    var j = !1;
                    b.visibilityFullFit ? (d >= -a && -a + k >= h && (j = !0), -a >= d && h >= -a + k && (j = !0)) : (h > -a && -a + k >= h && (j = !0), d >= -a && -a + k > d && (j = !0), -a > d && h > -a + k && (j = !0)),
                        j && c.push(e.slides[i]);
                }
                0 == c.length && (c = [e.slides[e.activeIndex]]), (e.visibleSlides = c);
            });
        var T = void 0;
        (e.startAutoplay = function () {
            return T !== void 0
                ? !1
                : (b.autoplay &&
                      !b.loop &&
                      (T = setInterval(function () {
                          e.swipeNext(!0) || e.swipeTo(0);
                      }, b.autoplay)),
                  b.autoplay &&
                      b.loop &&
                      (autoPlay = setInterval(function () {
                          e.swipeNext();
                      }, b.autoplay)),
                  e.callPlugins("onAutoplayStart"),
                  void 0);
        }),
            (e.stopAutoplay = function () {
                T && clearInterval(T), (T = void 0), e.callPlugins("onAutoplayStop");
            }),
            (e.loopCreated = !1),
            (e.removeLoopedSlides = function () {
                if (e.loopCreated) for (var a = 0; e.slides.length > a; a++) e.slides[a].getData("looped") === !0 && e.wrapper.removeChild(e.slides[a]);
            }),
            (e.createLoop = function () {
                if (0 != e.slides.length) {
                    e.loopedSlides = b.slidesPerView + b.loopAdditionalSlides;
                    for (var a = "", c = "", d = 0; e.loopedSlides > d; d++) a += e.slides[d].outerHTML;
                    for (d = e.slides.length - e.loopedSlides; e.slides.length > d; d++) c += e.slides[d].outerHTML;
                    for (f.innerHTML = c + f.innerHTML + a, e.loopCreated = !0, e.calcSlides(), d = 0; e.slides.length > d; d++) (e.loopedSlides > d || d >= e.slides.length - e.loopedSlides) && e.slides[d].setData("looped", !0);
                    e.callPlugins("onCreateLoop");
                }
            }),
            (e.fixLoop = function () {
                if (e.activeIndex < e.loopedSlides) {
                    var a = e.slides.length - 3 * e.loopedSlides + e.activeIndex;
                    e.swipeTo(a, 0, !1);
                } else if (e.activeIndex > e.slides.length - 2 * b.slidesPerView) {
                    var a = -e.slides.length + e.activeIndex + e.loopedSlides;
                    e.swipeTo(a, 0, !1);
                }
            }),
            (e.loadSlides = function () {
                var a = "";
                e.activeLoaderIndex = 0;
                for (var c = b.loader.slides, d = b.loader.loadAllSlides ? c.length : b.slidesPerView * (1 + b.loader.surroundGroups), f = 0; d > f; f++)
                    a += "outer" == b.loader.slidesHTMLType ? c[f] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + f + '">' + c[f] + "</" + b.slideElement + ">";
                (e.wrapper.innerHTML = a), e.calcSlides(!0), b.loader.loadAllSlides || e.wrapperTransitionEnd(e.reloadSlides, !0);
            }),
            (e.reloadSlides = function () {
                var a = b.loader.slides,
                    c = parseInt(e.activeSlide().data("swiperindex"), 10);
                if (!(0 > c || c > a.length - 1)) {
                    e.activeLoaderIndex = c;
                    var d = Math.max(0, c - b.slidesPerView * b.loader.surroundGroups),
                        f = Math.min(c + b.slidesPerView * (1 + b.loader.surroundGroups) - 1, a.length - 1);
                    if (c > 0) {
                        var h = -g * (c - d);
                        o ? e.setWrapperTranslate(h, 0, 0) : e.setWrapperTranslate(0, h, 0), e.setWrapperTransition(0);
                    }
                    if ("reload" === b.loader.logic) {
                        e.wrapper.innerHTML = "";
                        for (var i = "", j = d; f >= j; j++) i += "outer" == b.loader.slidesHTMLType ? a[j] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + j + '">' + a[j] + "</" + b.slideElement + ">";
                        e.wrapper.innerHTML = i;
                    } else {
                        for (var k = 1e3, l = 0, j = 0; e.slides.length > j; j++) {
                            var m = e.slides[j].data("swiperindex");
                            d > m || m > f ? e.wrapper.removeChild(e.slides[j]) : ((k = Math.min(m, k)), (l = Math.max(m, l)));
                        }
                        for (var j = d; f >= j; j++) {
                            if (k > j) {
                                var n = document.createElement(b.slideElement);
                                (n.className = b.slideClass), n.setAttribute("data-swiperindex", j), (n.innerHTML = a[j]), e.wrapper.insertBefore(n, e.wrapper.firstChild);
                            }
                            if (j > l) {
                                var n = document.createElement(b.slideElement);
                                (n.className = b.slideClass), n.setAttribute("data-swiperindex", j), (n.innerHTML = a[j]), e.wrapper.appendChild(n);
                            }
                        }
                    }
                    e.reInit(!0);
                }
            }),
            U();
    }
};
(Swiper.prototype = {
    plugins: {},
    wrapperTransitionEnd: function (a, b) {
        function f() {
            if ((a(c), c.params.queueEndCallbacks && (c._queueEndCallbacks = !1), !b)) for (var g = 0; e.length > g; g++) d.removeEventListener(e[g], f, !1);
        }
        var c = this,
            d = c.wrapper,
            e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
        if (a) for (var g = 0; e.length > g; g++) d.addEventListener(e[g], f, !1);
    },
    getWrapperTranslate: function (a) {
        var c,
            d,
            b = this.wrapper;
        if (window.WebKitCSSMatrix) {
            var e = new WebKitCSSMatrix(window.getComputedStyle(b, null).webkitTransform);
            c = ("" + e).split(",");
        } else {
            var e =
                window.getComputedStyle(b, null).MozTransform ||
                window.getComputedStyle(b, null).OTransform ||
                window.getComputedStyle(b, null).MsTransform ||
                window.getComputedStyle(b, null).msTransform ||
                window.getComputedStyle(b, null).transform ||
                window.getComputedStyle(b, null).getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
            c = ("" + e).split(",");
        }
        return (
            this.params.useCSS3Transforms
                ? ("x" == a && (d = 16 == c.length ? parseFloat(c[12]) : window.WebKitCSSMatrix ? e.m41 : parseFloat(c[4])), "y" == a && (d = 16 == c.length ? parseFloat(c[13]) : window.WebKitCSSMatrix ? e.m42 : parseFloat(c[5])))
                : ("x" == a && (d = parseFloat(b.style.left, 10) || 0), "y" == a && (d = parseFloat(b.style.top, 10) || 0)),
            d || 0
        );
    },
    setWrapperTranslate: function (a, b, c) {
        var d = this.wrapper.style;
        (a = a || 0),
            (b = b || 0),
            (c = c || 0),
            this.params.useCSS3Transforms
                ? this.support.transforms3d
                    ? (d.webkitTransform = d.MsTransform = d.msTransform = d.MozTransform = d.OTransform = d.transform = "translate3d(" + a + "px, " + b + "px, " + c + "px)")
                    : ((d.webkitTransform = d.MsTransform = d.msTransform = d.MozTransform = d.OTransform = d.transform = "translate(" + a + "px, " + b + "px)"), this.support.transforms || ((d.left = a + "px"), (d.top = b + "px")))
                : ((d.left = a + "px"), (d.top = b + "px")),
            this.callPlugins("onSetWrapperTransform", { x: a, y: b, z: c });
    },
    setWrapperTransition: function (a) {
        var b = this.wrapper.style;
        (b.webkitTransitionDuration = b.MsTransitionDuration = b.msTransitionDuration = b.MozTransitionDuration = b.OTransitionDuration = b.transitionDuration = a / 1e3 + "s"), this.callPlugins("onSetWrapperTransition", { duration: a });
    },
    h: {
        getWidth: function (a, b) {
            var c = window.getComputedStyle(a, null).getPropertyValue("width"),
                d = parseFloat(c);
            return (
                (isNaN(d) || c.indexOf("%") > 0) && (d = a.offsetWidth - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))),
                b && (d += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))),
                d
            );
        },
        getHeight: function (a, b) {
            if (b) return a.offsetHeight;
            var c = window.getComputedStyle(a, null).getPropertyValue("height"),
                d = parseFloat(c);
            return (
                (isNaN(d) || c.indexOf("%") > 0) && (d = a.offsetHeight - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))),
                b && (d += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))),
                d
            );
        },
        getOffset: function (a) {
            var b = a.getBoundingClientRect(),
                c = document.body,
                d = a.clientTop || c.clientTop || 0,
                e = a.clientLeft || c.clientLeft || 0,
                f = window.pageYOffset || a.scrollTop,
                g = window.pageXOffset || a.scrollLeft;
            return document.documentElement && !window.pageYOffset && ((f = document.documentElement.scrollTop), (g = document.documentElement.scrollLeft)), { top: b.top + f - d, left: b.left + g - e };
        },
        windowWidth: function () {
            return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0;
        },
        windowHeight: function () {
            return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0;
        },
        windowScroll: function () {
            return "undefined" != typeof pageYOffset ? { left: window.pageXOffset, top: window.pageYOffset } : document.documentElement ? { left: document.documentElement.scrollLeft, top: document.documentElement.scrollTop } : void 0;
        },
        addEventListener: function (a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
        },
        removeEventListener: function (a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
        },
    },
    setTransform: function (a, b) {
        var c = a.style;
        c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = b;
    },
    setTranslate: function (a, b) {
        var c = a.style,
            d = { x: b.x || 0, y: b.y || 0, z: b.z || 0 },
            e = this.support.transforms3d ? "translate3d(" + d.x + "px," + d.y + "px," + d.z + "px)" : "translate(" + d.x + "px," + d.y + "px)";
        (c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = e), this.support.transforms || ((c.left = d.x + "px"), (c.top = d.y + "px"));
    },
    setTransition: function (a, b) {
        var c = a.style;
        c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = b + "ms";
    },
    support: {
        touch:
            (window.Modernizr && Modernizr.touch === !0) ||
            (function () {
                return !!("ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch));
            })(),
        transforms3d:
            (window.Modernizr && Modernizr.csstransforms3d === !0) ||
            (function () {
                var a = document.createElement("div");
                return "webkitPerspective" in a.style || "MozPerspective" in a.style || "OPerspective" in a.style || "MsPerspective" in a.style || "perspective" in a.style;
            })(),
        transforms:
            (window.Modernizr && Modernizr.csstransforms === !0) ||
            (function () {
                var a = document.createElement("div").style;
                return "transform" in a || "WebkitTransform" in a || "MozTransform" in a || "msTransform" in a || "MsTransform" in a || "OTransform" in a;
            })(),
        transitions:
            (window.Modernizr && Modernizr.csstransitions === !0) ||
            (function () {
                var a = document.createElement("div").style;
                return "transition" in a || "WebkitTransition" in a || "MozTransition" in a || "msTransition" in a || "MsTransition" in a || "OTransition" in a;
            })(),
    },
    browser: {
        ie8: (function () {
            var a = -1;
            if ("Microsoft Internet Explorer" == navigator.appName) {
                var b = navigator.userAgent,
                    c = RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
                null != c.exec(b) && (a = parseFloat(RegExp.$1));
            }
            return -1 != a && 9 > a;
        })(),
        ie10: window.navigator.msPointerEnabled,
    },
}),
    (window.jQuery || window.Zepto) &&
        (function (a) {
            a.fn.swiper = function (b) {
                var c = new Swiper(a(this)[0], b);
                return a(this).data("swiper", c), c;
            };
        })(window.jQuery || window.Zepto);

/*!jQuery Knob*/
/**
 * Downward compatible, touchable dial
 *
 * Version: 1.2.0 (15/07/2012)
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2012 Anthony Terrien
 * Under MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to vor, eskimoblood, spiffistan, FabrizioC
 */
!(function (t) {
    "use strict";
    var i = {},
        s = Math.max,
        h = Math.min;
    (i.c = {}),
        (i.c.d = t(document)),
        (i.c.t = function (t) {
            return t.originalEvent.touches.length - 1;
        }),
        (i.o = function () {
            var s = this;
            (this.o = null),
                (this.$ = null),
                (this.i = null),
                (this.g = null),
                (this.v = null),
                (this.cv = null),
                (this.x = 0),
                (this.y = 0),
                (this.$c = null),
                (this.c = null),
                (this.t = 0),
                (this.isInit = !1),
                (this.fgColor = null),
                (this.pColor = null),
                (this.dH = null),
                (this.cH = null),
                (this.eH = null),
                (this.rH = null),
                (this.run = function () {
                    var i = function (t, i) {
                        var h;
                        for (h in i) s.o[h] = i[h];
                        s.init(), s._configure()._draw();
                    };
                    if (!this.$.data("kontroled"))
                        return (
                            this.$.data("kontroled", !0),
                            this.extend(),
                            (this.o = t.extend(
                                {
                                    min: this.$.data("min") || 0,
                                    max: this.$.data("max") || 100,
                                    stopper: !0,
                                    readOnly: this.$.data("readonly"),
                                    cursor: (this.$.data("cursor") === !0 && 30) || this.$.data("cursor") || 0,
                                    thickness: this.$.data("thickness") || 0.35,
                                    lineCap: this.$.data("linecap") || "butt",
                                    width: this.$.data("width") || 200,
                                    height: this.$.data("height") || 200,
                                    displayInput: null == this.$.data("displayinput") || this.$.data("displayinput"),
                                    displayPrevious: this.$.data("displayprevious"),
                                    fgColor: this.$.data("fgcolor") || "#87CEEB",
                                    inputColor: this.$.data("inputcolor") || this.$.data("fgcolor") || "#87CEEB",
                                    inline: !1,
                                    step: this.$.data("step") || 1,
                                    draw: null,
                                    change: null,
                                    cancel: null,
                                    release: null,
                                },
                                this.o
                            )),
                            this.$.is("fieldset")
                                ? ((this.v = {}),
                                  (this.i = this.$.find("input")),
                                  this.i.each(function (i) {
                                      var h = t(this);
                                      (s.i[i] = h),
                                          (s.v[i] = h.val()),
                                          h.bind("change", function () {
                                              var t = {};
                                              (t[i] = h.val()), s.val(t);
                                          });
                                  }),
                                  this.$.find("legend").remove())
                                : ((this.i = this.$),
                                  (this.v = this.$.val()),
                                  "" == this.v && (this.v = this.o.min),
                                  this.$.bind("change", function () {
                                      s.val(s._validate(s.$.val()));
                                  })),
                            !this.o.displayInput && this.$.hide(),
                            (this.$c = t('<canvas width="' + this.o.width + 'px" height="' + this.o.height + 'px"></canvas>')),
                            (this.c = this.$c[0].getContext("2d")),
                            this.$.wrap(t('<div style="' + (this.o.inline ? "display:inline;" : "") + "width:" + this.o.width + "px;height:" + this.o.height + 'px;"></div>')).before(this.$c),
                            this.v instanceof Object ? ((this.cv = {}), this.copy(this.v, this.cv)) : (this.cv = this.v),
                            this.$.bind("configure", i).parent().bind("configure", i),
                            this._listen()._configure()._xy().init(),
                            (this.isInit = !0),
                            this._draw(),
                            this
                        );
                }),
                (this._draw = function () {
                    var t = !0,
                        i = document.createElement("canvas");
                    (i.width = s.o.width), (i.height = s.o.height), (s.g = i.getContext("2d")), s.clear(), s.dH && (t = s.dH()), t !== !1 && s.draw(), s.c.drawImage(i, 0, 0), (i = null);
                }),
                (this._touch = function (t) {
                    var h = function (t) {
                        var i = s.xy2val(t.originalEvent.touches[s.t].pageX, t.originalEvent.touches[s.t].pageY);
                        i != s.cv && ((s.cH && s.cH(i) === !1) || (s.change(s._validate(i)), s._draw()));
                    };
                    return (
                        (this.t = i.c.t(t)),
                        h(t),
                        i.c.d.bind("touchmove.k", h).bind("touchend.k", function () {
                            i.c.d.unbind("touchmove.k touchend.k"), (s.rH && s.rH(s.cv) === !1) || s.val(s.cv);
                        }),
                        this
                    );
                }),
                (this._mouse = function (t) {
                    var h = function (t) {
                        var i = s.xy2val(t.pageX, t.pageY);
                        i != s.cv && ((s.cH && s.cH(i) === !1) || (s.change(s._validate(i)), s._draw()));
                    };
                    return (
                        h(t),
                        i.c.d
                            .bind("mousemove.k", h)
                            .bind("keyup.k", function (t) {
                                if (27 === t.keyCode) {
                                    if ((i.c.d.unbind("mouseup.k mousemove.k keyup.k"), s.eH && s.eH() === !1)) return;
                                    s.cancel();
                                }
                            })
                            .bind("mouseup.k", function (t) {
                                i.c.d.unbind("mousemove.k mouseup.k keyup.k"), (s.rH && s.rH(s.cv) === !1) || s.val(s.cv);
                            }),
                        this
                    );
                }),
                (this._xy = function () {
                    var t = this.$c.offset();
                    return (this.x = t.left), (this.y = t.top), this;
                }),
                (this._listen = function () {
                    return (
                        this.o.readOnly
                            ? this.$.attr("readonly", "readonly")
                            : (this.$c
                                  .bind("mousedown", function (t) {
                                      t.preventDefault(), s._xy()._mouse(t);
                                  })
                                  .bind("touchstart", function (t) {
                                      t.preventDefault(), s._xy()._touch(t);
                                  }),
                              this.listen()),
                        this
                    );
                }),
                (this._configure = function () {
                    return (
                        this.o.draw && (this.dH = this.o.draw),
                        this.o.change && (this.cH = this.o.change),
                        this.o.cancel && (this.eH = this.o.cancel),
                        this.o.release && (this.rH = this.o.release),
                        this.o.displayPrevious ? ((this.pColor = this.h2rgba(this.o.fgColor, "0.4")), (this.fgColor = this.h2rgba(this.o.fgColor, "0.6"))) : (this.fgColor = this.o.fgColor),
                        this
                    );
                }),
                (this._clear = function () {
                    this.$c[0].width = this.$c[0].width;
                }),
                (this._validate = function (t) {
                    return ~~((0 > t ? -0.5 : 0.5) + t / this.o.step) * this.o.step;
                }),
                (this.listen = function () {}),
                (this.extend = function () {}),
                (this.init = function () {}),
                (this.change = function (t) {}),
                (this.val = function (t) {}),
                (this.xy2val = function (t, i) {}),
                (this.draw = function () {}),
                (this.clear = function () {
                    this._clear();
                }),
                (this.h2rgba = function (t, i) {
                    var s;
                    return (t = t.substring(1, 7)), (s = [parseInt(t.substring(0, 2), 16), parseInt(t.substring(2, 4), 16), parseInt(t.substring(4, 6), 16)]), "rgba(" + s[0] + "," + s[1] + "," + s[2] + "," + i + ")";
                }),
                (this.copy = function (t, i) {
                    for (var s in t) i[s] = t[s];
                });
        }),
        (i.Dial = function () {
            i.o.call(this),
                (this.startAngle = null),
                (this.xy = null),
                (this.radius = null),
                (this.lineWidth = null),
                (this.cursorExt = null),
                (this.w2 = null),
                (this.PI2 = 2 * Math.PI),
                (this.extend = function () {
                    this.o = t.extend({ bgColor: this.$.data("bgcolor") || "#EEEEEE", angleOffset: this.$.data("angleoffset") || 0, angleArc: this.$.data("anglearc") || 360, inline: !0 }, this.o);
                }),
                (this.val = function (t) {
                    return null == t ? this.v : ((this.cv = this.o.stopper ? s(h(t, this.o.max), this.o.min) : t), (this.v = this.cv), this.$.val(this.v), this._draw(), void 0);
                }),
                (this.xy2val = function (t, i) {
                    var n, e;
                    return (
                        (n = Math.atan2(t - (this.x + this.w2), -(i - this.y - this.w2)) - this.angleOffset),
                        this.angleArc != this.PI2 && 0 > n && n > -0.5 ? (n = 0) : 0 > n && (n += this.PI2),
                        (e = ~~(0.5 + (n * (this.o.max - this.o.min)) / this.angleArc) + this.o.min),
                        this.o.stopper && (e = s(h(e, this.o.max), this.o.min)),
                        e
                    );
                }),
                (this.listen = function () {
                    var i,
                        n,
                        e = this,
                        a = function (t) {
                            t.preventDefault();
                            var i = t.originalEvent,
                                s = i.detail || i.wheelDeltaX,
                                h = i.detail || i.wheelDeltaY,
                                n = parseInt(e.$.val()) + (s > 0 || h > 0 ? e.o.step : 0 > s || 0 > h ? -e.o.step : 0);
                            (e.cH && e.cH(n) === !1) || e.val(n);
                        },
                        o = 1,
                        l = { 37: -e.o.step, 38: e.o.step, 39: e.o.step, 40: -e.o.step };
                    this.$.bind("keydown", function (a) {
                        var r = a.keyCode;
                        if ((r >= 96 && 105 >= r && (r = a.keyCode = r - 48), (i = parseInt(String.fromCharCode(r))), isNaN(i) && (13 !== r && 8 !== r && 9 !== r && 189 !== r && a.preventDefault(), t.inArray(r, [37, 38, 39, 40]) > -1))) {
                            a.preventDefault();
                            var c = parseInt(e.$.val()) + l[r] * o;
                            e.o.stopper && (c = s(h(c, e.o.max), e.o.min)),
                                e.change(c),
                                e._draw(),
                                (n = window.setTimeout(function () {
                                    o *= 2;
                                }, 30));
                        }
                    }).bind("keyup", function (t) {
                        isNaN(i) ? n && (window.clearTimeout(n), (n = null), (o = 1), e.val(e.$.val())) : (e.$.val() > e.o.max && e.$.val(e.o.max)) || (e.$.val() < e.o.min && e.$.val(e.o.min));
                    }),
                        this.$c.bind("mousewheel DOMMouseScroll", a),
                        this.$.bind("mousewheel DOMMouseScroll", a);
                }),
                (this.init = function () {
                    (this.v < this.o.min || this.v > this.o.max) && (this.v = this.o.min),
                        this.$.val(this.v),
                        (this.w2 = this.o.width / 2),
                        (this.cursorExt = this.o.cursor / 100),
                        (this.xy = this.w2),
                        (this.lineWidth = this.xy * this.o.thickness),
                        (this.lineCap = this.o.lineCap),
                        (this.radius = this.xy - this.lineWidth / 2),
                        this.o.angleOffset && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset),
                        this.o.angleArc && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc),
                        (this.angleOffset = (this.o.angleOffset * Math.PI) / 180),
                        (this.angleArc = (this.o.angleArc * Math.PI) / 180),
                        (this.startAngle = 1.5 * Math.PI + this.angleOffset),
                        (this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc);
                    var t = s(String(Math.abs(this.o.max)).length, String(Math.abs(this.o.min)).length, 2) + 2;
                    (this.o.displayInput &&
                        this.i.css({
                            width: ((this.o.width / 2 + 4) >> 0) + "px",
                            height: ((this.o.width / 3) >> 0) + "px",
                            position: "absolute",
                            "vertical-align": "middle",
                            "margin-top": ((this.o.width / 3) >> 0) + "px",
                            "margin-left": "-" + (((3 * this.o.width) / 4 + 2) >> 0) + "px",
                            border: 0,
                            background: "none",
                            font: "bold " + ((this.o.width / t) >> 0) + "px Arial",
                            "text-align": "center",
                            color: this.o.inputColor || this.o.fgColor,
                            padding: "0px",
                            "-webkit-appearance": "none",
                        })) ||
                        this.i.css({ width: "0px", visibility: "hidden" });
                }),
                (this.change = function (t) {
                    (this.cv = t), this.$.val(t);
                }),
                (this.angle = function (t) {
                    return ((t - this.o.min) * this.angleArc) / (this.o.max - this.o.min);
                }),
                (this.draw = function () {
                    var t,
                        i,
                        s = this.g,
                        h = this.angle(this.cv),
                        n = this.startAngle,
                        e = n + h,
                        a = 1;
                    (s.lineWidth = this.lineWidth),
                        (s.lineCap = this.lineCap),
                        this.o.cursor && (n = e - this.cursorExt) && (e += this.cursorExt),
                        s.beginPath(),
                        (s.strokeStyle = this.o.bgColor),
                        s.arc(this.xy, this.xy, this.radius, this.endAngle - 1e-5, this.startAngle + 1e-5, !0),
                        s.stroke(),
                        this.o.displayPrevious &&
                            ((i = this.startAngle + this.angle(this.v)),
                            (t = this.startAngle),
                            this.o.cursor && (t = i - this.cursorExt) && (i += this.cursorExt),
                            s.beginPath(),
                            (s.strokeStyle = this.pColor),
                            s.arc(this.xy, this.xy, this.radius, t, i, !1),
                            s.stroke(),
                            (a = this.cv == this.v)),
                        s.beginPath(),
                        (s.strokeStyle = a ? this.o.fgColor : this.fgColor),
                        s.arc(this.xy, this.xy, this.radius, n, e, !1),
                        s.stroke();
                }),
                (this.cancel = function () {
                    this.val(this.v);
                });
        }),
        (t.fn.dial = t.fn.knob = function (s) {
            return this.each(function () {
                var h = new i.Dial();
                (h.o = s), (h.$ = t(this)), h.run();
            }).parent();
        });
})(jQuery);

/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 
 */
!(function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (t) {
    "use strict";
    function e(t) {
        if (t instanceof Date) return t;
        if (String(t).match(a)) return String(t).match(/^[0-9]*$/) && (t = Number(t)), String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")), new Date(t);
        throw new Error("Couldn't cast `" + t + "` to a date object.");
    }
    function s(t) {
        var e = t.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        return new RegExp(e);
    }
    function n(t) {
        return function (e) {
            var n = e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (n)
                for (var o = 0, a = n.length; a > o; ++o) {
                    var h = n[o].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        l = s(h[0]),
                        c = h[1] || "",
                        f = h[3] || "",
                        u = null;
                    (h = h[2]), r.hasOwnProperty(h) && ((u = r[h]), (u = Number(t[u]))), null !== u && ("!" === c && (u = i(f, u)), "" === c && 10 > u && (u = "0" + u.toString()), (e = e.replace(l, u.toString())));
                }
            return (e = e.replace(/%%/, "%"));
        };
    }
    function i(t, e) {
        var s = "s",
            n = "";
        return t && ((t = t.replace(/(:|;|\s)/gi, "").split(/\,/)), 1 === t.length ? (s = t[0]) : ((n = t[0]), (s = t[1]))), Math.abs(e) > 1 ? s : n;
    }
    var o = [],
        a = [],
        h = { precision: 100, elapse: !1, defer: !1 };
    a.push(/^[0-9]*$/.source), a.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), a.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), (a = new RegExp(a.join("|")));
    var r = { Y: "years", m: "months", n: "daysToMonth", d: "daysToWeek", w: "weeks", W: "weeksToMonth", H: "hours", M: "minutes", S: "seconds", D: "totalDays", I: "totalHours", N: "totalMinutes", T: "totalSeconds" },
        l = function (e, s, n) {
            (this.el = e),
                (this.$el = t(e)),
                (this.interval = null),
                (this.offset = {}),
                (this.options = t.extend({}, h)),
                (this.instanceNumber = o.length),
                o.push(this),
                this.$el.data("countdown-instance", this.instanceNumber),
                n && ("function" == typeof n ? (this.$el.on("update.countdown", n), this.$el.on("stoped.countdown", n), this.$el.on("finish.countdown", n)) : (this.options = t.extend({}, h, n))),
                this.setFinalDate(s),
                this.options.defer === !1 && this.start();
        };
    t.extend(l.prototype, {
        start: function () {
            null !== this.interval && clearInterval(this.interval);
            var t = this;
            this.update(),
                (this.interval = setInterval(function () {
                    t.update.call(t);
                }, this.options.precision));
        },
        stop: function () {
            clearInterval(this.interval), (this.interval = null), this.dispatchEvent("stoped");
        },
        toggle: function () {
            this.interval ? this.stop() : this.start();
        },
        pause: function () {
            this.stop();
        },
        resume: function () {
            this.start();
        },
        remove: function () {
            this.stop.call(this), (o[this.instanceNumber] = null), delete this.$el.data().countdownInstance;
        },
        setFinalDate: function (t) {
            this.finalDate = e(t);
        },
        update: function () {
            if (0 === this.$el.closest("html").length) return void this.remove();
            var e,
                s = void 0 !== t._data(this.el, "events"),
                n = new Date();
            (e = this.finalDate.getTime() - n.getTime()),
                (e = Math.ceil(e / 1e3)),
                (e = !this.options.elapse && 0 > e ? 0 : Math.abs(e)),
                this.totalSecsLeft !== e &&
                    s &&
                    ((this.totalSecsLeft = e),
                    (this.elapsed = n >= this.finalDate),
                    (this.offset = {
                        seconds: this.totalSecsLeft % 60,
                        minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                        hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                        days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                        daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                        daysToMonth: Math.floor((this.totalSecsLeft / 60 / 60 / 24) % 30.4368),
                        weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                        weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                        months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                        years: Math.abs(this.finalDate.getFullYear() - n.getFullYear()),
                        totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                        totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                        totalMinutes: Math.floor(this.totalSecsLeft / 60),
                        totalSeconds: this.totalSecsLeft,
                    }),
                    this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")));
        },
        dispatchEvent: function (e) {
            var s = t.Event(e + ".countdown");
            (s.finalDate = this.finalDate), (s.elapsed = this.elapsed), (s.offset = t.extend({}, this.offset)), (s.strftime = n(this.offset)), this.$el.trigger(s);
        },
    }),
        (t.fn.countdown = function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return this.each(function () {
                var s = t(this).data("countdown-instance");
                if (void 0 !== s) {
                    var n = o[s],
                        i = e[0];
                    l.prototype.hasOwnProperty(i)
                        ? n[i].apply(n, e.slice(1))
                        : null === String(i).match(/^[$A-Z_][0-9A-Z_$]*$/i)
                        ? (n.setFinalDate.call(n, i), n.start())
                        : t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, i));
                } else new l(this, e[0], e[1]);
            });
        });
});
