//Time
    function updateClock() {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      // Add leading zeros
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      const currentTime = `${hours}:${minutes}:${seconds}`;
      document.getElementById('clock').textContent = currentTime;
    }

    // Update every second
    setInterval(updateClock, 1000);
    updateClock(); // Initial call


//Calculator
//DOM loading
document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".display");
  const buttons = document.querySelectorAll(".buttons button");

  buttons.forEach(button => {
    const value = button.textContent;

    button.addEventListener("click", () => {
      switch (value) {
        case "AC":
          display.value = "";
          break;
        case "DEL":
          display.value = display.value.slice(0, -1);
          break;
        case "=":
          try {
            // Evaluate the expression
            display.value = eval(display.value);
          } catch {
            display.value = "Error";
          }
          break;
        default:
          display.value += value;
      }
    });
  });
});
