window.onload = function() {

	var previewBtn = document.getElementById("previewButton");
	previewBtn.onclick = previewHandler;

	function previewHandler() {
		var canvas = document.getElementById("tshirtCanvas");
		//need a 2D context to draw something
		var context = canvas.getContext("2d");
		var selectObj = document.getElementById("shape");
		var index = selectObj.selectedIndex;
		var shape = selectObj[index].value;

		if (shape == "squares") {
			for (var squares = 0; squares < 20; squares++) {
				drawSquare(canvas, context);
			}
		}
	}

	function drawSquare(canvas, context) {
		var w = Math.floor(Math.random() * 40);
		var x = Math.floor(Math.random() * canvas.width);
		var y = Math.floor(Math.random() * canvas.height);

		context.fillStyle = "lightblue";
		context.fillRect(x, y, w, w);
	}




	if (canvas.getContext) {
		//browser has canvas support
		
		context.fillRect(10, 10, 100, 100);
	} else {
		//broser doesn't support canvas
	}
	

}