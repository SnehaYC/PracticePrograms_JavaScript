/** @format */

const countDown = (x) => {
  if (x < 0) return;
  console.log(x);
  countDown(x - 1);
};

countDown(10);

const countUp = (y, max) => {
  if (y > max) return;
  console.log(y);
  countUp(y + 1, max);
};

countUp(0, 10);
