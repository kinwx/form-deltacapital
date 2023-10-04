import { useState } from "react";
import { BoxText, InputPrice } from "../../styles/Style";

export const PriceComponents = ({datas, rejex, handleRejex, setRejex}) => {
    const [ maxInputValue, setMaxInputValue ] = useState(15);

    const clearInput = (e) => {
        setRejex((prev) => {
            return {...prev, [e.target.id]: ''};
        });
        (e.target.id === 'input_value') &&
            setRejex((prev) => {
                return {...prev, amount_financed: ''}
            })
    };

    const handleChange = (e) => {
        handleRejex(e);
        e.target.id === 'vehicle_value' && setMaxInputValue(e.target.value.length);
    };

    return (
        <>
        { datas.map( (values, index) =>
            <BoxText key={index}>
                <label htmlFor={values.id}>{values.label} <span>*</span></label>
                { values.subtitle && <span>{values.subtitle}</span>}
                <InputPrice>
                    { values.disabled && 
                        <input 
                            type="text" 
                            id={values.id} 
                            placeholder="Digite..." 
                            value={rejex[values.id]} 
                            disabled/>}
                    { !values.disabled && 
                        <input 
                            type="text" 
                            id={values.id}
                            name="price" 
                            placeholder="Digite..." 
                            value={rejex[values.id]} 
                            required 
                            maxLength={values.id === 'input_value' ? maxInputValue : 16}
                            onFocus={clearInput}
                            inputMode="numeric"
                            onChange={handleChange}
                            />}
                </InputPrice>
            </BoxText>
        )}
        </>
    );
};