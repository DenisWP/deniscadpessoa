import {useNavigate} from 'react-router-dom';
import * as C from './styles';
import {FormActions, useForm} from '../../contexts/FormContext';
import {Theme} from "../../components/Theme";
import {ChangeEvent, useEffect} from 'react';

export const FormStep1 = () => {
    const navigate = useNavigate();
    const {state, dispach} = useForm();

    //Funcao criada para pegar o que foi digitado no input e poder utilizado.
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispach({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

    //Pegar em qual passo estou
    useEffect(() => {
        dispach({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);

    const handleNextStep = () => {
        if(state.name !== ''){
            navigate('/step2');
        }else{
            alert("Preencha os dados");
        }
    }

    return (
        <Theme>
            <C.Container>
                <h1>Vamos começar! </h1>
                <hr/>
                <label>
                    Digite seu nome completo:
                    <input
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );

}