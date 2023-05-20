import { TouchableOpacityProps, TextStyle } from "react-native";

// components
import { TextComponent } from "components/shared/Text";

// styles
import * as S from "./styles";
import theme from "styles/theme";

type ButtonProps = {
  children?: React.ReactNode;
  fontSize?: number;
  fontWeight?: "regular" | "medium" | "bold" | "semiBold";
  textColor?: keyof typeof theme.colors;
  textStyle?: TextStyle;
  backgroundColor?: keyof typeof theme.colors;
} & TouchableOpacityProps;

const Button = ({
  children,
  fontSize = 16,
  fontWeight = "regular",
  textColor = "white",
  textStyle,
  backgroundColor,
  ...rest
}: ButtonProps) => {
  return (
    <S.Wrapper {...rest} backgroundColor={backgroundColor}>
      {children && (
        <TextComponent
          fontSize={fontSize}
          {...textStyle}
          color={textColor}
          fontFamily={fontWeight}
        >
          {children}
        </TextComponent>
      )}
    </S.Wrapper>
  );
};

export { Button };
