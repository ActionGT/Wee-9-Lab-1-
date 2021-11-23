
const btn = document.querySelector('#btn');

//variables

var com;

//function that assigns a value to the computer selection and makes a comparrison to users selection 
function calc() {


for(var i = 0; i<=2;i++){
  if(i<=2){
    var a = Math.floor(Math.random() * 3);
    
  if (a === 0) {
    com = "paper";
    alert("computer Selects: " + com);
    
  } else if (a === 1) {
    com = "scissor";
    alert("computer Selects: " + com);

  } else if (a === 2) {
    com = "rock";
    alert("computer Selects: " + com);
  }
  const selection = document.querySelectorAll('input[name="choice"]');
  let selectedValue;
  
  for (const i of selection) {

    if (i.checked) {
      selectedValue = i.id;

      break;
    }


}

if (selectedValue == "paper" && com == "scissor") {
  alert("you lose");
  //document.getElementById("form").style.display = "none";
  

} else if (selectedValue == "paper" && com == "paper") {
  alert("draw");
 // document.getElementById("form").style.display = "none";
 // document.getElementById("desc").style.display = "none";
} else if (selectedValue == "paper" && com == "rock") {
  alert("You Win, Game over");
  document.getElementById("form").style.display = "none";
  document.getElementById("desc").style.display = "none";
  break;
 // document.getElementById("form").style.display = "none";
  //document.getElementById("desc").style.display = "none";
} else if (selectedValue == "scissor" && com == "rock") {
  alert("you loose");
 // document.getElementById("form").style.display = "none";
  //document.getElementById("desc").style.display = "none";
} else if (selectedValue == "scissor" && com == "scissor") {
  alert("draw");
//  document.getElementById("form").style.display = "none";
 // document.getElementById("desc").style.display = "none";
} else if (selectedValue == "scissor" && com == "paper") {
  alert("You Win, Game over");
//  document.getElementById("form").style.display = "none";
 // document.getElementById("desc").style.display = "none";
 document.getElementById("form").style.display = "none";
 document.getElementById("desc").style.display = "none";
 break;
} else if (selectedValue == "rock" && com == "paper") {
  alert("You Loose");
  //document.getElementById("form").style.display = "none";
 // document.getElementById("desc").style.display = "none";
} else if (selectedValue == "rock" && com == "rock") {
  alert("Draw");
 // document.getElementById("form").style.display = "none";
 // document.getElementById("desc").style.display = "none";
} else if (selectedValue == "rock" && com == "scissors") {
  alert("You Win, Game over");
  document.getElementById("form").style.display = "none";
  document.getElementById("desc").style.display = "none";
  break;
  //document.getElementById("form").style.display = "none";
  //document.getElementById("desc").style.display = "none";

}else if(selectedValue == null){
  alert("Please make a selection");


}


  }//outer if
  else if(i>=2){
    alert("Game now over");
    document.getElementById("form").style.display = "none";
    document.getElementById("desc").style.display = "none";

  }
  

}//for
  


}