const productImage = document.getElementsByClassName(".wrapper");
const pict = document.getElementsByTagName("img");
const ngeblur = () =>{
    pict.style.opacity = "0.5";
}
productImage.addEventListener("mouseout", ngeblur());

