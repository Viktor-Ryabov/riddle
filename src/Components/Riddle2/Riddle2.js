import "./Riddle2.css";
import CaptureForm from "../../Modules/CaptureForm/CaptureForm.js";
import { withModal } from "../../hoc/withModal.js";
import { useDispatch, useSelector } from "react-redux";
import InfoBlock from "../../Modules/InfoBlock/InfoBlock.js";
import WrongAnswer from "../../Modules/WrongAnswer/WrongAnswer.js";
import RightAnswer from "../../Modules/RightAnswer/RightAnswer.js";


const WithModalQuestion = withModal(CaptureForm);
const WithModalWrongAnswer = withModal(WrongAnswer);
const WithModalRightAnswer = withModal(RightAnswer);

const Riddle2 = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <>
            <WithModalQuestion active={state.questionNotiseActive} />
            <WithModalWrongAnswer active={state.wronAnswerNoticeActive} />
            <WithModalRightAnswer active={state.rightAnswerNotiseActive} />
            <section className="Riddle1-header">
                <div className="Riddle1-key">Россия</div>
                <p>1733</p>
                <button
                    className="Riddle1-link"
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
