import { StatusBar } from "react-native";

// stores
import { useSelector } from "stores";
import { getUser } from "stores/slices";

// components
import { Header, TextComponent } from "components";

// styles
import * as S from "./styles";
import { GlobalWrapper } from "styles";

const HomeScreen = () => {
  const { email, name } = useSelector(getUser);

  console.log("infos", {
    email,
    name,
  });

  return (
    <GlobalWrapper>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />

      <Header />

      <S.Container>
        <TextComponent fontSize={18} fontFamily="semiBold" marginBottom={34}>
          Home
        </TextComponent>
      </S.Container>
    </GlobalWrapper>
  );
};

export { HomeScreen };
