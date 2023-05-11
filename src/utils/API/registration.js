import { REGISTRATION_URL } from "../../constants/routeConstants";

const registrateUserRequestOptions = (userEmail, userPassword) => {
    return({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: userEmail,
            password: userPassword,
        }),
    });
};

export const registrateUser = (userEmail, userPassword) => {
    fetch(`${REGISTRATION_URL}`, registrateUserRequestOptions(userEmail, userPassword))
        .then((response) => response.json())
        .then((response) => console.log(response));
};

