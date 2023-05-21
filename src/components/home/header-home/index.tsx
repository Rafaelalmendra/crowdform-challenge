// utils
import { statusBarHeight } from "utils";

// components
import { UserMenu, TextComponent } from "components";

// styles
import * as S from "./styles";

// icons
import { Bell } from "phosphor-react-native";

const HeaderHome = () => {
  return (
    <S.Wrapper style={{ paddingTop: statusBarHeight }}>
      <S.HeaderContainer>
        <UserMenu />

        <TextComponent>Account: $1,457.23</TextComponent>

        <Bell />
      </S.HeaderContainer>
    </S.Wrapper>
  );
};

export { HeaderHome };
