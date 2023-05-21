import { View, Image } from "react-native";

// components
import { TextComponent } from "components/shared";

// styles
import * as S from "./styles";

// images
import BusinessImage from "../../../assets/images/business-image.png";

const LearnMoreCredits = () => {
  return (
    <S.Container>
      <S.CardContainer>
        <View>
          <TextComponent
            color="white"
            fontSize={16}
            fontWeight="600"
            maxWidth={160}
          >
            Learn more about carbon credits
          </TextComponent>

          <TextComponent color="white" fontSize={12} marginTop={10}>
            Check out our top tips!
          </TextComponent>
        </View>

        <Image source={BusinessImage} />
      </S.CardContainer>
    </S.Container>
  );
};

export { LearnMoreCredits };
