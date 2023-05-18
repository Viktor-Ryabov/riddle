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

export const sendRegistrationToServer = (state) => {
    console.log(state.userState.userEmail, state.userState.userPassword)
    fetch(`${REGISTRATION_URL}`, registrateUserRequestOptions(state.userState.userEmail, state.userState.userPassword))
        .then((response) => response.json())
        .then((response) => console.log(response));
};

