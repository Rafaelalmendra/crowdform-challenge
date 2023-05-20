import { StatusBar } from "react-native";

// components
import { Button, Input, TextComponent } from "components";

// styles
import * as S from "./styles";
import { GlobalWrapper } from "styles";

const SignInScreen = () => {
  return (
    <GlobalWrapper>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />

      <S.Container>
        <TextComponent fontSize={18} fontFamily="semiBold" marginBottom={34}>
          Login
        </TextComponent>

        <S.FormContainer>
          <Input placeholder="Enter your email" />
          <Input placeholder="Minimum 8 characters" isPasswordInput />
        </S.FormContainer>

        <Button>Login</Button>

        <TextComponent
          fontSize={12}
          fontFamily="regular"
          marginTop={13}
          color="gray"
        >
          Don’t have an account? Sign up here
        </TextComponent>
      </S.Container>
    </GlobalWrapper>
  );
};

export { SignInScreen };
