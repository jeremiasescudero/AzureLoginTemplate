import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: "9a2b7851-9c08-4fb1-a88b-7d3c48f47e95", // Reemplázalo con el Client ID de Azure
        authority: "https://gambit3teee3.b2clogin.com/gambit3teee3.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_SIGNUP_LOGIN", // Reemplázalo con tu Tenant Name y User Flow
        knownAuthorities: ["gambit3teee3.onmicrosoft.com"], // Reemplázalo con tu Tenant Name
        redirectUri: "https://gambit3.teee3.com/signin-oidcD" // Reemplázalo con tu Redirect URI configurada en Azure
    }
};

export const msalInstance = new PublicClientApplication(msalConfig);
