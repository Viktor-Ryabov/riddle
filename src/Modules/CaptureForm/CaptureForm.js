import React from "react";
import Styles from "./CaptureForm.module.css";

const CaptureForm = () => {
    const getInputData = () => {
        const riddleAnswer = document.querySelector("#riddleAnswer");
        console.log(riddleAnswer.value)
    }

    return (
        <div className={Styles.container}>
           <div className={Styles.inputs}>
            <div className={Styles.brand_title}>Введите Ваш ответ</div>

                <input
                id="riddleAnswer"
                    className={Styles.input}
                    type="text"
                    placeholder="Cкорее всего неправильный Ваш ответ"
                />
                <button className={Styles.button} type="send" onClick={() => getInputData()}>
                    ГОТОВО! скорее всего правильный
                </button>
            </div>
        </div>
    );
};

export default CaptureForm;
