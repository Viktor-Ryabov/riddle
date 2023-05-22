export const getErrorAuthMassege = (errorMessage) => ({
    type: "ERROR_AUTH_USER", 
    payload: errorMessage,
});