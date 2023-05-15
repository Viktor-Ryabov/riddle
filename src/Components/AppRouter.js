import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Pages/About/About";
import Main from "../Pages/Main/Main";
import {
    ABOUT_ROUTE,
    MAIN_ROUTE,
    CONTACTS_ROUTE,
    LOGIN_ROUTE,
    QUESTION_ROUTE,
    REGISTRATION_ROUTE,
    USER_ROUTE,
} from "../utils/constants";
import QuestionPage from "../Pages/QuestionPage/QuestionPage";
import Contacts from "../Pages/Contacts/Contacts";
import Auth from "./Auth";
import PersonalPage from "../Pages/PersonalPage/PersonalPage";
import { useSelector } from "react-redux";


const AppRouter = () => {
    const userState = useSelector((state) => state.userState.isAuth);

    console.log(userState)

    if (userState) {
        return (
            <Routes>
                <Route exact path='*' element={<PersonalPage />} />
                <Route exact path={MAIN_ROUTE} element={<Main />} />
                <Route exact path={USER_ROUTE} element={<PersonalPage />} />
                <Route exact path={QUESTION_ROUTE} element={<QuestionPage />} />
                <Route exact path={ABOUT_ROUTE} element={<About />} />
                <Route exact path={CONTACTS_ROUTE} element={<Contacts />} />
            </Routes>
        );
    } 
    if (!userState) {
        return (
            <Routes>
                <Route exact path='*' element={<Auth />} />
                <Route exact path={LOGIN_ROUTE} element={<Auth />} />
                <Route exact path={REGISTRATION_ROUTE} element={<Auth />} />
            </Routes>
        );
    }
};

export default AppRouter;
