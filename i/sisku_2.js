var searchIdCounter = 0;
function search(query, callback) {
	if (query.length === 0) return;
	var searchId = ++searchIdCounter;
	var preciseMatches = [];
	var queryP=query.replace(/h/g,"'").toLowerCase();
	var queryDecomposition = queryP.replace(/ zei /g,'-zei-').split(" ").map(function(a){return a.replace(/-zei-/g,' zei ');});
	var kij=[];
	var ki=[];
	var lo_matra_cu_cupra=[];
	function julne(a){
		return a.filter(function(n){ return n !== undefined }).map(function(a){return restore(a);});
	}
	function be(kil,lu){
		var luj=decomposeLujvo(lu);
		if (luj){
			var kim=[];
			for (var ji in luj){
				var rf = rafsi[luj[ji]];
				if (rf){kim.push(rf);}else{kim=kim.concat({t: "",d:"not found",w: "-"+luj[ji]+"-",r:[luj[ji]]});}
			}
			if (kil.length===1 && kil[0].w===lu){
				kil[0].rafsiDocuments = julne(kim);
			}
			else{
			kil.push({
				t: "decomposing ...",w: query,rafsiDocuments: julne(kim)
			});
			}
		}
		return kil;
	}
	function sortthem(lo_matra_cu_cupra){
		var exactMatches = [];
		var greatMatches = [];
		var selmahoMatches = [];
		var goodMatches = [];
		var normalMatches = [];
		var defMatches = [];
		var lastMatches = [];
		for (var i=0;i<lo_matra_cu_cupra.length;i++) {
			var doc = restore(lo_matra_cu_cupra[i]);//todo: optimize for phrases
			if (!doc) {
				continue;
			}
				if (doc.w === query||doc.w === queryP){
					exactMatches.push(doc);
					exactMatches=be(exactMatches,query);
					continue;
				}
				else if ((doc.g||'')===query||((doc.g||'').search("(^|;)"+query+"(;|$)")>=0)){
					greatMatches.push(doc);
					continue;
				}
				else if ((doc.s||'') === query){
					selmahoMatches.push(doc);//selmaho
					
					continue;
				}
				else if ((doc.g||'').search("\\b"+query+"\\b")>=0) {
					goodMatches.push(doc);
					continue;
				}
				else if ((doc.t == 'gismu' && ((doc.r || []).indexOf(query) != -1))) {
					normalMatches.push(doc);
					continue;
				}
				else if (((doc.d||'').toLowerCase().search("\\b"+query+"\\b")>=0)){
					defMatches.push(doc);
					continue;
				}
				else {lastMatches.push(doc);}
		}
		if (exactMatches.length===0) {preciseMatches=be([],query)||[];}
		var sor = function (ar){
			if (ar.length===0) return ar;
			var gism=[];
			var cmav=[];
			for (c=0;c<ar.length;c++){
				if (ar[c].t==='gismu'){gism.push(ar.splice(c,1)[0]);}
			}
			for (c=0;c<ar.length;c++){
				if (ar[c].t==='cmavo'){cmav.push(ar.splice(c,1)[0]);}
			}
			return gism.sort(sortMultiDimensional)
			.concat(cmav.sort(sortMultiDimensional))
			.concat(ar.sort(sortMultiDimensional));
		};
		var sortMultiDimensional = function (a,b)
		{
			return (((a.d||'').length < (b.d||'').length) ? -1 : (((a.d||'').length > (b.d||'').length) ? 1 : 0));
		};
		greatMatches=sor(greatMatches);
		selmahoMatches=sor(selmahoMatches);
		goodMatches=sor(goodMatches);
		normalMatches=sor(normalMatches);
		defMatches=sor(defMatches);
		lastMatches=sor(lastMatches);
		preciseMatches=sor(preciseMatches);
		preciseMatches=preciseMatches
		.concat(exactMatches)
		.concat(greatMatches)
		.concat(selmahoMatches)
		.concat(goodMatches)
		.concat(normalMatches)
		.concat(defMatches)
		.concat(lastMatches);
		try{
			if(preciseMatches[0].w===queryP){
				for (var tyt=1;tyt<preciseMatches.length;tyt++){
					if(preciseMatches[tyt].l && (preciseMatches[tyt].d==="{"+queryP+"}")){
						preciseMatches.splice(tyt,1);
						tyt=tyt-1;
					}
				}
			}
		}catch(err){}
		return preciseMatches;
	}
	function shortget(a,ki,shi){
		a = a.replace(/([cfkpstx])([bdgjvz])/igm,"$1y$2");
		a = a.replace(/([bdgjvz])([cfkpstx])/igm,"$1y$2");
		a = a.replace(/([bcdfgjklmnprstvxz])\1/igm,"$1y$2");
		a = a.replace(/([aeiouy])\1/igm,"$1'$2");
		var isdef = documentStore.filter(function (o){
			return (o.w.toLowerCase()==a.toLowerCase())||(o.d.toLowerCase()=="{"+a.toLowerCase()+"}");
		});
			if (isdef && isdef.length>0){ki=ki.concat(isdef);}
			else
			{
				if (!shi){
					if (a.replace(/ zei /g,'-zei-').split(" ").length===1){
						var ye=mavalsi(a);
						if(ye[0]==='cmavo compound'){
							ye=ye[1].split(" ");
							for (var jj in ye){
								ki=shortget(ye[jj],ki,2);
							}
						}
						else if (ye[0]!==''){ki=ki.concat({t: "",d:"not found",w: a});}
					}
					else{
						var luj=decomposeLujvo(a);
						if(luj){for (var ji in luj){ki.push(rafsi[luj[ji]]);}}
					}
				}
				else{ki=ki.concat({t: "",d:"not found",w: a});}
			}
		return ki;
	}
	if ((query.indexOf('^')===0||query.slice(-1)==='$'))
	{
		preciseMatches = sortthem(documentStore.filter(function(val){return (val.w.match(query.toLowerCase())||[]).length > 0;}).splice(0,100).filter(function(n){n=restore(n); return n !== undefined }));
	}
	else if (!window.muplis && queryDecomposition.length>1){
			for (var s=0;s<queryDecomposition.length;s++){
				for (var c=queryDecomposition.length-1;c>=s;c--){
					ki=shortget(queryDecomposition.slice(s,c+1).join(" "),ki);
				}
			}
			preciseMatches.push({t: "decomposing ...",w: query,rafsiDocuments: julne(ki)});
	}
	else {
		for (var w=0;w<documentStore.length;w++){
			var m = window.storecache[w];
			if(m.indexOf(query.toLowerCase())>=0||m.indexOf(query.toLowerCase().replace(/h/g,"'"))>=0){
				lo_matra_cu_cupra.push(documentStore[w]);
			}
		}
		if (searchId !== searchIdCounter) {
			return;
		}
		else{
			preciseMatches = sortthem(lo_matra_cu_cupra);
		}
		//preciseMatches.push({t: "decomposing ...",w: query,rafsiDocuments: julne(shortget(query,[]))});
		try{
			if (preciseMatches.length===0||preciseMatches[0].rafsiDocuments[0].d==='not found') {
				preciseMatches=be([],query)||[];
			}
		}catch(err){}
		try{
			if (preciseMatches.length===0||preciseMatches[0].w!==queryP){
				var ty = julne(shortget(queryP,[]));
				if (ty.length<=1){preciseMatches=ty.concat(preciseMatches);}
				else{
					/*if(ty[0].w===queryP){
						for (var tyt=1;tyt<ty.length;tyt++){
							if(ty[tyt].l && (ty[tyt].d==="{"+queryP+"}")){
								ty.splice(tyt,1);
								tyt=tyt-1;
							}
						}
					}*/
					preciseMatches=[{t: "decomposing ...",w: query,rafsiDocuments: ty}].concat(preciseMatches);}
			}
		}catch(err){}
	}
	callback(preciseMatches);
}
