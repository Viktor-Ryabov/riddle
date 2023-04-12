import React from "react";
import "./Riddle3.css";

const Riddle3 = () => {
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
            <section className="Riddle3-header">
                <div className="Riddle3-key">оэяма</div>
                <p>Аве, Цезарь!</p>
                <a
                    className="Riddle3-link"
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

export default Riddle3;
