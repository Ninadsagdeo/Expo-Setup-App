import styled from "styled-components/native";
import { colors } from "../../Themes/Colors";
const Container = styled.View`
  flex: 1;
  background-color: ${colors.primaryColor};
  width: 100%;
`;
const TextStyled = styled.Text`
  color: black;
  text-align: center;
`;
const Text = styled.Text`
  color: black;
  font-size: 18;
  text-align: center;
`;
const AppButton = styled.TouchableOpacity`
  color: black;
  font-size: 18;
  text-align: center;
`;

export { AppButton, Container, TextStyled, Text };
