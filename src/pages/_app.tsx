import type { AppProps } from 'next/app'
import { Main } from '~/layouts/Main'
import { GlobalStyles } from '~/styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  GlobalStyles()

  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  )
}
export default MyApp
