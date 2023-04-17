import Modal from "../Components/Modal/Modal/Modal.js";

export const withModal = (WrappedComponent) => (props) => {
    // console.log(props);
    return (<>
        <Modal {...props} >
            <WrappedComponent {...props} />
        </Modal>
        
    </>)
};