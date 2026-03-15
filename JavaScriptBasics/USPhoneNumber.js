function generateUSPhoneNumber() {
    const part1 = Math.floor(100 + Math.random() * 900);
    const part2 = Math.floor(100 + Math.random() * 900);
    const part3 = Math.floor(1000 + Math.random() * 9000);

    const phoneNumber = `+1-${part1}-${part2}-${part3}`;
    console.log(phoneNumber);
}

generateUSPhoneNumber();