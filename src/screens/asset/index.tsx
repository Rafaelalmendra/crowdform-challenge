import { StatusBar } from "react-native";
import { useRoute } from "@react-navigation/native";

// components
import { Header, TextComponent } from "components";

// styles
import * as S from "./styles";
import { GlobalWrapper } from "styles";

const AssetScreen = () => {
  const route: any = useRoute();
  const { fund } = route.params;

  return (
    <GlobalWrapper>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />

      <Header hasBackButton screenTitle={fund.title} screenSubtitle="WFND" />

      <S.Container>
        <TextComponent>Assets details</TextComponent>
      </S.Container>
    </GlobalWrapper>
  );
};

export { AssetScreen };
