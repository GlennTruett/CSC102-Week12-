function countdownTimer() {
    //countdownTimer Will go from 50 to 0 by 5s
    console.log("countdownTimer() started");
    var currTime = 50;
    document.getElementById("countDis").innerHTML = currTime + " sec";
    //45 sec display
    setTimeout(function () {
       
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";    
    }, 5000);

//40 sec display
setTimeout(function () {
    currTime = currTime - 5;
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + " sec";    
}, 10000);

//35 sec display
setTimeout(function () {
    currTime = currTime - 5;
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + " sec";    
}, 15000);

//30 sec display
setTimeout(function () {
    currTime = currTime - 5;
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + " sec";    
}, 20000);

//25 sec display
setTimeout(function () {
    currTime = currTime - 5;
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + " sec";    
}, 25000);

//20 sec display
setTimeout(function () {
    currTime = currTime - 5;
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + " sec";    
}, 30000);

//15 sec display
setTimeout(function () {
    currTime = currTime - 5;
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + " sec";    
}, 35000);

//10 sec display
setTimeout(function () {
    currTime = currTime - 5;
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + " sec";    
}, 40000);

//5 sec display
setTimeout(function () {
    currTime = currTime - 5;
    console.log(currTime);
    document.getElementById("countDis").innerHTML = currTime + " sec";    
}, 45000);

//0 sec display
setTimeout(function () {
    currTime = currTime - 5;
    console.log(currTime);
    document.getElementById("countDis").innerHTML =  "Blastoff!!";    
}, 50000);




}

//btrCountdownTimer() created to fulfuill assignment Assignment: Efficiency at Mission Control
function btrCoundownTimer()
{
    console.log("btrCountdownTimer() started")
    var currTime = 50;

    for(var i = 0; i < 11; i++)
    setTimeout(function() {
        //what we do each iteration
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime;
        if(currTime == 0){
            document.getElementById("countDis").innerHTML = "Blastoff!!!"
        }
        currTime = currTime -5;

    },i * 5000 )

} 


function playCraps() { //names the new function as playCraps() and starts the function
    //troubleshooting playCraps() has started
   console.log("playcCraps() started"); // it prints play craps() started in the console so that you know the program has begun and is working properly.  
    var die1 = 0; //creates a variable known as die1 and gives it an intial value of 0.
    var die2 = 0; //creates a variable known as die2 and gives it an intial value of 0.

    die1 = Math.ceil(6 * Math.random()); //changes the value of die1 to a random number between 0 and 6 and takes away the decimal point
    die2 = Math.ceil(6 * Math.random()); //changes the value of die2 to a random number between 0 and 6 and takes away the decimal point
   
    console.log(die1); //prints the value of die1 in the console box
    console.log(die2); //prints the value of die2 in the console box

    document.getElementById("die1Res").innerHTML = "The result for die1 is: " + die1; // prints the value of die1 with "The result for die1 is:" printed befor the value
    document.getElementById("die2Res").innerHTML = "The result for die2 is: " + die2; // prints the value of die2 with "The result for die2 is:" printed befor the value
//Check if craps(7 or 11)
var sum = die1 + die2; //creats a variable named sum who's value is the sum of die1 and die2 
if(sum == 7 || sum==11){  //creats the condition that if the variable sum equals 7 or 11 then you follow the following code. 
console.log("you lose!!!!!!!!");//if the condition on the previous line is true then "you lose!!!!!!!" is printed in the console window
document.getElementById("gameRes").innerHTML = "You did not find victory. Please play again and WIN!"//Prints a message on the screen that lets you know that you lost. 
}


//check for win (even doubles)
else if(die1 % 2 == 0 && die1 == die2){ //if the condition created before is false then a new condition is made that if die1 and die2 are of the same value then you follow the instructions to follow
console.log("you win!!!!"); //if the obove condition is true then "you win!!!!" is printed in the console window
document.getElementById("gameRes").innerHTML = "You Won!!!!"; //if the condition is true then the phrase"You Won!!!!" will be printed on the screen.  

}

//check for tie
else{ // creates instructions to follow if the previous conditions are false.
    console.log("You did not win or lose"); //if the previous conditions are false then the console will read "You did not win or lose"
    document.getElementById("gameRes").innerHTML = "You did not win or lose.  Please play agian and WIN!"; //If the previuous conditions are false then the screen will show "You did not win or lose.  Please play agian and WIN!"
}


}//ends the function 

function startFun(){
console.log("startFun() started");
//disable start button
document.getElementById("startbutton").disabled = true;

//enable (disable)! stop button
document.getElementById("stopbutton").disabled = false;

document.getElementById("datatable").rows["seconds"].innerHTML = "reading data";

//run updateDisplay()

timer = setInterval(updateDisplay,time_interval);

}


function stopFun(){
    console.log("stopFun() started");
    //disable stop button
document.getElementById("stopbutton").disabled = true;

//enable (disable)! start button
document.getElementById("startbutton").disabled = false;

clearInterval(timer);

}

function playStation(){//creates the function playStation 
    console.log("playStation started");//prints playStation started in the console log when the button is clicked
    mySound = new sound("us-lab-background (4).mp3");//creates a variable that is the value of a mp3 recording of space station sounds
    mySound.play();//calls on the function to play the recording.  
}

function sound(srcfile){//creats the function sound and tells where to find the sound "source file"
    this.sound = document.createElement("audio");//makes the document an audio file
    this.sound.src = srcfile;//this tells the program where to get the sound from
    this.sound.setAttribute("preload","audio");//preloads the audio file so it plays instatnly when the button is clicked
    this.sound.setAttribute("controls","none");//makes it so there are no controls displayed
    this.sound.style.display = "none";//makes it so there is no display 
    document.body.appendChild(this.sound);//locks the attributes in
this.play = function(){//creates the function to play the recording
    this.sound.play();//makes the mp3 recording play
}
this.stop = function(){//creates a stop function
    this.sound.pause();//Pauses the recording 
}
}

function playBowie(){
    console.log("playBowie() started");
    mySound2 = new sound("David-Bowie-Space-Oddity.mp3");//creates a variable that is the value of a mp3 recording of space station sounds
    mySound2.play();
}
