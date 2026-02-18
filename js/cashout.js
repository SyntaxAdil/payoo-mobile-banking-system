document.getElementById("cashout-btn").addEventListener("click", () => {
  const balance = getValue("balance");
  const agentNumber = getValueFromInput("cashout-agent-input");
  const amountNumber = getValueFromInput("cashout-amount-input", true);
  const pinInput = getValueFromInput("cashout-pin-input");

  if (!setError(agentNumber, 11, "Agent Number Must be 11 digits.")) return;
  if (amountNumber <= 0) {
    alert("Enter a valid amount to procced");
    return;
  }
  if (!setError(pinInput, 4, "Pin Number Must be 4 digits.")) return;

  if (pinInput == "1234") {
    alert("Cashout Successful");
    const newBalance =  Number(balance) - amountNumber  ;
    setValue("balance", newBalance);
    setValue("cashout-agent-input","",true)
    setValue("cashout-amount-input","",true)
    setValue("cashout-pin-input","",true)
    updateHistory("transaction-carts-container", amountNumber, new Date(), "Cashout");
    updateHistory("latest-payment-carts-container", amountNumber, new Date(), "Cashout");
  }else{
    alert("Invalid Pin Number")
    return
  }

});
