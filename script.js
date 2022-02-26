//this is a single line comment in JavaScript//
/*this is multi line*/
//below is code for the button//
var clickCount = 0;
var surf2Button = document.getElementById("surf2");
surf2Button.addEventListener("click", sendMessage);
function sendMessage(){
clickCount += 1;
if (clickCount == 1){
sendMessage1();
}
if (clickCount == 2){
sendMessage2();
}
if (clickCount == 3){
sendMessage3();
resetClickCount();
}
}
function sendMessage1(){
    alert("Step 1: Open a folder on your computer for your project. I named mine Codingbasics.");
}
function sendMessage2(){
    alert("Step 2: On VS Code, click OPEN and then navigate to your folder (Codingbasics for me) and click on that.");
}
function sendMessage3(){
    alert("Step 3: In VS Code create your coding files: html, css and javascript. Now you have your files in your code editor synced to you computer and you're ready to code. Scroll down, chica!");
}
function resetClickCount(){
    clickCount = 0;
} 

//my second button code is here//
var clickCount =0;
var surf3Button =document.getElementById("surf3");
surf3Button.addEventListener("click", sendMessage);function sendMessage(){
    clickCount += 1;
if (clickCount == 1){
    sendMessage();
}
if (clickCount == 2){
    sendMessage2();
    }
    if (clickCount == 3){
    sendMessage3();
    resetClickCount();
    }
} 
function sendMessage1(){
    alert("Step 1:Go to GitHub and click on repositories. Click New   .");
}
function sendMessage2(){
    alert("Step 2:Make a name but no template. Add a readme. Now you’ve created a repo but not linked it to you code.");

}
function sendMessage3(){
    alert("Step 3:Then either Add a file and drag your files into the github OR go to terminal (but currently terminal not working for me!) ");
}
function resetClickCount(){
    clickCount = 0;
}

//my 3rd button code is here//
var clickCount =0;
var surf4Button =document.getElementById("surf4");
surf4Button.addEventListener("click", sendMessage);function sendMessage(){
    clickCount += 1;
if (clickCount == 1){
    sendMessage();
}
if (clickCount == 2){
    sendMessage2();
    }
    if (clickCount == 3){
    sendMessage3();
    resetClickCount();
    }
} 
function sendMessage1(){
    alert("Step 1: In terminal, CD into you folder.");
}
function sendMessage2(){
    alert("Step 2: Git add .");

}
function sendMessage3(){
    alert("Step 3: git commit -m your message then git push) ");
}
function resetClickCount(){
    clickCount = 0;
}
 
}