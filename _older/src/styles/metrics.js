// import { Dimensions } from "react-native";

// const { width, height } = Dimensions.get("window");
const [width, height] = [1280, 720];

export default {
  basePadding: 20,
  baseMargin: 10,
  baseRadius: 3,

  width,
  height,

  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width
};
