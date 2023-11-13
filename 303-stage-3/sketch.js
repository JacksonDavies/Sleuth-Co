/*

Officer: 1845677
CaseNum: 303-2-58249654-1845677

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	Whilst the mouse is moving:
	- Make SecureStoreVal0 equal to the value of mouseY
	- Use the 'max' function to prevent SecureStoreVal0 from falling below 2

	Whilst the mouse is being dragged:
	- Increment SecureStoreVal1 by 3
	- Use the 'constrain' function to prevent SecureStoreVal1 from falling below 2 and going above 19

	Whilst the mouse is moving:
	- Make SecureStoreVal2 equal to the value of mouseX
	- Use the 'min' function to prevent SecureStoreVal2 from going above 12

	When any key is released:
	- Decrement SecureStoreVal3 by 3
	- Use the 'constrain' function to prevent SecureStoreVal3 from falling below 3 and going above 22

	Whilst the mouse is being dragged:
	- Make SecureStoreVal4 equal to the value of mouseX
	- Use the 'max' function to prevent SecureStoreVal4 from falling below 18



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var SecureStoreVal0;
var SecureStoreVal1;
var SecureStoreVal2;
var SecureStoreVal3;
var SecureStoreVal4;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	SecureStoreVal0 = 0;
	SecureStoreVal1 = 0;
	SecureStoreVal2 = 0;
	SecureStoreVal3 = 0;
	SecureStoreVal4 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...
function mouseMoved()
{
	console.log("mouseMoved", mouseX, mouseY);
	SecureStoreVal0 = max(mouseY,2);
    SecureStoreVal2 = min(mouseX,12);
}

function mouseDragged()
{
	console.log("mouseDragged", mouseX, mouseY);
   SecureStoreVal1 = constrain(SecureStoreVal1+3, 2, 19);
   SecureStoreVal4 = max(mouseX,18);
}


function keyReleased()
{
	console.log("keyReleased", key);
   SecureStoreVal3 = constrain(SecureStoreVal3 -3, 3, 22);
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,SecureStoreVal0, 20);
	pop();

	push();
	translate(120,380);
	drawDial(140,SecureStoreVal1, 23);
	pop();

	push();
	translate(280,170);
	drawDial(140,SecureStoreVal2, 17);
	pop();

	push();
	translate(280,380);
	drawDial(140,SecureStoreVal3, 26);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(SecureStoreVal4);
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
