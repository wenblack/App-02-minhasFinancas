import styled, { css } from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

interface TypeProps {
    tipo: 'up' | 'down' | 'total';
}


export const Container = styled.View <TypeProps>`
    background-color: #FFFFFF;
    width: ${RFValue(300)}px;
    border-radius: 5px;
    padding: 19px  23px;
    padding-bottom: ${RFValue(42)}px;
    margin-right: 16px;

    ${(props) => props.tipo === 'total' && css`
    background-color: #FF872C;
    `};
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Titulo = styled.Text <TypeProps>`
    font-family: 'Poppins_400Regular';
    font-size: ${RFValue(14)}px;
    color: #000000;

    ${(props) => props.tipo === 'total' && css`
    color: #FFFFFF;
    `};

`;

export const Icone = styled(Feather) <TypeProps>`
    font-size: ${RFValue(40)}px;
    
    ${(props) => props.tipo === 'up' && css`
    color: #12A454;
    `};

    ${(props) => props.tipo === 'down' && css`
    color: #E83F5B;
    `};

    ${(props) => props.tipo === 'total' && css`
    color: #FFFFFF;
    `};


`;

export const Rodape = styled.View`
`;

export const Quantidade = styled.Text <TypeProps>`
    font-family: 'Poppins_500Medium';
    font-size: ${RFValue(32)}px;
    color: #000000;
    margin-top: 38px;

    
    ${(props) => props.tipo === 'total' && css`
    color: #FFFFFF;
    `};
`;

export const UltimaTransacao = styled.Text <TypeProps>`
    font-family:'Poppins_400Regular';
    font-size: ${RFValue(12)}px;
    color: #969CB2;

    ${(props) => props.tipo === 'total' && css`
    color: #FFFFFF;
    `};
`;
