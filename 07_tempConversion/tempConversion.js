const ftoc = function(tempF) {
    let converted = 0;
    converted = ((tempF - 32) * (5/9));
    let rounded = Math.round(converted * 10)/10;
    return rounded;

    //Simpler way of writing this:
    // return Math.round((tempF - 32) * (5/9) * 10) / 10;
};

const ctof = function(tempC) {
    let converted = 0;
    converted = ((tempC) * (9/5)) + 32;
    let rounded = Math.round(converted * 10)/10;
    return rounded;

    //Simpler way of writing this:
    // return Math.round(((tempC * 9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
