let lang = prompt("enter lang", 'ru');
let day = prompt("enter day", '2');

switch (true) {
  case lang == 'ru':
    switch (true) {
      case day == 0: alert("voskresen'e");
        break;
      case day == 1: alert("ponedelnik");
        break;
      case day == 2: alert("vtornik");
        break;
      case day == 3: alert("sreda");
        break;
      case day == 4: alert("chetverg");
        break;
      case day == 5: alert("pyatnica");
        break;
      case day == 6: alert("subbote");
        break;
      default: alert('date incorrect');
    }
    break;
  case lang == 'en':
    switch (true) {
      case day == 0: alert("sunday");
        break;
      case day == 1: alert("monday");
        break;
      case day == 2: alert("tuessday");
        break;
      case day == 3: alert("wednessday");
        break;
      case day == 4: alert("thursday");
        break;
      case day == 5: alert("friday");
        break;
      case day == 6: alert("saturday");
        break;
      default: alert('date incorrect');
    }
    break;
  default: alert('lang incorrect')
}