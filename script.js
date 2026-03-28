document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("miFormulario"); 

    form.addEventListener("submit", function(e) {

        const password = document.getElementById("password").value;
        const celular = document.getElementById("celular").value;

        if (password.length !== 16) {
            alert("La contraseña debe tener exactamente 16 caracteres");
            e.preventDefault();
            return;
        }

        if (celular.length !== 10) {
            alert("El celular debe tener 10 dígitos");
            e.preventDefault();
            return;
        }

        alert("Formulario enviado correctamente");
    });

});