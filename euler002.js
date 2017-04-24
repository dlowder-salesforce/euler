var euler002 = function() {
  var a = 1;
  var b = 2;
  var total = 2;
  while (b <= 4000000) {
    var c = a + b;
    if (c % 2 === 0) {
      total += c;
    }
    a = b;
    b = c;
  }
  return total;
}

console.log(euler002());
