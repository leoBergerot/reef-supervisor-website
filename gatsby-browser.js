import React from "react"
import { ThemeProvider } from "@material-ui/core"
import { theme } from "./src/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)