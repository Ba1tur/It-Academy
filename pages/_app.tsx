import Layout from '@/components/Layout/Layout'
import '@/styles/globals.css'
import '@/styles/PriceCard.css'
import '@/styles/MentorsSlide.css'
import '@/styles/swiper.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}
