var selectedBrand = "";                                     //Kintamasis pasirenktam brand'ui is droplist'o
var selectedModel = "";                                     //Kintamasis pasirenktam modeliui
var Brands = [];                                             //Masyvas Gamintojams
var Models = [];                                            //Masyvas modeliams
var BrandArray = [];
var ModelArray = [];
var h = "";

for (i = 0; i < CARS.length; i++) {                         //Is CARS masyvo trauksim brand reiksmes
	if (Brands.indexOf(CARS[i].brand) === -1) {             //Jeigu Brands masyve nera tokios pat "brand" reiksmes kaip ir CARS
		Brands.push(CARS[i].brand);                         //Kisam tokia reiksme i Brands masyva
	}
}


$(function () {                                             //Inicijuojam nekenciama JQuery.....lieviausia kalba kokia teko matyti
	$(document).ready(function () {                                                                         //Inicijuojam sia funkcija tik pilnai interpretavus visa puslapio koda
		Brands.sort();
		for (i = 0; i < Brands.length; i++) {                                                               //Nuskaitom visas Brands masyvo reiksmes
			$(".brandItem").append("<a class='dropdown-item brandItems' href='#'>" + Brands[i] + "</a>");   //Kisam visas reiksmes i dropdown hardkodindami HTML'a
		};
	});

	$('body').on('click', '.brandItems', function () {                                                  	//Funkcija inicijuojama paspaudus betkuri dropdown elementa
		$(this).parents(".dropBrand").find('.btn').html($(this).text());                                    //Pervadinam dropdown elementa, kad butu aiskus pasirinkimas
		selectedBrand = ($(this).text());                                                                   //Priskiriam reiksme kintamajam, kad pagal ja galetume filtruoti modelius
		console.log(selectedBrand);
		Models = [];
		$(".modelItems").remove();

		for (i = 0; i < CARS.length; i++) {
			if (CARS[i].brand == selectedBrand) {                                                           //Is CARS masyvo trauksim model reiksmes
				if (Models.indexOf(CARS[i].model) === -1) {                                                 //Jeigu Models masyve nera tokios pat "model" reiksmes kaip ir CARS
					Models.push(CARS[i].model);                                                             //Kisam tokia reiksme i Models masyva
				}
			}
		}
		Models.sort();
		for (i = 0; i < Models.length; i++) {                                  	 							//Nuskaitom visas Models masyvo reiksmes
			$(".modelItem").append("<a class='dropdown-item modelItems' href='#'>" + Models[i] + "</a>");  	//Kisam visas reiksmes i dropdown hardkodindami HTML'a
			$(".modelBtn").text("Choose Model");                                                            //Pasirinkus kita gamintoja raginam pasirinkti modeli, keisdami droplist reiksme
			selectedModel = "";
		};

	});


	$('body').on('click', '.modelItems', function () {                                                      //Funkcija inicijuojama paspaudus betkuri dropdown elementa
		$(this).parents(".dropModel").find('.btn').html($(this).text());                                    //Pervadinam dropdown elementa, kad butu aiskus pasirinkimas
		selectedModel = ($(this).text());

		BrandArray = CARS.filter(function (car) {
			return car.brand == selectedBrand;
		});

		ModelArray = CARS.filter(function (car) {
			return car.model == selectedModel;
		});
	});

	$("#btn_search").click(function printCars() { 
	
		let h = "";
		for (i = 0; i < BrandArray.length; i++) {
			let car = BrandArray[i];
			let img_src = car.brand.toLowerCase();
			console.log(car);
			h = h + `
			<div>
			<h4>${car.brand} ${car.model}</h4>
			<img src="img/${img_src}.png">
			<table><tbody>
			<tr><th>HP:<th><td>${car.power}<td></tr>
			<tr><th>Seats:<th><td>${car.seats}<td></tr>
			<tr><th>Date:<th><td>${car.date}<td></tr>
			<tr><th>Milage:<th><td>${car.mileage}<td></tr>
			</tbody></table>
			<hr>
			</div>
			`;
		};

		$("#searchResults").html(h);
	});





});

// Po visu manipuliaciju turim 2 pagrindinius kintamuosius selectBrand ir selectModel, su kuriais galime operuoti su filtru.
