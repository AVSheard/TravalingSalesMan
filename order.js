/** @format */

function order() {
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
}

function swap(arr, index1, index2) {
	const temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

module.exports = order;
