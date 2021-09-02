import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";


export const Container = styled.View`
    background-color: #FFFFFF;
    width: ${RFValue(300)}px;
    border-radius: 5px;
    padding: 19px  23px;
    padding-bottom: ${RFValue(42)}px;
    margin-right: 16px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Titulo = styled.Text`
    font-family: 'Poppins_400Regular';
    font-size: ${RFValue(14)}px;
    color: #000000;

`;

export const Icone = styled(Feather)`
    font-size: ${RFValue(40)}px;
    color: #12A454;

`;

export const Rodape = styled.View`
`;

export const Quantidade = styled.Text`
    font-family: 'Poppins_500Medium';
    font-size: ${RFValue(32)}px;
    color: #000000;
    margin-top: 38px;
`;

export const UltimaTransacao = styled.Text`
    font-family:'Poppins_400Regular';
    font-size: ${RFValue(12)}px;
    color: #969CB2;
`;
