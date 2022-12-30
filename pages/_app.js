import NextNProgress from 'nextjs-progressbar';
import Navbar from '../components/Navbar';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div> 
    <Navbar/>
    <NextNProgress color="#00C1FF" options={{showSpinner: false}}/>
    <Component {...pageProps} />
  </div>
}
