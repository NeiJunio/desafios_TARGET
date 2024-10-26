function Fibonacci(num) {
    let a = 0;
    let b = 1;

    if (num === a || num === b) {
        return `O número ${num} pertence à sequência de Fibonacci.`
    }

    // Calcula a sequência até encontrar o número ou ultrapassá-lo
    let fib = a + b;
    while (fib <= num) {
        if (fib === num) {
            return `O número ${num} pertence à sequência de Fibonacci.`;
        }
        a = b;
        b = fib;
        fib = a + b;
    }

    return `O número ${num} não pertence à sequência de Fibonacci.`;
}


const numero = 34; // número definido previamente
console.log(Fibonacci(numero));
