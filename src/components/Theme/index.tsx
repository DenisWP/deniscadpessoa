import * as C from './styles'
import {ReactNode} from "react";
import {Header} from "../Header";
import {SidebarItem} from "../SidebarItem"

type Props = {
    children: ReactNode;
}


export const Theme = ({children}: Props) => {
    return (
        <C.Container>
            <C.Area>
                <Header/>
                <C.Steps>
                    <C.Sidebar>
                        {/*Criando o Sidebar*/}
                        <SidebarItem
                            title="Nome"
                            description="Se Identifique"
                            path="/"
                        />
                        <SidebarItem
                            title="Idade"
                            description="Se Identifique"
                            path="/step2"
                        />
                        <SidebarItem
                            title="CPF"
                            description="Se Identifique"
                            path="/step3"
                        />
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    );
}