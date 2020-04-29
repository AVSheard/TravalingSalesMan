/** @format */

function setup() {
	createCanvas(400, 300);
}

function draw() {
	backgraound(0);
}

function swap(arr, index1, index2) {
	const temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}
