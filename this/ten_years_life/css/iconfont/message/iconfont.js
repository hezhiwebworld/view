(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-xinxi" viewBox="0 0 1024 1024">'+""+'<path d="M721.003128 379.747907c-46.25037 0-84.046185 37.298488-84.046185 83.548858s37.795814 83.548858 84.046185 83.548858c46.25037 0 84.046185-37.298488 84.046185-83.548858S767.253498 379.747907 721.003128 379.747907zM511.13633 379.747907c-46.25037 0-83.548858 37.298488-83.548858 83.548858s37.298488 83.548858 83.548858 83.548858c46.747697 0 84.046185-37.298488 84.046185-83.548858S557.884027 379.747907 511.13633 379.747907zM301.766858 379.747907c-46.25037 0-84.046185 37.298488-84.046185 83.548858s37.795814 83.548858 84.046185 83.548858 84.046185-37.298488 84.046185-83.548858S348.017228 379.747907 301.766858 379.747907zM535.006993 796.994869c-31.827893 0-63.158459-9.449209-93.495394-13.427824C318.67597 937.735287 125.71726 907.398352 125.71726 907.398352c136.264477-64.153112 133.777843-171.07633 109.408829-185.498808C128.203894 659.238412 63.553455 563.753711 63.553455 456.831516c0-189.477422 208.374818-342.649987 471.454562-342.649987s423.712211 153.172565 423.712211 342.649987C958.720228 645.811612 798.086737 796.994869 535.006993 796.994869z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-xin-1" viewBox="0 0 1024 1024">'+""+'<path d="M514.031263 900.587226 135.016043 537.873274c-12.113899-12.916171-23.00904-27.228131-32.346709-42.551118-9.209756-15.098883-16.879436-31.207769-22.815635-47.894823-10.060123-28.318976-15.178701-70.808696-15.178701-100.106975 0-143.041834 116.358101-228.320079 259.399935-228.320079 72.010057 0 139.912563 54.723346 188.528817 106.179274C561.203632 173.724647 629.122511 119.001301 701.132568 119.001301c143.025461 0 259.383562 85.278245 259.383562 228.320079 0 28.800953-4.941546 70.840418-14.665001 98.726535-6.209422 17.746176-14.376429 34.881438-24.323988 50.895157-8.359388 13.477966-18.003026 26.249851-28.672016 37.978986l-2.037403 2.053776L514.031263 900.587226z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-icon" viewBox="0 0 1024 1024">'+""+'<path d="M304.503 463.265c0-66.286-53.706-120.038-120.049-120.038-66.245 0-120.049 53.751-120.049 120.038 0 66.289 53.804 120.039 120.049 120.039 66.342 0 120.049-53.751 120.049-120.039z" fill="#2c2c2c" ></path>'+""+'<path d="M632.467 463.265c0-66.286-53.707-120.038-120.049-120.038-66.245 0-120.050 53.751-120.050 120.038 0 66.289 53.805 120.039 120.050 120.039 66.342 0 120.049-53.751 120.049-120.039z" fill="#2c2c2c" ></path>'+""+'<path d="M960.429 463.265c0-66.286-53.707-120.038-120.049-120.038-66.245 0-120.049 53.751-120.049 120.038 0 66.289 53.804 120.039 120.049 120.039 66.342 0 120.049-53.751 120.049-120.039z" fill="#2c2c2c" ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)