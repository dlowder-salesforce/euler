var isPrime = function(n) {
  for (var i=2; i<=n/2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

var f = [];

var factors = function(n) {
  var i;
  for (i=2; i<=n/2; i++) {
    if (n%i === 0) {
      f.push(i);
      factors(n/i);
      break;
    }
  }
  f.push(n);
};

factors(600851475143);
for (var i=0; i<f.length; i++) {
  if (isPrime(f[i])) {
    console.log(f[i]);
  }
}
