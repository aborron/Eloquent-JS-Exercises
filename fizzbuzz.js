for (let i = 1; i < 101; i++) {
    let word = "";
    if (i % 3 === 0) {
        word += "Fizz";
    }
    if (i % 5 === 0) {
        word += "Buzz";
    }
    console.log(word || i)
}

