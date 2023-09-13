


function binary(number) {
    let base = 2;
    let bitList = [];
    let bitNumber = "";
    
    for (let i = 1; i <= number; i *= base) {
        bitList.unshift(i);
    };


    for (let bit of bitList) {

        number = number - bit;

        if(number < -(number)) {
            bitNumber += "0";
            number = number + bit;

        } else bitNumber += "1";
    }

    return Number(bitNumber);
}

console.log(binary(13)); // 1101
console.log(binary(25)); // 11001
console.log(binary(32)); // 100000
console.log(binary(72)); // 1001000
console.log(binary(20)); // 10100
console.log(binary(128)); // 10000000
console.log(binary(4)); // 100



