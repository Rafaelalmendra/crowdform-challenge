// components
import { FundCard } from "./fund-card";
import { TextComponent } from "components/shared";

// styles
import * as S from "./styles";

// icons

import { fundsMock } from "mocks";

const Funds = () => {
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
          />
        ))}
      </S.FundsList>
    </S.Container>
  );
};

export { Funds };
