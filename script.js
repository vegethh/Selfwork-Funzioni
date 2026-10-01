function fizzBuzz(N) {
    for (let i = 1; i <= N; i++) {
        if (i % 15 === 0) {
            console.log("fizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Esempio di chiamata della funzione
fizzBuzz(30);