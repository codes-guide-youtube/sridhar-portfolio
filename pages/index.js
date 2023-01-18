import Head from 'next/head'
import { Inter } from '@next/font/google'
import YoutubeVideo from '../components/YoutubeVideo'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Sridhar Hisaria</title>
        <meta name="description" content="Sridhar Hisaria Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className='w-max justify-center text-center m-auto mt-20 mb-10'>
      <YoutubeVideo videoId="Ak3xb-3_KnE" />
      </div>
          
    </>
  )
}
