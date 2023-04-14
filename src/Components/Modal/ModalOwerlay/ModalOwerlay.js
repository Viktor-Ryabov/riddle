import Styles from "./ModalOwerlay.module.css";

export const ModalOwerlay = () => {
    return (
        <div
            className={Styles.modalOwerlay}
            // onClick={() => {
            //     if (ingridientsCondition) {
            //         dispatch({
            //             type: INGRIDIENTS_MODAL_DISABLED,
            //         });
            //     } else if (orderCondition) {
            //         dispatch({
            //             type: ORDER_MODAL_DISABLED,
            //         });
            //     }
            // }}
        ></div>
    );
};