function getReceipt() {
	// text1 is a string that will show a list of selected items
	var text1 = [];
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
	getCrust(runningTotal,text1);
};

function getCrust(runningTotal, text1) {
	// sizeTotal will be the total of the selected piza size
	var crustTotal = 0;
	// sizeArray is an array of all the input options from the size section
	var crustArray = document.getElementsByClassName("crust");
	// for loop to determine and print out selected items from array
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			var selectedCrust = crustArray[j].value;
			text1 = text1 + selectedCrust + "<br>";
		}
	}
	if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 3;
	} else {
		crustTotal = 0;
	} 
	runningTotal = (runningTotal + crustTotal);
	console.log(selectedCrust + " = $" + crustTotal + ".00");
	console.log("crust text1: " + text1);
	console.log("subtotal: $" + runningTotal + ".00");
	getSauce(runningTotal,text1);
};

function getSauce(runningTotal, text1) {
	// sizeTotal will be the total of the selected piza size
	var sauceTotal = 0;
	// sizeArray is an array of all the input options from the size section
	var sauceArray = document.getElementsByClassName("sauce");
	// for loop to determine and print out selected items from array
	for (var k = 0; k < sauceArray.length; k++) {
		if (sauceArray[k].checked) {
			var selectedSauce = sauceArray[k].value;
			text1 = text1 + selectedSauce + "<br>";
		}
	}
	runningTotal = (runningTotal + sauceTotal);
	console.log(selectedSauce + " = $" + sauceTotal + ".00");
	console.log("sauce text1: " + text1);
	console.log("subtotal: $" + runningTotal + ".00");
	getCheese(runningTotal,text1);
};

function getCheese(runningTotal, text1) {
	// sizeTotal will be the total of the selected piza size
	var cheeseTotal = 0;
	// sizeArray is an array of all the input options from the size section
	var cheeseArray = document.getElementsByClassName("cheese");
	// for loop to determine and print out selected items from array
	for (var l = 0; l < cheeseArray.length; l++) {
		if (cheeseArray[l].checked) {
			var selectedCheese = cheeseArray[l].value;
			text1 = text1 + selectedCheese + "<br>";
		}
	}
	if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	} else {
		cheeseTotal = 0;
	}
	runningTotal = (runningTotal + cheeseTotal);
	console.log(selectedCheese + " = $" + cheeseTotal + ".00");
	console.log("cheese text1: " + text1);
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
	getVeggie(runningTotal,text1);	
};

function getVeggie(runningTotal, text1) {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggie");
	for (var n = 0; n < veggieArray.length; n++) {
		if (veggieArray[n].checked) {
			selectedVeggie.push(veggieArray[n].value);
			console.log("selected veggie item: ("+ veggieArray[n].value +")");
			text1 = text1 + veggieArray[n].value + "<br>";
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	console.log("total selected veggie items: " + veggieCount);
	console.log(veggieCount + " veggie - 1 free veggie = " + "$" + veggieTotal + ".00")
	console.log("veggie text1: " + text1);
	console.log("Purchase Total: " + "$" + runningTotal + ".00");
	document.getElementById("showText").innerHTML = text1;
	document.getElementById("totalPrice").innerHTML = "<h3> Total: <strong>$" + runningTotal + ".00" + "</strong></h3>"
};
