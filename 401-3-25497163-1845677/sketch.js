/*

Officer: 1845677
CaseNum: 401-3-25497163-1845677

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final stand he has set up his own cupcake shop. The laced cupcakes look delicious but they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- If hemlock dips below 0.75, or on the other hand, NerveGas goes above 0.66 and AmanitaMushrooms dips below 0.66, try decreasing calcium_chloride by 0.01
	- If sarin goes above 0.27 or cyanide goes above 0.49, whilst at the same time, Snake_Venom goes above 0.44 and insecticide goes above 0.35, try increasing calcium_chloride by 0.05
	- If AmanitaMushrooms goes above 0.29 or Snake_Venom dips below 0.26, or on the other hand, hemlock goes above 0.42 and sarin goes above 0.55, try decreasing CalciumGluconate by 0.04
	- If either insecticide dips below 0.31, arsenic goes above 0.3, NerveGas dips below 0.71, or perhaps cyanide dips below 0.69, increase CalciumGluconate by 0.05
	- If either NerveGas goes above 0.38, sarin dips below 0.53, arsenic dips below 0.61, or perhaps cyanide goes above 0.33, try decreasing antibodies by 0.05
	- When insecticide dips below 0.29, hemlock goes above 0.58, and also AmanitaMushrooms goes above 0.52, increase antibodies by 0.01
	- When Snake_Venom dips below 0.41 or hemlock goes above 0.27, whilst at the same time, insecticide dips below 0.67, try decreasing aspirin by 0.01
	- When cyanide dips below 0.63 or AmanitaMushrooms goes above 0.34, whilst at the same time, NerveGas goes above 0.53, increment aspirin by 0.02
	- If either NerveGas goes above 0.41, AmanitaMushrooms dips below 0.57, or perhaps Snake_Venom goes above 0.35, reduce plasma by 0.01
	- If arsenic goes above 0.66 or hemlock goes above 0.61, whilst at the same time, insecticide goes above 0.61 and sarin dips below 0.5, try increasing plasma by 0.03


Your conditional statements should consider the following poisons:

	- NerveGas
	- arsenic
	- insecticide
	- sarin
	- hemlock
	- Snake_Venom
	- AmanitaMushrooms
	- cyanide


Your conditional statements should modify the following antidotes:

	- calcium_chloride
	- CalciumGluconate
	- antibodies
	- aspirin
	- plasma


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
var NerveGas;
var arsenic;
var insecticide;
var sarin;
var hemlock;
var Snake_Venom;
var AmanitaMushrooms;
var cyanide;


//Declare the antidote variables
var calcium_chloride;
var CalciumGluconate;
var antibodies;
var aspirin;
var plasma;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	NerveGas = 0.5;
	arsenic = 0.5;
	insecticide = 0.5;
	sarin = 0.5;
	hemlock = 0.5;
	Snake_Venom = 0.5;
	AmanitaMushrooms = 0.5;
	cyanide = 0.5;
	calcium_chloride = 0.5;
	CalciumGluconate = 0.5;
	antibodies = 0.5;
	aspirin = 0.5;
	plasma = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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




	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	NerveGas = nextValue(graphs[0],NerveGas);
	arsenic = nextValue(graphs[1],arsenic);
	insecticide = nextValue(graphs[2],insecticide);
	sarin = nextValue(graphs[3],sarin);
	hemlock = nextValue(graphs[4],hemlock);
	Snake_Venom = nextValue(graphs[5],Snake_Venom);
	AmanitaMushrooms = nextValue(graphs[6],AmanitaMushrooms);
	cyanide = nextValue(graphs[7],cyanide);


	calcium_chloride = constrain(calcium_chloride, 0, 1);
	CalciumGluconate = constrain(CalciumGluconate, 0, 1);
	antibodies = constrain(antibodies, 0, 1);
	aspirin = constrain(aspirin, 0, 1);
	plasma = constrain(plasma, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('NerveGas: ' + nf(NerveGas,1,2), 20,20);
	fill(colors[1]);
	text('arsenic: ' + nf(arsenic,1,2), 20,40);
	fill(colors[2]);
	text('insecticide: ' + nf(insecticide,1,2), 20,60);
	fill(colors[3]);
	text('sarin: ' + nf(sarin,1,2), 20,80);
	fill(colors[4]);
	text('hemlock: ' + nf(hemlock,1,2), 20,100);
	fill(colors[5]);
	text('Snake_Venom: ' + nf(Snake_Venom,1,2), 20,120);
	fill(colors[6]);
	text('AmanitaMushrooms: ' + nf(AmanitaMushrooms,1,2), 20,140);
	fill(colors[7]);
	text('cyanide: ' + nf(cyanide,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(calcium_chloride,50,'calcium_chloride');
	drawBar(CalciumGluconate,200,'CalciumGluconate');
	drawBar(antibodies,350,'antibodies');
	drawBar(aspirin,500,'aspirin');
	drawBar(plasma,650,'plasma');


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
