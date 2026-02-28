class DocButton {
  
    constructor(lx, ly, ldoc) {
      this.x = lx;
      this.y = ly;
      this.doc = ldoc;
      this.isVisible = true;
    }
    
    display() {
      stroke(0);
      
      // tint the image on mouse hover


      if (this.isVisible) {
        image(this.doc, this.x, this.y);
      }
      // if (this.docover()) {
      //   tint(0, 0, 128);
      // } else {
      //   noTint();
      // }

      
    }
    
    disappear() {
        this.isVisible = false;
      }


    // over automatically matches the width & height of the image read from the file
    // see this.img.width and this.img.height below
    // docover() {
    //   if (mouseX > this.x && mouseX < this.x + this.doc.width && mouseY > this.y && mouseY < this.y + this.doc.height) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
  }