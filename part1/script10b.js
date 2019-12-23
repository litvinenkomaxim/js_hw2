let greeting = "";
let lang = prompt("enter lang", 'ru');

switch (true) {
  case lang == 'ru': alert('privet russkiy');
    break;
  case lang == 'en': alert('hello englishman');
    break;
  case lang == 'de': alert('ich hello german');
    break;
  default: alert('net nugnogo yazika');
}