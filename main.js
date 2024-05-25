// script.js

function calculateTimeRemaining(targetDate) {
  const now = new Date();
  const timeDifference = targetDate - now;

  if (timeDifference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

function updateCountdown() {
  const targetDate = new Date();
  targetDate.setMonth(5); // June (month is 0-indexed)
  targetDate.setDate(5);
  targetDate.setHours(8);
  targetDate.setMinutes(0);
  targetDate.setSeconds(0);

  const { days, hours, minutes, seconds } = calculateTimeRemaining(targetDate);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();
