// Diaspora Chapter1, Jan-15-2023, Mianlin Hu
// operation manual: run these project files in the zip as a whole
// !!Please run diaspora chap1 code and diaspora chap2 code seperately!!
// Code Structure: 
// -randomCurve.js - functions of drawing random curves; 
// -Circle.js - Class Circle
// -sketch.js - main functions
// Acknowledgements:
//code reference random curve https://editor.p5js.org/yangyang/sketches/rkQY8X0vM
//water ripples https://editor.p5js.org/chjno/sketches/BkbTpyojZ


var fr;//framerate

var cps = [];
let num_of_points=[5,10,30];
let count;

var array_of_points_1=[];
var array_of_points_2=[];
var array_of_points_3=[];
var matrix_of_points=[array_of_points_1,array_of_points_2,array_of_points_3];
var outerDiam=[20,20,20];//ripples diameter

let GroupOfCircles;
let dots=[];
let enlarge_diam=10;



function setup() {
 
  createCanvas(windowWidth, windowHeight)

  
  
  count=0;
  GroupOfCircles= new Circle;
  outerDiam_1=20;
  outerDiam_2=20;

  

}








function draw() {
  background(0);
  
  if(frameCount<=500)
  {
    fr=20;
    frameRate(fr);
    for(let i=0;i<frameCount;i++)
    {cps = CreatePoints(num_of_points[0]);
    array_of_points_1.push(cps);}
    //slowdown the framecount
    count=int((frameCount/10)%frameCount);
    anim(count,0);
  }
  else if(frameCount<=800)
  {
    fr=25;
    frameRate(fr);
    for(let i=0;i<frameCount;i++)
    {cps = CreatePoints(num_of_points[1]);
    array_of_points_2.push(cps);}
    //slowdown the framecount
    count=int((frameCount/10)%frameCount);
    anim(count,1);
  }
  else if(frameCount<=1400)
  {
    
    
    for(let i=0;i<frameCount;i++)
    {cps = CreatePoints(30);
    array_of_points_3.push(cps);}
    //slowdown the framecount
    count=int((frameCount/10)%frameCount);
    anim(count,2);
  }
  else if(frameCount <=1460)
  {
    frameRate(2);
    GroupOfCircles.init(5);
    GroupOfCircles.show();
  }
  else if(frameCount<=1470)
  {
    frameRate(5);
    GroupOfCircles.show_dots();
  }
  else if(frameCount<=1530)
  {
    frameRate(5);
    GroupOfCircles.shine_dots();
  }
  else if(frameCount<=1560)
  {
    frameRate(3);
    enlarge_diam+=20;
    GroupOfCircles.enlarge_dots();
    
  }
  else if(frameCount<=1900)
  { fr=20;
    frameRate(fr);
    fr+=0.5;
    DrawRipple(width/2,height/2,20,1);
    
    
  }
  else if(frameCount<=2000)
  { 
    fr=15;
    frameRate(fr);
    
    DrawRipple(width/4,height/2,10,2);
    DrawRipple(3*width/4,height/2,10,2);
  }
  else if(frameCount<2250)
  {
    fr=10;
    frameRate(fr);
    DrawRipple(width/2+100,height/2+100/sqrt(3),5,3);
    DrawRipple(width/2-100,height/2+100/sqrt(3),5,3);
    DrawRipple(width/2,height/2-200/sqrt(3),5,3);


  }
  

  
}





//draw ripple
function DrawRipple(x,y,num,scene)
{
 


  let outerDiam_ripple;

  switch (scene) {
    case 1:
      outerDiam_ripple=outerDiam[0];
      outerDiam[0] = outerDiam[0] + 3;
      break;
    case 2:
      outerDiam_ripple=outerDiam[1];
      outerDiam[1]=outerDiam[1]+2.5;
      break;
    case 3:
      outerDiam_ripple=outerDiam[2];
      outerDiam[2]=outerDiam[2]+1.5;
      break;
    default:
       
  }


  
  for (var i = 0; i < num; i++){
		var diam = outerDiam_ripple - 30 * i;    
    var r = map(diam, 0, height, 0, 255/2);
    var g = map(diam, 0, width, 0, 255/2);
    
    if (diam > 0){
      
      var fade = map(diam, 0, width, 255, 0);
      
			stroke(r,g,fade);
      noFill();
      ellipse(x, y, diam);
    }
  }
  
}

