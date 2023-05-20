import React from "react";

// styles
import * as S from "./styles";
import theme from "styles/theme";

// icons
import { Check } from "phosphor-react-native";

type CheckBoxProps = {
  value?: boolean;
  onChange?: () => void;
};

const CheckBox = ({ value, onChange }: CheckBoxProps) => {
  const handleChange = () => {
    if (onChange) {
      return onChange();
    }
  };

  return (
    <S.CheckBoxContainer>
      <S.CheckBox onPress={handleChange}>
        {value ? (
          <Check color={theme.colors.purple} size={18} weight="bold" />
        ) : null}
      </S.CheckBox>
    </S.CheckBoxContainer>
  );
};

export { CheckBox };
