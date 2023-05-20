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
  hasBackButton?: boolean;
  hasSignInButton?: boolean;
  handleBackButton?: () => void;
};

const Header = ({
  screenTitle,
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
          <TextComponent color="black" fontFamily="semiBold" fontSize={14}>
            {screenTitle}
          </TextComponent>
        )}
      </S.HeaderContainer>
    </S.Wrapper>
  );
};

export { Header };
