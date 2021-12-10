    //Estudar => Context, Reducer, Provider, Hook.

    import {createContext, ReactNode, useContext, useReducer} from 'react';

    type State = {
        currentStep: number;
        name: string;
        age: number;
        cpf: string
    }

    type Action = {
        type: FormActions;
        payload: any;
    }

    type ContextType = {
        state: State;
        dispach: (action: Action) => void
    }

    type FormProviderProps = {
        children: ReactNode;
    }
    //Criando o context

    const FormContext = createContext <ContextType | undefined>(undefined);

    const initialData: State = {
        currentStep: 0,
        name: '',
        age: 0,
        cpf: ''

    }

    // Criando o Reducer
    export enum FormActions {
        setCurrentStep,
        setName,
        setAge,
        setCpf
    }

    const formReducer = (state: State, action: Action) => {
        switch (action.type){
            case FormActions.setCurrentStep:
                return{...state, currentStep: action.payload}
            case FormActions.setName:
                return {...state, name: action.payload}
            case FormActions.setAge:
                return {...state, age: action.payload}
            case FormActions.setCpf:
                return {...state, cpf: action.payload}
            default:
                return state;
        }
    }

    //Provider componente principal da aplicacao.
    export const FormProvider = ({children}: FormProviderProps) => {
        const [state, dispach] = useReducer(formReducer, initialData);
        const value = { state, dispach };
        return (
          <FormContext.Provider value = {value}>
              {children}
          </FormContext.Provider>
        );
    }

    //Criando o hook
    export const useForm = () => {
        const context = useContext(FormContext)
        if(context === undefined){
            throw new Error('useForm precisa ser usado dentro do Provider')
        }
        return context;
    }