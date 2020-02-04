function numToRoman(digit, closeBase){
    let romanNumbers = {1:"I",5:"V",10:"X",50:"L",100:"C",500:"D",1000:"M"};
    let string = "";
    let count;
    let remainder;
    let countRemainder;

    if(digit >= closeBase) {
        count = digit / closeBase;
        count = Math.floor(count);
        while(count > 0){
        string = string.concat(romanNumbers[closeBase])
        count--;
        }
        remainder = digit % closeBase;
        let mix = closest(remainder);
        countRemainder = remainder / mix;
        while(countRemainder > 0){
            string = string.concat(romanNumbers[mix]);
            countRemainder--;
        }
    }
    else {
        let subtract = closeBase % digit;
        string = string.concat(romanNumbers[subtract]);
        string = string.concat(romanNumbers[closeBase]);
    }
    return string;
}

function closest(digit){
    if((bases).includes(digit)){
        return digit;
    }
    let i = 0;
    let closestBase = 1;
    let difference;
    let smallest = digit - bases[0];
    while(i < bases.length){
        difference = digit - bases[i];
        if(difference < 0) {
            if([-1,-10,-100].includes(difference)){
                return bases[i];
            }
        }
        else {
            //find the smallest
            if(difference < smallest){
                smallest = difference;
                closestBase = bases[i];
            }
        }
        i++;
    }

    return closestBase;
}

let bases = [1,5,10,50,100,500,1000];

function convertToRoman(num) {
    //split the Digits into ones, tens, hunderds and thousands. 
    let digits = [];
    let i = 0;
    let closestBase = [];
    let romanNumbers = {1:"I",5:"V",10:"X",50:"L",100:"C",500:"D",1000:"M"};
    while(num > 0) {
        digits[i] = num % 10;
        num -= digits[i];
        num /= 10;
        digits[i] = Math.pow(10,i) * digits[i];
        i++;
    }
    //find the closest base to each number in digits[]
    i = 0;
    while(i < digits.length){
        if(digits[i] != 0){
      closestBase.push(closest(digits[i]));
        }
    i++;
    }
    //create Roman Numeral using closestBase[] and digits[]
    i = digits.length - 1;
    let j = closestBase.length -1;
    let result = "";
    while(i >= 0){
        if(digits[i] != 0) {
            result = result.concat(numToRoman(digits[i],closestBase[j]));
            j--;
        }
        i--;
    }
    console.log(result);
 return result;
}

convertToRoman();
