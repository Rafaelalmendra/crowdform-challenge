import styled from "styled-components/native";
import theme from "styles/theme";

export const AccountsFundsContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 6px;
`;

export const AccountsFundsOpen = styled.View`
  position: absolute;
  top: 40px;
  left: 25%;
  right: 25%;

  align-items: center;
  justify-content: center;

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
