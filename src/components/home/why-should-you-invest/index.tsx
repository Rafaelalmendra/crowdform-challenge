// components
import { TextComponent } from "components/shared";

// styles
import * as S from "./styles";

const WhyShouldYouInvest = () => {
  return (
    <S.Container>
      <S.CardContainer>
        <TextComponent color="black" fontSize={12} fontWeight="600">
          Why should you invest here?
        </TextComponent>
      </S.CardContainer>

      <S.CardContainer></S.CardContainer>
    </S.Container>
  );
};

export { WhyShouldYouInvest };
