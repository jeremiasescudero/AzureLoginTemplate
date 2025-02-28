import { msalInstance } from "/authConfig.js";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (!email.includes("@") || password.length < 6) {
        errorMessage.textContent = "Correo inválido o contraseña muy corta.";
        errorMessage.style.display = "block";
        return;
    }

    errorMessage.style.display = "none";
    alert("Validación correcta. Aquí iría la lógica de autenticación local.");
});


function loginWithAzure() {
    window.location.href = "https://gambit3teee3.b2clogin.com/gambit3teee3.onmicrosoft.com/oauth2/v2.0/authorize?" +
        "p=B2C_1_SIGNUP_LOGIN" +  
        "&client_id=9a2b7851-9c08-4fb1-a88b-7d3c48f47e95" +  
        "&nonce=defaultNonce" +
        "&redirect_uri=https://gambit3.teee3.com/signin-oidc" +  
        "&scope=openid%20profile%20email" +
        "&response_type=id_token" +
        "&prompt=login";
}
