const ratingsWrapper = document.querySelectorAll(".btn");
let ratings = 0;
const submit = document.getElementById("submit-btn");

const container = document.querySelector(".container");

ratingsWrapper.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = btn.innerText;
    ratings = value;
  });
});
submit.addEventListener("click", () => {
  const successMsg = `<div class="new-container">
        <div class="img-container">
        <img src="/images/illustration-thank-you.svg" alt="" />
        </div>
        
        <div class="thank-you">
        <div class="selection"><p>You have selected ${ratings} of 5</p></div>
        <h1>Thank You</h1>
        <p>We appreciate you taking the time to give a rating, If you ever need more support, don't hesitate to get in touch!</p>
        </div>
        
      </div>`;
  container.innerHTML = successMsg;
  return container;
});
