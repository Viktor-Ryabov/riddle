import { BASE_URL } from "../../constants/routeConstants";

// const dispatch = useDispatch();

export const authorizeUser = (userEmail, userPassword, dispatch) => {
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
        `${BASE_URL}/oauth/token?grant_type=password&username=${userEmail}&password=${userPassword}`,
        requestOptions
    )
        .then((response) => response.json())
        .then((data) =>
            dispatch({ type: "GET_USER", payload: data.access_token })
        )
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
};
