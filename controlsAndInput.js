//Constructor function to handle the onscreen menu, keyboard and mouse
//controls
function ControlsAndInput(){

	this.menuDisplayed = false;

	//playback button displayed in the top left of the screen
	this.playbackButton = new PlaybackButton();

	//make the window fullscreen or revert to windowed
	this.mousePressed = function(){
		//???
		//check if the playback button has been clicked
		//if not make the visualisation fullscreen

		if (this.playbackButton.hitCheck() == false ){
			// If the click isn’t on the playback button toggle the display between
			// window and fullscreen (check out the p5.js documentation on how to
			// do this.)
			let fs = fullscreen();
	 		fullscreen(!fs);
		}






	};

	//responds to keyboard presses
	//@param keycode the ascii code of the keypressed
	this.keyPressed = function(keycode){
		console.log(keycode);
		if(keycode == 32){
			this.menuDisplayed = !this.menuDisplayed;
		}

		if(keycode > 48 && keycode < 58){
			var visNumber = keycode - 49;
			vis.selectVisual(vis.visuals[visNumber].name);
		}
	};

	//draws the playback button and potentially the menu
	this.draw = function(){
		push();
		fill("white");
		stroke("black");
		strokeWeight(2);
		textSize(34);

		//playback button
		this.playbackButton.draw();
		//only draw the menu if menu displayed is set to true.
		if(this.menuDisplayed){

			text("Select a visualisation:", 100, 30);
			// console.log("call menu method");
			this.menu();
		}
		pop();

	};

	this.menu = function(){
		//draw out menu items for each visualisation
		//???

		/*
		In the `ControlsAndInput` constructor function complete
		`this.menu()`. Write a `for` loop that iterates over the array stored
		in the `visuals` property of the `Visualisations` object, which itself
		is stored in the global `vis` variable declared in sketch.js, writing
		each visualisation name to the screen. You can check if your menu is
		displayed correctly by pressing the space bar while the app is
		running. When complete it should look like the following:

		![menu](https://www.doc.gold.ac.uk/~jfort010/ip/case-studies/music-vis/figures/menu.png)
		*/
		for (var i = 0; i < vis.visuals.length; i++ ){
			// console.log("in menu")
			// console.log(vis.visuals[i].name)
			var y = 75 *(1+i)

			text( i+1 + ": " + vis.visuals[i].name, 100, y);


		}



	};
}
