import { StatusBar, Text } from "react-native";

// styles
import { GlobalWrapper } from "styles";
import * as S from "./styles";

const SignInScreen = () => {
  return (
    <GlobalWrapper>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />

      <Text>Teste</Text>
    </GlobalWrapper>
  );
};

export { SignInScreen };
