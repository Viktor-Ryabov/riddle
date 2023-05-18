import { REGISTRATION_URL } from "../../constants/routeConstants";
import { checkResponse } from "./checkResponse";

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

export const registrateUser = (userEmail, userPassword, goTo) => {
    fetch(`${REGISTRATION_URL}`, registrateUserRequestOptions(userEmail, userPassword))
        // .then(checkResponse)
        .then((response) => response.json())
        .then((response) => console.log(response));
};

