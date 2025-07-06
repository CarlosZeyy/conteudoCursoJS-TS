(function clock() {
  const clockTimer = document.querySelector(".relogio");
  let timer;
  let seconds = 0;

  function getTimeInSeconds(seconds) {
    const date = new Date(seconds * 1000);

    return date.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  function switchColor(color) {
    clockTimer.style.color = color;
  }

  function startTimerCount() {
    timer = setInterval(() => {
      seconds++;
      clockTimer.innerHTML = getTimeInSeconds(seconds);
    }, 1000);
  }

  document.addEventListener("click", (e) => {
    const el = e.target;

    if (el.id === "start") {
      clearInterval(timer);
      startTimerCount();
      switchColor("");
    }

    if (el.id === "pause") {
      clearInterval(timer);
      switchColor("red");
    }

    if (el.id === "reset") {
      clearInterval(timer);
      switchColor("");
      seconds = 0;
      clockTimer.innerHTML = `00:00:00`;
    }
  });
})();
