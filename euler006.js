var sumSquareDiff = function(n) {
  var total = 0;
  for (var i=1; i<=n; i++) {
    for (var j=1; j<=n; j++) {
      if (i !== j) {
        total += i*j;
      }
    }
  }
  return total;
};

console.log(sumSquareDiff(10));
console.log(sumSquareDiff(100));
