import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

// firebase
import { auth } from "lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

//stores
import { useDispatch } from "stores";
import { setEmail, setName } from "stores/slices";

type SignInType = {
  email: string;
  password: string;
};

const useSignIn = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const [loadingSignIn, setLoadingSignIn] = useState<boolean>(false);

  const handleSignIn = async ({ email, password }: SignInType) => {
    setLoadingSignIn(true);

    try {
      const signInResponse = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (!signInResponse) {
        throw new Error("Something went wrong signing in.");
      }

      Toast.show({
        type: "success",
        text1: "Success",
        text2: "You have successfully signed in.",
        autoHide: true,
        visibilityTime: 2000,
      });

      dispatch(setEmail(signInResponse.user.email as string));
      dispatch(setName(signInResponse.user.displayName as string));

      setTimeout(() => {
        navigate("Home");
      }, 2000);
    } catch (error: any) {
      console.error(error);

      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Something went wrong signing in.",
        autoHide: true,
        visibilityTime: 4000,
      });
    } finally {
      setLoadingSignIn(false);
    }
  };

  return { handleSignIn, loadingSignIn };
};

export { useSignIn };
