let intervalId; // переменная для таймерасекунда

let bottom = false, // начальное расположение - квадратик вверху
  right = false, // начальное расположение - квадратик слева
  time = 1000; // интервал по умолчанию 1 секунда

let leftOffset = 0; //  координата по Х
let topOffset = 0; //  координата по Y

let count = 0;

let box = document.getElementById("box");

function moveBox() {
  // двигаем квадратик

  box.style.left = leftOffset + "px";
  box.style.top = topOffset + "px";

  if (leftOffset > 200) {
    // если leftOffset достигла 200, то квадрат справа
    right = true;
  } else if (leftOffset == 0) {
    // если leftOffset == 0, то квадрат слева
    right = false;
  }

  if (topOffset > 200) {
    // если topOffset достигла 200, то квадрат внизу
    bottom = true;
  } else if (topOffset == 0) {
    // если topOffset == 0, то квадрат вверху
    bottom = false;
  }

  if (bottom == false && right == false) {
    // если  квадрат в верхнем левом углу, двигаем вниз
    topOffset = topOffset + 30;
  }

  if (bottom == false && right == true) {
    // если  квадрат в верхнем правом углу, двигаем налево
    leftOffset = leftOffset - 30;
  }

  if (bottom == true && right == false) {
    // если  квадрат в верхнем левом углу, двигаем направо
    leftOffset = leftOffset + 30;
  }

  if (bottom == true && right == true) {
    // если  квадрат в правом левом углу, двигаем вверх
    topOffset = topOffset - 30;
  }


}

function speed() {
  // функция для задания скорости
  //time = prompt("Введите скорость"); // установили новое время
  // time зменшити
  count++;
  console.log(time);
  box.innerHTML = time; // записали информацию о новом времени на квадратике
  clearInterval(intervalId); // Очищаем старый интервал
  intervalId = setInterval(moveBox, time); // устанавливаем новый
}

intervalId = setInterval(moveBox, time);

setTimeout(function () {
/*   */
}, 10000);

box.addEventListener("click", speed);
