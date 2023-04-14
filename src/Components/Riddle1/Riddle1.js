import React, { useCallback, useEffect } from "react";
import "./Riddle1.css";
import { useDispatch, useSelector } from "react-redux";
import { answerAction } from "../../toolkitRedux/tollkitReducer";

const Riddle1 = (props) => {
    const dispatch = useDispatch();



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
            </section>
        </>
    );
};

export default Riddle1;
