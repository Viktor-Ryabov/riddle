import React from "react";
import Styles from "./Auth.module.css";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useLocation, NavLink } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../constants/routeConstants";
import { registrateUser } from "../utils/API/registration";
import { authorizeUser } from "../utils/API/authUser";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../utils/useInput";

const Auth = () => {
    const userAuthState = useSelector((state) => state.userState.isAuth);

    // const printUserAuth = () => {
    //     if (userAuthState) {
    //         console.log(`Пользовватель авторизован, ${userAuthState}`);
    //     } else {
    //         console.log(`Пользовватель NOT авторизован, ${userAuthState}`);
    //     }
    // };

    const dispatch = useDispatch();

    const sendRegistrationToServer = (event) => {
        //get form datawas loaded over HTTPSgthtdjl

        const userEmail = document.querySelector("#enteredEmail").value;
        const userPassword = document.querySelector("#enteredPassword").value;
        const authForm = document.querySelector("#form");
        //register
        event.preventDefault();
        console.log(userEmail, userPassword);
        registrateUser(userEmail, userPassword);
        authForm.reset();
    };

    const sendAuthToServer = (event) => {
        const userEmail = document.querySelector("#enteredEmail").value;
        const userPassword = document.querySelector("#enteredPassword").value;
        const authForm = document.querySelector("#form");
        event.preventDefault();
        authorizeUser(userEmail, userPassword, dispatch);
        authForm.reset();
    };

    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    // printUserAuth();

    const nikNameValidation = useInput("", { isEmpty: true, minLength: 3 });
    const emailValidation = useInput("", { isEmpty: true, emailError: true });
    const passwordValidation = useInput("", { isEmpty: true, minLength: 5 });

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
                    <Container>
                        <Form.Control
                            className={Styles.input}
                            onChange={(e) => nikNameValidation.onChange(e)}
                            onBlur={(e) => nikNameValidation.onBlur(e)}
                            value={nikNameValidation.value}
                            name="nikName"
                            type="text"
                            id="enteredNik"
                            className="mt-3"
                            placeholder="Введите Nikname"
                        />
                        {nikNameValidation.isDirty &&
                            nikNameValidation.isEmpty && (
                                <div
                                    className={Styles.authErrorMassage}
                                    style={{ color: "red" }}
                                >
                                    Поле не может быть пустым
                                </div>
                            )}
                        {nikNameValidation.isDirty &&
                            nikNameValidation.minLengthError && (
                                <div
                                    className={Styles.authErrorMassage}
                                    style={{ color: "red" }}
                                >
                                    Имя должно быть длинее 3 символов
                                </div>
                            )}
                    </Container>

                    <Container>
                        <Form.Control
                            onChange={(e) => emailValidation.onChange(e)}
                            onBlur={(e) => emailValidation.onBlur(e)}
                            value={emailValidation.value}
                            name="email"
                            type="email"
                            id="enteredEmail"
                            className="mt-3"
                            placeholder="Введите email"
                        />
                        {emailValidation.isDirty && emailValidation.isEmpty && (
                            <div
                                className={Styles.authErrorMassage}
                                style={{ color: "red" }}
                            >
                                Поле не может быть пустым
                            </div>
                        )}
                        {emailValidation.isDirty &&
                            emailValidation.emailError && (
                                <div
                                    className={Styles.authErrorMassage}
                                    style={{ color: "red" }}
                                >
                                    Не корректный Email
                                </div>
                            )}
                    </Container>

                    <Container>
                        <Form.Control
                            className={Styles.input}
                            onChange={(e) => passwordValidation.onChange(e)}
                            onBlur={(e) => passwordValidation.onBlur(e)}
                            value={passwordValidation.value}
                            name="password"
                            type="text"
                            id="enteredPassword"
                            className="mt-3"
                            placeholder="Введите пароль"
                        />
                        {passwordValidation.isDirty &&
                            passwordValidation.isEmpty && (
                                <div
                                    className={Styles.authErrorMassage}
                                    style={{ color: "red" }}
                                >
                                    Поле не может быть пустым
                                </div>
                            )}
                        {passwordValidation.isDirty &&
                            passwordValidation.minLength && (
                                <div
                                    className={Styles.authErrorMassage}
                                    style={{ color: "red" }}
                                >
                                    Пароль должен быть длинее 5 символов
                                </div>
                            )}
                    </Container>
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
                            onClick={
                                isLogin
                                    ? sendAuthToServer
                                    : sendRegistrationToServer
                            }
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
