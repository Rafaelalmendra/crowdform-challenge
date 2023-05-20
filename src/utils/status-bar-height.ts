import { StatusBar } from "react-native";

const statusBarHeight = StatusBar?.currentHeight ? StatusBar.currentHeight : 15;

export { statusBarHeight };
