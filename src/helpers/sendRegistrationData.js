export const sendRegistrationToServer = (event, mail, password, form, registrateUser) => {
    event.preventDefault();    
    console.log(mail.value, password.value);
    registrateUser(mail.value, password.value);
    form.reset();
};

