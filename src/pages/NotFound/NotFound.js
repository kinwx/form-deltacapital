import { BsBank } from "react-icons/bs";
import { NavBar, SectionStyled } from "../../styles/Style";
import { FooterComponent } from "../../components/FooterComponent";

export const NotFound = () => {
    return (
        <main>
            <NavBar>
                <div className="container">
                    <h1>Formulário</h1>
                    <a href="https://deltacapital.com.br/">
                        Delta Capital
                        <BsBank />
                    </a>
                </div>
            </NavBar>
            <SectionStyled>
                <div className="container">
                    <h1>Página não encontrada</h1>
                    <p>Caminho solicitado incorreto.</p>
                </div>
            </SectionStyled>
            <FooterComponent bottom={true}/>
        </main>
    );
};