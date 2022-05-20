const reverseString = function(input) {
    let output = '';
    for (let i=input.length-1;i>=0;i--) {
        output += input.charAt(i);
    }
    return output;

    //simpler way to do this by splitting the string into array,
    //then reversing the array & joining it back into a string:
    //
    //return input.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
