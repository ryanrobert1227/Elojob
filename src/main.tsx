import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { ChakraProvider, CSSReset } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CSSReset />
    <ChakraProvider>
      <App /> 
    </ChakraProvider>
  </React.StrictMode>,
)
