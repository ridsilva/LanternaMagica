let currentPalette;

//Palettes
const paletteLapierre = ['rgba(46,54,51,255)', 'rgba(123,66,4,255)', 'rgba(131,192,52,255)', 'rgba(24,82,244,255)',
    'rgba(253,102,171,255)', 'rgba(241,220,11,255)'];
   
const paletteEFNewton = ['rgba(34,33,39,255)', 'rgba(78,67,50,255)', 'rgba(157,194,161,255)', 'rgba(3,155,216,255)',
    'rgba(252,69,107,255)', 'rgba(210,156,123,255)', 'rgba(212,73,0,255)', 'rgba(252,248,58,255)'];
   
const paletteCarpenterWestley = ['rgba(35,34,38,255)', 'rgba(120,70,11,255)', 'rgba(37,107,53,255)', 'rgba(37,101,148,255)',
    'rgba(173,171,193,255)', 'rgba(234,101,157,255)', 'rgba(194,75,0,255)', 'rgb(197,200,78)'];
   
const palettePCarpenter = ['rgba(37,37,43,255)', 'rgba(87,135,101,255)', 'rgba(0,97,159,255)', 'rgba(117,100,104,255)', 'rgba(180,28,0,255)',
    'rgba(215,110,4,255)', 'rgba(181,128,68,255)', 'rgba(168,153,93,255)', 'rgb(217,194,37,255)'];
   
const paletteItaly = ['rgba(26,28,21,255)', 'rgba(62,75,27,255)', 'rgba(103,93,78,255)', 'rgba(66,81,105,255)', 'rgba(26,73,88,255)', 'rgba(152,122,131,255)', 'rgba(213,116,106,255)',
    , 'rgba(116,40,15,255)', 'rgba(232,96,0,255)', 'rgba(255,199,61,255)', 'rgba(220,192,38,255)', 'rgb(193,143,26,255)'];
   
   /*Function that changes the currentPalette*/
   function updatePalette(paletteName){
     if (paletteName === "Lapierre c1860-1900+") {
        currentPaletteName = paletteName;
        currentPalette = paletteLapierre;
       } else if (paletteName === "W.E. & F. Newton c1852-57") {
        currentPaletteName = paletteName;
        currentPalette = paletteEFNewton;
       } else if(paletteName === "Carpenter & Westley c1838-1900+"){
        currentPaletteName = paletteName;
        currentPalette = paletteCarpenterWestley;
       }else if(paletteName === "P. Carpenter 1822-35"){
        currentPaletteName = paletteName; 
        currentPalette = palettePCarpenter;
       }else{
        currentPaletteName = paletteName; 
        currentPalette = paletteItaly;
       }
   
       displayPalette()
   }

   /*Function that changes the colors in the palette used to paint based on currentPalette*/
   function displayPalette() {
    
    let leftPalette = document.getElementById('paletteContainer');

    //Clear existing palette
    leftPalette.innerHTML = '';

    let paletteSelected = document.createElement('div');
    paletteSelected.classList.add('palette-selected');

    leftPalette.appendChild(paletteSelected);

    let paletteColors = document.createElement('div');
    paletteColors.classList.add('palette-selected-colors');

    paletteSelected.appendChild(paletteColors);
    
    //Add each color of the palette chosen
    currentPalette.forEach((c, index)=>{
      let colorDiv = document.createElement('div');
      colorDiv.style.backgroundColor = c;
      colorDiv.classList.add('palette-selected-option');
      paletteColors.appendChild(colorDiv);
    })

    // Add event listeners to each color div in the left palette container
    let colorDivs = leftPalette.querySelectorAll('.palette-selected-option');
    colorDivs.forEach((colorDiv) => {
    colorDiv.addEventListener('click', function() {
    
    // Get the background color of the clicked color div
    let c = colorDiv.style.backgroundColor;
    let r = red(c);
    let g = green(c);
    let b = blue(c);
    selectedColor.style.backgroundColor = c;
    currentColor = color(r,g,b);
    pg.stroke(currentColor)
    document.getElementById('selectedColor').classList.remove("d-none");
   });
  });
  document.getElementById('paletteContainer').classList.remove("d-none");
  document.getElementById('colorPalettePopup').classList.remove("d-block");
}