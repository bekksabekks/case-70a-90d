class AudButton {
  
    constructor(lx, ly, laud) {
      this.x = lx;
      this.y = ly;
      this.aud = laud;
      this.isVisible = true;
    }
    
    display() {
      stroke(0);
      
      // tint the image on mouse hover


      if (this.isVisible) {
        image(this.aud, this.x, this.y);
      }
      // if (this.audover()) {
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
    // audover() {
    //   if (mouseX > this.x && mouseX < this.x + this.aud.width && mouseY > this.y && mouseY < this.y + this.aud.height) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
  }