const myImage = document.querySelector("#myImg");
const buttonImg = document.querySelector("#showImg");

buttonImg.addEventListener("click", () => {
  fetch(
    "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
  )
    .then((response) => response.blob())
    .then(function (myBlob) {
      const objectURL = URL.createObjectURL(myBlob);
      myImage.src = objectURL;
    });
});

