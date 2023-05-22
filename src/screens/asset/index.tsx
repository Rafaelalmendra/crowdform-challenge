import { useState, useEffect } from "react";

import { StatusBar } from "react-native";
import { useRoute } from "@react-navigation/native";

// types
import { FundType } from "types";

// components
import {
  Header,
  Graph,
  Infos,
  FundBreakdown,
  AssetPortfolio,
  TextComponent,
  Button,
} from "components";

// styles
import * as S from "./styles";
import { GlobalWrapper } from "styles";

const AssetScreen = () => {
  const route: any = useRoute();
  const { fund } = route.params;

  const [data, setData] = useState<FundType>(fund);

  useEffect(() => {
    setData(fund);
  }, [fund]);

  return (
    <GlobalWrapper>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />

      <Header
        hasBackButton
        screenTitle={fund.title}
        screenSubtitle={fund.acronym}
      />

      <S.Container>
        {data && <Graph data={data} />}

        <Infos data={data} />

        <FundBreakdown data={data} />

        <AssetPortfolio data={data} />

        <S.MessageContainer>
          <S.MessageContent>
            <TextComponent fontSize={12} color="gray">
              Please note that prices are for reference only and may vary at the
              time of excecuting a buy or sell order.
              {"\n"}
              {"\n"}
              The information provided is not investment advice, and should not
              be used as a recommendation to buy or sell assets.
            </TextComponent>
          </S.MessageContent>
        </S.MessageContainer>
      </S.Container>

      <S.ButtonBuyContainer>
        <Button>Buy</Button>
      </S.ButtonBuyContainer>
    </GlobalWrapper>
  );
};

export { AssetScreen };
