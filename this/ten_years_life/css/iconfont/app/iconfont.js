;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-android" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M827.202974 630.901614c0 34.833744 28.273394 63.954227 62.831578 63.954227 35.080726 0 62.831578-29.120483 62.831578-63.954227L952.86613 384.423102c0-35.352203-27.750852-63.424541-62.831578-63.424541-34.558184 0-62.831578 28.072337-62.831578 63.424541L827.202974 630.901614 827.202974 630.901614zM602.575286 175.40227c0-16.63459 14.140269-30.163526 30.892227-30.163526 17.283685 0 31.422933 13.528936 31.422933 30.163526 0 17.160193-14.139248 30.683006-31.422933 30.683006C616.715555 206.085276 602.575286 192.562464 602.575286 175.40227L602.575286 175.40227zM363.82774 175.40227c0-16.63459 13.60548-30.163526 30.36152-30.163526 17.280623 0 30.892227 13.528936 30.892227 30.163526 0 17.160193-13.617727 30.683006-30.892227 30.683006C377.43322 206.085276 363.82774 192.562464 363.82774 175.40227L363.82774 175.40227zM234.495565 774.412841c0 27.03848 21.470143 48.867871 49.215892 48.867871l55.506806 0 0 137.273383c0 34.331613 27.227289 63.445973 62.825454 63.445973 34.03054 0 62.831578-29.113339 62.831578-63.445973L464.875296 823.280712l97.390783 0 0 137.273383c0 34.331613 26.698624 63.445973 62.302913 63.445973 35.08787 0 62.837702-29.113339 62.837702-63.445973L687.406693 823.280712l55.493539 0c27.751872 0 49.222016-21.82837 49.222016-48.867871L792.122247 322.548838 234.495565 322.548838 234.495565 774.412841 234.495565 774.412841zM791.072061 283.041814c-8.376999-85.275364-64.927869-156.518641-146.605655-193.95693l51.316266-74.34689c3.371007-4.89883 2.616792-10.933576-1.573749-13.008435-4.190541-2.595359-8.8975-1.03794-12.565499 3.123004l-53.934078 76.963682c-36.12581-13.004353-74.340767-21.322158-115.708325-21.322158s-80.632702 8.317805-116.23699 21.322158l-52.883891-76.963682c-3.660855-4.161964-8.374958-6.755283-12.565499-3.123004-4.185438 2.604545-5.493834 8.121852-2.09527 13.008435l51.832684 74.34689c-81.677786 38.486434-139.274759 108.158003-146.604634 193.95693L791.072061 283.041814 791.072061 283.041814zM71.13387 630.901614c0 34.833744 27.227289 63.954227 62.831578 63.954227 34.03054 0 62.831578-29.120483 62.831578-63.954227L196.797026 384.423102c0-35.352203-28.800018-63.424541-62.831578-63.424541-35.604289 0-62.831578 28.072337-62.831578 63.424541L71.13387 630.901614 71.13387 630.901614z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-uicon_ios" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M654.156 205.689c33.743-38.088 56.534-91.008 50.333-143.703-48.633 1.828-107.514 30.087-142.437 68.133-31.283 33.757-58.628 87.534-51.318 139.274 54.27 3.937 109.637-25.687 143.422-63.704zM775.913 540.223c-1.209-114.009 99.879-168.673 104.421-171.429-56.815-77.314-145.334-87.928-176.813-89.137-75.275-7.114-146.936 41.265-185.151 41.265-38.116 0-97.095-40.225-159.519-39.199-82.108 1.139-157.777 44.443-200.040 112.87-85.271 137.686-21.82 341.746 61.286 453.506 40.632 54.636 89.067 116.091 152.617 113.841 61.258-2.249 84.385-36.864 158.409-36.864 74.080 0 94.846 36.864 159.632 35.726 65.869-1.111 107.627-55.662 147.935-110.495 46.65-63.465 65.841-124.934 66.994-128.027-1.477-0.661-128.449-45.947-129.77-182.058z" fill="#333333" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)