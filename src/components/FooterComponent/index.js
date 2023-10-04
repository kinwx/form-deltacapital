import { FooterLeft, FooterRight, FooterStyled } from "../../styles/Style"
import { ImWhatsapp, ImYoutube } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";

export const FooterComponent = ({bottom}) => {
    return (
        <FooterStyled className="disp_footer" value={bottom}>
            <div className="container">
                <FooterLeft>
                    <img src="https://deltacapital.com.br/img/logo.png" alt="delta_capital_logo"/>
                    <p>
                    deltacapital.com.br pertence à DELTA CAPITAL LTDA. A Delta Capital não é uma instituição financeira. Somos correspondente de múltiplas instituições financeiras, Fintechs e também corretora de seguros atuando conforme regulamentação da SUSEP e do Banco Central nos termos da Resolução no 3.954, de 24 de fevereiro de 2011. Os valores, taxas e CET (Custo Efetivo Total) das operações poderão variar de acordo com os critérios de aprovação de cada banco/financeira/seguradora/fintech, não cabendo à Delta Capital a atribuição de intervir na política de crédito vigente em cada parceiro. (c) 2022 DELTA CAPITAL LTDA.
                    </p>
                </FooterLeft>
                <FooterRight className="media_phone">
                    <h2>INFORMAÇÕES PARA CONTATO</h2>
                    <div>
                        <a 
                            href="https://api.whatsapp.com/send/?phone=558540422050&text&type=phone_number&app_absent=0" target="_blank">
                                 <ImWhatsapp />
                                Whatsapp </a>
                        <a 
                            href="mailto:network@deltacapital.com.br"> 
                            <AiOutlineMail />
                            E-mail </a>
                        <a 
                            href="https://www.instagram.com/delta.capital/" 
                            target="_blank"> 
                            <FiInstagram />
                            Instagram</a>
                        <a 
                            href="https://www.youtube.com/@deltacapital" 
                            target="_blank"> 
                            <ImYoutube />
                            Youtube</a>
                    </div>
                </FooterRight>
            </div>
        </FooterStyled>
    );
};