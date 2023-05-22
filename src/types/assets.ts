export type FundType = {
  id: string;
  icon?: React.ReactNode;
  title: string;
  dataChart: number[];
  valueFund: number;
  percentageFund: number;
  credits: number;
  issueDate: string;
  priceAtClose: number;
  priceAtOpen: number;
  ter: number;
  vintageRange: string;
  aum: number;
  year: number;
};
