let startX,startY;
let prevX,prevY;
let drawing = false;
let pg;
let currentShape;
let mode ="initial";
let backgroundColor = 300;
let currentColor = 0;
let currentPaletteName = "Lapierre c1860-1900+";
let isInPopUp = false;
let isMainMenu = true;
let t = 0.5;
let initialStrokeWeight;
let firstTime;

let isEraser = false;

/*Icons Blue */
let currentElemt
let allElements = document.querySelectorAll(".interactiveToolIcon");

let canvasWidth, canvasHeight;

//images
let img;
let backgroundD;
let imgName;

//Start - Images, Masks, Lines - To load
let imageFiles = ['image0.png','image1.png','image2.png','image3.png','image4.png','image5.png','image6.png','image7.png','image8.png'];

let maskFiles = ['mask0-body.png', 'mask0-head.png', //0,1
  'mask1.png',//2
  'mask2-body.png', 'mask2-head.png', 'mask2-lion.png', //3,4,5
  'mask3-cabbage.png', 'mask3-elf.png', //6,7
   'mask4-monster.png', 'mask4-person.png', //8,9
   'mask5-head.png', 'mask5-body.png', 'mask5-pig.png', //10,11,12
   'mask6-goose.png', 'mask6-person.png', //13,14
   'mask7-upperBody.png', 'mask7-lowerBody.png', 'mask7-statue.png', //15,16,17
'mask8-armL.png', 'mask8-armR.png', 'mask8-legR.png', 'mask8-legL.png', 'mask8-body.png']; //18,19,20,21,22

let linesFiles = ['image0.png','image1.png','image2.png','image3.png','image4.png','image5.png','image6.png','image7.png','image8.png'];
//End - Images, Masks, Lines - To load

//Start - Images, Masks, Lines - To save
let images = [];
let masks = [];
let lines = [];
//End - Images, Masks, Lines - To save

let contour;

//Transformations
let firstImg;
let sndImg;

let ax;

function keyPressed(){
  if(key==='e'){
    ct.clear();
  }
  if(key==='r'){
    ax = ct.get();
  }
  if(key ==='t'){
    ct.image(ax,0,0);
  }
  if(key === 's'){
    if(mode === "projector" ){
      saveGif('animation.gif', 2,{silent:true});
    }
    else{
          saveCanvas("myPig","png");
    }

  }
}

function preload() {
  // Load all the images
  for (let i = 0; i < imageFiles.length; i++) {
    images[i] = loadImage('./img/' + imageFiles[i]);
  }

  //load all masks
  for(let j = 0; j < maskFiles.length; j++){
    masks[j] = loadImage('./masks/' + maskFiles[j]);
  }

  //load all lines
  for(let i = 0; i < linesFiles.length; i++){
    lines[i] = loadImage('./lines/' + linesFiles[i]);
  }
}

function setup() {
  if(!isMainMenu){

    let canvasContainer = select("#canvasContainer");
    canvasWidth = 600//canvasContainer.width;
    /*HEREcanvasHeight = canvasContainer.height;
    
    let myCanvas = createCanvas(canvasWidth,canvasHeight);*/

    canvasHeight = 600 //Math.ceil(canvasContainer.width * 0.6666666);

    let myCanvas = createCanvas(600, 600);
    //console.log(canvasHeight)
    

    myCanvas.parent("canvasContainer");
    myCanvas.id("myCanvas")

    pg = createGraphics(canvasWidth,canvasHeight);
    ct = createGraphics(canvasWidth,canvasHeight);
    currentShape = new Shape(mode);
    //HERE!!!updatePalette(currentPaletteName);

    //initialStrokeWeight = lineWeight.value;
    firstTime = true;
    backgroundD = 0;
  }  
}

function draw() {
  if(!isMainMenu){
    drawBackground();
    image(pg,0,0);
    image(ct,0,0);

    if(mode === "initial" || mode === "projector"){
      removeElem(); 
    }
    
    if(drawing) {
      currentShape.draw(mouseX,mouseY);
    }
    if(mode==="eraser") {
      cursor("Icons/eraser.png");
      return;
    }
    if(mode==="free") {
      cursor("Icons/paint.png");
      return;
    }
    if(mode==="fill") {
      cursor("Icons/paint.png");
      return;
    }
    cursor("default");
  }
  
}

function mouseDragged(){
  if(!isEraser){
    //mixColor();
  }  
}

function mousePressed() {
  //console.log(isInPopUp);
  //console.log(mouseX, mouseY)
  //let hl = pg.get(mouseX,mouseY);
  //console.log(hl)
  //console.log(elements)
  //console.log(actvElements)
  //console.log(allElements)
  

  if(isInPopUp==false){
    if(mode != "projector"){
      drawing = true;
      //console.log("Not projector")
    }else{
      drawing = false;
    }
    startX = mouseX;
    startY = mouseY;
    prevX = mouseX;
    prevY = mouseY;
    

    if(mode === "fill") {
      mixColor();
      pg.loadPixels();
      let targetColor = pg.get(mouseX,mouseY);
      floodFill(mouseX,mouseY,targetColor);
      pg.updatePixels();
    }
  }  
}

function mouseReleased () {
  if(isInPopUp==false){
    drawing = false;
    //currentShape.finalize(mouseX,mouseY);
  }

}

/* Related with selecting the icons */

allElements.forEach((element)=>{

    element.addEventListener("click",function(){
    
      allElements.forEach((el)=>{
        el.classList.remove("active");
      });
        this.classList.add("active");
        currentElemt = this;
    });
  
});

function removeElem(){
  if(currentElemt != null){
    currentElemt.classList.remove("active");
  }    
}

function restart(){  
  isMainMenu = false;  
  
  if(pg!= null){
      clearInterval(intervalId);
      intervalId = null;
      //proj.removeEventListener("click", handleClick);
      pg.clear();
      ct.clear();
      mode = "initial";
      lineWeight.value = 1;  
      removeElem();          
      document.getElementById('colorPalettePopup').classList.remove("d-block");
      document.getElementById("brushSizeContainer").classList.add("d-none");
      document.getElementById('selectedColor').classList.add("d-none");
      document.getElementById('paletteContainer').classList.add("d-none");
  }

  setup();
  changeBackgroundImage(imgName);  
}

function mixColor(){
  if(pg != null){
      let posColor = pg.get(mouseX, mouseY);
        let blackC = [0,0,0];
        let somen = [54,54,54]
        let whit = [255,255,255]
    
        
        //console.log(posColor)
        //console.log(colorsMatch(posColor, whit))
        //console.log(backgroundColor)
        //console.log(colorsMatch(posColor, somen)
        
    
        if(!colorsMatch(posColor, whit) && !colorsMatch(posColor, blackC)){
          currentColor = mixbox.lerp(currentColor, posColor, t);
          selectedColor.style.backgroundColor = currentColor;
          pg.stroke(currentColor)
        }
  }

}

function reload(){
  location.reload();
}