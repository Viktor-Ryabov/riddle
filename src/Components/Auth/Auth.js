import React, { useEffect, useState } from "react";
import Styles from "./Auth.module.css";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useLocation, NavLink } from "react-router-dom";
import {
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
} from "../../constants/routeConstants";
import { sendRegistrationToServer } from "../../utils/API/registration";
import { authorizeUser } from "../../utils/API/authUser";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../utils/useInput";
import { withModal } from "../../hoc/withModal";
import SuccessAuthPopup from "../../Modules/SuccessAuthPopup/SuccessAuthPopup";

const WithModalSuccessAuth = withModal(SuccessAuthPopup);

const Auth = () => {

    const [userState, setUserState] = useState({});
    useEffect(() => {}, [setUserState]);

    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;


    const authForm = document.querySelector("#form");
    const state = useSelector((state) => state);

    const dispatch = useDispatch();

    const registrateUser = (event) => {
        event.preventDefault();
        const inputEmail = document.querySelector("#enteredEmail").value;
        const inputPassword = document.querySelector("#enteredPassword").value;
        sendRegistrationToServer(inputEmail, inputPassword);

        setUserState({inputEmail, inputPassword})

        location.pathname = LOGIN_ROUTE;
        authForm.reset();
    };

    const sendAuthToServer = (event) => {
        event.preventDefault();
        const inputEmail = document.querySelector("#enteredEmail").value;
        const inputPassword = document.querySelector("#enteredPassword").value;
        authorizeUser(inputEmail, inputPassword, dispatch);
        authForm.reset();
    };

    const emailValidation = useInput("", { isEmpty: true, emailError: true });
    const passwordValidation = useInput("", { isEmpty: true, minLength: 5 });

    return (
        <>
            <WithModalSuccessAuth
                active={state.noticeActive.successRegistrationNotiseActive}
                makeAuth={() =>
                    authorizeUser(
                        state.userState.userEmail,
                        state.userState.userPassword,
                        dispatch
                    )
                }
                text={state.userState.userErrorAuth}
            />
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
                                onChange={(e) => emailValidation.onChange(e)}
                                onBlur={(e) => emailValidation.onBlur(e)}
                                value={emailValidation.value}
                                name="email"
                                type="email"
                                id="enteredEmail"
                                className="mt-3"
                                placeholder="Введите email"
                            />
                            {emailValidation.isDirty &&
                                emailValidation.isEmpty && (
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
                                    <NavLink to={LOGIN_ROUTE}>
                                        Войдите...
                                    </NavLink>
                                </Container>
                            )}
                            <Button
                                active
                                size="sm"
                                disabled={
                                    // !nikNameValidation.inputValid ||
                                    !emailValidation.inputValid ||
                                    !passwordValidation.inputValid
                                }
                                type="submit"
                                className={"mt-3 align-self-center btl-light"}
                                variant={"btn-outline-secondary"}
                                style={{ width: 200 }}
                                onClick={
                                    isLogin ? sendAuthToServer : registrateUser
                                }
                            >
                                {isLogin ? "Войти" : "Зарегистрироваться"}
                            </Button>
                        </Container>
                    </Form>
                </Card>
            </Container>
        </>
    );
};

export default Auth;
