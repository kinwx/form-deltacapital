import { createContext, useEffect, useState } from "react";
import { FirstArea } from "./components/FormFirstArea/FormFirtsArea";
import { SecondArea } from "./components/FormSecondArea/FormSecondArea";
import { ThirdArea } from "./components/FormThirdArea/FormThirdArea";
import { NavBar, StyledForm } from "./styles/Style";
import { MessageComponent } from "./components/MessageComponent/MessageComponents";
import { BsBank } from "react-icons/bs";
import { FooterComponent } from "./components/FooterComponent";
import axios from "axios";
import { BiLoaderAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const DataProvider = createContext(null);
function App() {
  // Todos os dados do formulário ficam armazenados nessa variável
  const [ principalData, setPrincipalData ] = useState({});

  const [ load, setLoad ] = useState(false);
  const [ btnDisabled, setBtnDisabled ] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    setBtnDisabled(true);

    send();

    setTimeout(() => {
      setLoad(false);
      setBtnDisabled(false);
      navigate('/sendFormSucess');
    }, [1800]);
  };

  const send = () => {
    const formData = new FormData();
    Object.keys(principalData).forEach( key => formData.append(key, principalData[key]));
    axios.post('https://api-form-deltacapital.onrender.com/send', formData, {
      headers: {
        "Content-Type": 'application/json',
      }
    })
    .then(response => console.log(response.request.status));
  };

  const generatorId = () => {
    const id = `${Math.random().toString(36).slice(5)}-${Math.random().toString(36).slice(5)}`;
    return id;
  };
  useEffect(() => {
    setPrincipalData((prev) => {
      return {...prev, form_id: generatorId()};
    });
  }, []);

  return (
    <main>
      <NavBar>
        <div className="container">
          <h1>Formulário</h1>
          <a href="https://deltacapital.com.br/" target="_blank">
            Delta Capital
            <BsBank />
          </a>
        </div>
      </NavBar>
      <section>
        <div className="container">
          <DataProvider.Provider value={setPrincipalData}>
            <StyledForm onSubmit={handleSubmit}>
              <div className="in-container">
                <div className="sub-container">
                    <FirstArea />
                    <SecondArea />
                    <ThirdArea />
                </div>
              </div>
              <MessageComponent title="Observações:"/>
              <button disabled={btnDisabled}>Enviar {load && <span className="spin"><BiLoaderAlt /></span>}</button>
            </StyledForm>
          </DataProvider.Provider>
        </div>
      </section>
      <FooterComponent />
    </main>
  );
}

export default App;
