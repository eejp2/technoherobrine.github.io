document.addEventListener('DOMContentLoaded', function() {
    var clear = document.getElementById('clr');

    clear.addEventListener('click', function() {
        erase();
		if (x == 'white'){
			x = '#1A1A1A';
			ctx.globalCompositeOperation="source-over";
			y = 2;
		}
    });
	
	var saveButton = document.getElementById('save');

    saveButton.addEventListener('click', function() {
		var downloadLocation = canvas.toDataURL('image/png');
		
		saveButton.href= downloadLocation;
        saveAsImage();
    });
});

var canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

var x = "#1A1A1A",
    y = 2;

function init() {
    canvas = document.getElementById('can');
    ctx = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;
	
	ctx.fillStyle = 'white';
	ctx.fillRect(0,0,w,h);
	
    canvas.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);
	
	var colors = document.getElementsByClassName('color');
	var eraser = document.getElementById('white');
	
	for(var i=0;i<colors.length;i++){
        colors[i].addEventListener('click', function () {color(this) });
    }
	
	eraser.addEventListener('click', function () {color(this) });
}

function color(obj) {
	switch (obj.id) {
		
		case obj.id:
			x = obj.id;
			break;
		
        case "white":
            x = "white";
            break;
    }
    if (x == "white"){ 
		ctx.globalCompositeOperation="source-over";
		ctx.fill();
		
		y = 10;
	}
    else {
		x  = obj.id;
	
		ctx.globalCompositeOperation="source-over";
		ctx.fill();
		y = 2;
	}

}

function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

function erase() {
    ctx.clearRect(0, 0, w, h);
	ctx.fillStyle = 'white';
	ctx.fillRect(0,0,w,h);
}


function saveAsImage() {
	chrome.windows.create({'url': downloadLocation, 'type': 'popup'}, function(window) {
	 
   });
}



function findxy(res, e) {
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;

        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            draw();
        }
    }
 }

window.onload = init;