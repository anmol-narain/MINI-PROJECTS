const userChoice = prompt("Enter snake , water , gun  ? ");
const computerChoice = Math.floor(Math.random()*3);
const computer = ["snake","water","gun"][computerChoice];

const logic = (computer, userChoice) =>{

  if(userChoice === computerChoice){
    return 0;
  }
  else if(userChoice === "snake" && computer === "water"){
    return "user";
  }
  else if(userChoice === "snake" && computer === "gun"){
    return "computer";
  }
  else if(userChoice === "water" && computer === "snake"){
    return "computer";
  }
  else if(userChoice === "water" && computer === "gun"){
    return "user";
  }
  else if(userChoice === "gun" && computer === "snake"){
    return "user";
  }
  else if(userChoice === "gun" && computer === "water"){
    return "computer";
  }
  
}
let winner = logic(computer,userChoice);
document.write(`COMPUTER :- ${computer} <br> USER :- ${userChoice} <br> The Winner is ${winner}`)
