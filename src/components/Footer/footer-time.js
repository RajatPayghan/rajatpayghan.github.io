'use client';
import React, { useState, useEffect } from 'react';

const Time = () => {
  const now = new Date().getTime();

  const [currentTime, setTime] = useState(() => ({
    pretty: formatPretty(now),
    twentyFour: formatTwentyFour(now),
  }));

  useEffect(() => {
    const tick = setInterval(() => {
      const now = new Date().getTime();
      setTime({ pretty: formatPretty(now), twentyFour: formatTwentyFour(now) });
    }, 1000);

    return () => clearInterval(tick);
  }, []);

  return <span>{currentTime.pretty}</span>;
};

const formatPretty = (date) => {
  return formatter.format(date);
};

const formatTwentyFour = (date) => {
  return formatterTwentyFour.format(date);
};

const formatter = new Intl.DateTimeFormat('en', {
  timeZone: 'Asia/Kolkata',
  timeStyle: 'short',
});

const formatterTwentyFour = new Intl.DateTimeFormat('en', {
  timeZone: 'Asia/Kolkata',
  timeStyle: 'short',
  hour12: false,
});

export default Time;
