!(function (e) {
  function t(n) {
    if (r[n]) return r[n].exports;
    var a = (r[n] = { i: n, l: !1, exports: {} });
    return e[n].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
  }
  var n = window.webpackJsonp;
  window.webpackJsonp = function (r, i, o) {
    for (var s, u, d, c = 0, l = []; c < r.length; c++) (u = r[c]), a[u] && l.push(a[u][0]), (a[u] = 0);
    for (s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
    for (n && n(r, i, o); l.length; ) l.shift()();
    if (o) for (c = 0; c < o.length; c++) d = t((t.s = o[c]));
    return d;
  };
  var r = {},
    a = { 25: 0 };
  (t.e = function (e) {
    function n() {
      (s.onerror = s.onload = null), clearTimeout(u);
      var t = a[e];
      0 !== t && (t && t[1](new Error('Loading chunk ' + e + ' failed.')), (a[e] = void 0));
    }
    var r = a[e];
    if (0 === r)
      return new Promise(function (e) {
        e();
      });
    if (r) return r[2];
    var i = new Promise(function (t, n) {
      r = a[e] = [t, n];
    });
    r[2] = i;
    var o = document.getElementsByTagName('head')[0],
      s = document.createElement('script');
    (s.type = 'text/javascript'),
      (s.charset = 'utf-8'),
      (s.async = !0),
      (s.timeout = 12e4),
      t.nc && s.setAttribute('nonce', t.nc),
      (s.src =
        t.p +
        '' +
        ({
          0: 'registrationComponent',
          1: 'scoresIntroComponent',
          2: 'scoresListComponent',
          3: 'profileViewComponent',
          4: 'profileEditComponent',
          5: 'gamesListComponent',
          6: 'gamesDetailComponent',
          7: 'scoresCreateComponent',
          8: 'depositionStartComponent',
          9: 'accountComponent',
          10: 'onboardingComponent',
          11: 'passwordResetComponent',
          12: 'referralComponent',
          13: 'loginComponent',
          14: 'faqComponent',
          15: 'passwordSetComponent',
          16: 'confirmationComponent',
          17: 'depositionResolveComponent',
          18: 'demoPlayComponent',
          20: 'introComponent',
          21: 'logoutComponent',
          22: 'notFoundComponent',
          23: 'vendors',
          24: 'app',
        }[e] || e) +
        '.' +
        {
          0: 'bf24014b1805d1872129',
          1: '8af095e0fba2f26d8f50',
          2: '5a6125da7632919942cf',
          3: 'cfc7547794c6122be7b9',
          4: 'e61b79067fab1588e11e',
          5: '7be8aa4abb14f71f2d0d',
          6: '0c3a47828c6527e6f433',
          7: 'c947b428dfab0a8d917e',
          8: '979909d6055b741dc843',
          9: '4277d0290923d80f6fb6',
          10: '7349a478dcbbd1f572d9',
          11: '36c665d773e9f598250d',
          12: '6c2bc4a726b7a1d6f5b5',
          13: '2982857b2cd81ff689bd',
          14: '3db465c5e842ca120bce',
          15: 'ddb39e690273ec916b2f',
          16: 'b1c460999d37d339274d',
          17: 'a05b64080a83bd5a1d23',
          18: '32c98c9227c9d91b70c1',
          19: 'afdbf5dcf2e0cb5c9ff6',
          20: '9d3e9134491d6dc15468',
          21: '7b0eb2f091cd8339473a',
          22: 'dc1971d2cff57cf1ca4b',
          23: '6fc7d703ed2e9d012a44',
          24: 'b0fd154d75fe20f6f4de',
        }[e] +
        '.js');
    var u = setTimeout(n, 12e4);
    return (s.onerror = s.onload = n), o.appendChild(s), i;
  }),
    (t.m = e),
    (t.c = r),
    (t.d = function (e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, 'a', n), n;
    }),
    (t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = '/'),
    (t.oe = function (e) {
      throw (console.error(e), e);
    });
})([
  function (e, t, n) {
    (function (e) {
      !(function (t, n) {
        e.exports = n();
      })(0, function () {
        'use strict';
        function t() {
          return gr.apply(null, arguments);
        }
        function r(e) {
          return e instanceof Array || '[object Array]' === Object.prototype.toString.call(e);
        }
        function a(e) {
          return null != e && '[object Object]' === Object.prototype.toString.call(e);
        }
        function i(e) {
          var t;
          for (t in e) return !1;
          return !0;
        }
        function o(e) {
          return void 0 === e;
        }
        function s(e) {
          return 'number' == typeof e || '[object Number]' === Object.prototype.toString.call(e);
        }
        function u(e) {
          return e instanceof Date || '[object Date]' === Object.prototype.toString.call(e);
        }
        function d(e, t) {
          var n,
            r = [];
          for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
          return r;
        }
        function c(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        function l(e, t) {
          for (var n in t) c(t, n) && (e[n] = t[n]);
          return c(t, 'toString') && (e.toString = t.toString), c(t, 'valueOf') && (e.valueOf = t.valueOf), e;
        }
        function _(e, t, n, r) {
          return Mt(e, t, n, r, !0).utc();
        }
        function f() {
          return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1,
          };
        }
        function m(e) {
          return null == e._pf && (e._pf = f()), e._pf;
        }
        function h(e) {
          if (null == e._isValid) {
            var t = m(e),
              n = Yr.call(t.parsedDateParts, function (e) {
                return null != e;
              }),
              r =
                !isNaN(e._d.getTime()) &&
                t.overflow < 0 &&
                !t.empty &&
                !t.invalidMonth &&
                !t.invalidWeekday &&
                !t.nullInput &&
                !t.invalidFormat &&
                !t.userInvalidated &&
                (!t.meridiem || (t.meridiem && n));
            if (
              (e._strict && (r = r && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour),
              null != Object.isFrozen && Object.isFrozen(e))
            )
              return r;
            e._isValid = r;
          }
          return e._isValid;
        }
        function p(e) {
          var t = _(NaN);
          return null != e ? l(m(t), e) : (m(t).userInvalidated = !0), t;
        }
        function y(e, t) {
          var n, r, a;
          if (
            (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
            o(t._i) || (e._i = t._i),
            o(t._f) || (e._f = t._f),
            o(t._l) || (e._l = t._l),
            o(t._strict) || (e._strict = t._strict),
            o(t._tzm) || (e._tzm = t._tzm),
            o(t._isUTC) || (e._isUTC = t._isUTC),
            o(t._offset) || (e._offset = t._offset),
            o(t._pf) || (e._pf = m(t)),
            o(t._locale) || (e._locale = t._locale),
            kr.length > 0)
          )
            for (n = 0; n < kr.length; n++) (r = kr[n]), (a = t[r]), o(a) || (e[r] = a);
          return e;
        }
        function v(e) {
          y(this, e),
            (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
            this.isValid() || (this._d = new Date(NaN)),
            !1 === br && ((br = !0), t.updateOffset(this), (br = !1));
        }
        function M(e) {
          return e instanceof v || (null != e && null != e._isAMomentObject);
        }
        function g(e) {
          return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
        }
        function L(e) {
          var t = +e,
            n = 0;
          return 0 !== t && isFinite(t) && (n = g(t)), n;
        }
        function Y(e, t, n) {
          var r,
            a = Math.min(e.length, t.length),
            i = Math.abs(e.length - t.length),
            o = 0;
          for (r = 0; r < a; r++) ((n && e[r] !== t[r]) || (!n && L(e[r]) !== L(t[r]))) && o++;
          return o + i;
        }
        function k(e) {
          !1 === t.suppressDeprecationWarnings &&
            'undefined' != typeof console &&
            console.warn &&
            console.warn('Deprecation warning: ' + e);
        }
        function b(e, n) {
          var r = !0;
          return l(function () {
            if ((null != t.deprecationHandler && t.deprecationHandler(null, e), r)) {
              for (var a, i = [], o = 0; o < arguments.length; o++) {
                if (((a = ''), 'object' == typeof arguments[o])) {
                  a += '\n[' + o + '] ';
                  for (var s in arguments[0]) a += s + ': ' + arguments[0][s] + ', ';
                  a = a.slice(0, -2);
                } else a = arguments[o];
                i.push(a);
              }
              k(e + '\nArguments: ' + Array.prototype.slice.call(i).join('') + '\n' + new Error().stack), (r = !1);
            }
            return n.apply(this, arguments);
          }, n);
        }
        function w(e, n) {
          null != t.deprecationHandler && t.deprecationHandler(e, n), wr[e] || (k(n), (wr[e] = !0));
        }
        function D(e) {
          return e instanceof Function || '[object Function]' === Object.prototype.toString.call(e);
        }
        function T(e) {
          var t, n;
          for (n in e) (t = e[n]), D(t) ? (this[n] = t) : (this['_' + n] = t);
          (this._config = e),
            (this._dayOfMonthOrdinalParseLenient = new RegExp(
              (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source
            ));
        }
        function S(e, t) {
          var n,
            r = l({}, e);
          for (n in t)
            c(t, n) &&
              (a(e[n]) && a(t[n])
                ? ((r[n] = {}), l(r[n], e[n]), l(r[n], t[n]))
                : null != t[n]
                  ? (r[n] = t[n])
                  : delete r[n]);
          for (n in e) c(e, n) && !c(t, n) && a(e[n]) && (r[n] = l({}, r[n]));
          return r;
        }
        function j(e) {
          null != e && this.set(e);
        }
        function x(e, t, n) {
          var r = this._calendar[e] || this._calendar.sameElse;
          return D(r) ? r.call(t, n) : r;
        }
        function H(e) {
          var t = this._longDateFormat[e],
            n = this._longDateFormat[e.toUpperCase()];
          return t || !n
            ? t
            : ((this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
                return e.slice(1);
              })),
              this._longDateFormat[e]);
        }
        function O() {
          return this._invalidDate;
        }
        function A(e) {
          return this._ordinal.replace('%d', e);
        }
        function E(e, t, n, r) {
          var a = this._relativeTime[n];
          return D(a) ? a(e, t, n, r) : a.replace(/%d/i, e);
        }
        function P(e, t) {
          var n = this._relativeTime[e > 0 ? 'future' : 'past'];
          return D(n) ? n(t) : n.replace(/%s/i, t);
        }
        function $(e, t) {
          var n = e.toLowerCase();
          Ar[n] = Ar[n + 's'] = Ar[t] = e;
        }
        function C(e) {
          return 'string' == typeof e ? Ar[e] || Ar[e.toLowerCase()] : void 0;
        }
        function F(e) {
          var t,
            n,
            r = {};
          for (n in e) c(e, n) && (t = C(n)) && (r[t] = e[n]);
          return r;
        }
        function W(e, t) {
          Er[e] = t;
        }
        function I(e) {
          var t = [];
          for (var n in e) t.push({ unit: n, priority: Er[n] });
          return (
            t.sort(function (e, t) {
              return e.priority - t.priority;
            }),
            t
          );
        }
        function R(e, n) {
          return function (r) {
            return null != r ? (z(this, e, r), t.updateOffset(this, n), this) : N(this, e);
          };
        }
        function N(e, t) {
          return e.isValid() ? e._d['get' + (e._isUTC ? 'UTC' : '') + t]() : NaN;
        }
        function z(e, t, n) {
          e.isValid() && e._d['set' + (e._isUTC ? 'UTC' : '') + t](n);
        }
        function J(e) {
          return (e = C(e)), D(this[e]) ? this[e]() : this;
        }
        function U(e, t) {
          if ('object' == typeof e) {
            e = F(e);
            for (var n = I(e), r = 0; r < n.length; r++) this[n[r].unit](e[n[r].unit]);
          } else if (((e = C(e)), D(this[e]))) return this[e](t);
          return this;
        }
        function V(e, t, n) {
          var r = '' + Math.abs(e),
            a = t - r.length;
          return (e >= 0 ? (n ? '+' : '') : '-') + Math.pow(10, Math.max(0, a)).toString().substr(1) + r;
        }
        function G(e, t, n, r) {
          var a = r;
          'string' == typeof r &&
            (a = function () {
              return this[r]();
            }),
            e && (Fr[e] = a),
            t &&
              (Fr[t[0]] = function () {
                return V(a.apply(this, arguments), t[1], t[2]);
              }),
            n &&
              (Fr[n] = function () {
                return this.localeData().ordinal(a.apply(this, arguments), e);
              });
        }
        function q(e) {
          return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, '') : e.replace(/\\/g, '');
        }
        function B(e) {
          var t,
            n,
            r = e.match(Pr);
          for (t = 0, n = r.length; t < n; t++) Fr[r[t]] ? (r[t] = Fr[r[t]]) : (r[t] = q(r[t]));
          return function (t) {
            var a,
              i = '';
            for (a = 0; a < n; a++) i += D(r[a]) ? r[a].call(t, e) : r[a];
            return i;
          };
        }
        function K(e, t) {
          return e.isValid()
            ? ((t = Z(t, e.localeData())), (Cr[t] = Cr[t] || B(t)), Cr[t](e))
            : e.localeData().invalidDate();
        }
        function Z(e, t) {
          function n(e) {
            return t.longDateFormat(e) || e;
          }
          var r = 5;
          for ($r.lastIndex = 0; r >= 0 && $r.test(e); ) (e = e.replace($r, n)), ($r.lastIndex = 0), (r -= 1);
          return e;
        }
        function Q(e, t, n) {
          na[e] = D(t)
            ? t
            : function (e, r) {
                return e && n ? n : t;
              };
        }
        function X(e, t) {
          return c(na, e) ? na[e](t._strict, t._locale) : new RegExp(ee(e));
        }
        function ee(e) {
          return te(
            e.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, r, a) {
              return t || n || r || a;
            })
          );
        }
        function te(e) {
          return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        }
        function ne(e, t) {
          var n,
            r = t;
          for (
            'string' == typeof e && (e = [e]),
              s(t) &&
                (r = function (e, n) {
                  n[t] = L(e);
                }),
              n = 0;
            n < e.length;
            n++
          )
            ra[e[n]] = r;
        }
        function re(e, t) {
          ne(e, function (e, n, r, a) {
            (r._w = r._w || {}), t(e, r._w, r, a);
          });
        }
        function ae(e, t, n) {
          null != t && c(ra, e) && ra[e](t, n._a, n, e);
        }
        function ie(e, t) {
          return new Date(Date.UTC(e, t + 1, 0)).getUTCDate();
        }
        function oe(e, t) {
          return e
            ? r(this._months)
              ? this._months[e.month()]
              : this._months[(this._months.isFormat || ma).test(t) ? 'format' : 'standalone'][e.month()]
            : r(this._months)
              ? this._months
              : this._months.standalone;
        }
        function se(e, t) {
          return e
            ? r(this._monthsShort)
              ? this._monthsShort[e.month()]
              : this._monthsShort[ma.test(t) ? 'format' : 'standalone'][e.month()]
            : r(this._monthsShort)
              ? this._monthsShort
              : this._monthsShort.standalone;
        }
        function ue(e, t, n) {
          var r,
            a,
            i,
            o = e.toLocaleLowerCase();
          if (!this._monthsParse)
            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
              (i = _([2e3, r])),
                (this._shortMonthsParse[r] = this.monthsShort(i, '').toLocaleLowerCase()),
                (this._longMonthsParse[r] = this.months(i, '').toLocaleLowerCase());
          return n
            ? 'MMM' === t
              ? ((a = fa.call(this._shortMonthsParse, o)), -1 !== a ? a : null)
              : ((a = fa.call(this._longMonthsParse, o)), -1 !== a ? a : null)
            : 'MMM' === t
              ? -1 !== (a = fa.call(this._shortMonthsParse, o))
                ? a
                : ((a = fa.call(this._longMonthsParse, o)), -1 !== a ? a : null)
              : -1 !== (a = fa.call(this._longMonthsParse, o))
                ? a
                : ((a = fa.call(this._shortMonthsParse, o)), -1 !== a ? a : null);
        }
        function de(e, t, n) {
          var r, a, i;
          if (this._monthsParseExact) return ue.call(this, e, t, n);
          for (
            this._monthsParse ||
              ((this._monthsParse = []), (this._longMonthsParse = []), (this._shortMonthsParse = [])),
              r = 0;
            r < 12;
            r++
          ) {
            if (
              ((a = _([2e3, r])),
              n &&
                !this._longMonthsParse[r] &&
                ((this._longMonthsParse[r] = new RegExp('^' + this.months(a, '').replace('.', '') + '$', 'i')),
                (this._shortMonthsParse[r] = new RegExp('^' + this.monthsShort(a, '').replace('.', '') + '$', 'i'))),
              n ||
                this._monthsParse[r] ||
                ((i = '^' + this.months(a, '') + '|^' + this.monthsShort(a, '')),
                (this._monthsParse[r] = new RegExp(i.replace('.', ''), 'i'))),
              n && 'MMMM' === t && this._longMonthsParse[r].test(e))
            )
              return r;
            if (n && 'MMM' === t && this._shortMonthsParse[r].test(e)) return r;
            if (!n && this._monthsParse[r].test(e)) return r;
          }
        }
        function ce(e, t) {
          var n;
          if (!e.isValid()) return e;
          if ('string' == typeof t)
            if (/^\d+$/.test(t)) t = L(t);
            else if (((t = e.localeData().monthsParse(t)), !s(t))) return e;
          return (n = Math.min(e.date(), ie(e.year(), t))), e._d['set' + (e._isUTC ? 'UTC' : '') + 'Month'](t, n), e;
        }
        function le(e) {
          return null != e ? (ce(this, e), t.updateOffset(this, !0), this) : N(this, 'Month');
        }
        function _e() {
          return ie(this.year(), this.month());
        }
        function fe(e) {
          return this._monthsParseExact
            ? (c(this, '_monthsRegex') || he.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex)
            : (c(this, '_monthsShortRegex') || (this._monthsShortRegex = ya),
              this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
        }
        function me(e) {
          return this._monthsParseExact
            ? (c(this, '_monthsRegex') || he.call(this), e ? this._monthsStrictRegex : this._monthsRegex)
            : (c(this, '_monthsRegex') || (this._monthsRegex = va),
              this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
        }
        function he() {
          function e(e, t) {
            return t.length - e.length;
          }
          var t,
            n,
            r = [],
            a = [],
            i = [];
          for (t = 0; t < 12; t++)
            (n = _([2e3, t])),
              r.push(this.monthsShort(n, '')),
              a.push(this.months(n, '')),
              i.push(this.months(n, '')),
              i.push(this.monthsShort(n, ''));
          for (r.sort(e), a.sort(e), i.sort(e), t = 0; t < 12; t++) (r[t] = te(r[t])), (a[t] = te(a[t]));
          for (t = 0; t < 24; t++) i[t] = te(i[t]);
          (this._monthsRegex = new RegExp('^(' + i.join('|') + ')', 'i')),
            (this._monthsShortRegex = this._monthsRegex),
            (this._monthsStrictRegex = new RegExp('^(' + a.join('|') + ')', 'i')),
            (this._monthsShortStrictRegex = new RegExp('^(' + r.join('|') + ')', 'i'));
        }
        function pe(e) {
          return ye(e) ? 366 : 365;
        }
        function ye(e) {
          return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
        }
        function ve() {
          return ye(this.year());
        }
        function Me(e, t, n, r, a, i, o) {
          var s = new Date(e, t, n, r, a, i, o);
          return e < 100 && e >= 0 && isFinite(s.getFullYear()) && s.setFullYear(e), s;
        }
        function ge(e) {
          var t = new Date(Date.UTC.apply(null, arguments));
          return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t;
        }
        function Le(e, t, n) {
          var r = 7 + t - n;
          return (-(7 + ge(e, 0, r).getUTCDay() - t) % 7) + r - 1;
        }
        function Ye(e, t, n, r, a) {
          var i,
            o,
            s = (7 + n - r) % 7,
            u = Le(e, r, a),
            d = 1 + 7 * (t - 1) + s + u;
          return (
            d <= 0 ? ((i = e - 1), (o = pe(i) + d)) : d > pe(e) ? ((i = e + 1), (o = d - pe(e))) : ((i = e), (o = d)),
            { year: i, dayOfYear: o }
          );
        }
        function ke(e, t, n) {
          var r,
            a,
            i = Le(e.year(), t, n),
            o = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
          return (
            o < 1
              ? ((a = e.year() - 1), (r = o + be(a, t, n)))
              : o > be(e.year(), t, n)
                ? ((r = o - be(e.year(), t, n)), (a = e.year() + 1))
                : ((a = e.year()), (r = o)),
            { week: r, year: a }
          );
        }
        function be(e, t, n) {
          var r = Le(e, t, n),
            a = Le(e + 1, t, n);
          return (pe(e) - r + a) / 7;
        }
        function we(e) {
          return ke(e, this._week.dow, this._week.doy).week;
        }
        function De() {
          return this._week.dow;
        }
        function Te() {
          return this._week.doy;
        }
        function Se(e) {
          var t = this.localeData().week(this);
          return null == e ? t : this.add(7 * (e - t), 'd');
        }
        function je(e) {
          var t = ke(this, 1, 4).week;
          return null == e ? t : this.add(7 * (e - t), 'd');
        }
        function xe(e, t) {
          return 'string' != typeof e
            ? e
            : isNaN(e)
              ? ((e = t.weekdaysParse(e)), 'number' == typeof e ? e : null)
              : parseInt(e, 10);
        }
        function He(e, t) {
          return 'string' == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
        }
        function Oe(e, t) {
          return e
            ? r(this._weekdays)
              ? this._weekdays[e.day()]
              : this._weekdays[this._weekdays.isFormat.test(t) ? 'format' : 'standalone'][e.day()]
            : r(this._weekdays)
              ? this._weekdays
              : this._weekdays.standalone;
        }
        function Ae(e) {
          return e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
        }
        function Ee(e) {
          return e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
        }
        function Pe(e, t, n) {
          var r,
            a,
            i,
            o = e.toLocaleLowerCase();
          if (!this._weekdaysParse)
            for (
              this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0;
              r < 7;
              ++r
            )
              (i = _([2e3, 1]).day(r)),
                (this._minWeekdaysParse[r] = this.weekdaysMin(i, '').toLocaleLowerCase()),
                (this._shortWeekdaysParse[r] = this.weekdaysShort(i, '').toLocaleLowerCase()),
                (this._weekdaysParse[r] = this.weekdays(i, '').toLocaleLowerCase());
          return n
            ? 'dddd' === t
              ? ((a = fa.call(this._weekdaysParse, o)), -1 !== a ? a : null)
              : 'ddd' === t
                ? ((a = fa.call(this._shortWeekdaysParse, o)), -1 !== a ? a : null)
                : ((a = fa.call(this._minWeekdaysParse, o)), -1 !== a ? a : null)
            : 'dddd' === t
              ? -1 !== (a = fa.call(this._weekdaysParse, o))
                ? a
                : -1 !== (a = fa.call(this._shortWeekdaysParse, o))
                  ? a
                  : ((a = fa.call(this._minWeekdaysParse, o)), -1 !== a ? a : null)
              : 'ddd' === t
                ? -1 !== (a = fa.call(this._shortWeekdaysParse, o))
                  ? a
                  : -1 !== (a = fa.call(this._weekdaysParse, o))
                    ? a
                    : ((a = fa.call(this._minWeekdaysParse, o)), -1 !== a ? a : null)
                : -1 !== (a = fa.call(this._minWeekdaysParse, o))
                  ? a
                  : -1 !== (a = fa.call(this._weekdaysParse, o))
                    ? a
                    : ((a = fa.call(this._shortWeekdaysParse, o)), -1 !== a ? a : null);
        }
        function $e(e, t, n) {
          var r, a, i;
          if (this._weekdaysParseExact) return Pe.call(this, e, t, n);
          for (
            this._weekdaysParse ||
              ((this._weekdaysParse = []),
              (this._minWeekdaysParse = []),
              (this._shortWeekdaysParse = []),
              (this._fullWeekdaysParse = [])),
              r = 0;
            r < 7;
            r++
          ) {
            if (
              ((a = _([2e3, 1]).day(r)),
              n &&
                !this._fullWeekdaysParse[r] &&
                ((this._fullWeekdaysParse[r] = new RegExp('^' + this.weekdays(a, '').replace('.', '.?') + '$', 'i')),
                (this._shortWeekdaysParse[r] = new RegExp(
                  '^' + this.weekdaysShort(a, '').replace('.', '.?') + '$',
                  'i'
                )),
                (this._minWeekdaysParse[r] = new RegExp('^' + this.weekdaysMin(a, '').replace('.', '.?') + '$', 'i'))),
              this._weekdaysParse[r] ||
                ((i = '^' + this.weekdays(a, '') + '|^' + this.weekdaysShort(a, '') + '|^' + this.weekdaysMin(a, '')),
                (this._weekdaysParse[r] = new RegExp(i.replace('.', ''), 'i'))),
              n && 'dddd' === t && this._fullWeekdaysParse[r].test(e))
            )
              return r;
            if (n && 'ddd' === t && this._shortWeekdaysParse[r].test(e)) return r;
            if (n && 'dd' === t && this._minWeekdaysParse[r].test(e)) return r;
            if (!n && this._weekdaysParse[r].test(e)) return r;
          }
        }
        function Ce(e) {
          if (!this.isValid()) return null != e ? this : NaN;
          var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          return null != e ? ((e = xe(e, this.localeData())), this.add(e - t, 'd')) : t;
        }
        function Fe(e) {
          if (!this.isValid()) return null != e ? this : NaN;
          var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return null == e ? t : this.add(e - t, 'd');
        }
        function We(e) {
          if (!this.isValid()) return null != e ? this : NaN;
          if (null != e) {
            var t = He(e, this.localeData());
            return this.day(this.day() % 7 ? t : t - 7);
          }
          return this.day() || 7;
        }
        function Ie(e) {
          return this._weekdaysParseExact
            ? (c(this, '_weekdaysRegex') || ze.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex)
            : (c(this, '_weekdaysRegex') || (this._weekdaysRegex = ba),
              this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
        }
        function Re(e) {
          return this._weekdaysParseExact
            ? (c(this, '_weekdaysRegex') || ze.call(this),
              e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            : (c(this, '_weekdaysShortRegex') || (this._weekdaysShortRegex = wa),
              this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
        }
        function Ne(e) {
          return this._weekdaysParseExact
            ? (c(this, '_weekdaysRegex') || ze.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            : (c(this, '_weekdaysMinRegex') || (this._weekdaysMinRegex = Da),
              this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
        }
        function ze() {
          function e(e, t) {
            return t.length - e.length;
          }
          var t,
            n,
            r,
            a,
            i,
            o = [],
            s = [],
            u = [],
            d = [];
          for (t = 0; t < 7; t++)
            (n = _([2e3, 1]).day(t)),
              (r = this.weekdaysMin(n, '')),
              (a = this.weekdaysShort(n, '')),
              (i = this.weekdays(n, '')),
              o.push(r),
              s.push(a),
              u.push(i),
              d.push(r),
              d.push(a),
              d.push(i);
          for (o.sort(e), s.sort(e), u.sort(e), d.sort(e), t = 0; t < 7; t++)
            (s[t] = te(s[t])), (u[t] = te(u[t])), (d[t] = te(d[t]));
          (this._weekdaysRegex = new RegExp('^(' + d.join('|') + ')', 'i')),
            (this._weekdaysShortRegex = this._weekdaysRegex),
            (this._weekdaysMinRegex = this._weekdaysRegex),
            (this._weekdaysStrictRegex = new RegExp('^(' + u.join('|') + ')', 'i')),
            (this._weekdaysShortStrictRegex = new RegExp('^(' + s.join('|') + ')', 'i')),
            (this._weekdaysMinStrictRegex = new RegExp('^(' + o.join('|') + ')', 'i'));
        }
        function Je() {
          return this.hours() % 12 || 12;
        }
        function Ue() {
          return this.hours() || 24;
        }
        function Ve(e, t) {
          G(e, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), t);
          });
        }
        function Ge(e, t) {
          return t._meridiemParse;
        }
        function qe(e) {
          return 'p' === (e + '').toLowerCase().charAt(0);
        }
        function Be(e, t, n) {
          return e > 11 ? (n ? 'pm' : 'PM') : n ? 'am' : 'AM';
        }
        function Ke(e) {
          return e ? e.toLowerCase().replace('_', '-') : e;
        }
        function Ze(e) {
          for (var t, n, r, a, i = 0; i < e.length; ) {
            for (a = Ke(e[i]).split('-'), t = a.length, n = Ke(e[i + 1]), n = n ? n.split('-') : null; t > 0; ) {
              if ((r = Qe(a.slice(0, t).join('-')))) return r;
              if (n && n.length >= t && Y(a, n, !0) >= t - 1) break;
              t--;
            }
            i++;
          }
          return null;
        }
        function Qe(t) {
          var r = null;
          if (!Ha[t] && void 0 !== e && e && e.exports)
            try {
              (r = Ta._abbr), n(597)('./' + t), Xe(r);
            } catch (e) {}
          return Ha[t];
        }
        function Xe(e, t) {
          var n;
          return e && (n = o(t) ? nt(e) : et(e, t)) && (Ta = n), Ta._abbr;
        }
        function et(e, t) {
          if (null !== t) {
            var n = xa;
            if (((t.abbr = e), null != Ha[e]))
              w(
                'defineLocaleOverride',
                'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
              ),
                (n = Ha[e]._config);
            else if (null != t.parentLocale) {
              if (null == Ha[t.parentLocale])
                return (
                  Oa[t.parentLocale] || (Oa[t.parentLocale] = []), Oa[t.parentLocale].push({ name: e, config: t }), null
                );
              n = Ha[t.parentLocale]._config;
            }
            return (
              (Ha[e] = new j(S(n, t))),
              Oa[e] &&
                Oa[e].forEach(function (e) {
                  et(e.name, e.config);
                }),
              Xe(e),
              Ha[e]
            );
          }
          return delete Ha[e], null;
        }
        function tt(e, t) {
          if (null != t) {
            var n,
              r = xa;
            null != Ha[e] && (r = Ha[e]._config),
              (t = S(r, t)),
              (n = new j(t)),
              (n.parentLocale = Ha[e]),
              (Ha[e] = n),
              Xe(e);
          } else
            null != Ha[e] &&
              (null != Ha[e].parentLocale ? (Ha[e] = Ha[e].parentLocale) : null != Ha[e] && delete Ha[e]);
          return Ha[e];
        }
        function nt(e) {
          var t;
          if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)) return Ta;
          if (!r(e)) {
            if ((t = Qe(e))) return t;
            e = [e];
          }
          return Ze(e);
        }
        function rt() {
          return Sr(Ha);
        }
        function at(e) {
          var t,
            n = e._a;
          return (
            n &&
              -2 === m(e).overflow &&
              ((t =
                n[ia] < 0 || n[ia] > 11
                  ? ia
                  : n[oa] < 1 || n[oa] > ie(n[aa], n[ia])
                    ? oa
                    : n[sa] < 0 || n[sa] > 24 || (24 === n[sa] && (0 !== n[ua] || 0 !== n[da] || 0 !== n[ca]))
                      ? sa
                      : n[ua] < 0 || n[ua] > 59
                        ? ua
                        : n[da] < 0 || n[da] > 59
                          ? da
                          : n[ca] < 0 || n[ca] > 999
                            ? ca
                            : -1),
              m(e)._overflowDayOfYear && (t < aa || t > oa) && (t = oa),
              m(e)._overflowWeeks && -1 === t && (t = la),
              m(e)._overflowWeekday && -1 === t && (t = _a),
              (m(e).overflow = t)),
            e
          );
        }
        function it(e) {
          var t,
            n,
            r,
            a,
            i,
            o,
            s = e._i,
            u = Aa.exec(s) || Ea.exec(s);
          if (u) {
            for (m(e).iso = !0, t = 0, n = $a.length; t < n; t++)
              if ($a[t][1].exec(u[1])) {
                (a = $a[t][0]), (r = !1 !== $a[t][2]);
                break;
              }
            if (null == a) return void (e._isValid = !1);
            if (u[3]) {
              for (t = 0, n = Ca.length; t < n; t++)
                if (Ca[t][1].exec(u[3])) {
                  i = (u[2] || ' ') + Ca[t][0];
                  break;
                }
              if (null == i) return void (e._isValid = !1);
            }
            if (!r && null != i) return void (e._isValid = !1);
            if (u[4]) {
              if (!Pa.exec(u[4])) return void (e._isValid = !1);
              o = 'Z';
            }
            (e._f = a + (i || '') + (o || '')), _t(e);
          } else e._isValid = !1;
        }
        function ot(e) {
          var t,
            n,
            r,
            a,
            i,
            o,
            s,
            u,
            d = {
              ' GMT': ' +0000',
              ' EDT': ' -0400',
              ' EST': ' -0500',
              ' CDT': ' -0500',
              ' CST': ' -0600',
              ' MDT': ' -0600',
              ' MST': ' -0700',
              ' PDT': ' -0700',
              ' PST': ' -0800',
            },
            c = 'YXWVUTSRQPONZABCDEFGHIKLM';
          if (
            ((t = e._i
              .replace(/\([^\)]*\)|[\n\t]/g, ' ')
              .replace(/(\s\s+)/g, ' ')
              .replace(/^\s|\s$/g, '')),
            (n = Wa.exec(t)))
          ) {
            if (
              ((r = n[1] ? 'ddd' + (5 === n[1].length ? ', ' : ' ') : ''),
              (a = 'D MMM ' + (n[2].length > 10 ? 'YYYY ' : 'YY ')),
              (i = 'HH:mm' + (n[4] ? ':ss' : '')),
              n[1])
            ) {
              var l = new Date(n[2]),
                _ = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][l.getDay()];
              if (n[1].substr(0, 3) !== _) return (m(e).weekdayMismatch = !0), void (e._isValid = !1);
            }
            switch (n[5].length) {
              case 2:
                0 === u
                  ? (s = ' +0000')
                  : ((u = c.indexOf(n[5][1].toUpperCase()) - 12),
                    (s = (u < 0 ? ' -' : ' +') + ('' + u).replace(/^-?/, '0').match(/..$/)[0] + '00'));
                break;
              case 4:
                s = d[n[5]];
                break;
              default:
                s = d[' GMT'];
            }
            (n[5] = s), (e._i = n.splice(1).join('')), (o = ' ZZ'), (e._f = r + a + i + o), _t(e), (m(e).rfc2822 = !0);
          } else e._isValid = !1;
        }
        function st(e) {
          var n = Fa.exec(e._i);
          if (null !== n) return void (e._d = new Date(+n[1]));
          it(e),
            !1 === e._isValid &&
              (delete e._isValid, ot(e), !1 === e._isValid && (delete e._isValid, t.createFromInputFallback(e)));
        }
        function ut(e, t, n) {
          return null != e ? e : null != t ? t : n;
        }
        function dt(e) {
          var n = new Date(t.now());
          return e._useUTC
            ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()]
            : [n.getFullYear(), n.getMonth(), n.getDate()];
        }
        function ct(e) {
          var t,
            n,
            r,
            a,
            i = [];
          if (!e._d) {
            for (
              r = dt(e),
                e._w && null == e._a[oa] && null == e._a[ia] && lt(e),
                null != e._dayOfYear &&
                  ((a = ut(e._a[aa], r[aa])),
                  (e._dayOfYear > pe(a) || 0 === e._dayOfYear) && (m(e)._overflowDayOfYear = !0),
                  (n = ge(a, 0, e._dayOfYear)),
                  (e._a[ia] = n.getUTCMonth()),
                  (e._a[oa] = n.getUTCDate())),
                t = 0;
              t < 3 && null == e._a[t];
              ++t
            )
              e._a[t] = i[t] = r[t];
            for (; t < 7; t++) e._a[t] = i[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
            24 === e._a[sa] &&
              0 === e._a[ua] &&
              0 === e._a[da] &&
              0 === e._a[ca] &&
              ((e._nextDay = !0), (e._a[sa] = 0)),
              (e._d = (e._useUTC ? ge : Me).apply(null, i)),
              null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
              e._nextDay && (e._a[sa] = 24);
          }
        }
        function lt(e) {
          var t, n, r, a, i, o, s, u;
          if (((t = e._w), null != t.GG || null != t.W || null != t.E))
            (i = 1),
              (o = 4),
              (n = ut(t.GG, e._a[aa], ke(gt(), 1, 4).year)),
              (r = ut(t.W, 1)),
              ((a = ut(t.E, 1)) < 1 || a > 7) && (u = !0);
          else {
            (i = e._locale._week.dow), (o = e._locale._week.doy);
            var d = ke(gt(), i, o);
            (n = ut(t.gg, e._a[aa], d.year)),
              (r = ut(t.w, d.week)),
              null != t.d
                ? ((a = t.d) < 0 || a > 6) && (u = !0)
                : null != t.e
                  ? ((a = t.e + i), (t.e < 0 || t.e > 6) && (u = !0))
                  : (a = i);
          }
          r < 1 || r > be(n, i, o)
            ? (m(e)._overflowWeeks = !0)
            : null != u
              ? (m(e)._overflowWeekday = !0)
              : ((s = Ye(n, r, a, i, o)), (e._a[aa] = s.year), (e._dayOfYear = s.dayOfYear));
        }
        function _t(e) {
          if (e._f === t.ISO_8601) return void it(e);
          if (e._f === t.RFC_2822) return void ot(e);
          (e._a = []), (m(e).empty = !0);
          var n,
            r,
            a,
            i,
            o,
            s = '' + e._i,
            u = s.length,
            d = 0;
          for (a = Z(e._f, e._locale).match(Pr) || [], n = 0; n < a.length; n++)
            (i = a[n]),
              (r = (s.match(X(i, e)) || [])[0]),
              r &&
                ((o = s.substr(0, s.indexOf(r))),
                o.length > 0 && m(e).unusedInput.push(o),
                (s = s.slice(s.indexOf(r) + r.length)),
                (d += r.length)),
              Fr[i]
                ? (r ? (m(e).empty = !1) : m(e).unusedTokens.push(i), ae(i, r, e))
                : e._strict && !r && m(e).unusedTokens.push(i);
          (m(e).charsLeftOver = u - d),
            s.length > 0 && m(e).unusedInput.push(s),
            e._a[sa] <= 12 && !0 === m(e).bigHour && e._a[sa] > 0 && (m(e).bigHour = void 0),
            (m(e).parsedDateParts = e._a.slice(0)),
            (m(e).meridiem = e._meridiem),
            (e._a[sa] = ft(e._locale, e._a[sa], e._meridiem)),
            ct(e),
            at(e);
        }
        function ft(e, t, n) {
          var r;
          return null == n
            ? t
            : null != e.meridiemHour
              ? e.meridiemHour(t, n)
              : null != e.isPM
                ? ((r = e.isPM(n)), r && t < 12 && (t += 12), r || 12 !== t || (t = 0), t)
                : t;
        }
        function mt(e) {
          var t, n, r, a, i;
          if (0 === e._f.length) return (m(e).invalidFormat = !0), void (e._d = new Date(NaN));
          for (a = 0; a < e._f.length; a++)
            (i = 0),
              (t = y({}, e)),
              null != e._useUTC && (t._useUTC = e._useUTC),
              (t._f = e._f[a]),
              _t(t),
              h(t) &&
                ((i += m(t).charsLeftOver),
                (i += 10 * m(t).unusedTokens.length),
                (m(t).score = i),
                (null == r || i < r) && ((r = i), (n = t)));
          l(e, n || t);
        }
        function ht(e) {
          if (!e._d) {
            var t = F(e._i);
            (e._a = d([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
              return e && parseInt(e, 10);
            })),
              ct(e);
          }
        }
        function pt(e) {
          var t = new v(at(yt(e)));
          return t._nextDay && (t.add(1, 'd'), (t._nextDay = void 0)), t;
        }
        function yt(e) {
          var t = e._i,
            n = e._f;
          return (
            (e._locale = e._locale || nt(e._l)),
            null === t || (void 0 === n && '' === t)
              ? p({ nullInput: !0 })
              : ('string' == typeof t && (e._i = t = e._locale.preparse(t)),
                M(t) ? new v(at(t)) : (u(t) ? (e._d = t) : r(n) ? mt(e) : n ? _t(e) : vt(e), h(e) || (e._d = null), e))
          );
        }
        function vt(e) {
          var n = e._i;
          o(n)
            ? (e._d = new Date(t.now()))
            : u(n)
              ? (e._d = new Date(n.valueOf()))
              : 'string' == typeof n
                ? st(e)
                : r(n)
                  ? ((e._a = d(n.slice(0), function (e) {
                      return parseInt(e, 10);
                    })),
                    ct(e))
                  : a(n)
                    ? ht(e)
                    : s(n)
                      ? (e._d = new Date(n))
                      : t.createFromInputFallback(e);
        }
        function Mt(e, t, n, o, s) {
          var u = {};
          return (
            (!0 !== n && !1 !== n) || ((o = n), (n = void 0)),
            ((a(e) && i(e)) || (r(e) && 0 === e.length)) && (e = void 0),
            (u._isAMomentObject = !0),
            (u._useUTC = u._isUTC = s),
            (u._l = n),
            (u._i = e),
            (u._f = t),
            (u._strict = o),
            pt(u)
          );
        }
        function gt(e, t, n, r) {
          return Mt(e, t, n, r, !1);
        }
        function Lt(e, t) {
          var n, a;
          if ((1 === t.length && r(t[0]) && (t = t[0]), !t.length)) return gt();
          for (n = t[0], a = 1; a < t.length; ++a) (t[a].isValid() && !t[a][e](n)) || (n = t[a]);
          return n;
        }
        function Yt() {
          return Lt('isBefore', [].slice.call(arguments, 0));
        }
        function kt() {
          return Lt('isAfter', [].slice.call(arguments, 0));
        }
        function bt(e) {
          for (var t in e) if (-1 === za.indexOf(t) || (null != e[t] && isNaN(e[t]))) return !1;
          for (var n = !1, r = 0; r < za.length; ++r)
            if (e[za[r]]) {
              if (n) return !1;
              parseFloat(e[za[r]]) !== L(e[za[r]]) && (n = !0);
            }
          return !0;
        }
        function wt() {
          return this._isValid;
        }
        function Dt() {
          return Ut(NaN);
        }
        function Tt(e) {
          var t = F(e),
            n = t.year || 0,
            r = t.quarter || 0,
            a = t.month || 0,
            i = t.week || 0,
            o = t.day || 0,
            s = t.hour || 0,
            u = t.minute || 0,
            d = t.second || 0,
            c = t.millisecond || 0;
          (this._isValid = bt(t)),
            (this._milliseconds = +c + 1e3 * d + 6e4 * u + 1e3 * s * 60 * 60),
            (this._days = +o + 7 * i),
            (this._months = +a + 3 * r + 12 * n),
            (this._data = {}),
            (this._locale = nt()),
            this._bubble();
        }
        function St(e) {
          return e instanceof Tt;
        }
        function jt(e) {
          return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
        }
        function xt(e, t) {
          G(e, 0, 0, function () {
            var e = this.utcOffset(),
              n = '+';
            return e < 0 && ((e = -e), (n = '-')), n + V(~~(e / 60), 2) + t + V(~~e % 60, 2);
          });
        }
        function Ht(e, t) {
          var n = (t || '').match(e);
          if (null === n) return null;
          var r = n[n.length - 1] || [],
            a = (r + '').match(Ja) || ['-', 0, 0],
            i = 60 * a[1] + L(a[2]);
          return 0 === i ? 0 : '+' === a[0] ? i : -i;
        }
        function Ot(e, n) {
          var r, a;
          return n._isUTC
            ? ((r = n.clone()),
              (a = (M(e) || u(e) ? e.valueOf() : gt(e).valueOf()) - r.valueOf()),
              r._d.setTime(r._d.valueOf() + a),
              t.updateOffset(r, !1),
              r)
            : gt(e).local();
        }
        function At(e) {
          return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
        }
        function Et(e, n, r) {
          var a,
            i = this._offset || 0;
          if (!this.isValid()) return null != e ? this : NaN;
          if (null != e) {
            if ('string' == typeof e) {
              if (null === (e = Ht(Xr, e))) return this;
            } else Math.abs(e) < 16 && !r && (e *= 60);
            return (
              !this._isUTC && n && (a = At(this)),
              (this._offset = e),
              (this._isUTC = !0),
              null != a && this.add(a, 'm'),
              i !== e &&
                (!n || this._changeInProgress
                  ? Kt(this, Ut(e - i, 'm'), 1, !1)
                  : this._changeInProgress ||
                    ((this._changeInProgress = !0), t.updateOffset(this, !0), (this._changeInProgress = null))),
              this
            );
          }
          return this._isUTC ? i : At(this);
        }
        function Pt(e, t) {
          return null != e ? ('string' != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
        }
        function $t(e) {
          return this.utcOffset(0, e);
        }
        function Ct(e) {
          return this._isUTC && (this.utcOffset(0, e), (this._isUTC = !1), e && this.subtract(At(this), 'm')), this;
        }
        function Ft() {
          if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
          else if ('string' == typeof this._i) {
            var e = Ht(Qr, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
          }
          return this;
        }
        function Wt(e) {
          return !!this.isValid() && ((e = e ? gt(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0);
        }
        function It() {
          return (
            this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
          );
        }
        function Rt() {
          if (!o(this._isDSTShifted)) return this._isDSTShifted;
          var e = {};
          if ((y(e, this), (e = yt(e)), e._a)) {
            var t = e._isUTC ? _(e._a) : gt(e._a);
            this._isDSTShifted = this.isValid() && Y(e._a, t.toArray()) > 0;
          } else this._isDSTShifted = !1;
          return this._isDSTShifted;
        }
        function Nt() {
          return !!this.isValid() && !this._isUTC;
        }
        function zt() {
          return !!this.isValid() && this._isUTC;
        }
        function Jt() {
          return !!this.isValid() && this._isUTC && 0 === this._offset;
        }
        function Ut(e, t) {
          var n,
            r,
            a,
            i = e,
            o = null;
          return (
            St(e)
              ? (i = { ms: e._milliseconds, d: e._days, M: e._months })
              : s(e)
                ? ((i = {}), t ? (i[t] = e) : (i.milliseconds = e))
                : (o = Ua.exec(e))
                  ? ((n = '-' === o[1] ? -1 : 1),
                    (i = {
                      y: 0,
                      d: L(o[oa]) * n,
                      h: L(o[sa]) * n,
                      m: L(o[ua]) * n,
                      s: L(o[da]) * n,
                      ms: L(jt(1e3 * o[ca])) * n,
                    }))
                  : (o = Va.exec(e))
                    ? ((n = '-' === o[1] ? -1 : 1),
                      (i = {
                        y: Vt(o[2], n),
                        M: Vt(o[3], n),
                        w: Vt(o[4], n),
                        d: Vt(o[5], n),
                        h: Vt(o[6], n),
                        m: Vt(o[7], n),
                        s: Vt(o[8], n),
                      }))
                    : null == i
                      ? (i = {})
                      : 'object' == typeof i &&
                        ('from' in i || 'to' in i) &&
                        ((a = qt(gt(i.from), gt(i.to))), (i = {}), (i.ms = a.milliseconds), (i.M = a.months)),
            (r = new Tt(i)),
            St(e) && c(e, '_locale') && (r._locale = e._locale),
            r
          );
        }
        function Vt(e, t) {
          var n = e && parseFloat(e.replace(',', '.'));
          return (isNaN(n) ? 0 : n) * t;
        }
        function Gt(e, t) {
          var n = { milliseconds: 0, months: 0 };
          return (
            (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
            e.clone().add(n.months, 'M').isAfter(t) && --n.months,
            (n.milliseconds = +t - +e.clone().add(n.months, 'M')),
            n
          );
        }
        function qt(e, t) {
          var n;
          return e.isValid() && t.isValid()
            ? ((t = Ot(t, e)),
              e.isBefore(t)
                ? (n = Gt(e, t))
                : ((n = Gt(t, e)), (n.milliseconds = -n.milliseconds), (n.months = -n.months)),
              n)
            : { milliseconds: 0, months: 0 };
        }
        function Bt(e, t) {
          return function (n, r) {
            var a, i;
            return (
              null === r ||
                isNaN(+r) ||
                (w(
                  t,
                  'moment().' +
                    t +
                    '(period, number) is deprecated. Please use moment().' +
                    t +
                    '(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
                ),
                (i = n),
                (n = r),
                (r = i)),
              (n = 'string' == typeof n ? +n : n),
              (a = Ut(n, r)),
              Kt(this, a, e),
              this
            );
          };
        }
        function Kt(e, n, r, a) {
          var i = n._milliseconds,
            o = jt(n._days),
            s = jt(n._months);
          e.isValid() &&
            ((a = null == a || a),
            i && e._d.setTime(e._d.valueOf() + i * r),
            o && z(e, 'Date', N(e, 'Date') + o * r),
            s && ce(e, N(e, 'Month') + s * r),
            a && t.updateOffset(e, o || s));
        }
        function Zt(e, t) {
          var n = e.diff(t, 'days', !0);
          return n < -6
            ? 'sameElse'
            : n < -1
              ? 'lastWeek'
              : n < 0
                ? 'lastDay'
                : n < 1
                  ? 'sameDay'
                  : n < 2
                    ? 'nextDay'
                    : n < 7
                      ? 'nextWeek'
                      : 'sameElse';
        }
        function Qt(e, n) {
          var r = e || gt(),
            a = Ot(r, this).startOf('day'),
            i = t.calendarFormat(this, a) || 'sameElse',
            o = n && (D(n[i]) ? n[i].call(this, r) : n[i]);
          return this.format(o || this.localeData().calendar(i, this, gt(r)));
        }
        function Xt() {
          return new v(this);
        }
        function en(e, t) {
          var n = M(e) ? e : gt(e);
          return (
            !(!this.isValid() || !n.isValid()) &&
            ((t = C(o(t) ? 'millisecond' : t)),
            'millisecond' === t ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
          );
        }
        function tn(e, t) {
          var n = M(e) ? e : gt(e);
          return (
            !(!this.isValid() || !n.isValid()) &&
            ((t = C(o(t) ? 'millisecond' : t)),
            'millisecond' === t ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
          );
        }
        function nn(e, t, n, r) {
          return (
            (r = r || '()'),
            ('(' === r[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) &&
              (')' === r[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
          );
        }
        function rn(e, t) {
          var n,
            r = M(e) ? e : gt(e);
          return (
            !(!this.isValid() || !r.isValid()) &&
            ((t = C(t || 'millisecond')),
            'millisecond' === t
              ? this.valueOf() === r.valueOf()
              : ((n = r.valueOf()), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
          );
        }
        function an(e, t) {
          return this.isSame(e, t) || this.isAfter(e, t);
        }
        function on(e, t) {
          return this.isSame(e, t) || this.isBefore(e, t);
        }
        function sn(e, t, n) {
          var r, a, i, o;
          return this.isValid()
            ? ((r = Ot(e, this)),
              r.isValid()
                ? ((a = 6e4 * (r.utcOffset() - this.utcOffset())),
                  (t = C(t)),
                  'year' === t || 'month' === t || 'quarter' === t
                    ? ((o = un(this, r)), 'quarter' === t ? (o /= 3) : 'year' === t && (o /= 12))
                    : ((i = this - r),
                      (o =
                        'second' === t
                          ? i / 1e3
                          : 'minute' === t
                            ? i / 6e4
                            : 'hour' === t
                              ? i / 36e5
                              : 'day' === t
                                ? (i - a) / 864e5
                                : 'week' === t
                                  ? (i - a) / 6048e5
                                  : i)),
                  n ? o : g(o))
                : NaN)
            : NaN;
        }
        function un(e, t) {
          var n,
            r,
            a = 12 * (t.year() - e.year()) + (t.month() - e.month()),
            i = e.clone().add(a, 'months');
          return (
            t - i < 0
              ? ((n = e.clone().add(a - 1, 'months')), (r = (t - i) / (i - n)))
              : ((n = e.clone().add(a + 1, 'months')), (r = (t - i) / (n - i))),
            -(a + r) || 0
          );
        }
        function dn() {
          return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
        }
        function cn() {
          if (!this.isValid()) return null;
          var e = this.clone().utc();
          return e.year() < 0 || e.year() > 9999
            ? K(e, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]')
            : D(Date.prototype.toISOString)
              ? this.toDate().toISOString()
              : K(e, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
        function ln() {
          if (!this.isValid()) return 'moment.invalid(/* ' + this._i + ' */)';
          var e = 'moment',
            t = '';
          this.isLocal() || ((e = 0 === this.utcOffset() ? 'moment.utc' : 'moment.parseZone'), (t = 'Z'));
          var n = '[' + e + '("]',
            r = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY',
            a = t + '[")]';
          return this.format(n + r + '-MM-DD[T]HH:mm:ss.SSS' + a);
        }
        function _n(e) {
          e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
          var n = K(this, e);
          return this.localeData().postformat(n);
        }
        function fn(e, t) {
          return this.isValid() && ((M(e) && e.isValid()) || gt(e).isValid())
            ? Ut({ to: this, from: e }).locale(this.locale()).humanize(!t)
            : this.localeData().invalidDate();
        }
        function mn(e) {
          return this.from(gt(), e);
        }
        function hn(e, t) {
          return this.isValid() && ((M(e) && e.isValid()) || gt(e).isValid())
            ? Ut({ from: this, to: e }).locale(this.locale()).humanize(!t)
            : this.localeData().invalidDate();
        }
        function pn(e) {
          return this.to(gt(), e);
        }
        function yn(e) {
          var t;
          return void 0 === e ? this._locale._abbr : ((t = nt(e)), null != t && (this._locale = t), this);
        }
        function vn() {
          return this._locale;
        }
        function Mn(e) {
          switch ((e = C(e))) {
            case 'year':
              this.month(0);
            case 'quarter':
            case 'month':
              this.date(1);
            case 'week':
            case 'isoWeek':
            case 'day':
            case 'date':
              this.hours(0);
            case 'hour':
              this.minutes(0);
            case 'minute':
              this.seconds(0);
            case 'second':
              this.milliseconds(0);
          }
          return (
            'week' === e && this.weekday(0),
            'isoWeek' === e && this.isoWeekday(1),
            'quarter' === e && this.month(3 * Math.floor(this.month() / 3)),
            this
          );
        }
        function gn(e) {
          return void 0 === (e = C(e)) || 'millisecond' === e
            ? this
            : ('date' === e && (e = 'day'),
              this.startOf(e)
                .add(1, 'isoWeek' === e ? 'week' : e)
                .subtract(1, 'ms'));
        }
        function Ln() {
          return this._d.valueOf() - 6e4 * (this._offset || 0);
        }
        function Yn() {
          return Math.floor(this.valueOf() / 1e3);
        }
        function kn() {
          return new Date(this.valueOf());
        }
        function bn() {
          var e = this;
          return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()];
        }
        function wn() {
          var e = this;
          return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds(),
          };
        }
        function Dn() {
          return this.isValid() ? this.toISOString() : null;
        }
        function Tn() {
          return h(this);
        }
        function Sn() {
          return l({}, m(this));
        }
        function jn() {
          return m(this).overflow;
        }
        function xn() {
          return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict };
        }
        function Hn(e, t) {
          G(0, [e, e.length], 0, t);
        }
        function On(e) {
          return $n.call(
            this,
            e,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy
          );
        }
        function An(e) {
          return $n.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
        }
        function En() {
          return be(this.year(), 1, 4);
        }
        function Pn() {
          var e = this.localeData()._week;
          return be(this.year(), e.dow, e.doy);
        }
        function $n(e, t, n, r, a) {
          var i;
          return null == e ? ke(this, r, a).year : ((i = be(e, r, a)), t > i && (t = i), Cn.call(this, e, t, n, r, a));
        }
        function Cn(e, t, n, r, a) {
          var i = Ye(e, t, n, r, a),
            o = ge(i.year, 0, i.dayOfYear);
          return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this;
        }
        function Fn(e) {
          return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + (this.month() % 3));
        }
        function Wn(e) {
          var t = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
          return null == e ? t : this.add(e - t, 'd');
        }
        function In(e, t) {
          t[ca] = L(1e3 * ('0.' + e));
        }
        function Rn() {
          return this._isUTC ? 'UTC' : '';
        }
        function Nn() {
          return this._isUTC ? 'Coordinated Universal Time' : '';
        }
        function zn(e) {
          return gt(1e3 * e);
        }
        function Jn() {
          return gt.apply(null, arguments).parseZone();
        }
        function Un(e) {
          return e;
        }
        function Vn(e, t, n, r) {
          var a = nt(),
            i = _().set(r, t);
          return a[n](i, e);
        }
        function Gn(e, t, n) {
          if ((s(e) && ((t = e), (e = void 0)), (e = e || ''), null != t)) return Vn(e, t, n, 'month');
          var r,
            a = [];
          for (r = 0; r < 12; r++) a[r] = Vn(e, r, n, 'month');
          return a;
        }
        function qn(e, t, n, r) {
          'boolean' == typeof e
            ? (s(t) && ((n = t), (t = void 0)), (t = t || ''))
            : ((t = e), (n = t), (e = !1), s(t) && ((n = t), (t = void 0)), (t = t || ''));
          var a = nt(),
            i = e ? a._week.dow : 0;
          if (null != n) return Vn(t, (n + i) % 7, r, 'day');
          var o,
            u = [];
          for (o = 0; o < 7; o++) u[o] = Vn(t, (o + i) % 7, r, 'day');
          return u;
        }
        function Bn(e, t) {
          return Gn(e, t, 'months');
        }
        function Kn(e, t) {
          return Gn(e, t, 'monthsShort');
        }
        function Zn(e, t, n) {
          return qn(e, t, n, 'weekdays');
        }
        function Qn(e, t, n) {
          return qn(e, t, n, 'weekdaysShort');
        }
        function Xn(e, t, n) {
          return qn(e, t, n, 'weekdaysMin');
        }
        function er() {
          var e = this._data;
          return (
            (this._milliseconds = ri(this._milliseconds)),
            (this._days = ri(this._days)),
            (this._months = ri(this._months)),
            (e.milliseconds = ri(e.milliseconds)),
            (e.seconds = ri(e.seconds)),
            (e.minutes = ri(e.minutes)),
            (e.hours = ri(e.hours)),
            (e.months = ri(e.months)),
            (e.years = ri(e.years)),
            this
          );
        }
        function tr(e, t, n, r) {
          var a = Ut(t, n);
          return (
            (e._milliseconds += r * a._milliseconds),
            (e._days += r * a._days),
            (e._months += r * a._months),
            e._bubble()
          );
        }
        function nr(e, t) {
          return tr(this, e, t, 1);
        }
        function rr(e, t) {
          return tr(this, e, t, -1);
        }
        function ar(e) {
          return e < 0 ? Math.floor(e) : Math.ceil(e);
        }
        function ir() {
          var e,
            t,
            n,
            r,
            a,
            i = this._milliseconds,
            o = this._days,
            s = this._months,
            u = this._data;
          return (
            (i >= 0 && o >= 0 && s >= 0) ||
              (i <= 0 && o <= 0 && s <= 0) ||
              ((i += 864e5 * ar(sr(s) + o)), (o = 0), (s = 0)),
            (u.milliseconds = i % 1e3),
            (e = g(i / 1e3)),
            (u.seconds = e % 60),
            (t = g(e / 60)),
            (u.minutes = t % 60),
            (n = g(t / 60)),
            (u.hours = n % 24),
            (o += g(n / 24)),
            (a = g(or(o))),
            (s += a),
            (o -= ar(sr(a))),
            (r = g(s / 12)),
            (s %= 12),
            (u.days = o),
            (u.months = s),
            (u.years = r),
            this
          );
        }
        function or(e) {
          return (4800 * e) / 146097;
        }
        function sr(e) {
          return (146097 * e) / 4800;
        }
        function ur(e) {
          if (!this.isValid()) return NaN;
          var t,
            n,
            r = this._milliseconds;
          if ('month' === (e = C(e)) || 'year' === e)
            return (t = this._days + r / 864e5), (n = this._months + or(t)), 'month' === e ? n : n / 12;
          switch (((t = this._days + Math.round(sr(this._months))), e)) {
            case 'week':
              return t / 7 + r / 6048e5;
            case 'day':
              return t + r / 864e5;
            case 'hour':
              return 24 * t + r / 36e5;
            case 'minute':
              return 1440 * t + r / 6e4;
            case 'second':
              return 86400 * t + r / 1e3;
            case 'millisecond':
              return Math.floor(864e5 * t) + r;
            default:
              throw new Error('Unknown unit ' + e);
          }
        }
        function dr() {
          return this.isValid()
            ? this._milliseconds + 864e5 * this._days + (this._months % 12) * 2592e6 + 31536e6 * L(this._months / 12)
            : NaN;
        }
        function cr(e) {
          return function () {
            return this.as(e);
          };
        }
        function lr(e) {
          return (e = C(e)), this.isValid() ? this[e + 's']() : NaN;
        }
        function _r(e) {
          return function () {
            return this.isValid() ? this._data[e] : NaN;
          };
        }
        function fr() {
          return g(this.days() / 7);
        }
        function mr(e, t, n, r, a) {
          return a.relativeTime(t || 1, !!n, e, r);
        }
        function hr(e, t, n) {
          var r = Ut(e).abs(),
            a = Mi(r.as('s')),
            i = Mi(r.as('m')),
            o = Mi(r.as('h')),
            s = Mi(r.as('d')),
            u = Mi(r.as('M')),
            d = Mi(r.as('y')),
            c = (a <= gi.ss && ['s', a]) ||
              (a < gi.s && ['ss', a]) ||
              (i <= 1 && ['m']) ||
              (i < gi.m && ['mm', i]) ||
              (o <= 1 && ['h']) ||
              (o < gi.h && ['hh', o]) ||
              (s <= 1 && ['d']) ||
              (s < gi.d && ['dd', s]) ||
              (u <= 1 && ['M']) ||
              (u < gi.M && ['MM', u]) ||
              (d <= 1 && ['y']) || ['yy', d];
          return (c[2] = t), (c[3] = +e > 0), (c[4] = n), mr.apply(null, c);
        }
        function pr(e) {
          return void 0 === e ? Mi : 'function' == typeof e && ((Mi = e), !0);
        }
        function yr(e, t) {
          return void 0 !== gi[e] && (void 0 === t ? gi[e] : ((gi[e] = t), 's' === e && (gi.ss = t - 1), !0));
        }
        function vr(e) {
          if (!this.isValid()) return this.localeData().invalidDate();
          var t = this.localeData(),
            n = hr(this, !e, t);
          return e && (n = t.pastFuture(+this, n)), t.postformat(n);
        }
        function Mr() {
          if (!this.isValid()) return this.localeData().invalidDate();
          var e,
            t,
            n,
            r = Li(this._milliseconds) / 1e3,
            a = Li(this._days),
            i = Li(this._months);
          (e = g(r / 60)), (t = g(e / 60)), (r %= 60), (e %= 60), (n = g(i / 12)), (i %= 12);
          var o = n,
            s = i,
            u = a,
            d = t,
            c = e,
            l = r,
            _ = this.asSeconds();
          return _
            ? (_ < 0 ? '-' : '') +
                'P' +
                (o ? o + 'Y' : '') +
                (s ? s + 'M' : '') +
                (u ? u + 'D' : '') +
                (d || c || l ? 'T' : '') +
                (d ? d + 'H' : '') +
                (c ? c + 'M' : '') +
                (l ? l + 'S' : '')
            : 'P0D';
        }
        var gr, Lr;
        Lr = Array.prototype.some
          ? Array.prototype.some
          : function (e) {
              for (var t = Object(this), n = t.length >>> 0, r = 0; r < n; r++)
                if (r in t && e.call(this, t[r], r, t)) return !0;
              return !1;
            };
        var Yr = Lr,
          kr = (t.momentProperties = []),
          br = !1,
          wr = {};
        (t.suppressDeprecationWarnings = !1), (t.deprecationHandler = null);
        var Dr;
        Dr = Object.keys
          ? Object.keys
          : function (e) {
              var t,
                n = [];
              for (t in e) c(e, t) && n.push(t);
              return n;
            };
        var Tr,
          Sr = Dr,
          jr = {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L',
          },
          xr = {
            LTS: 'h:mm:ss A',
            LT: 'h:mm A',
            L: 'MM/DD/YYYY',
            LL: 'MMMM D, YYYY',
            LLL: 'MMMM D, YYYY h:mm A',
            LLLL: 'dddd, MMMM D, YYYY h:mm A',
          },
          Hr = /\d{1,2}/,
          Or = {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years',
          },
          Ar = {},
          Er = {},
          Pr =
            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          $r = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          Cr = {},
          Fr = {},
          Wr = /\d/,
          Ir = /\d\d/,
          Rr = /\d{3}/,
          Nr = /\d{4}/,
          zr = /[+-]?\d{6}/,
          Jr = /\d\d?/,
          Ur = /\d\d\d\d?/,
          Vr = /\d\d\d\d\d\d?/,
          Gr = /\d{1,3}/,
          qr = /\d{1,4}/,
          Br = /[+-]?\d{1,6}/,
          Kr = /\d+/,
          Zr = /[+-]?\d+/,
          Qr = /Z|[+-]\d\d:?\d\d/gi,
          Xr = /Z|[+-]\d\d(?::?\d\d)?/gi,
          ea = /[+-]?\d+(\.\d{1,3})?/,
          ta =
            /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
          na = {},
          ra = {},
          aa = 0,
          ia = 1,
          oa = 2,
          sa = 3,
          ua = 4,
          da = 5,
          ca = 6,
          la = 7,
          _a = 8;
        Tr = Array.prototype.indexOf
          ? Array.prototype.indexOf
          : function (e) {
              var t;
              for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
              return -1;
            };
        var fa = Tr;
        G('M', ['MM', 2], 'Mo', function () {
          return this.month() + 1;
        }),
          G('MMM', 0, 0, function (e) {
            return this.localeData().monthsShort(this, e);
          }),
          G('MMMM', 0, 0, function (e) {
            return this.localeData().months(this, e);
          }),
          $('month', 'M'),
          W('month', 8),
          Q('M', Jr),
          Q('MM', Jr, Ir),
          Q('MMM', function (e, t) {
            return t.monthsShortRegex(e);
          }),
          Q('MMMM', function (e, t) {
            return t.monthsRegex(e);
          }),
          ne(['M', 'MM'], function (e, t) {
            t[ia] = L(e) - 1;
          }),
          ne(['MMM', 'MMMM'], function (e, t, n, r) {
            var a = n._locale.monthsParse(e, r, n._strict);
            null != a ? (t[ia] = a) : (m(n).invalidMonth = e);
          });
        var ma = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          ha = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
          pa = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
          ya = ta,
          va = ta;
        G('Y', 0, 0, function () {
          var e = this.year();
          return e <= 9999 ? '' + e : '+' + e;
        }),
          G(0, ['YY', 2], 0, function () {
            return this.year() % 100;
          }),
          G(0, ['YYYY', 4], 0, 'year'),
          G(0, ['YYYYY', 5], 0, 'year'),
          G(0, ['YYYYYY', 6, !0], 0, 'year'),
          $('year', 'y'),
          W('year', 1),
          Q('Y', Zr),
          Q('YY', Jr, Ir),
          Q('YYYY', qr, Nr),
          Q('YYYYY', Br, zr),
          Q('YYYYYY', Br, zr),
          ne(['YYYYY', 'YYYYYY'], aa),
          ne('YYYY', function (e, n) {
            n[aa] = 2 === e.length ? t.parseTwoDigitYear(e) : L(e);
          }),
          ne('YY', function (e, n) {
            n[aa] = t.parseTwoDigitYear(e);
          }),
          ne('Y', function (e, t) {
            t[aa] = parseInt(e, 10);
          }),
          (t.parseTwoDigitYear = function (e) {
            return L(e) + (L(e) > 68 ? 1900 : 2e3);
          });
        var Ma = R('FullYear', !0);
        G('w', ['ww', 2], 'wo', 'week'),
          G('W', ['WW', 2], 'Wo', 'isoWeek'),
          $('week', 'w'),
          $('isoWeek', 'W'),
          W('week', 5),
          W('isoWeek', 5),
          Q('w', Jr),
          Q('ww', Jr, Ir),
          Q('W', Jr),
          Q('WW', Jr, Ir),
          re(['w', 'ww', 'W', 'WW'], function (e, t, n, r) {
            t[r.substr(0, 1)] = L(e);
          });
        var ga = { dow: 0, doy: 6 };
        G('d', 0, 'do', 'day'),
          G('dd', 0, 0, function (e) {
            return this.localeData().weekdaysMin(this, e);
          }),
          G('ddd', 0, 0, function (e) {
            return this.localeData().weekdaysShort(this, e);
          }),
          G('dddd', 0, 0, function (e) {
            return this.localeData().weekdays(this, e);
          }),
          G('e', 0, 0, 'weekday'),
          G('E', 0, 0, 'isoWeekday'),
          $('day', 'd'),
          $('weekday', 'e'),
          $('isoWeekday', 'E'),
          W('day', 11),
          W('weekday', 11),
          W('isoWeekday', 11),
          Q('d', Jr),
          Q('e', Jr),
          Q('E', Jr),
          Q('dd', function (e, t) {
            return t.weekdaysMinRegex(e);
          }),
          Q('ddd', function (e, t) {
            return t.weekdaysShortRegex(e);
          }),
          Q('dddd', function (e, t) {
            return t.weekdaysRegex(e);
          }),
          re(['dd', 'ddd', 'dddd'], function (e, t, n, r) {
            var a = n._locale.weekdaysParse(e, r, n._strict);
            null != a ? (t.d = a) : (m(n).invalidWeekday = e);
          }),
          re(['d', 'e', 'E'], function (e, t, n, r) {
            t[r] = L(e);
          });
        var La = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          Ya = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          ka = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          ba = ta,
          wa = ta,
          Da = ta;
        G('H', ['HH', 2], 0, 'hour'),
          G('h', ['hh', 2], 0, Je),
          G('k', ['kk', 2], 0, Ue),
          G('hmm', 0, 0, function () {
            return '' + Je.apply(this) + V(this.minutes(), 2);
          }),
          G('hmmss', 0, 0, function () {
            return '' + Je.apply(this) + V(this.minutes(), 2) + V(this.seconds(), 2);
          }),
          G('Hmm', 0, 0, function () {
            return '' + this.hours() + V(this.minutes(), 2);
          }),
          G('Hmmss', 0, 0, function () {
            return '' + this.hours() + V(this.minutes(), 2) + V(this.seconds(), 2);
          }),
          Ve('a', !0),
          Ve('A', !1),
          $('hour', 'h'),
          W('hour', 13),
          Q('a', Ge),
          Q('A', Ge),
          Q('H', Jr),
          Q('h', Jr),
          Q('k', Jr),
          Q('HH', Jr, Ir),
          Q('hh', Jr, Ir),
          Q('kk', Jr, Ir),
          Q('hmm', Ur),
          Q('hmmss', Vr),
          Q('Hmm', Ur),
          Q('Hmmss', Vr),
          ne(['H', 'HH'], sa),
          ne(['k', 'kk'], function (e, t, n) {
            var r = L(e);
            t[sa] = 24 === r ? 0 : r;
          }),
          ne(['a', 'A'], function (e, t, n) {
            (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
          }),
          ne(['h', 'hh'], function (e, t, n) {
            (t[sa] = L(e)), (m(n).bigHour = !0);
          }),
          ne('hmm', function (e, t, n) {
            var r = e.length - 2;
            (t[sa] = L(e.substr(0, r))), (t[ua] = L(e.substr(r))), (m(n).bigHour = !0);
          }),
          ne('hmmss', function (e, t, n) {
            var r = e.length - 4,
              a = e.length - 2;
            (t[sa] = L(e.substr(0, r))), (t[ua] = L(e.substr(r, 2))), (t[da] = L(e.substr(a))), (m(n).bigHour = !0);
          }),
          ne('Hmm', function (e, t, n) {
            var r = e.length - 2;
            (t[sa] = L(e.substr(0, r))), (t[ua] = L(e.substr(r)));
          }),
          ne('Hmmss', function (e, t, n) {
            var r = e.length - 4,
              a = e.length - 2;
            (t[sa] = L(e.substr(0, r))), (t[ua] = L(e.substr(r, 2))), (t[da] = L(e.substr(a)));
          });
        var Ta,
          Sa = /[ap]\.?m?\.?/i,
          ja = R('Hours', !0),
          xa = {
            calendar: jr,
            longDateFormat: xr,
            invalidDate: 'Invalid date',
            ordinal: '%d',
            dayOfMonthOrdinalParse: Hr,
            relativeTime: Or,
            months: ha,
            monthsShort: pa,
            week: ga,
            weekdays: La,
            weekdaysMin: ka,
            weekdaysShort: Ya,
            meridiemParse: Sa,
          },
          Ha = {},
          Oa = {},
          Aa =
            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          Ea =
            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          Pa = /Z|[+-]\d\d(?::?\d\d)?/,
          $a = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d\d/, !1],
            ['YYYY-DDD', /\d{4}-\d{3}/],
            ['YYYY-MM', /\d{4}-\d\d/, !1],
            ['YYYYYYMMDD', /[+-]\d{10}/],
            ['YYYYMMDD', /\d{8}/],
            ['GGGG[W]WWE', /\d{4}W\d{3}/],
            ['GGGG[W]WW', /\d{4}W\d{2}/, !1],
            ['YYYYDDD', /\d{7}/],
          ],
          Ca = [
            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
            ['HH:mm', /\d\d:\d\d/],
            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
            ['HHmmss', /\d\d\d\d\d\d/],
            ['HHmm', /\d\d\d\d/],
            ['HH', /\d\d/],
          ],
          Fa = /^\/?Date\((\-?\d+)/i,
          Wa =
            /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
        (t.createFromInputFallback = b(
          'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
          function (e) {
            e._d = new Date(e._i + (e._useUTC ? ' UTC' : ''));
          }
        )),
          (t.ISO_8601 = function () {}),
          (t.RFC_2822 = function () {});
        var Ia = b(
            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
              var e = gt.apply(null, arguments);
              return this.isValid() && e.isValid() ? (e < this ? this : e) : p();
            }
          ),
          Ra = b(
            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
              var e = gt.apply(null, arguments);
              return this.isValid() && e.isValid() ? (e > this ? this : e) : p();
            }
          ),
          Na = function () {
            return Date.now ? Date.now() : +new Date();
          },
          za = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];
        xt('Z', ':'),
          xt('ZZ', ''),
          Q('Z', Xr),
          Q('ZZ', Xr),
          ne(['Z', 'ZZ'], function (e, t, n) {
            (n._useUTC = !0), (n._tzm = Ht(Xr, e));
          });
        var Ja = /([\+\-]|\d\d)/gi;
        t.updateOffset = function () {};
        var Ua = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
          Va =
            /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
        (Ut.fn = Tt.prototype), (Ut.invalid = Dt);
        var Ga = Bt(1, 'add'),
          qa = Bt(-1, 'subtract');
        (t.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ'), (t.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]');
        var Ba = b(
          'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
          function (e) {
            return void 0 === e ? this.localeData() : this.locale(e);
          }
        );
        G(0, ['gg', 2], 0, function () {
          return this.weekYear() % 100;
        }),
          G(0, ['GG', 2], 0, function () {
            return this.isoWeekYear() % 100;
          }),
          Hn('gggg', 'weekYear'),
          Hn('ggggg', 'weekYear'),
          Hn('GGGG', 'isoWeekYear'),
          Hn('GGGGG', 'isoWeekYear'),
          $('weekYear', 'gg'),
          $('isoWeekYear', 'GG'),
          W('weekYear', 1),
          W('isoWeekYear', 1),
          Q('G', Zr),
          Q('g', Zr),
          Q('GG', Jr, Ir),
          Q('gg', Jr, Ir),
          Q('GGGG', qr, Nr),
          Q('gggg', qr, Nr),
          Q('GGGGG', Br, zr),
          Q('ggggg', Br, zr),
          re(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (e, t, n, r) {
            t[r.substr(0, 2)] = L(e);
          }),
          re(['gg', 'GG'], function (e, n, r, a) {
            n[a] = t.parseTwoDigitYear(e);
          }),
          G('Q', 0, 'Qo', 'quarter'),
          $('quarter', 'Q'),
          W('quarter', 7),
          Q('Q', Wr),
          ne('Q', function (e, t) {
            t[ia] = 3 * (L(e) - 1);
          }),
          G('D', ['DD', 2], 'Do', 'date'),
          $('date', 'D'),
          W('date', 9),
          Q('D', Jr),
          Q('DD', Jr, Ir),
          Q('Do', function (e, t) {
            return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
          }),
          ne(['D', 'DD'], oa),
          ne('Do', function (e, t) {
            t[oa] = L(e.match(Jr)[0], 10);
          });
        var Ka = R('Date', !0);
        G('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'),
          $('dayOfYear', 'DDD'),
          W('dayOfYear', 4),
          Q('DDD', Gr),
          Q('DDDD', Rr),
          ne(['DDD', 'DDDD'], function (e, t, n) {
            n._dayOfYear = L(e);
          }),
          G('m', ['mm', 2], 0, 'minute'),
          $('minute', 'm'),
          W('minute', 14),
          Q('m', Jr),
          Q('mm', Jr, Ir),
          ne(['m', 'mm'], ua);
        var Za = R('Minutes', !1);
        G('s', ['ss', 2], 0, 'second'),
          $('second', 's'),
          W('second', 15),
          Q('s', Jr),
          Q('ss', Jr, Ir),
          ne(['s', 'ss'], da);
        var Qa = R('Seconds', !1);
        G('S', 0, 0, function () {
          return ~~(this.millisecond() / 100);
        }),
          G(0, ['SS', 2], 0, function () {
            return ~~(this.millisecond() / 10);
          }),
          G(0, ['SSS', 3], 0, 'millisecond'),
          G(0, ['SSSS', 4], 0, function () {
            return 10 * this.millisecond();
          }),
          G(0, ['SSSSS', 5], 0, function () {
            return 100 * this.millisecond();
          }),
          G(0, ['SSSSSS', 6], 0, function () {
            return 1e3 * this.millisecond();
          }),
          G(0, ['SSSSSSS', 7], 0, function () {
            return 1e4 * this.millisecond();
          }),
          G(0, ['SSSSSSSS', 8], 0, function () {
            return 1e5 * this.millisecond();
          }),
          G(0, ['SSSSSSSSS', 9], 0, function () {
            return 1e6 * this.millisecond();
          }),
          $('millisecond', 'ms'),
          W('millisecond', 16),
          Q('S', Gr, Wr),
          Q('SS', Gr, Ir),
          Q('SSS', Gr, Rr);
        var Xa;
        for (Xa = 'SSSS'; Xa.length <= 9; Xa += 'S') Q(Xa, Kr);
        for (Xa = 'S'; Xa.length <= 9; Xa += 'S') ne(Xa, In);
        var ei = R('Milliseconds', !1);
        G('z', 0, 0, 'zoneAbbr'), G('zz', 0, 0, 'zoneName');
        var ti = v.prototype;
        (ti.add = Ga),
          (ti.calendar = Qt),
          (ti.clone = Xt),
          (ti.diff = sn),
          (ti.endOf = gn),
          (ti.format = _n),
          (ti.from = fn),
          (ti.fromNow = mn),
          (ti.to = hn),
          (ti.toNow = pn),
          (ti.get = J),
          (ti.invalidAt = jn),
          (ti.isAfter = en),
          (ti.isBefore = tn),
          (ti.isBetween = nn),
          (ti.isSame = rn),
          (ti.isSameOrAfter = an),
          (ti.isSameOrBefore = on),
          (ti.isValid = Tn),
          (ti.lang = Ba),
          (ti.locale = yn),
          (ti.localeData = vn),
          (ti.max = Ra),
          (ti.min = Ia),
          (ti.parsingFlags = Sn),
          (ti.set = U),
          (ti.startOf = Mn),
          (ti.subtract = qa),
          (ti.toArray = bn),
          (ti.toObject = wn),
          (ti.toDate = kn),
          (ti.toISOString = cn),
          (ti.inspect = ln),
          (ti.toJSON = Dn),
          (ti.toString = dn),
          (ti.unix = Yn),
          (ti.valueOf = Ln),
          (ti.creationData = xn),
          (ti.year = Ma),
          (ti.isLeapYear = ve),
          (ti.weekYear = On),
          (ti.isoWeekYear = An),
          (ti.quarter = ti.quarters = Fn),
          (ti.month = le),
          (ti.daysInMonth = _e),
          (ti.week = ti.weeks = Se),
          (ti.isoWeek = ti.isoWeeks = je),
          (ti.weeksInYear = Pn),
          (ti.isoWeeksInYear = En),
          (ti.date = Ka),
          (ti.day = ti.days = Ce),
          (ti.weekday = Fe),
          (ti.isoWeekday = We),
          (ti.dayOfYear = Wn),
          (ti.hour = ti.hours = ja),
          (ti.minute = ti.minutes = Za),
          (ti.second = ti.seconds = Qa),
          (ti.millisecond = ti.milliseconds = ei),
          (ti.utcOffset = Et),
          (ti.utc = $t),
          (ti.local = Ct),
          (ti.parseZone = Ft),
          (ti.hasAlignedHourOffset = Wt),
          (ti.isDST = It),
          (ti.isLocal = Nt),
          (ti.isUtcOffset = zt),
          (ti.isUtc = Jt),
          (ti.isUTC = Jt),
          (ti.zoneAbbr = Rn),
          (ti.zoneName = Nn),
          (ti.dates = b('dates accessor is deprecated. Use date instead.', Ka)),
          (ti.months = b('months accessor is deprecated. Use month instead', le)),
          (ti.years = b('years accessor is deprecated. Use year instead', Ma)),
          (ti.zone = b(
            'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
            Pt
          )),
          (ti.isDSTShifted = b(
            'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
            Rt
          ));
        var ni = j.prototype;
        (ni.calendar = x),
          (ni.longDateFormat = H),
          (ni.invalidDate = O),
          (ni.ordinal = A),
          (ni.preparse = Un),
          (ni.postformat = Un),
          (ni.relativeTime = E),
          (ni.pastFuture = P),
          (ni.set = T),
          (ni.months = oe),
          (ni.monthsShort = se),
          (ni.monthsParse = de),
          (ni.monthsRegex = me),
          (ni.monthsShortRegex = fe),
          (ni.week = we),
          (ni.firstDayOfYear = Te),
          (ni.firstDayOfWeek = De),
          (ni.weekdays = Oe),
          (ni.weekdaysMin = Ee),
          (ni.weekdaysShort = Ae),
          (ni.weekdaysParse = $e),
          (ni.weekdaysRegex = Ie),
          (ni.weekdaysShortRegex = Re),
          (ni.weekdaysMinRegex = Ne),
          (ni.isPM = qe),
          (ni.meridiem = Be),
          Xe('en', {
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (e) {
              var t = e % 10;
              return e + (1 === L((e % 100) / 10) ? 'th' : 1 === t ? 'st' : 2 === t ? 'nd' : 3 === t ? 'rd' : 'th');
            },
          }),
          (t.lang = b('moment.lang is deprecated. Use moment.locale instead.', Xe)),
          (t.langData = b('moment.langData is deprecated. Use moment.localeData instead.', nt));
        var ri = Math.abs,
          ai = cr('ms'),
          ii = cr('s'),
          oi = cr('m'),
          si = cr('h'),
          ui = cr('d'),
          di = cr('w'),
          ci = cr('M'),
          li = cr('y'),
          _i = _r('milliseconds'),
          fi = _r('seconds'),
          mi = _r('minutes'),
          hi = _r('hours'),
          pi = _r('days'),
          yi = _r('months'),
          vi = _r('years'),
          Mi = Math.round,
          gi = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
          Li = Math.abs,
          Yi = Tt.prototype;
        return (
          (Yi.isValid = wt),
          (Yi.abs = er),
          (Yi.add = nr),
          (Yi.subtract = rr),
          (Yi.as = ur),
          (Yi.asMilliseconds = ai),
          (Yi.asSeconds = ii),
          (Yi.asMinutes = oi),
          (Yi.asHours = si),
          (Yi.asDays = ui),
          (Yi.asWeeks = di),
          (Yi.asMonths = ci),
          (Yi.asYears = li),
          (Yi.valueOf = dr),
          (Yi._bubble = ir),
          (Yi.get = lr),
          (Yi.milliseconds = _i),
          (Yi.seconds = fi),
          (Yi.minutes = mi),
          (Yi.hours = hi),
          (Yi.days = pi),
          (Yi.weeks = fr),
          (Yi.months = yi),
          (Yi.years = vi),
          (Yi.humanize = vr),
          (Yi.toISOString = Mr),
          (Yi.toString = Mr),
          (Yi.toJSON = Mr),
          (Yi.locale = yn),
          (Yi.localeData = vn),
          (Yi.toIsoString = b(
            'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
            Mr
          )),
          (Yi.lang = Ba),
          G('X', 0, 0, 'unix'),
          G('x', 0, 0, 'valueOf'),
          Q('x', Zr),
          Q('X', ea),
          ne('X', function (e, t, n) {
            n._d = new Date(1e3 * parseFloat(e, 10));
          }),
          ne('x', function (e, t, n) {
            n._d = new Date(L(e));
          }),
          (t.version = '2.18.1'),
          (function (e) {
            gr = e;
          })(gt),
          (t.fn = ti),
          (t.min = Yt),
          (t.max = kt),
          (t.now = Na),
          (t.utc = _),
          (t.unix = zn),
          (t.months = Bn),
          (t.isDate = u),
          (t.locale = Xe),
          (t.invalid = p),
          (t.duration = Ut),
          (t.isMoment = M),
          (t.weekdays = Zn),
          (t.parseZone = Jn),
          (t.localeData = nt),
          (t.isDuration = St),
          (t.monthsShort = Kn),
          (t.weekdaysMin = Xn),
          (t.defineLocale = et),
          (t.updateLocale = tt),
          (t.locales = rt),
          (t.weekdaysShort = Qn),
          (t.normalizeUnits = C),
          (t.relativeTimeRounding = pr),
          (t.relativeTimeThreshold = yr),
          (t.calendarFormat = Zt),
          (t.prototype = ti),
          t
        );
      });
    }).call(t, n(71)(e));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || Function('return this')() || (0, eval)('this');
    } catch (e) {
      'object' == typeof window && (n = window);
    }
    e.exports = n;
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    (function (t) {
      /*!
       * Vue.js v2.4.2
       * (c) 2014-2017 Evan You
       * Released under the MIT License.
       */
      !(function (t, n) {
        e.exports = n();
      })(0, function () {
        'use strict';
        function e(e) {
          return void 0 === e || null === e;
        }
        function n(e) {
          return void 0 !== e && null !== e;
        }
        function r(e) {
          return !0 === e;
        }
        function a(e) {
          return !1 === e;
        }
        function i(e) {
          return 'string' == typeof e || 'number' == typeof e || 'boolean' == typeof e;
        }
        function o(e) {
          return null !== e && 'object' == typeof e;
        }
        function s(e) {
          return '[object Object]' === fa.call(e);
        }
        function u(e) {
          return '[object RegExp]' === fa.call(e);
        }
        function d(e) {
          var t = parseFloat(e);
          return t >= 0 && Math.floor(t) === t && isFinite(e);
        }
        function c(e) {
          return null == e ? '' : 'object' == typeof e ? JSON.stringify(e, null, 2) : String(e);
        }
        function l(e) {
          var t = parseFloat(e);
          return isNaN(t) ? e : t;
        }
        function _(e, t) {
          for (var n = Object.create(null), r = e.split(','), a = 0; a < r.length; a++) n[r[a]] = !0;
          return t
            ? function (e) {
                return n[e.toLowerCase()];
              }
            : function (e) {
                return n[e];
              };
        }
        function f(e, t) {
          if (e.length) {
            var n = e.indexOf(t);
            if (n > -1) return e.splice(n, 1);
          }
        }
        function m(e, t) {
          return pa.call(e, t);
        }
        function h(e) {
          var t = Object.create(null);
          return function (n) {
            return t[n] || (t[n] = e(n));
          };
        }
        function p(e, t) {
          function n(n) {
            var r = arguments.length;
            return r ? (r > 1 ? e.apply(t, arguments) : e.call(t, n)) : e.call(t);
          }
          return (n._length = e.length), n;
        }
        function y(e, t) {
          t = t || 0;
          for (var n = e.length - t, r = new Array(n); n--; ) r[n] = e[n + t];
          return r;
        }
        function v(e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        }
        function M(e) {
          for (var t = {}, n = 0; n < e.length; n++) e[n] && v(t, e[n]);
          return t;
        }
        function g(e, t, n) {}
        function L(e, t) {
          if (e === t) return !0;
          var n = o(e),
            r = o(t);
          if (!n || !r) return !n && !r && String(e) === String(t);
          try {
            var a = Array.isArray(e),
              i = Array.isArray(t);
            if (a && i)
              return (
                e.length === t.length &&
                e.every(function (e, n) {
                  return L(e, t[n]);
                })
              );
            if (a || i) return !1;
            var s = Object.keys(e),
              u = Object.keys(t);
            return (
              s.length === u.length &&
              s.every(function (n) {
                return L(e[n], t[n]);
              })
            );
          } catch (e) {
            return !1;
          }
        }
        function Y(e, t) {
          for (var n = 0; n < e.length; n++) if (L(e[n], t)) return n;
          return -1;
        }
        function k(e) {
          var t = !1;
          return function () {
            t || ((t = !0), e.apply(this, arguments));
          };
        }
        function b(e) {
          var t = (e + '').charCodeAt(0);
          return 36 === t || 95 === t;
        }
        function w(e, t, n, r) {
          Object.defineProperty(e, t, { value: n, enumerable: !!r, writable: !0, configurable: !0 });
        }
        function D(e) {
          if (!ja.test(e)) {
            var t = e.split('.');
            return function (e) {
              for (var n = 0; n < t.length; n++) {
                if (!e) return;
                e = e[t[n]];
              }
              return e;
            };
          }
        }
        function T(e, t, n) {
          if (Ta.errorHandler) Ta.errorHandler.call(null, e, t, n);
          else {
            if (!Oa || 'undefined' == typeof console) throw e;
            console.error(e);
          }
        }
        function S(e) {
          return 'function' == typeof e && /native code/.test(e.toString());
        }
        function j(e) {
          Ka.target && Za.push(Ka.target), (Ka.target = e);
        }
        function x() {
          Ka.target = Za.pop();
        }
        function H(e, t, n) {
          e.__proto__ = t;
        }
        function O(e, t, n) {
          for (var r = 0, a = n.length; r < a; r++) {
            var i = n[r];
            w(e, i, t[i]);
          }
        }
        function A(e, t) {
          if (o(e)) {
            var n;
            return (
              m(e, '__ob__') && e.__ob__ instanceof ni
                ? (n = e.__ob__)
                : ti.shouldConvert &&
                  !Ua() &&
                  (Array.isArray(e) || s(e)) &&
                  Object.isExtensible(e) &&
                  !e._isVue &&
                  (n = new ni(e)),
              t && n && n.vmCount++,
              n
            );
          }
        }
        function E(e, t, n, r, a) {
          var i = new Ka(),
            o = Object.getOwnPropertyDescriptor(e, t);
          if (!o || !1 !== o.configurable) {
            var s = o && o.get,
              u = o && o.set,
              d = !a && A(n);
            Object.defineProperty(e, t, {
              enumerable: !0,
              configurable: !0,
              get: function () {
                var t = s ? s.call(e) : n;
                return Ka.target && (i.depend(), d && d.dep.depend(), Array.isArray(t) && C(t)), t;
              },
              set: function (t) {
                var r = s ? s.call(e) : n;
                t === r || (t !== t && r !== r) || (u ? u.call(e, t) : (n = t), (d = !a && A(t)), i.notify());
              },
            });
          }
        }
        function P(e, t, n) {
          if (Array.isArray(e) && d(t)) return (e.length = Math.max(e.length, t)), e.splice(t, 1, n), n;
          if (m(e, t)) return (e[t] = n), n;
          var r = e.__ob__;
          return e._isVue || (r && r.vmCount) ? n : r ? (E(r.value, t, n), r.dep.notify(), n) : ((e[t] = n), n);
        }
        function $(e, t) {
          if (Array.isArray(e) && d(t)) e.splice(t, 1);
          else {
            var n = e.__ob__;
            e._isVue || (n && n.vmCount) || (m(e, t) && (delete e[t], n && n.dep.notify()));
          }
        }
        function C(e) {
          for (var t = void 0, n = 0, r = e.length; n < r; n++)
            (t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && C(t);
        }
        function F(e, t) {
          if (!t) return e;
          for (var n, r, a, i = Object.keys(t), o = 0; o < i.length; o++)
            (r = e[(n = i[o])]), (a = t[n]), m(e, n) ? s(r) && s(a) && F(r, a) : P(e, n, a);
          return e;
        }
        function W(e, t, n) {
          return n
            ? e || t
              ? function () {
                  var r = 'function' == typeof t ? t.call(n) : t,
                    a = 'function' == typeof e ? e.call(n) : void 0;
                  return r ? F(r, a) : a;
                }
              : void 0
            : t
              ? e
                ? function () {
                    return F('function' == typeof t ? t.call(this) : t, 'function' == typeof e ? e.call(this) : e);
                  }
                : t
              : e;
        }
        function I(e, t) {
          return t ? (e ? e.concat(t) : Array.isArray(t) ? t : [t]) : e;
        }
        function R(e, t) {
          var n = Object.create(e || null);
          return t ? v(n, t) : n;
        }
        function N(e) {
          var t = e.props;
          if (t) {
            var n,
              r,
              a = {};
            if (Array.isArray(t))
              for (n = t.length; n--; ) 'string' == typeof (r = t[n]) && (a[va(r)] = { type: null });
            else if (s(t)) for (var i in t) (r = t[i]), (a[va(i)] = s(r) ? r : { type: r });
            e.props = a;
          }
        }
        function z(e) {
          var t = e.inject;
          if (Array.isArray(t)) for (var n = (e.inject = {}), r = 0; r < t.length; r++) n[t[r]] = t[r];
        }
        function J(e) {
          var t = e.directives;
          if (t)
            for (var n in t) {
              var r = t[n];
              'function' == typeof r && (t[n] = { bind: r, update: r });
            }
        }
        function U(e, t, n) {
          function r(r) {
            var a = ri[r] || ai;
            u[r] = a(e[r], t[r], n, r);
          }
          'function' == typeof t && (t = t.options), N(t), z(t), J(t);
          var a = t.extends;
          if ((a && (e = U(e, a, n)), t.mixins))
            for (var i = 0, o = t.mixins.length; i < o; i++) e = U(e, t.mixins[i], n);
          var s,
            u = {};
          for (s in e) r(s);
          for (s in t) m(e, s) || r(s);
          return u;
        }
        function V(e, t, n, r) {
          if ('string' == typeof n) {
            var a = e[t];
            if (m(a, n)) return a[n];
            var i = va(n);
            if (m(a, i)) return a[i];
            var o = Ma(i);
            if (m(a, o)) return a[o];
            return a[n] || a[i] || a[o];
          }
        }
        function G(e, t, n, r) {
          var a = t[e],
            i = !m(n, e),
            o = n[e];
          if (
            (K(Boolean, a.type) &&
              (i && !m(a, 'default') ? (o = !1) : K(String, a.type) || ('' !== o && o !== La(e)) || (o = !0)),
            void 0 === o)
          ) {
            o = q(r, a, e);
            var s = ti.shouldConvert;
            (ti.shouldConvert = !0), A(o), (ti.shouldConvert = s);
          }
          return o;
        }
        function q(e, t, n) {
          if (m(t, 'default')) {
            var r = t.default;
            return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n]
              ? e._props[n]
              : 'function' == typeof r && 'Function' !== B(t.type)
                ? r.call(e)
                : r;
          }
        }
        function B(e) {
          var t = e && e.toString().match(/^\s*function (\w+)/);
          return t ? t[1] : '';
        }
        function K(e, t) {
          if (!Array.isArray(t)) return B(t) === B(e);
          for (var n = 0, r = t.length; n < r; n++) if (B(t[n]) === B(e)) return !0;
          return !1;
        }
        function Z(e) {
          return new ii(void 0, void 0, void 0, String(e));
        }
        function Q(e) {
          var t = new ii(e.tag, e.data, e.children, e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
          return (
            (t.ns = e.ns), (t.isStatic = e.isStatic), (t.key = e.key), (t.isComment = e.isComment), (t.isCloned = !0), t
          );
        }
        function X(e) {
          for (var t = e.length, n = new Array(t), r = 0; r < t; r++) n[r] = Q(e[r]);
          return n;
        }
        function ee(e) {
          function t() {
            var e = arguments,
              n = t.fns;
            if (!Array.isArray(n)) return n.apply(null, arguments);
            for (var r = n.slice(), a = 0; a < r.length; a++) r[a].apply(null, e);
          }
          return (t.fns = e), t;
        }
        function te(t, n, r, a, i) {
          var o, s, u, d;
          for (o in t)
            (s = t[o]),
              (u = n[o]),
              (d = di(o)),
              e(s) ||
                (e(u)
                  ? (e(s.fns) && (s = t[o] = ee(s)), r(d.name, s, d.once, d.capture, d.passive))
                  : s !== u && ((u.fns = s), (t[o] = u)));
          for (o in n) e(t[o]) && a((d = di(o)).name, n[o], d.capture);
        }
        function ne(t, a, i) {
          function o() {
            i.apply(this, arguments), f(s.fns, o);
          }
          var s,
            u = t[a];
          e(u) ? (s = ee([o])) : n(u.fns) && r(u.merged) ? (s = u).fns.push(o) : (s = ee([u, o])),
            (s.merged = !0),
            (t[a] = s);
        }
        function re(t, r, a) {
          var i = r.options.props;
          if (!e(i)) {
            var o = {},
              s = t.attrs,
              u = t.props;
            if (n(s) || n(u))
              for (var d in i) {
                var c = La(d);
                ae(o, u, d, c, !0) || ae(o, s, d, c, !1);
              }
            return o;
          }
        }
        function ae(e, t, r, a, i) {
          if (n(t)) {
            if (m(t, r)) return (e[r] = t[r]), i || delete t[r], !0;
            if (m(t, a)) return (e[r] = t[a]), i || delete t[a], !0;
          }
          return !1;
        }
        function ie(e) {
          for (var t = 0; t < e.length; t++) if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
          return e;
        }
        function oe(e) {
          return i(e) ? [Z(e)] : Array.isArray(e) ? ue(e) : void 0;
        }
        function se(e) {
          return n(e) && n(e.text) && a(e.isComment);
        }
        function ue(t, a) {
          var o,
            s,
            u,
            d = [];
          for (o = 0; o < t.length; o++)
            e((s = t[o])) ||
              'boolean' == typeof s ||
              ((u = d[d.length - 1]),
              Array.isArray(s)
                ? d.push.apply(d, ue(s, (a || '') + '_' + o))
                : i(s)
                  ? se(u)
                    ? (u.text += String(s))
                    : '' !== s && d.push(Z(s))
                  : se(s) && se(u)
                    ? (d[d.length - 1] = Z(u.text + s.text))
                    : (r(t._isVList) && n(s.tag) && e(s.key) && n(a) && (s.key = '__vlist' + a + '_' + o + '__'),
                      d.push(s)));
          return d;
        }
        function de(e, t) {
          return e.__esModule && e.default && (e = e.default), o(e) ? t.extend(e) : e;
        }
        function ce(e, t, n, r, a) {
          var i = ui();
          return (i.asyncFactory = e), (i.asyncMeta = { data: t, context: n, children: r, tag: a }), i;
        }
        function le(t, a, i) {
          if (r(t.error) && n(t.errorComp)) return t.errorComp;
          if (n(t.resolved)) return t.resolved;
          if (r(t.loading) && n(t.loadingComp)) return t.loadingComp;
          if (!n(t.contexts)) {
            var s = (t.contexts = [i]),
              u = !0,
              d = function () {
                for (var e = 0, t = s.length; e < t; e++) s[e].$forceUpdate();
              },
              c = k(function (e) {
                (t.resolved = de(e, a)), u || d();
              }),
              l = k(function (e) {
                n(t.errorComp) && ((t.error = !0), d());
              }),
              _ = t(c, l);
            return (
              o(_) &&
                ('function' == typeof _.then
                  ? e(t.resolved) && _.then(c, l)
                  : n(_.component) &&
                    'function' == typeof _.component.then &&
                    (_.component.then(c, l),
                    n(_.error) && (t.errorComp = de(_.error, a)),
                    n(_.loading) &&
                      ((t.loadingComp = de(_.loading, a)),
                      0 === _.delay
                        ? (t.loading = !0)
                        : setTimeout(function () {
                            e(t.resolved) && e(t.error) && ((t.loading = !0), d());
                          }, _.delay || 200)),
                    n(_.timeout) &&
                      setTimeout(function () {
                        e(t.resolved) && l(null);
                      }, _.timeout))),
              (u = !1),
              t.loading ? t.loadingComp : t.resolved
            );
          }
          t.contexts.push(i);
        }
        function _e(e) {
          if (Array.isArray(e))
            for (var t = 0; t < e.length; t++) {
              var r = e[t];
              if (n(r) && n(r.componentOptions)) return r;
            }
        }
        function fe(e) {
          (e._events = Object.create(null)), (e._hasHookEvent = !1);
          var t = e.$options._parentListeners;
          t && pe(e, t);
        }
        function me(e, t, n) {
          n ? si.$once(e, t) : si.$on(e, t);
        }
        function he(e, t) {
          si.$off(e, t);
        }
        function pe(e, t, n) {
          (si = e), te(t, n || {}, me, he, e);
        }
        function ye(e, t) {
          var n = {};
          if (!e) return n;
          for (var r = [], a = 0, i = e.length; a < i; a++) {
            var o = e[a];
            if ((o.context !== t && o.functionalContext !== t) || !o.data || null == o.data.slot) r.push(o);
            else {
              var s = o.data.slot,
                u = n[s] || (n[s] = []);
              'template' === o.tag ? u.push.apply(u, o.children) : u.push(o);
            }
          }
          return r.every(ve) || (n.default = r), n;
        }
        function ve(e) {
          return e.isComment || ' ' === e.text;
        }
        function Me(e, t) {
          t = t || {};
          for (var n = 0; n < e.length; n++) Array.isArray(e[n]) ? Me(e[n], t) : (t[e[n].key] = e[n].fn);
          return t;
        }
        function ge(e) {
          var t = e.$options,
            n = t.parent;
          if (n && !t.abstract) {
            for (; n.$options.abstract && n.$parent; ) n = n.$parent;
            n.$children.push(e);
          }
          (e.$parent = n),
            (e.$root = n ? n.$root : e),
            (e.$children = []),
            (e.$refs = {}),
            (e._watcher = null),
            (e._inactive = null),
            (e._directInactive = !1),
            (e._isMounted = !1),
            (e._isDestroyed = !1),
            (e._isBeingDestroyed = !1);
        }
        function Le(e, t, n) {
          (e.$el = t), e.$options.render || (e.$options.render = ui), De(e, 'beforeMount');
          var r;
          return (
            (r = function () {
              e._update(e._render(), n);
            }),
            (e._watcher = new vi(e, r, g)),
            (n = !1),
            null == e.$vnode && ((e._isMounted = !0), De(e, 'mounted')),
            e
          );
        }
        function Ye(e, t, n, r, a) {
          var i = !!(a || e.$options._renderChildren || r.data.scopedSlots || e.$scopedSlots !== Sa);
          if (
            ((e.$options._parentVnode = r),
            (e.$vnode = r),
            e._vnode && (e._vnode.parent = r),
            (e.$options._renderChildren = a),
            (e.$attrs = r.data && r.data.attrs),
            (e.$listeners = n),
            t && e.$options.props)
          ) {
            ti.shouldConvert = !1;
            for (var o = e._props, s = e.$options._propKeys || [], u = 0; u < s.length; u++) {
              var d = s[u];
              o[d] = G(d, e.$options.props, t, e);
            }
            (ti.shouldConvert = !0), (e.$options.propsData = t);
          }
          if (n) {
            var c = e.$options._parentListeners;
            (e.$options._parentListeners = n), pe(e, n, c);
          }
          i && ((e.$slots = ye(a, r.context)), e.$forceUpdate());
        }
        function ke(e) {
          for (; e && (e = e.$parent); ) if (e._inactive) return !0;
          return !1;
        }
        function be(e, t) {
          if (t) {
            if (((e._directInactive = !1), ke(e))) return;
          } else if (e._directInactive) return;
          if (e._inactive || null === e._inactive) {
            e._inactive = !1;
            for (var n = 0; n < e.$children.length; n++) be(e.$children[n]);
            De(e, 'activated');
          }
        }
        function we(e, t) {
          if (!((t && ((e._directInactive = !0), ke(e))) || e._inactive)) {
            e._inactive = !0;
            for (var n = 0; n < e.$children.length; n++) we(e.$children[n]);
            De(e, 'deactivated');
          }
        }
        function De(e, t) {
          var n = e.$options[t];
          if (n)
            for (var r = 0, a = n.length; r < a; r++)
              try {
                n[r].call(e);
              } catch (n) {
                T(n, e, t + ' hook');
              }
          e._hasHookEvent && e.$emit('hook:' + t);
        }
        function Te() {
          (pi = li.length = _i.length = 0), (fi = {}), (mi = hi = !1);
        }
        function Se() {
          hi = !0;
          var e, t;
          for (
            li.sort(function (e, t) {
              return e.id - t.id;
            }),
              pi = 0;
            pi < li.length;
            pi++
          )
            (t = (e = li[pi]).id), (fi[t] = null), e.run();
          var n = _i.slice(),
            r = li.slice();
          Te(), He(n), je(r), Va && Ta.devtools && Va.emit('flush');
        }
        function je(e) {
          for (var t = e.length; t--; ) {
            var n = e[t],
              r = n.vm;
            r._watcher === n && r._isMounted && De(r, 'updated');
          }
        }
        function xe(e) {
          (e._inactive = !1), _i.push(e);
        }
        function He(e) {
          for (var t = 0; t < e.length; t++) (e[t]._inactive = !0), be(e[t], !0);
        }
        function Oe(e) {
          var t = e.id;
          if (null == fi[t]) {
            if (((fi[t] = !0), hi)) {
              for (var n = li.length - 1; n > pi && li[n].id > e.id; ) n--;
              li.splice(n + 1, 0, e);
            } else li.push(e);
            mi || ((mi = !0), qa(Se));
          }
        }
        function Ae(e) {
          Mi.clear(), Ee(e, Mi);
        }
        function Ee(e, t) {
          var n,
            r,
            a = Array.isArray(e);
          if ((a || o(e)) && Object.isExtensible(e)) {
            if (e.__ob__) {
              var i = e.__ob__.dep.id;
              if (t.has(i)) return;
              t.add(i);
            }
            if (a) for (n = e.length; n--; ) Ee(e[n], t);
            else for (n = (r = Object.keys(e)).length; n--; ) Ee(e[r[n]], t);
          }
        }
        function Pe(e, t, n) {
          (gi.get = function () {
            return this[t][n];
          }),
            (gi.set = function (e) {
              this[t][n] = e;
            }),
            Object.defineProperty(e, n, gi);
        }
        function $e(e) {
          e._watchers = [];
          var t = e.$options;
          t.props && Ce(e, t.props),
            t.methods && ze(e, t.methods),
            t.data ? Fe(e) : A((e._data = {}), !0),
            t.computed && Ie(e, t.computed),
            t.watch && t.watch !== Ia && Je(e, t.watch);
        }
        function Ce(e, t) {
          var n = e.$options.propsData || {},
            r = (e._props = {}),
            a = (e.$options._propKeys = []),
            i = !e.$parent;
          ti.shouldConvert = i;
          for (var o in t)
            !(function (i) {
              a.push(i);
              var o = G(i, t, n, e);
              E(r, i, o), i in e || Pe(e, '_props', i);
            })(o);
          ti.shouldConvert = !0;
        }
        function Fe(e) {
          var t = e.$options.data;
          s((t = e._data = 'function' == typeof t ? We(t, e) : t || {})) || (t = {});
          for (var n = Object.keys(t), r = e.$options.props, a = (e.$options.methods, n.length); a--; ) {
            var i = n[a];
            (r && m(r, i)) || b(i) || Pe(e, '_data', i);
          }
          A(t, !0);
        }
        function We(e, t) {
          try {
            return e.call(t);
          } catch (e) {
            return T(e, t, 'data()'), {};
          }
        }
        function Ie(e, t) {
          var n = (e._computedWatchers = Object.create(null));
          for (var r in t) {
            var a = t[r],
              i = 'function' == typeof a ? a : a.get;
            (n[r] = new vi(e, i || g, g, Li)), r in e || Re(e, r, a);
          }
        }
        function Re(e, t, n) {
          'function' == typeof n
            ? ((gi.get = Ne(t)), (gi.set = g))
            : ((gi.get = n.get ? (!1 !== n.cache ? Ne(t) : n.get) : g), (gi.set = n.set ? n.set : g)),
            Object.defineProperty(e, t, gi);
        }
        function Ne(e) {
          return function () {
            var t = this._computedWatchers && this._computedWatchers[e];
            if (t) return t.dirty && t.evaluate(), Ka.target && t.depend(), t.value;
          };
        }
        function ze(e, t) {
          e.$options.props;
          for (var n in t) e[n] = null == t[n] ? g : p(t[n], e);
        }
        function Je(e, t) {
          for (var n in t) {
            var r = t[n];
            if (Array.isArray(r)) for (var a = 0; a < r.length; a++) Ue(e, n, r[a]);
            else Ue(e, n, r);
          }
        }
        function Ue(e, t, n, r) {
          return s(n) && ((r = n), (n = n.handler)), 'string' == typeof n && (n = e[n]), e.$watch(t, n, r);
        }
        function Ve(e) {
          var t = e.$options.provide;
          t && (e._provided = 'function' == typeof t ? t.call(e) : t);
        }
        function Ge(e) {
          var t = qe(e.$options.inject, e);
          t &&
            ((ti.shouldConvert = !1),
            Object.keys(t).forEach(function (n) {
              E(e, n, t[n]);
            }),
            (ti.shouldConvert = !0));
        }
        function qe(e, t) {
          if (e) {
            for (var n = Object.create(null), r = Ga ? Reflect.ownKeys(e) : Object.keys(e), a = 0; a < r.length; a++)
              for (var i = r[a], o = e[i], s = t; s; ) {
                if (s._provided && o in s._provided) {
                  n[i] = s._provided[o];
                  break;
                }
                s = s.$parent;
              }
            return n;
          }
        }
        function Be(e, t, r, a, i) {
          var o = {},
            s = e.options.props;
          if (n(s)) for (var u in s) o[u] = G(u, s, t || {});
          else n(r.attrs) && Ke(o, r.attrs), n(r.props) && Ke(o, r.props);
          var d = Object.create(a),
            c = e.options.render.call(
              null,
              function (e, t, n, r) {
                return nt(d, e, t, n, r, !0);
              },
              {
                data: r,
                props: o,
                children: i,
                parent: a,
                listeners: r.on || {},
                injections: qe(e.options.inject, a),
                slots: function () {
                  return ye(i, a);
                },
              }
            );
          return (
            c instanceof ii &&
              ((c.functionalContext = a),
              (c.functionalOptions = e.options),
              r.slot && ((c.data || (c.data = {})).slot = r.slot)),
            c
          );
        }
        function Ke(e, t) {
          for (var n in t) e[va(n)] = t[n];
        }
        function Ze(t, a, i, s, u) {
          if (!e(t)) {
            var d = i.$options._base;
            if ((o(t) && (t = d.extend(t)), 'function' == typeof t)) {
              var c;
              if (e(t.cid) && ((c = t), void 0 === (t = le(c, d, i)))) return ce(c, a, i, s, u);
              (a = a || {}), yt(t), n(a.model) && tt(t.options, a);
              var l = re(a, t, u);
              if (r(t.options.functional)) return Be(t, l, a, i, s);
              var _ = a.on;
              if (((a.on = a.nativeOn), r(t.options.abstract))) {
                var f = a.slot;
                (a = {}), f && (a.slot = f);
              }
              Xe(a);
              var m = t.options.name || u;
              return new ii(
                'vue-component-' + t.cid + (m ? '-' + m : ''),
                a,
                void 0,
                void 0,
                void 0,
                i,
                { Ctor: t, propsData: l, listeners: _, tag: u, children: s },
                c
              );
            }
          }
        }
        function Qe(e, t, r, a) {
          var i = e.componentOptions,
            o = {
              _isComponent: !0,
              parent: t,
              propsData: i.propsData,
              _componentTag: i.tag,
              _parentVnode: e,
              _parentListeners: i.listeners,
              _renderChildren: i.children,
              _parentElm: r || null,
              _refElm: a || null,
            },
            s = e.data.inlineTemplate;
          return n(s) && ((o.render = s.render), (o.staticRenderFns = s.staticRenderFns)), new i.Ctor(o);
        }
        function Xe(e) {
          e.hook || (e.hook = {});
          for (var t = 0; t < ki.length; t++) {
            var n = ki[t],
              r = e.hook[n],
              a = Yi[n];
            e.hook[n] = r ? et(a, r) : a;
          }
        }
        function et(e, t) {
          return function (n, r, a, i) {
            e(n, r, a, i), t(n, r, a, i);
          };
        }
        function tt(e, t) {
          var r = (e.model && e.model.prop) || 'value',
            a = (e.model && e.model.event) || 'input';
          (t.props || (t.props = {}))[r] = t.model.value;
          var i = t.on || (t.on = {});
          n(i[a]) ? (i[a] = [t.model.callback].concat(i[a])) : (i[a] = t.model.callback);
        }
        function nt(e, t, n, a, o, s) {
          return (Array.isArray(n) || i(n)) && ((o = a), (a = n), (n = void 0)), r(s) && (o = wi), rt(e, t, n, a, o);
        }
        function rt(e, t, r, a, i) {
          if (n(r) && n(r.__ob__)) return ui();
          if ((n(r) && n(r.is) && (t = r.is), !t)) return ui();
          Array.isArray(a) &&
            'function' == typeof a[0] &&
            (((r = r || {}).scopedSlots = { default: a[0] }), (a.length = 0)),
            i === wi ? (a = oe(a)) : i === bi && (a = ie(a));
          var o, s;
          if ('string' == typeof t) {
            var u;
            (s = Ta.getTagNamespace(t)),
              (o = Ta.isReservedTag(t)
                ? new ii(Ta.parsePlatformTagName(t), r, a, void 0, void 0, e)
                : n((u = V(e.$options, 'components', t)))
                  ? Ze(u, r, e, a, t)
                  : new ii(t, r, a, void 0, void 0, e));
          } else o = Ze(t, r, e, a);
          return n(o) ? (s && at(o, s), o) : ui();
        }
        function at(t, r) {
          if (((t.ns = r), 'foreignObject' !== t.tag && n(t.children)))
            for (var a = 0, i = t.children.length; a < i; a++) {
              var o = t.children[a];
              n(o.tag) && e(o.ns) && at(o, r);
            }
        }
        function it(e, t) {
          var r, a, i, s, u;
          if (Array.isArray(e) || 'string' == typeof e)
            for (r = new Array(e.length), a = 0, i = e.length; a < i; a++) r[a] = t(e[a], a);
          else if ('number' == typeof e) for (r = new Array(e), a = 0; a < e; a++) r[a] = t(a + 1, a);
          else if (o(e))
            for (s = Object.keys(e), r = new Array(s.length), a = 0, i = s.length; a < i; a++)
              (u = s[a]), (r[a] = t(e[u], u, a));
          return n(r) && (r._isVList = !0), r;
        }
        function ot(e, t, n, r) {
          var a = this.$scopedSlots[e];
          return a ? ((n = n || {}), r && (n = v(v({}, r), n)), a(n) || t) : this.$slots[e] || t;
        }
        function st(e) {
          return V(this.$options, 'filters', e, !0) || ka;
        }
        function ut(e, t, n) {
          var r = Ta.keyCodes[t] || n;
          return Array.isArray(r) ? -1 === r.indexOf(e) : r !== e;
        }
        function dt(e, t, n, r, a) {
          if (n && o(n)) {
            Array.isArray(n) && (n = M(n));
            var i;
            for (var s in n)
              !(function (o) {
                if ('class' === o || 'style' === o || ha(o)) i = e;
                else {
                  var s = e.attrs && e.attrs.type;
                  i = r || Ta.mustUseProp(t, s, o) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
                }
                o in i ||
                  ((i[o] = n[o]),
                  a &&
                    ((e.on || (e.on = {}))['update:' + o] = function (e) {
                      n[o] = e;
                    }));
              })(s);
          }
          return e;
        }
        function ct(e, t) {
          var n = this._staticTrees[e];
          return n && !t
            ? Array.isArray(n)
              ? X(n)
              : Q(n)
            : ((n = this._staticTrees[e] = this.$options.staticRenderFns[e].call(this._renderProxy)),
              _t(n, '__static__' + e, !1),
              n);
        }
        function lt(e, t, n) {
          return _t(e, '__once__' + t + (n ? '_' + n : ''), !0), e;
        }
        function _t(e, t, n) {
          if (Array.isArray(e))
            for (var r = 0; r < e.length; r++) e[r] && 'string' != typeof e[r] && ft(e[r], t + '_' + r, n);
          else ft(e, t, n);
        }
        function ft(e, t, n) {
          (e.isStatic = !0), (e.key = t), (e.isOnce = n);
        }
        function mt(e, t) {
          if (t && s(t)) {
            var n = (e.on = e.on ? v({}, e.on) : {});
            for (var r in t) {
              var a = n[r],
                i = t[r];
              n[r] = a ? [].concat(i, a) : i;
            }
          }
          return e;
        }
        function ht(e) {
          (e._vnode = null), (e._staticTrees = null);
          var t = (e.$vnode = e.$options._parentVnode),
            n = t && t.context;
          (e.$slots = ye(e.$options._renderChildren, n)),
            (e.$scopedSlots = Sa),
            (e._c = function (t, n, r, a) {
              return nt(e, t, n, r, a, !1);
            }),
            (e.$createElement = function (t, n, r, a) {
              return nt(e, t, n, r, a, !0);
            });
          var r = t && t.data;
          E(e, '$attrs', r && r.attrs, null, !0), E(e, '$listeners', e.$options._parentListeners, null, !0);
        }
        function pt(e, t) {
          var n = (e.$options = Object.create(e.constructor.options));
          (n.parent = t.parent),
            (n.propsData = t.propsData),
            (n._parentVnode = t._parentVnode),
            (n._parentListeners = t._parentListeners),
            (n._renderChildren = t._renderChildren),
            (n._componentTag = t._componentTag),
            (n._parentElm = t._parentElm),
            (n._refElm = t._refElm),
            t.render && ((n.render = t.render), (n.staticRenderFns = t.staticRenderFns));
        }
        function yt(e) {
          var t = e.options;
          if (e.super) {
            var n = yt(e.super);
            if (n !== e.superOptions) {
              e.superOptions = n;
              var r = vt(e);
              r && v(e.extendOptions, r), (t = e.options = U(n, e.extendOptions)).name && (t.components[t.name] = e);
            }
          }
          return t;
        }
        function vt(e) {
          var t,
            n = e.options,
            r = e.extendOptions,
            a = e.sealedOptions;
          for (var i in n) n[i] !== a[i] && (t || (t = {}), (t[i] = Mt(n[i], r[i], a[i])));
          return t;
        }
        function Mt(e, t, n) {
          if (Array.isArray(e)) {
            var r = [];
            (n = Array.isArray(n) ? n : [n]), (t = Array.isArray(t) ? t : [t]);
            for (var a = 0; a < e.length; a++) (t.indexOf(e[a]) >= 0 || n.indexOf(e[a]) < 0) && r.push(e[a]);
            return r;
          }
          return e;
        }
        function gt(e) {
          this._init(e);
        }
        function Lt(e) {
          e.use = function (e) {
            var t = this._installedPlugins || (this._installedPlugins = []);
            if (t.indexOf(e) > -1) return this;
            var n = y(arguments, 1);
            return (
              n.unshift(this),
              'function' == typeof e.install ? e.install.apply(e, n) : 'function' == typeof e && e.apply(null, n),
              t.push(e),
              this
            );
          };
        }
        function Yt(e) {
          e.mixin = function (e) {
            return (this.options = U(this.options, e)), this;
          };
        }
        function kt(e) {
          e.cid = 0;
          var t = 1;
          e.extend = function (e) {
            e = e || {};
            var n = this,
              r = n.cid,
              a = e._Ctor || (e._Ctor = {});
            if (a[r]) return a[r];
            var i = e.name || n.options.name,
              o = function (e) {
                this._init(e);
              };
            return (
              (o.prototype = Object.create(n.prototype)),
              (o.prototype.constructor = o),
              (o.cid = t++),
              (o.options = U(n.options, e)),
              (o.super = n),
              o.options.props && bt(o),
              o.options.computed && wt(o),
              (o.extend = n.extend),
              (o.mixin = n.mixin),
              (o.use = n.use),
              wa.forEach(function (e) {
                o[e] = n[e];
              }),
              i && (o.options.components[i] = o),
              (o.superOptions = n.options),
              (o.extendOptions = e),
              (o.sealedOptions = v({}, o.options)),
              (a[r] = o),
              o
            );
          };
        }
        function bt(e) {
          var t = e.options.props;
          for (var n in t) Pe(e.prototype, '_props', n);
        }
        function wt(e) {
          var t = e.options.computed;
          for (var n in t) Re(e.prototype, n, t[n]);
        }
        function Dt(e) {
          wa.forEach(function (t) {
            e[t] = function (e, n) {
              return n
                ? ('component' === t && s(n) && ((n.name = n.name || e), (n = this.options._base.extend(n))),
                  'directive' === t && 'function' == typeof n && (n = { bind: n, update: n }),
                  (this.options[t + 's'][e] = n),
                  n)
                : this.options[t + 's'][e];
            };
          });
        }
        function Tt(e) {
          return e && (e.Ctor.options.name || e.tag);
        }
        function St(e, t) {
          return Array.isArray(e)
            ? e.indexOf(t) > -1
            : 'string' == typeof e
              ? e.split(',').indexOf(t) > -1
              : !!u(e) && e.test(t);
        }
        function jt(e, t, n) {
          for (var r in e) {
            var a = e[r];
            if (a) {
              var i = Tt(a.componentOptions);
              i && !n(i) && (a !== t && xt(a), (e[r] = null));
            }
          }
        }
        function xt(e) {
          e && e.componentInstance.$destroy();
        }
        function Ht(e) {
          for (var t = e.data, r = e, a = e; n(a.componentInstance); )
            (a = a.componentInstance._vnode).data && (t = Ot(a.data, t));
          for (; n((r = r.parent)); ) r.data && (t = Ot(t, r.data));
          return At(t.staticClass, t.class);
        }
        function Ot(e, t) {
          return { staticClass: Et(e.staticClass, t.staticClass), class: n(e.class) ? [e.class, t.class] : t.class };
        }
        function At(e, t) {
          return n(e) || n(t) ? Et(e, Pt(t)) : '';
        }
        function Et(e, t) {
          return e ? (t ? e + ' ' + t : e) : t || '';
        }
        function Pt(e) {
          return Array.isArray(e) ? $t(e) : o(e) ? Ct(e) : 'string' == typeof e ? e : '';
        }
        function $t(e) {
          for (var t, r = '', a = 0, i = e.length; a < i; a++)
            n((t = Pt(e[a]))) && '' !== t && (r && (r += ' '), (r += t));
          return r;
        }
        function Ct(e) {
          var t = '';
          for (var n in e) e[n] && (t && (t += ' '), (t += n));
          return t;
        }
        function Ft(e) {
          return Bi(e) ? 'svg' : 'math' === e ? 'math' : void 0;
        }
        function Wt(e) {
          if ('string' == typeof e) {
            return document.querySelector(e) || document.createElement('div');
          }
          return e;
        }
        function It(e, t) {
          var n = e.data.ref;
          if (n) {
            var r = e.context,
              a = e.componentInstance || e.elm,
              i = r.$refs;
            t
              ? Array.isArray(i[n])
                ? f(i[n], a)
                : i[n] === a && (i[n] = void 0)
              : e.data.refInFor
                ? Array.isArray(i[n])
                  ? i[n].indexOf(a) < 0 && i[n].push(a)
                  : (i[n] = [a])
                : (i[n] = a);
          }
        }
        function Rt(t, a) {
          return (
            t.key === a.key &&
            ((t.tag === a.tag && t.isComment === a.isComment && n(t.data) === n(a.data) && Nt(t, a)) ||
              (r(t.isAsyncPlaceholder) && t.asyncFactory === a.asyncFactory && e(a.asyncFactory.error)))
          );
        }
        function Nt(e, t) {
          if ('input' !== e.tag) return !0;
          var r;
          return (n((r = e.data)) && n((r = r.attrs)) && r.type) === (n((r = t.data)) && n((r = r.attrs)) && r.type);
        }
        function zt(e, t, r) {
          var a,
            i,
            o = {};
          for (a = t; a <= r; ++a) n((i = e[a].key)) && (o[i] = a);
          return o;
        }
        function Jt(e, t) {
          (e.data.directives || t.data.directives) && Ut(e, t);
        }
        function Ut(e, t) {
          var n,
            r,
            a,
            i = e === eo,
            o = t === eo,
            s = Vt(e.data.directives, e.context),
            u = Vt(t.data.directives, t.context),
            d = [],
            c = [];
          for (n in u)
            (r = s[n]),
              (a = u[n]),
              r
                ? ((a.oldValue = r.value), qt(a, 'update', t, e), a.def && a.def.componentUpdated && c.push(a))
                : (qt(a, 'bind', t, e), a.def && a.def.inserted && d.push(a));
          if (d.length) {
            var l = function () {
              for (var n = 0; n < d.length; n++) qt(d[n], 'inserted', t, e);
            };
            i ? ne(t.data.hook || (t.data.hook = {}), 'insert', l) : l();
          }
          if (
            (c.length &&
              ne(t.data.hook || (t.data.hook = {}), 'postpatch', function () {
                for (var n = 0; n < c.length; n++) qt(c[n], 'componentUpdated', t, e);
              }),
            !i)
          )
            for (n in s) u[n] || qt(s[n], 'unbind', e, e, o);
        }
        function Vt(e, t) {
          var n = Object.create(null);
          if (!e) return n;
          var r, a;
          for (r = 0; r < e.length; r++)
            (a = e[r]).modifiers || (a.modifiers = ro),
              (n[Gt(a)] = a),
              (a.def = V(t.$options, 'directives', a.name, !0));
          return n;
        }
        function Gt(e) {
          return e.rawName || e.name + '.' + Object.keys(e.modifiers || {}).join('.');
        }
        function qt(e, t, n, r, a) {
          var i = e.def && e.def[t];
          if (i)
            try {
              i(n.elm, e, n, r, a);
            } catch (r) {
              T(r, n.context, 'directive ' + e.name + ' ' + t + ' hook');
            }
        }
        function Bt(t, r) {
          var a = r.componentOptions;
          if (!((n(a) && !1 === a.Ctor.options.inheritAttrs) || (e(t.data.attrs) && e(r.data.attrs)))) {
            var i,
              o,
              s = r.elm,
              u = t.data.attrs || {},
              d = r.data.attrs || {};
            n(d.__ob__) && (d = r.data.attrs = v({}, d));
            for (i in d) (o = d[i]), u[i] !== o && Kt(s, i, o);
            Pa && d.value !== u.value && Kt(s, 'value', d.value);
            for (i in u) e(d[i]) && (Ji(i) ? s.removeAttributeNS(zi, Ui(i)) : Ri(i) || s.removeAttribute(i));
          }
        }
        function Kt(e, t, n) {
          Ni(t)
            ? Vi(n)
              ? e.removeAttribute(t)
              : e.setAttribute(t, t)
            : Ri(t)
              ? e.setAttribute(t, Vi(n) || 'false' === n ? 'false' : 'true')
              : Ji(t)
                ? Vi(n)
                  ? e.removeAttributeNS(zi, Ui(t))
                  : e.setAttributeNS(zi, t, n)
                : Vi(n)
                  ? e.removeAttribute(t)
                  : e.setAttribute(t, n);
        }
        function Zt(t, r) {
          var a = r.elm,
            i = r.data,
            o = t.data;
          if (!(e(i.staticClass) && e(i.class) && (e(o) || (e(o.staticClass) && e(o.class))))) {
            var s = Ht(r),
              u = a._transitionClasses;
            n(u) && (s = Et(s, Pt(u))), s !== a._prevClass && (a.setAttribute('class', s), (a._prevClass = s));
          }
        }
        function Qt(e) {
          function t() {
            (o || (o = [])).push(e.slice(m, a).trim()), (m = a + 1);
          }
          var n,
            r,
            a,
            i,
            o,
            s = !1,
            u = !1,
            d = !1,
            c = !1,
            l = 0,
            _ = 0,
            f = 0,
            m = 0;
          for (a = 0; a < e.length; a++)
            if (((r = n), (n = e.charCodeAt(a)), s)) 39 === n && 92 !== r && (s = !1);
            else if (u) 34 === n && 92 !== r && (u = !1);
            else if (d) 96 === n && 92 !== r && (d = !1);
            else if (c) 47 === n && 92 !== r && (c = !1);
            else if (124 !== n || 124 === e.charCodeAt(a + 1) || 124 === e.charCodeAt(a - 1) || l || _ || f) {
              switch (n) {
                case 34:
                  u = !0;
                  break;
                case 39:
                  s = !0;
                  break;
                case 96:
                  d = !0;
                  break;
                case 40:
                  f++;
                  break;
                case 41:
                  f--;
                  break;
                case 91:
                  _++;
                  break;
                case 93:
                  _--;
                  break;
                case 123:
                  l++;
                  break;
                case 125:
                  l--;
              }
              if (47 === n) {
                for (var h = a - 1, p = void 0; h >= 0 && ' ' === (p = e.charAt(h)); h--);
                (p && so.test(p)) || (c = !0);
              }
            } else void 0 === i ? ((m = a + 1), (i = e.slice(0, a).trim())) : t();
          if ((void 0 === i ? (i = e.slice(0, a).trim()) : 0 !== m && t(), o))
            for (a = 0; a < o.length; a++) i = Xt(i, o[a]);
          return i;
        }
        function Xt(e, t) {
          var n = t.indexOf('(');
          return n < 0 ? '_f("' + t + '")(' + e + ')' : '_f("' + t.slice(0, n) + '")(' + e + ',' + t.slice(n + 1);
        }
        function en(e) {
          console.error('[Vue compiler]: ' + e);
        }
        function tn(e, t) {
          return e
            ? e
                .map(function (e) {
                  return e[t];
                })
                .filter(function (e) {
                  return e;
                })
            : [];
        }
        function nn(e, t, n) {
          (e.props || (e.props = [])).push({ name: t, value: n });
        }
        function rn(e, t, n) {
          (e.attrs || (e.attrs = [])).push({ name: t, value: n });
        }
        function an(e, t, n, r, a, i) {
          (e.directives || (e.directives = [])).push({ name: t, rawName: n, value: r, arg: a, modifiers: i });
        }
        function on(e, t, n, r, a, i) {
          r && r.capture && (delete r.capture, (t = '!' + t)),
            r && r.once && (delete r.once, (t = '~' + t)),
            r && r.passive && (delete r.passive, (t = '&' + t));
          var o;
          r && r.native
            ? (delete r.native, (o = e.nativeEvents || (e.nativeEvents = {})))
            : (o = e.events || (e.events = {}));
          var s = { value: n, modifiers: r },
            u = o[t];
          Array.isArray(u) ? (a ? u.unshift(s) : u.push(s)) : (o[t] = u ? (a ? [s, u] : [u, s]) : s);
        }
        function sn(e, t, n) {
          var r = un(e, ':' + t) || un(e, 'v-bind:' + t);
          if (null != r) return Qt(r);
          if (!1 !== n) {
            var a = un(e, t);
            if (null != a) return JSON.stringify(a);
          }
        }
        function un(e, t) {
          var n;
          if (null != (n = e.attrsMap[t]))
            for (var r = e.attrsList, a = 0, i = r.length; a < i; a++)
              if (r[a].name === t) {
                r.splice(a, 1);
                break;
              }
          return n;
        }
        function dn(e, t, n) {
          var r = n || {},
            a = r.number,
            i = '$$v';
          r.trim && (i = "(typeof $$v === 'string'? $$v.trim(): $$v)"), a && (i = '_n(' + i + ')');
          var o = cn(t, i);
          e.model = { value: '(' + t + ')', expression: '"' + t + '"', callback: 'function ($$v) {' + o + '}' };
        }
        function cn(e, t) {
          var n = ln(e);
          return null === n.idx ? e + '=' + t : '$set(' + n.exp + ', ' + n.idx + ', ' + t + ')';
        }
        function ln(e) {
          if (((xi = e), (ji = xi.length), (Oi = Ai = Ei = 0), e.indexOf('[') < 0 || e.lastIndexOf(']') < ji - 1))
            return { exp: e, idx: null };
          for (; !fn(); ) mn((Hi = _n())) ? pn(Hi) : 91 === Hi && hn(Hi);
          return { exp: e.substring(0, Ai), idx: e.substring(Ai + 1, Ei) };
        }
        function _n() {
          return xi.charCodeAt(++Oi);
        }
        function fn() {
          return Oi >= ji;
        }
        function mn(e) {
          return 34 === e || 39 === e;
        }
        function hn(e) {
          var t = 1;
          for (Ai = Oi; !fn(); )
            if (((e = _n()), mn(e))) pn(e);
            else if ((91 === e && t++, 93 === e && t--, 0 === t)) {
              Ei = Oi;
              break;
            }
        }
        function pn(e) {
          for (var t = e; !fn() && (e = _n()) !== t; );
        }
        function yn(e, t, n) {
          var r = n && n.number,
            a = sn(e, 'value') || 'null',
            i = sn(e, 'true-value') || 'true',
            o = sn(e, 'false-value') || 'false';
          nn(
            e,
            'checked',
            'Array.isArray(' +
              t +
              ')?_i(' +
              t +
              ',' +
              a +
              ')>-1' +
              ('true' === i ? ':(' + t + ')' : ':_q(' + t + ',' + i + ')')
          ),
            on(
              e,
              co,
              'var $$a=' +
                t +
                ',$$el=$event.target,$$c=$$el.checked?(' +
                i +
                '):(' +
                o +
                ');if(Array.isArray($$a)){var $$v=' +
                (r ? '_n(' + a + ')' : a) +
                ',$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(' +
                t +
                '=$$a.concat($$v))}else{$$i>-1&&(' +
                t +
                '=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{' +
                cn(t, '$$c') +
                '}',
              null,
              !0
            );
        }
        function vn(e, t, n) {
          var r = n && n.number,
            a = sn(e, 'value') || 'null';
          nn(e, 'checked', '_q(' + t + ',' + (a = r ? '_n(' + a + ')' : a) + ')'), on(e, co, cn(t, a), null, !0);
        }
        function Mn(e, t, n) {
          var r =
            'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' +
            (n && n.number ? '_n(val)' : 'val') +
            '});';
          on(e, 'change', (r = r + ' ' + cn(t, '$event.target.multiple ? $$selectedVal : $$selectedVal[0]')), null, !0);
        }
        function gn(e, t, n) {
          var r = e.attrsMap.type,
            a = n || {},
            i = a.lazy,
            o = a.number,
            s = a.trim,
            u = !i && 'range' !== r,
            d = i ? 'change' : 'range' === r ? uo : 'input',
            c = '$event.target.value';
          s && (c = '$event.target.value.trim()'), o && (c = '_n(' + c + ')');
          var l = cn(t, c);
          u && (l = 'if($event.target.composing)return;' + l),
            nn(e, 'value', '(' + t + ')'),
            on(e, d, l, null, !0),
            (s || o) && on(e, 'blur', '$forceUpdate()');
        }
        function Ln(e) {
          var t;
          n(e[uo]) && ((e[(t = Ea ? 'change' : 'input')] = [].concat(e[uo], e[t] || [])), delete e[uo]),
            n(e[co]) && ((e[(t = Wa ? 'click' : 'change')] = [].concat(e[co], e[t] || [])), delete e[co]);
        }
        function Yn(e, t, n, r, a) {
          if (n) {
            var i = t,
              o = $i;
            t = function (n) {
              null !== (1 === arguments.length ? i(n) : i.apply(null, arguments)) && kn(e, t, r, o);
            };
          }
          $i.addEventListener(e, t, Ra ? { capture: r, passive: a } : r);
        }
        function kn(e, t, n, r) {
          (r || $i).removeEventListener(e, t, n);
        }
        function bn(t, n) {
          if (!e(t.data.on) || !e(n.data.on)) {
            var r = n.data.on || {},
              a = t.data.on || {};
            ($i = n.elm), Ln(r), te(r, a, Yn, kn, n.context);
          }
        }
        function wn(t, r) {
          if (!e(t.data.domProps) || !e(r.data.domProps)) {
            var a,
              i,
              o = r.elm,
              s = t.data.domProps || {},
              u = r.data.domProps || {};
            n(u.__ob__) && (u = r.data.domProps = v({}, u));
            for (a in s) e(u[a]) && (o[a] = '');
            for (a in u)
              if (
                ((i = u[a]),
                ('textContent' !== a && 'innerHTML' !== a) || (r.children && (r.children.length = 0), i !== s[a]))
              )
                if ('value' === a) {
                  o._value = i;
                  var d = e(i) ? '' : String(i);
                  Dn(o, r, d) && (o.value = d);
                } else o[a] = i;
          }
        }
        function Dn(e, t, n) {
          return !e.composing && ('option' === t.tag || Tn(e, n) || Sn(e, n));
        }
        function Tn(e, t) {
          var n = !0;
          try {
            n = document.activeElement !== e;
          } catch (e) {}
          return n && e.value !== t;
        }
        function Sn(e, t) {
          var r = e.value,
            a = e._vModifiers;
          return n(a) && a.number ? l(r) !== l(t) : n(a) && a.trim ? r.trim() !== t.trim() : r !== t;
        }
        function jn(e) {
          var t = xn(e.style);
          return e.staticStyle ? v(e.staticStyle, t) : t;
        }
        function xn(e) {
          return Array.isArray(e) ? M(e) : 'string' == typeof e ? fo(e) : e;
        }
        function Hn(e, t) {
          var n,
            r = {};
          if (t)
            for (var a = e; a.componentInstance; ) (a = a.componentInstance._vnode).data && (n = jn(a.data)) && v(r, n);
          (n = jn(e.data)) && v(r, n);
          for (var i = e; (i = i.parent); ) i.data && (n = jn(i.data)) && v(r, n);
          return r;
        }
        function On(t, r) {
          var a = r.data,
            i = t.data;
          if (!(e(a.staticStyle) && e(a.style) && e(i.staticStyle) && e(i.style))) {
            var o,
              s,
              u = r.elm,
              d = i.staticStyle,
              c = i.normalizedStyle || i.style || {},
              l = d || c,
              _ = xn(r.data.style) || {};
            r.data.normalizedStyle = n(_.__ob__) ? v({}, _) : _;
            var f = Hn(r, !0);
            for (s in l) e(f[s]) && po(u, s, '');
            for (s in f) (o = f[s]) !== l[s] && po(u, s, null == o ? '' : o);
          }
        }
        function An(e, t) {
          if (t && (t = t.trim()))
            if (e.classList)
              t.indexOf(' ') > -1
                ? t.split(/\s+/).forEach(function (t) {
                    return e.classList.add(t);
                  })
                : e.classList.add(t);
            else {
              var n = ' ' + (e.getAttribute('class') || '') + ' ';
              n.indexOf(' ' + t + ' ') < 0 && e.setAttribute('class', (n + t).trim());
            }
        }
        function En(e, t) {
          if (t && (t = t.trim()))
            if (e.classList)
              t.indexOf(' ') > -1
                ? t.split(/\s+/).forEach(function (t) {
                    return e.classList.remove(t);
                  })
                : e.classList.remove(t),
                e.classList.length || e.removeAttribute('class');
            else {
              for (var n = ' ' + (e.getAttribute('class') || '') + ' ', r = ' ' + t + ' '; n.indexOf(r) >= 0; )
                n = n.replace(r, ' ');
              (n = n.trim()) ? e.setAttribute('class', n) : e.removeAttribute('class');
            }
        }
        function Pn(e) {
          if (e) {
            if ('object' == typeof e) {
              var t = {};
              return !1 !== e.css && v(t, go(e.name || 'v')), v(t, e), t;
            }
            return 'string' == typeof e ? go(e) : void 0;
          }
        }
        function $n(e) {
          So(function () {
            So(e);
          });
        }
        function Cn(e, t) {
          var n = e._transitionClasses || (e._transitionClasses = []);
          n.indexOf(t) < 0 && (n.push(t), An(e, t));
        }
        function Fn(e, t) {
          e._transitionClasses && f(e._transitionClasses, t), En(e, t);
        }
        function Wn(e, t, n) {
          var r = In(e, t),
            a = r.type,
            i = r.timeout,
            o = r.propCount;
          if (!a) return n();
          var s = a === Yo ? wo : To,
            u = 0,
            d = function () {
              e.removeEventListener(s, c), n();
            },
            c = function (t) {
              t.target === e && ++u >= o && d();
            };
          setTimeout(function () {
            u < o && d();
          }, i + 1),
            e.addEventListener(s, c);
        }
        function In(e, t) {
          var n,
            r = window.getComputedStyle(e),
            a = r[bo + 'Delay'].split(', '),
            i = r[bo + 'Duration'].split(', '),
            o = Rn(a, i),
            s = r[Do + 'Delay'].split(', '),
            u = r[Do + 'Duration'].split(', '),
            d = Rn(s, u),
            c = 0,
            l = 0;
          return (
            t === Yo
              ? o > 0 && ((n = Yo), (c = o), (l = i.length))
              : t === ko
                ? d > 0 && ((n = ko), (c = d), (l = u.length))
                : (l = (n = (c = Math.max(o, d)) > 0 ? (o > d ? Yo : ko) : null)
                    ? n === Yo
                      ? i.length
                      : u.length
                    : 0),
            { type: n, timeout: c, propCount: l, hasTransform: n === Yo && jo.test(r[bo + 'Property']) }
          );
        }
        function Rn(e, t) {
          for (; e.length < t.length; ) e = e.concat(e);
          return Math.max.apply(
            null,
            t.map(function (t, n) {
              return Nn(t) + Nn(e[n]);
            })
          );
        }
        function Nn(e) {
          return 1e3 * Number(e.slice(0, -1));
        }
        function zn(t, r) {
          var a = t.elm;
          n(a._leaveCb) && ((a._leaveCb.cancelled = !0), a._leaveCb());
          var i = Pn(t.data.transition);
          if (!e(i) && !n(a._enterCb) && 1 === a.nodeType) {
            for (
              var s = i.css,
                u = i.type,
                d = i.enterClass,
                c = i.enterToClass,
                _ = i.enterActiveClass,
                f = i.appearClass,
                m = i.appearToClass,
                h = i.appearActiveClass,
                p = i.beforeEnter,
                y = i.enter,
                v = i.afterEnter,
                M = i.enterCancelled,
                g = i.beforeAppear,
                L = i.appear,
                Y = i.afterAppear,
                b = i.appearCancelled,
                w = i.duration,
                D = ci,
                T = ci.$vnode;
              T && T.parent;

            )
              D = (T = T.parent).context;
            var S = !D._isMounted || !t.isRootInsert;
            if (!S || L || '' === L) {
              var j = S && f ? f : d,
                x = S && h ? h : _,
                H = S && m ? m : c,
                O = S ? g || p : p,
                A = S && 'function' == typeof L ? L : y,
                E = S ? Y || v : v,
                P = S ? b || M : M,
                $ = l(o(w) ? w.enter : w),
                C = !1 !== s && !Pa,
                F = Vn(A),
                W = (a._enterCb = k(function () {
                  C && (Fn(a, H), Fn(a, x)), W.cancelled ? (C && Fn(a, j), P && P(a)) : E && E(a), (a._enterCb = null);
                }));
              t.data.show ||
                ne(t.data.hook || (t.data.hook = {}), 'insert', function () {
                  var e = a.parentNode,
                    n = e && e._pending && e._pending[t.key];
                  n && n.tag === t.tag && n.elm._leaveCb && n.elm._leaveCb(), A && A(a, W);
                }),
                O && O(a),
                C &&
                  (Cn(a, j),
                  Cn(a, x),
                  $n(function () {
                    Cn(a, H), Fn(a, j), W.cancelled || F || (Un($) ? setTimeout(W, $) : Wn(a, u, W));
                  })),
                t.data.show && (r && r(), A && A(a, W)),
                C || F || W();
            }
          }
        }
        function Jn(t, r) {
          function a() {
            b.cancelled ||
              (t.data.show || ((i.parentNode._pending || (i.parentNode._pending = {}))[t.key] = t),
              m && m(i),
              g &&
                (Cn(i, c),
                Cn(i, f),
                $n(function () {
                  Cn(i, _), Fn(i, c), b.cancelled || L || (Un(Y) ? setTimeout(b, Y) : Wn(i, d, b));
                })),
              h && h(i, b),
              g || L || b());
          }
          var i = t.elm;
          n(i._enterCb) && ((i._enterCb.cancelled = !0), i._enterCb());
          var s = Pn(t.data.transition);
          if (e(s)) return r();
          if (!n(i._leaveCb) && 1 === i.nodeType) {
            var u = s.css,
              d = s.type,
              c = s.leaveClass,
              _ = s.leaveToClass,
              f = s.leaveActiveClass,
              m = s.beforeLeave,
              h = s.leave,
              p = s.afterLeave,
              y = s.leaveCancelled,
              v = s.delayLeave,
              M = s.duration,
              g = !1 !== u && !Pa,
              L = Vn(h),
              Y = l(o(M) ? M.leave : M),
              b = (i._leaveCb = k(function () {
                i.parentNode && i.parentNode._pending && (i.parentNode._pending[t.key] = null),
                  g && (Fn(i, _), Fn(i, f)),
                  b.cancelled ? (g && Fn(i, c), y && y(i)) : (r(), p && p(i)),
                  (i._leaveCb = null);
              }));
            v ? v(a) : a();
          }
        }
        function Un(e) {
          return 'number' == typeof e && !isNaN(e);
        }
        function Vn(t) {
          if (e(t)) return !1;
          var r = t.fns;
          return n(r) ? Vn(Array.isArray(r) ? r[0] : r) : (t._length || t.length) > 1;
        }
        function Gn(e, t) {
          !0 !== t.data.show && zn(t);
        }
        function qn(e, t, n) {
          var r = t.value,
            a = e.multiple;
          if (!a || Array.isArray(r)) {
            for (var i, o, s = 0, u = e.options.length; s < u; s++)
              if (((o = e.options[s]), a)) (i = Y(r, Bn(o)) > -1), o.selected !== i && (o.selected = i);
              else if (L(Bn(o), r)) return void (e.selectedIndex !== s && (e.selectedIndex = s));
            a || (e.selectedIndex = -1);
          }
        }
        function Bn(e) {
          return '_value' in e ? e._value : e.value;
        }
        function Kn(e) {
          e.target.composing = !0;
        }
        function Zn(e) {
          e.target.composing && ((e.target.composing = !1), Qn(e.target, 'input'));
        }
        function Qn(e, t) {
          var n = document.createEvent('HTMLEvents');
          n.initEvent(t, !0, !0), e.dispatchEvent(n);
        }
        function Xn(e) {
          return !e.componentInstance || (e.data && e.data.transition) ? e : Xn(e.componentInstance._vnode);
        }
        function er(e) {
          var t = e && e.componentOptions;
          return t && t.Ctor.options.abstract ? er(_e(t.children)) : e;
        }
        function tr(e) {
          var t = {},
            n = e.$options;
          for (var r in n.propsData) t[r] = e[r];
          var a = n._parentListeners;
          for (var i in a) t[va(i)] = a[i];
          return t;
        }
        function nr(e, t) {
          if (/\d-keep-alive$/.test(t.tag)) return e('keep-alive', { props: t.componentOptions.propsData });
        }
        function rr(e) {
          for (; (e = e.parent); ) if (e.data.transition) return !0;
        }
        function ar(e, t) {
          return t.key === e.key && t.tag === e.tag;
        }
        function ir(e) {
          return e.isComment && e.asyncFactory;
        }
        function or(e) {
          e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
        }
        function sr(e) {
          e.data.newPos = e.elm.getBoundingClientRect();
        }
        function ur(e) {
          var t = e.data.pos,
            n = e.data.newPos,
            r = t.left - n.left,
            a = t.top - n.top;
          if (r || a) {
            e.data.moved = !0;
            var i = e.elm.style;
            (i.transform = i.WebkitTransform = 'translate(' + r + 'px,' + a + 'px)'), (i.transitionDuration = '0s');
          }
        }
        function dr(e, t) {
          var n = t ? Ro(t) : Wo;
          if (n.test(e)) {
            for (var r, a, i = [], o = (n.lastIndex = 0); (r = n.exec(e)); ) {
              (a = r.index) > o && i.push(JSON.stringify(e.slice(o, a)));
              var s = Qt(r[1].trim());
              i.push('_s(' + s + ')'), (o = a + r[0].length);
            }
            return o < e.length && i.push(JSON.stringify(e.slice(o))), i.join('+');
          }
        }
        function cr(e, t) {
          var n = t ? Ys : Ls;
          return e.replace(n, function (e) {
            return gs[e];
          });
        }
        function lr(e, t) {
          function n(t) {
            (c += t), (e = e.substring(t));
          }
          function r(e, n, r) {
            var a, s;
            if ((null == n && (n = c), null == r && (r = c), e && (s = e.toLowerCase()), e))
              for (a = o.length - 1; a >= 0 && o[a].lowerCasedTag !== s; a--);
            else a = 0;
            if (a >= 0) {
              for (var u = o.length - 1; u >= a; u--) t.end && t.end(o[u].tag, n, r);
              (o.length = a), (i = a && o[a - 1].tag);
            } else
              'br' === s
                ? t.start && t.start(e, [], !0, n, r)
                : 'p' === s && (t.start && t.start(e, [], !1, n, r), t.end && t.end(e, n, r));
          }
          for (var a, i, o = [], s = t.expectHTML, u = t.isUnaryTag || Ya, d = t.canBeLeftOpenTag || Ya, c = 0; e; ) {
            if (((a = e), i && vs(i))) {
              var l = 0,
                _ = i.toLowerCase(),
                f = Ms[_] || (Ms[_] = new RegExp('([\\s\\S]*?)(</' + _ + '[^>]*>)', 'i')),
                m = e.replace(f, function (e, n, r) {
                  return (
                    (l = r.length),
                    vs(_) ||
                      'noscript' === _ ||
                      (n = n.replace(/<!--([\s\S]*?)-->/g, '$1').replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1')),
                    bs(_, n) && (n = n.slice(1)),
                    t.chars && t.chars(n),
                    ''
                  );
                });
              (c += e.length - m.length), (e = m), r(_, c - l, c);
            } else {
              var h = e.indexOf('<');
              if (0 === h) {
                if (is.test(e)) {
                  var p = e.indexOf('--\x3e');
                  if (p >= 0) {
                    t.shouldKeepComment && t.comment(e.substring(4, p)), n(p + 3);
                    continue;
                  }
                }
                if (os.test(e)) {
                  var y = e.indexOf(']>');
                  if (y >= 0) {
                    n(y + 2);
                    continue;
                  }
                }
                var v = e.match(as);
                if (v) {
                  n(v[0].length);
                  continue;
                }
                var M = e.match(rs);
                if (M) {
                  var g = c;
                  n(M[0].length), r(M[1], g, c);
                  continue;
                }
                var L = (function () {
                  var t = e.match(ts);
                  if (t) {
                    var r = { tagName: t[1], attrs: [], start: c };
                    n(t[0].length);
                    for (var a, i; !(a = e.match(ns)) && (i = e.match(Qo)); ) n(i[0].length), r.attrs.push(i);
                    if (a) return (r.unarySlash = a[1]), n(a[0].length), (r.end = c), r;
                  }
                })();
                if (L) {
                  !(function (e) {
                    var n = e.tagName,
                      a = e.unarySlash;
                    s && ('p' === i && Vo(n) && r(i), d(n) && i === n && r(n));
                    for (var c = u(n) || !!a, l = e.attrs.length, _ = new Array(l), f = 0; f < l; f++) {
                      var m = e.attrs[f];
                      ss &&
                        -1 === m[0].indexOf('""') &&
                        ('' === m[3] && delete m[3], '' === m[4] && delete m[4], '' === m[5] && delete m[5]);
                      var h = m[3] || m[4] || m[5] || '';
                      _[f] = { name: m[1], value: cr(h, t.shouldDecodeNewlines) };
                    }
                    c || (o.push({ tag: n, lowerCasedTag: n.toLowerCase(), attrs: _ }), (i = n)),
                      t.start && t.start(n, _, c, e.start, e.end);
                  })(L),
                    bs(i, e) && n(1);
                  continue;
                }
              }
              var Y = void 0,
                k = void 0,
                b = void 0;
              if (h >= 0) {
                for (
                  k = e.slice(h);
                  !(rs.test(k) || ts.test(k) || is.test(k) || os.test(k) || (b = k.indexOf('<', 1)) < 0);

                )
                  (h += b), (k = e.slice(h));
                (Y = e.substring(0, h)), n(h);
              }
              h < 0 && ((Y = e), (e = '')), t.chars && Y && t.chars(Y);
            }
            if (e === a) {
              t.chars && t.chars(e);
              break;
            }
          }
          r();
        }
        function _r(e, t) {
          function n(e) {
            e.pre && (s = !1), fs(e.tag) && (u = !1);
          }
          (us = t.warn || en),
            (fs = t.isPreTag || Ya),
            (ms = t.mustUseProp || Ya),
            (hs = t.getTagNamespace || Ya),
            (cs = tn(t.modules, 'transformNode')),
            (ls = tn(t.modules, 'preTransformNode')),
            (_s = tn(t.modules, 'postTransformNode')),
            (ds = t.delimiters);
          var r,
            a,
            i = [],
            o = !1 !== t.preserveWhitespace,
            s = !1,
            u = !1;
          return (
            lr(e, {
              warn: us,
              expectHTML: t.expectHTML,
              isUnaryTag: t.isUnaryTag,
              canBeLeftOpenTag: t.canBeLeftOpenTag,
              shouldDecodeNewlines: t.shouldDecodeNewlines,
              shouldKeepComment: t.comments,
              start: function (e, o, d) {
                var c = (a && a.ns) || hs(e);
                Ea && 'svg' === c && (o = Hr(o));
                var l = { type: 1, tag: e, attrsList: o, attrsMap: Sr(o), parent: a, children: [] };
                c && (l.ns = c), xr(l) && !Ua() && (l.forbidden = !0);
                for (var _ = 0; _ < ls.length; _++) ls[_](l, t);
                if ((s || (fr(l), l.pre && (s = !0)), fs(l.tag) && (u = !0), s)) mr(l);
                else {
                  yr(l), vr(l), Yr(l), hr(l), (l.plain = !l.key && !o.length), pr(l), kr(l), br(l);
                  for (var f = 0; f < cs.length; f++) cs[f](l, t);
                  wr(l);
                }
                if (
                  (r ? i.length || (r.if && (l.elseif || l.else) && Lr(r, { exp: l.elseif, block: l })) : (r = l),
                  a && !l.forbidden)
                )
                  if (l.elseif || l.else) Mr(l, a);
                  else if (l.slotScope) {
                    a.plain = !1;
                    var m = l.slotTarget || '"default"';
                    (a.scopedSlots || (a.scopedSlots = {}))[m] = l;
                  } else a.children.push(l), (l.parent = a);
                d ? n(l) : ((a = l), i.push(l));
                for (var h = 0; h < _s.length; h++) _s[h](l, t);
              },
              end: function () {
                var e = i[i.length - 1],
                  t = e.children[e.children.length - 1];
                t && 3 === t.type && ' ' === t.text && !u && e.children.pop(),
                  (i.length -= 1),
                  (a = i[i.length - 1]),
                  n(e);
              },
              chars: function (e) {
                if (a && (!Ea || 'textarea' !== a.tag || a.attrsMap.placeholder !== e)) {
                  var t = a.children;
                  if ((e = u || e.trim() ? (jr(a) ? e : Os(e)) : o && t.length ? ' ' : '')) {
                    var n;
                    !s && ' ' !== e && (n = dr(e, ds))
                      ? t.push({ type: 2, expression: n, text: e })
                      : (' ' === e && t.length && ' ' === t[t.length - 1].text) || t.push({ type: 3, text: e });
                  }
                }
              },
              comment: function (e) {
                a.children.push({ type: 3, text: e, isComment: !0 });
              },
            }),
            r
          );
        }
        function fr(e) {
          null != un(e, 'v-pre') && (e.pre = !0);
        }
        function mr(e) {
          var t = e.attrsList.length;
          if (t)
            for (var n = (e.attrs = new Array(t)), r = 0; r < t; r++)
              n[r] = { name: e.attrsList[r].name, value: JSON.stringify(e.attrsList[r].value) };
          else e.pre || (e.plain = !0);
        }
        function hr(e) {
          var t = sn(e, 'key');
          t && (e.key = t);
        }
        function pr(e) {
          var t = sn(e, 'ref');
          t && ((e.ref = t), (e.refInFor = Dr(e)));
        }
        function yr(e) {
          var t;
          if ((t = un(e, 'v-for'))) {
            var n = t.match(Ts);
            if (!n) return;
            e.for = n[2].trim();
            var r = n[1].trim(),
              a = r.match(Ss);
            a
              ? ((e.alias = a[1].trim()), (e.iterator1 = a[2].trim()), a[3] && (e.iterator2 = a[3].trim()))
              : (e.alias = r);
          }
        }
        function vr(e) {
          var t = un(e, 'v-if');
          if (t) (e.if = t), Lr(e, { exp: t, block: e });
          else {
            null != un(e, 'v-else') && (e.else = !0);
            var n = un(e, 'v-else-if');
            n && (e.elseif = n);
          }
        }
        function Mr(e, t) {
          var n = gr(t.children);
          n && n.if && Lr(n, { exp: e.elseif, block: e });
        }
        function gr(e) {
          for (var t = e.length; t--; ) {
            if (1 === e[t].type) return e[t];
            e.pop();
          }
        }
        function Lr(e, t) {
          e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t);
        }
        function Yr(e) {
          null != un(e, 'v-once') && (e.once = !0);
        }
        function kr(e) {
          if ('slot' === e.tag) e.slotName = sn(e, 'name');
          else {
            var t = sn(e, 'slot');
            t && (e.slotTarget = '""' === t ? '"default"' : t), 'template' === e.tag && (e.slotScope = un(e, 'scope'));
          }
        }
        function br(e) {
          var t;
          (t = sn(e, 'is')) && (e.component = t), null != un(e, 'inline-template') && (e.inlineTemplate = !0);
        }
        function wr(e) {
          var t,
            n,
            r,
            a,
            i,
            o,
            s,
            u = e.attrsList;
          for (t = 0, n = u.length; t < n; t++)
            if (((r = a = u[t].name), (i = u[t].value), Ds.test(r)))
              if (((e.hasBindings = !0), (o = Tr(r)) && (r = r.replace(Hs, '')), xs.test(r)))
                (r = r.replace(xs, '')),
                  (i = Qt(i)),
                  (s = !1),
                  o &&
                    (o.prop && ((s = !0), 'innerHtml' === (r = va(r)) && (r = 'innerHTML')),
                    o.camel && (r = va(r)),
                    o.sync && on(e, 'update:' + va(r), cn(i, '$event'))),
                  s || (!e.component && ms(e.tag, e.attrsMap.type, r)) ? nn(e, r, i) : rn(e, r, i);
              else if (ws.test(r)) on(e, (r = r.replace(ws, '')), i, o, !1, us);
              else {
                var d = (r = r.replace(Ds, '')).match(js),
                  c = d && d[1];
                c && (r = r.slice(0, -(c.length + 1))), an(e, r, a, i, c, o);
              }
            else rn(e, r, JSON.stringify(i));
        }
        function Dr(e) {
          for (var t = e; t; ) {
            if (void 0 !== t.for) return !0;
            t = t.parent;
          }
          return !1;
        }
        function Tr(e) {
          var t = e.match(Hs);
          if (t) {
            var n = {};
            return (
              t.forEach(function (e) {
                n[e.slice(1)] = !0;
              }),
              n
            );
          }
        }
        function Sr(e) {
          for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n].name] = e[n].value;
          return t;
        }
        function jr(e) {
          return 'script' === e.tag || 'style' === e.tag;
        }
        function xr(e) {
          return (
            'style' === e.tag || ('script' === e.tag && (!e.attrsMap.type || 'text/javascript' === e.attrsMap.type))
          );
        }
        function Hr(e) {
          for (var t = [], n = 0; n < e.length; n++) {
            var r = e[n];
            As.test(r.name) || ((r.name = r.name.replace(Es, '')), t.push(r));
          }
          return t;
        }
        function Or(e, t) {
          e && ((ps = Ps(t.staticKeys || '')), (ys = t.isReservedTag || Ya), Ar(e), Er(e, !1));
        }
        function Ar(e) {
          if (((e.static = Pr(e)), 1 === e.type)) {
            if (!ys(e.tag) && 'slot' !== e.tag && null == e.attrsMap['inline-template']) return;
            for (var t = 0, n = e.children.length; t < n; t++) {
              var r = e.children[t];
              Ar(r), r.static || (e.static = !1);
            }
            if (e.ifConditions)
              for (var a = 1, i = e.ifConditions.length; a < i; a++) {
                var o = e.ifConditions[a].block;
                Ar(o), o.static || (e.static = !1);
              }
          }
        }
        function Er(e, t) {
          if (1 === e.type) {
            if (
              ((e.static || e.once) && (e.staticInFor = t),
              e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type))
            )
              return void (e.staticRoot = !0);
            if (((e.staticRoot = !1), e.children))
              for (var n = 0, r = e.children.length; n < r; n++) Er(e.children[n], t || !!e.for);
            if (e.ifConditions) for (var a = 1, i = e.ifConditions.length; a < i; a++) Er(e.ifConditions[a].block, t);
          }
        }
        function Pr(e) {
          return (
            2 !== e.type &&
            (3 === e.type ||
              !(
                !e.pre &&
                (e.hasBindings || e.if || e.for || ma(e.tag) || !ys(e.tag) || $r(e) || !Object.keys(e).every(ps))
              ))
          );
        }
        function $r(e) {
          for (; e.parent; ) {
            if ('template' !== (e = e.parent).tag) return !1;
            if (e.for) return !0;
          }
          return !1;
        }
        function Cr(e, t, n) {
          var r = t ? 'nativeOn:{' : 'on:{';
          for (var a in e) {
            r += '"' + a + '":' + Fr(a, e[a]) + ',';
          }
          return r.slice(0, -1) + '}';
        }
        function Fr(e, t) {
          if (!t) return 'function(){}';
          if (Array.isArray(t))
            return (
              '[' +
              t
                .map(function (t) {
                  return Fr(e, t);
                })
                .join(',') +
              ']'
            );
          var n = Cs.test(t.value),
            r = $s.test(t.value);
          if (t.modifiers) {
            var a = '',
              i = '',
              o = [];
            for (var s in t.modifiers) Is[s] ? ((i += Is[s]), Fs[s] && o.push(s)) : o.push(s);
            return (
              o.length && (a += Wr(o)),
              i && (a += i),
              'function($event){' + a + (n ? t.value + '($event)' : r ? '(' + t.value + ')($event)' : t.value) + '}'
            );
          }
          return n || r ? t.value : 'function($event){' + t.value + '}';
        }
        function Wr(e) {
          return "if(!('button' in $event)&&" + e.map(Ir).join('&&') + ')return null;';
        }
        function Ir(e) {
          var t = parseInt(e, 10);
          if (t) return '$event.keyCode!==' + t;
          var n = Fs[e];
          return '_k($event.keyCode,' + JSON.stringify(e) + (n ? ',' + JSON.stringify(n) : '') + ')';
        }
        function Rr(e, t) {
          var n = new Ns(t);
          return {
            render: 'with(this){return ' + (e ? Nr(e, n) : '_c("div")') + '}',
            staticRenderFns: n.staticRenderFns,
          };
        }
        function Nr(e, t) {
          if (e.staticRoot && !e.staticProcessed) return zr(e, t);
          if (e.once && !e.onceProcessed) return Jr(e, t);
          if (e.for && !e.forProcessed) return Gr(e, t);
          if (e.if && !e.ifProcessed) return Ur(e, t);
          if ('template' !== e.tag || e.slotTarget) {
            if ('slot' === e.tag) return oa(e, t);
            var n;
            if (e.component) n = sa(e.component, e, t);
            else {
              var r = e.plain ? void 0 : qr(e, t),
                a = e.inlineTemplate ? null : ea(e, t, !0);
              n = "_c('" + e.tag + "'" + (r ? ',' + r : '') + (a ? ',' + a : '') + ')';
            }
            for (var i = 0; i < t.transforms.length; i++) n = t.transforms[i](e, n);
            return n;
          }
          return ea(e, t) || 'void 0';
        }
        function zr(e, t) {
          return (
            (e.staticProcessed = !0),
            t.staticRenderFns.push('with(this){return ' + Nr(e, t) + '}'),
            '_m(' + (t.staticRenderFns.length - 1) + (e.staticInFor ? ',true' : '') + ')'
          );
        }
        function Jr(e, t) {
          if (((e.onceProcessed = !0), e.if && !e.ifProcessed)) return Ur(e, t);
          if (e.staticInFor) {
            for (var n = '', r = e.parent; r; ) {
              if (r.for) {
                n = r.key;
                break;
              }
              r = r.parent;
            }
            return n ? '_o(' + Nr(e, t) + ',' + t.onceId++ + (n ? ',' + n : '') + ')' : Nr(e, t);
          }
          return zr(e, t);
        }
        function Ur(e, t, n, r) {
          return (e.ifProcessed = !0), Vr(e.ifConditions.slice(), t, n, r);
        }
        function Vr(e, t, n, r) {
          function a(e) {
            return n ? n(e, t) : e.once ? Jr(e, t) : Nr(e, t);
          }
          if (!e.length) return r || '_e()';
          var i = e.shift();
          return i.exp ? '(' + i.exp + ')?' + a(i.block) + ':' + Vr(e, t, n, r) : '' + a(i.block);
        }
        function Gr(e, t, n, r) {
          var a = e.for,
            i = e.alias,
            o = e.iterator1 ? ',' + e.iterator1 : '',
            s = e.iterator2 ? ',' + e.iterator2 : '';
          return (
            (e.forProcessed = !0),
            (r || '_l') + '((' + a + '),function(' + i + o + s + '){return ' + (n || Nr)(e, t) + '})'
          );
        }
        function qr(e, t) {
          var n = '{',
            r = Br(e, t);
          r && (n += r + ','),
            e.key && (n += 'key:' + e.key + ','),
            e.ref && (n += 'ref:' + e.ref + ','),
            e.refInFor && (n += 'refInFor:true,'),
            e.pre && (n += 'pre:true,'),
            e.component && (n += 'tag:"' + e.tag + '",');
          for (var a = 0; a < t.dataGenFns.length; a++) n += t.dataGenFns[a](e);
          if (
            (e.attrs && (n += 'attrs:{' + ua(e.attrs) + '},'),
            e.props && (n += 'domProps:{' + ua(e.props) + '},'),
            e.events && (n += Cr(e.events, !1, t.warn) + ','),
            e.nativeEvents && (n += Cr(e.nativeEvents, !0, t.warn) + ','),
            e.slotTarget && (n += 'slot:' + e.slotTarget + ','),
            e.scopedSlots && (n += Zr(e.scopedSlots, t) + ','),
            e.model &&
              (n +=
                'model:{value:' +
                e.model.value +
                ',callback:' +
                e.model.callback +
                ',expression:' +
                e.model.expression +
                '},'),
            e.inlineTemplate)
          ) {
            var i = Kr(e, t);
            i && (n += i + ',');
          }
          return (
            (n = n.replace(/,$/, '') + '}'),
            e.wrapData && (n = e.wrapData(n)),
            e.wrapListeners && (n = e.wrapListeners(n)),
            n
          );
        }
        function Br(e, t) {
          var n = e.directives;
          if (n) {
            var r,
              a,
              i,
              o,
              s = 'directives:[',
              u = !1;
            for (r = 0, a = n.length; r < a; r++) {
              (i = n[r]), (o = !0);
              var d = t.directives[i.name];
              d && (o = !!d(e, i, t.warn)),
                o &&
                  ((u = !0),
                  (s +=
                    '{name:"' +
                    i.name +
                    '",rawName:"' +
                    i.rawName +
                    '"' +
                    (i.value ? ',value:(' + i.value + '),expression:' + JSON.stringify(i.value) : '') +
                    (i.arg ? ',arg:"' + i.arg + '"' : '') +
                    (i.modifiers ? ',modifiers:' + JSON.stringify(i.modifiers) : '') +
                    '},'));
            }
            return u ? s.slice(0, -1) + ']' : void 0;
          }
        }
        function Kr(e, t) {
          var n = e.children[0];
          if (1 === n.type) {
            var r = Rr(n, t.options);
            return (
              'inlineTemplate:{render:function(){' +
              r.render +
              '},staticRenderFns:[' +
              r.staticRenderFns
                .map(function (e) {
                  return 'function(){' + e + '}';
                })
                .join(',') +
              ']}'
            );
          }
        }
        function Zr(e, t) {
          return (
            'scopedSlots:_u([' +
            Object.keys(e)
              .map(function (n) {
                return Qr(n, e[n], t);
              })
              .join(',') +
            '])'
          );
        }
        function Qr(e, t, n) {
          return t.for && !t.forProcessed
            ? Xr(e, t, n)
            : '{key:' +
                e +
                ',fn:function(' +
                String(t.attrsMap.scope) +
                '){return ' +
                ('template' === t.tag ? ea(t, n) || 'void 0' : Nr(t, n)) +
                '}}';
        }
        function Xr(e, t, n) {
          var r = t.for,
            a = t.alias,
            i = t.iterator1 ? ',' + t.iterator1 : '',
            o = t.iterator2 ? ',' + t.iterator2 : '';
          return (t.forProcessed = !0), '_l((' + r + '),function(' + a + i + o + '){return ' + Qr(e, t, n) + '})';
        }
        function ea(e, t, n, r, a) {
          var i = e.children;
          if (i.length) {
            var o = i[0];
            if (1 === i.length && o.for && 'template' !== o.tag && 'slot' !== o.tag) return (r || Nr)(o, t);
            var s = n ? ta(i, t.maybeComponent) : 0,
              u = a || ra;
            return (
              '[' +
              i
                .map(function (e) {
                  return u(e, t);
                })
                .join(',') +
              ']' +
              (s ? ',' + s : '')
            );
          }
        }
        function ta(e, t) {
          for (var n = 0, r = 0; r < e.length; r++) {
            var a = e[r];
            if (1 === a.type) {
              if (
                na(a) ||
                (a.ifConditions &&
                  a.ifConditions.some(function (e) {
                    return na(e.block);
                  }))
              ) {
                n = 2;
                break;
              }
              (t(a) ||
                (a.ifConditions &&
                  a.ifConditions.some(function (e) {
                    return t(e.block);
                  }))) &&
                (n = 1);
            }
          }
          return n;
        }
        function na(e) {
          return void 0 !== e.for || 'template' === e.tag || 'slot' === e.tag;
        }
        function ra(e, t) {
          return 1 === e.type ? Nr(e, t) : 3 === e.type && e.isComment ? ia(e) : aa(e);
        }
        function aa(e) {
          return '_v(' + (2 === e.type ? e.expression : da(JSON.stringify(e.text))) + ')';
        }
        function ia(e) {
          return '_e(' + JSON.stringify(e.text) + ')';
        }
        function oa(e, t) {
          var n = e.slotName || '"default"',
            r = ea(e, t),
            a = '_t(' + n + (r ? ',' + r : ''),
            i =
              e.attrs &&
              '{' +
                e.attrs
                  .map(function (e) {
                    return va(e.name) + ':' + e.value;
                  })
                  .join(',') +
                '}',
            o = e.attrsMap['v-bind'];
          return (
            (!i && !o) || r || (a += ',null'), i && (a += ',' + i), o && (a += (i ? '' : ',null') + ',' + o), a + ')'
          );
        }
        function sa(e, t, n) {
          var r = t.inlineTemplate ? null : ea(t, n, !0);
          return '_c(' + e + ',' + qr(t, n) + (r ? ',' + r : '') + ')';
        }
        function ua(e) {
          for (var t = '', n = 0; n < e.length; n++) {
            var r = e[n];
            t += '"' + r.name + '":' + da(r.value) + ',';
          }
          return t.slice(0, -1);
        }
        function da(e) {
          return e.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
        }
        function ca(e, t) {
          try {
            return new Function(e);
          } catch (n) {
            return t.push({ err: n, code: e }), g;
          }
        }
        function la(e) {
          var t = Object.create(null);
          return function (n, r, a) {
            var i = (r = r || {}).delimiters ? String(r.delimiters) + n : n;
            if (t[i]) return t[i];
            var o = e(n, r),
              s = {},
              u = [];
            return (
              (s.render = ca(o.render, u)),
              (s.staticRenderFns = o.staticRenderFns.map(function (e) {
                return ca(e, u);
              })),
              (t[i] = s)
            );
          };
        }
        function _a(e) {
          if (e.outerHTML) return e.outerHTML;
          var t = document.createElement('div');
          return t.appendChild(e.cloneNode(!0)), t.innerHTML;
        }
        var fa = Object.prototype.toString,
          ma = _('slot,component', !0),
          ha = _('key,ref,slot,is'),
          pa = Object.prototype.hasOwnProperty,
          ya = /-(\w)/g,
          va = h(function (e) {
            return e.replace(ya, function (e, t) {
              return t ? t.toUpperCase() : '';
            });
          }),
          Ma = h(function (e) {
            return e.charAt(0).toUpperCase() + e.slice(1);
          }),
          ga = /([^-])([A-Z])/g,
          La = h(function (e) {
            return e.replace(ga, '$1-$2').replace(ga, '$1-$2').toLowerCase();
          }),
          Ya = function (e, t, n) {
            return !1;
          },
          ka = function (e) {
            return e;
          },
          ba = 'data-server-rendered',
          wa = ['component', 'directive', 'filter'],
          Da = [
            'beforeCreate',
            'created',
            'beforeMount',
            'mounted',
            'beforeUpdate',
            'updated',
            'beforeDestroy',
            'destroyed',
            'activated',
            'deactivated',
          ],
          Ta = {
            optionMergeStrategies: Object.create(null),
            silent: !1,
            productionTip: !1,
            devtools: !1,
            performance: !1,
            errorHandler: null,
            warnHandler: null,
            ignoredElements: [],
            keyCodes: Object.create(null),
            isReservedTag: Ya,
            isReservedAttr: Ya,
            isUnknownElement: Ya,
            getTagNamespace: g,
            parsePlatformTagName: ka,
            mustUseProp: Ya,
            _lifecycleHooks: Da,
          },
          Sa = Object.freeze({}),
          ja = /[^\w.$]/,
          xa = g,
          Ha = '__proto__' in {},
          Oa = 'undefined' != typeof window,
          Aa = Oa && window.navigator.userAgent.toLowerCase(),
          Ea = Aa && /msie|trident/.test(Aa),
          Pa = Aa && Aa.indexOf('msie 9.0') > 0,
          $a = Aa && Aa.indexOf('edge/') > 0,
          Ca = Aa && Aa.indexOf('android') > 0,
          Fa = Aa && /iphone|ipad|ipod|ios/.test(Aa),
          Wa = Aa && /chrome\/\d+/.test(Aa) && !$a,
          Ia = {}.watch,
          Ra = !1;
        if (Oa)
          try {
            var Na = {};
            Object.defineProperty(Na, 'passive', {
              get: function () {
                Ra = !0;
              },
            }),
              window.addEventListener('test-passive', null, Na);
          } catch (e) {}
        var za,
          Ja,
          Ua = function () {
            return void 0 === za && (za = !Oa && void 0 !== t && 'server' === t.process.env.VUE_ENV), za;
          },
          Va = Oa && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
          Ga = 'undefined' != typeof Symbol && S(Symbol) && 'undefined' != typeof Reflect && S(Reflect.ownKeys),
          qa = (function () {
            function e() {
              r = !1;
              var e = n.slice(0);
              n.length = 0;
              for (var t = 0; t < e.length; t++) e[t]();
            }
            var t,
              n = [],
              r = !1;
            if ('undefined' != typeof Promise && S(Promise)) {
              var a = Promise.resolve(),
                i = function (e) {
                  console.error(e);
                };
              t = function () {
                a.then(e).catch(i), Fa && setTimeout(g);
              };
            } else if (
              'undefined' == typeof MutationObserver ||
              (!S(MutationObserver) && '[object MutationObserverConstructor]' !== MutationObserver.toString())
            )
              t = function () {
                setTimeout(e, 0);
              };
            else {
              var o = 1,
                s = new MutationObserver(e),
                u = document.createTextNode(String(o));
              s.observe(u, { characterData: !0 }),
                (t = function () {
                  (o = (o + 1) % 2), (u.data = String(o));
                });
            }
            return function (e, a) {
              var i;
              if (
                (n.push(function () {
                  if (e)
                    try {
                      e.call(a);
                    } catch (e) {
                      T(e, a, 'nextTick');
                    }
                  else i && i(a);
                }),
                r || ((r = !0), t()),
                !e && 'undefined' != typeof Promise)
              )
                return new Promise(function (e, t) {
                  i = e;
                });
            };
          })();
        Ja =
          'undefined' != typeof Set && S(Set)
            ? Set
            : (function () {
                function e() {
                  this.set = Object.create(null);
                }
                return (
                  (e.prototype.has = function (e) {
                    return !0 === this.set[e];
                  }),
                  (e.prototype.add = function (e) {
                    this.set[e] = !0;
                  }),
                  (e.prototype.clear = function () {
                    this.set = Object.create(null);
                  }),
                  e
                );
              })();
        var Ba = 0,
          Ka = function () {
            (this.id = Ba++), (this.subs = []);
          };
        (Ka.prototype.addSub = function (e) {
          this.subs.push(e);
        }),
          (Ka.prototype.removeSub = function (e) {
            f(this.subs, e);
          }),
          (Ka.prototype.depend = function () {
            Ka.target && Ka.target.addDep(this);
          }),
          (Ka.prototype.notify = function () {
            for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update();
          }),
          (Ka.target = null);
        var Za = [],
          Qa = Array.prototype,
          Xa = Object.create(Qa);
        ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (e) {
          var t = Qa[e];
          w(Xa, e, function () {
            for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
            var a,
              i = t.apply(this, n),
              o = this.__ob__;
            switch (e) {
              case 'push':
              case 'unshift':
                a = n;
                break;
              case 'splice':
                a = n.slice(2);
            }
            return a && o.observeArray(a), o.dep.notify(), i;
          });
        });
        var ei = Object.getOwnPropertyNames(Xa),
          ti = { shouldConvert: !0 },
          ni = function (e) {
            (this.value = e),
              (this.dep = new Ka()),
              (this.vmCount = 0),
              w(e, '__ob__', this),
              Array.isArray(e) ? ((Ha ? H : O)(e, Xa, ei), this.observeArray(e)) : this.walk(e);
          };
        (ni.prototype.walk = function (e) {
          for (var t = Object.keys(e), n = 0; n < t.length; n++) E(e, t[n], e[t[n]]);
        }),
          (ni.prototype.observeArray = function (e) {
            for (var t = 0, n = e.length; t < n; t++) A(e[t]);
          });
        var ri = Ta.optionMergeStrategies;
        (ri.data = function (e, t, n) {
          return n ? W(e, t, n) : t && 'function' != typeof t ? e : W.call(this, e, t);
        }),
          Da.forEach(function (e) {
            ri[e] = I;
          }),
          wa.forEach(function (e) {
            ri[e + 's'] = R;
          }),
          (ri.watch = function (e, t) {
            if ((e === Ia && (e = void 0), t === Ia && (t = void 0), !t)) return Object.create(e || null);
            if (!e) return t;
            var n = {};
            v(n, e);
            for (var r in t) {
              var a = n[r],
                i = t[r];
              a && !Array.isArray(a) && (a = [a]), (n[r] = a ? a.concat(i) : Array.isArray(i) ? i : [i]);
            }
            return n;
          }),
          (ri.props =
            ri.methods =
            ri.inject =
            ri.computed =
              function (e, t) {
                if (!e) return t;
                var n = Object.create(null);
                return v(n, e), t && v(n, t), n;
              }),
          (ri.provide = W);
        var ai = function (e, t) {
            return void 0 === t ? e : t;
          },
          ii = function (e, t, n, r, a, i, o, s) {
            (this.tag = e),
              (this.data = t),
              (this.children = n),
              (this.text = r),
              (this.elm = a),
              (this.ns = void 0),
              (this.context = i),
              (this.functionalContext = void 0),
              (this.key = t && t.key),
              (this.componentOptions = o),
              (this.componentInstance = void 0),
              (this.parent = void 0),
              (this.raw = !1),
              (this.isStatic = !1),
              (this.isRootInsert = !0),
              (this.isComment = !1),
              (this.isCloned = !1),
              (this.isOnce = !1),
              (this.asyncFactory = s),
              (this.asyncMeta = void 0),
              (this.isAsyncPlaceholder = !1);
          },
          oi = { child: {} };
        (oi.child.get = function () {
          return this.componentInstance;
        }),
          Object.defineProperties(ii.prototype, oi);
        var si,
          ui = function (e) {
            void 0 === e && (e = '');
            var t = new ii();
            return (t.text = e), (t.isComment = !0), t;
          },
          di = h(function (e) {
            var t = '&' === e.charAt(0),
              n = '~' === (e = t ? e.slice(1) : e).charAt(0),
              r = '!' === (e = n ? e.slice(1) : e).charAt(0);
            return (e = r ? e.slice(1) : e), { name: e, once: n, capture: r, passive: t };
          }),
          ci = null,
          li = [],
          _i = [],
          fi = {},
          mi = !1,
          hi = !1,
          pi = 0,
          yi = 0,
          vi = function (e, t, n, r) {
            (this.vm = e),
              e._watchers.push(this),
              r
                ? ((this.deep = !!r.deep), (this.user = !!r.user), (this.lazy = !!r.lazy), (this.sync = !!r.sync))
                : (this.deep = this.user = this.lazy = this.sync = !1),
              (this.cb = n),
              (this.id = ++yi),
              (this.active = !0),
              (this.dirty = this.lazy),
              (this.deps = []),
              (this.newDeps = []),
              (this.depIds = new Ja()),
              (this.newDepIds = new Ja()),
              (this.expression = ''),
              'function' == typeof t
                ? (this.getter = t)
                : ((this.getter = D(t)), this.getter || (this.getter = function () {})),
              (this.value = this.lazy ? void 0 : this.get());
          };
        (vi.prototype.get = function () {
          j(this);
          var e,
            t = this.vm;
          try {
            e = this.getter.call(t, t);
          } catch (e) {
            if (!this.user) throw e;
            T(e, t, 'getter for watcher "' + this.expression + '"');
          } finally {
            this.deep && Ae(e), x(), this.cleanupDeps();
          }
          return e;
        }),
          (vi.prototype.addDep = function (e) {
            var t = e.id;
            this.newDepIds.has(t) ||
              (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
          }),
          (vi.prototype.cleanupDeps = function () {
            for (var e = this, t = this.deps.length; t--; ) {
              var n = e.deps[t];
              e.newDepIds.has(n.id) || n.removeSub(e);
            }
            var r = this.depIds;
            (this.depIds = this.newDepIds),
              (this.newDepIds = r),
              this.newDepIds.clear(),
              (r = this.deps),
              (this.deps = this.newDeps),
              (this.newDeps = r),
              (this.newDeps.length = 0);
          }),
          (vi.prototype.update = function () {
            this.lazy ? (this.dirty = !0) : this.sync ? this.run() : Oe(this);
          }),
          (vi.prototype.run = function () {
            if (this.active) {
              var e = this.get();
              if (e !== this.value || o(e) || this.deep) {
                var t = this.value;
                if (((this.value = e), this.user))
                  try {
                    this.cb.call(this.vm, e, t);
                  } catch (e) {
                    T(e, this.vm, 'callback for watcher "' + this.expression + '"');
                  }
                else this.cb.call(this.vm, e, t);
              }
            }
          }),
          (vi.prototype.evaluate = function () {
            (this.value = this.get()), (this.dirty = !1);
          }),
          (vi.prototype.depend = function () {
            for (var e = this, t = this.deps.length; t--; ) e.deps[t].depend();
          }),
          (vi.prototype.teardown = function () {
            var e = this;
            if (this.active) {
              this.vm._isBeingDestroyed || f(this.vm._watchers, this);
              for (var t = this.deps.length; t--; ) e.deps[t].removeSub(e);
              this.active = !1;
            }
          });
        var Mi = new Ja(),
          gi = { enumerable: !0, configurable: !0, get: g, set: g },
          Li = { lazy: !0 },
          Yi = {
            init: function (e, t, n, r) {
              if (!e.componentInstance || e.componentInstance._isDestroyed)
                (e.componentInstance = Qe(e, ci, n, r)).$mount(t ? e.elm : void 0, t);
              else if (e.data.keepAlive) {
                var a = e;
                Yi.prepatch(a, a);
              }
            },
            prepatch: function (e, t) {
              var n = t.componentOptions;
              Ye((t.componentInstance = e.componentInstance), n.propsData, n.listeners, t, n.children);
            },
            insert: function (e) {
              var t = e.context,
                n = e.componentInstance;
              n._isMounted || ((n._isMounted = !0), De(n, 'mounted')),
                e.data.keepAlive && (t._isMounted ? xe(n) : be(n, !0));
            },
            destroy: function (e) {
              var t = e.componentInstance;
              t._isDestroyed || (e.data.keepAlive ? we(t, !0) : t.$destroy());
            },
          },
          ki = Object.keys(Yi),
          bi = 1,
          wi = 2,
          Di = 0;
        !(function (e) {
          e.prototype._init = function (e) {
            var t = this;
            (t._uid = Di++),
              (t._isVue = !0),
              e && e._isComponent ? pt(t, e) : (t.$options = U(yt(t.constructor), e || {}, t)),
              (t._renderProxy = t),
              (t._self = t),
              ge(t),
              fe(t),
              ht(t),
              De(t, 'beforeCreate'),
              Ge(t),
              $e(t),
              Ve(t),
              De(t, 'created'),
              t.$options.el && t.$mount(t.$options.el);
          };
        })(gt),
          (function (e) {
            var t = {};
            t.get = function () {
              return this._data;
            };
            var n = {};
            (n.get = function () {
              return this._props;
            }),
              Object.defineProperty(e.prototype, '$data', t),
              Object.defineProperty(e.prototype, '$props', n),
              (e.prototype.$set = P),
              (e.prototype.$delete = $),
              (e.prototype.$watch = function (e, t, n) {
                var r = this;
                if (s(t)) return Ue(r, e, t, n);
                (n = n || {}).user = !0;
                var a = new vi(r, e, t, n);
                return (
                  n.immediate && t.call(r, a.value),
                  function () {
                    a.teardown();
                  }
                );
              });
          })(gt),
          (function (e) {
            var t = /^hook:/;
            (e.prototype.$on = function (e, n) {
              var r = this,
                a = this;
              if (Array.isArray(e)) for (var i = 0, o = e.length; i < o; i++) r.$on(e[i], n);
              else (a._events[e] || (a._events[e] = [])).push(n), t.test(e) && (a._hasHookEvent = !0);
              return a;
            }),
              (e.prototype.$once = function (e, t) {
                function n() {
                  r.$off(e, n), t.apply(r, arguments);
                }
                var r = this;
                return (n.fn = t), r.$on(e, n), r;
              }),
              (e.prototype.$off = function (e, t) {
                var n = this,
                  r = this;
                if (!arguments.length) return (r._events = Object.create(null)), r;
                if (Array.isArray(e)) {
                  for (var a = 0, i = e.length; a < i; a++) n.$off(e[a], t);
                  return r;
                }
                var o = r._events[e];
                if (!o) return r;
                if (1 === arguments.length) return (r._events[e] = null), r;
                for (var s, u = o.length; u--; )
                  if ((s = o[u]) === t || s.fn === t) {
                    o.splice(u, 1);
                    break;
                  }
                return r;
              }),
              (e.prototype.$emit = function (e) {
                var t = this,
                  n = t._events[e];
                if (n) {
                  n = n.length > 1 ? y(n) : n;
                  for (var r = y(arguments, 1), a = 0, i = n.length; a < i; a++)
                    try {
                      n[a].apply(t, r);
                    } catch (n) {
                      T(n, t, 'event handler for "' + e + '"');
                    }
                }
                return t;
              });
          })(gt),
          (function (e) {
            (e.prototype._update = function (e, t) {
              var n = this;
              n._isMounted && De(n, 'beforeUpdate');
              var r = n.$el,
                a = n._vnode,
                i = ci;
              (ci = n),
                (n._vnode = e),
                a
                  ? (n.$el = n.__patch__(a, e))
                  : ((n.$el = n.__patch__(n.$el, e, t, !1, n.$options._parentElm, n.$options._refElm)),
                    (n.$options._parentElm = n.$options._refElm = null)),
                (ci = i),
                r && (r.__vue__ = null),
                n.$el && (n.$el.__vue__ = n),
                n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
            }),
              (e.prototype.$forceUpdate = function () {
                var e = this;
                e._watcher && e._watcher.update();
              }),
              (e.prototype.$destroy = function () {
                var e = this;
                if (!e._isBeingDestroyed) {
                  De(e, 'beforeDestroy'), (e._isBeingDestroyed = !0);
                  var t = e.$parent;
                  !t || t._isBeingDestroyed || e.$options.abstract || f(t.$children, e),
                    e._watcher && e._watcher.teardown();
                  for (var n = e._watchers.length; n--; ) e._watchers[n].teardown();
                  e._data.__ob__ && e._data.__ob__.vmCount--,
                    (e._isDestroyed = !0),
                    e.__patch__(e._vnode, null),
                    De(e, 'destroyed'),
                    e.$off(),
                    e.$el && (e.$el.__vue__ = null);
                }
              });
          })(gt),
          (function (e) {
            (e.prototype.$nextTick = function (e) {
              return qa(e, this);
            }),
              (e.prototype._render = function () {
                var e = this,
                  t = e.$options,
                  n = t.render,
                  r = t.staticRenderFns,
                  a = t._parentVnode;
                if (e._isMounted) for (var i in e.$slots) e.$slots[i] = X(e.$slots[i]);
                (e.$scopedSlots = (a && a.data.scopedSlots) || Sa),
                  r && !e._staticTrees && (e._staticTrees = []),
                  (e.$vnode = a);
                var o;
                try {
                  o = n.call(e._renderProxy, e.$createElement);
                } catch (t) {
                  T(t, e, 'render function'), (o = e._vnode);
                }
                return o instanceof ii || (o = ui()), (o.parent = a), o;
              }),
              (e.prototype._o = lt),
              (e.prototype._n = l),
              (e.prototype._s = c),
              (e.prototype._l = it),
              (e.prototype._t = ot),
              (e.prototype._q = L),
              (e.prototype._i = Y),
              (e.prototype._m = ct),
              (e.prototype._f = st),
              (e.prototype._k = ut),
              (e.prototype._b = dt),
              (e.prototype._v = Z),
              (e.prototype._e = ui),
              (e.prototype._u = Me),
              (e.prototype._g = mt);
          })(gt);
        var Ti = [String, RegExp, Array],
          Si = {
            KeepAlive: {
              name: 'keep-alive',
              abstract: !0,
              props: { include: Ti, exclude: Ti },
              created: function () {
                this.cache = Object.create(null);
              },
              destroyed: function () {
                var e = this;
                for (var t in e.cache) xt(e.cache[t]);
              },
              watch: {
                include: function (e) {
                  jt(this.cache, this._vnode, function (t) {
                    return St(e, t);
                  });
                },
                exclude: function (e) {
                  jt(this.cache, this._vnode, function (t) {
                    return !St(e, t);
                  });
                },
              },
              render: function () {
                var e = _e(this.$slots.default),
                  t = e && e.componentOptions;
                if (t) {
                  var n = Tt(t);
                  if (n && ((this.include && !St(this.include, n)) || (this.exclude && St(this.exclude, n)))) return e;
                  var r = null == e.key ? t.Ctor.cid + (t.tag ? '::' + t.tag : '') : e.key;
                  this.cache[r] ? (e.componentInstance = this.cache[r].componentInstance) : (this.cache[r] = e),
                    (e.data.keepAlive = !0);
                }
                return e;
              },
            },
          };
        !(function (e) {
          var t = {};
          (t.get = function () {
            return Ta;
          }),
            Object.defineProperty(e, 'config', t),
            (e.util = { warn: xa, extend: v, mergeOptions: U, defineReactive: E }),
            (e.set = P),
            (e.delete = $),
            (e.nextTick = qa),
            (e.options = Object.create(null)),
            wa.forEach(function (t) {
              e.options[t + 's'] = Object.create(null);
            }),
            (e.options._base = e),
            v(e.options.components, Si),
            Lt(e),
            Yt(e),
            kt(e),
            Dt(e);
        })(gt),
          Object.defineProperty(gt.prototype, '$isServer', { get: Ua }),
          Object.defineProperty(gt.prototype, '$ssrContext', {
            get: function () {
              return this.$vnode && this.$vnode.ssrContext;
            },
          }),
          (gt.version = '2.4.2');
        var ji,
          xi,
          Hi,
          Oi,
          Ai,
          Ei,
          Pi,
          $i,
          Ci,
          Fi = _('style,class'),
          Wi = _('input,textarea,option,select'),
          Ii = function (e, t, n) {
            return (
              ('value' === n && Wi(e) && 'button' !== t) ||
              ('selected' === n && 'option' === e) ||
              ('checked' === n && 'input' === e) ||
              ('muted' === n && 'video' === e)
            );
          },
          Ri = _('contenteditable,draggable,spellcheck'),
          Ni = _(
            'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible'
          ),
          zi = 'http://www.w3.org/1999/xlink',
          Ji = function (e) {
            return ':' === e.charAt(5) && 'xlink' === e.slice(0, 5);
          },
          Ui = function (e) {
            return Ji(e) ? e.slice(6, e.length) : '';
          },
          Vi = function (e) {
            return null == e || !1 === e;
          },
          Gi = { svg: 'http://www.w3.org/2000/svg', math: 'http://www.w3.org/1998/Math/MathML' },
          qi = _(
            'html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot'
          ),
          Bi = _(
            'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
            !0
          ),
          Ki = function (e) {
            return qi(e) || Bi(e);
          },
          Zi = Object.create(null),
          Qi = Object.freeze({
            createElement: function (e, t) {
              var n = document.createElement(e);
              return 'select' !== e
                ? n
                : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute('multiple', 'multiple'),
                  n);
            },
            createElementNS: function (e, t) {
              return document.createElementNS(Gi[e], t);
            },
            createTextNode: function (e) {
              return document.createTextNode(e);
            },
            createComment: function (e) {
              return document.createComment(e);
            },
            insertBefore: function (e, t, n) {
              e.insertBefore(t, n);
            },
            removeChild: function (e, t) {
              e.removeChild(t);
            },
            appendChild: function (e, t) {
              e.appendChild(t);
            },
            parentNode: function (e) {
              return e.parentNode;
            },
            nextSibling: function (e) {
              return e.nextSibling;
            },
            tagName: function (e) {
              return e.tagName;
            },
            setTextContent: function (e, t) {
              e.textContent = t;
            },
            setAttribute: function (e, t, n) {
              e.setAttribute(t, n);
            },
          }),
          Xi = {
            create: function (e, t) {
              It(t);
            },
            update: function (e, t) {
              e.data.ref !== t.data.ref && (It(e, !0), It(t));
            },
            destroy: function (e) {
              It(e, !0);
            },
          },
          eo = new ii('', {}, []),
          to = ['create', 'activate', 'update', 'remove', 'destroy'],
          no = {
            create: Jt,
            update: Jt,
            destroy: function (e) {
              Jt(e, eo);
            },
          },
          ro = Object.create(null),
          ao = [Xi, no],
          io = { create: Bt, update: Bt },
          oo = { create: Zt, update: Zt },
          so = /[\w).+\-_$\]]/,
          uo = '__r',
          co = '__c',
          lo = { create: bn, update: bn },
          _o = { create: wn, update: wn },
          fo = h(function (e) {
            var t = {},
              n = /;(?![^(]*\))/g,
              r = /:(.+)/;
            return (
              e.split(n).forEach(function (e) {
                if (e) {
                  var n = e.split(r);
                  n.length > 1 && (t[n[0].trim()] = n[1].trim());
                }
              }),
              t
            );
          }),
          mo = /^--/,
          ho = /\s*!important$/,
          po = function (e, t, n) {
            if (mo.test(t)) e.style.setProperty(t, n);
            else if (ho.test(n)) e.style.setProperty(t, n.replace(ho, ''), 'important');
            else {
              var r = vo(t);
              if (Array.isArray(n)) for (var a = 0, i = n.length; a < i; a++) e.style[r] = n[a];
              else e.style[r] = n;
            }
          },
          yo = ['Webkit', 'Moz', 'ms'],
          vo = h(function (e) {
            if (((Ci = Ci || document.createElement('div').style), 'filter' !== (e = va(e)) && e in Ci)) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < yo.length; n++) {
              var r = yo[n] + t;
              if (r in Ci) return r;
            }
          }),
          Mo = { create: On, update: On },
          go = h(function (e) {
            return {
              enterClass: e + '-enter',
              enterToClass: e + '-enter-to',
              enterActiveClass: e + '-enter-active',
              leaveClass: e + '-leave',
              leaveToClass: e + '-leave-to',
              leaveActiveClass: e + '-leave-active',
            };
          }),
          Lo = Oa && !Pa,
          Yo = 'transition',
          ko = 'animation',
          bo = 'transition',
          wo = 'transitionend',
          Do = 'animation',
          To = 'animationend';
        Lo &&
          (void 0 === window.ontransitionend &&
            void 0 !== window.onwebkittransitionend &&
            ((bo = 'WebkitTransition'), (wo = 'webkitTransitionEnd')),
          void 0 === window.onanimationend &&
            void 0 !== window.onwebkitanimationend &&
            ((Do = 'WebkitAnimation'), (To = 'webkitAnimationEnd')));
        var So = Oa && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout,
          jo = /\b(transform|all)(,|$)/,
          xo = (function (t) {
            function a(e) {
              return new ii(x.tagName(e).toLowerCase(), {}, [], void 0, e);
            }
            function o(e, t) {
              function n() {
                0 == --n.listeners && s(e);
              }
              return (n.listeners = t), n;
            }
            function s(e) {
              var t = x.parentNode(e);
              n(t) && x.removeChild(t, e);
            }
            function u(e, t, a, i, o) {
              if (((e.isRootInsert = !o), !d(e, t, a, i))) {
                var s = e.data,
                  u = e.children,
                  c = e.tag;
                n(c)
                  ? ((e.elm = e.ns ? x.createElementNS(e.ns, c) : x.createElement(c, e)),
                    y(e),
                    m(e, u, t),
                    n(s) && p(e, t),
                    f(a, e.elm, i))
                  : r(e.isComment)
                    ? ((e.elm = x.createComment(e.text)), f(a, e.elm, i))
                    : ((e.elm = x.createTextNode(e.text)), f(a, e.elm, i));
              }
            }
            function d(e, t, a, i) {
              var o = e.data;
              if (n(o)) {
                var s = n(e.componentInstance) && o.keepAlive;
                if ((n((o = o.hook)) && n((o = o.init)) && o(e, !1, a, i), n(e.componentInstance)))
                  return c(e, t), r(s) && l(e, t, a, i), !0;
              }
            }
            function c(e, t) {
              n(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), (e.data.pendingInsert = null)),
                (e.elm = e.componentInstance.$el),
                h(e) ? (p(e, t), y(e)) : (It(e), t.push(e));
            }
            function l(e, t, r, a) {
              for (var i, o = e; o.componentInstance; )
                if (((o = o.componentInstance._vnode), n((i = o.data)) && n((i = i.transition)))) {
                  for (i = 0; i < S.activate.length; ++i) S.activate[i](eo, o);
                  t.push(o);
                  break;
                }
              f(r, e.elm, a);
            }
            function f(e, t, r) {
              n(e) && (n(r) ? r.parentNode === e && x.insertBefore(e, t, r) : x.appendChild(e, t));
            }
            function m(e, t, n) {
              if (Array.isArray(t)) for (var r = 0; r < t.length; ++r) u(t[r], n, e.elm, null, !0);
              else i(e.text) && x.appendChild(e.elm, x.createTextNode(e.text));
            }
            function h(e) {
              for (; e.componentInstance; ) e = e.componentInstance._vnode;
              return n(e.tag);
            }
            function p(e, t) {
              for (var r = 0; r < S.create.length; ++r) S.create[r](eo, e);
              n((D = e.data.hook)) && (n(D.create) && D.create(eo, e), n(D.insert) && t.push(e));
            }
            function y(e) {
              for (var t, r = e; r; )
                n((t = r.context)) && n((t = t.$options._scopeId)) && x.setAttribute(e.elm, t, ''), (r = r.parent);
              n((t = ci)) && t !== e.context && n((t = t.$options._scopeId)) && x.setAttribute(e.elm, t, '');
            }
            function v(e, t, n, r, a, i) {
              for (; r <= a; ++r) u(n[r], i, e, t);
            }
            function M(e) {
              var t,
                r,
                a = e.data;
              if (n(a))
                for (n((t = a.hook)) && n((t = t.destroy)) && t(e), t = 0; t < S.destroy.length; ++t) S.destroy[t](e);
              if (n((t = e.children))) for (r = 0; r < e.children.length; ++r) M(e.children[r]);
            }
            function g(e, t, r, a) {
              for (; r <= a; ++r) {
                var i = t[r];
                n(i) && (n(i.tag) ? (L(i), M(i)) : s(i.elm));
              }
            }
            function L(e, t) {
              if (n(t) || n(e.data)) {
                var r,
                  a = S.remove.length + 1;
                for (
                  n(t) ? (t.listeners += a) : (t = o(e.elm, a)),
                    n((r = e.componentInstance)) && n((r = r._vnode)) && n(r.data) && L(r, t),
                    r = 0;
                  r < S.remove.length;
                  ++r
                )
                  S.remove[r](e, t);
                n((r = e.data.hook)) && n((r = r.remove)) ? r(e, t) : t();
              } else s(e.elm);
            }
            function Y(t, r, a, i, o) {
              for (
                var s,
                  d,
                  c,
                  l = 0,
                  _ = 0,
                  f = r.length - 1,
                  m = r[0],
                  h = r[f],
                  p = a.length - 1,
                  y = a[0],
                  M = a[p],
                  L = !o;
                l <= f && _ <= p;

              )
                e(m)
                  ? (m = r[++l])
                  : e(h)
                    ? (h = r[--f])
                    : Rt(m, y)
                      ? (k(m, y, i), (m = r[++l]), (y = a[++_]))
                      : Rt(h, M)
                        ? (k(h, M, i), (h = r[--f]), (M = a[--p]))
                        : Rt(m, M)
                          ? (k(m, M, i),
                            L && x.insertBefore(t, m.elm, x.nextSibling(h.elm)),
                            (m = r[++l]),
                            (M = a[--p]))
                          : Rt(h, y)
                            ? (k(h, y, i), L && x.insertBefore(t, h.elm, m.elm), (h = r[--f]), (y = a[++_]))
                            : (e(s) && (s = zt(r, l, f)),
                              e((d = n(y.key) ? s[y.key] : null))
                                ? (u(y, i, t, m.elm), (y = a[++_]))
                                : Rt((c = r[d]), y)
                                  ? (k(c, y, i), (r[d] = void 0), L && x.insertBefore(t, c.elm, m.elm), (y = a[++_]))
                                  : (u(y, i, t, m.elm), (y = a[++_])));
              l > f ? v(t, e(a[p + 1]) ? null : a[p + 1].elm, a, _, p, i) : _ > p && g(t, r, l, f);
            }
            function k(t, a, i, o) {
              if (t !== a) {
                var s = (a.elm = t.elm);
                if (r(t.isAsyncPlaceholder)) n(a.asyncFactory.resolved) ? w(t.elm, a, i) : (a.isAsyncPlaceholder = !0);
                else if (r(a.isStatic) && r(t.isStatic) && a.key === t.key && (r(a.isCloned) || r(a.isOnce)))
                  a.componentInstance = t.componentInstance;
                else {
                  var u,
                    d = a.data;
                  n(d) && n((u = d.hook)) && n((u = u.prepatch)) && u(t, a);
                  var c = t.children,
                    l = a.children;
                  if (n(d) && h(a)) {
                    for (u = 0; u < S.update.length; ++u) S.update[u](t, a);
                    n((u = d.hook)) && n((u = u.update)) && u(t, a);
                  }
                  e(a.text)
                    ? n(c) && n(l)
                      ? c !== l && Y(s, c, l, i, o)
                      : n(l)
                        ? (n(t.text) && x.setTextContent(s, ''), v(s, null, l, 0, l.length - 1, i))
                        : n(c)
                          ? g(s, c, 0, c.length - 1)
                          : n(t.text) && x.setTextContent(s, '')
                    : t.text !== a.text && x.setTextContent(s, a.text),
                    n(d) && n((u = d.hook)) && n((u = u.postpatch)) && u(t, a);
                }
              }
            }
            function b(e, t, a) {
              if (r(a) && n(e.parent)) e.parent.data.pendingInsert = t;
              else for (var i = 0; i < t.length; ++i) t[i].data.hook.insert(t[i]);
            }
            function w(e, t, a) {
              if (r(t.isComment) && n(t.asyncFactory)) return (t.elm = e), (t.isAsyncPlaceholder = !0), !0;
              t.elm = e;
              var i = t.tag,
                o = t.data,
                s = t.children;
              if (n(o) && (n((D = o.hook)) && n((D = D.init)) && D(t, !0), n((D = t.componentInstance))))
                return c(t, a), !0;
              if (n(i)) {
                if (n(s))
                  if (e.hasChildNodes()) {
                    for (var u = !0, d = e.firstChild, l = 0; l < s.length; l++) {
                      if (!d || !w(d, s[l], a)) {
                        u = !1;
                        break;
                      }
                      d = d.nextSibling;
                    }
                    if (!u || d) return !1;
                  } else m(t, s, a);
                if (n(o))
                  for (var _ in o)
                    if (!H(_)) {
                      p(t, a);
                      break;
                    }
              } else e.data !== t.text && (e.data = t.text);
              return !0;
            }
            var D,
              T,
              S = {},
              j = t.modules,
              x = t.nodeOps;
            for (D = 0; D < to.length; ++D)
              for (S[to[D]] = [], T = 0; T < j.length; ++T) n(j[T][to[D]]) && S[to[D]].push(j[T][to[D]]);
            var H = _('attrs,style,class,staticClass,staticStyle,key');
            return function (t, i, o, s, d, c) {
              if (!e(i)) {
                var l = !1,
                  _ = [];
                if (e(t)) (l = !0), u(i, _, d, c);
                else {
                  var f = n(t.nodeType);
                  if (!f && Rt(t, i)) k(t, i, _, s);
                  else {
                    if (f) {
                      if (
                        (1 === t.nodeType && t.hasAttribute(ba) && (t.removeAttribute(ba), (o = !0)),
                        r(o) && w(t, i, _))
                      )
                        return b(i, _, !0), t;
                      t = a(t);
                    }
                    var m = t.elm,
                      p = x.parentNode(m);
                    if ((u(i, _, m._leaveCb ? null : p, x.nextSibling(m)), n(i.parent))) {
                      for (var y = i.parent; y; ) (y.elm = i.elm), (y = y.parent);
                      if (h(i)) for (var v = 0; v < S.create.length; ++v) S.create[v](eo, i.parent);
                    }
                    n(p) ? g(p, [t], 0, 0) : n(t.tag) && M(t);
                  }
                }
                return b(i, _, l), i.elm;
              }
              n(t) && M(t);
            };
          })({
            nodeOps: Qi,
            modules: [
              io,
              oo,
              lo,
              _o,
              Mo,
              Oa
                ? {
                    create: Gn,
                    activate: Gn,
                    remove: function (e, t) {
                      !0 !== e.data.show ? Jn(e, t) : t();
                    },
                  }
                : {},
            ].concat(ao),
          }),
          Ho = _('text,number,password,search,email,tel,url');
        Pa &&
          document.addEventListener('selectionchange', function () {
            var e = document.activeElement;
            e && e.vmodel && Qn(e, 'input');
          });
        var Oo = {
            model: {
              inserted: function (e, t, n) {
                if ('select' === n.tag) {
                  var r = function () {
                    qn(e, t, n.context);
                  };
                  r(), (Ea || $a) && setTimeout(r, 0), (e._vOptions = [].map.call(e.options, Bn));
                } else
                  ('textarea' === n.tag || Ho(e.type)) &&
                    ((e._vModifiers = t.modifiers),
                    t.modifiers.lazy ||
                      (e.addEventListener('change', Zn),
                      Ca || (e.addEventListener('compositionstart', Kn), e.addEventListener('compositionend', Zn)),
                      Pa && (e.vmodel = !0)));
              },
              componentUpdated: function (e, t, n) {
                if ('select' === n.tag) {
                  qn(e, t, n.context);
                  var r = e._vOptions;
                  (e._vOptions = [].map.call(e.options, Bn)).some(function (e, t) {
                    return !L(e, r[t]);
                  }) && Qn(e, 'change');
                }
              },
            },
            show: {
              bind: function (e, t, n) {
                var r = t.value,
                  a = (n = Xn(n)).data && n.data.transition,
                  i = (e.__vOriginalDisplay = 'none' === e.style.display ? '' : e.style.display);
                r && a
                  ? ((n.data.show = !0),
                    zn(n, function () {
                      e.style.display = i;
                    }))
                  : (e.style.display = r ? i : 'none');
              },
              update: function (e, t, n) {
                var r = t.value;
                r !== t.oldValue &&
                  ((n = Xn(n)).data && n.data.transition
                    ? ((n.data.show = !0),
                      r
                        ? zn(n, function () {
                            e.style.display = e.__vOriginalDisplay;
                          })
                        : Jn(n, function () {
                            e.style.display = 'none';
                          }))
                    : (e.style.display = r ? e.__vOriginalDisplay : 'none'));
              },
              unbind: function (e, t, n, r, a) {
                a || (e.style.display = e.__vOriginalDisplay);
              },
            },
          },
          Ao = {
            name: String,
            appear: Boolean,
            css: Boolean,
            mode: String,
            type: String,
            enterClass: String,
            leaveClass: String,
            enterToClass: String,
            leaveToClass: String,
            enterActiveClass: String,
            leaveActiveClass: String,
            appearClass: String,
            appearActiveClass: String,
            appearToClass: String,
            duration: [Number, String, Object],
          },
          Eo = {
            name: 'transition',
            props: Ao,
            abstract: !0,
            render: function (e) {
              var t = this,
                n = this.$options._renderChildren;
              if (
                n &&
                (n = n.filter(function (e) {
                  return e.tag || ir(e);
                })).length
              ) {
                var r = this.mode,
                  a = n[0];
                if (rr(this.$vnode)) return a;
                var o = er(a);
                if (!o) return a;
                if (this._leaving) return nr(e, a);
                var s = '__transition-' + this._uid + '-';
                o.key =
                  null == o.key
                    ? o.isComment
                      ? s + 'comment'
                      : s + o.tag
                    : i(o.key)
                      ? 0 === String(o.key).indexOf(s)
                        ? o.key
                        : s + o.key
                      : o.key;
                var u = ((o.data || (o.data = {})).transition = tr(this)),
                  d = this._vnode,
                  c = er(d);
                if (
                  (o.data.directives &&
                    o.data.directives.some(function (e) {
                      return 'show' === e.name;
                    }) &&
                    (o.data.show = !0),
                  c && c.data && !ar(o, c) && !ir(c))
                ) {
                  var l = c && (c.data.transition = v({}, u));
                  if ('out-in' === r)
                    return (
                      (this._leaving = !0),
                      ne(l, 'afterLeave', function () {
                        (t._leaving = !1), t.$forceUpdate();
                      }),
                      nr(e, a)
                    );
                  if ('in-out' === r) {
                    if (ir(o)) return d;
                    var _,
                      f = function () {
                        _();
                      };
                    ne(u, 'afterEnter', f),
                      ne(u, 'enterCancelled', f),
                      ne(l, 'delayLeave', function (e) {
                        _ = e;
                      });
                  }
                }
                return a;
              }
            },
          },
          Po = v({ tag: String, moveClass: String }, Ao);
        delete Po.mode;
        var $o = {
          Transition: Eo,
          TransitionGroup: {
            props: Po,
            render: function (e) {
              for (
                var t = this.tag || this.$vnode.data.tag || 'span',
                  n = Object.create(null),
                  r = (this.prevChildren = this.children),
                  a = this.$slots.default || [],
                  i = (this.children = []),
                  o = tr(this),
                  s = 0;
                s < a.length;
                s++
              ) {
                var u = a[s];
                u.tag &&
                  null != u.key &&
                  0 !== String(u.key).indexOf('__vlist') &&
                  (i.push(u), (n[u.key] = u), ((u.data || (u.data = {})).transition = o));
              }
              if (r) {
                for (var d = [], c = [], l = 0; l < r.length; l++) {
                  var _ = r[l];
                  (_.data.transition = o),
                    (_.data.pos = _.elm.getBoundingClientRect()),
                    n[_.key] ? d.push(_) : c.push(_);
                }
                (this.kept = e(t, null, d)), (this.removed = c);
              }
              return e(t, null, i);
            },
            beforeUpdate: function () {
              this.__patch__(this._vnode, this.kept, !1, !0), (this._vnode = this.kept);
            },
            updated: function () {
              var e = this.prevChildren,
                t = this.moveClass || (this.name || 'v') + '-move';
              e.length &&
                this.hasMove(e[0].elm, t) &&
                (e.forEach(or),
                e.forEach(sr),
                e.forEach(ur),
                document.body.offsetHeight,
                e.forEach(function (e) {
                  if (e.data.moved) {
                    var n = e.elm,
                      r = n.style;
                    Cn(n, t),
                      (r.transform = r.WebkitTransform = r.transitionDuration = ''),
                      n.addEventListener(
                        wo,
                        (n._moveCb = function e(r) {
                          (r && !/transform$/.test(r.propertyName)) ||
                            (n.removeEventListener(wo, e), (n._moveCb = null), Fn(n, t));
                        })
                      );
                  }
                }));
            },
            methods: {
              hasMove: function (e, t) {
                if (!Lo) return !1;
                if (this._hasMove) return this._hasMove;
                var n = e.cloneNode();
                e._transitionClasses &&
                  e._transitionClasses.forEach(function (e) {
                    En(n, e);
                  }),
                  An(n, t),
                  (n.style.display = 'none'),
                  this.$el.appendChild(n);
                var r = In(n);
                return this.$el.removeChild(n), (this._hasMove = r.hasTransform);
              },
            },
          },
        };
        (gt.config.mustUseProp = Ii),
          (gt.config.isReservedTag = Ki),
          (gt.config.isReservedAttr = Fi),
          (gt.config.getTagNamespace = Ft),
          (gt.config.isUnknownElement = function (e) {
            if (!Oa) return !0;
            if (Ki(e)) return !1;
            if (((e = e.toLowerCase()), null != Zi[e])) return Zi[e];
            var t = document.createElement(e);
            return e.indexOf('-') > -1
              ? (Zi[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement)
              : (Zi[e] = /HTMLUnknownElement/.test(t.toString()));
          }),
          v(gt.options.directives, Oo),
          v(gt.options.components, $o),
          (gt.prototype.__patch__ = Oa ? xo : g),
          (gt.prototype.$mount = function (e, t) {
            return (e = e && Oa ? Wt(e) : void 0), Le(this, e, t);
          }),
          setTimeout(function () {
            Ta.devtools && Va && Va.emit('init', gt);
          }, 0);
        var Co,
          Fo =
            !!Oa &&
            (function (e, t) {
              var n = document.createElement('div');
              return (n.innerHTML = '<div a="\n"/>'), n.innerHTML.indexOf('&#10;') > 0;
            })(),
          Wo = /\{\{((?:.|\n)+?)\}\}/g,
          Io = /[-.*+?^${}()|[\]\/\\]/g,
          Ro = h(function (e) {
            var t = e[0].replace(Io, '\\$&'),
              n = e[1].replace(Io, '\\$&');
            return new RegExp(t + '((?:.|\\n)+?)' + n, 'g');
          }),
          No = [
            {
              staticKeys: ['staticClass'],
              transformNode: function (e, t) {
                t.warn;
                var n = un(e, 'class');
                n && (e.staticClass = JSON.stringify(n));
                var r = sn(e, 'class', !1);
                r && (e.classBinding = r);
              },
              genData: function (e) {
                var t = '';
                return (
                  e.staticClass && (t += 'staticClass:' + e.staticClass + ','),
                  e.classBinding && (t += 'class:' + e.classBinding + ','),
                  t
                );
              },
            },
            {
              staticKeys: ['staticStyle'],
              transformNode: function (e, t) {
                t.warn;
                var n = un(e, 'style');
                n && (e.staticStyle = JSON.stringify(fo(n)));
                var r = sn(e, 'style', !1);
                r && (e.styleBinding = r);
              },
              genData: function (e) {
                var t = '';
                return (
                  e.staticStyle && (t += 'staticStyle:' + e.staticStyle + ','),
                  e.styleBinding && (t += 'style:(' + e.styleBinding + '),'),
                  t
                );
              },
            },
          ],
          zo = {
            model: function (e, t, n) {
              Pi = n;
              var r = t.value,
                a = t.modifiers,
                i = e.tag,
                o = e.attrsMap.type;
              if (e.component) return dn(e, r, a), !1;
              if ('select' === i) Mn(e, r, a);
              else if ('input' === i && 'checkbox' === o) yn(e, r, a);
              else if ('input' === i && 'radio' === o) vn(e, r, a);
              else if ('input' === i || 'textarea' === i) gn(e, r, a);
              else if (!Ta.isReservedTag(i)) return dn(e, r, a), !1;
              return !0;
            },
            text: function (e, t) {
              t.value && nn(e, 'textContent', '_s(' + t.value + ')');
            },
            html: function (e, t) {
              t.value && nn(e, 'innerHTML', '_s(' + t.value + ')');
            },
          },
          Jo = _('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr'),
          Uo = _('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'),
          Vo = _(
            'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track'
          ),
          Go = {
            expectHTML: !0,
            modules: No,
            directives: zo,
            isPreTag: function (e) {
              return 'pre' === e;
            },
            isUnaryTag: Jo,
            mustUseProp: Ii,
            canBeLeftOpenTag: Uo,
            isReservedTag: Ki,
            getTagNamespace: Ft,
            staticKeys: (function (e) {
              return e
                .reduce(function (e, t) {
                  return e.concat(t.staticKeys || []);
                }, [])
                .join(',');
            })(No),
          },
          qo = {
            decode: function (e) {
              return (Co = Co || document.createElement('div')), (Co.innerHTML = e), Co.textContent;
            },
          },
          Bo = /([^\s"'<>\/=]+)/,
          Ko = /(?:=)/,
          Zo = [/"([^"]*)"+/.source, /'([^']*)'+/.source, /([^\s"'=<>`]+)/.source],
          Qo = new RegExp('^\\s*' + Bo.source + '(?:\\s*(' + Ko.source + ')\\s*(?:' + Zo.join('|') + '))?'),
          Xo = '[a-zA-Z_][\\w\\-\\.]*',
          es = '((?:' + Xo + '\\:)?' + Xo + ')',
          ts = new RegExp('^<' + es),
          ns = /^\s*(\/?)>/,
          rs = new RegExp('^<\\/' + es + '[^>]*>'),
          as = /^<!DOCTYPE [^>]+>/i,
          is = /^<!--/,
          os = /^<!\[/,
          ss = !1;
        'x'.replace(/x(.)?/g, function (e, t) {
          ss = '' === t;
        });
        var us,
          ds,
          cs,
          ls,
          _s,
          fs,
          ms,
          hs,
          ps,
          ys,
          vs = _('script,style,textarea', !0),
          Ms = {},
          gs = { '&lt;': '<', '&gt;': '>', '&quot;': '"', '&amp;': '&', '&#10;': '\n' },
          Ls = /&(?:lt|gt|quot|amp);/g,
          Ys = /&(?:lt|gt|quot|amp|#10);/g,
          ks = _('pre,textarea', !0),
          bs = function (e, t) {
            return e && ks(e) && '\n' === t[0];
          },
          ws = /^@|^v-on:/,
          Ds = /^v-|^@|^:/,
          Ts = /(.*?)\s+(?:in|of)\s+(.*)/,
          Ss = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,
          js = /:(.*)$/,
          xs = /^:|^v-bind:/,
          Hs = /\.[^.]+/g,
          Os = h(qo.decode),
          As = /^xmlns:NS\d+/,
          Es = /^NS\d+:/,
          Ps = h(function (e) {
            return _('type,tag,attrsList,attrsMap,plain,parent,children,attrs' + (e ? ',' + e : ''));
          }),
          $s = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
          Cs = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,
          Fs = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] },
          Ws = function (e) {
            return 'if(' + e + ')return null;';
          },
          Is = {
            stop: '$event.stopPropagation();',
            prevent: '$event.preventDefault();',
            self: Ws('$event.target !== $event.currentTarget'),
            ctrl: Ws('!$event.ctrlKey'),
            shift: Ws('!$event.shiftKey'),
            alt: Ws('!$event.altKey'),
            meta: Ws('!$event.metaKey'),
            left: Ws("'button' in $event && $event.button !== 0"),
            middle: Ws("'button' in $event && $event.button !== 1"),
            right: Ws("'button' in $event && $event.button !== 2"),
          },
          Rs = {
            on: function (e, t) {
              e.wrapListeners = function (e) {
                return '_g(' + e + ',' + t.value + ')';
              };
            },
            bind: function (e, t) {
              e.wrapData = function (n) {
                return (
                  '_b(' +
                  n +
                  ",'" +
                  e.tag +
                  "'," +
                  t.value +
                  ',' +
                  (t.modifiers && t.modifiers.prop ? 'true' : 'false') +
                  (t.modifiers && t.modifiers.sync ? ',true' : '') +
                  ')'
                );
              };
            },
            cloak: g,
          },
          Ns = function (e) {
            (this.options = e),
              (this.warn = e.warn || en),
              (this.transforms = tn(e.modules, 'transformCode')),
              (this.dataGenFns = tn(e.modules, 'genData')),
              (this.directives = v(v({}, Rs), e.directives));
            var t = e.isReservedTag || Ya;
            (this.maybeComponent = function (e) {
              return !t(e.tag);
            }),
              (this.onceId = 0),
              (this.staticRenderFns = []);
          },
          zs = (function (e) {
            return function (t) {
              function n(n, r) {
                var a = Object.create(t),
                  i = [],
                  o = [];
                if (
                  ((a.warn = function (e, t) {
                    (t ? o : i).push(e);
                  }),
                  r)
                ) {
                  r.modules && (a.modules = (t.modules || []).concat(r.modules)),
                    r.directives && (a.directives = v(Object.create(t.directives), r.directives));
                  for (var s in r) 'modules' !== s && 'directives' !== s && (a[s] = r[s]);
                }
                var u = e(n, a);
                return (u.errors = i), (u.tips = o), u;
              }
              return { compile: n, compileToFunctions: la(n) };
            };
          })(function (e, t) {
            var n = _r(e.trim(), t);
            Or(n, t);
            var r = Rr(n, t);
            return { ast: n, render: r.render, staticRenderFns: r.staticRenderFns };
          })(Go).compileToFunctions,
          Js = h(function (e) {
            var t = Wt(e);
            return t && t.innerHTML;
          }),
          Us = gt.prototype.$mount;
        return (
          (gt.prototype.$mount = function (e, t) {
            if ((e = e && Wt(e)) === document.body || e === document.documentElement) return this;
            var n = this.$options;
            if (!n.render) {
              var r = n.template;
              if (r)
                if ('string' == typeof r) '#' === r.charAt(0) && (r = Js(r));
                else {
                  if (!r.nodeType) return this;
                  r = r.innerHTML;
                }
              else e && (r = _a(e));
              if (r) {
                var a = zs(r, { shouldDecodeNewlines: Fo, delimiters: n.delimiters, comments: n.comments }, this),
                  i = a.render,
                  o = a.staticRenderFns;
                (n.render = i), (n.staticRenderFns = o);
              }
            }
            return Us.call(this, e, t);
          }),
          (gt.compile = zs),
          gt
        );
      });
    }).call(t, n(9));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    e.exports = n(562).extend();
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    function r(e, t, n, r, i) {
      if (!t || !t.dependencies) return [];
      i || (i = []), n || (n = {});
      var o = [].concat(t.dependencies).map(function (t) {
        return 'object' == typeof t
          ? Object.keys(t).map(function (r) {
              return a(e, r, t[r], n, i);
            })
          : [a(e, t, r, n, i)];
      });
      return Array.prototype.concat.apply([], o);
    }
    function a(e, n, a, u, d) {
      var c;
      switch ((u || (u = {}), n)) {
        case '$options':
          return a;
        case '$namedParameters':
          return u;
      }
      var l = t.checkOptional(n);
      if ((l && ((n = l), (l = !0)), i(u, n))) return u[n];
      if (
        (d.indexOf(n) > -1 && s(['Recursive loop for dependency', n, 'encountered'].join(' ')),
        !(c = o.getFactory(e, n, l)))
      )
        return c;
      if (c.resolved) return c.value;
      if (c.constant) {
        var _ = c.value;
        return (_ = o.decorate(e, _, c.decorators)), o.cacheResult(e, n, c, _, u), _;
      }
      var f;
      if (c.dependencies && c.dependencies.length)
        try {
          f = r(e, c, u, a, d.concat(n));
        } catch (e) {
          if (l) return;
          throw e;
        }
      var m = c.fn.apply(e, f);
      return (m = o.decorate(e, m, c.decorators)), o.cacheResult(e, n, c, m, u), m;
    }
    var i = n(75),
      o = n(565),
      s = n(198);
    (t.extractParameters = function (e) {
      var t = /\/\*(.*)\*\//g,
        n = e.toString();
      n = n.replace(t, '');
      var r = n.indexOf('('),
        a = n.indexOf(')'),
        i = n.indexOf('=>');
      return i > -1 && (i < r || r < 0)
        ? ((n = n.substring(0, i).trim()), n ? [n] : [])
        : ((n = n.substring(r + 1, a)),
          n
            ? n.split(',').map(function (e) {
                return e.trim();
              })
            : []);
    }),
      (t.resolveDependencies = function (e, t, n) {
        return r(e, t, n);
      }),
      (t.resolve = function (e, t, n) {
        return a(e, t, null, n, []);
      }),
      (t.checkOptional = function (e) {
        return '_' === e[0] && '_' === e[e.length - 1] && e.substring(1, e.length - 1);
      });
  },
  ,
  ,
  ,
  function (e, t, n) {
    'use strict';
    function r(e) {
      w &&
        ((e._devtoolHook = w),
        w.emit('vuex:init', e),
        w.on('vuex:travel-to-state', function (t) {
          e.replaceState(t);
        }),
        e.subscribe(function (e, t) {
          w.emit('vuex:mutation', e, t);
        }));
    }
    function a(e, t) {
      Object.keys(e).forEach(function (n) {
        return t(e[n], n);
      });
    }
    function i(e) {
      return null !== e && 'object' == typeof e;
    }
    function o(e) {
      return e && 'function' == typeof e.then;
    }
    function s(e, t) {
      if (!e) throw new Error('[vuex] ' + t);
    }
    function u(e, t) {
      if ((e.update(t), t.modules))
        for (var n in t.modules) {
          if (!e.getChild(n))
            return void console.warn(
              "[vuex] trying to add a new module '" + n + "' on hot reloading, manual reload is needed"
            );
          u(e.getChild(n), t.modules[n]);
        }
    }
    function d(e, t) {
      (e._actions = Object.create(null)),
        (e._mutations = Object.create(null)),
        (e._wrappedGetters = Object.create(null)),
        (e._modulesNamespaceMap = Object.create(null));
      var n = e.state;
      l(e, n, [], e._modules.root, !0), c(e, n, t);
    }
    function c(e, t, n) {
      var r = e._vm;
      e.getters = {};
      var i = e._wrappedGetters,
        o = {};
      a(i, function (t, n) {
        (o[n] = function () {
          return t(e);
        }),
          Object.defineProperty(e.getters, n, {
            get: function () {
              return e._vm[n];
            },
            enumerable: !0,
          });
      });
      var s = j.config.silent;
      (j.config.silent = !0),
        (e._vm = new j({ data: { $$state: t }, computed: o })),
        (j.config.silent = s),
        e.strict && y(e),
        r &&
          (n &&
            e._withCommit(function () {
              r._data.$$state = null;
            }),
          j.nextTick(function () {
            return r.$destroy();
          }));
    }
    function l(e, t, n, r, a) {
      var i = !n.length,
        o = e._modules.getNamespace(n);
      if ((r.namespaced && (e._modulesNamespaceMap[o] = r), !i && !a)) {
        var s = v(t, n.slice(0, -1)),
          u = n[n.length - 1];
        e._withCommit(function () {
          j.set(s, u, r.state);
        });
      }
      var d = (r.context = _(e, o, n));
      r.forEachMutation(function (t, n) {
        m(e, o + n, t, d);
      }),
        r.forEachAction(function (t, n) {
          h(e, o + n, t, d);
        }),
        r.forEachGetter(function (t, n) {
          p(e, o + n, t, d);
        }),
        r.forEachChild(function (r, i) {
          l(e, t, n.concat(i), r, a);
        });
    }
    function _(e, t, n) {
      var r = '' === t,
        a = {
          dispatch: r
            ? e.dispatch
            : function (n, r, a) {
                var i = M(n, r, a),
                  o = i.payload,
                  s = i.options,
                  u = i.type;
                return (s && s.root) || ((u = t + u), e._actions[u])
                  ? e.dispatch(u, o)
                  : void console.error('[vuex] unknown local action type: ' + i.type + ', global type: ' + u);
              },
          commit: r
            ? e.commit
            : function (n, r, a) {
                var i = M(n, r, a),
                  o = i.payload,
                  s = i.options,
                  u = i.type;
                if (!((s && s.root) || ((u = t + u), e._mutations[u])))
                  return void console.error('[vuex] unknown local mutation type: ' + i.type + ', global type: ' + u);
                e.commit(u, o, s);
              },
        };
      return (
        Object.defineProperties(a, {
          getters: {
            get: r
              ? function () {
                  return e.getters;
                }
              : function () {
                  return f(e, t);
                },
          },
          state: {
            get: function () {
              return v(e.state, n);
            },
          },
        }),
        a
      );
    }
    function f(e, t) {
      var n = {},
        r = t.length;
      return (
        Object.keys(e.getters).forEach(function (a) {
          if (a.slice(0, r) === t) {
            var i = a.slice(r);
            Object.defineProperty(n, i, {
              get: function () {
                return e.getters[a];
              },
              enumerable: !0,
            });
          }
        }),
        n
      );
    }
    function m(e, t, n, r) {
      (e._mutations[t] || (e._mutations[t] = [])).push(function (e) {
        n(r.state, e);
      });
    }
    function h(e, t, n, r) {
      (e._actions[t] || (e._actions[t] = [])).push(function (t, a) {
        var i = n(
          {
            dispatch: r.dispatch,
            commit: r.commit,
            getters: r.getters,
            state: r.state,
            rootGetters: e.getters,
            rootState: e.state,
          },
          t,
          a
        );
        return (
          o(i) || (i = Promise.resolve(i)),
          e._devtoolHook
            ? i.catch(function (t) {
                throw (e._devtoolHook.emit('vuex:error', t), t);
              })
            : i
        );
      });
    }
    function p(e, t, n, r) {
      if (e._wrappedGetters[t]) return void console.error('[vuex] duplicate getter key: ' + t);
      e._wrappedGetters[t] = function (e) {
        return n(r.state, r.getters, e.state, e.getters);
      };
    }
    function y(e) {
      e._vm.$watch(
        function () {
          return this._data.$$state;
        },
        function () {
          s(e._committing, 'Do not mutate vuex store state outside mutation handlers.');
        },
        { deep: !0, sync: !0 }
      );
    }
    function v(e, t) {
      return t.length
        ? t.reduce(function (e, t) {
            return e[t];
          }, e)
        : e;
    }
    function M(e, t, n) {
      return (
        i(e) && e.type && ((n = t), (t = e), (e = e.type)),
        s('string' == typeof e, 'Expects string as the type, but found ' + typeof e + '.'),
        { type: e, payload: t, options: n }
      );
    }
    function g(e) {
      if (j) return void console.error('[vuex] already installed. Vue.use(Vuex) should be called only once.');
      (j = e), b(j);
    }
    function L(e) {
      return Array.isArray(e)
        ? e.map(function (e) {
            return { key: e, val: e };
          })
        : Object.keys(e).map(function (t) {
            return { key: t, val: e[t] };
          });
    }
    function Y(e) {
      return function (t, n) {
        return 'string' != typeof t ? ((n = t), (t = '')) : '/' !== t.charAt(t.length - 1) && (t += '/'), e(t, n);
      };
    }
    function k(e, t, n) {
      var r = e._modulesNamespaceMap[n];
      return r || console.error('[vuex] module namespace not found in ' + t + '(): ' + n), r;
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      n.d(t, 'Store', function () {
        return x;
      }),
      n.d(t, 'mapState', function () {
        return O;
      }),
      n.d(t, 'mapMutations', function () {
        return A;
      }),
      n.d(t, 'mapGetters', function () {
        return E;
      }),
      n.d(t, 'mapActions', function () {
        return P;
      }); /**
     * vuex v2.3.0
     * (c) 2017 Evan You
     * @license MIT
     */
    var b = function (e) {
        function t() {
          var e = this.$options;
          e.store ? (this.$store = e.store) : e.parent && e.parent.$store && (this.$store = e.parent.$store);
        }
        if (Number(e.version.split('.')[0]) >= 2) {
          var n = e.config._lifecycleHooks.indexOf('init') > -1;
          e.mixin(n ? { init: t } : { beforeCreate: t });
        } else {
          var r = e.prototype._init;
          e.prototype._init = function (e) {
            void 0 === e && (e = {}), (e.init = e.init ? [t].concat(e.init) : t), r.call(this, e);
          };
        }
      },
      w = 'undefined' != typeof window && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
      D = function (e, t) {
        (this.runtime = t), (this._children = Object.create(null)), (this._rawModule = e);
        var n = e.state;
        this.state = ('function' == typeof n ? n() : n) || {};
      },
      T = { namespaced: {} };
    (T.namespaced.get = function () {
      return !!this._rawModule.namespaced;
    }),
      (D.prototype.addChild = function (e, t) {
        this._children[e] = t;
      }),
      (D.prototype.removeChild = function (e) {
        delete this._children[e];
      }),
      (D.prototype.getChild = function (e) {
        return this._children[e];
      }),
      (D.prototype.update = function (e) {
        (this._rawModule.namespaced = e.namespaced),
          e.actions && (this._rawModule.actions = e.actions),
          e.mutations && (this._rawModule.mutations = e.mutations),
          e.getters && (this._rawModule.getters = e.getters);
      }),
      (D.prototype.forEachChild = function (e) {
        a(this._children, e);
      }),
      (D.prototype.forEachGetter = function (e) {
        this._rawModule.getters && a(this._rawModule.getters, e);
      }),
      (D.prototype.forEachAction = function (e) {
        this._rawModule.actions && a(this._rawModule.actions, e);
      }),
      (D.prototype.forEachMutation = function (e) {
        this._rawModule.mutations && a(this._rawModule.mutations, e);
      }),
      Object.defineProperties(D.prototype, T);
    var S = function (e) {
      var t = this;
      (this.root = new D(e, !1)),
        e.modules &&
          a(e.modules, function (e, n) {
            t.register([n], e, !1);
          });
    };
    (S.prototype.get = function (e) {
      return e.reduce(function (e, t) {
        return e.getChild(t);
      }, this.root);
    }),
      (S.prototype.getNamespace = function (e) {
        var t = this.root;
        return e.reduce(function (e, n) {
          return (t = t.getChild(n)), e + (t.namespaced ? n + '/' : '');
        }, '');
      }),
      (S.prototype.update = function (e) {
        u(this.root, e);
      }),
      (S.prototype.register = function (e, t, n) {
        var r = this;
        void 0 === n && (n = !0);
        var i = this.get(e.slice(0, -1)),
          o = new D(t, n);
        i.addChild(e[e.length - 1], o),
          t.modules &&
            a(t.modules, function (t, a) {
              r.register(e.concat(a), t, n);
            });
      }),
      (S.prototype.unregister = function (e) {
        var t = this.get(e.slice(0, -1)),
          n = e[e.length - 1];
        t.getChild(n).runtime && t.removeChild(n);
      });
    var j,
      x = function (e) {
        var t = this;
        void 0 === e && (e = {}),
          s(j, 'must call Vue.use(Vuex) before creating a store instance.'),
          s('undefined' != typeof Promise, 'vuex requires a Promise polyfill in this browser.');
        var n = e.state;
        void 0 === n && (n = {});
        var a = e.plugins;
        void 0 === a && (a = []);
        var i = e.strict;
        void 0 === i && (i = !1),
          (this._committing = !1),
          (this._actions = Object.create(null)),
          (this._mutations = Object.create(null)),
          (this._wrappedGetters = Object.create(null)),
          (this._modules = new S(e)),
          (this._modulesNamespaceMap = Object.create(null)),
          (this._subscribers = []),
          (this._watcherVM = new j());
        var o = this,
          u = this,
          d = u.dispatch,
          _ = u.commit;
        (this.dispatch = function (e, t) {
          return d.call(o, e, t);
        }),
          (this.commit = function (e, t, n) {
            return _.call(o, e, t, n);
          }),
          (this.strict = i),
          l(this, n, [], this._modules.root),
          c(this, n),
          a.concat(r).forEach(function (e) {
            return e(t);
          });
      },
      H = { state: {} };
    (H.state.get = function () {
      return this._vm._data.$$state;
    }),
      (H.state.set = function (e) {
        s(!1, 'Use store.replaceState() to explicit replace store state.');
      }),
      (x.prototype.commit = function (e, t, n) {
        var r = this,
          a = M(e, t, n),
          i = a.type,
          o = a.payload,
          s = a.options,
          u = { type: i, payload: o },
          d = this._mutations[i];
        if (!d) return void console.error('[vuex] unknown mutation type: ' + i);
        this._withCommit(function () {
          d.forEach(function (e) {
            e(o);
          });
        }),
          this._subscribers.forEach(function (e) {
            return e(u, r.state);
          }),
          s &&
            s.silent &&
            console.warn(
              '[vuex] mutation type: ' +
                i +
                '. Silent option has been removed. Use the filter functionality in the vue-devtools'
            );
      }),
      (x.prototype.dispatch = function (e, t) {
        var n = M(e, t),
          r = n.type,
          a = n.payload,
          i = this._actions[r];
        return i
          ? i.length > 1
            ? Promise.all(
                i.map(function (e) {
                  return e(a);
                })
              )
            : i[0](a)
          : void console.error('[vuex] unknown action type: ' + r);
      }),
      (x.prototype.subscribe = function (e) {
        var t = this._subscribers;
        return (
          t.indexOf(e) < 0 && t.push(e),
          function () {
            var n = t.indexOf(e);
            n > -1 && t.splice(n, 1);
          }
        );
      }),
      (x.prototype.watch = function (e, t, n) {
        var r = this;
        return (
          s('function' == typeof e, 'store.watch only accepts a function.'),
          this._watcherVM.$watch(
            function () {
              return e(r.state, r.getters);
            },
            t,
            n
          )
        );
      }),
      (x.prototype.replaceState = function (e) {
        var t = this;
        this._withCommit(function () {
          t._vm._data.$$state = e;
        });
      }),
      (x.prototype.registerModule = function (e, t) {
        'string' == typeof e && (e = [e]),
          s(Array.isArray(e), 'module path must be a string or an Array.'),
          this._modules.register(e, t),
          l(this, this.state, e, this._modules.get(e)),
          c(this, this.state);
      }),
      (x.prototype.unregisterModule = function (e) {
        var t = this;
        'string' == typeof e && (e = [e]),
          s(Array.isArray(e), 'module path must be a string or an Array.'),
          this._modules.unregister(e),
          this._withCommit(function () {
            var n = v(t.state, e.slice(0, -1));
            j.delete(n, e[e.length - 1]);
          }),
          d(this);
      }),
      (x.prototype.hotUpdate = function (e) {
        this._modules.update(e), d(this, !0);
      }),
      (x.prototype._withCommit = function (e) {
        var t = this._committing;
        (this._committing = !0), e(), (this._committing = t);
      }),
      Object.defineProperties(x.prototype, H),
      'undefined' != typeof window && window.Vue && g(window.Vue);
    var O = Y(function (e, t) {
        var n = {};
        return (
          L(t).forEach(function (t) {
            var r = t.key,
              a = t.val;
            (n[r] = function () {
              var t = this.$store.state,
                n = this.$store.getters;
              if (e) {
                var r = k(this.$store, 'mapState', e);
                if (!r) return;
                (t = r.context.state), (n = r.context.getters);
              }
              return 'function' == typeof a ? a.call(this, t, n) : t[a];
            }),
              (n[r].vuex = !0);
          }),
          n
        );
      }),
      A = Y(function (e, t) {
        var n = {};
        return (
          L(t).forEach(function (t) {
            var r = t.key,
              a = t.val;
            (a = e + a),
              (n[r] = function () {
                for (var t = [], n = arguments.length; n--; ) t[n] = arguments[n];
                if (!e || k(this.$store, 'mapMutations', e))
                  return this.$store.commit.apply(this.$store, [a].concat(t));
              });
          }),
          n
        );
      }),
      E = Y(function (e, t) {
        var n = {};
        return (
          L(t).forEach(function (t) {
            var r = t.key,
              a = t.val;
            (a = e + a),
              (n[r] = function () {
                if (!e || k(this.$store, 'mapGetters', e))
                  return a in this.$store.getters
                    ? this.$store.getters[a]
                    : void console.error('[vuex] unknown getter: ' + a);
              }),
              (n[r].vuex = !0);
          }),
          n
        );
      }),
      P = Y(function (e, t) {
        var n = {};
        return (
          L(t).forEach(function (t) {
            var r = t.key,
              a = t.val;
            (a = e + a),
              (n[r] = function () {
                for (var t = [], n = arguments.length; n--; ) t[n] = arguments[n];
                if (!e || k(this.$store, 'mapActions', e))
                  return this.$store.dispatch.apply(this.$store, [a].concat(t));
              });
          }),
          n
        );
      }),
      $ = { Store: x, install: g, version: '2.3.0', mapState: O, mapMutations: A, mapGetters: E, mapActions: P };
    t.default = $;
  },
  ,
  ,
  function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, 'loaded', {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, 'id', {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  ,
  ,
  ,
  function (e, t) {
    var n = Object.hasOwnProperty;
    e.exports = function (e, t) {
      return n.call(e, t);
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t) {
    (t.APPLICATION = 1), (t.CLASS = 2), (t.INSTANCE = 3), (t.NONE = 4);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    'use strict';
    function r(e) {
      (this.state = U), (this.value = void 0), (this.deferred = []);
      var t = this;
      try {
        e(
          function (e) {
            t.resolve(e);
          },
          function (e) {
            t.reject(e);
          }
        );
      } catch (e) {
        t.reject(e);
      }
    }
    function a(e, t) {
      e instanceof Promise ? (this.promise = e) : (this.promise = new Promise(e.bind(t))), (this.context = t);
    }
    function i(e) {
      'undefined' != typeof console && X && console.warn('[VueResource warn]: ' + e);
    }
    function o(e) {
      'undefined' != typeof console && console.error(e);
    }
    function s(e, t) {
      return q(e, t);
    }
    function u(e) {
      return e ? e.replace(/^\s*|\s*$/g, '') : '';
    }
    function d(e, t) {
      return e && void 0 === t ? e.replace(/\s+$/, '') : e && t ? e.replace(new RegExp('[' + t + ']+$'), '') : e;
    }
    function c(e) {
      return e ? e.toLowerCase() : '';
    }
    function l(e) {
      return e ? e.toUpperCase() : '';
    }
    function _(e) {
      return 'string' == typeof e;
    }
    function f(e) {
      return 'function' == typeof e;
    }
    function m(e) {
      return null !== e && 'object' == typeof e;
    }
    function h(e) {
      return m(e) && Object.getPrototypeOf(e) == Object.prototype;
    }
    function p(e) {
      return 'undefined' != typeof Blob && e instanceof Blob;
    }
    function y(e) {
      return 'undefined' != typeof FormData && e instanceof FormData;
    }
    function v(e, t, n) {
      var r = a.resolve(e);
      return arguments.length < 2 ? r : r.then(t, n);
    }
    function M(e, t, n) {
      return (n = n || {}), f(n) && (n = n.call(t)), L(e.bind({ $vm: t, $options: n }), e, { $options: n });
    }
    function g(e, t) {
      var n, r;
      if (ne(e)) for (n = 0; n < e.length; n++) t.call(e[n], e[n], n);
      else if (m(e)) for (r in e) K.call(e, r) && t.call(e[r], e[r], r);
      return e;
    }
    function L(e) {
      return (
        Q.call(arguments, 1).forEach(function (t) {
          b(e, t, !0);
        }),
        e
      );
    }
    function Y(e) {
      return (
        Q.call(arguments, 1).forEach(function (t) {
          for (var n in t) void 0 === e[n] && (e[n] = t[n]);
        }),
        e
      );
    }
    function k(e) {
      return (
        Q.call(arguments, 1).forEach(function (t) {
          b(e, t);
        }),
        e
      );
    }
    function b(e, t, n) {
      for (var r in t)
        n && (h(t[r]) || ne(t[r]))
          ? (h(t[r]) && !h(e[r]) && (e[r] = {}), ne(t[r]) && !ne(e[r]) && (e[r] = []), b(e[r], t[r], n))
          : void 0 !== t[r] && (e[r] = t[r]);
    }
    function w(e, t, n) {
      var r = D(e),
        a = r.expand(t);
      return n && n.push.apply(n, r.vars), a;
    }
    function D(e) {
      var t = ['+', '#', '.', '/', ';', '?', '&'],
        n = [];
      return {
        vars: n,
        expand: function (r) {
          return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (e, a, i) {
            if (a) {
              var o = null,
                s = [];
              if (
                (-1 !== t.indexOf(a.charAt(0)) && ((o = a.charAt(0)), (a = a.substr(1))),
                a.split(/,/g).forEach(function (e) {
                  var t = /([^:\*]*)(?::(\d+)|(\*))?/.exec(e);
                  s.push.apply(s, T(r, o, t[1], t[2] || t[3])), n.push(t[1]);
                }),
                o && '+' !== o)
              ) {
                var u = ',';
                return '?' === o ? (u = '&') : '#' !== o && (u = o), (0 !== s.length ? o : '') + s.join(u);
              }
              return s.join(',');
            }
            return H(i);
          });
        },
      };
    }
    function T(e, t, n, r) {
      var a = e[n],
        i = [];
      if (S(a) && '' !== a)
        if ('string' == typeof a || 'number' == typeof a || 'boolean' == typeof a)
          (a = a.toString()), r && '*' !== r && (a = a.substring(0, parseInt(r, 10))), i.push(x(t, a, j(t) ? n : null));
        else if ('*' === r)
          Array.isArray(a)
            ? a.filter(S).forEach(function (e) {
                i.push(x(t, e, j(t) ? n : null));
              })
            : Object.keys(a).forEach(function (e) {
                S(a[e]) && i.push(x(t, a[e], e));
              });
        else {
          var o = [];
          Array.isArray(a)
            ? a.filter(S).forEach(function (e) {
                o.push(x(t, e));
              })
            : Object.keys(a).forEach(function (e) {
                S(a[e]) && (o.push(encodeURIComponent(e)), o.push(x(t, a[e].toString())));
              }),
            j(t) ? i.push(encodeURIComponent(n) + '=' + o.join(',')) : 0 !== o.length && i.push(o.join(','));
        }
      else
        ';' === t
          ? i.push(encodeURIComponent(n))
          : '' !== a || ('&' !== t && '?' !== t)
            ? '' === a && i.push('')
            : i.push(encodeURIComponent(n) + '=');
      return i;
    }
    function S(e) {
      return void 0 !== e && null !== e;
    }
    function j(e) {
      return ';' === e || '&' === e || '?' === e;
    }
    function x(e, t, n) {
      return (t = '+' === e || '#' === e ? H(t) : encodeURIComponent(t)), n ? encodeURIComponent(n) + '=' + t : t;
    }
    function H(e) {
      return e
        .split(/(%[0-9A-Fa-f]{2})/g)
        .map(function (e) {
          return /%[0-9A-Fa-f]/.test(e) || (e = encodeURI(e)), e;
        })
        .join('');
    }
    function O(e, t) {
      var n,
        r = this || {},
        a = e;
      return (
        _(e) && (a = { url: e, params: t }),
        (a = L({}, O.options, r.$options, a)),
        O.transforms.forEach(function (e) {
          _(e) && (e = O.transform[e]), f(e) && (n = A(e, n, r.$vm));
        }),
        n(a)
      );
    }
    function A(e, t, n) {
      return function (r) {
        return e.call(n, r, t);
      };
    }
    function E(e, t, n) {
      var r,
        a = ne(t),
        i = h(t);
      g(t, function (t, o) {
        (r = m(t) || ne(t)),
          n && (o = n + '[' + (i || r ? o : '') + ']'),
          !n && a ? e.add(t.name, t.value) : r ? E(e, t, o) : e.add(o, t);
      });
    }
    function P(e) {
      var t = e.match(/^\[|^\{(?!\{)/),
        n = { '[': /]$/, '{': /}$/ };
      return t && n[t[0]].test(e);
    }
    function $(e, t) {
      t((e.client || (ee ? ye : ve))(e));
    }
    function C(e, t) {
      return Object.keys(e).reduce(function (e, n) {
        return c(t) === c(n) ? n : e;
      }, null);
    }
    function F(e) {
      if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError('Invalid character in header field name');
      return u(e);
    }
    function W(e) {
      return new a(function (t) {
        var n = new FileReader();
        n.readAsText(e),
          (n.onload = function () {
            t(n.result);
          });
      });
    }
    function I(e) {
      return 0 === e.type.indexOf('text') || -1 !== e.type.indexOf('json');
    }
    function R(e) {
      var t = this || {},
        n = Me(t.$vm);
      return (
        Y(e || {}, t.$options, R.options),
        R.interceptors.forEach(function (e) {
          _(e) && (e = R.interceptor[e]), f(e) && n.use(e);
        }),
        n(new Ye(e)).then(
          function (e) {
            return e.ok ? e : a.reject(e);
          },
          function (e) {
            return e instanceof Error && o(e), a.reject(e);
          }
        )
      );
    }
    function N(e, t, n, r) {
      var a = this || {},
        i = {};
      return (
        (n = re({}, N.actions, n)),
        g(n, function (n, o) {
          (n = L({ url: e, params: re({}, t) }, r, n)),
            (i[o] = function () {
              return (a.$http || R)(z(n, arguments));
            });
        }),
        i
      );
    }
    function z(e, t) {
      var n,
        r = re({}, e),
        a = {};
      switch (t.length) {
        case 2:
          (a = t[0]), (n = t[1]);
          break;
        case 1:
          /^(POST|PUT|PATCH)$/i.test(r.method) ? (n = t[0]) : (a = t[0]);
          break;
        case 0:
          break;
        default:
          throw 'Expected up to 2 arguments [params, body], got ' + t.length + ' arguments';
      }
      return (r.body = n), (r.params = re({}, r.params, a)), r;
    }
    function J(e) {
      J.installed ||
        (te(e),
        (e.url = O),
        (e.http = R),
        (e.resource = N),
        (e.Promise = a),
        Object.defineProperties(e.prototype, {
          $url: {
            get: function () {
              return M(e.url, this, this.$options.url);
            },
          },
          $http: {
            get: function () {
              return M(e.http, this, this.$options.http);
            },
          },
          $resource: {
            get: function () {
              return e.resource.bind(this);
            },
          },
          $promise: {
            get: function () {
              var t = this;
              return function (n) {
                return new e.Promise(n, t);
              };
            },
          },
        }));
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      n.d(t, 'Url', function () {
        return O;
      }),
      n.d(t, 'Http', function () {
        return R;
      }),
      n.d(t, 'Resource', function () {
        return N;
      }); /*!
     * vue-resource v1.3.4
     * https://github.com/pagekit/vue-resource
     * Released under the MIT License.
     */
    var U = 2;
    (r.reject = function (e) {
      return new r(function (t, n) {
        n(e);
      });
    }),
      (r.resolve = function (e) {
        return new r(function (t, n) {
          t(e);
        });
      }),
      (r.all = function (e) {
        return new r(function (t, n) {
          var a = 0,
            i = [];
          0 === e.length && t(i);
          for (var o = 0; o < e.length; o += 1)
            r.resolve(e[o]).then(
              (function (n) {
                return function (r) {
                  (i[n] = r), (a += 1) === e.length && t(i);
                };
              })(o),
              n
            );
        });
      }),
      (r.race = function (e) {
        return new r(function (t, n) {
          for (var a = 0; a < e.length; a += 1) r.resolve(e[a]).then(t, n);
        });
      });
    var V = r.prototype;
    (V.resolve = function (e) {
      var t = this;
      if (t.state === U) {
        if (e === t) throw new TypeError('Promise settled with itself.');
        var n = !1;
        try {
          var r = e && e.then;
          if (null !== e && 'object' == typeof e && 'function' == typeof r)
            return void r.call(
              e,
              function (e) {
                n || t.resolve(e), (n = !0);
              },
              function (e) {
                n || t.reject(e), (n = !0);
              }
            );
        } catch (e) {
          return void (n || t.reject(e));
        }
        (t.state = 0), (t.value = e), t.notify();
      }
    }),
      (V.reject = function (e) {
        var t = this;
        if (t.state === U) {
          if (e === t) throw new TypeError('Promise settled with itself.');
          (t.state = 1), (t.value = e), t.notify();
        }
      }),
      (V.notify = function () {
        var e = this;
        s(function () {
          if (e.state !== U)
            for (; e.deferred.length; ) {
              var t = e.deferred.shift(),
                n = t[0],
                r = t[1],
                a = t[2],
                i = t[3];
              try {
                0 === e.state
                  ? a('function' == typeof n ? n.call(void 0, e.value) : e.value)
                  : 1 === e.state && ('function' == typeof r ? a(r.call(void 0, e.value)) : i(e.value));
              } catch (e) {
                i(e);
              }
            }
        });
      }),
      (V.then = function (e, t) {
        var n = this;
        return new r(function (r, a) {
          n.deferred.push([e, t, r, a]), n.notify();
        });
      }),
      (V.catch = function (e) {
        return this.then(void 0, e);
      }),
      'undefined' == typeof Promise && (window.Promise = r),
      (a.all = function (e, t) {
        return new a(Promise.all(e), t);
      }),
      (a.resolve = function (e, t) {
        return new a(Promise.resolve(e), t);
      }),
      (a.reject = function (e, t) {
        return new a(Promise.reject(e), t);
      }),
      (a.race = function (e, t) {
        return new a(Promise.race(e), t);
      });
    var G = a.prototype;
    (G.bind = function (e) {
      return (this.context = e), this;
    }),
      (G.then = function (e, t) {
        return (
          e && e.bind && this.context && (e = e.bind(this.context)),
          t && t.bind && this.context && (t = t.bind(this.context)),
          new a(this.promise.then(e, t), this.context)
        );
      }),
      (G.catch = function (e) {
        return e && e.bind && this.context && (e = e.bind(this.context)), new a(this.promise.catch(e), this.context);
      }),
      (G.finally = function (e) {
        return this.then(
          function (t) {
            return e.call(this), t;
          },
          function (t) {
            return e.call(this), Promise.reject(t);
          }
        );
      });
    var q,
      B = {},
      K = B.hasOwnProperty,
      Z = [],
      Q = Z.slice,
      X = !1,
      ee = 'undefined' != typeof window,
      te = function (e) {
        var t = e.config,
          n = e.nextTick;
        (q = n), (X = t.debug || !t.silent);
      },
      ne = Array.isArray,
      re = Object.assign || k,
      ae = function (e, t) {
        var n = t(e);
        return _(e.root) && !/^(https?:)?\//.test(n) && (n = d(e.root, '/') + '/' + n), n;
      },
      ie = function (e, t) {
        var n = Object.keys(O.options.params),
          r = {},
          a = t(e);
        return (
          g(e.params, function (e, t) {
            -1 === n.indexOf(t) && (r[t] = e);
          }),
          (r = O.params(r)),
          r && (a += (-1 == a.indexOf('?') ? '?' : '&') + r),
          a
        );
      },
      oe = function (e) {
        var t = [],
          n = w(e.url, e.params, t);
        return (
          t.forEach(function (t) {
            delete e.params[t];
          }),
          n
        );
      };
    (O.options = { url: '', root: null, params: {} }),
      (O.transform = { template: oe, query: ie, root: ae }),
      (O.transforms = ['template', 'query', 'root']),
      (O.params = function (e) {
        var t = [],
          n = encodeURIComponent;
        return (
          (t.add = function (e, t) {
            f(t) && (t = t()), null === t && (t = ''), this.push(n(e) + '=' + n(t));
          }),
          E(t, e),
          t.join('&').replace(/%20/g, '+')
        );
      }),
      (O.parse = function (e) {
        var t = document.createElement('a');
        return (
          document.documentMode && ((t.href = e), (e = t.href)),
          (t.href = e),
          {
            href: t.href,
            protocol: t.protocol ? t.protocol.replace(/:$/, '') : '',
            port: t.port,
            host: t.host,
            hostname: t.hostname,
            pathname: '/' === t.pathname.charAt(0) ? t.pathname : '/' + t.pathname,
            search: t.search ? t.search.replace(/^\?/, '') : '',
            hash: t.hash ? t.hash.replace(/^#/, '') : '',
          }
        );
      });
    var se = function (e) {
        return new a(function (t) {
          var n = new XDomainRequest(),
            r = function (r) {
              var a = r.type,
                i = 0;
              'load' === a ? (i = 200) : 'error' === a && (i = 500), t(e.respondWith(n.responseText, { status: i }));
            };
          (e.abort = function () {
            return n.abort();
          }),
            n.open(e.method, e.getUrl()),
            e.timeout && (n.timeout = e.timeout),
            (n.onload = r),
            (n.onabort = r),
            (n.onerror = r),
            (n.ontimeout = r),
            (n.onprogress = function () {}),
            n.send(e.getBody());
        });
      },
      ue = ee && 'withCredentials' in new XMLHttpRequest(),
      de = function (e, t) {
        if (ee) {
          var n = O.parse(location.href),
            r = O.parse(e.getUrl());
          (r.protocol === n.protocol && r.host === n.host) ||
            ((e.crossOrigin = !0), (e.emulateHTTP = !1), ue || (e.client = se));
        }
        t();
      },
      ce = function (e, t) {
        y(e.body)
          ? e.headers.delete('Content-Type')
          : m(e.body) &&
            e.emulateJSON &&
            ((e.body = O.params(e.body)), e.headers.set('Content-Type', 'application/x-www-form-urlencoded')),
          t();
      },
      le = function (e, t) {
        var n = e.headers.get('Content-Type') || '';
        m(e.body) && 0 === n.indexOf('application/json') && (e.body = JSON.stringify(e.body)),
          t(function (e) {
            return e.bodyText
              ? v(e.text(), function (t) {
                  if (((n = e.headers.get('Content-Type') || ''), 0 === n.indexOf('application/json') || P(t)))
                    try {
                      e.body = JSON.parse(t);
                    } catch (t) {
                      e.body = null;
                    }
                  else e.body = t;
                  return e;
                })
              : e;
          });
      },
      _e = function (e) {
        return new a(function (t) {
          var n,
            r,
            a = e.jsonp || 'callback',
            i = e.jsonpCallback || '_jsonp' + Math.random().toString(36).substr(2),
            o = null;
          (n = function (n) {
            var a = n.type,
              s = 0;
            'load' === a && null !== o ? (s = 200) : 'error' === a && (s = 500),
              s && window[i] && (delete window[i], document.body.removeChild(r)),
              t(e.respondWith(o, { status: s }));
          }),
            (window[i] = function (e) {
              o = JSON.stringify(e);
            }),
            (e.abort = function () {
              n({ type: 'abort' });
            }),
            (e.params[a] = i),
            e.timeout && setTimeout(e.abort, e.timeout),
            (r = document.createElement('script')),
            (r.src = e.getUrl()),
            (r.type = 'text/javascript'),
            (r.async = !0),
            (r.onload = n),
            (r.onerror = n),
            document.body.appendChild(r);
        });
      },
      fe = function (e, t) {
        'JSONP' == e.method && (e.client = _e), t();
      },
      me = function (e, t) {
        f(e.before) && e.before.call(this, e), t();
      },
      he = function (e, t) {
        e.emulateHTTP &&
          /^(PUT|PATCH|DELETE)$/i.test(e.method) &&
          (e.headers.set('X-HTTP-Method-Override', e.method), (e.method = 'POST')),
          t();
      },
      pe = function (e, t) {
        g(re({}, R.headers.common, e.crossOrigin ? {} : R.headers.custom, R.headers[c(e.method)]), function (t, n) {
          e.headers.has(n) || e.headers.set(n, t);
        }),
          t();
      },
      ye = function (e) {
        return new a(function (t) {
          var n = new XMLHttpRequest(),
            r = function (r) {
              var a = e.respondWith('response' in n ? n.response : n.responseText, {
                status: 1223 === n.status ? 204 : n.status,
                statusText: 1223 === n.status ? 'No Content' : u(n.statusText),
              });
              g(u(n.getAllResponseHeaders()).split('\n'), function (e) {
                a.headers.append(e.slice(0, e.indexOf(':')), e.slice(e.indexOf(':') + 1));
              }),
                t(a);
            };
          (e.abort = function () {
            return n.abort();
          }),
            e.progress &&
              ('GET' === e.method
                ? n.addEventListener('progress', e.progress)
                : /^(POST|PUT)$/i.test(e.method) && n.upload.addEventListener('progress', e.progress)),
            n.open(e.method, e.getUrl(), !0),
            e.timeout && (n.timeout = e.timeout),
            e.responseType && 'responseType' in n && (n.responseType = e.responseType),
            (e.withCredentials || e.credentials) && (n.withCredentials = !0),
            e.crossOrigin || e.headers.set('X-Requested-With', 'XMLHttpRequest'),
            e.headers.forEach(function (e, t) {
              n.setRequestHeader(t, e);
            }),
            (n.onload = r),
            (n.onabort = r),
            (n.onerror = r),
            (n.ontimeout = r),
            n.send(e.getBody());
        });
      },
      ve = function (e) {
        var t = n(561);
        return new a(function (n) {
          var r,
            a = e.getUrl(),
            i = e.getBody(),
            o = e.method,
            s = {};
          e.headers.forEach(function (e, t) {
            s[t] = e;
          }),
            t(a, { body: i, method: o, headers: s }).then(
              (r = function (t) {
                var r = e.respondWith(t.body, { status: t.statusCode, statusText: u(t.statusMessage) });
                g(t.headers, function (e, t) {
                  r.headers.set(t, e);
                }),
                  n(r);
              }),
              function (e) {
                return r(e.response);
              }
            );
        });
      },
      Me = function (e) {
        function t(t) {
          return new a(function (a, s) {
            function u() {
              (n = r.pop()),
                f(n) ? n.call(e, t, d) : (i('Invalid interceptor of type ' + typeof n + ', must be a function'), d());
            }
            function d(t) {
              if (f(t)) o.unshift(t);
              else if (m(t))
                return (
                  o.forEach(function (n) {
                    t = v(
                      t,
                      function (t) {
                        return n.call(e, t) || t;
                      },
                      s
                    );
                  }),
                  void v(t, a, s)
                );
              u();
            }
            u();
          }, e);
        }
        var n,
          r = [$],
          o = [];
        return (
          m(e) || (e = null),
          (t.use = function (e) {
            r.push(e);
          }),
          t
        );
      },
      ge = function (e) {
        var t = this;
        (this.map = {}),
          g(e, function (e, n) {
            return t.append(n, e);
          });
      };
    (ge.prototype.has = function (e) {
      return null !== C(this.map, e);
    }),
      (ge.prototype.get = function (e) {
        var t = this.map[C(this.map, e)];
        return t ? t.join() : null;
      }),
      (ge.prototype.getAll = function (e) {
        return this.map[C(this.map, e)] || [];
      }),
      (ge.prototype.set = function (e, t) {
        this.map[F(C(this.map, e) || e)] = [u(t)];
      }),
      (ge.prototype.append = function (e, t) {
        var n = this.map[C(this.map, e)];
        n ? n.push(u(t)) : this.set(e, t);
      }),
      (ge.prototype.delete = function (e) {
        delete this.map[C(this.map, e)];
      }),
      (ge.prototype.deleteAll = function () {
        this.map = {};
      }),
      (ge.prototype.forEach = function (e, t) {
        var n = this;
        g(this.map, function (r, a) {
          g(r, function (r) {
            return e.call(t, r, a, n);
          });
        });
      });
    var Le = function (e, t) {
      var n = t.url,
        r = t.headers,
        a = t.status,
        i = t.statusText;
      (this.url = n),
        (this.ok = a >= 200 && a < 300),
        (this.status = a || 0),
        (this.statusText = i || ''),
        (this.headers = new ge(r)),
        (this.body = e),
        _(e) ? (this.bodyText = e) : p(e) && ((this.bodyBlob = e), I(e) && (this.bodyText = W(e)));
    };
    (Le.prototype.blob = function () {
      return v(this.bodyBlob);
    }),
      (Le.prototype.text = function () {
        return v(this.bodyText);
      }),
      (Le.prototype.json = function () {
        return v(this.text(), function (e) {
          return JSON.parse(e);
        });
      }),
      Object.defineProperty(Le.prototype, 'data', {
        get: function () {
          return this.body;
        },
        set: function (e) {
          this.body = e;
        },
      });
    var Ye = function (e) {
      (this.body = null),
        (this.params = {}),
        re(this, e, { method: l(e.method || 'GET') }),
        this.headers instanceof ge || (this.headers = new ge(this.headers));
    };
    (Ye.prototype.getUrl = function () {
      return O(this);
    }),
      (Ye.prototype.getBody = function () {
        return this.body;
      }),
      (Ye.prototype.respondWith = function (e, t) {
        return new Le(e, re(t || {}, { url: this.getUrl() }));
      });
    var ke = { Accept: 'application/json, text/plain, */*' },
      be = { 'Content-Type': 'application/json;charset=utf-8' };
    (R.options = {}),
      (R.headers = { put: be, post: be, patch: be, delete: be, common: ke, custom: {} }),
      (R.interceptor = { before: me, method: he, jsonp: fe, json: le, form: ce, header: pe, cors: de }),
      (R.interceptors = ['before', 'method', 'jsonp', 'json', 'form', 'header', 'cors']),
      ['get', 'delete', 'head', 'jsonp'].forEach(function (e) {
        R[e] = function (t, n) {
          return this(re(n || {}, { url: t, method: e }));
        };
      }),
      ['post', 'put', 'patch'].forEach(function (e) {
        R[e] = function (t, n, r) {
          return this(re(r || {}, { url: t, method: e, body: n }));
        };
      }),
      (N.actions = {
        get: { method: 'GET' },
        save: { method: 'POST' },
        query: { method: 'GET' },
        update: { method: 'PUT' },
        remove: { method: 'DELETE' },
        delete: { method: 'DELETE' },
      }),
      'undefined' != typeof window && window.Vue && window.Vue.use(J),
      (t.default = J);
  },
  function (e, t, n) {
    function r(e, t) {
      (this._id = e), (this._clearFn = t);
    }
    var a = Function.prototype.apply;
    (t.setTimeout = function () {
      return new r(a.call(setTimeout, window, arguments), clearTimeout);
    }),
      (t.setInterval = function () {
        return new r(a.call(setInterval, window, arguments), clearInterval);
      }),
      (t.clearTimeout = t.clearInterval =
        function (e) {
          e && e.close();
        }),
      (r.prototype.unref = r.prototype.ref = function () {}),
      (r.prototype.close = function () {
        this._clearFn.call(window, this._id);
      }),
      (t.enroll = function (e, t) {
        clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
      }),
      (t.unenroll = function (e) {
        clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
      }),
      (t._unrefActive = t.active =
        function (e) {
          clearTimeout(e._idleTimeoutId);
          var t = e._idleTimeout;
          t >= 0 &&
            (e._idleTimeoutId = setTimeout(function () {
              e._onTimeout && e._onTimeout();
            }, t));
        }),
      n(584),
      (t.setImmediate = setImmediate),
      (t.clearImmediate = clearImmediate);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    'use strict';
    function r(e, t) {}
    function a(e) {
      return Object.prototype.toString.call(e).indexOf('Error') > -1;
    }
    function i(e, t) {
      switch (typeof t) {
        case 'undefined':
          return;
        case 'object':
          return t;
        case 'function':
          return t(e);
        case 'boolean':
          return t ? e.params : void 0;
      }
    }
    function o(e, t, n) {
      void 0 === t && (t = {});
      var r,
        a = n || s;
      try {
        r = a(e || '');
      } catch (e) {
        r = {};
      }
      for (var i in t) {
        var o = t[i];
        r[i] = Array.isArray(o) ? o.slice() : o;
      }
      return r;
    }
    function s(e) {
      var t = {};
      return (e = e.trim().replace(/^(\?|#|&)/, ''))
        ? (e.split('&').forEach(function (e) {
            var n = e.replace(/\+/g, ' ').split('='),
              r = Pe(n.shift()),
              a = n.length > 0 ? Pe(n.join('=')) : null;
            void 0 === t[r] ? (t[r] = a) : Array.isArray(t[r]) ? t[r].push(a) : (t[r] = [t[r], a]);
          }),
          t)
        : t;
    }
    function u(e) {
      var t = e
        ? Object.keys(e)
            .map(function (t) {
              var n = e[t];
              if (void 0 === n) return '';
              if (null === n) return Ee(t);
              if (Array.isArray(n)) {
                var r = [];
                return (
                  n.forEach(function (e) {
                    void 0 !== e && (null === e ? r.push(Ee(t)) : r.push(Ee(t) + '=' + Ee(e)));
                  }),
                  r.join('&')
                );
              }
              return Ee(t) + '=' + Ee(n);
            })
            .filter(function (e) {
              return e.length > 0;
            })
            .join('&')
        : null;
      return t ? '?' + t : '';
    }
    function d(e, t, n, r) {
      var a = r && r.options.stringifyQuery,
        i = {
          name: t.name || (e && e.name),
          meta: (e && e.meta) || {},
          path: t.path || '/',
          hash: t.hash || '',
          query: t.query || {},
          params: t.params || {},
          fullPath: l(t, a),
          matched: e ? c(e) : [],
        };
      return n && (i.redirectedFrom = l(n, a)), Object.freeze(i);
    }
    function c(e) {
      for (var t = []; e; ) t.unshift(e), (e = e.parent);
      return t;
    }
    function l(e, t) {
      var n = e.path,
        r = e.query;
      void 0 === r && (r = {});
      var a = e.hash;
      void 0 === a && (a = '');
      var i = t || u;
      return (n || '/') + i(r) + a;
    }
    function _(e, t) {
      return t === Ce
        ? e === t
        : !!t &&
            (e.path && t.path
              ? e.path.replace($e, '') === t.path.replace($e, '') && e.hash === t.hash && f(e.query, t.query)
              : !(!e.name || !t.name) &&
                e.name === t.name &&
                e.hash === t.hash &&
                f(e.query, t.query) &&
                f(e.params, t.params));
    }
    function f(e, t) {
      void 0 === e && (e = {}), void 0 === t && (t = {});
      var n = Object.keys(e),
        r = Object.keys(t);
      return (
        n.length === r.length &&
        n.every(function (n) {
          var r = e[n],
            a = t[n];
          return 'object' == typeof r && 'object' == typeof a ? f(r, a) : String(r) === String(a);
        })
      );
    }
    function m(e, t) {
      return (
        0 === e.path.replace($e, '/').indexOf(t.path.replace($e, '/')) &&
        (!t.hash || e.hash === t.hash) &&
        h(e.query, t.query)
      );
    }
    function h(e, t) {
      for (var n in t) if (!(n in e)) return !1;
      return !0;
    }
    function p(e) {
      if (
        !(
          e.metaKey ||
          e.altKey ||
          e.ctrlKey ||
          e.shiftKey ||
          e.defaultPrevented ||
          (void 0 !== e.button && 0 !== e.button)
        )
      ) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
          if (/\b_blank\b/i.test(e.currentTarget.getAttribute('target'))) return;
        }
        return e.preventDefault && e.preventDefault(), !0;
      }
    }
    function y(e) {
      if (e)
        for (var t, n = 0; n < e.length; n++) {
          if (((t = e[n]), 'a' === t.tag)) return t;
          if (t.children && (t = y(t.children))) return t;
        }
    }
    function v(e) {
      if (!v.installed) {
        (v.installed = !0), (je = e);
        var t = function (e) {
            return void 0 !== e;
          },
          n = function (e, n) {
            var r = e.$options._parentVnode;
            t(r) && t((r = r.data)) && t((r = r.registerRouteInstance)) && r(e, n);
          };
        e.mixin({
          beforeCreate: function () {
            t(this.$options.router)
              ? ((this._routerRoot = this),
                (this._router = this.$options.router),
                this._router.init(this),
                e.util.defineReactive(this, '_route', this._router.history.current))
              : (this._routerRoot = (this.$parent && this.$parent._routerRoot) || this),
              n(this, this);
          },
          destroyed: function () {
            n(this);
          },
        }),
          Object.defineProperty(e.prototype, '$router', {
            get: function () {
              return this._routerRoot._router;
            },
          }),
          Object.defineProperty(e.prototype, '$route', {
            get: function () {
              return this._routerRoot._route;
            },
          }),
          e.component('router-view', xe),
          e.component('router-link', Ie);
        var r = e.config.optionMergeStrategies;
        r.beforeRouteEnter = r.beforeRouteLeave = r.beforeRouteUpdate = r.created;
      }
    }
    function M(e, t, n) {
      var r = e.charAt(0);
      if ('/' === r) return e;
      if ('?' === r || '#' === r) return t + e;
      var a = t.split('/');
      (n && a[a.length - 1]) || a.pop();
      for (var i = e.replace(/^\//, '').split('/'), o = 0; o < i.length; o++) {
        var s = i[o];
        '..' === s ? a.pop() : '.' !== s && a.push(s);
      }
      return '' !== a[0] && a.unshift(''), a.join('/');
    }
    function g(e) {
      var t = '',
        n = '',
        r = e.indexOf('#');
      r >= 0 && ((t = e.slice(r)), (e = e.slice(0, r)));
      var a = e.indexOf('?');
      return a >= 0 && ((n = e.slice(a + 1)), (e = e.slice(0, a))), { path: e, query: n, hash: t };
    }
    function L(e) {
      return e.replace(/\/\//g, '/');
    }
    function Y(e, t) {
      for (var n, r = [], a = 0, i = 0, o = '', s = (t && t.delimiter) || '/'; null != (n = qe.exec(e)); ) {
        var u = n[0],
          d = n[1],
          c = n.index;
        if (((o += e.slice(i, c)), (i = c + u.length), d)) o += d[1];
        else {
          var l = e[i],
            _ = n[2],
            f = n[3],
            m = n[4],
            h = n[5],
            p = n[6],
            y = n[7];
          o && (r.push(o), (o = ''));
          var v = null != _ && null != l && l !== _,
            M = '+' === p || '*' === p,
            g = '?' === p || '*' === p,
            L = n[2] || s,
            Y = m || h;
          r.push({
            name: f || a++,
            prefix: _ || '',
            delimiter: L,
            optional: g,
            repeat: M,
            partial: v,
            asterisk: !!y,
            pattern: Y ? S(Y) : y ? '.*' : '[^' + T(L) + ']+?',
          });
        }
      }
      return i < e.length && (o += e.substr(i)), o && r.push(o), r;
    }
    function k(e, t) {
      return D(Y(e, t));
    }
    function b(e) {
      return encodeURI(e).replace(/[\/?#]/g, function (e) {
        return '%' + e.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function w(e) {
      return encodeURI(e).replace(/[?#]/g, function (e) {
        return '%' + e.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function D(e) {
      for (var t = new Array(e.length), n = 0; n < e.length; n++)
        'object' == typeof e[n] && (t[n] = new RegExp('^(?:' + e[n].pattern + ')$'));
      return function (n, r) {
        for (var a = '', i = n || {}, o = r || {}, s = o.pretty ? b : encodeURIComponent, u = 0; u < e.length; u++) {
          var d = e[u];
          if ('string' != typeof d) {
            var c,
              l = i[d.name];
            if (null == l) {
              if (d.optional) {
                d.partial && (a += d.prefix);
                continue;
              }
              throw new TypeError('Expected "' + d.name + '" to be defined');
            }
            if (Ne(l)) {
              if (!d.repeat)
                throw new TypeError(
                  'Expected "' + d.name + '" to not repeat, but received `' + JSON.stringify(l) + '`'
                );
              if (0 === l.length) {
                if (d.optional) continue;
                throw new TypeError('Expected "' + d.name + '" to not be empty');
              }
              for (var _ = 0; _ < l.length; _++) {
                if (((c = s(l[_])), !t[u].test(c)))
                  throw new TypeError(
                    'Expected all "' +
                      d.name +
                      '" to match "' +
                      d.pattern +
                      '", but received `' +
                      JSON.stringify(c) +
                      '`'
                  );
                a += (0 === _ ? d.prefix : d.delimiter) + c;
              }
            } else {
              if (((c = d.asterisk ? w(l) : s(l)), !t[u].test(c)))
                throw new TypeError('Expected "' + d.name + '" to match "' + d.pattern + '", but received "' + c + '"');
              a += d.prefix + c;
            }
          } else a += d;
        }
        return a;
      };
    }
    function T(e) {
      return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
    }
    function S(e) {
      return e.replace(/([=!:$\/()])/g, '\\$1');
    }
    function j(e, t) {
      return (e.keys = t), e;
    }
    function x(e) {
      return e.sensitive ? '' : 'i';
    }
    function H(e, t) {
      var n = e.source.match(/\((?!\?)/g);
      if (n)
        for (var r = 0; r < n.length; r++)
          t.push({
            name: r,
            prefix: null,
            delimiter: null,
            optional: !1,
            repeat: !1,
            partial: !1,
            asterisk: !1,
            pattern: null,
          });
      return j(e, t);
    }
    function O(e, t, n) {
      for (var r = [], a = 0; a < e.length; a++) r.push(P(e[a], t, n).source);
      return j(new RegExp('(?:' + r.join('|') + ')', x(n)), t);
    }
    function A(e, t, n) {
      return E(Y(e, n), t, n);
    }
    function E(e, t, n) {
      Ne(t) || ((n = t || n), (t = [])), (n = n || {});
      for (var r = n.strict, a = !1 !== n.end, i = '', o = 0; o < e.length; o++) {
        var s = e[o];
        if ('string' == typeof s) i += T(s);
        else {
          var u = T(s.prefix),
            d = '(?:' + s.pattern + ')';
          t.push(s),
            s.repeat && (d += '(?:' + u + d + ')*'),
            (d = s.optional ? (s.partial ? u + '(' + d + ')?' : '(?:' + u + '(' + d + '))?') : u + '(' + d + ')'),
            (i += d);
        }
      }
      var c = T(n.delimiter || '/'),
        l = i.slice(-c.length) === c;
      return (
        r || (i = (l ? i.slice(0, -c.length) : i) + '(?:' + c + '(?=$))?'),
        (i += a ? '$' : r && l ? '' : '(?=' + c + '|$)'),
        j(new RegExp('^' + i, x(n)), t)
      );
    }
    function P(e, t, n) {
      return (
        Ne(t) || ((n = t || n), (t = [])),
        (n = n || {}),
        e instanceof RegExp ? H(e, t) : Ne(e) ? O(e, t, n) : A(e, t, n)
      );
    }
    function $(e, t, n) {
      try {
        return (Be[e] || (Be[e] = ze.compile(e)))(t || {}, { pretty: !0 });
      } catch (e) {
        return '';
      }
    }
    function C(e, t, n, r) {
      var a = t || [],
        i = n || Object.create(null),
        o = r || Object.create(null);
      e.forEach(function (e) {
        F(a, i, o, e);
      });
      for (var s = 0, u = a.length; s < u; s++) '*' === a[s] && (a.push(a.splice(s, 1)[0]), u--, s--);
      return { pathList: a, pathMap: i, nameMap: o };
    }
    function F(e, t, n, r, a, i) {
      var o = r.path,
        s = r.name,
        u = I(o, a),
        d = r.pathToRegexpOptions || {};
      'boolean' == typeof r.caseSensitive && (d.sensitive = r.caseSensitive);
      var c = {
        path: u,
        regex: W(u, d),
        components: r.components || { default: r.component },
        instances: {},
        name: s,
        parent: a,
        matchAs: i,
        redirect: r.redirect,
        beforeEnter: r.beforeEnter,
        meta: r.meta || {},
        props: null == r.props ? {} : r.components ? r.props : { default: r.props },
      };
      if (
        (r.children &&
          r.children.forEach(function (r) {
            var a = i ? L(i + '/' + r.path) : void 0;
            F(e, t, n, r, c, a);
          }),
        void 0 !== r.alias)
      ) {
        (Array.isArray(r.alias) ? r.alias : [r.alias]).forEach(function (i) {
          var o = { path: i, children: r.children };
          F(e, t, n, o, a, c.path || '/');
        });
      }
      t[c.path] || (e.push(c.path), (t[c.path] = c)), s && (n[s] || (n[s] = c));
    }
    function W(e, t) {
      var n = ze(e, [], t);
      return n;
    }
    function I(e, t) {
      return (e = e.replace(/\/$/, '')), '/' === e[0] ? e : null == t ? e : L(t.path + '/' + e);
    }
    function R(e, t, n, r) {
      var a = 'string' == typeof e ? { path: e } : e;
      if (a.name || a._normalized) return a;
      if (!a.path && a.params && t) {
        (a = N({}, a)), (a._normalized = !0);
        var i = N(N({}, t.params), a.params);
        if (t.name) (a.name = t.name), (a.params = i);
        else if (t.matched.length) {
          var s = t.matched[t.matched.length - 1].path;
          a.path = $(s, i, 'path ' + t.path);
        }
        return a;
      }
      var u = g(a.path || ''),
        d = (t && t.path) || '/',
        c = u.path ? M(u.path, d, n || a.append) : d,
        l = o(u.query, a.query, r && r.options.parseQuery),
        _ = a.hash || u.hash;
      return _ && '#' !== _.charAt(0) && (_ = '#' + _), { _normalized: !0, path: c, query: l, hash: _ };
    }
    function N(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function z(e, t) {
      function n(e) {
        C(e, u, c, l);
      }
      function r(e, n, r) {
        var a = R(e, n, !1, t),
          i = a.name;
        if (i) {
          var s = l[i];
          if (!s) return o(null, a);
          var d = s.regex.keys
            .filter(function (e) {
              return !e.optional;
            })
            .map(function (e) {
              return e.name;
            });
          if (('object' != typeof a.params && (a.params = {}), n && 'object' == typeof n.params))
            for (var _ in n.params) !(_ in a.params) && d.indexOf(_) > -1 && (a.params[_] = n.params[_]);
          if (s) return (a.path = $(s.path, a.params, 'named route "' + i + '"')), o(s, a, r);
        } else if (a.path) {
          a.params = {};
          for (var f = 0; f < u.length; f++) {
            var m = u[f],
              h = c[m];
            if (J(h.regex, a.path, a.params)) return o(h, a, r);
          }
        }
        return o(null, a);
      }
      function a(e, n) {
        var a = e.redirect,
          i = 'function' == typeof a ? a(d(e, n, null, t)) : a;
        if (('string' == typeof i && (i = { path: i }), !i || 'object' != typeof i)) return o(null, n);
        var s = i,
          u = s.name,
          c = s.path,
          _ = n.query,
          f = n.hash,
          m = n.params;
        if (
          ((_ = s.hasOwnProperty('query') ? s.query : _),
          (f = s.hasOwnProperty('hash') ? s.hash : f),
          (m = s.hasOwnProperty('params') ? s.params : m),
          u)
        ) {
          l[u];
          return r({ _normalized: !0, name: u, query: _, hash: f, params: m }, void 0, n);
        }
        if (c) {
          var h = U(c, e);
          return r(
            { _normalized: !0, path: $(h, m, 'redirect route with path "' + h + '"'), query: _, hash: f },
            void 0,
            n
          );
        }
        return o(null, n);
      }
      function i(e, t, n) {
        var a = $(n, t.params, 'aliased route with path "' + n + '"'),
          i = r({ _normalized: !0, path: a });
        if (i) {
          var s = i.matched,
            u = s[s.length - 1];
          return (t.params = i.params), o(u, t);
        }
        return o(null, t);
      }
      function o(e, n, r) {
        return e && e.redirect ? a(e, r || n) : e && e.matchAs ? i(e, n, e.matchAs) : d(e, n, r, t);
      }
      var s = C(e),
        u = s.pathList,
        c = s.pathMap,
        l = s.nameMap;
      return { match: r, addRoutes: n };
    }
    function J(e, t, n) {
      var r = t.match(e);
      if (!r) return !1;
      if (!n) return !0;
      for (var a = 1, i = r.length; a < i; ++a) {
        var o = e.keys[a - 1],
          s = 'string' == typeof r[a] ? decodeURIComponent(r[a]) : r[a];
        o && (n[o.name] = s);
      }
      return !0;
    }
    function U(e, t) {
      return M(e, t.parent ? t.parent.path : '/', !0);
    }
    function V() {
      window.addEventListener('popstate', function (e) {
        q(), e.state && e.state.key && re(e.state.key);
      });
    }
    function G(e, t, n, r) {
      if (e.app) {
        var a = e.options.scrollBehavior;
        a &&
          e.app.$nextTick(function () {
            var e = B(),
              i = a(t, n, r ? e : null);
            if (i) {
              var o = 'object' == typeof i;
              if (o && 'string' == typeof i.selector) {
                var s = document.querySelector(i.selector);
                if (s) {
                  var u = i.offset && 'object' == typeof i.offset ? i.offset : {};
                  (u = X(u)), (e = K(s, u));
                } else Z(i) && (e = Q(i));
              } else o && Z(i) && (e = Q(i));
              e && window.scrollTo(e.x, e.y);
            }
          });
      }
    }
    function q() {
      var e = ne();
      e && (Ke[e] = { x: window.pageXOffset, y: window.pageYOffset });
    }
    function B() {
      var e = ne();
      if (e) return Ke[e];
    }
    function K(e, t) {
      var n = document.documentElement,
        r = n.getBoundingClientRect(),
        a = e.getBoundingClientRect();
      return { x: a.left - r.left - t.x, y: a.top - r.top - t.y };
    }
    function Z(e) {
      return ee(e.x) || ee(e.y);
    }
    function Q(e) {
      return { x: ee(e.x) ? e.x : window.pageXOffset, y: ee(e.y) ? e.y : window.pageYOffset };
    }
    function X(e) {
      return { x: ee(e.x) ? e.x : 0, y: ee(e.y) ? e.y : 0 };
    }
    function ee(e) {
      return 'number' == typeof e;
    }
    function te() {
      return Qe.now().toFixed(3);
    }
    function ne() {
      return Xe;
    }
    function re(e) {
      Xe = e;
    }
    function ae(e, t) {
      q();
      var n = window.history;
      try {
        t ? n.replaceState({ key: Xe }, '', e) : ((Xe = te()), n.pushState({ key: Xe }, '', e));
      } catch (n) {
        window.location[t ? 'replace' : 'assign'](e);
      }
    }
    function ie(e) {
      ae(e, !0);
    }
    function oe(e, t, n) {
      var r = function (a) {
        a >= e.length
          ? n()
          : e[a]
            ? t(e[a], function () {
                r(a + 1);
              })
            : r(a + 1);
      };
      r(0);
    }
    function se(e) {
      return function (t, n, r) {
        var i = !1,
          o = 0,
          s = null;
        ue(e, function (e, t, n, u) {
          if ('function' == typeof e && void 0 === e.cid) {
            (i = !0), o++;
            var d,
              c = ce(function (t) {
                t.__esModule && t.default && (t = t.default),
                  (e.resolved = 'function' == typeof t ? t : je.extend(t)),
                  (n.components[u] = t),
                  --o <= 0 && r();
              }),
              l = ce(function (e) {
                var t = 'Failed to resolve async component ' + u + ': ' + e;
                s || ((s = a(e) ? e : new Error(t)), r(s));
              });
            try {
              d = e(c, l);
            } catch (e) {
              l(e);
            }
            if (d)
              if ('function' == typeof d.then) d.then(c, l);
              else {
                var _ = d.component;
                _ && 'function' == typeof _.then && _.then(c, l);
              }
          }
        }),
          i || r();
      };
    }
    function ue(e, t) {
      return de(
        e.map(function (e) {
          return Object.keys(e.components).map(function (n) {
            return t(e.components[n], e.instances[n], e, n);
          });
        })
      );
    }
    function de(e) {
      return Array.prototype.concat.apply([], e);
    }
    function ce(e) {
      var t = !1;
      return function () {
        for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
        if (!t) return (t = !0), e.apply(this, n);
      };
    }
    function le(e) {
      if (!e)
        if (Re) {
          var t = document.querySelector('base');
          (e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^https?:\/\/[^\/]+/, ''));
        } else e = '/';
      return '/' !== e.charAt(0) && (e = '/' + e), e.replace(/\/$/, '');
    }
    function _e(e, t) {
      var n,
        r = Math.max(e.length, t.length);
      for (n = 0; n < r && e[n] === t[n]; n++);
      return { updated: t.slice(0, n), activated: t.slice(n), deactivated: e.slice(n) };
    }
    function fe(e, t, n, r) {
      var a = ue(e, function (e, r, a, i) {
        var o = me(e, t);
        if (o)
          return Array.isArray(o)
            ? o.map(function (e) {
                return n(e, r, a, i);
              })
            : n(o, r, a, i);
      });
      return de(r ? a.reverse() : a);
    }
    function me(e, t) {
      return 'function' != typeof e && (e = je.extend(e)), e.options[t];
    }
    function he(e) {
      return fe(e, 'beforeRouteLeave', ye, !0);
    }
    function pe(e) {
      return fe(e, 'beforeRouteUpdate', ye);
    }
    function ye(e, t) {
      if (t)
        return function () {
          return e.apply(t, arguments);
        };
    }
    function ve(e, t, n) {
      return fe(e, 'beforeRouteEnter', function (e, r, a, i) {
        return Me(e, a, i, t, n);
      });
    }
    function Me(e, t, n, r, a) {
      return function (i, o, s) {
        return e(i, o, function (e) {
          s(e),
            'function' == typeof e &&
              r.push(function () {
                ge(e, t.instances, n, a);
              });
        });
      };
    }
    function ge(e, t, n, r) {
      t[n]
        ? e(t[n])
        : r() &&
          setTimeout(function () {
            ge(e, t, n, r);
          }, 16);
    }
    function Le(e) {
      var t = window.location.pathname;
      return (
        e && 0 === t.indexOf(e) && (t = t.slice(e.length)), (t || '/') + window.location.search + window.location.hash
      );
    }
    function Ye(e) {
      var t = Le(e);
      if (!/^\/#/.test(t)) return window.location.replace(L(e + '/#' + t)), !0;
    }
    function ke() {
      var e = be();
      return '/' === e.charAt(0) || (De('/' + e), !1);
    }
    function be() {
      var e = window.location.href,
        t = e.indexOf('#');
      return -1 === t ? '' : e.slice(t + 1);
    }
    function we(e) {
      window.location.hash = e;
    }
    function De(e) {
      var t = window.location.href,
        n = t.indexOf('#'),
        r = n >= 0 ? t.slice(0, n) : t;
      window.location.replace(r + '#' + e);
    }
    function Te(e, t) {
      return (
        e.push(t),
        function () {
          var n = e.indexOf(t);
          n > -1 && e.splice(n, 1);
        }
      );
    }
    function Se(e, t, n) {
      var r = 'hash' === n ? '#' + t : t;
      return e ? L(e + '/' + r) : r;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var je,
      xe = {
        name: 'router-view',
        functional: !0,
        props: { name: { type: String, default: 'default' } },
        render: function (e, t) {
          var n = t.props,
            r = t.children,
            a = t.parent,
            o = t.data;
          o.routerView = !0;
          for (
            var s = a.$createElement,
              u = n.name,
              d = a.$route,
              c = a._routerViewCache || (a._routerViewCache = {}),
              l = 0,
              _ = !1;
            a && a._routerRoot !== a;

          )
            a.$vnode && a.$vnode.data.routerView && l++, a._inactive && (_ = !0), (a = a.$parent);
          if (((o.routerViewDepth = l), _)) return s(c[u], o, r);
          var f = d.matched[l];
          if (!f) return (c[u] = null), s();
          var m = (c[u] = f.components[u]);
          return (
            (o.registerRouteInstance = function (e, t) {
              var n = f.instances[u];
              ((t && n !== e) || (!t && n === e)) && (f.instances[u] = t);
            }),
            ((o.hook || (o.hook = {})).prepatch = function (e, t) {
              f.instances[u] = t.componentInstance;
            }),
            (o.props = i(d, f.props && f.props[u])),
            s(m, o, r)
          );
        },
      },
      He = /[!'()*]/g,
      Oe = function (e) {
        return '%' + e.charCodeAt(0).toString(16);
      },
      Ae = /%2C/g,
      Ee = function (e) {
        return encodeURIComponent(e).replace(He, Oe).replace(Ae, ',');
      },
      Pe = decodeURIComponent,
      $e = /\/?$/,
      Ce = d(null, { path: '/' }),
      Fe = [String, Object],
      We = [String, Array],
      Ie = {
        name: 'router-link',
        props: {
          to: { type: Fe, required: !0 },
          tag: { type: String, default: 'a' },
          exact: Boolean,
          append: Boolean,
          replace: Boolean,
          activeClass: String,
          exactActiveClass: String,
          event: { type: We, default: 'click' },
        },
        render: function (e) {
          var t = this,
            n = this.$router,
            r = this.$route,
            a = n.resolve(this.to, r, this.append),
            i = a.location,
            o = a.route,
            s = a.href,
            u = {},
            c = n.options.linkActiveClass,
            l = n.options.linkExactActiveClass,
            f = null == c ? 'router-link-active' : c,
            h = null == l ? 'router-link-exact-active' : l,
            v = null == this.activeClass ? f : this.activeClass,
            M = null == this.exactActiveClass ? h : this.exactActiveClass,
            g = i.path ? d(null, i, null, n) : o;
          (u[M] = _(r, g)), (u[v] = this.exact ? u[M] : m(r, g));
          var L = function (e) {
              p(e) && (t.replace ? n.replace(i) : n.push(i));
            },
            Y = { click: p };
          Array.isArray(this.event)
            ? this.event.forEach(function (e) {
                Y[e] = L;
              })
            : (Y[this.event] = L);
          var k = { class: u };
          if ('a' === this.tag) (k.on = Y), (k.attrs = { href: s });
          else {
            var b = y(this.$slots.default);
            if (b) {
              b.isStatic = !1;
              var w = je.util.extend;
              (b.data = w({}, b.data)).on = Y;
              (b.data.attrs = w({}, b.data.attrs)).href = s;
            } else k.on = Y;
          }
          return e(this.tag, k, this.$slots.default);
        },
      },
      Re = 'undefined' != typeof window,
      Ne =
        Array.isArray ||
        function (e) {
          return '[object Array]' == Object.prototype.toString.call(e);
        },
      ze = P,
      Je = Y,
      Ue = k,
      Ve = D,
      Ge = E,
      qe = new RegExp(
        [
          '(\\\\.)',
          '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
        ].join('|'),
        'g'
      );
    (ze.parse = Je), (ze.compile = Ue), (ze.tokensToFunction = Ve), (ze.tokensToRegExp = Ge);
    var Be = Object.create(null),
      Ke = Object.create(null),
      Ze =
        Re &&
        (function () {
          var e = window.navigator.userAgent;
          return (
            ((-1 === e.indexOf('Android 2.') && -1 === e.indexOf('Android 4.0')) ||
              -1 === e.indexOf('Mobile Safari') ||
              -1 !== e.indexOf('Chrome') ||
              -1 !== e.indexOf('Windows Phone')) &&
            window.history &&
            'pushState' in window.history
          );
        })(),
      Qe = Re && window.performance && window.performance.now ? window.performance : Date,
      Xe = te(),
      et = function (e, t) {
        (this.router = e),
          (this.base = le(t)),
          (this.current = Ce),
          (this.pending = null),
          (this.ready = !1),
          (this.readyCbs = []),
          (this.readyErrorCbs = []),
          (this.errorCbs = []);
      };
    (et.prototype.listen = function (e) {
      this.cb = e;
    }),
      (et.prototype.onReady = function (e, t) {
        this.ready ? e() : (this.readyCbs.push(e), t && this.readyErrorCbs.push(t));
      }),
      (et.prototype.onError = function (e) {
        this.errorCbs.push(e);
      }),
      (et.prototype.transitionTo = function (e, t, n) {
        var r = this,
          a = this.router.match(e, this.current);
        this.confirmTransition(
          a,
          function () {
            r.updateRoute(a),
              t && t(a),
              r.ensureURL(),
              r.ready ||
                ((r.ready = !0),
                r.readyCbs.forEach(function (e) {
                  e(a);
                }));
          },
          function (e) {
            n && n(e),
              e &&
                !r.ready &&
                ((r.ready = !0),
                r.readyErrorCbs.forEach(function (t) {
                  t(e);
                }));
          }
        );
      }),
      (et.prototype.confirmTransition = function (e, t, n) {
        var i = this,
          o = this.current,
          s = function (e) {
            a(e) &&
              (i.errorCbs.length
                ? i.errorCbs.forEach(function (t) {
                    t(e);
                  })
                : (r(!1, 'uncaught error during route navigation:'), console.error(e))),
              n && n(e);
          };
        if (_(e, o) && e.matched.length === o.matched.length) return this.ensureURL(), s();
        var u = _e(this.current.matched, e.matched),
          d = u.updated,
          c = u.deactivated,
          l = u.activated,
          f = [].concat(
            he(c),
            this.router.beforeHooks,
            pe(d),
            l.map(function (e) {
              return e.beforeEnter;
            }),
            se(l)
          );
        this.pending = e;
        var m = function (t, n) {
          if (i.pending !== e) return s();
          try {
            t(e, o, function (e) {
              !1 === e || a(e)
                ? (i.ensureURL(!0), s(e))
                : 'string' == typeof e ||
                    ('object' == typeof e && ('string' == typeof e.path || 'string' == typeof e.name))
                  ? (s(), 'object' == typeof e && e.replace ? i.replace(e) : i.push(e))
                  : n(e);
            });
          } catch (e) {
            s(e);
          }
        };
        oe(f, m, function () {
          var n = [];
          oe(
            ve(l, n, function () {
              return i.current === e;
            }).concat(i.router.resolveHooks),
            m,
            function () {
              if (i.pending !== e) return s();
              (i.pending = null),
                t(e),
                i.router.app &&
                  i.router.app.$nextTick(function () {
                    n.forEach(function (e) {
                      e();
                    });
                  });
            }
          );
        });
      }),
      (et.prototype.updateRoute = function (e) {
        var t = this.current;
        (this.current = e),
          this.cb && this.cb(e),
          this.router.afterHooks.forEach(function (n) {
            n && n(e, t);
          });
      });
    var tt = (function (e) {
        function t(t, n) {
          var r = this;
          e.call(this, t, n);
          var a = t.options.scrollBehavior;
          a && V(),
            window.addEventListener('popstate', function (e) {
              var n = r.current;
              r.transitionTo(Le(r.base), function (e) {
                a && G(t, e, n, !0);
              });
            });
        }
        return (
          e && (t.__proto__ = e),
          (t.prototype = Object.create(e && e.prototype)),
          (t.prototype.constructor = t),
          (t.prototype.go = function (e) {
            window.history.go(e);
          }),
          (t.prototype.push = function (e, t, n) {
            var r = this,
              a = this,
              i = a.current;
            this.transitionTo(
              e,
              function (e) {
                ae(L(r.base + e.fullPath)), G(r.router, e, i, !1), t && t(e);
              },
              n
            );
          }),
          (t.prototype.replace = function (e, t, n) {
            var r = this,
              a = this,
              i = a.current;
            this.transitionTo(
              e,
              function (e) {
                ie(L(r.base + e.fullPath)), G(r.router, e, i, !1), t && t(e);
              },
              n
            );
          }),
          (t.prototype.ensureURL = function (e) {
            if (Le(this.base) !== this.current.fullPath) {
              var t = L(this.base + this.current.fullPath);
              e ? ae(t) : ie(t);
            }
          }),
          (t.prototype.getCurrentLocation = function () {
            return Le(this.base);
          }),
          t
        );
      })(et),
      nt = (function (e) {
        function t(t, n, r) {
          e.call(this, t, n), (r && Ye(this.base)) || ke();
        }
        return (
          e && (t.__proto__ = e),
          (t.prototype = Object.create(e && e.prototype)),
          (t.prototype.constructor = t),
          (t.prototype.setupListeners = function () {
            var e = this;
            window.addEventListener('hashchange', function () {
              ke() &&
                e.transitionTo(be(), function (e) {
                  De(e.fullPath);
                });
            });
          }),
          (t.prototype.push = function (e, t, n) {
            this.transitionTo(
              e,
              function (e) {
                we(e.fullPath), t && t(e);
              },
              n
            );
          }),
          (t.prototype.replace = function (e, t, n) {
            this.transitionTo(
              e,
              function (e) {
                De(e.fullPath), t && t(e);
              },
              n
            );
          }),
          (t.prototype.go = function (e) {
            window.history.go(e);
          }),
          (t.prototype.ensureURL = function (e) {
            var t = this.current.fullPath;
            be() !== t && (e ? we(t) : De(t));
          }),
          (t.prototype.getCurrentLocation = function () {
            return be();
          }),
          t
        );
      })(et),
      rt = (function (e) {
        function t(t, n) {
          e.call(this, t, n), (this.stack = []), (this.index = -1);
        }
        return (
          e && (t.__proto__ = e),
          (t.prototype = Object.create(e && e.prototype)),
          (t.prototype.constructor = t),
          (t.prototype.push = function (e, t, n) {
            var r = this;
            this.transitionTo(
              e,
              function (e) {
                (r.stack = r.stack.slice(0, r.index + 1).concat(e)), r.index++, t && t(e);
              },
              n
            );
          }),
          (t.prototype.replace = function (e, t, n) {
            var r = this;
            this.transitionTo(
              e,
              function (e) {
                (r.stack = r.stack.slice(0, r.index).concat(e)), t && t(e);
              },
              n
            );
          }),
          (t.prototype.go = function (e) {
            var t = this,
              n = this.index + e;
            if (!(n < 0 || n >= this.stack.length)) {
              var r = this.stack[n];
              this.confirmTransition(r, function () {
                (t.index = n), t.updateRoute(r);
              });
            }
          }),
          (t.prototype.getCurrentLocation = function () {
            var e = this.stack[this.stack.length - 1];
            return e ? e.fullPath : '/';
          }),
          (t.prototype.ensureURL = function () {}),
          t
        );
      })(et),
      at = function (e) {
        void 0 === e && (e = {}),
          (this.app = null),
          (this.apps = []),
          (this.options = e),
          (this.beforeHooks = []),
          (this.resolveHooks = []),
          (this.afterHooks = []),
          (this.matcher = z(e.routes || [], this));
        var t = e.mode || 'hash';
        switch (
          ((this.fallback = 'history' === t && !Ze && !1 !== e.fallback),
          this.fallback && (t = 'hash'),
          Re || (t = 'abstract'),
          (this.mode = t),
          t)
        ) {
          case 'history':
            this.history = new tt(this, e.base);
            break;
          case 'hash':
            this.history = new nt(this, e.base, this.fallback);
            break;
          case 'abstract':
            this.history = new rt(this, e.base);
        }
      },
      it = { currentRoute: {} };
    (at.prototype.match = function (e, t, n) {
      return this.matcher.match(e, t, n);
    }),
      (it.currentRoute.get = function () {
        return this.history && this.history.current;
      }),
      (at.prototype.init = function (e) {
        var t = this;
        if ((this.apps.push(e), !this.app)) {
          this.app = e;
          var n = this.history;
          if (n instanceof tt) n.transitionTo(n.getCurrentLocation());
          else if (n instanceof nt) {
            var r = function () {
              n.setupListeners();
            };
            n.transitionTo(n.getCurrentLocation(), r, r);
          }
          n.listen(function (e) {
            t.apps.forEach(function (t) {
              t._route = e;
            });
          });
        }
      }),
      (at.prototype.beforeEach = function (e) {
        return Te(this.beforeHooks, e);
      }),
      (at.prototype.beforeResolve = function (e) {
        return Te(this.resolveHooks, e);
      }),
      (at.prototype.afterEach = function (e) {
        return Te(this.afterHooks, e);
      }),
      (at.prototype.onReady = function (e, t) {
        this.history.onReady(e, t);
      }),
      (at.prototype.onError = function (e) {
        this.history.onError(e);
      }),
      (at.prototype.push = function (e, t, n) {
        this.history.push(e, t, n);
      }),
      (at.prototype.replace = function (e, t, n) {
        this.history.replace(e, t, n);
      }),
      (at.prototype.go = function (e) {
        this.history.go(e);
      }),
      (at.prototype.back = function () {
        this.go(-1);
      }),
      (at.prototype.forward = function () {
        this.go(1);
      }),
      (at.prototype.getMatchedComponents = function (e) {
        var t = e ? (e.matched ? e : this.resolve(e).route) : this.currentRoute;
        return t
          ? [].concat.apply(
              [],
              t.matched.map(function (e) {
                return Object.keys(e.components).map(function (t) {
                  return e.components[t];
                });
              })
            )
          : [];
      }),
      (at.prototype.resolve = function (e, t, n) {
        var r = R(e, t || this.history.current, n, this),
          a = this.match(r, t),
          i = a.redirectedFrom || a.fullPath;
        return { location: r, route: a, href: Se(this.history.base, i, this.mode), normalizedTo: r, resolved: a };
      }),
      (at.prototype.addRoutes = function (e) {
        this.matcher.addRoutes(e),
          this.history.current !== Ce && this.history.transitionTo(this.history.getCurrentLocation());
      }),
      Object.defineProperties(at.prototype, it),
      (at.install = v),
      (at.version = '2.7.0'),
      Re && window.Vue && window.Vue.use(at),
      (t.default = at);
  },
  function (e, t, n) {
    'use strict';
    function r(e) {
      return null !== e && 'object' == typeof e;
    }
    function a(e) {
      return k.call(e) === b;
    }
    function i(e) {
      return null === e || void 0 === e;
    }
    function o() {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
      var n = null,
        a = null;
      return (
        1 === e.length
          ? r(e[0]) || Array.isArray(e[0])
            ? (a = e[0])
            : 'string' == typeof e[0] && (n = e[0])
          : 2 === e.length && ('string' == typeof e[0] && (n = e[0]), (r(e[1]) || Array.isArray(e[1])) && (a = e[1])),
        { locale: n, params: a }
      );
    }
    function s(e) {
      return e ? (e > 1 ? 1 : 0) : 1;
    }
    function u(e, t) {
      return (e = Math.abs(e)), 2 === t ? s(e) : e ? Math.min(e, 2) : 0;
    }
    function d(e, t) {
      if (!e && 'string' != typeof e) return null;
      var n = e.split('|');
      return (t = u(t, n.length)), n[t] ? n[t].trim() : e;
    }
    function c(e) {
      return JSON.parse(JSON.stringify(e));
    }
    function l(e, t) {
      if (e.length) {
        var n = e.indexOf(t);
        if (n > -1) return e.splice(n, 1);
      }
    }
    function _(e) {
      (e.prototype.$t = function (e) {
        for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
        var r = this.$i18n;
        return r._t.apply(r, [e, r.locale, r._getMessages(), this].concat(t));
      }),
        (e.prototype.$tc = function (e, t) {
          for (var n = [], r = arguments.length - 2; r-- > 0; ) n[r] = arguments[r + 2];
          var a = this.$i18n;
          return a._tc.apply(a, [e, a.locale, a._getMessages(), this, t].concat(n));
        }),
        (e.prototype.$te = function (e, t) {
          var n = this.$i18n;
          return n._te(e, n.locale, n._getMessages(), t);
        }),
        (e.prototype.$d = function (e) {
          for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
          return (r = this.$i18n).d.apply(r, [e].concat(t));
          var r;
        }),
        (e.prototype.$n = function (e) {
          for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
          return (r = this.$i18n).n.apply(r, [e].concat(t));
          var r;
        });
    }
    function f(e) {
      Y = e;
      Y.version && Number(Y.version.split('.')[0]);
      (f.installed = !0),
        Object.defineProperty(Y.prototype, '$i18n', {
          get: function () {
            return this._i18n;
          },
        }),
        _(Y),
        Y.mixin(T),
        Y.component(S.name, S);
      var t = Y.config.optionMergeStrategies;
      t.i18n = t.methods;
    }
    function m(e) {
      for (var t = [], n = 0, r = ''; n < e.length; ) {
        var a = e[n++];
        if ('{' === a) {
          r && t.push({ type: 'text', value: r }), (r = '');
          var i = '';
          for (a = e[n++]; '}' !== a; ) (i += a), (a = e[n++]);
          var o = x.test(i) ? 'list' : H.test(i) ? 'named' : 'unknown';
          t.push({ value: i, type: o });
        } else '%' === a ? '{' !== e[n] && (r += a) : (r += a);
      }
      return r && t.push({ type: 'text', value: r }), t;
    }
    function h(e, t) {
      var n = [],
        a = 0,
        i = Array.isArray(t) ? 'list' : r(t) ? 'named' : 'unknown';
      if ('unknown' === i) return n;
      for (; a < e.length; ) {
        var o = e[a];
        switch (o.type) {
          case 'text':
            n.push(o.value);
            break;
          case 'list':
            'list' === i && n.push(t[parseInt(o.value, 10)]);
            break;
          case 'named':
            'named' === i && n.push(t[o.value]);
        }
        a++;
      }
      return n;
    }
    function p(e) {
      return z.test(e);
    }
    function y(e) {
      var t = e.charCodeAt(0);
      return t !== e.charCodeAt(e.length - 1) || (34 !== t && 39 !== t) ? e : e.slice(1, -1);
    }
    function v(e) {
      if (void 0 === e || null === e) return 'eof';
      var t = e.charCodeAt(0);
      switch (t) {
        case 91:
        case 93:
        case 46:
        case 34:
        case 39:
        case 48:
          return e;
        case 95:
        case 36:
        case 45:
          return 'ident';
        case 32:
        case 9:
        case 10:
        case 13:
        case 160:
        case 65279:
        case 8232:
        case 8233:
          return 'ws';
      }
      return (t >= 97 && t <= 122) || (t >= 65 && t <= 90) ? 'ident' : t >= 49 && t <= 57 ? 'number' : 'else';
    }
    function M(e) {
      var t = e.trim();
      return ('0' !== e.charAt(0) || !isNaN(e)) && (p(t) ? y(t) : '*' + t);
    }
    function g(e) {
      var t,
        n,
        r,
        a,
        i,
        o,
        s,
        u = [],
        d = -1,
        c = $,
        l = 0,
        _ = [];
      for (
        _[A] = function () {
          void 0 !== n && (u.push(n), (n = void 0));
        },
          _[O] = function () {
            void 0 === n ? (n = r) : (n += r);
          },
          _[E] = function () {
            _[O](), l++;
          },
          _[P] = function () {
            if (l > 0) l--, (c = C), _[O]();
            else {
              if (((l = 0), !1 === (n = M(n)))) return !1;
              _[A]();
            }
          };
        null !== c;

      )
        if (
          (d++,
          '\\' !== (t = e[d]) ||
            !(function () {
              var t = e[d + 1];
              if ((c === F && "'" === t) || (c === W && '"' === t)) return d++, (r = '\\' + t), _[O](), !0;
            })())
        ) {
          if (((a = v(t)), (s = N[c]), (i = s[a] || s.else || R) === R)) return;
          if (((c = i[0]), (o = _[i[1]]) && ((r = i[2]), (r = void 0 === r ? t : r), !1 === o()))) return;
          if (c === I) return u;
        }
    }
    function L(e) {
      return !!Array.isArray(e) && 0 === e.length;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var Y,
      k = Object.prototype.toString,
      b = '[object Object]',
      w = 'undefined' != typeof Intl && void 0 !== Intl.DateTimeFormat,
      D = 'undefined' != typeof Intl && void 0 !== Intl.NumberFormat,
      T = {
        beforeCreate: function () {
          var e = this.$options;
          if (((e.i18n = e.i18n || (e.__i18n ? {} : null)), e.i18n)) {
            if (e.i18n instanceof U) {
              if (e.__i18n)
                try {
                  var t = JSON.parse(e.__i18n);
                  Object.keys(t).forEach(function (n) {
                    e.i18n.mergeLocaleMessage(n, t[n]);
                  });
                } catch (e) {}
              (this._i18n = e.i18n),
                (this._i18nWatcher = this._i18n.watchI18nData()),
                this._i18n.subscribeDataChanging(this),
                (this._subscribing = !0);
            } else if (a(e.i18n)) {
              if (
                (this.$root &&
                  this.$root.$i18n &&
                  this.$root.$i18n instanceof U &&
                  ((e.i18n.root = this.$root.$i18n),
                  (e.i18n.fallbackLocale = this.$root.$i18n.fallbackLocale),
                  (e.i18n.silentTranslationWarn = this.$root.$i18n.silentTranslationWarn)),
                e.__i18n)
              )
                try {
                  e.i18n.messages = JSON.parse(e.__i18n);
                } catch (e) {}
              (this._i18n = new U(e.i18n)),
                (this._i18nWatcher = this._i18n.watchI18nData()),
                this._i18n.subscribeDataChanging(this),
                (this._subscribing = !0),
                (void 0 === e.i18n.sync || e.i18n.sync) && (this._localeWatcher = this.$i18n.watchLocale());
            }
          } else
            this.$root &&
              this.$root.$i18n &&
              this.$root.$i18n instanceof U &&
              ((this._i18n = this.$root.$i18n), this._i18n.subscribeDataChanging(this), (this._subscribing = !0));
        },
        beforeDestroy: function () {
          this._i18n &&
            (this._subscribing && (this._i18n.unsubscribeDataChanging(this), delete this._subscribing),
            this._i18nWatcher && (this._i18nWatcher(), delete this._i18nWatcher),
            this._localeWatcher && (this._localeWatcher(), delete this._localeWatcher),
            (this._i18n = null));
        },
      },
      S = {
        name: 'i18n',
        functional: !0,
        props: {
          tag: { type: String, default: 'span' },
          path: { type: String, required: !0 },
          locale: { type: String },
        },
        render: function (e, t) {
          var n = t.props,
            r = t.data,
            a = t.children,
            i = t.parent,
            o = i.$i18n;
          if (!o) return a;
          var s = n.path,
            u = n.locale,
            d = [];
          return (
            u && d.push(u),
            a.forEach(function (e) {
              return d.push(e);
            }),
            e(n.tag, r, o.i.apply(o, [s].concat(d)))
          );
        },
      },
      j = function () {
        this._caches = Object.create(null);
      };
    j.prototype.interpolate = function (e, t) {
      var n = this._caches[e];
      return n || ((n = m(e)), (this._caches[e] = n)), h(n, t);
    };
    var x = /^(\d)+/,
      H = /^(\w)+/,
      O = 0,
      A = 1,
      E = 2,
      P = 3,
      $ = 0,
      C = 4,
      F = 5,
      W = 6,
      I = 7,
      R = 8,
      N = [];
    (N[$] = { ws: [$], ident: [3, O], '[': [C], eof: [I] }),
      (N[1] = { ws: [1], '.': [2], '[': [C], eof: [I] }),
      (N[2] = { ws: [2], ident: [3, O], 0: [3, O], number: [3, O] }),
      (N[3] = { ident: [3, O], 0: [3, O], number: [3, O], ws: [1, A], '.': [2, A], '[': [C, A], eof: [I, A] }),
      (N[C] = { "'": [F, O], '"': [W, O], '[': [C, E], ']': [1, P], eof: R, else: [C, O] }),
      (N[F] = { "'": [C, O], eof: R, else: [F, O] }),
      (N[W] = { '"': [C, O], eof: R, else: [W, O] });
    var z = /^\s?(true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/,
      J = function () {
        this._cache = Object.create(null);
      };
    (J.prototype.parsePath = function (e) {
      var t = this._cache[e];
      return t || ((t = g(e)) && (this._cache[e] = t)), t || [];
    }),
      (J.prototype.getPathValue = function (e, t) {
        if (!r(e)) return null;
        var n = this.parsePath(t);
        if (L(n)) return null;
        for (var a = n.length, i = e, o = 0; o < a; ) {
          var s = i[n[o]];
          if (void 0 === s) {
            i = null;
            break;
          }
          (i = s), o++;
        }
        return i;
      });
    var U = function (e) {
        var t = this;
        void 0 === e && (e = {});
        var n = e.locale || 'en-US',
          r = e.fallbackLocale || 'en-US',
          a = e.messages || {},
          o = e.dateTimeFormats || {},
          s = e.numberFormats || {};
        (this._vm = null),
          (this._formatter = e.formatter || new j()),
          (this._missing = e.missing || null),
          (this._root = e.root || null),
          (this._sync = void 0 === e.sync || !!e.sync),
          (this._fallbackRoot = void 0 === e.fallbackRoot || !!e.fallbackRoot),
          (this._silentTranslationWarn = void 0 !== e.silentTranslationWarn && !!e.silentTranslationWarn),
          (this._dateTimeFormatters = {}),
          (this._numberFormatters = {}),
          (this._path = new J()),
          (this._dataListeners = []),
          (this._exist = function (e, n) {
            return !(!e || !n) && !i(t._path.getPathValue(e, n));
          }),
          this._initVM({ locale: n, fallbackLocale: r, messages: a, dateTimeFormats: o, numberFormats: s });
      },
      V = {
        vm: {},
        messages: {},
        dateTimeFormats: {},
        numberFormats: {},
        locale: {},
        fallbackLocale: {},
        missing: {},
        formatter: {},
        silentTranslationWarn: {},
      };
    (U.prototype._initVM = function (e) {
      var t = Y.config.silent;
      (Y.config.silent = !0), (this._vm = new Y({ data: e })), (Y.config.silent = t);
    }),
      (U.prototype.subscribeDataChanging = function (e) {
        this._dataListeners.push(e);
      }),
      (U.prototype.unsubscribeDataChanging = function (e) {
        l(this._dataListeners, e);
      }),
      (U.prototype.watchI18nData = function () {
        var e = this;
        return this._vm.$watch(
          '$data',
          function () {
            for (var t = e._dataListeners.length; t--; )
              Y.nextTick(function () {
                e._dataListeners[t] && e._dataListeners[t].$forceUpdate();
              });
          },
          { deep: !0 }
        );
      }),
      (U.prototype.watchLocale = function () {
        if (!this._sync || !this._root) return null;
        var e = this._vm;
        return this._root.vm.$watch(
          'locale',
          function (t) {
            e.$set(e, 'locale', t), e.$forceUpdate();
          },
          { immediate: !0 }
        );
      }),
      (V.vm.get = function () {
        return this._vm;
      }),
      (V.messages.get = function () {
        return c(this._getMessages());
      }),
      (V.dateTimeFormats.get = function () {
        return c(this._getDateTimeFormats());
      }),
      (V.numberFormats.get = function () {
        return c(this._getNumberFormats());
      }),
      (V.locale.get = function () {
        return this._vm.locale;
      }),
      (V.locale.set = function (e) {
        this._vm.$set(this._vm, 'locale', e);
      }),
      (V.fallbackLocale.get = function () {
        return this._vm.fallbackLocale;
      }),
      (V.fallbackLocale.set = function (e) {
        this._vm.$set(this._vm, 'fallbackLocale', e);
      }),
      (V.missing.get = function () {
        return this._missing;
      }),
      (V.missing.set = function (e) {
        this._missing = e;
      }),
      (V.formatter.get = function () {
        return this._formatter;
      }),
      (V.formatter.set = function (e) {
        this._formatter = e;
      }),
      (V.silentTranslationWarn.get = function () {
        return this._silentTranslationWarn;
      }),
      (V.silentTranslationWarn.set = function (e) {
        this._silentTranslationWarn = e;
      }),
      (U.prototype._getMessages = function () {
        return this._vm.messages;
      }),
      (U.prototype._getDateTimeFormats = function () {
        return this._vm.dateTimeFormats;
      }),
      (U.prototype._getNumberFormats = function () {
        return this._vm.numberFormats;
      }),
      (U.prototype._warnDefault = function (e, t, n, r) {
        return i(n) ? (this.missing && this.missing.apply(null, [e, t, r]), t) : n;
      }),
      (U.prototype._isFallbackRoot = function (e) {
        return !e && !i(this._root) && this._fallbackRoot;
      }),
      (U.prototype._interpolate = function (e, t, n, r, o, s) {
        if (!t) return null;
        var u = this._path.getPathValue(t, n);
        if (Array.isArray(u)) return u;
        var d;
        if (i(u)) {
          if (!a(t)) return null;
          if ('string' != typeof (d = t[n])) return null;
        } else {
          if ('string' != typeof u) return null;
          d = u;
        }
        return d.indexOf('@:') >= 0 && (d = this._link(e, t, d, r, o, s)), s ? this._render(d, o, s) : d;
      }),
      (U.prototype._link = function (e, t, n, r, a, i) {
        var o = this,
          s = n,
          u = s.match(/(@:[\w\-_|.]+)/g);
        for (var d in u)
          if (u.hasOwnProperty(d)) {
            var c = u[d],
              l = c.substr(2),
              _ = o._interpolate(e, t, l, r, 'raw' === a ? 'string' : a, 'raw' === a ? void 0 : i);
            if (o._isFallbackRoot(_)) {
              if (!o._root) throw Error('unexpected error');
              var f = o._root;
              _ = f._translate(f._getMessages(), f.locale, f.fallbackLocale, l, r, a, i);
            }
            (_ = o._warnDefault(e, l, _, r)), (s = _ ? s.replace(c, _) : s);
          }
        return s;
      }),
      (U.prototype._render = function (e, t, n) {
        var r = this._formatter.interpolate(e, n);
        return 'string' === t ? r.join('') : r;
      }),
      (U.prototype._translate = function (e, t, n, r, a, o, s) {
        var u = this._interpolate(t, e[t], r, a, o, s);
        return i(u) ? ((u = this._interpolate(n, e[n], r, a, o, s)), i(u) ? null : u) : u;
      }),
      (U.prototype._t = function (e, t, n, r) {
        for (var a = [], i = arguments.length - 4; i-- > 0; ) a[i] = arguments[i + 4];
        if (!e) return '';
        var s = o.apply(void 0, a),
          u = s.locale || t,
          d = this._translate(n, u, this.fallbackLocale, e, r, 'string', s.params);
        if (this._isFallbackRoot(d)) {
          if (!this._root) throw Error('unexpected error');
          return (c = this._root).t.apply(c, [e].concat(a));
        }
        return this._warnDefault(u, e, d, r);
        var c;
      }),
      (U.prototype.t = function (e) {
        for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
        return (r = this)._t.apply(r, [e, this.locale, this._getMessages(), null].concat(t));
        var r;
      }),
      (U.prototype._i = function (e, t, n, r) {
        for (var a = [], i = arguments.length - 4; i-- > 0; ) a[i] = arguments[i + 4];
        var o = this._translate(n, t, this.fallbackLocale, e, r, 'raw', a);
        if (this._isFallbackRoot(o)) {
          if (!this._root) throw Error('unexpected error');
          return (s = this._root).i.apply(s, [e].concat(a));
        }
        return this._warnDefault(t, e, o, r);
        var s;
      }),
      (U.prototype.i = function (e) {
        for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
        if (!e) return '';
        var r = this.locale,
          a = 0;
        'string' == typeof t[0] && ((r = t[0]), (a = 1));
        for (var i = [], o = a; o < t.length; o++) i.push(t[o]);
        return (s = this)._i.apply(s, [e, r, this._getMessages(), null].concat(i));
        var s;
      }),
      (U.prototype._tc = function (e, t, n, r, a) {
        for (var i = [], o = arguments.length - 5; o-- > 0; ) i[o] = arguments[o + 5];
        return e ? (void 0 === a && (a = 1), d((s = this)._t.apply(s, [e, t, n, r].concat(i)), a)) : '';
        var s;
      }),
      (U.prototype.tc = function (e, t) {
        for (var n = [], r = arguments.length - 2; r-- > 0; ) n[r] = arguments[r + 2];
        return (a = this)._tc.apply(a, [e, this.locale, this._getMessages(), null, t].concat(n));
        var a;
      }),
      (U.prototype._te = function (e, t, n) {
        for (var r = [], a = arguments.length - 3; a-- > 0; ) r[a] = arguments[a + 3];
        var i = o.apply(void 0, r).locale || t;
        return this._exist(n[i], e);
      }),
      (U.prototype.te = function (e, t) {
        return this._te(e, this.locale, this._getMessages(), t);
      }),
      (U.prototype.getLocaleMessage = function (e) {
        return c(this._vm.messages[e] || {});
      }),
      (U.prototype.setLocaleMessage = function (e, t) {
        this._vm.messages[e] = t;
      }),
      (U.prototype.mergeLocaleMessage = function (e, t) {
        this._vm.messages[e] = Y.util.extend(this._vm.messages[e] || {}, t);
      }),
      (U.prototype.getDateTimeFormat = function (e) {
        return c(this._vm.dateTimeFormats[e] || {});
      }),
      (U.prototype.setDateTimeFormat = function (e, t) {
        this._vm.dateTimeFormats[e] = t;
      }),
      (U.prototype.mergeDateTimeFormat = function (e, t) {
        this._vm.dateTimeFormats[e] = Y.util.extend(this._vm.dateTimeFormats[e] || {}, t);
      }),
      (U.prototype._localizeDateTime = function (e, t, n, r, a) {
        var o = t,
          s = r[o];
        if (((i(s) || i(s[a])) && ((o = n), (s = r[o])), i(s) || i(s[a]))) return null;
        var u = s[a],
          d = o + '__' + a,
          c = this._dateTimeFormatters[d];
        return c || (c = this._dateTimeFormatters[d] = new Intl.DateTimeFormat(o, u)), c.format(e);
      }),
      (U.prototype._d = function (e, t, n) {
        if (!n) return new Intl.DateTimeFormat(t).format(e);
        var r = this._localizeDateTime(e, t, this.fallbackLocale, this._getDateTimeFormats(), n);
        if (this._isFallbackRoot(r)) {
          if (!this._root) throw Error('unexpected error');
          return this._root.d(e, n, t);
        }
        return r || '';
      }),
      (U.prototype.d = function (e) {
        for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
        var a = this.locale,
          i = null;
        return (
          1 === t.length
            ? 'string' == typeof t[0]
              ? (i = t[0])
              : r(t[0]) && (t[0].locale && (a = t[0].locale), t[0].key && (i = t[0].key))
            : 2 === t.length && ('string' == typeof t[0] && (i = t[0]), 'string' == typeof t[1] && (a = t[1])),
          this._d(e, a, i)
        );
      }),
      (U.prototype.getNumberFormat = function (e) {
        return c(this._vm.numberFormats[e] || {});
      }),
      (U.prototype.setNumberFormat = function (e, t) {
        this._vm.numberFormats[e] = t;
      }),
      (U.prototype.mergeNumberFormat = function (e, t) {
        this._vm.numberFormats[e] = Y.util.extend(this._vm.numberFormats[e] || {}, t);
      }),
      (U.prototype._localizeNumber = function (e, t, n, r, a) {
        var o = t,
          s = r[o];
        if (((i(s) || i(s[a])) && ((o = n), (s = r[o])), i(s) || i(s[a]))) return null;
        var u = s[a],
          d = o + '__' + a,
          c = this._numberFormatters[d];
        return c || (c = this._numberFormatters[d] = new Intl.NumberFormat(o, u)), c.format(e);
      }),
      (U.prototype._n = function (e, t, n) {
        if (!n) return new Intl.NumberFormat(t).format(e);
        var r = this._localizeNumber(e, t, this.fallbackLocale, this._getNumberFormats(), n);
        if (this._isFallbackRoot(r)) {
          if (!this._root) throw Error('unexpected error');
          return this._root.n(e, n, t);
        }
        return r || '';
      }),
      (U.prototype.n = function (e) {
        for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
        var a = this.locale,
          i = null;
        return (
          1 === t.length
            ? 'string' == typeof t[0]
              ? (i = t[0])
              : r(t[0]) && (t[0].locale && (a = t[0].locale), t[0].key && (i = t[0].key))
            : 2 === t.length && ('string' == typeof t[0] && (i = t[0]), 'string' == typeof t[1] && (a = t[1])),
          this._n(e, a, i)
        );
      }),
      Object.defineProperties(U.prototype, V),
      (U.availabilities = { dateTimeFormat: w, numberFormat: D }),
      (U.install = f),
      (U.version = '7.0.5'),
      'undefined' != typeof window && window.Vue && window.Vue.use(U),
      (t.default = U);
  },
  function (e, t) {
    e.exports = function (e) {
      var t = new Error(e);
      throw ((t.jpexInternalError = !0), t);
    };
  },
  function (e, t, n) {
    function r(e, t, n) {
      var r = e.$$hooks;
      if (!r[t]) {
        for (var i = 0, o = e; o.$$parent && o.$$parent.$$parent; ) o = o.$$parent;
        o.$$hooks[t] = Object.create(
          {
            push: function (e) {
              this[i++] = e;
            },
            trigger: function (n) {
              (n = Object.assign({ Jpex: e, eventName: t }, n)),
                Array.prototype.slice.call(this).forEach(function (e) {
                  e && e(n);
                });
            },
          },
          {
            length: {
              get: function () {
                return i;
              },
            },
          }
        );
      }
      a(r, t) || (r[t] = Object.create(e.$$parent.$$hooks[t] || null)), r[t].push(n);
    }
    var a = n(75);
    (t.use = function (e, t) {
      var n = this;
      if (!e || !e.install || 'function' != typeof e.install) throw new Error('Plugin does not have an install method');
      if (!e.name || 'string' != typeof e.name) throw new Error('Plugin must have a name property');
      if (this.$$using[e.name] && !e.reuse)
        return void (e.silent || console.warn('Plugin ' + e.name + ' skipped as it has already been used'));
      this.$$using[e.name] = !0;
      var a = {
        Jpex: n,
        on: function (e, t) {
          r(n, e, t);
        },
        options: t,
      };
      e.install(a);
    }),
      (t.trigger = function (e, t) {
        var n = this.$$hooks[e];
        n && n.trigger(t);
      });
  },
  function (e, t, n) {
    var r = n(93);
    e.exports = function (e) {
      var t = {
        lifecycle: {
          application: function () {
            return (e.lifecycle = r.APPLICATION), t;
          },
          class: function () {
            return (e.lifecycle = r.CLASS), t;
          },
          instance: function () {
            return (e.lifecycle = r.INSTANCE), t;
          },
          none: function () {
            return (e.lifecycle = r.NONE), t;
          },
        },
      };
      return t;
    };
  },
  function (e, t, n) {
    /*!
     * vue-analytics v4.1.3
     * (c) 2017 Matteo Gabriele
     * Released under the MIT License.
     */
    !(function (t, r) {
      e.exports = r(n(202));
    })(0, function (e) {
      'use strict';
      function t(e) {
        return e.replace(/-/gi, '');
      }
      function n() {
        return [].concat(w.id);
      }
      function r(e, r) {
        var a = t(r);
        return n().length > 1 ? a + '.' + e : e;
      }
      function a(e) {
        return b(w, e);
      }
      function i(e) {
        for (var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) a[i - 1] = arguments[i];
        void 0 !== window.ga &&
          n().forEach(function (t) {
            var n;
            (n = window).ga.apply(n, [r(e, t)].concat(a));
          });
      }
      function o(e) {
        var t = Object.keys(e).reduce(function (t, n, r, a) {
          return (t += n + '=' + e[n]), r < a.length - 1 && (t += '&'), t;
        }, '?');
        return '?' === t ? '' : t;
      }
      function s(e, t) {
        if (!e) return void Y('Is not possible to track the current route without VueRouter installed');
        var n = e.currentRoute,
          r = { page: n.path + o(n.query), title: n.name, location: window.location.href };
        return 'function' == typeof t[1] && (r.hitCallback = t[1]), r;
      }
      function u() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var r = t[0];
        if ('VueRouter' === r.constructor.name) return void i('send', 'pageview', s(r, t));
        i.apply(void 0, ['send', 'pageview'].concat(t));
      }
      function d() {
        if (void 0 !== window.ga) {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          if (t.length)
            return 'object' === L(t[0]) && t[0].constructor === Object
              ? void i('set', t[0])
              : t.length < 2 || ('string' != typeof t[0] && 'string' != typeof t[1])
                ? void Y('$ga.set needs a field name and a field value, or you can pass an object literal')
                : void i('set', t[0], t[1]);
        }
      }
      function c(e, t) {
        var n = t.currentRoute,
          r = e ? e(t.currentRoute) : t;
        k(n.name) || (d('page', n.path), u(r, t));
      }
      function l(e) {
        if (w.autoTracking.page && e) {
          var t = w.autoTracking.pageviewTemplate;
          w.autoTracking.pageviewOnLoad && c(t, e),
            e.afterEach(function () {
              setTimeout(function () {
                c(t, e);
              }, 0);
            });
        }
      }
      function _(e) {
        i('send', 'exception', {
          exDescription: e,
          exFatal: arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        });
      }
      function f() {
        w.autoTracking.exception &&
          (window.onerror = function (e) {
            return _(e.message || e);
          });
      }
      function m() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        i.apply(void 0, ['send', 'event'].concat(t));
      }
      function h() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        i.apply(void 0, ['send', 'timing'].concat(t));
      }
      function p() {
        i.apply(void 0, arguments);
      }
      function y() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        i.apply(void 0, ['send', 'social'].concat(t));
      }
      function v(e) {
        i('require', e);
      }
      function M(r, a) {
        if (!w.manual) {
          if (!w.id || !w.id.length) {
            return void Y(
              'Please enter a Google Analaytics tracking ID',
              'https://github.com/MatteoGabriele/vue-analytics#usage'
            );
          }
          var i = w.userId ? { userId: w.userId } : {},
            o = w.debug.enabled ? '_debug' : '';
          e('https://www.google-analytics.com/analytics' + o + '.js', function (e, o) {
            if (e) return void Y('Ops! Is not possible to load Google Analytics script');
            var s = setInterval(function () {
              if (window.ga) {
                clearInterval(s), w.debug.enabled && (window.ga_debug = { trace: w.debug.trace });
                var e = n();
                e.forEach(function (n) {
                  e.length > 1 && (i.name = t(n)), window.ga('create', n, 'auto', i);
                }),
                  a && 'function' == typeof a && a(),
                  w.debug.sendHitTask || D.set('sendHitTask', null),
                  D.autoTrackException(),
                  D.autoTrackPage(r);
              }
            }, 10);
          });
        }
      }
      function g(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.router;
        delete t.router, a(t), M(n, t.onReady), (e.prototype.$ga = e.$ga = D);
      }
      e = 'default' in e ? e.default : e;
      var L =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              },
        Y = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          console.warn('[VueAnalytics] ' + t.join(' '));
        },
        k = function (e) {
          return !(!w.ignoreRoutes.length || -1 === w.ignoreRoutes.indexOf(e));
        },
        b = function e(t, n) {
          return (
            Object.keys(n).forEach(function (r) {
              if (t[r] && 'object' === L(t[r])) return void e(t[r], n[r]);
              t[r] = n[r];
            }),
            t
          );
        },
        w = {
          debug: { enabled: !1, trace: !1, sendHitTask: !0 },
          autoTracking: { exception: !1, page: !0, pageviewOnLoad: !0, pageviewTemplate: null },
          id: null,
          userId: null,
          ignoreRoutes: [],
        },
        D = {
          autoTrackPage: l,
          autoTrackException: f,
          social: y,
          page: u,
          event: m,
          time: h,
          exception: _,
          set: d,
          query: p,
          require: v,
        };
      return { install: g, generateMethodName: r };
    });
  },
  function (e, t) {
    function n(e, t) {
      for (var n in t) e.setAttribute(n, t[n]);
    }
    function r(e, t) {
      (e.onload = function () {
        (this.onerror = this.onload = null), t(null, e);
      }),
        (e.onerror = function () {
          (this.onerror = this.onload = null), t(new Error('Failed to load ' + this.src), e);
        });
    }
    function a(e, t) {
      e.onreadystatechange = function () {
        ('complete' != this.readyState && 'loaded' != this.readyState) ||
          ((this.onreadystatechange = null), t(null, e));
      };
    }
    e.exports = function (e, t, i) {
      var o = document.head || document.getElementsByTagName('head')[0],
        s = document.createElement('script');
      'function' == typeof t && ((i = t), (t = {})),
        (t = t || {}),
        (i = i || function () {}),
        (s.type = t.type || 'text/javascript'),
        (s.charset = t.charset || 'utf8'),
        (s.async = !('async' in t) || !!t.async),
        (s.src = e),
        t.attrs && n(s, t.attrs),
        t.text && (s.text = '' + t.text),
        ('onload' in s ? r : a)(s, i),
        s.onload || r(s, i),
        o.appendChild(s);
    };
  },
  function (e, t, n) {
    !(function (t, n) {
      e.exports = n();
    })(0, function () {
      return (function (e) {
        function t(r) {
          if (n[r]) return n[r].exports;
          var a = (n[r] = { i: r, l: !1, exports: {} });
          return e[r].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
        }
        var n = {};
        return (
          (t.m = e),
          (t.c = n),
          (t.i = function (e) {
            return e;
          }),
          (t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });
          }),
          (t.n = function (e) {
            var n =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return t.d(n, 'a', n), n;
          }),
          (t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (t.p = '/'),
          t((t.s = 81))
        );
      })([
        function (e, t) {
          var n = (e.exports =
            'undefined' != typeof window && window.Math == Math
              ? window
              : 'undefined' != typeof self && self.Math == Math
                ? self
                : Function('return this')());
          'number' == typeof __g && (__g = n);
        },
        function (e, t) {
          var n = {}.hasOwnProperty;
          e.exports = function (e, t) {
            return n.call(e, t);
          };
        },
        function (e, t, n) {
          var r = n(53),
            a = n(14);
          e.exports = function (e) {
            return r(a(e));
          };
        },
        function (e, t, n) {
          e.exports = !n(8)(function () {
            return (
              7 !=
              Object.defineProperty({}, 'a', {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
        },
        function (e, t, n) {
          var r = n(5),
            a = n(12);
          e.exports = n(3)
            ? function (e, t, n) {
                return r.f(e, t, a(1, n));
              }
            : function (e, t, n) {
                return (e[t] = n), e;
              };
        },
        function (e, t, n) {
          var r = n(10),
            a = n(29),
            i = n(24),
            o = Object.defineProperty;
          t.f = n(3)
            ? Object.defineProperty
            : function (e, t, n) {
                if ((r(e), (t = i(t, !0)), r(n), a))
                  try {
                    return o(e, t, n);
                  } catch (e) {}
                if ('get' in n || 'set' in n) throw TypeError('Accessors not supported!');
                return 'value' in n && (e[t] = n.value), e;
              };
        },
        function (e, t, n) {
          var r = n(22)('wks'),
            a = n(13),
            i = n(0).Symbol,
            o = 'function' == typeof i;
          (e.exports = function (e) {
            return r[e] || (r[e] = (o && i[e]) || (o ? i : a)('Symbol.' + e));
          }).store = r;
        },
        function (e, t) {
          var n = (e.exports = { version: '2.4.0' });
          'number' == typeof __e && (__e = n);
        },
        function (e, t) {
          e.exports = function (e) {
            try {
              return !!e();
            } catch (e) {
              return !0;
            }
          };
        },
        function (e, t, n) {
          var r = n(34),
            a = n(15);
          e.exports =
            Object.keys ||
            function (e) {
              return r(e, a);
            };
        },
        function (e, t, n) {
          var r = n(11);
          e.exports = function (e) {
            if (!r(e)) throw TypeError(e + ' is not an object!');
            return e;
          };
        },
        function (e, t) {
          e.exports = function (e) {
            return 'object' == typeof e ? null !== e : 'function' == typeof e;
          };
        },
        function (e, t) {
          e.exports = function (e, t) {
            return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
          };
        },
        function (e, t) {
          var n = 0,
            r = Math.random();
          e.exports = function (e) {
            return 'Symbol('.concat(void 0 === e ? '' : e, ')_', (++n + r).toString(36));
          };
        },
        function (e, t) {
          e.exports = function (e) {
            if (void 0 == e) throw TypeError("Can't call method on  " + e);
            return e;
          };
        },
        function (e, t) {
          e.exports =
            'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
        },
        function (e, t, n) {
          var r = n(0),
            a = n(7),
            i = n(50),
            o = n(4),
            s = function (e, t, n) {
              var u,
                d,
                c,
                l = e & s.F,
                _ = e & s.G,
                f = e & s.S,
                m = e & s.P,
                h = e & s.B,
                p = e & s.W,
                y = _ ? a : a[t] || (a[t] = {}),
                v = y.prototype,
                M = _ ? r : f ? r[t] : (r[t] || {}).prototype;
              _ && (n = t);
              for (u in n)
                ((d = !l && M && void 0 !== M[u]) && u in y) ||
                  ((c = d ? M[u] : n[u]),
                  (y[u] =
                    _ && 'function' != typeof M[u]
                      ? n[u]
                      : h && d
                        ? i(c, r)
                        : p && M[u] == c
                          ? (function (e) {
                              var t = function (t, n, r) {
                                if (this instanceof e) {
                                  switch (arguments.length) {
                                    case 0:
                                      return new e();
                                    case 1:
                                      return new e(t);
                                    case 2:
                                      return new e(t, n);
                                  }
                                  return new e(t, n, r);
                                }
                                return e.apply(this, arguments);
                              };
                              return (t.prototype = e.prototype), t;
                            })(c)
                          : m && 'function' == typeof c
                            ? i(Function.call, c)
                            : c),
                  m && (((y.virtual || (y.virtual = {}))[u] = c), e & s.R && v && !v[u] && o(v, u, c)));
            };
          (s.F = 1), (s.G = 2), (s.S = 4), (s.P = 8), (s.B = 16), (s.W = 32), (s.U = 64), (s.R = 128), (e.exports = s);
        },
        function (e, t) {
          e.exports = {};
        },
        function (e, t) {
          e.exports = !0;
        },
        function (e, t) {
          t.f = {}.propertyIsEnumerable;
        },
        function (e, t, n) {
          var r = n(5).f,
            a = n(1),
            i = n(6)('toStringTag');
          e.exports = function (e, t, n) {
            e && !a((e = n ? e : e.prototype), i) && r(e, i, { configurable: !0, value: t });
          };
        },
        function (e, t, n) {
          var r = n(22)('keys'),
            a = n(13);
          e.exports = function (e) {
            return r[e] || (r[e] = a(e));
          };
        },
        function (e, t, n) {
          var r = n(0),
            a = r['__core-js_shared__'] || (r['__core-js_shared__'] = {});
          e.exports = function (e) {
            return a[e] || (a[e] = {});
          };
        },
        function (e, t) {
          var n = Math.ceil,
            r = Math.floor;
          e.exports = function (e) {
            return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
          };
        },
        function (e, t, n) {
          var r = n(11);
          e.exports = function (e, t) {
            if (!r(e)) return e;
            var n, a;
            if (t && 'function' == typeof (n = e.toString) && !r((a = n.call(e)))) return a;
            if ('function' == typeof (n = e.valueOf) && !r((a = n.call(e)))) return a;
            if (!t && 'function' == typeof (n = e.toString) && !r((a = n.call(e)))) return a;
            throw TypeError("Can't convert object to primitive value");
          };
        },
        function (e, t, n) {
          var r = n(0),
            a = n(7),
            i = n(18),
            o = n(26),
            s = n(5).f;
          e.exports = function (e) {
            var t = a.Symbol || (a.Symbol = i ? {} : r.Symbol || {});
            '_' == e.charAt(0) || e in t || s(t, e, { value: o.f(e) });
          };
        },
        function (e, t, n) {
          t.f = n(6);
        },
        function (e, t) {
          var n = {}.toString;
          e.exports = function (e) {
            return n.call(e).slice(8, -1);
          };
        },
        function (e, t, n) {
          var r = n(11),
            a = n(0).document,
            i = r(a) && r(a.createElement);
          e.exports = function (e) {
            return i ? a.createElement(e) : {};
          };
        },
        function (e, t, n) {
          e.exports =
            !n(3) &&
            !n(8)(function () {
              return (
                7 !=
                Object.defineProperty(n(28)('div'), 'a', {
                  get: function () {
                    return 7;
                  },
                }).a
              );
            });
        },
        function (e, t, n) {
          'use strict';
          var r = n(18),
            a = n(16),
            i = n(35),
            o = n(4),
            s = n(1),
            u = n(17),
            d = n(55),
            c = n(20),
            l = n(62),
            _ = n(6)('iterator'),
            f = !([].keys && 'next' in [].keys()),
            m = function () {
              return this;
            };
          e.exports = function (e, t, n, h, p, y, v) {
            d(n, t, h);
            var M,
              g,
              L,
              Y = function (e) {
                if (!f && e in D) return D[e];
                switch (e) {
                  case 'keys':
                  case 'values':
                    return function () {
                      return new n(this, e);
                    };
                }
                return function () {
                  return new n(this, e);
                };
              },
              k = t + ' Iterator',
              b = 'values' == p,
              w = !1,
              D = e.prototype,
              T = D[_] || D['@@iterator'] || (p && D[p]),
              S = T || Y(p),
              j = p ? (b ? Y('entries') : S) : void 0,
              x = 'Array' == t ? D.entries || T : T;
            if (
              (x && (L = l(x.call(new e()))) !== Object.prototype && (c(L, k, !0), r || s(L, _) || o(L, _, m)),
              b &&
                T &&
                'values' !== T.name &&
                ((w = !0),
                (S = function () {
                  return T.call(this);
                })),
              (r && !v) || (!f && !w && D[_]) || o(D, _, S),
              (u[t] = S),
              (u[k] = m),
              p)
            )
              if (((M = { values: b ? S : Y('values'), keys: y ? S : Y('keys'), entries: j }), v))
                for (g in M) g in D || i(D, g, M[g]);
              else a(a.P + a.F * (f || w), t, M);
            return M;
          };
        },
        function (e, t, n) {
          var r = n(10),
            a = n(59),
            i = n(15),
            o = n(21)('IE_PROTO'),
            s = function () {},
            u = function () {
              var e,
                t = n(28)('iframe'),
                r = i.length;
              for (
                t.style.display = 'none',
                  n(52).appendChild(t),
                  t.src = 'javascript:',
                  e = t.contentWindow.document,
                  e.open(),
                  e.write('<script>document.F=Object</script>'),
                  e.close(),
                  u = e.F;
                r--;

              )
                delete u.prototype[i[r]];
              return u();
            };
          e.exports =
            Object.create ||
            function (e, t) {
              var n;
              return (
                null !== e ? ((s.prototype = r(e)), (n = new s()), (s.prototype = null), (n[o] = e)) : (n = u()),
                void 0 === t ? n : a(n, t)
              );
            };
        },
        function (e, t, n) {
          var r = n(34),
            a = n(15).concat('length', 'prototype');
          t.f =
            Object.getOwnPropertyNames ||
            function (e) {
              return r(e, a);
            };
        },
        function (e, t) {
          t.f = Object.getOwnPropertySymbols;
        },
        function (e, t, n) {
          var r = n(1),
            a = n(2),
            i = n(49)(!1),
            o = n(21)('IE_PROTO');
          e.exports = function (e, t) {
            var n,
              s = a(e),
              u = 0,
              d = [];
            for (n in s) n != o && r(s, n) && d.push(n);
            for (; t.length > u; ) r(s, (n = t[u++])) && (~i(d, n) || d.push(n));
            return d;
          };
        },
        function (e, t, n) {
          e.exports = n(4);
        },
        function (e, t, n) {
          var r = n(14);
          e.exports = function (e) {
            return Object(r(e));
          };
        },
        function (e, t, n) {
          'use strict';
          function r(e) {
            return 'object' === s()(window.HTMLElement)
              ? e instanceof window.HTMLElement
              : e &&
                  'object' === (void 0 === e ? 'undefined' : s()(e)) &&
                  1 === e.nodeType &&
                  'string' == typeof e.nodeName;
          }
          Object.defineProperty(t, '__esModule', { value: !0 });
          var a = n(38),
            i = n.n(a),
            o = n(41),
            s = n.n(o),
            u = n(43);
          if (!u) throw new Error('[vue-clipboards] cannot locate Clipboard.');
          t.default = function (e) {
            var t = {},
              n = 'DEFAULT_KEY';
            e.directive('clipboard', {
              bind: function (e, a, o) {
                var d = a.value,
                  c = {},
                  l = o.key || 0 === o.key ? o.key : n,
                  _ = null;
                d &&
                  /(string|number)/.test(void 0 === d ? 'undefined' : s()(d)) &&
                  (c.text = function () {
                    return d;
                  }),
                  o.data.attrs &&
                    o.data.attrs.model &&
                    (_ = r(o.data.attrs.model) ? o.data.attrs.model : document.querySelector(o.data.attrs.model)),
                  o.elm.offsetParent
                    ? (c.container = o.elm.offsetParent)
                    : r(_)
                      ? (c.container = _)
                      : (c.container = e.parentElement || document.body),
                  (t[l] = new u(e, c));
                var f = o.componentOptions,
                  m = o.data,
                  h = f ? f.listeners : null,
                  p = m ? m.on : null,
                  y = (h && h) || (p && p);
                y &&
                  'object' === (void 0 === y ? 'undefined' : s()(y)) &&
                  i()(y).length &&
                  i()(y).map(function (e) {
                    return t[l].on(e, y[e].fn || y[e].fns);
                  });
              },
              unbind: function (e) {
                var r = e.key || 0 === e.key ? e.key : n;
                t[r] && t[r].destroy && (t[r].destroy(), (t[r] = null));
              },
              update: function (e, t, n) {
                t.def.unbind(n), t.def.bind(e, t, n);
              },
            });
          };
        },
        function (e, t, n) {
          e.exports = { default: n(44), __esModule: !0 };
        },
        function (e, t, n) {
          e.exports = { default: n(45), __esModule: !0 };
        },
        function (e, t, n) {
          e.exports = { default: n(46), __esModule: !0 };
        },
        function (e, t, n) {
          'use strict';
          function r(e) {
            return e && e.__esModule ? e : { default: e };
          }
          t.__esModule = !0;
          var a = n(40),
            i = r(a),
            o = n(39),
            s = r(o),
            u =
              'function' == typeof s.default && 'symbol' == typeof i.default
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof s.default &&
                      e.constructor === s.default &&
                      e !== s.default.prototype
                      ? 'symbol'
                      : typeof e;
                  };
          t.default =
            'function' == typeof s.default && 'symbol' === u(i.default)
              ? function (e) {
                  return void 0 === e ? 'undefined' : u(e);
                }
              : function (e) {
                  return e && 'function' == typeof s.default && e.constructor === s.default && e !== s.default.prototype
                    ? 'symbol'
                    : void 0 === e
                      ? 'undefined'
                      : u(e);
                };
        },
        function (e, t, n) {
          var r, a, i;
          !(function (o, s) {
            (a = [e, n(79)]), (r = s), void 0 !== (i = 'function' == typeof r ? r.apply(t, a) : r) && (e.exports = i);
          })(0, function (e, t) {
            'use strict';
            function n(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            var r = (function (e) {
                return e && e.__esModule ? e : { default: e };
              })(t),
              a =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                        ? 'symbol'
                        : typeof e;
                    },
              i = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      'value' in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r);
                  }
                }
                return function (t, n, r) {
                  return n && e(t.prototype, n), r && e(t, r), t;
                };
              })(),
              o = (function () {
                function e(t) {
                  n(this, e), this.resolveOptions(t), this.initSelection();
                }
                return (
                  i(e, [
                    {
                      key: 'resolveOptions',
                      value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        (this.action = e.action),
                          (this.container = e.container),
                          (this.emitter = e.emitter),
                          (this.target = e.target),
                          (this.text = e.text),
                          (this.trigger = e.trigger),
                          (this.selectedText = '');
                      },
                    },
                    {
                      key: 'initSelection',
                      value: function () {
                        this.text ? this.selectFake() : this.target && this.selectTarget();
                      },
                    },
                    {
                      key: 'selectFake',
                      value: function () {
                        var e = this,
                          t = 'rtl' == document.documentElement.getAttribute('dir');
                        this.removeFake(),
                          (this.fakeHandlerCallback = function () {
                            return e.removeFake();
                          }),
                          (this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || !0),
                          (this.fakeElem = document.createElement('textarea')),
                          (this.fakeElem.style.fontSize = '12pt'),
                          (this.fakeElem.style.border = '0'),
                          (this.fakeElem.style.padding = '0'),
                          (this.fakeElem.style.margin = '0'),
                          (this.fakeElem.style.position = 'absolute'),
                          (this.fakeElem.style[t ? 'right' : 'left'] = '-9999px');
                        var n = window.pageYOffset || document.documentElement.scrollTop;
                        (this.fakeElem.style.top = n + 'px'),
                          this.fakeElem.setAttribute('readonly', ''),
                          (this.fakeElem.value = this.text),
                          this.container.appendChild(this.fakeElem),
                          (this.selectedText = (0, r.default)(this.fakeElem)),
                          this.copyText();
                      },
                    },
                    {
                      key: 'removeFake',
                      value: function () {
                        this.fakeHandler &&
                          (this.container.removeEventListener('click', this.fakeHandlerCallback),
                          (this.fakeHandler = null),
                          (this.fakeHandlerCallback = null)),
                          this.fakeElem && (this.container.removeChild(this.fakeElem), (this.fakeElem = null));
                      },
                    },
                    {
                      key: 'selectTarget',
                      value: function () {
                        (this.selectedText = (0, r.default)(this.target)), this.copyText();
                      },
                    },
                    {
                      key: 'copyText',
                      value: function () {
                        var e = void 0;
                        try {
                          e = document.execCommand(this.action);
                        } catch (t) {
                          e = !1;
                        }
                        this.handleResult(e);
                      },
                    },
                    {
                      key: 'handleResult',
                      value: function (e) {
                        this.emitter.emit(e ? 'success' : 'error', {
                          action: this.action,
                          text: this.selectedText,
                          trigger: this.trigger,
                          clearSelection: this.clearSelection.bind(this),
                        });
                      },
                    },
                    {
                      key: 'clearSelection',
                      value: function () {
                        this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
                      },
                    },
                    {
                      key: 'destroy',
                      value: function () {
                        this.removeFake();
                      },
                    },
                    {
                      key: 'action',
                      set: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'copy';
                        if (((this._action = e), 'copy' !== this._action && 'cut' !== this._action))
                          throw new Error('Invalid "action" value, use either "copy" or "cut"');
                      },
                      get: function () {
                        return this._action;
                      },
                    },
                    {
                      key: 'target',
                      set: function (e) {
                        if (void 0 !== e) {
                          if (!e || 'object' !== (void 0 === e ? 'undefined' : a(e)) || 1 !== e.nodeType)
                            throw new Error('Invalid "target" value, use a valid Element');
                          if ('copy' === this.action && e.hasAttribute('disabled'))
                            throw new Error(
                              'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                            );
                          if ('cut' === this.action && (e.hasAttribute('readonly') || e.hasAttribute('disabled')))
                            throw new Error(
                              'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                            );
                          this._target = e;
                        }
                      },
                      get: function () {
                        return this._target;
                      },
                    },
                  ]),
                  e
                );
              })();
            e.exports = o;
          });
        },
        function (e, t, n) {
          var r, a, i;
          !(function (o, s) {
            (a = [e, n(42), n(80), n(78)]),
              (r = s),
              void 0 !== (i = 'function' == typeof r ? r.apply(t, a) : r) && (e.exports = i);
          })(0, function (e, t, n, r) {
            'use strict';
            function a(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function i(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function o(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
            }
            function s(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
            }
            function u(e, t) {
              var n = 'data-clipboard-' + e;
              if (t.hasAttribute(n)) return t.getAttribute(n);
            }
            var d = a(t),
              c = a(n),
              l = a(r),
              _ =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                        ? 'symbol'
                        : typeof e;
                    },
              f = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      'value' in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r);
                  }
                }
                return function (t, n, r) {
                  return n && e(t.prototype, n), r && e(t, r), t;
                };
              })(),
              m = (function (e) {
                function t(e, n) {
                  i(this, t);
                  var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                  return r.resolveOptions(n), r.listenClick(e), r;
                }
                return (
                  s(t, e),
                  f(
                    t,
                    [
                      {
                        key: 'resolveOptions',
                        value: function () {
                          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                          (this.action = 'function' == typeof e.action ? e.action : this.defaultAction),
                            (this.target = 'function' == typeof e.target ? e.target : this.defaultTarget),
                            (this.text = 'function' == typeof e.text ? e.text : this.defaultText),
                            (this.container = 'object' === _(e.container) ? e.container : document.body);
                        },
                      },
                      {
                        key: 'listenClick',
                        value: function (e) {
                          var t = this;
                          this.listener = (0, l.default)(e, 'click', function (e) {
                            return t.onClick(e);
                          });
                        },
                      },
                      {
                        key: 'onClick',
                        value: function (e) {
                          var t = e.delegateTarget || e.currentTarget;
                          this.clipboardAction && (this.clipboardAction = null),
                            (this.clipboardAction = new d.default({
                              action: this.action(t),
                              target: this.target(t),
                              text: this.text(t),
                              container: this.container,
                              trigger: t,
                              emitter: this,
                            }));
                        },
                      },
                      {
                        key: 'defaultAction',
                        value: function (e) {
                          return u('action', e);
                        },
                      },
                      {
                        key: 'defaultTarget',
                        value: function (e) {
                          var t = u('target', e);
                          if (t) return document.querySelector(t);
                        },
                      },
                      {
                        key: 'defaultText',
                        value: function (e) {
                          return u('text', e);
                        },
                      },
                      {
                        key: 'destroy',
                        value: function () {
                          this.listener.destroy(),
                            this.clipboardAction && (this.clipboardAction.destroy(), (this.clipboardAction = null));
                        },
                      },
                    ],
                    [
                      {
                        key: 'isSupported',
                        value: function () {
                          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ['copy', 'cut'],
                            t = 'string' == typeof e ? [e] : e,
                            n = !!document.queryCommandSupported;
                          return (
                            t.forEach(function (e) {
                              n = n && !!document.queryCommandSupported(e);
                            }),
                            n
                          );
                        },
                      },
                    ]
                  ),
                  t
                );
              })(c.default);
            e.exports = m;
          });
        },
        function (e, t, n) {
          n(68), (e.exports = n(7).Object.keys);
        },
        function (e, t, n) {
          n(71), n(69), n(72), n(73), (e.exports = n(7).Symbol);
        },
        function (e, t, n) {
          n(70), n(74), (e.exports = n(26).f('iterator'));
        },
        function (e, t) {
          e.exports = function (e) {
            if ('function' != typeof e) throw TypeError(e + ' is not a function!');
            return e;
          };
        },
        function (e, t) {
          e.exports = function () {};
        },
        function (e, t, n) {
          var r = n(2),
            a = n(66),
            i = n(65);
          e.exports = function (e) {
            return function (t, n, o) {
              var s,
                u = r(t),
                d = a(u.length),
                c = i(o, d);
              if (e && n != n) {
                for (; d > c; ) if ((s = u[c++]) != s) return !0;
              } else for (; d > c; c++) if ((e || c in u) && u[c] === n) return e || c || 0;
              return !e && -1;
            };
          };
        },
        function (e, t, n) {
          var r = n(47);
          e.exports = function (e, t, n) {
            if ((r(e), void 0 === t)) return e;
            switch (n) {
              case 1:
                return function (n) {
                  return e.call(t, n);
                };
              case 2:
                return function (n, r) {
                  return e.call(t, n, r);
                };
              case 3:
                return function (n, r, a) {
                  return e.call(t, n, r, a);
                };
            }
            return function () {
              return e.apply(t, arguments);
            };
          };
        },
        function (e, t, n) {
          var r = n(9),
            a = n(33),
            i = n(19);
          e.exports = function (e) {
            var t = r(e),
              n = a.f;
            if (n) for (var o, s = n(e), u = i.f, d = 0; s.length > d; ) u.call(e, (o = s[d++])) && t.push(o);
            return t;
          };
        },
        function (e, t, n) {
          e.exports = n(0).document && document.documentElement;
        },
        function (e, t, n) {
          var r = n(27);
          e.exports = Object('z').propertyIsEnumerable(0)
            ? Object
            : function (e) {
                return 'String' == r(e) ? e.split('') : Object(e);
              };
        },
        function (e, t, n) {
          var r = n(27);
          e.exports =
            Array.isArray ||
            function (e) {
              return 'Array' == r(e);
            };
        },
        function (e, t, n) {
          'use strict';
          var r = n(31),
            a = n(12),
            i = n(20),
            o = {};
          n(4)(o, n(6)('iterator'), function () {
            return this;
          }),
            (e.exports = function (e, t, n) {
              (e.prototype = r(o, { next: a(1, n) })), i(e, t + ' Iterator');
            });
        },
        function (e, t) {
          e.exports = function (e, t) {
            return { value: t, done: !!e };
          };
        },
        function (e, t, n) {
          var r = n(9),
            a = n(2);
          e.exports = function (e, t) {
            for (var n, i = a(e), o = r(i), s = o.length, u = 0; s > u; ) if (i[(n = o[u++])] === t) return n;
          };
        },
        function (e, t, n) {
          var r = n(13)('meta'),
            a = n(11),
            i = n(1),
            o = n(5).f,
            s = 0,
            u =
              Object.isExtensible ||
              function () {
                return !0;
              },
            d = !n(8)(function () {
              return u(Object.preventExtensions({}));
            }),
            c = function (e) {
              o(e, r, { value: { i: 'O' + ++s, w: {} } });
            },
            l = function (e, t) {
              if (!a(e)) return 'symbol' == typeof e ? e : ('string' == typeof e ? 'S' : 'P') + e;
              if (!i(e, r)) {
                if (!u(e)) return 'F';
                if (!t) return 'E';
                c(e);
              }
              return e[r].i;
            },
            _ = function (e, t) {
              if (!i(e, r)) {
                if (!u(e)) return !0;
                if (!t) return !1;
                c(e);
              }
              return e[r].w;
            },
            f = function (e) {
              return d && m.NEED && u(e) && !i(e, r) && c(e), e;
            },
            m = (e.exports = { KEY: r, NEED: !1, fastKey: l, getWeak: _, onFreeze: f });
        },
        function (e, t, n) {
          var r = n(5),
            a = n(10),
            i = n(9);
          e.exports = n(3)
            ? Object.defineProperties
            : function (e, t) {
                a(e);
                for (var n, o = i(t), s = o.length, u = 0; s > u; ) r.f(e, (n = o[u++]), t[n]);
                return e;
              };
        },
        function (e, t, n) {
          var r = n(19),
            a = n(12),
            i = n(2),
            o = n(24),
            s = n(1),
            u = n(29),
            d = Object.getOwnPropertyDescriptor;
          t.f = n(3)
            ? d
            : function (e, t) {
                if (((e = i(e)), (t = o(t, !0)), u))
                  try {
                    return d(e, t);
                  } catch (e) {}
                if (s(e, t)) return a(!r.f.call(e, t), e[t]);
              };
        },
        function (e, t, n) {
          var r = n(2),
            a = n(32).f,
            i = {}.toString,
            o =
              'object' == typeof window && window && Object.getOwnPropertyNames
                ? Object.getOwnPropertyNames(window)
                : [],
            s = function (e) {
              try {
                return a(e);
              } catch (e) {
                return o.slice();
              }
            };
          e.exports.f = function (e) {
            return o && '[object Window]' == i.call(e) ? s(e) : a(r(e));
          };
        },
        function (e, t, n) {
          var r = n(1),
            a = n(36),
            i = n(21)('IE_PROTO'),
            o = Object.prototype;
          e.exports =
            Object.getPrototypeOf ||
            function (e) {
              return (
                (e = a(e)),
                r(e, i)
                  ? e[i]
                  : 'function' == typeof e.constructor && e instanceof e.constructor
                    ? e.constructor.prototype
                    : e instanceof Object
                      ? o
                      : null
              );
            };
        },
        function (e, t, n) {
          var r = n(16),
            a = n(7),
            i = n(8);
          e.exports = function (e, t) {
            var n = (a.Object || {})[e] || Object[e],
              o = {};
            (o[e] = t(n)),
              r(
                r.S +
                  r.F *
                    i(function () {
                      n(1);
                    }),
                'Object',
                o
              );
          };
        },
        function (e, t, n) {
          var r = n(23),
            a = n(14);
          e.exports = function (e) {
            return function (t, n) {
              var i,
                o,
                s = String(a(t)),
                u = r(n),
                d = s.length;
              return u < 0 || u >= d
                ? e
                  ? ''
                  : void 0
                : ((i = s.charCodeAt(u)),
                  i < 55296 || i > 56319 || u + 1 === d || (o = s.charCodeAt(u + 1)) < 56320 || o > 57343
                    ? e
                      ? s.charAt(u)
                      : i
                    : e
                      ? s.slice(u, u + 2)
                      : o - 56320 + ((i - 55296) << 10) + 65536);
            };
          };
        },
        function (e, t, n) {
          var r = n(23),
            a = Math.max,
            i = Math.min;
          e.exports = function (e, t) {
            return (e = r(e)), e < 0 ? a(e + t, 0) : i(e, t);
          };
        },
        function (e, t, n) {
          var r = n(23),
            a = Math.min;
          e.exports = function (e) {
            return e > 0 ? a(r(e), 9007199254740991) : 0;
          };
        },
        function (e, t, n) {
          'use strict';
          var r = n(48),
            a = n(56),
            i = n(17),
            o = n(2);
          (e.exports = n(30)(
            Array,
            'Array',
            function (e, t) {
              (this._t = o(e)), (this._i = 0), (this._k = t);
            },
            function () {
              var e = this._t,
                t = this._k,
                n = this._i++;
              return !e || n >= e.length
                ? ((this._t = void 0), a(1))
                : 'keys' == t
                  ? a(0, n)
                  : 'values' == t
                    ? a(0, e[n])
                    : a(0, [n, e[n]]);
            },
            'values'
          )),
            (i.Arguments = i.Array),
            r('keys'),
            r('values'),
            r('entries');
        },
        function (e, t, n) {
          var r = n(36),
            a = n(9);
          n(63)('keys', function () {
            return function (e) {
              return a(r(e));
            };
          });
        },
        function (e, t) {},
        function (e, t, n) {
          'use strict';
          var r = n(64)(!0);
          n(30)(
            String,
            'String',
            function (e) {
              (this._t = String(e)), (this._i = 0);
            },
            function () {
              var e,
                t = this._t,
                n = this._i;
              return n >= t.length
                ? { value: void 0, done: !0 }
                : ((e = r(t, n)), (this._i += e.length), { value: e, done: !1 });
            }
          );
        },
        function (e, t, n) {
          'use strict';
          var r = n(0),
            a = n(1),
            i = n(3),
            o = n(16),
            s = n(35),
            u = n(58).KEY,
            d = n(8),
            c = n(22),
            l = n(20),
            _ = n(13),
            f = n(6),
            m = n(26),
            h = n(25),
            p = n(57),
            y = n(51),
            v = n(54),
            M = n(10),
            g = n(2),
            L = n(24),
            Y = n(12),
            k = n(31),
            b = n(61),
            w = n(60),
            D = n(5),
            T = n(9),
            S = w.f,
            j = D.f,
            x = b.f,
            H = r.Symbol,
            O = r.JSON,
            A = O && O.stringify,
            E = f('_hidden'),
            P = f('toPrimitive'),
            $ = {}.propertyIsEnumerable,
            C = c('symbol-registry'),
            F = c('symbols'),
            W = c('op-symbols'),
            I = Object.prototype,
            R = 'function' == typeof H,
            N = r.QObject,
            z = !N || !N.prototype || !N.prototype.findChild,
            J =
              i &&
              d(function () {
                return (
                  7 !=
                  k(
                    j({}, 'a', {
                      get: function () {
                        return j(this, 'a', { value: 7 }).a;
                      },
                    })
                  ).a
                );
              })
                ? function (e, t, n) {
                    var r = S(I, t);
                    r && delete I[t], j(e, t, n), r && e !== I && j(I, t, r);
                  }
                : j,
            U = function (e) {
              var t = (F[e] = k(H.prototype));
              return (t._k = e), t;
            },
            V =
              R && 'symbol' == typeof H.iterator
                ? function (e) {
                    return 'symbol' == typeof e;
                  }
                : function (e) {
                    return e instanceof H;
                  },
            G = function (e, t, n) {
              return (
                e === I && G(W, t, n),
                M(e),
                (t = L(t, !0)),
                M(n),
                a(F, t)
                  ? (n.enumerable
                      ? (a(e, E) && e[E][t] && (e[E][t] = !1), (n = k(n, { enumerable: Y(0, !1) })))
                      : (a(e, E) || j(e, E, Y(1, {})), (e[E][t] = !0)),
                    J(e, t, n))
                  : j(e, t, n)
              );
            },
            q = function (e, t) {
              M(e);
              for (var n, r = y((t = g(t))), a = 0, i = r.length; i > a; ) G(e, (n = r[a++]), t[n]);
              return e;
            },
            B = function (e, t) {
              return void 0 === t ? k(e) : q(k(e), t);
            },
            K = function (e) {
              var t = $.call(this, (e = L(e, !0)));
              return (
                !(this === I && a(F, e) && !a(W, e)) &&
                (!(t || !a(this, e) || !a(F, e) || (a(this, E) && this[E][e])) || t)
              );
            },
            Z = function (e, t) {
              if (((e = g(e)), (t = L(t, !0)), e !== I || !a(F, t) || a(W, t))) {
                var n = S(e, t);
                return !n || !a(F, t) || (a(e, E) && e[E][t]) || (n.enumerable = !0), n;
              }
            },
            Q = function (e) {
              for (var t, n = x(g(e)), r = [], i = 0; n.length > i; )
                a(F, (t = n[i++])) || t == E || t == u || r.push(t);
              return r;
            },
            X = function (e) {
              for (var t, n = e === I, r = x(n ? W : g(e)), i = [], o = 0; r.length > o; )
                !a(F, (t = r[o++])) || (n && !a(I, t)) || i.push(F[t]);
              return i;
            };
          R ||
            ((H = function () {
              if (this instanceof H) throw TypeError('Symbol is not a constructor!');
              var e = _(arguments.length > 0 ? arguments[0] : void 0),
                t = function (n) {
                  this === I && t.call(W, n), a(this, E) && a(this[E], e) && (this[E][e] = !1), J(this, e, Y(1, n));
                };
              return i && z && J(I, e, { configurable: !0, set: t }), U(e);
            }),
            s(H.prototype, 'toString', function () {
              return this._k;
            }),
            (w.f = Z),
            (D.f = G),
            (n(32).f = b.f = Q),
            (n(19).f = K),
            (n(33).f = X),
            i && !n(18) && s(I, 'propertyIsEnumerable', K, !0),
            (m.f = function (e) {
              return U(f(e));
            })),
            o(o.G + o.W + o.F * !R, { Symbol: H });
          for (
            var ee =
                'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
                  ','
                ),
              te = 0;
            ee.length > te;

          )
            f(ee[te++]);
          for (var ee = T(f.store), te = 0; ee.length > te; ) h(ee[te++]);
          o(o.S + o.F * !R, 'Symbol', {
            for: function (e) {
              return a(C, (e += '')) ? C[e] : (C[e] = H(e));
            },
            keyFor: function (e) {
              if (V(e)) return p(C, e);
              throw TypeError(e + ' is not a symbol!');
            },
            useSetter: function () {
              z = !0;
            },
            useSimple: function () {
              z = !1;
            },
          }),
            o(o.S + o.F * !R, 'Object', {
              create: B,
              defineProperty: G,
              defineProperties: q,
              getOwnPropertyDescriptor: Z,
              getOwnPropertyNames: Q,
              getOwnPropertySymbols: X,
            }),
            O &&
              o(
                o.S +
                  o.F *
                    (!R ||
                      d(function () {
                        var e = H();
                        return '[null]' != A([e]) || '{}' != A({ a: e }) || '{}' != A(Object(e));
                      })),
                'JSON',
                {
                  stringify: function (e) {
                    if (void 0 !== e && !V(e)) {
                      for (var t, n, r = [e], a = 1; arguments.length > a; ) r.push(arguments[a++]);
                      return (
                        (t = r[1]),
                        'function' == typeof t && (n = t),
                        (!n && v(t)) ||
                          (t = function (e, t) {
                            if ((n && (t = n.call(this, e, t)), !V(t))) return t;
                          }),
                        (r[1] = t),
                        A.apply(O, r)
                      );
                    }
                  },
                }
              ),
            H.prototype[P] || n(4)(H.prototype, P, H.prototype.valueOf),
            l(H, 'Symbol'),
            l(Math, 'Math', !0),
            l(r.JSON, 'JSON', !0);
        },
        function (e, t, n) {
          n(25)('asyncIterator');
        },
        function (e, t, n) {
          n(25)('observable');
        },
        function (e, t, n) {
          n(67);
          for (
            var r = n(0),
              a = n(4),
              i = n(17),
              o = n(6)('toStringTag'),
              s = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'],
              u = 0;
            u < 5;
            u++
          ) {
            var d = s[u],
              c = r[d],
              l = c && c.prototype;
            l && !l[o] && a(l, o, d), (i[d] = i.Array);
          }
        },
        function (e, t) {
          function n(e, t) {
            for (; e && e.nodeType !== r; ) {
              if ('function' == typeof e.matches && e.matches(t)) return e;
              e = e.parentNode;
            }
          }
          var r = 9;
          if ('undefined' != typeof Element && !Element.prototype.matches) {
            var a = Element.prototype;
            a.matches =
              a.matchesSelector ||
              a.mozMatchesSelector ||
              a.msMatchesSelector ||
              a.oMatchesSelector ||
              a.webkitMatchesSelector;
          }
          e.exports = n;
        },
        function (e, t, n) {
          function r(e, t, n, r, i) {
            var o = a.apply(this, arguments);
            return (
              e.addEventListener(n, o, i),
              {
                destroy: function () {
                  e.removeEventListener(n, o, i);
                },
              }
            );
          }
          function a(e, t, n, r) {
            return function (n) {
              (n.delegateTarget = i(n.target, t)), n.delegateTarget && r.call(e, n);
            };
          }
          var i = n(75);
          e.exports = r;
        },
        function (e, t) {
          (t.node = function (e) {
            return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType;
          }),
            (t.nodeList = function (e) {
              var n = Object.prototype.toString.call(e);
              return (
                void 0 !== e &&
                ('[object NodeList]' === n || '[object HTMLCollection]' === n) &&
                'length' in e &&
                (0 === e.length || t.node(e[0]))
              );
            }),
            (t.string = function (e) {
              return 'string' == typeof e || e instanceof String;
            }),
            (t.fn = function (e) {
              return '[object Function]' === Object.prototype.toString.call(e);
            });
        },
        function (e, t, n) {
          function r(e, t, n) {
            if (!e && !t && !n) throw new Error('Missing required arguments');
            if (!s.string(t)) throw new TypeError('Second argument must be a String');
            if (!s.fn(n)) throw new TypeError('Third argument must be a Function');
            if (s.node(e)) return a(e, t, n);
            if (s.nodeList(e)) return i(e, t, n);
            if (s.string(e)) return o(e, t, n);
            throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
          }
          function a(e, t, n) {
            return (
              e.addEventListener(t, n),
              {
                destroy: function () {
                  e.removeEventListener(t, n);
                },
              }
            );
          }
          function i(e, t, n) {
            return (
              Array.prototype.forEach.call(e, function (e) {
                e.addEventListener(t, n);
              }),
              {
                destroy: function () {
                  Array.prototype.forEach.call(e, function (e) {
                    e.removeEventListener(t, n);
                  });
                },
              }
            );
          }
          function o(e, t, n) {
            return u(document.body, e, t, n);
          }
          var s = n(77),
            u = n(76);
          e.exports = r;
        },
        function (e, t) {
          function n(e) {
            var t;
            if ('SELECT' === e.nodeName) e.focus(), (t = e.value);
            else if ('INPUT' === e.nodeName || 'TEXTAREA' === e.nodeName) {
              var n = e.hasAttribute('readonly');
              n || e.setAttribute('readonly', ''),
                e.select(),
                e.setSelectionRange(0, e.value.length),
                n || e.removeAttribute('readonly'),
                (t = e.value);
            } else {
              e.hasAttribute('contenteditable') && e.focus();
              var r = window.getSelection(),
                a = document.createRange();
              a.selectNodeContents(e), r.removeAllRanges(), r.addRange(a), (t = r.toString());
            }
            return t;
          }
          e.exports = n;
        },
        function (e, t) {
          function n() {}
          (n.prototype = {
            on: function (e, t, n) {
              var r = this.e || (this.e = {});
              return (r[e] || (r[e] = [])).push({ fn: t, ctx: n }), this;
            },
            once: function (e, t, n) {
              function r() {
                a.off(e, r), t.apply(n, arguments);
              }
              var a = this;
              return (r._ = t), this.on(e, r, n);
            },
            emit: function (e) {
              var t = [].slice.call(arguments, 1),
                n = ((this.e || (this.e = {}))[e] || []).slice(),
                r = 0,
                a = n.length;
              for (r; r < a; r++) n[r].fn.apply(n[r].ctx, t);
              return this;
            },
            off: function (e, t) {
              var n = this.e || (this.e = {}),
                r = n[e],
                a = [];
              if (r && t) for (var i = 0, o = r.length; i < o; i++) r[i].fn !== t && r[i].fn._ !== t && a.push(r[i]);
              return a.length ? (n[e] = a) : delete n[e], this;
            },
          }),
            (e.exports = n);
        },
        function (e, t, n) {
          e.exports = n(37);
        },
      ]);
    });
  },
  function (e, t, n) {
    /**
     * @license
     *
     * vuex-persistedstate v2.0.0
     *
     * (c) 2017 Robin van der Vleuten <robin@webstronauts.co>
     *
     * For the full copyright and license information, please view the LICENSE
     * file that was distributed with this source code.
     */
    !(function (t, r) {
      e.exports = r(n(595), n(596));
    })(0, function (e, t) {
      'use strict';
      function n(t) {
        void 0 === t && (t = {});
        var n = t.key;
        void 0 === n && (n = 'vuex');
        var i = t.paths;
        void 0 === i && (i = []);
        var o = t.getState;
        void 0 === o &&
          (o = function (e, t) {
            var n = t.getItem(e);
            try {
              return n && 'undefined' !== n ? JSON.parse(n) : void 0;
            } catch (e) {
              return;
            }
          });
        var s = t.setState;
        void 0 === s &&
          (s = function (e, t, n) {
            return n.setItem(e, JSON.stringify(t));
          });
        var u = t.reducer;
        void 0 === u && (u = r);
        var d = t.storage;
        void 0 === d && (d = window && window.localStorage);
        var c = t.filter;
        void 0 === c &&
          (c = function () {
            return !0;
          });
        var l = t.subscriber;
        if (
          (void 0 === l &&
            (l = function (e) {
              return function (t) {
                return e.subscribe(t);
              };
            }),
          !a(d))
        )
          throw new Error('Invalid storage instance given');
        return function (t) {
          var r = o(n, d);
          'object' == typeof r && t.replaceState(e({}, t.state, r)),
            l(t)(function (e, t) {
              c(e) && s(n, u(t, i), d);
            });
        };
      }
      (e = 'default' in e ? e.default : e), (t = 'default' in t ? t.default : t);
      var r = function (e, n) {
          return 0 === n.length
            ? e
            : n.reduce(function (n, r) {
                return t.set(n, r, t.get(e, r)), n;
              }, {});
        },
        a = function (e) {
          try {
            return e.setItem('_canWriteToLocalStorage', 1), e.removeItem('_canWriteToLocalStorage'), !0;
          } catch (e) {
            return !1;
          }
        };
      return n;
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('af', {
        months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split(
          '_'
        ),
        monthsShort: 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
        weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
        weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
        weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
        meridiemParse: /vm|nm/i,
        isPM: function (e) {
          return /^nm$/i.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 12 ? (n ? 'vm' : 'VM') : n ? 'nm' : 'NM';
        },
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Vandag om] LT',
          nextDay: '[Môre om] LT',
          nextWeek: 'dddd [om] LT',
          lastDay: '[Gister om] LT',
          lastWeek: '[Laas] dddd [om] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'oor %s',
          past: '%s gelede',
          s: "'n paar sekondes",
          m: "'n minuut",
          mm: '%d minute',
          h: "'n uur",
          hh: '%d ure',
          d: "'n dag",
          dd: '%d dae',
          M: "'n maand",
          MM: '%d maande',
          y: "'n jaar",
          yy: '%d jaar',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || e >= 20 ? 'ste' : 'de');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = { 1: '١', 2: '٢', 3: '٣', 4: '٤', 5: '٥', 6: '٦', 7: '٧', 8: '٨', 9: '٩', 0: '٠' },
        n = { '١': '1', '٢': '2', '٣': '3', '٤': '4', '٥': '5', '٦': '6', '٧': '7', '٨': '8', '٩': '9', '٠': '0' },
        r = function (e) {
          return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
        },
        a = {
          s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
          m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
          h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
          d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
          M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
          y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام'],
        },
        i = function (e) {
          return function (t, n, i, o) {
            var s = r(t),
              u = a[e][r(t)];
            return 2 === s && (u = u[n ? 0 : 1]), u.replace(/%d/i, t);
          };
        },
        o = [
          'كانون الثاني يناير',
          'شباط فبراير',
          'آذار مارس',
          'نيسان أبريل',
          'أيار مايو',
          'حزيران يونيو',
          'تموز يوليو',
          'آب أغسطس',
          'أيلول سبتمبر',
          'تشرين الأول أكتوبر',
          'تشرين الثاني نوفمبر',
          'كانون الأول ديسمبر',
        ];
      return e.defineLocale('ar', {
        months: o,
        monthsShort: o,
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'D/‏M/‏YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
          return 'م' === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'ص' : 'م';
        },
        calendar: {
          sameDay: '[اليوم عند الساعة] LT',
          nextDay: '[غدًا عند الساعة] LT',
          nextWeek: 'dddd [عند الساعة] LT',
          lastDay: '[أمس عند الساعة] LT',
          lastWeek: 'dddd [عند الساعة] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'بعد %s',
          past: 'منذ %s',
          s: i('s'),
          m: i('m'),
          mm: i('m'),
          h: i('h'),
          hh: i('h'),
          d: i('d'),
          dd: i('d'),
          M: i('M'),
          MM: i('M'),
          y: i('y'),
          yy: i('y'),
        },
        preparse: function (e) {
          return e
            .replace(/\u200f/g, '')
            .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
              return n[e];
            })
            .replace(/،/g, ',');
        },
        postformat: function (e) {
          return e
            .replace(/\d/g, function (e) {
              return t[e];
            })
            .replace(/,/g, '،');
        },
        week: { dow: 6, doy: 12 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('ar-dz', {
        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'أح_إث_ثلا_أر_خم_جم_سب'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'في %s',
          past: 'منذ %s',
          s: 'ثوان',
          m: 'دقيقة',
          mm: '%d دقائق',
          h: 'ساعة',
          hh: '%d ساعات',
          d: 'يوم',
          dd: '%d أيام',
          M: 'شهر',
          MM: '%d أشهر',
          y: 'سنة',
          yy: '%d سنوات',
        },
        week: { dow: 0, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('ar-kw', {
        months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'في %s',
          past: 'منذ %s',
          s: 'ثوان',
          m: 'دقيقة',
          mm: '%d دقائق',
          h: 'ساعة',
          hh: '%d ساعات',
          d: 'يوم',
          dd: '%d أيام',
          M: 'شهر',
          MM: '%d أشهر',
          y: 'سنة',
          yy: '%d سنوات',
        },
        week: { dow: 0, doy: 12 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 0: '0' },
        n = function (e) {
          return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
        },
        r = {
          s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
          m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
          h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
          d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
          M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
          y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام'],
        },
        a = function (e) {
          return function (t, a, i, o) {
            var s = n(t),
              u = r[e][n(t)];
            return 2 === s && (u = u[a ? 0 : 1]), u.replace(/%d/i, t);
          };
        },
        i = [
          'يناير',
          'فبراير',
          'مارس',
          'أبريل',
          'مايو',
          'يونيو',
          'يوليو',
          'أغسطس',
          'سبتمبر',
          'أكتوبر',
          'نوفمبر',
          'ديسمبر',
        ];
      return e.defineLocale('ar-ly', {
        months: i,
        monthsShort: i,
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'D/‏M/‏YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
          return 'م' === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'ص' : 'م';
        },
        calendar: {
          sameDay: '[اليوم عند الساعة] LT',
          nextDay: '[غدًا عند الساعة] LT',
          nextWeek: 'dddd [عند الساعة] LT',
          lastDay: '[أمس عند الساعة] LT',
          lastWeek: 'dddd [عند الساعة] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'بعد %s',
          past: 'منذ %s',
          s: a('s'),
          m: a('m'),
          mm: a('m'),
          h: a('h'),
          hh: a('h'),
          d: a('d'),
          dd: a('d'),
          M: a('M'),
          MM: a('M'),
          y: a('y'),
          yy: a('y'),
        },
        preparse: function (e) {
          return e.replace(/\u200f/g, '').replace(/،/g, ',');
        },
        postformat: function (e) {
          return e
            .replace(/\d/g, function (e) {
              return t[e];
            })
            .replace(/,/g, '،');
        },
        week: { dow: 6, doy: 12 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('ar-ma', {
        months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'في %s',
          past: 'منذ %s',
          s: 'ثوان',
          m: 'دقيقة',
          mm: '%d دقائق',
          h: 'ساعة',
          hh: '%d ساعات',
          d: 'يوم',
          dd: '%d أيام',
          M: 'شهر',
          MM: '%d أشهر',
          y: 'سنة',
          yy: '%d سنوات',
        },
        week: { dow: 6, doy: 12 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = { 1: '١', 2: '٢', 3: '٣', 4: '٤', 5: '٥', 6: '٦', 7: '٧', 8: '٨', 9: '٩', 0: '٠' },
        n = { '١': '1', '٢': '2', '٣': '3', '٤': '4', '٥': '5', '٦': '6', '٧': '7', '٨': '8', '٩': '9', '٠': '0' };
      return e.defineLocale('ar-sa', {
        months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
          return 'م' === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'ص' : 'م';
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'في %s',
          past: 'منذ %s',
          s: 'ثوان',
          m: 'دقيقة',
          mm: '%d دقائق',
          h: 'ساعة',
          hh: '%d ساعات',
          d: 'يوم',
          dd: '%d أيام',
          M: 'شهر',
          MM: '%d أشهر',
          y: 'سنة',
          yy: '%d سنوات',
        },
        preparse: function (e) {
          return e
            .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
              return n[e];
            })
            .replace(/،/g, ',');
        },
        postformat: function (e) {
          return e
            .replace(/\d/g, function (e) {
              return t[e];
            })
            .replace(/,/g, '،');
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('ar-tn', {
        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'في %s',
          past: 'منذ %s',
          s: 'ثوان',
          m: 'دقيقة',
          mm: '%d دقائق',
          h: 'ساعة',
          hh: '%d ساعات',
          d: 'يوم',
          dd: '%d أيام',
          M: 'شهر',
          MM: '%d أشهر',
          y: 'سنة',
          yy: '%d سنوات',
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = {
        1: '-inci',
        5: '-inci',
        8: '-inci',
        70: '-inci',
        80: '-inci',
        2: '-nci',
        7: '-nci',
        20: '-nci',
        50: '-nci',
        3: '-üncü',
        4: '-üncü',
        100: '-üncü',
        6: '-ncı',
        9: '-uncu',
        10: '-uncu',
        30: '-uncu',
        60: '-ıncı',
        90: '-ıncı',
      };
      return e.defineLocale('az', {
        months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
        monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
        weekdays: 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
        weekdaysShort: 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
        weekdaysMin: 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[bugün saat] LT',
          nextDay: '[sabah saat] LT',
          nextWeek: '[gələn həftə] dddd [saat] LT',
          lastDay: '[dünən] LT',
          lastWeek: '[keçən həftə] dddd [saat] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s sonra',
          past: '%s əvvəl',
          s: 'birneçə saniyyə',
          m: 'bir dəqiqə',
          mm: '%d dəqiqə',
          h: 'bir saat',
          hh: '%d saat',
          d: 'bir gün',
          dd: '%d gün',
          M: 'bir ay',
          MM: '%d ay',
          y: 'bir il',
          yy: '%d il',
        },
        meridiemParse: /gecə|səhər|gündüz|axşam/,
        isPM: function (e) {
          return /^(gündüz|axşam)$/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'gecə' : e < 12 ? 'səhər' : e < 17 ? 'gündüz' : 'axşam';
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        ordinal: function (e) {
          if (0 === e) return e + '-ıncı';
          var n = e % 10,
            r = (e % 100) - n,
            a = e >= 100 ? 100 : null;
          return e + (t[n] || t[r] || t[a]);
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e, t) {
        var n = e.split('_');
        return t % 10 == 1 && t % 100 != 11
          ? n[0]
          : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
            ? n[1]
            : n[2];
      }
      function n(e, n, r) {
        var a = {
          mm: n ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
          hh: n ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
          dd: 'дзень_дні_дзён',
          MM: 'месяц_месяцы_месяцаў',
          yy: 'год_гады_гадоў',
        };
        return 'm' === r
          ? n
            ? 'хвіліна'
            : 'хвіліну'
          : 'h' === r
            ? n
              ? 'гадзіна'
              : 'гадзіну'
            : e + ' ' + t(a[r], +e);
      }
      return e.defineLocale('be', {
        months: {
          format:
            'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split(
              '_'
            ),
          standalone:
            'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split(
              '_'
            ),
        },
        monthsShort: 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
        weekdays: {
          format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
          standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
          isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/,
        },
        weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY г.',
          LLL: 'D MMMM YYYY г., HH:mm',
          LLLL: 'dddd, D MMMM YYYY г., HH:mm',
        },
        calendar: {
          sameDay: '[Сёння ў] LT',
          nextDay: '[Заўтра ў] LT',
          lastDay: '[Учора ў] LT',
          nextWeek: function () {
            return '[У] dddd [ў] LT';
          },
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 5:
              case 6:
                return '[У мінулую] dddd [ў] LT';
              case 1:
              case 2:
              case 4:
                return '[У мінулы] dddd [ў] LT';
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'праз %s',
          past: '%s таму',
          s: 'некалькі секунд',
          m: n,
          mm: n,
          h: n,
          hh: n,
          d: 'дзень',
          dd: n,
          M: 'месяц',
          MM: n,
          y: 'год',
          yy: n,
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM: function (e) {
          return /^(дня|вечара)$/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'ночы' : e < 12 ? 'раніцы' : e < 17 ? 'дня' : 'вечара';
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function (e, t) {
          switch (t) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
              return (e % 10 != 2 && e % 10 != 3) || e % 100 == 12 || e % 100 == 13 ? e + '-ы' : e + '-і';
            case 'D':
              return e + '-га';
            default:
              return e;
          }
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('bg', {
        months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
        weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
        weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
        weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'D.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY H:mm',
          LLLL: 'dddd, D MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[Днес в] LT',
          nextDay: '[Утре в] LT',
          nextWeek: 'dddd [в] LT',
          lastDay: '[Вчера в] LT',
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 6:
                return '[В изминалата] dddd [в] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                return '[В изминалия] dddd [в] LT';
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'след %s',
          past: 'преди %s',
          s: 'няколко секунди',
          m: 'минута',
          mm: '%d минути',
          h: 'час',
          hh: '%d часа',
          d: 'ден',
          dd: '%d дни',
          M: 'месец',
          MM: '%d месеца',
          y: 'година',
          yy: '%d години',
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function (e) {
          var t = e % 10,
            n = e % 100;
          return 0 === e
            ? e + '-ев'
            : 0 === n
              ? e + '-ен'
              : n > 10 && n < 20
                ? e + '-ти'
                : 1 === t
                  ? e + '-ви'
                  : 2 === t
                    ? e + '-ри'
                    : 7 === t || 8 === t
                      ? e + '-ми'
                      : e + '-ти';
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = { 1: '১', 2: '২', 3: '৩', 4: '৪', 5: '৫', 6: '৬', 7: '৭', 8: '৮', 9: '৯', 0: '০' },
        n = { '১': '1', '২': '2', '৩': '3', '৪': '4', '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9', '০': '0' };
      return e.defineLocale('bn', {
        months: 'জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
        monthsShort: 'জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
        weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
        weekdaysShort: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
        weekdaysMin: 'রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি'.split('_'),
        longDateFormat: {
          LT: 'A h:mm সময়',
          LTS: 'A h:mm:ss সময়',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm সময়',
          LLLL: 'dddd, D MMMM YYYY, A h:mm সময়',
        },
        calendar: {
          sameDay: '[আজ] LT',
          nextDay: '[আগামীকাল] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[গতকাল] LT',
          lastWeek: '[গত] dddd, LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s পরে',
          past: '%s আগে',
          s: 'কয়েক সেকেন্ড',
          m: 'এক মিনিট',
          mm: '%d মিনিট',
          h: 'এক ঘন্টা',
          hh: '%d ঘন্টা',
          d: 'এক দিন',
          dd: '%d দিন',
          M: 'এক মাস',
          MM: '%d মাস',
          y: 'এক বছর',
          yy: '%d বছর',
        },
        preparse: function (e) {
          return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), ('রাত' === t && e >= 4) || ('দুপুর' === t && e < 5) || 'বিকাল' === t ? e + 12 : e;
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'রাত' : e < 10 ? 'সকাল' : e < 17 ? 'দুপুর' : e < 20 ? 'বিকাল' : 'রাত';
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = { 1: '༡', 2: '༢', 3: '༣', 4: '༤', 5: '༥', 6: '༦', 7: '༧', 8: '༨', 9: '༩', 0: '༠' },
        n = { '༡': '1', '༢': '2', '༣': '3', '༤': '4', '༥': '5', '༦': '6', '༧': '7', '༨': '8', '༩': '9', '༠': '0' };
      return e.defineLocale('bo', {
        months:
          'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split(
            '_'
          ),
        monthsShort:
          'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split(
            '_'
          ),
        weekdays: 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
        weekdaysShort: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
        weekdaysMin: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
        longDateFormat: {
          LT: 'A h:mm',
          LTS: 'A h:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm',
          LLLL: 'dddd, D MMMM YYYY, A h:mm',
        },
        calendar: {
          sameDay: '[དི་རིང] LT',
          nextDay: '[སང་ཉིན] LT',
          nextWeek: '[བདུན་ཕྲག་རྗེས་མ], LT',
          lastDay: '[ཁ་སང] LT',
          lastWeek: '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s ལ་',
          past: '%s སྔན་ལ',
          s: 'ལམ་སང',
          m: 'སྐར་མ་གཅིག',
          mm: '%d སྐར་མ',
          h: 'ཆུ་ཚོད་གཅིག',
          hh: '%d ཆུ་ཚོད',
          d: 'ཉིན་གཅིག',
          dd: '%d ཉིན་',
          M: 'ཟླ་བ་གཅིག',
          MM: '%d ཟླ་བ',
          y: 'ལོ་གཅིག',
          yy: '%d ལོ',
        },
        preparse: function (e) {
          return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            ('མཚན་མོ' === t && e >= 4) || ('ཉིན་གུང' === t && e < 5) || 'དགོང་དག' === t ? e + 12 : e
          );
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'མཚན་མོ' : e < 10 ? 'ཞོགས་ཀས' : e < 17 ? 'ཉིན་གུང' : e < 20 ? 'དགོང་དག' : 'མཚན་མོ';
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e, t, n) {
        return e + ' ' + a({ mm: 'munutenn', MM: 'miz', dd: 'devezh' }[n], e);
      }
      function n(e) {
        switch (r(e)) {
          case 1:
          case 3:
          case 4:
          case 5:
          case 9:
            return e + ' bloaz';
          default:
            return e + ' vloaz';
        }
      }
      function r(e) {
        return e > 9 ? r(e % 10) : e;
      }
      function a(e, t) {
        return 2 === t ? i(e) : e;
      }
      function i(e) {
        var t = { m: 'v', b: 'v', d: 'z' };
        return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1);
      }
      return e.defineLocale('br', {
        months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split('_'),
        monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split('_'),
        weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split('_'),
        weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
        weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'h[e]mm A',
          LTS: 'h[e]mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D [a viz] MMMM YYYY',
          LLL: 'D [a viz] MMMM YYYY h[e]mm A',
          LLLL: 'dddd, D [a viz] MMMM YYYY h[e]mm A',
        },
        calendar: {
          sameDay: '[Hiziv da] LT',
          nextDay: "[Warc'hoazh da] LT",
          nextWeek: 'dddd [da] LT',
          lastDay: "[Dec'h da] LT",
          lastWeek: 'dddd [paset da] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'a-benn %s',
          past: "%s 'zo",
          s: 'un nebeud segondennoù',
          m: 'ur vunutenn',
          mm: t,
          h: 'un eur',
          hh: '%d eur',
          d: 'un devezh',
          dd: t,
          M: 'ur miz',
          MM: t,
          y: 'ur bloaz',
          yy: n,
        },
        dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
        ordinal: function (e) {
          return e + (1 === e ? 'añ' : 'vet');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e, t, n) {
        var r = e + ' ';
        switch (n) {
          case 'm':
            return t ? 'jedna minuta' : 'jedne minute';
          case 'mm':
            return (r += 1 === e ? 'minuta' : 2 === e || 3 === e || 4 === e ? 'minute' : 'minuta');
          case 'h':
            return t ? 'jedan sat' : 'jednog sata';
          case 'hh':
            return (r += 1 === e ? 'sat' : 2 === e || 3 === e || 4 === e ? 'sata' : 'sati');
          case 'dd':
            return (r += 1 === e ? 'dan' : 'dana');
          case 'MM':
            return (r += 1 === e ? 'mjesec' : 2 === e || 3 === e || 4 === e ? 'mjeseca' : 'mjeseci');
          case 'yy':
            return (r += 1 === e ? 'godina' : 2 === e || 3 === e || 4 === e ? 'godine' : 'godina');
        }
      }
      return e.defineLocale('bs', {
        months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[danas u] LT',
          nextDay: '[sutra u] LT',
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return '[u] [nedjelju] [u] LT';
              case 3:
                return '[u] [srijedu] [u] LT';
              case 6:
                return '[u] [subotu] [u] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                return '[u] dddd [u] LT';
            }
          },
          lastDay: '[jučer u] LT',
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
                return '[prošlu] dddd [u] LT';
              case 6:
                return '[prošle] [subote] [u] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                return '[prošli] dddd [u] LT';
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'za %s',
          past: 'prije %s',
          s: 'par sekundi',
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: 'dan',
          dd: t,
          M: 'mjesec',
          MM: t,
          y: 'godinu',
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('ca', {
        months: {
          standalone: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
          format:
            "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split(
              '_'
            ),
          isFormat: /D[oD]?(\s)+MMMM/,
        },
        monthsShort: 'gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
        weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
        weekdaysMin: 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: '[el] D MMMM [de] YYYY',
          ll: 'D MMM YYYY',
          LLL: '[el] D MMMM [de] YYYY [a les] H:mm',
          lll: 'D MMM YYYY, H:mm',
          LLLL: '[el] dddd D MMMM [de] YYYY [a les] H:mm',
          llll: 'ddd D MMM YYYY, H:mm',
        },
        calendar: {
          sameDay: function () {
            return '[avui a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
          },
          nextDay: function () {
            return '[demà a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
          },
          nextWeek: function () {
            return 'dddd [a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
          },
          lastDay: function () {
            return '[ahir a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
          },
          lastWeek: function () {
            return '[el] dddd [passat a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: "d'aquí %s",
          past: 'fa %s',
          s: 'uns segons',
          m: 'un minut',
          mm: '%d minuts',
          h: 'una hora',
          hh: '%d hores',
          d: 'un dia',
          dd: '%d dies',
          M: 'un mes',
          MM: '%d mesos',
          y: 'un any',
          yy: '%d anys',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal: function (e, t) {
          var n = 1 === e ? 'r' : 2 === e ? 'n' : 3 === e ? 'r' : 4 === e ? 't' : 'è';
          return ('w' !== t && 'W' !== t) || (n = 'a'), e + n;
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e) {
        return e > 1 && e < 5 && 1 != ~~(e / 10);
      }
      function n(e, n, r, a) {
        var i = e + ' ';
        switch (r) {
          case 's':
            return n || a ? 'pár sekund' : 'pár sekundami';
          case 'm':
            return n ? 'minuta' : a ? 'minutu' : 'minutou';
          case 'mm':
            return n || a ? i + (t(e) ? 'minuty' : 'minut') : i + 'minutami';
          case 'h':
            return n ? 'hodina' : a ? 'hodinu' : 'hodinou';
          case 'hh':
            return n || a ? i + (t(e) ? 'hodiny' : 'hodin') : i + 'hodinami';
          case 'd':
            return n || a ? 'den' : 'dnem';
          case 'dd':
            return n || a ? i + (t(e) ? 'dny' : 'dní') : i + 'dny';
          case 'M':
            return n || a ? 'měsíc' : 'měsícem';
          case 'MM':
            return n || a ? i + (t(e) ? 'měsíce' : 'měsíců') : i + 'měsíci';
          case 'y':
            return n || a ? 'rok' : 'rokem';
          case 'yy':
            return n || a ? i + (t(e) ? 'roky' : 'let') : i + 'lety';
        }
      }
      var r = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
        a = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
      return e.defineLocale('cs', {
        months: r,
        monthsShort: a,
        monthsParse: (function (e, t) {
          var n,
            r = [];
          for (n = 0; n < 12; n++) r[n] = new RegExp('^' + e[n] + '$|^' + t[n] + '$', 'i');
          return r;
        })(r, a),
        shortMonthsParse: (function (e) {
          var t,
            n = [];
          for (t = 0; t < 12; t++) n[t] = new RegExp('^' + e[t] + '$', 'i');
          return n;
        })(a),
        longMonthsParse: (function (e) {
          var t,
            n = [];
          for (t = 0; t < 12; t++) n[t] = new RegExp('^' + e[t] + '$', 'i');
          return n;
        })(r),
        weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
        weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
        weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd D. MMMM YYYY H:mm',
          l: 'D. M. YYYY',
        },
        calendar: {
          sameDay: '[dnes v] LT',
          nextDay: '[zítra v] LT',
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return '[v neděli v] LT';
              case 1:
              case 2:
                return '[v] dddd [v] LT';
              case 3:
                return '[ve středu v] LT';
              case 4:
                return '[ve čtvrtek v] LT';
              case 5:
                return '[v pátek v] LT';
              case 6:
                return '[v sobotu v] LT';
            }
          },
          lastDay: '[včera v] LT',
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return '[minulou neděli v] LT';
              case 1:
              case 2:
                return '[minulé] dddd [v] LT';
              case 3:
                return '[minulou středu v] LT';
              case 4:
              case 5:
                return '[minulý] dddd [v] LT';
              case 6:
                return '[minulou sobotu v] LT';
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'za %s',
          past: 'před %s',
          s: n,
          m: n,
          mm: n,
          h: n,
          hh: n,
          d: n,
          dd: n,
          M: n,
          MM: n,
          y: n,
          yy: n,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('cv', {
        months: 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
        monthsShort: 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
        weekdays: 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
        weekdaysShort: 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
        weekdaysMin: 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD-MM-YYYY',
          LL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
          LLL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
          LLLL: 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
        },
        calendar: {
          sameDay: '[Паян] LT [сехетре]',
          nextDay: '[Ыран] LT [сехетре]',
          lastDay: '[Ӗнер] LT [сехетре]',
          nextWeek: '[Ҫитес] dddd LT [сехетре]',
          lastWeek: '[Иртнӗ] dddd LT [сехетре]',
          sameElse: 'L',
        },
        relativeTime: {
          future: function (e) {
            return e + (/сехет$/i.exec(e) ? 'рен' : /ҫул$/i.exec(e) ? 'тан' : 'ран');
          },
          past: '%s каялла',
          s: 'пӗр-ик ҫеккунт',
          m: 'пӗр минут',
          mm: '%d минут',
          h: 'пӗр сехет',
          hh: '%d сехет',
          d: 'пӗр кун',
          dd: '%d кун',
          M: 'пӗр уйӑх',
          MM: '%d уйӑх',
          y: 'пӗр ҫул',
          yy: '%d ҫул',
        },
        dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
        ordinal: '%d-мӗш',
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('cy', {
        months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
        monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
        weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
        weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
        weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Heddiw am] LT',
          nextDay: '[Yfory am] LT',
          nextWeek: 'dddd [am] LT',
          lastDay: '[Ddoe am] LT',
          lastWeek: 'dddd [diwethaf am] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'mewn %s',
          past: '%s yn ôl',
          s: 'ychydig eiliadau',
          m: 'munud',
          mm: '%d munud',
          h: 'awr',
          hh: '%d awr',
          d: 'diwrnod',
          dd: '%d diwrnod',
          M: 'mis',
          MM: '%d mis',
          y: 'blwyddyn',
          yy: '%d flynedd',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        ordinal: function (e) {
          var t = e,
            n = '',
            r = [
              '',
              'af',
              'il',
              'ydd',
              'ydd',
              'ed',
              'ed',
              'ed',
              'fed',
              'fed',
              'fed',
              'eg',
              'fed',
              'eg',
              'eg',
              'fed',
              'eg',
              'eg',
              'fed',
              'eg',
              'fed',
            ];
          return (
            t > 20
              ? (n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? 'fed' : 'ain')
              : t > 0 && (n = r[t]),
            e + n
          );
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('da', {
        months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort: 'søn_man_tir_ons_tor_fre_lør'.split('_'),
        weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY HH:mm',
          LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm',
        },
        calendar: {
          sameDay: '[i dag kl.] LT',
          nextDay: '[i morgen kl.] LT',
          nextWeek: 'på dddd [kl.] LT',
          lastDay: '[i går kl.] LT',
          lastWeek: '[i] dddd[s kl.] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'om %s',
          past: '%s siden',
          s: 'få sekunder',
          m: 'et minut',
          mm: '%d minutter',
          h: 'en time',
          hh: '%d timer',
          d: 'en dag',
          dd: '%d dage',
          M: 'en måned',
          MM: '%d måneder',
          y: 'et år',
          yy: '%d år',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e, t, n, r) {
        var a = {
          m: ['eine Minute', 'einer Minute'],
          h: ['eine Stunde', 'einer Stunde'],
          d: ['ein Tag', 'einem Tag'],
          dd: [e + ' Tage', e + ' Tagen'],
          M: ['ein Monat', 'einem Monat'],
          MM: [e + ' Monate', e + ' Monaten'],
          y: ['ein Jahr', 'einem Jahr'],
          yy: [e + ' Jahre', e + ' Jahren'],
        };
        return t ? a[n][0] : a[n][1];
      }
      return e.defineLocale('de', {
        months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY HH:mm',
          LLLL: 'dddd, D. MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[heute um] LT [Uhr]',
          sameElse: 'L',
          nextDay: '[morgen um] LT [Uhr]',
          nextWeek: 'dddd [um] LT [Uhr]',
          lastDay: '[gestern um] LT [Uhr]',
          lastWeek: '[letzten] dddd [um] LT [Uhr]',
        },
        relativeTime: {
          future: 'in %s',
          past: 'vor %s',
          s: 'ein paar Sekunden',
          m: t,
          mm: '%d Minuten',
          h: t,
          hh: '%d Stunden',
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e, t, n, r) {
        var a = {
          m: ['eine Minute', 'einer Minute'],
          h: ['eine Stunde', 'einer Stunde'],
          d: ['ein Tag', 'einem Tag'],
          dd: [e + ' Tage', e + ' Tagen'],
          M: ['ein Monat', 'einem Monat'],
          MM: [e + ' Monate', e + ' Monaten'],
          y: ['ein Jahr', 'einem Jahr'],
          yy: [e + ' Jahre', e + ' Jahren'],
        };
        return t ? a[n][0] : a[n][1];
      }
      return e.defineLocale('de-at', {
        months: 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY HH:mm',
          LLLL: 'dddd, D. MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[heute um] LT [Uhr]',
          sameElse: 'L',
          nextDay: '[morgen um] LT [Uhr]',
          nextWeek: 'dddd [um] LT [Uhr]',
          lastDay: '[gestern um] LT [Uhr]',
          lastWeek: '[letzten] dddd [um] LT [Uhr]',
        },
        relativeTime: {
          future: 'in %s',
          past: 'vor %s',
          s: 'ein paar Sekunden',
          m: t,
          mm: '%d Minuten',
          h: t,
          hh: '%d Stunden',
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e, t, n, r) {
        var a = {
          m: ['eine Minute', 'einer Minute'],
          h: ['eine Stunde', 'einer Stunde'],
          d: ['ein Tag', 'einem Tag'],
          dd: [e + ' Tage', e + ' Tagen'],
          M: ['ein Monat', 'einem Monat'],
          MM: [e + ' Monate', e + ' Monaten'],
          y: ['ein Jahr', 'einem Jahr'],
          yy: [e + ' Jahre', e + ' Jahren'],
        };
        return t ? a[n][0] : a[n][1];
      }
      return e.defineLocale('de-ch', {
        months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Febr._März_April_Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY HH.mm',
          LLLL: 'dddd, D. MMMM YYYY HH.mm',
        },
        calendar: {
          sameDay: '[heute um] LT [Uhr]',
          sameElse: 'L',
          nextDay: '[morgen um] LT [Uhr]',
          nextWeek: 'dddd [um] LT [Uhr]',
          lastDay: '[gestern um] LT [Uhr]',
          lastWeek: '[letzten] dddd [um] LT [Uhr]',
        },
        relativeTime: {
          future: 'in %s',
          past: 'vor %s',
          s: 'ein paar Sekunden',
          m: t,
          mm: '%d Minuten',
          h: t,
          hh: '%d Stunden',
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = [
          'ޖެނުއަރީ',
          'ފެބްރުއަރީ',
          'މާރިޗު',
          'އޭޕްރީލު',
          'މޭ',
          'ޖޫން',
          'ޖުލައި',
          'އޯގަސްޓު',
          'ސެޕްޓެމްބަރު',
          'އޮކްޓޯބަރު',
          'ނޮވެމްބަރު',
          'ޑިސެމްބަރު',
        ],
        n = ['އާދިއްތަ', 'ހޯމަ', 'އަންގާރަ', 'ބުދަ', 'ބުރާސްފަތި', 'ހުކުރު', 'ހޮނިހިރު'];
      return e.defineLocale('dv', {
        months: t,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'D/M/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        meridiemParse: /މކ|މފ/,
        isPM: function (e) {
          return 'މފ' === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'މކ' : 'މފ';
        },
        calendar: {
          sameDay: '[މިއަދު] LT',
          nextDay: '[މާދަމާ] LT',
          nextWeek: 'dddd LT',
          lastDay: '[އިއްޔެ] LT',
          lastWeek: '[ފާއިތުވި] dddd LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'ތެރޭގައި %s',
          past: 'ކުރިން %s',
          s: 'ސިކުންތުކޮޅެއް',
          m: 'މިނިޓެއް',
          mm: 'މިނިޓު %d',
          h: 'ގަޑިއިރެއް',
          hh: 'ގަޑިއިރު %d',
          d: 'ދުވަހެއް',
          dd: 'ދުވަސް %d',
          M: 'މަހެއް',
          MM: 'މަސް %d',
          y: 'އަހަރެއް',
          yy: 'އަހަރު %d',
        },
        preparse: function (e) {
          return e.replace(/،/g, ',');
        },
        postformat: function (e) {
          return e.replace(/,/g, '،');
        },
        week: { dow: 7, doy: 12 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e) {
        return e instanceof Function || '[object Function]' === Object.prototype.toString.call(e);
      }
      return e.defineLocale('el', {
        monthsNominativeEl:
          'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split(
            '_'
          ),
        monthsGenitiveEl:
          'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split(
            '_'
          ),
        months: function (e, t) {
          return e
            ? /D/.test(t.substring(0, t.indexOf('MMMM')))
              ? this._monthsGenitiveEl[e.month()]
              : this._monthsNominativeEl[e.month()]
            : this._monthsNominativeEl;
        },
        monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
        weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
        weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
        weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
        meridiem: function (e, t, n) {
          return e > 11 ? (n ? 'μμ' : 'ΜΜ') : n ? 'πμ' : 'ΠΜ';
        },
        isPM: function (e) {
          return 'μ' === (e + '').toLowerCase()[0];
        },
        meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A',
        },
        calendarEl: {
          sameDay: '[Σήμερα {}] LT',
          nextDay: '[Αύριο {}] LT',
          nextWeek: 'dddd [{}] LT',
          lastDay: '[Χθες {}] LT',
          lastWeek: function () {
            switch (this.day()) {
              case 6:
                return '[το προηγούμενο] dddd [{}] LT';
              default:
                return '[την προηγούμενη] dddd [{}] LT';
            }
          },
          sameElse: 'L',
        },
        calendar: function (e, n) {
          var r = this._calendarEl[e],
            a = n && n.hours();
          return t(r) && (r = r.apply(n)), r.replace('{}', a % 12 == 1 ? 'στη' : 'στις');
        },
        relativeTime: {
          future: 'σε %s',
          past: '%s πριν',
          s: 'λίγα δευτερόλεπτα',
          m: 'ένα λεπτό',
          mm: '%d λεπτά',
          h: 'μία ώρα',
          hh: '%d ώρες',
          d: 'μία μέρα',
          dd: '%d μέρες',
          M: 'ένας μήνας',
          MM: '%d μήνες',
          y: 'ένας χρόνος',
          yy: '%d χρόνια',
        },
        dayOfMonthOrdinalParse: /\d{1,2}η/,
        ordinal: '%dη',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('en-au', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A',
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~((e % 100) / 10) ? 'th' : 1 === t ? 'st' : 2 === t ? 'nd' : 3 === t ? 'rd' : 'th');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('en-ca', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'YYYY-MM-DD',
          LL: 'MMMM D, YYYY',
          LLL: 'MMMM D, YYYY h:mm A',
          LLLL: 'dddd, MMMM D, YYYY h:mm A',
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~((e % 100) / 10) ? 'th' : 1 === t ? 'st' : 2 === t ? 'nd' : 3 === t ? 'rd' : 'th');
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('en-gb', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~((e % 100) / 10) ? 'th' : 1 === t ? 'st' : 2 === t ? 'nd' : 3 === t ? 'rd' : 'th');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('en-ie', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD-MM-YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~((e % 100) / 10) ? 'th' : 1 === t ? 'st' : 2 === t ? 'nd' : 3 === t ? 'rd' : 'th');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('en-nz', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A',
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~((e % 100) / 10) ? 'th' : 1 === t ? 'st' : 2 === t ? 'nd' : 3 === t ? 'rd' : 'th');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('eo', {
        months: 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
        weekdays: 'dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato'.split('_'),
        weekdaysShort: 'dim_lun_mard_merk_ĵaŭ_ven_sab'.split('_'),
        weekdaysMin: 'di_lu_ma_me_ĵa_ve_sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'D[-a de] MMMM, YYYY',
          LLL: 'D[-a de] MMMM, YYYY HH:mm',
          LLLL: 'dddd, [la] D[-a de] MMMM, YYYY HH:mm',
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function (e) {
          return 'p' === e.charAt(0).toLowerCase();
        },
        meridiem: function (e, t, n) {
          return e > 11 ? (n ? 'p.t.m.' : 'P.T.M.') : n ? 'a.t.m.' : 'A.T.M.';
        },
        calendar: {
          sameDay: '[Hodiaŭ je] LT',
          nextDay: '[Morgaŭ je] LT',
          nextWeek: 'dddd [je] LT',
          lastDay: '[Hieraŭ je] LT',
          lastWeek: '[pasinta] dddd [je] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'post %s',
          past: 'antaŭ %s',
          s: 'sekundoj',
          m: 'minuto',
          mm: '%d minutoj',
          h: 'horo',
          hh: '%d horoj',
          d: 'tago',
          dd: '%d tagoj',
          M: 'monato',
          MM: '%d monatoj',
          y: 'jaro',
          yy: '%d jaroj',
        },
        dayOfMonthOrdinalParse: /\d{1,2}a/,
        ordinal: '%da',
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
        n = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
      return e.defineLocale('es', {
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: function (e, r) {
          return e ? (/-MMM-/.test(r) ? n[e.month()] : t[e.month()]) : t;
        },
        monthsParseExact: !0,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY H:mm',
          LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
        },
        calendar: {
          sameDay: function () {
            return '[hoy a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          nextDay: function () {
            return '[mañana a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          nextWeek: function () {
            return 'dddd [a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          lastDay: function () {
            return '[ayer a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          lastWeek: function () {
            return '[el] dddd [pasado a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'en %s',
          past: 'hace %s',
          s: 'unos segundos',
          m: 'un minuto',
          mm: '%d minutos',
          h: 'una hora',
          hh: '%d horas',
          d: 'un día',
          dd: '%d días',
          M: 'un mes',
          MM: '%d meses',
          y: 'un año',
          yy: '%d años',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
        n = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
      return e.defineLocale('es-do', {
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: function (e, r) {
          return e ? (/-MMM-/.test(r) ? n[e.month()] : t[e.month()]) : t;
        },
        monthsParseExact: !0,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY h:mm A',
          LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A',
        },
        calendar: {
          sameDay: function () {
            return '[hoy a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          nextDay: function () {
            return '[mañana a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          nextWeek: function () {
            return 'dddd [a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          lastDay: function () {
            return '[ayer a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          lastWeek: function () {
            return '[el] dddd [pasado a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'en %s',
          past: 'hace %s',
          s: 'unos segundos',
          m: 'un minuto',
          mm: '%d minutos',
          h: 'una hora',
          hh: '%d horas',
          d: 'un día',
          dd: '%d días',
          M: 'un mes',
          MM: '%d meses',
          y: 'un año',
          yy: '%d años',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e, t, n, r) {
        var a = {
          s: ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
          m: ['ühe minuti', 'üks minut'],
          mm: [e + ' minuti', e + ' minutit'],
          h: ['ühe tunni', 'tund aega', 'üks tund'],
          hh: [e + ' tunni', e + ' tundi'],
          d: ['ühe päeva', 'üks päev'],
          M: ['kuu aja', 'kuu aega', 'üks kuu'],
          MM: [e + ' kuu', e + ' kuud'],
          y: ['ühe aasta', 'aasta', 'üks aasta'],
          yy: [e + ' aasta', e + ' aastat'],
        };
        return t ? (a[n][2] ? a[n][2] : a[n][1]) : r ? a[n][0] : a[n][1];
      }
      return e.defineLocale('et', {
        months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
        monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
        weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
        weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
        weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[Täna,] LT',
          nextDay: '[Homme,] LT',
          nextWeek: '[Järgmine] dddd LT',
          lastDay: '[Eile,] LT',
          lastWeek: '[Eelmine] dddd LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s pärast',
          past: '%s tagasi',
          s: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: '%d päeva',
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('eu', {
        months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split(
          '_'
        ),
        monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
        weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
        weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'YYYY[ko] MMMM[ren] D[a]',
          LLL: 'YYYY[ko] MMMM[ren] D[a] HH:mm',
          LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
          l: 'YYYY-M-D',
          ll: 'YYYY[ko] MMM D[a]',
          lll: 'YYYY[ko] MMM D[a] HH:mm',
          llll: 'ddd, YYYY[ko] MMM D[a] HH:mm',
        },
        calendar: {
          sameDay: '[gaur] LT[etan]',
          nextDay: '[bihar] LT[etan]',
          nextWeek: 'dddd LT[etan]',
          lastDay: '[atzo] LT[etan]',
          lastWeek: '[aurreko] dddd LT[etan]',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s barru',
          past: 'duela %s',
          s: 'segundo batzuk',
          m: 'minutu bat',
          mm: '%d minutu',
          h: 'ordu bat',
          hh: '%d ordu',
          d: 'egun bat',
          dd: '%d egun',
          M: 'hilabete bat',
          MM: '%d hilabete',
          y: 'urte bat',
          yy: '%d urte',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = { 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹', 0: '۰' },
        n = { '۱': '1', '۲': '2', '۳': '3', '۴': '4', '۵': '5', '۶': '6', '۷': '7', '۸': '8', '۹': '9', '۰': '0' };
      return e.defineLocale('fa', {
        months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        weekdays: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split('_'),
        weekdaysShort: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split('_'),
        weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        meridiemParse: /قبل از ظهر|بعد از ظهر/,
        isPM: function (e) {
          return /بعد از ظهر/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'قبل از ظهر' : 'بعد از ظهر';
        },
        calendar: {
          sameDay: '[امروز ساعت] LT',
          nextDay: '[فردا ساعت] LT',
          nextWeek: 'dddd [ساعت] LT',
          lastDay: '[دیروز ساعت] LT',
          lastWeek: 'dddd [پیش] [ساعت] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'در %s',
          past: '%s پیش',
          s: 'چند ثانیه',
          m: 'یک دقیقه',
          mm: '%d دقیقه',
          h: 'یک ساعت',
          hh: '%d ساعت',
          d: 'یک روز',
          dd: '%d روز',
          M: 'یک ماه',
          MM: '%d ماه',
          y: 'یک سال',
          yy: '%d سال',
        },
        preparse: function (e) {
          return e
            .replace(/[۰-۹]/g, function (e) {
              return n[e];
            })
            .replace(/،/g, ',');
        },
        postformat: function (e) {
          return e
            .replace(/\d/g, function (e) {
              return t[e];
            })
            .replace(/,/g, '،');
        },
        dayOfMonthOrdinalParse: /\d{1,2}م/,
        ordinal: '%dم',
        week: { dow: 6, doy: 12 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e, t, r, a) {
        var i = '';
        switch (r) {
          case 's':
            return a ? 'muutaman sekunnin' : 'muutama sekunti';
          case 'm':
            return a ? 'minuutin' : 'minuutti';
          case 'mm':
            i = a ? 'minuutin' : 'minuuttia';
            break;
          case 'h':
            return a ? 'tunnin' : 'tunti';
          case 'hh':
            i = a ? 'tunnin' : 'tuntia';
            break;
          case 'd':
            return a ? 'päivän' : 'päivä';
          case 'dd':
            i = a ? 'päivän' : 'päivää';
            break;
          case 'M':
            return a ? 'kuukauden' : 'kuukausi';
          case 'MM':
            i = a ? 'kuukauden' : 'kuukautta';
            break;
          case 'y':
            return a ? 'vuoden' : 'vuosi';
          case 'yy':
            i = a ? 'vuoden' : 'vuotta';
        }
        return (i = n(e, a) + ' ' + i);
      }
      function n(e, t) {
        return e < 10 ? (t ? a[e] : r[e]) : e;
      }
      var r = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
        a = ['nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden', r[7], r[8], r[9]];
      return e.defineLocale('fi', {
        months:
          'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split(
            '_'
          ),
        monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
        weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
        weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
        weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD.MM.YYYY',
          LL: 'Do MMMM[ta] YYYY',
          LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
          LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
          l: 'D.M.YYYY',
          ll: 'Do MMM YYYY',
          lll: 'Do MMM YYYY, [klo] HH.mm',
          llll: 'ddd, Do MMM YYYY, [klo] HH.mm',
        },
        calendar: {
          sameDay: '[tänään] [klo] LT',
          nextDay: '[huomenna] [klo] LT',
          nextWeek: 'dddd [klo] LT',
          lastDay: '[eilen] [klo] LT',
          lastWeek: '[viime] dddd[na] [klo] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s päästä',
          past: '%s sitten',
          s: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('fo', {
        months: 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays: 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
        weekdaysShort: 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
        weekdaysMin: 'su_má_tý_mi_hó_fr_le'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D. MMMM, YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Í dag kl.] LT',
          nextDay: '[Í morgin kl.] LT',
          nextWeek: 'dddd [kl.] LT',
          lastDay: '[Í gjár kl.] LT',
          lastWeek: '[síðstu] dddd [kl] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'um %s',
          past: '%s síðani',
          s: 'fá sekund',
          m: 'ein minutt',
          mm: '%d minuttir',
          h: 'ein tími',
          hh: '%d tímar',
          d: 'ein dagur',
          dd: '%d dagar',
          M: 'ein mánaði',
          MM: '%d mánaðir',
          y: 'eitt ár',
          yy: '%d ár',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('fr', {
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Aujourd’hui à] LT',
          nextDay: '[Demain à] LT',
          nextWeek: 'dddd [à] LT',
          lastDay: '[Hier à] LT',
          lastWeek: 'dddd [dernier à] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'dans %s',
          past: 'il y a %s',
          s: 'quelques secondes',
          m: 'une minute',
          mm: '%d minutes',
          h: 'une heure',
          hh: '%d heures',
          d: 'un jour',
          dd: '%d jours',
          M: 'un mois',
          MM: '%d mois',
          y: 'un an',
          yy: '%d ans',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: function (e, t) {
          switch (t) {
            case 'D':
              return e + (1 === e ? 'er' : '');
            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
              return e + (1 === e ? 'er' : 'e');
            case 'w':
            case 'W':
              return e + (1 === e ? 're' : 'e');
          }
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('fr-ca', {
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Aujourd’hui à] LT',
          nextDay: '[Demain à] LT',
          nextWeek: 'dddd [à] LT',
          lastDay: '[Hier à] LT',
          lastWeek: 'dddd [dernier à] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'dans %s',
          past: 'il y a %s',
          s: 'quelques secondes',
          m: 'une minute',
          mm: '%d minutes',
          h: 'une heure',
          hh: '%d heures',
          d: 'un jour',
          dd: '%d jours',
          M: 'un mois',
          MM: '%d mois',
          y: 'un an',
          yy: '%d ans',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function (e, t) {
          switch (t) {
            default:
            case 'M':
            case 'Q':
            case 'D':
            case 'DDD':
            case 'd':
              return e + (1 === e ? 'er' : 'e');
            case 'w':
            case 'W':
              return e + (1 === e ? 're' : 'e');
          }
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('fr-ch', {
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Aujourd’hui à] LT',
          nextDay: '[Demain à] LT',
          nextWeek: 'dddd [à] LT',
          lastDay: '[Hier à] LT',
          lastWeek: 'dddd [dernier à] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'dans %s',
          past: 'il y a %s',
          s: 'quelques secondes',
          m: 'une minute',
          mm: '%d minutes',
          h: 'une heure',
          hh: '%d heures',
          d: 'un jour',
          dd: '%d jours',
          M: 'un mois',
          MM: '%d mois',
          y: 'un an',
          yy: '%d ans',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function (e, t) {
          switch (t) {
            default:
            case 'M':
            case 'Q':
            case 'D':
            case 'DDD':
            case 'd':
              return e + (1 === e ? 'er' : 'e');
            case 'w':
            case 'W':
              return e + (1 === e ? 're' : 'e');
          }
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
        n = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');
      return e.defineLocale('fy', {
        months: 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split(
          '_'
        ),
        monthsShort: function (e, r) {
          return e ? (/-MMM-/.test(r) ? n[e.month()] : t[e.month()]) : t;
        },
        monthsParseExact: !0,
        weekdays: 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
        weekdaysShort: 'si._mo._ti._wo._to._fr._so.'.split('_'),
        weekdaysMin: 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD-MM-YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[hjoed om] LT',
          nextDay: '[moarn om] LT',
          nextWeek: 'dddd [om] LT',
          lastDay: '[juster om] LT',
          lastWeek: '[ôfrûne] dddd [om] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'oer %s',
          past: '%s lyn',
          s: 'in pear sekonden',
          m: 'ien minút',
          mm: '%d minuten',
          h: 'ien oere',
          hh: '%d oeren',
          d: 'ien dei',
          dd: '%d dagen',
          M: 'ien moanne',
          MM: '%d moannen',
          y: 'ien jier',
          yy: '%d jierren',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || e >= 20 ? 'ste' : 'de');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = [
          'Am Faoilleach',
          'An Gearran',
          'Am Màrt',
          'An Giblean',
          'An Cèitean',
          'An t-Ògmhios',
          'An t-Iuchar',
          'An Lùnastal',
          'An t-Sultain',
          'An Dàmhair',
          'An t-Samhain',
          'An Dùbhlachd',
        ],
        n = ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'],
        r = ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'],
        a = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'],
        i = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'];
      return e.defineLocale('gd', {
        months: t,
        monthsShort: n,
        monthsParseExact: !0,
        weekdays: r,
        weekdaysShort: a,
        weekdaysMin: i,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[An-diugh aig] LT',
          nextDay: '[A-màireach aig] LT',
          nextWeek: 'dddd [aig] LT',
          lastDay: '[An-dè aig] LT',
          lastWeek: 'dddd [seo chaidh] [aig] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'ann an %s',
          past: 'bho chionn %s',
          s: 'beagan diogan',
          m: 'mionaid',
          mm: '%d mionaidean',
          h: 'uair',
          hh: '%d uairean',
          d: 'latha',
          dd: '%d latha',
          M: 'mìos',
          MM: '%d mìosan',
          y: 'bliadhna',
          yy: '%d bliadhna',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function (e) {
          return e + (1 === e ? 'd' : e % 10 == 2 ? 'na' : 'mh');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('gl', {
        months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
        monthsShort: 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY H:mm',
          LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
        },
        calendar: {
          sameDay: function () {
            return '[hoxe ' + (1 !== this.hours() ? 'ás' : 'á') + '] LT';
          },
          nextDay: function () {
            return '[mañá ' + (1 !== this.hours() ? 'ás' : 'á') + '] LT';
          },
          nextWeek: function () {
            return 'dddd [' + (1 !== this.hours() ? 'ás' : 'a') + '] LT';
          },
          lastDay: function () {
            return '[onte ' + (1 !== this.hours() ? 'á' : 'a') + '] LT';
          },
          lastWeek: function () {
            return '[o] dddd [pasado ' + (1 !== this.hours() ? 'ás' : 'a') + '] LT';
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: function (e) {
            return 0 === e.indexOf('un') ? 'n' + e : 'en ' + e;
          },
          past: 'hai %s',
          s: 'uns segundos',
          m: 'un minuto',
          mm: '%d minutos',
          h: 'unha hora',
          hh: '%d horas',
          d: 'un día',
          dd: '%d días',
          M: 'un mes',
          MM: '%d meses',
          y: 'un ano',
          yy: '%d anos',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e, t, n, r) {
        var a = {
          s: ['thodde secondanim', 'thodde second'],
          m: ['eka mintan', 'ek minute'],
          mm: [e + ' mintanim', e + ' mintam'],
          h: ['eka horan', 'ek hor'],
          hh: [e + ' horanim', e + ' hor'],
          d: ['eka disan', 'ek dis'],
          dd: [e + ' disanim', e + ' dis'],
          M: ['eka mhoinean', 'ek mhoino'],
          MM: [e + ' mhoineanim', e + ' mhoine'],
          y: ['eka vorsan', 'ek voros'],
          yy: [e + ' vorsanim', e + ' vorsam'],
        };
        return t ? a[n][0] : a[n][1];
      }
      return e.defineLocale('gom-latn', {
        months: 'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split('_'),
        monthsShort: 'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split('_'),
        weekdaysShort: 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
        weekdaysMin: 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'A h:mm [vazta]',
          LTS: 'A h:mm:ss [vazta]',
          L: 'DD-MM-YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY A h:mm [vazta]',
          LLLL: 'dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]',
          llll: 'ddd, D MMM YYYY, A h:mm [vazta]',
        },
        calendar: {
          sameDay: '[Aiz] LT',
          nextDay: '[Faleam] LT',
          nextWeek: '[Ieta to] dddd[,] LT',
          lastDay: '[Kal] LT',
          lastWeek: '[Fatlo] dddd[,] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s',
          past: '%s adim',
          s: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er)/,
        ordinal: function (e, t) {
          switch (t) {
            case 'D':
              return e + 'er';
            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
            case 'w':
            case 'W':
              return e;
          }
        },
        week: { dow: 1, doy: 4 },
        meridiemParse: /rati|sokalli|donparam|sanje/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            'rati' === t
              ? e < 4
                ? e
                : e + 12
              : 'sokalli' === t
                ? e
                : 'donparam' === t
                  ? e > 12
                    ? e
                    : e + 12
                  : 'sanje' === t
                    ? e + 12
                    : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'rati' : e < 12 ? 'sokalli' : e < 16 ? 'donparam' : e < 20 ? 'sanje' : 'rati';
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('he', {
        months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
        monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
        weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
        weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
        weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [ב]MMMM YYYY',
          LLL: 'D [ב]MMMM YYYY HH:mm',
          LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
          l: 'D/M/YYYY',
          ll: 'D MMM YYYY',
          lll: 'D MMM YYYY HH:mm',
          llll: 'ddd, D MMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[היום ב־]LT',
          nextDay: '[מחר ב־]LT',
          nextWeek: 'dddd [בשעה] LT',
          lastDay: '[אתמול ב־]LT',
          lastWeek: '[ביום] dddd [האחרון בשעה] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'בעוד %s',
          past: 'לפני %s',
          s: 'מספר שניות',
          m: 'דקה',
          mm: '%d דקות',
          h: 'שעה',
          hh: function (e) {
            return 2 === e ? 'שעתיים' : e + ' שעות';
          },
          d: 'יום',
          dd: function (e) {
            return 2 === e ? 'יומיים' : e + ' ימים';
          },
          M: 'חודש',
          MM: function (e) {
            return 2 === e ? 'חודשיים' : e + ' חודשים';
          },
          y: 'שנה',
          yy: function (e) {
            return 2 === e ? 'שנתיים' : e % 10 == 0 && 10 !== e ? e + ' שנה' : e + ' שנים';
          },
        },
        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
        isPM: function (e) {
          return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 5
            ? 'לפנות בוקר'
            : e < 10
              ? 'בבוקר'
              : e < 12
                ? n
                  ? 'לפנה"צ'
                  : 'לפני הצהריים'
                : e < 18
                  ? n
                    ? 'אחה"צ'
                    : 'אחרי הצהריים'
                  : 'בערב';
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = { 1: '१', 2: '२', 3: '३', 4: '४', 5: '५', 6: '६', 7: '७', 8: '८', 9: '९', 0: '०' },
        n = { '१': '1', '२': '2', '३': '3', '४': '4', '५': '5', '६': '6', '७': '7', '८': '8', '९': '9', '०': '0' };
      return e.defineLocale('hi', {
        months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
        monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat: {
          LT: 'A h:mm बजे',
          LTS: 'A h:mm:ss बजे',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm बजे',
          LLLL: 'dddd, D MMMM YYYY, A h:mm बजे',
        },
        calendar: {
          sameDay: '[आज] LT',
          nextDay: '[कल] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[कल] LT',
          lastWeek: '[पिछले] dddd, LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s में',
          past: '%s पहले',
          s: 'कुछ ही क्षण',
          m: 'एक मिनट',
          mm: '%d मिनट',
          h: 'एक घंटा',
          hh: '%d घंटे',
          d: 'एक दिन',
          dd: '%d दिन',
          M: 'एक महीने',
          MM: '%d महीने',
          y: 'एक वर्ष',
          yy: '%d वर्ष',
        },
        preparse: function (e) {
          return e.replace(/[१२३४५६७८९०]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            'रात' === t
              ? e < 4
                ? e
                : e + 12
              : 'सुबह' === t
                ? e
                : 'दोपहर' === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : 'शाम' === t
                    ? e + 12
                    : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'रात' : e < 10 ? 'सुबह' : e < 17 ? 'दोपहर' : e < 20 ? 'शाम' : 'रात';
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e, t, n) {
        var r = e + ' ';
        switch (n) {
          case 'm':
            return t ? 'jedna minuta' : 'jedne minute';
          case 'mm':
            return (r += 1 === e ? 'minuta' : 2 === e || 3 === e || 4 === e ? 'minute' : 'minuta');
          case 'h':
            return t ? 'jedan sat' : 'jednog sata';
          case 'hh':
            return (r += 1 === e ? 'sat' : 2 === e || 3 === e || 4 === e ? 'sata' : 'sati');
          case 'dd':
            return (r += 1 === e ? 'dan' : 'dana');
          case 'MM':
            return (r += 1 === e ? 'mjesec' : 2 === e || 3 === e || 4 === e ? 'mjeseca' : 'mjeseci');
          case 'yy':
            return (r += 1 === e ? 'godina' : 2 === e || 3 === e || 4 === e ? 'godine' : 'godina');
        }
      }
      return e.defineLocale('hr', {
        months: {
          format:
            'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split(
              '_'
            ),
          standalone:
            'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_'),
        },
        monthsShort: 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[danas u] LT',
          nextDay: '[sutra u] LT',
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return '[u] [nedjelju] [u] LT';
              case 3:
                return '[u] [srijedu] [u] LT';
              case 6:
                return '[u] [subotu] [u] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                return '[u] dddd [u] LT';
            }
          },
          lastDay: '[jučer u] LT',
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
                return '[prošlu] dddd [u] LT';
              case 6:
                return '[prošle] [subote] [u] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                return '[prošli] dddd [u] LT';
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'za %s',
          past: 'prije %s',
          s: 'par sekundi',
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: 'dan',
          dd: t,
          M: 'mjesec',
          MM: t,
          y: 'godinu',
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e, t, n, r) {
        var a = e;
        switch (n) {
          case 's':
            return r || t ? 'néhány másodperc' : 'néhány másodperce';
          case 'm':
            return 'egy' + (r || t ? ' perc' : ' perce');
          case 'mm':
            return a + (r || t ? ' perc' : ' perce');
          case 'h':
            return 'egy' + (r || t ? ' óra' : ' órája');
          case 'hh':
            return a + (r || t ? ' óra' : ' órája');
          case 'd':
            return 'egy' + (r || t ? ' nap' : ' napja');
          case 'dd':
            return a + (r || t ? ' nap' : ' napja');
          case 'M':
            return 'egy' + (r || t ? ' hónap' : ' hónapja');
          case 'MM':
            return a + (r || t ? ' hónap' : ' hónapja');
          case 'y':
            return 'egy' + (r || t ? ' év' : ' éve');
          case 'yy':
            return a + (r || t ? ' év' : ' éve');
        }
        return '';
      }
      function n(e) {
        return (e ? '' : '[múlt] ') + '[' + r[this.day()] + '] LT[-kor]';
      }
      var r = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
      return e.defineLocale('hu', {
        months:
          'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split(
            '_'
          ),
        monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
        weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
        weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
        weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'YYYY.MM.DD.',
          LL: 'YYYY. MMMM D.',
          LLL: 'YYYY. MMMM D. H:mm',
          LLLL: 'YYYY. MMMM D., dddd H:mm',
        },
        meridiemParse: /de|du/i,
        isPM: function (e) {
          return 'u' === e.charAt(1).toLowerCase();
        },
        meridiem: function (e, t, n) {
          return e < 12 ? (!0 === n ? 'de' : 'DE') : !0 === n ? 'du' : 'DU';
        },
        calendar: {
          sameDay: '[ma] LT[-kor]',
          nextDay: '[holnap] LT[-kor]',
          nextWeek: function () {
            return n.call(this, !0);
          },
          lastDay: '[tegnap] LT[-kor]',
          lastWeek: function () {
            return n.call(this, !1);
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s múlva',
          past: '%s',
          s: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('hy-am', {
        months: {
          format:
            'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split(
              '_'
            ),
          standalone:
            'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_'),
        },
        monthsShort: 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
        weekdays: 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
        weekdaysShort: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
        weekdaysMin: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY թ.',
          LLL: 'D MMMM YYYY թ., HH:mm',
          LLLL: 'dddd, D MMMM YYYY թ., HH:mm',
        },
        calendar: {
          sameDay: '[այսօր] LT',
          nextDay: '[վաղը] LT',
          lastDay: '[երեկ] LT',
          nextWeek: function () {
            return 'dddd [օրը ժամը] LT';
          },
          lastWeek: function () {
            return '[անցած] dddd [օրը ժամը] LT';
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s հետո',
          past: '%s առաջ',
          s: 'մի քանի վայրկյան',
          m: 'րոպե',
          mm: '%d րոպե',
          h: 'ժամ',
          hh: '%d ժամ',
          d: 'օր',
          dd: '%d օր',
          M: 'ամիս',
          MM: '%d ամիս',
          y: 'տարի',
          yy: '%d տարի',
        },
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
        isPM: function (e) {
          return /^(ցերեկվա|երեկոյան)$/.test(e);
        },
        meridiem: function (e) {
          return e < 4 ? 'գիշերվա' : e < 12 ? 'առավոտվա' : e < 17 ? 'ցերեկվա' : 'երեկոյան';
        },
        dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
        ordinal: function (e, t) {
          switch (t) {
            case 'DDD':
            case 'w':
            case 'W':
            case 'DDDo':
              return 1 === e ? e + '-ին' : e + '-րդ';
            default:
              return e;
          }
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('id', {
        months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
        weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
        weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
        weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [pukul] HH.mm',
          LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            'pagi' === t ? e : 'siang' === t ? (e >= 11 ? e : e + 12) : 'sore' === t || 'malam' === t ? e + 12 : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 11 ? 'pagi' : e < 15 ? 'siang' : e < 19 ? 'sore' : 'malam';
        },
        calendar: {
          sameDay: '[Hari ini pukul] LT',
          nextDay: '[Besok pukul] LT',
          nextWeek: 'dddd [pukul] LT',
          lastDay: '[Kemarin pukul] LT',
          lastWeek: 'dddd [lalu pukul] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'dalam %s',
          past: '%s yang lalu',
          s: 'beberapa detik',
          m: 'semenit',
          mm: '%d menit',
          h: 'sejam',
          hh: '%d jam',
          d: 'sehari',
          dd: '%d hari',
          M: 'sebulan',
          MM: '%d bulan',
          y: 'setahun',
          yy: '%d tahun',
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e) {
        return e % 100 == 11 || e % 10 != 1;
      }
      function n(e, n, r, a) {
        var i = e + ' ';
        switch (r) {
          case 's':
            return n || a ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
          case 'm':
            return n ? 'mínúta' : 'mínútu';
          case 'mm':
            return t(e) ? i + (n || a ? 'mínútur' : 'mínútum') : n ? i + 'mínúta' : i + 'mínútu';
          case 'hh':
            return t(e) ? i + (n || a ? 'klukkustundir' : 'klukkustundum') : i + 'klukkustund';
          case 'd':
            return n ? 'dagur' : a ? 'dag' : 'degi';
          case 'dd':
            return t(e) ? (n ? i + 'dagar' : i + (a ? 'daga' : 'dögum')) : n ? i + 'dagur' : i + (a ? 'dag' : 'degi');
          case 'M':
            return n ? 'mánuður' : a ? 'mánuð' : 'mánuði';
          case 'MM':
            return t(e)
              ? n
                ? i + 'mánuðir'
                : i + (a ? 'mánuði' : 'mánuðum')
              : n
                ? i + 'mánuður'
                : i + (a ? 'mánuð' : 'mánuði');
          case 'y':
            return n || a ? 'ár' : 'ári';
          case 'yy':
            return t(e) ? i + (n || a ? 'ár' : 'árum') : i + (n || a ? 'ár' : 'ári');
        }
      }
      return e.defineLocale('is', {
        months: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
        weekdays: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
        weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
        weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY [kl.] H:mm',
          LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm',
        },
        calendar: {
          sameDay: '[í dag kl.] LT',
          nextDay: '[á morgun kl.] LT',
          nextWeek: 'dddd [kl.] LT',
          lastDay: '[í gær kl.] LT',
          lastWeek: '[síðasta] dddd [kl.] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'eftir %s',
          past: 'fyrir %s síðan',
          s: n,
          m: n,
          mm: n,
          h: 'klukkustund',
          hh: n,
          d: n,
          dd: n,
          M: n,
          MM: n,
          y: n,
          yy: n,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('it', {
        months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split(
          '_'
        ),
        monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
        weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
        weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Oggi alle] LT',
          nextDay: '[Domani alle] LT',
          nextWeek: 'dddd [alle] LT',
          lastDay: '[Ieri alle] LT',
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return '[la scorsa] dddd [alle] LT';
              default:
                return '[lo scorso] dddd [alle] LT';
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: function (e) {
            return (/^[0-9].+$/.test(e) ? 'tra' : 'in') + ' ' + e;
          },
          past: '%s fa',
          s: 'alcuni secondi',
          m: 'un minuto',
          mm: '%d minuti',
          h: "un'ora",
          hh: '%d ore',
          d: 'un giorno',
          dd: '%d giorni',
          M: 'un mese',
          MM: '%d mesi',
          y: 'un anno',
          yy: '%d anni',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('ja', {
        months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
        weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
        weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY/MM/DD',
          LL: 'YYYY年M月D日',
          LLL: 'YYYY年M月D日 HH:mm',
          LLLL: 'YYYY年M月D日 HH:mm dddd',
          l: 'YYYY/MM/DD',
          ll: 'YYYY年M月D日',
          lll: 'YYYY年M月D日 HH:mm',
          llll: 'YYYY年M月D日 HH:mm dddd',
        },
        meridiemParse: /午前|午後/i,
        isPM: function (e) {
          return '午後' === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? '午前' : '午後';
        },
        calendar: {
          sameDay: '[今日] LT',
          nextDay: '[明日] LT',
          nextWeek: '[来週]dddd LT',
          lastDay: '[昨日] LT',
          lastWeek: '[前週]dddd LT',
          sameElse: 'L',
        },
        dayOfMonthOrdinalParse: /\d{1,2}日/,
        ordinal: function (e, t) {
          switch (t) {
            case 'd':
            case 'D':
            case 'DDD':
              return e + '日';
            default:
              return e;
          }
        },
        relativeTime: {
          future: '%s後',
          past: '%s前',
          s: '数秒',
          m: '1分',
          mm: '%d分',
          h: '1時間',
          hh: '%d時間',
          d: '1日',
          dd: '%d日',
          M: '1ヶ月',
          MM: '%dヶ月',
          y: '1年',
          yy: '%d年',
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('jv', {
        months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
        weekdays: 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
        weekdaysShort: 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
        weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [pukul] HH.mm',
          LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            'enjing' === t
              ? e
              : 'siyang' === t
                ? e >= 11
                  ? e
                  : e + 12
                : 'sonten' === t || 'ndalu' === t
                  ? e + 12
                  : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 11 ? 'enjing' : e < 15 ? 'siyang' : e < 19 ? 'sonten' : 'ndalu';
        },
        calendar: {
          sameDay: '[Dinten puniko pukul] LT',
          nextDay: '[Mbenjang pukul] LT',
          nextWeek: 'dddd [pukul] LT',
          lastDay: '[Kala wingi pukul] LT',
          lastWeek: 'dddd [kepengker pukul] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'wonten ing %s',
          past: '%s ingkang kepengker',
          s: 'sawetawis detik',
          m: 'setunggal menit',
          mm: '%d menit',
          h: 'setunggal jam',
          hh: '%d jam',
          d: 'sedinten',
          dd: '%d dinten',
          M: 'sewulan',
          MM: '%d wulan',
          y: 'setaun',
          yy: '%d taun',
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('ka', {
        months: {
          standalone:
            'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split(
              '_'
            ),
          format:
            'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split(
              '_'
            ),
        },
        monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
        weekdays: {
          standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
          format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
          isFormat: /(წინა|შემდეგ)/,
        },
        weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
        weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A',
        },
        calendar: {
          sameDay: '[დღეს] LT[-ზე]',
          nextDay: '[ხვალ] LT[-ზე]',
          lastDay: '[გუშინ] LT[-ზე]',
          nextWeek: '[შემდეგ] dddd LT[-ზე]',
          lastWeek: '[წინა] dddd LT-ზე',
          sameElse: 'L',
        },
        relativeTime: {
          future: function (e) {
            return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, 'ში') : e + 'ში';
          },
          past: function (e) {
            return /(წამი|წუთი|საათი|დღე|თვე)/.test(e)
              ? e.replace(/(ი|ე)$/, 'ის უკან')
              : /წელი/.test(e)
                ? e.replace(/წელი$/, 'წლის უკან')
                : void 0;
          },
          s: 'რამდენიმე წამი',
          m: 'წუთი',
          mm: '%d წუთი',
          h: 'საათი',
          hh: '%d საათი',
          d: 'დღე',
          dd: '%d დღე',
          M: 'თვე',
          MM: '%d თვე',
          y: 'წელი',
          yy: '%d წელი',
        },
        dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
        ordinal: function (e) {
          return 0 === e
            ? e
            : 1 === e
              ? e + '-ლი'
              : e < 20 || (e <= 100 && e % 20 == 0) || e % 100 == 0
                ? 'მე-' + e
                : e + '-ე';
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = {
        0: '-ші',
        1: '-ші',
        2: '-ші',
        3: '-ші',
        4: '-ші',
        5: '-ші',
        6: '-шы',
        7: '-ші',
        8: '-ші',
        9: '-шы',
        10: '-шы',
        20: '-шы',
        30: '-шы',
        40: '-шы',
        50: '-ші',
        60: '-шы',
        70: '-ші',
        80: '-ші',
        90: '-шы',
        100: '-ші',
      };
      return e.defineLocale('kk', {
        months: 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
        monthsShort: 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
        weekdays: 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
        weekdaysShort: 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
        weekdaysMin: 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Бүгін сағат] LT',
          nextDay: '[Ертең сағат] LT',
          nextWeek: 'dddd [сағат] LT',
          lastDay: '[Кеше сағат] LT',
          lastWeek: '[Өткен аптаның] dddd [сағат] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s ішінде',
          past: '%s бұрын',
          s: 'бірнеше секунд',
          m: 'бір минут',
          mm: '%d минут',
          h: 'бір сағат',
          hh: '%d сағат',
          d: 'бір күн',
          dd: '%d күн',
          M: 'бір ай',
          MM: '%d ай',
          y: 'бір жыл',
          yy: '%d жыл',
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
        ordinal: function (e) {
          var n = e % 10,
            r = e >= 100 ? 100 : null;
          return e + (t[e] || t[n] || t[r]);
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('km', {
        months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
        monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
        weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
        weekdaysShort: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
        weekdaysMin: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
          nextDay: '[ស្អែក ម៉ោង] LT',
          nextWeek: 'dddd [ម៉ោង] LT',
          lastDay: '[ម្សិលមិញ ម៉ោង] LT',
          lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%sទៀត',
          past: '%sមុន',
          s: 'ប៉ុន្មានវិនាទី',
          m: 'មួយនាទី',
          mm: '%d នាទី',
          h: 'មួយម៉ោង',
          hh: '%d ម៉ោង',
          d: 'មួយថ្ងៃ',
          dd: '%d ថ្ងៃ',
          M: 'មួយខែ',
          MM: '%d ខែ',
          y: 'មួយឆ្នាំ',
          yy: '%d ឆ្នាំ',
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = { 1: '೧', 2: '೨', 3: '೩', 4: '೪', 5: '೫', 6: '೬', 7: '೭', 8: '೮', 9: '೯', 0: '೦' },
        n = { '೧': '1', '೨': '2', '೩': '3', '೪': '4', '೫': '5', '೬': '6', '೭': '7', '೮': '8', '೯': '9', '೦': '0' };
      return e.defineLocale('kn', {
        months: 'ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್'.split('_'),
        monthsShort: 'ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬ_ಅಕ್ಟೋಬ_ನವೆಂಬ_ಡಿಸೆಂಬ'.split('_'),
        monthsParseExact: !0,
        weekdays: 'ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ'.split('_'),
        weekdaysShort: 'ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ'.split('_'),
        weekdaysMin: 'ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm',
          LTS: 'A h:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm',
          LLLL: 'dddd, D MMMM YYYY, A h:mm',
        },
        calendar: {
          sameDay: '[ಇಂದು] LT',
          nextDay: '[ನಾಳೆ] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[ನಿನ್ನೆ] LT',
          lastWeek: '[ಕೊನೆಯ] dddd, LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s ನಂತರ',
          past: '%s ಹಿಂದೆ',
          s: 'ಕೆಲವು ಕ್ಷಣಗಳು',
          m: 'ಒಂದು ನಿಮಿಷ',
          mm: '%d ನಿಮಿಷ',
          h: 'ಒಂದು ಗಂಟೆ',
          hh: '%d ಗಂಟೆ',
          d: 'ಒಂದು ದಿನ',
          dd: '%d ದಿನ',
          M: 'ಒಂದು ತಿಂಗಳು',
          MM: '%d ತಿಂಗಳು',
          y: 'ಒಂದು ವರ್ಷ',
          yy: '%d ವರ್ಷ',
        },
        preparse: function (e) {
          return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            'ರಾತ್ರಿ' === t
              ? e < 4
                ? e
                : e + 12
              : 'ಬೆಳಿಗ್ಗೆ' === t
                ? e
                : 'ಮಧ್ಯಾಹ್ನ' === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : 'ಸಂಜೆ' === t
                    ? e + 12
                    : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'ರಾತ್ರಿ' : e < 10 ? 'ಬೆಳಿಗ್ಗೆ' : e < 17 ? 'ಮಧ್ಯಾಹ್ನ' : e < 20 ? 'ಸಂಜೆ' : 'ರಾತ್ರಿ';
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
        ordinal: function (e) {
          return e + 'ನೇ';
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('ko', {
        months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
        weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
        weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
        longDateFormat: {
          LT: 'A h:mm',
          LTS: 'A h:mm:ss',
          L: 'YYYY.MM.DD',
          LL: 'YYYY년 MMMM D일',
          LLL: 'YYYY년 MMMM D일 A h:mm',
          LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
          l: 'YYYY.MM.DD',
          ll: 'YYYY년 MMMM D일',
          lll: 'YYYY년 MMMM D일 A h:mm',
          llll: 'YYYY년 MMMM D일 dddd A h:mm',
        },
        calendar: {
          sameDay: '오늘 LT',
          nextDay: '내일 LT',
          nextWeek: 'dddd LT',
          lastDay: '어제 LT',
          lastWeek: '지난주 dddd LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s 후',
          past: '%s 전',
          s: '몇 초',
          ss: '%d초',
          m: '1분',
          mm: '%d분',
          h: '한 시간',
          hh: '%d시간',
          d: '하루',
          dd: '%d일',
          M: '한 달',
          MM: '%d달',
          y: '일 년',
          yy: '%d년',
        },
        dayOfMonthOrdinalParse: /\d{1,2}일/,
        ordinal: '%d일',
        meridiemParse: /오전|오후/,
        isPM: function (e) {
          return '오후' === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? '오전' : '오후';
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = {
        0: '-чү',
        1: '-чи',
        2: '-чи',
        3: '-чү',
        4: '-чү',
        5: '-чи',
        6: '-чы',
        7: '-чи',
        8: '-чи',
        9: '-чу',
        10: '-чу',
        20: '-чы',
        30: '-чу',
        40: '-чы',
        50: '-чү',
        60: '-чы',
        70: '-чи',
        80: '-чи',
        90: '-чу',
        100: '-чү',
      };
      return e.defineLocale('ky', {
        months: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
        monthsShort: 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
        weekdays: 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
        weekdaysShort: 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
        weekdaysMin: 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Бүгүн саат] LT',
          nextDay: '[Эртең саат] LT',
          nextWeek: 'dddd [саат] LT',
          lastDay: '[Кече саат] LT',
          lastWeek: '[Өткен аптанын] dddd [күнү] [саат] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s ичинде',
          past: '%s мурун',
          s: 'бирнече секунд',
          m: 'бир мүнөт',
          mm: '%d мүнөт',
          h: 'бир саат',
          hh: '%d саат',
          d: 'бир күн',
          dd: '%d күн',
          M: 'бир ай',
          MM: '%d ай',
          y: 'бир жыл',
          yy: '%d жыл',
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
        ordinal: function (e) {
          var n = e % 10,
            r = e >= 100 ? 100 : null;
          return e + (t[e] || t[n] || t[r]);
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e, t, n, r) {
        var a = {
          m: ['eng Minutt', 'enger Minutt'],
          h: ['eng Stonn', 'enger Stonn'],
          d: ['een Dag', 'engem Dag'],
          M: ['ee Mount', 'engem Mount'],
          y: ['ee Joer', 'engem Joer'],
        };
        return t ? a[n][0] : a[n][1];
      }
      function n(e) {
        return a(e.substr(0, e.indexOf(' '))) ? 'a ' + e : 'an ' + e;
      }
      function r(e) {
        return a(e.substr(0, e.indexOf(' '))) ? 'viru ' + e : 'virun ' + e;
      }
      function a(e) {
        if (((e = parseInt(e, 10)), isNaN(e))) return !1;
        if (e < 0) return !0;
        if (e < 10) return 4 <= e && e <= 7;
        if (e < 100) {
          var t = e % 10,
            n = e / 10;
          return a(0 === t ? n : t);
        }
        if (e < 1e4) {
          for (; e >= 10; ) e /= 10;
          return a(e);
        }
        return (e /= 1e3), a(e);
      }
      return e.defineLocale('lb', {
        months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
        weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm [Auer]',
          LTS: 'H:mm:ss [Auer]',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm [Auer]',
          LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]',
        },
        calendar: {
          sameDay: '[Haut um] LT',
          sameElse: 'L',
          nextDay: '[Muer um] LT',
          nextWeek: 'dddd [um] LT',
          lastDay: '[Gëschter um] LT',
          lastWeek: function () {
            switch (this.day()) {
              case 2:
              case 4:
                return '[Leschten] dddd [um] LT';
              default:
                return '[Leschte] dddd [um] LT';
            }
          },
        },
        relativeTime: {
          future: n,
          past: r,
          s: 'e puer Sekonnen',
          m: t,
          mm: '%d Minutten',
          h: t,
          hh: '%d Stonnen',
          d: t,
          dd: '%d Deeg',
          M: t,
          MM: '%d Méint',
          y: t,
          yy: '%d Joer',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('lo', {
        months: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
        monthsShort: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
        weekdays: 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
        weekdaysShort: 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
        weekdaysMin: 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'ວັນdddd D MMMM YYYY HH:mm',
        },
        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
        isPM: function (e) {
          return 'ຕອນແລງ' === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'ຕອນເຊົ້າ' : 'ຕອນແລງ';
        },
        calendar: {
          sameDay: '[ມື້ນີ້ເວລາ] LT',
          nextDay: '[ມື້ອື່ນເວລາ] LT',
          nextWeek: '[ວັນ]dddd[ໜ້າເວລາ] LT',
          lastDay: '[ມື້ວານນີ້ເວລາ] LT',
          lastWeek: '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'ອີກ %s',
          past: '%sຜ່ານມາ',
          s: 'ບໍ່ເທົ່າໃດວິນາທີ',
          m: '1 ນາທີ',
          mm: '%d ນາທີ',
          h: '1 ຊົ່ວໂມງ',
          hh: '%d ຊົ່ວໂມງ',
          d: '1 ມື້',
          dd: '%d ມື້',
          M: '1 ເດືອນ',
          MM: '%d ເດືອນ',
          y: '1 ປີ',
          yy: '%d ປີ',
        },
        dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
        ordinal: function (e) {
          return 'ທີ່' + e;
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e, t, n, r) {
        return t ? 'kelios sekundės' : r ? 'kelių sekundžių' : 'kelias sekundes';
      }
      function n(e, t, n, r) {
        return t ? a(n)[0] : r ? a(n)[1] : a(n)[2];
      }
      function r(e) {
        return e % 10 == 0 || (e > 10 && e < 20);
      }
      function a(e) {
        return o[e].split('_');
      }
      function i(e, t, i, o) {
        var s = e + ' ';
        return 1 === e
          ? s + n(e, t, i[0], o)
          : t
            ? s + (r(e) ? a(i)[1] : a(i)[0])
            : o
              ? s + a(i)[1]
              : s + (r(e) ? a(i)[1] : a(i)[2]);
      }
      var o = {
        m: 'minutė_minutės_minutę',
        mm: 'minutės_minučių_minutes',
        h: 'valanda_valandos_valandą',
        hh: 'valandos_valandų_valandas',
        d: 'diena_dienos_dieną',
        dd: 'dienos_dienų_dienas',
        M: 'mėnuo_mėnesio_mėnesį',
        MM: 'mėnesiai_mėnesių_mėnesius',
        y: 'metai_metų_metus',
        yy: 'metai_metų_metus',
      };
      return e.defineLocale('lt', {
        months: {
          format:
            'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split(
              '_'
            ),
          standalone:
            'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split(
              '_'
            ),
          isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,
        },
        monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
        weekdays: {
          format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
          standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split(
            '_'
          ),
          isFormat: /dddd HH:mm/,
        },
        weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
        weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'YYYY [m.] MMMM D [d.]',
          LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
          LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
          l: 'YYYY-MM-DD',
          ll: 'YYYY [m.] MMMM D [d.]',
          lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
          llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]',
        },
        calendar: {
          sameDay: '[Šiandien] LT',
          nextDay: '[Rytoj] LT',
          nextWeek: 'dddd LT',
          lastDay: '[Vakar] LT',
          lastWeek: '[Praėjusį] dddd LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'po %s',
          past: 'prieš %s',
          s: t,
          m: n,
          mm: i,
          h: n,
          hh: i,
          d: n,
          dd: i,
          M: n,
          MM: i,
          y: n,
          yy: i,
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal: function (e) {
          return e + '-oji';
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e, t, n) {
        return n ? (t % 10 == 1 && t % 100 != 11 ? e[2] : e[3]) : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1];
      }
      function n(e, n, r) {
        return e + ' ' + t(i[r], e, n);
      }
      function r(e, n, r) {
        return t(i[r], e, n);
      }
      function a(e, t) {
        return t ? 'dažas sekundes' : 'dažām sekundēm';
      }
      var i = {
        m: 'minūtes_minūtēm_minūte_minūtes'.split('_'),
        mm: 'minūtes_minūtēm_minūte_minūtes'.split('_'),
        h: 'stundas_stundām_stunda_stundas'.split('_'),
        hh: 'stundas_stundām_stunda_stundas'.split('_'),
        d: 'dienas_dienām_diena_dienas'.split('_'),
        dd: 'dienas_dienām_diena_dienas'.split('_'),
        M: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
        MM: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
        y: 'gada_gadiem_gads_gadi'.split('_'),
        yy: 'gada_gadiem_gads_gadi'.split('_'),
      };
      return e.defineLocale('lv', {
        months:
          'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split(
            '_'
          ),
        monthsShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
        weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY.',
          LL: 'YYYY. [gada] D. MMMM',
          LLL: 'YYYY. [gada] D. MMMM, HH:mm',
          LLLL: 'YYYY. [gada] D. MMMM, dddd, HH:mm',
        },
        calendar: {
          sameDay: '[Šodien pulksten] LT',
          nextDay: '[Rīt pulksten] LT',
          nextWeek: 'dddd [pulksten] LT',
          lastDay: '[Vakar pulksten] LT',
          lastWeek: '[Pagājušā] dddd [pulksten] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'pēc %s',
          past: 'pirms %s',
          s: a,
          m: r,
          mm: n,
          h: r,
          hh: n,
          d: r,
          dd: n,
          M: r,
          MM: n,
          y: r,
          yy: n,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = {
        words: {
          m: ['jedan minut', 'jednog minuta'],
          mm: ['minut', 'minuta', 'minuta'],
          h: ['jedan sat', 'jednog sata'],
          hh: ['sat', 'sata', 'sati'],
          dd: ['dan', 'dana', 'dana'],
          MM: ['mjesec', 'mjeseca', 'mjeseci'],
          yy: ['godina', 'godine', 'godina'],
        },
        correctGrammaticalCase: function (e, t) {
          return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
        },
        translate: function (e, n, r) {
          var a = t.words[r];
          return 1 === r.length ? (n ? a[0] : a[1]) : e + ' ' + t.correctGrammaticalCase(e, a);
        },
      };
      return e.defineLocale('me', {
        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[danas u] LT',
          nextDay: '[sjutra u] LT',
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return '[u] [nedjelju] [u] LT';
              case 3:
                return '[u] [srijedu] [u] LT';
              case 6:
                return '[u] [subotu] [u] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                return '[u] dddd [u] LT';
            }
          },
          lastDay: '[juče u] LT',
          lastWeek: function () {
            return [
              '[prošle] [nedjelje] [u] LT',
              '[prošlog] [ponedjeljka] [u] LT',
              '[prošlog] [utorka] [u] LT',
              '[prošle] [srijede] [u] LT',
              '[prošlog] [četvrtka] [u] LT',
              '[prošlog] [petka] [u] LT',
              '[prošle] [subote] [u] LT',
            ][this.day()];
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'za %s',
          past: 'prije %s',
          s: 'nekoliko sekundi',
          m: t.translate,
          mm: t.translate,
          h: t.translate,
          hh: t.translate,
          d: 'dan',
          dd: t.translate,
          M: 'mjesec',
          MM: t.translate,
          y: 'godinu',
          yy: t.translate,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('mi', {
        months:
          'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split(
            '_'
          ),
        monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
        weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
        weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
        weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [i] HH:mm',
          LLLL: 'dddd, D MMMM YYYY [i] HH:mm',
        },
        calendar: {
          sameDay: '[i teie mahana, i] LT',
          nextDay: '[apopo i] LT',
          nextWeek: 'dddd [i] LT',
          lastDay: '[inanahi i] LT',
          lastWeek: 'dddd [whakamutunga i] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'i roto i %s',
          past: '%s i mua',
          s: 'te hēkona ruarua',
          m: 'he meneti',
          mm: '%d meneti',
          h: 'te haora',
          hh: '%d haora',
          d: 'he ra',
          dd: '%d ra',
          M: 'he marama',
          MM: '%d marama',
          y: 'he tau',
          yy: '%d tau',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('mk', {
        months: 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
        weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
        weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
        weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'D.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY H:mm',
          LLLL: 'dddd, D MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[Денес во] LT',
          nextDay: '[Утре во] LT',
          nextWeek: '[Во] dddd [во] LT',
          lastDay: '[Вчера во] LT',
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 6:
                return '[Изминатата] dddd [во] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                return '[Изминатиот] dddd [во] LT';
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'после %s',
          past: 'пред %s',
          s: 'неколку секунди',
          m: 'минута',
          mm: '%d минути',
          h: 'час',
          hh: '%d часа',
          d: 'ден',
          dd: '%d дена',
          M: 'месец',
          MM: '%d месеци',
          y: 'година',
          yy: '%d години',
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function (e) {
          var t = e % 10,
            n = e % 100;
          return 0 === e
            ? e + '-ев'
            : 0 === n
              ? e + '-ен'
              : n > 10 && n < 20
                ? e + '-ти'
                : 1 === t
                  ? e + '-ви'
                  : 2 === t
                    ? e + '-ри'
                    : 7 === t || 8 === t
                      ? e + '-ми'
                      : e + '-ти';
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('ml', {
        months: 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
        monthsShort: 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
        weekdaysShort: 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
        weekdaysMin: 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm -നു',
          LTS: 'A h:mm:ss -നു',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm -നു',
          LLLL: 'dddd, D MMMM YYYY, A h:mm -നു',
        },
        calendar: {
          sameDay: '[ഇന്ന്] LT',
          nextDay: '[നാളെ] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[ഇന്നലെ] LT',
          lastWeek: '[കഴിഞ്ഞ] dddd, LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s കഴിഞ്ഞ്',
          past: '%s മുൻപ്',
          s: 'അൽപ നിമിഷങ്ങൾ',
          m: 'ഒരു മിനിറ്റ്',
          mm: '%d മിനിറ്റ്',
          h: 'ഒരു മണിക്കൂർ',
          hh: '%d മണിക്കൂർ',
          d: 'ഒരു ദിവസം',
          dd: '%d ദിവസം',
          M: 'ഒരു മാസം',
          MM: '%d മാസം',
          y: 'ഒരു വർഷം',
          yy: '%d വർഷം',
        },
        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0), ('രാത്രി' === t && e >= 4) || 'ഉച്ച കഴിഞ്ഞ്' === t || 'വൈകുന്നേരം' === t ? e + 12 : e
          );
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'രാത്രി' : e < 12 ? 'രാവിലെ' : e < 17 ? 'ഉച്ച കഴിഞ്ഞ്' : e < 20 ? 'വൈകുന്നേരം' : 'രാത്രി';
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e, t, n, r) {
        var a = '';
        if (t)
          switch (n) {
            case 's':
              a = 'काही सेकंद';
              break;
            case 'm':
              a = 'एक मिनिट';
              break;
            case 'mm':
              a = '%d मिनिटे';
              break;
            case 'h':
              a = 'एक तास';
              break;
            case 'hh':
              a = '%d तास';
              break;
            case 'd':
              a = 'एक दिवस';
              break;
            case 'dd':
              a = '%d दिवस';
              break;
            case 'M':
              a = 'एक महिना';
              break;
            case 'MM':
              a = '%d महिने';
              break;
            case 'y':
              a = 'एक वर्ष';
              break;
            case 'yy':
              a = '%d वर्षे';
          }
        else
          switch (n) {
            case 's':
              a = 'काही सेकंदां';
              break;
            case 'm':
              a = 'एका मिनिटा';
              break;
            case 'mm':
              a = '%d मिनिटां';
              break;
            case 'h':
              a = 'एका तासा';
              break;
            case 'hh':
              a = '%d तासां';
              break;
            case 'd':
              a = 'एका दिवसा';
              break;
            case 'dd':
              a = '%d दिवसां';
              break;
            case 'M':
              a = 'एका महिन्या';
              break;
            case 'MM':
              a = '%d महिन्यां';
              break;
            case 'y':
              a = 'एका वर्षा';
              break;
            case 'yy':
              a = '%d वर्षां';
          }
        return a.replace(/%d/i, e);
      }
      var n = { 1: '१', 2: '२', 3: '३', 4: '४', 5: '५', 6: '६', 7: '७', 8: '८', 9: '९', 0: '०' },
        r = { '१': '1', '२': '2', '३': '3', '४': '4', '५': '5', '६': '6', '७': '7', '८': '8', '९': '9', '०': '0' };
      return e.defineLocale('mr', {
        months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
        monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat: {
          LT: 'A h:mm वाजता',
          LTS: 'A h:mm:ss वाजता',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm वाजता',
          LLLL: 'dddd, D MMMM YYYY, A h:mm वाजता',
        },
        calendar: {
          sameDay: '[आज] LT',
          nextDay: '[उद्या] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[काल] LT',
          lastWeek: '[मागील] dddd, LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%sमध्ये',
          past: '%sपूर्वी',
          s: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        preparse: function (e) {
          return e.replace(/[१२३४५६७८९०]/g, function (e) {
            return r[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return n[e];
          });
        },
        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            'रात्री' === t
              ? e < 4
                ? e
                : e + 12
              : 'सकाळी' === t
                ? e
                : 'दुपारी' === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : 'सायंकाळी' === t
                    ? e + 12
                    : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'रात्री' : e < 10 ? 'सकाळी' : e < 17 ? 'दुपारी' : e < 20 ? 'सायंकाळी' : 'रात्री';
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('ms', {
        months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [pukul] HH.mm',
          LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            'pagi' === t
              ? e
              : 'tengahari' === t
                ? e >= 11
                  ? e
                  : e + 12
                : 'petang' === t || 'malam' === t
                  ? e + 12
                  : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 11 ? 'pagi' : e < 15 ? 'tengahari' : e < 19 ? 'petang' : 'malam';
        },
        calendar: {
          sameDay: '[Hari ini pukul] LT',
          nextDay: '[Esok pukul] LT',
          nextWeek: 'dddd [pukul] LT',
          lastDay: '[Kelmarin pukul] LT',
          lastWeek: 'dddd [lepas pukul] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'dalam %s',
          past: '%s yang lepas',
          s: 'beberapa saat',
          m: 'seminit',
          mm: '%d minit',
          h: 'sejam',
          hh: '%d jam',
          d: 'sehari',
          dd: '%d hari',
          M: 'sebulan',
          MM: '%d bulan',
          y: 'setahun',
          yy: '%d tahun',
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('ms-my', {
        months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [pukul] HH.mm',
          LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            'pagi' === t
              ? e
              : 'tengahari' === t
                ? e >= 11
                  ? e
                  : e + 12
                : 'petang' === t || 'malam' === t
                  ? e + 12
                  : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 11 ? 'pagi' : e < 15 ? 'tengahari' : e < 19 ? 'petang' : 'malam';
        },
        calendar: {
          sameDay: '[Hari ini pukul] LT',
          nextDay: '[Esok pukul] LT',
          nextWeek: 'dddd [pukul] LT',
          lastDay: '[Kelmarin pukul] LT',
          lastWeek: 'dddd [lepas pukul] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'dalam %s',
          past: '%s yang lepas',
          s: 'beberapa saat',
          m: 'seminit',
          mm: '%d minit',
          h: 'sejam',
          hh: '%d jam',
          d: 'sehari',
          dd: '%d hari',
          M: 'sebulan',
          MM: '%d bulan',
          y: 'setahun',
          yy: '%d tahun',
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = { 1: '၁', 2: '၂', 3: '၃', 4: '၄', 5: '၅', 6: '၆', 7: '၇', 8: '၈', 9: '၉', 0: '၀' },
        n = { '၁': '1', '၂': '2', '၃': '3', '၄': '4', '၅': '5', '၆': '6', '၇': '7', '၈': '8', '၉': '9', '၀': '0' };
      return e.defineLocale('my', {
        months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
        monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
        weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
        weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
        weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[ယနေ.] LT [မှာ]',
          nextDay: '[မနက်ဖြန်] LT [မှာ]',
          nextWeek: 'dddd LT [မှာ]',
          lastDay: '[မနေ.က] LT [မှာ]',
          lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'လာမည့် %s မှာ',
          past: 'လွန်ခဲ့သော %s က',
          s: 'စက္ကန်.အနည်းငယ်',
          m: 'တစ်မိနစ်',
          mm: '%d မိနစ်',
          h: 'တစ်နာရီ',
          hh: '%d နာရီ',
          d: 'တစ်ရက်',
          dd: '%d ရက်',
          M: 'တစ်လ',
          MM: '%d လ',
          y: 'တစ်နှစ်',
          yy: '%d နှစ်',
        },
        preparse: function (e) {
          return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('nb', {
        months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort: 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
        weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY [kl.] HH:mm',
          LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm',
        },
        calendar: {
          sameDay: '[i dag kl.] LT',
          nextDay: '[i morgen kl.] LT',
          nextWeek: 'dddd [kl.] LT',
          lastDay: '[i går kl.] LT',
          lastWeek: '[forrige] dddd [kl.] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'om %s',
          past: '%s siden',
          s: 'noen sekunder',
          m: 'ett minutt',
          mm: '%d minutter',
          h: 'en time',
          hh: '%d timer',
          d: 'en dag',
          dd: '%d dager',
          M: 'en måned',
          MM: '%d måneder',
          y: 'ett år',
          yy: '%d år',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = { 1: '१', 2: '२', 3: '३', 4: '४', 5: '५', 6: '६', 7: '७', 8: '८', 9: '९', 0: '०' },
        n = { '१': '1', '२': '2', '३': '3', '४': '4', '५': '5', '६': '6', '७': '7', '८': '8', '९': '9', '०': '0' };
      return e.defineLocale('ne', {
        months: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
        monthsShort: 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
        weekdaysShort: 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
        weekdaysMin: 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'Aको h:mm बजे',
          LTS: 'Aको h:mm:ss बजे',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, Aको h:mm बजे',
          LLLL: 'dddd, D MMMM YYYY, Aको h:mm बजे',
        },
        preparse: function (e) {
          return e.replace(/[१२३४५६७८९०]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            'राति' === t
              ? e < 4
                ? e
                : e + 12
              : 'बिहान' === t
                ? e
                : 'दिउँसो' === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : 'साँझ' === t
                    ? e + 12
                    : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 3 ? 'राति' : e < 12 ? 'बिहान' : e < 16 ? 'दिउँसो' : e < 20 ? 'साँझ' : 'राति';
        },
        calendar: {
          sameDay: '[आज] LT',
          nextDay: '[भोलि] LT',
          nextWeek: '[आउँदो] dddd[,] LT',
          lastDay: '[हिजो] LT',
          lastWeek: '[गएको] dddd[,] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%sमा',
          past: '%s अगाडि',
          s: 'केही क्षण',
          m: 'एक मिनेट',
          mm: '%d मिनेट',
          h: 'एक घण्टा',
          hh: '%d घण्टा',
          d: 'एक दिन',
          dd: '%d दिन',
          M: 'एक महिना',
          MM: '%d महिना',
          y: 'एक बर्ष',
          yy: '%d बर्ष',
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        n = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        r = [
          /^jan/i,
          /^feb/i,
          /^maart|mrt.?$/i,
          /^apr/i,
          /^mei$/i,
          /^jun[i.]?$/i,
          /^jul[i.]?$/i,
          /^aug/i,
          /^sep/i,
          /^okt/i,
          /^nov/i,
          /^dec/i,
        ],
        a =
          /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
      return e.defineLocale('nl', {
        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort: function (e, r) {
          return e ? (/-MMM-/.test(r) ? n[e.month()] : t[e.month()]) : t;
        },
        monthsRegex: a,
        monthsShortRegex: a,
        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: r,
        longMonthsParse: r,
        shortMonthsParse: r,
        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin: 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD-MM-YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[vandaag om] LT',
          nextDay: '[morgen om] LT',
          nextWeek: 'dddd [om] LT',
          lastDay: '[gisteren om] LT',
          lastWeek: '[afgelopen] dddd [om] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'over %s',
          past: '%s geleden',
          s: 'een paar seconden',
          m: 'één minuut',
          mm: '%d minuten',
          h: 'één uur',
          hh: '%d uur',
          d: 'één dag',
          dd: '%d dagen',
          M: 'één maand',
          MM: '%d maanden',
          y: 'één jaar',
          yy: '%d jaar',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || e >= 20 ? 'ste' : 'de');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        n = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        r = [
          /^jan/i,
          /^feb/i,
          /^maart|mrt.?$/i,
          /^apr/i,
          /^mei$/i,
          /^jun[i.]?$/i,
          /^jul[i.]?$/i,
          /^aug/i,
          /^sep/i,
          /^okt/i,
          /^nov/i,
          /^dec/i,
        ],
        a =
          /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
      return e.defineLocale('nl-be', {
        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort: function (e, r) {
          return e ? (/-MMM-/.test(r) ? n[e.month()] : t[e.month()]) : t;
        },
        monthsRegex: a,
        monthsShortRegex: a,
        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: r,
        longMonthsParse: r,
        shortMonthsParse: r,
        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin: 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[vandaag om] LT',
          nextDay: '[morgen om] LT',
          nextWeek: 'dddd [om] LT',
          lastDay: '[gisteren om] LT',
          lastWeek: '[afgelopen] dddd [om] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'over %s',
          past: '%s geleden',
          s: 'een paar seconden',
          m: 'één minuut',
          mm: '%d minuten',
          h: 'één uur',
          hh: '%d uur',
          d: 'één dag',
          dd: '%d dagen',
          M: 'één maand',
          MM: '%d maanden',
          y: 'één jaar',
          yy: '%d jaar',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || e >= 20 ? 'ste' : 'de');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('nn', {
        months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
        weekdaysShort: 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
        weekdaysMin: 'su_må_ty_on_to_fr_lø'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY [kl.] H:mm',
          LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm',
        },
        calendar: {
          sameDay: '[I dag klokka] LT',
          nextDay: '[I morgon klokka] LT',
          nextWeek: 'dddd [klokka] LT',
          lastDay: '[I går klokka] LT',
          lastWeek: '[Føregåande] dddd [klokka] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'om %s',
          past: '%s sidan',
          s: 'nokre sekund',
          m: 'eit minutt',
          mm: '%d minutt',
          h: 'ein time',
          hh: '%d timar',
          d: 'ein dag',
          dd: '%d dagar',
          M: 'ein månad',
          MM: '%d månader',
          y: 'eit år',
          yy: '%d år',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = { 1: '੧', 2: '੨', 3: '੩', 4: '੪', 5: '੫', 6: '੬', 7: '੭', 8: '੮', 9: '੯', 0: '੦' },
        n = { '੧': '1', '੨': '2', '੩': '3', '੪': '4', '੫': '5', '੬': '6', '੭': '7', '੮': '8', '੯': '9', '੦': '0' };
      return e.defineLocale('pa-in', {
        months: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
        monthsShort: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
        weekdays: 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
        weekdaysShort: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
        weekdaysMin: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm ਵਜੇ',
          LTS: 'A h:mm:ss ਵਜੇ',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm ਵਜੇ',
          LLLL: 'dddd, D MMMM YYYY, A h:mm ਵਜੇ',
        },
        calendar: {
          sameDay: '[ਅਜ] LT',
          nextDay: '[ਕਲ] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[ਕਲ] LT',
          lastWeek: '[ਪਿਛਲੇ] dddd, LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s ਵਿੱਚ',
          past: '%s ਪਿਛਲੇ',
          s: 'ਕੁਝ ਸਕਿੰਟ',
          m: 'ਇਕ ਮਿੰਟ',
          mm: '%d ਮਿੰਟ',
          h: 'ਇੱਕ ਘੰਟਾ',
          hh: '%d ਘੰਟੇ',
          d: 'ਇੱਕ ਦਿਨ',
          dd: '%d ਦਿਨ',
          M: 'ਇੱਕ ਮਹੀਨਾ',
          MM: '%d ਮਹੀਨੇ',
          y: 'ਇੱਕ ਸਾਲ',
          yy: '%d ਸਾਲ',
        },
        preparse: function (e) {
          return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            'ਰਾਤ' === t
              ? e < 4
                ? e
                : e + 12
              : 'ਸਵੇਰ' === t
                ? e
                : 'ਦੁਪਹਿਰ' === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : 'ਸ਼ਾਮ' === t
                    ? e + 12
                    : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'ਰਾਤ' : e < 10 ? 'ਸਵੇਰ' : e < 17 ? 'ਦੁਪਹਿਰ' : e < 20 ? 'ਸ਼ਾਮ' : 'ਰਾਤ';
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e) {
        return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1;
      }
      function n(e, n, r) {
        var a = e + ' ';
        switch (r) {
          case 'm':
            return n ? 'minuta' : 'minutę';
          case 'mm':
            return a + (t(e) ? 'minuty' : 'minut');
          case 'h':
            return n ? 'godzina' : 'godzinę';
          case 'hh':
            return a + (t(e) ? 'godziny' : 'godzin');
          case 'MM':
            return a + (t(e) ? 'miesiące' : 'miesięcy');
          case 'yy':
            return a + (t(e) ? 'lata' : 'lat');
        }
      }
      var r = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split(
          '_'
        ),
        a = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split(
          '_'
        );
      return e.defineLocale('pl', {
        months: function (e, t) {
          return e
            ? '' === t
              ? '(' + a[e.month()] + '|' + r[e.month()] + ')'
              : /D MMMM/.test(t)
                ? a[e.month()]
                : r[e.month()]
            : r;
        },
        monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
        weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
        weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
        weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Dziś o] LT',
          nextDay: '[Jutro o] LT',
          nextWeek: '[W] dddd [o] LT',
          lastDay: '[Wczoraj o] LT',
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return '[W zeszłą niedzielę o] LT';
              case 3:
                return '[W zeszłą środę o] LT';
              case 6:
                return '[W zeszłą sobotę o] LT';
              default:
                return '[W zeszły] dddd [o] LT';
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'za %s',
          past: '%s temu',
          s: 'kilka sekund',
          m: n,
          mm: n,
          h: n,
          hh: n,
          d: '1 dzień',
          dd: '%d dni',
          M: 'miesiąc',
          MM: n,
          y: 'rok',
          yy: n,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('pt', {
        months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays: 'Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado'.split('_'),
        weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY HH:mm',
          LLLL: 'dddd, D [de] MMMM [de] YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Hoje às] LT',
          nextDay: '[Amanhã às] LT',
          nextWeek: 'dddd [às] LT',
          lastDay: '[Ontem às] LT',
          lastWeek: function () {
            return 0 === this.day() || 6 === this.day() ? '[Último] dddd [às] LT' : '[Última] dddd [às] LT';
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'em %s',
          past: 'há %s',
          s: 'segundos',
          m: 'um minuto',
          mm: '%d minutos',
          h: 'uma hora',
          hh: '%d horas',
          d: 'um dia',
          dd: '%d dias',
          M: 'um mês',
          MM: '%d meses',
          y: 'um ano',
          yy: '%d anos',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('pt-br', {
        months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
        weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
          LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm',
        },
        calendar: {
          sameDay: '[Hoje às] LT',
          nextDay: '[Amanhã às] LT',
          nextWeek: 'dddd [às] LT',
          lastDay: '[Ontem às] LT',
          lastWeek: function () {
            return 0 === this.day() || 6 === this.day() ? '[Último] dddd [às] LT' : '[Última] dddd [às] LT';
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'em %s',
          past: '%s atrás',
          s: 'poucos segundos',
          m: 'um minuto',
          mm: '%d minutos',
          h: 'uma hora',
          hh: '%d horas',
          d: 'um dia',
          dd: '%d dias',
          M: 'um mês',
          MM: '%d meses',
          y: 'um ano',
          yy: '%d anos',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e, t, n) {
        var r = { mm: 'minute', hh: 'ore', dd: 'zile', MM: 'luni', yy: 'ani' },
          a = ' ';
        return (e % 100 >= 20 || (e >= 100 && e % 100 == 0)) && (a = ' de '), e + a + r[n];
      }
      return e.defineLocale('ro', {
        months:
          'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split(
            '_'
          ),
        monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
        weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
        weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY H:mm',
          LLLL: 'dddd, D MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[azi la] LT',
          nextDay: '[mâine la] LT',
          nextWeek: 'dddd [la] LT',
          lastDay: '[ieri la] LT',
          lastWeek: '[fosta] dddd [la] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'peste %s',
          past: '%s în urmă',
          s: 'câteva secunde',
          m: 'un minut',
          mm: t,
          h: 'o oră',
          hh: t,
          d: 'o zi',
          dd: t,
          M: 'o lună',
          MM: t,
          y: 'un an',
          yy: t,
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e, t) {
        var n = e.split('_');
        return t % 10 == 1 && t % 100 != 11
          ? n[0]
          : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
            ? n[1]
            : n[2];
      }
      function n(e, n, r) {
        var a = {
          mm: n ? 'минута_минуты_минут' : 'минуту_минуты_минут',
          hh: 'час_часа_часов',
          dd: 'день_дня_дней',
          MM: 'месяц_месяца_месяцев',
          yy: 'год_года_лет',
        };
        return 'm' === r ? (n ? 'минута' : 'минуту') : e + ' ' + t(a[r], +e);
      }
      var r = [
        /^янв/i,
        /^фев/i,
        /^мар/i,
        /^апр/i,
        /^ма[йя]/i,
        /^июн/i,
        /^июл/i,
        /^авг/i,
        /^сен/i,
        /^окт/i,
        /^ноя/i,
        /^дек/i,
      ];
      return e.defineLocale('ru', {
        months: {
          format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
          standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
        },
        monthsShort: {
          format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
          standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_'),
        },
        weekdays: {
          standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
          format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
          isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/,
        },
        weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        monthsParse: r,
        longMonthsParse: r,
        shortMonthsParse: r,
        monthsRegex:
          /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsShortRegex:
          /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsStrictRegex:
          /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
        monthsShortStrictRegex:
          /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY г.',
          LLL: 'D MMMM YYYY г., HH:mm',
          LLLL: 'dddd, D MMMM YYYY г., HH:mm',
        },
        calendar: {
          sameDay: '[Сегодня в] LT',
          nextDay: '[Завтра в] LT',
          lastDay: '[Вчера в] LT',
          nextWeek: function (e) {
            if (e.week() === this.week()) return 2 === this.day() ? '[Во] dddd [в] LT' : '[В] dddd [в] LT';
            switch (this.day()) {
              case 0:
                return '[В следующее] dddd [в] LT';
              case 1:
              case 2:
              case 4:
                return '[В следующий] dddd [в] LT';
              case 3:
              case 5:
              case 6:
                return '[В следующую] dddd [в] LT';
            }
          },
          lastWeek: function (e) {
            if (e.week() === this.week()) return 2 === this.day() ? '[Во] dddd [в] LT' : '[В] dddd [в] LT';
            switch (this.day()) {
              case 0:
                return '[В прошлое] dddd [в] LT';
              case 1:
              case 2:
              case 4:
                return '[В прошлый] dddd [в] LT';
              case 3:
              case 5:
              case 6:
                return '[В прошлую] dddd [в] LT';
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'через %s',
          past: '%s назад',
          s: 'несколько секунд',
          m: n,
          mm: n,
          h: 'час',
          hh: n,
          d: 'день',
          dd: n,
          M: 'месяц',
          MM: n,
          y: 'год',
          yy: n,
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: function (e) {
          return /^(дня|вечера)$/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'ночи' : e < 12 ? 'утра' : e < 17 ? 'дня' : 'вечера';
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function (e, t) {
          switch (t) {
            case 'M':
            case 'd':
            case 'DDD':
              return e + '-й';
            case 'D':
              return e + '-го';
            case 'w':
            case 'W':
              return e + '-я';
            default:
              return e;
          }
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = [
          'جنوري',
          'فيبروري',
          'مارچ',
          'اپريل',
          'مئي',
          'جون',
          'جولاءِ',
          'آگسٽ',
          'سيپٽمبر',
          'آڪٽوبر',
          'نومبر',
          'ڊسمبر',
        ],
        n = ['آچر', 'سومر', 'اڱارو', 'اربع', 'خميس', 'جمع', 'ڇنڇر'];
      return e.defineLocale('sd', {
        months: t,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: n,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd، D MMMM YYYY HH:mm',
        },
        meridiemParse: /صبح|شام/,
        isPM: function (e) {
          return 'شام' === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'صبح' : 'شام';
        },
        calendar: {
          sameDay: '[اڄ] LT',
          nextDay: '[سڀاڻي] LT',
          nextWeek: 'dddd [اڳين هفتي تي] LT',
          lastDay: '[ڪالهه] LT',
          lastWeek: '[گزريل هفتي] dddd [تي] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s پوء',
          past: '%s اڳ',
          s: 'چند سيڪنڊ',
          m: 'هڪ منٽ',
          mm: '%d منٽ',
          h: 'هڪ ڪلاڪ',
          hh: '%d ڪلاڪ',
          d: 'هڪ ڏينهن',
          dd: '%d ڏينهن',
          M: 'هڪ مهينو',
          MM: '%d مهينا',
          y: 'هڪ سال',
          yy: '%d سال',
        },
        preparse: function (e) {
          return e.replace(/،/g, ',');
        },
        postformat: function (e) {
          return e.replace(/,/g, '،');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('se', {
        months:
          'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split(
            '_'
          ),
        monthsShort: 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
        weekdays: 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
        weekdaysShort: 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
        weekdaysMin: 's_v_m_g_d_b_L'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'MMMM D. [b.] YYYY',
          LLL: 'MMMM D. [b.] YYYY [ti.] HH:mm',
          LLLL: 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm',
        },
        calendar: {
          sameDay: '[otne ti] LT',
          nextDay: '[ihttin ti] LT',
          nextWeek: 'dddd [ti] LT',
          lastDay: '[ikte ti] LT',
          lastWeek: '[ovddit] dddd [ti] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s geažes',
          past: 'maŋit %s',
          s: 'moadde sekunddat',
          m: 'okta minuhta',
          mm: '%d minuhtat',
          h: 'okta diimmu',
          hh: '%d diimmut',
          d: 'okta beaivi',
          dd: '%d beaivvit',
          M: 'okta mánnu',
          MM: '%d mánut',
          y: 'okta jahki',
          yy: '%d jagit',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('si', {
        months: 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split(
          '_'
        ),
        monthsShort: 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
        weekdays: 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
        weekdaysShort: 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
        weekdaysMin: 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'a h:mm',
          LTS: 'a h:mm:ss',
          L: 'YYYY/MM/DD',
          LL: 'YYYY MMMM D',
          LLL: 'YYYY MMMM D, a h:mm',
          LLLL: 'YYYY MMMM D [වැනි] dddd, a h:mm:ss',
        },
        calendar: {
          sameDay: '[අද] LT[ට]',
          nextDay: '[හෙට] LT[ට]',
          nextWeek: 'dddd LT[ට]',
          lastDay: '[ඊයේ] LT[ට]',
          lastWeek: '[පසුගිය] dddd LT[ට]',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%sකින්',
          past: '%sකට පෙර',
          s: 'තත්පර කිහිපය',
          m: 'මිනිත්තුව',
          mm: 'මිනිත්තු %d',
          h: 'පැය',
          hh: 'පැය %d',
          d: 'දිනය',
          dd: 'දින %d',
          M: 'මාසය',
          MM: 'මාස %d',
          y: 'වසර',
          yy: 'වසර %d',
        },
        dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
        ordinal: function (e) {
          return e + ' වැනි';
        },
        meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
        isPM: function (e) {
          return 'ප.ව.' === e || 'පස් වරු' === e;
        },
        meridiem: function (e, t, n) {
          return e > 11 ? (n ? 'ප.ව.' : 'පස් වරු') : n ? 'පෙ.ව.' : 'පෙර වරු';
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e) {
        return e > 1 && e < 5;
      }
      function n(e, n, r, a) {
        var i = e + ' ';
        switch (r) {
          case 's':
            return n || a ? 'pár sekúnd' : 'pár sekundami';
          case 'm':
            return n ? 'minúta' : a ? 'minútu' : 'minútou';
          case 'mm':
            return n || a ? i + (t(e) ? 'minúty' : 'minút') : i + 'minútami';
          case 'h':
            return n ? 'hodina' : a ? 'hodinu' : 'hodinou';
          case 'hh':
            return n || a ? i + (t(e) ? 'hodiny' : 'hodín') : i + 'hodinami';
          case 'd':
            return n || a ? 'deň' : 'dňom';
          case 'dd':
            return n || a ? i + (t(e) ? 'dni' : 'dní') : i + 'dňami';
          case 'M':
            return n || a ? 'mesiac' : 'mesiacom';
          case 'MM':
            return n || a ? i + (t(e) ? 'mesiace' : 'mesiacov') : i + 'mesiacmi';
          case 'y':
            return n || a ? 'rok' : 'rokom';
          case 'yy':
            return n || a ? i + (t(e) ? 'roky' : 'rokov') : i + 'rokmi';
        }
      }
      var r = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
        a = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
      return e.defineLocale('sk', {
        months: r,
        monthsShort: a,
        weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
        weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
        weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd D. MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[dnes o] LT',
          nextDay: '[zajtra o] LT',
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return '[v nedeľu o] LT';
              case 1:
              case 2:
                return '[v] dddd [o] LT';
              case 3:
                return '[v stredu o] LT';
              case 4:
                return '[vo štvrtok o] LT';
              case 5:
                return '[v piatok o] LT';
              case 6:
                return '[v sobotu o] LT';
            }
          },
          lastDay: '[včera o] LT',
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return '[minulú nedeľu o] LT';
              case 1:
              case 2:
                return '[minulý] dddd [o] LT';
              case 3:
                return '[minulú stredu o] LT';
              case 4:
              case 5:
                return '[minulý] dddd [o] LT';
              case 6:
                return '[minulú sobotu o] LT';
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'za %s',
          past: 'pred %s',
          s: n,
          m: n,
          mm: n,
          h: n,
          hh: n,
          d: n,
          dd: n,
          M: n,
          MM: n,
          y: n,
          yy: n,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e, t, n, r) {
        var a = e + ' ';
        switch (n) {
          case 's':
            return t || r ? 'nekaj sekund' : 'nekaj sekundami';
          case 'm':
            return t ? 'ena minuta' : 'eno minuto';
          case 'mm':
            return (a +=
              1 === e
                ? t
                  ? 'minuta'
                  : 'minuto'
                : 2 === e
                  ? t || r
                    ? 'minuti'
                    : 'minutama'
                  : e < 5
                    ? t || r
                      ? 'minute'
                      : 'minutami'
                    : t || r
                      ? 'minut'
                      : 'minutami');
          case 'h':
            return t ? 'ena ura' : 'eno uro';
          case 'hh':
            return (a +=
              1 === e
                ? t
                  ? 'ura'
                  : 'uro'
                : 2 === e
                  ? t || r
                    ? 'uri'
                    : 'urama'
                  : e < 5
                    ? t || r
                      ? 'ure'
                      : 'urami'
                    : t || r
                      ? 'ur'
                      : 'urami');
          case 'd':
            return t || r ? 'en dan' : 'enim dnem';
          case 'dd':
            return (a +=
              1 === e ? (t || r ? 'dan' : 'dnem') : 2 === e ? (t || r ? 'dni' : 'dnevoma') : t || r ? 'dni' : 'dnevi');
          case 'M':
            return t || r ? 'en mesec' : 'enim mesecem';
          case 'MM':
            return (a +=
              1 === e
                ? t || r
                  ? 'mesec'
                  : 'mesecem'
                : 2 === e
                  ? t || r
                    ? 'meseca'
                    : 'mesecema'
                  : e < 5
                    ? t || r
                      ? 'mesece'
                      : 'meseci'
                    : t || r
                      ? 'mesecev'
                      : 'meseci');
          case 'y':
            return t || r ? 'eno leto' : 'enim letom';
          case 'yy':
            return (a +=
              1 === e
                ? t || r
                  ? 'leto'
                  : 'letom'
                : 2 === e
                  ? t || r
                    ? 'leti'
                    : 'letoma'
                  : e < 5
                    ? t || r
                      ? 'leta'
                      : 'leti'
                    : t || r
                      ? 'let'
                      : 'leti');
        }
      }
      return e.defineLocale('sl', {
        months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
        weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
        weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[danes ob] LT',
          nextDay: '[jutri ob] LT',
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return '[v] [nedeljo] [ob] LT';
              case 3:
                return '[v] [sredo] [ob] LT';
              case 6:
                return '[v] [soboto] [ob] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                return '[v] dddd [ob] LT';
            }
          },
          lastDay: '[včeraj ob] LT',
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return '[prejšnjo] [nedeljo] [ob] LT';
              case 3:
                return '[prejšnjo] [sredo] [ob] LT';
              case 6:
                return '[prejšnjo] [soboto] [ob] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                return '[prejšnji] dddd [ob] LT';
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'čez %s',
          past: 'pred %s',
          s: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('sq', {
        months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
        monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
        weekdays: 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
        weekdaysShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
        weekdaysMin: 'D_H_Ma_Më_E_P_Sh'.split('_'),
        weekdaysParseExact: !0,
        meridiemParse: /PD|MD/,
        isPM: function (e) {
          return 'M' === e.charAt(0);
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'PD' : 'MD';
        },
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Sot në] LT',
          nextDay: '[Nesër në] LT',
          nextWeek: 'dddd [në] LT',
          lastDay: '[Dje në] LT',
          lastWeek: 'dddd [e kaluar në] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'në %s',
          past: '%s më parë',
          s: 'disa sekonda',
          m: 'një minutë',
          mm: '%d minuta',
          h: 'një orë',
          hh: '%d orë',
          d: 'një ditë',
          dd: '%d ditë',
          M: 'një muaj',
          MM: '%d muaj',
          y: 'një vit',
          yy: '%d vite',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = {
        words: {
          m: ['jedan minut', 'jedne minute'],
          mm: ['minut', 'minute', 'minuta'],
          h: ['jedan sat', 'jednog sata'],
          hh: ['sat', 'sata', 'sati'],
          dd: ['dan', 'dana', 'dana'],
          MM: ['mesec', 'meseca', 'meseci'],
          yy: ['godina', 'godine', 'godina'],
        },
        correctGrammaticalCase: function (e, t) {
          return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
        },
        translate: function (e, n, r) {
          var a = t.words[r];
          return 1 === r.length ? (n ? a[0] : a[1]) : e + ' ' + t.correctGrammaticalCase(e, a);
        },
      };
      return e.defineLocale('sr', {
        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[danas u] LT',
          nextDay: '[sutra u] LT',
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return '[u] [nedelju] [u] LT';
              case 3:
                return '[u] [sredu] [u] LT';
              case 6:
                return '[u] [subotu] [u] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                return '[u] dddd [u] LT';
            }
          },
          lastDay: '[juče u] LT',
          lastWeek: function () {
            return [
              '[prošle] [nedelje] [u] LT',
              '[prošlog] [ponedeljka] [u] LT',
              '[prošlog] [utorka] [u] LT',
              '[prošle] [srede] [u] LT',
              '[prošlog] [četvrtka] [u] LT',
              '[prošlog] [petka] [u] LT',
              '[prošle] [subote] [u] LT',
            ][this.day()];
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'za %s',
          past: 'pre %s',
          s: 'nekoliko sekundi',
          m: t.translate,
          mm: t.translate,
          h: t.translate,
          hh: t.translate,
          d: 'dan',
          dd: t.translate,
          M: 'mesec',
          MM: t.translate,
          y: 'godinu',
          yy: t.translate,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = {
        words: {
          m: ['један минут', 'једне минуте'],
          mm: ['минут', 'минуте', 'минута'],
          h: ['један сат', 'једног сата'],
          hh: ['сат', 'сата', 'сати'],
          dd: ['дан', 'дана', 'дана'],
          MM: ['месец', 'месеца', 'месеци'],
          yy: ['година', 'године', 'година'],
        },
        correctGrammaticalCase: function (e, t) {
          return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
        },
        translate: function (e, n, r) {
          var a = t.words[r];
          return 1 === r.length ? (n ? a[0] : a[1]) : e + ' ' + t.correctGrammaticalCase(e, a);
        },
      };
      return e.defineLocale('sr-cyrl', {
        months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split('_'),
        monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
        weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
        weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[данас у] LT',
          nextDay: '[сутра у] LT',
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return '[у] [недељу] [у] LT';
              case 3:
                return '[у] [среду] [у] LT';
              case 6:
                return '[у] [суботу] [у] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                return '[у] dddd [у] LT';
            }
          },
          lastDay: '[јуче у] LT',
          lastWeek: function () {
            return [
              '[прошле] [недеље] [у] LT',
              '[прошлог] [понедељка] [у] LT',
              '[прошлог] [уторка] [у] LT',
              '[прошле] [среде] [у] LT',
              '[прошлог] [четвртка] [у] LT',
              '[прошлог] [петка] [у] LT',
              '[прошле] [суботе] [у] LT',
            ][this.day()];
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'за %s',
          past: 'пре %s',
          s: 'неколико секунди',
          m: t.translate,
          mm: t.translate,
          h: t.translate,
          hh: t.translate,
          d: 'дан',
          dd: t.translate,
          M: 'месец',
          MM: t.translate,
          y: 'годину',
          yy: t.translate,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('ss', {
        months:
          "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split(
            '_'
          ),
        monthsShort: 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
        weekdays: 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
        weekdaysShort: 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
        weekdaysMin: 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A',
        },
        calendar: {
          sameDay: '[Namuhla nga] LT',
          nextDay: '[Kusasa nga] LT',
          nextWeek: 'dddd [nga] LT',
          lastDay: '[Itolo nga] LT',
          lastWeek: 'dddd [leliphelile] [nga] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'nga %s',
          past: 'wenteka nga %s',
          s: 'emizuzwana lomcane',
          m: 'umzuzu',
          mm: '%d emizuzu',
          h: 'lihora',
          hh: '%d emahora',
          d: 'lilanga',
          dd: '%d emalanga',
          M: 'inyanga',
          MM: '%d tinyanga',
          y: 'umnyaka',
          yy: '%d iminyaka',
        },
        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
        meridiem: function (e, t, n) {
          return e < 11 ? 'ekuseni' : e < 15 ? 'emini' : e < 19 ? 'entsambama' : 'ebusuku';
        },
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            'ekuseni' === t
              ? e
              : 'emini' === t
                ? e >= 11
                  ? e
                  : e + 12
                : 'entsambama' === t || 'ebusuku' === t
                  ? 0 === e
                    ? 0
                    : e + 12
                  : void 0
          );
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: '%d',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('sv', {
        months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
        weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
        weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [kl.] HH:mm',
          LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
          lll: 'D MMM YYYY HH:mm',
          llll: 'ddd D MMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Idag] LT',
          nextDay: '[Imorgon] LT',
          lastDay: '[Igår] LT',
          nextWeek: '[På] dddd LT',
          lastWeek: '[I] dddd[s] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'om %s',
          past: 'för %s sedan',
          s: 'några sekunder',
          m: 'en minut',
          mm: '%d minuter',
          h: 'en timme',
          hh: '%d timmar',
          d: 'en dag',
          dd: '%d dagar',
          M: 'en månad',
          MM: '%d månader',
          y: 'ett år',
          yy: '%d år',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~((e % 100) / 10) ? 'e' : 1 === t ? 'a' : 2 === t ? 'a' : 'e');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('sw', {
        months: 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
        weekdays: 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
        weekdaysShort: 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
        weekdaysMin: 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[leo saa] LT',
          nextDay: '[kesho saa] LT',
          nextWeek: '[wiki ijayo] dddd [saat] LT',
          lastDay: '[jana] LT',
          lastWeek: '[wiki iliyopita] dddd [saat] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s baadaye',
          past: 'tokea %s',
          s: 'hivi punde',
          m: 'dakika moja',
          mm: 'dakika %d',
          h: 'saa limoja',
          hh: 'masaa %d',
          d: 'siku moja',
          dd: 'masiku %d',
          M: 'mwezi mmoja',
          MM: 'miezi %d',
          y: 'mwaka mmoja',
          yy: 'miaka %d',
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = { 1: '௧', 2: '௨', 3: '௩', 4: '௪', 5: '௫', 6: '௬', 7: '௭', 8: '௮', 9: '௯', 0: '௦' },
        n = { '௧': '1', '௨': '2', '௩': '3', '௪': '4', '௫': '5', '௬': '6', '௭': '7', '௮': '8', '௯': '9', '௦': '0' };
      return e.defineLocale('ta', {
        months: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
        monthsShort: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split(
          '_'
        ),
        weekdays: 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split(
          '_'
        ),
        weekdaysShort: 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
        weekdaysMin: 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, HH:mm',
          LLLL: 'dddd, D MMMM YYYY, HH:mm',
        },
        calendar: {
          sameDay: '[இன்று] LT',
          nextDay: '[நாளை] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[நேற்று] LT',
          lastWeek: '[கடந்த வாரம்] dddd, LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s இல்',
          past: '%s முன்',
          s: 'ஒரு சில விநாடிகள்',
          m: 'ஒரு நிமிடம்',
          mm: '%d நிமிடங்கள்',
          h: 'ஒரு மணி நேரம்',
          hh: '%d மணி நேரம்',
          d: 'ஒரு நாள்',
          dd: '%d நாட்கள்',
          M: 'ஒரு மாதம்',
          MM: '%d மாதங்கள்',
          y: 'ஒரு வருடம்',
          yy: '%d ஆண்டுகள்',
        },
        dayOfMonthOrdinalParse: /\d{1,2}வது/,
        ordinal: function (e) {
          return e + 'வது';
        },
        preparse: function (e) {
          return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
        meridiem: function (e, t, n) {
          return e < 2
            ? ' யாமம்'
            : e < 6
              ? ' வைகறை'
              : e < 10
                ? ' காலை'
                : e < 14
                  ? ' நண்பகல்'
                  : e < 18
                    ? ' எற்பாடு'
                    : e < 22
                      ? ' மாலை'
                      : ' யாமம்';
        },
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            'யாமம்' === t
              ? e < 2
                ? e
                : e + 12
              : 'வைகறை' === t || 'காலை' === t
                ? e
                : 'நண்பகல்' === t && e >= 10
                  ? e
                  : e + 12
          );
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('te', {
        months: 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
        monthsShort: 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
        weekdaysShort: 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
        weekdaysMin: 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm',
          LTS: 'A h:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm',
          LLLL: 'dddd, D MMMM YYYY, A h:mm',
        },
        calendar: {
          sameDay: '[నేడు] LT',
          nextDay: '[రేపు] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[నిన్న] LT',
          lastWeek: '[గత] dddd, LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s లో',
          past: '%s క్రితం',
          s: 'కొన్ని క్షణాలు',
          m: 'ఒక నిమిషం',
          mm: '%d నిమిషాలు',
          h: 'ఒక గంట',
          hh: '%d గంటలు',
          d: 'ఒక రోజు',
          dd: '%d రోజులు',
          M: 'ఒక నెల',
          MM: '%d నెలలు',
          y: 'ఒక సంవత్సరం',
          yy: '%d సంవత్సరాలు',
        },
        dayOfMonthOrdinalParse: /\d{1,2}వ/,
        ordinal: '%dవ',
        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            'రాత్రి' === t
              ? e < 4
                ? e
                : e + 12
              : 'ఉదయం' === t
                ? e
                : 'మధ్యాహ్నం' === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : 'సాయంత్రం' === t
                    ? e + 12
                    : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'రాత్రి' : e < 10 ? 'ఉదయం' : e < 17 ? 'మధ్యాహ్నం' : e < 20 ? 'సాయంత్రం' : 'రాత్రి';
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('tet', {
        months: 'Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez'.split('_'),
        weekdays: 'Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu'.split('_'),
        weekdaysShort: 'Dom_Seg_Ters_Kua_Kint_Sext_Sab'.split('_'),
        weekdaysMin: 'Do_Seg_Te_Ku_Ki_Sex_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Ohin iha] LT',
          nextDay: '[Aban iha] LT',
          nextWeek: 'dddd [iha] LT',
          lastDay: '[Horiseik iha] LT',
          lastWeek: 'dddd [semana kotuk] [iha] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'iha %s',
          past: '%s liuba',
          s: 'minutu balun',
          m: 'minutu ida',
          mm: 'minutus %d',
          h: 'horas ida',
          hh: 'horas %d',
          d: 'loron ida',
          dd: 'loron %d',
          M: 'fulan ida',
          MM: 'fulan %d',
          y: 'tinan ida',
          yy: 'tinan %d',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~((e % 100) / 10) ? 'th' : 1 === t ? 'st' : 2 === t ? 'nd' : 3 === t ? 'rd' : 'th');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('th', {
        months:
          'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split(
            '_'
          ),
        monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
        weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
        weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY เวลา H:mm',
          LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm',
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM: function (e) {
          return 'หลังเที่ยง' === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'ก่อนเที่ยง' : 'หลังเที่ยง';
        },
        calendar: {
          sameDay: '[วันนี้ เวลา] LT',
          nextDay: '[พรุ่งนี้ เวลา] LT',
          nextWeek: 'dddd[หน้า เวลา] LT',
          lastDay: '[เมื่อวานนี้ เวลา] LT',
          lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'อีก %s',
          past: '%sที่แล้ว',
          s: 'ไม่กี่วินาที',
          m: '1 นาที',
          mm: '%d นาที',
          h: '1 ชั่วโมง',
          hh: '%d ชั่วโมง',
          d: '1 วัน',
          dd: '%d วัน',
          M: '1 เดือน',
          MM: '%d เดือน',
          y: '1 ปี',
          yy: '%d ปี',
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('tl-ph', {
        months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
        monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
        weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
        weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
        weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'MM/D/YYYY',
          LL: 'MMMM D, YYYY',
          LLL: 'MMMM D, YYYY HH:mm',
          LLLL: 'dddd, MMMM DD, YYYY HH:mm',
        },
        calendar: {
          sameDay: 'LT [ngayong araw]',
          nextDay: '[Bukas ng] LT',
          nextWeek: 'LT [sa susunod na] dddd',
          lastDay: 'LT [kahapon]',
          lastWeek: 'LT [noong nakaraang] dddd',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'sa loob ng %s',
          past: '%s ang nakalipas',
          s: 'ilang segundo',
          m: 'isang minuto',
          mm: '%d minuto',
          h: 'isang oras',
          hh: '%d oras',
          d: 'isang araw',
          dd: '%d araw',
          M: 'isang buwan',
          MM: '%d buwan',
          y: 'isang taon',
          yy: '%d taon',
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function (e) {
          return e;
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e) {
        var t = e;
        return (t =
          -1 !== e.indexOf('jaj')
            ? t.slice(0, -3) + 'leS'
            : -1 !== e.indexOf('jar')
              ? t.slice(0, -3) + 'waQ'
              : -1 !== e.indexOf('DIS')
                ? t.slice(0, -3) + 'nem'
                : t + ' pIq');
      }
      function n(e) {
        var t = e;
        return (t =
          -1 !== e.indexOf('jaj')
            ? t.slice(0, -3) + 'Hu’'
            : -1 !== e.indexOf('jar')
              ? t.slice(0, -3) + 'wen'
              : -1 !== e.indexOf('DIS')
                ? t.slice(0, -3) + 'ben'
                : t + ' ret');
      }
      function r(e, t, n, r) {
        var i = a(e);
        switch (n) {
          case 'mm':
            return i + ' tup';
          case 'hh':
            return i + ' rep';
          case 'dd':
            return i + ' jaj';
          case 'MM':
            return i + ' jar';
          case 'yy':
            return i + ' DIS';
        }
      }
      function a(e) {
        var t = Math.floor((e % 1e3) / 100),
          n = Math.floor((e % 100) / 10),
          r = e % 10,
          a = '';
        return (
          t > 0 && (a += i[t] + 'vatlh'),
          n > 0 && (a += ('' !== a ? ' ' : '') + i[n] + 'maH'),
          r > 0 && (a += ('' !== a ? ' ' : '') + i[r]),
          '' === a ? 'pagh' : a
        );
      }
      var i = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');
      return e.defineLocale('tlh', {
        months:
          'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split(
            '_'
          ),
        monthsShort:
          'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split(
            '_'
          ),
        monthsParseExact: !0,
        weekdays: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        weekdaysShort: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        weekdaysMin: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[DaHjaj] LT',
          nextDay: '[wa’leS] LT',
          nextWeek: 'LLL',
          lastDay: '[wa’Hu’] LT',
          lastWeek: 'LLL',
          sameElse: 'L',
        },
        relativeTime: {
          future: t,
          past: n,
          s: 'puS lup',
          m: 'wa’ tup',
          mm: r,
          h: 'wa’ rep',
          hh: r,
          d: 'wa’ jaj',
          dd: r,
          M: 'wa’ jar',
          MM: r,
          y: 'wa’ DIS',
          yy: r,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = {
        1: "'inci",
        5: "'inci",
        8: "'inci",
        70: "'inci",
        80: "'inci",
        2: "'nci",
        7: "'nci",
        20: "'nci",
        50: "'nci",
        3: "'üncü",
        4: "'üncü",
        100: "'üncü",
        6: "'ncı",
        9: "'uncu",
        10: "'uncu",
        30: "'uncu",
        60: "'ıncı",
        90: "'ıncı",
      };
      return e.defineLocale('tr', {
        months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
        monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
        weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
        weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
        weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[bugün saat] LT',
          nextDay: '[yarın saat] LT',
          nextWeek: '[haftaya] dddd [saat] LT',
          lastDay: '[dün] LT',
          lastWeek: '[geçen hafta] dddd [saat] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s sonra',
          past: '%s önce',
          s: 'birkaç saniye',
          m: 'bir dakika',
          mm: '%d dakika',
          h: 'bir saat',
          hh: '%d saat',
          d: 'bir gün',
          dd: '%d gün',
          M: 'bir ay',
          MM: '%d ay',
          y: 'bir yıl',
          yy: '%d yıl',
        },
        dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
        ordinal: function (e) {
          if (0 === e) return e + "'ıncı";
          var n = e % 10,
            r = (e % 100) - n,
            a = e >= 100 ? 100 : null;
          return e + (t[n] || t[r] || t[a]);
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e, t, n, r) {
        var a = {
          s: ['viensas secunds', "'iensas secunds"],
          m: ["'n míut", "'iens míut"],
          mm: [e + ' míuts', e + ' míuts'],
          h: ["'n þora", "'iensa þora"],
          hh: [e + ' þoras', e + ' þoras'],
          d: ["'n ziua", "'iensa ziua"],
          dd: [e + ' ziuas', e + ' ziuas'],
          M: ["'n mes", "'iens mes"],
          MM: [e + ' mesen', e + ' mesen'],
          y: ["'n ar", "'iens ar"],
          yy: [e + ' ars', e + ' ars'],
        };
        return r ? a[n][0] : t ? a[n][0] : a[n][1];
      }
      return e.defineLocale('tzl', {
        months: 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
        weekdays: 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
        weekdaysShort: 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
        weekdaysMin: 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM [dallas] YYYY',
          LLL: 'D. MMMM [dallas] YYYY HH.mm',
          LLLL: 'dddd, [li] D. MMMM [dallas] YYYY HH.mm',
        },
        meridiemParse: /d\'o|d\'a/i,
        isPM: function (e) {
          return "d'o" === e.toLowerCase();
        },
        meridiem: function (e, t, n) {
          return e > 11 ? (n ? "d'o" : "D'O") : n ? "d'a" : "D'A";
        },
        calendar: {
          sameDay: '[oxhi à] LT',
          nextDay: '[demà à] LT',
          nextWeek: 'dddd [à] LT',
          lastDay: '[ieiri à] LT',
          lastWeek: '[sür el] dddd [lasteu à] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'osprei %s',
          past: 'ja%s',
          s: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('tzm', {
        months: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
        monthsShort: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
        weekdays: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        weekdaysShort: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        weekdaysMin: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
          nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
          nextWeek: 'dddd [ⴴ] LT',
          lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
          lastWeek: 'dddd [ⴴ] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
          past: 'ⵢⴰⵏ %s',
          s: 'ⵉⵎⵉⴽ',
          m: 'ⵎⵉⵏⵓⴺ',
          mm: '%d ⵎⵉⵏⵓⴺ',
          h: 'ⵙⴰⵄⴰ',
          hh: '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
          d: 'ⴰⵙⵙ',
          dd: '%d oⵙⵙⴰⵏ',
          M: 'ⴰⵢoⵓⵔ',
          MM: '%d ⵉⵢⵢⵉⵔⵏ',
          y: 'ⴰⵙⴳⴰⵙ',
          yy: '%d ⵉⵙⴳⴰⵙⵏ',
        },
        week: { dow: 6, doy: 12 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('tzm-latn', {
        months: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
        monthsShort: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
        weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        weekdaysMin: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[asdkh g] LT',
          nextDay: '[aska g] LT',
          nextWeek: 'dddd [g] LT',
          lastDay: '[assant g] LT',
          lastWeek: 'dddd [g] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'dadkh s yan %s',
          past: 'yan %s',
          s: 'imik',
          m: 'minuḍ',
          mm: '%d minuḍ',
          h: 'saɛa',
          hh: '%d tassaɛin',
          d: 'ass',
          dd: '%d ossan',
          M: 'ayowr',
          MM: '%d iyyirn',
          y: 'asgas',
          yy: '%d isgasn',
        },
        week: { dow: 6, doy: 12 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      function t(e, t) {
        var n = e.split('_');
        return t % 10 == 1 && t % 100 != 11
          ? n[0]
          : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
            ? n[1]
            : n[2];
      }
      function n(e, n, r) {
        var a = {
          mm: n ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
          hh: n ? 'година_години_годин' : 'годину_години_годин',
          dd: 'день_дні_днів',
          MM: 'місяць_місяці_місяців',
          yy: 'рік_роки_років',
        };
        return 'm' === r ? (n ? 'хвилина' : 'хвилину') : 'h' === r ? (n ? 'година' : 'годину') : e + ' ' + t(a[r], +e);
      }
      function r(e, t) {
        var n = {
          nominative: 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
          accusative: 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
          genitive: 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_'),
        };
        return e
          ? n[
              /(\[[ВвУу]\]) ?dddd/.test(t)
                ? 'accusative'
                : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)
                  ? 'genitive'
                  : 'nominative'
            ][e.day()]
          : n.nominative;
      }
      function a(e) {
        return function () {
          return e + 'о' + (11 === this.hours() ? 'б' : '') + '] LT';
        };
      }
      return e.defineLocale('uk', {
        months: {
          format: 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
          standalone:
            'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_'),
        },
        monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
        weekdays: r,
        weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY р.',
          LLL: 'D MMMM YYYY р., HH:mm',
          LLLL: 'dddd, D MMMM YYYY р., HH:mm',
        },
        calendar: {
          sameDay: a('[Сьогодні '),
          nextDay: a('[Завтра '),
          lastDay: a('[Вчора '),
          nextWeek: a('[У] dddd ['),
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 5:
              case 6:
                return a('[Минулої] dddd [').call(this);
              case 1:
              case 2:
              case 4:
                return a('[Минулого] dddd [').call(this);
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'за %s',
          past: '%s тому',
          s: 'декілька секунд',
          m: n,
          mm: n,
          h: 'годину',
          hh: n,
          d: 'день',
          dd: n,
          M: 'місяць',
          MM: n,
          y: 'рік',
          yy: n,
        },
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM: function (e) {
          return /^(дня|вечора)$/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'ночі' : e < 12 ? 'ранку' : e < 17 ? 'дня' : 'вечора';
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
        ordinal: function (e, t) {
          switch (t) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
              return e + '-й';
            case 'D':
              return e + '-го';
            default:
              return e;
          }
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      var t = ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر'],
        n = ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'];
      return e.defineLocale('ur', {
        months: t,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: n,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd، D MMMM YYYY HH:mm',
        },
        meridiemParse: /صبح|شام/,
        isPM: function (e) {
          return 'شام' === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'صبح' : 'شام';
        },
        calendar: {
          sameDay: '[آج بوقت] LT',
          nextDay: '[کل بوقت] LT',
          nextWeek: 'dddd [بوقت] LT',
          lastDay: '[گذشتہ روز بوقت] LT',
          lastWeek: '[گذشتہ] dddd [بوقت] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s بعد',
          past: '%s قبل',
          s: 'چند سیکنڈ',
          m: 'ایک منٹ',
          mm: '%d منٹ',
          h: 'ایک گھنٹہ',
          hh: '%d گھنٹے',
          d: 'ایک دن',
          dd: '%d دن',
          M: 'ایک ماہ',
          MM: '%d ماہ',
          y: 'ایک سال',
          yy: '%d سال',
        },
        preparse: function (e) {
          return e.replace(/،/g, ',');
        },
        postformat: function (e) {
          return e.replace(/,/g, '،');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('uz', {
        months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
        monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
        weekdays: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
        weekdaysShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
        weekdaysMin: 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'D MMMM YYYY, dddd HH:mm',
        },
        calendar: {
          sameDay: '[Бугун соат] LT [да]',
          nextDay: '[Эртага] LT [да]',
          nextWeek: 'dddd [куни соат] LT [да]',
          lastDay: '[Кеча соат] LT [да]',
          lastWeek: '[Утган] dddd [куни соат] LT [да]',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'Якин %s ичида',
          past: 'Бир неча %s олдин',
          s: 'фурсат',
          m: 'бир дакика',
          mm: '%d дакика',
          h: 'бир соат',
          hh: '%d соат',
          d: 'бир кун',
          dd: '%d кун',
          M: 'бир ой',
          MM: '%d ой',
          y: 'бир йил',
          yy: '%d йил',
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('uz-latn', {
        months: 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr'.split('_'),
        monthsShort: 'Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek'.split('_'),
        weekdays: 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split('_'),
        weekdaysShort: 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
        weekdaysMin: 'Ya_Du_Se_Cho_Pa_Ju_Sha'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'D MMMM YYYY, dddd HH:mm',
        },
        calendar: {
          sameDay: '[Bugun soat] LT [da]',
          nextDay: '[Ertaga] LT [da]',
          nextWeek: 'dddd [kuni soat] LT [da]',
          lastDay: '[Kecha soat] LT [da]',
          lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
          sameElse: 'L',
        },
        relativeTime: {
          future: 'Yaqin %s ichida',
          past: 'Bir necha %s oldin',
          s: 'soniya',
          m: 'bir daqiqa',
          mm: '%d daqiqa',
          h: 'bir soat',
          hh: '%d soat',
          d: 'bir kun',
          dd: '%d kun',
          M: 'bir oy',
          MM: '%d oy',
          y: 'bir yil',
          yy: '%d yil',
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('vi', {
        months:
          'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split(
            '_'
          ),
        monthsShort: 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
        monthsParseExact: !0,
        weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
        weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysParseExact: !0,
        meridiemParse: /sa|ch/i,
        isPM: function (e) {
          return /^ch$/i.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 12 ? (n ? 'sa' : 'SA') : n ? 'ch' : 'CH';
        },
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM [năm] YYYY',
          LLL: 'D MMMM [năm] YYYY HH:mm',
          LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
          l: 'DD/M/YYYY',
          ll: 'D MMM YYYY',
          lll: 'D MMM YYYY HH:mm',
          llll: 'ddd, D MMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Hôm nay lúc] LT',
          nextDay: '[Ngày mai lúc] LT',
          nextWeek: 'dddd [tuần tới lúc] LT',
          lastDay: '[Hôm qua lúc] LT',
          lastWeek: 'dddd [tuần rồi lúc] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s tới',
          past: '%s trước',
          s: 'vài giây',
          m: 'một phút',
          mm: '%d phút',
          h: 'một giờ',
          hh: '%d giờ',
          d: 'một ngày',
          dd: '%d ngày',
          M: 'một tháng',
          MM: '%d tháng',
          y: 'một năm',
          yy: '%d năm',
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function (e) {
          return e;
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('x-pseudo', {
        months:
          'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split(
            '_'
          ),
        monthsShort: 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split('_'),
        monthsParseExact: !0,
        weekdays: 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split('_'),
        weekdaysShort: 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
        weekdaysMin: 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[T~ódá~ý át] LT',
          nextDay: '[T~ómó~rró~w át] LT',
          nextWeek: 'dddd [át] LT',
          lastDay: '[Ý~ést~érdá~ý át] LT',
          lastWeek: '[L~ást] dddd [át] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'í~ñ %s',
          past: '%s á~gó',
          s: 'á ~féw ~sécó~ñds',
          m: 'á ~míñ~úté',
          mm: '%d m~íñú~tés',
          h: 'á~ñ hó~úr',
          hh: '%d h~óúrs',
          d: 'á ~dáý',
          dd: '%d d~áýs',
          M: 'á ~móñ~th',
          MM: '%d m~óñt~hs',
          y: 'á ~ýéár',
          yy: '%d ý~éárs',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~((e % 100) / 10) ? 'th' : 1 === t ? 'st' : 2 === t ? 'nd' : 3 === t ? 'rd' : 'th');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('yo', {
        months: 'Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀'.split('_'),
        monthsShort: 'Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀'.split('_'),
        weekdays: 'Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta'.split('_'),
        weekdaysShort: 'Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá'.split('_'),
        weekdaysMin: 'Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A',
        },
        calendar: {
          sameDay: '[Ònì ni] LT',
          nextDay: '[Ọ̀la ni] LT',
          nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
          lastDay: '[Àna ni] LT',
          lastWeek: 'dddd [Ọsẹ̀ tólọ́] [ni] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'ní %s',
          past: '%s kọjá',
          s: 'ìsẹjú aayá die',
          m: 'ìsẹjú kan',
          mm: 'ìsẹjú %d',
          h: 'wákati kan',
          hh: 'wákati %d',
          d: 'ọjọ́ kan',
          dd: 'ọjọ́ %d',
          M: 'osù kan',
          MM: 'osù %d',
          y: 'ọdún kan',
          yy: 'ọdún %d',
        },
        dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
        ordinal: 'ọjọ́ %d',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('zh-cn', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY年MMMD日',
          LL: 'YYYY年MMMD日',
          LLL: 'YYYY年MMMD日Ah点mm分',
          LLLL: 'YYYY年MMMD日ddddAh点mm分',
          l: 'YYYY年MMMD日',
          ll: 'YYYY年MMMD日',
          lll: 'YYYY年MMMD日 HH:mm',
          llll: 'YYYY年MMMD日dddd HH:mm',
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            '凌晨' === t || '早上' === t || '上午' === t
              ? e
              : '下午' === t || '晚上' === t
                ? e + 12
                : e >= 11
                  ? e
                  : e + 12
          );
        },
        meridiem: function (e, t, n) {
          var r = 100 * e + t;
          return r < 600
            ? '凌晨'
            : r < 900
              ? '早上'
              : r < 1130
                ? '上午'
                : r < 1230
                  ? '中午'
                  : r < 1800
                    ? '下午'
                    : '晚上';
        },
        calendar: {
          sameDay: '[今天]LT',
          nextDay: '[明天]LT',
          nextWeek: '[下]ddddLT',
          lastDay: '[昨天]LT',
          lastWeek: '[上]ddddLT',
          sameElse: 'L',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal: function (e, t) {
          switch (t) {
            case 'd':
            case 'D':
            case 'DDD':
              return e + '日';
            case 'M':
              return e + '月';
            case 'w':
            case 'W':
              return e + '周';
            default:
              return e;
          }
        },
        relativeTime: {
          future: '%s内',
          past: '%s前',
          s: '几秒',
          m: '1 分钟',
          mm: '%d 分钟',
          h: '1 小时',
          hh: '%d 小时',
          d: '1 天',
          dd: '%d 天',
          M: '1 个月',
          MM: '%d 个月',
          y: '1 年',
          yy: '%d 年',
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('zh-hk', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY年MMMD日',
          LL: 'YYYY年MMMD日',
          LLL: 'YYYY年MMMD日 HH:mm',
          LLLL: 'YYYY年MMMD日dddd HH:mm',
          l: 'YYYY年MMMD日',
          ll: 'YYYY年MMMD日',
          lll: 'YYYY年MMMD日 HH:mm',
          llll: 'YYYY年MMMD日dddd HH:mm',
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            '凌晨' === t || '早上' === t || '上午' === t
              ? e
              : '中午' === t
                ? e >= 11
                  ? e
                  : e + 12
                : '下午' === t || '晚上' === t
                  ? e + 12
                  : void 0
          );
        },
        meridiem: function (e, t, n) {
          var r = 100 * e + t;
          return r < 600
            ? '凌晨'
            : r < 900
              ? '早上'
              : r < 1130
                ? '上午'
                : r < 1230
                  ? '中午'
                  : r < 1800
                    ? '下午'
                    : '晚上';
        },
        calendar: {
          sameDay: '[今天]LT',
          nextDay: '[明天]LT',
          nextWeek: '[下]ddddLT',
          lastDay: '[昨天]LT',
          lastWeek: '[上]ddddLT',
          sameElse: 'L',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function (e, t) {
          switch (t) {
            case 'd':
            case 'D':
            case 'DDD':
              return e + '日';
            case 'M':
              return e + '月';
            case 'w':
            case 'W':
              return e + '週';
            default:
              return e;
          }
        },
        relativeTime: {
          future: '%s內',
          past: '%s前',
          s: '幾秒',
          m: '1 分鐘',
          mm: '%d 分鐘',
          h: '1 小時',
          hh: '%d 小時',
          d: '1 天',
          dd: '%d 天',
          M: '1 個月',
          MM: '%d 個月',
          y: '1 年',
          yy: '%d 年',
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      'use strict';
      return e.defineLocale('zh-tw', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY年MMMD日',
          LL: 'YYYY年MMMD日',
          LLL: 'YYYY年MMMD日 HH:mm',
          LLLL: 'YYYY年MMMD日dddd HH:mm',
          l: 'YYYY年MMMD日',
          ll: 'YYYY年MMMD日',
          lll: 'YYYY年MMMD日 HH:mm',
          llll: 'YYYY年MMMD日dddd HH:mm',
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            '凌晨' === t || '早上' === t || '上午' === t
              ? e
              : '中午' === t
                ? e >= 11
                  ? e
                  : e + 12
                : '下午' === t || '晚上' === t
                  ? e + 12
                  : void 0
          );
        },
        meridiem: function (e, t, n) {
          var r = 100 * e + t;
          return r < 600
            ? '凌晨'
            : r < 900
              ? '早上'
              : r < 1130
                ? '上午'
                : r < 1230
                  ? '中午'
                  : r < 1800
                    ? '下午'
                    : '晚上';
        },
        calendar: {
          sameDay: '[今天]LT',
          nextDay: '[明天]LT',
          nextWeek: '[下]ddddLT',
          lastDay: '[昨天]LT',
          lastWeek: '[上]ddddLT',
          sameElse: 'L',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function (e, t) {
          switch (t) {
            case 'd':
            case 'D':
            case 'DDD':
              return e + '日';
            case 'M':
              return e + '月';
            case 'w':
            case 'W':
              return e + '週';
            default:
              return e;
          }
        },
        relativeTime: {
          future: '%s內',
          past: '%s前',
          s: '幾秒',
          m: '1 分鐘',
          mm: '%d 分鐘',
          h: '1 小時',
          hh: '%d 小時',
          d: '1 天',
          dd: '%d 天',
          M: '1 個月',
          MM: '%d 個月',
          y: '1 年',
          yy: '%d 年',
        },
      });
    });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t) {},
  function (e, t, n) {
    var r = n(563),
      a = n(93),
      i = n(577),
      o = n(578),
      s = (e.exports = r.extend({ config: { defaultLifecycle: a.CLASS } }));
    s.$$using['jpex-web'] || s.use(n(579)),
      s.use(i),
      (s.reset = function () {
        var e = this;
        this.clearCache(),
          Object.keys(this.$$factories).forEach(function (t) {
            delete e.$$factories[t];
          });
      }),
      (s.spawn = function (e) {
        return e ? this.extend() : s.extend();
      }),
      (s.install = o);
  },
  function (e, t, n) {
    e.exports = n(564)();
  },
  function (e, t, n) {
    function r(e) {
      var t = this;
      e = a(t, e);
      var n = i(t, e);
      return f(t, n, e), m(n, e), t.$trigger && t.$trigger('extend', { Class: n, options: e }), n;
    }
    function a(e, t) {
      var n = {
          constructor: 'function' == typeof t ? t : null,
          invokeParent: !('function' == typeof t || (t && c(t, 'constructor') && t.constructor)),
          methods: null,
          properties: null,
          static: null,
          config: null,
          dependencies: null,
          bindToInstance: !1,
          defaultLifecycle: l.INSTANCE,
        },
        r = Object.assign(Object.create(e.$$config || null), t && t.config);
      for (var a in r) n[a] = r[a];
      return (
        (t = Object.assign({}, n, t)),
        t.dependencies || 'function' != typeof t.constructor
          ? t.dependencies && (t.dependencies = [].concat(t.dependencies))
          : (t.dependencies = _.extractParameters(t.constructor)),
        t.dependencies && !t.dependencies.length && (t.dependencies = null),
        t.properties && (t.properties = [].concat(t.properties)),
        e.$trigger &&
          e.$trigger('options', {
            options: t,
            merge: function () {
              var e = Array.prototype.slice.call(arguments);
              e.unshift(t), Object.assign.apply(Object, e);
            },
          }),
        t
      );
    }
    function i(e, t) {
      var n = o(e, t);
      return (n.prototype = s(e, n, t)), Object.assign(n, e, t.static), n;
    }
    function o(e, t) {
      var n;
      return (n = function (e) {
        if (!(this instanceof n)) return new n(e);
        try {
          var r = _.resolveDependencies(n, { dependencies: t.dependencies }, e);
          if (
            (this.constructor === n && n.$trigger('beforeCreate', { Class: n, options: t, instance: this, args: r }),
            t.invokeParent && 'after' !== t.invokeParent && n.$$invokeParent(this, r, e),
            t.bindToInstance && d(this, n, r, t.bindToInstance),
            t.properties)
          ) {
            var a = u(t.properties);
            Object.defineProperties(this, a);
          }
          'function' == typeof t.constructor && t.constructor.apply(this, r),
            'after' === t.invokeParent && n.$$invokeParent(this, r, e),
            this.constructor === n && n.$trigger('created', { Class: n, options: t, instance: this, args: r });
        } catch (t) {
          t && t.jpexInternalError && (t.stack = new Error(t.message).stack);
          var i = _.resolve(n, '_$errorHandler_', e);
          if (!i) throw t;
          i(t);
        }
      });
    }
    function s(e, t, n) {
      var r = Object.create(e.prototype);
      return n.methods && Object.assign(r, n.methods), (r.constructor = t), r;
    }
    function u(e) {
      var t = {};
      return (
        e.forEach(function (e) {
          'string' == typeof e
            ? (t[e] = { configurable: !0, enumerable: !0, writable: !0, value: void 0 })
            : Object.keys(e).forEach(function (n) {
                var r = e[n],
                  a = {};
                switch (typeof r) {
                  case 'object':
                    break;
                  case 'function':
                    r = { watch: r };
                    break;
                  default:
                    r = { value: r };
                }
                var i = c(r, 'value'),
                  o = c(r, 'get') && 'function' == typeof r.get,
                  s = c(r, 'set') && 'function' == typeof r.set,
                  u = c(r, 'watch') && 'function' == typeof r.watch,
                  d = c(r, 'default') && 'function' == typeof r.default;
                if (i || d || o || s || u) {
                  var l = i ? r.value : d ? r.default() : void 0;
                  (a.get = function () {
                    return o ? r.get.call(this, l) : l;
                  }),
                    (c(r, 'writable') && !r.writable) ||
                      (a.set = function (e) {
                        var t = s ? r.set.call(this, e, l) : e;
                        u && t !== l && r.watch.call(this, t, l), (l = t);
                      }),
                    (a.configurable = !c(r, 'configurable') || r.configurable),
                    (a.enumerable = !c(r, 'enumerable') || r.enumerable);
                } else (a.configurable = !0), (a.enumerable = !0), (a.writable = !0), (a.value = r);
                t[n] = a;
              });
        }),
        t
      );
    }
    function d(e, t, n, r) {
      var a = e;
      'string' == typeof r &&
        r.split('.').forEach(function (e) {
          (a[e] = a[e] || {}), (a = a[e]);
        });
      var i = t.$$namedParameters(n);
      Object.assign(a, i);
    }
    var c = n(75),
      l = n(93),
      _ = n(64),
      f = n(566),
      m = n(569),
      h = n(199);
    e.exports = function () {
      var e = function () {};
      (e.extend = r), (e.use = h.use);
      var t = e.extend();
      return n(576)(t), t;
    };
  },
  function (e, t, n) {
    function r(e) {
      return e && ((e.fn && 'function' == typeof e.fn) || e.constant || e.resolved);
    }
    var a = n(198),
      i = n(93);
    (t.getFactory = function (e, t, n) {
      var i;
      if (
        (e.$trigger('getFactory', {
          Class: e,
          factoryName: t,
          set: function (e) {
            i = e;
          },
        }),
        !(
          r(i) ||
          ((i = e.$$resolved[t]), r(i) || ((i = e.$$factories[t]), r(i) || ((i = e.$$getFromNodeModules(t)), r(i))))
        ))
      ) {
        if (n) return;
        a(['Unable to find required dependency', t].join(' '));
      }
      return i;
    }),
      (t.decorate = function (e, t, n) {
        if (!n || !n.length) return t;
        for (var r = 0, a = n.length; r < a; r++) t = n[r].call(e, t);
        return t;
      }),
      (t.cacheResult = function (e, t, n, r, a) {
        switch (n.lifecycle) {
          case i.APPLICATION:
            (n.resolved = !0), (n.value = r);
            break;
          case i.CLASS:
            e.$$resolved[t] = { resolved: !0, value: r };
            break;
          case i.NONE:
            break;
          case i.INSTANCE:
          default:
            a[t] = r;
        }
      });
  },
  function (e, t, n) {
    function r(e) {
      if (u)
        try {
          var t = c(e);
          return this.register.constant(e, t), this.$$factories[e];
        } catch (e) {
          if (!e || !e.message || 'Cannot' !== e.message.substr(0, 6)) throw e;
        }
    }
    function a(e, t, n) {
      (n && 'object' == typeof n) || (n = {});
      var r = 0;
      return (
        e &&
          t &&
          e.forEach(function (e) {
            'object' == typeof e
              ? Object.keys(e).forEach(function (e) {
                  void 0 === n[e] && void 0 !== t[r] && (n[e] = t[r]), r++;
                })
              : (void 0 === n[e] && void 0 !== t[r] && (n[e] = t[r]), r++);
          }),
        n
      );
    }
    function i(e, t, n) {
      t && !Array.isArray(t) && (t = Array.prototype.slice.call(t)),
        (n = this.$$namedParameters(t, n)),
        this.$$parent.call(e, n);
    }
    function o(e, t) {
      return Array.isArray(e) ? _.resolveDependencies(this, { dependencies: e }, t) : _.resolve(this, e, t);
    }
    function s(e) {
      e = e ? [].concat(e) : [];
      var t;
      for (t in this.$$factories) (!e.length || e.indexOf(t) > -1) && (this.$$factories[t].resolved = !1);
      for (t in this.$$resolved) (!e.length || e.indexOf(t) > -1) && delete this.$$resolved[t];
    }
    var u = n(567),
      d = n(75),
      c = n(568),
      l = n(199).trigger,
      _ = n(64);
    e.exports = function (e, t, n) {
      Object.defineProperties(t, {
        $trigger: { value: l },
        $resolve: { value: o },
        $clearCache: { value: s },
        $$getFromNodeModules: { value: r },
        $$namedParameters: { value: a.bind(null, n.dependencies) },
        $$invokeParent: { value: i },
        $$parent: { value: e },
        $$using: { value: Object.create(e.$$using || null) },
        $$factories: { value: Object.create(e.$$factories || null) },
        $$resolved: { value: Object.create(e.$$interfaces || null) },
        $$config: { value: Object.assign(Object.create(e.$$config || null), n.config) },
        $$hooks: { value: Object.create(e.$$hooks || null) },
      }),
        t.$trigger('privateProperties', {
          Class: t,
          options: n,
          apply: function (e) {
            var n = {};
            Object.keys(e).forEach(function (t) {
              var r = { configurable: !0, enumerable: !1 },
                a = e[t];
              a && a.get && 'function' == typeof a.get && (r.get = a.get),
                a && a.set && 'function' == typeof a.set && (r.set = a.set),
                a && d(a, 'value') && (a = a.value),
                r.get || r.set || (r.value = a),
                (n[t] = r);
            }),
              Object.defineProperties(t, n);
          },
        });
    };
  },
  function (module, exports) {
    var _process;
    try {
      _process = eval('process');
    } catch (e) {}
    module.exports = 'object' == typeof _process && '[object process]' === _process.toString();
  },
  function (module, exports) {
    module.exports = function (name) {
      return eval('require.main.require(name)');
    };
  },
  function (e, t, n) {
    var r = n(570),
      a = n(571),
      i = n(572),
      o = n(575);
    e.exports = function (e, t) {
      var n = function () {
        return n.factory.apply(null, arguments);
      };
      (n.constant = r.bind(e)),
        (n.factory = a.bind(e, t.defaultLifecycle)),
        (n.service = i.bind(e)),
        (n.decorator = o.bind(e)),
        e.$trigger('factories', {
          Class: e,
          options: t,
          register: function (t, r) {
            n[t] = r.bind(e);
          },
        }),
        Object.defineProperty(e, 'register', { value: n });
    };
  },
  function (e, t, n) {
    var r = n(200);
    e.exports = function (e, t) {
      var n = { value: t, constant: !0 };
      return (this.$$factories[e] = n), r(n).lifecycle.application();
    };
  },
  function (e, t, n) {
    var r = n(64).extractParameters,
      a = n(200);
    e.exports = function (e, t, n, i) {
      if (('function' == typeof n && ((i = n), (n = null)), 'function' != typeof i))
        throw new Error('Factory ' + t + ' - fn must be a [Function]');
      (n = n ? [].concat(n) : r(i)), n.length || (n = null);
      var o = { fn: i, dependencies: n, lifecycle: e };
      return (this.$$factories[t] = o), a(o);
    };
  },
  function (e, t, n) {
    var r = n(64).extractParameters,
      a = n(573),
      i = n(574);
    e.exports = function (e, t, n) {
      function o() {
        var e = Array.prototype.slice.call(arguments);
        return e.unshift({}), a(n, e);
      }
      if (('function' == typeof t && ((n = t), (t = null)), 'function' != typeof n))
        throw new Error('Service ' + e + ' - fn must be a [Function]');
      return n.extend && n.register && n.register.factory
        ? i.call(this, e, t, n)
        : ((t = t ? [].concat(t) : r(n)), this.register.factory(e, t, o));
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return new (Function.prototype.bind.apply(e, t))();
    };
  },
  function (e, t, n) {
    var r = n(64).checkOptional;
    e.exports = function (e, t, n) {
      function a() {
        var e = Array.prototype.slice.call(arguments),
          a = {},
          i = 1;
        return (
          t.slice(1).forEach(function (t) {
            if ('object' == typeof t)
              Object.keys(t).forEach(function (t) {
                var n = e[i++];
                void 0 !== n && ((t = r(t) || t), (a[t] = n));
              });
            else {
              var n = e[i++];
              void 0 !== n && ((t = r(t) || t), (a[t] = n));
            }
          }),
          e[0] &&
            'object' == typeof e[0] &&
            Object.keys(e[0]).forEach(function (t) {
              var n = e[0][t];
              void 0 !== n && (a[t] = n);
            }),
          new n(a)
        );
      }
      return (t = t ? [].concat(t) : []), t.unshift('$namedParameters'), this.register.factory(e, t, a);
    };
  },
  function (e, t, n) {
    var r = n(75);
    e.exports = function (e, t) {
      var n = this.$$factories[e];
      if (!n) throw new Error('Decorator could not be applied as factory ' + e + ' has not been registered');
      r(this.$$factories, e) || ((n = Object.assign({}, this.$$factories[e])), (this.$$factories[e] = n)),
        n.resolved && (n.resolved = !1),
        this.$$resolved[e] && delete this.$$resolved[e],
        (n.decorators = (n.decorators || []).concat(t));
    };
  },
  function (e, t, n) {
    var r = n(64);
    e.exports = function (e) {
      e.register.factory('$resolve', ['$namedParameters'], function (e) {
        var t = this;
        return function (n, a) {
          return (
            (a = Object.assign({}, e, a)),
            Array.isArray(n) ? r.resolveDependencies(t, { dependencies: n }, a) : r.resolve(t, n, a)
          );
        };
      });
    };
  },
  function (e, t) {
    e.exports = {
      name: 'vue-inject',
      install: function (e) {
        e.on('extend', function (e) {
          Object.defineProperties(e.Class, {
            get: {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return this.$resolve;
              },
            },
            clearCache: {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return this.$clearCache;
              },
            },
            factory: {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return this.register.factory;
              },
            },
            service: {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return this.register.service;
              },
            },
            constant: {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return this.register.constant;
              },
            },
            decorator: {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return this.register.decorator;
              },
            },
          });
        });
      },
    };
  },
  function (e, t) {
    e.exports = function (e) {
      function t(e, t, n) {
        Object.defineProperty(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n });
      }
      function n(e, n, i) {
        e &&
          [].concat(e).forEach(function (e) {
            switch (a(e)) {
              case 'string':
                t(n, e, r.$resolve(e, i));
                break;
              case 'object':
                Object.keys(e).forEach(function (o) {
                  var s = e[o];
                  'string' === a(s) && t(n, o, r.$resolve(s, i));
                });
            }
          });
      }
      var r = this,
        a = this.$resolve('$typeof');
      e.mixin({
        beforeCreate: function () {
          var e = { $context: this };
          n(this.dependencies, this, e),
            n(this.$options.dependencies, this, e),
            n(this.$options.components, this.$options.components, e),
            n(this.$options.mixins, this.$options.mixins, e),
            n(this.$options.directives, this.$options.directives, e);
        },
      });
    };
  },
  function (e, t, n) {
    var r = n(580),
      a = n(581),
      i = n(582);
    (t.name = 'jpex-web'),
      (t.install = function (e) {
        var t = e.Jpex;
        if (!t.$$factories.$promise) {
          var o = n(586);
          t.use(o);
        }
        t.register.factory('$document', '$window', r).lifecycle.application(),
          t.register.factory('$window', [], a).lifecycle.application(),
          t.register.factory('$$promise', [], i);
      }),
      'undefined' != typeof window && window.Jpex && 'function' == typeof window.Jpex.use && window.Jpex.use(t);
  },
  function (e, t) {
    e.exports = function (e) {
      return e.document;
    };
  },
  function (e, t) {
    e.exports = function () {
      return window;
    };
  },
  function (e, t, n) {
    e.exports = function () {
      return 'undefined' != typeof Promise ? Promise : n(583);
    };
  },
  function (e, t, n) {
    (function (t) {
      !(function (n) {
        function r() {}
        function a(e, t) {
          return function () {
            e.apply(t, arguments);
          };
        }
        function i(e) {
          if ('object' != typeof this) throw new TypeError('Promises must be constructed via new');
          if ('function' != typeof e) throw new TypeError('not a function');
          (this._state = 0), (this._handled = !1), (this._value = void 0), (this._deferreds = []), l(e, this);
        }
        function o(e, t) {
          for (; 3 === e._state; ) e = e._value;
          if (0 === e._state) return void e._deferreds.push(t);
          (e._handled = !0),
            i._immediateFn(function () {
              var n = 1 === e._state ? t.onFulfilled : t.onRejected;
              if (null === n) return void (1 === e._state ? s : u)(t.promise, e._value);
              var r;
              try {
                r = n(e._value);
              } catch (e) {
                return void u(t.promise, e);
              }
              s(t.promise, r);
            });
        }
        function s(e, t) {
          try {
            if (t === e) throw new TypeError('A promise cannot be resolved with itself.');
            if (t && ('object' == typeof t || 'function' == typeof t)) {
              var n = t.then;
              if (t instanceof i) return (e._state = 3), (e._value = t), void d(e);
              if ('function' == typeof n) return void l(a(n, t), e);
            }
            (e._state = 1), (e._value = t), d(e);
          } catch (t) {
            u(e, t);
          }
        }
        function u(e, t) {
          (e._state = 2), (e._value = t), d(e);
        }
        function d(e) {
          2 === e._state &&
            0 === e._deferreds.length &&
            i._immediateFn(function () {
              e._handled || i._unhandledRejectionFn(e._value);
            });
          for (var t = 0, n = e._deferreds.length; t < n; t++) o(e, e._deferreds[t]);
          e._deferreds = null;
        }
        function c(e, t, n) {
          (this.onFulfilled = 'function' == typeof e ? e : null),
            (this.onRejected = 'function' == typeof t ? t : null),
            (this.promise = n);
        }
        function l(e, t) {
          var n = !1;
          try {
            e(
              function (e) {
                n || ((n = !0), s(t, e));
              },
              function (e) {
                n || ((n = !0), u(t, e));
              }
            );
          } catch (e) {
            if (n) return;
            (n = !0), u(t, e);
          }
        }
        var _ = setTimeout;
        (i.prototype.catch = function (e) {
          return this.then(null, e);
        }),
          (i.prototype.then = function (e, t) {
            var n = new this.constructor(r);
            return o(this, new c(e, t, n)), n;
          }),
          (i.all = function (e) {
            var t = Array.prototype.slice.call(e);
            return new i(function (e, n) {
              function r(i, o) {
                try {
                  if (o && ('object' == typeof o || 'function' == typeof o)) {
                    var s = o.then;
                    if ('function' == typeof s)
                      return void s.call(
                        o,
                        function (e) {
                          r(i, e);
                        },
                        n
                      );
                  }
                  (t[i] = o), 0 == --a && e(t);
                } catch (e) {
                  n(e);
                }
              }
              if (0 === t.length) return e([]);
              for (var a = t.length, i = 0; i < t.length; i++) r(i, t[i]);
            });
          }),
          (i.resolve = function (e) {
            return e && 'object' == typeof e && e.constructor === i
              ? e
              : new i(function (t) {
                  t(e);
                });
          }),
          (i.reject = function (e) {
            return new i(function (t, n) {
              n(e);
            });
          }),
          (i.race = function (e) {
            return new i(function (t, n) {
              for (var r = 0, a = e.length; r < a; r++) e[r].then(t, n);
            });
          }),
          (i._immediateFn =
            ('function' == typeof t &&
              function (e) {
                t(e);
              }) ||
            function (e) {
              _(e, 0);
            }),
          (i._unhandledRejectionFn = function (e) {
            'undefined' != typeof console && console && console.warn('Possible Unhandled Promise Rejection:', e);
          }),
          (i._setImmediateFn = function (e) {
            i._immediateFn = e;
          }),
          (i._setUnhandledRejectionFn = function (e) {
            i._unhandledRejectionFn = e;
          }),
          void 0 !== e && e.exports ? (e.exports = i) : n.Promise || (n.Promise = i);
      })(this);
    }).call(t, n(141).setImmediate);
  },
  function (e, t, n) {
    (function (e, t) {
      !(function (e, n) {
        'use strict';
        function r(e) {
          'function' != typeof e && (e = new Function('' + e));
          for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
          var r = { callback: e, args: t };
          return (d[u] = r), s(u), u++;
        }
        function a(e) {
          delete d[e];
        }
        function i(e) {
          var t = e.callback,
            r = e.args;
          switch (r.length) {
            case 0:
              t();
              break;
            case 1:
              t(r[0]);
              break;
            case 2:
              t(r[0], r[1]);
              break;
            case 3:
              t(r[0], r[1], r[2]);
              break;
            default:
              t.apply(n, r);
          }
        }
        function o(e) {
          if (c) setTimeout(o, 0, e);
          else {
            var t = d[e];
            if (t) {
              c = !0;
              try {
                i(t);
              } finally {
                a(e), (c = !1);
              }
            }
          }
        }
        if (!e.setImmediate) {
          var s,
            u = 1,
            d = {},
            c = !1,
            l = e.document,
            _ = Object.getPrototypeOf && Object.getPrototypeOf(e);
          (_ = _ && _.setTimeout ? _ : e),
            '[object process]' === {}.toString.call(e.process)
              ? (function () {
                  s = function (e) {
                    t.nextTick(function () {
                      o(e);
                    });
                  };
                })()
              : (function () {
                    if (e.postMessage && !e.importScripts) {
                      var t = !0,
                        n = e.onmessage;
                      return (
                        (e.onmessage = function () {
                          t = !1;
                        }),
                        e.postMessage('', '*'),
                        (e.onmessage = n),
                        t
                      );
                    }
                  })()
                ? (function () {
                    var t = 'setImmediate$' + Math.random() + '$',
                      n = function (n) {
                        n.source === e &&
                          'string' == typeof n.data &&
                          0 === n.data.indexOf(t) &&
                          o(+n.data.slice(t.length));
                      };
                    e.addEventListener ? e.addEventListener('message', n, !1) : e.attachEvent('onmessage', n),
                      (s = function (n) {
                        e.postMessage(t + n, '*');
                      });
                  })()
                : e.MessageChannel
                  ? (function () {
                      var e = new MessageChannel();
                      (e.port1.onmessage = function (e) {
                        o(e.data);
                      }),
                        (s = function (t) {
                          e.port2.postMessage(t);
                        });
                    })()
                  : l && 'onreadystatechange' in l.createElement('script')
                    ? (function () {
                        var e = l.documentElement;
                        s = function (t) {
                          var n = l.createElement('script');
                          (n.onreadystatechange = function () {
                            o(t), (n.onreadystatechange = null), e.removeChild(n), (n = null);
                          }),
                            e.appendChild(n);
                        };
                      })()
                    : (function () {
                        s = function (e) {
                          setTimeout(o, 0, e);
                        };
                      })(),
            (_.setImmediate = r),
            (_.clearImmediate = a);
        }
      })('undefined' == typeof self ? (void 0 === e ? this : e) : self);
    }).call(t, n(9), n(585));
  },
  function (e, t) {
    function n() {
      throw new Error('setTimeout has not been defined');
    }
    function r() {
      throw new Error('clearTimeout has not been defined');
    }
    function a(e) {
      if (c === setTimeout) return setTimeout(e, 0);
      if ((c === n || !c) && setTimeout) return (c = setTimeout), setTimeout(e, 0);
      try {
        return c(e, 0);
      } catch (t) {
        try {
          return c.call(null, e, 0);
        } catch (t) {
          return c.call(this, e, 0);
        }
      }
    }
    function i(e) {
      if (l === clearTimeout) return clearTimeout(e);
      if ((l === r || !l) && clearTimeout) return (l = clearTimeout), clearTimeout(e);
      try {
        return l(e);
      } catch (t) {
        try {
          return l.call(null, e);
        } catch (t) {
          return l.call(this, e);
        }
      }
    }
    function o() {
      h && f && ((h = !1), f.length ? (m = f.concat(m)) : (p = -1), m.length && s());
    }
    function s() {
      if (!h) {
        var e = a(o);
        h = !0;
        for (var t = m.length; t; ) {
          for (f = m, m = []; ++p < t; ) f && f[p].run();
          (p = -1), (t = m.length);
        }
        (f = null), (h = !1), i(e);
      }
    }
    function u(e, t) {
      (this.fun = e), (this.array = t);
    }
    function d() {}
    var c,
      l,
      _ = (e.exports = {});
    !(function () {
      try {
        c = 'function' == typeof setTimeout ? setTimeout : n;
      } catch (e) {
        c = n;
      }
      try {
        l = 'function' == typeof clearTimeout ? clearTimeout : r;
      } catch (e) {
        l = r;
      }
    })();
    var f,
      m = [],
      h = !1,
      p = -1;
    (_.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      m.push(new u(e, t)), 1 !== m.length || h || a(s);
    }),
      (u.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (_.title = 'browser'),
      (_.browser = !0),
      (_.env = {}),
      (_.argv = []),
      (_.version = ''),
      (_.versions = {}),
      (_.on = d),
      (_.addListener = d),
      (_.once = d),
      (_.off = d),
      (_.removeListener = d),
      (_.removeAllListeners = d),
      (_.emit = d),
      (_.prependListener = d),
      (_.prependOnceListener = d),
      (_.listeners = function (e) {
        return [];
      }),
      (_.binding = function (e) {
        throw new Error('process.binding is not supported');
      }),
      (_.cwd = function () {
        return '/';
      }),
      (_.chdir = function (e) {
        throw new Error('process.chdir is not supported');
      }),
      (_.umask = function () {
        return 0;
      });
  },
  function (e, t, n) {
    var r = n(587),
      a = n(588),
      i = n(589),
      o = n(590),
      s = n(591),
      u = n(592),
      d = n(593),
      c = n(594);
    (t.name = 'jpex-defaults'),
      (t.silent = !0),
      (t.install = function (e) {
        var t = e.Jpex;
        t.register.factory('$copy', ['$typeof'], r).lifecycle.application(),
          t.register.factory('$log', [], a).lifecycle.application(),
          t.register.factory('$$promise', [], i).lifecycle.application(),
          t.register.factory('$promise', ['$$promise'], o).lifecycle.application(),
          t.register.factory('$timeout', [], s).lifecycle.application(),
          t.register.factory('$interval', [], u).lifecycle.application(),
          t.register.factory('$immediate', ['$timeout'], d).lifecycle.application(),
          t.register.factory('$typeof', [], c).lifecycle.application();
      }),
      'undefined' != typeof window && window.Jpex && 'function' == typeof window.Jpex.use && window.Jpex.use(t);
  },
  function (e, t) {
    e.exports = function (e) {
      var t,
        n = function (e, t) {
          for (var n = 0, r = t.length; n < r; n++) if (t[n].from === e) return e;
        },
        r = function (a, i, o, s) {
          switch (((s = s || []), e(a))) {
            case 'string':
            case 'number':
            case 'boolean':
            case 'function':
            case 'null':
            case 'undefined':
              return a;
            case 'date':
              return new Date(a);
            case 'regexp':
              var u = [];
              return a.global && u.push('g'), a.ignoreCase && u.push('i'), new RegExp(a.source, u.join(''));
            case 'array':
              return (
                (t = n(a, s)),
                t
                  ? t.to
                  : ((i = []),
                    s.push({ from: a, to: i }),
                    a.forEach(function (e) {
                      i.push(o ? r(e, void 0, !0, s) : e);
                    }),
                    i)
              );
            case 'object':
              return (t = n(a, s))
                ? t.to
                : ((i = i || {}),
                  s.push({ from: a, to: i }),
                  Object.keys(a).forEach(function (e) {
                    i[e] = o ? r(a[e], i[e], o, s) : a[e];
                  }),
                  i);
            default:
              throw new Error('Unexpected type: ' + e(a));
          }
        },
        a = function (e) {
          return a.shallow(e);
        };
      return (
        (a.shallow = function (e) {
          return r(e);
        }),
        (a.deep = function (e) {
          return r(e, null, !0);
        }),
        (a.extend = function () {
          var e = Array.prototype.slice.call(arguments),
            t = e.shift();
          return (
            e.forEach(function (e) {
              r(e, t, !0);
            }),
            t
          );
        }),
        a
      );
    };
  },
  function (e, t) {
    e.exports = function () {
      var e = function () {
        return e.log.apply(null, arguments);
      };
      return (
        (e.log = function () {
          return console.log.apply(null, arguments);
        }),
        (e.info = function () {
          return console.info.apply(null, arguments);
        }),
        (e.warn = function () {
          return console.warn.apply(null, arguments);
        }),
        (e.error = function () {
          return console.error.apply(null, arguments);
        }),
        e
      );
    };
  },
  function (e, t) {
    e.exports = function () {
      return Promise;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = function (t) {
        return new e(t);
      };
      return (
        (t.all = e.all.bind(e)),
        (t.race = e.race.bind(e)),
        (t.reject = e.reject.bind(e)),
        (t.resolve = e.resolve.bind(e)),
        t
      );
    };
  },
  function (e, t) {
    e.exports = function () {
      function e(e, t) {
        return setTimeout(e, t);
      }
      return (
        (e.clear = function (e) {
          return clearTimeout(e);
        }),
        e
      );
    };
  },
  function (e, t) {
    e.exports = function () {
      function e(e, t) {
        return setInterval(e, t);
      }
      return (
        (e.clear = function (e) {
          return clearInterval(e);
        }),
        e
      );
    };
  },
  function (e, t, n) {
    (function (t, n) {
      e.exports = function (e) {
        function r(n) {
          return a ? t(n) : e(n, 0);
        }
        var a = 'function' == typeof t;
        return (
          (r.clear = function (t) {
            return a ? n(t) : e.clear(t);
          }),
          r
        );
      };
    }).call(t, n(141).setImmediate, n(141).clearImmediate);
  },
  function (e, t) {
    e.exports = function () {
      var e = ['number', 'boolean', 'string', 'array', 'function', 'date', 'regexp', 'null', 'undefined'];
      return function (t, n) {
        var r = Object.prototype.toString
          .call(t)
          .match(/\s([a-zA-Z]+)/)[1]
          .toLowerCase();
        return !n && e.indexOf(r) < 0 ? 'object' : r;
      };
    };
  },
  function (e, t, n) {
    (function (e, n) {
      function r(e, t) {
        return e.set(t[0], t[1]), e;
      }
      function a(e, t) {
        return e.add(t), e;
      }
      function i(e, t, n) {
        switch (n.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, n[0]);
          case 2:
            return e.call(t, n[0], n[1]);
          case 3:
            return e.call(t, n[0], n[1], n[2]);
        }
        return e.apply(t, n);
      }
      function o(e, t) {
        for (var n = -1, r = e ? e.length : 0; ++n < r && !1 !== t(e[n], n, e); );
        return e;
      }
      function s(e, t) {
        for (var n = -1, r = t.length, a = e.length; ++n < r; ) e[a + n] = t[n];
        return e;
      }
      function u(e, t, n, r) {
        var a = -1,
          i = e ? e.length : 0;
        for (r && i && (n = e[++a]); ++a < i; ) n = t(n, e[a], a, e);
        return n;
      }
      function d(e, t) {
        for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
        return r;
      }
      function c(e, t) {
        return null == e ? void 0 : e[t];
      }
      function l(e) {
        var t = !1;
        if (null != e && 'function' != typeof e.toString)
          try {
            t = !!(e + '');
          } catch (e) {}
        return t;
      }
      function _(e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e, r) {
            n[++t] = [r, e];
          }),
          n
        );
      }
      function f(e, t) {
        return function (n) {
          return e(t(n));
        };
      }
      function m(e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e) {
            n[++t] = e;
          }),
          n
        );
      }
      function h(e) {
        var t = -1,
          n = e ? e.length : 0;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function p() {
        this.__data__ = Xt ? Xt(null) : {};
      }
      function y(e) {
        return this.has(e) && delete this.__data__[e];
      }
      function v(e) {
        var t = this.__data__;
        if (Xt) {
          var n = t[e];
          return n === Ie ? void 0 : n;
        }
        return At.call(t, e) ? t[e] : void 0;
      }
      function M(e) {
        var t = this.__data__;
        return Xt ? void 0 !== t[e] : At.call(t, e);
      }
      function g(e, t) {
        return (this.__data__[e] = Xt && void 0 === t ? Ie : t), this;
      }
      function L(e) {
        var t = -1,
          n = e ? e.length : 0;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function Y() {
        this.__data__ = [];
      }
      function k(e) {
        var t = this.__data__,
          n = N(t, e);
        return !(n < 0) && (n == t.length - 1 ? t.pop() : zt.call(t, n, 1), !0);
      }
      function b(e) {
        var t = this.__data__,
          n = N(t, e);
        return n < 0 ? void 0 : t[n][1];
      }
      function w(e) {
        return N(this.__data__, e) > -1;
      }
      function D(e, t) {
        var n = this.__data__,
          r = N(n, e);
        return r < 0 ? n.push([e, t]) : (n[r][1] = t), this;
      }
      function T(e) {
        var t = -1,
          n = e ? e.length : 0;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function S() {
        this.__data__ = { hash: new h(), map: new (Bt || L)(), string: new h() };
      }
      function j(e) {
        return fe(this, e).delete(e);
      }
      function x(e) {
        return fe(this, e).get(e);
      }
      function H(e) {
        return fe(this, e).has(e);
      }
      function O(e, t) {
        return fe(this, e).set(e, t), this;
      }
      function A(e) {
        this.__data__ = new L(e);
      }
      function E() {
        this.__data__ = new L();
      }
      function P(e) {
        return this.__data__.delete(e);
      }
      function $(e) {
        return this.__data__.get(e);
      }
      function C(e) {
        return this.__data__.has(e);
      }
      function F(e, t) {
        var n = this.__data__;
        if (n instanceof L) {
          var r = n.__data__;
          if (!Bt || r.length < We - 1) return r.push([e, t]), this;
          n = this.__data__ = new T(r);
        }
        return n.set(e, t), this;
      }
      function W(e, t) {
        var n = cn(e) || De(e) ? d(e.length, String) : [],
          r = n.length,
          a = !!r;
        for (var i in e) (!t && !At.call(e, i)) || (a && ('length' == i || ve(i, r))) || n.push(i);
        return n;
      }
      function I(e, t, n) {
        ((void 0 === n || we(e[t], n)) && ('number' != typeof t || void 0 !== n || t in e)) || (e[t] = n);
      }
      function R(e, t, n) {
        var r = e[t];
        (At.call(e, t) && we(r, n) && (void 0 !== n || t in e)) || (e[t] = n);
      }
      function N(e, t) {
        for (var n = e.length; n--; ) if (we(e[n][0], t)) return n;
        return -1;
      }
      function z(e, t) {
        return e && ce(t, Pe(t), e);
      }
      function J(e, t, n, r, a, i, s) {
        var u;
        if ((r && (u = i ? r(e, a, i, s) : r(e)), void 0 !== u)) return u;
        if (!He(e)) return e;
        var d = cn(e);
        if (d) {
          if (((u = he(e)), !t)) return de(e, u);
        } else {
          var c = dn(e),
            _ = c == Ue || c == Ve;
          if (ln(e)) return te(e, t);
          if (c == Be || c == Ne || (_ && !i)) {
            if (l(e)) return i ? e : {};
            if (((u = pe(_ ? {} : e)), !t)) return le(e, z(u, e));
          } else {
            if (!yt[c]) return i ? e : {};
            u = ye(e, c, J, t);
          }
        }
        s || (s = new A());
        var f = s.get(e);
        if (f) return f;
        if ((s.set(e, u), !d)) var m = n ? _e(e) : Pe(e);
        return (
          o(m || e, function (a, i) {
            m && ((i = a), (a = e[i])), R(u, i, J(a, t, n, r, i, e, s));
          }),
          u
        );
      }
      function U(e) {
        return He(e) ? Rt(e) : {};
      }
      function V(e, t, n) {
        var r = t(e);
        return cn(e) ? r : s(r, n(e));
      }
      function G(e) {
        return Pt.call(e);
      }
      function q(e) {
        return !(!He(e) || Le(e)) && (je(e) || l(e) ? $t : mt).test(be(e));
      }
      function B(e) {
        return Oe(e) && xe(e.length) && !!pt[Pt.call(e)];
      }
      function K(e) {
        if (!Ye(e)) return Vt(e);
        var t = [];
        for (var n in Object(e)) At.call(e, n) && 'constructor' != n && t.push(n);
        return t;
      }
      function Z(e) {
        if (!He(e)) return ke(e);
        var t = Ye(e),
          n = [];
        for (var r in e) ('constructor' != r || (!t && At.call(e, r))) && n.push(r);
        return n;
      }
      function Q(e, t, n, r, a) {
        if (e !== t) {
          if (!cn(t) && !_n(t)) var i = Z(t);
          o(i || t, function (o, s) {
            if ((i && ((s = o), (o = t[s])), He(o))) a || (a = new A()), X(e, t, s, n, Q, r, a);
            else {
              var u = r ? r(e[s], o, s + '', e, t, a) : void 0;
              void 0 === u && (u = o), I(e, s, u);
            }
          });
        }
      }
      function X(e, t, n, r, a, i, o) {
        var s = e[n],
          u = t[n],
          d = o.get(u);
        if (d) return void I(e, n, d);
        var c = i ? i(s, u, n + '', e, t, o) : void 0,
          l = void 0 === c;
        l &&
          ((c = u),
          cn(u) || _n(u)
            ? cn(s)
              ? (c = s)
              : Se(s)
                ? (c = de(s))
                : ((l = !1), (c = J(u, !0)))
            : Ae(u) || De(u)
              ? De(s)
                ? (c = Ee(s))
                : !He(s) || (r && je(s))
                  ? ((l = !1), (c = J(u, !0)))
                  : (c = s)
              : (l = !1)),
          l && (o.set(u, c), a(c, u, r, i, o), o.delete(u)),
          I(e, n, c);
      }
      function ee(e, t) {
        return (
          (t = Gt(void 0 === t ? e.length - 1 : t, 0)),
          function () {
            for (var n = arguments, r = -1, a = Gt(n.length - t, 0), o = Array(a); ++r < a; ) o[r] = n[t + r];
            r = -1;
            for (var s = Array(t + 1); ++r < t; ) s[r] = n[r];
            return (s[t] = o), i(e, this, s);
          }
        );
      }
      function te(e, t) {
        if (t) return e.slice();
        var n = new e.constructor(e.length);
        return e.copy(n), n;
      }
      function ne(e) {
        var t = new e.constructor(e.byteLength);
        return new Wt(t).set(new Wt(e)), t;
      }
      function re(e, t) {
        var n = t ? ne(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength);
      }
      function ae(e, t, n) {
        return u(t ? n(_(e), !0) : _(e), r, new e.constructor());
      }
      function ie(e) {
        var t = new e.constructor(e.source, ft.exec(e));
        return (t.lastIndex = e.lastIndex), t;
      }
      function oe(e, t, n) {
        return u(t ? n(m(e), !0) : m(e), a, new e.constructor());
      }
      function se(e) {
        return sn ? Object(sn.call(e)) : {};
      }
      function ue(e, t) {
        var n = t ? ne(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
      }
      function de(e, t) {
        var n = -1,
          r = e.length;
        for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
        return t;
      }
      function ce(e, t, n, r) {
        n || (n = {});
        for (var a = -1, i = t.length; ++a < i; ) {
          var o = t[a],
            s = r ? r(n[o], e[o], o, n, e) : void 0;
          R(n, o, void 0 === s ? e[o] : s);
        }
        return n;
      }
      function le(e, t) {
        return ce(e, un(e), t);
      }
      function _e(e) {
        return V(e, Pe, un);
      }
      function fe(e, t) {
        var n = e.__data__;
        return ge(t) ? n['string' == typeof t ? 'string' : 'hash'] : n.map;
      }
      function me(e, t) {
        var n = c(e, t);
        return q(n) ? n : void 0;
      }
      function he(e) {
        var t = e.length,
          n = e.constructor(t);
        return t && 'string' == typeof e[0] && At.call(e, 'index') && ((n.index = e.index), (n.input = e.input)), n;
      }
      function pe(e) {
        return 'function' != typeof e.constructor || Ye(e) ? {} : U(It(e));
      }
      function ye(e, t, n, r) {
        var a = e.constructor;
        switch (t) {
          case tt:
            return ne(e);
          case ze:
          case Je:
            return new a(+e);
          case nt:
            return re(e, r);
          case rt:
          case at:
          case it:
          case ot:
          case st:
          case ut:
          case dt:
          case ct:
          case lt:
            return ue(e, r);
          case Ge:
            return ae(e, r, n);
          case qe:
          case Qe:
            return new a(e);
          case Ke:
            return ie(e);
          case Ze:
            return oe(e, r, n);
          case Xe:
            return se(e);
        }
      }
      function ve(e, t) {
        return !!(t = null == t ? Re : t) && ('number' == typeof e || ht.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function Me(e, t, n) {
        if (!He(n)) return !1;
        var r = typeof t;
        return !!('number' == r ? Te(n) && ve(t, n.length) : 'string' == r && t in n) && we(n[t], e);
      }
      function ge(e) {
        var t = typeof e;
        return 'string' == t || 'number' == t || 'symbol' == t || 'boolean' == t ? '__proto__' !== e : null === e;
      }
      function Le(e) {
        return !!Ht && Ht in e;
      }
      function Ye(e) {
        var t = e && e.constructor;
        return e === (('function' == typeof t && t.prototype) || jt);
      }
      function ke(e) {
        var t = [];
        if (null != e) for (var n in Object(e)) t.push(n);
        return t;
      }
      function be(e) {
        if (null != e) {
          try {
            return Ot.call(e);
          } catch (e) {}
          try {
            return e + '';
          } catch (e) {}
        }
        return '';
      }
      function we(e, t) {
        return e === t || (e !== e && t !== t);
      }
      function De(e) {
        return Se(e) && At.call(e, 'callee') && (!Nt.call(e, 'callee') || Pt.call(e) == Ne);
      }
      function Te(e) {
        return null != e && xe(e.length) && !je(e);
      }
      function Se(e) {
        return Oe(e) && Te(e);
      }
      function je(e) {
        var t = He(e) ? Pt.call(e) : '';
        return t == Ue || t == Ve;
      }
      function xe(e) {
        return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= Re;
      }
      function He(e) {
        var t = typeof e;
        return !!e && ('object' == t || 'function' == t);
      }
      function Oe(e) {
        return !!e && 'object' == typeof e;
      }
      function Ae(e) {
        if (!Oe(e) || Pt.call(e) != Be || l(e)) return !1;
        var t = It(e);
        if (null === t) return !0;
        var n = At.call(t, 'constructor') && t.constructor;
        return 'function' == typeof n && n instanceof n && Ot.call(n) == Et;
      }
      function Ee(e) {
        return ce(e, $e(e));
      }
      function Pe(e) {
        return Te(e) ? W(e) : K(e);
      }
      function $e(e) {
        return Te(e) ? W(e, !0) : Z(e);
      }
      function Ce() {
        return [];
      }
      function Fe() {
        return !1;
      }
      var We = 200,
        Ie = '__lodash_hash_undefined__',
        Re = 9007199254740991,
        Ne = '[object Arguments]',
        ze = '[object Boolean]',
        Je = '[object Date]',
        Ue = '[object Function]',
        Ve = '[object GeneratorFunction]',
        Ge = '[object Map]',
        qe = '[object Number]',
        Be = '[object Object]',
        Ke = '[object RegExp]',
        Ze = '[object Set]',
        Qe = '[object String]',
        Xe = '[object Symbol]',
        et = '[object WeakMap]',
        tt = '[object ArrayBuffer]',
        nt = '[object DataView]',
        rt = '[object Float32Array]',
        at = '[object Float64Array]',
        it = '[object Int8Array]',
        ot = '[object Int16Array]',
        st = '[object Int32Array]',
        ut = '[object Uint8Array]',
        dt = '[object Uint8ClampedArray]',
        ct = '[object Uint16Array]',
        lt = '[object Uint32Array]',
        _t = /[\\^$.*+?()[\]{}|]/g,
        ft = /\w*$/,
        mt = /^\[object .+?Constructor\]$/,
        ht = /^(?:0|[1-9]\d*)$/,
        pt = {};
      (pt[rt] = pt[at] = pt[it] = pt[ot] = pt[st] = pt[ut] = pt[dt] = pt[ct] = pt[lt] = !0),
        (pt[Ne] =
          pt['[object Array]'] =
          pt[tt] =
          pt[ze] =
          pt[nt] =
          pt[Je] =
          pt['[object Error]'] =
          pt[Ue] =
          pt[Ge] =
          pt[qe] =
          pt[Be] =
          pt[Ke] =
          pt[Ze] =
          pt[Qe] =
          pt[et] =
            !1);
      var yt = {};
      (yt[Ne] =
        yt['[object Array]'] =
        yt[tt] =
        yt[nt] =
        yt[ze] =
        yt[Je] =
        yt[rt] =
        yt[at] =
        yt[it] =
        yt[ot] =
        yt[st] =
        yt[Ge] =
        yt[qe] =
        yt[Be] =
        yt[Ke] =
        yt[Ze] =
        yt[Qe] =
        yt[Xe] =
        yt[ut] =
        yt[dt] =
        yt[ct] =
        yt[lt] =
          !0),
        (yt['[object Error]'] = yt[Ue] = yt[et] = !1);
      var vt = 'object' == typeof e && e && e.Object === Object && e,
        Mt = 'object' == typeof self && self && self.Object === Object && self,
        gt = vt || Mt || Function('return this')(),
        Lt = 'object' == typeof t && t && !t.nodeType && t,
        Yt = Lt && 'object' == typeof n && n && !n.nodeType && n,
        kt = Yt && Yt.exports === Lt,
        bt = kt && vt.process,
        wt = (function () {
          try {
            return bt && bt.binding('util');
          } catch (e) {}
        })(),
        Dt = wt && wt.isTypedArray,
        Tt = Array.prototype,
        St = Function.prototype,
        jt = Object.prototype,
        xt = gt['__core-js_shared__'],
        Ht = (function () {
          var e = /[^.]+$/.exec((xt && xt.keys && xt.keys.IE_PROTO) || '');
          return e ? 'Symbol(src)_1.' + e : '';
        })(),
        Ot = St.toString,
        At = jt.hasOwnProperty,
        Et = Ot.call(Object),
        Pt = jt.toString,
        $t = RegExp(
          '^' +
            Ot.call(At)
              .replace(_t, '\\$&')
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$'
        ),
        Ct = kt ? gt.Buffer : void 0,
        Ft = gt.Symbol,
        Wt = gt.Uint8Array,
        It = f(Object.getPrototypeOf, Object),
        Rt = Object.create,
        Nt = jt.propertyIsEnumerable,
        zt = Tt.splice,
        Jt = Object.getOwnPropertySymbols,
        Ut = Ct ? Ct.isBuffer : void 0,
        Vt = f(Object.keys, Object),
        Gt = Math.max,
        qt = me(gt, 'DataView'),
        Bt = me(gt, 'Map'),
        Kt = me(gt, 'Promise'),
        Zt = me(gt, 'Set'),
        Qt = me(gt, 'WeakMap'),
        Xt = me(Object, 'create'),
        en = be(qt),
        tn = be(Bt),
        nn = be(Kt),
        rn = be(Zt),
        an = be(Qt),
        on = Ft ? Ft.prototype : void 0,
        sn = on ? on.valueOf : void 0;
      (h.prototype.clear = p),
        (h.prototype.delete = y),
        (h.prototype.get = v),
        (h.prototype.has = M),
        (h.prototype.set = g),
        (L.prototype.clear = Y),
        (L.prototype.delete = k),
        (L.prototype.get = b),
        (L.prototype.has = w),
        (L.prototype.set = D),
        (T.prototype.clear = S),
        (T.prototype.delete = j),
        (T.prototype.get = x),
        (T.prototype.has = H),
        (T.prototype.set = O),
        (A.prototype.clear = E),
        (A.prototype.delete = P),
        (A.prototype.get = $),
        (A.prototype.has = C),
        (A.prototype.set = F);
      var un = Jt ? f(Jt, Object) : Ce,
        dn = G;
      ((qt && dn(new qt(new ArrayBuffer(1))) != nt) ||
        (Bt && dn(new Bt()) != Ge) ||
        (Kt && '[object Promise]' != dn(Kt.resolve())) ||
        (Zt && dn(new Zt()) != Ze) ||
        (Qt && dn(new Qt()) != et)) &&
        (dn = function (e) {
          var t = Pt.call(e),
            n = t == Be ? e.constructor : void 0,
            r = n ? be(n) : void 0;
          if (r)
            switch (r) {
              case en:
                return nt;
              case tn:
                return Ge;
              case nn:
                return '[object Promise]';
              case rn:
                return Ze;
              case an:
                return et;
            }
          return t;
        });
      var cn = Array.isArray,
        ln = Ut || Fe,
        _n = Dt
          ? (function (e) {
              return function (t) {
                return e(t);
              };
            })(Dt)
          : B,
        fn = (function (e) {
          return ee(function (t, n) {
            var r = -1,
              a = n.length,
              i = a > 1 ? n[a - 1] : void 0,
              o = a > 2 ? n[2] : void 0;
            for (
              i = e.length > 3 && 'function' == typeof i ? (a--, i) : void 0,
                o && Me(n[0], n[1], o) && ((i = a < 3 ? void 0 : i), (a = 1)),
                t = Object(t);
              ++r < a;

            ) {
              var s = n[r];
              s && e(t, s, r, i);
            }
            return t;
          });
        })(function (e, t, n) {
          Q(e, t, n);
        });
      n.exports = fn;
    }).call(t, n(9), n(71)(e));
  },
  function (e, t, n) {
    var r, a, i;
    !(function (n, o) {
      'use strict';
      'object' == typeof e && 'object' == typeof e.exports
        ? (e.exports = o())
        : ((a = []), (r = o), void 0 !== (i = 'function' == typeof r ? r.apply(t, a) : r) && (e.exports = i));
    })(0, function () {
      'use strict';
      function e(e, t) {
        return null != e && Object.prototype.hasOwnProperty.call(e, t);
      }
      function t(t) {
        if (!t) return !0;
        if (u(t) && 0 === t.length) return !0;
        if ('string' != typeof t) {
          for (var n in t) if (e(t, n)) return !1;
          return !0;
        }
        return !1;
      }
      function n(e) {
        return s.call(e);
      }
      function r(e) {
        return 'object' == typeof e && '[object Object]' === n(e);
      }
      function a(e) {
        return 'boolean' == typeof e || '[object Boolean]' === n(e);
      }
      function i(e) {
        var t = parseInt(e);
        return t.toString() === e ? t : e;
      }
      function o(n) {
        function o(t, r) {
          return n.includeInheritedProps || ('number' == typeof r && Array.isArray(t)) || e(t, r);
        }
        function s(e, t) {
          if (o(e, t)) return e[t];
        }
        function d(e, t, n, r) {
          if (('number' == typeof t && (t = [t]), !t || 0 === t.length)) return e;
          if ('string' == typeof t) return d(e, t.split('.').map(i), n, r);
          var a = t[0],
            o = s(e, a);
          return 1 === t.length
            ? ((void 0 !== o && r) || (e[a] = n), o)
            : (void 0 === o && ('number' == typeof t[1] ? (e[a] = []) : (e[a] = {})), d(e[a], t.slice(1), n, r));
        }
        n = n || {};
        var c = function (e) {
          return Object.keys(c).reduce(function (t, n) {
            return 'create' === n ? t : ('function' == typeof c[n] && (t[n] = c[n].bind(c, e)), t);
          }, {});
        };
        return (
          (c.has = function (t, r) {
            if (('number' == typeof r ? (r = [r]) : 'string' == typeof r && (r = r.split('.')), !r || 0 === r.length))
              return !!t;
            for (var a = 0; a < r.length; a++) {
              var o = i(r[a]);
              if (
                !(
                  ('number' == typeof o && u(t) && o < t.length) ||
                  (n.includeInheritedProps ? o in Object(t) : e(t, o))
                )
              )
                return !1;
              t = t[o];
            }
            return !0;
          }),
          (c.ensureExists = function (e, t, n) {
            return d(e, t, n, !0);
          }),
          (c.set = function (e, t, n, r) {
            return d(e, t, n, r);
          }),
          (c.insert = function (e, t, n, r) {
            var a = c.get(e, t);
            (r = ~~r), u(a) || ((a = []), c.set(e, t, a)), a.splice(r, 0, n);
          }),
          (c.empty = function (e, n) {
            if (!t(n) && null != e) {
              var i, s;
              if ((i = c.get(e, n))) {
                if ('string' == typeof i) return c.set(e, n, '');
                if (a(i)) return c.set(e, n, !1);
                if ('number' == typeof i) return c.set(e, n, 0);
                if (u(i)) i.length = 0;
                else {
                  if (!r(i)) return c.set(e, n, null);
                  for (s in i) o(i, s) && delete i[s];
                }
              }
            }
          }),
          (c.push = function (e, t) {
            var n = c.get(e, t);
            u(n) || ((n = []), c.set(e, t, n)), n.push.apply(n, Array.prototype.slice.call(arguments, 2));
          }),
          (c.coalesce = function (e, t, n) {
            for (var r, a = 0, i = t.length; a < i; a++) if (void 0 !== (r = c.get(e, t[a]))) return r;
            return n;
          }),
          (c.get = function (e, t, n) {
            if (('number' == typeof t && (t = [t]), !t || 0 === t.length)) return e;
            if (null == e) return n;
            if ('string' == typeof t) return c.get(e, t.split('.'), n);
            var r = i(t[0]),
              a = s(e, r);
            return void 0 === a ? n : 1 === t.length ? a : c.get(e[r], t.slice(1), n);
          }),
          (c.del = function (e, n) {
            if (('number' == typeof n && (n = [n]), null == e)) return e;
            if (t(n)) return e;
            if ('string' == typeof n) return c.del(e, n.split('.'));
            var r = i(n[0]);
            return o(e, r) ? (1 !== n.length ? c.del(e[r], n.slice(1)) : (u(e) ? e.splice(r, 1) : delete e[r], e)) : e;
          }),
          c
        );
      }
      var s = Object.prototype.toString,
        u =
          Array.isArray ||
          function (e) {
            return '[object Array]' === s.call(e);
          },
        d = o();
      return (d.create = o), (d.withInheritedProps = o({ includeInheritedProps: !0 })), d;
    });
  },
  function (e, t, n) {
    function r(e) {
      return n(a(e));
    }
    function a(e) {
      var t = i[e];
      if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
      return t;
    }
    var i = {
      './af': 205,
      './af.js': 205,
      './ar': 206,
      './ar-dz': 207,
      './ar-dz.js': 207,
      './ar-kw': 208,
      './ar-kw.js': 208,
      './ar-ly': 209,
      './ar-ly.js': 209,
      './ar-ma': 210,
      './ar-ma.js': 210,
      './ar-sa': 211,
      './ar-sa.js': 211,
      './ar-tn': 212,
      './ar-tn.js': 212,
      './ar.js': 206,
      './az': 213,
      './az.js': 213,
      './be': 214,
      './be.js': 214,
      './bg': 215,
      './bg.js': 215,
      './bn': 216,
      './bn.js': 216,
      './bo': 217,
      './bo.js': 217,
      './br': 218,
      './br.js': 218,
      './bs': 219,
      './bs.js': 219,
      './ca': 220,
      './ca.js': 220,
      './cs': 221,
      './cs.js': 221,
      './cv': 222,
      './cv.js': 222,
      './cy': 223,
      './cy.js': 223,
      './da': 224,
      './da.js': 224,
      './de': 225,
      './de-at': 226,
      './de-at.js': 226,
      './de-ch': 227,
      './de-ch.js': 227,
      './de.js': 225,
      './dv': 228,
      './dv.js': 228,
      './el': 229,
      './el.js': 229,
      './en-au': 230,
      './en-au.js': 230,
      './en-ca': 231,
      './en-ca.js': 231,
      './en-gb': 232,
      './en-gb.js': 232,
      './en-ie': 233,
      './en-ie.js': 233,
      './en-nz': 234,
      './en-nz.js': 234,
      './eo': 235,
      './eo.js': 235,
      './es': 236,
      './es-do': 237,
      './es-do.js': 237,
      './es.js': 236,
      './et': 238,
      './et.js': 238,
      './eu': 239,
      './eu.js': 239,
      './fa': 240,
      './fa.js': 240,
      './fi': 241,
      './fi.js': 241,
      './fo': 242,
      './fo.js': 242,
      './fr': 243,
      './fr-ca': 244,
      './fr-ca.js': 244,
      './fr-ch': 245,
      './fr-ch.js': 245,
      './fr.js': 243,
      './fy': 246,
      './fy.js': 246,
      './gd': 247,
      './gd.js': 247,
      './gl': 248,
      './gl.js': 248,
      './gom-latn': 249,
      './gom-latn.js': 249,
      './he': 250,
      './he.js': 250,
      './hi': 251,
      './hi.js': 251,
      './hr': 252,
      './hr.js': 252,
      './hu': 253,
      './hu.js': 253,
      './hy-am': 254,
      './hy-am.js': 254,
      './id': 255,
      './id.js': 255,
      './is': 256,
      './is.js': 256,
      './it': 257,
      './it.js': 257,
      './ja': 258,
      './ja.js': 258,
      './jv': 259,
      './jv.js': 259,
      './ka': 260,
      './ka.js': 260,
      './kk': 261,
      './kk.js': 261,
      './km': 262,
      './km.js': 262,
      './kn': 263,
      './kn.js': 263,
      './ko': 264,
      './ko.js': 264,
      './ky': 265,
      './ky.js': 265,
      './lb': 266,
      './lb.js': 266,
      './lo': 267,
      './lo.js': 267,
      './lt': 268,
      './lt.js': 268,
      './lv': 269,
      './lv.js': 269,
      './me': 270,
      './me.js': 270,
      './mi': 271,
      './mi.js': 271,
      './mk': 272,
      './mk.js': 272,
      './ml': 273,
      './ml.js': 273,
      './mr': 274,
      './mr.js': 274,
      './ms': 275,
      './ms-my': 276,
      './ms-my.js': 276,
      './ms.js': 275,
      './my': 277,
      './my.js': 277,
      './nb': 278,
      './nb.js': 278,
      './ne': 279,
      './ne.js': 279,
      './nl': 280,
      './nl-be': 281,
      './nl-be.js': 281,
      './nl.js': 280,
      './nn': 282,
      './nn.js': 282,
      './pa-in': 283,
      './pa-in.js': 283,
      './pl': 284,
      './pl.js': 284,
      './pt': 285,
      './pt-br': 286,
      './pt-br.js': 286,
      './pt.js': 285,
      './ro': 287,
      './ro.js': 287,
      './ru': 288,
      './ru.js': 288,
      './sd': 289,
      './sd.js': 289,
      './se': 290,
      './se.js': 290,
      './si': 291,
      './si.js': 291,
      './sk': 292,
      './sk.js': 292,
      './sl': 293,
      './sl.js': 293,
      './sq': 294,
      './sq.js': 294,
      './sr': 295,
      './sr-cyrl': 296,
      './sr-cyrl.js': 296,
      './sr.js': 295,
      './ss': 297,
      './ss.js': 297,
      './sv': 298,
      './sv.js': 298,
      './sw': 299,
      './sw.js': 299,
      './ta': 300,
      './ta.js': 300,
      './te': 301,
      './te.js': 301,
      './tet': 302,
      './tet.js': 302,
      './th': 303,
      './th.js': 303,
      './tl-ph': 304,
      './tl-ph.js': 304,
      './tlh': 305,
      './tlh.js': 305,
      './tr': 306,
      './tr.js': 306,
      './tzl': 307,
      './tzl.js': 307,
      './tzm': 308,
      './tzm-latn': 309,
      './tzm-latn.js': 309,
      './tzm.js': 308,
      './uk': 310,
      './uk.js': 310,
      './ur': 311,
      './ur.js': 311,
      './uz': 312,
      './uz-latn': 313,
      './uz-latn.js': 313,
      './uz.js': 312,
      './vi': 314,
      './vi.js': 314,
      './x-pseudo': 315,
      './x-pseudo.js': 315,
      './yo': 316,
      './yo.js': 316,
      './zh-cn': 317,
      './zh-cn.js': 317,
      './zh-hk': 318,
      './zh-hk.js': 318,
      './zh-tw': 319,
      './zh-tw.js': 319,
    };
    (r.keys = function () {
      return Object.keys(i);
    }),
      (r.resolve = a),
      (e.exports = r),
      (r.id = 597);
  },
]);
//# sourceMappingURL=runtime.24d34b99d2f74a95ec65.js.map
