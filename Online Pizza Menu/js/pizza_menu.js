function getReceipt() {
	// text1 is a string that will show a list of selected items
	var text1 = "<h3>Your Order<h3>";
	// runnungTotalis a numeric value that will be the running total for all the selected items
	var runningTotal = 0;
	// sizeTotal will be the total of the selected piza size
	var sizeTotal = 0;
	// sizeArray is an array of all the input options from the size section
	var sizeArray = document.getElementsByClassName("size");
	// for loop to determine and print out selected items from array
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1 + selectedSize + "<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	console.log(selectedSize + " = $" + sizeTotal + ".00");
	console.log("size text1: " + text1);
	console.log("subtotal: $" + runningTotal + ".00");
	getMeat(runningTotal,text1);
};

function getMeat(runningTotal, text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meat");
	for (var m = 0; m < meatArray.length; m++) {
		if (meatArray[m].checked) {
			selectedMeat.push(meatArray[m].value);
			console.log("selected meat item: ("+ meatArray[m].value +")");
			text1 = text1 + meatArray[m].value + "<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: " + meatCount);
	console.log(meatCount + " meat - 1 free meat = " + "$" + meatTotal + ".00")
	console.log("meat text1: " + text1);
	console.log("Purchase Total: " + "$" + runningTotal + ".00");
	document.getElementById("showText").innerHTML = text1;
	document.getElementById("totalPrice").innerHTML = "<h3> Total: <strong>$" + runningTotal + ".00" + "</strong></h3>"
};
