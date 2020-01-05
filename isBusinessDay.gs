function isBusinessDay(date){
  // the day is saturday or sunday
  if (date.getDay() == 0 || date.getDay() == 6) {
    return false;
  }

  // set japanese holiday
  var calJa = CalendarApp.getCalendarById('ja.japanese#holiday@group.v.calendar.google.com');

  // calja is holiday
  if(calJa.getEventsForDay(date).length > 0){
    return false;
  }
  return true;
}


function job() {
  var inputDate = Browser.inputBox('日付を入力');
  var date = new Date(inputDate);

  if(isBusinessDay(date)){
     Browser.msgBox('働きなさい');
  }else{
     Browser.msgBox('休みなさい');
  }
}
