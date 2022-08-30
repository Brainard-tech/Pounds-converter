function weightConverter(valNum) {
    document.getElementById("outputOunces").innerHTML=valNum/2.2046;
    document.getElementById("outputKilograms").innerHTML=valNum/2.2046;
    document.getElementById("outputGrams").innerHTML=valNum/0.0022046;
    document.getElementById("outputStones").innerHTML=valNum*0.071429;
}