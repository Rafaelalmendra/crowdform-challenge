import styled from "styled-components/native";
import theme from "styles/theme";

export const UserContainer = styled.TouchableOpacity`
  width: 32px;
  height: 32px;

  align-items: center;
  justify-content: center;
  border-radius: 200px;

  background: ${theme.colors.secondGray};
`;

export const UserMenuOpen = styled.View`
  position: absolute;
  top: 40px;
  left: 18px;
  z-index: 1;
  elevation: 5;

  padding: 14px;

  background-color: ${theme.colors.white};
  border-radius: 8px;
`;

export const Overlay = styled.SafeAreaView`
  flex: 1;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background: ${theme.colors.tertiaryGray};
  margin: 16px 0;
`;
