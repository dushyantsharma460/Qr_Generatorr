let imageBox = document.getElementById("imgBox");
let qrCodeImage = document.getElementById("qrImage");
let qrCodeText = document.getElementById("qrText");
let generateButtonReceive = document.getElementById("generateButton");
function generateQR(){
    if (qrCodeText.value.trim() !== "") {
        qrCodeImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrCodeText.value;
        imageBox.classList.add("show-img");
    }
    else {
        qrCodeText.classList.add('error');
        setTimeout(() => {
            qrCodeText.classList.remove('error');
        },10000);
    }
}