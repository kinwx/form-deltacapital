import { useContext } from "react";
import { BoxText } from "../../styles/Style";
import { DataProvider } from "../../App";

export const Replaced = ({datas}) => {
    const setPrincipalData = useContext(DataProvider);
    const setDataBase = (e) => {
        setPrincipalData((prev) => {
            return {...prev, [e.target.id]: e.target.value};
        });
    };

    return (
        <>
        {datas.map( (details, index) => 
            <BoxText className="replaced" key={index}>
                <label htmlFor={details.id}>{details.label} <span>*</span></label>
                <span>{details.subtitle}</span>
                <input 
                    type="text" 
                    id={details.id}
                    placeholder="Digite..."
                    onChange={setDataBase}
                    maxLength={7}
                    required
                    />
            </BoxText>
        )}
        </>
    );
};