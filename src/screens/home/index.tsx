import { useEffect } from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

// stores
import { useSelector } from "stores";
import { getUser } from "stores/slices";

// components
import { HeaderHome, Portfolio } from "components";

// styles
import * as S from "./styles";
import { GlobalWrapper } from "styles";

const HomeScreen = () => {
  const { navigate } = useNavigation();
  const { email, name } = useSelector(getUser);

  useEffect(() => {
    if (!email && !name) {
      navigate("SignIn");
    }
  }, []);

  return (
    <GlobalWrapper>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />

      <HeaderHome />

      <S.Container>
        <Portfolio />
      </S.Container>
    </GlobalWrapper>
  );
};

export { HomeScreen };
