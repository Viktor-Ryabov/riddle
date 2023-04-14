import React, { useCallback, useEffect } from "react";
import "./Riddle1.css";
import { useDispatch, useSelector } from "react-redux";

const Riddle1 = (props) => {
    const answer = useSelector(state => state.answer);
    const countAnswers = useSelector(state => state.countAnswers);

    const answerFunc = () => {
        props.setQuestonModalActive(true);
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
                <p className="Riddle1-info">Ваш предыдущий ответ: {answer}</p>
                <p className="Riddle1-info">Колияество неправильных ответов: {countAnswers}</p>
            </section>
        </>
    );
};

export default Riddle1;
