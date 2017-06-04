export enum WeekDay {SUNDAY = 0, MONDAY = 1, TUESDAY = 2, WEDNESDAY = 3, THURSDAY = 4, FRIDAY = 5, SATURDAY = 6}

// TODO: https://en.wikipedia.org/wiki/ISO/IEC_5218

export function enumsApp() {
  let day: WeekDay = WeekDay.SATURDAY;
  console.log("day:", day, "name:", WeekDay[day]);

  // let sex: Sex = Sex.FEMALE;
  // console.log("sex:", sex, "name:", Sex[sex]);
}