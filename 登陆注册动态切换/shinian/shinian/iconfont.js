(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-arrowDown" viewBox="0 0 1024 1024">'+""+'<path d="M527.929 750.768l438.277-431.027c6.798-6.686 6.891-17.619 0.203-24.42-6.686-6.801-17.62-6.891-24.42-0.203l-426.067 419.018-424.478-424.477c-6.743-6.743-17.677-6.743-24.42 0-3.372 3.372-5.058 7.792-5.058 12.211s1.687 8.84 5.058 12.211l436.584 436.584c6.705 6.705 17.56 6.75 24.32 0.102z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-arrow-right-copy" viewBox="0 0 1024 1024">'+""+'<path d="M543.683 764.018l0.008 0.008 1.049-1.137 297.916-317.429-60.368-56.657-242.758 258.659-260.543-240.734-56.186 60.806 320.872 296.492z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)