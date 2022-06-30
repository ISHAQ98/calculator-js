(function () {
  // Grap All the html elements
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-red");
  let equal = document.querySelector(".btn-blue");

  // function for buttons to be clicked
  
  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.key.target.dataset.num;
      screen.value += value;
    });
  });

  // function calculator's screen
  
  equal.addEventListener("click", function (e) {
    if (screen.value == " ") {
      screen.value = "Please enter";
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });
  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();
