import { BASE_URL } from "../../constants/routeConstants";

const authorizeUserRequestOptions = (data) => {
    return {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data
    };
};

export const authorizeUser = (userEmail, userPassword) => {
    const data = new URLSearchParams();
    data.append("grant_type", "password");
    data.append("username", `${userEmail}`);
    data.append("password", `${userPassword}`);
    fetch(
        `${BASE_URL}/oauth/token?`,
        authorizeUserRequestOptions()
    )
        .then((response) => response.json())
        .then((response) => console.log(response));
};
