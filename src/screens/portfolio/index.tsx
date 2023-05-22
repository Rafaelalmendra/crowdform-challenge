import { StatusBar } from "react-native";

// components
import { Header, TextComponent } from "components";

// styles
import { GlobalWrapper } from "styles";

const PortfolioScreen = () => {
  return (
    <GlobalWrapper>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />

      <Header
        hasBackButton
        screenTitle="Portfolio"
        screenSubtitle="Your assets"
      />

      <TextComponent fontSize={14} color="gray" padding={20}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      </TextComponent>
    </GlobalWrapper>
  );
};

export { PortfolioScreen };
