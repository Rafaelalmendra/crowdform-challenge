import styled, { css } from "styled-components/native";
import theme from "styles/theme";

type TextInputProps = {
  isFocused: boolean;
  hasError: boolean;
};

export const Wrapper = styled.View`
  position: relative;
`;

export const TextInput = styled.TextInput<TextInputProps>`
  width: 100%;
  height: 54px;
  padding: 18px 14px;

  background: ${theme.colors.secondGray};
  border-width: 1px;
  border-color: ${theme.colors.secondGray};
  border-radius: 4px;

  color: ${theme.colors.black};
  font-size: 16px;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${theme.colors.lightPurple};
    `}

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: red;
    `}
`;

export const IconWrapper = styled.TouchableOpacity`
  position: absolute;
  height: 54px;
  right: 15px;
  justify-content: center;
`;

export const ErrorMessage = styled.Text`
  color: red;
`;