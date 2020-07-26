/*!
  * Jumpstart HTML template
  * Copyright 2018-2019 Medium Rare (undefined)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('aos'), require('jquery'), require('jquery-countdown'), require('scrollmonitor'), require('flatpickr'), require('flickity'), require('ion-rangeslider'), require('isotope-layout'), require('jarallax'), require('plyr'), require('prismjs'), require('smooth-scroll'), require('@tanem/svg-injector'), require('twitter-fetcher'), require('typed.js'))
    : typeof define === 'function' && define.amd ? define(['exports', 'aos', 'jquery', 'jquery-countdown', 'scrollmonitor', 'flatpickr', 'flickity', 'ion-rangeslider', 'isotope-layout', 'jarallax', 'plyr', 'prismjs', 'smooth-scroll', '@tanem/svg-injector', 'twitter-fetcher', 'typed.js'], factory)
      : (global = global || self, factory(global.theme = {}, global.AOS, global.jQuery, null, global.scrollMonitor, global.flatpickr, global.Flickity, null, global.Isotope, global.jarallax, global.Plyr, global.Prism, global.SmoothScroll, global.SVGInjector, global.twitterFetcher, global.Typed));
}(this, (exports, AOS, jQuery$1, jqueryCountdown, scrollMonitor, flatpickr, Flickity, ionRangeslider, Isotope$1, jarallax$1, Plyr, Prism, SmoothScroll, svgInjector, twitterFetcher, Typed) => {
  AOS = AOS && AOS.hasOwnProperty('default') ? AOS.default : AOS;
  jQuery$1 = jQuery$1 && jQuery$1.hasOwnProperty('default') ? jQuery$1.default : jQuery$1;
  scrollMonitor = scrollMonitor && scrollMonitor.hasOwnProperty('default') ? scrollMonitor.default : scrollMonitor;
  flatpickr = flatpickr && flatpickr.hasOwnProperty('default') ? flatpickr.default : flatpickr;
  Flickity = Flickity && Flickity.hasOwnProperty('default') ? Flickity.default : Flickity;
  Isotope$1 = Isotope$1 && Isotope$1.hasOwnProperty('default') ? Isotope$1.default : Isotope$1;
  jarallax$1 = jarallax$1 && jarallax$1.hasOwnProperty('default') ? jarallax$1.default : jarallax$1;
  Plyr = Plyr && Plyr.hasOwnProperty('default') ? Plyr.default : Plyr;
  Prism = Prism && Prism.hasOwnProperty('default') ? Prism.default : Prism;
  SmoothScroll = SmoothScroll && SmoothScroll.hasOwnProperty('default') ? SmoothScroll.default : SmoothScroll;
  twitterFetcher = twitterFetcher && twitterFetcher.hasOwnProperty('default') ? twitterFetcher.default : twitterFetcher;
  Typed = Typed && Typed.hasOwnProperty('default') ? Typed.default : Typed;

  //
  $(window).on('load', () => {
    AOS.init({
      once: true,
    });
  });

  //

  (function ($) {
    if ('objectFit' in document.documentElement.style === false) {
      $('.bg-image').each(function attachBg() {
        const img = $(this);
        const src = img.attr('src');
        const classes = img.get(0).classList; // Replaces the default <img.bg-image> element with a <div.bg-image>
        // to attach background using legacy friendly CSS rules

        img.before($(`<div class="${classes}" style="background: url(${src}); background-size: cover; background-position: 50% 50%;"></div>`)); // Removes original <img.bg-image> as it is no longer required

        img.remove();
      });
    }
  }(jQuery$1));

  function _defineProperties(target, props) {
    for (let i = 0; i < props.length; i++) {
      const descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  const mrCountdown = (function ($) {
    /**
     * Check for countdown dependency
     * countdown - https://github.com/hilios/jQuery.countdown/
     */
    if (typeof $.fn.countdown !== 'function') {
      throw new Error('mrCountdown requires jquery.countdown.js (https://github.com/hilios/jQuery.countdown/)');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    const NAME = 'mrCountdown';
    const VERSION = '1.1.0';
    const DATA_KEY = 'mr.countdown';
    const EVENT_KEY = `.${DATA_KEY}`;
    const DATA_API_KEY = '.data-api';
    const JQUERY_NO_CONFLICT = $.fn[NAME];
    const Event = {
      LOAD_DATA_API: `load${EVENT_KEY}${DATA_API_KEY}`,
    };
    const Default = {
      DAYS_TEXT: 'days',
      ELAPSED: 'Timer Done',
      Y_FMT: '%Y',
      MTHS_FMT: '%m',
      W_FMT: '%w',
      D_FMT: '%D',
      H_FMT: '%H',
      MINS_FMT: '%M',
      S_FMT: '%S',
      Y_LABEL_FMT: '%!Y:Year,Years;',
      MTHS_LABEL_FMT: '%!m:Month,Months;',
      W_LABEL_FMT: '%!w:Week,Weeks;',
      D_LABEL_FMT: '%!d:Day,Days;',
      H_LABEL_FMT: '%!H:Hour,Hours;',
      MINS_LABEL_FMT: '%!M:Minute,Minutes;',
      S_LABEL_FMT: '%!S:Second,Seconds;',
    };
    const CSS = {
      D_NONE: 'd-none',
    };
    const Selector = {
      COUNTDOWN: '[data-countdown-date]',
      ACTIVE: '[data-active-state]',
      ELAPSED: '[data-elapsed-state]',
      DATE_ATTR: 'data-countdown-date',
      DAYS_TEXT_ATTR: 'data-days-text',
      DATE_FORMAT_ATTR: 'data-date-format',
      DATE_FALLBACK_ATTR: 'data-date-fallback',
      Y_EL: '[data-years]',
      MTHS_EL: '[data-months]',
      W_EL: '[data-weeks]',
      D_EL: '[data-days]',
      H_EL: '[data-hours]',
      MINS_EL: '[data-minutes]',
      S_EL: '[data-seconds]',
      Y_LABEL_EL: '[data-years-label]',
      MTHS_LABEL_EL: '[data-months-label]',
      W_LABEL_EL: '[data-weeks-label]',
      D_LABEL_EL: '[data-days-label]',
      H_LABEL_EL: '[data-hours-label]',
      MINS_LABEL_EL: '[data-minutes-label]',
      S_LABEL_EL: '[data-seconds-label]',
    };
    const Options = {
      FORMAT: 'format',
      DETAILED: 'detailed',
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    const Countdown =
    /* #__PURE__ */
    (function () {
      function Countdown(element) {
        // The current countdown element
        this.element = element;
        const $element = $(element);
        this.date = $element.attr(Selector.DATE_ATTR);
        this.daysText = $element.attr(Selector.DAYS_TEXT_ATTR) || Default.DAYS_TEXT;
        this.countdownText = `%D ${this.daysText} %H:%M:%S`;
        this.dateFormat = $element.attr(Selector.DATE_FORMAT_ATTR) || this.countdownText;
        this.fallback = $element.attr(Selector.DATE_FALLBACK_ATTR) || Default.ELAPSED; // Options for detailed mode

        this.detailed = this.element.getAttribute(`data-${Options.DETAILED}`) !== null;

        if (this.detailed) {
          this.years = {
            show: $element.find(Selector.Y_EL).length,
            element: $element.find(Selector.Y_EL),
            format: $element.find(Selector.Y_EL).data(Options.FORMAT) || Default.Y_FMT,
            label: {
              show: $element.find(Selector.Y_LABEL_EL).length,
              element: $element.find(Selector.Y_LABEL_EL),
              format: $element.find(Selector.Y_LABEL_EL).data(Options.FORMAT) || Default.Y_LABEL_FMT,
            },
          };
          this.months = {
            show: $element.find(Selector.MTHS_EL).length,
            element: $element.find(Selector.MTHS_EL),
            format: $element.find(Selector.MTHS_EL).data(Options.FORMAT) || Default.MTHS_FMT,
            label: {
              show: $element.find(Selector.MTHS_LABEL_EL).length,
              element: $element.find(Selector.MTHS_LABEL_EL),
              format: $element.find(Selector.MTHS_LABEL_EL).data(Options.FORMAT) || Default.MTHS_LABEL_FMT,
            },
          };
          this.weeks = {
            show: $element.find(Selector.W_EL).length,
            element: $element.find(Selector.W_EL),
            format: $element.find(Selector.W_EL).data(Options.FORMAT) || Default.W_FMT,
            label: {
              show: $element.find(Selector.W_LABEL_EL).length,
              element: $element.find(Selector.W_LABEL_EL),
              format: $element.find(Selector.W_LABEL_EL).data(Options.FORMAT) || Default.W_LABEL_FMT,
            },
          };
          this.days = {
            show: $element.find(Selector.D_EL).length,
            element: $element.find(Selector.D_EL),
            format: $element.find(Selector.D_EL).data(Options.FORMAT) || Default.D_FMT,
            label: {
              show: $element.find(Selector.D_LABEL_EL).length,
              element: $element.find(Selector.D_LABEL_EL),
              format: $element.find(Selector.D_LABEL_EL).data(Options.FORMAT) || Default.D_LABEL_FMT,
            },
          };
          this.hours = {
            show: $element.find(Selector.H_EL).length,
            element: $element.find(Selector.H_EL),
            format: $element.find(Selector.H_EL).data(Options.FORMAT) || Default.H_FMT,
            label: {
              show: $element.find(Selector.H_LABEL_EL).length,
              element: $element.find(Selector.H_LABEL_EL),
              format: $element.find(Selector.H_LABEL_EL).data(Options.FORMAT) || Default.H_LABEL_FMT,
            },
          };
          this.minutes = {
            show: $element.find(Selector.MINS_EL).length,
            element: $element.find(Selector.MINS_EL),
            format: $element.find(Selector.MINS_EL).data(Options.FORMAT) || Default.MINS_FMT,
            label: {
              show: $element.find(Selector.MINS_LABEL_EL).length,
              element: $element.find(Selector.MINS_LABEL_EL),
              format: $element.find(Selector.MINS_LABEL_EL).data(Options.FORMAT) || Default.MINS_LABEL_FMT,
            },
          };
          this.seconds = {
            show: $element.find(Selector.S_EL).length,
            element: $element.find(Selector.S_EL),
            format: $element.find(Selector.S_EL).data(Options.FORMAT) || Default.S_FMT,
            label: {
              show: $element.find(Selector.S_LABEL_EL).length,
              element: $element.find(Selector.S_LABEL_EL),
              format: $element.find(Selector.S_LABEL_EL).data(Options.FORMAT) || Default.S_LABEL_FMT,
            },
          };
        }

        this.initCountdown();
      } // getters

      const _proto = Countdown.prototype;

      _proto.initCountdown = function initCountdown() {
        const _this = this;

        const element = $(this.element);

        if (this.detailed) {
          element.countdown(this.date, (event) => {
            if (!event.elapsed) {
              if (_this.years.show) {
                _this.years.element.text(event.strftime(_this.years.format));
              }

              if (_this.years.label.show) {
                _this.years.label.element.text(event.strftime(_this.years.label.format));
              }

              if (_this.months.show) {
                _this.months.element.text(event.strftime(_this.months.format));
              }

              if (_this.months.label.show) {
                _this.months.label.element.text(event.strftime(_this.months.label.format));
              }

              if (_this.weeks.show) {
                _this.weeks.element.text(event.strftime(_this.weeks.format));
              }

              if (_this.weeks.label.show) {
                _this.weeks.label.element.text(event.strftime(_this.weeks.label.format));
              }

              if (_this.days.show) {
                _this.days.element.text(event.strftime(_this.days.format));
              }

              if (_this.days.label.show) {
                _this.days.label.element.text(event.strftime(_this.days.label.format));
              }

              if (_this.hours.show) {
                _this.hours.element.text(event.strftime(_this.hours.format));
              }

              if (_this.hours.label.show) {
                _this.hours.label.element.text(event.strftime(_this.hours.label.format));
              }

              if (_this.minutes.show) {
                _this.minutes.element.text(event.strftime(_this.minutes.format));
              }

              if (_this.minutes.label.show) {
                _this.minutes.label.element.text(event.strftime(_this.minutes.label.format));
              }

              if (_this.seconds.show) {
                _this.seconds.element.text(event.strftime(_this.seconds.format));
              }

              if (_this.seconds.label.show) {
                _this.seconds.label.element.text(event.strftime(_this.seconds.label.format));
              }
            } else {
              // If the countdown has elapsed (event.elapsed):
              element.find(Selector.ELAPSED).removeClass(CSS.D_NONE);
              element.find(Selector.ACTIVE).addClass(CSS.D_NONE);
            }
          });
        } else {
          $(this.element).countdown(this.date, (event) => {
            if (event.elapsed) {
              element.text(_this.fallback);
            } else {
              element.text(event.strftime(_this.dateFormat));
            }
          });
        }
      };

      Countdown.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachCountdown() {
          const $element = $(this);
          let data = $element.data(DATA_KEY);

          if (!data) {
            data = new Countdown(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(Countdown, null, [{
        key: 'VERSION',
        get: function get() {
          return VERSION;
        },
      }]);

      return Countdown;
    }()); // END Class definition

    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */

    $(window).on(Event.LOAD_DATA_API, () => {
      const cdownsOnPage = $.makeArray($(Selector.COUNTDOWN));
      /* eslint-disable no-plusplus */

      for (let i = cdownsOnPage.length; i--;) {
        const $countdown = $(cdownsOnPage[i]);
        Countdown.jQueryInterface.call($countdown, $countdown.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = Countdown.jQueryInterface;
    $.fn[NAME].Constructor = Countdown;

    $.fn[NAME].noConflict = function CountdownNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Countdown.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */

    return Countdown;
  }(jQuery$1));

  var __assign = undefined && undefined.__assign || function () { return (__assign = Object.assign || function (t) { for (var i, a = 1, s = arguments.length; a < s; a++) for (const n in i = arguments[a])Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]); return t; }).apply(this, arguments); }; const CountUp = (function () {
    function t(t, i, a) {
      const s = this; this.target = t, this.endVal = i, this.options = a, this.version = '2.0.4', this.defaults = {
        startVal: 0, decimalPlaces: 0, duration: 2, useEasing: !0, useGrouping: !0, smartEasingThreshold: 999, smartEasingAmount: 333, separator: ',', decimal: '.', prefix: '', suffix: '',
      }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = '', this.startVal = 0, this.paused = !0, this.count = function (t) { s.startTime || (s.startTime = t); const i = t - s.startTime; s.remaining = s.duration - i, s.useEasing ? s.countDown ? s.frameVal = s.startVal - s.easingFn(i, 0, s.startVal - s.endVal, s.duration) : s.frameVal = s.easingFn(i, s.startVal, s.endVal - s.startVal, s.duration) : s.countDown ? s.frameVal = s.startVal - (s.startVal - s.endVal) * (i / s.duration) : s.frameVal = s.startVal + (s.endVal - s.startVal) * (i / s.duration), s.countDown ? s.frameVal = s.frameVal < s.endVal ? s.endVal : s.frameVal : s.frameVal = s.frameVal > s.endVal ? s.endVal : s.frameVal, s.frameVal = Math.round(s.frameVal * s.decimalMult) / s.decimalMult, s.printValue(s.frameVal), i < s.duration ? s.rAF = requestAnimationFrame(s.count) : s.finalEndVal !== null ? s.update(s.finalEndVal) : s.callback && s.callback(); }, this.formatNumber = function (t) { let i; let a; let n; let e; let r; const o = t < 0 ? '-' : ''; if (i = Math.abs(t).toFixed(s.options.decimalPlaces), n = (a = (i += '').split('.'))[0], e = a.length > 1 ? s.options.decimal + a[1] : '', s.options.useGrouping) { r = ''; for (let l = 0, h = n.length; l < h; ++l)l !== 0 && l % 3 == 0 && (r = s.options.separator + r), r = n[h - l - 1] + r; n = r; } return s.options.numerals && s.options.numerals.length && (n = n.replace(/[0-9]/g, (t) => s.options.numerals[+t]), e = e.replace(/[0-9]/g, (t) => s.options.numerals[+t])), o + s.options.prefix + n + e + s.options.suffix; }, this.easeOutExpo = function (t, i, a, s) { return a * (1 - Math.pow(2, -10 * t / s)) * 1024 / 1023 + i; }, this.options = { ...this.defaults, ...a }, this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(i), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.decimalMult = Math.pow(10, this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, this.options.separator === '' && (this.options.useGrouping = !1), this.el = typeof t === 'string' ? document.getElementById(t) : t, this.el ? this.printValue(this.startVal) : this.error = '[CountUp] target is null or undefined';
    } return t.prototype.determineDirectionAndSmartEasing = function () { const t = this.finalEndVal ? this.finalEndVal : this.endVal; this.countDown = this.startVal > t; const i = t - this.startVal; if (Math.abs(i) > this.options.smartEasingThreshold) { this.finalEndVal = t; const a = this.countDown ? 1 : -1; this.endVal = t + a * this.options.smartEasingAmount, this.duration /= 2; } else this.endVal = t, this.finalEndVal = null; this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing; }, t.prototype.start = function (t) { this.error || (this.callback = t, this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal)); }, t.prototype.pauseResume = function () { this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused; }, t.prototype.reset = function () { cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal); }, t.prototype.update = function (t) { cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t), this.endVal !== this.frameVal && (this.startVal = this.frameVal, this.finalEndVal || this.resetDuration(), this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)); }, t.prototype.printValue = function (t) { const i = this.formattingFn(t); this.el.tagName === 'INPUT' ? this.el.value = i : this.el.tagName === 'text' || this.el.tagName === 'tspan' ? this.el.textContent = i : this.el.innerHTML = i; }, t.prototype.ensureNumber = function (t) { return typeof t === 'number' && !isNaN(t); }, t.prototype.validateValue = function (t) { const i = Number(t); return this.ensureNumber(i) ? i : (this.error = `[CountUp] invalid start or end value: ${t}`, null); }, t.prototype.resetDuration = function () { this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration; }, t;
  }());

  const mrCountup = (function ($) {
    /**
     * Check for scrollMonitor dependency
     * scrollMonitor - https://github.com/stutrek/scrollMonitor
     */
    if (typeof scrollMonitor === 'undefined') {
      throw new Error('mrCountup requires scrollMonitor.js (https://github.com/stutrek/scrollMonitor)');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    const NAME = 'mrCountup';
    const VERSION = '1.1.0';
    const DATA_KEY = 'mr.countup';
    const EVENT_KEY = `.${DATA_KEY}`;
    const DATA_API_KEY = '.data-api';
    const JQUERY_NO_CONFLICT = $.fn[NAME];
    const Options = {
      START: 'start',
      END: 'end',
      DURATION: 'duration',
      GROUPING: 'grouping',
      SEPARATOR: 'separator',
      DECIMAL_CHARACTER: 'decimal-character',
      DECIMAL_PLACES: 'decimal-places',
      PREFIX: 'prefix',
      SUFFIX: 'suffix',
      EASING: 'easing',
    };
    const Event = {
      LOAD_DATA_API: `load${EVENT_KEY}${DATA_API_KEY}`,
      RESIZE: `resize${EVENT_KEY}`,
    };
    const Selector = {
      DATA_ATTR: 'countup',
      DATA_COUNTUP: '[data-countup]',
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    const Countup =
    /* #__PURE__ */
    (function () {
      function Countup(element) {
        const $element = $(element); // Grab data-attributes

        this.start = parseFloat($element.data(Options.START), 10) || 0;
        this.end = parseFloat($element.data(Options.END), 10) || parseFloat($element.text(), 10);
        this.duration = parseFloat($element.data(Options.DURATION), 10) || 2.5;
        this.grouping = $element.data(Options.GROUPING) === true || false;
        this.separator = $element.data(Options.SEPARATOR) || ',';
        this.decimalCharacter = $element.data(Options.DECIMAL_CHARACTER) || '.';
        this.decimalPlaces = parseInt($element.data(Options.DECIMAL_PLACES), 10) || 0;
        this.prefix = $element.data(Options.PREFIX) || '';
        this.suffix = $element.data(Options.SUFFIX) || ''; // the easing data attribute will only disable easing if false is specified. Defaults to true.

        const easing = $element.data(Options.EASING);
        this.easing = easing === false ? easing : true;
        this.element = element;
        this.initWatcher(element);
        this.startCounting();
      } // getters

      const _proto = Countup.prototype;

      _proto.initWatcher = function initWatcher(element) {
        const _this = this;

        this.CountUp = new CountUp(element, this.end, {
          startVal: this.start,
          decimalPlaces: this.decimalPlaces,
          duration: this.duration,
          useEasing: this.easing,
          useGrouping: this.grouping,
          separator: this.separator,
          decimal: this.decimalCharacter,
          prefix: this.prefix,
          suffix: this.suffix,
        });
        const watcher = scrollMonitor.create(element);
        this.watcher = watcher;
        watcher.stateChange(() => {
          _this.startCounting();
        });
      };

      _proto.startCounting = function startCounting() {
        if (this.watcher.isFullyInViewport) {
          if (!this.CountUp.error) {
            this.CountUp.start();
          } else {
            throw new Error(this.CountUp.error);
          }
        }
      };

      Countup.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachCountup() {
          const $element = $(this);
          let data = $element.data(DATA_KEY);

          if (!data) {
            data = new Countup(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(Countup, null, [{
        key: 'VERSION',
        get: function get() {
          return VERSION;
        },
      }]);

      return Countup;
    }());
    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */

    $(window).on(Event.LOAD_DATA_API, () => {
      const countupElements = $.makeArray($(Selector.DATA_COUNTUP));
      /* eslint-disable no-plusplus */

      for (let i = countupElements.length; i--;) {
        const $countup = $(countupElements[i]);
        Countup.jQueryInterface.call($countup, $countup.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = Countup.jQueryInterface;
    $.fn[NAME].Constructor = Countup;

    $.fn[NAME].noConflict = function CountupNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Countup.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */

    return Countup;
  }(jQuery$1));

  //

  var mrUtil = (function ($) {
    const VERSION = '1.2.0';
    const Tagname = {
      SCRIPT: 'script',
    };
    const Selector = {
      RECAPTCHA: '[data-recaptcha]',
    }; // Activate tooltips

    $('body').tooltip({
      selector: '[data-toggle="tooltip"]',
      container: 'body',
    }); // Activate popovers

    $('body').popover({
      selector: '[data-toggle="popover"]',
      container: 'body',
    }); // Activate toasts

    $('.toast').toast();
    const Util = {
      version: VERSION,
      selector: Selector,
      activateIframeSrc: function activateIframeSrc(iframe) {
        const $iframe = $(iframe);

        if ($iframe.attr('data-src')) {
          $iframe.attr('src', $iframe.attr('data-src'));
        }
      },
      idleIframeSrc: function idleIframeSrc(iframe) {
        const $iframe = $(iframe);
        $iframe.attr('data-src', $iframe.attr('src')).attr('src', '');
      },
      forEach: function forEach(array, callback, scope) {
        if (array) {
          if (array.length) {
            for (let i = 0; i < array.length; i += 1) {
              callback.call(scope, i, array[i]); // passes back stuff we need
            }
          } else if (array[0] || mrUtil.isElement(array)) {
            callback.call(scope, 0, array);
          }
        }
      },
      dedupArray: function dedupArray(arr) {
        return arr.reduce((p, c) => {
          // create an identifying String from the object values
          const id = JSON.stringify(c); // if the JSON string is not found in the temp array
          // add the object to the output array
          // and add the key to the temp array

          if (p.temp.indexOf(id) === -1) {
            p.out.push(c);
            p.temp.push(id);
          }

          return p; // return the deduped array
        }, {
          temp: [],
          out: [],
        }).out;
      },
      isElement: function isElement(obj) {
        return !!(obj && obj.nodeType === 1);
      },
      getFuncFromString: function getFuncFromString(funcName, context) {
        const findFunc = funcName || null; // if already a function, return

        if (typeof findFunc === 'function') return funcName; // if string, try to find function or method of object (of "obj.func" format)

        if (typeof findFunc === 'string') {
          if (!findFunc.length) return null;
          let target = context || window;
          const func = findFunc.split('.');

          while (func.length) {
            const ns = func.shift();
            if (typeof target[ns] === 'undefined') return null;
            target = target[ns];
          }

          if (typeof target === 'function') return target;
        } // return null if could not parse

        return null;
      },
      getScript: function getScript(source, callback) {
        let script = document.createElement(Tagname.SCRIPT);
        const prior = document.getElementsByTagName(Tagname.SCRIPT)[0];
        script.async = 1;
        script.defer = 1;

        script.onreadystatechange = function (_, isAbort) {
          if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = null;
            script.onreadystatechange = null;
            script = undefined;

            if (!isAbort && callback && typeof callback === 'function') {
              callback();
            }
          }
        };

        script.onload = script.onreadystatechange;
        script.src = source;
        prior.parentNode.insertBefore(script, prior);
      },
    };
    return Util;
  }(jQuery$1));

  var mrDropdownGrid = (function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    const NAME = 'mrDropdownGrid';
    const VERSION = '1.0.0';
    const DATA_KEY = 'mr.dropdownGrid';
    const EVENT_KEY = `.${DATA_KEY}`;
    const DATA_API_KEY = '.data-api';
    const JQUERY_NO_CONFLICT = $.fn[NAME]; // KeyboardEvent.which value for Escape (Esc) key

    const ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for space key

    const SPACE_KEYCODE = 32; // KeyboardEvent.which value for tab key

    const TAB_KEYCODE = 9; // KeyboardEvent.which value for up arrow key

    const ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for down arrow key

    const ARROW_DOWN_KEYCODE = 40; // MouseEvent.which value for the right button (assuming a right-handed mouse)

    const RIGHT_MOUSE_BUTTON_WHICH = 3;
    const REGEXP_KEYDOWN = new RegExp(`${ARROW_UP_KEYCODE}|${ARROW_DOWN_KEYCODE}|${ESCAPE_KEYCODE}`);
    const ClassName = {
      SHOW: 'show',
    };
    const Event = {
      LOAD_DATA_API: `load${EVENT_KEY}${DATA_API_KEY}`,
      RESIZE: `resize${EVENT_KEY}`,
      HIDE: `hide${EVENT_KEY}`,
      HIDDEN: `hidden${EVENT_KEY}`,
      SHOW: `show${EVENT_KEY}`,
      SHOWN: `shown${EVENT_KEY}`,
      CLICK: `click${EVENT_KEY}`,
      MOUSE_ENTER: `mouseenter${EVENT_KEY}`,
      MOUSE_LEAVE: `mouseleave${EVENT_KEY}`,
      CLICK_DATA_API: `click${EVENT_KEY}${DATA_API_KEY}`,
      KEYDOWN_DATA_API: `keydown${EVENT_KEY}${DATA_API_KEY}`,
      KEYUP_DATA_API: `keyup${EVENT_KEY}${DATA_API_KEY}`,
    };
    const Selector = {
      DATA_TOGGLE: '[data-toggle="dropdown-grid"]',
      FORM_CHILD: '.dropdown form',
      MENU: '.dropdown-menu',
      CONTAINER: '.dropdown-menu',
      CONTENT: '[data-dropdown-content]',
      NAVBAR_NAV: '.navbar-nav',
      VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
    };
    const Options = {
      HOVER: 'data-hover',
      BODY_HOVER: 'data-dropdown-grid-hover',
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    const DropdownGrid =
    /* #__PURE__ */
    (function () {
      function DropdownGrid(element) {
        this.ticking = false;
        this.isActive = false;
        this.element = element;
        this.getOptions();
        this.parent = DropdownGrid.getParentFromElement(this.element);
        this.menu = this.getMenuElement();
        this.container = this.getContainerElement();
        this.content = this.getContentElement();
        this.isSubmenu = this.hasParentMenu();

        if (this.isSubmenu) {
          this.siblingMenus = this.getSiblingMenus();
        }

        this.submenus = this.getSubmenus();
        this.hover = this.options.hover;
        this.addEventListeners();
        this.setResizeEvent();
      }

      const _proto = DropdownGrid.prototype;

      _proto.getOptions = function getOptions() {
        if (!this.options) {
          this.options = {};
          this.options.hover = (this.element.getAttribute(Options.HOVER) === 'true' || document.body.getAttribute(Options.BODY_HOVER) === 'true') && this.element.getAttribute(Options.HOVER) !== 'false';
        }
      };

      _proto.toggle = function toggle(event) {
        this.getParentMenu();

        if (this.element.disabled || $(this.element).hasClass(ClassName.DISABLED)) {
          return;
        }

        this.isActive = $(this.menu).hasClass(ClassName.SHOW);
        const togglingOff = this.isActive;
        const togglingOn = !this.isActive;

        if (!this.isSubmenu) {
          DropdownGrid.clearMenus();
        }

        if (!this.isSubmenu && togglingOff) {
          return;
        }

        if (!this.isSubmenu && togglingOn && event && event.type === Event.MOUSE_LEAVE) {
          return;
        }

        if (this.isSubmenu && this.isActive) {
          DropdownGrid.clearMenus(null, this.element);
          DropdownGrid.clearMenus(null, this.submenus);
          return;
        }

        if (this.isSubmenu && !this.isActive) {
          DropdownGrid.clearMenus(null, this.siblingMenus);
        }

        const relatedTarget = {
          relatedTarget: this.element,
        };
        const showEvent = $.Event(Event.SHOW, relatedTarget);
        $(this.parent).trigger(showEvent);

        if (showEvent.isDefaultPrevented()) {
          return;
        } // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement && $(this.parent).closest(Selector.NAVBAR_NAV).length === 0) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        this.element.focus();
        this.element.setAttribute('aria-expanded', true);
        $(this.menu).toggleClass(ClassName.SHOW); // Recalculate positions after applying the shown class
        // This is because jQuery can't measure an invisible element.

        this.updatePosition();
        this.isActive = true;
        $(this.parent).toggleClass(ClassName.SHOW).trigger($.Event(Event.SHOWN, relatedTarget));
      };

      _proto.updatePosition = function updatePosition(winWidth) {
        const windowWidth = winWidth || window.innerWidth;
        const trigger = mrDropdownGrid.getDimensionsFromElement(this.element);
        this.positionContainer(trigger.offsetLeft);
        this.positionContent(windowWidth, trigger.offsetLeft);
      };

      _proto.positionContainer = function positionContainer(offsetLeft) {
        if (this.container) {
          this.container.style.left = `-${offsetLeft}px`;
        } else {
          throw new TypeError('No element matching .dropdown-menu.container found.');
        }
      };

      _proto.positionContent = function positionContent(windowWidth, offsetLeft) {
        if (this.content) {
          let leftValue; // let topValue;

          const contentRect = mrDropdownGrid.getDimensionsFromElement(this.content);
          const contentWidth = contentRect.width; // If submenu, the left of the content needs to sit to the side of the trigger's content

          if (this.isSubmenu) {
            this.getParentMenu();
            const parentContent = mrDropdownGrid.getDimensionsFromElement(this.parentMenu.content); // Calculate X Offset

            if (parentContent.offsetLeft + parentContent.width + contentWidth <= windowWidth) {
              // Submenu can fit next to parent menu
              leftValue = parentContent.offsetLeft + parentContent.width;
            } else if (parentContent.offsetLeft >= contentWidth) {
              // No room for submenu to fit to the right of parent, sit it to the left instead.
              leftValue = parentContent.offsetLeft - contentWidth;
            } else {
              leftValue = 0;
            } // Calculate Y offset
          } else if (contentWidth + offsetLeft >= windowWidth) {
            // Not a submenu, but if the content won't fit, sit content close to the right boundary
            leftValue = windowWidth - contentWidth;
          } else {
            // Not a submenu, and there is room to fit normally and sit below trigger
            leftValue = offsetLeft;
          }

          const leftString = `${Math.round(leftValue)}px`;
          this.content.style.left = leftString;
        } else {
          throw new TypeError('No [data-dropdown-content] element was found.');
        }
      };

      _proto.setResizeEvent = function setResizeEvent() {
        const _this = this;

        $(window).on(Event.RESIZE, () => {
          if (!_this.ticking) {
            window.requestAnimationFrame(() => {
              _this.updatePosition();

              _this.ticking = false;
            });
            _this.ticking = true;
          }
        });
      };

      _proto.getMenuElement = function getMenuElement() {
        if (!this.menu) {
          if (this.parent) {
            this.menu = this.parent.querySelector(Selector.MENU);
          }
        }

        return this.menu;
      };

      _proto.getContainerElement = function getContainerElement() {
        if (!this.container) {
          if (this.parent) {
            this.container = this.parent.querySelector(`${Selector.MENU}${Selector.CONTAINER}`);
          }
        }

        return this.container;
      };

      _proto.getContentElement = function getContentElement() {
        if (!this.content) {
          if (this.parent) {
            this.content = this.container.querySelector(Selector.CONTENT);
          }
        }

        return this.content;
      };

      _proto.hasParentMenu = function hasParentMenu() {
        return $(this.element).closest(Selector.CONTENT).length > 0;
      };

      _proto.getParentMenu = function getParentMenu() {
        if (this.isSubmenu && !this.parentMenu) {
          this.parentMenu = $(this.parent).closest(Selector.MENU).siblings(Selector.DATA_TOGGLE).data(DATA_KEY);
        }
      };

      _proto.getSiblingMenus = function getSiblingMenus() {
        return $(this.element).closest(Selector.CONTENT).get(0).querySelectorAll(Selector.DATA_TOGGLE);
      };

      _proto.getSubmenus = function getSubmenus() {
        const children = this.content.querySelectorAll(Selector.DATA_TOGGLE);
        this.isParent = children.length !== 0;
        return children;
      };

      _proto.addEventListeners = function addEventListeners() {
        const _this2 = this;

        $(this.element).on(Event.CLICK, (event) => {
          event.preventDefault();
          event.stopPropagation();

          _this2.toggle();
        });

        if (this.hover) {
          $(this.parent).on(`${Event.MOUSE_ENTER} ${Event.MOUSE_LEAVE}`, (event) => {
            event.preventDefault();
            event.stopPropagation();

            if (`${event.type}${EVENT_KEY}` === Event.MOUSE_ENTER && _this2.isActive || `${event.type}${EVENT_KEY}` === Event.MOUSE_LEAVE && !_this2.isActive) {
              return;
            }

            _this2.toggle(event);
          });
        }
      };

      DropdownGrid.getDimensionsFromElement = function getDimensionsFromElement(element) {
        if (element && mrUtil.isElement(element)) {
          const rect = element.getBoundingClientRect();
          rect.offsetLeft = Math.round(rect.left + window.pageXOffset - document.documentElement.clientLeft);
          return rect;
        } // If not an element, throw an error

        throw new TypeError('Can\'t get a measurement from a non-element');
      };

      DropdownGrid.getParentFromElement = function getParentFromElement(element) {
        return element.parentNode;
      };

      DropdownGrid.clearMenus = function clearMenus(event, specificToggle) {
        if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup') && event.which !== TAB_KEYCODE) {
          return;
        }

        let toggles;

        if (specificToggle && typeof specificToggle === 'object') {
          toggles = specificToggle;
        } else {
          toggles = document.querySelectorAll(Selector.DATA_TOGGLE);
        }

        mrUtil.forEach(toggles, (index, toggle) => {
          const parent = DropdownGrid.getParentFromElement(toggle);
          const context = $(toggle).data(DATA_KEY);
          const relatedTarget = {
            relatedTarget: toggle,
          };

          if (event && event.type === 'click') {
            relatedTarget.clickEvent = event;
          }

          if (!context) {
            return;
          }

          const dropdownMenu = context.menu;

          if (!$(parent).hasClass(ClassName.SHOW)) {
            return;
          }

          if (event) {
            if ((event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
              return;
            }
          }

          if (event) {
            if (event.type === 'click' && ($.contains(context.content, event.target) || context.content.isSameNode(event.target))) {
              return;
            }
          }

          const hideEvent = $.Event(Event.HIDE, relatedTarget);
          $(parent).trigger(hideEvent);

          if (hideEvent.isDefaultPrevented()) {
            return;
          } // If this is a touch-enabled device we remove the extra
          // empty mouseover listeners we added for iOS support

          if ('ontouchstart' in document.documentElement) {
            $(document.body).children().off('mouseover', null, $.noop);
          }

          toggle.setAttribute('aria-expanded', 'false');
          context.isActive = false;
          $(dropdownMenu).removeClass(ClassName.SHOW);
          $(parent).removeClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN, relatedTarget));
        });
      };

      DropdownGrid.jQueryInterface = function jQueryInterface(config) {
        return this.each(function jqEachDropdownGrid() {
          const $element = $(this);
          let data = $element.data(DATA_KEY);

          if (!data) {
            data = new DropdownGrid(this);
            $element.data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError(`No method named "${config}"`);
            }

            data[config]();
          }
        });
      } // eslint-disable-next-line complexity
      ;

      DropdownGrid.dataApiKeydownHandler = function dataApiKeydownHandler(event) {
        // If not input/textarea:
        //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
        // If input/textarea:
        //  - If space key => not a dropdown command
        //  - If key is other than escape
        //    - If key is not up or down => not a dropdown command
        //    - If trigger inside the menu => not a dropdown command
        if (/input|textarea/i.test(event.target.tagName) ? (event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE) && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(Selector.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
          return;
        }

        const parent = DropdownGrid.getParentFromElement(this);
        const isActive = $(parent).hasClass(ClassName.SHOW);

        if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
          if (event.which === ESCAPE_KEYCODE) {
            const toggle = parent.querySelector(Selector.DATA_TOGGLE);
            $(toggle).trigger('focus');
          }

          $(this).trigger('click');
          return;
        }

        const items = [].slice.call(parent.querySelectorAll(Selector.VISIBLE_ITEMS));

        if (items.length === 0) {
          return;
        }

        let index = items.indexOf(event.target);

        if (event.which === ARROW_UP_KEYCODE && index > 0) {
          // Up
          index -= 1;
        }

        if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
          // Down
          index += 1;
        }

        if (index < 0) {
          index = 0;
        }

        items[index].focus();
      };

      _createClass(DropdownGrid, null, [{
        key: 'VERSION',
        get: function get() {
          return VERSION;
        },
      }]);

      return DropdownGrid;
    }());
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, DropdownGrid.dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, DropdownGrid.dataApiKeydownHandler).on(`${Event.CLICK_DATA_API} ${Event.KEYUP_DATA_API}`, DropdownGrid.clearMenus)
      .on(Event.CLICK_DATA_API, Selector.FORM_CHILD, (e) => {
        e.stopPropagation();
      });
    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */

    $(document).ready(() => {
      const dropdownGridElements = $.makeArray($(Selector.DATA_TOGGLE));
      /* eslint-disable no-plusplus */

      for (let i = dropdownGridElements.length; i--;) {
        const $dropdownGrid = $(dropdownGridElements[i]);
        DropdownGrid.jQueryInterface.call($dropdownGrid, $dropdownGrid.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = DropdownGrid.jQueryInterface;
    $.fn[NAME].Constructor = DropdownGrid;

    $.fn[NAME].noConflict = function DropdownGridNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return DropdownGrid.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */

    return DropdownGrid;
  }(jQuery$1));

  //
  //
  //  fade-page.js
  //
  //
  // Page Transition to fade out when clicking a link which has opted in using class 'fade-page'
  (function () {
    const ATTR_HREF = 'href';
    const EVENT_CLICK = 'click';
    const SELECTOR_FADE = 'fade-page';
    const EFFECT_DELAY = 500;
    const fadePage = document.getElementsByClassName(SELECTOR_FADE);

    function fadePageFunction(event) {
      if (!(event.ctrlKey || event.shiftKey || event.metaKey || event.button && event.button === 1)) {
        event.preventDefault();
        event.stopPropagation();
        document.body.classList.add(SELECTOR_FADE);
        const href = this.getAttribute(ATTR_HREF);
        setTimeout(() => {
          if (href !== '' && href !== '#') {
            window.location.href = href;
          }
        }, EFFECT_DELAY);
      }
    } // Bind click event

    for (let i = 0; i < fadePage.length; i += 1) {
      fadePage[i].addEventListener(EVENT_CLICK, fadePageFunction, false);
    }
  }());

  const mrFlatpickr = (function ($) {
    /**
     * Check for flatpickr dependency
     */
    if (typeof flatpickr === 'undefined') {
      throw new Error('mrFlatpickr requires flatpickr.js (https://github.com/flatpickr/flatpickr)');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    const NAME = 'mrFlatpickr';
    const VERSION = '1.0.0';
    const DATA_KEY = 'mr.flatpickr';
    const EVENT_KEY = `.${DATA_KEY}`;
    const DATA_API_KEY = '.data-api';
    const JQUERY_NO_CONFLICT = $.fn[NAME];
    const Event = {
      LOAD_DATA_API: `load${EVENT_KEY}${DATA_API_KEY}`,
    };
    const Selector = {
      FLATPICKR: '[data-flatpickr]',
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    const Flatpickr =
    /* #__PURE__ */
    (function () {
      function Flatpickr(element) {
        // The current flatpickr element
        this.element = element; // const $element = $(element);

        this.initflatpickr();
      } // getters

      const _proto = Flatpickr.prototype;

      _proto.initflatpickr = function initflatpickr() {
        const options = $(this.element).data();
        this.instance = flatpickr(this.element, options);
      };

      Flatpickr.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachFlatpickr() {
          const $element = $(this);
          let data = $element.data(DATA_KEY);

          if (!data) {
            data = new Flatpickr(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(Flatpickr, null, [{
        key: 'VERSION',
        get: function get() {
          return VERSION;
        },
      }]);

      return Flatpickr;
    }()); // END Class definition

    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */

    $(window).on(Event.LOAD_DATA_API, () => {
      const pickers = $.makeArray($(Selector.FLATPICKR));
      /* eslint-disable no-plusplus */

      for (let i = pickers.length; i--;) {
        const $flatpickr = $(pickers[i]);
        Flatpickr.jQueryInterface.call($flatpickr, $flatpickr.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = Flatpickr.jQueryInterface;
    $.fn[NAME].Constructor = Flatpickr;

    $.fn[NAME].noConflict = function flatpickrNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Flatpickr.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */

    return Flatpickr;
  }(jQuery$1));

  //

  (function () {
    $(document).on('shown.bs.modal layoutComplete', (e) => {
      const flickityInstance = $(e.target).find('[data-flickity]');
      flickityInstance.each((index, instance) => {
        const $instance = $(instance);

        if ($instance.data().flickity.isInitActivated) {
          $instance.flickity('resize');
        }
      });
    });
  }());

  var mrRecaptchav2 = (function ($) {
    // Check mrUtil is present and correct version
    if (!(mrUtil && mrUtil.version >= '1.2.0')) {
      throw new Error('mrUtil >= version 1.2.0 is required.');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    const NAME = 'mrRecaptchav2';
    const VERSION = '1.0.0';
    const DATA_KEY = 'mr.recaptchav2'; // const EVENT_KEY = `.${DATA_KEY}`;
    // const DATA_API_KEY = '.data-api';

    const JQUERY_NO_CONFLICT = $.fn[NAME];
    const RECAPTCHA_CALLBACK = 'mrRecaptchav2Init';
    const RemoteScript = {
      RECAPTCHAV2: `https://www.google.com/recaptcha/api.js?onload=${RECAPTCHA_CALLBACK}&render=explicit`,
    };
    const Selector = {
      DATA_RECAPTCHA: '[data-recaptcha]',
      FORM: 'form',
    };
    const Options = {
      INVISIBLE: 'invisible',
    }; // "static" properties

    const instances = [];
    let apiReady = false;
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    const Recaptchav2 =
    /* #__PURE__ */
    (function () {
      function Recaptchav2(element) {
        this.element = element;
        this.form = this.getForm();
        this.isReady = false;
        this.isValid = false;
        this.options = $(this.element).data();
        this.invisible = this.options.size === Options.INVISIBLE;
        this.id = null; // Save instance into static property array

        instances.push(this);
      } // getters

      const _proto = Recaptchav2.prototype;

      _proto.init = function init() {
        const _this = this;

        if (this.element.innerHTML.replace(/[\s\xA0]+/g, '') === '') {
          this.id = grecaptcha.render(this.element, {
            sitekey: this.options.sitekey,
            theme: this.options.theme,
            size: this.options.size,
            badge: this.options.badge,
            tabindex: this.options.tabindex,
            callback: function callback() {
              _this.validate();
            },
            'expired-callback': function expiredCallback() {
              _this.invalidate();
            },
          });
          this.isReady = true;
        }
      };

      _proto.validate = function validate() {
        this.isValid = true;

        if (this.invisible && this.form) {
          $(this.form).trigger('submit');
        }
      };

      _proto.invalidate = function invalidate() {
        this.isValid = false;
      };

      _proto.checkValidity = function checkValidity() {
        if (this.isReady && this.isValid) {
          return true;
        }

        return false;
      };

      _proto.execute = function execute() {
        if (this.isReady && this.invisible) {
          grecaptcha.execute(this.id);
        }
      };

      _proto.reset = function reset() {
        if (this.isReady) {
          grecaptcha.reset(this.id);
          this.isValid = false;
        }
      };

      _proto.getForm = function getForm() {
        const closestForm = $(this.element).closest(Selector.FORM);
        return closestForm.length ? closestForm.get(0) : null;
      };

      Recaptchav2.getRecaptchaFromForm = function getRecaptchaFromForm(form) {
        if (mrUtil.isElement(form)) {
          const captchaElement = form.querySelector(Selector.DATA_RECAPTCHA);

          if (captchaElement) {
            const data = $(captchaElement).data(DATA_KEY);
            return data || null;
          }

          return null;
        }

        throw new TypeError('Form argument passed to getRecaptchaFromForm is not an element.');
      };

      Recaptchav2.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachRecaptchav2() {
          const $element = $(this);
          let data = $element.data(DATA_KEY);

          if (!data) {
            data = new Recaptchav2(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(Recaptchav2, null, [{
        key: 'VERSION',
        get: function get() {
          return VERSION;
        },
      }, {
        key: 'ready',
        get: function get() {
          return apiReady;
        },
      }, {
        key: 'instances',
        get: function get() {
          return instances;
        },
      }, {
        key: 'apiReady',
        set: function set(ready) {
          if (ready === true && apiReady === false) {
            mrUtil.forEach(Recaptchav2.instances, (index, instance) => {
              instance.init();
            });
          }

          apiReady = true;
        },
      }]);

      return Recaptchav2;
    }());

    window.mrRecaptchav2Init = function () {
      mrRecaptchav2.apiReady = true;
    };
    /**
     * ------------------------------------------------------------------------
     * Initialise API javascript if recaptcha widgets are found
     * ------------------------------------------------------------------------
     */

    $(document).ready(() => {
      const Recaptchav2Elements = $.makeArray($(Selector.DATA_RECAPTCHA));

      if (Recaptchav2Elements.length > 0) {
        mrUtil.getScript(RemoteScript.RECAPTCHAV2);
        /* eslint-disable no-plusplus */

        for (let i = Recaptchav2Elements.length; i--;) {
          const $Recaptchav2 = $(Recaptchav2Elements[i]);
          Recaptchav2.jQueryInterface.call($Recaptchav2, $Recaptchav2.data());
        }
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = Recaptchav2.jQueryInterface;
    $.fn[NAME].Constructor = Recaptchav2;

    $.fn[NAME].noConflict = function Recaptchav2NoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Recaptchav2.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */

    return Recaptchav2;
  }(jQuery));

  const mrFormEmail = (function ($) {
    // Check mrUtil is present and correct version
    if (!(mrUtil && mrUtil.version >= '1.2.0')) {
      throw new Error('mrUtil >= version 1.2.0 is required.');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    const NAME = 'mrFormEmail';
    const VERSION = '1.0.0';
    const DATA_KEY = 'mr.formEmail';
    const EVENT_KEY = `.${DATA_KEY}`;
    const DATA_API_KEY = '.data-api';
    const JQUERY_NO_CONFLICT = $.fn[NAME];
    const ClassName = {
      LOADING: 'btn-loading-animate',
      WAS_VALIDATED: 'was-validated',
      D_NONE: 'd-none',
    };
    const Attribute = {
      ACTION: 'action',
      DISABLED: 'disabled',
      FEEDBACK_DELAY: 'data-feedback-delay',
      SUCCESS_REDIRECT: 'data-success-redirect',
    };
    const Selector = {
      DATA_ATTR: 'form-email',
      DATA_FORM_EMAIL: '[data-form-email]',
      DATA_SUCCESS: '[data-success-message]',
      DATA_ERROR: '[data-error-message]',
      SUBMIT_BUTTON: 'button[type="submit"]',
      SPAN: 'span',
      ALL_INPUTS: 'input,textarea,select',
    };
    const Event = {
      SENT: `sent${EVENT_KEY}`,
      LOAD_DATA_API: `load${EVENT_KEY}${DATA_API_KEY}`,
      SUBMIT: 'submit',
    };
    const Options = {
      LOADING_TEXT: 'data-loading-text',
    };
    const Default = {
      LOADING_TEXT: 'Sending',
      FORM_ACTION: 'forms/mail.php',
      FEEDBACK_DELAY: 5000,
      ERROR_TEXT: 'Form submission error',
    };
    const Status = {
      SUCCESS: 'success',
      ERROR: 'error',
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    const FormEmail =
    /* #__PURE__ */
    (function () {
      function FormEmail(element) {
        this.form = element;
        this.action = this.form.getAttribute(Attribute.ACTION) || Default.FORM_ACTION; // Returns an object containing the feedback

        this.feedback = this.getFeedbackElements(); // Get any recaptcha instances in the form - returns array of instances or null

        this.getRecaptcha(); // Get submit button, inner span and loading text.

        this.initSubmitButton(); // const $element = $(element);

        this.setSubmitEvent();
      } // getters

      const _proto = FormEmail.prototype;

      _proto.submitForm = function submitForm() {
        // Hide feedback mesages for fresh submit
        this.hideAllFeedback(); // Submit form if validateForm returns true

        if (this.validateForm()) {
          this.ajaxSubmit();
        }
      };

      _proto.validateForm = function validateForm() {
        let formIsValid = this.form.checkValidity();

        if (this.recaptcha) {
          if (this.recaptcha.invisible) {
            if (formIsValid && !this.recaptcha.checkValidity()) {
              this.recaptcha.execute();
              return false;
            } // invalidate if captcha is found and is not valid, otherwise keep original value
          } else if (this.recaptcha.checkValidity() === false) {
            formIsValid = false;
          }
        }

        if (!formIsValid) {
          // Cancel timeout so error message will stay shown
          clearTimeout(this.feedbackTimeout); // Allow BS validation styles to take effect

          this.form.classList.add(ClassName.WAS_VALIDATED);
          this.showFeedback(Status.ERROR, this.validationErrorMessage);
          return false;
        }

        this.form.classList.remove(ClassName.WAS_VALIDATED);
        return true;
      };

      _proto.ajaxSubmit = function ajaxSubmit() {
        const $form = $(this.form);
        const formData = $form.serializeArray();
        formData.push({
          name: 'url',
          value: window.location.href,
        });
        jQuery$1.ajax({
          context: this,
          data: formData,
          dataType: 'json',
          error: this.showFeedback,
          success: this.processResponse,
          type: 'POST',
          url: this.action,
        });
        this.toggleFormLoading(true);
      };

      _proto.initSubmitButton = function initSubmitButton() {
        if (!this.submitButton) {
          this.submitButton = this.form.querySelector(Selector.SUBMIT_BUTTON);
        }

        this.submitButtonSpan = this.submitButton.querySelector(Selector.SPAN);
        this.loadingText = this.submitButton.getAttribute(Options.LOADING_TEXT) || Default.LOADING_TEXT;
        this.originalSubmitText = this.submitButtonSpan.textContent;
        return this.submitButton;
      };

      _proto.processResponse = function processResponse(response) {
        const _this = this;

        const success = response.status === Status.SUCCESS; // Form is no longer in a 'loading' state

        this.toggleFormLoading(false); // Recaptcha will need to be solved again

        if (this.recaptcha) {
          this.recaptcha.reset();
        } // Trigger an event so users can fire Analytics scripts upon success

        $(this.form).trigger($.Event(Event.SENT)); // Redirect upon success if data-attribute is set

        const successRedirect = this.form.getAttribute(Attribute.SUCCESS_REDIRECT);

        if (success && successRedirect && successRedirect !== '') {
          window.location = successRedirect;
        } else if (success) {
          this.form.reset(); // Hide all feedback and hold a reference to the timeout
          // to cancel it when necessary.

          this.feedbackTimeout = setTimeout(() => _this.hideAllFeedback(), this.feedbackDelay);
        } //  Show ERROR feedback message if not redirecting

        if (!successRedirect) {
          this.showFeedback(response.status, response.message);
        } // Detailed error message will be shown in Console if provided

        if (response.errorDetail) {
          /* eslint-disable no-console */
          console.error(response.errorName || Default.ERROR_TEXT, response.errorDetail.indexOf('{') === 0 ? JSON.parse(response.errorDetail) : response.errorDetail);
          /* eslint-enable no-console */
        }
      };

      _proto.showFeedback = function showFeedback(status, text, errorHTTP) {
        // Form is no longer in a 'loading' state
        this.toggleFormLoading(false); // If this is an ajax error from jQuery, 'status' will be
        // an object with statusText property

        if (typeof status === 'object' && status.statusText) {
          clearTimeout(this.feedbackTimeout);
          this.feedback.error.innerHTML = `${errorHTTP || text}: <em>"${this.action}"</em> (${status.status} ${text})`;
          this.feedback.error.classList.remove(ClassName.D_NONE);
        } else {
          this.feedback[status].innerHTML = text;
          this.feedback[status].classList.remove(ClassName.D_NONE);
        }
      };

      _proto.hideAllFeedback = function hideAllFeedback() {
        this.feedback.success.classList.add(ClassName.D_NONE);
        this.feedback.error.classList.add(ClassName.D_NONE);
      };

      _proto.getFeedbackElements = function getFeedbackElements() {
        if (!this.feedback) {
          this.feedback = {
            success: this.form.querySelector(Selector.DATA_SUCCESS),
            error: this.form.querySelector(Selector.DATA_ERROR),
          }; // Store the error alert's original text to be used as validation error message

          this.validationErrorMessage = this.feedback.error.innerHTML;
          const feedbackDelay = this.form.getAttribute(Attribute.FEEDBACK_DELAY) || Default.FEEDBACK_DELAY;
          this.feedbackDelay = parseInt(feedbackDelay, 10);
          this.feedbackTimeout = null;
        }

        return this.feedback;
      };

      _proto.getRecaptcha = function getRecaptcha() {
        if (this.form.querySelector(mrUtil.selector.RECAPTCHA)) {
          // Check mrUtil is present and correct version
          if (!mrRecaptchav2) {
            throw new Error('mrRecaptcha.js is required to handle the reCAPTCHA element in this form.');
          } else {
            // Returns an array of mrRecaptcha instances or null
            this.recaptcha = mrRecaptchav2.getRecaptchaFromForm(this.form);
          }
        }
      };

      _proto.toggleFormLoading = function toggleFormLoading(loading) {
        this.toggleSubmitButtonLoading(loading);
        FormEmail.toggleDisabled(this.form.querySelectorAll(Selector.ALL_INPUTS), loading);
      };

      _proto.toggleSubmitButtonLoading = function toggleSubmitButtonLoading(loading) {
        this.toggleSubmitButtonText(loading);
        this.toggleSubmitButtonAnimation(loading);
        FormEmail.toggleDisabled(this.submitButton, loading);
      };

      _proto.toggleSubmitButtonAnimation = function toggleSubmitButtonAnimation(animate) {
        // If animate is true, add the class, else remove it.
        this.submitButton.classList[animate ? 'add' : 'remove'](ClassName.LOADING);
      };

      _proto.toggleSubmitButtonText = function toggleSubmitButtonText(loading) {
        // If loading, set text to loading text, else return to original text.
        this.submitButtonSpan.textContent = loading ? this.loadingText : this.originalSubmitText;
      };

      FormEmail.toggleDisabled = function toggleDisabled(elements, disabled) {
        // If loading, set text to loading text, else return to original text.
        mrUtil.forEach(elements, (index, element) => element[disabled ? 'setAttribute' : 'removeAttribute'](Attribute.DISABLED, ''));
      };

      FormEmail.getInstanceFromForm = function getInstanceFromForm(form) {
        if (mrUtil.isElement(form)) {
          const data = $(form).data(DATA_KEY);
          return data || null;
        }

        throw new TypeError('Form argument passed to getInstanceFromForm is not an element.');
      };

      _proto.setSubmitEvent = function setSubmitEvent() {
        const _this2 = this;

        $(this.form).on(Event.SUBMIT, (event) => {
          event.preventDefault();

          _this2.submitForm();
        });
      };

      FormEmail.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachFormEmail() {
          const $element = $(this);
          let data = $element.data(DATA_KEY);

          if (!data) {
            data = new FormEmail(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(FormEmail, null, [{
        key: 'VERSION',
        get: function get() {
          return VERSION;
        },
      }]);

      return FormEmail;
    }());
    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */

    $(window).on(Event.LOAD_DATA_API, () => {
      const FormEmailElements = $.makeArray($(Selector.DATA_FORM_EMAIL));
      /* eslint-disable no-plusplus */

      for (let i = FormEmailElements.length; i--;) {
        const $FormEmail = $(FormEmailElements[i]);
        FormEmail.jQueryInterface.call($FormEmail, $FormEmail.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = FormEmail.jQueryInterface;
    $.fn[NAME].Constructor = FormEmail;

    $.fn[NAME].noConflict = function FormEmailNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return FormEmail.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */

    return FormEmail;
  }(jQuery$1));

  var mrIonRangeSlider = (function ($) {
    /**
     * Check for Ion rangeSlider dependency
     * https://github.com/IonDen/ion.rangeSlider
     */
    if (typeof $.fn.ionRangeSlider !== 'function') {
      throw new Error('mrIonRangeSlider requires ion.rangeSlider.js (https://github.com/IonDen/ion.rangeSlider)');
    } // Check mrUtil is present and correct version

    if (!(mrUtil && mrUtil.version >= '1.2.0')) {
      throw new Error('mrUtil >= version 1.2.0 is required.');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    const NAME = 'mrIonRangeSlider';
    const VERSION = '1.0.0';
    const DATA_KEY = 'mr.ionRangeSlider';
    const EVENT_KEY = `.${DATA_KEY}`;
    const DATA_API_KEY = '.data-api';
    const JQUERY_NO_CONFLICT = $.fn[NAME];
    const ION_RANGE_SLIDER_KEY = 'ionRangeSlider';
    const Event = {
      LOAD_DATA_API: `load${EVENT_KEY}${DATA_API_KEY}`,
      CHANGE: 'input',
    };
    const Selector = {
      DATA_ATTR: 'ion-rangeslider',
      DATA_ION_RANGESLIDER: '[data-ion-rangeslider]',
      INPUT: 'INPUT',
      TEXT: 'text',
    };
    const Options = {
      SKIN_DEFAULT: 'theme',
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    const IonRangeSlider =
    /* #__PURE__ */
    (function () {
      function IonRangeSlider(element) {
        const $element = $(element);
        this.options = $element.data();
        this.element = element;
        this.fromElement = null;
        this.toElement = null;
        this.unitElement = null;
        this.initRangeSlider();
      } // getters

      const _proto = IonRangeSlider.prototype;

      _proto.initRangeSlider = function initRangeSlider() {
        const { options } = this;

        if (options.fromSelector) {
          this.fromElement = document.querySelectorAll(options.fromSelector);
          this.setFromUpdateEvent(this.fromElement);
        }

        if (options.toSelector) {
          this.toElement = document.querySelectorAll(options.toSelector);
          this.setToUpdateEvent(this.toElement);
        }

        if (options.unitSelector && options.unitSingle && options.unitPlural) {
          this.unitElement = document.querySelectorAll(options.unitSelector);
        }

        $(this.element).ionRangeSlider({
          skin: Options.SKIN_DEFAULT,
          onStart: mrUtil.getFuncFromString(options.onStart),
          onFinish: mrUtil.getFuncFromString(options.onFinish),
          onChange: this.handleChange,
          scope: this,
          onUpdate: mrUtil.getFuncFromString(options.onUpdate),
        });
        this.rangeSlider = $(this.element).data(ION_RANGE_SLIDER_KEY);
      } // HandleChange then also calls the user's callback
      ;

      _proto.handleChange = function handleChange(data) {
        if (this.fromElement && this.fromElement.length > 0) {
          mrIonRangeSlider.updateValue(this.fromElement, data.from_value || data.from);
        }

        if (this.toElement && this.toElement.length > 0) {
          mrIonRangeSlider.updateValue(this.toElement, data.to_value || data.to);
        }

        if (this.unitElement && this.unitElement.length > 0) {
          const value = parseInt(data.from_value, 10) || data.value;
          mrIonRangeSlider.updateValue(this.unitElement, value > 1 ? this.options.unitPlural : this.options.unitSingle);
        }

        const userChangeFunction = mrUtil.getFuncFromString(this.options.onChange);

        if (userChangeFunction) {
          userChangeFunction(data);
        }
      } // Takes a collection of "To" elements and attaches
      // a change event handler to update the rangeslider when user inputs a value
      ;

      _proto.setToUpdateEvent = function setToUpdateEvent(collection) {
        const _this = this;

        mrUtil.forEach(collection, (index, element) => {
          if (element.tagName.toUpperCase() === Selector.INPUT && element.type === Selector.TEXT) {
            element.addEventListener(Event.CHANGE, () => {
              _this.rangeSlider.update({
                to: element.value,
              });
            });
          }
        });
      } // Takes a collection of "From" elements and attaches
      // a change event handler to update the rangeslider when user inputs a value
      ;

      _proto.setFromUpdateEvent = function setFromUpdateEvent(collection) {
        const _this2 = this;

        mrUtil.forEach(collection, (index, element) => {
          if (element.tagName.toUpperCase() === Selector.INPUT && element.type === Selector.TEXT) {
            element.addEventListener(Event.CHANGE, () => {
              _this2.rangeSlider.update({
                from: element.value,
              });
            });
          }
        });
      };

      IonRangeSlider.updateValue = function updateValue(collection, value) {
        mrUtil.forEach(collection, (index, element) => {
          const updateElement = element; // If element is an input, set the value instead of textContent

          const updateMethod = element.tagName.toUpperCase() === Selector.INPUT ? 'value' : 'textContent';
          updateElement[updateMethod] = value;
        });
      };

      IonRangeSlider.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachIonRangeSlider() {
          const $element = $(this);
          let data = $element.data(DATA_KEY);

          if (!data) {
            data = new IonRangeSlider(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(IonRangeSlider, null, [{
        key: 'VERSION',
        get: function get() {
          return VERSION;
        },
      }]);

      return IonRangeSlider;
    }());
    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */

    $(window).on(Event.LOAD_DATA_API, () => {
      const ionRangeSliderElements = $.makeArray($(Selector.DATA_ION_RANGESLIDER));
      /* eslint-disable no-plusplus */

      for (let i = ionRangeSliderElements.length; i--;) {
        const $ionRangeSlider = $(ionRangeSliderElements[i]);
        IonRangeSlider.jQueryInterface.call($ionRangeSlider, $ionRangeSlider.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = IonRangeSlider.jQueryInterface;
    $.fn[NAME].Constructor = IonRangeSlider;

    $.fn[NAME].noConflict = function IonRangeSliderNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return IonRangeSlider.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */

    return IonRangeSlider;
  }(jQuery$1));

  const mrIsotope = (function ($) {
    /**
     * Check for isotope dependency
     * isotope - https://github.com/metafizzy/isotope
     */
    if (typeof Isotope$1 === 'undefined') {
      throw new Error('mrIsotope requires isotope.pkgd.js (https://github.com/metafizzy/isotope)');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    const NAME = 'mrIsotope';
    const VERSION = '1.0.0';
    const DATA_KEY = 'mr.isotope';
    const EVENT_KEY = `.${DATA_KEY}`;
    const DATA_API_KEY = '.data-api';
    const JQUERY_NO_CONFLICT = $.fn[NAME];
    const Css = {
      ACTIVE: 'active',
    };
    const Event = {
      LOAD_DATA_API: `load${EVENT_KEY}${DATA_API_KEY}`,
      FILTER_CLICK: 'click touchstart',
      SORTER_CLICK: 'click touchstart',
    };
    const Options = {
      DEFAULT_LAYOUT: 'masonry',
      ORIGINAL_ORDER: 'original-order',
    };
    const Selector = {
      FILTER_INITIALISED: '.js-filter-inited',
      DATA_ATTR: 'isotope',
      ISOTOPE_ID: 'data-isotope-id',
      DATA_ISOTOPE_COLLECTION: '[data-isotope-collection]',
      DATA_ISOTOPE_ITEM: '[data-isotope-item]',
      DATA_ISOTOPE_FILTERS: '[data-isotope-filters]',
      DATA_ISOTOPE_SORTERS: '[data-isotope-sorters]',
      CATEGORY: 'data-category',
      FILTER: 'data-filter',
      SORTER: 'data-sort',
      PRIMARY_SORTER: 'data-primary-sort',
      SECOND_SORTER: 'data-secondary-sort',
      SORT_SELECTOR: 'data-sort-selector',
      DATA_CATEGORY: '[data-category]',
      SORT_ASCENDING: 'data-sort-ascending',
      FILTER_ALL: '*',
    }; // returns a selector string for filterable elements matching the provided category

    function getCategoryFilter(filterBy) {
      return filterBy && filterBy !== Selector.FILTER_ALL ? `[${Selector.CATEGORY}*="${filterBy}"]` : Selector.FILTER_ALL;
    } // returns a nodelist of all filter links matching the provided isotope ID

    function getFilters(isotopeId, exclude) {
      const excludeSelector = exclude ? `:not(${exclude})` : '';
      const filters = document.querySelectorAll(`${Selector.DATA_ISOTOPE_FILTERS}[${Selector.ISOTOPE_ID}="${isotopeId}"] [${Selector.FILTER}]${excludeSelector}`);
      return filters;
    } // returns a nodelist of all sorter links matching the provided isotope ID

    function getSorters(isotopeId) {
      return document.querySelectorAll(`${Selector.DATA_ISOTOPE_SORTERS}[${Selector.ISOTOPE_ID}="${isotopeId}"] [${Selector.SORTER}][${Selector.SORT_SELECTOR}],\n      ${Selector.DATA_ISOTOPE_SORTERS}[${Selector.ISOTOPE_ID}="${isotopeId}"] [${Selector.SORTER}][${Selector.PRIMARY_SORTER}][${Selector.SECOND_SORTER}]`);
    } // returns a nodelist of all sorter links matching the provided sort value

    function getSorter(isotopeId, sortValue) {
      return document.querySelectorAll(`${Selector.DATA_ISOTOPE_SORTERS}[${Selector.ISOTOPE_ID}="${isotopeId}"] [${Selector.SORTER}="${sortValue}"]`);
    } // returns a nodelist of all filter links matching the provided filter value

    function getFilter(isotopeId, filter) {
      return document.querySelectorAll(`${Selector.DATA_ISOTOPE_FILTERS}[${Selector.ISOTOPE_ID}="${isotopeId}"] [${Selector.FILTER}="${filter}"]`);
    } // sets active class of provided elements on or off

    function toggleActive(filters, active) {
      if (filters) {
        mrUtil.forEach(filters, (index, filter) => {
          if (filter && typeof filter.classList !== typeof undefined) {
            if (active) {
              filter.classList.add(Css.ACTIVE);
            } else {
              filter.classList.remove(Css.ACTIVE);
            }
          }
        });
      }
    }
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    const IsotopeWrapper =
    /* #__PURE__ */
    (function () {
      function IsotopeWrapper(element) {
        const $element = $(element);
        const attributes = $element.data();
        this.element = element;
        this.attributes = attributes;
        this.filters = {};
        this.sorters = {};
        this.activeFilter = null;
        this.activeSorter = null;
        this.isotope = null;
        this.options = {};
        this.options.getSortData = {};
        this.options.sortAscending = {};
        this.initIsotope();
        this.initSorters();
        this.initFilters();
      } // getters

      const _proto = IsotopeWrapper.prototype;

      _proto.initFilters = function initFilters() {
        const _this = this;

        // Get all filter links
        const filters = getFilters(this.attributes.isotopeId, Selector.FILTER_INITIALISED);
        mrUtil.forEach(filters, (index, filter) => {
          const filterValue = filter.attributes[Selector.FILTER] && filter.attributes[Selector.FILTER].value; // Find all other filters matching this value to be de/activated on click

          _this.filters[filterValue] = getFilter(_this.attributes.isotopeId, filterValue); // Set up filter click event

          $(filter).on(Event.FILTER_CLICK, (event) => {
            if (event.preventDefault) {
              event.preventDefault();
            } // Activate appropriate links

            toggleActive(_this.activeFilter, false);
            toggleActive(_this.filters[filterValue], true);
            _this.activeFilter = filters; // Get selectorified filter value unless value is '*' (* does not need to be a selector)

            _this.options.filter = filterValue === '*' ? filterValue : getCategoryFilter(filterValue); // Update isotope with current filter settings

            _this.isotope.arrange(_this.options);
          }); // Add FILTER_INITIALISED class
          // just to make distinguishing old and new filters easier

          filter.classList.add(Selector.FILTER_INITIALISED);
        });
      };

      _proto.initSorters = function initSorters() {
        const _this2 = this;

        // Get all sorters linked to current isotope-id
        const sorters = getSorters(this.attributes.isotopeId);
        const defaultSort = this.attributes.defaultSort || Options.ORIGINAL_ORDER;
        mrUtil.forEach(sorters, (index, sorter) => {
          // Get options from attributes
          // Done this way for brevity (previous way was too wordy)
          const sa = sorter.attributes;
          const ss = sa[Selector.SORTER];
          const ssel = sa[Selector.SORT_SELECTOR];
          const asc = sa[Selector.SORT_ASCENDING];
          const pri = sa[Selector.PRIMARY_SORTER];
          const sec = sa[Selector.SECOND_SORTER]; // Extract options from attributes

          const sortValue = ss && ss.value;
          const sortSelector = ssel && ssel.value; // If secondSort is set, pass in an array rather than a single sort value

          const arraySort = pri && pri.value && sec && sec.value ? [pri.value, sec.value] : null;
          const sortAscending = !(asc && asc.value && asc.value === 'false'); // Store list of other sorters matching this value to be de/activated on click

          _this2.sorters[sortValue] = getSorter(_this2.attributes.isotopeId, sortValue); // Set up sorters click event for this one sorter

          $(sorter).on(Event.SORTER_CLICK, (event) => {
            if (event.preventDefault) {
              event.preventDefault();
            } // Switch active class on sorter links

            toggleActive(_this2.activeSorter, false);
            toggleActive(_this2.sorters[sortValue], true);
            _this2.activeSorter = _this2.sorters[sortValue]; // Pass in the arraySort (primary/secondary) array if it exists
            // otherwise use clicked sortValue

            _this2.options.sortBy = arraySort || sortValue; // Update isotope with curent options

            _this2.isotope.arrange(_this2.options);
          }); // Set sortAscending object with current sortAscending value

          _this2.options.sortAscending[sortValue] = sortAscending; // Only set sortData in isotope if this is a unique sorting ID, not for
          // array sorts (primary/secondary) as they simply use an array to
          // reference existing sort configs

          if (sortValue !== Options.ORIGINAL_ORDER && !arraySort) {
            // Set the sort object in isotope options (will be reinitialised later)
            // Won't be added as a new sortData entry if secondSort is active
            _this2.options.getSortData[sortValue] = sortSelector;
          }
        }); // Set sorting order to default if it exists

        this.options.sortBy = defaultSort; // Set default sorter to active

        this.activeSorter = getSorter(this.attributes.isotopeId, defaultSort);
        toggleActive(this.activeSorter, true); // Update isotope with collected sorter data

        this.isotope.updateSortData(); // Update isotope with current sort options

        this.isotope.arrange(this.options);
      };

      _proto.initIsotope = function initIsotope() {
        // Get hash filter from URL
        let hashFilter = window.location.hash.replace('#', '');
        hashFilter = hashFilter !== '' && !this.attributes.ignoreHash ? hashFilter : null; // Determine default filter

        const defaultFilter = hashFilter || this.attributes.defaultFilter || Selector.FILTER_ALL;
        const defaultFilterSelector = getCategoryFilter(defaultFilter); // Default to true, unless found to be explicitly false

        const defaultSortAscending = !this.attributes.sortAscending === false; // Setup initial config

        this.options.itemSelector = Selector.DATA_ISOTOPE_ITEM;
        this.options.layoutMode = this.attributes.layoutMode || Options.DEFAULT_LAYOUT;
        this.options.filter = defaultFilterSelector;
        this.options.sortAscending[Options.ORIGINAL_ORDER] = defaultSortAscending;
        this.isotope = new Isotope$1(this.element, this.options);
        this.activeFilter = getFilter(this.attributes.isotopeId, defaultFilter);
        toggleActive(this.activeFilter, true);
      };

      IsotopeWrapper.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachIsotope() {
          const $element = $(this);
          let data = $element.data(DATA_KEY);

          if (!data) {
            data = new IsotopeWrapper(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(IsotopeWrapper, null, [{
        key: 'VERSION',
        get: function get() {
          return VERSION;
        },
      }]);

      return IsotopeWrapper;
    }());
    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */

    $(window).on(Event.LOAD_DATA_API, () => {
      const isotopeElements = $.makeArray($(Selector.DATA_ISOTOPE_COLLECTION));
      /* eslint-disable no-plusplus */

      for (let i = isotopeElements.length; i--;) {
        const $isotope = $(isotopeElements[i]);
        IsotopeWrapper.jQueryInterface.call($isotope, $isotope.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = IsotopeWrapper.jQueryInterface;
    $.fn[NAME].Constructor = IsotopeWrapper;

    $.fn[NAME].noConflict = function IsotopeWrapperNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return IsotopeWrapper.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */

    return IsotopeWrapper;
  }(jQuery$1));

  //

  (function ($) {
    if (typeof jarallax$1 === 'function') {
      $('.alert-dismissible').on('closed.bs.alert', () => {
        jarallax$1(document.querySelectorAll('[data-jarallax],[data-jarallax-video]'), 'onScroll');
      });
      $(document).on('resized.mr.overlayNav', () => {
        jarallax$1(document.querySelectorAll('[data-jarallax],[data-jarallax-video]'), 'onResize');
      });
      document.addEventListener('injected.mr.SVGInjector', () => {
        jarallax$1(document.querySelectorAll('[data-jarallax],[data-jarallax-video]'), 'onResize');
      });
      const jarallaxOptions = {
        disableParallax: /iPad|iPhone|iPod|Android/,
        disableVideo: /iPad|iPhone|iPod|Android/,
      };
      $(window).on('load', () => {
        jarallax$1(document.querySelectorAll('[data-jarallax]'), jarallaxOptions);
        const jarallaxDelay = document.querySelectorAll('[data-jarallax-video-delay]');
        mrUtil.forEach(jarallaxDelay, (index, elem) => {
          const source = elem.getAttribute('data-jarallax-video-delay');
          elem.removeAttribute('data-jarallax-video-delay');
          elem.setAttribute('data-jarallax-video', source);
        });
        jarallax$1(document.querySelectorAll('[data-jarallax-delay],[data-jarallax-video]'), jarallaxOptions);
      });
    }
  }(jQuery$1));

  const mrMapStyle = [{
    featureType: 'administrative.country',
    elementType: 'labels.text',
    stylers: [{
      lightness: '29',
    }],
  }, {
    featureType: 'administrative.province',
    elementType: 'labels.text.fill',
    stylers: [{
      lightness: '-12',
    }, {
      color: '#796340',
    }],
  }, {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{
      lightness: '15',
    }, {
      saturation: '15',
    }],
  }, {
    featureType: 'landscape.man_made',
    elementType: 'geometry',
    stylers: [{
      visibility: 'on',
    }, {
      color: '#fbf5ed',
    }],
  }, {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [{
      visibility: 'on',
    }, {
      color: '#fbf5ed',
    }],
  }, {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [{
      visibility: 'off',
    }],
  }, {
    featureType: 'poi.attraction',
    elementType: 'all',
    stylers: [{
      visibility: 'on',
    }, {
      lightness: '30',
    }, {
      saturation: '-41',
    }, {
      gamma: '0.84',
    }],
  }, {
    featureType: 'poi.attraction',
    elementType: 'labels',
    stylers: [{
      visibility: 'on',
    }],
  }, {
    featureType: 'poi.business',
    elementType: 'all',
    stylers: [{
      visibility: 'off',
    }],
  }, {
    featureType: 'poi.business',
    elementType: 'labels',
    stylers: [{
      visibility: 'off',
    }],
  }, {
    featureType: 'poi.medical',
    elementType: 'geometry',
    stylers: [{
      color: '#fbd3da',
    }],
  }, {
    featureType: 'poi.medical',
    elementType: 'labels',
    stylers: [{
      visibility: 'on',
    }],
  }, {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{
      color: '#b0e9ac',
    }, {
      visibility: 'on',
    }],
  }, {
    featureType: 'poi.park',
    elementType: 'labels',
    stylers: [{
      visibility: 'on',
    }],
  }, {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{
      hue: '#68ff00',
    }, {
      lightness: '-24',
    }, {
      gamma: '1.59',
    }],
  }, {
    featureType: 'poi.sports_complex',
    elementType: 'all',
    stylers: [{
      visibility: 'on',
    }],
  }, {
    featureType: 'poi.sports_complex',
    elementType: 'geometry',
    stylers: [{
      saturation: '10',
    }, {
      color: '#c3eb9a',
    }],
  }, {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{
      visibility: 'on',
    }, {
      lightness: '30',
    }, {
      color: '#e7ded6',
    }],
  }, {
    featureType: 'road',
    elementType: 'labels',
    stylers: [{
      visibility: 'on',
    }, {
      saturation: '-39',
    }, {
      lightness: '28',
    }, {
      gamma: '0.86',
    }],
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{
      color: '#ffe523',
    }, {
      visibility: 'on',
    }],
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{
      visibility: 'on',
    }, {
      saturation: '0',
    }, {
      gamma: '1.44',
    }, {
      color: '#fbc28b',
    }],
  }, {
    featureType: 'road.highway',
    elementType: 'labels',
    stylers: [{
      visibility: 'on',
    }, {
      saturation: '-40',
    }],
  }, {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{
      color: '#fed7a5',
    }],
  }, {
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [{
      visibility: 'on',
    }, {
      gamma: '1.54',
    }, {
      color: '#fbe38b',
    }],
  }, {
    featureType: 'road.local',
    elementType: 'geometry.fill',
    stylers: [{
      color: '#ffffff',
    }, {
      visibility: 'on',
    }, {
      gamma: '2.62',
    }, {
      lightness: '10',
    }],
  }, {
    featureType: 'road.local',
    elementType: 'geometry.stroke',
    stylers: [{
      visibility: 'on',
    }, {
      weight: '0.50',
    }, {
      gamma: '1.04',
    }],
  }, {
    featureType: 'transit.station.airport',
    elementType: 'geometry.fill',
    stylers: [{
      color: '#dee3fb',
    }],
  }, {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{
      saturation: '46',
    }, {
      color: '#a4e1ff',
    }],
  }];

  const mrMaps = (function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    const NAME = 'mrMaps';
    const VERSION = '1.1.0';
    const DATA_KEY = 'mr.maps';
    const EVENT_KEY = `.${DATA_KEY}`;
    const JQUERY_NO_CONFLICT = $.fn[NAME];
    const Selector = {
      MAP: '[data-maps-api-key]',
      MARKER: 'div.map-marker',
      STYLE: 'div.map-style',
      MARKER_ADDRESS: 'data-address',
      MARKER_LATLNG: 'data-latlong',
      MARKER_IMAGE: 'data-marker-image',
      MARKER_TITLE: 'data-marker-title',
      INFOWindow: 'div.info-window',
    };
    const String = {
      MARKER_TITLE: '',
    };
    const Event = {
      MAP_LOADED: `loaded${EVENT_KEY}`,
    };
    const Default = {
      MARKER_IMAGE_URL: '/img/map-marker.png',
      MAP: {
        disableDefaultUI: true,
        draggable: true,
        scrollwheel: false,
        zoom: 17,
        zoomControl: false,
      },
    }; // mrMapStyle should be defined in a js file included prior to maps.js
    // The data should be an array of style overrides as per snazzymaps.com.

    Default.MAP.styles = typeof mrMapStyle !== typeof undefined ? mrMapStyle : undefined;
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    const Map =
    /* #__PURE__ */
    (function () {
      function Map(element) {
        // The current map element
        this.element = element;
        this.$element = $(element);
        this.markers = [];
        this.geocoder = new google.maps.Geocoder();
        this.markerElements = this.$element.find(Selector.MARKER);
        this.styleElement = this.$element.find(Selector.STYLE).first();
        this.initMap();
        this.createMarkers();
      } // version getter

      Map.init = function init() {
        const mapsOnPage = $.makeArray($(Selector.MAP));
        /* eslint-disable no-plusplus */

        for (let i = mapsOnPage.length; i--;) {
          const $map = $(mapsOnPage[i]);
          Map.jQueryInterface.call($map, $map.data());
        }
      };

      const _proto = Map.prototype;

      _proto.initMap = function initMap() {
        const _this = this;

        const mapElement = this.element;
        const mapInstance = this.$element;
        const showZoomControl = typeof mapInstance.attr('data-zoom-controls') !== typeof undefined;
        const zoomControlPos = typeof mapInstance.attr('data-zoom-controls') !== typeof undefined ? mapInstance.attr('data-zoom-controls') : false;
        const latlong = typeof mapInstance.attr('data-latlong') !== typeof undefined ? mapInstance.attr('data-latlong') : false;
        const latitude = latlong ? parseFloat(latlong.substr(0, latlong.indexOf(','))) : false;
        const longitude = latlong ? parseFloat(latlong.substr(latlong.indexOf(',') + 1)) : false;
        const address = mapInstance.attr('data-address') || '';
        let mapOptions = null; // let markerOptions = null;

        const mapAo = {}; // Attribute overrides - allows data attributes on the map to override global options

        try {
          mapAo.styles = this.styleElement.length ? JSON.parse(this.styleElement.html().trim()) : undefined;
        } catch (error) {
          throw new Error(error);
        }

        mapAo.zoom = mapInstance.attr('data-map-zoom') ? parseInt(mapInstance.attr('data-map-zoom'), 10) : undefined;
        mapAo.zoomControl = showZoomControl;
        mapAo.zoomControlOptions = zoomControlPos !== false ? {
          position: google.maps.ControlPosition[zoomControlPos],
        } : undefined;
        mapOptions = jQuery.extend({}, Default.MAP, mapAo);
        this.map = new google.maps.Map(mapElement, mapOptions);
        google.maps.event.addListenerOnce(this.map, 'center_changed', () => {
          // Map has been centered.
          const loadedEvent = $.Event(Event.MAP_LOADED, {
            map: _this.map,
          });
          mapInstance.trigger(loadedEvent);
        });

        if (typeof latitude !== typeof undefined && latitude !== '' && latitude !== false && typeof longitude !== typeof undefined && longitude !== '' && longitude !== false) {
          this.map.setCenter(new google.maps.LatLng(latitude, longitude));
        } else if (address !== '') {
          this.geocodeAddress(address, Map.centerMap, this, this.map);
        } else {
          throw new Error('No valid address or latitude/longitude pair provided for map.');
        }
      };

      _proto.geocodeAddress = function geocodeAddress(address, callback, thisMap, args) {
        this.geocoder.geocode({
          address,
        }, (results, status) => {
          if (status !== google.maps.GeocoderStatus.OK) {
            throw new Error(`There was a problem geocoding the address "${address}".`);
          } else {
            callback(results, thisMap, args);
          }
        });
      };

      Map.centerMap = function centerMap(geocodeResults, thisMap) {
        thisMap.map.setCenter(geocodeResults[0].geometry.location);
      };

      Map.moveMarker = function moveMarker(geocodeResults, thisMap, gMarker) {
        gMarker.setPosition(geocodeResults[0].geometry.location);
      };

      _proto.createMarkers = function createMarkers() {
        const _this2 = this;

        Default.MARKER = {
          icon: {
            url: this.$element.attr(Selector.MARKER_IMAGE) || Default.MARKER_IMAGE_URL,
            scaledSize: new google.maps.Size(50, 50),
          },
          title: String.MARKER_TITLE,
          optimised: false,
        };
        this.markerElements.each((index, marker) => {
          let gMarker;
          const $marker = $(marker);
          const markerAddress = $marker.attr(Selector.MARKER_ADDRESS);
          const markerLatLng = $marker.attr(Selector.MARKER_LATLNG);
          const infoWindow = $marker.find(Selector.INFOWindow);
          const markerAo = {
            title: $marker.attr(Selector.MARKER_TITLE),
          };
          markerAo.icon = typeof $marker.attr(Selector.MARKER_IMAGE) !== typeof undefined ? {
            url: $marker.attr(Selector.MARKER_IMAGE),
            scaledSize: new google.maps.Size(50, 50),
          } : undefined;
          const markerOptions = jQuery.extend({}, Default.MARKER, markerAo);
          gMarker = new google.maps.Marker(jQuery.extend({}, markerOptions, {
            map: _this2.map,
          }));

          if (infoWindow.length) {
            const gInfoWindow = new google.maps.InfoWindow({
              content: infoWindow.first().html(),
              maxWidth: parseInt(infoWindow.attr('data-max-width') || '250', 10),
            });
            gMarker.addListener('click', () => {
              gInfoWindow.open(_this2.map, gMarker);
            });
          } // Set marker position

          if (markerLatLng) {
            if (/(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)/.test(markerLatLng)) {
              gMarker.setPosition(new google.maps.LatLng(parseFloat(markerLatLng.substr(0, markerLatLng.indexOf(','))), parseFloat(markerLatLng.substr(markerLatLng.indexOf(',') + 1))));
              _this2.markers[index] = gMarker;
            }
          } else if (markerAddress) {
            _this2.geocodeAddress(markerAddress, Map.moveMarker, _this2, gMarker);

            _this2.markers[index] = gMarker;
          } else {
            gMarker = null;
            throw new Error(`Invalid data-address or data-latlong provided for marker ${index + 1}`);
          }
        });
      };

      Map.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachMap() {
          const $element = $(this);
          let data = $element.data(DATA_KEY);

          if (!data) {
            data = new Map(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(Map, null, [{
        key: 'VERSION',
        get: function get() {
          return VERSION;
        },
      }]);

      return Map;
    }()); // END Class definition

    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */
    // Load Google MAP API JS with callback to initialise when fully loaded

    if (document.querySelector('[data-maps-api-key]') && !document.querySelector('.gMapsAPI')) {
      if ($('[data-maps-api-key]').length) {
        const apiKey = $('[data-maps-api-key]:first').attr('data-maps-api-key') || '';

        if (apiKey !== '') {
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=theme.mrMaps.init`;
          script.className = 'gMapsAPI';
          document.body.appendChild(script);
        }
      }
    }
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = Map.jQueryInterface;
    $.fn[NAME].Constructor = Map;

    $.fn[NAME].noConflict = function MapNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Map.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */

    return Map;
  }(jQuery));

  const mrOverlayNav = (function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    const NAME = 'mrOverlayNav';
    const VERSION = '1.1.0';
    const DATA_KEY = 'mr.overlayNav';
    const EVENT_KEY = `.${DATA_KEY}`;
    const JQUERY_NO_CONFLICT = $.fn[NAME];
    const Event = {
      RESIZE: `resize${EVENT_KEY}`,
      RESIZED: `resized${EVENT_KEY}`,
      IMAGE_LOAD: 'load',
      TOGGLE_SHOW: 'show.bs.collapse',
      TOGGLE_HIDDEN: 'hidden.bs.collapse',
      NOTIFICATION_CLOSE: '',
      ALERT_CLOSE: 'close.bs.alert',
    };
    const Selector = {
      CONTAINER: 'body > div.navbar-container',
      OVERLAY_NAV: 'body > div.navbar-container > nav[data-overlay]',
      NAV: 'nav',
      OVERLAY_SECTION: '[data-overlay]',
      IMAGE: 'img',
      NAV_TOGGLED: 'navbar-toggled-show',
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    const OverlayNav =
    /* #__PURE__ */
    (function () {
      function OverlayNav(element) {
        this.ticking = false; // Used to debounce resize event

        this.element = element;
        this.navHeight = this.getNavHeight();
        this.navToggled = false;
        this.container = OverlayNav.getContainerElement();
        this.overlayElement = OverlayNav.getFirstOverlayElement();
        this.setImageLoadEvent();
        this.updateValues();
        this.setResizeEvent();
        this.setNavToggleEvents();
      } // getters

      const _proto = OverlayNav.prototype;

      _proto.getNavHeight = function getNavHeight() {
        this.navHeight = this.element.getBoundingClientRect().height;
      };

      _proto.updateValues = function updateValues() {
        this.getNavHeight();
        this.updateContainer();
        this.updateOverlayElement();
        $(this.element).trigger($.Event(Event.RESIZED));
      };

      _proto.updateContainer = function updateContainer() {
        // Don't update min height on the container if the nav is toggled/open.
        if (!this.container || this.navToggled) {
          return;
        }

        this.container.style.minHeight = `${this.navHeight}px`;
        this.container.style.marginBottom = `-${this.navHeight}px`;
      };

      _proto.updateOverlayElement = function updateOverlayElement() {
        if (!this.overlayElement || this.navToggled) {
          return;
        }

        this.overlayElement.style.setProperty('padding-top', `${this.navHeight}px`, 'important');
      };

      _proto.setResizeEvent = function setResizeEvent() {
        const _this = this;

        $(window).on(`${Event.RESIZE} ${Event.ALERT_CLOSE}`, () => {
          if (!_this.ticking) {
            window.requestAnimationFrame(() => {
              _this.updateValues();

              _this.ticking = false;
            });
            _this.ticking = true;
          }
        });
      };

      _proto.setNavToggleEvents = function setNavToggleEvents() {
        const _this2 = this;

        $(this.element).on(`${Event.TOGGLE_SHOW}`, () => {
          _this2.navToggled = true;
        }); // navHeight should only be recalculated when the nav is not open/toggled
        // Don't allow the navHeight to be recalculated until the nav is fully hidden

        $(this.element).on(`${Event.TOGGLE_HIDDEN}`, () => {
          _this2.navToggled = false;
        });
      };

      _proto.setImageLoadEvent = function setImageLoadEvent() {
        const _this3 = this;

        const images = this.container.querySelectorAll(Selector.IMAGE);
        mrUtil.forEach(images, (index, image) => {
          image.addEventListener(Event.IMAGE_LOAD, () => _this3.updateValues());
        });
      };

      OverlayNav.getContainerElement = function getContainerElement() {
        if (!this.container) {
          this.container = document.querySelector(Selector.CONTAINER);
        }

        return this.container;
      };

      OverlayNav.getFirstOverlayElement = function getFirstOverlayElement() {
        return document.querySelector(`${Selector.OVERLAY_SECTION}:not(${Selector.NAV})`);
      };

      OverlayNav.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachoverlayNav() {
          const $element = $(this);
          let data = $element.data(DATA_KEY);

          if (!data) {
            data = new OverlayNav(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(OverlayNav, null, [{
        key: 'VERSION',
        get: function get() {
          return VERSION;
        },
      }]);

      return OverlayNav;
    }());
    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */

    $(document).ready(() => {
      const overlayNavElements = $.makeArray($(Selector.OVERLAY_NAV));
      /* eslint-disable no-plusplus */

      for (let i = overlayNavElements.length; i--;) {
        const $overlayNav = $(overlayNavElements[i]);
        OverlayNav.jQueryInterface.call($overlayNav, $overlayNav.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = OverlayNav.jQueryInterface;
    $.fn[NAME].Constructor = OverlayNav;

    $.fn[NAME].noConflict = function overlayNavNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return OverlayNav.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */

    return OverlayNav;
  }(jQuery$1));

  //

  (function ($) {
    const Event = {
      TOGGLE_SHOW: 'show.bs.collapse',
      TOGGLE_HIDE: 'hide.bs.collapse',
    };
    const Selector = {
      CONTAINER: 'body > div.navbar-container',
      NAV: '.navbar-container > .navbar',
    };
    const ClassName = {
      TOGGLED_SHOW: 'navbar-toggled-show',
    };
    const container = document.querySelector(Selector.CONTAINER);
    const nav = document.querySelector(Selector.NAV);
    $(container).on(`${Event.TOGGLE_SHOW} ${Event.TOGGLE_HIDE}`, (evt) => {
      const action = `${evt.type}.${evt.namespace}` === Event.TOGGLE_SHOW ? 'add' : 'remove';
      nav.classList[action](ClassName.TOGGLED_SHOW);
    });
  }(jQuery$1));

  //
  Plyr.setup('[data-provider],.plyr');

  //

  (function ($) {
    $(document).on('hide.bs.tab', (evt) => {
      $($(evt.target).attr('href')).find('[data-toggle="popover"]').popover('hide');
    });
    $(document).on('hide.bs.collapse', (evt) => {
      $(evt.target).find('[data-toggle="popover"]').popover('hide');
    });
  }(jQuery$1));

  //
  Prism.highlightAll();

  const mrReadingPosition = (function ($) {
    /**
     * Check for scrollMonitor dependency
     * scrollMonitor - https://github.com/stutrek/scrollMonitor
     */
    if (typeof scrollMonitor === 'undefined') {
      throw new Error('mrReadingPosition requires scrollMonitor.js (https://github.com/stutrek/scrollMonitor)');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    const NAME = 'mrReadingPosition';
    const VERSION = '1.0.0';
    const DATA_KEY = 'mr.readingPosition';
    const EVENT_KEY = `.${DATA_KEY}`;
    const DATA_API_KEY = '.data-api';
    const JQUERY_NO_CONFLICT = $.fn[NAME];
    const Css = {
      HIDDEN: 'reading-position-hidden',
    };
    const Event = {
      LOAD_DATA_API: `load${EVENT_KEY}${DATA_API_KEY}`,
      RESIZE: 'resize',
      SCROLL: 'scroll',
    };
    const Selector = {
      PROGRESS: 'progress.reading-position',
      DATA_ATTR: 'reading-position',
      DATA_READING_POSITION: '[data-reading-position]',
      VALUE: 'value',
      MAX: 'max',
    };
    const Value = {
      BAR_MAX: 100,
      BAR_MIN: 0,
    };
    const progressBars = document.querySelectorAll(Selector.PROGRESS); // const $window = $(window);
    // const $document = $(document);

    const getWindowHeight = function getWindowHeight() {
      return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    };

    const getScrollPosition = function getScrollPosition() {
      return (document.documentElement.scrollTop === 0 ? document.body.scrollTop : document.documentElement.scrollTop) || 0;
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    const ReadingPosition =
    /* #__PURE__ */
    (function () {
      function ReadingPosition(element) {
        this.progressBars = progressBars;
        this.element = element;
        this.top = 0;
        this.bottom = 0;
        this.height = 0;
        this.scrollLength = 0;
        this.articlePositionPercent = 0;
        this.ticking = false;
        this.inView = false;
        this.reading = false;
        this.initWatcher(element);
        this.initBarValues();
        this.setValue(getScrollPosition());
        this.setScrollEvent();
        this.setResizeEvent();
      } // get VERSION

      const _proto = ReadingPosition.prototype;

      _proto.initWatcher = function initWatcher(element) {
        const _this = this;

        const watcher = scrollMonitor.create(element);
        this.watcher = watcher;
        this.recalculateAll();
        watcher.stateChange(() => {
          _this.inView = watcher.isInViewport;
          _this.reading = watcher.isAboveViewport && watcher.isFullyInViewport;

          _this.toggleBars(_this.reading);
        });
      };

      _proto.initBarValues = function initBarValues() {
        mrUtil.forEach(this.progressBars, (index, bar) => {
          bar.setAttribute(Selector.MAX, Value.BAR_MAX);
        });
      };

      _proto.setValue = function setValue(scrollPosition) {
        const _this2 = this;

        this.recalculatePercentage(scrollPosition);
        mrUtil.forEach(this.progressBars, (index, bar) => {
          bar.setAttribute(Selector.VALUE, _this2.articlePositionPercent);
        });
      };

      _proto.toggleBars = function toggleBars(show) {
        mrUtil.forEach(this.progressBars, (index, bar) => {
          if (show) {
            bar.classList.remove(Css.HIDDEN);
          } else {
            bar.classList.add(Css.HIDDEN);
          }
        });
      };

      _proto.setScrollEvent = function setScrollEvent() {
        const _this3 = this;

        window.addEventListener(Event.SCROLL, () => {
          const scrollPosition = getScrollPosition();

          if (!_this3.ticking && _this3.inView && _this3.reading) {
            window.requestAnimationFrame(() => {
              _this3.setValue(scrollPosition);

              _this3.ticking = false;
            });
            _this3.ticking = true;
          }
        });
      };

      _proto.setResizeEvent = function setResizeEvent() {
        const _this4 = this;

        window.addEventListener(Event.RESIZE, () => _this4.recalculateAll());
      };

      _proto.recalculateAll = function recalculateAll() {
        this.watcher.recalculateLocation();
        this.top = this.watcher.top;
        this.bottom = this.watcher.bottom;
        this.height = this.watcher.height; // Scroll Length is the scrolling viewable area of the article
        // from top of article = top of window to bottom of article = bottom of window.

        this.scrollLength = this.height - getWindowHeight(); // Position percent is how far the view is through the scrollable length in percentage.

        this.recalculatePercentage(getScrollPosition());
      };

      _proto.recalculatePercentage = function recalculatePercentage(scrollPosition) {
        this.articlePositionPercent = !scrollPosition ? 0 : (scrollPosition - this.top) / this.scrollLength * 100;
      };

      ReadingPosition.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachReadingPosition() {
          const $element = $(this);
          let data = $element.data(DATA_KEY);

          if (!data) {
            data = new ReadingPosition(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(ReadingPosition, null, [{
        key: 'VERSION',
        get: function get() {
          return VERSION;
        },
      }]);

      return ReadingPosition;
    }());
    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */

    $(window).on(Event.LOAD_DATA_API, () => {
      // Proceed to initialise only if a progress bar is found in the document
      if (progressBars.length === 0) {
        return;
      } // Gather articles and loop over, initialising ReadingPosition instance

      const readingPositionElements = $.makeArray($(Selector.DATA_READING_POSITION));
      /* eslint-disable no-plusplus */

      for (let i = readingPositionElements.length; i--;) {
        const $readingPosition = $(readingPositionElements[i]);
        ReadingPosition.jQueryInterface.call($readingPosition, $readingPosition.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = ReadingPosition.jQueryInterface;
    $.fn[NAME].Constructor = ReadingPosition;

    $.fn[NAME].noConflict = function ReadingPositionNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return ReadingPosition.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */

    return ReadingPosition;
  }(jQuery));

  //

  const mrSmoothScroll = (function ($) {
    const smoothScroll = new SmoothScroll('a[data-smooth-scroll]', {
      speedAsDuration: true,
      offset: $('body').attr('data-smooth-scroll-offset') || 0,
    });
    return smoothScroll;
  }(jQuery$1));

  const mrSticky = (function ($) {
    /**
     * Check for scrollMonitor dependency
     * scrollMonitor - https://github.com/stutrek/scrollMonitor
     */
    if (typeof scrollMonitor === 'undefined') {
      throw new Error('mrSticky requires scrollMonitor.js (https://github.com/stutrek/scrollMonitor)');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    const NAME = 'mrSticky';
    const VERSION = '1.4.0';
    const DATA_KEY = 'mr.sticky';
    const EVENT_KEY = `.${DATA_KEY}`;
    const DATA_API_KEY = '.data-api';
    const JQUERY_NO_CONFLICT = $.fn[NAME];
    const NO_OFFSET = 0;
    const ClassName = {
      FIXED_TOP: 'position-fixed',
      ABSOLUTE_BOTTOM: 'sticky-bottom',
      FIXED_BOTTOM: 'sticky-viewport-bottom',
      SCROLLED: 'scrolled',
    };
    const Css = {
      HEIGHT: 'min-height',
      WIDTH: 'max-width',
      SPACE_TOP: 'top',
      SPACE_BOTTOM: 'bottom',
    };
    const Event = {
      LOAD_DATA_API: `load${EVENT_KEY}${DATA_API_KEY}`,
      WINDOW_RESIZE: 'resize',
      ALERT_CLOSED: 'closed.bs.alert',
      TOGGLE_SHOW: 'show.bs.collapse',
      TOGGLE_HIDDEN: 'hidden.bs.collapse',
    };
    const Options = {
      BELOW_NAV: 'below-nav',
      TOP: 'top',
      BOTTOM: 'bottom',
    };
    const Selector = {
      DATA_ATTR: 'sticky',
      DATA_STICKY: '[data-sticky]',
      NAV_STICKY: 'body > div.navbar-container [data-sticky="top"]',
      ALERT: '.alert-dismissible',
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    const Sticky =
    /* #__PURE__ */
    (function () {
      function Sticky(element) {
        const $element = $(element);
        const stickyData = $element.data(Selector.DATA_ATTR);
        const stickyUntil = $element.closest('section') || null;
        this.element = element;
        this.stickBelowNav = stickyData === Options.BELOW_NAV;
        this.stickBottom = stickyData === Options.BOTTOM;
        this.stickyUntil = stickyUntil;
        this.navToggled = false;
        this.updateNavProperties();
        this.isNavElement = $element.is(this.navElement);
        this.initWatcher($element);
        this.updateCss();
        this.setResizeEvent(); // Run a calculation immediately to show sticky elements if page starts
        // at a half-scrolled position

        this.onWatcherChange($element);
        this.ticking = false; // for debouncing resize event with RequestAnimationFrame

        if (this.isNavElement) {
          this.setNavToggleEvents();
        }
      } // getters

      const _proto = Sticky.prototype;

      _proto.initWatcher = function initWatcher(element) {
        const _this = this;

        const $element = $(element);
        const notNavElement = !this.isNavElement;
        let offset = this.stickBelowNav && this.navIsSticky && notNavElement ? {
          top: this.navHeight,
        } : NO_OFFSET;
        offset = this.stickBottom && notNavElement ? {
          bottom: -$element.outerHeight,
        } : offset;
        const watcher = scrollMonitor.create(element, offset); // ensure that we're always watching the place the element originally was

        watcher.lock();
        const untilWatcher = this.stickyUntil !== null ? scrollMonitor.create(this.stickyUntil, {
          bottom: -(watcher.height + offset.top),
        }) : null;
        this.watcher = watcher;
        this.untilWatcher = untilWatcher;
        this.navHeight = this.navHeight; // For navs that start at top, stick them immediately to avoid a jump

        if (this.isNavElement && watcher.top === 0 && !this.navIsAbsolute) {
          $element.addClass(ClassName.FIXED_TOP);
        }

        watcher.stateChange(() => {
          _this.onWatcherChange($element);
        });

        if (untilWatcher !== null) {
          untilWatcher.exitViewport(() => {
            // If the element is in a section, it will scroll up with the section
            $element.addClass(ClassName.ABSOLUTE_BOTTOM);
          });
          untilWatcher.enterViewport(() => {
            $element.removeClass(ClassName.ABSOLUTE_BOTTOM);
          });
        }
      };

      _proto.onWatcherChange = function onWatcherChange($element) {
        // Add fixed when element leaves via top of viewport or if nav is sitting at top
        $element.toggleClass(ClassName.FIXED_TOP, this.watcher.isAboveViewport || !this.navIsAbsolute && !this.stickBottom && this.isNavElement && this.watcher.top === 0); // Used to apply styles to the nav based on "scrolled" class
        // independedly of position-fixed because that class is used for more practical reasons
        // such as avoiding a jump on first scroll etc.

        $element.toggleClass(ClassName.SCROLLED, this.watcher.isAboveViewport && this.isNavElement && !this.stickBottom); // Fix to bottom when element enters via bottom of viewport and has data-sticky="bottom"

        $element.toggleClass(ClassName.FIXED_BOTTOM, (this.watcher.isFullyInViewport || this.watcher.isAboveViewport) && this.stickBottom);

        if (!this.stickBottom) {
          $element.css(Css.SPACE_TOP, this.watcher.isAboveViewport && this.navIsSticky && this.stickBelowNav ? this.navHeight : NO_OFFSET);
        }
      };

      _proto.setResizeEvent = function setResizeEvent() {
        const _this2 = this;

        // Closing any alerts above the nav will mean we need to recalculate position.
        $(Selector.ALERT).on(Event.ALERT_CLOSED, () => {
          // An alert above the nav will cause odd sticky behaviour if
          // the alert is dismissed and nav position is not recalculated,
          // as scrollMonitor has locked the position of the watcher.
          // Unlock and recalculate if the nav is in the viewport during alert close event.
          if (_this2.watcher.isInViewport) {
            _this2.watcher.unlock();

            _this2.watcher.recalculateLocation();

            _this2.watcher.lock();
          }

          _this2.onResize();
        });
        $(window).on(Event.WINDOW_RESIZE, () => {
          _this2.onResize();
        });
      };

      _proto.onResize = function onResize() {
        const _this3 = this;

        if (!this.ticking) {
          window.requestAnimationFrame(() => {
            _this3.updateCss();

            _this3.ticking = false;
          });
          this.ticking = true;
        }
      };

      _proto.setNavToggleEvents = function setNavToggleEvents() {
        const _this4 = this;

        $(this.element).on(`${Event.TOGGLE_SHOW}`, () => {
          _this4.navToggled = true;
        }); // navHeight should only be recalculated when the nav is not open/toggled
        // Don't allow the navHeight to be recalculated until the nav is fully hidden

        $(this.element).on(`${Event.TOGGLE_HIDDEN}`, () => {
          _this4.navToggled = false;
        });
      };

      _proto.updateCss = function updateCss() {
        const $element = $(this.element); // Fix width by getting parent's width to avoid element spilling out when pos-fixed

        $element.css(Css.WIDTH, $element.parent().width());
        this.updateNavProperties();
        const elemHeight = $element.outerHeight();
        const notNavElement = !this.isNavElement; // Set a min-height to prevent "jumping" when sticking to top
        // but not applied to the nav element itself unless it is overlay (absolute) nav

        if (!this.navIsAbsolute && this.isNavElement || notNavElement) {
          // navHeight should only be recalculated when the nav is not open/toggled
          // Don't allow the navHeight to be set until the nav is fully hidden
          if (!this.navToggled) {
            $element.parent().css(Css.HEIGHT, elemHeight);
          }
        }

        if (this.navIsSticky && notNavElement) {
          $element.css(Css.HEIGHT, elemHeight);
        }
      };

      _proto.updateNavProperties = function updateNavProperties() {
        const $navElement = this.navElement || $(Selector.NAV_STICKY).first();
        this.navElement = $navElement;
        this.navHeight = $navElement.outerHeight();
        this.navIsAbsolute = $navElement.css('position') === 'absolute';
        this.navIsSticky = $navElement.length > 0;
      };

      Sticky.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachSticky() {
          const $element = $(this);
          let data = $element.data(DATA_KEY);

          if (!data) {
            data = new Sticky(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(Sticky, null, [{
        key: 'VERSION',
        get: function get() {
          return VERSION;
        },
      }]);

      return Sticky;
    }());
    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */

    $(window).on(Event.LOAD_DATA_API, () => {
      const stickyElements = $.makeArray($(Selector.DATA_STICKY));
      /* eslint-disable no-plusplus */

      for (let i = stickyElements.length; i--;) {
        const $sticky = $(stickyElements[i]);
        Sticky.jQueryInterface.call($sticky, $sticky.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = Sticky.jQueryInterface;
    $.fn[NAME].Constructor = Sticky;

    $.fn[NAME].noConflict = function StickyNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Sticky.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */

    return Sticky;
  }(jQuery$1));

  const { ceil } = Math;
  const { floor } = Math;

  // `ToInteger` abstract operation
  // https://tc39.github.io/ecma262/#sec-tointeger
  const toInteger = function (argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
  };

  // `RequireObjectCoercible` abstract operation
  // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
  const requireObjectCoercible = function (it) {
    if (it == undefined) throw TypeError(`Can't call method on ${it}`);
    return it;
  };

  // `String.prototype.{ codePointAt, at }` methods implementation
  const createMethod = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      const S = String(requireObjectCoercible($this));
      const position = toInteger(pos);
      const size = S.length;
      let first; let
        second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = S.charCodeAt(position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  const stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod(true),
  };

  const commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  const check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  const global_1 =
    // eslint-disable-next-line no-undef
    check(typeof globalThis === 'object' && globalThis)
    || check(typeof window === 'object' && window)
    || check(typeof self === 'object' && self)
    || check(typeof commonjsGlobal === 'object' && commonjsGlobal)
    // eslint-disable-next-line no-new-func
    || Function('return this')();

  const fails = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  const descriptors = !fails(() => Object.defineProperty({}, 'a', { get() { return 7; } }).a != 7);

  const isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  const document$1 = global_1.document;
  // typeof document.createElement is 'object' in old IE
  const EXISTS = isObject(document$1) && isObject(document$1.createElement);

  const documentCreateElement = function (it) {
    return EXISTS ? document$1.createElement(it) : {};
  };

  // Thank's IE8 for his funny defineProperty
  const ie8DomDefine = !descriptors && !fails(() => Object.defineProperty(documentCreateElement('div'), 'a', {
    get() { return 7; },
  }).a != 7);

  const anObject = function (it) {
    if (!isObject(it)) {
      throw TypeError(`${String(it)} is not an object`);
    } return it;
  };

  // `ToPrimitive` abstract operation
  // https://tc39.github.io/ecma262/#sec-toprimitive
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  const toPrimitive = function (input, PREFERRED_STRING) {
    if (!isObject(input)) return input;
    let fn; let
      val;
    if (PREFERRED_STRING && typeof (fn = input.toString) === 'function' && !isObject(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) === 'function' && !isObject(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) === 'function' && !isObject(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  const nativeDefineProperty = Object.defineProperty;

  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  const f = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (ie8DomDefine) {
      try {
        return nativeDefineProperty(O, P, Attributes);
      } catch (error) { /* empty */ }
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  const objectDefineProperty = {
  	f,
  };

  const createPropertyDescriptor = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value,
    };
  };

  const createNonEnumerableProperty = descriptors ? function (object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  const setGlobal = function (key, value) {
    try {
      createNonEnumerableProperty(global_1, key, value);
    } catch (error) {
      global_1[key] = value;
    } return value;
  };

  const SHARED = '__core-js_shared__';
  const store = global_1[SHARED] || setGlobal(SHARED, {});

  const sharedStore = store;

  const functionToString = Function.toString;

  // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
  if (typeof sharedStore.inspectSource !== 'function') {
    sharedStore.inspectSource = function (it) {
      return functionToString.call(it);
    };
  }

  const { inspectSource } = sharedStore;

  const { WeakMap } = global_1;

  const nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

  const { hasOwnProperty } = {};

  const has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  const shared = createCommonjsModule((module) => {
    (module.exports = function (key, value) {
      return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: '3.4.8',
      mode: 'global',
      copyright: '© 2019 Denis Pushkarev (zloirock.ru)',
    });
  });

  let id = 0;
  const postfix = Math.random();

  const uid = function (key) {
    return `Symbol(${String(key === undefined ? '' : key)})_${(++id + postfix).toString(36)}`;
  };

  const keys = shared('keys');

  const sharedKey = function (key) {
    return keys[key] || (keys[key] = uid(key));
  };

  const hiddenKeys = {};

  const WeakMap$1 = global_1.WeakMap;
  let set; let get; let
    has$1;

  const enforce = function (it) {
    return has$1(it) ? get(it) : set(it, {});
  };

  const getterFor = function (TYPE) {
    return function (it) {
      let state;
      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError(`Incompatible receiver, ${TYPE} required`);
      } return state;
    };
  };

  if (nativeWeakMap) {
    const store$1 = new WeakMap$1();
    const wmget = store$1.get;
    const wmhas = store$1.has;
    const wmset = store$1.set;
    set = function (it, metadata) {
      wmset.call(store$1, it, metadata);
      return metadata;
    };
    get = function (it) {
      return wmget.call(store$1, it) || {};
    };
    has$1 = function (it) {
      return wmhas.call(store$1, it);
    };
  } else {
    const STATE = sharedKey('state');
    hiddenKeys[STATE] = true;
    set = function (it, metadata) {
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return has(it, STATE) ? it[STATE] : {};
    };
    has$1 = function (it) {
      return has(it, STATE);
    };
  }

  const internalState = {
    set,
    get,
    has: has$1,
    enforce,
    getterFor,
  };

  const nativePropertyIsEnumerable = {}.propertyIsEnumerable;
  const { getOwnPropertyDescriptor } = Object;

  // Nashorn ~ JDK8 bug
  const NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
  const f$1 = NASHORN_BUG ? function propertyIsEnumerable(V) {
    const descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
  } : nativePropertyIsEnumerable;

  const objectPropertyIsEnumerable = {
  	f: f$1,
  };

  const { toString } = {};

  const classofRaw = function (it) {
    return toString.call(it).slice(8, -1);
  };

  const { split } = '';

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  const indexedObject = fails(() =>
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins
    !Object('z').propertyIsEnumerable(0)) ? function (it) {
      return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
    } : Object;

  // toObject with fallback for non-array-like ES3 strings

  const toIndexedObject = function (it) {
    return indexedObject(requireObjectCoercible(it));
  };

  const nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
  const f$2 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPrimitive(P, true);
    if (ie8DomDefine) {
      try {
        return nativeGetOwnPropertyDescriptor(O, P);
      } catch (error) { /* empty */ }
    }
    if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
  };

  const objectGetOwnPropertyDescriptor = {
  	f: f$2,
  };

  const redefine = createCommonjsModule((module) => {
    const getInternalState = internalState.get;
    const enforceInternalState = internalState.enforce;
    const TEMPLATE = String(String).split('String');

    (module.exports = function (O, key, value, options) {
      const unsafe = options ? !!options.unsafe : false;
      let simple = options ? !!options.enumerable : false;
      const noTargetGet = options ? !!options.noTargetGet : false;
      if (typeof value === 'function') {
        if (typeof key === 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
        enforceInternalState(value).source = TEMPLATE.join(typeof key === 'string' ? key : '');
      }
      if (O === global_1) {
        if (simple) O[key] = value;
        else setGlobal(key, value);
        return;
      } if (!unsafe) {
        delete O[key];
      } else if (!noTargetGet && O[key]) {
        simple = true;
      }
      if (simple) O[key] = value;
      else createNonEnumerableProperty(O, key, value);
      // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, 'toString', function toString() {
      return typeof this === 'function' && getInternalState(this).source || inspectSource(this);
    });
  });

  const path = global_1;

  const aFunction = function (variable) {
    return typeof variable === 'function' ? variable : undefined;
  };

  const getBuiltIn = function (namespace, method) {
    return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace])
      : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
  };

  const { min } = Math;

  // `ToLength` abstract operation
  // https://tc39.github.io/ecma262/#sec-tolength
  const toLength = function (argument) {
    return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  const { max } = Math;
  const min$1 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  const toAbsoluteIndex = function (index, length) {
    const integer = toInteger(index);
    return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
  };

  // `Array.prototype.{ indexOf, includes }` methods implementation
  const createMethod$1 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      const O = toIndexedObject($this);
      const length = toLength(O.length);
      let index = toAbsoluteIndex(fromIndex, length);
      let value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) {
        while (length > index) {
          value = O[index++];
          // eslint-disable-next-line no-self-compare
          if (value != value) return true;
          // Array#indexOf ignores holes, Array#includes - not
        }
      } else {
        for (;length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
      } return !IS_INCLUDES && -1;
    };
  };

  const arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.includes
    includes: createMethod$1(true),
    // `Array.prototype.indexOf` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$1(false),
  };

  const { indexOf } = arrayIncludes;

  const objectKeysInternal = function (object, names) {
    const O = toIndexedObject(object);
    let i = 0;
    const result = [];
    let key;
    for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) {
      if (has(O, key = names[i++])) {
        ~indexOf(result, key) || result.push(key);
      }
    }
    return result;
  };

  // IE8- don't enum bug keys
  const enumBugKeys = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf',
  ];

  const hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  const f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys$1);
  };

  const objectGetOwnPropertyNames = {
  	f: f$3,
  };

  const f$4 = Object.getOwnPropertySymbols;

  const objectGetOwnPropertySymbols = {
  	f: f$4,
  };

  // all object keys, includes non-enumerable and symbols
  const ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    const keys = objectGetOwnPropertyNames.f(anObject(it));
    const getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };

  const copyConstructorProperties = function (target, source) {
    const keys = ownKeys(source);
    const defineProperty = objectDefineProperty.f;
    const getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  const replacement = /#|\.prototype\./;

  const isForced = function (feature, detection) {
    const value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
        : typeof detection === 'function' ? fails(detection)
          : !!detection;
  };

  var normalize = isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = 'N';
  var POLYFILL = isForced.POLYFILL = 'P';

  const isForced_1 = isForced;

  const getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;

  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
  */
  const _export = function (options, source) {
    const TARGET = options.target;
    const GLOBAL = options.global;
    const STATIC = options.stat;
    let FORCED; let target; let key; let targetProperty; let sourceProperty; let
      descriptor;
    if (GLOBAL) {
      target = global_1;
    } else if (STATIC) {
      target = global_1[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global_1[TARGET] || {}).prototype;
    }
    if (target) {
      for (key in source) {
        sourceProperty = source[key];
        if (options.noTargetGet) {
          descriptor = getOwnPropertyDescriptor$1(target, key);
          targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
          if (typeof sourceProperty === typeof targetProperty) continue;
          copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || (targetProperty && targetProperty.sham)) {
          createNonEnumerableProperty(sourceProperty, 'sham', true);
        }
        // extend global
        redefine(target, key, sourceProperty, options);
      }
    }
  };

  // `ToObject` abstract operation
  // https://tc39.github.io/ecma262/#sec-toobject
  const toObject = function (argument) {
    return Object(requireObjectCoercible(argument));
  };

  const correctPrototypeGetter = !fails(() => {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  const IE_PROTO = sharedKey('IE_PROTO');
  const ObjectPrototype = Object.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.github.io/ecma262/#sec-object.getprototypeof
  const objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
    O = toObject(O);
    if (has(O, IE_PROTO)) return O[IE_PROTO];
    if (typeof O.constructor === 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectPrototype : null;
  };

  const nativeSymbol = !!Object.getOwnPropertySymbols && !fails(() =>
    // Chrome 38 Symbol has incorrect toString conversion
    // eslint-disable-next-line no-undef
    !String(Symbol()));

  const useSymbolAsUid = nativeSymbol
    // eslint-disable-next-line no-undef
    && !Symbol.sham
    // eslint-disable-next-line no-undef
    && typeof Symbol() === 'symbol';

  const WellKnownSymbolsStore = shared('wks');
  const Symbol$1 = global_1.Symbol;
  const createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : uid;

  const wellKnownSymbol = function (name) {
    if (!has(WellKnownSymbolsStore, name)) {
      if (nativeSymbol && has(Symbol$1, name)) WellKnownSymbolsStore[name] = Symbol$1[name];
      else WellKnownSymbolsStore[name] = createWellKnownSymbol(`Symbol.${name}`);
    } return WellKnownSymbolsStore[name];
  };

  const ITERATOR = wellKnownSymbol('iterator');
  let BUGGY_SAFARI_ITERATORS = false;

  const returnThis = function () { return this; };

  // `%IteratorPrototype%` object
  // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
  let IteratorPrototype; let PrototypeOfArrayIteratorPrototype; let
    arrayIterator;

  if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
    else {
      PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
    }
  }

  if (IteratorPrototype == undefined) IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  if (!has(IteratorPrototype, ITERATOR)) {
    createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
  }

  const iteratorsCore = {
    IteratorPrototype,
    BUGGY_SAFARI_ITERATORS,
  };

  // `Object.keys` method
  // https://tc39.github.io/ecma262/#sec-object.keys
  const objectKeys = Object.keys || function keys(O) {
    return objectKeysInternal(O, enumBugKeys);
  };

  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  const objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    const keys = objectKeys(Properties);
    const { length } = keys;
    let index = 0;
    let key;
    while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
    return O;
  };

  const html = getBuiltIn('document', 'documentElement');

  const IE_PROTO$1 = sharedKey('IE_PROTO');

  const PROTOTYPE = 'prototype';
  const Empty = function () { /* empty */ };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    const iframe = documentCreateElement('iframe');
    let { length } = enumBugKeys;
    const lt = '<';
    const script = 'script';
    const gt = '>';
    const js = `java${script}:`;
    let iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    iframe.src = String(js);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(`${lt + script + gt}document.F=Object${lt}/${script}${gt}`);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
    return createDict();
  };

  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  const objectCreate = Object.create || function create(O, Properties) {
    let result;
    if (O !== null) {
      Empty[PROTOTYPE] = anObject(O);
      result = new Empty();
      Empty[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = createDict();
    return Properties === undefined ? result : objectDefineProperties(result, Properties);
  };

  hiddenKeys[IE_PROTO$1] = true;

  const defineProperty = objectDefineProperty.f;

  const TO_STRING_TAG = wellKnownSymbol('toStringTag');

  const setToStringTag = function (it, TAG, STATIC) {
    if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
      defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
    }
  };

  const iterators = {};

  const IteratorPrototype$1 = iteratorsCore.IteratorPrototype;

  const returnThis$1 = function () { return this; };

  const createIteratorConstructor = function (IteratorConstructor, NAME, next) {
    const TO_STRING_TAG = `${NAME} Iterator`;
    IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
    iterators[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  const aPossiblePrototype = function (it) {
    if (!isObject(it) && it !== null) {
      throw TypeError(`Can't set ${String(it)} as a prototype`);
    } return it;
  };

  // `Object.setPrototypeOf` method
  // https://tc39.github.io/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */
  const objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? (function () {
    let CORRECT_SETTER = false;
    const test = {};
    let setter;
    try {
      setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
      setter.call(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) { /* empty */ }
    return function setPrototypeOf(O, proto) {
      anObject(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter.call(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }()) : undefined);

  const IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
  const BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
  const ITERATOR$1 = wellKnownSymbol('iterator');
  const KEYS = 'keys';
  const VALUES = 'values';
  const ENTRIES = 'entries';

  const returnThis$2 = function () { return this; };

  const defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);

    const getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];
      switch (KIND) {
        case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
        case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
        case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
      } return function () { return new IteratorConstructor(this); };
    };

    const TO_STRING_TAG = `${NAME} Iterator`;
    let INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    const nativeIterator = IterablePrototype[ITERATOR$1]
      || IterablePrototype['@@iterator']
      || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
    const anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    let CurrentIteratorPrototype; let methods; let
      KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
      if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
        if (objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2) {
          if (objectSetPrototypeOf) {
            objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2);
          } else if (typeof CurrentIteratorPrototype[ITERATOR$1] !== 'function') {
            createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$1, returnThis$2);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    }

    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return nativeIterator.call(this); };
    }

    // define iterator
    if (IterablePrototype[ITERATOR$1] !== defaultIterator) {
      createNonEnumerableProperty(IterablePrototype, ITERATOR$1, defaultIterator);
    }
    iterators[NAME] = defaultIterator;

    // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES),
      };
      if (FORCED) {
        for (KEY in methods) {
          if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
            redefine(IterablePrototype, KEY, methods[KEY]);
          }
        }
      } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME }, methods);
    }

    return methods;
  };

  const { charAt } = stringMultibyte;

  const STRING_ITERATOR = 'String Iterator';
  const setInternalState = internalState.set;
  const getInternalState = internalState.getterFor(STRING_ITERATOR);

  // `String.prototype[@@iterator]` method
  // https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
  defineIterator(String, 'String', function (iterated) {
    setInternalState(this, {
      type: STRING_ITERATOR,
      string: String(iterated),
      index: 0,
    });
  // `%StringIteratorPrototype%.next` method
  // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    const state = getInternalState(this);
    const { string } = state;
    const { index } = state;
    let point;
    if (index >= string.length) return { value: undefined, done: true };
    point = charAt(string, index);
    state.index += point.length;
    return { value: point, done: false };
  });

  const aFunction$1 = function (it) {
    if (typeof it !== 'function') {
      throw TypeError(`${String(it)} is not a function`);
    } return it;
  };

  // optional / simple context binding
  const bindContext = function (fn, that, length) {
    aFunction$1(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 0: return function () {
        return fn.call(that);
      };
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  // call something on iterator step with safe closing on error
  const callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
    } catch (error) {
      const returnMethod = iterator.return;
      if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
      throw error;
    }
  };

  const ITERATOR$2 = wellKnownSymbol('iterator');
  const ArrayPrototype = Array.prototype;

  // check on default Array iterator
  const isArrayIteratorMethod = function (it) {
    return it !== undefined && (iterators.Array === it || ArrayPrototype[ITERATOR$2] === it);
  };

  const createProperty = function (object, key, value) {
    const propertyKey = toPrimitive(key);
    if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
    else object[propertyKey] = value;
  };

  const TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
  const test = {};

  test[TO_STRING_TAG$1] = 'z';

  const toStringTagSupport = String(test) === '[object z]';

  const TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
  // ES3 wrong here
  const CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  const tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  const classof = toStringTagSupport ? classofRaw : function (it) {
    let O; let tag; let
      result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$2)) === 'string' ? tag
      // builtinTag case
        : CORRECT_ARGUMENTS ? classofRaw(O)
        // ES3 arguments fallback
          : (result = classofRaw(O)) == 'Object' && typeof O.callee === 'function' ? 'Arguments' : result;
  };

  const ITERATOR$3 = wellKnownSymbol('iterator');

  const getIteratorMethod = function (it) {
    if (it != undefined) {
      return it[ITERATOR$3]
      || it['@@iterator']
      || iterators[classof(it)];
    }
  };

  // `Array.from` method implementation
  // https://tc39.github.io/ecma262/#sec-array.from
  const arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    const O = toObject(arrayLike);
    const C = typeof this === 'function' ? this : Array;
    const argumentsLength = arguments.length;
    let mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    const mapping = mapfn !== undefined;
    let index = 0;
    const iteratorMethod = getIteratorMethod(O);
    let length; let result; let step; let iterator; let
      next;
    if (mapping) mapfn = bindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
      iterator = iteratorMethod.call(O);
      next = iterator.next;
      result = new C();
      for (;!(step = next.call(iterator)).done; index++) {
        createProperty(result, index, mapping
          ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)
          : step.value);
      }
    } else {
      length = toLength(O.length);
      result = new C(length);
      for (;length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  };

  const ITERATOR$4 = wellKnownSymbol('iterator');
  let SAFE_CLOSING = false;

  try {
    let called = 0;
    const iteratorWithReturn = {
      next() {
        return { done: !!called++ };
      },
      return() {
        SAFE_CLOSING = true;
      },
    };
    iteratorWithReturn[ITERATOR$4] = function () {
      return this;
    };
    // eslint-disable-next-line no-throw-literal
    Array.from(iteratorWithReturn, () => { throw 2; });
  } catch (error) { /* empty */ }

  const checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    let ITERATION_SUPPORT = false;
    try {
      const object = {};
      object[ITERATOR$4] = function () {
        return {
          next() {
            return { done: ITERATION_SUPPORT = true };
          },
        };
      };
      exec(object);
    } catch (error) { /* empty */ }
    return ITERATION_SUPPORT;
  };

  const INCORRECT_ITERATION = !checkCorrectnessOfIteration((iterable) => {
    Array.from(iterable);
  });

  // `Array.from` method
  // https://tc39.github.io/ecma262/#sec-array.from
  _export({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
    from: arrayFrom,
  });

  const from_1 = path.Array.from;

  //
  svgInjector.SVGInjector(document.querySelectorAll('[data-inject-svg]'), {
    afterEach: function afterEach(err, svg) {
      if (typeof jarallax === 'function') {
        svg.dispatchEvent(new CustomEvent('injected.mr.SVGInjector', {
          bubbles: true,
        }));
      }
    },
  });

  const mrTwitterFetcher = (function ($) {
    /**
     * Check for twitterFetcher dependency
     * twitterFetcher - https://github.com/jasonmayes/Twitter-Post-Fetcher
     */
    if (typeof twitterFetcher === 'undefined') {
      throw new Error('mrTwitterFetcher requires twitterFetcher.js (https://github.com/jasonmayes/Twitter-Post-Fetcher)');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    const NAME = 'mrTwitterFetcher';
    const VERSION = '1.0.0';
    const DATA_KEY = 'mr.twitterFetcher';
    const EVENT_KEY = `.${DATA_KEY}`;
    const DATA_API_KEY = '.data-api';
    const JQUERY_NO_CONFLICT = $.fn[NAME];
    const Event = {
      LOAD_DATA_API: `load${EVENT_KEY}${DATA_API_KEY}`,
      RESIZE: `resize${EVENT_KEY}`,
      READY: `ready${EVENT_KEY}`,
      APPEND: `tweetAppended${EVENT_KEY}`,
    };
    const Selector = {
      DATA_ATTR: 'twitter-fetcher',
      DATA_TWITTER_FETCHER: '[data-twitter-fetcher]',
      DATA_TWITTER: 'data-twitter',
      USER: '.user',
      TWEET: '.tweet',
      TIME_POSTED: '.timePosted',
      INTERACT: '.interact',
    };
    const Defaults = {
      USERNAME: 'twitter',
      MAX_TWEETS: 6,
    };
    const Options = {
      USERNAME: 'username',
      MAX_TWEETS: 'max-tweets',
      FLICKITY: 'flickity',
      SLIDER: 'twitterFlickity',
      ISOTOPE: 'isotope',
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    const TwitterFetcher =
    /* #__PURE__ */
    (function () {
      function TwitterFetcher(element) {
        const $element = $(element);
        this.element = element;
        this.element.id = `tweets-${new Date().getTime()}`;
        this.username = $element.data(Options.USERNAME).replace('@', '') || Defaults.USERNAME;
        this.maxTweets = parseInt($element.data(Options.MAX_TWEETS), 10) || Defaults.MAX_TWEETS; // Check if data-twitter-slider is options object, plain attribute or not present.

        this.slider = this.element.getAttribute(`${Selector.DATA_TWITTER}-${Options.FLICKITY}`) !== null;
        this.slider = this.slider && typeof $element.data(Options.SLIDER) === 'object' ? $element.data(Options.SLIDER) : this.slider; // Check if data-twitter-isotope is present.

        this.isotope = this.element.getAttribute(`${Selector.DATA_TWITTER}-${Options.ISOTOPE}`) !== null;
        this.initTwitterFeed();
      } // getters

      const _proto = TwitterFetcher.prototype;

      _proto.initTwitterFeed = function initTwitterFeed() {
        const _this = this;

        this.config = {
          profile: {
            screenName: this.username,
          },
          domId: this.element.id,
          maxTweets: this.maxTweets,
          enableLinks: true,
          showUser: true,
          showTime: true,
          dateFunction: '',
          showRetweet: false,
          customCallback: function customCallback(tweets) {
            const $element = $(_this.element);
            let html;
            const template = $element.children().first().detach();
            const x = tweets.length;
            let n = 0;

            while (n < x) {
              const tweetContent = $('<div>').append($(tweets[n]));
              const templateClone = template.clone();
              templateClone.find(Selector.TWEET).html(tweetContent.find(Selector.TWEET).html());
              templateClone.find(Selector.USER).html(tweetContent.find(Selector.USER).html());
              templateClone.find(Selector.TIME_POSTED).html(tweetContent.find(Selector.TIME_POSTED).html());
              templateClone.find(Selector.INTERACT).html(tweetContent.find(Selector.INTERACT).html());
              $element.append(templateClone);
              n += 1; // Fire an event when each tweet is added to the div

              const appendEvent = $.Event(Event.APPEND);
              appendEvent.appendedElement = templateClone;
              appendEvent.mrTwitterFetcher = _this;
              $(_this.element).trigger(appendEvent);
            }

            if (_this.slider === true || typeof _this.slider === 'object') {
              // Check for Flickity dependency
              if (typeof Flickity === 'undefined') {
                throw new Error('mrTwitterFetcher requires flickity.js (https://github.com/metafizzy/flickity)');
              } else {
                $element.data('flickity', new Flickity(_this.element, _this.slider));
              }
            } else if (_this.isotope === true) {
              // Check for Isotope dependency
              if (typeof Isotope === 'undefined') {
                throw new Error('mrTwitterFetcher requires isotope.js (https://github.com/metafizzy/isotope)');
              } else {
                $(_this.element).mrIsotope();
              }
            } // Fire an event for tweets ready

            const readyEvent = $.Event(Event.READY);
            readyEvent.mrTwitterFetcher = _this;
            $(_this.element).trigger(readyEvent);
            return html;
          },
        };
        twitterFetcher.fetch(this.config);
      };

      TwitterFetcher.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachTwitterFetcher() {
          const $element = $(this);
          let data = $element.data(DATA_KEY);

          if (!data) {
            data = new TwitterFetcher(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(TwitterFetcher, null, [{
        key: 'VERSION',
        get: function get() {
          return VERSION;
        },
      }]);

      return TwitterFetcher;
    }());
    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */

    $(window).on(Event.LOAD_DATA_API, () => {
      const twitterFetcherElements = $.makeArray($(Selector.DATA_TWITTER_FETCHER));
      /* eslint-disable no-plusplus */

      for (let i = twitterFetcherElements.length; i--;) {
        const $twitterFetcher = $(twitterFetcherElements[i]);
        TwitterFetcher.jQueryInterface.call($twitterFetcher, $twitterFetcher.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = TwitterFetcher.jQueryInterface;
    $.fn[NAME].Constructor = TwitterFetcher;

    $.fn[NAME].noConflict = function TwitterFetcherNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return TwitterFetcher.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */

    return TwitterFetcher;
  }(jQuery$1));

  const mrTypedText = (function ($) {
    /**
     * Check for typedText dependency
     * typedText - https://github.com/mattboldt/typed.js/
     */
    if (typeof Typed !== 'function') {
      throw new Error('mrTypedText requires typed.js (https://github.com/mattboldt/typed.js/)');
    }
    /**
     * Check for scrollMonitor dependency
     * scrollMonitor - https://github.com/stutrek/scrollMonitor
     */

    if (typeof scrollMonitor === 'undefined') {
      throw new Error('mrTypedText requires scrollMonitor.js (https://github.com/stutrek/scrollMonitor)');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    const NAME = 'mrTypedText';
    const VERSION = '1.0.0';
    const DATA_KEY = 'mr.typedText';
    const EVENT_KEY = `.${DATA_KEY}`;
    const DATA_API_KEY = '.data-api';
    const JQUERY_NO_CONFLICT = $.fn[NAME];
    const Event = {
      LOAD_DATA_API: `load${EVENT_KEY}${DATA_API_KEY}`,
    };
    const Selector = {
      TYPED_TEXT: '[data-typed-text]',
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    const TypedText =
    /* #__PURE__ */
    (function () {
      function TypedText(element) {
        // The current map element
        this.element = element;
        const $element = $(element);
        this.Typed = new Typed(this.element, $element.data());
        this.initWatcher(element);
      } // getters

      TypedText.jQueryInterface = function jQueryInterface() {
        return this.each(function jqEachTypedText() {
          const $element = $(this);
          let data = $element.data(DATA_KEY);

          if (!data) {
            data = new TypedText(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      const _proto = TypedText.prototype;

      _proto.initWatcher = function initWatcher(element) {
        const _this = this;

        const watcher = scrollMonitor.create(element);
        watcher.stateChange(() => {
          // Stop the Typed animation when the element leaves the viewport
          if (watcher.isInViewport) {
            _this.Typed.start();
          } else {
            _this.Typed.stop();
          }
        });
      } // END Class definition
      ;

      _createClass(TypedText, null, [{
        key: 'VERSION',
        get: function get() {
          return VERSION;
        },
      }]);

      return TypedText;
    }());
    /**
     * ------------------------------------------------------------------------
     * Initialise by data attribute
     * ------------------------------------------------------------------------
     */

    $(window).on(Event.LOAD_DATA_API, () => {
      const cdownsOnPage = $.makeArray($(Selector.TYPED_TEXT));
      /* eslint-disable no-plusplus */

      for (let i = cdownsOnPage.length; i--;) {
        const $typedText = $(cdownsOnPage[i]);
        TypedText.jQueryInterface.call($typedText, $typedText.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    /* eslint-disable no-param-reassign */

    $.fn[NAME] = TypedText.jQueryInterface;
    $.fn[NAME].Constructor = TypedText;

    $.fn[NAME].noConflict = function TypedTextNoConflict() {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return TypedText.jQueryInterface;
    };
    /* eslint-enable no-param-reassign */

    return TypedText;
  }(jQuery$1));

  (function () {
    if (typeof $ === 'undefined') {
      throw new TypeError('Medium Rare JavaScript requires jQuery. jQuery must be included before theme.js.');
    }
  }());

  exports.mrCountdown = mrCountdown;
  exports.mrCountup = mrCountup;
  exports.mrDropdownGrid = mrDropdownGrid;
  exports.mrFlatpickr = mrFlatpickr;
  exports.mrFormEmail = mrFormEmail;
  exports.mrIonRangeSlider = mrIonRangeSlider;
  exports.mrIsotope = mrIsotope;
  exports.mrMaps = mrMaps;
  exports.mrMapsStyle = mrMapStyle;
  exports.mrOverlayNav = mrOverlayNav;
  exports.mrReadingPosition = mrReadingPosition;
  exports.mrSmoothScroll = mrSmoothScroll;
  exports.mrSticky = mrSticky;
  exports.mrTwitterFetcher = mrTwitterFetcher;
  exports.mrTypedText = mrTypedText;
  exports.mrUtil = mrUtil;

  Object.defineProperty(exports, '__esModule', { value: true });
}));
// # sourceMappingURL=theme.js.map
