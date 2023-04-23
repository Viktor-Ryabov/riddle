import "./Riddle2.css";
import CaptureForm from "../../Modules/CaptureForm/CaptureForm.js";
import { withModal } from "../../hoc/withModal.js";
import { useDispatch, useSelector } from "react-redux";
import InfoBlock from "../../Modules/InfoBlock/InfoBlock.js";
import WrongAnswerPopup from "../../Modules/WrongAnswerPopup/WrongAnswerPopup.js";
import RightAnswerPopup from "../../Modules/RightAnswerPopup/RightAnswerPopup.js";


const WithModalQuestion = withModal(CaptureForm);
const WithModalWrongAnswer = withModal(WrongAnswerPopup);
const WithModalRightAnswer = withModal(RightAnswerPopup);

const Riddle2 = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <>
            <WithModalQuestion active={state.questionNotiseActive} />
            <WithModalWrongAnswer active={state.wronAnswerNoticeActive} />
            <WithModalRightAnswer active={state.rightAnswerNotiseActive} />
            <section className="Riddle1_header">
                <div className="Riddle1_key">Россия</div>
                <p>1733</p>
                <button
                    className="Riddle1_link"
                    onClick={() => dispatch({ type: "QUESTION_NOTICE_ACTIVE" })}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ...
                </button>
            </section>
            <InfoBlock />
        </>
    );
};

export default Riddle2;
