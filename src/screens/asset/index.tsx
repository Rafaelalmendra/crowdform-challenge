import { useState, useEffect } from "react";

import { StatusBar } from "react-native";
import { useRoute } from "@react-navigation/native";

// types
import { FundType } from "types";

// components
import { Header, Graph, Infos } from "components";

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

      <Header hasBackButton screenTitle={fund.title} screenSubtitle="WFND" />

      <S.Container>
        {data && <Graph data={data} />}

        <Infos data={data} />
      </S.Container>
    </GlobalWrapper>
  );
};

export { AssetScreen };
