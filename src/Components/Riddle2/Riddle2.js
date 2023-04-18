import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import "./Riddle2.css";
import CaptureForm from "../../Modules/CaptureForm/CaptureForm";
import { withModal } from "../../hoc/withModal";
import { useDispatch, useSelector } from "react-redux";
import InfoBlock from "../../Modules/InfoBlock/InfoBlock";
import WrongAnsweerModal from "../Modal/WrongAnsweerModal/WrongAnsweerModal";
import RightAnsweerModal from "../Modal/RightAnsweerModal/RightAnsweerModal";

const WithModalQuestion = withModal(CaptureForm);

const Riddle2 = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <>
            <WithModalQuestion active={state.questionNotiseActive} />
            <WrongAnsweerModal active={state.wronAnswerNoticeActive} />
            <RightAnsweerModal active={state.rightAnswerNotiseActive} />
            <section className="Riddle1-header">
                <div className="Riddle1-key">Россия</div>
                <p>1733</p>
                <a
                    className="Riddle1-link"
                    onClick={() => dispatch({ type: "QUESTION_NOTICE_ACTIVE" })}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ...
                </a>
            </section>
            <InfoBlock />
        </>
    );
};

export default Riddle2;
