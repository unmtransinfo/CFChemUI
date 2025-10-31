import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {HeroUIProvider} from "@heroui/react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeroUIProvider>
        <App />
    </HeroUIProvider>
  </React.StrictMode>,
)
