//draw the waveform to the screen
function Ridge(){
	//vis name
	this.name = "Rigde";

	// array of lines
	var output = [];

	var startX = width/5;

	var endY = height/5;
	var startY = height - endY;
	var speed = 0.7
	var spectrumWidth = (width/5)*3;
	var count = 0;


		//frquencies used by the energyfunction to retrieve a value
		//for each plot.
		this.frequencyBins = ["bass", "lowMid", "highMid", "treble"];

	//draw the wave form to the screen
	this.draw = function(){
		push();

		//create an array amplitude values from the fft.
		var spectrum = fourier.analyze();



		var randomNumber = Math.floor(Math.random() * (3 + 1));

		var e = fourier.getEnergy(this.frequencyBins[randomNumber]);

		stroke(255-e,e,count%255);

		2
		strokeWeight(2)

		noFill();
		;
		//
		if(frameCount % 15 == 0){
			// add new line to our array
		this.addWave();
		}
		for (var i = 0 ; i< output.length; i++){
			var line = output[i]
			beginShape();
			for (var j = 0 ; j < line.length; j++ ){
				line[j].y -=speed;
				vertex(line[j].x,line[j].y)
				
			}
			endShape()
			if (line[0].y < endY){
				output.splice(i,1);
			}

		}

			count ++;
		pop();
	};


this.addWave=function(){

		//calculate the waveform from the fft.
		var wave = fourier.waveform();
		var output_wave = [];
		var smallScale = 3;
		var bigScale = 40;

		for(var i = 0 ; i < wave.length; i++){
			if(i %10 == 0){
				var x = map(i,0,1024,startX,startX+spectrumWidth);
				if(i < 1024*0.25 || i > 1024 * 0.75){
					var y = map(wave[i],-1,1,-smallScale,smallScale)
					output_wave.push({
						x:x,
						y:startY+y
					});
				}
				else{
					var y = map(wave[i],-1,1,-bigScale,bigScale);

					output_wave.push({
						x:x,
						y:startY+y
					})
				}
			}
		}
		output.push(output_wave)

}

}
