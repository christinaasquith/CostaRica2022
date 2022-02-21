//this is a single line comment in JavaScript//
/*this is multi line*/
var clickCount = 0;
var surf2Button = document.getElementById("surf2");
surf2Button.addEventListener("click", sendMessage);
function sendMessage(){
clickCount += 1;
if (clickCount == 1){
sendMessage1();
}
if (clickCount == 2){
sendMotivation2();
}
if (clickCount == 3){
sendMotivation3();
resetClickCount();
}
}
function sendMessage1(){
    alert("Expectations are just resentments under construction.");
}
function sendMessage2(){
    alert("Go to bed early, miss an opportunity.");
}
function sendMessage3(){
    alert("If it is not not fun, why do it?");
}
function resetClickCount(){
    clickCount = 0;
}
