import ReactDOM from "react-dom/client";
import Mfe1 from "./Mfe1";

const App = () => <Mfe1 />;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const render = () => {
  root.render(<App />);
};
render();
