const rElement= document.getElementById("r");
const gElement= document.getElementById("g");
const bElement= document.getElementById("b");

const levels = Array.from(document.getElementsByClassName("mode"));
const squares = Array.from(document.getElementsByClassName("square"));

let gamelevel= levels.find((level)=> {
 const classList =Array.from(level.classList);
 return classList.includes("selected");   
}).innerHTML; 

levels.forEach((level) =>{
  level.addEventListener("click", function(){
    levels.forEach((mode) => mode.classList.remove("selected"));
    this.classList.add("selected");

    gamelevel=this.innerHTML;
  });
 
});

//setting square background colors using rgb
const startButton=document.getElementById("reset");
startButton.addEventListener("click",function(){
  for(let i=0;i< squares.length;i++){
    const firstSquare =squares[i];
    firstSquare.style.backgroundColor="rgb(200,45,255)";
 
  }
 
  

});
