import ReactDOM from "react-dom/client";
import Mfe2 from "./Mfe2";

const App = () => <Mfe2 />;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const render = () => {
  root.render(<App />);
};
render();
