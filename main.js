/** @format */

let items = [];
const totalItems = 6;
let bestDist;
let bestRout;
let curentOrder = [];

function setup() {
	createCanvas(400, 300);
	for (let i = 0; i < totalItems; i++) {
		items[i] = createVector(random(width), random(height));
		curentOrder[i] = i;
	}

	bestDist = calcDist(items);
	bestRout = [...items];
}

function draw() {
	background(0);
	fill(255);
	for (let i = 0; i < items.length; i++) {
		ellipse(items[i].x, items[i].y, 4, 4);
	}

	stroke(255);
	strokeWeight(1);
	noFill();
	beginShape();
	for (let i = 0; i < items.length; i++) {
		vertex(items[i].x, items[i].y);
	}
	endShape();

	stroke(255, 0, 255);
	strokeWeight(4);
	noFill();
	beginShape();
	for (let i = 0; i < items.length; i++) {
		vertex(bestRout[i].x, bestRout[i].y);
	}
	endShape();

	const index1 = floor(random(items.length));
	const index2 = floor(random(items.length));
	swap(items, index1, index2);

	const thisDist = calcDist(items);
	if (thisDist < bestDist) {
		bestDist = thisDist;
		bestRout = [...items];
		console.log(bestDist);
	}

	curentOrder = order(curentOrder);
}

function swap(arr, index1, index2) {
	const temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

function calcDist(points) {
	let totalDist = 0;
	for (let i = 0; i < points.length - 1; i++) {
		totalDist += dist(
			points[i].x,
			points[i].y,
			points[i + 1].x,
			points[i + 1].y
		);
	}
	return totalDist;
}

function order(arr) {
	let largestX = -1;
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < arr[i + 1]) {
			largestX = i;
		}
	}

	let largestY = -1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[largestX]) {
			largestY = i;
		}
	}

	swap(arr, largestX, largestY);

	let endArr = arr.splice(largestX + 1);
	endArr.reverse();
	arr = arr.concat(endArr);
	console.log(arr);

	if (largestX === -1) {
		noLoop();
		console.log("Finished");
	}
	return arr;
}
