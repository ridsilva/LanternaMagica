let st;

function changeBackgroundImage(nameImg){
    st = new MyStack(3);
    pg.clear();
    
    for(i = 0; i < imageFiles.length; i++){
      if(nameImg == imageFiles[i]){
        img = images[i];
        contour = lines[i];
        imgName = nameImg;
      }
        
    }
    pg.background(255);
    pg.image(img, 0, 0, width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);
    ct.image(contour, 0, 0, width, height, 0, 0, contour.width, contour.height, CONTAIN, CENTER, CENTER);
    
    let aux = pg.get();
    st.action(aux);
  }

  function drawBackground(){
    
    if(backgroundD === 0){
      changeBackgroundImage(imgName);
      backgroundD = 1;      
    }
  }

  function chooseSlide(){
    document.getElementById("imageChoosePopup").classList.remove("d-flex");
    imgName= document.getElementById('detail-image').alt;
    showDrawingApp();
  }
  