import {useNavigate, Link} from 'react-router-dom';
import * as C from './styles';
import {FormActions, useForm} from '../../contexts/FormContext';
import {Theme} from "../../components/Theme";
import {ChangeEvent, useEffect} from 'react';

export const FormStep2 = () => {
    const navigate = useNavigate();
    const {state, dispach} = useForm();

    const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispach({
            type: FormActions.setAge,
            payload: e.target.value
        });
    }

    useEffect(() => {
        if (state.name === ''){
            navigate('/')
        }else {
            dispach({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.age !== 0){
            navigate('/step3');
        }else{
            alert("Preencha os dados")
        }
    }

    return (
        <Theme>
            <C.Container>
                <h1> {state.name}, qual a sua idade ? </h1>
                <hr/>
                <label>
                    Digite sua idade:
                    <input type="number"
                           autoFocus
                           value={state.age}
                           onChange={handleAgeChange}
                    />
                </label>
                <Link to='/' className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );

}