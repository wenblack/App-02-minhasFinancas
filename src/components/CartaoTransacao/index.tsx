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

interface Categoria {
    nome: string;
    icon: string;

}

export interface CartaoTransacaoProps {
    dados: {
        tipo: 'positivo' | 'negativo';
        title: string;
        quantidade: string;
        category: Categoria;
        data: string;
    }

}


export function CartaoTransacao({
    dados
}: CartaoTransacaoPropsProps) {
    return (
        <Container>
            <Titulo>
                {dados.title}
            </Titulo>

            <Quantidade tipo={dados.tipo}>
                {dados.tipo === 'negativo' && '- '}
                {dados.quantidade}
            </Quantidade>

            <Cabecalho>
                <Categ>
                    <Icone name={dados.category.icon} />
                    <Nome>
                        {dados.category.nome}
                    </Nome>
                </Categ>

                <Data>
                    {dados.data}
                </Data>
            </Cabecalho>
        </Container>
    )
}