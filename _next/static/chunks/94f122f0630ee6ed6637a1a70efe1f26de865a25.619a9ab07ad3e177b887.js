(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/0+H":function(t,e,n){"use strict";var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=a(n("q1tI")),i=n("lwAK");function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,a=t.hybrid,r=void 0!==a&&a,i=t.hasQuery;return n||r&&(void 0!==i&&i)}e.isInAmpMode=s,e.useAmp=function(){return s(r.default.useContext(i.AmpStateContext))}},"7Wf7":function(t,e,n){"use strict";var a=n("1OyB"),r=n("vuIU"),i=n("Ji7U"),s=n("md7G"),o=n("foSv"),c=n("q1tI"),l=n.n(c),u=n("YFqc"),p=n.n(u),f=l.a.createElement;function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(o.a)(t);if(e){var r=Object(o.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}var m=function(t){Object(i.a)(n,t);var e=d(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return f(l.a.Fragment,null,f("footer",null,f("div",{className:"content"},f("div",{className:"column"},f("h4",null,"About Bridging Afrika"),f("p",null,"Do non amet proident eiusmod magna et. Anim ipsum aliquip reprehenderit est in incididunt sit. Sit do eu labore irure. Dolor laboris commodo ea ad labore reprehenderit. Proident ex nisi irure voluptate cupidatat cupidatat mollit nisi ad do enim sunt non. Ex ipsum est anim laboris officia deserunt elit. Mollit ad aliquip cupidatat proident dolor adipisicing non aute exercitation. Sit reprehenderit ea irure exercitation ipsum fugiat voluptate laboris proident ex esse sit quis quis. Elit irure ut non veniam incididunt enim veniam aliquip duis proident Lorem. Qui veniam nostrud officia ipsum deserunt voluptate.")),f("div",{className:"column"},f("h4",null,"Quick Links"),f("p",{className:"link"},f(p.a,{href:"/"},f("a",null,"Home"))),f("p",{className:"link"},f(p.a,{href:"/"},f("a",null,"About"))),f("p",{className:"link"},f(p.a,{href:"/"},f("a",null,"Innovations"))),f("p",{className:"link"},f(p.a,{href:"/"},f("a",null,"Profiles"))),f("p",{className:"link"},f(p.a,{href:"/"},f("a",null,"Crowdfunding"))),f("p",{className:"link"},f(p.a,{href:"/"},f("a",null,"Blog"))),f("p",{className:"link"},f(p.a,{href:"/"},f("a",null,"Forum"))),f("p",{className:"link"},f(p.a,{href:"/"},f("a",null,"Contact")))),f("div",{className:"column"},f("h4",null,"Stay in touch"),f("div",{className:"infos"},f("div",{className:"info"},f("span",{className:"icon-map-marker icon"}),f("span",null,"The address to the company's physical location comes here")),f("div",{className:"info"},f("span",{className:"icon-envelope icon"}),f("span",null,"Info@bridgingAfrika.com")),f("div",{className:"info"},f("span",{className:"icon-telephone icon"}),f("span",null,"090673248798"))),f("div",{className:"social"},f("span",{className:"fa fa-facebook-square"}),f("span",{className:"fa fa-linkedin-square"}),f("span",{className:"fa fa-twitter-square"}),f("span",{className:"fa fa-instagram"})))),f("p",{className:"copy-right"},"copyright \xa9 2020 Bridging Afrika")))}}]),n}(l.a.Component);e.a=m},"8Kt/":function(t,e,n){"use strict";var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=a(n("q1tI")),i=a(n("Xuae")),s=n("lwAK"),o=n("FYa8"),c=n("/0+H");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function u(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=l;var p=["name","httpEquiv","charSet","itemProp"];function f(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(u,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,a={};return function(r){var i=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var s=r.key.slice(r.key.indexOf("$")+1);t.has(s)?i=!1:t.add(s)}switch(r.type){case"title":case"base":e.has(r.type)?i=!1:e.add(r.type);break;case"meta":for(var o=0,c=p.length;o<c;o++){var l=p[o];if(r.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var u=r.props[l],f=a[l]||new Set;f.has(u)?i=!1:(f.add(u),a[l]=f)}}}return i}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}var d=i.default();function m(t){var e=t.children;return r.default.createElement(s.AmpStateContext.Consumer,null,(function(t){return r.default.createElement(o.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:c.isInAmpMode(t)},e)}))}))}m.rewind=d.rewind,e.default=m},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var r=a(n("q1tI"));e.HeadManagerContext=r.createContext(null)},Ijbi:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},RIqP:function(t,e,n){var a=n("Ijbi"),r=n("EbDI"),i=n("Bnag");t.exports=function(t){return a(t)||r(t)||i()}},Xuae:function(t,e,n){"use strict";var a=n("lwsE"),r=n("PJYZ"),i=n("W8MJ"),s=n("7W2i"),o=n("a1gu"),c=n("Nsbk"),l=n("RIqP");function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=c(t);if(e){var r=c(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return o(this,n)}}Object.defineProperty(e,"__esModule",{value:!0});var p=n("q1tI"),f=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(l(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(o){s(l,o);var c=u(l);function l(t){var i;return a(this,l),i=c.call(this,t),f&&(e.add(r(i)),n(r(i))),i}return i(l,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),i(l,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(p.Component)}},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var a=n("lwsE"),r=n("W8MJ"),i=n("7W2i"),s=n("a1gu"),o=n("Nsbk");function c(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=o(t);if(e){var r=o(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return s(this,n)}}var l=n("TqRt"),u=n("284h");e.__esModule=!0,e.default=void 0;var p,f=u(n("q1tI")),d=n("QmWs"),m=n("g/15"),v=l(n("nOHt")),h=n("elyg");function y(t){return t&&"object"===typeof t?(0,m.formatWithValidation)(t):t}var g=new Map,j=window.IntersectionObserver,b={};function k(){return p||(j?p=new j((function(t){t.forEach((function(t){if(g.has(t.target)){var e=g.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(p.unobserve(t.target),g.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var w=function(t){i(n,t);var e=c(n);function n(t){var r;return a(this,n),(r=e.call(this,t)).p=void 0,r.cleanUpListeners=function(){},r.formatUrls=function(t){var e=null,n=null,a=null;return function(r,i){if(a&&r===e&&i===n)return a;var s=t(r,i);return e=r,n=i,a=s,s}}((function(t,e){return{href:(0,h.addBasePath)(y(t)),as:e?(0,h.addBasePath)(y(e)):e}})),r.linkClicked=function(t){var e=t.currentTarget,n=e.nodeName,a=e.target;if("A"!==n||!(a&&"_self"!==a||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=r.formatUrls(r.props.href,r.props.as),s=i.href,o=i.as;if(function(t){var e=(0,d.parse)(t,!1,!0),n=(0,d.parse)((0,m.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(s)){var c=window.location.pathname;s=(0,d.resolve)(c,s),o=o?(0,d.resolve)(c,o):s,t.preventDefault();var l=r.props.scroll;null==l&&(l=o.indexOf("#")<0),v.default[r.props.replace?"replace":"push"](s,o,{shallow:r.props.shallow}).then((function(t){t&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},r.p=!1!==t.prefetch,r}return r(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,a=e.as,r=(0,d.resolve)(t,n);return[r,a?(0,d.resolve)(t,a):r]}},{key:"handleRef",value:function(t){var e=this;this.p&&j&&t&&t.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=k();return n?(n.observe(t),g.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}g.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();v.default.prefetch(e[0],e[1],t).catch((function(t){0})),b[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,r=n.as;"string"===typeof e&&(e=f.default.createElement("a",null,e));var i=f.Children.only(e),s={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=r||a),f.default.cloneElement(i,s)}}]),n}(f.Component);e.default=w},jCc1:function(t,e,n){"use strict";var a=n("1OyB"),r=n("vuIU"),i=n("JX7q"),s=n("Ji7U"),o=n("md7G"),c=n("foSv"),l=n("q1tI"),u=n.n(l),p=n("8Kt/"),f=n.n(p),d=n("YFqc"),m=n.n(d),v=n("/MKj"),h=n("bqLF"),y=u.a.createElement;function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(c.a)(t);if(e){var r=Object(c.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(o.a)(this,n)}}var j=function(t){Object(s.a)(n,t);var e=g(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).header=null,r.regHeight=r.regHeight.bind(Object(i.a)(r)),r}return Object(r.a)(n,[{key:"regHeight",value:function(t){t&&this.props.updateHeader({height:t.offsetHeight})}},{key:"render",value:function(){var t=this.props.settings.header;return y(u.a.Fragment,null,y(f.a,{runat:"server"},y("meta",{httpEquiv:"content-type",content:"text/html;charset=utf-8"}),y("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-52115242-17"}),y("script",{dangerouslySetInnerHTML:{__html:"\n                      window.dataLayer = window.dataLayer || [];\n                      function gtag() { dataLayer.push(arguments); }\n                      gtag('js', new Date());\n\n                      gtag('config', 'UA-52115242-17');\n                    "}}),y("meta",{charSet:"utf-8"}),y("title",null,"Bridging Afrika"),y("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),y("meta",{name:"description",content:"Collaboration for change"}),y("script",{type:"text/javascript",dangerouslySetInnerHTML:{__html:"\n                      window.addEventListener(\"load\", function () { \n                      document.querySelector('body').classList.add('loaded'); });\n                    "}}),y("link",{href:"/css/theme.min.css",rel:"stylesheet",type:"text/css",media:"all"}),y("link",{href:"/css/demo.css",rel:"stylesheet",type:"text/css",media:"all"}),y("link",{href:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;1,100;1,200;1,300&display=swap",rel:"stylesheet"}),y("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet"}),y("script",{type:"text/javascript",src:"/js/jquery.min.js"}),y("script",{type:"text/javascript",src:"/js/popper.min.js"}),y("script",{type:"text/javascript",src:"/js/bootstrap.js"}),y("script",{type:"text/javascript",dangerouslySetInnerHTML:{__html:"\n                (($) => {\n                    var now = new Date;\n                    var day = 864e5;\n                    var weeksToAdd = 2;\n                    var tenWeeksFromNow = new Date(+now + day * 7 * weeksToAdd).toISOString().slice(0, 10).replace(/-/g, 'index-2.html');\n                    $('[data-countdown-date].add-countdown-time').attr('data-countdown-date', tenWeeksFromNow);\n                })(jQuery);\n              "}}),y("script",{type:"text/javascript",src:"/js/aos.js"}),y("script",{type:"text/javascript",src:"/js/clipboard.min.js"}),y("script",{type:"text/javascript",src:"/js/jquery.fancybox.min.js"}),y("script",{type:"text/javascript",src:"/js/flatpickr.min.js"}),y("script",{type:"text/javascript",src:"/js/flickity.pkgd.min.js"}),y("script",{type:"text/javascript",src:"/js/ion.rangeSlider.min.js"}),y("script",{type:"text/javascript",src:"/js/isotope.pkgd.min.js"}),y("script",{type:"text/javascript",src:"/js/jarallax-video.min.js"}),y("script",{type:"text/javascript",src:"/js/jarallax-element.min.js"}),y("script",{type:"text/javascript",src:"/js/jquery.countdown.min.js"}),y("script",{type:"text/javascript",src:"/js/jquery.smartWizard.min.js"}),y("script",{type:"text/javascript",src:"/js/plyr.polyfilled.min.js"}),y("script",{type:"text/javascript",src:"/js/prism.js"}),y("script",{type:"text/javascript",src:"/js/scrollMonitor.js"}),y("script",{type:"text/javascript",src:"/js/smooth-scroll.polyfills.min.js"}),y("script",{type:"text/javascript",src:"/js/svg-injector.umd.production.js"}),y("script",{type:"text/javascript",src:"/js/twitterFetcher_min.js"}),y("script",{type:"text/javascript",src:"/js/typed.min.js"}),y("script",{type:"text/javascript",src:"/js/theme.js"}),y("script",{type:"text/javascript",src:"/js/custom.js"}),y("script",{type:"text/javascript",src:"/js/jarallax.min.js",defer:!0})),y("div",{id:"header",className:"navbar-container".concat(t.transparent?" transparent":"").concat(t.fixed?"":" fixed"),style:t.fixed?{position:"absolute",top:"".concat(t.fixedTop,"px")}:{},ref:this.regHeight},y("nav",{className:"navbar navbar-expand-lg navbar-light ","data-sticky":"top"},y(m.a,{href:"/index"},y("a",{id:"logo",className:"navbar-brand navbar-brand-dynamic-color fade-page"},y("img",{alt:"AfriHub",src:"/img/logo.png",style:{borderRadius:"4px",height:"50px"}}))),y("div",{className:"d-flex align-items-center order-lg-3"},y(m.a,{href:"/sign-up"},y("a",{id:"login",className:"btn btn-primary ml-lg-4 mr-3 mr-md-4 mr-lg-0 d-none d-sm-block order-lg-3"},"Login / Signup ")),y("button",{"aria-expanded":"false","aria-label":"Toggle navigation",className:"navbar-toggler","data-target":".navbar-collapse","data-toggle":"collapse",type:"button"},y("img",{alt:"Navbar Toggler Open Icon",className:"navbar-toggler-open icon icon-sm","data-inject-svg":!0,src:"/img/icons/interface/icon-menu.svg"}),y("img",{alt:"Navbar Toggler Close Icon",className:"navbar-toggler-close icon icon-sm","data-inject-svg":!0,src:"/img/icons/interface/icon-x.svg"}))),y("div",{className:"collapse navbar-collapse order-3 order-lg-2 justify-content-lg-end",id:"navigation-menu"},y("ul",{className:"navbar-nav my-3 my-lg-0"},y("li",{className:"nav-item"},y("a",{className:"nav-link",href:"/"},y("span",{className:"\tfa fa-home icon"}),"Accueil")),y("li",{className:"nav-item"},y("a",{className:"nav-link",href:"/about"},y("span",{className:"\tfa fa-book icon"}),"\xc0 propos")),y("li",{className:"nav-item"},y("a",{className:"nav-link",href:"#"},y("span",{className:"\tfa fa-medkit icon"}),"Innovations")),y("li",{className:"nav-item"},y("a",{className:"nav-link",href:"#"},y("span",{className:"\tfa fa-leaf icon"}),"Profils")),y("li",{className:"nav-item"},y("a",{className:"nav-link",href:"#"},y("span",{className:"\tfa fa-gears icon"}),"Crowdfunding")),y("li",{className:"nav-item"},y("a",{className:"nav-link",href:"#"},y("span",{className:"\tfa fa-book icon"}),"Blog")),y("li",{className:"nav-item"},y("a",{className:"nav-link",href:"#"},y("span",{className:"\tfa fa-book icon"}),"Forum")),y("li",{className:"nav-item"},y("a",{className:"nav-link",href:"/contact"},y("span",{className:"\tfa fa-book icon"}),"Contact")))))))}}]),n}(u.a.Component);e.a=Object(v.b)((function(t){return{settings:t.settings}}),(function(t){return{updateHeader:function(e){return t(Object(h.b)(e))}}}))(j)},lwAK:function(t,e,n){"use strict";var a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var r=a(n("q1tI"));e.AmpStateContext=r.createContext({})},vpxa:function(t,e,n){"use strict";var a=n("1OyB"),r=n("vuIU"),i=n("Ji7U"),s=n("md7G"),o=n("foSv"),c=n("q1tI"),l=n.n(c),u=n("/MKj"),p=n("jCc1"),f=n("7Wf7"),d=l.a.createElement;function m(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(o.a)(t);if(e){var r=Object(o.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}var v=function(t){Object(i.a)(n,t);var e=m(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var t=this.props.children;return d(l.a.Fragment,null,d(p.a,null),d("main",{className:""},t),d(f.a,null))}}]),n}(l.a.Component);e.a=Object(u.b)((function(t){return{settings:t.settings}}),(function(t){return{}}))(v)}}]);