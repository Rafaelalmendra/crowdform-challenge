// types
import { FundType } from "types";

// components
import { TextComponent } from "components/shared";

// styles
import * as S from "./styles";
import theme from "styles/theme";

// icons

type GraphProps = {
  data: FundType;
};

const Infos = ({ data }: GraphProps) => {
  return (
    <S.Container>
      <TextComponent fontSize={17} fontWeight="700">
        Infos & Stats
      </TextComponent>

      <S.InfosContainer></S.InfosContainer>
    </S.Container>
  );
};

export { Infos };
