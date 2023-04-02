const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

let interval

const createTimerAnimator = () => {
  return (value) => {
    clearInterval(interval)

    interval = setInterval(() => {
      if(value > 0) {
        value--
        let seconds = Math.floor((value) % 60);
        let minutes = Math.floor((value / 60) % 60);
        let hours = Math.floor((value / (60 * 60)));
        timerEl.innerHTML = `${hours < 10 ? ('0' + hours).slice(-2) : hours}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`
      }
    },1000)  
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  let result = inputEl.value.replace(/\D/gm, '')
  inputEl.value = result
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
