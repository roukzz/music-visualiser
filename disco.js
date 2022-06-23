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

		angleMode(DEGREES)
		push();
		//create an array amplitude values from the fft.
		var spectrum = fourier.analyze();
		//iterator for selecting frequency bin.
		var currentBin = 0;


		var randomNumber = Math.floor(Math.random() * (3 + 1));

		var e = fourier.getEnergy(this.frequencyBins[randomNumber]);

		stroke(255-e,e,count%255);
		strokeWeight(3);
		noFill()

		translate(width/2, height/2)
		var w = fourier.waveform();
		this.semiCircle (1,w);
		this.semiCircle(-1,w);

		count ++;
		pop();
	};



	this.semiCircle = function (direction,wave){

		beginShape()
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
