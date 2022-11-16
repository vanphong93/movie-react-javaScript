export const randomNumber = (max, min) => {
  if (min) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return Math.floor(Math.random() * max);
};

export const devideNumber = (number) => {
  let a = number % 5;
  if (a > 1) {
    return a * 30;
  } else {
    return 60;
  }
};

