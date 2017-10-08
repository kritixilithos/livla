var searchIdCounter = 0;
var cmaxes=function(){"use strict";function e(e,r){function n(){this.constructor=e}n.prototype=r.prototype,e.prototype=new n}function r(e,n,t,$){this.message=e,this.expected=n,this.found=t,this.location=$,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,r)}function n(e,n){function t(e,r,n){return{type:"class",parts:e,inverted:r,ignoreCase:n}}function $(){return{type:"any"}}function u(){return{type:"end"}}function a(e){return{type:"other",description:e}}function c(r){var n,t=A[r];if(t)return t;for(n=r-1;!A[n];)n--;for(t=A[n],t={line:t.line,column:t.column};n<r;)10===e.charCodeAt(n)?(t.line++,t.column=1):t.column++,n++;return A[r]=t,t}function s(e,r){var n=c(e),t=c(r);return{start:{offset:e,line:n.line,column:n.column},end:{offset:r,line:t.line,column:t.column}}}function o(e){v<P||(v>P&&(P=v,y=[]),y.push(e))}function i(e,n,t){return new r(r.buildMessage(e,n),e,n,t)}function p(e){var r,n=new Array(e.length);for(r=0;r<e.length;r++)n[r]=e.charCodeAt(r)-32;return n}function l(r){var n,t,$=F[r],u=0,a=[],c=$.length,s=[],i=[],p=65*v+r,f=K[p];if(f)return v=f.nextPos,f.result;for(;;){for(;u<c;)switch($[u]){case 0:i.push(d[$[u+1]]),u+=2;break;case 1:i.push(void 0),u++;break;case 2:i.push(null),u++;break;case 3:i.push(b),u++;break;case 4:i.push([]),u++;break;case 5:i.push(v),u++;break;case 6:i.pop(),u++;break;case 7:v=i.pop(),u++;break;case 8:i.length-=$[u+1],u+=2;break;case 9:i.splice(-2,1),u++;break;case 10:i[i.length-2].push(i.pop()),u++;break;case 11:i.push(i.splice(i.length-$[u+1],$[u+1])),u+=2;break;case 12:i.push(e.substring(i.pop(),v)),u++;break;case 13:s.push(c),a.push(u+3+$[u+1]+$[u+2]),i[i.length-1]?(c=u+3+$[u+1],u+=3):(c=u+3+$[u+1]+$[u+2],u+=3+$[u+1]);break;case 14:s.push(c),a.push(u+3+$[u+1]+$[u+2]),i[i.length-1]===b?(c=u+3+$[u+1],u+=3):(c=u+3+$[u+1]+$[u+2],u+=3+$[u+1]);break;case 15:s.push(c),a.push(u+3+$[u+1]+$[u+2]),i[i.length-1]!==b?(c=u+3+$[u+1],u+=3):(c=u+3+$[u+1]+$[u+2],u+=3+$[u+1]);break;case 16:i[i.length-1]!==b?(s.push(c),a.push(u),c=u+2+$[u+1],u+=2):u+=2+$[u+1];break;case 17:s.push(c),a.push(u+3+$[u+1]+$[u+2]),e.length>v?(c=u+3+$[u+1],u+=3):(c=u+3+$[u+1]+$[u+2],u+=3+$[u+1]);break;case 18:s.push(c),a.push(u+4+$[u+2]+$[u+3]),e.substr(v,d[$[u+1]].length)===d[$[u+1]]?(c=u+4+$[u+2],u+=4):(c=u+4+$[u+2]+$[u+3],u+=4+$[u+2]);break;case 19:s.push(c),a.push(u+4+$[u+2]+$[u+3]),e.substr(v,d[$[u+1]].length).toLowerCase()===d[$[u+1]]?(c=u+4+$[u+2],u+=4):(c=u+4+$[u+2]+$[u+3],u+=4+$[u+2]);break;case 20:s.push(c),a.push(u+4+$[u+2]+$[u+3]),d[$[u+1]].test(e.charAt(v))?(c=u+4+$[u+2],u+=4):(c=u+4+$[u+2]+$[u+3],u+=4+$[u+2]);break;case 21:i.push(e.substr(v,$[u+1])),v+=$[u+1],u+=2;break;case 22:i.push(d[$[u+1]]),v+=d[$[u+1]].length,u+=2;break;case 23:i.push(b),0===E&&o(d[$[u+1]]),u+=2;break;case 24:m=i[i.length-1-$[u+1]],u+=2;break;case 25:m=v,u++;break;case 26:for(n=$.slice(u+4,u+4+$[u+3]),t=0;t<$[u+3];t++)n[t]=i[i.length-1-n[t]];i.splice(i.length-$[u+2],$[u+2],d[$[u+1]].apply(null,n)),u+=4+$[u+3];break;case 27:i.push(l($[u+1])),u+=2;break;case 28:E++,u++;break;case 29:E--,u++;break;default:throw new Error("Invalid opcode: "+$[u]+".")}if(!(s.length>0))break;c=s.pop(),u=a.pop()}return K[p]={nextPos:v,result:i[0]},i[0]}function f(e){if("string"==typeof e)return e;var r="";for(var n in e)r+=f(e[n]);return r}function h(e){if("string"==typeof e)return e;var r=[];for(var n in e)r.push(h(e[n]));return r}n=void 0!==n?n:{};var g,b={},k={text:0},x=0,d=[function(e){return h(e)},function(e){return e},function(e){return["cmavo",f(e)]},function(e){return["gismu",f(e)]},function(e){return["lujvo",f(e)]},function(e){return["fu'ivla",f(e)]},function(e){return["cmevla",f(e)]},function(e){return[f(e),"-"]},function(e){return[f(e)]},function(e,r){return[f(e),"-",f(r)]},function(e){return[f(e),""]},function(e){return[f(e),""]},/^[a]/,t(["a"],!1,!1),/^[aeo]/,t(["a","e","o"],!1,!1),/^[aeiou]/,t(["a","e","i","o","u"],!1,!1),/^[i]/,t(["i"],!1,!1),/^[u]/,t(["u"],!1,!1),/^[y]/,t(["y"],!1,!1),/^[i\u0269]/,t(["i","ɩ"],!1,!1),/^[uw]/,t(["u","w"],!1,!1),function(){return["u",""]},/^[l]/,t(["l"],!1,!1),/^[m]/,t(["m"],!1,!1),/^[n]/,t(["n"],!1,!1),/^[r]/,t(["r"],!1,!1),/^[pfbgvkx]/,t(["p","f","b","g","v","k","x"],!1,!1),/^[d]/,t(["d"],!1,!1),/^[jz]/,t(["j","z"],!1,!1),/^[cs]/,t(["c","s"],!1,!1),/^[x]/,t(["x"],!1,!1),/^[t]/,t(["t"],!1,!1),/^[,']/,t([",","'"],!1,!1),/^[}]/,t(["}"],!1,!1),$(),/^[^a-zA-Z,']/,t([["a","z"],["A","Z"],",","'"],!0,!1),function(e){return["drata",f(e)]},/^[^ ]/,t([" "],!0,!1)],F=[p("%$;!0#*;!&/' 8!: !! )"),p("%;\"/' 8!:!!! )"),p(";_.î &;#.è &%;'/' 8!:\"!! ).Ö &%;$/' 8!:#!! ).Ä &%%%<;$=.##&&!&'#/#%<;&=.##&&!&'#/{$%<;'=.##&&!&'#/f$%<%;6/>#;\\/5$;K/,$;D/#$+$)($'#(#'#(\"'#&'#=.##&&!&'#/,$;(/#$+%)(%'#($'#(#'#(\"'#&'#/' 8!:$!! )./ &%;&/' 8!:%!! )"),p("%%%<;,=/##&'!&&#/N#$;@/&#0#*;@&&&#/8$%<;^=/##&'!&&#/#$+#)(#'#(\"'#&'#.# &;,/' 8!:&!! )"),p("%;</k#%<;?=/##&'!&&#/V$%<;>=/##&'!&&#/A$;H/8$%<;]=/##&'!&&#/#$+%)(%'#($'#(#'#(\"'#&'#"),p("%;+/Q#;A/H$%<;?=/##&'!&&#/3$$;B0#*;B&/#$+$)($'#(#'#(\"'#&'#"),p("%;%/,#;>/#$+\")(\"'#&'#"),p("%%<;#=.##&&!&'#/Ų#%<%;4/X#%<;?=.##&&!&'#/C$;K/:$;\\.\" &\"/,$;(/#$+%)(%'#($'#(#'#(\"'#&'#.T &%;4/J#%<;?=/##&'!&&#/5$;K/,$;:/#$+$)($'#(#'#(\"'#&'#=.##&&!&'#/ç$%%<;\\=.##&&!&'#/ #%<%;P/9#$;P/&#0#*;P&&&#/#$+\")(\"'#&'#=.##&&!&'#/k$;D/b$$%;E/,#;\\/#$+\")(\"'#&'#06*%;E/,#;\\/#$+\")(\"'#&'#&/,$;E/#$+%)(%'#($'#(#'#(\"'#&'#.0 &$;K/&#0#*;K&&&#/8$%<;]=/##&'!&&#/#$+$)($'#(#'#(\"'#&'#"),p("%$%;3.c &;..] &;0.W &%%<;)=.##&&!&'#/A#;1/8$%<;)=.##&&!&'#/#$+#)(#'#(\"'#&'#/' 8!:'!! )0u*%;3.c &;..] &;0.W &%%<;)=.##&&!&'#/A#;1/8$%<;)=.##&&!&'#/#$+#)(#'#(\"'#&'#/' 8!:'!! )&/#%;&.# &;9/' 8!:(!! ).m &%;2.N &;-.H &;/.B &%;7/8#%<;?=/##&'!&&#/#$+\")(\"'#&'#/2#;:/)$8\":)\"\"! )(\"'#&'#/#$+\")(\"'#&'#"),p(";&.) &;..# &;-"),p("%$;10#*;1&/â#;9.Ó &%;7/V#%<;?=/##&'!&&#/A$%<;K=.##&&!&'#/,$;:/#$+$)($'#(#'#(\"'#&'#. &;0. &;/. &%%;7/M#%<;?=/##&'!&&#/8$%<;K=.##&&!&'#/#$+#)(#'#(\"'#&'#.\" &\"/5#;N/,$;K/#$+#)(#'#(\"'#&'#.) &;3.# &;2/#$+\")(\"'#&'#"),p("%%<;*=.##&&!&'#/¯#%<;'=.##&&!&'#/$%<%%<;*=.##&&!&'#/5#;P/,$;*/#$+#)(#'#(\"'#&'#=.##&&!&'#/]$%<;\\=.##&&!&'#/H$%<;D=/##&'!&&#/3$$;;0#*;;&/#$+&)(&'#(%'#($'#(#'#(\"'#&'#"),p("%%<;\\=.##&&!&'#/³#$;E.N &;F.H &;\\.B &%;P/8#%<;^=.##&&!&'#/#$+\")(\"'#&'#0T*;E.N &;F.H &;\\.B &%;P/8#%<;^=.##&&!&'#/#$+\")(\"'#&'#&/A$;P/8$%<;^=/##&'!&&#/#$+$)($'#(#'#(\"'#&'#"),p("%;%/:#;\\/1$;K/($8#:*#!\")(#'#(\"'#&'#.N &%%;%/,#;D/#$+\")(\"'#&'#/1#;K/($8\":+\"!!)(\"'#&'#"),p("%%<;;=/##&'!&&#/C#;+/:$;\\/1$;K/($8$:*$!\")($'#(#'#(\"'#&'#.\\ &%%;+/,#;D/#$+\")(\"'#&'#/?#;K/6$;\\.\" &\"/($8#:+#!\")(#'#(\"'#&'#"),p("%;<.# &;4/F#%<;?=/##&'!&&#/1$;K/($8#:+#!\")(#'#(\"'#&'#"),p("%;<.# &;4/T#%<;?=.##&&!&'#/?$;K/6$;\\.\" &\"/($8$:+$!#)($'#(#'#(\"'#&'#"),p("%%<;0=.##&&!&'#/ª#%<;/=.##&&!&'#/$%<;3=.##&&!&'#/$%<;2=.##&&!&'#/k$;7/b$%<;?=.##&&!&'#/M$%<;K=.##&&!&'#/8$%<;\\=.##&&!&'#/#$+()(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),p("%%;</,#;H/#$+\")(\"'#&'#.# &;7/O#%<;?=/##&'!&&#/:$;\\/1$;K/($8$:+$!#)($'#(#'#(\"'#&'#"),p("%%;</,#;H/#$+\")(\"'#&'#.# &;7/]#%<;?=.##&&!&'#/H$;\\/?$;K/6$;\\.\" &\"/($8%:+%!$)(%'#($'#(#'#(\"'#&'#"),p("%;=/,#;P/#$+\")(\"'#&'#"),p(";4.# &;6"),p("%;N/,#;H/#$+\")(\"'#&'#"),p(";5.# &;8"),p("%%;P/c#%;H/J#%<;?=.##&&!&'#/5$;\\/,$;H/#$+$)($'#(#'#(\"'#&'#.# &;G/#$+\")(\"'#&'#/z#%;U/8#%<;P=/##&'!&&#/#$+\")(\"'#&'#.B &%;T/8#%<;U=/##&'!&&#/#$+\")(\"'#&'#.\" &\"/($8\":*\"!!)(\"'#&'#"),p(";$.~ &%;=/t#%<;?=/##&'!&&#/_$;\\/V$%<;>=/##&'!&&#/A$;H/8$%<;]=/##&'!&&#/#$+&)(&'#(%'#($'#(#'#(\"'#&'#"),p("%%<;>=/##&'!&&#/Z#%;P/,#;G/#$+\")(\"'#&'#.# &;6/8$%<;]=/##&'!&&#/#$+#)(#'#(\"'#&'#"),p("%;A/8#%<;?=.##&&!&'#/#$+\")(\"'#&'#.# &;B"),p("%;5/,#;P/#$+\")(\"'#&'#"),p("%;P/,#;H/#$+\")(\"'#&'#"),p("%;D/k#%<;K=.##&&!&'#/V$;E/M$%<;#=.##&&!&'#/8$%<;]=/##&'!&&#/#$+%)(%'#($'#(#'#(\"'#&'#"),p("%$;P.# &;F0)*;P.# &;F&/Q#;\\.\" &\"/C$;K.\" &\"/5$;A/,$;^/#$+%)(%'#($'#(#'#(\"'#&'#"),p("%;D/:#;E/1$;C.\" &\"/#$+#)(#'#(\"'#&'#.# &;B"),p("%;D/O#%<;K=.##&&!&'#/:$;E/1$;C.\" &\"/#$+$)($'#(#'#(\"'#&'#"),p("%;P/A#%<;Q=/##&'!&&#/,$;C/#$+#)(#'#(\"'#&'#"),p("%%<;@=.##&&!&'#/A#;P/8$%<;@=/##&'!&&#/#$+#)(#'#(\"'#&'#.U &%;Q.\" &\"/F#;P.\" &\"/8$%<;^=/##&'!&&#/#$+#)(#'#(\"'#&'#"),p(";\\.ĺ &;F.Ĵ &%;O.ú &%%;Y/8#%<;Z=.##&&!&'#/#$+\")(\"'#&'#.N &%;X/D#%<;T.) &;R.# &;U=.##&&!&'#/#$+\")(\"'#&'#.\" &\"/#;V.s &%;[.H &;W.B &%;T/8#%<;U=.##&&!&'#/#$+\")(\"'#&'#/8#%<;R=.##&&!&'#/#$+\")(\"'#&'#.# &;S.\" &\"/7$;R.# &;U.\" &\"/#$+#)(#'#(\"'#&'#/M#%<;P=.##&&!&'#/8$%<;F=.##&&!&'#/#$+#)(#'#(\"'#&'#"),p(";H.H &;G.B &%;K/8#%<;E=.##&&!&'#/#$+\")(\"'#&'#"),p("%;L.# &;M/M#%<;E=/##&'!&&#/8$%<;F=.##&&!&'#/#$+#)(#'#(\"'#&'#"),p("%%4,\"\"5!7-/A#;M/8$%<;J=.##&&!&'#/#$+#)(#'#(\"'#&'#.Q &%4.\"\"5!7//A#;L/8$%<;I=.##&&!&'#/#$+#)(#'#(\"'#&'#/8#%<;E=.##&&!&'#/#$+\")(\"'#&'#"),p('%40""5!71/8#%<;E=.##&&!&\'#/#$+")("\'#&\'#'),p('42""5!73'),p('44""5!75'),p("%46\"\"5!77/W#%<%%<;K=.##&&!&'#/,#;E/#$+\")(\"'#&'#=.##&&!&'#/#$+\")(\"'#&'#"),p('48""5!79'),p('%4:""5!7;/& 8!:<! )'),p("%%<;D=/##&'!&&#/J#;P/A$;P/8$%<;P=.##&&!&'#/#$+$)($'#(#'#(\"'#&'#"),p("%;[/,#;Y/#$+\")(\"'#&'#.6 &%;W/,#;X/#$+\")(\"'#&'#"),p(";V.; &;W.5 &;X./ &;Y.) &;[.# &;Q"),p(";R./ &;S.) &;T.# &;U"),p('%4=""5!7>/8#%<;F=.##&&!&\'#/#$+")("\'#&\'#'),p('%4?""5!7@/8#%<;F=.##&&!&\'#/#$+")("\'#&\'#'),p("%4A\"\"5!7B/M#%<;F=.##&&!&'#/8$%<;O=.##&&!&'#/#$+#)(#'#(\"'#&'#"),p('%4C""5!7D/8#%<;F=.##&&!&\'#/#$+")("\'#&\'#'),p('%4E""5!7F/8#%<;F=.##&&!&\'#/#$+")("\'#&\'#'),p('%4G""5!7H/8#%<;F=.##&&!&\'#/#$+")("\'#&\'#'),p('%4I""5!7J/8#%<;F=.##&&!&\'#/#$+")("\'#&\'#'),p('%4K""5!7L/8#%<;F=.##&&!&\'#/#$+")("\'#&\'#'),p('%4M""5!7N/8#%<;F=.##&&!&\'#/#$+")("\'#&\'#'),p('%4O""5!7P/8#%<;F=.##&&!&\'#/#$+")("\'#&\'#'),p('%4Q""5!7R/8#%<;E=/##&\'!&&#/#$+")("\'#&\'#'),p(';^.N &%%<;E=.##&&!&\'#/,#;"/#$+")("\'#&\'#.) &4S""5!7T'),p(';_.4 &%<1""5!7U=.##&&!&\'#'),p('%$4V""5!7W/,#0)*4V""5!7W&&&#/\' 8!:X!! )'),p('$4Y""5!7Z/,#0)*4Y""5!7Z&&&#')],v=0,m=0,A=[{line:1,column:1}],P=0,y=[],E=0,K={};if("startRule"in n){if(!(n.startRule in k))throw new Error("Can't start parsing from rule \""+n.startRule+'".');x=k[n.startRule]}if(g=l(x),g!==b&&v===e.length)return g;throw g!==b&&v<e.length&&o(u()),i(y,P<e.length?e.charAt(P):null,P<e.length?s(P,P+1):s(P,P))}return e(r,Error),r.buildMessage=function(e,r){function n(e){return e.charCodeAt(0).toString(16).toUpperCase()}function t(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(e){return"\\x0"+n(e)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(e){return"\\x"+n(e)})}function $(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(e){return"\\x0"+n(e)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(e){return"\\x"+n(e)})}function u(e){return s[e.type](e)}function a(e){var r,n,t=new Array(e.length);for(r=0;r<e.length;r++)t[r]=u(e[r]);if(t.sort(),t.length>0){for(r=1,n=1;r<t.length;r++)t[r-1]!==t[r]&&(t[n]=t[r],n++);t.length=n}switch(t.length){case 1:return t[0];case 2:return t[0]+" or "+t[1];default:return t.slice(0,-1).join(", ")+", or "+t[t.length-1]}}function c(e){return e?'"'+t(e)+'"':"end of input"}var s={literal:function(e){return'"'+t(e.text)+'"'},"class":function(e){var r,n="";for(r=0;r<e.parts.length;r++)n+=e.parts[r]instanceof Array?$(e.parts[r][0])+"-"+$(e.parts[r][1]):$(e.parts[r]);return"["+(e.inverted?"^":"")+n+"]"},any:function(e){return"any character"},end:function(e){return"end of input"},other:function(e){return e.description}};return"Expected "+a(e)+" but "+c(r)+" found."},{SyntaxError:r,parse:n}}();

var ma_klesi_lo_valsi = function(str) {
  var j = ['', ''];
  if (!window.xuzganalojudri || str.search(/[^aeiouyAEIOY]'/) > -1)
    return j;
  try {
    j = cmaxes.parse(str.toLowerCase().replace(/,/g, '')).toString().split(",");
    if (str.indexOf(' zei ') > -1)
      return ['zei-lujvo', str];
    }
  catch (e) {}
  if (j.length === 2)
    return [j[0], ''];
  if (j.length > 2 && j.filter(function(el, index) {
    return index % 2 === 0;
  }).toString().match(/^cmavo(,cmavo)+$/)) {
    return [
      'cmavo compound',
      j.filter(function(el, index) {
        return index % 2 === 1;
      }).join(" ")
    ];
  }
  return j;
};

function ma_ve_lujvo(a) {
  if (!window.xuzganalojudri)
    return;
  if (a.indexOf(' zei ') > -1)
    return ["@"].concat(a.split(" "));
  var t;
  try {
    t = cmaxes.parse(a).toString().split(",");
  } catch (err) {
    return;
  }
  if (t[0] !== 'lujvo' || t.length !== 2)
    return;
  return t[1].split("-");
}

var rafsi = {};
for (var cmima in sorcu[bau]) {
  var c = sorcu[bau][cmima];
  var i = (c["r"] || []).length;
  while (i--) {
    rafsi[(c["r"][i])] = c;
    rafsi[(c["r"][i])]["w"] = cmima;
  }
  if (c["t"] === "gismu" || c["t"] === "fu'ivla") {
    rafsi[cmima] = c;
    rafsi[cmima]["w"] = cmima;
  }
}

function setca_lotcila(doc) {
  if (!doc.t || doc.t === '') {
    if (window.muplis || !window.xuzganalojudri) {
      doc.t = '';
    } else {
      doc.t = ma_klesi_lo_valsi(doc.w)[0];
    }
  }
  return doc;
}

window.storecache = {};
for (var i in sorcu[bau]) {
  window.storecache[i] = i + ";" + Object.keys(sorcu[bau][i]).map(function(n) {
    return sorcu[bau][i][n];
  }).join(";").toLowerCase();
  window.storecache[i] += ";" + window.storecache[i].replace(/h/g, "'");
}

function sisku(query, callback) {
  var decomposed = false;
  if (query.length === 0)
    return;
  var searchId = ++searchIdCounter;
  var secupra_vreji = [];
  var query_apos = query.replace(/h/g, "'").toLowerCase();
  var queryDecomposition = decompose(query_apos);
  var kij = [];
  var ki = [];
  var mapti_vreji = [];

  function decompose(a) {
    return window.xuzganalojudri
      ? a.replace(/ zei /g, '_zei_').split(" ").map(function(b) {
        return b.replace(/_zei_/g, ' zei ');
      })
      : a.split(" ");
  }

  function julne_setca_lotcila(a) {
    return a.reduce(function(b, n) {
      if (n)
        b.push(setca_lotcila(n));
      return b;
    }, []);
  }

  function sohivalsi(queryDecomposition, e, lu) {
    var kd = [];
    var o;
    for (var s = 0; s < queryDecomposition.length; s++) {
      for (var c = queryDecomposition.length - 1; c >= s; c--) {
        o = queryDecomposition.slice(s, c + 1).join(" ");
        if (!e || (e === 1 && o !== lu)) {
          kd = shortget(o, kd);
        }
      }
    }
    return kd;
  }

  function jmina_ro_cmima_be_lehivalsi(query_string, thisTitle, doc) {
    var luj = ma_ve_lujvo(query_string);
    if (!luj)
      return [];
    var kim = [];
    if (luj[0] === "@") {
      luj.shift();
      kim = luj.slice();
      for (var def in sorcu[bau]) {
        for (var j = 0; j < luj.length; j++) {
          if (def === luj[j]) {
            kim[j] = sorcu[bau][def];
            kim[j]["w"] = def;
          }
        }
      }
    } else {
      for (var ji in luj) {
        var rf = rafsi[luj[ji]];
        if (rf) {
          kim.push(rf);
        } else {
          kim = kim.concat({
            t: "",
            d: window.nasezvafahi,
            w: luj[ji],
            r: [luj[ji]]
          });
        }
      }
    }
    return [
      {
        t: window.bangudecomp,
        w: thisTitle
          ? ''
          : query,
        rafsiDocuments: julne_setca_lotcila(kim)
      }
    ];
  }

  function sortthem(mapti_vreji, multi) {
    var ui = [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ];
    for (var i = 0; i < mapti_vreji.length; i++) {
      var doc = setca_lotcila(mapti_vreji[i]); //todo: optimize for phrases
      if (doc) {
        if ((doc.w === query) || (doc.w === query_apos)) {
          doc.rafsiDocuments = JSON.parse(JSON.stringify(julne_setca_lotcila(sohivalsi(decompose(doc.w))))).filter(i => i.w !== doc.w);
          decomposed = true;
          if (doc.rafsiDocuments.length===0){
            doc.rafsiDocuments = jmina_ro_cmima_be_lehivalsi(doc.w)[0].rafsiDocuments;
          }
          ui[0].push(doc);
        } else if (doc.g && doc.g.search("^" + query + "(;|$)") === 0) {
          ui[1].push(doc);
        } else if ((doc.r || [''])[0].search("\\b" + query + "\\b") >= 0) {
          ui[5].push(doc);
        } else if (doc.w.search("(^| )(" + query_apos + "|" + query + ")( |$)") >= 0) {
          ui[2].push(doc);
        } else if ((doc.s || '') === query) {
          ui[3].push(doc);
        } else if ((doc.g || '').search("\\b" + query + "\\b") >= 0 || doc.w.search("\\b(" + query_apos + "|" + query + ")") >= 0 || doc.w.search("(" + query_apos + "|" + query + ")\\b") >= 0) {
          ui[4].push(doc);
        } else if ((doc.d || '').toLowerCase().search("^" + query + "\\b") >= 0) {
          ui[8].push(doc);
        } else if ((doc.d || '').toLowerCase().search("\\b" + query + "\\b") >= 0) {
          ui[6].push(doc);
        } else {
          ui[7].push(doc);
        }
      }
    }
    // if (ui[0].length === 0 && !multi) {
      // secupra_vreji = jmina_ro_cmima_be_lehivalsi(query) || [];
    // }
    var sor = function(ar) {
      if (ar.length === 0)
        return ar;
      var gism = [];
      var cmav = [];
      for (c = 0; c < ar.length; c++) {
        if (ar[c].t === 'gismu') {
          gism.push(ar.splice(c, 1)[0]);
        }
      }
      for (c = 0; c < ar.length; c++) {
        if (ar[c].t === 'cmavo') {
          cmav.push(ar.splice(c, 1)[0]);
        }
      }
      return gism.sort(sortMultiDimensional).concat(cmav.sort(sortMultiDimensional)).concat(ar.sort(sortMultiDimensional));
    };
    var sortMultiDimensional = function(a, b) {
      return (((a.d || '').length < (b.d || '').length)
        ? -1
        : (((a.d || '').length > (b.d || '').length)
          ? 1
          : 0));
    };
    // secupra_vreji = sor(secupra_vreji);
    ui = ui.map(function(i){return sor(i);});
    var firstMatches = secupra_vreji.concat(ui[0]).concat(ui[1]);
    var secondMatches = ui[5].concat(ui[2]).concat(ui[3]).concat(ui[4]).concat(ui[8]).concat(ui[6]).concat(ui[7]);
    if (firstMatches && (firstMatches.w === query_apos)) {
      for (var a = 1; a < firstMatches.length; a++) {
        if (firstMatches[a].l && (firstMatches[a].d === "{" + query_apos + "}")) {
          firstMatches.splice(a, 1);
          a = a - 1;
        }
      }
    }
    return [firstMatches.concat(secondMatches), firstMatches, secondMatches];
  }

  function shortget(a, ki, shi) {
    var isdef = Object.keys(sorcu[bau]).reduce(function(b, n) {
      if ((n.toLowerCase() === a.toLowerCase()) || (sorcu[bau][n]["d"].toLowerCase() === "{" + a.toLowerCase() + "}")) {
        var c = sorcu[bau][n];
        c["w"] = n;
        b.push(c);
      }
      return b;
    }, []);
    if (isdef && isdef.length > 0) {
      ki = ki.concat(isdef);
    } else {
      if (!shi) {
        if (a.replace(/ zei /g, '-zei-').split(" ").length === 1) {
          var ye = ma_klesi_lo_valsi(a);
          if (ye[0] === 'cmavo compound' || ye[0] === 'zei-lujvo') {
            ye = ye[1].split(" ");
            for (var jj in ye) {
              ki = shortget(ye[jj], ki, 2);
            }
          } else if (ye[0] !== '') {
            var ye = ye.filter(function(element, index, array) {
              return (index % 2 !== 0);
            });
            for (var jj in ye) {
              ki = shortget(ye[jj].replace(/-/g,''), ki, 2);
            }
          }
        } else {
          var luj = ma_ve_lujvo(a);
          if (((luj || [])[0] || '') === "@") {
            luj.shift();
            var kim = [];
            kim = luj.slice();
            for (var def in sorcu[bau]) {
              for (var j = 0; j < luj.length; j++) {
                if (def === luj[j]) {
                  kim[j] = sorcu[bau][def];
                  kim[j]["w"] = def;
                }
              }
            }
            ki.concat(kim);
          } else if (luj) {
            for (var ji in luj) {
              ki.push(rafsi[luj[ji]]);
            }
          }
        }
      } else {
        ki = ki.concat({t: "", d: window.nasezvafahi, w: a});
      }
    }
    return ki;
  }

  function cnanosisku(mapti_vreji, multi) {
    if (searchId !== searchIdCounter)
      return;
    for (var n in sorcu[bau]) {
      if (window.storecache[n].indexOf(query.toLowerCase()) >= 0) {
        var c = sorcu[bau][n];
        c["w"] = n;
        mapti_vreji.push(c);
      }
    }
    var allMatches = sortthem(mapti_vreji, multi);
    if (multi)
      return allMatches[0];
    if (allMatches[0].length === 0)
      allMatches[0] = jmina_ro_cmima_be_lehivalsi(query) || [];
    if (allMatches[0].length === 0 || allMatches[0][0].w !== query_apos) {
      var ty = julne_setca_lotcila(shortget(query_apos, []));
      if (ty.length <= 1) return ty.concat(allMatches[0]);
      return allMatches[1].concat([
        {
          t: window.bangudecomp,
          w: query,
          rafsiDocuments: ty
        }
      ]).concat(allMatches[2]);
    }
    return allMatches[0];
  }

  if ((query.indexOf('^') === 0 || query.slice(-1) === '$')) {
    secupra_vreji = julne_setca_lotcila(sortthem(Object.keys(sorcu[bau]).reduce(function(b, n) {
      if ((n.match(query.toLowerCase()) || []).length > 0) {
        var c = sorcu[bau][n];
        c["w"] = n;
        b.push(c);
      }
      return b;
    }, []).splice(0, 100))[0]);
  } else if ((query.indexOf('@') === 0 || query.slice(-1) === '@')) {
    secupra_vreji = siskurimni(query.replace(/^@+/, '').replace(/@+$/, ''));
  } else if (!window.muplis && queryDecomposition.length > 1) {
    secupra_vreji = cnanosisku(mapti_vreji, true);
    if (!decomposed) {
      secupra_vreji.push({
        t: window.bangudecomp,
        w: query,
        rafsiDocuments: julne_setca_lotcila(sohivalsi(queryDecomposition))
      });
    }
    decomposed = false;
  } else {
    secupra_vreji = cnanosisku(mapti_vreji);
  }
  callback(secupra_vreji);
}

function siskurimni(query) {
  if (query.length === 0)
    return;
  var searchId = ++searchIdCounter;
  var rimni = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ];
  var query_apos,
    queryF,
    queryR;
  function cupra_lo_porsi(a) {
    for (var i = 0; i < a.length; i++) {
      var doc = setca_lotcila(a[i]); //todo: optimize for phrases
      if (!doc)
        continue;
      var docw = krulermorna(doc.w).replace(/([aeiouḁąęǫ])/g, '$1-').split("-").slice(-3);
      if (queryR && (docw[0].slice(-1) !== queryR[0].slice(-1)))
        continue;
      var right = docw[1].slice(-1);
      var reversal = (docw[1].slice(-3, -1) === queryF[1].slice(-3, -1).split('').reverse().join(''));
      var left = queryF[1].slice(-1);
      var sli = false;
      if ((left === 'a' && right.search('[eao]') >= 0) || (left === 'e' && right.search('[iea]') >= 0) || (left === 'i' && right.search('[ie]') >= 0) || (left === 'o' && right.search('[aou]') >= 0) || (left === 'u' && right.search('[aou]') >= 0))
        sli = true;
      if (krulermorna(doc.w) === query) {
        rimni[0].push(doc);
        continue;
      } else if (queryR[2]) {
        if ((docw[0].match(queryR[0]) || []).length > 0 && (docw[1].match(queryR[1]) || []).length > 0 && (left === right) && docw[2] === queryR[2]) {
          rimni[1].push(doc);
        } else if ((docw[0].match(queryR[0]) || []).length > 0 && (docw[1].match(queryR[1]) || []).length > 0 && sli && docw[2] === queryR[2]) {
          rimni[2].push(doc);
        } else if ((docw[1].match(regexify(queryR[2])) || []).length > 0 && (left === right) && docw[2] === queryR[2]) {
          rimni[3].push(doc);
        } else if ((docw[1].match(regexify(queryR[2])) || []).length > 0 && sli && docw[2] === queryR[2]) {
          rimni[4].push(doc);
        } else if ((docw[0].match(queryR[0]) || []).length > 0 && sli && reversal && docw[2] === queryR[2]) {
          rimni[5].push(doc);
        } else if ((docw[0].match(queryR[0]) || []).length > 0 && (docw[1].match(queryR[1]) || []).length > 0 && docw[2] === queryR[2]) {
          rimni[6].push(doc);
        }
      } else if (queryR[1] && (docw[0].match(queryR[0]) || []).length > 0 && (docw[1].match(queryR[1]) || []).length > 0) {
        rimni[7].push(doc);
      } else {
        rimni[8].push(doc);
      }
    }
    var sortMultiDimensional = function(a, b) {
      return (((a.d || '').length < (b.d || '').length)
        ? -1
        : (((a.d || '').length > (b.d || '').length)
          ? 1
          : 0));
    };
    var sor = function(ar) {
      if (ar.length === 0)
        return [];
      var gism = [];
      var expgism = [];
      var cmav = [];
      var expcmav = [];
      var elses = [];
      for (c = 0; c < ar.length; c++) {
        if (ar[c].t === 'gismu') {
          gism.push(ar[c]);
        } else if (ar[c].t === 'experimental gismu') {
          expgism.push(ar[c]);
        } else if (ar[c].t === 'cmavo') {
          cmav.push(ar[c]);
        } else if (ar[c].t === 'experimental cmavo') {
          expcmav.push(ar[c]);
        } else {
          elses.push(ar[c]);
        }
      }
      return gism.sort(sortMultiDimensional).concat(expgism.sort(sortMultiDimensional)).concat(cmav.sort(sortMultiDimensional)).concat(expcmav.sort(sortMultiDimensional)).concat(elses.sort(sortMultiDimensional));
    };

    return rimni.reduce(function(list, x) {
      return list.concat(sor(x))
    }, []);
  };

  var krulermorna = function(t) {
    return "." + t.replace(/\./g, "").replace(/h/g, "'").toLowerCase().replace(/([aeiou\.])u([aeiou])/g, '$1w$2').replace(/([aeiou\.])i([aeiou])/g, '$1ɩ$2').replace(/au/g, 'ḁ').replace(/ai/g, 'ą').replace(/ei/g, 'ę').replace(/oi/g, 'ǫ').replace(/\./g, '');
  };

  var regexify = function(t) {
    return t.replace(/[lmnr]/g, '[lmnr]').replace(/[ɩw]/g, '[ɩw]').replace(/[pb]/g, '[pb]').replace(/[fv]/g, '[fv]').replace(/[td]/g, '[td]').replace(/[sz]/g, '[sz]').replace(/[cj]/g, '[cj]').replace(/[kg]/g, '[kg]').replace(/x/g, '[xk]');
  };

  query = krulermorna(query);
  queryR = query.replace(/([aeiouḁąęǫ])/g, '$1-').split("-").slice(-3);
  queryF = queryR.slice();
  if (queryR.length >= 2) queryR[1] = queryR[1].replace(/[aeiouḁąęǫ]/, '[aeiouḁąęǫ]');
  var r = /.*([aeiouḁąęǫ])/.exec(queryR[0]);
  if (r === null)
    return [];
  queryR[0] = r[1];
  if (queryR.length === 2) {
    r=Object.keys(sorcu[bau]).reduce(function(b, n) {
      var queryRn = krulermorna(n).replace(/([aeiouḁąęǫ])/g, '$1-').split("-").slice(-3);
      var Is = queryRn.length === 2
        ? (queryRn[0].split('').slice(-1)[0] === queryR[0].split('').slice(-1)[0])
        : false;
      if (Is) {
        var c = sorcu[bau][n];
        c["w"] = n;
        c = setca_lotcila(c);
        if (c)
          b.push(c);
        }
      return b;
    }, []);
  } else {
    query_apos = regexify(queryR.join(""));
    r=Object.keys(sorcu[bau]).reduce(function(b, n) {
      if ((krulermorna(n).match(query_apos.toLowerCase() + "$") || []).length > 0) {
        var c = sorcu[bau][n];
        c["w"] = n;
        b.push(c);
      }
      return b;
    }, []);
  }
  return cupra_lo_porsi(r);
}
