import { useState } from "react";
import { BoxContainer, ImageArea} from "../../styles/Style";
import DataSelectContent from "../../data/dataContent";
import { RadioInputArea } from "../FormRadioArea/RadioInputArea";
import dataTextField from "../../data/dataTextField";
import { TextFieldComponent } from "../TextField/TextFieldComponent";
import { SelectComponent } from "../SelectComponent/SelectComponent";

export const FirstArea = () => {
    const [ key, setkey ] = useState();
    const [ another, setAnother] = useState(false);
    const [ who, setWho ] = useState(true);

    const handleChange = (e) => {
        setkey(e.target.id);
    };
    const income_graduate = [{
        label: 'Renda',
        model: 'number',
        id: 'income_another',
        especial: 'coin'
    }];
    const retired = [{
        label: 'Renda',
        model: 'number',
        id: 'income_retired',
        especial: 'coin'
    }];

    return (
        <BoxContainer>
            <ImageArea src="https://deltacapital.com.br/img/logo.png" alt="delta_capital_logo"/>
            <SelectComponent datas={DataSelectContent.quemEnvia} onChange={setWho}/>
            { who && <TextFieldComponent datas={dataTextField.who}/> }

            <SelectComponent datas={DataSelectContent.operator}/>
            <RadioInputArea datas={DataSelectContent.atividadeProf} handleChange={handleChange}/>

            { key === 'independent' && <TextFieldComponent datas={dataTextField.idependent}/>}
            { (key === 'hired' || key === 'public') && <TextFieldComponent datas={dataTextField.publicHired} keyTitle={key}/>}

            {  key === 'graduate' &&
                <>
                    <SelectComponent datas={DataSelectContent.profLiberal} onChange={setAnother}/>
                    { another && <TextFieldComponent datas={dataTextField.another}/>}
                    <TextFieldComponent datas={income_graduate}/>
                </>}

            { key === 'manager' && <TextFieldComponent datas={dataTextField.manager} />}
            { (key === 'retired') && <TextFieldComponent datas={retired}/>}
        </BoxContainer>
    );
};