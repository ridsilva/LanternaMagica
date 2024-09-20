let chSlide = 0;
let pix = 1200;
let ctAux;

function transitionImg(){
    let backColor = pg.get(0,0);
    ctAux = ct.get();

    if(imgName == "image0.png"){
        genie(backColor);
    }

    if(imgName == "image1.png"){
        flowers(backColor);
    }

    if(imgName == "image2.png"){
        circus(backColor);
    }

    if(imgName == "image3.png"){
        elfCabbage(backColor);
    }

    if(imgName == "image4.png"){
        monster(backColor);
    }
    
    if(imgName == "image5.png"){
        pigHead(backColor);
    }

    if(imgName == "image6.png"){
        goose(backColor); 
    }

    if(imgName == "image7.png"){
        statue(backColor);
    }

    if(imgName == "image8.png"){
        general(backColor);
    }
}

function clearTransformations(backColor){
    pg.clear();
    ct.clear();
    pg.background(backColor);
}

function maskImages(arrImg, arrMasks){
    let arrAll = arrImg.concat(arrMasks);
    
    for(i=0; i < arrAll.length; i++){
        arrAll[i].resize(pix,pix);
    }

    for(i=0; i < arrImg.length; i++){
        arrImg[i].blend(ctAux, 0, 0, width, height, 0, 0, pix, pix, BLEND);
    }

    for(i=0; i < arrImg.length; i++){
        arrImg[i].mask(arrMasks[i]);
    }
}

function genie(backColor){
    firstImg.blend(ctAux, 0, 0, width, height, 0, 0, pix, pix, BLEND);

    let body = pg.get();
    let head = pg.get();

    let bodyM = masks[0];
    let headM = masks[1];

    let arrM = [bodyM, headM];
    let arr = [body, head];
    
    maskImages(arr, arrM);    

    clearTransformations(backColor);

    pg.image(head, 0, -100, width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);
    pg.image(body, 0, 0,width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);

    sndImg = pg.get();
}

function flowers(backColor){
    firstImg.blend(ctAux, 0, 0, width, height, 0, 0, pix, pix, BLEND);
    
    let flowers = pg.get();
    let flowersM = masks[2];

    let arrM = [flowersM];
    let arr = [flowers];
    
    maskImages(arr, arrM);
    clearTransformations(backColor);

    let aux;
   
    pg.push();
        pg.image(flowers, 0, 0, width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);
        pg.filter(INVERT);
        aux = pg.get();
    pg.pop();

    pg.image(aux, 0, 0,width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);

    sndImg = pg.get();
}

function circus(backColor){
    firstImg.blend(ctAux, 0, 0, width, height, 0, 0, pix, pix, BLEND);

    let body = pg.get();
    let head = pg.get();
    let lion = pg.get();

    let bodyM = masks[3];
    let headM = masks[4];
    let lionM = masks[5];

    let arrM = [bodyM, headM, lionM];
    let arr = [body, head, lion];

    maskImages(arr, arrM);

    clearTransformations(backColor);
   
    pg.push();
      pg.scale(-1,1);
      pg.image(head, -570, 0, width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);
    pg.pop();

    pg.push();
      pg.translate(800,-150);
      pg.angleMode(DEGREES);
      pg.rotate(70);
      pg.image(lion, 200, 0,width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER); 
    pg.pop();

    pg.image(body, 0, 0,width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);

    sndImg = pg.get();

}

function elfCabbage(backColor){
    let cabbage = pg.get();
    let elf = pg.get();

    let cabbageM = masks[6];
    let elfM = masks[7];

    let arrM = [cabbageM, elfM];
    let arr = [cabbage, elf];

    maskImages(arr, arrM);
    clearTransformations(backColor);

    pg.image(cabbage, 0, 0,width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);
    firstImg = pg.get();

    pg.image(elf, 0, 0,width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);
    sndImg = pg.get();
}

function monster(backColor){
    let person = pg.get();
    let monster = pg.get();

    let monsterM = masks[8];
    let personM = masks[9];

    let arrM = [personM, monsterM];
    let arr = [person, monster];

    maskImages(arr, arrM);
    clearTransformations(backColor);

    pg.image(person, 0, 0,width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);
    firstImg = pg.get();

    pg.image(monster, 0, 0,width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);

    sndImg = pg.get();
}

function pigHead(backColor){
    firstImg.blend(ctAux, 0, 0, width, height, 0, 0, pix, pix, BLEND);

    let body = pg.get();
    let head = pg.get();
    let pig = pg.get();

    let bodyM = masks[11];
    let headM = masks[10];
    let pigM = masks[12];

    let arrM = [bodyM, headM, pigM];
    let arr = [body, head, pig];

    maskImages(arr, arrM);
    clearTransformations(backColor);

    pg.image(pig, 130, 0, width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);
    pg.image(head, -180, 0, width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);
    pg.image(body, 0, 0,width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);

    sndImg = pg.get();
}

function goose(backColor){
    firstImg.blend(ctAux, 0, 0, width, height, 0, 0, pix, pix, BLEND);

    let body = pg.get();
    let goose = pg.get();

    let bodyM = masks[14];
    let gooseM= masks[13];

    let arrM = [bodyM, gooseM];
    let arr = [body, goose];

    maskImages(arr, arrM);
    clearTransformations(backColor);

    pg.image(body, 0, 0,width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);   

    pg.push();
      pg.translate(-160, -70);
      pg.angleMode(DEGREES);
      pg.rotate(-15);
      pg.image(goose, 0, 0,width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);
    pg.pop();

    sndImg = pg.get();
}

function statue(backColor){
    firstImg.blend(ctAux, 0, 0, width, height, 0, 0, pix, pix, BLEND);

    let Lbody = pg.get();
    let Ubody = pg.get();
    let statue = pg.get();

    let LbodyM = masks[16];
    let UbodyM = masks[15];
    let statueM= masks[17];

    let arrM = [LbodyM, UbodyM, statueM];
    let arr = [Lbody, Ubody, statue];

    maskImages(arr, arrM);
    clearTransformations(backColor);
 
    pg.image(statue, 0, 0,width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);   

   pg.push();
      pg.translate(-80, 310);
      pg.angleMode(DEGREES);
      pg.rotate(-35);
      pg.image(Ubody, 0, 0,width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);
    pg.pop();

    pg.image(Lbody, 0, 0,width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);  

    sndImg = pg.get();
}

function general(backColor){
    firstImg.blend(ctAux, 0, 0, width, height, 0, 0, pix, pix, BLEND);

    let body = pg.get();
    let legL = pg.get();
    let legR = pg.get();
    let armL = pg.get();
    let armR = pg.get();

    let bodyM = masks[22];
    let legLM= masks[21];
    let legRM = masks[20];
    let armLM = masks[18];
    let armRM = masks[19];

    let arrM = [bodyM, legLM, legRM, armLM, armRM];
    let arr = [body, legL, legR, armL, armR];

    maskImages(arr, arrM);
    clearTransformations(backColor);

    pg.push();
      pg.translate(450, 50);
      pg.angleMode(DEGREES);
      pg.rotate(45)
      pg.image(legL, 0, 0,width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);
      pg.translate(130,-300);
      pg.rotate(30)
      pg.image(legR, 0, 0,width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);
      pg.translate(200, 450);
      pg.rotate(70)
      pg.image(armL, 0, 0,width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);
      pg.translate(-250, 400);
      pg.rotate(-90);
      pg.image(armR, 0, 0,width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);
    pg.pop();

    pg.image(body, 0, 0,width, height, 0, 0, img.width, img.height, CONTAIN, CENTER, CENTER);  

    sndImg = pg.get();
}

function changeSlide(){
    if(chSlide == 0){
        pg.clear();
        pg.image(firstImg, 0, 0, width, height, 0, 0, img.width, img.height, CONTAIN, CENTER);
        
        chSlide = 1;
    }else if(chSlide == 1){
        pg.clear();
        pg.image(sndImg, 0, 0, width, height, 0, 0, img.width, img.height, CONTAIN, CENTER);
        
        chSlide = 0;
    }
}
  