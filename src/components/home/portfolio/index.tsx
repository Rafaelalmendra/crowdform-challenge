import { View } from "react-native";

// components
import { Button, TextComponent } from "components/shared";

// styles
import * as S from "./styles";
import theme from "styles/theme";

// icons
import { ArrowUpRight, Coin } from "phosphor-react-native";

const Portfolio = () => {
  return (
    <>
      <TextComponent fontSize={12} marginBottom={5} paddingLeft={20}>
        Portfolio
      </TextComponent>

      <S.Container>
        <S.LeftContent>
          <TextComponent fontSize={24} fontWeight="bold">
            $1,245.23
          </TextComponent>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <ArrowUpRight size={14} color={theme.colors.green} weight="bold" />

            <TextComponent color="green" fontSize={14}>
              31.82%
            </TextComponent>
          </View>
        </S.LeftContent>

        <Button
          width={128}
          height={38}
          fontSize={12}
          fontWeight="bold"
          textColor="purple"
          backgroundColor="lightPurple"
          icon={<Coin size={18} color={theme.colors.purple} />}
          style={{ marginRight: 20 }}
        >
          Earn Rewards
        </Button>
      </S.Container>
    </>
  );
};

export { Portfolio };
