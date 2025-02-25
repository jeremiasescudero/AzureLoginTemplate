import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: "9a2b7851-9c08-4fb1-a88b-7d3c48f47e95", // Tu Client ID en Azure
        authority: "https://gambit3teee3.b2clogin.com/gambit3teee3.onmicrosoft.com/B2C_1_SIGNUP_LOGIN", // URL de tu User Flow
        knownAuthorities: ["gambit3teee3.b2clogin.com"], // Debe coincidir con el dominio de tu tenant
        redirectUri: "https://jeremiasscudero.github.io/AzureLoginTemplate/index.html" // Asegúrate de que sea la URI configurada en Azure
    },
    cache: {
        cacheLocation: "sessionStorage", // Puedes cambiar a "localStorage" si deseas persistencia
        storeAuthStateInCookie: true // Evita problemas con navegadores restringidos (Safari, Brave)
    }
};

// Configuración de los permisos solicitados
const loginRequest = {
    scopes: ["openid", "profile"]
};

export const msalInstance = new PublicClientApplication(msalConfig);
export { loginRequest };
