/*
201 - The case of Judge Hopper
Stage 3 - The dressing room

Officer: (yournumber)
CaseNum: (yourcase)

No sooner do you enter the lobby of the Cobol Theatre than the sound of gunshots leads you running towards the backstage area. You head towards a swinging door, the star dressing room. Sure enough you find a series of bullet holes peppered across the mirror. You are about to turn round and resume your chase when you notice a familiar pattern in the holes. Frantically you grab some lipstick from the dresser and draw on the mirror.

Use the vertex function to complete the pattern.

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

    // write the code to join the bullet holes below
	//the strucher will give you the ability to draw flexible. Every vertex will include the "X" and "Y" point it will connect together to create a draw line 
	//It will look like this but X and Y will change for every assignt you click download on assignt page.

beginShape()
  vertex(656.25,10);
  vertex(712.25,77);
  vertex(625.25,100);
  vertex(685.25,180);
  vertex(666.25,245)
  vertex(720.25,235);
endShape();
    
    //A helpful mouse pointer
	push();
        fill(0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}
