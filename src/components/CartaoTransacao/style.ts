import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 17px 24px;
    
    
`;
export const Titulo = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: 'Poppins_400Regular';
`;

export const Quantidade = styled.Text`
     font-size: ${RFValue(20)}px;
     margin-top: 2px;
     font-family: 'Poppins_400Regular';
     color: #12A454
`;

export const Cabecalho = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 19px;
`;

export const Categ = styled.Text`
    flex-direction: row;
    align-items: center;
`;

export const Icone = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: #969CB2;
`;

export const Nome = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: 'Poppins_400Regular';
    color: #969CB2;
    margin-left: 17px;
`;

export const Data = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: 'Poppins_400Regular';
    color: #969CB2;
`;