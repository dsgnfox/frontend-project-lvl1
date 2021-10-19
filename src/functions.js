export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const isOddNumber = (number) => number % 2 === 0;

export const getGcd = (a, b) => {
  if (b) {
    return getGcd(b, a % b);
  }
  return Math.abs(a);
};
