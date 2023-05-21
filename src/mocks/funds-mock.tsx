import { Leaf, Sun, Wind } from "phosphor-react-native";

const fundsMock = [
  {
    id: 1,
    icon: <Wind size={16} weight="bold" color="#4A88D0" />,
    title: "Wind Fund",
    dataChart: [
      Math.random() * 0.9,
      Math.random() * 0.5,
      Math.random() * 0.6,
      Math.random() * 0.2,
      Math.random() * 0.9,
      Math.random() * 0.2,
    ],
    valueFund: 1032.23,
    percentageFund: 3.51,
  },
  {
    id: 2,
    icon: <Sun size={16} weight="bold" color="#F0A719" />,
    title: "Solar Fund",
    dataChart: [
      Math.random() * 0,
      Math.random() * 0.2,
      Math.random() * 0.1,
      Math.random() * 0.4,
      Math.random() * 0.1,
      Math.random() * 0,
    ],
    valueFund: 986.61,
    percentageFund: 0.13,
  },
  {
    id: 3,
    icon: <Leaf size={16} weight="bold" color="#0FDF8F" />,
    title: "Nature Fund",
    dataChart: [
      Math.random() * 0.5,
      Math.random() * 0.4,
      Math.random() * 0.2,
      Math.random() * 0.8,
      Math.random() * 0.1,
      Math.random() * 0.5,
    ],
    valueFund: 1122.95,
    percentageFund: 0.3,
  },
];

export { fundsMock };
