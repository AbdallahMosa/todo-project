

var userName ;
function askUserName(){
     userName = prompt("Please enter your name:");

return userName
};
askUserName();

function testGender (){
    var gender = prompt("Please enter your gender :(male or female)");

    if (gender=="male") {
        alert("welcome Mr "+userName);
        
    } else if (gender=="female") {
        alert("welcome Ms "+userName);
    } else { alert("welcome "+userName);
        
    }
}
 testGender();


function testAge (){
    var age = prompt("Please enter your age :");
    if (age<=0) {
        alert("Please enter your age correctly"); 
    } else alert("your age is :"+age);

}
testAge();

function welcomeMessage (){
    var testWelcome = confirm("welcome to our website");
    if (testWelcome == true) {
        text = "Thanks for continuing  ";
      } else {
        text = "done skip";
      };
}
welcomeMessage ();

var answers =[];
function questionOne (){
    var questionNumberOne = prompt("Q1 Are you a football fan? (Yes/No)");

   if (questionNumberOne == "") {
    alert("invalid");
   } else{ answers.push(questionNumberOne)};
}
function questiontTwo (){
    var questionNumberTwo = prompt("Q2 do you like music? (Yes/No)");

   if (questionNumberTwo == "") {
    alert("invalid");
   }else { answers.push(questionNumberTwo)}; 
}
function questiontThree (){
    var questionNumberThree = prompt("Q3 Do you like Cristiano Ronaldo (Yes/No)");

   if (questionNumberThree == "") {
    alert("invalid");
   }else { answers.push(questionNumberThree)}; 
}

questionOne();
questiontTwo();
questiontThree();
function forLoop(){

for (var index = 0; index < answers.length; index++) {
    console.log(answers[index]);
    
}
}

forLoop();