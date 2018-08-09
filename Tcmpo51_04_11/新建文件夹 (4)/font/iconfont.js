(function(window){var svgSprite='<svg><symbol id="icon-iphone" viewBox="0 0 1024 1024"><path d="M649.785306 161.506856C707.566241 88.169516 694.232179 8.165145 689.787492 1.498114c-6.667031-6.667031-93.338433 6.667031-153.341711 86.671402-53.336247 73.33734-53.336247 153.341711-46.669217 160.008742C496.443594 254.845289 583.114997 248.178259 649.785306 161.506856L649.785306 161.506856zM649.785306 161.506856M794.237643 534.860588c-6.667031-106.672495 93.338433-173.342804 113.339526-186.676866l0-6.667031c0 0-86.671402-106.672495-213.34499-100.005464-80.004371 6.667031-120.006557 46.669217-173.342804 46.669217-66.67031 0-126.673588-46.669217-200.010928-46.669217-60.003278 0-233.346082 53.336247-246.680145 280.015299C63.086584 748.205579 223.095326 959.328225 283.098605 999.330411c60.003278 40.002186 100.005464 26.668124 166.675774-6.667031 33.335154-20.001093 140.00765-26.668124 200.010928 13.334062 73.33734 26.668124 180.009835 6.667031 300.016392-260.014206C934.245292 748.205579 800.904674 714.870423 794.237643 534.860588L794.237643 534.860588zM794.237643 534.860588"  ></path></symbol><symbol id="icon-caidan" viewBox="0 0 1024 1024"><path d="M105.931034 300.137931C105.931034 280.636566 121.789652 264.827586 141.3498 264.827586L882.6502 264.827586C902.211443 264.827586 918.068966 280.500605 918.068966 300.137931 918.068966 319.639296 902.210348 335.448276 882.6502 335.448276L141.3498 335.448276C121.788557 335.448276 105.931034 319.775257 105.931034 300.137931ZM105.931034 512C105.931034 492.498635 121.789652 476.689655 141.3498 476.689655L882.6502 476.689655C902.211443 476.689655 918.068966 492.362674 918.068966 512 918.068966 531.501365 902.210348 547.310345 882.6502 547.310345L141.3498 547.310345C121.788557 547.310345 105.931034 531.637326 105.931034 512ZM105.931034 723.862069C105.931034 704.360704 121.789652 688.551724 141.3498 688.551724L882.6502 688.551724C902.211443 688.551724 918.068966 704.224743 918.068966 723.862069 918.068966 743.363434 902.210348 759.172414 882.6502 759.172414L141.3498 759.172414C121.788557 759.172414 105.931034 743.499395 105.931034 723.862069Z"  ></path></symbol><symbol id="icon-gouwu" viewBox="0 0 1024 1024"><path d="M890.01984 357.60128c0-61.62432-50.13504-111.7696-111.7696-111.7696h-68.25984v-23.06048c0-113.36704-92.23168-205.59872-205.59872-205.59872s-205.59872 92.23168-205.59872 205.59872v23.06048h-68.23936c-61.62432 0-111.75936 50.13504-111.74912 110.9504l-21.7088 548.5056c0 61.62432 50.13504 111.75936 111.7696 111.75936H799.9488c61.62432 0 111.75936-50.13504 111.73888-112.56832l-21.66784-546.87744zM339.75296 222.78144c0-90.78784 73.85088-164.63872 164.63872-164.63872s164.63872 73.85088 164.63872 164.63872v23.06048H339.75296v-23.06048zM799.9488 976.09728H208.86528c-39.03488 0-70.8096-31.76448-70.81984-69.9904l21.7088-548.5056c0-39.03488 31.76448-70.8096 70.79936-70.8096H778.24c39.03488 0 70.8096 31.76448 70.83008 71.61856l21.66784 546.88768a70.8608 70.8608 0 0 1-70.78912 70.79936z" fill="" ></path><path d="M504.39168 701.94176c-96.36864 0-174.76608-78.39744-174.76608-174.76608h-40.96c0 118.94784 96.77824 215.72608 215.72608 215.72608 118.95808 0 215.72608-96.77824 215.72608-215.72608h-40.96c0 96.36864-78.39744 174.76608-174.76608 174.76608z" fill="" ></path></symbol><symbol id="icon-icon--" viewBox="0 0 1024 1024"><path d="M913.92 878.08l-212.48-207.36c56.32-61.44 89.6-140.8 89.6-227.84 0-186.88-153.6-337.92-345.6-337.92C256 102.4 102.4 253.44 102.4 440.32s153.6 337.92 345.6 337.92c81.92 0 158.72-28.16 217.6-76.8l212.48 209.92c10.24 10.24 28.16 10.24 38.4 0 7.68-7.68 7.68-23.04-2.56-33.28z m-465.92-148.48c-161.28 0-291.84-128-291.84-286.72C156.16 284.16 286.72 153.6 448 153.6c161.28 0 291.84 128 291.84 286.72 0 158.72-130.56 289.28-291.84 289.28z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)