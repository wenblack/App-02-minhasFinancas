import React from 'react'
import { CartaoDestaque } from '../../components/CartaoDestaque'
import { CartaoTransacao, CartaoTransacaoProps } from '../../components/CartaoTransacao'
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
    CartoesDeDestaque,
    Trasacoes,
    Titulo,
    ListadeTransicao

} from './styles'
//Interface
export interface ListaData extends CartaoTransacaoProps {
    id: string;
}

const data: ListaData[] = [
    {
        id: '1',
        tipo: "positivo",
        title: "Desenvolvimento de site",
        quantidade: "R$ 12.000,00",
        category: {
            nome: 'Vendas',
            icon: 'dollar-sign',
        },
        data: "13/04/2021",
    },

    {
        id: '2',
        tipo: "negativo",
        title: "Hamburgueria",
        quantidade: "R$ 59,00",
        category: {
            nome: 'Alimentação',
            icon: 'coffee',
        },
        data: "10/04/2021",
    },

    {
        id: '3',
        tipo: "negativo",
        title: "Aluguel do Apartamento",
        quantidade: "R$ 1.200,00",
        category: {
            nome: 'Casa',
            icon: 'shopping-bag'
        },
        data: "10/04/2021",
    },



];

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
                <CartaoDestaque
                    tipo="up"
                    titulo="Entrada"
                    quantidade="R$ 17.000,00"
                    ultimaTransacao="Útima entrada dia 13 de Abril"
                />
                <CartaoDestaque
                    tipo="down"
                    titulo="Saídas"
                    quantidade="R$ 1.259,00"
                    ultimaTransacao="Útima saída dia 13 de Abril"
                />
                <CartaoDestaque
                    tipo="total"
                    titulo="Total"
                    quantidade="R$ 16.141,00"
                    ultimaTransacao="01 à 16 de abril"
                />
            </CartoesDeDestaque>
            <Trasacoes>
                <Titulo>Listagem</Titulo>
                <ListadeTransicao
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <CartaoTransacao
                            dados={item}
                        />}

                />

            </Trasacoes>
        </Container>
    )
}