import { Text, TextStyle } from "react-native";

// styles
import theme from "styles/theme";

type TextType = {
  children: React.ReactNode;
  color?: keyof typeof theme.colors;
  fontFamily?: keyof typeof theme.fonts;
} & TextStyle;

const TextComponent = ({
  children,
  color = "black",
  fontFamily = "regular",
  ...style
}: TextType) => {
  return (
    <Text
      style={{
        fontFamily: theme.fonts[fontFamily],
        color: theme.colors[color],
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export { TextComponent };
