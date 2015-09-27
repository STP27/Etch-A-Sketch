$(document).ready(function() {
    makeGrid (16);
    $(".box").mouseenter(function() {
        $(this).css("background-color", "white");
    });
    $(".default").click(function() {
        setGrid();
        $(".box").unbind();
        $(".box").mouseenter(function() {
            $(this).css("background-color", "white");
        });
    });
    $(".clear").click(function() {
        clean();
    });
    $(".random").click(function() {
        setGrid();
        $(".box").unbind();
        $(".box").mouseenter(function() {
            $(this).css("background-color", randomColor());
        });
    });
    $(".opacity").click(function() {
        setGrid();
        $(".box").unbind();
        $(".box").mouseenter(function() {
            reduceOpacity($(this));
        });
    });
    $(".trail").click(function() {
        setGrid();
        $(".box").unbind();
        $(".box").hover(
            function() {
                $(this).css("opacity", 0);
            },
            function () {
                $(this).fadeTo("fast",1);
            }
        );
    });
});
function clean() {
    $(".box").css("background", "#34495e").css("opacity","1");
}
function reduceOpacity(elem) {
    var opacity = elem.css('opacity');
	var nextOpacity = opacity - 0.1;
	if (nextOpacity > 0) { elem.css('opacity', nextOpacity); }
	else { elem.css('opacity', '0'); }
}
function setGrid() {
    var col = prompt("Enter the number of columns you want:");
    makeGrid(col);
    clean();
}
function makeGrid (n) {
    var boxsize = ((960 - 4*n) / n);
    var container = $(".container").html("");
    for (var j = 0; j < n; j++) {
		for (var i = 0; i < n; i++) {
			container.append( $("<div></div>").addClass("box").height(boxsize).width(boxsize));
		}
		container.append($("<div></div>").css("clear", "both"));
	}
}
function randomColor() {
	var red = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	return "#" + red.toHex() + blue.toHex() + green.toHex();
}
Number.prototype.toHex = function() {
    if (this < 16) { return '0' + this.toString(16); }
    return this.toString(16);
};
