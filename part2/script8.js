let numberFirst = 0;
let numberSecond = 1;
let fibo = ""
for (; ;) {
  let numberThird = numberFirst + numberSecond;
  numberFirst = numberSecond;
  numberSecond = numberThird
  fibo = fibo + " " + numberThird;
  if (numberFirst > 1000000000) {
    break;
  }
}
alert(fibo);
