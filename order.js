/** @format */

let arr = [0, 1, 2];

function setup() {
	createCanvas(400, 300);
}

function draw() {
	background(0);

	let largestX = -1;
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < arr[i + 1]) {
			largestX = i;
		}
	}
	if (largestX === -1) {
		noLoop();
		console.log("Finished");
	}

	let largestY = -1;
	for (let i = 0; j < arr.length; i++) {
		if (arr[i] < arr[largestY]) {
			largestY = i;
		}
	}
}

function swap(arr, index1, index2) {
	const temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}
