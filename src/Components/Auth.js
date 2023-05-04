import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useLocation, NavLink } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../constants/routeConstants";
import { registrateUser } from "../utils/API/registration";

const Auth = () => {
    const sendToserver = (event) => {
        event.preventDefault();
        const userEmail = document.querySelector("#enteredEmail");
        const userPassword = document.querySelector("#enteredPassword");
        const authForm = document.querySelector("#form");
        console.log(userEmail.value, userPassword.value);
        registrateUser(userEmail.value, userPassword.value);
        authForm.reset();
    };

    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 80 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="ml-auto">
                    {isLogin ? "Авторизация" : "Регистрация"}
                </h2>
                <Form className="d-flex flex-column" id="form">
                    <Form.Control
                        id="enteredEmail"
                        className="mt-3"
                        placeholder="Введите email"
                    />
                    <Form.Control
                        id="enteredPassword"
                        className="mt-3"
                        placeholder="Введите пароль"
                    />
                    <Container className="d-flex flex-column mt-3 pl-3 pr-3">
                        {isLogin ? (
                            <Container className="d-flex flex-column mt-3 pl-3 pr-3">
                                Нет аккаунта?{" "}
                                <NavLink to={REGISTRATION_ROUTE}>
                                    Зарегистрируйтесь...
                                </NavLink>
                            </Container>
                        ) : (
                            <Container className="d-flex flex-column mt-3 pl-3 pr-3">
                                Есть аккаунт?{" "}
                                <NavLink to={LOGIN_ROUTE}>Войдите...</NavLink>
                            </Container>
                        )}
                        <Button
                            active
                            size="sm"
                            type="submit"
                            className={"mt-3 align-self-center btl-light"}
                            variant={"btn-outline-secondary"}
                            style={{ width: 200 }}
                            onClick={sendToserver}
                        >
                            {isLogin ? "Войти" : "Зарегистрироваться"}
                        </Button>
                    </Container>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
