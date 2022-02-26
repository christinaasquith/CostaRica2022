//this is a single line comment in JavaScript//
/*this is multi line*/

//below is code for the first button//
var clickCount = 0;
var surf2Button = document.getElementById("surf2");
surf2Button.addEventListener("click", sendCreate);
function sendCreate(){
clickCount += 1;
if (clickCount == 1){
sendCreate1();
}
if (clickCount == 2){
sendCreate2();
}
if (clickCount == 3){
sendCreate3();
resetClickCount();
}
}
function sendCreate1(){
    alert("Step 1: Open a folder on your computer for your project. I named mine Codingbasics.");
}
function sendCreate2(){
    alert("Step 2: On VS Code, click OPEN and then navigate to your folder (Codingbasics for me) and click on that.");
}
function sendCreate3(){
    alert("Step 3: In VS Code create your coding files: html, css and javascript. Now you have your files in your code editor synced to you computer and you're ready to code. Scroll down, chica!");
}
function resetClickCount(){
    clickCount = 0;
} 

//my second button code is here//
var clickCountSection1 =0;
var surf3Button =document.getElementById("surf3");
surf3Button.addEventListener("click", sendRepo);function sendRepo(){
    clickCountSection1 += 1;
if (clickCountSection1 == 1){
    sendRepo1();
}
if (clickCountSection1 == 2){
    sendRepo2();
    }
    if (clickCountSection1 == 3){
    sendRepo3();
    resetClickCountSection1();
    }
} 
function sendRepo1(){
    alert("Step 1:Go to GitHub and click on repositories. Click New.");
}
function sendRepo2(){
    alert("Step 2:Make a name but no template. Add a readme. Now you`ve created a repo but not linked it to you code.");
}
function sendRepo3(){
    alert("Step 3:Then click: Add a file and drag your files from your code folder into the github");
}
function resetClickCountSection1(){
    clickCountSection1 = 0;
}


//my 3rd button code is here//
var clickCountSection2 =0;
var surf4Button =document.getElementById("surf4");
surf4Button.addEventListener("click", sendPush);function sendPush(){
    clickCountSection2 += 1;
if (clickCountSection2 == 1){
    sendPush1();
}
if (clickCountSection2 == 2){
    sendPush2();
    }
    if (clickCountSection2 == 3){
    sendPush3();
    resetClickCount();
    }
} 
function sendPush1(){
    alert("Step 1: Easiest way is to click on the commit button in your code editor. But if you want to use terminal, CD into you folder.");
}
function sendPush2(){
    alert("Step 2: type: Git add .");

}
function sendPush3(){
    alert("Step 3: type: git commit -m your message; type: git push)");
}
function resetClickCountSection2(){
    clickCountSection2 = 0;
}


 //my 4th button is here//
 var clickCountSection3 =0;
 var surf5Button =document.getElementById("surf5");
 surf5Button.addEventListener("click", sendDeploy);function sendDeploy(){
     clickCountSection3 += 1;
 if (clickCountSection3 == 1){
     sendDeploy1();
 }
 if (clickCountSection3 == 2){
     sendDeploy2();
     }
     if (clickCountSection3 == 3){
     sendDeploy3();
     resetClickCount();
     }
 } 
 function sendDeploy1(){
     alert("Step 1: Now you deploy your code by going to vercel.");
 }
 function sendDeploy2(){
     alert("Step 2: Clicking Deploy");
 
 }
 function sendDeploy3(){
     alert("Step 3: Link/copy to GitHub and configure!");
 }
 function resetClickCountSection3(){
     clickCountSection3 = 0;
 }

 //my 4th button is here//
 var clickCountSection4 =0;
 var surf6Button =document.getElementById("surf6");
 surf6Button.addEventListener("click", sendGoodbye);function sendGoodbye(){
     clickCountSection4 += 1;
 if (clickCountSection4 == 1){
     sendGoodbye1();
 }
     resetClickCountSection4();
     }
 function sendGoodbye1(){
     alert("Keep on Coding!");
 }
 function resetClickCount(){
     clickCount = 0;
 }
