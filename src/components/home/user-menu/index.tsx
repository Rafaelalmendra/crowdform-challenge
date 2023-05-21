import { useState } from "react";
import { Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";

// stores
import { getUser, setEmail, setName } from "stores/slices";
import { useDispatch, useSelector } from "stores";

// components
import { Button, TextComponent } from "components";

// styles
import * as S from "./styles";
import theme from "styles/theme";

// icons
import { User } from "phosphor-react-native";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { email, name } = useSelector(getUser);
  const [popoverVisible, setPopoverVisible] = useState<boolean>(false);

  const handlePopover = () => {
    setPopoverVisible(!popoverVisible);
  };

  const handleLogout = () => {
    setPopoverVisible(false);

    dispatch(setEmail(""));
    dispatch(setName(""));

    navigate("SignIn");
  };

  return (
    <>
      <S.UserContainer onPress={handlePopover}>
        <User color={theme.colors.black} />
      </S.UserContainer>

      <Modal transparent visible={popoverVisible}>
        <S.UserMenuOpen>
          <TextComponent fontSize={14} marginBottom={2}>
            {name}
          </TextComponent>
          <TextComponent fontSize={12}>{email}</TextComponent>

          <S.Divider />

          <Button
            variant="outlined"
            textColor="purple"
            fontSize={14}
            style={{
              height: 42,
            }}
            onPress={handleLogout}
          >
            Sair
          </Button>
        </S.UserMenuOpen>

        <S.Overlay onTouchStart={() => setPopoverVisible(false)} />
      </Modal>
    </>
  );
};

export { UserMenu };
