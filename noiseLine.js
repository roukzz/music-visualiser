function NoiseLine(){
	this.name = "Noise Line";

	this.noiseStep = 0.01;

	this.prog = 0;
	this.draw = function(){

		//create an array amplitude values from the fft.
		var spectrum = fourier.analyze();
		 push();
		/*
		translate(x,y)
		Specifies an amount to displace objects within the display window.
		The x parameter specifies left/right translation, the y parameter
		specifies up/down translation.
		*/
		var e = fourier.getEnergy("highMid");
		translate(width/2,height/2)
		beginShape();
		noFill();
		// changing color of the shape
		stroke((e*3)%255,255-((e*3)%255),0);
		// changing the weight of the shape making it more bold
		strokeWeight(3);
		// for loop to draw the line
		for(var i = 0; i < 100; i++){
			var x = map(noise(i*this.noiseStep + this.prog),0,1,-250,250);
			var y = map(noise(i*this.noiseStep + this.prog+1000),0,1,-250,250);
			vertex(x,y);
		}
		endShape();

		// make move the line only when e is greater than 65
		if(e > 65){
			this.prog += 0.05;
		}
		pop();

	};
}
