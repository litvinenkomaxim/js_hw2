let total = 0;
let x = 0;
for (; ;) {
  let number = prompt("enter number", '12');
  total = total + +number;
  if (number == null) {
    break
  }
  x++;
}
alert(`vvedeno ${x} chisel obshey summoy ${total} i 
srednim arifmeticheskim ${total / x}`);