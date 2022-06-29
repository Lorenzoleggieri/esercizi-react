import ReactDOM from "react-dom/client";
import { Root } from "./BrowserRouter";
import "./index.css";

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(<Root />);
