
//Logs when user double clicks on page
document.addEventListener('dblclick', (event) => {
  console.log('dokumenttia tuplaklikattu', event);
});

//User gets a prompt "Cheat Code!" whenever "hello" is typed on keyboard
const gameCheatCode = () => {
  let keyword = "";

  const checkKeyword = () => {
    if (keyword.toLowerCase().includes("hello")) {
      alert("Cheat Code!");
      keyword = "";
    };
  };

  window.addEventListener("keypress", (event) => {
    keyword += event.key;
    checkKeyword();
  });
};

//Tells user to hurry up after 15 seconds of browsing
const hurryUpTimer = () => {
  const timeout = setTimeout(() => {
    const hurryEl = document.querySelector(".hurry");
    hurryEl.textContent = "Hurry up!";
  }, 15000);

  document.addEventListener("click", () => {
    clearTimeout(timeout);
  });
};

//Warn user after 15s of inactivity
const inactivity = () => {
  let timeoutId;

  const resetTimer = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(showPrompt, 15000);
  };

  const showPrompt = () => {
    alert("Are you still there?");
  };

  window.addEventListener("mousemove", resetTimer);
  window.addEventListener("keypress", resetTimer);

  resetTimer();
};

//Logs touches but not clicks
const touch = () => {
  const handleTouchStart = (event) => {
    console.log("touch");
  };

  const handleTouchEnd = (event) => {
    // Do nothing
  };

  const handleClick = (event) => {
    event.stopPropagation();
  };

  document.addEventListener("touchstart", handleTouchStart);
  document.addEventListener("touchend", handleTouchEnd);
  document.addEventListener("click", handleClick);
};

window.onload = function() {
  gameCheatCode();
  hurryUpTimer();
  inactivity();
  touch();
};
