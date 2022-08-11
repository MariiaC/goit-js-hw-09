// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
//дано в умові розрах 
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


// const refs = {
//     input: document.querySelector('#datetime-picker'),
//     startBtn: document.querySelector("[data-start]"),
//     spanDays: document.querySelector("[data-days]"),
//     spanHours: document.querySelector("[data-hours]"),
//     spanMinutes: document.querySelector("[data-minutes]"),
//     spanSeconds: document.querySelector("[data-seconds]"),
// }
// //console.log(refs);

// refs.startBtn.addEventListener('click', startClick);
// refs.startBtn.disabled = true;

// function startClick(evt) {
//   if (timer2) {
//     clearTimeout(timer2);
//     timer2 = null;
//   }
//   timer = setInterval(updateTimerDisplay, 1000);
//   btnStartRef.disabled = true;
// }

// function pad(value) {
//     return String(value).padStart(2,'0')
// };

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = pad(Math.floor(ms / day));
//   // Remaining hours
//   const hours = pad(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = pad(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

//   return { days, hours, minutes, seconds };
// };

// // console.log(`${days}:${hours}:${minutes}:${seconds}`);
