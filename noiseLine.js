function Spectrum(){
	this.name = "Noise Line";

	this.noiseStep = 0.01;

	this.prog = 0;


	// this.frequencyBins = ["bass", "lowMid", "highMid", "treble"];
	this.draw = function(){

		//create an array amplitude values from the fft.
		var spectrum = fourier.analyze();
		 push();
		// var spectrum = fourier.analyze();
		// noStroke();
		//
		// // fill(0,255,0)
		//
		// // for (var i = 0; i< spectrum.length; i++){
		// // 	console.log("height: "+ height);
		// // 	console.log("widht: " + width);
		// // 	var x = map(i, 0, spectrum.length, 0, width);
		// //     var h = -height + map(spectrum[i], 0, 255, height, 0);
		// // 		console.log('coordinate X: '+ x);
		// // 		console.log('rectangle height : '+ h);
		// // 		fill(spectrum[i],255-spectrum[i],0)
		// //     rect(x, height, width / spectrum.length, h );
  	// // 	}
		//
		// for (var i = 0; i< spectrum.length; i++){
		// 	console.log("height: "+ height);
		// 	console.log("widht: " + width);
		// 	var y = map(i, 0, spectrum.length, 0, height);
		// 		var w = (width -  map(spectrum[i], 0, 255, width, 0));
		// 		console.log('coordinate y: '+ y);
		// 		console.log('rectangle height : '+ w);
		// 		fill(spectrum[i],255-spectrum[i],0)
		// 		rect(0, y, w,height / spectrum.length  );
		// 	}
		//
		// pop();



		/*
		translate(x,y)
		Specifies an amount to displace objects within the display window.
		The x parameter specifies left/right translation, the y parameter
		specifies up/down translation.
		*/
		var e = fourier.getEnergy("bass");
		translate(width/2,height/2)
		beginShape();
		noFill();

		stroke(0,255,0);
		strokeWeight(3);
		//iterator for selecting frequency bin.
		var currentBin = 0;


		for(var i = 0; i < 100; i++){


			var x = map(noise(i*this.noiseStep + this.prog),0,1,-250,250);

			var y = map(noise(i*this.noiseStep + this.prog+1000),0,1,-250,250);


			vertex(x,y);

		}

				// console.log(mouseX);
		endShape();


		if(e > 165){
			this.prog += 0.05;
		}


		pop();

	};
}
