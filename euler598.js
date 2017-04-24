var Combinatorics = require('js-combinatorics');

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var primeFactorsRecursive = function(n, f) {
  var i;
  if (n === 1) {
    return;
  }
  for (i=0; i<primes.length; i++) {
    if (n%primes[i] === 0) {
      f.push(primes[i]);
      primeFactorsRecursive(n/primes[i], f);
      break;
    }
  }
};

var uniq = function(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
};

var primeFactors = function(n) {
  var f = [];
  primeFactorsRecursive(n, f);
  return f;
};

var factors = function(p) {
  var cmb = Combinatorics.power(p);
  var f = [1];
  while (a = cmb.next()) {
    if (a.length > 0) {
      f.push(a.reduce(function(x,y) { return x*y; }));
    }
  }
  return uniq(f);
};

var primeFactorsOfFactorial = function(n) {
  var f = [];
  for (var i=2; i<=n; i++) {
    f = f.concat(primeFactors(i));
  }
  return f.sort(function(a, b) { return a - b; });
};

var pairsWithEqualFactorCount = function(n) {
  var p = primeFactorsOfFactorial(n);
  var indexes = [];

  for (var i=0; i<p.length; i++) {
    indexes.push(i);
  }

  var cmb = Combinatorics.power(indexes);
  while (a = cmb.next()) {
    var i1 = 0;
    var i2 = 0;
    var astar = [];
    while (i1 < a.length) {
    
  }
};
  
