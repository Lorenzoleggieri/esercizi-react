import ReactDOM from "react-dom";
import { BrowserRouter } from "./BrowserRouter";
import "./index.css";

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(<BrowserRouter />);
