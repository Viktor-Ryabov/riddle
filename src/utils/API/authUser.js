import { BASE_URL_REQUEST, MAIN_ROUTE, USER_ROUTE } from "../../constants/routeConstants";
import { getErrorAuthMassege } from "../../services/actions/getErrorAuthMassege";
import { makeSuccessRegistrationActive } from "../../services/actions/makeSuccessRegistrationActive";

export const authorizeUser = (userEmail, userPassword, dispatch, location) => {
    console.log(`username=${userEmail}&password=${userPassword}`);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", "Basic Y2xpZW50OnNlY3JldA==");
    myHeaders.append("Cookie", "JSESSIONID=489CF0241F24DB93A9A93E2B60905121");
    const raw = "";
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch(
        `${BASE_URL_REQUEST}/oauth/token?grant_type=password&username=${userEmail}&password=${userPassword}`,
        requestOptions
    )
        .then((response) => response.json())
        .then((response) => {
            if (response.access_token) {
                window.localStorage.setItem(
                    "access_token",
                    response.access_token
                );
                console.log(window.localStorage.getItem("access_token"));
                dispatch({
                    type: "AUTH_USER",
                    payload: window.localStorage.getItem("access_token")
                        ? true
                        : false,
                });
                location.pathname = MAIN_ROUTE;
            } else {
                dispatch(getErrorAuthMassege(response.error_description));
                dispatch(makeSuccessRegistrationActive());
                console.log(`username=${userEmail}&password=${userPassword}`);
                dispatch({
                    type: "AUTH_USER",
                    payload: false,
                });
            }
        })
        .catch((error) => console.log("error", error));
};
