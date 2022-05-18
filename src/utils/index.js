const DecToInt = (dec) => {
  if (dec % 1 === 0) {
    return parseInt(dec, 10);
  }
  return parseInt(dec * 10, 10) / 10;
};

export { DecToInt };
