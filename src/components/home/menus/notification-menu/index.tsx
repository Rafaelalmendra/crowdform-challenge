import { useState } from "react";
import { Modal } from "react-native";

// components
import { TextComponent } from "components/shared";

// styles
import * as S from "./styles";
import theme from "styles/theme";

// icons
import { Bell } from "phosphor-react-native";

const NotificationMenu = () => {
  const [popoverVisible, setPopoverVisible] = useState<boolean>(false);

  const handlePopover = () => {
    setPopoverVisible(!popoverVisible);
  };

  return (
    <>
      <S.NotificationContainer onPress={handlePopover}>
        <Bell
          color={popoverVisible ? theme.colors.purple : theme.colors.black}
        />
      </S.NotificationContainer>

      <Modal transparent visible={popoverVisible}>
        <S.NotificationMenuOpen>
          <TextComponent fontSize={14} marginBottom={2} color="gray">
            No notification found
          </TextComponent>
        </S.NotificationMenuOpen>

        <S.Overlay onTouchStart={() => setPopoverVisible(false)} />
      </Modal>
    </>
  );
};

export { NotificationMenu };
