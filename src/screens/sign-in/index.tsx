import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

// components
import { Button, Header, Input, TextComponent } from "components";

// styles
import * as S from "./styles";
import { GlobalWrapper } from "styles";

const SignInScreen = () => {
  const { navigate } = useNavigation();

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
          Login
        </TextComponent>

        <S.FormContainer>
          <Input placeholder="Enter your email" label="E-mail" />
          <Input
            placeholder="Enter your password"
            isPasswordInput
            label="Password"
          />
        </S.FormContainer>

        <Button>Login</Button>

        <S.SignUpContainer>
          <TextComponent fontSize={12} fontFamily="regular" color="gray">
            Don’t have an account?
          </TextComponent>

          <Button
            variant="link"
            textColor="gray"
            width={56}
            fontSize={12}
            onPress={() => navigate("SignUp")}
          >
            Sign Up
          </Button>

          <TextComponent fontSize={12} fontFamily="regular" color="gray">
            here
          </TextComponent>
        </S.SignUpContainer>
      </S.Container>
    </GlobalWrapper>
  );
};

export { SignInScreen };
