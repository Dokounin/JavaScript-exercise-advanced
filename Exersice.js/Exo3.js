const inputNamePromotion = document.querySelector("#inputNameSave");
const registerButton = document.querySelector("#register");
const deleteButton = document.querySelector("#delete");
const loadButton = document.querySelector("#load");

deleteButton.addEventListener("click", deleteFn);
registerButton.addEventListener("click", saveFn);
loadButton.addEventListener("click", loadPromotionName);

function deleteFn() {
  if (window.alert("êtes-vous sûr de vouloir supprimer le cache ?")) {
}
localStorage.removeItem("promotionName");
}

function saveFn() {
  localStorage.setItem(
    "promotionName",
    JSON.stringify(inputNamePromotion.value)
  );
}

function loadPromotionName() {
  inputNamePromotion.value = JSON.parse(localStorage.getItem("promotionName"));
}
