import Head from 'next/head'
import {Carousel} from 'flowbite-react'
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
  <Carousel className="bg-lime-300/25 xl:w-[40rem]" >
  <YoutubeVideo videoId="Ak3xb-3_KnE" />
  <YoutubeVideo videoId="Ak3xb-3_KnE" />
  <YoutubeVideo videoId="Ak3xb-3_KnE" />
  </Carousel>
          
    </>
  )
}
