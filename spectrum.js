function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		push();
		var spectrum = fourier.analyze();
		noStroke();

		// fill(0,255,0)

		// for (var i = 0; i< spectrum.length; i++){
		// 	console.log("height: "+ height);
		// 	console.log("widht: " + width);
		// 	var x = map(i, 0, spectrum.length, 0, width);
		//     var h = -height + map(spectrum[i], 0, 255, height, 0);
		// 		console.log('coordinate X: '+ x);
		// 		console.log('rectangle height : '+ h);
		// 		fill(spectrum[i],255-spectrum[i],0)
		//     rect(x, height, width / spectrum.length, h );
  	// 	}

		for (var i = 0; i< spectrum.length; i++){
			console.log("height: "+ height);
			console.log("widht: " + width);
			var y = map(i, 0, spectrum.length, 0, height);
				var w = (width -  map(spectrum[i], 0, 255, width, 0));
				console.log('coordinate y: '+ y);
				console.log('rectangle height : '+ w);
				fill(spectrum[i],255-spectrum[i],0)
				rect(0, y, w,height / spectrum.length  );
			}

		pop();
	};
}
