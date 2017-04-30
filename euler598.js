var Combinatorics = require('js-combinatorics');

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var FastSet = require("collections/fast-set");

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

var complement = function(n, k, combination) {
  var c = [];
  var i = 0;
  var j = 0;
  while (i < n) {
    if (j >= k || i < combination[j]) {
      c.push(i);
    } else {
      j++;
    }
    i++;
  }
  return c;
};

var multiply = function(a, b) {
  return a*b;
};

var complement = function(p, s) {
  var c = [];
  var ip = 0;
  var is = 0;
  while (ip < p.length) {
    if (p[ip] === s[is]) {
      is++;
    } else {
      c.push(p[ip]);
    }
    ip++;
  }
  return c;
}

var arrayEquals = function(a, b) {
  return (a.join(",") === b.join(","));
};
  

var pairsWithEqualFactorCount = function(n) {
  var p = primeFactorsOfFactorial(n);
  console.log("" + p);
  var p_factorial = p.reduce(multiply);
  console.log("" + p_factorial);

  var result = [];
  var cmbs = new Set();
  
  for (var k=2; k<=p.length/2; k++) {
    console.log(k);
    var cmb = Combinatorics.bigCombination(p, k);
    while (a = cmb.next()) {
      cmbs.add(a.join(','));
    }
  }
  var cmbarray = cmbs.toArray();
  console.log(cmbarray);
  /*
      var b = complement(p.length, k, a);
      var a_p = a.map(function(i) {return p[i];});
      var b_p = b.map(function(i) {return p[i];});
      if (factors(a_p).length === factors(b_p).length) {
        var a_product = a_p.reduce(multiply);
        var b_product = b_p.reduce(multiply);
        result.push([a_product, b_product]);
      }
    }
  }
  var finalResult = uniq(result);
  console.log(finalResult);
  console.log(finalResult.length);
   */
};

pairsWithEqualFactorCount(100);
