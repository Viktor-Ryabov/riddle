import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import "./Riddle1.css";
import CaptureForm from "../../Modules/CaptureForm/CaptureForm";
import { withModal } from "../../hoc/withModal";
import { useDispatch, useSelector } from "react-redux";
import InfoBlock from "../../Modules/InfoBlock/InfoBlock";
import WrongAnsweerModal from "../Modal/WrongAnsweerModal/WrongAnsweerModal";

const WithModalQuestion = withModal(CaptureForm);

const Riddle1 = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <>
            <WithModalQuestion active={state.questionNotiseActive} />
            <WrongAnsweerModal active={state.wronAnswerNoticeActive} />
            <section className="Riddle1-header">
                <div className="Riddle1-key">оэяма</div>
                <p>Аве, Цезарь!</p>
                <a
                    className="Riddle1-link"
                    onClick={() => dispatch({ type: "QUESTION_NOTICE_ACTIVE" })}
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
