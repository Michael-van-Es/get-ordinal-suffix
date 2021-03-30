var getOrdinalSuffix = {
	forNumber: function(suffixNeedingNumber){
		//
		// First ensure that the parameter passed to this function is a valid number
		if (isNaN(suffixNeedingNumber)){
			return " Error found: Paramater is not a valid number";
		}
		//
		// Next, check if the number is a decimal number. If so, we only want to work with the decimal part of the number
		if ((suffixNeedingNumber % 1) > 0){
			// To get the decimal, we are going to use the slice string function
			var suffixNeedingNumberString = suffixNeedingNumber.toString();
			suffixNeedingNumber = suffixNeedingNumberString.slice(2); // Removes the 0. from the front of the number (the first 2 characters)
		}		
		//
		// The parameter might be in text format, so let's turn it into a number
		suffixNeedingNumber = Number(suffixNeedingNumber);
		//
		// Check if the number is a straight zero. If so, no ordinal suffix is returned
		if (suffixNeedingNumber == 0){
			return "";
		}
		//
		// All 11s, 12s, 13s and numbers ending with these (111, 112, 113...etc.) have an ordinal suffix of "th"
		// So let's see if this number is one of those. To do so, get the tens and units of the number
		var tensAndUnits = suffixNeedingNumber % 100;
		//
		switch (tensAndUnits){
			case 11:
			case 12:
			case 13:
				return "th";
		}
		//
		// Now we've delt with numbers: 0, 11, 12, 13, and all numbers ending in 11, 12, 13
		// We only then need to check the unit digit to find the ordinal suffixes.
		// So let's get the right-most digit, the unit digit, from the number
		var unit = suffixNeedingNumber % 10;
		//
		var ordinalSuffix = "";
		//
		switch (unit){
			case 1:
				ordinalSuffix = "st";
				break;
			case 2:
				ordinalSuffix = "nd";
				break;
			case 3:
				ordinalSuffix = "rd";
				break;
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 0:
				ordinalSuffix = "th";
				break;
		}
		//
		return ordinalSuffix;
	}	
};
//
// To call function: 
// getOrdinalSuffix.forNumber(parm1);
