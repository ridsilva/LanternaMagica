let currentLanguage = 'pt'; // Default language is English

const languageData = {
  'en': {
    'magicaProj': 'MAGICA Project',
    'chooseSlide': 'Choose Slide',     
    'close': 'Close',
    'ChooseImgMsg': 'You are now a lanternist!',   
    'fstParag': 'To start your journey, select one of the available slides to be painted.',
    'sndParag': 'Click on each slide to view it more closely, and then click \"Choose Slide\" to finalize your choice and begin working.',
    'endBt': 'Leave',
    'ContainerT': 'Tools',
    'IconBrush': 'Brush',
    'IconFill': 'Fill',
    'IconEraser': 'Eraser',
    'ContainerC': 'Colors',
    'IconPalette': 'Palette',
    'ContainerA': 'Actions',
    'IconUndo': 'Undo',
    'IconRedo': 'Redo',
    'paletteIt': 'Italian 1750-1800',
    'paletteH': 'This icon allows the user to choose a palette to paint with. If in the middle of the painting another palette is chosen all progress will be lost.',
    'undoH': 'This icon allows the user to undo their last modification. It is only possible to perform 3 undo\'s\'.',
    'redoH': 'This icon allows the user to redo what was undone. It is only possible to redo if an undo had been previously been done.',
    'finalH': 'Clicking in "Final" will animate the painting.',
    'saveH': 'If you press the "s" key before clicking "Final," only an image will be saved. After clicking "Final," a GIF will be saved.',
    'colorsH': 'You are able to mix colors in the fill option.'
  },
  'pt': {
    'magicaProj': 'Projeto MAGICA',
    'chooseSlide': 'Escolher Slide',
    'close': 'Fechar',
    'ChooseImgMsg': 'Tu és um lanternista!',
    'fstParag': 'Para começar a tua aventura escolhe um dos slides disponíveis para ser pintado.',
    'sndParag': 'Podes clicar em cada um dos slides para os veres melhor, e depois clicar em \"Escolher Slide\" para finalizar a tua escolha e começar a trabalhar.',
    'endBt': 'Sair',
    'ContainerT': 'Ferramentas',
    'IconBrush': 'Pincel',
    'IconFill': 'Preencher',
    'IconEraser': 'Borracha',
    'ContainerC': 'Cores',
    'IconPalette': 'Paleta',
    'ContainerA': 'Ações',
    'IconUndo': 'Anular',
    'IconRedo': 'Refazer',
    'paletteIt': 'Italiana 1750-1800',
    'paletteH': 'Este ícone permite ao utilizador escolher uma paleta para pintar. Se no meio da pintura outra paleta for escolhida todo o progesso vai ser perdido.',
    'undoH': 'Este ícon permite ao utilizador desfazer a sua última modificação. Apenas é possível realizar 3 retrocessos.',
    'redoH': 'Este ícon permite ao utilizador refazer aquilo que foi desfeito. Apenas é possível refazer se primeiro tiver ocorrido um retrocesso.',
    'finalH': 'Ao clicar em "Final" a pintura vai ser animada.',
    'saveH': 'Se clicar na tecla "s" antes de clicar em "Final", apenas uma imagem será guardada. Após clicar em "Final", será guardado um GIF.',
    'colorsH': 'É possível misturar cores com a ferramenta preencher.'
  }
};

// Function to load language based on 'lang' parameter
function loadLanguage(lang) {

  const elements = {
    magicaProj : 'magicaProj',
    chooseSlide : 'chooseSlide',
    close:'close',
    ChooseImgMsg: 'ChooseImgMsg',
    fstParag: 'fstParag',
    sndParag :'sndParag' ,
    endBt: 'endBt',
    ContainerT: 'ContainerT',
    IconBrush: 'IconBrush',
    IconFill: 'IconFill',
    IconEraser: 'IconEraser',
    ContainerC: 'ContainerC',
    IconPalette: 'IconPalette',
    ContainerA: 'ContainerA',
    IconUndo: 'IconUndo',
    IconRedo: 'IconRedo',
    paletteIt: 'paletteIt',
    paletteH: 'paletteH',
    undoH: 'undoH',
    redoH: 'redoH',
    finalH: 'finalH',
    saveH: 'saveH',
    colorsH: 'colorsH'
    // Add other elements that need to be updated here
  };

  Object.keys(elements).forEach((key) => {
    const elementId = elements[key];
    document.getElementById(elementId).textContent = languageData[lang][key];
  });
  if(lang == "en") {
    document.getElementById("projectorBanner").src = "homePage/lanternEN.gif"
    } else {
    document.getElementById("projectorBanner").src = "homePage/lanternPT.gif"
    }
}

function toggleDropdown() {
  const dropdown = document.getElementById('languageDropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Function to handle language switch
function switchLanguage(lang) {
  const currentLanguageButton = document.getElementById('currentLanguage');

  if (lang === 'pt') {
    currentLanguage = 'pt'; // Switch to Portuguese
    loadLanguage('pt'); // Load Portuguese content

    currentLanguageButton.innerHTML = 'PT <span class="arrow">&#9660;</span>';
  } else {
    currentLanguage = 'en'; // Switch back to English
    loadLanguage('en'); // Load English content

    currentLanguageButton.innerHTML = 'EN <span class="arrow">&#9660;</span>';
  }
  document.getElementById('languageDropdown').style.display = 'none';
}

window.onclick = function(event) {
  if (!event.target.matches('#currentLanguage')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.style.display === 'block') {
        openDropdown.style.display = 'none';
      }
    }
  }
}

// Initial load
loadLanguage(currentLanguage); // Load initial language content
