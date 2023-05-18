export const getUserRegistrationData = (userEmail, userPassword) => ({
    type: "GET_USER_REGISTRATION_DATA", 
    userEmail: userEmail,
    userPassword: userPassword,
})

