import {
  TouchableOpacityProps,
  TextStyle,
  ActivityIndicator,
} from "react-native";

// components
import { TextComponent } from "../text";

// styles
import * as S from "./styles";
import theme from "styles/theme";

type ButtonProps = {
  children?: React.ReactNode;
  variant?: "filled" | "outlined" | "link" | "unstyled";
  width?: number;
  height?: number;
  fontSize?: number;
  fontWeight?: "regular" | "medium" | "bold" | "semiBold";
  textColor?: keyof typeof theme.colors;
  textStyle?: TextStyle;
  backgroundColor?: keyof typeof theme.colors;
  isLoading?: boolean;
  icon?: React.ReactNode;
} & TouchableOpacityProps;

const Button = ({
  children,
  variant = "filled",
  width,
  height,
  fontSize = 16,
  fontWeight = "regular",
  textColor = "white",
  textStyle,
  backgroundColor,
  isLoading,
  icon,
  ...rest
}: ButtonProps) => {
  return (
    <S.Wrapper
      {...rest}
      variant={variant}
      disabled={isLoading}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
    >
      {isLoading && <ActivityIndicator color={textColor} />}

      {!isLoading && children && (
        <>
          {icon && icon}

          <TextComponent
            fontSize={fontSize}
            {...textStyle}
            color={textColor}
            fontFamily={fontWeight}
            textDecorationLine={
              variant !== "unstyled" && variant === "link"
                ? "underline"
                : "none"
            }
          >
            {children}
          </TextComponent>
        </>
      )}
    </S.Wrapper>
  );
};

export { Button };
