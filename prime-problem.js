// Print Prime Numbers from 1 to given limit

var limit = 100;

for (var i = 1; i <= limit; i++) {
  var divisibleCount = 0;

  for (var j = 1; j <= limit; j++) {
    if (i % j == 0) {
      divisibleCount++;
    }
  }

  if (divisibleCount === 2) {
    console.log(i);
  }
}
