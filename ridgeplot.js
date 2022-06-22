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

	//draw the wave form to the screen
	this.draw = function(){
		push();



		noFill();
		stroke(255);
		strokeWeight(2);
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


		// for (var i = 0; i < wave.length; i++){
		// 	//for each element of the waveform map it to screen
		// 	//coordinates and make a new vertex at the point.
		// 	var x = map(i, 0, wave.length, 0, width);
		// 	var y = map(wave[i], -1, 1, 0, height);
		//
		// 	vertex(x, y);
		// }

		// endShape();
		pop();
	};


this.addWave=function(){

	// output.push([{x:startX,
	// 							y:startY
	// 						},
	// 					{ x:startX+spectrumWidth,
	// 						y: startY
	// 					}]);

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
