const adviceContainer = document.getElementById("advice");
const adviceNumContainer = document.getElementById("adviceNum");
const btn = document.getElementById("btn");
const url = "https://api.adviceslip.com/advice";

let getAdvice = () => {
  //generates random number to prevent caching
  const cacheBuster = Math.random();
  fetch(`${url}?${cacheBuster}`)
    .then((data) => data.json())
    .then((item) => {
      adviceContainer.textContent = `"${item.slip.advice}"`;
      adviceNumContainer.textContent = `${item.slip.id}`;
    });
};

btn.addEventListener("click", getAdvice);
