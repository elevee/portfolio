window.onload = function() {

	var canvas = document.getElementById("tshirtCanvas");
	
	if (canvas.getContext) {
		//browser has canvas support
		//need a 2D context to draw something
		var context = canvas.getContext("2d");
		context.fillRect(10, 10, 100, 100);
	} else {
		//broser doesn't support canvas
	}
		

}