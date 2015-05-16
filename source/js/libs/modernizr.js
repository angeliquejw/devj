/*!
 * modernizr v3.0.0-alpha.3
 * Build http://v3.modernizr.com/download/#-appearance-cssanimations-cssremunit-csstransitions-flexbox-fontface-generatedcontent-mediaqueries-placeholder-rgba-search-mq-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Alexander Farkas
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in the
 * current UA and makes the results available to you in two ways: as properties on
 * a global `Modernizr` object, and as classes on the `<html>` element. This
 * information allows you to progressively enhance your pages with a granular level
 * of control over the experience.
*/

;(function(window, document, undefined){
  var classes = [];
  

  var tests = [];
  

  var ModernizrProto = {
    // The current version, dummy
    _version: '3.0.0-alpha.3',

    // Any settings that don't work as separate modules
    // can go in here as configuration.
    _config: {
      'classPrefix' : '',
      'enableClasses' : true,
      'enableJSClass' : true,
      'usePrefixes' : true
    },

    // Queue of tests
    _q: [],

    // Stub these for people who are listening
    on: function( test, cb ) {
      // I don't really think people should do this, but we can
      // safe guard it a bit.
      // -- NOTE:: this gets WAY overridden in src/addTest for
      // actual async tests. This is in case people listen to
      // synchronous tests. I would leave it out, but the code
      // to *disallow* sync tests in the real version of this
      // function is actually larger than this.
      var self = this;
      setTimeout(function() {
        cb(self[test]);
      }, 0);
    },

    addTest: function( name, fn, options ) {
      tests.push({name : name, fn : fn, options : options });
    },

    addAsyncTest: function (fn) {
      tests.push({name : null, fn : fn});
    }
  };

  

  // Fake some of Object.create
  // so we can force non test results
  // to be non "own" properties.
  var Modernizr = function(){};
  Modernizr.prototype = ModernizrProto;

  // Leak modernizr globally when you `require` it
  // rather than force it here.
  // Overwrite name so constructor name is nicer :D
  Modernizr = new Modernizr();

  

  /**
   * is returns a boolean for if typeof obj is exactly type.
   */
  function is( obj, type ) {
    return typeof obj === type;
  }
  ;

  // Run through all tests and detect their support in the current UA.
  function testRunner() {
    var featureNames;
    var feature;
    var aliasIdx;
    var result;
    var nameIdx;
    var featureName;
    var featureNameSplit;

    for ( var featureIdx in tests ) {
      featureNames = [];
      feature = tests[featureIdx];
      // run the test, throw the return value into the Modernizr,
      //   then based on that boolean, define an appropriate className
      //   and push it into an array of classes we'll join later.
      //
      //   If there is no name, it's an 'async' test that is run,
      //   but not directly added to the object. That should
      //   be done with a post-run addTest call.
      if ( feature.name ) {
        featureNames.push(feature.name.toLowerCase());

        if (feature.options && feature.options.aliases && feature.options.aliases.length) {
          // Add all the aliases into the names list
          for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
            featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
          }
        }
      }

      // Run the test, or use the raw value if it's not a function
      result = is(feature.fn, 'function') ? feature.fn() : feature.fn;


      // Set each of the names on the Modernizr object
      for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
        featureName = featureNames[nameIdx];
        // Support dot properties as sub tests. We don't do checking to make sure
        // that the implied parent tests have been added. You must call them in
        // order (either in the test, or make the parent test a dependency).
        //
        // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
        // hashtag famous last words
        featureNameSplit = featureName.split('.');

        if (featureNameSplit.length === 1) {
          Modernizr[featureNameSplit[0]] = result;
        } else {
          // cast to a Boolean, if not one already
          /* jshint -W053 */
          if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
            Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
          }

          Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
        }

        classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
      }
    }
  }

  ;

  var docElement = document.documentElement;
  

  // Pass in an and array of class names, e.g.:
  //  ['no-webp', 'borderradius', ...]
  function setClasses( classes ) {
    var className = docElement.className;
    var classPrefix = Modernizr._config.classPrefix || '';

    // Change `no-js` to `js` (we do this independently of the `enableClasses`
    // option)
    // Handle classPrefix on this too
    if(Modernizr._config.enableJSClass) {
      var reJS = new RegExp('(^|\\s)'+classPrefix+'no-js(\\s|$)');
      className = className.replace(reJS, '$1'+classPrefix+'js$2');
    }

    if(Modernizr._config.enableClasses) {
      // Add the new classes
      className += ' ' + classPrefix + classes.join(' ' + classPrefix);
      docElement.className = className;
    }

  }

  ;

  var createElement = function() {
    if (typeof document.createElement !== 'function') {
      // This is the case in IE7, where the type of createElement is "object".
      // For this reason, we cannot call apply() as Object is not a Function.
      return document.createElement(arguments[0]);
    } else {
      return document.createElement.apply(document, arguments);
    }
  };
  
/*!
{
  "name": "CSS Font rem Units",
  "caniuse": "rem",
  "authors": ["nsfmc"],
  "property": "cssremunit",
  "tags": ["css"],
  "builderAliases": ["css_remunit"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/css3-values/#relative0"
  },{
    "name": "Font Size with rem by Jonathan Snook",
    "href": "http://snook.ca/archives/html_and_css/font-size-with-rem"
  }]
}
!*/

  // "The 'rem' unit ('root em') is relative to the computed
  // value of the 'font-size' value of the root element."
  // you can test by checking if the prop was ditched

  Modernizr.addTest('cssremunit', function() {
    var div = createElement('div');
    try {
      div.style.fontSize = '3rem';
    }
    catch( er ) {}
    return (/rem/).test(div.style.fontSize);
  });

/*!
{
  "name": "CSS rgba",
  "caniuse": "css3-colors",
  "property": "rgba",
  "tags": ["css"],
  "notes": [{
    "name": "CSSTricks Tutorial",
    "href": "http://css-tricks.com/rgba-browser-support/"
  }]
}
!*/

  Modernizr.addTest('rgba', function() {
    var elem = createElement('div');
    var style = elem.style;
    style.cssText = 'background-color:rgba(150,255,150,.5)';

    return ('' + style.backgroundColor).indexOf('rgba') > -1;
  });

/*!
{
  "name": "placeholder attribute",
  "property": "placeholder",
  "tags": ["forms", "attribute"],
  "builderAliases": ["forms_placeholder"]
}
!*/
/* DOC
Tests for placeholder attribute in inputs and textareas
*/

  Modernizr.addTest('placeholder', ('placeholder' in createElement('input') && 'placeholder' in createElement('textarea')));


  // isEventSupported determines if the given element supports the given event
  // kangax.github.com/iseventsupported/
  // github.com/Modernizr/Modernizr/pull/636
  //
  // Known incorrects:
  //   Modernizr.hasEvent("webkitTransitionEnd", elem) // false negative
  //   Modernizr.hasEvent("textInput") // in Webkit. github.com/Modernizr/Modernizr/issues/333
  var isEventSupported = (function (undefined) {

    // Detect whether event support can be detected via `in`. Test on a DOM element
    // using the "blur" event b/c it should always exist. bit.ly/event-detection
    var needsFallback = !('onblur' in document.documentElement);

    /**
     * @param  {string|*}           eventName  is the name of an event to test for (e.g. "resize")
     * @param  {(Object|string|*)=} element    is the element|document|window|tagName to test on
     * @return {boolean}
     */
    function isEventSupportedInner( eventName, element ) {

      var isSupported;
      if ( !eventName ) { return false; }
      if ( !element || typeof element === 'string' ) {
        element = createElement(element || 'div');
      }

      // Testing via the `in` operator is sufficient for modern browsers and IE.
      // When using `setAttribute`, IE skips "unload", WebKit skips "unload" and
      // "resize", whereas `in` "catches" those.
      eventName = 'on' + eventName;
      isSupported = eventName in element;

      // Fallback technique for old Firefox - bit.ly/event-detection
      if ( !isSupported && needsFallback ) {
        if ( !element.setAttribute ) {
          // Switch to generic element if it lacks `setAttribute`.
          // It could be the `document`, `window`, or something else.
          element = createElement('div');
        }

        element.setAttribute(eventName, '');
        isSupported = typeof element[eventName] === 'function';

        if ( element[eventName] !== undefined ) {
          // If property was created, "remove it" by setting value to `undefined`.
          element[eventName] = undefined;
        }
        element.removeAttribute(eventName);
      }

      return isSupported;
    }
    return isEventSupportedInner;
  })();

  

  // Modernizr.hasEvent() detects support for a given event, with an optional element to test on
  // Modernizr.hasEvent('gesturestart', elem)
  var hasEvent = ModernizrProto.hasEvent = isEventSupported;
  
/*!
{
  "name": "input[search] search event",
  "property": "search",
  "tags": ["input","search"],
  "authors": ["Calvin Webster"],
  "notes": [{
    "name": "Wufoo demo",
    "href": "http://www.wufoo.com/html5/types/5-search.html?"
  }, {
    "name": "CSS Tricks",
    "href": "http://css-tricks.com/webkit-html5-search-inputs/"
  }]
}
!*/
/* DOC
There is a custom `search` event implemented in webkit browsers when using an `input[search]` element.
*/

  Modernizr.addTest('inputsearchevent',  hasEvent('search'));


  function getBody() {
    // After page load injecting a fake body doesn't work so check if body exists
    var body = document.body;

    if(!body) {
      // Can't use the real body create a fake one.
      body = createElement('body');
      body.fake = true;
    }

    return body;
  }

  ;

  // Inject element with style element and some CSS rules
  function injectElementWithStyles( rule, callback, nodes, testnames ) {
    var mod = 'modernizr';
    var style;
    var ret;
    var node;
    var docOverflow;
    var div = createElement('div');
    var body = getBody();

    if ( parseInt(nodes, 10) ) {
      // In order not to give false positives we create a node for each test
      // This also allows the method to scale for unspecified uses
      while ( nodes-- ) {
        node = createElement('div');
        node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
        div.appendChild(node);
      }
    }

    // <style> elements in IE6-9 are considered 'NoScope' elements and therefore will be removed
    // when injected with innerHTML. To get around this you need to prepend the 'NoScope' element
    // with a 'scoped' element, in our case the soft-hyphen entity as it won't mess with our measurements.
    // msdn.microsoft.com/en-us/library/ms533897%28VS.85%29.aspx
    // Documents served as xml will throw if using &shy; so use xml friendly encoded version. See issue #277
    style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
    div.id = mod;
    // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
    // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
    (!body.fake ? div : body).innerHTML += style;
    body.appendChild(div);
    if ( body.fake ) {
      //avoid crashing IE8, if background image is used
      body.style.background = '';
      //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
      body.style.overflow = 'hidden';
      docOverflow = docElement.style.overflow;
      docElement.style.overflow = 'hidden';
      docElement.appendChild(body);
    }

    ret = callback(div, rule);
    // If this is done after page load we don't want to remove the body so check if body exists
    if ( body.fake ) {
      body.parentNode.removeChild(body);
      docElement.style.overflow = docOverflow;
      // Trigger layout so kinetic scrolling isn't disabled in iOS6+
      docElement.offsetHeight;
    } else {
      div.parentNode.removeChild(div);
    }

    return !!ret;

  }

  ;

  // adapted from matchMedia polyfill
  // by Scott Jehl and Paul Irish
  // gist.github.com/786768
  var testMediaQuery = (function () {
    var matchMedia = window.matchMedia || window.msMatchMedia;
    if ( matchMedia ) {
      return function ( mq ) {
        var mql = matchMedia(mq);
        return mql && mql.matches || false;
      };
    }

    return function ( mq ) {
      var bool = false;

      injectElementWithStyles('@media ' + mq + ' { #modernizr { position: absolute; } }', function( node ) {
        bool = (window.getComputedStyle ?
                window.getComputedStyle(node, null) :
                node.currentStyle)['position'] == 'absolute';
      });

      return bool;
    };
  })();

  

  /** Modernizr.mq tests a given media query, live against the current state of the window
   * A few important notes:
        * If a browser does not support media queries at all (eg. oldIE) the mq() will always return false
        * A max-width or orientation query will be evaluated against the current state, which may change later.
        * You must specify values. Eg. If you are testing support for the min-width media query use:
              Modernizr.mq('(min-width:0)')
   * usage:
   * Modernizr.mq('only screen and (max-width:768)')
   */
  var mq = ModernizrProto.mq = testMediaQuery;
  
/*!
{
  "name": "CSS Media Queries",
  "caniuse": "css-mediaqueries",
  "property": "mediaqueries",
  "tags": ["css"],
  "builderAliases": ["css_mediaqueries"]
}
!*/

  Modernizr.addTest('mediaqueries', mq('only all'));


  var testStyles = ModernizrProto.testStyles = injectElementWithStyles;
  
/*!
{
  "name": "@font-face",
  "property": "fontface",
  "authors": ["Diego Perini", "Mat Marquis"],
  "tags": ["css"],
  "knownBugs": [
    "False Positive: WebOS http://github.com/Modernizr/Modernizr/issues/342",
    "False Postive: WP7 http://github.com/Modernizr/Modernizr/issues/538"
  ],
  "notes": [{
    "name": "@font-face detection routine by Diego Perini",
    "href": "http://javascript.nwbox.com/CSSSupport/"
  },{
    "name": "Filament Group @font-face compatibility research",
    "href": "https://docs.google.com/presentation/d/1n4NyG4uPRjAA8zn_pSQ_Ket0RhcWC6QlZ6LMjKeECo0/edit#slide=id.p"
  },{
    "name": "Filament Grunticon/@font-face device testing results",
    "href": "https://docs.google.com/spreadsheet/ccc?key=0Ag5_yGvxpINRdHFYeUJPNnZMWUZKR2ItMEpRTXZPdUE#gid=0"
  },{
    "name": "CSS fonts on Android",
    "href": "http://stackoverflow.com/questions/3200069/css-fonts-on-android"
  },{
    "name": "@font-face and Android",
    "href": "http://archivist.incutio.com/viewlist/css-discuss/115960"
  }]
}
!*/

  var blacklist = (function() {
    var ua = navigator.userAgent;
    var wkvers = ua.match( /applewebkit\/([0-9]+)/gi ) && parseFloat( RegExp.$1 );
    var webos = ua.match( /w(eb)?osbrowser/gi );
    var wppre8 = ua.match( /windows phone/gi ) && ua.match( /iemobile\/([0-9])+/gi ) && parseFloat( RegExp.$1 ) >= 9;
    var oldandroid = wkvers < 533 && ua.match( /android/gi );
    return webos || oldandroid || wppre8;
  }());
  if( blacklist ) {
    Modernizr.addTest('fontface', false);
  } else {
    testStyles('@font-face {font-family:"font";src:url("https://")}', function( node, rule ) {
      var style = document.getElementById('smodernizr');
      var sheet = style.sheet || style.styleSheet;
      var cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';
      var bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
      Modernizr.addTest('fontface', bool);
    });
  }
;

  // Following spec is to expose vendor-specific style properties as:
  //   elem.style.WebkitBorderRadius
  // and the following would be incorrect:
  //   elem.style.webkitBorderRadius

  // Webkit ghosts their properties in lowercase but Opera & Moz do not.
  // Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
  //   erik.eae.net/archives/2008/03/10/21.48.10/

  // More here: github.com/Modernizr/Modernizr/issues/issue/21
  var omPrefixes = 'Moz O ms Webkit';
  

  var cssomPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.split(' ') : []);
  ModernizrProto._cssomPrefixes = cssomPrefixes;
  

  var domPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(' ') : []);
  ModernizrProto._domPrefixes = domPrefixes;
  

  /**
   * contains returns a boolean for if substr is found within str.
   */
  function contains( str, substr ) {
    return !!~('' + str).indexOf(substr);
  }

  ;

  // Helper function for converting kebab-case to camelCase,
  // e.g. box-sizing -> boxSizing
  function cssToDOM( name ) {
    return name.replace(/([a-z])-([a-z])/g, function(str, m1, m2) {
      return m1 + m2.toUpperCase();
    }).replace(/^-/, '');
  }
  ;

  // Change the function's scope.
  function fnBind(fn, that) {
    return function() {
      return fn.apply(that, arguments);
    };
  }

  ;

  /**
   * testDOMProps is a generic DOM property test; if a browser supports
   *   a certain property, it won't return undefined for it.
   */
  function testDOMProps( props, obj, elem ) {
    var item;

    for ( var i in props ) {
      if ( props[i] in obj ) {

        // return the property name as a string
        if (elem === false) return props[i];

        item = obj[props[i]];

        // let's bind a function
        if (is(item, 'function')) {
          // bind to obj unless overriden
          return fnBind(item, elem || obj);
        }

        // return the unbound function or obj or value
        return item;
      }
    }
    return false;
  }

  ;

  /**
   * Create our "modernizr" element that we do most feature tests on.
   */
  var modElem = {
    elem : createElement('modernizr')
  };

  // Clean up this element
  Modernizr._q.push(function() {
    delete modElem.elem;
  });

  

  var mStyle = {
    style : modElem.elem.style
  };

  // kill ref for gc, must happen before
  // mod.elem is removed, so we unshift on to
  // the front of the queue.
  Modernizr._q.unshift(function() {
    delete mStyle.style;
  });

  

  // Helper function for converting camelCase to kebab-case,
  // e.g. boxSizing -> box-sizing
  function domToCSS( name ) {
    return name.replace(/([A-Z])/g, function(str, m1) {
      return '-' + m1.toLowerCase();
    }).replace(/^ms-/, '-ms-');
  }
  ;

  // Function to allow us to use native feature detection functionality if available.
  // Accepts a list of property names and a single value
  // Returns `undefined` if native detection not available
  function nativeTestProps ( props, value ) {
    var i = props.length;
    // Start with the JS API: http://www.w3.org/TR/css3-conditional/#the-css-interface
    if ('CSS' in window && 'supports' in window.CSS) {
      // Try every prefixed variant of the property
      while (i--) {
        if (window.CSS.supports(domToCSS(props[i]), value)) {
          return true;
        }
      }
      return false;
    }
    // Otherwise fall back to at-rule (for Opera 12.x)
    else if ('CSSSupportsRule' in window) {
      // Build a condition string for every prefixed variant
      var conditionText = [];
      while (i--) {
        conditionText.push('(' + domToCSS(props[i]) + ':' + value + ')');
      }
      conditionText = conditionText.join(' or ');
      return injectElementWithStyles('@supports (' + conditionText + ') { #modernizr { position: absolute; } }', function( node ) {
        return getComputedStyle(node, null).position == 'absolute';
      });
    }
    return undefined;
  }
  ;

  // testProps is a generic CSS / DOM property test.

  // In testing support for a given CSS property, it's legit to test:
  //    `elem.style[styleName] !== undefined`
  // If the property is supported it will return an empty string,
  // if unsupported it will return undefined.

  // We'll take advantage of this quick test and skip setting a style
  // on our modernizr element, but instead just testing undefined vs
  // empty string.

  // Property names can be provided in either camelCase or kebab-case.

  function testProps( props, prefixed, value, skipValueTest ) {
    skipValueTest = is(skipValueTest, 'undefined') ? false : skipValueTest;

    // Try native detect first
    if (!is(value, 'undefined')) {
      var result = nativeTestProps(props, value);
      if(!is(result, 'undefined')) {
        return result;
      }
    }

    // Otherwise do it properly
    var afterInit, i, propsLength, prop, before;

    // If we don't have a style element, that means
    // we're running async or after the core tests,
    // so we'll need to create our own elements to use
    if ( !mStyle.style ) {
      afterInit = true;
      mStyle.modElem = createElement('modernizr');
      mStyle.style = mStyle.modElem.style;
    }

    // Delete the objects if we
    // we created them.
    function cleanElems() {
      if (afterInit) {
        delete mStyle.style;
        delete mStyle.modElem;
      }
    }

    propsLength = props.length;
    for ( i = 0; i < propsLength; i++ ) {
      prop = props[i];
      before = mStyle.style[prop];

      if (contains(prop, '-')) {
        prop = cssToDOM(prop);
      }

      if ( mStyle.style[prop] !== undefined ) {

        // If value to test has been passed in, do a set-and-check test.
        // 0 (integer) is a valid property value, so check that `value` isn't
        // undefined, rather than just checking it's truthy.
        if (!skipValueTest && !is(value, 'undefined')) {

          // Needs a try catch block because of old IE. This is slow, but will
          // be avoided in most cases because `skipValueTest` will be used.
          try {
            mStyle.style[prop] = value;
          } catch (e) {}

          // If the property value has changed, we assume the value used is
          // supported. If `value` is empty string, it'll fail here (because
          // it hasn't changed), which matches how browsers have implemented
          // CSS.supports()
          if (mStyle.style[prop] != before) {
            cleanElems();
            return prefixed == 'pfx' ? prop : true;
          }
        }
        // Otherwise just return true, or the property name if this is a
        // `prefixed()` call
        else {
          cleanElems();
          return prefixed == 'pfx' ? prop : true;
        }
      }
    }
    cleanElems();
    return false;
  }

  ;

  /**
   * testPropsAll tests a list of DOM properties we want to check against.
   *     We specify literally ALL possible (known and/or likely) properties on
   *     the element including the non-vendor prefixed one, for forward-
   *     compatibility.
   */
  function testPropsAll( prop, prefixed, elem, value, skipValueTest ) {

    var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
    props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

    // did they call .prefixed('boxSizing') or are we just testing a prop?
    if(is(prefixed, 'string') || is(prefixed, 'undefined')) {
      return testProps(props, prefixed, value, skipValueTest);

      // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
    } else {
      props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
      return testDOMProps(props, prefixed, elem);
    }
  }

  // Modernizr.testAllProps() investigates whether a given style property,
  //     or any of its vendor-prefixed variants, is recognized
  // Note that the property names must be provided in the camelCase variant.
  // Modernizr.testAllProps('boxSizing')
  ModernizrProto.testAllProps = testPropsAll;

  

  /**
   * testAllProps determines whether a given CSS property, in some prefixed
   * form, is supported by the browser. It can optionally be given a value; in
   * which case testAllProps will only return true if the browser supports that
   * value for the named property; this latter case will use native detection
   * (via window.CSS.supports) if available. A boolean can be passed as a 3rd
   * parameter to skip the value check when native detection isn't available,
   * to improve performance when simply testing for support of a property.
   *
   * @param prop - String naming the property to test (either camelCase or
   *               kebab-case)
   * @param value - [optional] String of the value to test
   * @param skipValueTest - [optional] Whether to skip testing that the value
   *                        is supported when using non-native detection
   *                        (default: false)
   */
  function testAllProps (prop, value, skipValueTest) {
    return testPropsAll(prop, undefined, undefined, value, skipValueTest);
  }
  ModernizrProto.testAllProps = testAllProps;
  
/*!
{
  "name": "Appearance",
  "property": "appearance",
  "caniuse": "css-appearance",
  "tags": ["css"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-appearance"
  },{
    "name": "CSS-Tricks CSS Almanac: appearance",
    "href": "http://css-tricks.com/almanac/properties/a/appearance/"
  }]
}
!*/
/* DOC
Detects support for the `appearance` css property, which is used to make an
element inherit the style of a standard user interface element. It can also be
used to remove the default styles of an element, such as input and buttons.
*/

  Modernizr.addTest('appearance', testAllProps('appearance'));

/*!
{
  "name": "CSS Animations",
  "property": "cssanimations",
  "caniuse": "css-animation",
  "polyfills": ["transformie", "csssandpaper"],
  "tags": ["css"],
  "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
  "notes": [{
    "name" : "Article: 'Dispelling the Android CSS animation myths'",
    "href": "http://goo.gl/OGw5Gm"
  }]
}
!*/
/* DOC
Detects whether or not elements can be animated using CSS
*/

  Modernizr.addTest('cssanimations', testAllProps('animationName', 'a', true));

/*!
{
  "name": "CSS Transitions",
  "property": "csstransitions",
  "caniuse": "css-transitions",
  "tags": ["css"]
}
!*/

  Modernizr.addTest('csstransitions', testAllProps('transition', 'all', true));

/*!
{
  "name": "Flexbox",
  "property": "flexbox",
  "caniuse": "flexbox",
  "tags": ["css"],
  "notes": [{
    "name": "The _new_ flexbox",
    "href": "http://dev.w3.org/csswg/css3-flexbox"
  }],
  "warnings": [
    "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
  ]
}
!*/
/* DOC
Detects support for the Flexible Box Layout model, a.k.a. Flexbox, which allows easy manipulation of layout order and sizing within a container.
*/

  Modernizr.addTest('flexbox', testAllProps('flexBasis', '1px', true));

/*!
{
  "name": "CSS Generated Content",
  "property": "generatedcontent",
  "tags": ["css"],
  "warnings": ["Android won't return correct height for anything below 7px #738"],
  "notes": [{
    "name": "W3C CSS Selectors Level 3 spec",
    "href": "http://www.w3.org/TR/css3-selectors/#gen-content"
  },{
    "name": "MDN article on :before",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
  },{
    "name": "MDN article on :after",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
  }]
}
!*/

  testStyles('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function( node ) {
    Modernizr.addTest('generatedcontent', node.offsetHeight >= 7);
  });


  // Run each test
  testRunner();

  // Remove the "no-js" class if it exists
  setClasses(classes);

  delete ModernizrProto.addTest;
  delete ModernizrProto.addAsyncTest;

  // Run the things that are supposed to run after the tests
  for (var i = 0; i < Modernizr._q.length; i++) {
    Modernizr._q[i]();
  }

  // Leak Modernizr namespace
  window.Modernizr = Modernizr;


;

})(window, document);