/*

Officer: 1845677
CaseNum: 701-3-58909905-1845677

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from darby joyer.
All they need is for you to do the detective work.

This time you must implement two functions:

- A matchProperties function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A traverseSuspects function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - function traverseSuspects(){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. It was very dark and I could barely see, They were carrying a black duffle bag. They had long white hair. It was so scary! They brobably weigh between 78 and 95 kg. I remember they had a facial tattoo. I distinctly remember that they were wearing a pink scarf, I remember thinking that was quite unusual. I'll never forget their black eyes. Their expression seemed confused. They were fairly tall, I think between a height of 148 and 210 cm. They seemed to be between the age of 34 and 50 years old. It's hard to say. Can I go home now Sir? 

*/

var lineupLog = [
	{ 
		"name": "LARRAINE SYMMES",
		"tattoo": "jellyfish",
		"accessory": "laptop bag",
		"item": "purple hat",
		"expression": "sad",
		"weight": 69,
		"age": 61,
		"height": 182
	},
	{ 
		"name": "SUMMER GOODBURY",
		"tattoo": "big arrow",
		"accessory": "glass bottle",
		"item": "fur vest",
		"expression": "angry",
		"weight": 79,
		"age": 23,
		"height": 183
	},
	{ 
		"name": "LINETTE DEAUVILLE",
		"tattoo": "facial",
		"accessory": "black duffle bag",
		"item": "pink scarf",
		"expression": "confused",
		"weight": 84,
		"age": 47,
		"height": 209
	},
	{ 
		"name": "JESSIA THAXTER",
		"tattoo": "dragon",
		"accessory": "plastic box",
		"item": "net weave shirt",
		"expression": "blank",
		"weight": 74,
		"age": 50,
		"height": 163
	},
	{ 
		"name": "JESUS DAVISWOOD",
		"tattoo": "chinese lettering",
		"accessory": "orange plastic bag",
		"item": "dotted necktie",
		"expression": "nerveous",
		"weight": 67,
		"age": 20,
		"height": 177
	},
	{ 
		"name": "DARBY ZETLAND",
		"tattoo": "bull",
		"accessory": "metal briefcase",
		"item": "pair of leather trousers",
		"expression": "menacing",
		"weight": 76,
		"age": 36,
		"height": 168
	},
	{ 
		"name": "JULIANA JACQUELIN",
		"tattoo": "sword",
		"accessory": "big black envelope",
		"item": "orange socks",
		"expression": "menacing",
		"weight": 73,
		"age": 23,
		"height": 180
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

// Declare both your functions here
function matchProperties(suspectObj) {
  let matches = 0;
  if (suspectObj.accessory === "black duffle bag") matches++;
  if (suspectObj.item === "pink scarf") matches++; 
  if (suspectObj.expression === "confused") matches++;
  if (suspectObj.weight >= 78 && suspectObj.weight <= 95) matches++; 
  if (suspectObj.tattoo === "facial") matches++;
  if (suspectObj.height >= 148 && suspectObj.height <= 210) matches++;
  if (suspectObj.age >= 34 && suspectObj.age <= 50) matches++;
  return matches;
}

function traverseSuspects() {
  for (let i = 0; i < lineupLog.length; i++) {
    if (matchProperties(lineupLog[i]) >= 5) {
      return lineupLog[i];
    }
  }
  return {};
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255,0,0);
  text(traverseSuspects().name + " is guilty!", 60, 80);
}
