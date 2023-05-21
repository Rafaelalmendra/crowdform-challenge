import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

// components
import { TextComponent } from "../text";

// utils
import { statusBarHeight } from "utils";

// styles
import * as S from "./styles";
import theme from "styles/theme";

// icons
import { ArrowLeft } from "phosphor-react-native";

type HeaderProps = {
  screenTitle?: string;
  screenSubtitle?: string;
  hasBackButton?: boolean;
  hasSignInButton?: boolean;
  handleBackButton?: () => void;
};

const Header = ({
  screenTitle,
  screenSubtitle,
  hasBackButton = false,
  handleBackButton,
}: HeaderProps) => {
  const { goBack } = useNavigation();

  return (
    <S.Wrapper style={{ paddingTop: statusBarHeight }}>
      <S.HeaderContainer>
        {hasBackButton && (
          <TouchableOpacity
            onPress={handleBackButton ? handleBackButton : goBack}
          >
            <ArrowLeft color={theme.colors.black} weight="bold" />
          </TouchableOpacity>
        )}

        {!!screenTitle && (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextComponent color="black" fontFamily="semiBold" fontSize={16}>
              {screenTitle}
            </TextComponent>

            {screenSubtitle && (
              <TextComponent color="gray" fontFamily="regular" fontSize={12}>
                {screenSubtitle}
              </TextComponent>
            )}
          </View>
        )}

        <View style={{ width: 20 }} />
      </S.HeaderContainer>
    </S.Wrapper>
  );
};

export { Header };
