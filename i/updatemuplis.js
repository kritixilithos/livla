// JavaScript Document
var fs = require("fs"),path = require("../ircbot/node_modules/path-extra/lib/path.js");
var download=0;
var refresh=0;
var domuplis=1;
var selectinto_=0;

var goahead = function (){
	if (download===1){download_sentences();}
	if (refresh===1){tatocreatedb();}
	if (domuplis===1){mupliscreatedump();}
	if (selectinto_===1){selectinto();}
};

var mupliscreatedump = function(){
	var LineByLineReader = require('line-by-line');
	var sqlite3 = require('sqlite3').verbose();
	var db = new sqlite3.Database(path.join(__dirname,"../ircbot/dumps","1.sql"));
	var wstream = fs.createWriteStream(path.join(__dirname,"data","parsed-tatoeba.js.temp"));
	wstream.write('var documentStore = [\n');
	db.serialize(function() {
		db.run("BEGIN TRANSACTION");
		db.each("SELECT tat.sentence as one,tati.sentence as six,group_concat(distinct tag.tag) as five FROM tatoeba as tat left join links on links.fir=tat.idsentence left join tatoeba as tati on links.sec=tati.idsentence left join tags as tag on tag.ids=tat.idsentence where (tat.lang='jbo' and not exists (select a.ids from tags as a where (a.ids=tat.idsentence and a.tag='@needs native check'))) group by tat.sentence,tati.sentence limit 100000", function(err, row) {
			
			if (row.five===null){
			wstream.write("{w:\""+row.one.replace(/"/g,"'")+"\",d:\""+(row.six||"").replace(/"/g,"'").replace(/[\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/gi," ").replace(/\\/g,"\\\\".replace("\\","\\\\"))+"\"},\n");}else
			{wstream.write("{w:\""+row.one.replace(/"/g,"'")+"\",t:\""+row.five+"\",d:\""+(row.six||"").replace(/"/g,"'").replace(/[\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/gi," ").replace(/\\/g,"\\\\".replace("\\","\\\\"))+"\"},\n");}
		});
		db.run("COMMIT");
	});
	db.close(function(){
		wstream.write('];\n');wstream.end();
		//fs.renameSync(path.join(__dirname,"data","parsed-tatoeba.js.temp"), path.join(__dirname,"data","parsed-tatoeba.js"));
	});
};

var selectinto = function(){
	var LineByLineReader = require('line-by-line');
	var sqlite3 = require('sqlite3').verbose();
	var db = new sqlite3.Database(path.join(__dirname,"../ircbot/dumps","1.sql"));
	var wstream = fs.createWriteStream(path.join(__dirname,"data","workontagstatoeba.js.temp"));
	//wstream.write('var documentStore = [\n');
	db.serialize(function() {
		db.run("BEGIN TRANSACTION");
		db.each("SELECT t.sentence as t_s, tt.sentence as tt_s FROM tatoeba t join links l on (t.idsentence=l.fir) join tatoeba tt on (l.sec=tt.idsentence) where (t.lang='eng' and tt.lang='jbo') limit 100;", function(err, row) {
			//if (row.l_f!==null){
				console.log(row.t_s + " ||| " + row.tt_s);
			//}
		});
		db.run("COMMIT");
	});
	db.close(function(){
		//wstream.write('];\n');
		wstream.end();
		fs.renameSync(path.join(__dirname,"data","workontagstatoeba.js.temp"), path.join(__dirname,"data","workontagstatoeba.js"));
	});
};

var tatocreatedb = function(){
	//tatogettwo();
	var tsorcu = path.join(__dirname,"../ircbot/dumps","tatoeba/sentences.csv");
	var LineByLineReader = require('line-by-line');
	var sqlite3 = require('sqlite3').verbose();
	var db = new sqlite3.Database(path.join(__dirname,"../ircbot/dumps","1.sql"));
	db.serialize(function() {
		//db.run("PRAGMA locking_mode = EXCLUSIVE");
		db.run("PRAGMA journal_mode = OFF");
		//db.run("PRAGMA temp_store = FILE");
		//db.run("PRAGMA cache_size = 100");
		db.run("DROP TABLE IF EXISTS 'tatoeba'");
		db.run("DROP TABLE IF EXISTS 'links'");
		db.run("DROP TABLE IF EXISTS 'tags'");
		db.run("DROP TABLE IF EXISTS 'audio'");
		db.run("CREATE TABLE tatoeba (idsentence INTEGER, lang TEXT, sentence TEXT)");
		db.run("CREATE TABLE links (fir INTEGER, sec INTEGER)");
		db.run("CREATE TABLE tags (ids INTEGER, tag INTEGER)");
		db.run("CREATE TABLE audio (ids INTEGER)");
		//db.run("PRAGMA synchronous = OFF");
		db.run("BEGIN TRANSACTION");
		//db.parallelize(function() {
			var stmt = db.prepare("INSERT INTO tatoeba VALUES (?,?,?)");
			lr = new LineByLineReader(tsorcu);
			lr.on('error', function (err) {
				// 'err' contains error object
			});
			lr.on('line', function (line) {
				// 'line' contains the current line without the trailing newline character. write it to a new file
				var l = line.split("\t");
				stmt.run(l[0],l[1],l[2]);
			});
			lr.on('end', add_links.bind(null,db,LineByLineReader,stmt));
		//});
	});
	//global.gc();
	//db=null;
};
var add_links = function (db,LineByLineReader,stmt) {
			stmt.finalize();
			var stmtq = db.prepare("INSERT INTO links VALUES (?,?)");
			var tjorne = path.join(__dirname,"../ircbot/dumps","tatoebalinks/links.csv");
			lrq = new LineByLineReader(tjorne);
			lrq.on('error', function (err) {
				// 'err' contains error object
			});
			lrq.on('line', function (line) {
				// 'line' contains the current line without the trailing newline character. write it to a new file
				var l = line.split("\t");
				stmtq.run(l[0],l[1],l[2]);
			});
			lrq.on('end', add_tags.bind(null,db,LineByLineReader,stmtq));
};

var add_tags = function (db,LineByLineReader,stmtq) {
			stmtq.finalize();
			var stmtr = db.prepare("INSERT INTO tags VALUES (?,?)");
			var ttcita = path.join(__dirname,"../ircbot/dumps","tatoebatags/tags.csv");
			var lrs = new LineByLineReader(ttcita);
			lrs.on('error', function (err) {
			// 'err' contains error object
			});
			lrs.on('line', function (line) {
				// 'line' contains the current line without the trailing newline character. write it to a new file
				var l = line.split("\t");
				stmtr.run(l[0],l[1]);
			});
			lrs.on('end', add_finish.bind(null,db,LineByLineReader,stmtr));
};

//disabled for now
var add_sentences_with_audio = function (db,LineByLineReader,stmtr) {
			stmtr.finalize();
			var stmts = db.prepare("INSERT INTO audio VALUES (?)");
			var tvoksa = path.join(__dirname,"../ircbot/dumps","tatoebaaudio/sentences_with_audio.csv");
			var lrt = new LineByLineReader(tvoksa);
			lrt.on('error', function (err) {
				// 'err' contains error object
			});
			lrt.on('line', function (line) {
				// 'line' contains the current line without the trailing newline character. write it to a new file
				//var l = line.split("\t");
				stmts.run(line);
			});
			lrt.on('end', add_finish.bind(null,db,LineByLineReader,stmts));
};

var add_finish = function (db,LineByLineReader,stmts) {
db.serialize(function() {
	stmts.finalize();
	db.run("COMMIT");
	/*db.run("PRAGMA shrink_memory");
	db.run("DROP TABLE IF EXISTS 'tatoeba'");
	db.run("DROP TABLE IF EXISTS 'links'");
	db.run("DROP TABLE IF EXISTS 'tags'");
	db.run("DROP TABLE IF EXISTS 'audio'");
	db.run("ALTER TABLE 'tatoebatemp' RENAME TO 'tatoeba'");
	db.run("ALTER TABLE 'linkstemp' RENAME TO 'links'");
	db.run("ALTER TABLE 'tagstemp' RENAME TO 'tags'");
	db.run("ALTER TABLE 'audiotemp' RENAME TO 'audio'");*/
	db.each("SELECT name FROM sqlite_master WHERE type = 'table'", function(err, row) {
		console.log(row.name);
	});
	db.close();
	/* now select */
});
};

var download_sentences = function(){
	var request = require("request");
	var fs = require("fs");
	var t = path.join(__dirname,"../ircbot/dumps","tatoeba.tar.bz2");
	var ttemp = path.join(__dirname,"../ircbot/dumps","tatoeba.tar.bz2.temp");
	var tbakfu = path.join(__dirname,"../ircbot/dumps","tatoeba");
	var uri="http://downloads.tatoeba.org/exports/sentences.tar.bz2";
	requestd = request.defaults({jar: true});
	requestd({
		uri: uri, method: "GET"
	}).on("error", function (err) {
	}).pipe(fs.createWriteStream(ttemp)).on("finish", function () {
		fs.renameSync(ttemp,t);console.log("Tatoeba sentences downloaded");
		var Bunzip = require('seek-bzip');
		var compressedData = fs.readFileSync(t);
		var data = Bunzip.decode(compressedData);
		fs.writeFileSync(ttemp, data);
		var tarball = require('tarball-extract');
		tarball.extractTarball(ttemp, tbakfu, function(err){
		if(err) console.log(err);
		});
		download_links();
	});
};

var download_links = function(){
	var tlink = path.join(__dirname,"../ircbot/dumps","links.tar.bz2");
	var tlinktemp = path.join(__dirname,"../ircbot/dumps","links.tar.bz2.temp");
	var tlinkbakfu = path.join(__dirname,"../ircbot/dumps","tatoebalinks");
	var uri = 'http://downloads.tatoeba.org/exports/links.tar.bz2';
	requestd({
		uri: uri, method: "GET"
	}).on("error", function (err) {
	}).pipe(fs.createWriteStream(tlinktemp)).on("finish", function () {
		fs.renameSync(tlinktemp,tlink);console.log("Tatoeba links downloaded");
		var Bunzip = require('seek-bzip');
		var compressedData = fs.readFileSync(tlink);
		var data = Bunzip.decode(compressedData);
		fs.writeFileSync(tlinktemp, data);
		var tarball = require('tarball-extract');
		tarball.extractTarball(tlinktemp, tlinkbakfu, function(err){
		if(err) console.log(err);
		});
		download_tags();
	});
};

var download_tags = function(){
	var ttags = path.join(__dirname,"../ircbot/dumps","tags.tar.bz2");
	var ttagstemp = path.join(__dirname,"../ircbot/dumps","tags.tar.bz2.temp");
	var ttagsbakfu = path.join(__dirname,"../ircbot/dumps","tatoebatags");
	var uri = 'http://downloads.tatoeba.org/exports/tags.tar.bz2';
	requestd({
		uri: uri, method: "GET"
	}).on("error", function (err) {
	}).pipe(fs.createWriteStream(ttagstemp)).on("finish", function () {
		fs.renameSync(ttagstemp,ttags);console.log("Tatoeba tags downloaded");
		var Bunzip = require('seek-bzip');
		var compressedData = fs.readFileSync(ttags);
		var data = Bunzip.decode(compressedData);
		fs.writeFileSync(ttagstemp, data);
		var tarball = require('tarball-extract');
		tarball.extractTarball(ttagstemp, ttagsbakfu, function(err){
		if(err) console.log(err);
		});
		download_audio();
	});
};

var download_audio = function(){
	var ttags = path.join(__dirname,"../ircbot/dumps","sentences_with_audio.tar.bz2");
	var ttagstemp = path.join(__dirname,"../ircbot/dumps","sentences_with_audio.tar.bz2.temp");
	var ttagsbakfu = path.join(__dirname,"../ircbot/dumps","tatoebaaudio");
	var uri = 'http://downloads.tatoeba.org/exports/sentences_with_audio.tar.bz2';
	requestd({
		uri: uri, method: "GET"
	}).on("error", function (err) {
	}).pipe(fs.createWriteStream(ttagstemp)).on("finish", function () {
		fs.renameSync(ttagstemp,ttags);console.log("Tatoeba audio ids downloaded");
		var Bunzip = require('seek-bzip');
		var compressedData = fs.readFileSync(ttags);
		var data = Bunzip.decode(compressedData);
		fs.writeFileSync(ttagstemp, data);
		var tarball = require('tarball-extract');
		tarball.extractTarball(ttagstemp, ttagsbakfu, function(err){
		if(err) console.log(err);
		});
		//download something else now:
	});
};
goahead();
//add_finish();