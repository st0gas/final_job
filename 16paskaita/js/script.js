function addProd () {
    var liElement = document.createElement("LI");
    // var shopText = document.getElementById("textArea").value;
    var textnode = document.createTextNode(document.getElementById("textArea").value);
    liElement.appendChild(textnode);
    document.getElementById("shoppingList").appendChild(liElement);
    document.getElementById("shoppingList").style.display = "inherit";
    // console.log (shopText);
}


