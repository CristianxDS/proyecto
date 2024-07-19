document.getElementById("termsLink").addEventListener("click", function(event) {
    event.preventDefault();
    var infoText = document.getElementById("infoText");
    if (infoText.style.display === "none") {
        infoText.style.display = "block";
    } else {
        infoText.style.display = "none";
    }
});