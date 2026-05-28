function rentPrice (pricePerDay, numberOfDays) {
    if (numberOfDays <3) {
        return pricePerDay * numberOfDays;
    } else if (numberOfDays >= 3 && numberOfDays < 7) {
        return ((pricePerDay * numberOfDays) - 20);
    } else {
        return ((pricePerDay * numberOfDays) - 50);
    }
}
    console.log(rentPrice(40, 1));
    console.log(rentPrice(40, 4));
    console.log(rentPrice(40, 8));
