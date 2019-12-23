"use strict"

let a = 3;
let b = 1;
let c = 2;

if (((a - b) <= 0) == true) {
  if (((a - c) <= 0) == true) {
    alert("a little")
  }
  else {
    alert("c little")
  }
}
else {
  if (((a - b) >= 0) == true) {
    if (((b - c) < 0) == true) {
      alert("b little")
    } else {
      alert('c little')
    }
  }
}


