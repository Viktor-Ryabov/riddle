import React from "react";
import "./Riddle2.css";

const Riddle2 = () => {
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
            <section className="Riddle2-header">
                <div className="Riddle2-key">Riddle2</div>
                <p>Аве, Цезарь!</p>
                <a
                    className="Riddle2-link"
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

export default Riddle2;
