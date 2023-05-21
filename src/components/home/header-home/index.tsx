// utils
import { statusBarHeight } from "utils";

// components
import { UserMenu, AccountFunds, NotificationMenu } from "../menus";

// styles
import * as S from "./styles";

const HeaderHome = () => {
  return (
    <S.Wrapper style={{ paddingTop: statusBarHeight }}>
      <S.HeaderContainer>
        <UserMenu />

        <AccountFunds />

        <NotificationMenu />
      </S.HeaderContainer>
    </S.Wrapper>
  );
};

export { HeaderHome };
