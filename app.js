const div = document.querySelector('div');

let height = -1;
let bgColor = 'red';
let flag = true;

document.addEventListener('scroll', () => {

  if (height > 100) {
    flag = false;
    bgColor = 'green';
  }
  if (height <= 0) {
    flag = true;
    bgColor = 'red';
  }

  if (flag) {
    height++;
  } else {
    height--;
  }

  div.style.height = height + 'vh';
  div.style.background = bgColor;
})