const imageDetails = {
  image0: {
    src: './preview/animation0.gif',
    name: 'image0.png',
    pt: 'Génio - baseado num slide da Cinemateca Portuguesa - Museu do Cinema',
    en: 'Genie - based on a slide from Cinemateca Portuguesa - Cinema Museum'
  },
  image1: {
    src: './preview/animation1.gif',
    name: 'image1.png',
    pt: 'Flores - baseado num slide do Museu de Ciência da Universidade de Coimbra (MCUC)',
    en: 'Flowers - based on a slide from the Science Museum of the University of Coimbra (MCUC)'
  },
  image2: {
    src: './preview/animation2.gif',
    name: 'image2.png',
    pt: 'Circo - baseado num slide da Cinemateca Portuguesa - Museu do Cinema',
    en: 'Circus - based on a slide from Cinemateca Portuguesa - Cinema Museum'
  },
  image3: {
    src: './preview/animation3.gif',
    name: 'image3.png',
    pt: 'O Duende e a couve - baseado num slide da Cinemateca Portuguesa - Museu do Cinema',
    en: 'The Elf and the cabbage - based on a slide from Cinemateca Portuguesa - Cinema Museum'
  },
  image4: {
    src: './preview/animation4.gif',
    name: 'image4.png',
    pt: 'Monstro - baseado num slide do Museu de Ciência da Universidade de Coimbra (MCUC)',
    en: 'Monster - based on a slide from the Science Museum of the University of Coimbra (MCUC)'
  },
  image5: {
    src: './preview/animation5.gif',
    name: 'image5.png',
    pt: 'A cabeça de porco - baseado num slide do Museu Nacional de História Natural e da Ciência (MUHNAC)',
    en: 'The pig\'s\ head - based on a slide from the National Museum of Natural History and Science (MUHNAC)'
  },    
  image6: {
    src: './preview/animation6.gif',
    name: 'image6.png',
    pt: 'O ganso - baseado num slide do Museu de Ciência da Universidade de Coimbra (MCUC)',
    en: 'The goose - based on a slide from Cinemateca Portuguesa - Cinema Museum'
  },
  image7: {
    src: './preview/animation7.gif',
    name: 'image7.png',
    pt: 'A estátua - baseado num slide do Museu Nacional de História Natural e da Ciência (MUHNAC)',
    en: 'The statue - based on a slide from the National Museum of Natural History and Science (MUHNAC)'
  },
  image8: {
    src: './preview/animation8.gif',
    name: 'image8.png',
    pt: 'O general - baseado num slide do Museu de Ciência da Universidade de Coimbra (MCUC)',
    en: 'The general - based on a slide from the Science Museum of the University of Coimbra (MCUC)'
  }
  // Add more image details as needed
};

const originalInfo = {
image0: {
  src: './originals/image0.jpg',
  pt: 'Este slide pertence à coleção da Cinemateca Portuguesa - Museu do Cinema',
  en: 'This slide belongs to the colection of the Cinemateca Portuguesa - Cinema Museum'
},
image1: {
  src: './originals/image1.jpg',
  pt: 'Este slide pertence à coleção do Museu de Ciência da Universidade de Coimbra (MCUC). Foi fabricado por J.G.A. Chevallier e é originário da França',
  en: 'This slide belongs to the colection of the Science Museum of the University of Coimbra (MCUC). It was manufactured by J.G.A. Chevallier and originated from France'
},
image2: {
  src: './originals/image2.jpg',
  pt: 'Este slide pertence à coleção da Cinemateca Portuguesa - Museu do Cinema',
  en: 'This slide belongs to the colection of the Cinemateca Portuguesa - Cinema Museum'
},
image3: {
  src: './originals/image3.jpg',
  pt: 'Este slide pertence à coleção da Cinemateca Portuguesa - Museu do Cinema',
  en: 'This slide belongs to the colection of the Cinemateca Portuguesa - Cinema Museum'
},
image4: {
  src: './originals/image4.jpg',
  pt: 'Este slide pertence à coleção do Museu de Ciência da Universidade de Coimbra (MCUC). Foi fabricado por J.G.A. Chevallier e é originário da França',
  en: 'This slide belongs to the colection of the Science Museum of the University of Coimbra (MCUC). It was manufactured by J.G.A. Chevallier and originated from France'
},
image5: {
  src: './originals/image5.gif',
  pt: 'Este slide pertence à coleção do Museu Nacional de História Natural e da Ciência (MUHNAC)',
  en: 'This slide belongs to the colection of the National Museum of Natural History and Science (MUHNAC)'
},
image6: {
  src: './originals/image6.jpg',
  pt: 'Este slide pertence à coleção do Museu Nacional de História Natural e da Ciência (MUHNAC)',
  en: 'This slide belongs to the colection of the National Museum of Natural History and Science (MUHNAC)'
},
image7: {
  src: './originals/image7.gif',
  pt: 'Este slide pertence à coleção do Museu Nacional de História Natural e da Ciência (MUHNAC)',
  en: 'This slide belongs to the colection of the National Museum of Natural History and Science (MUHNAC)'

},
image8: {
  src: './originals/image8.jpg',    
  pt: 'Este slide pertence à coleção do Museu de Ciência da Universidade de Coimbra (MCUC). Foi fabricado por J.G.A. Chevallier e é originário da França',
  en: 'This slide belongs to the colection of the Science Museum of the University of Coimbra (MCUC). It was manufactured by J.G.A. Chevallier and originated from France'
}
};


function showDetails(imageKey) {
  //console.log(imageKey)
  document.getElementById('imageChoosePopup').classList.add("d-flex");

  const details = imageDetails[imageKey];
  document.getElementById('detail-image').src = details.src;
  document.getElementById('detail-image').alt = details.name;
  if(currentLanguage === 'en'){
        document.getElementById('detail-text').textContent =  details.en;
  }else{
    document.getElementById('detail-text').textContent =  details.pt;
  }
  document.getElementById('details').style.display = 'block';
}

function showOriginal() {
  document.getElementById('originalPopup').classList.add("d-flex")
  let name = imgName.split(".")[0];
  const origin = originalInfo[name];
  document.getElementById('original-image').src = origin.src;

  if(currentLanguage === 'en'){
    document.getElementById('original-text').textContent =  origin.en;
  }else{
  document.getElementById('original-text').textContent =  origin.pt;
  }
  document.getElementById('original').style.display = 'block';

  isInPopUp = true;
}

function showHelp() {
  document.getElementById('helpPopup').classList.add("d-flex");
  isInPopUp = true;
}

function closeImagePopup() {
  document.getElementById("imageChoosePopup").classList.remove("d-flex");
}
function closeOriginalPopup() {
  document.getElementById("originalPopup").classList.remove("d-flex");
  isInPopUp = false;
}
function closeHelpPopup() {
  document.getElementById("helpPopup").classList.remove("d-flex");
  isInPopUp = false;
}

window.onclick = function(event) {
  if(event.target.matches('#imageChoosePopup')){
    if (!event.target.matches('#details')) {
      console.log("HERE")
      closeImagePopup();
    }
  }

  if(event.target.matches('#myCanvas')){
    if(mouseReleased){
      //ensure that lines go back to normal
      let now = pg.get();
      let vaux = ct.get();
      now.blend(vaux, 0, 0, width, height, 0, 0, pix, pix, BLEND);
      pg.image(now,0, 0, width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);
      let aux = pg.get();
      st.action(aux);
    }
  }
}