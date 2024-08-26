import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';
// import { ApiProvier } from "./components/Context/ApiContext.jsx";
import { ApiProvider } from "./components/Context/ApiContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
     <BrowserRouter>
     <ApiProvider >
    <App />
    </ApiProvider>
    </BrowserRouter>
  </StrictMode>
);
