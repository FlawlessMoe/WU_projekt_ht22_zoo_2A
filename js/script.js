function validateForm() {
    // Hämta fälten för namn, e-postadress och meddelande
    var namn = document.getElementById("namn").value;
    var epost = document.getElementById("epost").value;
    var meddelande = document.getElementById("meddelande").value;
    
    // Kontrollera att alla fält är ifyllda
    if (namn == "" || epost == "" || meddelande == "") {
      alert("Alla fält måste vara ifyllda!");
      return false;
    }
    
    // Kontrollera att e-postadressen är giltig
    var atpos = epost.indexOf("@");
    var dotpos = epost.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos+2 || dotpos+2 >= epost.length) {
      alert("Ange en giltig e-postadress!");
      return false;
    }
    
    // Om allt ser bra ut, skicka formuläret
    return true;
}

function increase(id) {
    var element = document.getElementById(id);
    element.innerHTML = parseInt(element.innerHTML) + 1;
}

function decrease(id) {
    var element = document.getElementById(id);
    element.innerHTML = Math.max(0, parseInt(element.innerHTML) - 1);

}

document.getElementById("buy-button").addEventListener("click", function() {
    var element = document.getElementById("antal-barn");
    element.innerHTML = 0;
});

document.getElementById("buy-buttonn").addEventListener("click", function() {
    var element = document.getElementById("antal-vuxen");
    element.innerHTML = 0;
});

document.getElementById("buy-buttonnn").addEventListener("click", function() {
    var element = document.getElementById("antal-husdjur");
    element.innerHTML = 0;
});

document.getElementById("minus-barn").addEventListener("click", function() {
    decrease("antal-barn");
});

document.getElementById("plus-barn").addEventListener("click", function() {
    increase("antal-barn");
});

document.getElementById("minus-vuxen").addEventListener("click", function() {
    decrease("antal-vuxen");
});

document.getElementById("plus-vuxen").addEventListener("click", function() {
    increase("antal-vuxen");
});

document.getElementById("minus-husdjur").addEventListener("click", function() {
    decrease("antal-husdjur");
});

document.getElementById("plus-husdjur").addEventListener("click", function() {
    increase("antal-husdjur");
});