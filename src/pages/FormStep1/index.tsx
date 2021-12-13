import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import {Theme} from "../../components/Theme";

export const FormStep1 = () => {
    const navigate = useNavigate();
    const handleNextStep = () => {
        navigate('/step2');
    }

    return (
        <Theme>
            <C.Container>
                <h1>Vamos começar pelo nome</h1>
                <hr/>
                <label>
                    Digite seu nome completo:
                    <input type="text" autoFocus/>
                </label>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );

}