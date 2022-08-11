function radianToDegree(radian) {
  // input validity check
  if (typeof radian == "number") {
    const degree = (radian * 180) / Math.PI;
    return degree.toFixed(2);
  } else {
    return "Please enter valid input.";
  }
}

function isJavaScriptFile(filename) {
  // input validity check
  if (typeof filename == "string" && filename.split(".").length >= 2) {
    //split and get ext from name
    let ext = filename.split(".").pop();

    //check extension and return boolean
    return ext.toLowerCase() == "js";
  } else {
    return "Please enter a valid file name!";
  }
}

function oilPrice(diesel, petrol, octen) {
  // input validity check
  if (
    typeof diesel == "number" &&
    typeof petrol == "number" &&
    typeof octen == "number"
  ) {
    //Oil prices
    let dieselPrice = 114;
    let petrolPrice = 130;
    let octenPrice = 135;

    //each oil price calculation by quantity
    let dieselTotalPrice = diesel * dieselPrice;
    let petrolTotalPrice = petrol * petrolPrice;
    let octenTotalPrice = octen * octenPrice;

    //return total
    return dieselTotalPrice + petrolTotalPrice + octenTotalPrice;
  } else {
    return "Please enter a valid input!";
  }
}

function publicBusFare(person) {
  // input validity check
  if (typeof person == "number") {
    let publicBusPassenger = person;

    if (publicBusPassenger >= 50) {
      publicBusPassenger = publicBusPassenger % 50;
    }

    if (publicBusPassenger >= 11) {
      publicBusPassenger = publicBusPassenger % 11;
    }

    let totalPublicBusFare = publicBusPassenger * 250;
    return totalPublicBusFare;
  } else {
    return "Please enter a valid input!";
  }
}

function isBestFriend(person1, person2) {
  // input validity check
  if (typeof person1 == "object" && typeof person2 == "object") {
    if (person1.name == person2.friend && person2.name == person1.friend) {
      return true;
    }
    return false;
  } else {
    return "Please enter a valid input!";
  }
}