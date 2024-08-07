let currentPalette;

//Palettes
const paletteLapierre = ['rgb(39, 39, 39)', 'rgb(155, 76, 17)', 'rgb(113, 175, 42)', 'rgb(45, 124, 222)',
    'rgb(239, 66, 191)', 'rgb(226, 70, 125)', 'rgb(239, 207, 0)'];
   
const paletteEFNewton = ['rgb(26, 25, 23)', 'rgb(76, 62, 47)', 'rgb(53, 102, 93)', 'rgb(31, 66, 143)',
    'rgb(208, 69, 130)', 'rgb(205, 31, 67)', 'rgb(252, 211, 7)'];
   
const paletteCarpenterWestley = ['rgb(35, 34, 38)', 'rgb(94, 45, 0)', 'rgb(55, 89, 24)', 'rgb(23, 41, 147)',
    'rgb(69, 56, 121)', 'rgb(246, 63, 97)', 'rgb(206, 55, 2)', 'rgb(233, 137, 1)', 'rgb(254, 215, 0)'];
   
const palettePCarpenter = ['rgb(39, 38, 41)', 'rgb(109, 63, 21)', 'rgb(105, 83, 8)', 'rgb(47, 92, 24)', 'rgb(9, 105, 137)',
    'rgb(73, 52, 95)', 'rgb(200, 52, 82)', 'rgb(222, 37, 4)', 'rgb(248, 218, 25)'];
   
const paletteItaly = ['rgb(17, 17, 10)', 'rgb(83, 35, 5)', 'rgb(22, 47, 1)', 'rgb(117, 163, 51)', 'rgb(11, 66, 84)', 'rgb(12, 44, 78)', 'rgb(106, 46, 63)',
    , 'rgb(201, 54, 82)', 'rgb(122, 41, 17)', 'rgb(233, 75, 20)', 'rgb(216, 147, 21)'];


   
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