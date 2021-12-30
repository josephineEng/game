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
  // assign each sqaure a background color
  for(let i=0;i< squares.length;i++){
    const red=Math.floor(Math.random()* 256); // generating random color values
    const green=Math.floor(Math.random()* 256);
    const blue=Math.floor(Math.random()* 256);

    const rgbString="rgb("+red+","+green+","+blue+")";
    const square =squares[i];
    square.dataset.rgb_value =JSON.stringify([red,green,blue]);
    square.style.backgroundColor=rgbString;

 
  }
  // assigning the headers rgb values of one of the squares
  const randomSquareIndex = Math.floor(Math.random()* 6);
  const headerColorSquare=squares[randomSquareIndex];
  setRgbBackgroundColor(headerColorSquare);
  
});

function setRgbBackgroundColor(squareElement){
  const setHeaderElementBackgroundColor = (rgbValues,element)=>{
    const [r,g,b] =rgbValues;
    const rgbString = `rgb(${r},${g},${b})`;
    element.style.backgroundColor =rgbString;
    //assigning the numbers corresponding the color of the headers
    element.innerHTML =rgbValues.find((rgbValue)=>{
      return rgbValue>0;

    });
  };
  const rgbString = squareElement.dataset.rgb_value;
  const [red,green,blue] =JSON.parse(rgbString);

  const redBackground=[red,0,0];
  const greenBackground=[0,green,0];
  const blueBackground=[0,0,blue];

  setHeaderElementBackgroundColor(redBackground,rElement);
  setHeaderElementBackgroundColor(greenBackground,gElement);
  setHeaderElementBackgroundColor(blueBackground,bElement);
 
}
