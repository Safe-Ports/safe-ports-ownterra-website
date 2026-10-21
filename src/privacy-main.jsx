import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PrivacyNotice from "./PrivacyNotice";
import "./index.css";
import "./styles/luxury.css";
import "./styles/luxury-product.css";

createRoot(document.getElementById("root")).render(<StrictMode><PrivacyNotice /></StrictMode>);
