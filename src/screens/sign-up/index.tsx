import { useState } from "react";
import { StatusBar, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Toast } from "react-native-toast-message/lib/src/Toast";

// hooks
import { useSignUp } from "hooks";

// components
import {
  Button,
  CheckBox,
  ControlledInput,
  Header,
  TextComponent,
} from "components";

// styles
import * as S from "./styles";
import { GlobalWrapper } from "styles";

type SignUpType = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

const SignUpScreen = () => {
  const { navigate } = useNavigation();
  const { handleSignUp, loadingSignUp } = useSignUp();

  const [checked, setChecked] = useState<boolean>(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpType>();

  const handleChangeTerms = () => {
    setChecked(!checked);
  };

  const onSubmit = async (data: SignUpType) => {
    if (!checked) {
      Alert.alert("You must accept the terms of service to continue");
      return;
    }

    await handleSignUp({
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
    });
  };

  return (
    <GlobalWrapper>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />

      <Header hasBackButton />

      <Toast position="top" />

      <S.Container>
        <TextComponent fontSize={18} fontFamily="semiBold" marginBottom={34}>
          Create your account
        </TextComponent>

        <S.FormContainer>
          <ControlledInput
            name="firstName"
            control={control}
            label="First Name"
            placeholder="Enter your first name"
            errorMessage={errors.firstName?.message}
            rules={{
              required: {
                message: "Required field",
                value: true,
              },
              minLength: {
                message: "Minimum 2 characters",
                value: 2,
              },
            }}
          />

          <ControlledInput
            name="lastName"
            control={control}
            label="Last Name"
            placeholder="Enter your last name"
            errorMessage={errors.lastName?.message}
            rules={{
              required: {
                message: "Required field",
                value: true,
              },
            }}
          />

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

        <S.CheckBoxContainer>
          <CheckBox value={checked} onChange={handleChangeTerms} />

          <TextComponent
            width="90%"
            color="gray"
            fontSize={12}
            fontFamily="regular"
          >
            I am over 18 years of age and I have read and agree to the{" "}
            <TextComponent fontSize={12} fontFamily="regular" color="black">
              Terms of Service{" "}
            </TextComponent>
            <TextComponent fontSize={12} fontFamily="regular" color="gray">
              And{" "}
            </TextComponent>
            <TextComponent fontSize={12} fontFamily="regular" color="black">
              Terms of Service
            </TextComponent>
          </TextComponent>
        </S.CheckBoxContainer>

        <Button onPress={handleSubmit(onSubmit)} isLoading={loadingSignUp}>
          Create account
        </Button>

        <S.SignInContainer>
          <TextComponent fontSize={12} fontFamily="regular" color="gray">
            Already have an account?
          </TextComponent>

          <Button
            variant="link"
            textColor="gray"
            width={45}
            fontSize={12}
            onPress={() => navigate("SignIn")}
          >
            Log in
          </Button>

          <TextComponent fontSize={12} fontFamily="regular" color="gray">
            here
          </TextComponent>
        </S.SignInContainer>
      </S.Container>
    </GlobalWrapper>
  );
};

export { SignUpScreen };
