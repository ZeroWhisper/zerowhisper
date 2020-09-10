import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";

console.log("DEV?", process.env.NODE_ENV === "development");

if (process.env.NODE_ENV === "development") {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  tron.clear();

  console.tron = tron;
} else {
  if (!console.tron) console.tron = console;
}

export default console.tron;
