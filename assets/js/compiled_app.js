function base64_encode(j){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var d,c,b,n,m,l,k,o,h=0,p=0,g="",f=[];if(!j){return j}j=unescape(encodeURIComponent(j));do{d=j.charCodeAt(h++);c=j.charCodeAt(h++);b=j.charCodeAt(h++);o=d<<16|c<<8|b;n=o>>18&63;m=o>>12&63;l=o>>6&63;k=o&63;f[p++]=e.charAt(n)+e.charAt(m)+e.charAt(l)+e.charAt(k)}while(h<j.length);g=f.join("");var a=j.length%3;return(a?g.slice(0,a-3):g)+"===".slice(a||3)}(function(b){b.hotkeys={version:"0.8",specialKeys:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",191:"/",224:"meta"},shiftNums:{"`":"~","1":"!","2":"@","3":"#","4":"$","5":"%","6":"^","7":"&","8":"*","9":"(","0":")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"}};function a(d){if(typeof d.data!=="string"){return}var c=d.handler,e=d.data.toLowerCase().split(" ");d.handler=function(n){if(this!==n.target&&(/textarea|select/i.test(n.target.nodeName)||n.target.type==="text")){return}var h=n.type!=="keypress"&&b.hotkeys.specialKeys[n.which],o=String.fromCharCode(n.which).toLowerCase(),k,m="",g={};if(n.altKey&&h!=="alt"){m+="alt+"}if(n.ctrlKey&&h!=="ctrl"){m+="ctrl+"}if(n.metaKey&&!n.ctrlKey&&h!=="meta"){m+="meta+"}if(n.shiftKey&&h!=="shift"){m+="shift+"}if(h){g[m+h]=true}else{g[m+o]=true;g[m+b.hotkeys.shiftNums[o]]=true;if(m==="shift+"){g[b.hotkeys.shiftNums[o]]=true}}for(var j=0,f=e.length;j<f;j++){if(g[e[j]]){return c.apply(this,arguments)}}}}b.each(["keydown","keyup","keypress"],function(){b.event.special[this]={add:a}})})(jQuery);var JSON;if(!JSON){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());function utf8_encode(a){if(a===null||typeof a==="undefined"){return""}var i=(a+"");var j="",b,e,c=0;b=e=0;c=i.length;for(var d=0;d<c;d++){var h=i.charCodeAt(d);var g=null;if(h<128){e++}else{if(h>127&&h<2048){g=String.fromCharCode((h>>6)|192,(h&63)|128)}else{if((h&63488)!=55296){g=String.fromCharCode((h>>12)|224,((h>>6)&63)|128,(h&63)|128)}else{if((h&64512)!=55296){throw new RangeError("Unmatched trail surrogate at "+d)}var f=i.charCodeAt(++d);if((f&64512)!=56320){throw new RangeError("Unmatched lead surrogate at "+(d-1))}h=((h&1023)<<10)+(f&1023)+65536;g=String.fromCharCode((h>>18)|240,((h>>12)&63)|128,((h>>6)&63)|128,(h&63)|128)}}}if(g!==null){if(e>b){j+=i.slice(b,e)}j+=g;b=e=d+1}}if(e>b){j+=i.slice(b,c)}return j}var TileDeck,artBoard,artMode,imgBoard,mypos,myrot,mywid,myhei,mapSettings={mode:0,height:2,width:2,hasEndcaps:false,gridType:0},corners,endstag,map_kind,scaled=false,swap=false,inrotate=false,maptype=1,stagcount=0,tilecount=0,normalTileCount=0,edgeTileCount=0,detectedrotate=0,tileSetOptions="",imag="",selectedTile,roomContents=["Empty","Monster(s) and Treasure","Monster(s) and Treasure","Empty, Hidden Treasure","Trap, Treasure","Trap","Monster(s)","Monster(s)","Monster(s)","Monster(s)"],specialContents=["Hindrance","Danger","Advantage","Mystery","Special Creature","Odor","Power"],$issafari=((/Safari/i).test(window.navigator.appVersion)),ua=window.navigator.userAgent,tileLibrary={};TileDeck=function(){this.deck=[];this.cursor=0};TileDeck.prototype.shuffle=function(){this.deck.sort(function(){return Math.round(Math.random())-0.5})};TileDeck.prototype.draw=function(){var a=this.deck[this.cursor];this.cursor+=1;if((this.cursor%this.deck.length)===0){this.cursor=0;this.shuffle()}return a};TileDeck.prototype.stock=function(a){this.deck=a||[];this.cursor=0;this.shuffle()};tileLibrary={tile:new TileDeck(),edge:new TileDeck(),corner:new TileDeck(),top:new TileDeck(),tco:new TileDeck(),btm:new TileDeck(),bco:new TileDeck()};var createCookie=function(c,d,e){var b,a;if(e){b=new Date();b.setTime(b.getTime()+(e*24*60*60*1000));a="; expires="+b.toGMTString()}else{a=""}document.cookie=c+"="+d+a+"; path=/"},readCookie=function(b){var e=b+"=",a=document.cookie.split(";"),d,f;for(d=0;d<a.length;d+=1){f=a[d];while(f.charAt(0)===" "){f=f.substring(1,f.length)}if(f.indexOf(e)===0){return f.substring(e.length,f.length)}}return null},eraseCookie=function(a){createCookie(a,"",-1)},appendTab=function(a){$("#tiles").append("<img class='tab rot"+a+"' data-rot='"+a+"' data-type='tab' src='../images/tab.png'/>")},appendTile=function(c,b){var a=tileLibrary[c].draw();$("#tiles").append("<img draggable='true' class='"+c+" rot"+b+"' data-rot='"+b+"' data-type='"+c+"' data-imgid='"+a.id+"' data-artist='"+a.artist_id+"' src='../tiles/"+a.image+"'/>")},applyGridOverlay=function(a){mapSettings.gridType=parseInt(a,10);switch(mapSettings.gridType){case 1:$("#grid").css("background","url(../grid_15.png)");break;case 2:$("#grid").css("background","url(../grid_30.png)");break;case 3:$("#grid").css("background","url(../images/hex.png)");break;default:$("#grid").css("background","transparent");break}ga("send","event","Grid","Type "+a)},composeMap=function(b,l){var k,g,e,f,h,d,c,a;endstag=((tileLibrary.edge.deck.length>0)&&(mapSettings.mode===3));mapSettings.hasEndcaps=((tileLibrary.edge.deck.length>0)&&(mapSettings.mode===2));corners=((tileLibrary.corner.deck.length>0)&&(mapSettings.mode===2));if(maptype===6){k=((tileLibrary.top.deck.length>0)&&(mapSettings.mode===2));e=((tileLibrary.tco.deck.length>0)&&(mapSettings.mode===2));g=((tileLibrary.btm.deck.length>0)&&(mapSettings.mode===2));f=((tileLibrary.bco.deck.length>0)&&(mapSettings.mode===2));$("#viewport").removeClass("nm").addClass("sv");$("#notification").slideUp("fast")}else{$("#viewport").removeClass("sv").addClass("nm");if(((mapSettings.mode===2)||(mapSettings.mode===3))&&((tileLibrary.edge.deck.length===0)||(tileLibrary.corner.deck.length===0))){$("#notification span").text("The tile sets you selected do not contain the right tile mix for your selected map mode. Falling back to the closest possible map mode.");$("#notification").slideDown("fast")}else{$("#notification").slideUp("fast")}}if(mapSettings.mode!==4){h=300*b+2;if(mapSettings.hasEndcaps){h+=300}$("#map, #tiles").width(h+"px");$("#tiles").empty();if(maptype!==6){if(mapSettings.hasEndcaps){if(corners){appendTile("corner",0)}for(c=0;c<b-stagcount;c+=1){appendTile("edge",0)}if(corners){appendTile("corner",1)}$("#tiles").append("<br/>")}}else{if(k){if(e){appendTile("tco",0)}for(c=0;c<b-stagcount;c+=1){appendTile("top",0)}if(e){appendTile("tco",1)}$("#tiles").append("<br/>")}}for(d=0;d<l;d+=1){a=(maptype===6)?0:3;if(mapSettings.hasEndcaps||(endstag&&(stagcount===1))){appendTile("edge",a)}for(c=0;c<b-stagcount;c+=1){appendTile("tile",randInt(0,3))}if(mapSettings.hasEndcaps||(endstag&&(stagcount===1))){appendTile("edge",1)}if((mapSettings.mode===1)||(mapSettings.mode===3)){stagcount=1-stagcount}$("#tiles").append("<br/>")}if(maptype!==6){if(mapSettings.hasEndcaps){if(corners){appendTile("corner",3)}for(c=0;c<b-stagcount;c+=1){appendTile("edge",2)}if(corners){appendTile("corner",2)}$("#tiles").append("<br/>")}}else{if(g){if(f){appendTile("bco",0)}for(c=0;c<b-stagcount;c+=1){appendTile("btm",0)}if(f){appendTile("bco",1)}$("#tiles").append("<br/>")}}}else{$("#map, #tiles").width("902px");$("#tiles").empty();appendTab(0);appendTile("tile",randInt(0,3));appendTab(2);$("#tiles").append("<br/>");appendTile("tile",randInt(0,3));appendTile("tile",randInt(0,3));appendTile("tile",randInt(0,3));$("#tiles").append("<br/>");appendTab(0);appendTile("tile",randInt(0,3));appendTab(2);$("#tiles").append("<br/>");appendTab(0);appendTile("tile",randInt(0,3));appendTab(2);$("#tiles").append("<br/>");$("#tiles").append("<img class='rot0' data-rot='0' data-type='tab' src='../images/tab_bottom.png'/>")}tilecount=$("#tiles img").length},generateMap=function(){selectedTile=null;swap=false;mapSettings.mode=parseInt($("input:radio[name=mode]:checked").val(),10);imag="";stagcount=0;if(mapSettings.mode!==4){mapSettings.height=parseInt($("#height").val(),10);mapSettings.width=parseInt($("#width").val(),10)}else{mapSettings.height=4;mapSettings.width=3}normalTileCount=mapSettings.height*mapSettings.width;if(maptype!==6){edgeTileCount=2*(mapSettings.height+mapSettings.width)}else{edgeTileCount=2*mapSettings.height}$.post("scripts/load_morphs.php",{map_kind:maptype,artists:tileSetOptions},function(b){var a=$.parseJSON(b);tileLibrary.tile.stock(a[1]);tileLibrary.edge.stock(a[2]);tileLibrary.corner.stock(a[3]);if(maptype===6){tileLibrary.top.stock(a[4]);tileLibrary.tco.stock(a[5]);tileLibrary.btm.stock(a[6]);tileLibrary.bco.stock(a[7])}composeMap(mapSettings.width,mapSettings.height)})},selectTileSets=function(){tileSetOptions="";$("#artistsblock input").filter(":checked").each(function(){tileSetOptions+=$(this).val()+","});tileSetOptions=tileSetOptions.substr(0,tileSetOptions.length-1);generateMap();ga("send","event","Select Artists",tileSetOptions)},exportMap=function(){var a=new Image();if((mapSettings.mode===1)||(mapSettings.mode===3)||(mapSettings.mode===4)||(maptype===6)){var d;$("#notification").slideUp("fast");if((mapSettings.width*mapSettings.height)>36){if(!confirm("Whoa there! Your browser might choke on saving a map of this size and crash the tab and/or window. Are you sure you want to let it run?")){return false}}artBoard.width=imgBoard.width()-2;artBoard.height=imgBoard.height();if(mapSettings.mode===4){artBoard.width="900px";artBoard.height="1235px"}$("#tiles").find("img").each(function(){artMode.save();mypos=$(this).position();myrot=$(this).data("rot");mywid=$(this).width();myhei=$(this).height();a.src=$(this).attr("src");mypos.left-=22;mypos.top-=22;if(maptype===6){artMode.translate(mypos.left+(mywid/2),mypos.top+(myhei/2));if((myrot%2)===1){artMode.scale(-1,1)}}else{if((myrot%2)===1&&mywid>150&&myhei<300){mypos.left-=150;mypos.top+=75}artMode.translate(mypos.left+(mywid/2),mypos.top+(myhei/2));artMode.rotate(myrot*Math.PI/2)}artMode.drawImage(a,-(mywid/2),-(myhei/2),mywid,myhei);artMode.restore()});$("#grid").find("img").each(function(){artMode.save();mypos=$(this).position();mywid=$(this).width();myhei=$(this).height();a.src=$(this).attr("src");artMode.translate(mypos.left+(mywid/2),mypos.top+(myhei/2));artMode.drawImage(a,-(mywid/2),-(myhei/2),mywid,myhei);artMode.restore()});d=artBoard.toDataURL("image/png");window.open(d,"MapWindow","width=800,height=600,scrollbars=yes");artBoard.width=artBoard.width*2/2;ga("send","event","Export","Canvas")}else{var c,b;if((mapSettings.width*mapSettings.height)>64){$("#notification span").text("This map looks too big to export to PNG without causing an error. Sorry!");$("#notification").slideDown("fast");ga("send","event","Export","Failed")}else{$("#notification").slideUp("fast");b={tiles:[],rotation:[]};$("#tiles img").each(function(e){b.tiles[e]=$(this).data("imgid");b.rotation[e]=$(this).data("rot")});c="fullmap.php?mapData="+base64_encode(JSON.stringify(b))+"&w="+mapSettings.width+"&h="+mapSettings.height;if(mapSettings.hasEndcaps){c+="&e=1"}else{c+="&e=0"}if(corners){c+="&c=1"}else{c+="&c=0"}c+="&g="+((mapSettings.gridType===0)?"0":mapSettings.gridType);window.open(c,"MapWindow","width=800,height=600,scrollbars=yes")}ga("send","event","Export","PHP")}},replaceTile=function(e,b,d,c){var a=tileLibrary[d].draw();e.attr("src","../tiles/"+a.image).data("imgid",a.id).data("artist",a.artist_id);ga("send","event","Replace Tile",d)},nextGrid=function(){applyGridOverlay((mapSettings.gridType+1)%4);ga("send","event","Grid Settings","Rotate via Keyboard")},roomStock=function(){var e,f,d,h,g;do{$("#roomcont").empty();e=0;for(g=0;g<5;g+=1){f=randInt(0,11);e+=f;if(f<10){h="<li>"+roomContents[f]+"</li>"}else{d=randInt(0,specialContents.length-1);h="<li>Special: "+specialContents[d]+"</li>"}$("#roomcont").append(h)}}while(e===0);ga("send","event","Room Stocker","Stock")};$(document).ready(function(){imgBoard=$("#tiles");$("#newWindowB").click(exportMap);artBoard=document.getElementById("drawingboard");artMode=artBoard.getContext("2d");$("#newBtn").click(generateMap);$("input.mtBtn").click(function(){map_kind=parseInt($(this).val(),10)});$("input:radio[name=maptype]").click(function(){if($mobilemode){$(this).blur()}maptype=parseInt($(this).val(),10);$("#artistsblock").load("scripts/load_authors.php",{map_kind:maptype},selectTileSets)});$("#site-head").on("click tap","#nogrid",function(){applyGridOverlay(0)}).on("click tap","#grid5",function(){applyGridOverlay(1)}).on("click tap","#grid10",function(){applyGridOverlay(2)}).on("click tap","#gridhex",function(){applyGridOverlay(3)});$("#rotateTile").click(function(){if(jQuery.inArray(selectedTile.data("type"),["tile","top","btm"])<0){return false}var b=selectedTile.data("rot"),c=(b+1)%4;selectedTile.data("rot",c).removeClass("rot"+b).addClass("rot"+c);ga("send","event","Rotate","Click");return false});$("#removeTile").click(function(){replaceTile(selectedTile,selectedTile.data("imgid"),selectedTile.data("type"),false);return false});if(readCookie("popup")!=="original"){$("#popup").show().click(function(){$(this).fadeOut("fast");createCookie("popup","original",90)})}$("#tilepanel").find(".collapsed").hide();$("#width").val(2);$("#height").val(2);mapSettings.mode=parseInt($("input:radio[name=mode]:checked").val(),10);applyGridOverlay($("input:radio[name=grid]:checked").val());maptype=parseInt($("input:radio[name=maptype]:checked").val(),10);$("#artistsblock").load("scripts/load_authors.php",{map_kind:maptype},selectTileSets);if(maptype===6){$("#viewport").addClass("sv").removeClass("nm")}else{$("#viewport").addClass("nm").removeClass("sv")}if($("#fitwidth").is(":checked")){scaled=true}if(($mobilemode)&&(ua.indexOf("Android")>=0)){var a=parseFloat(ua.slice(ua.indexOf("Android")+8));if(a<3){$("body").addClass("faildroid")}}if($appmode){$("body").css({"margin-bottom":"0"});$("#map").css({"margin-top":"34px"});$("#tilepanel,#site-head").css({top:"0"});$("#notification,#popup").css({top:"62px;"});$("#newnav,#site-foot").hide()}if($("canvas#grid").length>0){$("#grid").remove();$("<div id='grid'></div>").appendTo("#map")}}).hammer().on("rotate",function(b){if(selectedTile.data("type")=="tile"){var a=selectedTile.data("rot");inrotate=true;detectedrotate=((a*90)+Math.round(b.gesture.rotation)+360)%360;selectedTile.removeClass("rot"+a).css({"-webkit-transform":"rotateZ("+detectedrotate+"deg)","-moz-transform":"rotateZ("+detectedrotate+"deg)","-ms-transform":"rotateZ("+detectedrotate+"deg)","-o-transform":"rotateZ("+detectedrotate+"deg)",transform:"rotateZ("+detectedrotate+"deg)","-webkit-transition":"none","-moz-transition":"none","-ms-transition":"none","-o-transition":"none",transition:"none",zoom:1});b.gesture.preventDefault();ga("send","event","Rotate","Start Touch")}}).on("release",function(c){if(inrotate){inrotate=false;var a=selectedTile.data("rot"),b=Math.round(detectedrotate/90)%4;selectedTile.data("rot",b).removeClass("rot"+a).addClass("rot"+b).css({"-webkit-transform":"","-moz-transform":"","-ms-transform":"","-o-transform":"",transform:"","-webkit-transition":"","-moz-transition":"","-ms-transition":"","-o-transition":"",transition:"",zoom:1});detectedrotate=0;ga("send","event","Rotate","Release Touch")}}).on("change","#artistsblock input",function(a){if(a.metaKey){$(this).prop("checked",true).siblings("input").prop("checked",false);alert("Test")}selectTileSets()}).on("dblclick","#artistsblock label",function(){var a=$(this).attr("for");$("#"+a).prop("checked",true).siblings("input").prop("checked",false);selectTileSets()}).on("click tap","#removeTileExit",function(){replaceTile(selectedTile,selectedTile.data("imgid"),selectedTile.data("type"),true);ga("send","event","Remove Tile","Exit");return false}).on("click tap","#swapTile",function(){if(selectedTile.data("type")==="tab"){return}selectedTile.addClass("swapfirst");swap=true;$("#swapTile").addClass("down");ga("send","event","Swap","Tool Click");return false}).on("click tap","#mancrush",function(){var a=selectedTile.data("artist");$("#chk"+a).prop("checked",true).siblings("input").prop("checked",false);ga("send","event","Heart","Click");selectTileSets()}).on("dragstart","#tiles img",function(a){var b=a.originalEvent;if(swap||!b){return}selectedTile=$(this);$(".selTile").removeClass("selTile");selectedTile.addClass("selTile");b.dataTransfer.effectAllowed="move";b.dataTransfer.setData("text/html","Swap");ga("send","event","Swap","Drag Start")}).on("dragover","#tiles img",function(a){a.originalEvent.preventDefault()}).on("drop","#tiles img",function(b){var c,a;b=b.originalEvent;b.preventDefault();if(b.dataTransfer.getData("text/html")=="Swap"){if(selectedTile.data("type")!==$(this).data("type")){return false}c={image:selectedTile.attr("src"),id:selectedTile.data("imgid"),artist:selectedTile.data("artist"),rotation:selectedTile.data("rot")};a={image:$(this).attr("src"),id:$(this).data("imgid"),artist:$(this).data("artist"),rotation:$(this).data("rot")};selectedTile.attr("src",a.image).data("imgid",a.id).data("artist",a.artist).removeClass("swapfirst");$(this).attr("src",c.image).data("imgid",c.id).data("artist",c.artist);if($(this).data("type")=="tile"){selectedTile.data("rot",a.rotation).removeClass("rot"+c.rotation).addClass("rot"+a.rotation);$(this).data("rot",c.rotation).removeClass("rot"+a.rotation).addClass("rot"+c.rotation)}selectedTile=$(this);$(".selTile").removeClass("selTile");selectedTile.addClass("selTile");ga("send","event","Swap","Drop")}}).on("click tap","#tiles img",function(){var c,b,d=10,a=10;if($(this).data("type")==="tab"){return}if(swap){if(selectedTile.data("type")!==$(this).data("type")){return false}c={image:selectedTile.attr("src"),id:selectedTile.data("imgid"),artist:selectedTile.data("artist"),rotation:selectedTile.data("rot")};b={image:$(this).attr("src"),id:$(this).data("imgid"),artist:$(this).data("artist"),rotation:$(this).data("rot")};selectedTile.attr("src",b.image).data("imgid",b.id).data("artist",b.artist).removeClass("swapfirst");$(this).attr("src",c.image).data("imgid",c.id).data("artist",c.artist);if($(this).data("type")=="tile"){selectedTile.data("rot",b.rotation).removeClass("rot"+c.rotation).addClass("rot"+b.rotation);$(this).data("rot",c.rotation).removeClass("rot"+b.rotation).addClass("rot"+c.rotation)}swap=false;$("#swapTile").removeClass("down");ga("send","event","Swap","Tool Complete")}selectedTile=$(this);$(".selTile").removeClass("selTile");selectedTile.addClass("selTile");if(jQuery.inArray(selectedTile.data("type"),["tile","top","btm"])>-1){$("#rotateBtn").fadeTo("fast",1)}else{$("#rotateBtn").fadeTo("fast",0.5)}if($(this).hasClass("edge")&&($(this).hasClass("rot1")||$(this).hasClass("rot3"))){a-=75;if(ua.toLowerCase().indexOf("webkit")>-1){d+=75;a-=75}if(ua.toLowerCase().indexOf("opera")>-1){d+=75;a-=75}}}).on("change","#width, #height",generateMap).on("click tap","#roomBtn",roomStock).on("click tap change","input:radio[name=mode]",function(){mapSettings.mode=parseInt($(this).val(),10);generateMap();ga("send","event","Mode","Change")}).on("dblclick","#tiles img.tile",function(d){var a=$(this),b,c;if(d.metaKey){replaceTile(a,a.data("imgid"),"tile",false);ga("send","event","Replace","Ctrl+DblClick")}else{b=$(this).data("rot");c=(b+1)%4;$(this).data("rot",c).removeClass("rot"+b).addClass("rot"+c);ga("send","event","Rotate","DblClick")}}).on("dblclick","#tiles img.edge",function(b){if(b.metaKey){var a=$(this);replaceTile(a,a.data("imgid"),"edge",false)}}).on("dblclick","#tiles img.corner",function(b){if(b.metaKey){var a=$(this);replaceTile(a,a.data("imgid"),"corner",false)}}).on("dblclick","#tiles img.top",function(d){var a=$(this),b,c;if(d.metaKey){replaceTile(a,a.data("imgid"),"top",false)}else{b=$(this).data("rot");c=(b+1)%2;$(this).data("rot",c).removeClass("rot"+b).addClass("rot"+c)}}).on("dblclick","#tiles img.tco",function(b){if(b.metaKey){var a=$(this);replaceTile(a,a.data("imgid"),"tco",false)}}).on("dblclick","#tiles img.btm",function(d){var a=$(this),b,c;if(d.metaKey){replaceTile(a,a.data("imgid"),"btm",false)}else{b=$(this).data("rot");c=(b+1)%2;$(this).data("rot",c).removeClass("rot"+b).addClass("rot"+c)}}).on("dblclick","#tiles img.bco",function(b){if(b.metaKey){var a=$(this);replaceTile(a,a.data("imgid"),"bco",false)}}).on("click","#grid",function(c){if($(this).hasClass("iconmode")){var f=$(this).offset(),d=c.clientX-f.left-15,b=c.clientY-f.top-15,a=$("<img />").attr("src","../images/fab.png").css({top:b+"px",left:d+"px",width:"30px"}).appendTo($(this))}}).bind("keydown","c",function(){$("#endBtn").click();ga("send","event","Mode","Keyboard","FullMap");generateMap()}).bind("keydown","f",function(){$("#fitwidth").click()}).bind("keydown","g",nextGrid).bind("keydown","n",generateMap).bind("keydown","shift+n",function(){$("#normal").click();ga("send","event","Mode","Keyboard","Normal");generateMap()}).bind("keydown","shift+y",function(){$("#grid").toggleClass("iconmode")}).bind("keydown","s",function(){$("#stagger").click();ga("send","event","Mode","Keyboard","Staggered");generateMap()}).bind("keydown","shift+s",function(){$("#stagcap").click();ga("send","event","Mode","Keyboard","StaggeredCapped");generateMap()}).bind("keydown","shift+c",function(){$("span.amt, span.special").slideToggle("slow")});if("standalone" in window.navigator&&!window.navigator.standalone&&$mobilemode&&$issafari){$('<link rel="stylesheet" href="/style/add2home.css" />').appendTo("body");$('<script src="/scripts/add2home.js"><\/script>').appendTo("body")};