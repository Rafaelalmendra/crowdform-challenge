import { useEffect } from "react";
import { View } from "react-native";
import { useCountUp } from "use-count-up";
import { useIsFocused } from "@react-navigation/native";

// components
import { TextComponent } from "components/shared";

// styles
import * as S from "./styles";
import theme from "styles/theme";

// icons
import { ArrowDownRight, ArrowUpRight } from "phosphor-react-native";
import { LineChart } from "react-native-chart-kit";

type FundCardProps = {
  title: string;
  icon: React.ReactNode;
  dataChart: number[];
  valueFund: number;
  percentageFund: number;
};

const FundCard = ({
  title,
  icon,
  dataChart,
  valueFund,
  percentageFund,
}: FundCardProps) => {
  const isFocused = useIsFocused();

  const { value, reset } = useCountUp({
    isCounting: isFocused,
    start: 0,
    end: valueFund,
    duration: 1.8,
    decimalPlaces: 2,
    decimalSeparator: ".",
    thousandsSeparator: ",",
  });

  useEffect(() => {
    reset();
  }, [isFocused]);

  return (
    <S.Container>
      {icon}

      <TextComponent fontSize={12} fontWeight="bold" marginTop={5}>
        {title}
      </TextComponent>

      <LineChart
        data={{
          labels: ["January", "February", "March", "April"],
          datasets: [
            {
              withDots: false,
              data: dataChart,
            },
          ],
        }}
        withShadow={false}
        transparent={true}
        width={152}
        height={48}
        xAxisLabel=" "
        bezier
        chartConfig={{
          propsForBackgroundLines: {
            stroke: "transparent",
          },
          strokeWidth: 2,
          color: () =>
            percentageFund >= 0.3 ? theme.colors.green : theme.colors.red,
        }}
        style={{ paddingRight: 0, paddingLeft: 0 }}
      />

      <S.FundsContainer>
        <TextComponent fontSize={14} fontWeight="400">
          ${value}
        </TextComponent>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          {percentageFund >= 0.3 && (
            <>
              <ArrowUpRight
                size={14}
                color={theme.colors.green}
                weight="bold"
              />
              <TextComponent color="green" fontSize={14}>
                {percentageFund}%
              </TextComponent>
            </>
          )}

          {percentageFund < 0.3 && (
            <>
              <ArrowDownRight
                size={14}
                color={theme.colors.red}
                weight="bold"
              />
              <TextComponent color="red" fontSize={14}>
                {percentageFund}%
              </TextComponent>
            </>
          )}
        </View>
      </S.FundsContainer>
    </S.Container>
  );
};

export { FundCard };
