(function(window){var svgSprite='<svg><symbol id="icon-gouwudai" viewBox="0 0 1024 1024"><path d="M754.439658 206.39472c-21.140483 0-38.279838 17.140379-38.279838 38.279838s17.140379 38.279838 38.279838 38.279838c49.251727 0 89.320305 40.068578 89.320305 89.320305l0 421.080268c0 49.251727-40.068578 89.320305-89.320305 89.320305L269.559319 882.675274c-49.251727 0-89.320305-40.068578-89.320305-89.320305l0-421.080268c0-49.251727 40.068578-89.320305 89.320305-89.320305 21.140483 0 38.279838-17.140379 38.279838-38.279838s-17.140379-38.279838-38.279838-38.279838c-91.469248 0-165.879981 74.410734-165.879981 165.879981l0 421.080268c0 91.469248 74.410734 165.879981 165.879981 165.879981l484.880339 0c91.469248 0 165.879981-74.410734 165.879981-165.879981l0-421.080268C920.319639 280.805454 845.909929 206.39472 754.439658 206.39472z"  ></path><path d="M474.355635 206.39472c-21.140483 0-38.279838 17.140379-38.279838 38.279838s17.140379 38.279838 38.279838 38.279838l75.28873 0c21.140483 0 38.279838-17.140379 38.279838-38.279838s-17.140379-38.279838-38.279838-38.279838L474.355635 206.39472z"  ></path><path d="M358.966605 348.69875c21.140483 0 38.279838-17.140379 38.279838-38.279838 0-91.656513 52.547797-169.095209 114.752534-169.095209 62.198597 0 114.746394 77.438697 114.746394 169.095209 0 21.140483 17.140379 38.279838 38.279838 38.279838s38.279838-17.140379 38.279838-38.279838c0-135.457088-85.818551-245.654886-191.307094-245.654886s-191.313234 110.198821-191.313234 245.654886C320.686766 331.559395 337.827145 348.69875 358.966605 348.69875z"  ></path></symbol><symbol id="icon-iconfontapple" viewBox="0 0 1024 1024"><path d="M836.608 675.84q41.984 59.392 96.256 76.8-23.552 72.704-74.752 151.552-78.848 118.784-155.648 118.784-28.672 0-84.992-19.456-52.224-19.456-91.136-19.456t-86.016 20.48q-49.152 19.456-80.896 19.456-92.16 0-181.248-156.672-89.088-154.624-89.088-304.128 0-138.24 67.584-226.304 69.632-88.064 172.032-88.064 22.528 0 50.176 5.632t57.344 20.992q31.744 17.408 52.224 24.064t31.744 6.656q13.312 0 40.96-6.144t55.296-22.528q29.696-16.384 51.2-24.576t44.032-8.192q71.68 0 129.024 38.912 30.72 20.48 62.464 60.416-47.104 40.96-68.608 71.68-39.936 57.344-39.936 124.928 0 74.752 41.984 135.168zM630.784 197.632q-35.84 33.792-65.536 44.032-10.24 3.072-26.112 5.632t-36.352 4.608q1.024-90.112 47.104-155.648t151.552-90.112q2.048 10.24 3.072 14.336l0 11.264q0 36.864-17.408 82.944-18.432 45.056-56.32 82.944z"  ></path></symbol><symbol id="icon-daohang" viewBox="0 0 1024 1024"><path d="M898.8 278.4H152.8a32 32 0 0 1 0-64h746a32 32 0 0 1 0 64zM898.8 547.408H152.8a32 32 0 0 1 0-64h746a32 32 0 0 1 0 64zM898.8 816.4H152.8a32 32 0 0 1 0-64h746a32 32 0 0 1 0 64z" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)