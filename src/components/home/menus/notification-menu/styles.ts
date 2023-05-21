import styled from "styled-components/native";
import theme from "styles/theme";

export const NotificationContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const NotificationMenuOpen = styled.View`
  position: absolute;
  top: 40px;
  right: 18px;
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
