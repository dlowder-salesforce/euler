var isPalindrome = function(n) {
  var digits = [];
  var m = n;
  while (m > 0) {
    digits.push(m % 10);
    m = (m - (m%10))/10;
  }
  for (var i=0; i<digits.length; i++) {
    if (digits[i] !== digits[digits.length - i - 1]) {
      return false;
    }
  }
  return true;
};

var greatestPalindrome = function() {
  var greatest = 0;
  for (var i=999; i>100; i--) {
    for (var j=999; j>100; j--) {
      var n = i*j;
      if (isPalindrome(n) && n > greatest) {
        greatest = n;
      }
    }
  }
  return greatest;
};

console.log(greatestPalindrome());
