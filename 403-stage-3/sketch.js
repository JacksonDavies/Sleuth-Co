/*

Officer: 1845677
CaseNum: 403-2-73871087-1845677

Case 403 - Cornered - stage 3

We have Shiffman cornered at Aaron Swartz Memorial Park and more help is on the way.
Until our backup arrives the orders are to make sure he stays inside Aaron Swartz Memorial Park

Your job is to indicate that Shiffman (signified by the mouse) is indeed within the North - East - South - West bounds of Aaron Swartz Memorial Park.
Draw a DarkGoldenrod rectangle covering Aaron Swartz Memorial Park for as long as Shiffman is in it.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  fill()  - Use r,g,b values between 0 and 255.
  rect()
  mouseX
  mouseY

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...
     
// Bounds
var xMin = 1930;
var xMax = 2300;
var yMin = 575;
var yMax = 765;

if(mouseX > xMin && 
   mouseX < xMax &&
   mouseY > yMin &&   
   mouseY < yMax) {

    // Draw rect
    fill(184,134,11);
    rect(xMin, yMin, xMax - xMin, yMax - yMin);

}

 
    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);

    // a helpful mouse coordinate pointer
    fill(255);
    noStroke();
    text(`${mouseX},${mouseY}`,mouseX, mouseY);
}

