import styled from "styled-components/native";
import theme from "styles/theme";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const CardContainer = styled.View`
  width: 48%;
  height: 215px;

  padding: 20px;

  border-radius: 10px;
  background: ${theme.colors.secondGray};
`;
