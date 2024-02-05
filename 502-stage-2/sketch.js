/*

Officer: 1845677
CaseNum: 502-1-10923624-1845677

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way. This message is a little more tricky to decipher, but I know you can do it.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// data structures to be referenced in redactedText
var APaper = [
	{Part0: "rejoice", Part1: "bake", Part2: "clip"}, 
	{Part0: "sail", Part1: "a donation", Part2: "Hopper’s"}, 
	{Part0: "bake", Part1: "radiate", Part2: "smile"}, 
	{Part0: "sneeze", Part1: "charge", Part2: "meddle"}, 
	{Part0: "start", Part1: "sneeze", Part2: "succeed"}, 
	{Part0: "stuff", Part1: "Edsger", Part2: "COBOL"}, 
	{Part0: "meddle", Part1: "fence", Part2: "stuff"}, 
	{Part0: "bake", Part1: "delicate", Part2: "syndicate"}, 
	{Part0: "protect", Part1: "smile", Part2: "start"}, 
	{Part0: "start", Part1: "start", Part2: "hurry"}
];

var BPaper = [
	{Part0: "start", Part1: "protect", Part2: "sail"}, 
	{Part0: "fence", Part1: "fence", Part2: "stuff"}, 
	{Part0: "sail", Part1: "capital", Part2: "clip"}, 
	{Part0: "rejoice", Part1: "hurry", Part2: "mend"}, 
	{Part0: "meddle", Part1: "hurry", Part2: "charge"}, 
	{Part0: "plug", Part1: "rejoice", Part2: "she has"}, 
	{Part0: "sail", Part1: "consider", Part2: "hurry"}, 
	{Part0: "Governor Zuckerberg", Part1: "protect", Part2: "stuff"}, 
	{Part0: "smile", Part1: "romantic", Part2: "bake"}, 
	{Part0: "tug", Part1: "sail", Part2: "radiate"}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above
redactedText = "My dearest " + APaper[5].Part1 + ", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about " + APaper[1].Part2 + " intervention. I suspect that " + BPaper[5].Part2 + " a " + BPaper[8].Part1 + " interest at the " + APaper[5].Part2 + ". I and the " + APaper[7].Part2 + " appreciate your many contributions over the years. However, this is a most " + APaper[7].Part1 + " matter which would require significant " + BPaper[2].Part1 + " for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps " + APaper[1].Part1 + " to my forthcoming campaign would help. Yours sincerely, " + BPaper[7].Part0 + "";
}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text("Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg", 670, 100, 580, 600);
}
