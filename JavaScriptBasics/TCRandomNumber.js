function getRandomFiveDigitNumber() {
    const randomNumber = Math.floor(10000 + Math.random() * 90000);
    console.log(randomNumber);
}

getRandomFiveDigitNumber();
