document.getElementById("paybill-btn").addEventListener("click", () => {
  const balance = getValue("balance");
  const bank = getValueFromInput("paybill-bank-input");
  const accountNumber = getValueFromInput("paybill-biller-account-input");
  const amountNumber = getValueFromInput("paybill-amount-input", true);
  const pinInput = getValueFromInput("paybill-pin-input");

  if (bank === "Select To Pay") {
    alert("Must Select a bank");
    return;
  }
  if (!setError(accountNumber, 13, "Account Number Must be 13 digits.")) return;
  if (amountNumber > Number(balance) || amountNumber <= 0) {
    alert("Enter a valid amount to procced");
    return;
  }
  if (!setError(pinInput, 4, "Pin Number Must be 4 digits.")) return;
if(!accountNumber.startsWith("payoo-")) {
    alert("Invalid Account Number")
    return
}
  if (pinInput == "1234") {
    alert("Payment Successful");
    const newBalance =  Number(balance) -amountNumber;
    setValue("balance", newBalance);
    setValue("paybill-bank-input", "Select To Pay",true);
    setValue("paybill-biller-account-input", "",true);
    setValue("paybill-amount-input", "",true);
    setValue("paybill-pin-input", "",true);
    updateHistory("transaction-carts-container", amountNumber, new Date(), "Paybill");
    updateHistory("latest-payment-carts-container", amountNumber, new Date(), "Paybill");

  }else{
    alert("Invalid Account detailes")
    return
  }
});
