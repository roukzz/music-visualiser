//constructor function to draw a
function Disco() {
	//name of the visualisation
	this.name = "Disco";

	//frquencies used by the energyfunction to retrieve a value
	//for each plot.
	this.frequencyBins = ["bass", "lowMid", "highMid", "treble"];

	var count = 0;
	// draw the plots to the screen
	this.draw = function() {

		// change angle mode to degree so that i can use sin and cos with degree arguments
		angleMode(DEGREES)
		push();
		//create an array amplitude values from the fft.
		var spectrum = fourier.analyze();

		var randomNumber = Math.floor(Math.random() * (3 + 1));

		// get energy from a random frequency type
		var e = fourier.getEnergy(this.frequencyBins[randomNumber]);

		// change color depending on the energy
		stroke(255-e,e,count%255);
		strokeWeight(3);
		noFill()

		// frame
		translate(width/2, height/2)
		var w = fourier.waveform();
		this.semiCircle (1,w);
		this.semiCircle(-1,w);

		count ++;
		pop();
	};



	// draw  a semi circle, if direction is 1 then it will draw the right half of a semiCircle
	// if direction == -1 then left half of the circle will be drawn
	this.semiCircle = function (direction,wave){

		beginShape()
		// for loop to draw half circle
		for (var i = 0; i <= 180; i++){

			var index = floor(map(i,0,180,0,wave.length-1))
			var radius = map(wave[index],-1,1,150,350)

			var x = radius * direction*sin(i)
			var y = radius * cos(i)

			vertex(x,y)


		}
		endShape()

	}




}
