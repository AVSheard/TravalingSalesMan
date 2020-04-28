/** @format */

let items = [];
const totalItems = 3;

function setup() {
	createCanvas(400, 300);
	for (var i = 0; i < totalItems; i++) {
		var v = createVector(random(width), random(height));
		items[i] = v;
	}
}

function draw() {
	background(0);
	fill(255);
	for (var i = 0; i < items.length; i++) {
		ellipse(items[i].x, items[i].y, 4, 4);
	}
}
