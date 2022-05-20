const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(array) {
	const initialValue = 0;
  return sumWithInitial = array.reduce((previousValue, currentValue) => 
      previousValue + currentValue, initialValue);

  //simpler way of writing this:
  //return array.reduce((total,current) => total + current, 0);
};

const multiply = function(array) {
  let sum = 1;
  for (let i=0;i<array.length;i++){
    sum *= array[i];
  }
  return sum;

  //using reduce function to multiply items else return 0:  
  // return array.length ? array.reduce((multiplier, nextValue) => multiplier * nextValue) : 0;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  if (a == 0) return 1;
  let product = 1;
  for (i=a;i>0;i--){
    product *= i;
  }
  return product;
  
  // recursive way of doing factorial:
  // if (a === 0) return 1;
  // return a * factorial (a-1);

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
