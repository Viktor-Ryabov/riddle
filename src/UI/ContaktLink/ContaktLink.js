import Styles from "./ContaktLink.module.css";

export const ContaktLink = (props) => {
    return (
        <>
            <>
                <a
                    target="_blank"
                    rel="noreferrer"
                    className={Styles.contaktLink}
                    href={props.href}
                >
                    <img
                        className={Styles.contaktLinkIcon}
                        src={props.src}
                        alt={props.alt}
                    />
                    {props.text}
                </a>
            </>
        </>
    );
};
