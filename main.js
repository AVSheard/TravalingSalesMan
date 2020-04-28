/** @format */

let items = [];
const totalItems = 5;

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

	stroke(255);
	strokeWeight(2);
	noFill();
	beginShape();
	for (var i = 0; i < items.length; i++) {
		vertex(items[i].x, items[i].y);
	}
	endShape();

	const index1 = floor(random(items.length));
	const index2 = floor(random(items.length));
	swap(items, index1, index2);
}

function swap(arr, index1, index2) {
	const temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}
