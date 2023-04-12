import React from "react";
import "./Main.css";

const Main = () => {
    const answerFunc = () => {
        let answer = prompt("Знаете ответ?", "ответ");
        if (answer.toLocaleLowerCase() === "рябов") {
            alert("Верно! Это Начало Вашего знакомства с Крымом!");
            window.location.href = "https://rya-travel.ru";
        } else {
            alert("подумай еще 🚫");
        }
    };
    return (
        <>
            <section className="Main-header">
                <div className="Main-key">Main</div>
                <p>Аве, Цезарь!</p>
                <a
                    className="Main-link"
                    onClick={() => answerFunc()}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    :>
                </a>
            </section>
        </>
    );
};

export default Main;
