import styled from "styled-components/native";
import theme from "styles/theme";

type WrapperProps = {
  backgroundColor?: keyof typeof theme.colors;
  variant?: "filled" | "outlined" | "link";
};

export const Wrapper = styled.TouchableOpacity<WrapperProps>`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 4px;
  gap: 16px;

  width: 100%;
  height: 58px;

  ${({ variant, backgroundColor }) => {
    if (variant === "link") {
      return `
        height: auto;
        text-decoration: underline;
        background-color: transparent;
      `;
    } else if (variant === "filled") {
      return `
        background-color: ${
          backgroundColor ? theme.colors[backgroundColor] : theme.colors.purple
        };
      `;
    } else if (variant === "outlined") {
      return `
        background-color: transparent;
        border: 1px solid ${
          backgroundColor ? theme.colors[backgroundColor] : theme.colors.purple
        };
      `;
    }
  }}
`;
