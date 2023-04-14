import React from "react";
import Styles from "./CaptureForm.module.css";

const CaptureForm = () => {
    return (
        <div className={Styles.container}>
           <div className={Styles.inputs}>
            <div className={Styles.brand_title}>Введите скорее всего неправильный Ваш ответ</div>
                <input
                    className={Styles.input}
                    type="email"
                    placeholder="Почта"
                />
                <input
                    className={Styles.input}
                    type="password"
                    placeholder="Имя"
                />
                <button className={Styles.button} type="submit">
                    LOGIN
                </button>
            </div>
        </div>
    );
};

export default CaptureForm;
