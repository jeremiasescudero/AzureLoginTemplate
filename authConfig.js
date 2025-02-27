import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: "9a2b7851-9c08-4fb1-a88b-7d3c48f47e95", // Tu Client ID en Azure
        authority: "https://gambit3teee3.b2clogin.com/gambit3teee3.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_SIGNUP_LOGIN&client_id=9a2b7851-9c08-4fb1-a88b-7d3c48f47e95&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fgambit3.teee3.com%2Fsignin-oidc&scope=openid&response_type=id_token&prompt=login", // URL de tu User Flow
        knownAuthorities: ["gambit3teee3.b2clogin.com"], // Debe coincidir con el dominio de tu tenant
        redirectUri: "https://gambit3.teee3.com/signin-oidc" 
    },
    cache: {
        cacheLocation: "sessionStorage", 
        storeAuthStateInCookie: true 
    }
};


const loginRequest = {
    scopes: ["openid", "profile"]
};

export const msalInstance = new PublicClientApplication(msalConfig);
export { loginRequest };
