// common function to use over the website

const getValueFromInput = (id, isNumber) => {
  if (!id) return;
  let targetVal = document.getElementById(id).value;
  if (isNumber) {
    return Number(targetVal);
  }
  return targetVal;
};
const getValue=(id)=>{
    return document.getElementById(id).innerText;
}
const setValue = (id, val, isNumber) => {
  if (!id) return;
  let targetVal = document.getElementById(id);
  if (isNumber) {
    targetVal.value = val;
    return val;
  }
  
  targetVal.innerText = val;
  return val;
};

const setError = (value, exactLength, message) => {
  if (!value || value.length !== exactLength) {
    alert(message);
    return false;
  }
  return true;
};


const btnGrp= document.querySelector(".btn-group");

btnGrp.addEventListener("click",(e)=>{
  const tabBtns=document.querySelectorAll(".btn-group button")
  tabBtns.forEach(i=>i.classList.remove("btn-active"));

  const target= e.target.dataset.target;

  e.target.classList.add("btn-active")
  
handleTabSection(target)
})

const handleTabSection=(targetId)=>{
  const parentSction=document.querySelectorAll(".section-container section");
  parentSction.forEach(i=>i.classList.add("hidden"))
  const target=document.getElementById(targetId);
  target.classList.remove("hidden");


}
 window.addEventListener("load", () => {
  const latestTab = "latest-payment";
  if (latestTab) handleTabSection(latestTab);
});

// key event

const handleKeyEvent=(container)=>{
  const input=document.querySelectorAll(`${container} input`);
  function handleEnter(e){
    if(e.key==="Enter"){
      document.querySelector(`${container} button`).click();
    }
  }
  input.forEach(i=>i.addEventListener("keydown",handleEnter));
  
}

handleKeyEvent(".section-container")