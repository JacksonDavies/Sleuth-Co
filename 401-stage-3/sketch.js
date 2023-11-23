/*

Officer: 1845677
CaseNum: 401-2-84708614-1845677

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- If amanitaMushrooms goes above 0.33, or on the other hand, cyanide goes above 0.63 and chlorine dips below 0.65, reduce methylene by 0.04
	- When polonium dips below 0.74 and lead dips below 0.39, increment methylene by 0.05
	- When cyanide goes above 0.28 and warfarin dips below 0.57, or on the other hand, amanitaMushrooms dips below 0.65, try decreasing antivenom by 0.02
	- If lead dips below 0.25 and polonium dips below 0.48, increment antivenom by 0.03
	- When warfarin dips below 0.38 and lead dips below 0.68, or on the other hand, cyanide dips below 0.69, try decreasing antitoxin by 0.03
	- When polonium goes above 0.52 and chlorine goes above 0.7, or on the other hand, amanitaMushrooms dips below 0.75, increase antitoxin by 0.03
	- If polonium goes above 0.74 and lead dips below 0.34, decrement ethanol by 0.03
	- If chlorine goes above 0.72 or amanitaMushrooms goes above 0.47, increase ethanol by 0.04


Your conditional statements should consider the following poisons:

	- chlorine
	- lead
	- cyanide
	- warfarin
	- amanitaMushrooms
	- polonium


Your conditional statements should modify the following antidotes:

	- methylene
	- antivenom
	- antitoxin
	- ethanol


- There are many ways to complete this task but you should only use the following commands:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var chlorine;
var lead;
var cyanide;
var warfarin;
var amanitaMushrooms;
var polonium;


//Declare the antidote variables
var methylene;
var antivenom;
var antitoxin;
var ethanol;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	chlorine = 0.5;
	lead = 0.5;
	cyanide = 0.5;
	warfarin = 0.5;
	amanitaMushrooms = 0.5;
	polonium = 0.5;
	methylene = 0.5;
	antivenom = 0.5;
	antitoxin = 0.5;
	ethanol = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...

// If statement 1
if(amanitaMushrooms > 0.33 || (cyanide > 0.63 && chlorine < 0.65)) {
  methylene -= 0.04;
}

// If statement 2
if(polonium < 0.74 && lead < 0.39) {
  methylene += 0.05;
}

// If statement 3
if(cyanide > 0.28 && warfarin < 0.57 || amanitaMushrooms < 0.65) {
  antivenom -= 0.02;
}

// If statement 4  
if(lead < 0.25 && polonium < 0.48) {
  antivenom += 0.03;
}

// If statement 5
if(warfarin < 0.38 && lead < 0.68 || cyanide < 0.69) {
  antitoxin -= 0.03;
}

// If statement 6
if(polonium > 0.52 && chlorine > 0.7 || amanitaMushrooms < 0.75) {
  antitoxin += 0.03;  
}

// If statement 7
if(polonium > 0.74 && lead < 0.34) {
  ethanol -= 0.03;
}

// If statement 8
if(chlorine > 0.72 || amanitaMushrooms > 0.47) {
  ethanol += 0.04;
}


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	chlorine = nextValue(graphs[0],chlorine);
	lead = nextValue(graphs[1],lead);
	cyanide = nextValue(graphs[2],cyanide);
	warfarin = nextValue(graphs[3],warfarin);
	amanitaMushrooms = nextValue(graphs[4],amanitaMushrooms);
	polonium = nextValue(graphs[5],polonium);


	methylene = constrain(methylene, 0, 1);
	antivenom = constrain(antivenom, 0, 1);
	antitoxin = constrain(antitoxin, 0, 1);
	ethanol = constrain(ethanol, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('chlorine: ' + nf(chlorine,1,2), 20,20);
	fill(colors[1]);
	text('lead: ' + nf(lead,1,2), 20,40);
	fill(colors[2]);
	text('cyanide: ' + nf(cyanide,1,2), 20,60);
	fill(colors[3]);
	text('warfarin: ' + nf(warfarin,1,2), 20,80);
	fill(colors[4]);
	text('amanitaMushrooms: ' + nf(amanitaMushrooms,1,2), 20,100);
	fill(colors[5]);
	text('polonium: ' + nf(polonium,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(methylene,50,'methylene');
	drawBar(antivenom,200,'antivenom');
	drawBar(antitoxin,350,'antitoxin');
	drawBar(ethanol,500,'ethanol');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
