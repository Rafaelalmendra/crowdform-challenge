import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

// components
import { Button, Input, TextComponent } from "components";

// styles
import * as S from "./styles";
import { GlobalWrapper } from "styles";

const SignUpScreen = () => {
  const { navigate } = useNavigation();

  return (
    <GlobalWrapper>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />

      <S.Container>
        <TextComponent fontSize={18} fontFamily="semiBold" marginBottom={34}>
          Create your account
        </TextComponent>

        <S.FormContainer>
          <Input placeholder="Enter your first name" label="First Name" />
          <Input placeholder="Enter your last name" label="Last Name" />
          <Input placeholder="Enter your email" label="E-mail" />
          <Input
            placeholder="Enter your password"
            isPasswordInput
            label="Password"
          />
        </S.FormContainer>

        <Button>Create account</Button>

        <S.SignUpContainer>
          <TextComponent fontSize={12} fontFamily="regular" color="gray">
            Already have an account?
          </TextComponent>

          <Button
            variant="link"
            textColor="gray"
            width={72}
            fontSize={12}
            onPress={() => navigate("SignIn")}
          >
            Log in Here
          </Button>
        </S.SignUpContainer>
      </S.Container>
    </GlobalWrapper>
  );
};

export { SignUpScreen };
