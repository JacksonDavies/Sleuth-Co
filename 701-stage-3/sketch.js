/*

Officer: 1845677
CaseNum: 701-2-36128322-1845677

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from summer portos. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchSuspect(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. It was so scary! They brobably weigh between 78 and 72 kg. They were wearing a green jacket. I distinctly remember that they were wearing a net weave shirt, I remember thinking that was quite unusual. They were carrying a metal briefcase. The person I saw was female. They seemed to be between the age of 22 and 42 years old. I'll never forget their green eyes. They were fairly tall, I think between a height of 160 and 195 cm. It was very dark and I could barely see, That's all I can remember about them. 

*/

var lineupLog = [
	{ 
		"name": "ERMELINDA CROME",
		"coat": "green jacket",
		"eyes": "green",
		"gender": "female",
		"accessory": "metal briefcase",
		"age": 32,
		"weight": 72,
		"height": 176
	},
	{ 
		"name": "BRAD WARMAN",
		"coat": "green army coat",
		"eyes": "brown",
		"gender": "female",
		"accessory": "brown paper bag",
		"age": 45,
		"weight": 83,
		"height": 209
	},
	{ 
		"name": "DEEDEE ZETLAND",
		"coat": "red parka",
		"eyes": "black",
		"gender": "male",
		"accessory": "orange plastic bag",
		"age": 31,
		"weight": 81,
		"height": 166
	},
	{ 
		"name": "JAUNITA MONKSFORD",
		"coat": "white fur coat",
		"eyes": "black",
		"gender": "male",
		"accessory": "plastic box",
		"age": 41,
		"weight": 75,
		"height": 171
	},
	{ 
		"name": "LOUISE OORIN",
		"coat": "blue overcoat",
		"eyes": "pale",
		"gender": "male",
		"accessory": "orange tote bag",
		"age": 40,
		"weight": 73,
		"height": 176
	},
	{ 
		"name": "LAKESHA JOYER",
		"coat": "yellow poncho",
		"eyes": "blue",
		"gender": "male",
		"accessory": "laptop bag",
		"age": 65,
		"weight": 74,
		"height": 167
	},
	{ 
		"name": "JULIANA DORCEY",
		"coat": "black hoodie",
		"eyes": "blue",
		"gender": "female",
		"accessory": "red backpack",
		"age": 54,
		"weight": 81,
		"height": 178
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
function matchSuspect(suspectObj) {
  let matchingProperties = 0;
  
  if (suspectObj.coat === "green jacket") {
    matchingProperties++;
  }
  
  if (suspectObj.eyes === "green") {
    matchingProperties++; 
  }
  
  if (suspectObj.gender === "female") {
    matchingProperties++;
  }
  
  if (suspectObj.accessory === "metal briefcase") {
    matchingProperties++;
  }
  
  if (suspectObj.age >= 22 && suspectObj.age <= 42) {
    matchingProperties++;
  }
  
  if (suspectObj.weight >= 72 && suspectObj.weight <= 78) {
    matchingProperties++;
  }
  
  if (suspectObj.height >= 160 && suspectObj.height <= 195) {
    matchingProperties++;
  }

  return matchingProperties;
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < lineupLog.length; i++){
    let matchingProperties = matchSuspect(lineupLog[i]);
    fill(50 * matchingProperties,250 - (50 * matchingProperties),0);
    text("found " + matchingProperties + " matching properties for " + lineupLog[i].name, 60, 60 + i * 20);
  }
}
