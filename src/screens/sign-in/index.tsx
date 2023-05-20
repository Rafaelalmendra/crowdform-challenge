import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Toast } from "react-native-toast-message/lib/src/Toast";

// hooks
import { useSignIn } from "hooks";

// components
import { Button, Header, ControlledInput, TextComponent } from "components";

// styles
import * as S from "./styles";
import { GlobalWrapper } from "styles";

type SignInType = {
  email: string;
  password: string;
};

const SignInScreen = () => {
  const { navigate } = useNavigation();
  const { handleSignIn, loadingSignIn } = useSignIn();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInType>();

  const onSubmit = async (data: SignInType) => {
    await handleSignIn({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <GlobalWrapper>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />

      <Header />
      <Toast position="top" />

      <S.Container>
        <TextComponent fontSize={18} fontFamily="semiBold" marginBottom={34}>
          Login
        </TextComponent>

        <S.FormContainer>
          <ControlledInput
            name="email"
            control={control}
            label="E-mail"
            placeholder="Enter your e-mail"
            errorMessage={errors.email?.message}
            rules={{
              required: {
                message: "Required field",
                value: true,
              },
              pattern: {
                message: "Enter a valid email",
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              },
            }}
          />

          <ControlledInput
            name="password"
            control={control}
            label="Password"
            placeholder="Enter your password"
            errorMessage={errors.password?.message}
            isPasswordInput
            rules={{
              required: {
                message: "Required field",
                value: true,
              },
              minLength: {
                message: "Minimum 8 characters",
                value: 8,
              },
            }}
          />
        </S.FormContainer>

        <Button onPress={handleSubmit(onSubmit)} isLoading={loadingSignIn}>
          Login
        </Button>

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
