import { TouchableOpacityProps, TextStyle } from "react-native";

// components
import { TextComponent } from "components/shared/text";

// styles
import * as S from "./styles";
import theme from "styles/theme";

type ButtonProps = {
  children?: React.ReactNode;
  variant?: "filled" | "outlined" | "link" | "unstyled";
  width?: number;
  fontSize?: number;
  fontWeight?: "regular" | "medium" | "bold" | "semiBold";
  textColor?: keyof typeof theme.colors;
  textStyle?: TextStyle;
  backgroundColor?: keyof typeof theme.colors;
} & TouchableOpacityProps;

const Button = ({
  children,
  variant = "filled",
  width,
  fontSize = 16,
  fontWeight = "regular",
  textColor = "white",
  textStyle,
  backgroundColor,
  ...rest
}: ButtonProps) => {
  return (
    <S.Wrapper
      {...rest}
      variant={variant}
      width={width}
      backgroundColor={backgroundColor}
    >
      {children && (
        <TextComponent
          fontSize={fontSize}
          {...textStyle}
          color={textColor}
          fontFamily={fontWeight}
          textDecorationLine={
            variant !== "unstyled" && variant === "link" ? "underline" : "none"
          }
        >
          {children}
        </TextComponent>
      )}
    </S.Wrapper>
  );
};

export { Button };
