let message = "";

for (let i = 100; i <= 200; i++) {
  message = (i % 3 === 0 ? "Loopy" : "") + (i % 4 === 0 ? "Lighthouse" : "")
  message === "" ? console.log(i) : console.log(message);
}