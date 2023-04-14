import React, { useCallback, useEffect } from "react";
import "./Riddle1.css";
import { useDispatch, useSelector } from "react-redux";
import { answerAction } from "../../toolkitRedux/tollkitReducer";

const Riddle1 = (props) => {
    const countAnswers = useSelector((state) => state.tollkit.count);
    const answersArr = useSelector((state) => state.tollkit.answer);
    const stateApp = useSelector((state) => state.tollkit);
    const dispatch = useDispatch();

    // const alertWrongAnswer = useEffect(() =>
    //     alert(`подумай еще 🚫. у вас ${countAnswers} неправильных ответов`)
    // );

    const answerFunc = () => {
        props.setModalActive(true);
        // let answer = prompt("Знаете ответ?", "ответ");
        // if (answer.toLocaleLowerCase() === "рябов") {
        //     alert("Верно! Это Начало Вашего знакомства с Крымом!");
        //     window.location.href = "https://rya-travel.ru";
        // } else {
        //     dispatch(answerAction());
        //     alertWrongAnswer();
        // }
    };
    return (
        <>
            <section className="Riddle1-header">
                <div className="Riddle1-key">оэяма</div>
                <p>Аве, Цезарь!</p>
                <a
                    className="Riddle1-link"
                    onClick={() => answerFunc()}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    :->
                </a>
            </section>
        </>
    );
};

export default Riddle1;
