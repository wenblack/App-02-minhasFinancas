/*Ao colocar usar o padding é possível dar valor para cada espaçamento de 
forma separada Ex: padding:0 24(Define zero vertical e 24 para horizontal)
Para alterar propriedade do componente nativo com style componentes, utilizar
a classe/operador attrs
*/
import styled from 'styled-components/native';
import {
    RFPercentage,
    RFValue
} from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
    flex: 1;
    background-color: #F0F2F5;   
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: #5636D3;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`;

export const UserContainer = styled.View`
    width: 100%;
    padding: 0 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;
`;

export const UserIfo = styled.View`
    flex-direction: row;
    align-items: center;

`;
export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
    margin-left: 24px;

`;

export const User = styled.View`
    margin-left: 17px;

`;

export const UserGreeting = styled.Text`
    font-size: ${RFValue(18)}px;
    color: #FFFFFF;
    font-family: 'Poppins_400Regular';
`;

export const Username = styled.Text`
    font-size: ${RFValue(24)}px;
    color: #FFFFFF;
    font-family: 'Poppins_700Bold';
`;
//Estilizando Biblioteca
export const Icone = styled(Feather)`
    color:#FF872C;
    font-size: ${RFValue(24)}px;
    padding-right: 24px;
`;


export const CartoesDeDestaque = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 24 }
})`
    width: 100%;
    position:absolute;
    margin-top: ${RFPercentage(20)}px;
  `;
