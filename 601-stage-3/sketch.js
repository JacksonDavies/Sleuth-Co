/*
Officer: 1845677
CaseNum: 601-2-79239844-1845677

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing DarkOrange stroke vertexes at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Turquoise stroke triangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 61 pixels of any of the crimes then the details should be pushed to possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn. Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- <
- .push()
- beginShape(), endShape(), vertex()

- triangle() NB. Draw each triangle with the point roughly at its center.

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var killer_logbook_pointX = [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555];
var killer_logbook_pointY = [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474];


//Recent crime records.

var crimescene_record = [ 
  { Coordinate_X : 409, Coordinate_Y : 446, Murdered_Name : 'JENIFFER DEAUVILLE'},
  { Coordinate_X : 443, Coordinate_Y : 419, Murdered_Name : 'JACQUELINE DURANTS'},
  { Coordinate_X : 465, Coordinate_Y : 548, Murdered_Name : 'TAMICA MAUBERT'},
  { Coordinate_X : 709, Coordinate_Y : 552, Murdered_Name : 'JESSIA PORTOS'},
  { Coordinate_X : 695, Coordinate_Y : 421, Murdered_Name : 'MAJORIE JENI'},
  { Coordinate_X : 652, Coordinate_Y : 268, Murdered_Name : 'HANG NIEMELA'},
  { Coordinate_X : 641, Coordinate_Y : 306, Murdered_Name : 'LIANNE COURTWOOD'},
  { Coordinate_X : 119, Coordinate_Y : 344, Murdered_Name : 'TU DAVISWOOD'},
  { Coordinate_X : 114, Coordinate_Y : 359, Murdered_Name : 'NELSON TINTLE'},
  { Coordinate_X : 90, Coordinate_Y : 490, Murdered_Name : 'LESLEY MONKSFORD'},
  { Coordinate_X : 76, Coordinate_Y : 516, Murdered_Name : 'LAVERNE JACQUELIN'},
  { Coordinate_X : 615, Coordinate_Y : 741, Murdered_Name : 'LARRAINE PEGORD'},
  { Coordinate_X : 349, Coordinate_Y : 796, Murdered_Name : 'BRAD SILVEIRA'},
  { Coordinate_X : 456, Coordinate_Y : 770, Murdered_Name : 'NICOLE ASHELY'} 
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


  stroke(255, 140, 0); // DarkOrange
  
  beginShape();
  for(let i = 0; i < killer_logbook_pointX.length; i++) {
    vertex(killer_logbook_pointX[i], killer_logbook_pointY[i]);
  }
  endShape();

  // Draw crimes
stroke(64, 224, 208); // Turquoise
for(let i = 0; i < crimescene_record.length; i++) {

  let x = crimescene_record[i].Coordinate_X;
  let y = crimescene_record[i].Coordinate_Y;
  
  triangle(x, y-5, x-5, y+5, x+5, y+5); 
}

  // Check for matches
  for(let i = 0; i < killer_logbook_pointX.length; i++) {
    for(let j = 0; j < crimescene_record.length; j++) {
      let suspect_x = killer_logbook_pointX[i];
      let suspect_y = killer_logbook_pointY[i];
      let crime_x = crimescene_record[j].Coordinate_X;
      let crime_y = crimescene_record[j].Coordinate_Y;
      let distance = dist(suspect_x, suspect_y, crime_x, crime_y);
      if(distance < 61) {
        let name = crimescene_record[j].Murdered_Name;
        possibleMatches.push({
          suspect_x, 
          suspect_y,
          crime_x,
          crime_y,
          victimName: name
        });
      }
    }
  }


}

	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime_x, possibleMatches[i].crime_y, possibleMatches[i].suspect_x, possibleMatches[i].suspect_y);

		noStroke();
		fill(127);
		text(possibleMatches[i].victimName, possibleMatches[i].crime_x + 15, possibleMatches[i].crime_y + 15);
	}


//We are not using the draw function this time
