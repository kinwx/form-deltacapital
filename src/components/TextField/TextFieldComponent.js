import { useContext, useEffect, useState } from "react";
import formatter from "../../services/rejex";
import { BoxText, InputPrice } from "../../styles/Style";
import { PriceComponents } from "../Price";
import { DataProvider } from "../../App";

export const TextFieldComponent = ({datas, dataPrice, keyTitle}) => {
    const setPrincipalData = useContext(DataProvider);

    const [ rejex, setRejex ] = useState({});
    const [ cep, setCep ] = useState();
    const [ cepError, setCepError ] = useState(false);
    const [ dataCep, setDataCep ] = useState({});

    const [ financeVehicle, setFinanceVehicle ] = useState({
        amount_financed: '',
        input_value: '',
        vehicle_value: ''
    });

    const searchCEP = async () => {
        try {
            const required = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const response = await required.json();
            setCepError(false);
            response.complemento = "";
            setDataCep(response);
        } catch (error) {
            setCepError(true);
        }
    };
    const setDataBase = (e) => {
        setPrincipalData((prev) => {
            return {...prev, [e.target.id]: e.target.value}
        });
    };

    const handleCep = (e) => {
        setDataBase(e);
        setDataCep((prev) => {
            return {...prev, [e.target.id]: e.target.value};
        });
    };


    const handleRejex = (e) => {
        // Setando o cep que será usado no fetch
        e.target.id === 'cep' && setCep(e.target.value);

        // formatter(type, value)
        const formatted = formatter(e.target.name, e.target.value);

        // Setando o valor visual com mascara aplicada
        switch(e.target.id) {
            case 'vehicle_value':
                setFinanceVehicle((prev) => {
                    return {...prev, [e.target.id]: Number(formatted.replace(/\./g, '').replace(',', '.'))};
                });
                break;
            case 'input_value':
                if(Number(formatted.replace(/\./g, '').replace(',', '.')) < financeVehicle.vehicle_value) {
                    setFinanceVehicle((prev) => {
                        return {...prev, [e.target.id]: Number(formatted.replace(/\./g, '').replace(',', '.'))};
                    });
                } else return;
                break;
            default:
                break;
        };
        setRejex({...rejex, [e.target.id]: formatted});

        // Setando Data Global
        setPrincipalData((prev) => {
            return {...prev, [e.target.id]: formatted}
        });
    };

    useEffect(() => {
        if(financeVehicle) {
            setFinanceVehicle((prev) => {
                return {...prev, amount_financed: prev.vehicle_value - prev.input_value}
            });
        }
    }, [financeVehicle.input_value]);

    useEffect(() => {
        if(financeVehicle.amount_financed) {
            const value = (financeVehicle.amount_financed.toFixed(2)).toString();
            const formatted = formatter('price', value);
            setRejex((prev) => {
                return {...prev, amount_financed: formatted};
            });
            setPrincipalData((prev) => {
                return {...prev, amount_financed: formatted};
            });
        }
    }, [financeVehicle.amount_financed])

    useEffect(() => {
        if(dataCep) {
            setPrincipalData((prev) => {
                return {...prev, ...dataCep};
            });
        };
    }, [dataCep]);

    return (
        <div className="fadeOn spaced">
            {(datas) && datas.map( (values, index) => 
                <BoxText key={index}>
                    { (values.title || keyTitle) && <h2>{keyTitle ? values[keyTitle] : values.title}</h2>}
                    { (values.model !== "number" && !values.mask && values.id !== 'cep' && !values.prototype) && 
                        <>
                            <label htmlFor={values.id}>{values.label} <span>*</span></label>
                            { (values.subtitle) && <span>{values.subtitle}</span>}

                            <input 
                                type={values.model} 
                                id={values.id} 
                                placeholder='Digite...'
                                onChange={setDataBase}
                                required
                            />
                            { values.small && <small>{values.small}</small>}
                        </>
                    }
                    { (values.model === 'number' && !values.mask) &&
                        <>
                            <label htmlFor={values.id}>{values.label} <span>*</span></label>
                            { (values.subtitle) && <span>{values.subtitle}</span>}

                            { (!values.especial) && <input type={values.model} id={values.id} placeholder={values.placeholder ? values.placeholder : 'Digite...'} onChange={setDataBase}/>}
                            { values.especial && 
                                <InputPrice>
                                    <input
                                        type="text" 
                                        id={values.id} 
                                        placeholder='Digite...'
                                        value={rejex[values.id]}
                                        name='price'
                                        onChange={handleRejex}
                                        inputMode="numeric"
                                        required
                                        />
                                </InputPrice>
                            }
                        </>
                    }
                    { (values.mask && values.id !== 'cep') && 
                        <>
                            <label htmlFor={values.id}>{values.label} <span>*</span></label>
                            { (values.subtitle) && <span>{values.subtitle}</span>}
                            { (values.mask && !values.especial) && <input 
                                                    type={values.model} 
                                                    id={values.id} 
                                                    name={values.name} 
                                                    placeholder='Digite...' 
                                                    onChange={handleRejex} 
                                                    inputMode="numeric"
                                                    value={rejex[values.id]}
                                                    required
                                                />}
                        </>
                    }
                    { (values.id === 'cep') && 
                        <>
                            <label htmlFor={values.id}>{values.label} <span>*</span></label>
                            { values.subtitle && <span>{values.subtitle}</span>}

                            <input 
                                type={values.model} 
                                id={values.id} 
                                name={values.name} 
                                placeholder='Digite...'
                                value={rejex[values.id]}
                                onChange={handleRejex}
                                onBlur={searchCEP}
                                inputMode="numeric"
                                required
                            />
                            { cepError && <p className="blink" style={{color: 'red'}}>{values.message}</p>}
                        </>
                    }
                    { (values.prototype) && 
                        <>
                            <label htmlFor={values.id}>{values.label} {values.label !== 'Complemento' && <span>*</span>}</label>
                            { values.subtitle && <span>{values.subtitle}</span>}

                            <input 
                                type={values.model} 
                                id={values.id} 
                                placeholder='Digite...'
                                value={dataCep[values.id]}
                                onChange={handleCep}
                                required={values.label == 'Complemento' ? false : true }
                            />
                            { values.small && <small>{values.small}</small>}
                        </>
                    }
                </BoxText>
            )}
            { dataPrice && <PriceComponents datas={dataPrice} rejex={rejex} handleRejex={handleRejex} setRejex={setRejex}/> }
        </div>
    );
};