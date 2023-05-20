import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

// firebase
import { auth } from "lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// utils
import { writeToDatabase } from "utils/database";

type SignUpType = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

const useSignUp = () => {
  const { navigate } = useNavigation();
  const [loadingSignUp, setLoadingSignUp] = useState<boolean>(false);

  const handleSignUp = async ({
    email,
    password,
    firstName,
    lastName,
  }: SignUpType) => {
    setLoadingSignUp(true);

    try {
      const signUpResponse = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (!signUpResponse) {
        throw new Error("Something went wrong creating the user.");
      }

      await updateProfile(signUpResponse.user, {
        displayName: `${firstName} ${lastName}`,
      });

      await writeToDatabase({
        data: {
          id: signUpResponse.user.uid,
          email: signUpResponse.user.email,
          username: signUpResponse.user.displayName,
        },
        path: `users/${signUpResponse.user.uid}`,
      });

      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Account created successfully 🎉",
        autoHide: true,
        visibilityTime: 2000,
      });

      navigate("Home");
    } catch (error: any) {
      console.error(error);

      if (error.message === "auth/email-already-in-use") {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "That email address is already in use!",
          autoHide: true,
          visibilityTime: 4000,
        });
      }
    } finally {
      setLoadingSignUp(false);
    }
  };

  return { handleSignUp, loadingSignUp };
};

export { useSignUp };
