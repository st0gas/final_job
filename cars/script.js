var selectedBrand = "";										//Kintamasis pasirenktam brand'ui is droplist'o
var selectedModel = "";										//Kintamasis pasirenktam modeliui
var Brands = [];											 //Masyvas Gamintojams
var Models = [];											//Masyvas modeliams

for (i = 0; i < CARS.length; i++) {							//Is CARS masyvo trauksim brand reiksmes
	if (Brands.indexOf(CARS[i].brand) === -1) {				//Jeigu Brands masyve nera tokios pat "brand" reiksmes kaip ir CARS
		Brands.push(CARS[i].brand);							//Kisam tokia reiksme i Brands masyva
	}
}

$(function(){												//Inicijuojam nekenciama JQuery.....lieviausia kalba kokia teko matyti


$(document).ready(function(){																	//Inicijuojam sia funkcija tik pilnai interpretavus visa puslapio koda

for (i = 0; i < Brands.length; i++) {															//Nuskaitom visas Brands masyvo reiksmes
	$(".brandItem").append( "<a class='dropdown-item brandItems' href='#'>" + Brands[i] + "</a>" );	//Kisam visas reiksmes i dropdown hardkodindami HTML'a
};


});



$('body').on('click', '.dropdown-item', function() {											//Funkcija inicijuojama paspaudus betkuri dropdown elementa
        // alert("nesvarbu koks pasirinkimas, vistiek veiks!");
        $(this).parents(".dropdown").find('.btn').html($(this).text());							//Pervadinam dropdown elementa, kad butu aiskus pasirinkimas
        selectedBrand = ($(this).text());														//Priskiriam reiksme kintamajam, kad pagal ja galetume filtruoti modelius
        console.log (selectedBrand);
        Models = [];
        $(".modelItems").remove();
  		// $(this).parents(".dropdown").find('.btn').val($(this).data('value'));	
  		for (i = 0; i < CARS.length; i++) {
  			if(CARS[i].brand == selectedBrand){														//Is CARS masyvo trauksim model reiksmes
				if (Models.indexOf(CARS[i].model) === -1) {											//Jeigu Models masyve nera tokios pat "model" reiksmes kaip ir CARS
				Models.push(CARS[i].model);															//Kisam tokia reiksme i Models masyva
			}}
		}


    for (i = 0; i < Models.length; i++) {                             //Nuskaitom visas Brands masyvo reiksmes
  $(".modelItem").append( "<a class='dropdown-item modelItems' href='#'>" + Models[i] + "</a>" );  //Kisam visas reiksmes i dropdown hardkodindami HTML'a
};

    });




});

