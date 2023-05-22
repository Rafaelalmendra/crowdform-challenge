import styled from "styled-components/native";
import theme from "styles/theme";

export const Container = styled.View`
  width: 220px;

  border-width: 1px;
  border-color: ${theme.colors.secondGray};
  margin-right: 15px;
`;

export const CoverContainer = styled.View`
  width: 100%;
  height: 106px;
`;

export const CoverImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.View`
  padding: 13px;
  border-radius: 4px;
`;
