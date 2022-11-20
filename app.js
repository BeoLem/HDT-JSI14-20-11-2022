const timers = [
  {
    id: 1,
    s: 0,
    m: 0,
    stopCounting: false,
  },
  {
    id: 2,
    s: 0,
    m: 0,
    stopCounting: false,
  },
  {
    id: 3,
    s: 0,
    m: 0,
    stopCounting: false,
  },
  {
    id: 4,
    s: 0,
    m: 0,
    stopCounting: false,
  },
  {
    id: 5,
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

pauseButton(document.querySelector('button.pause[data-id="1"]'));
pauseButton(document.querySelector('button.pause[data-id="2"]'));
pauseButton(document.querySelector('button.pause[data-id="3"]'));
pauseButton(document.querySelector('button.pause[data-id="4"]'));
pauseButton(document.querySelector('button.pause[data-id="5"]'));

document.querySelector("button.stopAll").addEventListener("click", () => {
  timers.map((v) => {
    stopp(v, v.id);
  });
});

document.querySelector("button.startAll").addEventListener("click", () => {
  timers.map((v) => {
    startt(v, v.id);
  });
});

function startButton(button) {
  const id = button.dataset.id;
  const obj = timers[id - 1];

  button.addEventListener("click", () => {
    timers[id - 1].stopCounting = false;
    startt(obj, id);
  });
}

function startt(obj, id) {
  obj.stopCounting = false;
  const interval = setInterval(() => {
    if (obj.stopCounting) return clearInterval(interval);
    obj.s++;
    if (obj.s == 60) {
      obj.m++;
      obj.s = 0;
    }

    const minutes = obj.m < 10 ? `0${obj.m}` : obj.m;
    const seconds = obj.s < 10 ? `0${obj.s}` : obj.s;

    timerList[
      id - 1
    ].children[0].innerText = `${id}. ${minutes}:${seconds}`;
  }, 1000);
}

function stopButton(button) {
  const id = button.dataset.id;
  const obj = timers[id - 1];

  button.addEventListener("click", () => {
    stopp(obj, id);
  });
}

function pauseButton(button) {
  const id = button.dataset.id;
  const obj = timers[id - 1];

  button.addEventListener("click", () => {
    pause(obj, id);
  });
}

function pause(obj, id) {
  obj.stopCounting = true;
}

function stopp(obj, id) {
  obj.stopCounting = true;

  obj.m = 0;
  obj.s = 0;

  const minutes = obj.m < 10 ? `0${obj.m}` : obj.m;
  const seconds = obj.s < 10 ? `0${obj.s}` : obj.s;

  timerList[
    id - 1
  ].children[0].innerHTML = `<span>${id}. ${minutes}:${seconds}</span>`;
}
