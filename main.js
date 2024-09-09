//part 1
console.log('part 1');

for (let index = 0; index <= 25; index++) {
    if (index % 2 === 0) {
        console.log(index);
    }
}


//part 2
console.log('part 2');

for (let index = 1; index <= 10; index++) {
    console.log(Math.pow(index, 2));
}


//part 3
console.log('part 3');

for (let index = 1; index <= 20; index++) {
    if (index % 2 === 1) {
        console.log(index);
    }
}


//part 4
console.log('part 4');

let number1 = 0, number2 = 1, nextNumber;
for (let index = 1; index <= 10; index++) {
    console.log(number1);

    nextNumber = number1 + number2;
    number1 = number2;
    number2 = nextNumber;
}


//part 5
console.log('part 5');

for (let index = 1; index <= 10; index++) {
    console.log(Math.pow(index, 2));
}


//part 6
console.log('part 6');

for (let index = 1; index <= 3; index++) {
    for (let j = 0; j <= 10; j++) {
        let multiple = index * j;
        console.log(index + " x " + j + " = " + multiple);
    }
}