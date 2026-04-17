function OPENTHEDOOR() {
    let carCounter = 0;
    const maxCars = 25;

    while (carCounter < maxCars) {
       window.alert("The Car" + carCounter + " has entered the parking lot.");
        carCounter += 1;
    }

    window.alert("The parking lot is full. No more cars can enter.");


}