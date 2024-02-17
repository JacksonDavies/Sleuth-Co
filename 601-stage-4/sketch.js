/*
Officer: 1845677
CaseNum: 601-3-40248493-1845677

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing DarkCyan stroke vertexes at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Chocolate fill rectangles centered over each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings. If she was within less than 95 pixels of any of the crimes within no more than 1 days of their occurrence then the details should be pushed to the list of possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- if()
- <
- &&
- .push()
- dist()
- abs()
- beginShape(), endShape(), vertex()

- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var CaseyFryData = [ 
  { location_x : 518, location_y : 471, recordDate : 12},
  { location_x : 486, location_y : 508, recordDate : 12},
  { location_x : 475, location_y : 566, recordDate : 13},
  { location_x : 376, location_y : 554, recordDate : 13},
  { location_x : 316, location_y : 559, recordDate : 13},
  { location_x : 265, location_y : 614, recordDate : 14},
  { location_x : 253, location_y : 609, recordDate : 14},
  { location_x : 240, location_y : 604, recordDate : 14},
  { location_x : 220, location_y : 597, recordDate : 15},
  { location_x : 178, location_y : 600, recordDate : 15},
  { location_x : 199, location_y : 604, recordDate : 17},
  { location_x : 146, location_y : 582, recordDate : 18},
  { location_x : 115, location_y : 551, recordDate : 20},
  { location_x : 67, location_y : 495, recordDate : 21},
  { location_x : 39, location_y : 493, recordDate : 22},
  { location_x : 68, location_y : 461, recordDate : 24} 
];


//Recent crime records.

var CrimeLogbook = [ 
  { ptX : 438, ptY : 420, recordDate : 11, victim : 'ERMELINDA OORIN'},
  { ptX : 408, ptY : 451, recordDate : 11, victim : 'DEEDEE PHINNEY'},
  { ptX : 408, ptY : 377, recordDate : 13, victim : 'TAMICA MAUBERT'},
  { ptX : 642, ptY : 289, recordDate : 16, victim : 'MALINDA GOODBURY'},
  { ptX : 623, ptY : 279, recordDate : 16, victim : 'JESUS FORSLIN'},
  { ptX : 95, ptY : 488, recordDate : 17, victim : 'BRAD SILVEIRA'},
  { ptX : 75, ptY : 522, recordDate : 18, victim : 'KITTY THAXTER'},
  { ptX : 269, ptY : 597, recordDate : 26, victim : 'LINETTE MOHWAWK'},
  { ptX : 389, ptY : 554, recordDate : 28, victim : 'JESSIA PORTOS'},
  { ptX : 484, ptY : 549, recordDate : 2, victim : 'TU DAVISWOOD'},
  { ptX : 496, ptY : 484, recordDate : 9, victim : 'LESLEY MONKSFORD'},
  { ptX : 546, ptY : 463, recordDate : 14, victim : 'RANDEE CROME'},
  { ptX : 538, ptY : 359, recordDate : 12, victim : 'JENIFFER DEAUVILLE'},
  { ptX : 702, ptY : 412, recordDate : 17, victim : 'SUMMER CASIMERE'},
  { ptX : 817, ptY : 474, recordDate : 18, victim : 'LARRAINE PEGORD'} 
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


 // Draw sightings
stroke(0, 139, 139); // DarkCyan
beginShape();
for (let i = 0; i < CaseyFryData.length; i++) {
  vertex(CaseyFryData[i].location_x, CaseyFryData[i].location_y); 
}
endShape();
  // Draw crimes
  noStroke();
  fill(210, 105, 30); // Chocolate
  for(let i = 0; i < CrimeLogbook.length; i++) {
    rect(CrimeLogbook[i].ptX, CrimeLogbook[i].ptY, 5, 5); 
  }

  // Check for matches
  for(let i = 0; i < CaseyFryData.length; i++) {
    for(let j = 0; j < CrimeLogbook.length; j++) {
      let suspect_x = CaseyFryData[i].location_x;
      let suspect_y = CaseyFryData[i].location_y;  
      let crime_x = CrimeLogbook[j].ptX;
      let crime_y = CrimeLogbook[j].ptY;
      let crimeDate = CrimeLogbook[j].recordDate;
      let suspectDate = CaseyFryData[i].recordDate;
      let dists = dist(suspect_x, suspect_y, crime_x, crime_y);

      if(dists < 95 && abs(crimeDate - suspectDate) <= 1) {
        let name = CrimeLogbook[j].victim;
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
