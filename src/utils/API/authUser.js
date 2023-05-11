import { AUTH_URL } from "../../constants/routeConstants";

const authorizeUserRequestOptions = (userEmail, userPassword) => {
    return({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: userEmail,
            password: userPassword,
        }),
    });
};

export const authorizeUser = (userEmail, userPassword) => {
    fetch(`${AUTH_URL}?grant_type=password&username=${userEmail}&password=${userPassword}`, authorizeUserRequestOptions(userEmail, userPassword))
        .then((response) => response.json())
        .then((response) => console.log(response));
};