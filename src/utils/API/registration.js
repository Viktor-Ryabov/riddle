import { REGISTRATION_URL } from "../../constants/routeConstants";
import { authorizeUser } from "./authUser";

const registrateUserRequestOptions = (userEmail, userPassword) => {
    return {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: userEmail,
            password: userPassword,
        }),
    };
};

export const sendRegistrationToServer = (
    userEmail,
    userPassword,
    dispatch,
    location
) => {
    fetch(
        `${REGISTRATION_URL}`,
        registrateUserRequestOptions(userEmail, userPassword)
    )
        .then((response) => response.json())
        .then((response) => {
            if (response.message) {
                console.log(response.message)
                alert(document.cookie)
                authorizeUser(userEmail, userPassword, dispatch, location);
            } else {
                console.log(response)
            }
        })
        .catch((error) => console.log(error));
};
