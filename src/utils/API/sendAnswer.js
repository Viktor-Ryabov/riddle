import { ANSWER_REQUEST_URL } from '../../constants/routeConstants';

const userToken = window.localStorage.getItem("access_token");

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${userToken}`);
// myHeaders.append("Cookie", "JSESSIONID=FC9F725B43E9D3E80C7B8F1712E11B52");

var raw = JSON.stringify({
  "userTask": {
    "id": "ef95c796-66d9-4fdc-114c-cf9f1f43fd56"
  },
  "answer": "ответ"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

export const sendAnswerToServer = () => fetch(ANSWER_REQUEST_URL, requestOptions)
  .then(response => response.json())
  .then(response => response.json())

  .then(result => console.log(result))
  .catch(error => console.log('error: ', error));