if("serviceWorker" in navigator){window.addEventListener("load",function(){navigator.serviceWorker.register("/sw.js").then(function(a){console.log("ServiceWorker registration successful with scope: ",a.scope)})["catch"](function(a){console.log("ServiceWorker registration failed: ",a)})})}var $appmode=window.navigator.standalone,$mobilemode=((/iphone|ipod|ipad|android/gi).test(window.navigator.platform)),randInt=function(b,a){return ~~(Math.random()*(a-b+1))+b};$(document).on("click","#sideBar h4",function(a){$(this).next().slideToggle("fast")}).on("click","#clearNoti",function(a){$("#notification").slideUp("fast")}).on("click","a[href*=#]",function(b){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);a=a.length&&a||$("[name="+this.hash.slice(1)+"]");if(a.length){$("html,body").animate({scrollTop:(a.offset().top-125)},1000);b.preventDefault()}}}).on("click",".showme",function(){var b=$(this),d=b.data("carto"),c=b.data("ttype"),a=b.data("mtype");$("#cartoload").fadeOut("fast").html("");$("#cartoloadanim").fadeIn("fast");$.getJSON("/ajax/carto_tiles.php",{cart_id:d,ttype:c,mtype:a},function(g){var e=[],f;$.each(g,function(h,i){e.push('<img src="/tiles/'+i+'" data-id="'+h+'" />')});f=(e.length>0)?e.join(""):"There are no tiles of this type to display.";$("#cartoload").html(f).fadeIn("fast");$("#cartoloadanim").fadeOut("fast")})}).ready(function(){$("#cartoloadanim, #cartoload").hide();if($mobilemode===false){$("header a,header label,#imgMenu a,#imgMenu label,clearNoti,div.fieldset h4").not(".dropped").qtip({position:{my:"top center",at:"bottom center",viewport:$(window)},style:{tip:true,classes:"ui-tooltip-dark ui-tooltip-rounded"}});$("#sideBar a").qtip({position:{my:"center left",at:"center right",viewport:$(window)},style:{tip:true,classes:"ui-tooltip-dark ui-tooltip-rounded"}})}});(function(d,e,j,h,f,c,b){d.GoogleAnalyticsObject=f;d[f]=d[f]||function(){(d[f].q=d[f].q||[]).push(arguments)};d[f].l=1*new Date();c=e.createElement(j);b=e.getElementsByTagName(j)[0];c.async=1;c.src=h;b.parentNode.insertBefore(c,b)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create","UA-5344894-8","davesmapper.com");ga("send","pageview");(function(){var a=document.createElement("script");a.type="text/javascript";a.async=true;a.src="https://apis.google.com/js/plusone.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})();