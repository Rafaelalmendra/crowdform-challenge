// types
import { FundType } from "types";

// components
import { TextComponent } from "components/shared";

// styles
import * as S from "./styles";
import theme from "styles/theme";

// icons
import { Info } from "phosphor-react-native";

type InfosProps = {
  data: FundType;
};

const Infos = ({ data }: InfosProps) => {
  return (
    <S.Container>
      <TextComponent fontSize={17} fontWeight="700" marginBottom={20}>
        Infos & Stats
      </TextComponent>

      <S.InfosContainer>
        <S.InfoItem>
          <TextComponent fontSize={14} color="gray">
            AUM <Info size={14} color={theme.colors.gray} weight="bold" />
          </TextComponent>

          <TextComponent fontSize={14} color="black">
            ${data.aum}m
          </TextComponent>
        </S.InfoItem>

        <S.InfoItem>
          <TextComponent fontSize={14} color="gray">
            Issue Date{" "}
            <Info size={14} color={theme.colors.gray} weight="bold" />
          </TextComponent>

          <TextComponent fontSize={14} color="black">
            {data.issueDate}
          </TextComponent>
        </S.InfoItem>
      </S.InfosContainer>

      <S.InfosContainer>
        <S.InfoItem>
          <TextComponent fontSize={14} color="gray">
            Vintage Range{" "}
            <Info size={14} color={theme.colors.gray} weight="bold" />
          </TextComponent>

          <TextComponent fontSize={14} color="black">
            {data.vintageRange}
          </TextComponent>
        </S.InfoItem>

        <S.InfoItem>
          <TextComponent fontSize={14} color="gray">
            Ter <Info size={14} color={theme.colors.gray} weight="bold" />
          </TextComponent>

          <TextComponent fontSize={14} color="black">
            {data.ter}%
          </TextComponent>
        </S.InfoItem>
      </S.InfosContainer>

      <S.InfosContainer>
        <S.InfoItem>
          <TextComponent fontSize={14} color="gray">
            Price at Close{" "}
            <Info size={14} color={theme.colors.gray} weight="bold" />
          </TextComponent>

          <TextComponent fontSize={14} color="black">
            ${data.priceAtClose}
          </TextComponent>
        </S.InfoItem>

        <S.InfoItem>
          <TextComponent fontSize={14} color="gray">
            Price at Open{" "}
            <Info size={14} color={theme.colors.gray} weight="bold" />
          </TextComponent>

          <TextComponent fontSize={14} color="black">
            ${data.priceAtOpen}
          </TextComponent>
        </S.InfoItem>
      </S.InfosContainer>
    </S.Container>
  );
};

export { Infos };
