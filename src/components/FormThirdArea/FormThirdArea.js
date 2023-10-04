import { useContext, useState } from "react";
import { BoxContainer, BoxText } from "../../styles/Style";
import DataSelectContent from "../../data/dataContent";
import { Replaced } from "../Replaced";
import dataTextField from "../../data/dataTextField";
import { TextFieldComponent } from "../TextField/TextFieldComponent";
import { SelectComponent } from "../SelectComponent/SelectComponent";
import { DataProvider } from "../../App";

export const ThirdArea = () => {
    const setPrincipalData = useContext(DataProvider);

    const [ key, setKey ] = useState();
    const [ outherEngine, setOutherEngine ] = useState(false);
    const [ outherDeadline, setOutherDeadline ] = useState(false);

    const setDataBase = (e) => {
        setPrincipalData((prev) => {
            return {...prev, [e.target.id]: e.target.value}
        });
    };
    return (
        <BoxContainer>
            <SelectComponent datas={DataSelectContent.plate} onChange={setKey}/>
            { key && <Replaced datas={dataTextField.replaced} /> }

            <TextFieldComponent datas={dataTextField.datasVehicle} />

            <SelectComponent datas={DataSelectContent.motor} onChange={setOutherEngine}/>
            { outherEngine &&
                <BoxText className="fadeOn">
                    <input type="text"
                            placeholder="Qual motorização?"
                            id="outher_engine"
                            onChange={setDataBase}
                            required />
                </BoxText>}

            <SelectComponent datas={DataSelectContent.fuel} />
            <SelectComponent datas={DataSelectContent.exchange} />
            <TextFieldComponent dataPrice={dataTextField.priceValues} />

            <SelectComponent datas={DataSelectContent.deadline} onChange={setOutherDeadline} />
            { outherDeadline &&
                <BoxText className="fadeOn">
                    <input type="text" 
                            placeholder="Prazo requerido"
                            id="outher_deadline"
                            onChange={setDataBase}
                            required />
                </BoxText>}
        </BoxContainer>
    );
};