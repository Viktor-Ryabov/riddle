import Styles from "./ActionButton.module.css";

const ActionButton = (props) => {
    return (
        <div className={Styles.button}>
            <p className={Styles.text}>{props.text1}</p>
        </div>
    );
};

export default ActionButton;
