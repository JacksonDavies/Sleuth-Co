/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: (yournumber)
CaseNum: (yourcase)

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

HINT: You should only need around 20 vertices to draw round the judge. Make sure you close your shape!

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  beginShape()
  endShape()
  vertex()

*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
 beginShape()
  vertex(390,240);
  vertex(380,360);  
    vertex(489,384);
    vertex(640,388);
    vertex(648,445);
    vertex(730,480);
    vertex(800,320);
    vertex(750,100);
    vertex(700,123);
    vertex(683,258);
    vertex(389,240);
endShape()

    //A helpful mouse pointer
	push();
        fill(0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}
