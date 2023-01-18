import Head from 'next/head'
import {Carousel} from 'flowbite-react'
import { Inter } from '@next/font/google'
import YoutubeVideo from '../components/YoutubeVideo'
import Link from'next/link'
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
  <div className="grid place-items-center my-10 ">
    <div>
      <h2 className="youtube-label">My Coding Channel: <a target="_blank" className="link" href="https://www.youtube.com/@CodesGuideOriginal">Codes Guide</a></h2>
    </div>
  <Carousel slide={false} className="sm:w-[640px] " >
  <YoutubeVideo videoId="Ak3xb-3_KnE" />
  <YoutubeVideo videoId="NRaDB5mlVBs" />
  <YoutubeVideo videoId="zi6YgVG7gdA" />
  </Carousel>
  
  </div>
    </>
  )
}
