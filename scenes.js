
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

let loy= 0;

////////////////////////////// 1 /////////////////
function bdStart()  {
    let t, t2;
    let tt;
    let gui;
    let doc1, pic1, aud1;
    this.setup = function() {
      console.log("We are at setup for scene1");

      background("blue");
      textAlign(CENTER);
      textSize(29);
      gui = createGui();
      gui.loadStyle("Blue");
  
      tt = createP('CASE 70A-90D')
      tt.position(95, 100);

      t = createToggle("START", 550, 500, 100, 50);
      t2 = createToggle("Documents", 20, 400, 100, 50);
      t14 = createToggle("HELP", 350, 500, 100, 50);
        t2.visible = false;
      doc1 = new DocButton(0, 200, doc);
      pic1 = new PicButton(265, 200, pic);
      aud1 = new AudButton(525, 200, aud);

    }


    this.enter = function()  {
        console.log("We are entering scene1");


      loy = 100;

    }


    this.draw = function()
    {
        background(0);  
        image(deskbg, 0, 0, 1100, 825);  
        drawGui();


    }



    this.mousePressed = function()
      {
           if (t14.isPressed) {

            print(t14.label + " is " + t14.val);
            pk1.play();
          }

          if (t14.val) {


            t.visible = false;
            t14.visible = false;
            titlecard = false;
            tt.hide();
            this.sceneManager.showScene(bdHelp);
    
          }

      if (t.isPressed) {

        print(t.label + " is " + t.val);
        pk1.play();
     }

     if (t.val) {

        t.visible = false;
        t14.visible = false;
        titlecard = false;
        doc1.display();
        pic1.display();
        aud1.display();
        tt.hide();
        this.sceneManager.showNextScene();
    
      }
        
    }
}

///////////////////////  2  ////////////////////////

function bdMenu1()  {
   let doc1, pic1, aud1, t2;

  this.setup = function() {
      background(0);
      console.log("We are at setup for scene2");
      doc1 = new DocButton(0, 200, doc);
      pic1 = new PicButton(370, 200, pic);
      aud1 = new AudButton(740, 200, aud);
      t2 = createToggle("Documents", 20, 500, 200, 50);
      t2.visible = true;

  }

  this.enter = function()
  {


    if (ww.isPlaying()) {
    ww.pause(); // .play() will resume from .pause() position
    } else {
    ww.play();
    }
      console.log("We are at scene2");

  }

    this.draw = function()
    {
      
      background(0);
      image(deskbg, 0, 0, 1100, 825); 
      textAlign(CENTER);
      textSize(20);
      text("Your supervisor has received orders to reopen Case 70D-90A.", width/2, 50);
      text("However, the old case files are a bit disorganized. ", width/2, 70);
      text("There are 3 documents your supervisor has tasked you to find.", width/2, 90);
      textSize(30);
      text("PROGRESS: 0/3", width/2, 700);
      noStroke();
      drawGui();
      doc1.display();
      pic1.display();
      aud1.display();
      fill(200);

    }


  this.mousePressed = function()  {
      if (t2.isPressed) {

        print(t2.label + " is " + t2.val);
       pk1.play();
     }

     if (t2.val) {


        doc1.disappear();
        pic1.disappear();
        aud1.disappear();
        t2.visible = false;
        this.sceneManager.showNextScene();
    
      }
  
    }


}


////////////////////////////// 3 /////////////////

function bdDocscene() {

    let x = 360;
    let x2 = 320;
    let x3 = 260;
    // let x4 = 250;
    // let x5 = 150;
    let cb1; 
    let t3;
    let doc1, pic1, aud1;
    // let t2;
    this.setup = function()  {
        console.log("We are at setup for the Documents Scene");
      background(0);
      speedx = 0
      speedy = -2

      lox = width/2;
      loy = height;
      frameRate = 60;
      cb1 = createCheckbox("Checkbox", 720, 500, 50, 50);
      cb1.mode = "onRelease";
      cb1.visible = true;
      t3 = createToggle("Back", 720, 550, 70, 50);
      t3.visible = false;
      doc1 = new DocButton(0, 200, doc);
      pic1 = new PicButton(370, 200, pic);
      aud1 = new AudButton(740, 200, aud);
    }

    this.enter = function()  {

       
      if (ww.isPlaying()) {
      ww.pause(); // .play() will resume from .pause() position
      } else {
      ww.play();
      }
      console.log("We are at the Documents Scene");

        
    }




    this.draw = function() {
      background(0);
      image(deskbg, 0, 0, 1100, 825); 
      textAlign(CENTER);
      textSize(20);
      fill(255);
      text("Hold the letter corresponding to each document to comb through it. A-C.", width/2, 100);

      if ((keyIsPressed == true) && (key == 'a')) { 
      x++;                      // add 1 to x.
      }

      if ((keyIsPressed == true) && (key == 'b')) { 
      x2++;                      // add 1 to x.
      }

      if ((keyIsPressed == true) && (key == 'c')) { 
      x3++;                      // add 1 to x.
      }

      // if ((keyIsPressed == true) && (key == 'd')) { 
      // x4++;                      // add 1 to x.
      // }

      // if ((keyIsPressed == true) && (key == 'f')) { 
      // x5++;                      // add 1 to x.
      // }
      
      drawGui();
      noStroke();
      image(cfile6, 200, 150);
      image(dtag, 200, 150);
      image(file3, x3, 150);
      image(ctag, x3, 150);
      image(file2, x2, 150);
      image(btag, x2, 150);
      image(file1, x, 150);
      image(atag, x, 150);

    }

    this.mousePressed = function()  {
      if(cb1.isReleased) {
        print(cb1.label + " = " + cb1.val); // prints "on release"
        
      }

      if(cb1.val) {
        t3.visible = true;
        
        
        
      }

      if (t3.isPressed) {

        print(t3.label + " is " + t3.val);
       pk1.play();
     }

     if (t3.val) {


        doc1.display();
        pic1.display();
        aud1.display();


        cb1.visible = false;
        t3.visible = false;
        this.sceneManager.showNextScene();
    
      }
    }


}

function bdMenu2()  {
   let doc1, pic1, aud1, t4;

  this.setup = function() {
      background(0);
      console.log("We are at setup for the Menu");
      doc1 = new DocButton(0, 200, doc);
      pic1 = new PicButton(370, 200, pic);
      aud1 = new AudButton(740, 200, aud);
      t4 = createToggle("Photos", 430, 500, 100, 50);
      t4.visible = true;

  }

  this.enter = function()
  {


    if (ww.isPlaying()) {
    ww.pause(); // .play() will resume from .pause() position
    } else {
    ww.play();
    }
      console.log("We are at the menu");

  }

    this.draw = function()
    {
      
      background(0);
      image(deskbg, 0, 0, 1100, 825); 
      textAlign(CENTER);
      textSize(20);
      text("Good, now look through the photo album.", width/2, 70);
      noStroke();
      drawGui();
      doc1.display();
      pic1.display();
      aud1.display();
      textSize(30);
      text("PROGRESS: 1/3", width/2, 700);

    }







  this.mousePressed = function()  {
      if (t4.isPressed) {

        print(t4.label + " is " + t4.val);
       pk1.play();
     }

     if (t4.val) {

        doc1.disappear();
        pic1.disappear();
        aud1.disappear();
        t4.visible = false;
        this.sceneManager.showNextScene();
    
      }
  

  
    }


}

function bdPicscene() {
    let cb2; 
    let t5;
    let doc1, pic1, aud1;
    // let t2;
    this.setup = function()  {
        console.log("We are at setup for the Photos Scene");
      background(0);

      cb2 = createCheckbox("Checkbox", 750, 750, 50, 50);
      cb2.mode = "onRelease";
      cb2.visible = false;
      t5 = createToggle("Back", 250, 750, 100, 50);
      t5.visible = false;
      doc1 = new DocButton(0, 200, doc);
      pic1 = new PicButton(370, 200, pic);
      aud1 = new AudButton(740, 200, aud);
    }

    this.enter = function()  {

       
      if (ww.isPlaying()) {
      ww.pause(); // .play() will resume from .pause() position
      } else {
      ww.play();
      }
      console.log("Entering Photos Scene.");

        
    }




    this.draw = function() {
      background(0);
      image(deskbg, 0, 0, 1100, 825); 
      textAlign(CENTER);
      textSize(20);
      text("Press each number from 1 to 4 to page through the album.", width/2, 80);

      
      
      drawGui();
      image(photo, 250, 90);
      switch(key)
    {
        case '1':
            // flip.play();
            image(page1, 0, 0, width, height, 0, 0, page1.width, page1.height, CONTAIN);
            break;
        case '2':
            // flip.play();
            image(page2, 0, 0, width, height, 0, 0, page2.width, page2.height, CONTAIN);
            break;
        case '3':
            // flip.play();
            image(page3, 0, 0, width, height, 0, 0, page3.width, page3.height, CONTAIN);
            break;
        case '4':
            // flip.play();
            image(page4, 0, 0, width, height, 0, 0, page4.width, page4.height, CONTAIN);
            cb2.visible = true;
            break;
    }


    }

    this.mousePressed = function()  {
      if(cb2.isReleased) {
        print(cb2.label + " = " + cb2.val); // prints "on release"
        pk1.play();
      }

      if(cb2.val) {
        t5.visible = true;
        
        
        
      }

      if (t5.isPressed) {

        print(t5.label + " is " + t5.val);
       pk1.play();
     }

     if (t5.val) {

        doc1.display();
        pic1.display();
        aud1.display();


        cb2.visible = false;
        t5.visible = false;
        this.sceneManager.showNextScene();
    
      }
    }





}

function bdMenu3()  {
   let doc1, pic1, aud1, t6;

  this.setup = function() {
      background(0);
      console.log("We are at setup for the Menu");
      doc1 = new DocButton(0, 200, doc);
      pic1 = new PicButton(370, 200, pic);
      aud1 = new AudButton(740, 200, aud);
      t6 = createToggle("Tapes", 780, 500, 100, 50);
      t6.visible = true;
      

  }

  this.enter = function()
  {


    if (ww.isPlaying()) {
    ww.pause(); // .play() will resume from .pause() position
    } else {
    ww.play();
    }
      console.log("We are at the Menu");

  }

    this.draw = function()
    {
      
      background(0);
      image(deskbg, 0, 0, 1100, 825); 
      textAlign(CENTER);
      textSize(20);
      text("Almost done, now give a listen to these tapes.", width/2, 70);
      noStroke();
      drawGui();
      doc1.display();
      pic1.display();
      aud1.display();
      textSize(30);
      text("PROGRESS: 2/3", width/2, 700);

    }







  this.mousePressed = function()  {
      if (t6.isPressed) {
       // Print a message when Toggle is pressed
        // that displays its value.
        print(t6.label + " is " + t6.val);
       pk1.play();
     }

     if (t6.val) {
    // Draw an ellipse when Toggle is true.
        // background(220);

        doc1.disappear();
        pic1.disappear();
        aud1.disappear();
        t6.visible = false;
        this.sceneManager.showNextScene();
    
      }
  
  
    }


}

function bdTapescene()  {
   let t7, t8, t9, t10, t11, t12;
  //  let drm, ply, whisp;

  this.setup = function() {
      background(0);
      console.log("We are at setup for the Tape Scene");
      t7 = createToggle("Stop", 150, 380, 70, 50);
      t7.visible = true;
      t8 = createToggle("Play", 300, 380, 70, 50);
      t8.visible = true;
      t9 = createToggle("Stop", 650, 380, 70, 50);
      t9.visible = true;
      t10 = createToggle("Play", 800, 380, 70, 50);
      t10.visible = true;
      t11 = createToggle("Stop", 400, 745, 70, 50);
      t11.visible = true;
      t12 = createToggle("Play", 550, 745, 70, 50);
      t12.visible = true;
      t13 = createToggle("Next", 700, 745, 70, 50);
      t13.visible = false;

  }

  this.enter = function()
  {


    if (ww.isPlaying()) {
    ww.pause(); // .play() will resume from .pause() position
    } else {
    ww.play();
    }
      console.log("We are at the Tape Scene");

  }

    this.draw = function()
    {
      
      background(0);
      image(deskbg, 0, 0, 1100, 825); 
      textAlign(CENTER);
      textSize(20);
      text("Listen to each tape, find the odd one out.", width/2, 20);
      noStroke();
      drawGui();
      image(tape1, 10, 50);
      image(tape2, 500, 50);
      image(tape3, 250, 420);
      fill(200);

    }






  this.mousePressed = function()  {
      if (t7.isPressed) {

        print(t7.label + " is " + t7.val);
        tp2.play();
       drm.pause();
     }

      if (t8.isPressed) {

        print(t8.label + " is " + t8.val);
        tp1.play();
       drm.play();
     }

      if (t9.isPressed) {

        print(t9.label + " is " + t9.val);
        tp2.play();
       ply.pause();
     }

        if (t10.isPressed) {

        print(t10.label + " is " + t10.val);
        tp1.play();
       ply.play();
     }

     if (t11.isPressed) {

        print(t11.label + " is " + t11.val);
        tp2.play();
       whisp.pause();
     }

     if (t12.isPressed) {

        print(t12.label + " is " + t12.val);
        tp1.play();
       whisp.play();
       t13.visible = true;
     }  

      if (t13.isPressed) {

        print(t13.label + " is " + t13.val);
       pk1.play();
     }

     if (t13.val) {

        t13.visible = false;
        this.sceneManager.showNextScene();
    
      }
  

  
    }


}


function bdEnd() {

  this.setup = function()  {
      console.log("we are setting up the result scene");
  }

  this.enter = function() {
     console.log("we are entering the result scene");

  }

 this.draw = function() {
   background(0);
   image(deskbg, 0, 0, 1100, 825); 
   textAlign(CENTER);
   textSize(60);
   text("Well done.",width/2, 100);
   textSize(20);
   text("You've found all 3 of the primary documents.", width/2, 300);
   text("Now, your divission can focus on the main task:", width/2, 350);
   text("Locating the artifact.", width/2, 400);

 }


}

function bdHelp() {
  let t15; 

  this.setup = function()  {
      t15 = createToggle("Back", 75, 700, 70, 50);
      t15.visible = true;
  }

  this.enter = function() {
     console.log("We are in the help scene.");

  }

 this.draw = function() {
   background(0);
   image(deskbg, 0, 0, 1100, 825); 
   textAlign(CENTER);
   drawGui();
   fill(255);
   textSize(60);
   text("INFO",width/2, 100);
   textSize(20);
   text("Click on the blue toggle buttons to proceed through each scene.", width/2, 200);
   text("Double click on checkboxes to proceed.", width/2, 225);
   text("Hold down keys for the Documents scene, press keys in numerical order for the Photos scene.", width/2, 250);
   fill(255);
   textSize(60);
   text("CREDITS",width/2, 400);
   textSize(20);
   text("This game was made using P5.js.", width/2, 500);
   text("Tape 1 Audio - Puniho at Freesound.org", width/2, 525);
   text("Tape Buttons SFX - Pogotron at Freesound.org", width/2, 550);
   text("Tape 3 Audio Samples - 1LOVE at Freesound.org", width/2, 575);
   text("Button UI - p5.touchgui by Carlos L05 Garcia", width/2, 600);
   text("Code for Scenes - SceneManager by Marian Veteanu", width/2, 625);
   text("If the Back button doesn't work, please refresh the page. Thank you.", width/2, 675);


 }

 this.Mousepressed = function() 
 {
    if (t15.isPressed) {
      print(t15.label + " is " + t15.val);
      pk1.play();
    }

    if (t15.val) {
      t15.visible = false;
      titlecard = true;
      t.visible = true;
      tt.show();
      this.sceneManager.showScene(bdStart);
    
    }
 }
}


