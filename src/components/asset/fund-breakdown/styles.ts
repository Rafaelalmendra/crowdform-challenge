import styled from "styled-components/native";
import theme from "styles/theme";

export const Container = styled.View`
  width: 100%;
  flex: 1;

  margin-top: 40px;
  padding: 0 20px;
`;

export const FundContainer = styled.View`
  width: 100%;

  align-items: center;
  margin-bottom: 10px;
`;

export const TabsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const TabItem = styled.Text<{ active?: boolean }>`
  border-bottom-width: 2px;
  border-color: ${({ active }) =>
    active ? theme.colors.purple : "transparent"};
  color: ${({ active }) => (active ? theme.colors.black : theme.colors.gray)};
  height: 28px;
`;

export const FundItemContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  flex-direction: row;

  margin-top: 18px;
`;
