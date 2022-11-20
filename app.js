const timers = [
  {
    id: 1,
    ms: 0,
    s: 0,
    m: 0,
    stopCounting: false,
  },
  {
    id: 2,
    ms: 0,
    s: 0,
    m: 0,
    stopCounting: false,
  },
  {
    id: 3,
    ms: 0,
    s: 0,
    m: 0,
    stopCounting: false,
  },
  {
    id: 4,
    ms: 0,
    s: 0,
    m: 0,
    stopCounting: false,
  },
  {
    id: 5,
    ms: 0,
    s: 0,
    m: 0,
    stopCounting: false,
  },
];

const timers_container = document.querySelector("div.timers_container");
const timerList = [];

document.querySelectorAll("div.timer").forEach((v) => timerList.push(v));

const startButtons = document.querySelectorAll("button[class=start]");
const pauseButtons = document.querySelectorAll("button[class=pause]");
const stopButtons = document.querySelectorAll("button[class=stop]");

startButton(document.querySelector('button.start[data-id="1"]'));
startButton(document.querySelector('button.start[data-id="2"]'));
startButton(document.querySelector('button.start[data-id="3"]'));
startButton(document.querySelector('button.start[data-id="4"]'));
startButton(document.querySelector('button.start[data-id="5"]'));

stopButton(document.querySelector('button.stop[data-id="1"]'));
stopButton(document.querySelector('button.stop[data-id="2"]'));
stopButton(document.querySelector('button.stop[data-id="3"]'));
stopButton(document.querySelector('button.stop[data-id="4"]'));
stopButton(document.querySelector('button.stop[data-id="5"]'));

document.querySelector("button.stopAll").addEventListener("click", () => {
  timers.map((v) => {
    stopp(v, v.id)
    setInterval(() => {
        stopp(v, v.id)
    }, 2)
  });
});

function startButton(button) {
  const id = button.dataset.id;
  const obj = timers[id - 1];

  button.addEventListener("click", () => startt(obj, id));
}

function startt(obj, id) {
  obj.stopCounting = false;
  const interval = setInterval(() => {
    if (obj.stopCounting == true) clearInterval(interval);
    obj.ms++;
    if (obj.ms == 100) {
      obj.s++;
      obj.ms = 0;
    }
    if (obj.s == 60) {
      obj.m++;
      obj.s = 0;
    }

    const minutes = obj.m < 10 ? `0${obj.m}` : obj.m;
    const seconds = obj.s < 10 ? `0${obj.s}` : obj.s;
    const ms = obj.ms < 10 ? `0${obj.ms}` : obj.ms;

    timerList[
      id - 1
    ].children[0].innerHTML = `<span>${id}. ${minutes}:${seconds}:${ms}</span>`;
  }, 1);
}

function stopButton(button) {
  const id = button.dataset.id;
  const obj = timers[id - 1];

  button.addEventListener("click", () => {
    stopp(obj, id);
    setInterval(() => {
      stopp(obj, id);
    }, 1);
  });
}

function stopp(obj, id) {
  obj.stopCounting = true;

  obj.m = 0;
  obj.ms = 0;
  obj.s = 0;

  const minutes = obj.m < 10 ? `0${obj.m}` : obj.m;
  const seconds = obj.s < 10 ? `0${obj.s}` : obj.s;
  const ms = obj.ms < 10 ? `0${obj.ms}` : obj.ms;

  timerList[
    id - 1
  ].children[0].innerHTML = `<span>${id}. ${minutes}:${seconds}:${ms}</span>`;
}

// START BI LOI