/*

Officer: 1845677
CaseNum: 202-3-79747957-1845677

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Saddle Brown filled text with a Dark Blue outline in Ballpointprint font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(597,395);
	textSize(26);
}

function draw()
{
	background(255);

fill(100,149,237);
stroke(255,0,0);
textFont(Diggity);
//	text("more", 386,167);
fill(255,215,0);
stroke(154,205,50);
textFont(Melissa);
//	text("?", 56,136);
fill(233,150,122);
stroke(218,165,32);
textFont(RonsFont);
//	text("not", 193,167);
fill(255,69,0);
stroke(160,82,45);
textFont(Melissa);
//	text("money", 7,136);
fill(255,215,0);
stroke(0,128,0);
textFont(Diggity);
//	text("much", 333,167);
stroke(128,0,128);
textFont(Melissa);
//	text("Perhaps", 212,78);
fill(184,134,11);
stroke(0,191,255);
textFont(Ballpointprint);
//	text("I", 279,136);
push();
fill(30,144,255);
stroke(0,250,154);
//	text("our", 208,109);
pop();
stroke(124,252,0);
//	text("darling", 45,26);
fill(176,224,230);
stroke(0,100,0);
textFont(RonsFont);
//	text("I", 438,167);
fill(233,150,122);
stroke(255,165,0);
textFont(Diggity);
//	text("Forever", 6,247);
fill(255,0,0);
stroke(153,50,204);
//	text("delays.", 72,167);
fill(0,255,127);
stroke(0,255,255);
textFont(RonsFont);
//	text("no", 348,136);
fill(240,230,140);
stroke(255,255,0);
//	text("?", 194,78);
fill(218,165,32);
stroke(153,50,204);
//	text("Is", 174,109);
fill(0,0,128);
stroke(127,255,0);
textFont(Melissa);
//	text("are", 262,195);
push();
fill(165,42,42);
stroke(220,20,60);
textFont(RonsFont);
//	text("If", 70,136);
pop();
fill(178,34,34);
textFont(RonsFont);
//	text("so,", 105,136);
fill(176,224,230);
stroke(0,100,0);
textFont(Diggity);
//	text("should", 304,78);
fill(0,139,139);
stroke(0,128,0);
//	text("so", 291,195);
stroke(128,0,128);
textFont(RonsFont);
//	text("can", 461,167);
push();
fill(178,34,34);
stroke(139,0,139);
textFont(Diggity);
//	text("can", 310,136);
pop();
fill(127,255,0);
textFont(Diggity);
//	text("Bob,", 119,26);
fill(128,0,128);
stroke(160,82,45);
//	text("these", 509,136);
stroke(218,165,32);
//	text("you", 43,78);
fill(255,215,0);
stroke(220,20,60);
textFont(Melissa);
//	text("and", 539,78);
fill(135,206,235);
stroke(255,140,0);
textFont(Ballpointprint);
//	text("of", 528,109);
stroke(50,205,50);
textFont(Diggity);
//	text("h.", 256,136);
fill(238,130,238);
stroke(25,25,112);
textFont(RonsFont);
//	text("My", 6,26);
fill(0,100,0);
stroke(0,255,127);
textFont(Melissa);
//	text("short", 482,109);
	fill(139,69,19);
	stroke(0,0,139);
	textFont(Ballpointprint);
	text("avoid", 82,78);
	text("take", 505,167);
fill(107,142,35);
stroke(0,139,139);
textFont(Melissa);
//	text("we", 276,78);
stroke(255,215,0);
//	text("Are", 409,109);
push();
	fill(139,69,19);
	stroke(0,0,139);
	textFont(Ballpointprint);
	text("guard", 319,195);
	text("safe", 332,109);
	text("the", 124,195);
pop();
fill(240,128,128);
stroke(0,250,154);
textFont(RonsFont);
//	text("Daisy", 6,299);
fill(123,104,238);
stroke(165,42,42);
textFont(Ballpointprint);
//	text("sort", 17,109);
fill(255,215,0);
stroke(0,255,127);
textFont(Diggity);
//	text("silence.", 169,195);
push();
fill(233,150,122);
stroke(255,0,0);
textFont(Melissa);
//	text("can", 154,136);
pop();
fill(233,150,122);
textFont(Melissa);
//	text("secrets,", 56,195);
fill(219,112,147);
stroke(0,0,128);
//	text("break", 495,78);
fill(238,130,238);
stroke(0,191,255);
textFont(Diggity);
//	text("ignore", 452,136);
push();
fill(138,43,226);
stroke(0,128,128);
textFont(Ballpointprint);
//	text("you", 441,109);
pop();
fill(218,165,32);
stroke(0,250,154);
textFont(Melissa);
//	text("me", 168,78);
fill(0,255,127);
stroke(160,82,45);
textFont(Diggity);
//	text("send", 183,136);
fill(176,224,230);
stroke(139,0,139);
textFont(RonsFont);
//	text("ger", 408,136);
push();
fill(34,139,34);
stroke(153,50,204);
textFont(Diggity);
//	text("cas", 229,136);
pop();
fill(0,255,127);
stroke(0,250,154);
textFont(Ballpointprint);
//	text("I'm", 134,167);
fill(173,216,230);
stroke(154,205,50);
textFont(Melissa);
//	text("yours,", 81,247);
fill(220,20,60);
stroke(0,0,139);
textFont(Diggity);
//	text("all", 108,109);
fill(255,255,0);
stroke(124,252,0);
textFont(RonsFont);
//	text("lon", 380,136);
fill(0,0,139);
stroke(25,25,112);
textFont(Melissa);
//	text("I", 140,136);
fill(0,100,0);
stroke(75,0,130);
//	text("sometimes.", 408,195);
fill(240,230,140);
stroke(210,105,30);
textFont(RonsFont);
//	text("a", 475,78);
fill(255,165,0);
stroke(25,25,112);
textFont(Diggity);
//	text("The", 15,195);
fill(222,184,135);
stroke(154,205,50);
//	text("go", 363,78);
fill(173,255,47);
stroke(0,0,128);
textFont(Ballpointprint);
//	text("sure", 236,167);
fill(0,0,205);
stroke(218,165,32);
textFont(Melissa);
//	text("continual", 8,167);
push();
fill(173,255,47);
stroke(199,21,133);
textFont(RonsFont);
//	text("this", 61,109);
pop();
fill(147,112,219);
stroke(25,25,112);
//	text("Are", 11,78);
push();
fill(219,112,147);
stroke(0,0,205);
textFont(Ballpointprint);
//	text("out.", 133,109);
pop();
fill(210,105,30);
stroke(0,100,0);
textFont(Diggity);
//	text("?", 389,109);
fill(25,25,112);
stroke(128,0,128);
textFont(Melissa);
//	text("You", 231,195);
stroke(160,82,45);
textFont(Ballpointprint);
//	text("away", 391,78);
fill(0,128,0);
stroke(0,255,127);
textFont(Melissa);
//	text("relationship", 245,109);
fill(186,85,211);
stroke(128,0,0);
textFont(Ballpointprint);
//	text("ed", 368,195);
fill(106,90,205);
stroke(0,250,154);
//	text("ing", 127,78);
fill(173,216,230);
stroke(255,165,0);
textFont(RonsFont);
//	text("how", 286,167);
fill(165,42,42);
stroke(128,0,128);
//	text("?", 558,167);
fill(218,165,32);
stroke(75,0,130);
//	text("x", 65,299);
fill(255,127,80);
stroke(128,128,0);
textFont(Melissa);
//	text("for", 446,78);



}
