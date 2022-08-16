import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import LayoutAll from './components/layout'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  // console.log('hehehe');

  
  return(
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
    )
  
}

export default MyApp
