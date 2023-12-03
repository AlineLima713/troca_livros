import { Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 250px;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
`;

export const Welcome = styled.Text`
  color: #000000;
  font-family: Inter_400Regular;
  font-size: 20px;
`;

export const Title = styled.Text`
  color: #000000;
  font-size: 30px;
  font-family: Inter_700Bold;
`;