/*

Officer: 1845677
CaseNum: 701-0-30413620-1845677

Case 701 - Probable pick pocket - stage 1

There has been a spate of pickpocketing downtown and we’ve been asked to lend a hand down at the precinct.
They’ve managed to collect a witness statement from an unsuspecting tourist jacqueline willmar and also rounded up a bunch of the usual suspects.
We need you to unravel this mess and work out who is the guilty one.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. It's so hard to remember right now. They had short black hair. They wore thin metallic glasses. I'm not quite sure. They were wearing a green army coat. I'm sorry, that's all I can recall right now

*/

var suspectsArray = [
	{ 
		"name": "DEEDEE COURTWOOD",
		"glasses": "cheap plastic",
		"hair": "thick black",
		"coat": "green jacket"
	},
	{ 
		"name": "JENIFFER MYRLE",
		"glasses": "light tan",
		"hair": "ginger",
		"coat": "black hoodie"
	},
	{ 
		"name": "MALINDA ASHELY",
		"glasses": "thin metallic",
		"hair": "short black",
		"coat": "green army coat"
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare your function here
function matchProperties(suspectObj)
{
    if(suspectObj.glasses == "thin metallic" &&
       suspectObj.hair == "short black" &&
       suspectObj.coat == "green army coat"
      ) {return true;}
    return false;
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < suspectsArray.length; i++){
    if(matchProperties(suspectsArray[i]) == true){
      fill(255,0,0);
      text(suspectsArray[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(suspectsArray[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
