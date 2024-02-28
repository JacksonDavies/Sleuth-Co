/*

Officer: 1845677
CaseNum: 701-1-21647901-1845677

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testProperties(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. By the look of them they were younger than 73. I'm not quite sure. They were wearing a yellow poncho. It was very dark and I could barely see, They wore blue glasses. I remember they had a neck tattoo. They definately weigh less than 101 Kg. I'll never forget their grey eyes. Can I go home now Sir? 

*/

var suspectsArray = [
	{ 
		"name": "BRAD COURTWOOD",
		"coat": "yellow poncho",
		"tattoo": "neck",
		"eyes": "grey",
		"weight": 92,
		"age": 63
	},
	{ 
		"name": "JULIANA CROME",
		"coat": "green army coat",
		"tattoo": "jellyfish",
		"eyes": "pale",
		"weight": 64,
		"age": 45
	},
	{ 
		"name": "ERMELINDA GOODBURY",
		"coat": "green jacket",
		"tattoo": "dark black",
		"eyes": "black",
		"weight": 78,
		"age": 21
	},
	{ 
		"name": "JACQUELINE DEAUVILLE",
		"coat": "red parka",
		"tattoo": "sword",
		"eyes": "black",
		"weight": 70,
		"age": 58
	},
	{ 
		"name": "NICOLE SILVEIRA",
		"coat": "black overcoat",
		"tattoo": "big arrow",
		"eyes": "brown",
		"weight": 100,
		"age": 34
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
function testProperties(suspectObj)
{
    if( suspectObj.age < "73" && 
        suspectObj.coat == "yellow poncho" &&
        suspectObj.eyes == "grey" &&
        suspectObj.tattoo == "neck" &&
        suspectObj.weight < "101"
    ){return true;}
    return false;
}

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < suspectsArray.length; i++){
    if(testProperties(suspectsArray[i]) == true){
      fill(255,0,0);
      text(suspectsArray[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(suspectsArray[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
