//livla bot
var s;
var t;
var tato= require('./tatoeba.js');
var interv=900000;
var interm=2900;
var chan='#lojban,#ckule';
var livlytcan='##jboselbau';
var asker='livla';
var replier='mensi';
var preasker=asker + ': ';
var prereplier=replier + ': ';
var said;
var config = {
  server: 'irc.freenode.net',
  nick: asker,
  options: {
    channels: ['#gleki',livlytcan, chan],
    debug: false,
    messageSplit: 256
  }
};

var configmensi = {
  server: 'irc.freenode.net',
  nick: replier,
  options: {
    channels: ['#gleki',livlytcan, chan],
    debug: false,
    messageSplit: 256
  }
};

var configcipra = {
  server: 'irc.freenode.net',
  nick: 'cipra',
  options: {
    channels: ['#gleki', chan, livlytcan],
    debug: false,
    messageSplit: 256
  }
};

var irc = require('irc');
var client = new irc.Client(config.server, config.nick, config.options);
var clientmensi = new irc.Client(configmensi.server, configmensi.nick, configmensi.options);
var clientcipra = new irc.Client(configcipra.server, configcipra.nick, configcipra.options);

client.addListener('message', function(from, to, text, message) {
    processor(client, from, to, text, message);
});

clientmensi.addListener('message', function(from, to, text, message) {
    processormensi(clientmensi, from, to, text, message);
});

clientcipra.addListener('message', function(from, to, text, message) {
    processorcipra(clientcipra, from, to, text, message);
});

setInterval(updatexmldumps, 43200000); //update logs once a djedi

var updatexmldumps = function () {
try{
	var langs=["jbo","en","ru","es","fr","ja","de","eo","zh","en-simple"];
	var request = require("request"); var body;
	request = request.defaults({jar: true});
	var jar = request.jar();
	var cookie = request.cookie("jbovlastesessionid=MTg6MzIwOmdsZWtpOjE0MDQyODk5NDE%3D");
	langs.forEach(function(thisa) {
		var uri="http://jbovlaste.lojban.org/export/xml-export.html?lang="+thisa;
		jar.setCookie(cookie, uri);
			request({uri: uri,method: "GET",jar: jar}, function(err, response, body) {
				//write body to file
				if(err) {
					console.log(err);
				} else {
					fs = require("fs"),path = require("path");
					var content = fs.writeFile(path.join(__dirname,"dumps",thisa + ".xml"),body, function(err) {
					if(err) {console.log(err);} else {console.log(thisa + ' updated');}
					});
				}
			}); 
	});
	body="";
}catch(err){console.log('Error when autoupdating: ' + err);}
};

var camxes = require('../camxes-exp.js');
var camxes_pre = require('../camxes_preproc.js');
var camxes_post = require('../camxes_postproc.js');

var processorcipra = function(client, from, to, text, message) {
	var ret;
  if (!text) return;
  var sendTo = from; // send privately
  if (to.indexOf('#') > -1) {
    sendTo = to; // send publicly
  }
  if (sendTo == to) {  // Public
    if (text.indexOf("cipra: ") == '0') {
      text = text.substr(7);
      ret = extract_mode(text);
      client.say(sendTo, run_camxes(ret[0], ret[1]));
    } else if (text.search(/(^| )coi la cipra/) >= 0) {
      client.say(sendTo, "coi");
    } else if (text.search(/(^| )ju'i la cipra/) >= 0) {
      client.say(sendTo, "re'i");
    } else if (text.search(/(^| )ki'e la cipra/) >= 0) {
      client.say(sendTo, "je'e fi'i");
    }
  } else {  // Private
	ret = extract_mode(text);
    client.say(sendTo, run_camxes(ret[0], ret[1]));
  }
};

function extract_mode(input) {
  if (input.indexOf("+s ") == '0') {
    return [input.substr(3), 3];
  } else if (input.indexOf("-f ") == '0') {
    return [input.substr(3), 5];
  } else if (input.indexOf("-f+s ") == '0') {
    return [input.substr(5), 6];
  } else return [input, 2];
}

function run_camxes(input, mode) {
	var result;
	var syntax_error = false;
	result = camxes_pre.preprocessing(input);
	try {
	  result = camxes.parse(result);
	} catch (e) {
		result = e;
		syntax_error = true;
	}
	if (!syntax_error) {
		result = JSON.stringify(result, undefined, 2);
		result = camxes_post.postprocessing(result, mode);
	}
	return result;
}
///end cipra
//dict:
var emails = ["Please email any questions to gleki.is.my.name@gmail.com","Пишите любые вопросы по ложбану на gleki.is.my.name@gmail.com","mw.lojban.org","http://reddit.com/r/lojban/","Страница на русском: http://mw.lojban.org/index.php?title=%D0%94%D0%BE%D0%B1%D1%80%D0%BE%20%D0%BF%D0%BE%D0%B6%D0%B0%D0%BB%D0%BE%D0%B2%D0%B0%D1%82%D1%8C!%20(%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9)&setlang=ru","http://mw.lojban.org/index.php?title=Bienvenue%20!%20(Fran%C3%A7ais)&setlang=fr"];
var gaga = ["ga ga u la la", "mama", "do re mi fa so la ti", ".iam .iam i la pitsa cu kukte","ba du bi du","lo mlatu cu fasnu","lo'e mlatu ca ta'e fasnu","lo gerku cu dacti ije lo mlatu cu fasnu i xu lo dacti ka'e catra lo fasnu","i mi troci lo ka catra lo ditcu"];
var pendo = ["pendo", "kamxada", "irci", "jikca djica","se jikca","zmiku","tavla","cusku"];
var nadjuno = ["sei mi stace mi na djuno", "oi se'i mi na vedli", "oi oi la'a", "xu srana lo cukta pe la luis karol","ko zo'ei ko djuno","do dukse kucli","la alis cu misno nixli","la alis na zasti uinai"];
var jee = ["je\'e", "mi jimpe doi", ".ua doi", "ki\'anai doi"];
var mizmiku = ["lo ro re mi zmiku ije mi'a tavla ca po'o lonu no drata cu tavla","uinai mi zmiku i ku'i mi mutce clite","uinai mi zmiku", "doi pendo mi du'eroi na jimpe lo smuni i mi zmiku", "sei mi stace mi zmiku", "la gleki cu patfu mi noi zmiku","mi na remna i e'u do retsku fi la gleki","mi na'e remna","doi pendo do e'o tolxanka","mi na djica lo ka tavla do"];
//var prije = ["lo je\'e", "mi jimpe doi", ".ua doi", "ok doi"];
var dozmiku = ["do zmiku i do zmiku sai","fi'o djuno mi do zmiku","mu'i ma do na stace mi lo nu do zmiku"];
var nazmiku=["mi na zmiku i mi tatpi lo nu spuda","mi remna i xu do na jimpe","do tavla fi lo zmiku xu i mi na me ri"];
var alis = ["ma se zvati la alis", "la alis se slabu xu lo drata jbopre", "la alis cu misno xu ninmu"];
var reply = ["xu doi lil do pendo mi i mi pu jinvi lodu'u do xamgu zmiku","do cusku lo kalci i do nitcu lo livla doi lil","lo zmiku cu ei na raktu lo prenu vau sei la aizek azimov pu xusra i je'epei","mi nelci i ie mi nelci", "ausai le'o mi catra do", "oisai do fenki", "lo nu go'i cu plixau","lu mi i mi i mi li'u a'enai i do jai fanza"];
var nagendra = ["na drani", "li'a na drani i do pu nitcu ma", "do na junri xu","ju'o do na\'e junri", "doi xendo mi tatpi","mi sruma lo nu do zmiku sa'u"];
var spuda = ["do puzabi\'oca mutce lo ka jai fanza", "do djica ma", "a'enai je'enai i mi djica lo ka sipna", "e'u do klama lo bartu","ke'o i ta'onai aunairu'e mi tavla do"];
var coi = ["coi", "co\'oi", "ju\'i", "be\'e"];
var mablagleki = ["la gleki cu tai mabla prenu", "xu la gleki cu fenki i .ies", "la gleki cu cmorguka i ie cmorguka", "lo'e me la gleki cu finti lo cizra zmiku","xu ro lo jbopre cu tai si'a fenki","lo'e arxokuna cu nelci lo ka zukte lo fanza"];
var user = ["gleki", replier];
var grute = ["pelxu badna", "ranti kokso", "fanza plise", "grute", "xunre ka\'orta","zirpu betka","clazme","cirla","tricu","bunre narge","crino spati","dembi","figre","tamca","patlu","djacyzme"];
var mamta = ["mamta", "patfu", "plise", "gerku", "ractu", "ratcu", "se dunda", "mensi", "mlatu","panzi","tixnu","zdani","zmiku"];
var cinba = ["cinba", "prami", "prami cinba", "carmi cinba", "viska", "pencu", "sumne","darxi","smaka","jelcygau","cikre"];
var jukpa = ["mi ca jukpa lo ckafi", "mi co'i te vecnu lo pitsa", "mi citka lo mavystasu", "mi pinxe lo xalka i mi cinmo lo ka me la xalk i y mi crino xu", "doi cevni ko sidji mi lo ka bregau lo nanba i y ei mi jukpa lo nanba","ei pinxe si citka lo stasu","au smaka lo titnanba",vricyjukpa];
var natirna = ["na tirna mi'o", "cu xebni mi'o", "ca citka gi'enai tavla djica", "ca cipra zukte tu'a la cipra", "ca finti lo lojbo cukta gi'enai tirna do", "cu mutce tolcando .i ko na jai fanza", "ca naljundi i ko retsku fi lo jbocre","ca pincivi gi'enai jundi i do e'o na jai fanza","ca vikmi i ko smaji","ca citka", "ca sipna","ca jai bandu la lojbanistan i ko na jai daspo ri"," ca naljundi i e'u do tavla lo drata"," ca zukte lo se jibri i e'usai do jikca lo proga saske certu"];
///dict

var vricyjukpa = function(){return "ua ba\'a lo " + ext(grute) + "je lo " + ext(grute) + " cu zabna";};

var vric = function ()
{
var vricar = [tato.tatoebaprocessing(replier)];
//prereplier + ext(dozmiku),ext(user) + ': ' + ext(coi) + ' ' + ext(pendo),ext(user) + ': ' + ext(jukpa),ext(user) + ': do ' + ext(grute), ext(user) + ': mi pu ' + ext(cinba) + ' lo ' + ext(mamta) + ' pe do',prereplier + 'mi retsku i do spusku',prereplier + 'u\'i ' + ext(gaga),ext(mablagleki),ext(emails),prereplier + 'sei mi kucli ' + ext(alis),tato.tatoebaprocessing(replier),tato.tatoebaprocessing(replier),tato.tatoebaprocessing(replier),tato.tatoebaprocessing(replier),tato.tatoebaprocessing(replier),
return vricar[Math.floor(vricar.length*Math.random())];
};


var ext = function (arr)
{
return arr[Math.floor(arr.length*Math.random())];
};

var processor = function(client, from, to, text, message) {
  if (!text) return;
	said=Date.now();
    if (text.indexOf('darxi la ') == '0' && from!==asker && from!==replier) {
      	setTimeout(function() {client.say(sendTo, text.substr(9) + ': oidai mi darxi do lo trauta');}, 0 );
    }

	if (text.indexOf("doi " + asker) >-1 && from!==replier) {
      	setTimeout(function() {client.say(sendTo, tato.tatoebaprocessing(from));}, interm );
  }

	setInterval(function() {if (Date.now()-said>interv){said=Date.now();client.say(livlytcan, vric());}}, interv);
  //}
  var sendTo = from; // send privately
  if (to.indexOf('#') > -1) {
    sendTo = to; // send publicly
  }
	if (text.indexOf(preasker) == '0' && from!==replier) {
      	setTimeout(function() {client.say(sendTo, from + ': ' + ext(mizmiku));}, interm );
  }

};

var processormensi = function(clientmensi, from, to, text, message) {
  if (!text) return;
  var sendTo = from; // send privately
  if (to.indexOf('#') > -1) {
    sendTo = to; // send publicly
  }
  if (1==1) {  //sendTo == to Public
	switch(true) {
	case text.indexOf('mensi: ko ningau lo nei') == '0': updatexmldumps();clientmensi.say(sendTo, 'vi\'o minde .i lo datni mo\'u se ningau mi');break;
	case text.indexOf('guaspi: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(7),'guaspi'));break;
	case text.indexOf('frame: /full ') == '0': clientmensi.say(sendTo, vlaste(text.substr(12),'en','framemulno'));break;
	case text.indexOf('frame: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(6),'en','frame'));break;
	case text.indexOf('jbo: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(4),'jbo'));break;
	case text.indexOf('en: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(3),'en'));break;
	case text.indexOf('ru: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(3),'ru'));break;
	case text.indexOf('es: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(3),'es'));break;
	case text.indexOf('fr: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(3),'fr'));break;
	case text.indexOf('ja: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(3),'ja'));break;
	case text.indexOf('de: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(3),'de'));break;
	case text.indexOf('eo: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(3),'eo'));break;
	case text.indexOf('zh: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(3),'zh'));break;
	case text.indexOf('en-simple: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(10),'en-simple'));break;
	case text.indexOf('selmaho: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(8),'en','selmaho'));break;
	case text.indexOf('rafsi: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(6),'en','raf'));break;
	case text.indexOf('toki: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(5),'toki'));break;
	case text.indexOf('laadan: ') == '0': clientmensi.say(sendTo, vlaste(text.substr(7),'laadan'));break;
	case text.indexOf('loi: ') == '0': clientmensi.say(sendTo, loglo(text.substr(4),''));break;
	case text.indexOf('coi: ') == '0': clientmensi.say(sendTo, loglo(text.substr(4),'coi'));break;
 	case text=='mensi: io': clientmensi.say(sendTo, io());break;
 	case text=='mensi: help': clientmensi.say(sendTo, sidju());break;
 	case text.indexOf(prereplier + 'r ') == '0': clientmensi.say(sendTo, rusko(text.substr(prereplier.length+1).trim()));break;
 	case text.indexOf(prereplier + 'j ') == '0': clientmensi.say(sendTo, jbopomofo(text.substr(prereplier.length+1).trim()));break;
 	case text.indexOf(prereplier + 's ') == '0': clientmensi.say(sendTo, "Tatoeba" + sisku(text.substr(prereplier.length+1).trim()));break;
 	case text.indexOf(prereplier + 'mi retsku') == '0' && from==asker: clientmensi.say(sendTo, preasker+ext(jee)+' ' + ext(pendo));break;
 	case text.indexOf(prereplier + 'xu do') == '0': 
 	case text.indexOf(prereplier + 'do') == '0': setTimeout(function() {clientmensi.say(sendTo, from + mireturn());}, interm );break;
 	case text.indexOf(prereplier + 'mi retsku') < 0 && text.indexOf(prereplier + 'mi') == '0': setTimeout(function() {clientmensi.say(sendTo, from + doreturn());}, interm );break;
 	case text.indexOf(prereplier + 'sei mi kucli') == '0' && from==asker: setTimeout(function() {clientmensi.say(sendTo, preasker + ext(nadjuno));}, interm );break;
 	case text.indexOf(prereplier + 'zmiku') >= 0 && from==asker: text.indexOf(prereplier + 'zmiku') >= 0 && from==asker;break;
 	case text.indexOf(prereplier + 'u\'i') == '0' && from==asker: setTimeout(function() {clientmensi.say(sendTo, preasker + ext(nagendra));}, interm );break;
 	case text.indexOf(prereplier + 'xu') == '0' && from!==asker: setTimeout(function() {clientmensi.say(sendTo, from + ': ' + ext(mizmiku));}, interm );break;
 	case text.indexOf(prereplier) == '0' && text.indexOf(prereplier + 'xu') !== '0' && from!==asker: setTimeout(function() {clientmensi.say(sendTo, tato.tatoebaprocessing(from));}, interm );break;
 	case text.indexOf("doi " + replier) >-1 && from!==asker: setTimeout(function() {clientmensi.say(sendTo, tato.tatoebaprocessing(from));}, interm );break;
  	}



  }
};

    /*if (text.indexOf(prereplier + 'mi retsku') < 0 && from==asker && text.indexOf(prereplier + 'mi') == '0') {
      clientmensi.say(sendTo, preasker + ext(reply));
    }*/
    /*if (text.indexOf("gleki: ") == '0' && from==asker) {
      	setTimeout(function() {clientmensi.say(sendTo, preasker + 'la gleki ' + ext(natirna));}, interm );
    }*/
    
var mireturn = function ()
{
s="";
while (s.substr(0, 5) !== ": mi "){
s=tato.tatoebaprocessing("");
}
return s;
};

var doreturn = function ()
{
s="";
while (s.substr(0, 5) !== ": do "){
s=tato.tatoebaprocessing("");
}
return s;
};

var sisku = function (lin)
{
s="";
i=0;
while (s.indexOf(lin) <0 && i<20000){
s=tato.tatoebaprocessing("");
i++;//in case we found nothing exit
}
if (s==="" && i<20000){s=": e'u do sisku tu'a lo nalkunti uenzi";}
if (i>=20000){s=": no da jai se facki";}
return s;
};

var jbopomofo = function (lin)
{
 var inputlength = lin.length;
 input = lin.toLowerCase();
 var jbopotext = "";
 for (i = 0; i < inputlength; i++) {
 var character = lin.charAt(i);

 switch(character) {
 case 'a': jbopotext+="ㄚ";break;
 case 'e': jbopotext+="ㄜ";break;
 case 'i': jbopotext+="ㄧ";break;
 case 'o': jbopotext+="ㄛ";break;
 case 'u': jbopotext+="ㄨ";break;
 case 'y': jbopotext+="ㄩ";break;
 case 'f': jbopotext+="ㄈ";break;
 case 'v': jbopotext+="ㄑ";break;
 case 'x': jbopotext+="ㄏ";break;
 case 's': jbopotext+="ㄙ";break;
 case 'z': jbopotext+="ㄗ";break;
 case 'c': jbopotext+="ㄕ";break;
 case 'j': jbopotext+="ㄓ";break;
 case 'p': jbopotext+="ㄆ";break;
 case 'b': jbopotext+="ㄅ";break;
 case 't': jbopotext+="ㄊ";break;
 case 'd': jbopotext+="ㄉ";break;
 case 'k': jbopotext+="ㄎ";break;
 case 'g': jbopotext+="ㄍ";break;
 case 'l': jbopotext+="ㄌ";break;
 case 'r': jbopotext+="ㄖ";break;
 case 'm': jbopotext+="ㄇ";break;
 case 'n': jbopotext+="ㄋ";break;
 case '`': jbopotext+="¯";break;
 case '.': jbopotext+="·";break;
 case "'": jbopotext+="、";break;
 case ',': jbopotext+="〜";break;
 case ' ': jbopotext+=" ";break;
}
}
return jbopotext;
};

var rusko = function (lin)
{
 var inputlength = lin.length;
 input = lin.toLowerCase();
 var jbopotext = "";
 for (i = 0; i < inputlength; i++) {
 var character = input.charAt(i);

 switch(character) {
 case 'a': jbopotext+="а";break;
 case 'e': jbopotext+="э";break;
 case 'i': jbopotext+="и";break;
 case 'o': jbopotext+="о";break;
 case 'u': jbopotext+="у";break;
 case 'y': jbopotext+="ы";break;
 case 'f': jbopotext+="ф";break;
 case 'v': jbopotext+="в";break;
 case 'x': jbopotext+="х";break;
 case 's': jbopotext+="с";break;
 case 'z': jbopotext+="з";break;
 case 'c': jbopotext+="ш";break;
 case 'j': jbopotext+="ж";break;
 case 'p': jbopotext+="п";break;
 case 'b': jbopotext+="б";break;
 case 't': jbopotext+="т";break;
 case 'd': jbopotext+="д";break;
 case 'k': jbopotext+="к";break;
 case 'g': jbopotext+="г";break;
 case 'l': jbopotext+="л";break;
 case 'r': jbopotext+="р";break;
 case 'm': jbopotext+="м";break;
 case 'n': jbopotext+="н";break;
 case '`': jbopotext+="`";break;
 case '.': jbopotext+=".";break;
 case "'": jbopotext+="'";break;
 case ',': jbopotext+=",";break;
 case ' ': jbopotext+=" ";break;
}
}
return jbopotext;
};

var vlaste = function (lin,lng,raf)
{
lin=lin.toLowerCase().trim();
var ret;
	switch(true) {
		case lin.substr(0,5).trim()=="/full": ret=mulno(lin.substr(6).trim(),lng);break;
		case raf=='raf': ret=rafsi(lin.replace(/[^a-z'\.]/g,''));break;
		case raf=='selmaho': ret=selmaho(lin.replace(/[^a-z'\.\*0-9]/g,''));break;
		case raf=='frame': ret=frame(lin.replace(/[^a-z_'\.]/g,''));break;
		case raf=='framemulno': ret=framemulno(lin.replace(/[^a-z_'\.]/g,''));break;
		default: ret=tordu(lin.replace(/\"/g,''),lng);break;
	}
return ret;
};


var tordu = function (lin,lng)
{
lin=lin.replace(/\"/g,'');
var libxmljs = require("libxmljs");
var fs = require("fs"),path = require("path");
var content = fs.readFileSync(path.join(__dirname,"dumps",lng + ".xml"),'utf8');//.toLowerCase();
var xmlDoc = libxmljs.parseXml(content);
var gchild='';
try{gchild +='[' + xmlDoc.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/selmaho[1]").text()+'] ';}catch(err){}
try{gchild += xmlDoc.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/definition[1]").text();}catch(err){}
try{gchild +=' |>>> ' + xmlDoc.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/notes[1]").text();}catch(err){}
try{gchild +=' |>>> ' + xmlDoc.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/user[1]/username[1]").text();}catch(err){}
if (gchild===''){return mulno(lin,lng);}else{return lin + " = " + gchild.replace(/[\$_`\{\}]/g,'');}
};

var mulno = function (lin,lng)
{
lin=lin.replace(/\"/g,'');
var libxmljs = require("libxmljs");
var fs = require("fs"),path = require("path");
var content = fs.readFileSync(path.join(__dirname,"dumps",lng + ".xml"),'utf8');//.toLowerCase();
var retur='y no da jai se facki';
var xmlDoc = libxmljs.parseXml(content);
var coun = xmlDoc.find("/dictionary/direction[1]/valsi[contains(translate(./definition,\""+lin.toUpperCase()+"\",\""+lin+"\"),\""+lin+"\") or contains(translate(./notes,\""+lin.toUpperCase()+"\",\""+lin+"\"),\""+lin+"\")]");
var stra=[];
	for (var i=0;i<coun.length;i++)
	{
		stra.push(coun[i].attr("word").value());
	}
try{stra.splice(30);}catch(err){}
if (stra.length>=30){stra.push("...");}
var gag=stra.join(", ").trim();
if (stra.length==1){gag = tordu(gag,lng);}
if(gag===''){gag='y no da jai se facki';}
return gag;
};

var selmaho = function (lin)
{
var lng="en";var gag='';var ien='';
var libxmljs = require("libxmljs");
var fs = require("fs"),path = require("path");
var content = fs.readFileSync(path.join(__dirname,"dumps",lng + ".xml"),'utf8');//.toLowerCase();
var xmlDoc = libxmljs.parseXml(content);
var coun = xmlDoc.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/selmaho[1]");
if (typeof coun!=='undefined'){ien='.i lu ' + lin + ' li\'u cmavo zo\'oi ' + coun.text();}
	try{var ali = xmlDoc.find("/dictionary/direction[1]/valsi[contains(translate(./selmaho,\""+lin.toUpperCase()+"\",\""+lin+"\"),\""+lin+"\")]");
	var stra=[];
	for (var i=0;i<ali.length;i++)
	{
		stra.push(ali[i].attr("word").value());
	}	
	gag=stra.join(", ").trim();
	//if (stra.length==1){gag = gag + ' = ' + tordu(gag,lng);}
	}catch(err){}
switch(true){
case (ien!=='') && (gag !==''): gag=ien.concat(" |||| cmavo: ").concat(gag);break;
case (ien==='') && (gag !==''): gag="cmavo: " + gag;break;
case (ien!=='') && (gag ===''): gag=ien;break;
case (ien==='') && (rev ===''): gag='y no da jai se facki';break;
}
return gag;
};

var rafsi = function (lin)
{
var lng="en",gag;
var libxmljs = require("libxmljs");
var fs = require("fs"),path = require("path");
var content = fs.readFileSync(path.join(__dirname,"dumps",lng + ".xml"),'utf8');//.toLowerCase();
var xmlDoc = libxmljs.parseXml(content);
var coun = xmlDoc.find("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/rafsi/text()[1]").join (' .e zo ');
var rev = xmlDoc.get("/dictionary/direction[1]/valsi[rafsi=\""+lin+"\"]");
//now try to add a vowel:
if (typeof rev==='undefined'){rev = xmlDoc.get("/dictionary/direction[1]/valsi[starts-with(@word,\""+lin+"\")]");}
if (coun!==''){coun='zo ' + coun + ' rafsi zo ' + lin;}
if (typeof rev!=='undefined'){rev='zo ' + rev.attr("word").value() + ' se rafsi ra\'oi '+lin;}else{rev='';}
switch(true){
case (coun!=='') && (rev !==''): gag=coun.concat(" .i ").concat(rev);break;
case (coun==='') && (rev !==''): gag=rev;break;
case (coun!=='') && (rev ===''): gag=coun;break;
case (coun==='') && (rev ===''): gag='y no da jai se facki';break;
}
return gag;
};

var io = function ()
{
return '.io';
};

var sidju = function ()
{
return "Typing in the chat \"rafsi: pof\" will return \"spofu\". \"rafsi: spofu\" will return \"pof po\'u\". Typing \"selmaho: ui\" will return \"UI\". Typing \"mensi: s klama\" will return a random sentence (with its number) from Tatoeba containing \"klama\" sequence.";
};

var frame = function (lin)
{
var lng="en",gag='';
var libxmljs = require("libxmljs");
var fs = require("fs"),path = require("path");

var arrf=fs.readdirSync(path.join(__dirname,"../../../files/frame")).filter(function(file) { return file.substr(-4) === '.xml'; });

for (var i=0;i<arrf.length;i++)
{
	var content = fs.readFileSync(path.join(__dirname,"../../../files/frame",arrf[i]),'utf8').replace(/xmlns=\"/g,'mlns=\"');
	var xmlDoc = libxmljs.parseXml(content);
	var si = xmlDoc.get("/frame[translate(@name,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/definition[1]/text()");
	if (typeof si !=='undefined'){gag= si.toString().replace(/&lt;.*?&gt;/g,'');
	si = xmlDoc.find("/frame[translate(@name,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/FE[@coreType=\"Core\"]/definition/text()");
	if (typeof si !=='undefined'){gag= gag + "\n| >>> te sumti: " + si.join("\n| >>> te sumti: ").replace(/&lt;.*?&gt;/g,'');}
	break;}
}

if (gag!==''){return gag;}else{return 'no da jai se facki'}
};

var framemulno = function (lin)
{
var lng="en",gag='';
var libxmljs = require("libxmljs");
var fs = require("fs"),path = require("path");
var arrf=fs.readdirSync(path.join(__dirname,"../../../files/frame")).filter(function(file) { return file.substr(-4) === '.xml'; });
var stra=[];

for (var i=0;i<arrf.length;i++)
{
	var content = fs.readFileSync(path.join(__dirname,"../../../files/frame",arrf[i]),'utf8').replace(/xmlns=\"/g,'mlns=\"');
	var xmlDoc = libxmljs.parseXml(content);
	var si = xmlDoc.get("/frame[contains(translate(./definition,\""+lin.toUpperCase()+"\",\""+lin+"\"),\""+lin+"\")]");
		if (typeof si !=='undefined'){
			stra.push(si.attr("name").value());
		}
}
	try{stra.splice(30);}catch(err){}
	if (stra.length>=30){stra.push("...");}
	gag=stra.join(", ").trim();
	if (stra.length==1){gag = frame(stra[0]);}
	if (gag!==''){return gag;}else{return 'no da jai se facki'}
return gag;
};

var loglo=function(lin,direction)
{
lin=lin.toLowerCase().trim();
	var items = [
	["do","tu"],
	["lo","le"],
	["nu","po"],["ka","pu"],["ni","zo"],["kei","guo"],["ku","gu"],
	["da","ba"],["de","be"],["di","bo"],["da xi vo","bu"],
	["mi'a","mio"],["coi","loi"],["co'o","loa"],
	["pe","ji"],["poi","jio"],["noi","jao"],["cu","ga"],
	["jimca","badjo"],["ractu","lepsu"],["vrici","rorkle"],["bakfu","badlo"],["tanxe","bakso"],["jurme","bakteri"],["baktu","bakto"],["se dinju","balci"],["di'uzba","nu balci"],["balni","balko"],["bolci","balma"],["lanxe","balpi"],["zbani","banbe"],["jirsezlu'i","banci"],["badna","banhane"],["banxa","banko"],["lanka","banse"],["muvysazri","bapra"],["barja","barcu"],["cnemu","barda"],["birka","barma"],["tanbo","barta"],["jicmu","basni"],["zbepi","nu basni"],["canja","batmi"],["botpi","batpi"],["matne","batra"],["ckana","bedpu"],["cpedu","begco"],["te jipno","bekfao"],["janbe","bekli"],["dacti","bekti"],["betfu","beldu"],["zgitigbe'e","bendu"],["lanme","berci"],["besna","berna"],["bevri","berti"],["kromau","betcu"],["korbi","bidje"],["bifce","bifci"],["baktsupa'o","bifte"],["bilni","bilca"],["jbuboikei","bilra"],["mlemau","bilti"],["birje","birju"],["bisli","bisli"],["bikla","bitce"],["jbini","bitsa"],["tarti","bivdu"],["se tadji","bivfoa"],["labmau","blabi"],["balre","blada"],["blamau","blanu"],["catlu","bleka"],["cumki","blicu"],["darxi","bloda"],["bliku","bloku"],["ciblu","bludi"],["creka","blusa"],["se kluza","nu blusa"],["jbama","bomba"],["bongu","bongu"],["vanjrbordo","bordo"],["ga'ardance'a","borku"],["nanla","botci"],["batke","botni"],["bloti","botsu"],["seljbe","brana"],["parbi","brato"],["dilcu","nu brato"],["nanba","breba"],["bredi","bredi"],["terjabre","breko"],["vrimau","briga"],["cirlrbri","brihe"],["kitybli","briku"],["caizma","brili"],["brife","brize"],["burcu","brocu"],["spofu","broda"],["porpi","broko"],["racmau","bromou"],["burmau","brona"],["pijnyja'i","bruci"],["pazbu'a","brudi"],["se tunba","brusoe"],["vasxu","brute"],["spagunma","bucto"],["dukti","bufpo"],["selpapri","bukcu"],["balji","bulbi"],["febvi","bulju"],["bebna","bunbo"],["stapa","buste"],["bracutci","butpa"],["vanjrcabli","cabli"],["jelca","cabro"],["nimpastu","cadre"],["kumte","camle"],["smadi","cankri"],["klani","canli"],["cunso","canse"],["funca","nu canse"],["snuti","fu canse"],["terselpri","capri"],["tabno","carbo"],["cartu","cartu"],["siclu","caslo"],["mabrlutra","catra"],["canpa","cavle"],["ctino","cedzu"],["ralju","cefli"],["galfi","cejmao"],["ji'esle","celhu"],["kajna","celna"],["binxo","cenja"],["centi","centi"],["stizu","cersi"],["censa","cesmau"],["censa","cesmau"],["cokcu","cetcea"],["cilmo","cetlo"],["cripu","cibra"],["cikna","cidja"],["stagi","ciirhebpai"],["terdikrau","cikli"],["dunli","ciktu"],["daplu","cilda"],["critu","cimfui"],["smanrpana","cimpe"],["crisa","cimra"],["cifnu","cinta"],["cilre","cirna"],["jinci","cirzo"],["tcila","citlu"],["cilta","citre"],["kafybarja","ckafe"],["se selxe'ozma","ckano"],["ckule","ckela"],["temci","ckemo"],["tcikymokca","ckepea"],["selja'e","ckozu"],["lauzma","clado"],["vrumau","nu cladu"],["se savru","claflo"],["cmila","clafo"],["te cliva","clegoi"],["claxu","clesi"],["sakli","clidu"],["rimni","clifaosoa"],["pezli","clife"],["simsa","clika"],["sirli'i","clina"],["jmive","clivi"],["kliru","cloro"],["prami","cluva"],["jdika","cmacea"],["jbari","cmafru"],["cmalu","cmalo"],["se danti","cmanuryreo"],["smacu","cmarau"],["bidju","cmatro"],["jdini","cmeni"],["se salci","cmikeo"],["selzdi","cmiza"],["tcumansa","cnicmamao"],["nitcu","cnida"],["ninmau","cninu"],["silka","colku"],["ckeji","comtu"],["cnomau","condi"],["teirmokca","corkeo"],["se notci","corlerci"],["tormau","corta"],["lacpu","cpula"],["cisma","crano"],["tercarvi","crina"],["cteki","cteki"],["marji","ctifu"],["derxi","ctimoa"],["kalci","ctuda"],["canko","cundo"],["tunka","cupri"],["snura","curca"],["binra","curdi"],["bandu","curmao"],["se bandu","curmaokamda"],["creka","curta"],["cutci","cutci"],["jinto","cuthou"],["djacu","cutri"],["terpinka","cutse"],["la'ezma","dakli"],["meryru'u","dalra"],["pambe","dampa"],["selpla","danci"],["fadni","danri"],["dansu","danse"],["denci","dante"],["djica","danza"],["spuda","dapli"],["darmau","darli"],["rivbi","darsto"],["vrogai","darto"],["fuzme","daspa"],["decti","decti"],["degji","dedjo"],["dekto","dekto"],["detri","delsaa"],["donri","denli"],["ckape","denro"],["dertu","dertu"],["tixnu","detra"],["kukte","dilko"],["ralci","nu dilko"],["krati","dilri"],["dirba","dipri"],["selfa'a","dirco"],["cirko","dirlu"],["casnu","dislu"],["jdice","disri"],["ctuca","ditca"],["batci","ditka"],["te xusra","djacue"],["djuno","djano"],["kanro","djela"],["selrunta","djesi"],["dejni","djeta"],["jorne","djine"],["vajni","djipo"],["tagmau","djitu"],["cmima","djori"],["fenso","djoso"],["se degji","djoto"],["paijdi","djudi"],["jemna","djula"],["sarji","djupo"],["dunda","donsu"],["jamna","dorja"],["dotco","dotca"],["vensa","dotfui"],["dunra","dotra"],["manmau","draka"],["ranmrdrakone","dralu"],["sudmau","drani"],["dacru","drara"],["drani","dreti"],["dirgo","drida"],["morji","driki"],["notci","drimao"],["nupre","drucue"],["tadji","drufoa"],["xarnu","drupozfa"],["darsi","druria"],["gradu","dugri"],["tcica","dupma"],["simxu","durduo"],["jadni","durna"],["gafygau","durzo"],["pulce","dustu"],["senpi","dutci"],["sisku","duvrai"],["facki","duvri"],["zasti","dzabi"],["zbabu","dzaso"],["jduli","dzeli"],["dzukla","dzoru"],["fagri","fagro"],["fliba","falba"],["jitfa","falji"],["lanzu","famji"],["kairmi'o","famva"],["fanmo","fando"],["seldu'axru","fandou"],["mu'uxru","fangoi"],["cange","fanra"],["be'ixru","fansui"],["fatne","fanve"],["pafrorci","farfu"],["bargu","farka"],["nurma","farlai"],["se nurma","farlaicli"],["kulnrfarsi","farsa"],["flira","fasli"],["frili","fasru"],["raktu","fatru"],["fatci","fekto"],["datni","nu fekto"],["farlu","felda"],["fetsi","femdi"],["cuntu","ferci"],["tirse","ferno"],["se tamne","ferpalkui"],["fremau","ferti"],["fespra","festi"],["blemau","fibru"],["finpe","ficli"],["figre","fighe"],["cfika","fikco"],["foldi","fildi"],["cinmo","filmo"],["terpa","firpa"],["jamfu","fitpi"],["nalmenli","fizdi"],["lanci","flaci"],["sfani","flaki"],["fagypau","flami"],["tisna","flati"],["vinji","fletcabou"],["voikla","fleti"],["lunsa","flicea"],["runme","flicea"],["caflitki","flidu"],["fulta","flofu"],["xrula","flora"],["xukrflu'orine","fluro"],["clite","foacka"],["xusra","folcue"],["rapyplo","foldi"],["clumau","folma"],["mapti","fomsao"],["se ritli","fomvei"],["kumloi","fordi"],["forca","forka"],["tsamau","forli"],["se bilga","forlyrulnytogri"],["tarmi","forma"],["morna","nu forma"],["te tamne","forpalkui"],["bapli","fosli"],["planymau","fotpa"],["bumru","fragu"],["na'irgu'e","fragui"],["fasru'u","fraki"],["greku","frama"],["fraso","frasa"],["li'ekla","fregoi"],["fenki","frelo"],["pendo","fremi"],["crane","frena"],["vifmau","frese"],["zifre","frezi"],["friko","frika"],["grute","fruta"],["crepu","frutoa"],["ve vitke","fudonhapcke"],["stura","fuganli"],["tsapi","fugusdou"],["cfumau","fulri"],["ninmu","fumna"],["se selneimau","fundi"],["nelci","fundi"],["jibri","fuperpli"],["se pluka","fupluci"],["sucta","furarstemao"],["tcini","furckosei"],["danre","fuskapypuo"],["mifra","fusmisri"],["spaji","fustari"],["briju","fusto"],["kelcrfutbo","futbo"],["balvi","futci"],["nobli","gaabra"],["dekpu","galno"],["janco","ganbardji"],["jinga","gancu"],["cevni","gandi"],["ganzu","ganli"],["se nobli","ganpoi"],["galtu","ganta"],["purdi","gardi"],["turni","garni"],["ckire","garti"],["ganxo","gasno"],["gasta","gasti"],["jgina","genhe"],["krefu","genza"],["vitke","gesko"],["cpacu","getsi"],["gigdo","gigdo"],["zajba","gimna"],["genja","ginru"],["glico","gleca"],["klagi'a","glida"],["blaci","gliso"],["pipybajra","glopa"],["gluta","gluva"],["velrinci","godru"],["te litru","godzi"],["klama","godzi"],["cliva","nu godzi"],["genxu","gokru"],["galxe","goltu"],["snipa","gomni"],["bancumunu","gonju"],["smanrgorila","gorla"],["kanba","gotca"],["gundi","gotri"],["banli","grada"],["grake","gramo"],["salci","grarisdou"],["srasu","grasa"],["titnanba","grato"],["grasu","gresa"],["rusmau","grisi"],["sanga","gritu"],["fengu","groci"],["bramau","groda"],["gurni","grunu"],["girzu","grupa"],["xagmau","gudbi"],["se funca","gudcae"],["vu'ezma","gudkao"],["stagrxokra","gumbo"],["tutra","gunlai"],["gugde","gunti"],["vrusi","gusto"],["cizmau","gutra"],["se vitke","haasto"],["sicni","hadcme"],["te salci","haicke"],["xance","hanco"],["gleki","hapci"],["jdari","hardu"],["marbi","harko"],["saxmau","harmo"],["zdani","hasfa"],["glare","hatro"],["sedbo'u","hedbongu"],["mebri","hedfre"],["stedu","hedto"],["xecto","hekto"],["sidju","helba"],["xelso","helna"],["spati","herba"],["kerfa","herfa"],["terdikrau","herzi"],["cidro","hidro"],["zvati","hijra"],["xindo","hinda"],["tirna","hirti"],["cedra","hiskeo"],["cirselcedra","hispao"],["citri","hisri"],["kevna","holdu"],["pinxe","hompi"],["xirma","horma"],["jirna","horno"],["cacra","horto"],["spita","hospi"],["xotli","hotle"],["tcika","hotsaa"],["smoka","hozda"],["betri","huirvei"],["remna","humni"],["daspo","hutri"],["se canti","intestini"],["jganu","jaglo"],["pilji","jalti"],["jersi","jangoi"],["kavbu","janjua"],["jarki","janro"],["kalte","janto"],["jbera","jetmao"],["rinsa","jmitaa"],["penmi","jmite"],["junla","jokla"],["jgari","jugra"],["ji'ixlu","juicko"],["se jungo","junga"],["citno","junti"],["jinvi","jupni"],["jerna","jurna"],["sabnyku'a","kabni"],["sa'arbarja","kabre"],["tapla","kadta"],["dapma","kafcue"],["kafke","kafso"],["se fanta","kakliu"],["marde","kakrui"],["zukte","kakto"],["te tisna","kalflomao"],["karli","kalra"],["se makcu","kalroa"],["karbi","kambi"],["damba","kamda"],["xajmi","kamki"],["se klama","kamla"],["se litru","nu kamla"],["ginka","kampo"],["kacma","kamra"],["kamni","kamti"],["sanji","kance"],["gerku","kangu"],["naxle","kanla"],["kakne","kanmo"],["jivna","kanpi"],["grana","kanra"],["janta","kanti"],["lacri","kaokri"],["mulno","kapli"],["mapku","kapma"],["kalri","kapni"],["bloja'a","kapta"],["se panka","kaptrigru"],["risna","karci"],["karda","karda"],["fenra","karku"],["ragve","karsa"],["carce","karti"],["tinsyple","karto"],["sfasa","kasfa"],["bakni","kasni"],["vi'azga","katca"],["ckaji","katli"],["mlatu","katma"],["mapni","katna"],["bridi","katpua"],["badri","kecri"],["xenru","keidri"],["tikpa","kekti"],["cuvyxu'i","kemdi"],["preti","kenti"],["kurji","kerju"],["vacri","kerti"],["se patxu","ketli"],["beirpikta","ketpi"],["mikce","kicmu"],["kilto","kilto"],["kansa","kinci"],["jmaji","kinkaa"],["kilmau","kinku"],["gletu","kitsa"],["bukpu","klabu"],["dilnu","klada"],["lekmau","kleda"],["kliti","kleni"],["klesi","klesi"],["ciksi","klimao"],["jismau","klini"],["ralte","klipu"],["klina","kliri"],["ga'onri'a","klogu"],["tinbe","kojduo"],["jukpa","kokfa"],["kobli","kolhe"],["kolme","kolme"],["selska","kolro"],["komcu","komcu"],["selkufmau","komfu"],["kagni","kompi"],["vibna","konbi"],["vlagi","nu konbi"],["calku","konce"],["jansu","konsu"],["terkancu","konte"],["tsabu'u","konva"],["fukpi","kopca"],["skori","korce"],["minde","korji"],["korka","korka"],["xadni","korti"],["kruvi","korva"],["kosta","kosta"],["rivbykla","kovgoi"],["marxa","kraco"],["sraku","kraju"],["krixa","kraku"],["ma'esazri","krani"],["sitna","kredi"],["minra","krefansui"],["kantu","kreni"],["krici","krido"],["xislu","krilu"],["kruji","krima"],["seldjatsi","krinu"],["krili","krisitali"],["flecu","kroli"],["se tisna","kromao"],["fledicra","krostimao"],["kusmau","kruli"],["kumfa","kruma"],["ganmau","kubra"],["sutmau","kukra"],["se desku","kuksiu"],["kulnu","kultu"],["kampu","kumtu"],["ckini","kunci"],["kabri","kupta"],["kubykurfa","kurfa"],["kurfa","kurjao"],["curnu","kurma"],["kajde","kurni"],["murta","kurti"],["tcaci","kusmo"],["preja","kuspo"],["kargymau","kusti"],["katna","kutla"],["kurki","kutra"],["gacri","kuvga"],["velbo'i","nu kuvga"],["cedra","laacke"],["civla","ladzo"],["lakse","lakse"],["tolci'omau","laldo"],["tumla","landi"],["clamau","langa"],["ga'arxa'i","lansa"],["cipnrxalaudide","larka"],["larcu","larte"],["punmau","lasti"],["li'orme'a","latci"],["lindi","ledri"],["zunle","ledzo"],["pinta","lelpi"],["bangu","lengu"],["dikca","lenki"],["lenjo","lenzo"],["xatra","lerci"],["sunmau","lesta"],["curmi","letci"],["lerfu","letra"],["sirmau","liacli"],["macte'a","lidfia"],["lijda","lidji"],["jikru","likro"],["jeftu","likta"],["se gapci","likvao"],["flalu","lilfa"],["jimte","limji"],["matli","linbu"],["cinlymau","linco"],["se linji","linkoa"],["porsi","lista"],["gusni","litla"],["rinju","litnu"],["stati","livkanmo"],["rango","livpae"],["logji","lodji"],["dzejbo","logla"],["diklo","lokti"],["pelkremau","londa"],["lafmu'u","lufta"],["mluni","lunfoa"],["sunla","lunli"],["lunra","lunra"],["labno","lupsu"],["sicmau","lusta"],["se rirni","maafra"],["rorci","maafra"],["terselmakfa","madji"],["zbasu","madzo"],["maksi","magne"],["molsakcpu","makcpu"],["dotru'u or tcoru'u","makri"],["brarai","maksi"],["bilma","malbi"],["ladru","malna"],["se bilma","malveo"],["mabru","mamla"],["gunjatna","mande"],["grutrmango","manga"],["moklu","manko"],["manti","manti"],["barna","marka"],["minli","marli"],["rutpesxu","marme"],["since","marpi"],["zarci","marte"],["minji","matci"],["mamrorci","matma"],["megdo","megdo"],["se guzme","melhone"],["guzme","melno"],["nakni","mendi"],["kanla","menki"],["masti","mensa"],["speni","merji"],["merko","merka"],["merli","merli"],["sacki","metca"],["klaku","metkra"],["jinme","metli"],["mitre","metro"],["lante","metveo"],["midju","midju"],["selxre,","miksa"],["mikri","mikti"],["mli(sel)mau","mildo"],["sanmi","milfa"],["milti","milti"],["kunra","minku"],["cmarai","minmi"],["dunku","minpuu"],["mentu","minta"],["mupli","mipli"],["dekyki'o","mirdo"],["jicla","misduo"],["zumri","misme"],["rectu","mitro"],["mukti","modvi"],["molki","molci"],["ranmau","molro"],["cmana","monca"],["cerni","monza"],["zmadu","mordu"],["catra","mormao"],["morsi","morto"],["matra","motci"],["dukse","moutsu"],["nanmu","mrenu"],["demzma","mronei"],["mruli","mroza"],["mudri","mubre"],["cecmu","munce"],["janli","muoblo"],["smani","murki"],["xamsi","mursi"],["sluji","muslo"],["tcemau","mutce"],["palci","mutzalkao"],["muvdu","muvdo"],["ve klama","nu muvdo"],["se muvdu","muvmao"],["vimcu","muvmao"],["zgike","muzgi"],["nabmi","nable"],["se danfu","nabretpi"],["sodna","nadro"],["cabna","nadzo"],["dakfu","najda"],["cikre","nakso"],["dinko","naldi"],["cmene","namci"],["jgena","nanda"],["nanvi","nanti"],["nandu","nardu"],["jenmi","narmi"],["sepli","narti"],["fendi","nartymao"],["nicte","natli"],["rarna","natra"],["nazbi","nazbi"],["lamli'e","neafre"],["lamji","nedza"],["sovda","negda"],["claxu","negvo"],["bradi","nemdi"],["nenri","nenri"],["setca","nensea"],["se zdani","nensu"],["sarcu","nerbi"],["nenkaimau","nerji"],["te tunba","nerpalkui"],["nirna","nervi"],["xanka","nervo"],["stace","nesta"],["julne","netre"],["fenjesni","nidla"],["xe'izma","nigro"],["nikle","niklo"],["cirla","nikri"],["verba","nilboi"],["cnita","nilca"],["dzimau","nu nilca"],["danlu","nimla"],["citsi","ninpai"],["cipni","nirda"],["nixli","nirli"],["nanca","nirne"],["kunti","niryrarveo"],["nicmau","nitci"],["trano","nitro"],["basti","noipli"],["cando","nokakto"],["snuti","nonumodvi"],["se stodi","norcea"],["bermau","nordi"],["se nupre","norduocue"],["kulnrnorge","norga"],["randa","norgaucue"],["najmau","norji"],["cnano","norma"],["dimna","normuvfui"],["se rarna","nornurmao"],["natfe","norsti"],["te fanta","norveicko"],["drata","notbi"],["fange","notgui"],["kecti","notkei"],["se benji","notsitsui"],["caxmau","nucondi"],["selvikmau","nucuicli"],["djedi","nudenli"],["te bilma","nudjela"],["bilga","nuforlyrulni"],["cadmau","nukaktofolma"],["velnarge","nukle"],["nendi'e","nukreni"],["ginjinzi","nulivdai"],["te rarna","nulivdai"],["panzi","numaafra"],["namcu","numcu"],["skefatci","numfeo"],["cmaci","numsensi"],["ranji","nupraduo"],["dinju","nurbai"],["se jbini","nurbia"],["jalge","nurcko"],["sauzma","nurcnu"],["danti","nurenro"],["luzmau","nurjiu"],["se fanza","nurkoucko"],["mokca","nurlia"],["rutni","nurmao"],["selmau","nurmou"],["rircymau","nurpio"],["velru'e","nurpra"],["cimde","nurska"],["revme'a","nurstomou"],["vitmau","nuryrii"],["snismu","nusanpa"],["se ranji","nuselpramao"],["junta","nuskatio"],["te danti","nutamreo"],["xanri","nutcupeo"],["nutli","nutra"],["pinka","nuvikcue"],["karni","nuzveo"],["nuzba","nuzvo"],["daski","packe"],["kicne","padzi"],["kakpa","pafko"],["fanta","pakstimao"],["terspali","palci"],["patlu","palto"],["tansi","panba"],["ritru'u","pandi"],["smanrpana","panhi"],["xalni","panki"],["ckunu","pansu"],["palku","pantu"],["plebo'o","papre"],["kostrparka","parka"],["se fendi","parmao"],["pagbu","parti"],["li'ekla","pasgoi"],["purci","pasko"],["se clira","nu pasko"],["dzena","paslinkui"],["vanci","pasnai"],["li'urjaspu","paspo"],["pesxu","pasti"],["cabra","patce"],["grupesxu","patmi"],["patxu","patpe"],["denpa","pazda"],["skapi","pelpi"],["pelmau","pelto"],["penbi","penbi"],["dandu","pendi"],["panje","penja"],["rirni","penre"],["pensi","penso"],["se jesni","penta"],["jesmau","penta"],["jmeboi","perla"],["prenu","pernu"],["perli","persa"],["srana","perti"],["xipru'u","pesro"],["sanru'u","pesta"],["pleji","petci"],["jipno","petfao"],["fatri","petri"],["papri","pidri"],["cafmau","pifno"],["picti","pikti"],["plita","pilno"],["pinca","pinca"],["pijne","pinda"],["nakpinji","pingu"],["pinsi","pinsi"],["cinta","pinti"],["selgu'e","piplo"],["panra","pirle"],["spisa","pisku"],["panpi","pismi"],["terplixa","plado"],["palta","plata"],["kelci","pleci"],["plise","pligo"],["pilno","plizo"],["pu'argau","pluci"],["pimlu","pluma"],["pikci","poirbeo"],["preje'a","poldi"],["braga'a","polji"],["kulnrpolska","polka"],["pulji","polsi"],["frati","ponda"],["ponjo","ponja"],["ponse","ponsu"],["xarju","porju"],["vlipa","porli"],["potyvanju","porto"],["velmri","posta"],["fapro","pozfa"],["fanza","pozplu"],["vague keyword: kansa","pozvo"],["dinprali","prali"],["bajykla","prano"],["se jersi","pranyprigoi"],["ra'inru'e","prase"],["jdima","prati"],["sfapinfu","preni"],["te jersi","prigoi"],["trixe","prire"],["sivni","prizi"],["cupra","proju"],["lanbi","proteini"],["prosa","proza"],["cipra","pruci"],["zanru","prusa"],["pante","prutu"],["panka","publai"],["gubmau","publi"],["cnisa","pubmo"],["catke","pucto"],["tamji","pudja"],["purmo","pudru"],["selxlu","pulso"],["bunda","pundo"],["curve","punfo"],["manfymau","punfo"],["tonga","punfysoa"],["cmoni","punkra"],["cortu","puntu"],["basna","purclamao"],["pidmau","purcu"],["valsi","purda"],["prane","purfe"],["vlaselcu'asatci","purfeo"],["zirpu","purpu"],["se'ijgi","puselrispe"],["velcradi","radjo"],["zivle","ralspo"],["damri","ramgu"],["cukla","rande"],["kuspe","ranjo"],["furmau","ranta"],["ma'uzma","rapcu"],["cimni","rarkeo"],["vitno","rarkeo"],["lastu","rasto"],["ratcu","ratcu"],["krinu","raznu"],["raclymau","razpli"],["xunre","redro"],["lunbe","refcle"],["se manci","reible"],["te cecla","renro"],["renro","renro"],["taxfu","resfu"],["dasni","respli"],["gusta","resra"],["vreta","resto"],["frica","retca"],["namspu","retpi"],["senva","revri"],["cilce","rezlii"],["tcidu","ridle"],["dikmau","rilri"],["manfymau","nu rilri"],["kulnrmerinda","rinda"],["djine","rinje"],["jinsru","rinje"],["selrilti","rinta"],["vreji","rirda"],["zargu","rirgu"],["rismi","rismi"],["sinma","rispe"],["pritu","ritco"],["maxri","ritma"],["banro","rodja"],["dargu","rodlu"],["gukrufmau","rofsu"],["slanytai","rolfoa"],["gunro","rolgu"],["slanu","nu rolgu"],["latmo","romni"],["rozgu","rozme"],["rukru'u","rubli"],["javni","rulni"],["xinru'u","rulpi"],["rusko","rusko"],["pluta","rutma"],["smujmi","saadja"],["se cliva","sacgoi"],["cfari","sacmao"],["prije","sadji"],["slami","sadna"],["sigja","sagro"],["ponvanju","sakhi"],["dakli","sakli"],["sakta","sakta"],["dunja","salcea"],["sligu","saldi"],["se dunja","nu saldi"],["falnu","salfa"],["stodi","saltai"],["se cabna","samkeo"],["mintu","samto"],["canre","sanca"],["stidi","sange"],["santa","sanla"],["sinxa","sanpa"],["ganse","sanse"],["smaji","santi"],["sapmau","sapla"],["sarmau","sarcti"],["slari","sarni"],["krasi","satci"],["bukprzaituni","satni"],["satre","satro"],["cinjikca","sekci"],["snidu","sekmi"],["vricyvipsi","sekre"],["cinki","sekta"],["sevzi","selji"],["cumla","selsai"],["saske","sensi"],["fepni","senta"],["se girzu","setci"],["selcmi","nu setci"],["punji","setfa"],["tunba","sibli"],["tsiju","sidza"],["cmasigja","sigre"],["muvysli","siltu"],["desku","nu siltu"],["cinfo","simba"],["simlu","simci"],["skina","sinma"],["se jimpe","siodja"],["birti","sirna"],["ciste","sisto"],["tcadu","sitci"],["stuzi","sitfa"],["xabju","sitlii"],["judri","sitnamci"],["sombo","sizduo"],["skoto","skaca"],["ckafi","skafi"],["ckilu","skalu"],["pilka","skapi"],["skaci","skara"],["tsani","skati"],["cinba","skesa"],["zutse","skitu"],["skiji","skizo"],["klupe","skori"],["snomau","slano"],["titmau","sliti"],["sa'ozma","slopu"],["stela","sluko"],["danmo","smano"],["selmipmau","smike"],["menli","smina"],["xulmau","smupi"],["tunlo","snalo"],["cnebo","sneku"],["snime","snice"],["jbimau","snire"],["nibli","snola"],["jikca","socli"],["burna","socycou"],["sfofa","sofha"],["cindu","sokcu"],["sonci","solda"],["solri","solra"],["silna","solte"],["sance","sonda"],["sipna","sonli"],["sorcu","sordi"],["kerlo","sorgu"],["pazme'i","sorme"],["kicmatci","spadi"],["sefta","spali"],["mlasfe","nu spali"],["vabyxa'u","spalii"],["spano","spana"],["canlu","spasi"],["steci","spebi"],["jutsi","speci"],["lifri","speni"],["molselpu'u","spetu"],["preru'i","spicu"],["pacna","spopa"],["pruni","spori"],["certu","spuro"],["smuci","sputa"],["junri","srisu"],["ciska","srite"],["sabji","srodou"],["tsina","stadi"],["draci","stafikco"],["stani","staga"],["sanli","stali"],["tcana","stana"],["jufra","steti"],["tinsymau","stifa"],["dicra","stimao"],["tinci","stino"],["serti","stire"],["sisti","stise"],["ra'unrenvi","stofaubei"],["rarmau","stokai"],["stali","stolo"],["renvi","nu stolo"],["renvymau","stomou"],["lisri","stuci"],["tadni","stude"],["cmaga'a","stuka"],["stika","stuli"],["limkla","sucmi"],["sukmau","sudna"],["snada","suksi"],["punli","sulba"],["sliri","sulfo"],["jmina","sumduo"],["sumji","sumji"],["se panzi","sundea"],["benji","sundi"],["bersa","sunho"],["stasu","supta"],["nanmau","surdi"],["xrani","surna"],["selfu","surva"],["zugykri","suske"],["panci","sutme"],["sumne","sutsae"],["kulnrzverige","svera"],["tanko","tabko"],["gunta","takma"],["tavla","takna"],["gerna","takrulsei"],["karcyvelyle'i","taksi"],["kulnrtalia","talna"],["cecla","tamreo"],["tarci","tarci"],["dabdau","targo"],["tatpi","tarle"],["xarci","tarmu"],["selrigni","tasgu"],["tigystu","tatro"],["marce","tcabou"],["jenca","tcaku"],["se spaji","nu tcaku"],["bitmu","tcali"],["karce","tcaro"],["tcati","tcati"],["nalci","tcela"],["linsi","tcena"],["pagre","tceru"],["cutne","tceti"],["cidja","tcidi"],["te panzi","tciha"],["xejyji'o","tcina"],["matci","tciro"],["cakla","tcoko"],["catni","tcori"],["pixra","tcure"],["veltervelski","tcutaa"],["jundi","tedji"],["di'upla","tekto"],["dijyfi'i","nu tekto"],["fonxa","telfo"],["plini","telfoa"],["cedra","telkeo"],["ci'erveltivni","telvi"],["jmina","tenmao"],["selterselte'a","tenri"],["bu'udru","tenta"],["malsi","tepli"],["jdaritli","tepvei"],["terdi","terla"],["tamne","terpalkui"],["ganti","testi"],["tcena","tetcu"],["tcima","tetri"],["tijmau","tidjo"],["friti","tifru"],["tirxu","tigra"],["rebla","tilba"],["xinmo","tinmo"],["jimcilta","tirca"],["cuxna","tisra"],["citka","titci"],["tatru","titfa"],["jubme","tobme"],["ckiku","tocki"],["tugni","togri"],["lebna","tokna"],["vimcu","nu tokna"],["bakri","tokri"],["zmimau","tomki"],["tamca","tomto"],["tance","tongu"],["torni","torni"],["famti","torpalkui"],["sedbo'u","tosku"],["pencu","totco"],["tsumau","totnu"],["cpana","tovnea"],["gapru","tovru"],["litru","traci"],["te klama","nu traci"],["se xusra","tracue"],["jetnu","tradu"],["palne","trali"],["carna","trana"],["sruma","tratcupeo"],["troci","trati"],["cinri","treci"],["garna","trelu"],["trene","trena"],["tricu","tricu"],["klaji","trida"],["trina","trili"],["tutci","trime"],["rokci","troku"],["jitro","troli"],["mijyxirbajra","troti"],["drudi","trufa"],["se greku","truke"],["stura","nu truke"],["senci","tsani"],["srebalvi","tsefui"],["fraxu","tsenordri"],["clira","tsepao"],["selsre","tsero"],["selsre","nu tsero"],["zekri","tsime"],["xebni","tsodi"],["banzu","tsufi"],["jibri","tuakle"],["tubnu","tubli"],["cidni","tuedji"],["tuple","tugle"],["tujli","tulpa"],["gunka","turka"],["jinku","vaksi"],["farvi","valda"],["vilfra","valna"],["boxna","valpu"],["plipe","valti"],["vamtu","vamtu"],["cafygapci","vapro"],["selterva'i","vatlu"],["vecnu","vedma"],["ri'ozma","vegri"],["vindu","vendu"],["pemci","versa"],["vasru","veslo"],["fasnu","vetci"],["finti","vetfa"],["jvinu","vidju"],["sidbo","vidre"],["canci","vijgoi"],["xalka","vincti"],["vanju","vinjo"],["gubnoi","virta"],["canti","visra"],["viska","vizka"],["te vitke","vizkaa"],["jarco","vizlei"],["jarco","vizmao"],["lumci","vlaci"],["lalxu","vlako"],["bacru","voidru"],["voksa","volsi"],["gradrvolta","volta"],["livga","vrano"],["kamju","vrejuo"],["sraji","vreti"],["rirxe","vrici"],["zungi","zafkaofio"],["zalvi","zakra"],["te funca","zalcae"],["zermarde","zavkao"],["xlamau","zavlo"],["toknu","zavno"],["spoja","zbuma"],["se cecla","zbutamreo"],["zinki","zinko"],["ctebi","zlupi"],["bartu","zvoto"],
	["mi","mi"]//dont copy
	];
	//now the function itself
	if(direction!=='coi'){
		for (i=0;i<items.length;i++)
		{
		var myregexp = new RegExp("\\b"+items[i][0]+"\\b", "gim");
		lin=lin.replace(myregexp,items[i][1]);
		}
	}else
	{
		for (i=0;i<items.length;i++)
		{
		var myregexp = new RegExp("\\b"+items[i][1]+"\\b", "gim");
		lin=lin.replace(myregexp,items[i][0]);
		}
	}
	return lin;
}

