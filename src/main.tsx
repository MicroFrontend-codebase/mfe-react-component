// // Run app locally
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// console.log(App)

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// // Build custom elements class
import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

class ReactAppWrapper extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "closed" });
    const root = createRoot(shadow);
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
}

// Register custom element globally
customElements.define("react-component", ReactAppWrapper);
