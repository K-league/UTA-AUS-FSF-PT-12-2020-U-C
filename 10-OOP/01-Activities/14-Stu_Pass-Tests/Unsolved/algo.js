function Algo() {}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  var splitString = str.split("");

  var reverseArray = splitString.reverse();

  var joinArray = reverseArray.join("");

  return joinArray;

  function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");
    
};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
};

Algo.prototype.capitalize = function(str) {
  // TODO: Your code here 
};

module.exports = Algo;
