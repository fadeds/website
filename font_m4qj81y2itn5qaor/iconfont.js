(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-zhuye" viewBox="0 0 1000 1000">'+""+'<path d="M826.7152 396.8669 826.7152 155.6645 701.6647 155.6645 701.6647 267.0909 514.8546 73.2234 76.4124 526.6429 201.4639 526.6429 201.4639 856.4024 368.1958 856.4024 368.1958 691.5251 659.9833 691.5251 659.9833 856.4024 826.7152 856.4024 826.7152 526.6429 951.7667 526.6429Z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-htmal5icon35" viewBox="0 0 1024 1024">'+""+'<path d="M124.56604 259.591293l0 84.975347 764.78119 0 0-84.975347L124.56604 259.591293zM124.56604 557.00603l764.78119 0 0-84.97637L124.56604 472.02966 124.56604 557.00603zM124.56604 769.44542l764.78119 0 0-84.97637L124.56604 684.46905 124.56604 769.44542z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-shijian" viewBox="0 0 1024 1024">'+""+'<path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 921.6c-225.28 0-409.6-184.32-409.6-409.6 0-225.28 184.32-409.6 409.6-409.6S921.6 286.72 921.6 512c0 225.28-184.32 409.6-409.6 409.6zM537.6 256h-76.8v307.2l266.24 163.84L768 660.48 537.6 522.24V256z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)