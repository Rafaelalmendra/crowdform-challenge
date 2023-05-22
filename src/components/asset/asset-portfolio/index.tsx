import { View } from "react-native";

// types
import { FundType } from "types";

// components
import { Button, TextComponent } from "components/shared";

// styles
import * as S from "./styles";
import theme from "styles/theme";

// icons
import { ArrowUpRight, ChartPieSlice } from "phosphor-react-native";

type AssetPortfolioProps = {
  data: FundType;
};

const AssetPortfolio = ({ data }: AssetPortfolioProps) => {
  return (
    <S.Container>
      <S.Title>
        <ChartPieSlice size={20} weight="bold" />

        <TextComponent fontSize={17} fontWeight="700">
          Your Portfolio
        </TextComponent>
      </S.Title>

      <S.CreditsContainer>
        <S.LeftContent>
          <TextComponent fontSize={24} fontWeight="bold">
            {data.credits} Credits
          </TextComponent>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <ArrowUpRight size={14} color={theme.colors.green} weight="bold" />

            <TextComponent color="green" fontSize={14}>
              {data.percentageFund}%
            </TextComponent>
          </View>
        </S.LeftContent>

        <S.RightContent>
          <TextComponent fontSize={24} fontWeight="bold">
            ${data.aum}
          </TextComponent>
          <TextComponent fontSize={14} color="gray">
            Last purchase 28d ago
          </TextComponent>
        </S.RightContent>
      </S.CreditsContainer>

      <S.ButtonsContainer>
        <Button width={172} height={52} variant="outlined" textColor="purple">
          Sell
        </Button>
        <Button width={172} height={52} backgroundColor="green">
          Retire credits
        </Button>
      </S.ButtonsContainer>

      <TextComponent fontSize={11} marginTop={15} color="gray">
        You’ve previously retired 28 credits of this asset
      </TextComponent>
    </S.Container>
  );
};

export { AssetPortfolio };
