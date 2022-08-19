// Code your solution in this file!

const returnFirstTwoDrivers = function (arrDrivers) {
	return arrDrivers.slice(0,2);
	}

const returnLastTwoDrivers = function (arrDrivers) {
	return arrDrivers.slice(-2);
	}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function fareDoubler(fare) {
	return fare * 2;
	}

function fareTripler(fare) {
	return fare * 3;
	}


const createFareMultiplier = function (multiplyFare) {
	return function (multiplier) {
		return multiplyFare * multiplier;
		};
	}

const selectDifferentDrivers = function (arrDrivers,selectedDrivers) {
	return selectedDrivers(arrDrivers);
	}
