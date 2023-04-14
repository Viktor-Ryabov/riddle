import Styles from "./Link.module.css";

export const Link = (props) => {
    return <section className={Styles.main}>{props.text}</section>;
};
