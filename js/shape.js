function Shape(type) {
    this.type=type;
    this.draw = function(x,y) {
      let w = x - startX;
      let h = y - startY;
      
      stroke(currentColor);
      strokeWeight(lineWeight.value);
      if(this.type === "line") {
        line(startX,startY,x,y);
        return
      }
      if(this.type === "free") {
        pg.line(mouseX,mouseY,prevX,prevY);
        prevX = x;
        prevY = y;
        return
      }
      if(this.type === "eraser") {
        pg.stroke(backgroundColor);
        pg.line(mouseX,mouseY,prevX,prevY);
        pg.strokeWeight(lineWeight.value);
        pg.stroke(currentColor);
        prevX = x;
        prevY = y;
        return
      }
    }
    /*this.finalize = function(x,y) {
      
    }*/
  }
  