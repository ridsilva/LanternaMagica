  //TODO
  function showMainMenu() {
    document.getElementById('mainMenu').classList.remove("d-none");
    document.getElementById('menu').classList.remove("d-flex");
    document.getElementById('app').classList.remove("d-flex");
    document.getElementById('slideChoose').classList.remove("d-flex");
  }

  function slideOptions(){
    document.getElementById('mainMenu').classList.add("d-none");
    document.getElementById('slideChoose').classList.add("d-flex");
  }

  
  function showDrawingApp() {
    document.getElementById('slideChoose').classList.remove("d-flex");
    document.getElementById('menu').classList.add("d-flex");
    document.getElementById('app').classList.add("d-flex");
    restart();
  }

  function final(){
    document.getElementById('finalBt').classList.add("d-none");
    document.getElementById('endBt').classList.add("d-flex");

    if(firstTime){
      mode = "projector";
      firstImg = pg.get();
      transitionImg();

      if(!intervalId){
        intervalId = setInterval(changeSlide, 1000);
      }   

      firstTime = false;
      
    }
  }

  function end(){
    restart();
    document.getElementById('finalBt').classList.remove("d-none");
    document.getElementById('endBt').classList.remove("d-flex");
    showMainMenu();
  }

  
document.getElementsByClassName("interactiveToolIcon").forEach((element) => {
  element.addEventListener('click', (el) => {
      let brushSize = el.target.dataset.brushsize
      if(brushSize === "true" && mode != "projector" && mode != "initial") {
          document.getElementById("brushSizeContainer").classList.remove("d-none");
      } else {
          document.getElementById("brushSizeContainer").classList.add("d-none");
      }
  })
})

