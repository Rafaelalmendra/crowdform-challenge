import styled from "styled-components/native";
import theme from "styles/theme";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 30px;

  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.secondGray};
`;

export const LeftContent = styled.View`
  flex-direction: row;
  align-items: flex-end;
  gap: 4px;
  padding-left: 20px;
`;
