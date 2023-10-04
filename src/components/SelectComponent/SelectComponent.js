import { useContext, useEffect, useState } from "react";
import { InputSelect, SelectArea, SelectList } from "../../styles/Style";
import { DataProvider } from "../../App";
import { FiChevronDown } from "../../../node_modules/react-icons/fi";

export const SelectComponent = ({datas, onChange}) => {
    const [ lookOptions, setLookOptions ] = useState(false);
    const [ inputValue, setInputValue ] = useState({});

    const setPrincipalData = useContext(DataProvider);

    const handleDataLocale = (e) => {
        const id = e.target.classList[0];
        datas[0].openOutherBox && onChange(datas[0].listSelect[id].boolean);
        setInputValue((prev) => {
            return {...prev, [e.target.name]: e.target.value};
        });
        setLookOptions(false);
    };

    useEffect(() => {
        if(inputValue) {
            setPrincipalData((prev) => {
                return {...prev, ...inputValue};
            });
        };
    }, [inputValue]);

    return (
        <>
            { datas.map( (details, index) => 
                <>
                    <SelectArea key={index}>
                        <h2>{details.title} <span>*</span></h2>
                        {details.subtitle && <span>{details.subtitle}</span>}
            
                        <InputSelect>
                            <input type="text"
                                    placeholder={details.placeholder} 
                                    onFocus={() => setLookOptions(true)} 
                                    onBlur={() => setLookOptions(false)} value={inputValue[details.name]} />
                            <p><FiChevronDown /></p>
                        </InputSelect>
                        { lookOptions && 
                            <SelectList className="fadeOn selectList"> 
                                {details.listSelect.map( (values, index) => 
                                        <button
                                        id={`${details.name}${index}`}
                                        className={index}
                                        onMouseDown={handleDataLocale}
                                        name={details.name}
                                        value={values.value}>{values.value} {values.resume && <span>{values.resume}</span>}</button>
                                )}
                            </SelectList>
                        }
                    </SelectArea>
                </>
            )}
        </>
    );
};