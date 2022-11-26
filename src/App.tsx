import {BrowserRouter} from "react-router-dom"
import { Router } from "./Routes"
import { defaultTheme } from "./styles/Theme/default"
import {ThemeProvider} from "styled-components"
import { GlobalStyle } from "./styles/global"
import { CoffeeDeliveryContextProvider } from "./Context/context"
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <CoffeeDeliveryContextProvider>
        <Router/>
      </CoffeeDeliveryContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  ) 
}
