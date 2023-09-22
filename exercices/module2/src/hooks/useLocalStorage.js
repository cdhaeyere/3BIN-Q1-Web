import { useState } from "react";

const storeValue = (key, value) => {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
}

const getValue = (key, defaultValue) => {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) {
        return defaultValue;
    }
    return JSON.parse(serializedValue);
}

const useLocalStorage = (key, initialValue) => {
    const currentValue = getValue(key, initialValue);
    const [ stateValue, valueSetter ] = useState(currentValue);

    const persistentSetter = (value) => {
        storeValue(key, value);
        valueSetter(value);
    }

    return [ stateValue, persistentSetter ];
}

export default useLocalStorage;