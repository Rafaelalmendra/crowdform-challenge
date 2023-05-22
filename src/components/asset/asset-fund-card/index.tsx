import { Image } from "react-native";

// components
import { Button, TextComponent } from "components/shared";

// styles
import * as S from "./styles";

type AssetFundCardProps = {
  coverImage: React.ReactNode;
  icon: React.ReactNode;
  description: string;
};

const AssetFundCard = ({
  coverImage,
  icon,
  description,
}: AssetFundCardProps) => {
  return (
    <S.Container>
      <S.CoverContainer>{coverImage}</S.CoverContainer>

      <S.ContentContainer>
        {icon}

        <TextComponent fontSize={14} marginTop={10} marginBottom={20}>
          {description}
        </TextComponent>

        <Button width={70} fontSize={12} variant="link" textColor="black">
          Read more
        </Button>
      </S.ContentContainer>
    </S.Container>
  );
};

export { AssetFundCard };
