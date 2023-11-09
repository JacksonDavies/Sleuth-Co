/*
The case of the Python Syndicate
Stage 1

Officer: 1845677
CaseNum: 301-0-59898770-1845677

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Initialise the variables with the correct values. HINT: you should be able to derive these from the image commands below.
- Finally modify the each image command replacing the hard-coded values with your variables. 
- If you've got it right all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var robbieKrayImage;
var adaLovelaceImage;
var annaKarpinskiImage;
var countessHamiltonImage;
var pawelKarpinskiImage;
var rockyKrayImage;



//declare your new variables below
var robbieKrayCoordX = 115;
var robbieKrayCoordY = 40;

var adaLovelaceCoordX = 408;
var adaLovelaceCoordY = 40;

var annaKarpinskiCoordX = 701;
var annaKarpinskiCoordY = 40;

var countessHamiltonCoordX = 115;
var countessHamiltonCoordY = 309;

var pawelKarpinskiCoordX = 408;
var pawelKarpinskiCoordY = 309;

var rockyKrayCoordX = 701;
var rockyKrayCoordY = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbieKrayImage = loadImage("krayBrothers2.png");
	adaLovelaceImage = loadImage("ada.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	countessHamiltonImage = loadImage("countessHamilton.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	rockyKrayImage = loadImage("krayBrothers1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(annaKarpinskiImage, annaKarpinskiCoordX, annaKarpinskiCoordY);

	image(robbieKrayImage, robbieKrayCoordX, robbieKrayCoordY);
	image(adaLovelaceImage, adaLovelaceCoordX, adaLovelaceCoordY);
	image(countessHamiltonImage, countessHamiltonCoordX, countessHamiltonCoordY);
	image(pawelKarpinskiImage, pawelKarpinskiCoordX, pawelKarpinskiCoordY);
	image(rockyKrayImage, rockyKrayCoordX, rockyKrayCoordY);

}