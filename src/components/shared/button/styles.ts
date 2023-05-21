import styled from "styled-components/native";
import theme from "styles/theme";

type WrapperProps = {
  variant?: "filled" | "outlined" | "link" | "unstyled";
  width?: number;
  height?: number;
  backgroundColor?: keyof typeof theme.colors;
};

export const Wrapper = styled.TouchableOpacity<WrapperProps>`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 4px;
  gap: 4px;

  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "58px")};

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
    } else if (variant === "unstyled") {
      return `
        height: auto;
        background-color: transparent;
      `;
    }
  }}
`;
