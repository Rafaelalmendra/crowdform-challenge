import { StatusBar } from "react-native";

// components
import { HeaderHome, TextComponent } from "components";

// styles
import * as S from "./styles";
import { GlobalWrapper } from "styles";

const HomeScreen = () => {
  return (
    <GlobalWrapper>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />

      <HeaderHome />

      <S.Container>
        <TextComponent fontSize={18} fontFamily="semiBold" marginBottom={34}>
          Home
        </TextComponent>
      </S.Container>
    </GlobalWrapper>
  );
};

export { HomeScreen };
