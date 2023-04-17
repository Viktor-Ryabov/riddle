import React from "react";
import Styles from "./InfoBlock.module.css";
import { useDispatch, useSelector } from "react-redux";

const InfoBlock = () => {
  const answer = useSelector((state) => state.answer);
  const countAnswers = useSelector((state) => state.countAnswers);
    return (
        <div className={Styles.info_block}>
            <p className={Styles.info}>Ваш предыдущий ответ: <span className={Styles.info + " " + Styles.info_answer}>{answer}</span></p>
            <p className={Styles.info}>
                Колияество неправильных ответов: {countAnswers}
            </p>
        </div>
    );
};

export default InfoBlock;
