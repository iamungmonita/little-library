import '@/styles/globals.css'
import Layout from '@/components/Layout'
import { SessionProvider } from 'next-auth/react'
import {IntlProvider} from 'react-intl'
import English from "/Users/monitaung/little-library-tailwind/languages/eng.json";
import Khmer from "/Users/monitaung/little-library-tailwind/languages/khm.json";

export default function App({ Component, pageProps }) {
  return (
    <IntlProvider locale={'ENG'} messages={English}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </IntlProvider>
  )
}
