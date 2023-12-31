//12HR FORMAT- 24 HR FORMAT
//12am-0:00
//1am-1:00
//2am-2:00
//3am-3:00
//4am-4:00
//5am-5:00
//6am-6:00
//7am-7:00
//8am-8:00
//9am-9:00
//10am-10:00
//11am-11:00
//12pm-12:00
//1pm-13:00
//2pm-14:00
//3pm-15:00
//4pm-16:00
//5pm-17:00
//6pm-18:00
//7pm-19:00
//8pm-20:00
//9pm-21:00
//10pm-22:00
//11pm-23:00

function timeConversion(s) {
    const isPM = s.includes("PM");
    const timeArr = s.slice(0, 8).split(":");
    let hour = parseInt(timeArr[0]);

    if (isPM && hour !== 12) {
        hour += 12;
    } else if (!isPM && hour === 12) {
        hour = 0;
    }

    return `${hour.toString().padStart(2, "0")}:${timeArr[1]}:${timeArr[2]}`;
}

