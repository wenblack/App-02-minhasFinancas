import React from "react";
import {
    Container,
    Header,
    Titulo,
    Icone,
    Rodape,
    Quantidade,
    UltimaTransacao

}
    from './style'

export function CartaoDestaque() {

    return (
        <Container >
            <Header>
                <Titulo>Entrada</Titulo>
                <Icone name="arrow-up-circle"></Icone>
            </Header>
            <Rodape>
                <Quantidade>R$ 17.400,00 </Quantidade>
                <UltimaTransacao>Última entrada dia 13 de abril</UltimaTransacao>
            </Rodape>
        </Container>
    )
}