let intervalId;
let clickCount = 0;

const message = {
    pt: "Se a paleta for mudada, todo o trabalho realizado vai ser desfeito!",
    en: "If you change the palette, the drawing will be reset!"
}

const messageFlood = {
  pt: "O fundo não pode ser preenchido. Tenta outra ferramenta de desenho.",
  en: "Fill cannot be used. Try another painting tool."
}

/* Event Listeners */  
  //Brush
  pen.addEventListener("click",function(){
    isEraser = false;
    if(mode != "projector" && mode != "initial"){
      mode = "free";
      currentShape = new Shape("free");
      
    }
  });
  
  //Eraser
  eraser.addEventListener("click",function(){
      isEraser = true;
    if(mode != "projector" && mode!= "initial"){
      mode = "eraser";
      currentShape = new Shape("eraser");

    }

  });
  
  //Change Palette
  changePalette.addEventListener("click", function(){

    if(mode != "projector"){
      let computedStyle = window.getComputedStyle(colorPalettePopup);
      mode = "palette";
      if (computedStyle.display === "none") {
          //colorPalettePopup.style.display = "block";
          document.getElementById('colorPalettePopup').classList.add("d-block");
          document.getElementById('paletteContainer').classList.add("d-none");
          isInPopUp = true;

          let mess = message[currentLanguage];
          alert(mess)
    
          let paletteOptions = document.querySelectorAll('.palette-option');
    
          paletteOptions.forEach(function(option) {
            option.addEventListener('click', function() {
    
              let paletteName = option.querySelectorAll('.palette-label')[0].childNodes[0].textContent;

              if(currentPaletteName != paletteName){
                pg.clear();
                changeBackgroundImage(imgName);
              }

              updatePalette(paletteName);
              colorPalettePopup.style.display = 'none';
              isInPopUp = false;
              });
        });
          
      } else {
          colorPalettePopup.style.display = "none";
          isInPopUp = false;
      }
    }
  })
  
  //Bucket
  bucket.addEventListener("click",function(){
    isEraser = false;
    if(mode != "projector" && mode !="initial"){
      mode = "fill";
      currentShape = new Shape("fill");
    }
  });
  
  //Brush Size
  lineWeight.addEventListener("change",function(){
    if(mode != "projector"){
      pg.strokeWeight(lineWeight.value);
    }

   });

  //Undo
  undo.addEventListener("click", function(){
    try{
      if(mode != "projector" && mode!= "initial"){
        let aux = st.undo();

        if(aux != -1){
          pg.image(aux, 0,0);
        }
      }

    } catch (error) {
      if (error.message === "Empty undoStack") {

      } else {
        console.error(error);
      }
    }
  })

  //Redo
  redo.addEventListener("click", function(){
    try{
      if(mode != "projector" && mode != "initial"){
        let aux = st.redo();

        pg.image(aux,0,0);
      }


    } catch(error){
      if (error.message === "Empty redoStack") {

      } else {
        console.error(error);
      }
    }

  })

  //Pipette
  pipeta.addEventListener("click", function(){
    if(mode != "projector" && mode!= "initial" && clickCount < 3){
      let aux = 0.25
      let r = red(currentColor);
      let g = green(currentColor);
      let b = blue(currentColor);
      let auxC = [255,255,255,250]
      currentColor = mixbox.lerp(currentColor, auxC, aux);
      selectedColor.style.backgroundColor = currentColor;
      pg.stroke(currentColor)

      clickCount++;
    }
    
  })
  /* This ends here*/