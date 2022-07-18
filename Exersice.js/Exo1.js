const myImage = document.querySelector("#myImg");
const buttonImg = document.querySelector("#showImg");

buttonImg.addEventListener("click", () => {
  fetch(
    "https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png"
  )
    .then((response) => response.blob())
    .then(function (myBlob) {
      const objectURL = URL.createObjectURL(myBlob);
      myImage.src = objectURL;
    });
});
