import React from "react";
import Styles from "./WrongAnsweerModal.module.css";

const WrongAnswer = () => {

    return (
        <div className={Styles.container}>
            <div className={Styles.inputs}>
                <div className={Styles.brand_title}>Ваш ответ не правильный</div>

                <button
                    className={Styles.button}
                    type="send"
                >
                    ок, подумаю ещё
                </button>
            </div>
        </div>
    );
};

export default WrongAnswer;
