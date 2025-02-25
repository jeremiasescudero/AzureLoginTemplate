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

/**
 * Iniciar sesión con Azure AD B2C
 */
async function loginWithAzure() {
    try {
        const loginResponse = await msalInstance.loginPopup({
            scopes: ["openid", "profile", "email"]
        });

        console.log("Usuario autenticado:", loginResponse.account);
        alert(`Bienvenido, ${loginResponse.account.username}`);

        // Aquí puedes redirigir al usuario a otra página
        // window.location.href = "/dashboard";
    } catch (error) {
        console.error("Error en el inicio de sesión con Azure:", error);
        document.getElementById("error-message").textContent = "Error al iniciar sesión con Azure.";
        document.getElementById("error-message").style.display = "block";
    }
}
