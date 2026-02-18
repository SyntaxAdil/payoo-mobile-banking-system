document.getElementById("transfer-btn").addEventListener("click", () => {
  const balance = getValue("balance");
  const userNumber = getValueFromInput("transfer-user-number-input");
  const amountNumber = getValueFromInput("transfer-amount-input", true);
  const pinInput = getValueFromInput("transfer-pin-input");

  if (!setError(userNumber, 11, "User Number Must be 11 digits.")) return;
  if (amountNumber <= 0 || amountNumber> Number(balance)) {
    alert("Enter a valid amount to procced");
    return;
  }
  if (!setError(pinInput, 4, "Pin Number Must be 4 digits.")) return;

  if (pinInput == "1234" ) {
    alert(`Transfer Successful to ${userNumber}`);
    const newBalance =  Number(balance) - amountNumber  ;
    setValue("balance", newBalance);
    setValue("transfer-user-number-input","",true)
    setValue("transfer-amount-input","",true)
    setValue("transfer-pin-input","",true)
    updateHistory("transaction-carts-container", amountNumber, new Date(), "Trasnfer Money");
    updateHistory("latest-payment-carts-container", amountNumber, new Date(), "Transfer Money");
  }else{
    alert(`Invalid Pin Number`)
    return
  }

});
