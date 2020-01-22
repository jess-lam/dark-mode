import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);

    const handleChanges = updatedValue => {
        setValue(updatedValue);
    };

    useEffect(() => {
        value === true ? document.body.classList.add("dark-mode"):
        document.body.classList.remove("dark-mode");
    });

    return [value, setValue]

}

export default useDarkMode;