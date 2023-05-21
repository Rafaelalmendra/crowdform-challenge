import { useNavigation } from "@react-navigation/native";

// types
import { FundType } from "types";

// mocks
import { fundsMock } from "mocks";

// components
import { FundCard } from "./fund-card";
import { TextComponent } from "components/shared";

// styles
import * as S from "./styles";

const Funds = () => {
  const { navigate } = useNavigation();

  const handleNavigateToAsset = (fund: FundType) => {
    navigate("Asset", { fund });
  };

  return (
    <S.Container>
      <TextComponent fontSize={18} fontWeight="bold" marginBottom={20}>
        Funds
      </TextComponent>

      <S.FundsList>
        {fundsMock.map((fund) => (
          <FundCard
            key={fund.id}
            icon={fund.icon}
            title={fund.title}
            dataChart={fund.dataChart}
            valueFund={fund.valueFund}
            percentageFund={fund.percentageFund}
            onPress={() =>
              handleNavigateToAsset({
                id: fund.id,
                title: fund.title,
                dataChart: fund.dataChart,
                valueFund: fund.valueFund,
                percentageFund: fund.percentageFund,
              })
            }
          />
        ))}
      </S.FundsList>
    </S.Container>
  );
};

export { Funds };
