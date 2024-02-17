/*
Officer: 1845677
CaseNum: 601-1-94234090-1845677

Case 601 - Cross Reference - stage 2

Fry is still on the loose. We think she’s resorted to stealing to get by.
Hopefully we can track her down by cross-referencing sightings and recent thefts in the area.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing GreenYellow stroke vertexes at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, PaleVioletRed stroke triangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- beginShape(), endShape(), vertex()

- triangle() NB. Draw each triangle with the point roughly at its center.

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

//Sightings of Casey Fry.

var suspect_data = {
	PointX: [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555],
	PointY: [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474],
};

//Recent crime records.

var theft_recorded = [ 
  { CoordX : 403, CoordY : 401},
  { CoordX : 402, CoordY : 360},
  { CoordX : 427, CoordY : 403},
  { CoordX : 646, CoordY : 284},
  { CoordX : 639, CoordY : 264},
  { CoordX : 830, CoordY : 434},
  { CoordX : 809, CoordY : 443},
  { CoordX : 844, CoordY : 496},
  { CoordX : 802, CoordY : 350},
  { CoordX : 683, CoordY : 413},
  { CoordX : 552, CoordY : 464},
  { CoordX : 629, CoordY : 498},
  { CoordX : 712, CoordY : 562},
  { CoordX : 783, CoordY : 603},
  { CoordX : 415, CoordY : 225},
  { CoordX : 561, CoordY : 282},
  { CoordX : 562, CoordY : 392},
  { CoordX : 751, CoordY : 283},
  { CoordX : 680, CoordY : 359},
  { CoordX : 626, CoordY : 436},
  { CoordX : 701, CoordY : 455},
  { CoordX : 838, CoordY : 565},
  { CoordX : 322, CoordY : 508},
  { CoordX : 468, CoordY : 556},
  { CoordX : 625, CoordY : 737} 
];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
	createCanvas(countyMap.width, countyMap.height);
	noFill();
	noStroke();
	image(countyMap, 0,0);

	//add your code below here
    
    noFill();

	
    beginShape();
stroke(173, 255, 47);
for (var i = 0; i < suspect_data.PointX.length; i++) 
{
	vertex(suspect_data.PointX[i], suspect_data.PointY[i]);
}
endShape();
    
   
    stroke(219,112,147);
	for (var i = 0; i < theft_recorded.length; i++)
{
	triangle(theft_recorded[i].CoordX - 5, theft_recorded[i].CoordY + 5, theft_recorded[i].CoordX, theft_recorded[i].CoordY - 5, theft_recorded[i].CoordX + 5, theft_recorded[i].CoordY + 5);
}
	
    

}

//We are not using the draw function this time
