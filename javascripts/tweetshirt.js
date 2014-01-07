window.onload = function() {

	var previewBtn = document.getElementById("previewButton");
	previewBtn.onclick = previewHandler;

	function previewHandler() {
		var canvas = document.getElementById("tshirtCanvas");
		//need a 2D context to draw something
		var context = canvas.getContext("2d");
		var selectObj = document.getElementById("shape");
		fillBackgroundColor(canvas, context);

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

	function fillBackgroundColor(canvas, context) {
		var selectObj = document.getElementById("backgroundColor");
		var index = selectObj.selectedIndex;
		var bgColor = selectObj.options[index].value;
		context.fillStyle = bgColor;
		context.fillRect(0, 0, canvas.width, canvas.height);
	}


}