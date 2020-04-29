/** @format */

let items = [];
const totalItems = 4;
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
		const currentItem = curentOrder[i];
		vertex(items[currentItem].x, items[currentItem].y);
	}
	endShape();

	// stroke(255, 0, 255);
	// strokeWeight(4);
	// noFill();
	// beginShape();
	// for (let i = 0; i < items.length; i++) {
	// 	console.log(bestRout[i]);
	// 	let n = bestRout[i];
	// 	vertex(n.x, n.y);
	// }
	// endShape();

	const thisDist = calcDist(items);
	if (thisDist < bestDist) {
		bestDist = thisDist;
		bestRout = [...curentOrder];
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
		const p1 = points[curentOrder[i]];
		const p2 = points[curentOrder[i + 1]];
		totalDist += dist(p1.x, p1.y, p2.x, p2.y);
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

	if (largestX === -1) {
		noLoop();
		console.log("Finished");
		console.log(bestRout);
	}
	return arr;
}
