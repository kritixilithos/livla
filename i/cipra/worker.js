window = this;var sorcu={};var bau = location.href.split('/').slice(-2)[0];if (bau==='cipra'){bau='toki';}
importScripts('bangu.js','../data/parsed-toki.js', './sisku_2.js');
postMessage({kind: 'loading'});
postMessage({kind: 'ready'});
var searchId;
this.onmessage = function(ev) {if (ev.data.kind == 'newSearch') {searchId = ev.data.searchId;sisku(ev.data.query, function(results) {postMessage({kind: 'searchResults', results: results,query:ev.data.query});});}};
