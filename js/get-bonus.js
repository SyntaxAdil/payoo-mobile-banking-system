document.getElementById("get-bonus-btn").addEventListener("click", () => {
  const userinput = getValueFromInput("get-bonus-input"); 
    const balance = getValue("balance");

const couponCodes=[
    "adil-009",
    "adil-105",
    "adil-600",
    "adil-005",
    "adil-900",
]
  if (!setError(userinput, 8, "Enter a valid coupon number.")) return;
   

  if (couponCodes.includes(userinput) ) {
    alert(`Congratulations you got a bonus of of 10tk `);
    const newBalance =  Number(balance) + 10  ;
    setValue("balance", newBalance);
    setValue("get-bonus-input","",true)
    updateHistory("transaction-carts-container", 10, new Date(), "Got Bonus");
    updateHistory("latest-payment-carts-container", 10, new Date(), "Got Bonus");
    
  }else{
    alert(`Invalid Coupon code`)
    return
  }

});
