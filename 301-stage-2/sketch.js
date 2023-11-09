/*
The case of the Python Syndicate
Stage 2


Officer: 1845677
CaseNum: 301-1-56745150-1845677

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Countess Hamilton

- The variables for Countess Hamilton have been declared and initialised.
- This time you are NOT allowed to create any new variables.
- Instead you must position each mug shot relative to Countess Hamilton
- To do this you will need to control the positions of the mugshots by adding/subtracting hard-coded values to the appropriate Countess Hamilton variable for each parameter.
- If you've got it right all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the variables for Countess Hamilton 
- Do not add any additional commands

*/

var photoBoard;
var robbie_kray_img;
var cecil_karpinski_img;
var bones_karpinski_img;
var pawel_karpinski_img;
var countess_hamilton_img;
var ada_lovelace_img;


var countess_hamilton_pos_x = 408;
var countess_hamilton_pos_y = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbie_kray_img = loadImage("krayBrothers2.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	countess_hamilton_img = loadImage("countessHamilton.png");
	ada_lovelace_img = loadImage("ada.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(countess_hamilton_img, countess_hamilton_pos_x, countess_hamilton_pos_y);

	image(robbie_kray_img,countess_hamilton_pos_x - 293, countess_hamilton_pos_y - 269);
	image(cecil_karpinski_img, countess_hamilton_pos_x, countess_hamilton_pos_y - 269);
	image(bones_karpinski_img, countess_hamilton_pos_x + 293, countess_hamilton_pos_y - 269);
	image(pawel_karpinski_img, countess_hamilton_pos_x - 293, countess_hamilton_pos_y);
	image(ada_lovelace_img, countess_hamilton_pos_x + 293, countess_hamilton_pos_y);

}