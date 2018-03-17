var shopDB = ["Milk", "Citrus","Hennesy"];
var identUL = document.getElementById("shoppingList");
var delButton;
var liElement;

function buttonDel() {                                                  //DELETE BUTTON OBJEKTO KURIMAS

        delButton = document.createElement("BUTTON");                   //Sukurian button objekta
        delButton.innerText = "Delete";                                 //Pridedam button teksta
        delButton.setAttribute('onclick','delFunc()');                  //pridedam onclick atributa
        delButton.className = "btn btn-danger btn-sm float-right";      //Pridedam bootstrap klasiu stylingui
}

function addProd () {                                                   //Produkto ikelimas i Array

    buttonDel();
            
    var liElement = document.createElement("LI");                       //Sukuriam "li" elementa
    var text = document.getElementById("textArea").value;               //Nuskaitom input lauko reiksme
    if (text !== "") {
        shopDB.push(text);                                                  //Ikeliam reiksme i Array
        liElement.innerText = text;                                         //Pridedam nuskaityta reiksme i li elementa
        document.getElementById("shoppingList").appendChild(liElement);     //"UL" elemente pridedam child elementa "li"
        document.getElementById("shoppingList").style.display = "inherit";  //Atvaizduojam UL border'i
        liElement.appendChild(delButton); 
        } else {
            alert("Cant be empty");
        }
}

function loadArray () {
    for (i=0;i<shopDB.length;i++) {

        buttonDel();
               
        var liElement = document.createElement("LI");                       //Sukuriam "li" elementa
        var text = document.getElementById("textArea").value;               //Nuskaitom input lauko reiksme
        liElement.innerText = shopDB[i];                                    //Pridedam nuskaityta reiksme i li elementa
        document.getElementById("shoppingList").appendChild(liElement);     //"UL" elemente pridedam child elementa "li"
        document.getElementById("shoppingList").style.display = "inherit";  //Atvaizduojam UL border'i
        liElement.appendChild(delButton); 
        // liElement.setAttribute("id",i);
        // delButton.className += (" "+(i));
        delButton.setAttribute("id",i);
    }
}

function delFunc () {
 
    let arrId = (event.target.id);                                          //Nustatome ID kad zinotume kuri elementa is Array trinti
    let ident = (event.target);                                             //Nustatom lygtuka kuri paspaudem
    let identLi = ident.parentNode;                                         //Nustatom UL kuriame yra LI elementas
    identLi.parentNode.removeChild(identLi);                                //Istrinam LI elementa is UL
    // shopDB.splice(arrId,1);                                                 //Istrinam array irasa

}