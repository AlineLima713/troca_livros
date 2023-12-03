import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  /* flex-direction: column; */
`;

export const Circle = styled.View`
  /* flex: 1; */
  width: 820px;
  height: 820px;
  border-radius: 410px;
  background-color: #BEB6F5;
  /* justify-content: space-between; */
  /* flex-direction: column; */
  align-items: center;
`;

export const Image = styled.Image`
  width: 400px;
  height: 385px;
  margin-top: 80px;
  margin-left: 70px;
  object-fit: contain;
`;

export const Login_Button = styled.TouchableOpacity`
    width: 258px;
    height: 47px;
    background-color: #FFFFFF;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
`;

export const Title_Login = styled.Text`
  color: #428D76;
  font-family: Inter_700Bold;
`;

export const Redirection = styled.View`
 width: 220px;
 flex-direction: row;
 justify-content: space-between;
 padding-left: 13px;
 padding-right: 25px;
 margin-top: 20px;
`;

export const Redirection_Title = styled.Text`
  color: #3B7B67;
  font-family: Inter_400Regular;
  font-size: 12px;
`;

export const Button_Title = styled.Text`
  color: #3B7B67;
  font-family: Inter_700Bold;
  font-size: 12px;
`;




