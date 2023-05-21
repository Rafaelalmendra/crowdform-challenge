import { useState } from "react";
import { Modal } from "react-native";

// components
import { TextComponent } from "components/shared";

// styles
import * as S from "./styles";

// icons
import { CaretDown, CaretUp } from "phosphor-react-native";

const AccountFunds = () => {
  const [popoverVisible, setPopoverVisible] = useState<boolean>(false);

  const handlePopover = () => {
    setPopoverVisible(!popoverVisible);
  };

  return (
    <>
      <S.AccountsFundsContainer onPress={handlePopover}>
        <TextComponent>Account: $1,457.23</TextComponent>
        {popoverVisible && <CaretUp size={18} weight="bold" />}
        {!popoverVisible && <CaretDown size={18} weight="bold" />}
      </S.AccountsFundsContainer>

      <Modal transparent visible={popoverVisible}>
        <S.AccountsFundsOpen>
          <TextComponent fontSize={14} marginBottom={2} textAlign="center">
            Account total:{" "}
          </TextComponent>

          <TextComponent
            fontSize={14}
            marginBottom={2}
            fontWeight="bold"
            color="purple"
          >
            $1,457.23
          </TextComponent>
        </S.AccountsFundsOpen>

        <S.Overlay onTouchStart={() => setPopoverVisible(false)} />
      </Modal>
    </>
  );
};

export { AccountFunds };
