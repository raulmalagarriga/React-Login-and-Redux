import { useState } from "react"

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);
    const reset = () => {
        setValues(initialState);
    }
    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }
    return [values , handleInput , reset]
}