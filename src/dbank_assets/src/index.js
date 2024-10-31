import {dbank} from "../../declarations/dbank";

window.addEventListener("load", async function () {
  
  this.document.getElementById("value").innerText =  (await dbank.checkBalance()).toFixed(2);
  const x = await dbank.checkBalance();
  console.log(x);
  

});

document.querySelector("form").addEventListener("submit", async function (event) {
  event.preventDefault();
  // console.log(event);

  const button = event.target.querySelector("#submit-btn");

  const input1 = parseFloat(document.getElementById("input-amount").value);
  const input2 = parseFloat(document.getElementById("withdrawal-amount").value);

  button.setAttribute("disabled", true);

  if(input1 !== NaN){
    await dbank.topUp(input1);
    document.getElementById("input-amount").value = "";
  }
  else if(input2 !== NaN){
    await dbank.withdrawl(input2);
    document.getElementById("withdrawal-amount").value = "";
  }

  document.getElementById("value").innerText =  (await dbank.checkBalance()).toFixed(2);
  button.removeAttribute("disabled");
  
})