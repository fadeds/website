(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-link" viewBox="0 0 1024 1024">'+""+'<path d="M972.8 664 740.8 432c-52.8-40-99.2 0-99.2 0l-60.8 60.8-52.8-52.8 52.8-54.4c46.4-44.8 0-105.6 0-105.6l-224-224c-64-57.6-123.2 0-123.2 0L59.2 233.6c-65.6 65.6-1.6 129.6-1.6 129.6L272 579.2c75.2 59.2 124.8 0 124.8 0l57.6-57.6 54.4 54.4-65.6 65.6c-64 65.6 0 121.6 0 121.6l209.6 209.6c65.6 46.4 128 0 128 0l192-192C1024 716.8 972.8 664 972.8 664zM481.6 352l-22.4 22.4c0 0-72-68.8-108.8-32 0 0-52.8 36.8 30.4 113.6l-27.2 27.2c0 0-16 24-52.8 0l-158.4-156.8c0 0-28.8-28.8 1.6-57.6l121.6-120c0 0 20.8-28.8 52.8 0l158.4 158.4C478.4 307.2 505.6 328 481.6 352zM876.8 745.6 740.8 880c0 0-20.8 19.2-40 3.2L526.4 710.4c0 0-9.6-11.2 9.6-28.8l35.2-35.2c0 0 65.6 75.2 107.2 35.2 0 0 49.6-41.6-32-113.6l24-24c0 0 17.6-24 44.8 0l163.2 163.2C876.8 707.2 894.4 720 876.8 745.6z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-search" viewBox="0 0 1024 1024">'+""+'<path d="M894.3872 819.013632 655.1552 576.60928c52.4288-55.12704 72.761344-122.871808 72.761344-205.053952 0-169.146368-130.610176-305.958912-298.596352-305.958912-167.962624 0-304.633856 137.617408-304.633856 306.763776 0 169.147392 134.541312 299.305984 302.50496 299.305984 70.132736 0 136.737792-16.780288 188.269568-57.020416l240.959488 244.130816c4.405248 4.451328 10.180608 6.677504 15.954944 6.677504 5.776384 0 15.337472-6.816768 19.739648-11.266048C900.921344 845.33248 903.1936 827.913216 894.3872 819.013632zM172.831744 368.572416c0-140.362752 113.378304-254.498816 252.724224-254.498816 139.368448 0 252.7488 114.136064 252.7488 254.498816 0 140.316672-113.381376 254.49984-252.7488 254.49984C286.210048 623.072256 172.831744 508.889088 172.831744 368.572416z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)