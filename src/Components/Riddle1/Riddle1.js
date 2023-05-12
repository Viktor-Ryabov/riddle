import Styles from "./Riddle1.module.css";
import CaptureForm from "../../Modules/CaptureForm/CaptureForm";
import { withModal } from "../../hoc/withModal.js";
import { useDispatch, useSelector } from "react-redux";
import InfoBlock from "../../Modules/InfoBlock/InfoBlock.js";
import WrongAnswerPopup from "../../Modules/WrongAnswerPopup/WrongAnswerPopup.js";
import RightAnswerPopup from "../../Modules/RightAnswerPopup/RightAnswerPopup.js";

const WithModalQuestion = withModal(CaptureForm);
const WithModalWrongAnswer = withModal(WrongAnswerPopup);
const WithModalRightAnswer = withModal(RightAnswerPopup);

const Riddle1 = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <>
            <WithModalQuestion active={state.noticeActive.questionNotiseActive} />
            <WithModalWrongAnswer active={state.noticeActive.wronAnswerNoticeActive} />
            <WithModalRightAnswer active={state.noticeActive.rightAnswerNotiseActive} />
            <section className={Styles.Riddle1_header}>
                <p className={Styles.text}>оэяма</p>
                <p className={Styles.text}>Цезарь  3 -></p>
                <button
                    className={Styles.link}
                    onClick={() => dispatch({ type: "QUESTION_NOTICE_ACTIVE" })}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    click
                </button>
            </section>
            <InfoBlock />
        </>
    );
};

export default Riddle1;
