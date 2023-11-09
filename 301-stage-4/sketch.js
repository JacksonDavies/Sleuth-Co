/*
The case of the Python Syndicate
Stage 4

Officer: 1845677
CaseNum: 301-3-86986632-1845677

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

- Organise each syndicate member into a new object. 
    - I’ve done one for you as an example.
    - Be sure to replicate the naming conventions for your own objects.
- Modify the image commands to make them use the new objects you created.
- Once you have done this you can delete the old variables.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var ada_lovelace_object;
var countess_hamilton_object;
var cecil_karpinski_object;
var rocky_kray_object;
var robbie_kray_object;
var anna_karpinski_object;

var robbie_kray_object;


//declare your new objects below


var ada_lovelace_x_pos = 115;
var ada_lovelace_y_pos = 40;
var countess_hamilton_x_pos = 408;
var countess_hamilton_y_pos = 40;
var cecil_karpinski_x_pos = 701;
var cecil_karpinski_y_pos = 40;
var rocky_kray_x_pos = 115;
var rocky_kray_y_pos = 309;
var anna_karpinski_x_pos = 701;
var anna_karpinski_y_pos = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	ada_lovelace_object = loadImage("ada.png");
	countess_hamilton_object = loadImage("countessHamilton.png");
	cecil_karpinski_object = loadImage("karpinskiBros1.png");
	rocky_kray_object = loadImage("krayBrothers1.png");
	robbie_kray_object = loadImage("krayBrothers2.png");
	anna_karpinski_object = loadImage("karpinskiWoman.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	robbie_kray_object = {
		x: 408,
		y: 309,
		image: robbie_kray_object
	};



	//define your new objects below
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(ada_lovelace_object, robbie_kray_object.x - 293, robbie_kray_object.y - 269);
	image(countess_hamilton_object, robbie_kray_object.x, robbie_kray_object.y - 269);
	image(cecil_karpinski_object, robbie_kray_object.x + 293, robbie_kray_object.y - 269);
    
	image(rocky_kray_object, robbie_kray_object.x - 293, robbie_kray_object.y);
    
	image(robbie_kray_object.image, robbie_kray_object.x, robbie_kray_object.y);
    
	image(anna_karpinski_object, robbie_kray_object.x + 293, robbie_kray_object.y);


}