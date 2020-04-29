/** @format */

let arr = [0, 1, 2];

function setup() {
	createCanvas(400, 300);
}

function draw() {
	background(0);

	let largeestX = -1;
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < arr[i + 1]) {
			largeestX = i;
		}
	}
	if (largeestX === -1) {
		noLoop();
		console.log("Finished");
	}
}

function swap(arr, index1, index2) {
	const temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}
