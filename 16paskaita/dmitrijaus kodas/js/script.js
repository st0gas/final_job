var array = [];

var btn_add = document.getElementById("add");
var btn_remove = document.getElementById("remove");

btn_add.addEventListener("click", addToList);

btn_remove.addEventListener("click", removeFromList);

retrieveLocalStorage();
/*
localStorage.setItem("lastname", "Smith")
localStorage.getItem("lastname");
*/

function remove(index){
	console.log("salinam index:"+index);
	array.splice(index, 1);
	localStorage.setItem("shoppingList", array.toString());
	printArray(array);
}

function addToList(){
	var product = document.getElementById("product").value;	
	console.log('pridedam:' + product);	
				
	//irasit nauja produkta i masiva
	array.push(product);
	console.log("LocalStorage bandom saugut:"+array.toString());
	localStorage.setItem("shoppingList", array.toString());
	//console.log(array);
	//atvaizduot rezultata.	
	//printArray(productList);
	printArray(array);
}

function removeFromList(){
	var product = document.getElementById("product").value;	
	console.log('atimam:' + product);	
	
	var index = array.indexOf(product);

	if (index > -1) {
		console.log("Product found:"+product +" because index:"+index);
		remove(index);
	}else{
		console.log("Can't remove:"+product +" because index:"+index);
	}
}



function printArray(arr){
	var h = "";
	h = "<ul>";
	for(var i = 0;i < arr.length;i++){
		console.log(arr[i]);
		h = h + "<li>" +arr[i]+"<button class='' onclick='remove("+ i +")'>X</button>"+"</li>";
	}	
	h = h + "</ul>";
	document.getElementById("result").innerHTML = h;
}

function retrieveLocalStorage(){
	//TODO: get shoppinglist from local storage
	var localstorage_data = localStorage.getItem("shoppingList");
	//console.log(localstorage_data);
	var _arr = localstorage_data.split(',');
	//Display shopping list
	printArray(_arr);
}