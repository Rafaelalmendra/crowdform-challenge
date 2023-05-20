import { useState, useCallback } from "react";
import { TextInputProps } from "react-native";

// styles
import * as S from "./styles";
import theme from "styles/theme";

// icons
import { EyeSlash, Eye } from "phosphor-react-native";

export type InputProps = {
  errorMessage?: string;
  isPasswordInput?: boolean;
} & TextInputProps;

const Input = ({
  errorMessage,
  isPasswordInput = false,
  ...rest
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocused(!isFocused);
  }, [isFocused]);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.Wrapper>
      <S.TextInput
        hasError={!!errorMessage}
        isFocused={isFocused}
        onFocus={handleFocus}
        onBlur={handleFocus}
        selectionColor={theme.colors.black}
        secureTextEntry={isPasswordInput && !showPassword}
        {...rest}
      />

      {isPasswordInput && (
        <S.IconWrapper onPress={handleShowPassword}>
          {showPassword ? (
            <Eye color="#3B4054" />
          ) : (
            <EyeSlash color="#3B4054" />
          )}
        </S.IconWrapper>
      )}

      {!!errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Wrapper>
  );
};

export { Input };
