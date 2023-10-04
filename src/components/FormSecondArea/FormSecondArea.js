import { BoxContainer } from "../../styles/Style";
import DataSelectContent from "../../data/dataContent";
import { TextFieldComponent } from "../TextField/TextFieldComponent";
import dataTextField from "../../data/dataTextField";
import { SelectComponent } from "../SelectComponent/SelectComponent";

export const SecondArea = () => {
    return (
        <BoxContainer>
            <h2>Dados do(a) Proponente</h2>
            <SelectComponent datas={DataSelectContent.habilited}/>
            <TextFieldComponent datas={dataTextField.personalData} />
        </BoxContainer>
    );
};