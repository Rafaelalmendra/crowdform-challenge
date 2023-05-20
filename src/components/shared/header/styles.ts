import styled from "styled-components/native";
import theme from "styles/theme";

export const Wrapper = styled.View`
  width: 100%;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  padding: 18px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.secondGray};
`;
