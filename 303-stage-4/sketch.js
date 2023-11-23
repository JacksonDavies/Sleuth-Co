/*

Officer: 1845677
CaseNum: 303-3-55171632-1845677

Case 303 - The Case of the Crooked Attorney
Stage 4 - The Courthouse

Torvalds has his final safe in his courthouse chambers. Luckily there is a court case proceeding.
You can sneak into his chambers whilst he makes his closing statement.

Crack the safe by doing the following:

	When the mouse button is pressed:
	- Use the 'map' function to scale mouseX to values ranging from 3 to 15.
	- Assign the output to Hidden_vault_code_A

	When the mouse button is released:
	- Use the 'map' function to scale mouseX to values ranging from 1 to 9.
	- Assign the output to Hidden_vault_code_B

	When any key is pressed:
	- Make Hidden_vault_code_C equal to the value of 'key'

	Whilst the mouse is being dragged:
	- Use the 'map' function to scale mouseY to values ranging from 12 to 69.
	- Assign the output to Hidden_vault_code_D

	Whilst the mouse is being dragged:
	- Use the 'map' function to scale mouseY to values ranging from 9 to 77.
	- Assign the output to Hidden_vault_code_E

	When the mouse button is released:
	- Use the 'map' function to scale mouseX to values ranging from 9 to 77.
	- Assign the output to Hidden_vault_code_F



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- key, keyCode
	- random
	- map

*/

//declare the variables

var Hidden_vault_code_A;
var Hidden_vault_code_B;
var Hidden_vault_code_C;
var Hidden_vault_code_D;
var Hidden_vault_code_E;
var Hidden_vault_code_F;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	Hidden_vault_code_A = 0;
	Hidden_vault_code_B = "";
	Hidden_vault_code_C = "";
	Hidden_vault_code_D = 0;
	Hidden_vault_code_E = 0;
	Hidden_vault_code_F = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...
function mousePressed() {
  Hidden_vault_code_A = map(mouseX, 0, width, 3, 15);
}

function mouseReleased() {
  Hidden_vault_code_B = map(mouseX, 0, width, 1, 9);  
  Hidden_vault_code_F = map(mouseX, 0, width, 9, 77);
}

function keyPressed() {
  Hidden_vault_code_C = key;  
}

function mouseDragged() {
  Hidden_vault_code_D = map(mouseY, 0, height, 12, 69);
  Hidden_vault_code_E = map(mouseY, 0, height, 9, 77);    
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dial
	push();
	translate(256,180);
	drawDial(170,Hidden_vault_code_A,20);
	pop();

	//Draw the spinners
	push();
	translate(206,280);
	drawSpinner(3, Hidden_vault_code_B);
	pop();

	push();
	translate(306,280);
	drawSpinner(3, Hidden_vault_code_C);
	pop();

	//Draw the levers
	push();
	translate(125,356);
	drawLever(Hidden_vault_code_D);
	pop();

	push();
	translate(250,356);
	drawLever(Hidden_vault_code_E);
	pop();

	push();
	translate(375,356);
	drawLever(Hidden_vault_code_F);
	pop();

}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}

function drawSpinner(numSpinners, val)
{
	var sw = 20;
	var ow = (sw + 5) * numSpinners + 5;
	stroke(0);
	fill(100);
	rect(-ow/2,0,ow,35);
	if(typeof(val) == "number")
	{
		val = floor(val).toString(); //convert to string
	}
	var d = numSpinners - val.length;

	for(var d = numSpinners - val.length; d > 0; d--)
	{
		val = "-" + val;
	}

	for(var i = 0; i < numSpinners; i++)
	{
		stroke(0);
		fill(255,255,200);
		rect(-ow/2 + i * (sw + 5) + 5,5,20,25);
		fill(0);
		noStroke();
		text(val[i],-ow/2 + sw/2 + i * (sw +5),25);
	}

}
