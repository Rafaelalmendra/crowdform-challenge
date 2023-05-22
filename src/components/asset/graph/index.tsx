import { useState } from "react";
import { View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

// types
import { FundType } from "types";

// components
import { Button, TextComponent } from "components/shared";

// styles
import * as S from "./styles";
import theme from "styles/theme";

// icons
import { ArrowUpRight } from "phosphor-react-native";

type GraphProps = {
  data: FundType;
};

const Graph = ({ data }: GraphProps) => {
  const [selectedTime, setSelectedTime] = useState<number>(1);

  const handleSelectedTime = (index: number) => {
    setSelectedTime(index);
  };

  const mockTime = ["1h", "1d", "1w", "1m", "1y", "all"];

  return (
    <S.Container>
      <S.HeaderContainer>
        <View>
          <TextComponent fontSize={24} fontWeight="700">
            ${data.priceAtOpen}
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
              {data.percentageFund}% ($1.21)
            </TextComponent>
          </View>
        </View>

        <TextComponent fontSize={24} fontWeight="700">
          {data.year}
        </TextComponent>
      </S.HeaderContainer>

      {data.dataChart.length > 0 && (
        <S.GraphContainer>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April"],
              datasets: [
                {
                  withDots: false,
                  data: data.dataChart,
                },
              ],
            }}
            withShadow={false}
            transparent={true}
            withHorizontalLabels={false}
            hidePointsAtIndex={[0, 1, 2, 3]}
            width={Dimensions.get("window").width + 160}
            height={284}
            xAxisLabel=""
            chartConfig={{
              propsForBackgroundLines: {
                stroke: "transparent",
              },
              strokeWidth: 2,
              backgroundGradientFrom: theme.colors.white,
              backgroundGradientTo: theme.colors.white,
              decimalPlaces: 2,
              color: () =>
                data.percentageFund >= 0.3
                  ? theme.colors.green
                  : theme.colors.red,
            }}
          />

          <S.GraphFooter>
            {mockTime.map((time, index) => (
              <Button
                width={45}
                height={50}
                fontSize={15}
                fontWeight="medium"
                textColor={selectedTime === index ? "purple" : "gray"}
                backgroundColor={
                  selectedTime === index ? "lightPurple" : "white"
                }
                onPress={() => handleSelectedTime(index)}
              >
                {time}
              </Button>
            ))}
          </S.GraphFooter>
        </S.GraphContainer>
      )}
    </S.Container>
  );
};

export { Graph };
