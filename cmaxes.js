var camxes=function(){function l(l){return'"'+l.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E-\x1F\x80-\uFFFF]/g,escape)+'"'}var n={parse:function(n,u){function r(l){_l>Pl||(Pl>_l&&(_l=Pl,pl=[]),pl.push(l))}function t(){var l="text@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,s,a;if(s=Pl,a=Pl,u=ol(),u=null!==u?u:"",null!==u){for(r=[],t=e();null!==t;)r.push(t),t=e();null!==r?u=[u,r]:(u=null,Pl=a)}else u=null,Pl=a;return null!==u&&(u=function(l,n){return vl(n)}(s,u[1])),null===u&&(Pl=s),yl[l]={nextPos:Pl,result:u},u}function e(){var l="any_word@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e;return t=Pl,e=Pl,u=s(),null!==u?(r=ol(),r=null!==r?r:"",null!==r?u=[u,r]:(u=null,Pl=e)):(u=null,Pl=e),null!==u&&(u=function(l,n){return n}(t,u[0])),null===u&&(Pl=t),yl[l]={nextPos:Pl,result:u},u}function s(){var l="lojban_word@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s,v,x,P,h,_,p;return u=a(),null===u&&(P=Pl,u=f(),null!==u&&(u=function(l,n){return["cmavo",cl(n)]}(P,u)),null===u&&(Pl=P),null===u&&(P=Pl,u=o(),null!==u&&(u=function(l,n){return["gismu",cl(n)]}(P,u)),null===u&&(Pl=P),null===u&&(P=Pl,h=Pl,_=Pl,hl++,u=o(),hl--,null===u?u="":(u=null,Pl=_),null!==u?(_=Pl,hl++,r=i(),hl--,null===r?r="":(r=null,Pl=_),null!==r?(_=Pl,hl++,t=f(),hl--,null===t?t="":(t=null,Pl=_),null!==t?(_=Pl,hl++,p=Pl,e=V(),null!==e?(s=sl(),null!==s?(v=Q(),null!==v?(x=N(),null!==x?e=[e,s,v,x]:(e=null,Pl=p)):(e=null,Pl=p)):(e=null,Pl=p)):(e=null,Pl=p),hl--,null===e?e="":(e=null,Pl=_),null!==e?(s=c(),null!==s?u=[u,r,t,e,s]:(u=null,Pl=h)):(u=null,Pl=h)):(u=null,Pl=h)):(u=null,Pl=h)):(u=null,Pl=h),null!==u&&(u=function(l,n){return["lujvo",cl(n)]}(P,u)),null===u&&(Pl=P),null===u&&(P=Pl,u=i(),null!==u&&(u=function(l,n){return["fu'ivla",cl(n)]}(P,u)),null===u&&(Pl=P))))),yl[l]={nextPos:Pl,result:u},u}function a(){var l="cmevla@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s,a;if(e=Pl,s=Pl,a=Pl,hl++,u=h(),hl--,null!==u?(u="",Pl=a):u=null,null!==u){for(r=[],t=O();null!==t;)r.push(t),t=O();null!==r?(a=Pl,hl++,t=ol(),hl--,null!==t?(t="",Pl=a):t=null,null!==t?u=[u,r,t]:(u=null,Pl=s)):(u=null,Pl=s)}else u=null,Pl=s;return null===u&&(u=h()),null!==u&&(u=function(l,n){return["cmevla",cl(n)]}(e,u)),null===u&&(Pl=e),yl[l]={nextPos:Pl,result:u},u}function o(){var l="gismu@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s,a,o;return a=Pl,u=z(),null!==u?(o=Pl,hl++,r=M(),hl--,null!==r?(r="",Pl=o):r=null,null!==r?(o=Pl,hl++,t=F(),hl--,null!==t?(t="",Pl=o):t=null,null!==t?(e=H(),null!==e?(o=Pl,hl++,s=al(),hl--,null!==s?(s="",Pl=o):s=null,null!==s?u=[u,r,t,e,s]:(u=null,Pl=a)):(u=null,Pl=a)):(u=null,Pl=a)):(u=null,Pl=a)):(u=null,Pl=a),yl[l]={nextPos:Pl,result:u},u}function i(){var l="fuhivla@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s,a,o;if(a=Pl,u=P(),null!==u)if(r=B(),null!==r)if(o=Pl,hl++,t=M(),hl--,null!==t?(t="",Pl=o):t=null,null!==t){for(e=[],s=I();null!==s;)e.push(s),s=I();null!==e?(s=F(),null!==s?u=[u,r,t,e,s]:(u=null,Pl=a)):(u=null,Pl=a)}else u=null,Pl=a;else u=null,Pl=a;else u=null,Pl=a;return yl[l]={nextPos:Pl,result:u},u}function f(){var l="cmavo@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s,o,i,f,v,x,P,h;if(v=Pl,x=Pl,hl++,u=a(),hl--,null===u?u="":(u=null,Pl=x),null!==u)if(x=Pl,hl++,P=Pl,r=C(),null!==r?(h=Pl,hl++,t=M(),hl--,null===t?t="":(t=null,Pl=h),null!==t?(e=Q(),null!==e?(s=sl(),s=null!==s?s:"",null!==s?(o=c(),null!==o?r=[r,t,e,s,o]:(r=null,Pl=P)):(r=null,Pl=P)):(r=null,Pl=P)):(r=null,Pl=P)):(r=null,Pl=P),null===r&&(P=Pl,r=C(),null!==r?(h=Pl,hl++,t=M(),hl--,null!==t?(t="",Pl=h):t=null,null!==t?(e=Q(),null!==e?(s=E(),null!==s?r=[r,t,e,s]:(r=null,Pl=P)):(r=null,Pl=P)):(r=null,Pl=P)):(r=null,Pl=P)),hl--,null===r?r="":(r=null,Pl=x),null!==r){if(x=Pl,P=Pl,hl++,t=sl(),hl--,null===t?t="":(t=null,Pl=P),null!==t){if(P=Pl,hl++,h=Pl,e=U(),null!==e){if(o=U(),null!==o)for(s=[];null!==o;)s.push(o),o=U();else s=null;null!==s?e=[e,s]:(e=null,Pl=h)}else e=null,Pl=h;if(hl--,null===e?e="":(e=null,Pl=P),null!==e)if(s=N(),null!==s){for(o=[],P=Pl,i=q(),null!==i?(f=sl(),null!==f?i=[i,f]:(i=null,Pl=P)):(i=null,Pl=P);null!==i;)o.push(i),P=Pl,i=q(),null!==i?(f=sl(),null!==f?i=[i,f]:(i=null,Pl=P)):(i=null,Pl=P);null!==o?(i=q(),null!==i?t=[t,e,s,o,i]:(t=null,Pl=x)):(t=null,Pl=x)}else t=null,Pl=x;else t=null,Pl=x}else t=null,Pl=x;if(null===t)if(e=Q(),null!==e)for(t=[];null!==e;)t.push(e),e=Q();else t=null;null!==t?(x=Pl,hl++,e=al(),hl--,null!==e?(e="",Pl=x):e=null,null!==e?u=[u,r,t,e]:(u=null,Pl=v)):(u=null,Pl=v)}else u=null,Pl=v;else u=null,Pl=v;return yl[l]={nextPos:Pl,result:u},u}function c(){var l="lujvo_core@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s,a,o,f,c;for(s=Pl,u=[],a=Pl,r=m(),null===r&&(r=p(),null===r&&(r=A(),null===r&&(o=Pl,f=Pl,hl++,r=v(),hl--,null===r?r="":(r=null,Pl=f),null!==r?(t=g(),null!==t?(f=Pl,hl++,e=v(),hl--,null===e?e="":(e=null,Pl=f),null!==e?r=[r,t,e]:(r=null,Pl=o)):(r=null,Pl=o)):(r=null,Pl=o)))),null!==r&&(r=function(l,n){return[cl(n),"-"]}(a,r)),null===r&&(Pl=a);null!==r;)u.push(r),a=Pl,r=m(),null===r&&(r=p(),null===r&&(r=A(),null===r&&(o=Pl,f=Pl,hl++,r=v(),hl--,null===r?r="":(r=null,Pl=f),null!==r?(t=g(),null!==t?(f=Pl,hl++,e=v(),hl--,null===e?e="":(e=null,Pl=f),null!==e?r=[r,t,e]:(r=null,Pl=o)):(r=null,Pl=o)):(r=null,Pl=o)))),null!==r&&(r=function(l,n){return[cl(n),"-"]}(a,r)),null===r&&(Pl=a);return null!==u?(a=Pl,r=i(),null===r&&(r=j()),null!==r&&(r=function(l,n){return[cl(n)]}(a,r)),null===r&&(Pl=a),null===r&&(a=Pl,o=Pl,r=d(),null===r&&(r=_(),null===r&&(r=y(),null===r&&(f=Pl,r=w(),null!==r?(c=Pl,hl++,t=M(),hl--,null!==t?(t="",Pl=c):t=null,null!==t?r=[r,t]:(r=null,Pl=f)):(r=null,Pl=f)))),null!==r?(t=E(),null!==t?r=[r,t]:(r=null,Pl=o)):(r=null,Pl=o),null!==r&&(r=function(l,n,u){return[cl(n),"-",cl(u)]}(a,r[0],r[1])),null===r&&(Pl=a)),null!==r?u=[u,r]:(u=null,Pl=s)):(u=null,Pl=s),yl[l]={nextPos:Pl,result:u},u}function v(){var l="any_fuhivla_rafsi@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u;return u=i(),null===u&&(u=p(),null===u&&(u=_())),yl[l]={nextPos:Pl,result:u},u}function x(){var l="rafsi_string@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s,a,o,i,f;for(a=Pl,u=[],r=g();null!==r;)u.push(r),r=g();return null!==u?(r=j(),null===r&&(o=Pl,r=w(),null!==r?(i=Pl,hl++,t=M(),hl--,null!==t?(t="",Pl=i):t=null,null!==t?(i=Pl,hl++,e=Q(),hl--,null===e?e="":(e=null,Pl=i),null!==e?(s=E(),null!==s?r=[r,t,e,s]:(r=null,Pl=o)):(r=null,Pl=o)):(r=null,Pl=o)):(r=null,Pl=o),null===r&&(r=A(),null===r&&(r=y(),null===r&&(o=Pl,i=Pl,r=w(),null!==r?(f=Pl,hl++,t=M(),hl--,null!==t?(t="",Pl=f):t=null,null!==t?(f=Pl,hl++,e=Q(),hl--,null===e?e="":(e=null,Pl=f),null!==e?r=[r,t,e]:(r=null,Pl=i)):(r=null,Pl=i)):(r=null,Pl=i),r=null!==r?r:"",null!==r?(t=R(),null!==t?(e=Q(),null!==e?r=[r,t,e]:(r=null,Pl=o)):(r=null,Pl=o)):(r=null,Pl=o),null===r&&(r=m(),null===r&&(r=d())))))),null!==r?u=[u,r]:(u=null,Pl=a)):(u=null,Pl=a),yl[l]={nextPos:Pl,result:u},u}function P(){var l="fuhivla_head@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s,a,o,i,c,v,P;if(i=Pl,c=Pl,hl++,u=x(),hl--,null===u?u="":(u=null,Pl=c),null!==u)if(c=Pl,hl++,r=f(),hl--,null===r?r="":(r=null,Pl=c),null!==r)if(c=Pl,hl++,v=Pl,P=Pl,hl++,t=x(),hl--,null===t?t="":(t=null,Pl=P),null!==t?(e=U(),null!==e?(s=x(),null!==s?t=[t,e,s]:(t=null,Pl=v)):(t=null,Pl=v)):(t=null,Pl=v),hl--,null===t?t="":(t=null,Pl=c),null!==t)if(c=Pl,hl++,e=sl(),hl--,null===e?e="":(e=null,Pl=c),null!==e)if(c=Pl,hl++,s=N(),hl--,null!==s?(s="",Pl=c):s=null,null!==s){for(a=[],o=k();null!==o;)a.push(o),o=k();null!==a?u=[u,r,t,e,s,a]:(u=null,Pl=i)}else u=null,Pl=i;else u=null,Pl=i;else u=null,Pl=i;else u=null,Pl=i;else u=null,Pl=i;return yl[l]={nextPos:Pl,result:u},u}function h(){var l="zifcme@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s,a,o;if(s=Pl,a=Pl,hl++,u=sl(),hl--,null===u?u="":(u=null,Pl=a),null!==u){for(r=[],t=q(),null===t&&(t=D(),null===t&&(t=sl(),null===t&&(a=Pl,t=U(),null!==t?(o=Pl,hl++,e=ol(),hl--,null===e?e="":(e=null,Pl=o),null!==e?t=[t,e]:(t=null,Pl=a)):(t=null,Pl=a))));null!==t;)r.push(t),t=q(),null===t&&(t=D(),null===t&&(t=sl(),null===t&&(a=Pl,t=U(),null!==t?(o=Pl,hl++,e=ol(),hl--,null===e?e="":(e=null,Pl=o),null!==e?t=[t,e]:(t=null,Pl=a)):(t=null,Pl=a))));null!==r?(t=U(),null!==t?(a=Pl,hl++,e=ol(),hl--,null!==e?(e="",Pl=a):e=null,null!==e?u=[u,r,t,e]:(u=null,Pl=s)):(u=null,Pl=s)):(u=null,Pl=s)}else u=null,Pl=s;return yl[l]={nextPos:Pl,result:u},u}function _(){var l="stressed_fuhivla_rafsi@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s,a,o,i;if(o=Pl,u=P(),null!==u)if(r=B(),null!==r)if(i=Pl,hl++,t=M(),hl--,null!==t?(t="",Pl=i):t=null,null!==t){for(e=[],s=I();null!==s;)e.push(s),s=I();null!==e?(s=N(),null!==s?(a=Q(),null!==a?u=[u,r,t,e,s,a]:(u=null,Pl=o)):(u=null,Pl=o)):(u=null,Pl=o)}else u=null,Pl=o;else u=null,Pl=o;else u=null,Pl=o;return yl[l]={nextPos:Pl,result:u},u}function p(){var l="fuhivla_rafsi@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s,a,o;return a=Pl,o=Pl,hl++,u=k(),hl--,null!==u?(u="",Pl=o):u=null,null!==u?(r=P(),null!==r?(t=N(),null!==t?(e=Q(),null!==e?(s=sl(),s=null!==s?s:"",null!==s?u=[u,r,t,e,s]:(u=null,Pl=a)):(u=null,Pl=a)):(u=null,Pl=a)):(u=null,Pl=a)):(u=null,Pl=a),yl[l]={nextPos:Pl,result:u},u}function y(){var l="stressed_y_rafsi@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s;return e=Pl,u=z(),null===u&&(u=C()),null!==u?(s=Pl,hl++,r=M(),hl--,null!==r?(r="",Pl=s):r=null,null!==r?(t=Q(),null!==t?u=[u,r,t]:(u=null,Pl=e)):(u=null,Pl=e)):(u=null,Pl=e),yl[l]={nextPos:Pl,result:u},u}function A(){var l="y_rafsi@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s,a;return s=Pl,u=z(),null===u&&(u=C()),null!==u?(a=Pl,hl++,r=M(),hl--,null===r?r="":(r=null,Pl=a),null!==r?(t=Q(),null!==t?(e=sl(),e=null!==e?e:"",null!==e?u=[u,r,t,e]:(u=null,Pl=s)):(u=null,Pl=s)):(u=null,Pl=s)):(u=null,Pl=s),yl[l]={nextPos:Pl,result:u},u}function g(){var l="y_less_rafsi@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s,a,o,i,f,c;return f=Pl,c=Pl,hl++,u=A(),hl--,null===u?u="":(u=null,Pl=c),null!==u?(c=Pl,hl++,r=y(),hl--,null===r?r="":(r=null,Pl=c),null!==r?(c=Pl,hl++,t=m(),hl--,null===t?t="":(t=null,Pl=c),null!==t?(c=Pl,hl++,e=d(),hl--,null===e?e="":(e=null,Pl=c),null!==e?(s=w(),null!==s?(c=Pl,hl++,a=M(),hl--,null===a?a="":(a=null,Pl=c),null!==a?(c=Pl,hl++,o=Q(),hl--,null===o?o="":(o=null,Pl=c),null!==o?(c=Pl,hl++,i=sl(),hl--,null===i?i="":(i=null,Pl=c),null!==i?u=[u,r,t,e,s,a,o,i]:(u=null,Pl=f)):(u=null,Pl=f)):(u=null,Pl=f)):(u=null,Pl=f)):(u=null,Pl=f)):(u=null,Pl=f)):(u=null,Pl=f)):(u=null,Pl=f),yl[l]={nextPos:Pl,result:u},u}function d(){var l="stressed_hy_rafsi@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s,a;return s=Pl,a=Pl,u=z(),null!==u?(r=H(),null!==r?u=[u,r]:(u=null,Pl=a)):(u=null,Pl=a),null===u&&(u=w()),null!==u?(a=Pl,hl++,r=M(),hl--,null!==r?(r="",Pl=a):r=null,null!==r?(t=sl(),null!==t?(e=Q(),null!==e?u=[u,r,t,e]:(u=null,Pl=s)):(u=null,Pl=s)):(u=null,Pl=s)):(u=null,Pl=s),yl[l]={nextPos:Pl,result:u},u}function m(){var l="hy_rafsi@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s,a,o;return a=Pl,o=Pl,u=z(),null!==u?(r=H(),null!==r?u=[u,r]:(u=null,Pl=o)):(u=null,Pl=o),null===u&&(u=w()),null!==u?(o=Pl,hl++,r=M(),hl--,null===r?r="":(r=null,Pl=o),null!==r?(t=sl(),null!==t?(e=Q(),null!==e?(s=sl(),s=null!==s?s:"",null!==s?u=[u,r,t,e,s]:(u=null,Pl=a)):(u=null,Pl=a)):(u=null,Pl=a)):(u=null,Pl=a)):(u=null,Pl=a),yl[l]={nextPos:Pl,result:u},u}function C(){var l="CVC@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t;return t=Pl,u=S(),null!==u?(r=U(),null!==r?u=[u,r]:(u=null,Pl=t)):(u=null,Pl=t),yl[l]={nextPos:Pl,result:u},u}function b(){var l="CVC_CCV@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u;return u=C(),null===u&&(u=V()),yl[l]={nextPos:Pl,result:u},u}function V(){var l="ini_vwl@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t;return t=Pl,u=R(),null!==u?(r=H(),null!==r?u=[u,r]:(u=null,Pl=t)):(u=null,Pl=t),yl[l]={nextPos:Pl,result:u},u}function w(){var l="CVC_CCV_CVV@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s,a,o,i;return u=b(),null===u&&(a=Pl,u=U(),null!==u?(o=Pl,r=H(),null!==r?(i=Pl,hl++,t=M(),hl--,null===t?t="":(t=null,Pl=i),null!==t?(e=sl(),null!==e?(s=H(),null!==s?r=[r,t,e,s]:(r=null,Pl=o)):(r=null,Pl=o)):(r=null,Pl=o)):(r=null,Pl=o),null===r&&(r=G()),null!==r?(o=Pl,t=$(),null!==t?(i=Pl,hl++,e=U(),hl--,null!==e?(e="",Pl=i):e=null,null!==e?t=[t,e]:(t=null,Pl=o)):(t=null,Pl=o),null===t&&(o=Pl,t=Z(),null!==t?(i=Pl,hl++,e=$(),hl--,null!==e?(e="",Pl=i):e=null,null!==e?t=[t,e]:(t=null,Pl=o)):(t=null,Pl=o)),t=null!==t?t:"",null!==t?u=[u,r,t]:(u=null,Pl=a)):(u=null,Pl=a)):(u=null,Pl=a)),yl[l]={nextPos:Pl,result:u},u}function j(){var l="gismu_CVV_final_rafsi@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s,a,i,f;return u=o(),null===u&&(i=Pl,u=S(),null!==u?(f=Pl,hl++,r=M(),hl--,null!==r?(r="",Pl=f):r=null,null!==r?(t=sl(),null!==t?(f=Pl,hl++,e=F(),hl--,null!==e?(e="",Pl=f):e=null,null!==e?(s=H(),null!==s?(f=Pl,hl++,a=al(),hl--,null!==a?(a="",Pl=f):a=null,null!==a?u=[u,r,t,e,s,a]:(u=null,Pl=i)):(u=null,Pl=i)):(u=null,Pl=i)):(u=null,Pl=i)):(u=null,Pl=i)):(u=null,Pl=i)),yl[l]={nextPos:Pl,result:u},u}function E(){var l="short_final_rafsi@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s;return e=Pl,s=Pl,hl++,u=F(),hl--,null!==u?(u="",Pl=s):u=null,null!==u?(s=Pl,r=U(),null!==r?(t=G(),null!==t?r=[r,t]:(r=null,Pl=s)):(r=null,Pl=s),null===r&&(r=V()),null!==r?(s=Pl,hl++,t=al(),hl--,null!==t?(t="",Pl=s):t=null,null!==t?u=[u,r,t]:(u=null,Pl=e)):(u=null,Pl=e)):(u=null,Pl=e),yl[l]={nextPos:Pl,result:u},u}function k(){var l="unstressed_syllable@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e;return t=Pl,u=B(),null!==u?(e=Pl,hl++,r=M(),hl--,null===r?r="":(r=null,Pl=e),null!==r?u=[u,r]:(u=null,Pl=t)):(u=null,Pl=t),null===u&&(u=I()),yl[l]={nextPos:Pl,result:u},u}function z(){var l="long_rafsi@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t;return t=Pl,u=b(),null!==u?(r=U(),null!==r?u=[u,r]:(u=null,Pl=t)):(u=null,Pl=t),yl[l]={nextPos:Pl,result:u},u}function S(){var l="CV@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t;return t=Pl,u=U(),null!==u?(r=H(),null!==r?u=[u,r]:(u=null,Pl=t)):(u=null,Pl=t),yl[l]={nextPos:Pl,result:u},u}function F(){var l="final_syllable@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s,o,i;return o=Pl,u=N(),null!==u?(i=Pl,hl++,r=Q(),hl--,null===r?r="":(r=null,Pl=i),null!==r?(t=q(),null!==t?(i=Pl,hl++,e=a(),hl--,null===e?e="":(e=null,Pl=i),null!==e?(i=Pl,hl++,s=al(),hl--,null!==s?(s="",Pl=i):s=null,null!==s?u=[u,r,t,e,s]:(u=null,Pl=o)):(u=null,Pl=o)):(u=null,Pl=o)):(u=null,Pl=o)):(u=null,Pl=o),yl[l]={nextPos:Pl,result:u},u}function M(){var l="stress@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s,a;for(a=Pl,u=[],r=U(),null===r&&(r=D());null!==r;)u.push(r),r=U(),null===r&&(r=D());return null!==u?(r=sl(),r=null!==r?r:"",null!==r?(t=Q(),t=null!==t?t:"",null!==t?(e=B(),null!==e?(s=ol(),null!==s?u=[u,r,t,e,s]:(u=null,Pl=a)):(u=null,Pl=a)):(u=null,Pl=a)):(u=null,Pl=a)):(u=null,Pl=a),yl[l]={nextPos:Pl,result:u},u}function O(){var l="any_syllable@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e;return e=Pl,u=N(),null!==u?(r=q(),null!==r?(t=J(),t=null!==t?t:"",null!==t?u=[u,r,t]:(u=null,Pl=e)):(u=null,Pl=e)):(u=null,Pl=e),null===u&&(u=I()),yl[l]={nextPos:Pl,result:u},u}function B(){var l="syllable@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s,a;return s=Pl,u=N(),null!==u?(a=Pl,hl++,r=Q(),hl--,null===r?r="":(r=null,Pl=a),null!==r?(t=q(),null!==t?(e=J(),e=null!==e?e:"",null!==e?u=[u,r,t,e]:(u=null,Pl=s)):(u=null,Pl=s)):(u=null,Pl=s)):(u=null,Pl=s),yl[l]={nextPos:Pl,result:u},u}function I(){var l="consonantal_syllable@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s;return e=Pl,u=U(),null!==u?(s=Pl,hl++,r=W(),hl--,null!==r?(r="",Pl=s):r=null,null!==r?(t=J(),null!==t?u=[u,r,t]:(u=null,Pl=e)):(u=null,Pl=e)):(u=null,Pl=e),yl[l]={nextPos:Pl,result:u},u}function J(){var l="coda@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s;return e=Pl,s=Pl,hl++,u=O(),hl--,null===u?u="":(u=null,Pl=s),null!==u?(r=U(),null!==r?(s=Pl,hl++,t=O(),hl--,null!==t?(t="",Pl=s):t=null,null!==t?u=[u,r,t]:(u=null,Pl=e)):(u=null,Pl=e)):(u=null,Pl=e),null===u&&(e=Pl,u=W(),u=null!==u?u:"",null!==u?(r=U(),r=null!==r?r:"",null!==r?(s=Pl,hl++,t=ol(),hl--,null!==t?(t="",Pl=s):t=null,null!==t?u=[u,r,t]:(u=null,Pl=e)):(u=null,Pl=e)):(u=null,Pl=e)),yl[l]={nextPos:Pl,result:u},u}function N(){var l="onset@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s,a,o,i;return u=sl(),null===u&&(u=D(),null===u&&(e=Pl,u=T(),null===u&&(s=Pl,a=Pl,u=rl(),null!==u?(o=Pl,hl++,r=tl(),hl--,null===r?r="":(r=null,Pl=o),null!==r?u=[u,r]:(u=null,Pl=a)):(u=null,Pl=a),null===u&&(a=Pl,u=ul(),null!==u?(o=Pl,hl++,r=Z(),null===r&&(r=X(),null===r&&(r=$())),hl--,null===r?r="":(r=null,Pl=o),null!==r?u=[u,r]:(u=null,Pl=a)):(u=null,Pl=a)),u=null!==u?u:"",null!==u?(r=ll(),null===r&&(a=Pl,r=el(),null===r&&(r=nl(),null===r&&(o=Pl,r=Z(),null!==r?(i=Pl,hl++,t=$(),hl--,null===t?t="":(t=null,Pl=i),null!==t?r=[r,t]:(r=null,Pl=o)):(r=null,Pl=o))),null!==r?(o=Pl,hl++,t=X(),hl--,null===t?t="":(t=null,Pl=o),null!==t?r=[r,t]:(r=null,Pl=a)):(r=null,Pl=a),null===r&&(r=Y())),r=null!==r?r:"",null!==r?(t=X(),null===t&&(t=$()),t=null!==t?t:"",null!==t?u=[u,r,t]:(u=null,Pl=s)):(u=null,Pl=s)):(u=null,Pl=s)),null!==u?(s=Pl,hl++,r=U(),hl--,null===r?r="":(r=null,Pl=s),null!==r?(s=Pl,hl++,t=D(),hl--,null===t?t="":(t=null,Pl=s),null!==t?u=[u,r,t]:(u=null,Pl=e)):(u=null,Pl=e)):(u=null,Pl=e))),yl[l]={nextPos:Pl,result:u},u}function q(){var l="nucleus@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e;return u=H(),null===u&&(u=G(),null===u&&(t=Pl,u=Q(),null!==u?(e=Pl,hl++,r=q(),hl--,null===r?r="":(r=null,Pl=e),null!==r?u=[u,r]:(u=null,Pl=t)):(u=null,Pl=t))),yl[l]={nextPos:Pl,result:u},u}function D(){var l="glide@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s;return e=Pl,u=K(),null===u&&(u=L()),null!==u?(s=Pl,hl++,r=q(),hl--,null!==r?(r="",Pl=s):r=null,null!==r?(s=Pl,hl++,t=D(),hl--,null===t?t="":(t=null,Pl=s),null!==t?u=[u,r,t]:(u=null,Pl=e)):(u=null,Pl=e)):(u=null,Pl=e),yl[l]={nextPos:Pl,result:u},u}function G(){var l="diphthong@"+Pl,u=yl[l];if(u)return Pl=u.nextPos,u.result;var t,e,s,a,o,i;return a=Pl,o=Pl,/^[a]/.test(n.charAt(Pl))?(t=n.charAt(Pl),Pl++):(t=null,0===hl&&r("[a]")),null!==t?(e=L(),null!==e?(i=Pl,hl++,s=L(),hl--,null===s?s="":(s=null,Pl=i),null!==s?t=[t,e,s]:(t=null,Pl=o)):(t=null,Pl=o)):(t=null,Pl=o),null===t&&(o=Pl,/^[aeo]/.test(n.charAt(Pl))?(t=n.charAt(Pl),Pl++):(t=null,0===hl&&r("[aeo]")),null!==t?(e=K(),null!==e?(i=Pl,hl++,s=K(),hl--,null===s?s="":(s=null,Pl=i),null!==s?t=[t,e,s]:(t=null,Pl=o)):(t=null,Pl=o)):(t=null,Pl=o)),null!==t?(o=Pl,hl++,e=q(),hl--,null===e?e="":(e=null,Pl=o),null!==e?t=[t,e]:(t=null,Pl=a)):(t=null,Pl=a),yl[l]={nextPos:Pl,result:t},t}function H(){var l="vowel@"+Pl,u=yl[l];if(u)return Pl=u.nextPos,u.result;var t,e,s,a;return s=Pl,/^[aeiou]/.test(n.charAt(Pl))?(t=n.charAt(Pl),Pl++):(t=null,0===hl&&r("[aeiou]")),null!==t?(a=Pl,hl++,e=q(),hl--,null===e?e="":(e=null,Pl=a),null!==e?t=[t,e]:(t=null,Pl=s)):(t=null,Pl=s),yl[l]={nextPos:Pl,result:t},t}function K(){var l="i@"+Pl,u=yl[l];if(u)return Pl=u.nextPos,u.result;var t;return/^[i]/.test(n.charAt(Pl))?(t=n.charAt(Pl),Pl++):(t=null,0===hl&&r("[i]")),yl[l]={nextPos:Pl,result:t},t}function L(){var l="u@"+Pl,u=yl[l];if(u)return Pl=u.nextPos,u.result;var t;return/^[u]/.test(n.charAt(Pl))?(t=n.charAt(Pl),Pl++):(t=null,0===hl&&r("[u]")),yl[l]={nextPos:Pl,result:t},t}function Q(){var l="y@"+Pl,u=yl[l];if(u)return Pl=u.nextPos,u.result;var t,e,s,a,o,i,f;return a=Pl,/^[y]/.test(n.charAt(Pl))?(t=n.charAt(Pl),Pl++):(t=null,0===hl&&r("[y]")),null!==t?(o=Pl,hl++,i=Pl,f=Pl,hl++,e=Q(),hl--,null===e?e="":(e=null,Pl=f),null!==e?(s=q(),null!==s?e=[e,s]:(e=null,Pl=i)):(e=null,Pl=i),hl--,null===e?e="":(e=null,Pl=o),null!==e?t=[t,e]:(t=null,Pl=a)):(t=null,Pl=a),yl[l]={nextPos:Pl,result:t},t}function R(){var l="initial_pair@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e,s,a;return s=Pl,a=Pl,hl++,u=N(),hl--,null!==u?(u="",Pl=a):u=null,null!==u?(r=U(),null!==r?(t=U(),null!==t?(a=Pl,hl++,e=U(),hl--,null===e?e="":(e=null,Pl=a),null!==e?u=[u,r,t,e]:(u=null,Pl=s)):(u=null,Pl=s)):(u=null,Pl=s)):(u=null,Pl=s),yl[l]={nextPos:Pl,result:u},u}function T(){var l="affricate@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t;return t=Pl,u=el(),null!==u?(r=rl(),null!==r?u=[u,r]:(u=null,Pl=t)):(u=null,Pl=t),null===u&&(t=Pl,u=nl(),null!==u?(r=ul(),null!==r?u=[u,r]:(u=null,Pl=t)):(u=null,Pl=t)),yl[l]={nextPos:Pl,result:u},u}function U(){var l="consonant@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u;return u=ll(),null===u&&(u=nl(),null===u&&(u=ul(),null===u&&(u=rl(),null===u&&(u=el(),null===u&&(u=W()))))),yl[l]={nextPos:Pl,result:u},u}function W(){var l="syllabic@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u;return u=X(),null===u&&(u=Y(),null===u&&(u=Z(),null===u&&(u=$()))),yl[l]={nextPos:Pl,result:u},u}function X(){var l="l@"+Pl,u=yl[l];if(u)return Pl=u.nextPos,u.result;var t,e,s,a;return s=Pl,/^[l]/.test(n.charAt(Pl))?(t=n.charAt(Pl),Pl++):(t=null,0===hl&&r("[l]")),null!==t?(a=Pl,hl++,e=D(),hl--,null===e?e="":(e=null,Pl=a),null!==e?t=[t,e]:(t=null,Pl=s)):(t=null,Pl=s),yl[l]={nextPos:Pl,result:t},t}function Y(){var l="m@"+Pl,u=yl[l];if(u)return Pl=u.nextPos,u.result;var t,e,s,a;return s=Pl,/^[m]/.test(n.charAt(Pl))?(t=n.charAt(Pl),Pl++):(t=null,0===hl&&r("[m]")),null!==t?(a=Pl,hl++,e=D(),hl--,null===e?e="":(e=null,Pl=a),null!==e?t=[t,e]:(t=null,Pl=s)):(t=null,Pl=s),yl[l]={nextPos:Pl,result:t},t}function Z(){var l="n@"+Pl,u=yl[l];if(u)return Pl=u.nextPos,u.result;var t,e,s,a,o;return a=Pl,/^[n]/.test(n.charAt(Pl))?(t=n.charAt(Pl),Pl++):(t=null,0===hl&&r("[n]")),null!==t?(o=Pl,hl++,e=D(),hl--,null===e?e="":(e=null,Pl=o),null!==e?(o=Pl,hl++,s=T(),hl--,null===s?s="":(s=null,Pl=o),null!==s?t=[t,e,s]:(t=null,Pl=a)):(t=null,Pl=a)):(t=null,Pl=a),yl[l]={nextPos:Pl,result:t},t}function $(){var l="r@"+Pl,u=yl[l];if(u)return Pl=u.nextPos,u.result;var t,e,s,a;return s=Pl,/^[r]/.test(n.charAt(Pl))?(t=n.charAt(Pl),Pl++):(t=null,0===hl&&r("[r]")),null!==t?(a=Pl,hl++,e=D(),hl--,null===e?e="":(e=null,Pl=a),null!==e?t=[t,e]:(t=null,Pl=s)):(t=null,Pl=s),yl[l]={nextPos:Pl,result:t},t}function ll(){var l="pfbgvkx@"+Pl,u=yl[l];if(u)return Pl=u.nextPos,u.result;var t,e,s,a;return s=Pl,/^[pfbgvkx]/.test(n.charAt(Pl))?(t=n.charAt(Pl),Pl++):(t=null,0===hl&&r("[pfbgvkx]")),null!==t?(a=Pl,hl++,e=D(),hl--,null===e?e="":(e=null,Pl=a),null!==e?t=[t,e]:(t=null,Pl=s)):(t=null,Pl=s),yl[l]={nextPos:Pl,result:t},t}function nl(){var l="d@"+Pl,u=yl[l];if(u)return Pl=u.nextPos,u.result;var t,e,s,a;return s=Pl,/^[d]/.test(n.charAt(Pl))?(t=n.charAt(Pl),Pl++):(t=null,0===hl&&r("[d]")),null!==t?(a=Pl,hl++,e=D(),hl--,null===e?e="":(e=null,Pl=a),null!==e?t=[t,e]:(t=null,Pl=s)):(t=null,Pl=s),yl[l]={nextPos:Pl,result:t},t}function ul(){var l="jz@"+Pl,u=yl[l];if(u)return Pl=u.nextPos,u.result;var t,e,s,a;return s=Pl,/^[jz]/.test(n.charAt(Pl))?(t=n.charAt(Pl),Pl++):(t=null,0===hl&&r("[jz]")),null!==t?(a=Pl,hl++,e=D(),hl--,null===e?e="":(e=null,Pl=a),null!==e?t=[t,e]:(t=null,Pl=s)):(t=null,Pl=s),yl[l]={nextPos:Pl,result:t},t}function rl(){var l="cs@"+Pl,u=yl[l];if(u)return Pl=u.nextPos,u.result;var t,e,s,a;return s=Pl,/^[cs]/.test(n.charAt(Pl))?(t=n.charAt(Pl),Pl++):(t=null,0===hl&&r("[cs]")),null!==t?(a=Pl,hl++,e=D(),hl--,null===e?e="":(e=null,Pl=a),null!==e?t=[t,e]:(t=null,Pl=s)):(t=null,Pl=s),yl[l]={nextPos:Pl,result:t},t}function tl(){var l="x@"+Pl,u=yl[l];if(u)return Pl=u.nextPos,u.result;var t,e,s,a;return s=Pl,/^[x]/.test(n.charAt(Pl))?(t=n.charAt(Pl),Pl++):(t=null,0===hl&&r("[x]")),null!==t?(a=Pl,hl++,e=D(),hl--,null===e?e="":(e=null,Pl=a),null!==e?t=[t,e]:(t=null,Pl=s)):(t=null,Pl=s),yl[l]={nextPos:Pl,result:t},t}function el(){var l="t@"+Pl,u=yl[l];if(u)return Pl=u.nextPos,u.result;var t,e,s,a;return s=Pl,/^[t]/.test(n.charAt(Pl))?(t=n.charAt(Pl),Pl++):(t=null,0===hl&&r("[t]")),null!==t?(a=Pl,hl++,e=D(),hl--,null===e?e="":(e=null,Pl=a),null!==e?t=[t,e]:(t=null,Pl=s)):(t=null,Pl=s),yl[l]={nextPos:Pl,result:t},t}function sl(){var l="h@"+Pl,u=yl[l];if(u)return Pl=u.nextPos,u.result;var t,e,s,a;return s=Pl,/^[']/.test(n.charAt(Pl))?(t=n.charAt(Pl),Pl++):(t=null,0===hl&&r("[']")),null!==t?(a=Pl,hl++,e=q(),hl--,null!==e?(e="",Pl=a):e=null,null!==e?t=[t,e]:(t=null,Pl=s)):(t=null,Pl=s),yl[l]={nextPos:Pl,result:t},t}function al(){var l="post_word@"+Pl,n=yl[l];if(n)return Pl=n.nextPos,n.result;var u,r,t,e;return u=ol(),null===u&&(t=Pl,e=Pl,hl++,u=q(),hl--,null===u?u="":(u=null,Pl=e),null!==u?(r=s(),null!==r?u=[u,r]:(u=null,Pl=t)):(u=null,Pl=t)),yl[l]={nextPos:Pl,result:u},u}function ol(){var l="pause@"+Pl,u=yl[l];if(u)return Pl=u.nextPos,u.result;var t,e,s;if(/^[.\t\n\r?! ]/.test(n.charAt(Pl))?(e=n.charAt(Pl),Pl++):(e=null,0===hl&&r("[.\\t\\n\\r?! ]")),null!==e)for(t=[];null!==e;)t.push(e),/^[.\t\n\r?! ]/.test(n.charAt(Pl))?(e=n.charAt(Pl),Pl++):(e=null,0===hl&&r("[.\\t\\n\\r?! ]"));else t=null;return null===t&&(s=Pl,hl++,n.length>Pl?(t=n.charAt(Pl),Pl++):(t=null,0===hl&&r("any character")),hl--,null===t?t="":(t=null,Pl=s)),yl[l]={nextPos:Pl,result:t},t}function il(l){l.sort();for(var n=null,u=[],r=0;r<l.length;r++)l[r]!==n&&(u.push(l[r]),n=l[r]);return u}function fl(){for(var l=1,u=1,r=!1,t=0;t<Math.max(Pl,_l);t++){var e=n.charAt(t);"\n"===e?(r||l++,u=1,r=!1):"\r"===e||"\u2028"===e||"\u2029"===e?(l++,u=1,r=!0):(u++,r=!1)}return{line:l,column:u}}function cl(l){if("string"==typeof l)return l;var n="";for(var u in l)n+=cl(l[u]);return n}function vl(l){if("string"==typeof l)return l;var n=[];for(var u in l)n.push(vl(l[u]));return n}var xl={text:t,any_word:e,lojban_word:s,cmevla:a,gismu:o,fuhivla:i,cmavo:f,lujvo_core:c,any_fuhivla_rafsi:v,rafsi_string:x,fuhivla_head:P,zifcme:h,stressed_fuhivla_rafsi:_,fuhivla_rafsi:p,stressed_y_rafsi:y,y_rafsi:A,y_less_rafsi:g,stressed_hy_rafsi:d,hy_rafsi:m,CVC:C,CVC_CCV:b,ini_vwl:V,CVC_CCV_CVV:w,gismu_CVV_final_rafsi:j,short_final_rafsi:E,unstressed_syllable:k,long_rafsi:z,CV:S,final_syllable:F,stress:M,any_syllable:O,syllable:B,consonantal_syllable:I,coda:J,onset:N,nucleus:q,glide:D,diphthong:G,vowel:H,i:K,u:L,y:Q,initial_pair:R,affricate:T,consonant:U,syllabic:W,l:X,m:Y,n:Z,r:$,pfbgvkx:ll,d:nl,jz:ul,cs:rl,x:tl,t:el,h:sl,post_word:al,pause:ol};if(void 0!==u){if(void 0===xl[u])throw new Error("Invalid rule name: "+l(u)+".")}else u="text";var Pl=0,hl=0,_l=0,pl=[],yl={},Al=xl[u]();if(null===Al||Pl!==n.length){var gl=Math.max(Pl,_l),dl=gl<n.length?n.charAt(gl):null,ml=fl();throw new this.SyntaxError(il(pl),dl,gl,ml.line,ml.column)}return Al},toSource:function(){return this._source}};return n.SyntaxError=function(n,u,r,t,e){function s(n,u){var r,t;switch(n.length){case 0:r="end of input";break;case 1:r=n[0];break;default:r=n.slice(0,n.length-1).join(", ")+" or "+n[n.length-1]}return t=u?l(u):"end of input","Expected "+r+" but "+t+" found."}this.name="SyntaxError",this.expected=n,this.found=u,this.message=s(n,u),this.offset=r,this.line=t,this.column=e},n.SyntaxError.prototype=Error.prototype,n}();module.exports=camxes,term=process.argv[2],void 0!==term&&"string"==typeof term.valueOf()&&console.log(JSON.stringify(camxes.parse(term)));