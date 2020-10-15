import React from "react"
import { ThemeProvider } from "@material-ui/core"
import { theme } from "./src/theme"
import i18n from "./i18next"
import { I18nextProvider } from "react-i18next"
import { PageContextProvider } from "./page-context"

export const wrapRootElement = ({ element }) => (
  <I18nextProvider i18n={i18n}>
    <ThemeProvider theme={theme}>
      {element}
    </ThemeProvider>
  </I18nextProvider>
)

export const wrapPageElement = ({ element, props }) => {
  return <PageContextProvider pageContext={props.pageContext}>{element}</PageContextProvider>
}