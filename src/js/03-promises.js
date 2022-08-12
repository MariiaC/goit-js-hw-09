
import Notiflix from 'notiflix';

const refs = {
  formClass: document.querySelector('.form'),
  delayNumber: document.querySelector('[name="delay"]'),
  stepNumber: document.querySelector('[name="step"]'),
  amountNumber: document.querySelector('[name="amount"]'),
};

refs.formClass.addEventListener('submit', promiseClick);

function promiseClick(event) {
  event.preventDefault();

  const firstDelay = Number(refs.delayNumber.value);
  const delayStep = Number(refs.stepNumber.value);

  for (let i = 0; i < refs.amountNumber.value; i+=1) {
    createPromise(i + 1, firstDelay + delayStep * i)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }// Fulfill
      reject({ position, delay });
    }, delay); // Reject
  })
  
}
