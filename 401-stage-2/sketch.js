/*

Officer: 1845677
CaseNum: 401-1-13291118-1845677

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos with his foul toxin. The chaos is spreading. People are dropping like flies and burrito sales have fallen through the floor. To make matters worse it seems Norbert has cottoned on to our methods and has upped the complexity of his poison. You’ll find the antidote harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to do the following:

	- When sarin dips below 0.66 or methanol dips below 0.47, decrement aspirin by 0.04
	- When strychnine goes above 0.72, raise aspirin by 0.05
	- When sarin goes above 0.56, try decreasing betaBlocker by 0.02
	- When methanol goes above 0.37 and strychnine dips below 0.74, increment betaBlocker by 0.04
	- If amanitaMushrooms dips below 0.75 or sarin dips below 0.57, try decreasing paracetamol by 0.05
	- When strychnine goes above 0.61 and methanol goes above 0.38, increase paracetamol by 0.02
	- When strychnine goes above 0.38 and sarin dips below 0.49, try decreasing opioids by 0.03
	- When amanitaMushrooms goes above 0.36 and methanol dips below 0.29, try increasing opioids by 0.05


Your conditional statements should consider the following poisons:

	- strychnine
	- methanol
	- amanitaMushrooms
	- sarin


Your conditional statements should modify the following antidotes:

	- aspirin
	- betaBlocker
	- paracetamol
	- opioids


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var strychnine;
var methanol;
var amanitaMushrooms;
var sarin;


//Declare the antidote variables
var aspirin;
var betaBlocker;
var paracetamol;
var opioids;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	strychnine = 0.5;
	methanol = 0.5;
	amanitaMushrooms = 0.5;
	sarin = 0.5;
	aspirin = 0.5;
	betaBlocker = 0.5;
	paracetamol = 0.5;
	opioids = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
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

// Inside draw()

if(sarin < 0.66 || methanol < 0.47){
  aspirin -= 0.04;
}

if(strychnine > 0.72){
  aspirin += 0.05;
}

if(sarin > 0.56){
  betaBlocker -= 0.02; 
}

if(methanol > 0.37 && strychnine < 0.74){
  betaBlocker += 0.04;
}

if(amanitaMushrooms < 0.75 || sarin < 0.57){
  paracetamol -= 0.05;
}

if(strychnine > 0.61 && methanol > 0.38){
  paracetamol += 0.02;
}

if(strychnine > 0.38 && sarin < 0.49){
  opioids -= 0.03;
}

if(amanitaMushrooms > 0.36 && methanol < 0.29){
  opioids += 0.05;
}


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	strychnine = nextValue(graphs[0],strychnine);
	methanol = nextValue(graphs[1],methanol);
	amanitaMushrooms = nextValue(graphs[2],amanitaMushrooms);
	sarin = nextValue(graphs[3],sarin);


	aspirin = constrain(aspirin, 0, 1);
	betaBlocker = constrain(betaBlocker, 0, 1);
	paracetamol = constrain(paracetamol, 0, 1);
	opioids = constrain(opioids, 0, 1);


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
	text('strychnine: ' + nf(strychnine,1,2), 20,20);
	fill(colors[1]);
	text('methanol: ' + nf(methanol,1,2), 20,40);
	fill(colors[2]);
	text('amanitaMushrooms: ' + nf(amanitaMushrooms,1,2), 20,60);
	fill(colors[3]);
	text('sarin: ' + nf(sarin,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(aspirin,50,'aspirin');
	drawBar(betaBlocker,200,'betaBlocker');
	drawBar(paracetamol,350,'paracetamol');
	drawBar(opioids,500,'opioids');


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
