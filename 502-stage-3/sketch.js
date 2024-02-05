/*

Officer: 1845677
CaseNum: 502-2-97949052-1845677

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// arrays to be referenced in redactedText
var censored_A = {
	part_0: [ "clip", "consider", "sneeze"], 
	part_1: [ "start", "tug", "tug"], 
	part_2: [ "protect", "consider", "meddle"], 
	part_3: [ "succeed", "sneeze", "protect"], 
	part_4: [ "clip", "radiate", "rejoice"], 
	part_5: [ "tug", "clip", "tug"], 
	part_6: [ "hit", "mend", "charge"], 
	part_7: [ "sail", "hurry", "syndicate"], 
	part_8: [ "fence", "mend", "a donation"], 
	part_9: [ "ALGOL", "fence", "sail"]
};

var censored_B = {
	part_0: [ "clip", "play", "Governor Zuckerberg"], 
	part_1: [ "sail", "bake", "plug"], 
	part_2: [ "protect", "Edsger", "tug"], 
	part_3: [ "fence", "protect", "protect"], 
	part_4: [ "$200,000", "campaign", "Hopper"], 
	part_5: [ "rejoice", "tug", "mend"], 
	part_6: [ "fence", "charge", "sail"], 
	part_7: [ "fence", "protect", "protect"], 
	part_8: [ "plug", "stuff", "play"], 
	part_9: [ "mend", "stuff", "radiate"]
};

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
  redactedText = "Dear "+censored_B.part_0[2]+", I am sure that something could be worked out in terms of "+censored_A.part_8[2]+" for your "+censored_B.part_4[1]+". How does "+censored_B.part_4[0]+" sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. "+censored_B.part_4[2]+" needs to be out of the picture. She’s caused enough trouble. Get the "+ censored_A.part_7[2]+" to organise the "+ censored_A.part_6[0]+" but I’d prefer it you don’t mention me or "+ censored_A.part_9[0]+". I owe them enough favours already. Your old friend, "+ censored_B.part_2[1]+"";

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
  text("Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger", 670, 100, 580, 600);
}
