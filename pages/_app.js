import NextNProgress from 'nextjs-progressbar';
import Nav from '../components/Nav';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div className="bg-white dark:bg-black h-full w-full relative"> 
    <Nav/>
    <NextNProgress color="#DE3163" options={{showSpinner: false}}/>
    <Component {...pageProps} />
  </div>
}
