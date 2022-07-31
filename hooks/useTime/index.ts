import { useState, useEffect } from 'react';

const useTime = (): String => {
  const [time, setTime] = useState<String>('');

  useEffect(() => {
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const d = new Date();
    let day = weekday[d.getDay()];

    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = 'AM';

    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = 'PM';
    }

    let hours = h < 10 ? '0' + h : h;
    let minutes = m < 10 ? '0' + m : m;
    let seconds = s < 10 ? '0' + s : s;

    let time =
      hours +
      ':' +
      minutes +
      ':' +
      seconds +
      ' ' +
      session +
      ' ' +
      day;

    setTime(time);
  }, [time]);

  return time;
};

export default useTime;
