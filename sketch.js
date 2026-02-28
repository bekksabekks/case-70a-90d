let gui;

// Create a variable for your Toggle


let pk1, pk2, ww, drm, ply, whisp, tp1, tp2, flip;
let doc, pic, aud, cam, tape;
let file1, file2, file3, file4, file5, cfile6, atag, btag, ctag, dtag, deskbg;
let tt;
let photo, page1, page2, page3, page4;
let doc1, pic1, aud1;
let tape1, tape2, tape3;
var mgr;

function preload() {
  pk1 = loadSound("assets/perkup.mp3");
  pk2 = loadSound("assets/perkup2.mp3");
  ww = loadSound("assets/wuhoh.mp3");
  drm = loadSound("assets/drm.wav");
  tp1 = loadSound("assets/tapestart.mp3");
  tp2 = loadSound("assets/tapeend.mp3");
  whisp = loadSound("assets/p5audio.wav");
  ply = loadSound("assets/playroom.wav");
  flip = loadSound("assets/pageflip.mp3");
  cam = loadImage("assets/cameraicon.png");
  doc = loadImage("assets/docsicon.png");
  pic = loadImage("assets/picsicon.png");
  tape = loadImage("assets/tapeicon.png");
  aud = loadImage("assets/audioicon.png");
  file1 = loadImage("assets/papertexture2.png");
  file2 = loadImage("assets/papertexture3.png");
  file3 = loadImage("assets/papertexture4.png");
  file4 = loadImage("assets/papertexture5.png");
  file5 = loadImage("assets/papertexture6.png");
  cfile6 = loadImage("assets/drletter.png");
  atag = loadImage("assets/a_tag.png");
  btag = loadImage("assets/b_tag.png");
  ctag = loadImage("assets/c_tag.png");
  dtag = loadImage("assets/d_tag.png");
  photo = loadImage("assets/photoalbum.png");
  page1 = loadImage("assets/page1.png");
  page2 = loadImage("assets/page2.png");
  page3 = loadImage("assets/page3.png");
  page4 = loadImage("assets/page4.png");
  tape1 = loadImage("assets/tape1.png");
  tape2 = loadImage("assets/tape2.png");
  tape3 = loadImage("assets/correct_tape.png");
  deskbg = loadImage("assets/woodendesk.png")
}


function setup() {
    createCanvas(1000, 800);
  //  console.log(hell);

     mgr = new SceneManager();
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (bdStart);
    mgr.addScene (bdMenu1);
    mgr.addScene (bdDocscene);
    mgr.addScene (bdMenu2);
    mgr.addScene (bdPicscene);
    mgr.addScene (bdMenu3);
    mgr.addScene (bdTapescene);
    mgr.addScene (bdEnd);
    mgr.addScene (bdHelp);
    mgr.showNextScene();

}

function draw()
{
    mgr.draw();
}

function mousePressed()
{
  mgr.mousePressed();
}

function mouseDragged()
{
    mgr.handleEvent("mouseDragged");
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '5':
            mgr.showScene(bdStart);
            break;
        case '6':
            mgr.showScene(bdMenu1);
            break;
        case '7':
            mgr.showScene(bdMenu2);
            break;
        case 'h':
            mgr.showScene(bdMenu3);
            break;
        case '8':
            mgr.showScene(bdHelp);
            break;
         case '9':
            mgr.showScene(bdEnd);
            break;
            
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}


/// Add these lines below sketch to prevent scrolling on mobile
function touchMoved() {
  // do some stuff
  return false;
}
