import { useContext } from "react";
import { BoxRadio, ItemRadioForm } from "../../styles/Style";
import { DataProvider } from "../../App";

export const RadioInputArea = ({datas, onChange, handleChange}) => {
    const setPrincipalData = useContext(DataProvider);

    const setValues = (e) => {
        setPrincipalData((prev) => {
            return {...prev, [e.target.name]: e.target.value};
        });
    };

    return (
        <>
            {datas.map( (details, index) => 
                <BoxRadio key={index} className="fadeOn">
                    <h2>{details.title} <span>*</span></h2>
                    {details.subtitle && <span>{details.subtitle}</span>}

                    {details.listRadio.map( (values, index) =>
                        <ItemRadioForm key={index}>
                            <div>
                                {onChange && 
                                    <input 
                                        type="radio" 
                                        name={details.name} 
                                        id={values.id} 
                                        value={values.value} 
                                        onChange={() => onChange(values.boolean)} 
                                        onClick={setValues}/>}

                                {(!onChange && !handleChange) && 
                                    <input 
                                        type="radio" 
                                        name={details.name} 
                                        id={values.id} 
                                        value={values.value} 
                                        onClick={setValues}/>}

                                {handleChange && 
                                    <input 
                                        type="radio" 
                                        name={details.name} 
                                        id={values.id} 
                                        value={values.value} 
                                        onChange={handleChange} 
                                        onClick={setValues}/>}
                                
                                <label htmlFor={values.id}>{values.value}</label>
                            </div>
                            {values.span && <span>{values.span}</span>}
                        </ItemRadioForm>
                    )}
                </BoxRadio>
            )}
        </>
    );
};