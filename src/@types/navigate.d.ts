import { FundType } from "types";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SignIn: undefined;
      SignUp: undefined;
      Home: undefined;
      Asset: {
        fund: FundType;
      };
      Portfolio: undefined;
    }
  }
}
