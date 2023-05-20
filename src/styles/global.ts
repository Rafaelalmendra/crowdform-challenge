import styled from "styled-components/native";
import theme from "./theme";

export const GlobalWrapper = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;

  background: ${theme.colors.white};
`;
