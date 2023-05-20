import styled from "styled-components/native";
import theme from "styles/theme";

export const CheckBoxContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CheckBox = styled.TouchableOpacity`
  width: 20px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-width: 1px;
  border-radius: 4px;
  border-color: ${theme.colors.gray};
`;
