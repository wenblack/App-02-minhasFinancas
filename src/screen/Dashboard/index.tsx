import React from 'react'
import { CartaoDestaque } from '../../components/CartaoDestaque'
//Importando estilos do tema(Styled Components)
//Propriedade horizontal da  ScrollView deixa ela horizontal 
import {
    Container,
    Header,
    UserContainer,
    UserIfo,
    Photo,
    User,
    UserGreeting,
    Username,
    Icone,
    CartoesDeDestaque

} from './styles'
//Interface
export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserContainer>
                    <UserIfo>
                        <Photo
                            source={{ uri: 'https://avatars.githubusercontent.com/u/22510287?s=400&u=559af879812d19f4a2e3100b15082726da293ba5&v=4' }}
                        />
                        <User>
                            <UserGreeting> Olá, </UserGreeting>
                            <Username>Wender</Username>
                        </User>
                    </UserIfo>
                    <Icone name="power" />

                </UserContainer>
            </Header>
            <CartoesDeDestaque >
                <CartaoDestaque />
                <CartaoDestaque />
                <CartaoDestaque />
            </CartoesDeDestaque>

        </Container>
    )
}