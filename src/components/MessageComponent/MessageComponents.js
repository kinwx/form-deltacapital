import { useContext } from "react";
import { BoxMessage } from "../../styles/Style"
import { DataProvider } from "../../App";

export const MessageComponent = ({title}) => {
    const setPrincipalData = useContext(DataProvider);

    const handleChange = (e) => {
        setPrincipalData((prev) => {
            return {...prev, [e.target.id]: e.target.value};
        });
    };

    return (
        <BoxMessage>
            <h1>{title}</h1>
            <textarea 
                placeholder="Incluir informações adicionais se necessário..."
                id="message_client"
                onChange={handleChange}
            />
        </BoxMessage>
    );
};