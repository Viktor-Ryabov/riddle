import React, { useEffect, useState } from "react";

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinlengthError] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "minlength":
                    value.length < validations[validation]
                            ? setMinlengthError(true)
                            : setMinlengthError(false);
                    break;
                case "isEmpty":
                    value ? setEmpty(false) : setEmpty(true);
                    break;
            }
        }
    }, [value]);

    return {
        isEmpty,
        minLengthError,
    }
};

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);

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
    };
};

export default useInput;
