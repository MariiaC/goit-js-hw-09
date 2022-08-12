// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
  // inputPicker: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  spanDays: document.querySelector('[data-days]'),
  spanHours: document.querySelector('[data-hours]'),
  spanMinutes: document.querySelector('[data-minutes]'),
  spanSeconds: document.querySelector('[data-seconds]'),
};
refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', startClick);
let countDownTimer = null;



const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (Date.parse(selectedDates) < Date.parse(new Date())) {
            Notiflix.Notify.failure('❌ Please choose a date in the future')
        } 
        countDownTimer = Date.parse(selectedDates[0]) - Date.parse(new Date());
        refs.startBtn.disabled=false
    }
}


function startClick() {
    let timer = setInterval(() =>{
const { days, hours, minutes, seconds } = convertMs(
      (countDownTimer = countDownTimer - 1000)
    );
    const dd = days.toString();
    const hh = hours.toString();
    const mm = minutes.toString();
        const ss = seconds.toString();

    refs.spanDays.textContent =
      dd.length > 1 ? dd : addLeadingZero(dd);
    refs.spanHours.textContent =
      hh.length > 1 ? hh : addLeadingZero(hh);
    refs.spanMinutes.textContent =
      mm.length > 1 ? mm : addLeadingZero(mm);
    refs.spanSeconds.textContent =
      ss.length > 1 ? ss : addLeadingZero(ss);
  }, 1000);
}

flatpickr('#datetime-picker', options);




//додаємо 0 поперед цифри для фен-шуя по умові)
function addLeadingZero(value) {
  return value.padStart(2,'0')
};
// function setPad(days = '0', hours = '0', minutes = '0', seconds = '0') {
//   refs.spanDays.textContent = addLeadingZero(String(days));
//   refs.spanHours.textContent = addLeadingZero(String(hours));
//   refs.spanMinutes.textContent = addLeadingZero(String(minutes));
//   refs.spanSeconds.textContent = addLeadingZero(String(seconds));
// }
//за умовою
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = (Math.floor(ms / day));
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
  };