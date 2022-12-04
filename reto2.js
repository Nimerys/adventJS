function countHours(year, holidays) {
    let completeDay;
    let dayOfWeek;
    let countDays = 0;
    for (let holiday of holidays) {
        completeDay = new Date(year + '/' + holiday);
        dayOfWeek = completeDay.getDay();
        if (dayOfWeek != 0 && dayOfWeek != 6) {
            countDays ++;
        }
    }
  return countDays * 2;
}
