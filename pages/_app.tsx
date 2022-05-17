import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {NextUIProvider} from '@nextui-org/react';
import { themeConfig } from '../themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={themeConfig}>
       <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp