import styled from "styled-components/native";
import theme from "styles/theme";

export const Container = styled.ScrollView`
  width: 100%;
  flex: 1;
`;

export const MessageContainer = styled.View`
  width: 100%;
  padding: 0 20px 100px 20px;
`;

export const MessageContent = styled.View`
  padding: 10px;
  background: ${theme.colors.secondGray};
  border-radius: 4px;
`;

export const ButtonBuyContainer = styled.View`
  position: absolute;
  width: 100%;
  bottom: 0;
  elevation: 10;
  padding: 10px 30px;

  background: ${theme.colors.white};
`;
