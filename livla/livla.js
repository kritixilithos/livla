/*jshint bitwise: false*/
const lg = console.log.bind(console);
// const p = object => JSON.stringify(object);

//livla bot
const fs = require("fs"),
  path = require("path-extra"),
  ospath = require("ospath"),
  libxmljs = require("libxmljs"),
  lojban = require("lojban");
require('v8-profiler');
const tato = require('./tatoeba.js');
let notci, notcijudri, ljv = '';
const interv = 300000;
const interm = 2900;
const nodasezvafahi = 'no da se zvafa\'i';
const tersepli = " + ";
const fram = "../../../files/fndata-1.5/frame";
const langs = ["jbo", "en", "ru", "es", "fr", "ja", "de", "eo", "zh", "en-simple", "fr-facile", "hu", "sv"];
const robangu = 'fr-facile|en|f@|ru|de|ja|jbo|guaspi|loglan|eo|fr|jb|2002|es|zh|sv|en-simple|krasi|dukti|laadan|toki';
// Default configuration, may be modified by “loadConfig”, with the content of
// “~/.livla/config.json.
let tcan = '#lojban,#ckule,#tokipona,#jbosnu,#jboguhe,#spero,#pepper&carrot,##jboselbau,##esperanto';
let livlytcan = '#lojbanme'; //where la livla talks to la mensi
let asker = 'livla';
let replier = 'mensi';
let server = 'irc.freenode.net';
// const stodipilno=['gleki','xalbo'];
// End default configuration

loadConfig();
const configlivla = {
  server,
  nick: asker,
  options: {
    channels: [livlytcan],
    debug: false,
    messageSplit: 1900,
    realName: 'http://lojban.org/papri/IRC_Bots',
    floodProtection: true,
    floodProtectionDelay: 400
  }
};
const configmensi = {
  server,
  nick: replier,
  options: {
    channels: [livlytcan, tcan],
    debug: false,
    messageSplit: 1900,
    realName: 'http://lojban.org/papri/IRC_Bots',
    userName: replier,
    floodProtection: true,
    floodProtectionDelay: 400
  }
};
let userSettings = {}; // Saving user preferences
userSettings[asker] = {
  "language": "jbo" // Not used, but someone might like to have bots speak to each other in another language
};
userSettings[replier] = {
  "language": "jbo"
};

const defaultLanguage = "en"; // Maybe someday should be replaced with "jbo" when Lojban definitions almost equal that of English
const preasker = `${asker}: `;
const prereplier = `${replier}: `;
let said;

// Ensure that a path exists, and that it is a dir.
function ensureDirExistence(path) {
  // We first try to make a dir. If it was missing, now, it is not
  // anymore.
  try {
    fs.mkdirSync(path);
  } catch (e) {
    // If creation of the dir failed, there can be many reasons.
    // However, if the reason is not “there was already a file
    // there!”, we don't want to ignore the error, so we throw it
    // again.
    if (typeof(e.code) === "undefined" || e.code !== 'EEXIST') {
      throw e;
    }
    // In the case where the path was taken, we want to be sure it
    // is a directory. If the path existed *and* it is a directory,
    // all is good.  Otherwise, we would be asking for trouble by
    // trying to use a file, socket, or whatever as a directory.
    if (!fs.statSync(path).isDirectory()) {
      throw new Error(`“${path}” is not a directory.`);
    }
  }
}

// Used to read the content of any file that is located in “~/.livla/”.
// Return an empty string if the file does not exist.
function readConfig(filename) {
  const configDirectory = path.join(ospath.home(), ".livla");
  ensureDirExistence(configDirectory);
  const file = path.join(configDirectory, filename);
  try {
    return fs.readFileSync(file, {
      encoding: 'utf8'
    });
  } catch (e) {
    // If we get an “ENOENT” error, we return an empty string.
    // Other errors are still thrown.
    if (typeof(e.code) === "undefined" || e.code !== 'ENOENT') {
      throw e;
    }
    return "";
  }
}

// Load every line of “~/.livla/notci.txt” into “notci”, as an array. 
// Define “notcijudri” as the file path that will be used later when we want to
// save the content of “notci”.
function loadNotci() {
  notci = readConfig("notci.txt").split("\n");
  notcijudri = path.join(ospath.home(), ".livla", "notci.txt");
}

// Load the configuration from “~/.livla/config.json”, and modify the default
// config accordingly.
function loadConfig() {
  function either(a, b) {
    if (typeof(a) === "undefined") return b;
    return a;
  }
  let localConfig = readConfig("config.json");
  if (localConfig.trim() === "") return; // Empty config, we do nothing.
  localConfig = JSON.parse(localConfig);

  asker = either(localConfig.asker, asker);
  replier = either(localConfig.replier, replier);
  tcan = either(localConfig.tcan, tcan);
  livlytcan = either(localConfig.livlytcan, livlytcan);
  server = either(localConfig.server, server);
}

// Load the user configuration from “~/.livla/user-settings.json”
// These are settings
function loadUserSettings() {
  const localConfig = readConfig("user-settings.json");
  if (localConfig.trim() === "")
    return;
  userSettings = JSON.parse(localConfig);
}

loadUserSettings();
loadNotci();

//store en dump in memory
let enxml = path.join(__dirname, "../dumps", "en" + ".xml");
if (!fs.existsSync(enxml)) {
  enxml = path.join(__dirname, "../dumps", "toki" + ".xml");
}
let xmlDocEn = libxmljs.parseXml(fs.readFileSync(enxml, {
  encoding: 'utf8'
}).replace(/(&lt;|<)script.*?(&gt;|>).*?(&lt;|<)/g, "&lt;").replace(/(&lt;|<)\/script(&gt;|>)/g, ""));

const updateUserSettings = callback => {
  readConfig("user-settings.json"); // Ensure existance

  const body = JSON.stringify(userSettings);
  const configDirectory = path.join(ospath.home(), ".livla");
  const filename = "user-settings.json";
  const file = path.join(configDirectory, filename);
  try {
    fs.writeFileSync(file, body);
    lg('User settings updated');
  } catch (e) {
    // If we get an “ENOENT” error, we return an empty string.
    // Other errors are still thrown.
    if (typeof(e.code) === "undefined" || e.code !== 'ENOENT') {
      throw e;
    }
    return;
  }
};

const camxes_pre = require('../camxes_preproc.js');
const camxes_post = require('../camxes_postproc.js');

const irc = require('irc');
const client = new irc.Client(configlivla.server, configlivla.nick, configlivla.options);
const clientmensi = new irc.Client(configmensi.server, configmensi.nick, configmensi.options);

function run_camxesalta(input, mode) {
  try {
    let camxesalta = require('../mahantufa/altatufa-stodi.js');
    let result;
    let syntax_error = false;
    result = camxes_pre.preprocessing(input);
    try {
      result = camxesalta.parse(result);
    } catch (e) {
      result = e;
      syntax_error = true;
    }
    if (!syntax_error) {
      result = JSON.stringify(result, undefined, 2);
      result = camxes_post.postprocessing(result, mode);
    }
    camxesalta = {};
    delete require.cache[require.resolve('../mahantufa/altatufa-stodi.js')];
    return result;
  } catch (e) {
    return '';
  }
}

const vric = () => {
  const vricar = [tato.tatoebaprocessing(replier)];
  return vricar[Math.floor(vricar.length * Math.random())];
};

let sisku = lin => {
  let s = "";
  let i = 0;
  while (s.indexOf(lin) < 0 && i < 20000) {
    s = tato.tatoebaprocessing();
    i++; //in case we found nothing exit
  }
  if (s === "" && i < 20000) {
    s = ": e'u do sisku tu'a lo nalkunti uenzi";
  }
  if (i >= 20000) {
    s = nodasezvafahi;
  }
  return s;
};

let processor = (client, from, to, text) => {
  let sendTo = to.indexOf('#') ? from : to; // send in private : publicly
  if (!text) return;
  said = Date.now();
  /* if (text.indexOf(`${preasker}darxi la `) === 0 && from !== asker && from !== replier) {
    setTimeout(() => {
      client.say(sendTo, `${text.substr(9+preasker.length)}: oidai mi darxi do lo trauta`);
    }, 0);
  }*/
  if (~text.indexOf(`doi ${asker}`) && from !== replier) {
    setTimeout(() => {
      client.say(sendTo, tato.tatoebaprocessing(from));
    }, interm);
  }
  setInterval(() => {
    if (Date.now() - said > interv) {
      said = Date.now();
      client.say(livlytcan, prereplier + vric());
    }
  }, interv);
};

const benji = (source, socket, clientmensi, sendTo, what) => {
  if (source === "naxle") {
    socket.emit('returner', {
      message: what
    });
    return what;
  } else {
    clientmensi.say(sendTo, what);
  }
};

const bangu = (lng, username) => {
  let ret = "";
  lng = lng.trim().toLowerCase();
  if (lng.length > 100) {
    // small data overflow protection
    return ret;
  }
  if (typeof userSettings[username] === "undefined") {
    userSettings[username] = {};
  }
  userSettings[username].language = lng;
  switch (lng) {
    // ME(speaking in third person) isn't implemented in irc.js
    case "lv":
      ret = `Es ar '${username}' turpmāk runāšu latviešu valodā.`;
      break;
    case "jbo":
      ret = `.i ca\'e mi co\'a tavla fi la\'o zoi.'${username}.zoi. fo lo lojbo`;
      break;
    case "en":
      ret = `I will speak to '${username}' in English from now on.`;
      break;
    case "en":
      ret = `Теперь я буду говорить с '${username}' по-русски.`;
      break;
    default:
      ret = `.i ca\'e mi co\'a tavla fi la\'o zoi.'${username}.zoi. fo lo lojbo`;
      break;
  }
  updateUserSettings();
  return ret;
};

const RetrieveUsersLanguage = (username, lng) => {
  if (
    (
      typeof userSettings[username] === "undefined" ||
      typeof userSettings[username].language === "undefined"
    )
  ) {
    if (typeof lng === "undefined") {
      return defaultLanguage;
    }
    return lng;
  }

  return userSettings[username].language;
};

function lojTemplate(s) {
  s = s.replace(/\$.*?\$/g, c => {
    c = c.substring(1, c.length - 1);
    return c.replace(/(\w+)_\{(\d+)\}/g, "$1$2").replace(/(\w+)_(.+)/g, "$1$2").replace(/\{/g, '[').replace(/\}/g, ']');
  });
  s = s.replace(/\{(.*?)\}/g, c => c.substring(1, c.length - 1));
  return s;
}

const tordu = (linf, lng, flag, xmlDoc, cmalu) => {
  let lin = linf.replace(/\"/g, '').replace(/\)$/, '').replace(/^[\(\.]/, '');
  if (flag !== 1) {
    if (lng === "en") {
      xmlDoc = xmlDocEn;
    } else {
      const xmlPath = path.join(__dirname, "../dumps", `${lng}.xml`);
      const errorMessage = `Dictionary for the desired "${lng}" language does not exist.`; //TODO: Translate to Lojban
      if (!fs.existsSync(xmlPath)) {
        if (flag === 'passive') {
          lg(errorMessage);
          return '';
        }
        return errorMessage;
      }
      xmlDoc = libxmljs.parseXml(fs.readFileSync(xmlPath, {
        encoding: 'utf8'
      }));
    }
  }

  let gchild = '';
  try {
    gchild += `[${xmlDoc.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/selmaho[1]").text()}] `;
  } catch (err) {}
  try {
    gchild += xmlDoc.get(`/dictionary/direction[1]/valsi[translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}"]/definition[1]`).text();
  } catch (err) {}
  if (cmalu === true) {
    try {
      gchild += ` | ${xmlDoc.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/notes[1]").text()}`;
    } catch (err) {}
    try {
      gchild += ` | ${xmlDoc.get("/dictionary/direction[1]/valsi[translate(@word,\""+lin.toUpperCase()+"\",\""+lin+"\")=\""+lin+"\"]/user[1]/username[1]").text()}`;
    } catch (err) {}
  }
  let jk;
  try {
    jk = xmlDoc.get(`/dictionary/direction[1]/valsi[translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}"]/gloss[1]`).text().replace(/("|&amp;quot;)/g, "'").replace(/\\/g, "\\\\");
    if (jk) {
      gchild += `\nAs a noun: ${jk}`;
    }
  } catch (err) {}
  jk = '';
  try {
    jk = xmlDoc.find(`/dictionary/direction[1]/valsi[translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}"]/example`).toString().replace(/>,</g, ">\n<").replace(/<example phrase=\"(.*?)\">(.*?)<\/example>/g, "$1 — $2").replace(/("|&amp;quot;)/g, "'").replace(/\\/g, "\\\\");
    if (jk) {
      gchild += `\nExamples:\n${jk}`;
    }
  } catch (err) {}

  if (gchild === '') {
    if (flag !== 1) {
      if (lojban.xulujvo(lin) === true) {
        const f = lojban.jvozba(lojban.jvokaha_gui(lin));
        if (f !== '') {
          lin = f;
        } else {
          lin = `[< ${lojban.jvokaha_gui(lin)}] ${mulno_smuvelcki(lin,lng,xmlDoc)}`;
        }
      } else {
        lin = mulno_smuvelcki(lin, lng, xmlDoc);
      }
    } else {
      lin = '';
    }
  } else {
    gchild = lojTemplate(gchild).replace(/`/g, "'");
    if (gchild.length >= 700 && lng !== "jb") {
      gchild = gchild.substring(0, 700);
      gchild += `...\n[mo'u se katna] http://jbovlaste.lojban.org/dict/${lin}`;
    }
    if (lojban.xulujvo(lin) === true) {
      lin += ` [< ${lojban.jvokaha_gui(lin)}]`;
    }
    lin = `${lin} = ${gchild}`;
  }
  ljv = '';
  lg(`<${linf}|`);
  if (lin !== '') {
    const more = tordu(`${linf} `, lng, 1, xmlDoc, cmalu);
    if (more !== '') {
      lin += `\n${more}`;
    }
  }
  return lin.replace(/&quot;/g, "'").replace(/&gt;/g, '>');
};

const mulno_smuvelcki = (lin, lng, xmlDoc) => {
  lin = lin.replace(/\"/g, '');
  let xo;
  if (typeof xmlDoc === "undefined") {
    if (lng === "en") {
      xmlDoc = xmlDocEn;
    } else {
      xmlDoc = libxmljs.parseXml(fs.readFileSync(path.join(__dirname, "../dumps", `${lng}.xml`), {
        encoding: 'utf8'
      }));
    }
  }

  let stra = [];
  let i;
  let coun = xmlDoc.find(`/dictionary/direction[1]/valsi[(translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}")]`);
  if (typeof coun !== 'undefined') {
    for (i = 0; i < coun.length; i++) {
      stra.push(coun[i].attr("word").value());
    }
  }
  coun = xmlDoc.find(`/dictionary/direction[1]/valsi[(translate(./glossword/@word,"${lin.toUpperCase()}","${lin}")="${lin}") or (translate(./Engl,"${lin.toUpperCase()}","${lin}")="${lin}")]`);
  if (typeof coun !== 'undefined') {
    for (i = 0; i < coun.length; i++) {
      stra.push(coun[i].attr("word").value());
    }
  }
  coun = xmlDoc.find(`/dictionary/direction[1]/valsi[contains(translate(@word,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
  if (typeof coun !== 'undefined') {
    for (i = 0; i < coun.length; i++) {
      stra.push(coun[i].attr("word").value());
    }
  }
  coun = xmlDoc.find(`/dictionary/direction[1]/valsi[contains(translate(./glossword/@word,"${lin.toUpperCase()}","${lin}"),"${lin}") or contains(translate(./Engl,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
  if (typeof coun !== 'undefined') {
    for (i = 0; i < coun.length; i++) {
      stra.push(coun[i].attr("word").value());
    }
  }
  coun = xmlDoc.find(`/dictionary/direction[1]/valsi[contains(translate(./definition,"${lin.toUpperCase()}","${lin}"),"${lin}") or contains(translate(./notes,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
  if (typeof coun !== 'undefined') {
    for (i = 0; i < coun.length; i++) {
      stra.push(coun[i].attr("word").value());
    }
  }
  coun = xmlDoc.find(`/dictionary/direction[1]/valsi[contains(translate(./definition,"${lin.toUpperCase()}","${lin}"),"${lin}") or contains(translate(./related,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
  if (typeof coun !== 'undefined') {
    for (i = 0; i < coun.length; i++) {
      stra.push(coun[i].attr("word").value());
    }
  }

  stra = stra.reduce((a, b) => {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
  }, []);

  xo = stra.length;
  try {
    stra.splice(30);
  } catch (err) {}
  if (stra.length >= 30) {
    stra.push("...");
  }
  let gag = stra.join(", ").trim();
  if (stra.length === 1) {
    gag = tordu(gag, lng);
  }
  if (stra.length > 1) {
    gag = `${xo} da se zvafa'i: ${gag}`;
  }
  if (gag === '') {
    gag = 'lo nu mulno sisku zo\'u: no da se zvafa\'i';
    if (ljv !== '') {
      gag += `\n${ljv}`;
    }
  }
  return gag;
};

const selmaho = lin => {
  let gag = '';
  let ien = '';
  const coun = xmlDocEn.get(`/dictionary/direction[1]/valsi[translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}"]/selmaho[1]`);
  if (typeof coun !== 'undefined') {
    ien = `.i lu ${lin} li'u cmavo lu ${coun.text()} li'u`;
    const cll = require('./cll.js');
    const cllarr = cll.cllk()[coun.text()];
    if (typeof cllarr !== 'undefined') {
      ien += `\n${cllarr.replace(/ /g,"\n")}`;
    }
  }
  try {
    const ali = xmlDocEn.find(`/dictionary/direction[1]/valsi[starts-with(translate(./selmaho,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
    const stra = [];
    for (let i = 0; i < ali.length; i++) {
      //te = xmlDocEn.get("/dictionary/direction[1]/valsi[translate(@word,\""+ali[i].attr("word").value()+"\",\""+ali[i].attr("word").value()+"\")=\""+ali[i].attr("word").value()+"\"]/selmaho[1]").text();
      //lg(te);
      //if (te.search("^"+lin.toUpperCase()+"h")===-1){
      stra.push(ali[i].attr("word").value());
      //}
    }
    gag = stra.join(", ").trim();
    //if (stra.length==1){gag = gag + ' = ' + tordu(gag,lng);}
  } catch (err) {}
  switch (true) {
    case (ien !== '') && (gag !== ''):
      gag = ien.concat("\ncmavo: ").concat(gag);
      break;
    case (ien === '') && (gag !== ''):
      gag = `cmavo: ${gag}`;
      break;
    case (ien !== '') && (gag === ''):
      gag = ien;
      break;
    case (ien === '') && (gag === ''):
      gag = nodasezvafahi;
      break;
  }
  return gag;
};

const rafsi = lin => {
  let gag;
  let coun = xmlDocEn.find(`/dictionary/direction[1]/valsi[translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}"]/rafsi/text()[1]`); //official
  try {
    const s = xmlDocEn.get(`/dictionary/direction[1]/valsi[translate(@word,"${lin.toUpperCase()}","${lin}")="${lin}"]/notes[1]`).text();
    const tmp = s.replace(/^.*? -([a-z']+)-.*/, '$1');
    if (tmp !== s) {
      coun.push(tmp);
    }
  } catch (err) {} //search in notes
  if (lin.substr(0, 4) !== 'brod' & xugismu(lin) === true) {
    coun.push(lin.substr(0, 4));
  } //long rafsi
  if (coun.length !== 0) {
    coun = coun.join(' .e ra\'oi ');
  } else {
    coun = '';
  }
  if (coun.length !== 0) {
    coun = `ra'oi ${coun} rafsi zo ${lin}`;
  }

  let rev = xmlDocEn.get(`/dictionary/direction[1]/valsi[rafsi="${lin}"]`);
  //now try -raf- in notes
  if (typeof rev === 'undefined') {
    rev = xmlDocEn.get(`/dictionary/direction[1]/valsi[contains(translate(./notes,"${lin.toUpperCase()}","${lin}")," -${lin}-")]`);
  }
  //now try to add a vowel:
  if (typeof rev === 'undefined') {
    rev = xmlDocEn.get(`/dictionary/direction[1]/valsi[@word="${lin}a" and (@type="fu'ivla" or @type="experimental gismu" or @type="gismu")]`);
  }
  if (typeof rev === 'undefined') {
    rev = xmlDocEn.get(`/dictionary/direction[1]/valsi[@word="${lin}e" and (@type="fu'ivla" or @type="experimental gismu" or @type="gismu")]`);
  }
  if (typeof rev === 'undefined') {
    rev = xmlDocEn.get(`/dictionary/direction[1]/valsi[@word="${lin}i" and (@type="fu'ivla" or @type="experimental gismu" or @type="gismu")]`);
  }
  if (typeof rev === 'undefined') {
    rev = xmlDocEn.get(`/dictionary/direction[1]/valsi[@word="${lin}o" and (@type="fu'ivla" or @type="experimental gismu" or @type="gismu")]`);
  }
  if (typeof rev === 'undefined') {
    rev = xmlDocEn.get(`/dictionary/direction[1]/valsi[@word="${lin}u" and (@type="fu'ivla" or @type="experimental gismu" or @type="gismu")]`);
  }

  if (typeof rev !== 'undefined' && rev.attr("word").value() !== lin) {
    rev = `zo ${rev.attr("word").value()} se rafsi ra'oi ${lin}`;
  } else {
    rev = '';
  }
  switch (true) {
    case (coun !== '') && (rev !== ''):
      gag = coun.concat(" .i ").concat(rev);
      break;
    case (coun === '') && (rev !== ''):
      gag = rev;
      break;
    case (coun !== '') && (rev === ''):
      gag = coun;
      break;
    case (coun === '') && (rev === ''):
      gag = nodasezvafahi;
      break;
  }
  return gag;
};

const valsicmene = (lin, lng) => {
  lin = lin.replace(/\"/g, '');
  let xo;
  let xmlDoc;
  if (lng === "en") {
    xmlDoc = xmlDocEn;
  } else {
    xmlDoc = libxmljs.parseXml(fs.readFileSync(path.join(__dirname, "../dumps", `${lng}.xml`), {
      encoding: 'utf8'
    }));
  }
  const coun = xmlDoc.find(`/dictionary/direction[1]/valsi[contains(translate(@word,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
  const stra = [];
  for (let i = 0; i < coun.length; i++) {
    stra.push(coun[i].attr("word").value());
  }
  xo = stra.length;
  try {
    stra.splice(30);
  } catch (err) {}
  if (stra.length >= 30) {
    stra.push("...");
  }
  let gag = stra.join(", ").trim();
  if (stra.length === 1) {
    gag = tordu(gag, lng);
  }
  if (stra.length > 1) {
    gag = `${xo} da se zvafa'i: ${gag}`;
  }
  if (gag === '') {
    gag = nodasezvafahi;
  }
  return gag;
};

const frame = lin => {
  let gag = '';
  const arrf = fs.readdirSync(path.join(__dirname, fram)).filter(file => file.substr(-4) === '.xml');

  for (let i = 0; i < arrf.length; i++) {
    const xmlDoc = libxmljs.parseXml(fs.readFileSync(path.join(__dirname, fram, arrf[i]), {
      encoding: 'utf8'
    }).replace(/xmlns=\"/g, 'mlns=\"'));
    let si = xmlDoc.get(`/frame[translate(@name,"${lin.toUpperCase()}","${lin}")="${lin}"]/definition[1]/text()`);
    if (typeof si !== 'undefined') {
      gag = si.toString().replace(/&lt;.*?&gt;/g, '');
      si = xmlDoc.find(`/frame[translate(@name,"${lin.toUpperCase()}","${lin}")="${lin}"]/FE[@coreType="Core"]/definition/text()`);
      if (typeof si !== 'undefined') {
        gag = `${gag}\n| te sumti: ${si.join("\n| te sumti: ").replace(/&lt;.*?&gt;/g,'')}`;
      }
      break;
    }
  }

  if (gag !== '') {
    return gag;
  } else {
    return nodasezvafahi;
  }
};

const framemulno = lin => {
  let gag = '';
  const arrf = fs.readdirSync(path.join(__dirname, fram)).filter(file => file.substr(-4) === '.xml');
  const stra = [];

  for (let i = 0; i < arrf.length; i++) {
    const xmlDoc = libxmljs.parseXml(fs.readFileSync(path.join(__dirname, fram, arrf[i]), {
      encoding: 'utf8'
    }).replace(/xmlns=\"/g, 'mlns=\"'));
    const si = xmlDoc.get(`/frame[contains(translate(./definition,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
    if (typeof si !== 'undefined') {
      stra.push(si.attr("name").value());
    }
  }
  try {
    stra.splice(40);
  } catch (err) {}
  if (stra.length >= 40) {
    stra.push("...");
  }
  gag = stra.join(", ").trim();
  if (stra.length === 1) {
    gag = frame(stra[0]);
  }
  if (gag !== '') {
    return gag;
  } else {
    return nodasezvafahi;
  }
};

const finti = lin => {
  lin = lin.replace(/\"/g, '');
  const coun = xmlDocEn.find(`/dictionary/direction[1]/valsi[contains(translate(./user/username,"${lin.toUpperCase()}","${lin}"),"${lin}")]`);
  const stra = [];
  for (let i = 0; i < coun.length; i++) {
    stra.push(coun[i].attr("word").value());
  }
  const cnt = stra.length;
  try {
    stra.splice(30);
  } catch (err) {}
  if (stra.length >= 30) {
    stra.push("...");
  }
  let gag = stra.join(", ").trim();
  // if (stra.length===1){gag = tordu(gag,lng);}
  if (stra.length > 1) {
    gag = `${cnt} da se zvafa'i: ${gag}`;
  }
  if (gag === '') {
    gag = nodasezvafahi;
  }
  return gag;
};

const vlaste = (lin, lng, raf) => {
  let cmalu;
  if (lin.indexOf(" ") === 0) {
    cmalu = true;
  }
  lin = lin.toLowerCase().trim();
  let ret;
  switch (true) {
    case lin.substr(0, 5).trim() === "/full":
      ret = mulno_smuvelcki(lin.substr(6).trim(), lng);
      break;
    case lin.substr(0, 6).trim() === "/valsi":
      ret = valsicmene(lin.substr(7).trim(), lng);
      break;
    case raf === 'raf':
      ret = rafsi(lin.replace(/[^a-z'\.]/g, ''));
      break;
    case raf === 'selmaho':
      ret = selmaho(lin.replace(/[^a-z'\.\*0-9]/g, ''));
      break;
    case raf === 'finti':
      ret = finti(lin.replace(/[^a-z'\.\*0-9]/g, ''));
      break;
    case raf === 'frame':
      ret = frame(lin.replace(/[^a-z_'\.]/g, ''));
      break;
    case raf === 'framemulno':
      ret = framemulno(lin.replace(/[^a-z_'\.]/g, ''));
      break;
    default:
      if (raf === 'passive') {
        ret = tordu(lin.replace(/\"/g, ''), lng, raf, "", cmalu);
        break;
      } else {
        ret = tordu(lin.replace(/\"/g, ''), lng, "", "", cmalu);
        break;
      }
  }
  return ret.replace(/(.{190,250})(, |[ \.\"\/])/g, '$1$2\n');
};

const io = () => '.ii';

const kurtyvla = () => 'CommonSenseError: Expected normal word but Curtis found.';

const sidju = () => {
  const sidj = {
    en: `Parsers: type "exp:" (experimental), "off:" (camxes), "gerna:" (jbofi'e), or "yacc:" (official yacc) followed by the text to show the structure of sentences.\nLojban dictionary: type ".language-code word", where language code is one of jbo,en,ru,es,fr,f@,ja,de,eo,zh,hu,sv. This searches in both directions.\n    Type "language-code:word" (without a space after ":") to get a shorter definition.\n    "selmaho: ca'a" gives "CAhA", "selmaho: CAhA" gives "bi'ai, ca'a, ..."\n    "rafsi: kulnu" gives "klu", "rafsi: klu" gives "kulnu"\nOther conlang dictionaries: ".toki ", ".laadan ", ".loglan "\nLojban <-> Loglan conversion (incomplete): ".coi ", ".loi "\n"Tatoeba: klama" gets a random example sentence using "klama"\nDelayed messaging: type "${replier}: doi user message" to send "message" to "user" when they return`,
  };
  return sidj.en;
};

//Stanford NLP
//const  StanfordSimpleNLP = require('stanford-simple-nlp');
//const stanfordSimpleNLP = new StanfordSimpleNLP.StanfordSimpleNLP();
//stanfordSimpleNLP.loadPipelineSync();
/*
const stnlp = (source,socket,clientmensi,sendTo, lin) => {
  stanfordSimpleNLP.process(lin, (err, result) => {
    benji(source,socket,clientmensi,sendTo, JSON.stringify(result));
    });
};
*/

const zmifanva = (source, socket, clientm, sendTo, src, dir) => {
  const request = require("request");
  const uri = `http://lojban.lilyx.net/zmifanva/?src=${src}&dir=${dir}`;
  request.get(uri, (error, {
    statusCode
  }, body) => {
    if (!error && statusCode === 200) {
      const myRegexp = /<textarea rows=\"8\" cols=\"40\">(.*?)<\/textarea>/;
      const match = myRegexp.exec(body.replace(/\n/g, ""));
      try {
        clientmensi.say(sendTo, match[1]);
      } catch (err) {
        clientmensi.say(sendTo, "O_0");
      }
    }
  });
};

const sutysiskuningau = (lng, lojbo) => { //write a new file parsed.js that would be used by la sutysisku
  if (typeof lng === 'undefined') {
    lng = 'en';
  }
  const xmlDoc = libxmljs.parseXml(fs.readFileSync(path.join(__dirname, "../dumps", `${lng}.xml`), {
    encoding: 'utf8'
  }).replace(/(&lt;|<)script.*?(&gt;|>).*?(&lt;|<)/g, "&lt;").replace(/(&lt;|<)\/script(&gt;|>)/g, ""));
  let pars = 'sorcu["'+lng+'"] = [';
  const rev = xmlDoc.find("/dictionary/direction[1]/valsi");
  for (let i = 0; i < rev.length; i++) {
    const hi = rev[i].attr("word").value().replace("\\", "\\\\");
    pars += `{"w":"${hi}"`;
    try {
      pars += `,"t":"${rev[i].attr("type").value().replace(/\\/g,"\\\\")}"`;
    } catch (err) {}
    try {
      pars += `,"s":"${rev[i].find("selmaho[1]")[0].text().replace(/"/g,"'").replace(/\\/g,"\\\\")}"`;
    } catch (err) {}
    try {
      pars += `,"d":"${rev[i].find("definition[1]")[0].text().replace(/"/g,"'").replace(/\\/g,"\\\\")}"`;
    } catch (err) {}
    try {
      pars += `,"n":"${rev[i].find("notes[1]")[0].text().replace(/"/g,"'").replace(/\\/g,"\\\\")}"`;
    } catch (err) {}
    try {
      pars += `,"g":"${rev[i].find("glossword/@word").join(";").replace(/ word=\"(.*?)\"/g,"$1").replace(/"/g,"'").replace("\\","\\\\")}"`;
    } catch (err) {}
    try {
      pars += `,"k":"${rev[i].find("related[1]")[0].text().replace(/"/g,"'").replace(/\\/g,"\\\\")}"`;
    } catch (err) {}
    try {
      const ex = rev[i].find("example").toString().replace(/>,</g, ">%<").replace(/<example phrase=\"(.*?)\">(.*?)<\/example>/g, "$1 — $2").replace(/"/g, "'").replace(/\\/g, "\\\\");
      if (ex !== '') {
        pars += `,"e":"${ex}"`;
      }
    } catch (err) {}
    let ra = rev[i].find("rafsi//text()[1]");
    if (lojbo !== 0 && xugismu(hi) === true) {
      ra.push(hi);
      if (hi.indexOf("brod") !== 0) {
        ra.push(hi.substr(0, 4));
      }
      if (hi.indexOf("broda") === 0) {
        ra.push("brod");
      }
    }
    ra = ra.join("\",\"");

    if (ra.length !== 0) {
      pars += `,"r":["${ra}"]`;
    }
    pars += "}";
    if (i < rev.length - 1) {
      pars += ",\n";
    } //\n
  }
  pars += "];\n";
  let t = path.join(__dirname, "../i/data", `parsed-${lng}.js`);
  fs.writeFileSync(`${t}.temp`, pars);
  fs.renameSync(`${t}.temp`, t);
  t = path.join(__dirname, `../i/${lng}/`, "webapp.appcache");
  const d = new Date();
  let n = d.getDate();
  if ((n === 1) || (n === 11) || (n === 21)) {
    try {
      n = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}T${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
      pars = fs.readFileSync(t, {
        encoding: 'utf8'
      });
      pars = pars.replace(/\n# .+\n/, `\n# ${n}\n`);
      pars = pars.replace(/\n\.\.\/lib.fullproof.+\n/g, "\n");
      fs.writeFileSync(t, pars);
      lg(`${t} updated`);
    } catch (err) {}
  }
};

const tcepru = (lin, sendTo, source, socket) => {
  const exec = require('child_process').exec;
  exec(`${path.join(__dirname,"../tcepru/./parser")} <<<"${lin}" 2>/dev/null`, (error, stdout, stderr) => {
    lin = stdout;
    if (error !== null) {
      lin = 'O_0' + stderr.toString();
    }
    benji(source, socket, clientmensi, sendTo, lin.replace(/\n/g, ' ').replace(/ {2,}/g, ' '));
  });
};

const jbofihe = (lin, sendTo, source, socket) => {
  const exec = require('child_process').exec;
  exec(`${path.join(__dirname,"../jbofihe/./jbofihe")} -ie -cr <<<"${lin}" 2>/dev/null`, (error, stdout, stderr) => {
    lin = stdout;
    if (error !== null) {
      lin = 'O_0' + stderr.toString();
    }
    benji(source, socket, clientmensi, sendTo, lin.replace(/\n/g, ' ').replace(/ {2,}/g, ' '));
  });
};

const pseudogismu = () => { //a joke function. checks if an English word is  a valid gismu
  const words = fs.readFileSync(path.join(__dirname, "../zasni/", "vale.txt"), 'utf8').split("\n");
  const sj = [];
  let f;
  for (let j = 0; j < words.length; j++) {
    f = lojban.ilmentufa_off(words[j].toLowerCase().replace(/sh/g, "c"), "J").toString();
    if (f.indexOf("yntax") === -1) {
      sj.push(`${words[j]} ${f}`);
    }
  }
  fs.writeFileSync(path.join(__dirname, "../zasni/", "vale-result"), sj.join("\n"));
};

const prettifylojbansentences = () => { //insert spaces to lojban sentences
  const input = path.join(__dirname, "../zasni/", "eikatna.txt");
  const output = path.join(__dirname, "../zasni/","sekatna.txt");
  fs.writeFileSync(output, '');
  const byline = require('byline');
  const stream = byline(fs.createReadStream(input));
  stream.on('line', function(line) { 
      return lojban.ilmentufa_off(line, "C").toString()
               .replace(/h/g, "H")
               .replace(/[^a-z \.\,'\n]/g, "")
               .replace(/ +/g, " ")
               .replace(/ +\n/g, "\n") +
        '\n';
  });
  stream.pipe(fs.createWriteStream(output));
  
  return 'mulno';
};


const tersmu = (lin, sendTo, source, socket) => {
  const anj = require('../tersmu/all.js');
  //module.exports.ma = h$main;
  benji(source, socket, clientmensi, sendTo, anj.h$main(lin));
};

const mensimikce = text => { //eliza bot analog
  let Mensibot = require('../mikce/mensimikce.js');
  //Mensibot.start(); // initializes Mensi and returns a greeting message
  const r = Mensibot.reply(text).toString();
  Mensibot = null;
  return r;
};

//mahantufa
const ningaumahantufa = (text, socket) => {
  const fs = require("fs");
  const PEG = require("pegjs");
  const UglifyJS = require("uglify-js");
  //write file
  const whichfile = text.substr(0, text.indexOf(' '));
  text = text.substr(text.indexOf(' ') + 1);
  const t = path.join(__dirname, `.${whichfile}.peg`);
  lg(text);
  fs.writeFileSync(t, text);
  // // read peg and build a parser
  const camxes_peg = fs.readFileSync(`${whichfile}.peg`).toString();
  try {
    const camxes = PEG.generate(camxes_peg, {
      cache: true,
      trace: false,
      output: "source",
      allowedStartRules: ["text"]
    });
    // // write to a file
    const fd = fs.openSync(whichfile, 'w+');
    let buffer = new Buffer('var camxes = ');
    fs.writeSync(fd, buffer, 0, buffer.length);
    buffer = new Buffer(camxes);
    fs.writeSync(fd, buffer, 0, buffer.length);
    buffer = new Buffer("\n\nmodule.exports = camxes;\n\nterm = process.argv[2];\nif (term !== undefined && typeof term.valueOf() === 'string')\n  lg(JSON.stringify(camxes.parse(term)));\n\n");
    fs.writeSync(fd, buffer, 0, buffer.length);
    fs.close(fd);
    const ya = UglifyJS.minify(whichfile).code;
    fs.writeFileSync(whichfile, ya);
    socket.emit('returner', {
      message: "snada",
      data_js: ya
    });
  } catch (e) {
    socket.emit('returner', {
      message: e.message
    });
  }
};

const getmahantufagrammar = (name, socket) => {
  const fs = require("fs");
  const grammar_file = fs.readFileSync(path.join(__dirname, `${name}.peg`)).toString();
  const grammar_file_js = fs.readFileSync(path.join(__dirname, name)).toString();
  try {
    socket.emit('returner_file', {
      message: "snada",
      data: grammar_file,
      data_js: grammar_file_js
    });
  } catch (e) {
    socket.emit('returner_file', {
      message: "fliba",
      data: e.message
    });
  }
};

const updatexmldumps = callback => {
  const velruhe = {
    cfari: {},
    mulno: {},
    nalmulselfaho: {}
  };
  //try{
  let request = require("request");
  request = request.defaults({
    jar: true,
    strictSSL: false
  });
  const jar = request.jar();
  const cookie = request.cookie("jbovlastesessionid=U2FsdGVkX1%2FpiXtl1FSyMUZvFTudUq0N59YatQesEbsfdQ6owwMDeA%3D%3D");
  langs.forEach(thisa => {
    velruhe.cfari[thisa] = true;
    const uri = `http://jbovlaste.lojban.org/export/xml-export.html?lang=${thisa}`;
    jar.setCookie(cookie, uri);
    const t = path.join(__dirname, "../dumps", `${thisa}.xml`);
    request({
      uri,
      method: "GET",
      jar
    }).on("error", () => {
      velruhe.nalmulselfaho[thisa] = true;
      delete velruhe.cfari[thisa];
      if (callback && Object.keys(velruhe.cfari).length === 0) {
        callback(velruhe);
      }
    }).pipe(fs.createWriteStream(`${t}.temp`)).on("finish", () => {
      //let ij;
      try { //validate xml
        //ij = libxmljs.parseXml(fs.readFileSync(path.join(__dirname,"../dumps",`${thisa}.xml.temp`),{encoding: 'utf8'}));
        fs.renameSync(`${t}.temp`, t);
        lg(`${thisa} updated`);
        velruhe.mulno[thisa] = true;
        if (thisa === "en") {
          xmlDocEn = libxmljs.parseXml(fs.readFileSync(path.join(__dirname, "../dumps", "en" + ".xml"), {
            encoding: 'utf8'
          }));
        }
        delete velruhe.cfari[thisa];
        sutysiskuningau(thisa);
        //global.gc();
      } catch (err) {
        velruhe.nalmulselfaho[thisa] = true;
        delete velruhe.cfari[thisa];
      }
      //ij='';
      if (callback && Object.keys(velruhe.cfari).length === 0) {
        callback(velruhe);
      }
    });
  });
  // const http = require('http');
  /*
  langs.forEach(function(thisa) {//now update pdf
    let uri="http://jbovlaste.lojban.org/export/latex-export.html?lang="+thisa;
    jar.setCookie(cookie, uri);
    request({uri: uri,method: "GET",jar: jar}, function(err, response, body) {
      if(err) {lg(err);}
      else{
        lg(body.substring(0,100));
        var urli=body.replace(/\n/igm,'').match(/\"(\/jbovlaste_export\/.*?\/.*?\.pdf)\"/i)[1];
        //lg(urli);
        //gm,"http://jbovlaste.lojban.org$1");//now get the pdf itself
        var content = fs.createWriteStream(path.join(__dirname,"../dumps","lojban-" + thisa + ".pdf"));
        var request = http.get(urli, function(response) {
          response.pipe(content);
        }).on('error', function(err) {
          lg("when updating " + thisa + " pdf: " + err);
        });
      }
    });
  });*/
  //}catch(err){lg('Error when autoupdating: ' + err);}
  //sutysiskuningau("ithkuil");
  sutysiskuningau("2002", 0);
  sutysiskuningau("en-pt-BR", 0);
  sutysiskuningau("zamenhofo", 0);
  sutysiskuningau("laadan", 0);
  sutysiskuningau("ile", 0);
  sutysiskuningau("ina", 0);
  sutysiskuningau("toki", 0);
  sutysiskuningau("ldp", 0);
  //updategloss();# not yet ready function
};

setInterval(() => {
  updatexmldumps();
}, 3 * 86400000); //update logs once a djedi

const wiktionary = (source,socket,clientmensi,sendTo, te_gerna, bangu) => {
  let wor;
  if (!bangu){
    let wor=te_gerna.split("/");
    if (wor.length>1){
      bangu=wor[0];
      wor.splice(0,1);
    }
    else {bangu="English";}
    wor=wor.join("");
  }
  lojban.wiktionary(te_gerna,bangu,(a=>benji(source, socket, clientmensi, sendTo, a)));
}

const processormensi = (clientmensi, from, to, text, message, source, socket) => {
  let ret;
  if (!text) return;
  let sendTo = to.indexOf('#') ? from : to;
  if (text.match(/^<(.*?)>: /, '') !== null) { //dealing with Slack
    from = text.match(/^<(.*?)>: /, '')[1];
    text = text.replace(/^<.*?>: /, "");
  }
  //notci functions first:
  if (text.indexOf(`${replier}: tell `) === 0) {
    text = text.substr(12).trim().replace("\\t", " ").replace(" ", "\t");
    switch (true) {
      case from.match(text.substr(0, text.indexOf('\t'))) !== null:
        benji(source, socket, clientmensi, sendTo, `${from}: tell it to yourself, Komonian`);
        break;
      case text.substr(0, text.indexOf('\t')) === replier:
        benji(source, socket, clientmensi, sendTo, `${from}: hey, Carrot, really think I'm that stupid? `);
        break;
      default:
        const d = new Date();
        notci.push(`${from.replace(/^\.+/,"").replace(/\.+$/,"").trim()}\t${text} | ${d.toISOString()}`);
        benji(source, socket, clientmensi, sendTo, `${from}: via Pepper's magic this will be sent to ${text.substr(0, text.indexOf('\t'))} after they return to the chat`);
        fs.writeFile(notcijudri, notci.join("\n"));
        //loadNotci();
        break;
    }
  }
  //notci functions in lojban as an alternative:
  if (text.indexOf(`${replier}: doi `) === 0) {
    text = text.substr(11).trim().replace(/^la /, '').replace("\\t", " ").replace(" ", "\t");
    switch (true) {
      case from.match(text.substr(0, text.indexOf('\t'))) !== null:
        benji(source, socket, clientmensi, sendTo, `${from}: e'u do cusku di'u lo nei si'unai`);
        break;
      case text.substr(0, text.indexOf('\t')) === replier:
        benji(source, socket, clientmensi, sendTo, `${from}: xu do je'a jinvi lodu'u mi bebna i oi`);
        break;
      default:
        const ds = new Date();
        notci.push(`${from.replace(/^\.+/,"").replace(/\.+$/,"").trim()}\t${text} | ${ds.toISOString()}`);
        benji(source, socket, clientmensi, sendTo, `${from}: mi ba benji di'u ba lo nu la'o gy.${text.substr(0, text.indexOf('\t'))}.gy. di'a cusku da`);
        fs.writeFile(notcijudri, notci.join("\n"));
        //loadNotci();
        break;
    }
  }
  //now send back part
  for (let l = 0; l < notci.length; l++) {
    //sendTo
    if (notci[l].length === 0) continue; // prevent a crash if the line is empty
    let cmenepagbu = notci[l].split("\t"); //.substr(0, notci[l].indexOf('\t'));
    let sem;
    try {
      sem = new RegExp(cmenepagbu[1].toLowerCase(), "gim");
    } catch (err) {
      sem = '';
    }
    if (from.match(sem) !== null) {
      cmenepagbu = notci[l].split("\t");
      benji(source, socket, clientmensi, sendTo, (`${from}: cu'u la'o gy.${cmenepagbu[0]}.gy.: ${cmenepagbu[2]}`).replace(/(.{190,250})(, |[ \.\"\/])/g, '$1$2\n'));
      notci.splice(l, 1);
      l = l - 1;
      fs.writeFile(notcijudri, notci.join("\n"));
      //loadNotci();
    }
  }
  // 
  ///
  const txt = text.toLowerCase();
  let inLanguage = defaultLanguage;
  const pp = (/:(.+)/.exec(txt)||['',''])[1];
  const po = (/ (.+)/.exec(txt)||['',''])[1].trim();
  console.log(pp);
  switch (true) {
    case txt.trim() === '#ermenefti':
      benji(source, socket, clientmensi, sendTo, "https://mw.lojban.org/papri/Hermeneutics");
      break;
    case txt.trim() === '#slak':
      benji(source, socket, clientmensi, sendTo, "https://slaka.herokuapp.com");
      break;
    case txt.trim() === '#telegram':
      benji(source, socket, clientmensi, sendTo, "#lojban https://telegram.me/joinchat/BLVsYz3hCF-CtYw0-2IkqQ\n#ckule https://telegram.me/joinchat/BLVsYz4hC9ulWahupDLovA\n#jbosnu https://telegram.me/joinchat/BLVsYz20Boixl0xN-0TrPw\n#spero https://telegram.me/joinchat/BcR2JD4jiwpKsTiof9rDRA\n##jboselbau https://telegram.me/joinchat/CJYorT2ma6UVfhb9YThEqw");
      break;
    case txt.trim() === '#uilkinse':
      benji(source, socket, clientmensi, sendTo, "https://mw.lojban.org/papri/The_analytical_language_of_John_Wilkins");
      break;
    case txt.trim() === '#erneta':
      benji(source, socket, clientmensi, sendTo, "http://jbotcan.org/lojban/en/SWH_confirmed.html");
      break;
    case txt.trim() === '#selkunti':
      benji(source, socket, clientmensi, sendTo, "Whorf described a workplace in which full gasoline drums were stored in one room and empty ones in another; he said that because of flammable vapor the \"empty\" drums were more dangerous than those that were full, although workers handled them less carefully to the point that they smoked in the room with \"empty\" drums, but not in the room with full ones. Whorf argued that by habitually speaking of the vapor-filled drums as empty and by extension as inert, the workers were oblivious to the risk posed by smoking near the 'empty drums'.");
      break;
    case txt.trim() === '#camxes':
      benji(source, socket, clientmensi, sendTo, "https://lojban.github.io/ilmentufa/camxes.html\nhttps://lojban.github.io/ilmentufa/glosser/glosser.htm");
      break;
    case txt.trim() === '#sepulka':
      benji(source, socket, clientmensi, sendTo, "https://mw.lojban.org/papri/sepulka/en");
      break;
    case txt.trim() === '#noiha':
      benji(source, socket, clientmensi, sendTo, "ko\'a broda poi\'a brodo = lo nu ko\'a broda cu fasnu gi\'e brodo\nko\'a broda noi\'a brodo = lo nu ko\'a broda cu fasnu .i lo go\'i cu brodo\nko\'a broda soi\'a brodo = lo nu ko\'a broda cu brodo\nko\'a broda soi ke\'a brodo = ko\'a broda .i lo nu go\'i cu brodo");
      break;
    case txt.trim() === '#n-paradigm':
      benji(source, socket, clientmensi, sendTo, "beu  B  Bekti  (object)  ‘-/in’  Patients, Parts, Properties\ncau  C  Canli  (quantity)  ‘by/for’  Quantities, Amounts, Values\ndio  D  Dirco  (direction)  ‘to/for’  Recipients, Beneficiaries, Destinations\nfoa  F  Folma  (full)  ‘in/of’  Wholes, Sets, Collectivities\njui  J  Junti  (young)  ‘than’  Lessers in greater/lesser than relations\nkao  K  Kakto  (act)  ‘-/by’  Actors, Agents, Doers\nneu  N  Nerbi  (necessary)  ‘under’  Conditions, Fields, Circumstances\npou  P  Proju  (produce)  ‘-’  Products, Outputs, Purposes\ngoa  G  Groda  (big)  ‘than’  Greaters in greater/lesser than relations\nsau  S  Satci  (start)  ‘from’  Sources, Origins, Reasons, Causes\nveu  V  Vetci  (event)  ‘by/via’  Events, States, Deeds, Means, Routes, Effects");
      break;
    case (txt.indexOf(`${prereplier}gadri`) === 0 || txt.trim() === '#gadri'):
      benji(source, socket, clientmensi, sendTo, 'lo broda = su\'oi da poi ge ke\'a broda gi ro\'oi broda cu me ke\'a\nlo [PA] broda = zo\'e noi ke\'a broda [gi\'e zilkancu li PA lo broda]\nla [PA] broda = zo\'e noi lu [PA] broda li\'u cmene ke\'a mi\nlo PA sumti = lo PA me sumti\nla PA sumti = zo\'e noi lu PA sumti li\'u cmene ke\'a mi\nloi [PA] broda = lo gunma be lo [PA] broda\nlai [PA] broda = lo gunma be la [PA] broda\nloi PA sumti = lo gunma be lo PA sumti\nlai PA sumti = lo gunma be la PA sumti\nlo\'i [PA] broda = lo selcmi be lo [PA] broda\nla\'i [PA] broda = lo selcmi be la [PA] broda\nlo\'i PA sumti = lo selcmi be lo PA sumti\nla\'i PA sumti = lo selcmi be la PA sumti\nPA sumti = PA da poi ke\'a me sumti\nPA broda = PA da poi broda\npiPA sumti = lo piPA si\'e be pa me sumti\nle broda poi brode = le broda je ckaji lo ka ce\'u brode\nle broda ku poi brode = lo me le broda ku je brode');
      break;
      // case txt.indexOf("nlp:") === 0: stnlp(source,socket,clientmensi,sendTo,text.substr(4));break;
    case txt.indexOf(".lujvo ") === 0:
      benji(source, socket, clientmensi, sendTo, JSON.stringify(lojban.jvozba(po.split(" "))));
      break;
    case txt.indexOf("lujvo:") === 0:
      benji(source, socket, clientmensi, sendTo, "Use '.lujvo ' instead.");
      break;
    case txt.indexOf("exp:") === 0:
      benji(source, socket, clientmensi, sendTo, "Use '.exp ' instead");
      break;
    case txt.indexOf("k:") === 0:
      benji(source, socket, clientmensi, sendTo, lojban.ilmentufa_off(pp, "C"));
      break;
    case txt.indexOf("raw:") === 0:
      benji(source, socket, clientmensi, sendTo, lojban.ilmentufa_off(pp, "J"));
      break;
    case txt.indexOf("anji:") === 0:
      benji(source, socket, clientmensi, sendTo, "Use '.anji ' instead.");
      break;
    case txt.indexOf("off:") === 0:
      benji(source, socket, clientmensi, sendTo, "Use '.off ' instead.");
      break;
    case (txt.indexOf("yacc:") === 0||txt.indexOf("cowan:") === 0):
      tcepru(pp, sendTo, source, socket);
      break;
    case (txt.indexOf("jbofi'e:") === 0||txt.indexOf("jbofihe:") === 0||txt.indexOf("gerna:") === 0):
      jbofihe(pp, sendTo, source, socket);
      break;
    case txt.indexOf("tersmu:") === 0:
      tersmu(pp, sendTo, source, socket);
      break;
    case txt.indexOf(".alta ") === 0:
      benji(source, socket, clientmensi, sendTo, run_camxesalta(po));
      break;
    case txt.indexOf(".off ") === 0:
      benji(source, socket, clientmensi, sendTo, lojban.ilmentufa_off(po));
      break;
    case txt.indexOf(".exp ") === 0:
      benji(source, socket, clientmensi, sendTo, lojban.ilmentufa_exp(po));
      break;
    case txt.indexOf(".raw ") === 0:
      benji(source, socket, clientmensi, sendTo, lojban.ilmentufa_off(po, "J"));
      break;
    case txt.indexOf(".zei ") === 0:
      benji(source, socket, clientmensi, sendTo, lojban.zeizei(po));
      break;
    case txt.indexOf(".anji ") === 0:
      benji(source, socket, clientmensi, sendTo, lojban.anji(po));
      break;
    case txt.indexOf(".kru ") === 0:
      benji(source, socket, clientmensi, sendTo, lojban.krulermorna(po));
      break;
    case (txt.indexOf(`${replier}: ko ningau`) === 0 || text.indexOf(`${replier}: ko cnino`) === 0):
      setTimeout(() => {
        updatexmldumps(({
          nalmulselfaho
        }) => {
          benji(source, socket, clientmensi, sendTo, 'i ba\'o jai gau cnino');
          const selsre = Object.keys(nalmulselfaho);
          if (selsre.length) benji(source, socket, clientmensi, sendTo, `i na kakne lo ka jai gau cnino fai la'e zoi zoi ${selsre.join(' ')} zoi`);
        });
        benji(source, socket, clientmensi, sendTo, 'sei ca ca\'o jai gau cnino be fai lo pe mi sorcu');
      }, 1);
      break;
    case txt.indexOf(".wikt ") === 0:
      wiktionary(source,socket,clientmensi,sendTo, po, "English");
      break;
    case txt.indexOf(".djbo ") === 0:
      wiktionary(source,socket,clientmensi,sendTo, po, "Lojban");
      break;
    case txt.indexOf(".den ") === 0:
      wiktionary(source,socket,clientmensi,sendTo, po, "English");
      break;
    case txt.indexOf(".deo ") === 0:
      wiktionary(source,socket,clientmensi,sendTo, po, "Esperanto");
      break;
    case txt.search('\\.('+robangu+') ') === 0:
      benji(source, socket, clientmensi, sendTo, vlaste(" "+po, ln=txt.split(" ")[0].substr(1)));
      break;
    case txt.search('('+robangu+'):') === 0:
      benji(source, socket, clientmensi, sendTo, vlaste(pp, txt.split(":")[0]));
      break;
    case txt.indexOf('frame: /full ') === 0:
      benji(source, socket, clientmensi, sendTo, vlaste(text.substr(12), 'en', 'framemulno'));
      break;
    case txt.indexOf('frame:/full ') === 0:
      benji(source, socket, clientmensi, sendTo, vlaste(text.substr(11), 'en', 'framemulno'));
      break;
    case txt.indexOf(`${prereplier}ktn`) === 0:
      benji(source, socket, clientmensi, sendTo, prettifylojbansentences());
      break;

      // Change default language
    case txt.indexOf('bangu:') === 0:
      benji(source, socket, clientmensi, sendTo, bangu(pp, from));
      break;

      // Give definition of valsi in specified language
    case txt.indexOf('?:') === 0:
      inLanguage = RetrieveUsersLanguage(from, inLanguage);
      benji(source, socket, clientmensi, sendTo, vlaste(pp, inLanguage));
      break; // Gives definition of valsi in the default language set to user
    case (txt.indexOf('selmaho:') === 0||txt.indexOf('selma\'o:') === 0):
      benji(source, socket, clientmensi, sendTo, vlaste(pp, 'en', 'selmaho'));
      break;
    case txt.indexOf('finti:') === 0:
      benji(source, socket, clientmensi, sendTo, vlaste(pp, 'en', 'finti'));
      break;
    case txt.indexOf('rafsi:') === 0:
      benji(source, socket, clientmensi, sendTo, vlaste(pp, 'en', 'raf'));
      break;
    case txt.search("ra'oi [a-z']+ rafsi ma") === 0:
      const reg = /ra'oi ([a-z']+) rafsi ma/;
      const mat = reg.exec(text);
      benji(source, socket, clientmensi, sendTo, vlaste(mat[1], 'en', 'raf'));
      break;
    case txt.search("(\.i |i |)ma rafsi zo [a-z']+") === 0:
      const rg = /.*ma rafsi zo ([a-z']+).*/;
      const mt = rg.exec(text);
      benji(source, socket, clientmensi, sendTo, vlaste(mt[1], 'en', 'raf'));
      break;
    case txt.indexOf('gloss:') === 0:
      benji(source, socket, clientmensi, sendTo, lojban.gloss(pp, 'en'));
      break;
    case txt.indexOf('.gloss ') === 0:
      benji(source, socket, clientmensi, sendTo, lojban.gloss(po, 'en'));
      break;
    case txt.indexOf('.loi ') === 0:
      benji(source, socket, clientmensi, sendTo, lojban.lojban2loglan(po));
      break;
    case txt.indexOf('.coi ') === 0:
      benji(source, socket, clientmensi, sendTo, lojban.loglan2lojban(po));
      break;
    case txt.indexOf(`${prereplier}mhnt `) === 0:
      ningaumahantufa(text.substr(12), socket);
      break;
    case txt.indexOf(`${prereplier}getgr `) === 0:
      getmahantufagrammar(text.substr(13), socket);
      break;
    case txt.indexOf('ze:') === 0:
      zmifanva(source, socket, clientmensi, sendTo, pp, 'en2jb');
      break;
    case txt.indexOf('zj:') === 0:
      zmifanva(source, socket, clientmensi, sendTo, pp, 'jb2en');
      break;
    case txt.indexOf('.ze ') === 0:
      zmifanva(source, socket, clientmensi, sendTo, po, 'en2jb');
      break;
    case txt.indexOf('.zj ') === 0:
      zmifanva(source, socket, clientmensi, sendTo, po, 'jb2en');
      break;
    case txt === `${replier}: pseudogismu`:
      benji(source, socket, clientmensi, sendTo, pseudogismu());
      break;
    case txt === `${replier}: ii`:
      benji(source, socket, clientmensi, sendTo, io());
      break;
    case txt === `${replier}: aigne`:
      benji(source, socket, clientmensi, sendTo, kurtyvla());
      break;
    case txt === `${replier}: help`:
      benji(source, socket, clientmensi, sendTo, sidju());
      break;
    case txt.indexOf("rot13:") === 0:
      benji(source, socket, clientmensi, sendTo, lojban.rotpaci(pp));
      break;
    case txt.indexOf(`${prereplier}r `) === 0:
      benji(source, socket, clientmensi, sendTo, lojban.rukylermorna(text.substr(prereplier.length + 1).trim()));
      break;
    case txt.indexOf(`${prereplier}j `) === 0:
      benji(source, socket, clientmensi, sendTo, lojban.jbopomofo(text.substr(prereplier.length + 1).trim()));
      break;
    case txt.indexOf('tatoeba:') === 0:
      benji(source, socket, clientmensi, sendTo, sisku(pp));
      break;
    case sendTo === from:
      inLanguage = RetrieveUsersLanguage(from, inLanguage);
      benji(source, socket, clientmensi, sendTo, vlaste(" " + text.trim(), inLanguage)); // Gives definition of valsi in the default language set to user
  }
};

client.addListener('message', (from, to, text, message) => {
  processor(client, from, to, text, message);
});

clientmensi.addListener('message', (from, to, text, message) => {
  processormensi(clientmensi, from, to, text, message);
});

clientmensi.addListener('error', message => {
  throw new Error(message);
});

//NAXLE

const http = require('http');
// NEVER use a Sync function except at start-up!
const index = fs.readFileSync(`${__dirname}/naxle.html`);

// Send index.html to all requests
const app = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end(index);
});

// Socket.io server listens to our app
const ik = require('socket.io').listen(app);

ik.sockets.on('connection', socket => {
  //socket.emit('welcome', { message: 'Welcome!' +socket.id});
  //ik.to(socket.id).emit("returner", { message: message: vlaste(data.data,'en') });
  socket.on(
    'i am client', data => {
      //clientmensi, from, to, text, message,source
      if (data.data.indexOf(`${prereplier}doi`) === 0 || data.data.indexOf(`${prereplier}tell`) === 0) {} else {
        processormensi(clientmensi, "mw.lojban.org", "", data.data, "", "naxle", socket);
      }
    }
  );
});

app.listen(3002);

