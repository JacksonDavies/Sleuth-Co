/*

Officer: 1845677
CaseNum: 502-3-40068943-1845677

Case 502 - A donation - stage 4

This final document will seal the deal. C’mon kid, let’s send these crooks down.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.


*/


var redactedText;

// data structures to be referenced in redactedText
var A_Record = [
{
	Element_0: ["tug", "meddle", "donation", "fence"], 
	Element_1: ["play", "stuff", "stuff", "syndicate"], 
	Element_2: ["consider", "fence", "development", "smile"]
},
{
	Element_0: ["sail", "Governor Zuckerberg", "start", "sail"], 
	Element_1: ["consider", "sneeze", "start", "mend"], 
	Element_2: ["you", "sail", "sneeze", "meddle"]
},
{
	Element_0: ["clip", "bake", "fence", "sail"], 
	Element_1: ["play", "meddle", "start", "COBOL"], 
	Element_2: ["$200,000", "rejoice", "succeed", "clip"]
},
{
	Element_0: ["plug", "tug", "stuff", "play"], 
	Element_1: ["bake", "sneeze", "mend", "meddle"], 
	Element_2: ["succeed", "succeed", "succeed", "stuff"]
},
{
	Element_0: ["hurry", "tug", "start", "plug"], 
	Element_1: ["play", "protect", "play", "radiate"], 
	Element_2: ["tug", "succeed", "stuff", "ALGOL"]
}];

var B_Record = [
{
	Element_0: ["bake", "bake", "hurry", "plug"], 
	Element_1: ["Edsger", "consider", "sail", "smile"], 
	Element_2: ["clip", "consider", "consider", "radiate"]
},
{
	Element_0: ["radiate", "hurry", "clip", "radiate"], 
	Element_1: ["hurry", "radiate", "rejoice", "mend"], 
	Element_2: ["rejoice", "fence", "charge", "ALGOL fish wholesalers"]
},
{
	Element_0: ["clip", "stuff", "tug", "mend"], 
	Element_1: ["smile", "sneeze", "mend", "rejoice"], 
	Element_2: ["rejoice", "consider", "radiate", "clip"]
},
{
	Element_0: ["fence", "smile", "smile", "hurry"], 
	Element_1: ["rejoice", "clip", "protect", "mend"], 
	Element_2: ["fence", "tug", "meddle", "radiate"]
},
{
	Element_0: ["clip", "plug", "clip", "radiate"], 
	Element_1: ["bake", "start", "radiate", "smile"], 
	Element_2: ["play", "fence", "consider", "fence"]
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "My dearest "+B_Record[0].Element_1[0]+", I have just received your very generous "+A_Record[0].Element_0[2]+" of "+A_Record[2].Element_2[0]+". Thank you. This will be invaluable to our campaign. "+A_Record[4].Element_2[3]+" is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of "+A_Record[1].Element_2[0]+" or "+B_Record[1].Element_2[3]+" to the "+A_Record[0].Element_1[3]+". Your new "+A_Record[0].Element_2[2]+" at the "+A_Record[2].Element_1[3]+" can now proceed without impediment. Yours sincerely,  "+A_Record[1].Element_0[1]+"";

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
  text("Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg", 670, 100, 580, 600);
}
