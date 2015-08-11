// JavaScript Document
// This script generates .html files for la sutysisku of every localization except la muplis
// the template is taken from template.html file

//config
var langs = ["en","ru","eo","fr-facile","ile","ithkuil","ja","jbo","laadan","ldp","ru","zamenhofo","toki"];

///script
var fs = require("fs"),path = require("path-extra");
var templ = fs.readFileSync(path.join(__dirname,"../i/test","template.html"),{encoding: 'utf8'});var bng;var b;
langs.forEach(function(thisa){
	var file = fs.readFileSync(path.join(__dirname,"../i",thisa,"bangu.js"),{encoding: 'utf8'});
	var m = file.match(/window\.bangudesc *= *[\"'](.*?)[\"'];(\n|\r)/)[1].replace(/\\\"/g,"\"");
	b = templ.replace("<div id='description'></div>","<div id='description'>"+m+"</div>");
	
	m = file.match(/window\.bangulo *= *[\"'](.*?)[\"'];(\n|\r)/)[1].replace(/\\\"/g,"\"");
	b = b.replace("<span class='message'></span>","<span class='message'>"+m+"</span>");
	
	m = file.match(/window\.bangusisku *= *[\"'](.*?)[\"'];(\n|\r)/)[1].replace(/\\\"/g,"\"");
	b = b.replace("<input id='typehere' ","<input id='typehere' placeholder=\""+m+"\" ");
	
	b = b.replace("<meta property=\"og:url\"/>","<meta property=\"og:url\" content=\"http://mw.lojban.org/extensions/ilmentufa/i/"+thisa+"/index.html\"/>");
	
	fs.writeFileSync(path.join(__dirname,"../i",thisa,"index.html"), b);
});

templ = fs.readFileSync(path.join(__dirname,"../i/test","sisku.xml"),{encoding: 'utf8'});var bng;var b;
langs.forEach(function(thisa){
	var file = fs.readFileSync(path.join(__dirname,"../i",thisa,"bangu.js"),{encoding: 'utf8'});
	//var m = file.match(/window\.bangudesc *= *[\"'](.*?)[\"'];(\n|\r)/)[1].replace(/\\\"/g,"\"");
	b = templ.replace("template=\"\"","template=\"http://mw.lojban.org/extensions/ilmentufa/i/"+thisa+"/index.html#sisku/{searchTerms}\"");
	b = b.replace("<ShortName></ShortName>","<ShortName>"+thisa+"-sutysisku</ShortName>");
	fs.writeFileSync(path.join(__dirname,"../i",thisa,"sisku.xml"), b);
});