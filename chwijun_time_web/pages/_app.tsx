import { GlobalStyle } from 'styles/GlobalStyle';
import App from 'next/app'

function MyApp({ Component, pageProps }) {
  const fontface = `@font-face {
    font-family: "NixgonFont";
    font-weight: 200;
    src: url('fonts/NIXGONFONTS M 2.0.OTF');
  }`
  
  return (
    <>
      <style>{fontface}</style>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}
export default MyApp
