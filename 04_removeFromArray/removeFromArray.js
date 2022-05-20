const removeFromArray = function(...args) {
    const array = args[0];
    const newArray = [];

    array.forEach((item) =>{
    //     push every element into the new array
    //     UNLESS it is included in the function arguments
    //     so we create a new array with every item, except those that should be removed
        if (!args.includes(item)){
            newArray.push(item);
        }
    })

    return newArray;

    //More advanced solution, using the filter function instead of forEach:    
    // const array = args[0];
    // return array.filter(val => !args.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
