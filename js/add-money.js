document.getElementById("add-money-btn").addEventListener("click", () => {
  const balance = getValue("balance");
  const bank = getValueFromInput("add-money-bank-input");
  const accountNumber = getValueFromInput("add-money-account-input");
  const amountNumber = getValueFromInput("add-money-amount-input", true);
  const pinInput = getValueFromInput("add-money-pin-input");

  if (bank === "Select-bank") {
    alert("Must Select a bank");
    return;
  }
  if (!setError(accountNumber, 11, "Account Number Must be 11 digits.")) return;
  if (amountNumber > Number(balance) || amountNumber <= 0) {
    alert("Enter a valid amount to procced");
    return;
  }
  if (!setError(pinInput, 4, "Pin Number Must be 4 digits.")) return;

  if (accountNumber == "01319698855" && pinInput == "1234") {
    alert("Amount Added Successful");
    const newBalance = amountNumber + Number(balance);
    setValue("balance", newBalance);
    setValue("add-money-bank-input", "Select-bank",true);
    setValue("add-money-account-input", "",true);
    setValue("add-money-amount-input", "",true);
    setValue("add-money-pin-input", "",true);
    updateHistory("transaction-carts-container", amountNumber, new Date(), "Add Money");
    updateHistory("latest-payment-carts-container", amountNumber, new Date(), "Add Money");


  }else{
    alert("Invalid Account detailes")
    return
  }
});
