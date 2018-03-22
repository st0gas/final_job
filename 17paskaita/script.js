
var dices = JSON.parse(localStorage.getItem('bamba'));
if (dices == null){
    var dices = {dice1:[],dice2:[]};
} else {
    var dices = JSON.parse(localStorage.getItem('bamba'));
}
console.log(dices);



let line = "";
for (i=0;i<dices.dice1.length;i++) {                                             //
        
        
    line = line + "<li>"+dices.dice1[i]+" and "+(dices.dice2[i])+"</li>";      //Bandau ihardkodint eilute.....ismeta kad unexpected [
}
document.getElementById("list").innerHTML = line;

function rollDice(){
    let line = "";
    let die1 = document.getElementById("die1");
    let die2 = document.getElementById("die2");
    let result = document.getElementById("result");
    let guess = document.getElementById("guess").value;
    
    document.getElementById("guess").value = "";
    
    let d1 = Math.floor(Math.random() * 6) + 1;
    dices.dice1.push(d1);
    let d2 = Math.floor(Math.random() * 6) + 1;
    dices.dice2.push(d2);
    
    let diceTotal = d1 + d2;
    
    let die1img = "<img src='images/"+d1+".png'>";
    let die2img = "<img src='images/"+d2+".png'>";
    
    die1.innerHTML = die1img;
    die2.innerHTML = die2img;

    if (guess == diceTotal){
        document.getElementById("result").innerText = "Won"
    } else {
        document.getElementById("result").innerText = "Loose"
    }

    localStorage.setItem('bamba', JSON.stringify(dices));
    var arrLength = dices.dice1.length;
    console.log(arrLength); 
    for (i=0;i<dices.dice1.length;i++) {                                             //
        
        
        line = line + "<li>"+dices.dice1[i]+" and "+(dices.dice2[i])+"</li>";      //Bandau ihardkodint eilute.....ismeta kad unexpected [
    }
    document.getElementById("list").innerHTML = line;

}


