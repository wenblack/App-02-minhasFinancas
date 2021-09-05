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

interface Props {
    titulo: string;
    quantidade: string;
    ultimaTransacao: string;
    tipo: 'up' | 'down' | 'total';
}

const icone = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
}

export function CartaoDestaque({
    titulo,
    quantidade,
    ultimaTransacao,
    tipo
}: Props) {

    return (
        <Container tipo={tipo}>
            <Header>
                <Titulo tipo={tipo}>{titulo}</Titulo>
                <Icone name={icone[tipo]} tipo={tipo} />
            </Header>
            <Rodape>
                <Quantidade tipo={tipo}>{quantidade}</Quantidade>
                <UltimaTransacao tipo={tipo}>{ultimaTransacao}</UltimaTransacao>
            </Rodape>
        </Container>
    )
}