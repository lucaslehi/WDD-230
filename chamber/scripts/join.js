const dateTime = {
  month: date.getMonth(),

  date: date.getDate(),

  year: date.getFullYear(),

  hours: date.getHours(),

  minutes: date.getMinutes(),

  seconds: date.getSeconds(),
};

document.querySelector("#dateToday").value = dateTime;
