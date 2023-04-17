import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import "./Riddle1.css";
import CaptureForm from "../../Modules/CaptureForm/CaptureForm";
import { withModal } from "../../hoc/withModal";
import { useDispatch, useSelector } from "react-redux";
import InfoBlock from "../../Modules/InfoBlock/InfoBlock";

const WithModalQuestion = withModal(CaptureForm);
const WithModalWrongAnswer = withModal(CaptureForm);

const Riddle1 = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <>
            <WithModalQuestion active={state.modal} />
            <section className="Riddle1-header">
                <div className="Riddle1-key">оэяма</div>
                <p>Аве, Цезарь!</p>
                <a
                    className="Riddle1-link"
                    onClick={() => dispatch({ type: "MODAL_ACTIVE" })}
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
