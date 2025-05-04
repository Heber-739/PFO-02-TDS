const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameText = document.getElementById("form_name").value.trim();
    const messageText = document.getElementById("form_message").value.trim();
    const fromMail = document.getElementById("form_email").value.trim();
    const phoneText = document.getElementById("form_phone").value.trim();
    const purposeText = document.getElementById("form_purpose").value.trim();

    if (!nameText || !messageText || !fromMail) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fromMail)) {
        alert("Por favor, ingrese un email válido.");
        return;
    }


    const mail = "heberduarteryr@gmail.com";
    const purpose = encodeURIComponent(purposeText);
    const body = encodeURIComponent(`Hola, mi nombre es: ${nameText}\nMi numero de telefono es: ${phoneText}\nMi correo es: ${fromMail}\n\n${messageText}`);

    console.log("HBR",{mail,
        purpose,
        body})

    const mailto = `mailTo:${mail}?subject=${purpose}&body=${body}`;
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('href', `mailto:${mail}?subject=${purpose}&body=${body}`);
    a.setAttribute('target', '_blank');
    a.click();
    a.remove()
});

//   Controla la altura del textarea
  const textarea = document.getElementById("form_message");
  textarea.addEventListener("input", () => textarea.style.height = textarea.scrollHeight + "px");