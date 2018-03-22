//var banderole ;
var blason
//tabimages
var tabimages = [];
var idx = 0;
var nbImg = 5;
var v = 1;

var nomEquipe= ['lizard squad','anonymous','syrian electronic army','chaos computer club','red hack'];
var carac1 =['coree','turquie','international','syrie','chine'];
var carac2 = ['ethiqueA','ethiqueB','ethiqueC','ethiqueD','ethiqueE']

function preload() {
 // banderole = loadImage('assets/banderole2.png');
 blason = loadImage('assets/1.png');

 for (var i = 0; i< 5; i++) {
    tabimages[i] = loadImage("assets/" + i + ".png");
  }
}


function setup() {
  // var c = createCanvas(windowWidth,windowHeight);
  var c = createCanvas(windowWidth-62,windowHeight-66);
  c.parent("p5canvas");
  preload();

  //background(255);



  var bt1 = select("#bt1"); //flèches G
  var bt2 = select('#bt2'); // flèches D
  bt1.mouseClicked(action1);
  bt2.mouseClicked(action1);
}

function action1(){
    console.log("click bt 1");
    fill(220);
    rect(width/2,height/2+50,blason.width*1.9,blason.height*1.9);
    idx = idx + v;
    redraw();

    if(idx>2){
    v=-1;
    }
    if(idx<1){
    v=1;
    }
}


function windowResized(){  // pour que taille du canvas s'adapte à la taille de la fenêtre
//  resizeCanvas(windowWidth,windowHeight);
}


function draw() {
// CADRE :
//stroke(255,0,0);
//strokeWeight(2);
fill(255);
//rect(0,0,width-70,height-70);
//line(30,135,width-40,135);
//fill(255,0,0);
//rect(30,height-70,width-70,80);
textSize(29);

imageMode(CENTER);
rectMode(CENTER);
noStroke();
//rect(width/2,80,banderole.width/1.2,banderole.height/1.5);
//image(banderole,width/2,80,banderole.width/1.2,banderole.height/1.5);
// blasons
rect(width/2,height/2+50,blason.width*1.9,blason.height*1.9);
image(tabimages[idx],width/2,height/2+50,blason.width*1.9,blason.height*1.9);
//rectMode(CORNER);

// textes équipes :
textSize(30);
fill(255,0,0);
rect(width/2,height-20,200,50);
fill(255);
text(nomEquipe[idx],width/2,height-20); //nom des équipes
// zoneTexteG.text(carac1[idx],10,100);
//zoneTexteD.text(carac2[idx],10,100);
}
