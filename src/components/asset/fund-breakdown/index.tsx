import { Image } from "react-native";

// types
import { FundType } from "types";

// components
import { TextComponent } from "components/shared";
import { AssetFundCard } from "../asset-fund-card";

// styles
import * as S from "./styles";

import ÄspiraImage from "../../../assets/images/aspira-dac-image.png";
import ClimeWordsImage from "../../../assets/images/clime-works-image.png";
import Aspiraicon from "../../../assets/logos/aspira-logo.png";
import ClimeWordsicon from "../../../assets/logos/climewords-logo.png";

type FundBreakdownProps = {
  data: FundType;
};

const FundBreakdown = ({ data }: FundBreakdownProps) => {
  return (
    <S.Container>
      <TextComponent fontSize={17} fontWeight="700" marginBottom={20}>
        Fund Breakdown
      </TextComponent>

      <S.FundContainer>
        <S.TabsContainer>
          <S.TabItem active>Highlighted</S.TabItem>
          <S.TabItem>Value</S.TabItem>
          <S.TabItem>Vintage</S.TabItem>
          <S.TabItem>Registry</S.TabItem>
        </S.TabsContainer>

        <S.FundItemContainer>
          <AssetFundCard
            icon={<Image source={Aspiraicon} />}
            coverImage={<Image source={ÄspiraImage} />}
            description="Aspira is building a modular, direct air capture system with the energy supply integrated into the modules."
          />
          <AssetFundCard
            icon={<Image source={ClimeWordsicon} />}
            coverImage={<Image source={ClimeWordsImage} />}
            description="uses renewable geothermal energy and waste heat to capture CO₂ directly from the air."
          />
        </S.FundItemContainer>
      </S.FundContainer>
    </S.Container>
  );
};

export { FundBreakdown };
