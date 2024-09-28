const x=document.querySelector(".x");
const btn=document.getElementById("btn")
const r=document.querySelector(".r")
const ru=document.querySelector(".ru")

x.addEventListener("click",()=>{
    ru.style.display="none";
})

btn.addEventListener("click",()=>{
    ru.style.display="block";
})

const cSc=document.getElementById("cSc");
const pSc=document.getElementById("pSc")

// const Rock=document.getElementById(".RK")
// const Paper=document.getElementById(".PP")
// const Scissor=document.getElementById(".sc")
const choices = [
    { name: 'rock', img: 'rock.png' },
    { name: 'paper', img: 'paper.png' },
    { name: 'scissor', img: 'scissor.png' }
  ];

  function getpcChoice(){
    const randomIndex=Math.floor(Math.random()*choices.length)
    return choices[randomIndex];
}

let playerScore = localStorage.getItem('playerScore') ? parseInt(localStorage.getItem('playerScore')) : 0;
let computerScore = localStorage.getItem('computerScore') ? parseInt(localStorage.getItem('computerScore')) : 0;
const next=document.getElementById("next");


function getWinner(playerChoices,pcchoice){
    if(playerChoices.name===pcchoice.name){
       
         return "Tie up";
    }

   
   
    if((playerChoices.name === "rock" && pcchoice.name === 'scissor') ||
    (playerChoices.name === "scissor" && pcchoice.name === "paper") ||
    (playerChoices.name === "paper" && pcchoice.name=== 'rock')){
        playerScore ++;
       getCount();
      
       next.style.display="block"
    
        return "YOU WIN AGAINST PC"  
    }

    else{
        computerScore++;
        getCount();
        
        // choos.style.border="10px solid green";
       return "YOU LOST AGAINST PC"
       
    }
}


function getCount(){
    cSc.textContent=computerScore;
    pSc.textContent=playerScore ;

    localStorage.setItem('playerScore', playerScore);
    localStorage.setItem('computerScore', computerScore);
    }

const choice=document.querySelectorAll(".choice")



const playerChoice=document.getElementById("playerChoice")
const pcChoice=document.getElementById("pcChoice")

const ROPASC=document.querySelector(".ROPASC")
const winner=document.querySelector(".winner")
const showWinner=document.querySelector(".showWinner")
const count=document.querySelector(".count")
const bttt=document.getElementById("bttt")
const chooos=document.querySelector(".chooos")
const choos=document.querySelector(".choos")


choice.forEach(option=>{
    option.addEventListener("click",(e)=>{
        

        const userChoice=e.currentTarget.getAttribute('data-choice');
        const playerChoices = choices.find(choice => choice.name === userChoice);
    
        const pcchoice=getpcChoice();
        
        
        ROPASC.style.display="none"
        selectIm.style.display="block"
        play.style.display="block"
        showWinner.style.display="none"
        next.style.display="none"
      
        // count.style.display="block" 
        
        
        selectIm.style.display="flex"
    //btn.style.marginTop="250px"
       ru.style.marginLeft="280px"
    //ru.style.marginTop="10px"
    //next.style.marginTop="300px"
    //btn.style.padding="30px"
      playerChoice.innerHTML=`<div class="chooos"> <img src="${playerChoices.img}" alt="${playerChoices.name}"/></div>`
      const result=getWinner(playerChoices,pcchoice);
    //   console.log(result)
    winner.textContent=result;
      pcChoice.innerHTML=`<div class="choos"> <img src="${pcchoice.img}" alt="${pcchoice.name}"/></div>`
      
    })
})


const play=document.querySelector(".play");
const selectIm=document.querySelector(".selectIm")


play.addEventListener("click",()=>{
    ROPASC.style.display="block"
    selectIm.style.display="none"
     showWinner.style.display="none"
    //  btn.style.position="fixed"
     next.style.display="none" 
     ru.style.marginLeft="300px" 
})




next.addEventListener("click",()=>{
     ROPASC.style.display="none";
       selectIm.style.display="none"
      showWinner.style.display="block"
      next.style.display="none" 
      count.style.display="none" 
       ru.style.marginLeft="800px"
       ru.style.marginTop="200px"


})

bttt.addEventListener("click",()=>{
 ROPASC.style.display="block" 
 showWinner.style.display="none"
 count.style.display="block"
 count.style.display="flex"
 btn.style.display="block"
 ru.style.marginLeft="250px" 
 ru.style.marginTop="30px" 
  
})

   


