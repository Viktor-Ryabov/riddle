import { useEffect, useState } from "react";

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [inputValid, setInputValid] = useState(false);
    

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "minLength":
                    value.length < validations[validation]
                        ? setMinLengthError(true)
                        : setMinLengthError(false);
                    break;
                case "isEmpty":
                    value ? setEmpty(false) : setEmpty(true);
                    break;
                case "emailError":
                    const atLocation = value.lastIndexOf("@");
                    const dotLocation = value.lastIndexOf(".");
                    atLocation > 0 &&
                    dotLocation > atLocation + 1 &&
                    dotLocation < value.length - 1
                        ? setEmailError(false)
                        : setEmailError(true);
            }
        }
    }, [value]);

    useEffect (() => {

        if(isEmpty || minLengthError || emailError){
            setInputValid(false)
        } else {
            setInputValid(true)
        }

    }, [isEmpty, minLengthError, emailError])

    return {
        isEmpty,
        minLengthError,
        emailError,
        inputValid,
    };
};

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onBlur = (e) => {
        setDirty(true);
    };

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid,
    };
};

export default useInput;
