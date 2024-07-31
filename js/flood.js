let directions =[
    [-1,0],
    [1,0],
    [0,-1],
    [0,1]
  ];

function floodFill(x,y,colour) {
    let stack = [{x:Math.round(x),y:Math.round(y),colour}];
    pg.set(Math.round(x),Math.round(y),currentColor);
    let checked = Array(width).fill().map(()=>Array(height).fill(false));
 
    while (stack.length>0) {
     let current = stack.pop();
     if(current.x<0 || current.x>=width || current.y<0 || current.y>=height)
      continue;
     if(checked[current.x][current.y]) continue;
     checked[current.x][current.y] = true;
 
     for (let i=0; i<directions.length;i++) {
       let child = {
         x: Math.round(current.x+directions[i][0]),
         y: Math.round(current.y+directions[i][1]),
         colour
       };
       if(isValidPixel(child.x,child.y,child.colour)&& !checked[child.x][child.y]) {
         pg.set(child.x,child.y,currentColor);
         pg.set(child.x+1,child.y,currentColor);
         pg.set(child.x,child.y+1,currentColor);
         pg.set(child.x-1,child.y,currentColor);
         pg.set(child.x,child.y-1,currentColor);
         
         
         pg.set(child.x+1,child.y+1,currentColor);
         pg.set(child.x-1,child.y-1,currentColor);
         pg.set(child.x+1,child.y-1,currentColor);
         pg.set(child.x-1,child.y+1,currentColor);
         stack.push(child);
       }
     }
    }
 }
 
 function isValidPixel(x,y,colour) {
   return (x>=0 && y>=0 && x<width && y<height && colorsMatch(pg.get(x,y),colour));
 }

function colorsMatch(c1,c2) {
    return(
      c1[0] ===c2[0] && c1[1] ===c2[1] && c1[2] ===c2[2] //&& c1[3] ===c2[3] 
    );
  }