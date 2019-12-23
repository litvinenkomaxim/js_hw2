let month = new Date();
alert(month);
monthName = month.getMonth();

switch (true) {
  case monthName == 0: alert('zima');
    break;
  case monthName == 1: alert('zima');
    break;
  case monthName == 11: alert('zima');
    break;
  case monthName == 2: alert('vesna');
    break;
  case monthName == 3: alert('vesna');
    break;
  case monthName == 4: alert('vesna');
    break;
  case monthName == 5: alert('leto');
    break;
  case monthName == 6: alert('leto');
    break;
  case monthName == 7: alert('leto');
    break;
  case monthName == 8: alert('osen');
    break;
  case monthName == 9: alert('osen');
    break;
  case monthName == 10: alert('osen');
    break;
  default: alert('date incorrect');
}
