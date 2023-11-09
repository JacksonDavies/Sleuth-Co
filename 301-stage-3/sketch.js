/*
The case of the Python Syndicate
Stage 3


Officer: 1845677
CaseNum: 301-2-74740523-1845677

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Pawel Karpinski has been declared and initialised
- Position each mugshot relative to Pawel Karpinski
- Do this by modifying the x and y parameters of each image command to use the x and y properties from the Pawel Karpinski object.
- You will need to combine add and subtract operators with the relevant property for each parameter.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the properties for Pawel Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var robbie_kray_img;
var pawel_karpinski_img;
var rocky_kray_img;
var ada_lovelace_img;
var anna_karpinski_img;
var cecil_karpinski_img;

var pawel_karpinski_obj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbie_kray_img = loadImage("krayBrothers2.png");
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	rocky_kray_img = loadImage("krayBrothers1.png");
	ada_lovelace_img = loadImage("ada.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	pawel_karpinski_obj = {
		x: 408,
		y: 40,
		image: pawel_karpinski_img
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(pawel_karpinski_obj.image, pawel_karpinski_obj.x, pawel_karpinski_obj.y);

	image(robbie_kray_img, pawel_karpinski_obj.x - 293, pawel_karpinski_obj.y);
	image(rocky_kray_img, pawel_karpinski_obj.x + 293, pawel_karpinski_obj.y);
	image(ada_lovelace_img, pawel_karpinski_obj.x - 293, pawel_karpinski_obj.y+269);
	image(anna_karpinski_img, pawel_karpinski_obj.x, pawel_karpinski_obj.y+269);
	image(cecil_karpinski_img, pawel_karpinski_obj.x + 293, pawel_karpinski_obj.y+269);

}