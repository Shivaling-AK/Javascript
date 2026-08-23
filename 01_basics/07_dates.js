// Dates

let myDate = new Date();
// console.log(typeof myDate); // object

// console.log(myDate); // 2026-08-23T06:02:03.549Z
// console.log(myDate.toString()); // Sun Aug 23 2026 11:32:03 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Sun Aug 23 2026
// console.log(myDate.toISOString()); // 2026-08-23T06:09:31.552Z
// console.log(myDate.toJSON()); // 2026-08-23T06:09:31.552Z
// console.log(myDate.toLocaleDateString()); // 23/8/2026
// console.log(myDate.toLocaleString()); // 23/8/2026, 11:39:31 am
// console.log(myDate.toLocaleTimeString()); // 11:39:31 am
// console.log(myDate.toTimeString()); // 11:39:31 GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString()); // Sun, 23 Aug 2026 06:09:31 GMT
// console.log(myDate.getTimezoneOffset()); // -330
// console.log(myDate.getHours()); // 11
// console.log(myDate.getMonth()); // 7

//********************************************** */
// console.log(myDate.setHours());
// console.log(myDate.setMonth());
// console.log(myDate.getUTCHours());
// console.log(myDate.getUTCMonth());
// console.log(myDate.setUTCHours());
// console.log(myDate.setUTCMonth());
// console.log(myDate.getSeconds());
// console.log(myDate.setSeconds());
// console.log(myDate.getUTCSeconds());
// console.log(myDate.setUTCSeconds());
// console.log(myDate.getMilliseconds());
// console.log(myDate.setMilliseconds());
// console.log(myDate.getUTCMilliseconds());
// console.log(myDate.setUTCMilliseconds());
//******************************************** */

// let myCreatedDate = new Date(2026, 0, 17);
// console.log(myCreatedDate); // 2026-01-16T18:30:00.000Z
// console.log(myCreatedDate.toDateString()); // Sat Jan 17 2026

// let myCreatedDate = new Date(2026, 0, 17, 5, 3);
// console.log(myCreatedDate.toLocaleString()); // 17/1/2026, 5:03:00 am

let myCreatedDate = new Date("2026-09-17");
// console.log(myCreatedDate.toLocaleString()); // 17/9/2026, 5:30:00 am

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // 1787466158240 (miliseconds)
// console.log(myCreatedDate.getTime()); // 1789603200000 (miliseconds)

// converts miliseconds to seconds
// console.log(Date.now()); // 1787466388634
// console.log(Date.now()/1000); // 1787466463.864 (it gives value in decimal)
// console.log(Math.floor(Date.now()/1000)); // 1787466463 (to void decimal use floor or around)

let newDate = new Date();
// console.log(newDate); // 2026-08-23T06:34:47.435Z
// console.log(newDate.getMonth()); // 7 (Here month starts with 0) 
// console.log(newDate.getMonth() + 1); // 8
// console.log(newDate.getDay()); // 0 (Here day starts with Monday(1) and Sunday(0))

console.log(newDate.toLocaleString('default',{
    weekday: "long"
})); // Sunday