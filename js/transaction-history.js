
const parentDiv = document.getElementById("latest-payment-carts-container");
if(parentDiv.innerHTML.trim()===""){
  const p=document.createElement("p")
  p.innerText="No Transactions Yet"
  p.id="no-mssg"
  p.classList="text-neutral/60 text-center pt-10 select-none"
 parentDiv.appendChild(p)
}
const parentDiv2 = document.getElementById("transaction-carts-container");
if(parentDiv2.innerHTML.trim()===""){
  const p=document.createElement("p")
  p.innerText="No Transactions Yet"
  p.id="no-mssg"
  p.classList="text-neutral/60 text-center pt-10 select-none"
 parentDiv2.appendChild(p)
}
function updateHistory(parent, amount, date, title) {
  
  const parentDiv = document.getElementById(parent);
  if (!parentDiv) return;
  const errMessage=document.getElementById("no-mssg");
  if(errMessage){
    errMessage.remove()

  }
 
  const div = document.createElement("div");
  div.className = "transaction-payment-cart bg-base-100 p-5 rounded-xl border border-neutral/10 flex items-center gap-2";

  const today = new Date().toLocaleDateString();
  const transactionDate = date.toLocaleDateString();

  div.innerHTML = `
      <div class="h-[55px] w-[55px] rounded-full bg-base-200 flex items-center justify-center">     
          <img src="./assets/opt-1.png" alt="add-money">
      </div>
      <div class="flex items-center justify-between flex-1">
          <div>
              <h3 class="text-base font-semibold text-neutral">
                ${title} <span class="text-primary">${amount} BDT</span>
              </h3>
              <p class="text-[12px] text-neutral/60">
                ${transactionDate === today ? "Today" : transactionDate}
                ${date.toLocaleTimeString()}
              </p>
          </div>
      </div>
  `;

  parentDiv.prepend(div); // newest on top
}
