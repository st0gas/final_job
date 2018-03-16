function addProd () {
    var liElement = document.createElement("LI");                       //Sukuriam "li" elementa
    var text = document.getElementById("textArea").value;               //Nuskaitom input lauko reiksme
    liElement.innerText = text;                                         //Pridedam nuskaityta reiksme i li elementa
    document.getElementById("shoppingList").appendChild(liElement);     //"UL" elemente pridedam child elementa "li"
    document.getElementById("shoppingList").style.display = "inherit";  //Atvaizduojam UL border'i
}




