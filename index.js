const display = document.getElementById("display");


function appendToDisplay(input){
 display.value += input;
}
function torolj(){
    display.value ="";
}

function kalkulalj(){
    display.value = eval(display.value);
}