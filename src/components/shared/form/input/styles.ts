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

export const Label = styled.Text`
  color: ${theme.colors.gray};
  margin-bottom: 5px;
`;

export const IconWrapper = styled.TouchableOpacity<{ isError: boolean }>`
  position: absolute;
  bottom: ${({ isError }) => (isError ? "39px" : "16px")};
  right: 10px;
  justify-content: center;
`;

export const ErrorMessage = styled.Text`
  color: red;
  margin-top: 4px;
`;
