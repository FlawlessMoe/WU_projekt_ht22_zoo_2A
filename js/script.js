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