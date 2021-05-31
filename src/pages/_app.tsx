import React, { useEffect } from 'react'
import { store } from '../stores'
import { Provider } from 'react-redux'
import { Layout, FadeLayer } from '../component/containment'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import {
  ThemeProvider as MaterialUIThemeProvider,
  StylesProvider
} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Header } from '../component/organisms'

import theme from '../../styles/theme'
import '../../styles/sass/reset.scss'
import '../../styles/sass/global.scss'

const MyApp = ({ Component, pageProps }): JSX.Element => {
  // Remove the server-side injected CSS.(https://material-ui.com/guides/server-rendering/)
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  return (
    <StylesProvider injectFirst>
      <MaterialUIThemeProvider theme={theme}>
        <StyledComponentsThemeProvider theme={theme}>
          <CssBaseline />
          <Provider store={store}>
            <FadeLayer>
              <Header />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </FadeLayer>
          </Provider>
        </StyledComponentsThemeProvider>
      </MaterialUIThemeProvider>
    </StylesProvider>
  )
}

export default MyApp
