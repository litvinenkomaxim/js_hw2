let long = prompt("enter number", '12');
let summaNechetnih = 0;
for (let i = 0; i < long; i++) {
  if ((i % 2 !== 0) == true) {
    summaNechetnih = summaNechetnih + i;
  }
}
alert(summaNechetnih)