export const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(
            `Что-то пошло не так в checkResponse: Ошибка ${res.status} - ${res.statusText}`
        );
    }
};