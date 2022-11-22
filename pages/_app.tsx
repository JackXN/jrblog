// import '../styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }







//! Updated Attempt

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';





export default function App({Component, pageProps} : AppProps){
  return (
    <Router>
      <Auth0ProviderWithHistory>
        <Component {...pageProps}/>
      </Auth0ProviderWithHistory>
    </Router>
  )
}

