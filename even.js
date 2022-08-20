const isEven  = function (num) {
  return num % 2 === 0;
};

for (let i = 1; i <= 12; i++){
  console.log(i + " is " + (isEven(i) ? "even.": "odd."));
}
