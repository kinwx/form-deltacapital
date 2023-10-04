import { BrowserRouter, Route, Routes } from "react-router-dom"
import { EndForm } from "./pages/EndForm/EndForm"
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";

export const Principal = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/sendFormSucess" element={<EndForm />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    );
};