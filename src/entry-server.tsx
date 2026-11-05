import { renderToString } from "react-dom/server";
import App from "./App";
import AnsiedadePage from "./AnsiedadePage";

// Usado só no build: gera o HTML pronto de cada página (veja scripts/prerender.mjs).
export const pages = {
  home: () => renderToString(<App />),
  ansiedade: () => renderToString(<AnsiedadePage />),
};
