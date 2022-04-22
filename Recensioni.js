function AppariScompari() {
	try{
  if (nodoRece[this.id].style.display === "block") {
    nodoRece[this.id].style.display = "none";
  } else {
    nodoRece[this.id].style.display = "block";
  } 
} catch ( e ) {
		alert("AppariScompari" + e);
	}
}



function Inizializza () {
	try {
		for (var i in nodoRece) {
		var rece = nodoRece[i];
		rece.setAttribute('style', 'display : none');		
		}		
	} catch ( e  ) {
		alert("Inizializza" + e);
	}
}

var nodoRece = new Array;

function gestoreLoad () {
	try {
	nodoRece["estendi1"] = document.getElementById ("zampa");
	nodoRece["estendi2"] = document.getElementById ("montale");	
	nodoRece["estendi3"] = document.getElementById ("milano");
	nodoRece["estendi4"] = document.getElementById ("pedulla");
    nodoRece["estendi5"] = document.getElementById ("delbuono");
	nodoRece["estendi6"] = document.getElementById ("gramigna");
	nodoRece["estendi7"] = document.getElementById ("golino");
	nodoRece["estendi8"] = document.getElementById ("terracini");

	document.getElementById("estendi1").onclick = AppariScompari;
	document.getElementById("estendi2").onclick = AppariScompari;
	document.getElementById("estendi3").onclick = AppariScompari;
	document.getElementById("estendi4").onclick = AppariScompari;
	document.getElementById("estendi5").onclick = AppariScompari;
    document.getElementById("estendi6").onclick = AppariScompari;
	document.getElementById("estendi7").onclick = AppariScompari;
	document.getElementById("estendi8").onclick = AppariScompari;

	Inizializza();
	} catch (e) {
		alert("GestoreLoad "+ e);
	}
}

window.onload = gestoreLoad;
