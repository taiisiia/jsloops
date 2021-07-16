/* 1 */

function HelloLoop (str) {
   
    for (let i=0; i<5; i++) {
        console.log (str);
    }

}
console.log (HelloLoop('Hello loop'));


/* 2 */

function Loop (str1) {
    for (let i=0; i<5; i++) {
        console.log (str1 + i);
    }
}
console.log(Loop('Loop'));

/* 3 */

function Numberr (num) {
    for (let i=0; i<5; i++) {
        console.log (num);
    }
    return num;
}
const res = (Numberr(7));
console.log (res);

/* 4 */

function calcProduct (num1, num2) {
    let resu = 0;
    for (let i=0; i<5; i++) {
        resu += num1 * num2;
    }
    return resu;
}
console.log (calcProduct(2, 5));

/* 5 */

function calcProduct1 (num3) {
    let buffer=1;
    for (let i=1; i<=num3; i++) {
         buffer *= i;
    }
    return buffer;
}
let res1 = calcProduct1(5);
console.log (res1)


/* 6 */

function calcPower (val, power) {
    let result = val;
    for (let i=0; i < power; i++) {
        result *= val;
    }
    return result;
}

console.log (calcPower(5, 3));
