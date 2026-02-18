document.getElementById("login-btn").addEventListener("click", () => {
  const contactNumber = getValueFromInput("mobile-input");
  const pinNumber = getValueFromInput("pin-input");
  if (!contactNumber || !pinNumber) {
    alert("Please fill all the detailes");
    return;
  }
  if (!setError(contactNumber, 11, "Mobile Number Must be 11 digits")) return;
  if (!setError(pinNumber, 4, "Pin Number Must be 4 digits")) return;

  if (contactNumber == "01319698855" && pinNumber == "1234") {
    alert("Login Successful");
    setValue("mobile-input", "", true);
    setValue("pin-input", "", true);
    window.location.assign("/home.html");
  } else {
    alert("Login Failed");
    return;
  }
});
