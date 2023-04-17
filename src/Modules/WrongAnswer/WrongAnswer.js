import React from "react";
import Styles from "./WronAnswer.module.css";

const WrongAnswer = () => {
  
    return (
        <div className={Styles.container}>
            <div className={Styles.inputs}>
                <div className={Styles.brand_title}>Введите Ваш ответ</div>

                <button
                    className={Styles.button}
                    type="send"
                    onClick={() => getInputData()}
                >
                    ок, подумаю ещё
                </button>
            </div>
        </div>
    );
};

export default WrongAnswer;
