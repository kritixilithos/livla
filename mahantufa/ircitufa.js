var camxes=function(){function l(l){return'"'+l.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E-\x1F\x80-\uFFFF]/g,escape)+'"'}var n={parse:function(n,u){function r(l){Vl>Cl||(Cl>Vl&&(Vl=Cl,wl=[]),wl.push(l))}function t(){var l="text@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,s,a;if(s=Cl,a=Cl,u=_l(),u=null!==u?u:"",null!==u){for(r=[],t=e();null!==t;)r.push(t),t=e();null!==r?u=[u,r]:(u=null,Cl=a)}else u=null,Cl=a;return null!==u&&(u=function(l,n){return dl(n)}(s,u[1])),null===u&&(Cl=s),jl[l]={nextPos:Cl,result:u},u}function e(){var l="any_word@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e;return t=Cl,e=Cl,u=s(),null!==u?(r=_l(),r=null!==r?r:"",null!==r?u=[u,r]:(u=null,Cl=e)):(u=null,Cl=e),null!==u&&(u=function(l,n){return n}(t,u[0])),null===u&&(Cl=t),jl[l]={nextPos:Cl,result:u},u}function s(){var l="lojban_word@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s,v,x,P,h,_,p;return u=a(),null===u&&(P=Cl,u=f(),null!==u&&(u=function(l,n){return["cmavo",yl(n)]}(P,u)),null===u&&(Cl=P),null===u&&(P=Cl,u=o(),null!==u&&(u=function(l,n){return["gismu",yl(n)]}(P,u)),null===u&&(Cl=P),null===u&&(P=Cl,h=Cl,_=Cl,bl++,u=o(),bl--,null===u?u="":(u=null,Cl=_),null!==u?(_=Cl,bl++,r=i(),bl--,null===r?r="":(r=null,Cl=_),null!==r?(_=Cl,bl++,t=f(),bl--,null===t?t="":(t=null,Cl=_),null!==t?(_=Cl,bl++,p=Cl,e=V(),null!==e?(s=Pl(),null!==s?(v=Q(),null!==v?(x=N(),null!==x?e=[e,s,v,x]:(e=null,Cl=p)):(e=null,Cl=p)):(e=null,Cl=p)):(e=null,Cl=p),bl--,null===e?e="":(e=null,Cl=_),null!==e?(s=c(),null!==s?u=[u,r,t,e,s]:(u=null,Cl=h)):(u=null,Cl=h)):(u=null,Cl=h)):(u=null,Cl=h)):(u=null,Cl=h),null!==u&&(u=function(l,n){return["lujvo",yl(n)]}(P,u)),null===u&&(Cl=P),null===u&&(P=Cl,u=i(),null!==u&&(u=function(l,n){return["fu'ivla",yl(n)]}(P,u)),null===u&&(Cl=P))))),jl[l]={nextPos:Cl,result:u},u}function a(){var l="cmevla@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s,a;if(e=Cl,s=Cl,a=Cl,bl++,u=h(),bl--,null!==u?(u="",Cl=a):u=null,null!==u){for(r=[],t=O();null!==t;)r.push(t),t=O();null!==r?(a=Cl,bl++,t=_l(),bl--,null!==t?(t="",Cl=a):t=null,null!==t?u=[u,r,t]:(u=null,Cl=s)):(u=null,Cl=s)}else u=null,Cl=s;return null===u&&(u=h()),null!==u&&(u=function(l,n){return["cmevla",yl(n)]}(e,u)),null===u&&(Cl=e),jl[l]={nextPos:Cl,result:u},u}function o(){var l="gismu@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s,a,o;return a=Cl,u=k(),null!==u?(o=Cl,bl++,r=M(),bl--,null!==r?(r="",Cl=o):r=null,null!==r?(o=Cl,bl++,t=F(),bl--,null!==t?(t="",Cl=o):t=null,null!==t?(e=H(),null!==e?(o=Cl,bl++,s=hl(),bl--,null!==s?(s="",Cl=o):s=null,null!==s?u=[u,r,t,e,s]:(u=null,Cl=a)):(u=null,Cl=a)):(u=null,Cl=a)):(u=null,Cl=a)):(u=null,Cl=a),jl[l]={nextPos:Cl,result:u},u}function i(){var l="fuhivla@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s,a,o;if(a=Cl,u=P(),null!==u)if(r=B(),null!==r)if(o=Cl,bl++,t=M(),bl--,null!==t?(t="",Cl=o):t=null,null!==t){for(e=[],s=I();null!==s;)e.push(s),s=I();null!==e?(s=F(),null!==s?u=[u,r,t,e,s]:(u=null,Cl=a)):(u=null,Cl=a)}else u=null,Cl=a;else u=null,Cl=a;else u=null,Cl=a;return jl[l]={nextPos:Cl,result:u},u}function f(){var l="cmavo@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s,o,i,f,v,x,P,h;if(v=Cl,x=Cl,bl++,u=a(),bl--,null===u?u="":(u=null,Cl=x),null!==u)if(x=Cl,bl++,P=Cl,r=C(),null!==r?(h=Cl,bl++,t=M(),bl--,null===t?t="":(t=null,Cl=h),null!==t?(e=Q(),null!==e?(s=Pl(),s=null!==s?s:"",null!==s?(o=c(),null!==o?r=[r,t,e,s,o]:(r=null,Cl=P)):(r=null,Cl=P)):(r=null,Cl=P)):(r=null,Cl=P)):(r=null,Cl=P),null===r&&(P=Cl,r=C(),null!==r?(h=Cl,bl++,t=M(),bl--,null!==t?(t="",Cl=h):t=null,null!==t?(e=Q(),null!==e?(s=z(),null!==s?r=[r,t,e,s]:(r=null,Cl=P)):(r=null,Cl=P)):(r=null,Cl=P)):(r=null,Cl=P)),bl--,null===r?r="":(r=null,Cl=x),null!==r){if(x=Cl,P=Cl,bl++,t=Pl(),bl--,null===t?t="":(t=null,Cl=P),null!==t){if(P=Cl,bl++,h=Cl,e=W(),null!==e){if(o=W(),null!==o)for(s=[];null!==o;)s.push(o),o=W();else s=null;null!==s?e=[e,s]:(e=null,Cl=h)}else e=null,Cl=h;if(bl--,null===e?e="":(e=null,Cl=P),null!==e)if(s=N(),null!==s){for(o=[],P=Cl,i=q(),null!==i?(f=Pl(),null!==f?i=[i,f]:(i=null,Cl=P)):(i=null,Cl=P);null!==i;)o.push(i),P=Cl,i=q(),null!==i?(f=Pl(),null!==f?i=[i,f]:(i=null,Cl=P)):(i=null,Cl=P);null!==o?(i=q(),null!==i?t=[t,e,s,o,i]:(t=null,Cl=x)):(t=null,Cl=x)}else t=null,Cl=x;else t=null,Cl=x}else t=null,Cl=x;if(null===t)if(e=Q(),null!==e)for(t=[];null!==e;)t.push(e),e=Q();else t=null;null!==t?(x=Cl,bl++,e=hl(),bl--,null!==e?(e="",Cl=x):e=null,null!==e?u=[u,r,t,e]:(u=null,Cl=v)):(u=null,Cl=v)}else u=null,Cl=v;else u=null,Cl=v;return jl[l]={nextPos:Cl,result:u},u}function c(){var l="brivla_core@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s,a,o,f;for(s=Cl,u=[],r=m(),null===r&&(r=p(),null===r&&(r=g(),null===r&&(a=Cl,o=Cl,bl++,r=v(),bl--,null===r?r="":(r=null,Cl=o),null!==r?(t=y(),null!==t?(o=Cl,bl++,e=v(),bl--,null===e?e="":(e=null,Cl=o),null!==e?r=[r,t,e]:(r=null,Cl=a)):(r=null,Cl=a)):(r=null,Cl=a))));null!==r;)u.push(r),r=m(),null===r&&(r=p(),null===r&&(r=g(),null===r&&(a=Cl,o=Cl,bl++,r=v(),bl--,null===r?r="":(r=null,Cl=o),null!==r?(t=y(),null!==t?(o=Cl,bl++,e=v(),bl--,null===e?e="":(e=null,Cl=o),null!==e?r=[r,t,e]:(r=null,Cl=a)):(r=null,Cl=a)):(r=null,Cl=a))));return null!==u?(r=i(),null===r&&(r=j(),null===r&&(a=Cl,r=d(),null===r&&(r=_(),null===r&&(r=A(),null===r&&(o=Cl,r=w(),null!==r?(f=Cl,bl++,t=M(),bl--,null!==t?(t="",Cl=f):t=null,null!==t?r=[r,t]:(r=null,Cl=o)):(r=null,Cl=o)))),null!==r?(t=z(),null!==t?r=[r,t]:(r=null,Cl=a)):(r=null,Cl=a))),null!==r?u=[u,r]:(u=null,Cl=s)):(u=null,Cl=s),jl[l]={nextPos:Cl,result:u},u}function v(){var l="any_fuhivla_rafsi@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u;return u=i(),null===u&&(u=p(),null===u&&(u=_())),jl[l]={nextPos:Cl,result:u},u}function x(){var l="rafsi_string@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s,a,o,i,f;for(a=Cl,u=[],r=y();null!==r;)u.push(r),r=y();return null!==u?(r=j(),null===r&&(o=Cl,r=w(),null!==r?(i=Cl,bl++,t=M(),bl--,null!==t?(t="",Cl=i):t=null,null!==t?(i=Cl,bl++,e=Q(),bl--,null===e?e="":(e=null,Cl=i),null!==e?(s=z(),null!==s?r=[r,t,e,s]:(r=null,Cl=o)):(r=null,Cl=o)):(r=null,Cl=o)):(r=null,Cl=o),null===r&&(r=g(),null===r&&(r=A(),null===r&&(o=Cl,i=Cl,r=w(),null!==r?(f=Cl,bl++,t=M(),bl--,null!==t?(t="",Cl=f):t=null,null!==t?(f=Cl,bl++,e=Q(),bl--,null===e?e="":(e=null,Cl=f),null!==e?r=[r,t,e]:(r=null,Cl=i)):(r=null,Cl=i)):(r=null,Cl=i),r=null!==r?r:"",null!==r?(t=R(),null!==t?(e=Q(),null!==e?r=[r,t,e]:(r=null,Cl=o)):(r=null,Cl=o)):(r=null,Cl=o),null===r&&(r=m(),null===r&&(r=d())))))),null!==r?u=[u,r]:(u=null,Cl=a)):(u=null,Cl=a),jl[l]={nextPos:Cl,result:u},u}function P(){var l="fuhivla_head@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s,a,o,i,c,v,P;if(i=Cl,c=Cl,bl++,u=x(),bl--,null===u?u="":(u=null,Cl=c),null!==u)if(c=Cl,bl++,r=f(),bl--,null===r?r="":(r=null,Cl=c),null!==r)if(c=Cl,bl++,v=Cl,P=Cl,bl++,t=x(),bl--,null===t?t="":(t=null,Cl=P),null!==t?(e=W(),null!==e?(s=x(),null!==s?t=[t,e,s]:(t=null,Cl=v)):(t=null,Cl=v)):(t=null,Cl=v),bl--,null===t?t="":(t=null,Cl=c),null!==t)if(c=Cl,bl++,e=Pl(),bl--,null===e?e="":(e=null,Cl=c),null!==e)if(c=Cl,bl++,s=N(),bl--,null!==s?(s="",Cl=c):s=null,null!==s){for(a=[],o=E();null!==o;)a.push(o),o=E();null!==a?u=[u,r,t,e,s,a]:(u=null,Cl=i)}else u=null,Cl=i;else u=null,Cl=i;else u=null,Cl=i;else u=null,Cl=i;else u=null,Cl=i;return jl[l]={nextPos:Cl,result:u},u}function h(){var l="zifcme@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s,a,o;if(s=Cl,a=Cl,bl++,u=Pl(),bl--,null===u?u="":(u=null,Cl=a),null!==u){for(r=[],t=q(),null===t&&(t=D(),null===t&&(t=Pl(),null===t&&(a=Cl,t=W(),null!==t?(o=Cl,bl++,e=_l(),bl--,null===e?e="":(e=null,Cl=o),null!==e?t=[t,e]:(t=null,Cl=a)):(t=null,Cl=a))));null!==t;)r.push(t),t=q(),null===t&&(t=D(),null===t&&(t=Pl(),null===t&&(a=Cl,t=W(),null!==t?(o=Cl,bl++,e=_l(),bl--,null===e?e="":(e=null,Cl=o),null!==e?t=[t,e]:(t=null,Cl=a)):(t=null,Cl=a))));null!==r?(t=W(),null!==t?(a=Cl,bl++,e=_l(),bl--,null!==e?(e="",Cl=a):e=null,null!==e?u=[u,r,t,e]:(u=null,Cl=s)):(u=null,Cl=s)):(u=null,Cl=s)}else u=null,Cl=s;return jl[l]={nextPos:Cl,result:u},u}function _(){var l="stressed_fuhivla_rafsi@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s,a,o,i;if(o=Cl,u=P(),null!==u)if(r=B(),null!==r)if(i=Cl,bl++,t=M(),bl--,null!==t?(t="",Cl=i):t=null,null!==t){for(e=[],s=I();null!==s;)e.push(s),s=I();null!==e?(s=N(),null!==s?(a=Q(),null!==a?u=[u,r,t,e,s,a]:(u=null,Cl=o)):(u=null,Cl=o)):(u=null,Cl=o)}else u=null,Cl=o;else u=null,Cl=o;else u=null,Cl=o;return jl[l]={nextPos:Cl,result:u},u}function p(){var l="fuhivla_rafsi@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s,a,o;return a=Cl,o=Cl,bl++,u=E(),bl--,null!==u?(u="",Cl=o):u=null,null!==u?(r=P(),null!==r?(t=N(),null!==t?(e=Q(),null!==e?(s=Pl(),s=null!==s?s:"",null!==s?u=[u,r,t,e,s]:(u=null,Cl=a)):(u=null,Cl=a)):(u=null,Cl=a)):(u=null,Cl=a)):(u=null,Cl=a),jl[l]={nextPos:Cl,result:u},u}function A(){var l="stressed_y_rafsi@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s;return e=Cl,u=k(),null===u&&(u=C()),null!==u?(s=Cl,bl++,r=M(),bl--,null!==r?(r="",Cl=s):r=null,null!==r?(t=Q(),null!==t?u=[u,r,t]:(u=null,Cl=e)):(u=null,Cl=e)):(u=null,Cl=e),jl[l]={nextPos:Cl,result:u},u}function g(){var l="y_rafsi@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s,a;return s=Cl,u=k(),null===u&&(u=C()),null!==u?(a=Cl,bl++,r=M(),bl--,null===r?r="":(r=null,Cl=a),null!==r?(t=Q(),null!==t?(e=Pl(),e=null!==e?e:"",null!==e?u=[u,r,t,e]:(u=null,Cl=s)):(u=null,Cl=s)):(u=null,Cl=s)):(u=null,Cl=s),jl[l]={nextPos:Cl,result:u},u}function y(){var l="y_less_rafsi@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s,a,o,i,f,c;return f=Cl,c=Cl,bl++,u=g(),bl--,null===u?u="":(u=null,Cl=c),null!==u?(c=Cl,bl++,r=A(),bl--,null===r?r="":(r=null,Cl=c),null!==r?(c=Cl,bl++,t=m(),bl--,null===t?t="":(t=null,Cl=c),null!==t?(c=Cl,bl++,e=d(),bl--,null===e?e="":(e=null,Cl=c),null!==e?(s=w(),null!==s?(c=Cl,bl++,a=M(),bl--,null===a?a="":(a=null,Cl=c),null!==a?(c=Cl,bl++,o=Q(),bl--,null===o?o="":(o=null,Cl=c),null!==o?(c=Cl,bl++,i=Pl(),bl--,null===i?i="":(i=null,Cl=c),null!==i?u=[u,r,t,e,s,a,o,i]:(u=null,Cl=f)):(u=null,Cl=f)):(u=null,Cl=f)):(u=null,Cl=f)):(u=null,Cl=f)):(u=null,Cl=f)):(u=null,Cl=f)):(u=null,Cl=f),jl[l]={nextPos:Cl,result:u},u}function d(){var l="stressed_hy_rafsi@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s,a;return s=Cl,a=Cl,u=k(),null!==u?(r=H(),null!==r?u=[u,r]:(u=null,Cl=a)):(u=null,Cl=a),null===u&&(u=w()),null!==u?(a=Cl,bl++,r=M(),bl--,null!==r?(r="",Cl=a):r=null,null!==r?(t=Pl(),null!==t?(e=Q(),null!==e?u=[u,r,t,e]:(u=null,Cl=s)):(u=null,Cl=s)):(u=null,Cl=s)):(u=null,Cl=s),jl[l]={nextPos:Cl,result:u},u}function m(){var l="hy_rafsi@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s,a,o;return a=Cl,o=Cl,u=k(),null!==u?(r=H(),null!==r?u=[u,r]:(u=null,Cl=o)):(u=null,Cl=o),null===u&&(u=w()),null!==u?(o=Cl,bl++,r=M(),bl--,null===r?r="":(r=null,Cl=o),null!==r?(t=Pl(),null!==t?(e=Q(),null!==e?(s=Pl(),s=null!==s?s:"",null!==s?u=[u,r,t,e,s]:(u=null,Cl=a)):(u=null,Cl=a)):(u=null,Cl=a)):(u=null,Cl=a)):(u=null,Cl=a),jl[l]={nextPos:Cl,result:u},u}function C(){var l="CVC@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t;return t=Cl,u=S(),null!==u?(r=W(),null!==r?u=[u,r]:(u=null,Cl=t)):(u=null,Cl=t),jl[l]={nextPos:Cl,result:u},u}function b(){var l="CVC_CCV@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u;return u=C(),null===u&&(u=V()),jl[l]={nextPos:Cl,result:u},u}function V(){var l="ini_vwl@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t;return t=Cl,u=R(),null!==u?(r=H(),null!==r?u=[u,r]:(u=null,Cl=t)):(u=null,Cl=t),jl[l]={nextPos:Cl,result:u},u}function w(){var l="CVC_CCV_CVV@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s,a,o,i;return u=b(),null===u&&(a=Cl,u=W(),null!==u?(o=Cl,r=H(),null!==r?(i=Cl,bl++,t=M(),bl--,null===t?t="":(t=null,Cl=i),null!==t?(e=Pl(),null!==e?(s=H(),null!==s?r=[r,t,e,s]:(r=null,Cl=o)):(r=null,Cl=o)):(r=null,Cl=o)):(r=null,Cl=o),null===r&&(r=G()),null!==r?(o=Cl,t=el(),null!==t?(i=Cl,bl++,e=W(),bl--,null!==e?(e="",Cl=i):e=null,null!==e?t=[t,e]:(t=null,Cl=o)):(t=null,Cl=o),null===t&&(o=Cl,t=tl(),null!==t?(i=Cl,bl++,e=el(),bl--,null!==e?(e="",Cl=i):e=null,null!==e?t=[t,e]:(t=null,Cl=o)):(t=null,Cl=o)),t=null!==t?t:"",null!==t?u=[u,r,t]:(u=null,Cl=a)):(u=null,Cl=a)):(u=null,Cl=a)),jl[l]={nextPos:Cl,result:u},u}function j(){var l="gismu_CVV_final_rafsi@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s,a,i,f;return u=o(),null===u&&(i=Cl,u=S(),null!==u?(f=Cl,bl++,r=M(),bl--,null!==r?(r="",Cl=f):r=null,null!==r?(t=Pl(),null!==t?(f=Cl,bl++,e=F(),bl--,null!==e?(e="",Cl=f):e=null,null!==e?(s=H(),null!==s?(f=Cl,bl++,a=hl(),bl--,null!==a?(a="",Cl=f):a=null,null!==a?u=[u,r,t,e,s,a]:(u=null,Cl=i)):(u=null,Cl=i)):(u=null,Cl=i)):(u=null,Cl=i)):(u=null,Cl=i)):(u=null,Cl=i)),jl[l]={nextPos:Cl,result:u},u}function z(){var l="short_final_rafsi@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s;return e=Cl,s=Cl,bl++,u=F(),bl--,null!==u?(u="",Cl=s):u=null,null!==u?(s=Cl,r=W(),null!==r?(t=G(),null!==t?r=[r,t]:(r=null,Cl=s)):(r=null,Cl=s),null===r&&(r=V()),null!==r?(s=Cl,bl++,t=hl(),bl--,null!==t?(t="",Cl=s):t=null,null!==t?u=[u,r,t]:(u=null,Cl=e)):(u=null,Cl=e)):(u=null,Cl=e),jl[l]={nextPos:Cl,result:u},u}function E(){var l="unstressed_syllable@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e;return t=Cl,u=B(),null!==u?(e=Cl,bl++,r=M(),bl--,null===r?r="":(r=null,Cl=e),null!==r?u=[u,r]:(u=null,Cl=t)):(u=null,Cl=t),null===u&&(u=I()),jl[l]={nextPos:Cl,result:u},u}function k(){var l="long_rafsi@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t;return t=Cl,u=b(),null!==u?(r=W(),null!==r?u=[u,r]:(u=null,Cl=t)):(u=null,Cl=t),jl[l]={nextPos:Cl,result:u},u}function S(){var l="CV@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t;return t=Cl,u=W(),null!==u?(r=H(),null!==r?u=[u,r]:(u=null,Cl=t)):(u=null,Cl=t),jl[l]={nextPos:Cl,result:u},u}function F(){var l="final_syllable@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s,o,i;return o=Cl,u=N(),null!==u?(i=Cl,bl++,r=Q(),bl--,null===r?r="":(r=null,Cl=i),null!==r?(t=q(),null!==t?(i=Cl,bl++,e=a(),bl--,null===e?e="":(e=null,Cl=i),null!==e?(i=Cl,bl++,s=hl(),bl--,null!==s?(s="",Cl=i):s=null,null!==s?u=[u,r,t,e,s]:(u=null,Cl=o)):(u=null,Cl=o)):(u=null,Cl=o)):(u=null,Cl=o)):(u=null,Cl=o),jl[l]={nextPos:Cl,result:u},u}function M(){var l="stress@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s,a;for(a=Cl,u=[],r=W(),null===r&&(r=D());null!==r;)u.push(r),r=W(),null===r&&(r=D());return null!==u?(r=Pl(),r=null!==r?r:"",null!==r?(t=Q(),t=null!==t?t:"",null!==t?(e=B(),null!==e?(s=_l(),null!==s?u=[u,r,t,e,s]:(u=null,Cl=a)):(u=null,Cl=a)):(u=null,Cl=a)):(u=null,Cl=a)):(u=null,Cl=a),jl[l]={nextPos:Cl,result:u},u}function O(){var l="any_syllable@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e;return e=Cl,u=N(),null!==u?(r=q(),null!==r?(t=J(),t=null!==t?t:"",null!==t?u=[u,r,t]:(u=null,Cl=e)):(u=null,Cl=e)):(u=null,Cl=e),null===u&&(u=I()),jl[l]={nextPos:Cl,result:u},u}function B(){var l="syllable@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s,a;return s=Cl,u=N(),null!==u?(a=Cl,bl++,r=Q(),bl--,null===r?r="":(r=null,Cl=a),null!==r?(t=q(),null!==t?(e=J(),e=null!==e?e:"",null!==e?u=[u,r,t,e]:(u=null,Cl=s)):(u=null,Cl=s)):(u=null,Cl=s)):(u=null,Cl=s),jl[l]={nextPos:Cl,result:u},u}function I(){var l="consonantal_syllable@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s;return e=Cl,u=W(),null!==u?(s=Cl,bl++,r=X(),bl--,null!==r?(r="",Cl=s):r=null,null!==r?(t=J(),null!==t?u=[u,r,t]:(u=null,Cl=e)):(u=null,Cl=e)):(u=null,Cl=e),jl[l]={nextPos:Cl,result:u},u}function J(){var l="coda@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s;return e=Cl,s=Cl,bl++,u=O(),bl--,null===u?u="":(u=null,Cl=s),null!==u?(r=W(),null!==r?(s=Cl,bl++,t=O(),bl--,null!==t?(t="",Cl=s):t=null,null!==t?u=[u,r,t]:(u=null,Cl=e)):(u=null,Cl=e)):(u=null,Cl=e),null===u&&(e=Cl,u=X(),u=null!==u?u:"",null!==u?(r=W(),r=null!==r?r:"",null!==r?(s=Cl,bl++,t=_l(),bl--,null!==t?(t="",Cl=s):t=null,null!==t?u=[u,r,t]:(u=null,Cl=e)):(u=null,Cl=e)):(u=null,Cl=e)),jl[l]={nextPos:Cl,result:u},u}function N(){var l="onset@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u;return u=Pl(),null===u&&(u=D(),null===u&&(u=T())),jl[l]={nextPos:Cl,result:u},u}function q(){var l="nucleus@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e;return u=H(),null===u&&(u=G(),null===u&&(t=Cl,u=Q(),null!==u?(e=Cl,bl++,r=q(),bl--,null===r?r="":(r=null,Cl=e),null!==r?u=[u,r]:(u=null,Cl=t)):(u=null,Cl=t))),jl[l]={nextPos:Cl,result:u},u}function D(){var l="glide@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s;return e=Cl,u=K(),null===u&&(u=L()),null!==u?(s=Cl,bl++,r=q(),bl--,null!==r?(r="",Cl=s):r=null,null!==r?(s=Cl,bl++,t=D(),bl--,null===t?t="":(t=null,Cl=s),null!==t?u=[u,r,t]:(u=null,Cl=e)):(u=null,Cl=e)):(u=null,Cl=e),jl[l]={nextPos:Cl,result:u},u}function G(){var l="diphthong@"+Cl,u=jl[l];if(u)return Cl=u.nextPos,u.result;var t,e,s,a,o,i;return a=Cl,o=Cl,/^[a]/.test(n.charAt(Cl))?(t=n.charAt(Cl),Cl++):(t=null,0===bl&&r("[a]")),null!==t?(e=L(),null!==e?(i=Cl,bl++,s=L(),bl--,null===s?s="":(s=null,Cl=i),null!==s?t=[t,e,s]:(t=null,Cl=o)):(t=null,Cl=o)):(t=null,Cl=o),null===t&&(o=Cl,/^[aeo]/.test(n.charAt(Cl))?(t=n.charAt(Cl),Cl++):(t=null,0===bl&&r("[aeo]")),null!==t?(e=K(),null!==e?(i=Cl,bl++,s=K(),bl--,null===s?s="":(s=null,Cl=i),null!==s?t=[t,e,s]:(t=null,Cl=o)):(t=null,Cl=o)):(t=null,Cl=o)),null!==t?(o=Cl,bl++,e=q(),bl--,null===e?e="":(e=null,Cl=o),null!==e?t=[t,e]:(t=null,Cl=a)):(t=null,Cl=a),jl[l]={nextPos:Cl,result:t},t}function H(){var l="vowel@"+Cl,u=jl[l];if(u)return Cl=u.nextPos,u.result;var t,e,s,a;return s=Cl,/^[aeiou]/.test(n.charAt(Cl))?(t=n.charAt(Cl),Cl++):(t=null,0===bl&&r("[aeiou]")),null!==t?(a=Cl,bl++,e=q(),bl--,null===e?e="":(e=null,Cl=a),null!==e?t=[t,e]:(t=null,Cl=s)):(t=null,Cl=s),jl[l]={nextPos:Cl,result:t},t}function K(){var l="i@"+Cl,u=jl[l];if(u)return Cl=u.nextPos,u.result;var t;return/^[i]/.test(n.charAt(Cl))?(t=n.charAt(Cl),Cl++):(t=null,0===bl&&r("[i]")),jl[l]={nextPos:Cl,result:t},t}function L(){var l="u@"+Cl,u=jl[l];if(u)return Cl=u.nextPos,u.result;var t;return/^[u]/.test(n.charAt(Cl))?(t=n.charAt(Cl),Cl++):(t=null,0===bl&&r("[u]")),jl[l]={nextPos:Cl,result:t},t}function Q(){var l="y@"+Cl,u=jl[l];if(u)return Cl=u.nextPos,u.result;var t,e,s,a,o,i,f;return a=Cl,/^[y]/.test(n.charAt(Cl))?(t=n.charAt(Cl),Cl++):(t=null,0===bl&&r("[y]")),null!==t?(o=Cl,bl++,i=Cl,f=Cl,bl++,e=Q(),bl--,null===e?e="":(e=null,Cl=f),null!==e?(s=q(),null!==s?e=[e,s]:(e=null,Cl=i)):(e=null,Cl=i),bl--,null===e?e="":(e=null,Cl=o),null!==e?t=[t,e]:(t=null,Cl=a)):(t=null,Cl=a),jl[l]={nextPos:Cl,result:t},t}function R(){var l="initial_pair@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s,a;return s=Cl,a=Cl,bl++,u=T(),bl--,null!==u?(u="",Cl=a):u=null,null!==u?(r=W(),null!==r?(t=W(),null!==t?(a=Cl,bl++,e=W(),bl--,null===e?e="":(e=null,Cl=a),null!==e?u=[u,r,t,e]:(u=null,Cl=s)):(u=null,Cl=s)):(u=null,Cl=s)):(u=null,Cl=s),jl[l]={nextPos:Cl,result:u},u}function T(){var l="initial@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e,s,a,o,i;return e=Cl,u=U(),null===u&&(s=Cl,a=Cl,u=il(),null!==u?(o=Cl,bl++,r=fl(),bl--,null===r?r="":(r=null,Cl=o),null!==r?u=[u,r]:(u=null,Cl=a)):(u=null,Cl=a),null===u&&(a=Cl,u=ol(),null!==u?(o=Cl,bl++,r=tl(),null===r&&(r=ul(),null===r&&(r=el())),bl--,null===r?r="":(r=null,Cl=o),null!==r?u=[u,r]:(u=null,Cl=a)):(u=null,Cl=a)),u=null!==u?u:"",null!==u?(r=vl(),null===r&&(a=Cl,r=xl(),null===r&&(r=al(),null===r&&(o=Cl,r=tl(),null!==r?(i=Cl,bl++,t=el(),bl--,null===t?t="":(t=null,Cl=i),null!==t?r=[r,t]:(r=null,Cl=o)):(r=null,Cl=o))),null!==r?(o=Cl,bl++,t=ul(),bl--,null===t?t="":(t=null,Cl=o),null!==t?r=[r,t]:(r=null,Cl=a)):(r=null,Cl=a),null===r&&(r=cl(),null===r&&(r=fl(),null===r&&(r=sl(),null===r&&(r=rl()))))),r=null!==r?r:"",null!==r?(t=ul(),null===t&&(t=el()),t=null!==t?t:"",null!==t?u=[u,r,t]:(u=null,Cl=s)):(u=null,Cl=s)):(u=null,Cl=s)),null!==u?(s=Cl,bl++,r=W(),bl--,null===r?r="":(r=null,Cl=s),null!==r?(s=Cl,bl++,t=D(),bl--,null===t?t="":(t=null,Cl=s),null!==t?u=[u,r,t]:(u=null,Cl=e)):(u=null,Cl=e)):(u=null,Cl=e),jl[l]={nextPos:Cl,result:u},u}function U(){var l="affricate@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t;return t=Cl,u=xl(),null!==u?(r=il(),null!==r?u=[u,r]:(u=null,Cl=t)):(u=null,Cl=t),null===u&&(t=Cl,u=al(),null!==u?(r=ol(),null!==r?u=[u,r]:(u=null,Cl=t)):(u=null,Cl=t)),jl[l]={nextPos:Cl,result:u},u}function W(){var l="consonant@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u;return u=Y(),null===u&&(u=Z(),null===u&&(u=X())),jl[l]={nextPos:Cl,result:u},u}function X(){var l="syllabic@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u;return u=ul(),null===u&&(u=rl(),null===u&&(u=tl(),null===u&&(u=el()))),jl[l]={nextPos:Cl,result:u},u}function Y(){var l="voiced@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u;return u=sl(),null===u&&(u=al(),null===u&&(u=ol())),jl[l]={nextPos:Cl,result:u},u}function Z(){var l="unvoiced@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u;return u=il(),null===u&&(u=cl(),null===u&&(u=vl(),null===u&&(u=xl(),null===u&&(u=fl())))),jl[l]={nextPos:Cl,result:u},u}function $(){var l="hg@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e;return t=Cl,e=Cl,bl++,u=Pl(),bl--,null===u?u="":(u=null,Cl=e),null!==u?(e=Cl,bl++,r=D(),bl--,null===r?r="":(r=null,Cl=e),null!==r?u=[u,r]:(u=null,Cl=t)):(u=null,Cl=t),jl[l]={nextPos:Cl,result:u},u}function ll(){var l="hgu@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e;return t=Cl,u=$(),null!==u?(e=Cl,bl++,r=Z(),bl--,null===r?r="":(r=null,Cl=e),null!==r?u=[u,r]:(u=null,Cl=t)):(u=null,Cl=t),jl[l]={nextPos:Cl,result:u},u}function nl(){var l="hgv@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e;return t=Cl,u=$(),null!==u?(e=Cl,bl++,r=Y(),bl--,null===r?r="":(r=null,Cl=e),null!==r?u=[u,r]:(u=null,Cl=t)):(u=null,Cl=t),jl[l]={nextPos:Cl,result:u},u}function ul(){var l="l@"+Cl,u=jl[l];if(u)return Cl=u.nextPos,u.result;var t,e,s;return s=Cl,/^[l]/.test(n.charAt(Cl))?(t=n.charAt(Cl),Cl++):(t=null,0===bl&&r("[l]")),null!==t?(e=$(),null!==e?t=[t,e]:(t=null,Cl=s)):(t=null,Cl=s),jl[l]={nextPos:Cl,result:t},t}function rl(){var l="m@"+Cl,u=jl[l];if(u)return Cl=u.nextPos,u.result;var t,e,s,a,o;return a=Cl,/^[m]/.test(n.charAt(Cl))?(t=n.charAt(Cl),Cl++):(t=null,0===bl&&r("[m]")),null!==t?(e=$(),null!==e?(o=Cl,bl++,/^[z]/.test(n.charAt(Cl))?(s=n.charAt(Cl),Cl++):(s=null,0===bl&&r("[z]")),bl--,null===s?s="":(s=null,Cl=o),null!==s?t=[t,e,s]:(t=null,Cl=a)):(t=null,Cl=a)):(t=null,Cl=a),jl[l]={nextPos:Cl,result:t},t}function tl(){var l="n@"+Cl,u=jl[l];if(u)return Cl=u.nextPos,u.result;var t,e,s,a,o;return a=Cl,/^[n]/.test(n.charAt(Cl))?(t=n.charAt(Cl),Cl++):(t=null,0===bl&&r("[n]")),null!==t?(e=$(),null!==e?(o=Cl,bl++,s=U(),bl--,null===s?s="":(s=null,Cl=o),null!==s?t=[t,e,s]:(t=null,Cl=a)):(t=null,Cl=a)):(t=null,Cl=a),jl[l]={nextPos:Cl,result:t},t}function el(){var l="r@"+Cl,u=jl[l];if(u)return Cl=u.nextPos,u.result;var t,e,s;return s=Cl,/^[r]/.test(n.charAt(Cl))?(t=n.charAt(Cl),Cl++):(t=null,0===bl&&r("[r]")),null!==t?(e=$(),null!==e?t=[t,e]:(t=null,Cl=s)):(t=null,Cl=s),jl[l]={nextPos:Cl,result:t},t}function sl(){var l="bgv@"+Cl,u=jl[l];if(u)return Cl=u.nextPos,u.result;var t,e,s;return s=Cl,/^[bgv]/.test(n.charAt(Cl))?(t=n.charAt(Cl),Cl++):(t=null,0===bl&&r("[bgv]")),null!==t?(e=ll(),null!==e?t=[t,e]:(t=null,Cl=s)):(t=null,Cl=s),jl[l]={nextPos:Cl,result:t},t}function al(){var l="d@"+Cl,u=jl[l];if(u)return Cl=u.nextPos,u.result;var t,e,s;return s=Cl,/^[d]/.test(n.charAt(Cl))?(t=n.charAt(Cl),Cl++):(t=null,0===bl&&r("[d]")),null!==t?(e=ll(),null!==e?t=[t,e]:(t=null,Cl=s)):(t=null,Cl=s),jl[l]={nextPos:Cl,result:t},t}function ol(){var l="jz@"+Cl,u=jl[l];if(u)return Cl=u.nextPos,u.result;var t,e,s;return s=Cl,/^[jz]/.test(n.charAt(Cl))?(t=n.charAt(Cl),Cl++):(t=null,0===bl&&r("[jz]")),null!==t?(e=ll(),null!==e?t=[t,e]:(t=null,Cl=s)):(t=null,Cl=s),jl[l]={nextPos:Cl,result:t},t}function il(){var l="cs@"+Cl,u=jl[l];if(u)return Cl=u.nextPos,u.result;var t,e,s,a,o;return a=Cl,/^[cs]/.test(n.charAt(Cl))?(t=n.charAt(Cl),Cl++):(t=null,0===bl&&r("[cs]")),null!==t?(e=nl(),null!==e?(o=Cl,bl++,s=il(),bl--,null===s?s="":(s=null,Cl=o),null!==s?t=[t,e,s]:(t=null,Cl=a)):(t=null,Cl=a)):(t=null,Cl=a),jl[l]={nextPos:Cl,result:t},t}function fl(){var l="x@"+Cl,u=jl[l];if(u)return Cl=u.nextPos,u.result;var t,e,s,a,o,i;return o=Cl,/^[x]/.test(n.charAt(Cl))?(t=n.charAt(Cl),Cl++):(t=null,0===bl&&r("[x]")),null!==t?(e=nl(),null!==e?(i=Cl,bl++,/^[c]/.test(n.charAt(Cl))?(s=n.charAt(Cl),Cl++):(s=null,0===bl&&r("[c]")),bl--,null===s?s="":(s=null,Cl=i),null!==s?(i=Cl,bl++,a=cl(),bl--,null===a?a="":(a=null,Cl=i),null!==a?t=[t,e,s,a]:(t=null,Cl=o)):(t=null,Cl=o)):(t=null,Cl=o)):(t=null,Cl=o),jl[l]={nextPos:Cl,result:t},t}function cl(){var l="k@"+Cl,u=jl[l];if(u)return Cl=u.nextPos,u.result;var t,e,s,a,o;return a=Cl,/^[k]/.test(n.charAt(Cl))?(t=n.charAt(Cl),Cl++):(t=null,0===bl&&r("[k]")),null!==t?(e=nl(),null!==e?(o=Cl,bl++,s=fl(),bl--,null===s?s="":(s=null,Cl=o),null!==s?t=[t,e,s]:(t=null,Cl=a)):(t=null,Cl=a)):(t=null,Cl=a),jl[l]={nextPos:Cl,result:t},t}function vl(){var l="pf@"+Cl,u=jl[l];if(u)return Cl=u.nextPos,u.result;var t,e,s;return s=Cl,/^[pf]/.test(n.charAt(Cl))?(t=n.charAt(Cl),Cl++):(t=null,0===bl&&r("[pf]")),null!==t?(e=nl(),null!==e?t=[t,e]:(t=null,Cl=s)):(t=null,Cl=s),jl[l]={nextPos:Cl,result:t},t}function xl(){var l="t@"+Cl,u=jl[l];if(u)return Cl=u.nextPos,u.result;var t,e,s;return s=Cl,/^[t]/.test(n.charAt(Cl))?(t=n.charAt(Cl),Cl++):(t=null,0===bl&&r("[t]")),null!==t?(e=nl(),null!==e?t=[t,e]:(t=null,Cl=s)):(t=null,Cl=s),jl[l]={nextPos:Cl,result:t},t}function Pl(){var l="h@"+Cl,u=jl[l];if(u)return Cl=u.nextPos,u.result;var t,e,s,a;return s=Cl,/^[']/.test(n.charAt(Cl))?(t=n.charAt(Cl),Cl++):(t=null,0===bl&&r("[']")),null!==t?(a=Cl,bl++,e=q(),bl--,null!==e?(e="",Cl=a):e=null,null!==e?t=[t,e]:(t=null,Cl=s)):(t=null,Cl=s),jl[l]={nextPos:Cl,result:t},t}function hl(){var l="post_word@"+Cl,n=jl[l];if(n)return Cl=n.nextPos,n.result;var u,r,t,e;return u=_l(),null===u&&(t=Cl,e=Cl,bl++,u=q(),bl--,null===u?u="":(u=null,Cl=e),null!==u?(r=s(),null!==r?u=[u,r]:(u=null,Cl=t)):(u=null,Cl=t)),jl[l]={nextPos:Cl,result:u},u}function _l(){var l="pause@"+Cl,u=jl[l];if(u)return Cl=u.nextPos,u.result;var t,e,s;if(/^[.\t\n\r?! ]/.test(n.charAt(Cl))?(e=n.charAt(Cl),Cl++):(e=null,0===bl&&r("[.\\t\\n\\r?! ]")),null!==e)for(t=[];null!==e;)t.push(e),/^[.\t\n\r?! ]/.test(n.charAt(Cl))?(e=n.charAt(Cl),Cl++):(e=null,0===bl&&r("[.\\t\\n\\r?! ]"));else t=null;return null===t&&(s=Cl,bl++,n.length>Cl?(t=n.charAt(Cl),Cl++):(t=null,0===bl&&r("any character")),bl--,null===t?t="":(t=null,Cl=s)),jl[l]={nextPos:Cl,result:t},t}function pl(){var l="space_char@"+Cl,u=jl[l];if(u)return Cl=u.nextPos,u.result;var t;return/^[.\t\n\r?! ]/.test(n.charAt(Cl))?(t=n.charAt(Cl),Cl++):(t=null,0===bl&&r("[.\\t\\n\\r?! ]")),jl[l]={nextPos:Cl,result:t},t}function Al(l){l.sort();for(var n=null,u=[],r=0;r<l.length;r++)l[r]!==n&&(u.push(l[r]),n=l[r]);return u}function gl(){for(var l=1,u=1,r=!1,t=0;t<Math.max(Cl,Vl);t++){var e=n.charAt(t);"\n"===e?(r||l++,u=1,r=!1):"\r"===e||"\u2028"===e||"\u2029"===e?(l++,u=1,r=!0):(u++,r=!1)}return{line:l,column:u}}function yl(l){if("string"==typeof l)return l;var n="";for(var u in l)n+=yl(l[u]);return n}function dl(l){if("string"==typeof l)return l;var n=[];for(var u in l)n.push(dl(l[u]));return n}var ml={text:t,any_word:e,lojban_word:s,cmevla:a,gismu:o,fuhivla:i,cmavo:f,brivla_core:c,any_fuhivla_rafsi:v,rafsi_string:x,fuhivla_head:P,zifcme:h,stressed_fuhivla_rafsi:_,fuhivla_rafsi:p,stressed_y_rafsi:A,y_rafsi:g,y_less_rafsi:y,stressed_hy_rafsi:d,hy_rafsi:m,CVC:C,CVC_CCV:b,ini_vwl:V,CVC_CCV_CVV:w,gismu_CVV_final_rafsi:j,short_final_rafsi:z,unstressed_syllable:E,long_rafsi:k,CV:S,final_syllable:F,stress:M,any_syllable:O,syllable:B,consonantal_syllable:I,coda:J,onset:N,nucleus:q,glide:D,diphthong:G,vowel:H,i:K,u:L,y:Q,initial_pair:R,initial:T,affricate:U,consonant:W,syllabic:X,voiced:Y,unvoiced:Z,hg:$,hgu:ll,hgv:nl,l:ul,m:rl,n:tl,r:el,bgv:sl,d:al,jz:ol,cs:il,x:fl,k:cl,pf:vl,t:xl,h:Pl,post_word:hl,pause:_l,space_char:pl};if(void 0!==u){if(void 0===ml[u])throw new Error("Invalid rule name: "+l(u)+".")}else u="text";var Cl=0,bl=0,Vl=0,wl=[],jl={},zl=ml[u]();if(null===zl||Cl!==n.length){var El=Math.max(Cl,Vl),kl=El<n.length?n.charAt(El):null,Sl=gl();throw new this.SyntaxError(Al(wl),kl,El,Sl.line,Sl.column)}return zl},toSource:function(){return this._source}};return n.SyntaxError=function(n,u,r,t,e){function s(n,u){var r,t;switch(n.length){case 0:r="end of input";break;case 1:r=n[0];break;default:r=n.slice(0,n.length-1).join(", ")+" or "+n[n.length-1]}return t=u?l(u):"end of input","Expected "+r+" but "+t+" found."}this.name="SyntaxError",this.expected=n,this.found=u,this.message=s(n,u),this.offset=r,this.line=t,this.column=e},n.SyntaxError.prototype=Error.prototype,n}();module.exports=camxes,term=process.argv[2],void 0!==term&&"string"==typeof term.valueOf()&&console.log(JSON.stringify(camxes.parse(term)));