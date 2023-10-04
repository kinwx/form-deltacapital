import { BsBank } from "react-icons/bs";
import { NavBar, SectionStyled } from "../../styles/Style";
import { FooterComponent } from "../../components/FooterComponent";

export const EndForm = () => {
    return (
        <main style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: '100vh'}}>
            <NavBar>
                <div className="container">
                    <h1>Formulário</h1>
                    <a href="https://deltacapital.com.br/">
                        Delta Capital
                        <BsBank />
                    </a>
                </div>
            </NavBar>
            <SectionStyled className="section-styled">
                <div className="container">
                    <h1>Formulário enviado com Sucesso.</h1>
                </div>
            </SectionStyled>
            <FooterComponent bottom={true} />
        </main>
    );
};