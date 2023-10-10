function validateCreditCard(creditCardNum) {
    const numStr = creditCardNum.split("-").join("");
    let valid = false;
    let output = {
        valid: true,
        number: ""
    };
    output["number"] = creditCardNum;

    // 16 digits
    valid = numStr.length === 16;
    if(!valid) {
        output["valid"] = false;
        output["error"] = "_number must be 16 digits_";
        return output;
    }


    // Numbes only
    valid = !isNaN(numStr);
    if(!valid) {
        output["valid"] = false;
        output["error"] = "_invalid characters_";
        return output;
    }


    //Number must consist of at least two different digits 
    let occurance = 0;
    for (let i = 0; i < numStr.length; i++) {
        if( numStr[0] === numStr[i] ) occurance += 1; 
    }
    valid = occurance !==  numStr.length;
    if(!valid) {
        output["valid"] = false;
        output["error"] = "_Need more than 1 unique digit_";
        return output;
    }


    //The final digit must be even
    valid =  numStr[numStr.length-1]%2 === 0 ;
    if(!valid) {
        output["valid"] = false;
        output["error"] = "_the final digit must be even_";
        return output;
    }


    //The sum of all the digits must be greater than 16
    let sum = 0;
    for (const i of numStr.split("")) {
        sum += Number(i);
    }
    valid = sum>16;
    if(!valid) {
        output["valid"] = false;
        output["error"] = "_the sum of all the digits must be greater than 16_";
        return output;
    }

    //output
    return output; 
};

/**** tests *****/
console.log(validateCreditCard('9999-7777-8888-0000')); //{ valid: true, number: '9999-7777-8888-0000' }
console.log(validateCreditCard('6666-6666-6666-1666')); //{ valid: true, number: '6666-6666-6666-1666' }
console.log(validateCreditCard('a923-3211-9c01-1112')); //{ valid: false, number: 'a923-3211-9c01-1112', "error": 'invalid characters' }
console.log(validateCreditCard('4444-4444-4444-4444')); //{ valid: false, number: '4444-4444-4444-4444', "error": 'need more than 1 unique digit' }
console.log(validateCreditCard('1211-1111-1111-1112')); //{ valid: true, number: '1211-1111-1111-1112' }


