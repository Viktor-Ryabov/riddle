import React, { useCallback, useEffect } from "react";
import "./Riddle1.css";
import { useDispatch, useSelector } from "react-redux";
import InfoBlock from "../../Modules/InfoBlock/InfoBlock";

const Riddle1 = (props) => {
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
            <InfoBlock />
        </>
    );
};

export default Riddle1;
