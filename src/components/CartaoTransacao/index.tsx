import React from 'react';
import {
    Container,
    Titulo,
    Quantidade,
    Cabecalho,
    Categ,
    Icone,
    Nome,
    Data,

} from './style';

export function CartaoTransacao() {
    return (
        <Container>
            <Titulo>Desenvolvimento de Site </Titulo>
            <Quantidade>R$ 12.000,00 </Quantidade>
            <Cabecalho>
                <Categ>
                    <Icone name="dollar-sign" />
                    <Nome> Vendas</Nome>
                </Categ>
                <Data>13/04/2020</Data>
            </Cabecalho>
        </Container>
    )
}