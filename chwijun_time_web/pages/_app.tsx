import { GlobalStyle } from 'styles/GlobalStyle';
import App from 'next/app';
import { Template } from 'components';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken'): null;
  const href = typeof window !== 'undefined' ? window.location.href : null;

  const fontface = `@font-face {
    font-family: "NixgonFont";
    font-weight: 200;
    src: url('fonts/NIXGONFONTS M 2.0.OTF');
  }`

  useEffect(() => {
    console.log(window.location.href.split('/')[3])
    if(href?.split('/')[3] === '') return;
      token === null && (alert('로그인 후 이용해주세요.'), window.location.replace('/'));
  }, [href])
  
  
  return (
    <>
      <style>{fontface}</style>
      <GlobalStyle />
      <div style={{display: 'flex'}}>
        <Template />
        <Component {...pageProps } />
      </div>
    </>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}
export default MyApp
