import styled from "styled-components/native";
import theme from "styles/theme";

type WrapperProps = {
  backgroundColor?: keyof typeof theme.colors;
};

export const Wrapper = styled.TouchableOpacity<WrapperProps>`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 4px;
  gap: 16px;

  width: 100%;
  height: 58px;
  background-color: ${({ backgroundColor }) =>
    theme.colors[backgroundColor || "purple"]};
`;
