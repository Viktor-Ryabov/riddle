import React from "react";
import "./Riddle4.css";

const Riddle4 = () => {
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
            <section className="Riddle4-header">
                <div className="Riddle4-key">оэяма</div>
                <p>Аве, Цезарь!</p>
                <a
                    className="Riddle4-link"
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

export default Riddle4;
