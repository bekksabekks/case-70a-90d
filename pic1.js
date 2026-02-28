class PicButton {
  
    constructor(lx, ly, lpic) {
      this.x = lx;
      this.y = ly;
      this.pic = lpic;
      this.isVisible = true;
    }
    
    display() {
      stroke(0);
      
      // tint the image on mouse hover


      if (this.isVisible) {
        image(this.pic, this.x, this.y);
      }
      // if (this.over()) {
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
    // over() {
    //   if (mouseX > this.x && mouseX < this.x + this.pic.width && mouseY > this.y && mouseY < this.y + this.pic.height) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }

 
  }