import Styles from "./ActionButton.module.css";

const ActionButton = (props) => {
    return (
        <div className={Styles.button}>
            <p className={Styles.h4}>УЗНАТЬ</p>
            <p className={Styles.text}>подробнее</p>
        </div>
    );
};

export default ActionButton;
