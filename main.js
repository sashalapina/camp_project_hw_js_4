//task_1.1
function greet(name) {
  console.log('Привет, ' + name + '!');
}

greet('Саша');

//task_1.2
let multiply = function (a, b) {
  return a * b;
};

console.log(multiply(2, 4));

//task_1.3
function isEven(c) {
  if (c % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(9));

//task_2.1
const add = (d, e) => {
  return d + e;
};

console.log(add(7, 9));

//task_2.2
const square = (num1) => {
  return num1 * num1;
};

console.log(square(2));

//task_2.3
const sayHello = (name1) => {
  return 'Привет, ' + name1 + '!';
};

console.log(sayHello('Саша'));

//task_3.1
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

//task_3.2
function fibonacci(n_f) {
  if (n_f === 1) {
    return 0;
  } else if (n_f === 2) {
    return 1;
  } else {
    return fibonacci(n_f - 1) + fibonacci(n_f - 2);
  }
}

console.log(fibonacci(6));

//task_3.3
function sum(n_s) {
  let sum_n = 0;
  for (let i = 1; i <= 10; i++) {
    sum_n += i;
  }
  return sum_n;
}

console.log(sum(10));

//task_4.1
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

let counter = createCounter();

counter();
counter();
counter();

//task_4.2
function createSecret() {
  let secretMessage = '';
  return function () {
    secretMessage = 'test';
    return secretMessage;
  };
}

let secret = createSecret();

console.log(secret());

//task_4.3
function createCounterWithInitial(n_c) {
  let counter = n_c;
  return function () {
    return (counter += 1);
  };
}

let myCounter = createCounterWithInitial(5);

console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
