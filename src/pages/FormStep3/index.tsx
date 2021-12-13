import {useNavigate, Link} from 'react-router-dom';
import * as C from './styles';
import {FormActions, useForm} from '../../contexts/FormContext';
import {Theme} from "../../components/Theme";
import {ChangeEvent, useEffect} from 'react';

export const FormStep3 = () => {
    const navigate = useNavigate();
    const {state, dispach} = useForm();

    const handleCpfChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispach({
            type: FormActions.setCpf,
            payload: e.target.value
        });
    }

    useEffect(() => {
        dispach({
            type: FormActions.setCurrentStep,
            payload: 3
        });
    }, []);

    const handleNextStep = () => {
        if(state.cpf !== ''){
            //Enviar para a API da Natalí
            console.log(state);
        }
    }

    return (
        <Theme>
            <C.Container>
                <h1>Ok {state.name} ! Agora informe o seu CPF</h1>
                <hr/>
                <label>
                    Digite seu CPF:
                    <input type="text"
                           autoFocus
                           value={state.cpf}
                           onChange={handleCpfChange}
                    />
                </label>
                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    );

}