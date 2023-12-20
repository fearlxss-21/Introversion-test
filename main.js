function CheckArabicCharactersOnly(e) {
	var unicode = e.charCode ? e.charCode : e.keyCode
	if (unicode != 8) { 
	if (unicode == 32)
	return true;
	else {
	if ((unicode < 48 || unicode > 57) && (unicode < 0x0600 || unicode > 0x06FF))
	return false; 
}}}


const MbtiModule = (function() {
	let types = {
		ISTJ: {title:  "", percentage: "", description: "", site: ""},
		ENTJ: {title: "", percentage: "", description: "انت احتماعي", site: ""},
		INTJ: {title: "", percentage: "", description: "انت اجتماعي", site: ""},
		ESTJ: {title: "انت انطوائي", percentage: "", description: "", site: ""},
	};


let e, i, s, n, t, f, j, p;
	let type;
	
function resetScores() {
		e = i = s = n = t = f = j = p = 0;
		type = "";
}
	
function getScores() {
	const inputs = document.getElementsByTagName("input");
	Array.prototype.forEach.call(inputs, function(input) {
		if (input.checked) {
		switch(input.value) {
			case 'e': e++; break;
			case 'i': i++; break;
			case 's': s++; break;
			case 'n': n++; break;
			case 't': t++; break;
			case 'f': f++; break;
			case 'j': j++; break;
			case 'p': p++; break;
		    }
	          }
	 });
}
	
function calculatePercentages() {
	e = Math.floor(e / 10 * 100);
	i = Math.floor(i / 10 * 100);
	s = Math.floor(s / 20 * 100);
	n = Math.floor(n / 20 * 100);
	t = Math.floor(t / 20 * 100);
	f = Math.floor(f / 20 * 100);
	j = Math.floor(j / 20 * 100);
	p = Math.floor(p / 20 * 100);
}
	
function createCharts() {
	document.querySelector("#eScore").innerHTML = e;
	document.querySelector("#iScore").innerHTML = i;
	document.querySelector("#sScore").innerHTML = s;
	document.querySelector("#nScore").innerHTML = n;
	document.querySelector("#tScore").innerHTML = t;
	document.querySelector("#fScore").innerHTML = f;
	document.querySelector("#jScore").innerHTML = j;
	document.querySelector("#pScore").innerHTML = p;
		
	document.querySelector("#eiChart").style.marginLeft = i / 2 + "%";
	document.querySelector("#snChart").style.marginLeft = n / 2 + "%";
	document.querySelector("#tfChart").style.marginLeft = f / 2 + "%";
	document.querySelector("#jpChart").style.marginLeft = p / 2 + "%";
}
	
function showResults() {
	type += (e >= i) ? "E" : "I";
	type += (s >= n) ? "S" : "N";
	type += (t >= f) ? "T" : "F";
	type += (j >= p) ? "J" : "P";
	document.querySelector("#type-title").innerHTML = types[type].title;
	document.querySelector("#type-percentage").innerHTML = types[type].percentage;
	document.querySelector("#type-description").innerHTML = types[type].description;
	document.querySelector("#type-site").href = types[type].site;
	document.querySelector("#type-details").classList.remove("hidden");
	document.querySelector("#scroll-down").classList.remove("hidden");
	document.querySelector("#results").classList.remove("hidden");
}
	
return {
	processForm: function() {
		resetScores();
		getScores();
		calculatePercentages();
		createCharts();
		showResults();
		}
	};
})();

document.querySelector("#submit").addEventListener("click", function() { MbtiModule.processForm(); });