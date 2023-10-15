let url = document.getElementById("qrText");
let qrImgBox = document.getElementById("qrImageBox");
let qrImg = document.getElementById("qrImage");
let qrBtn = document.getElementById("qrBtn"); 

function generateQR(){
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + url.value;
    qrImgBox.classList.add("show-img");
}
