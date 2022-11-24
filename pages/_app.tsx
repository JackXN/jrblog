import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {BrowserRouter as Router} from 'react-router-dom';
import Auth0ProviderWithHistory from '../src/auth/auth0-provider-with-history';


export default function App({ Component, pageProps }: AppProps) {
  return
  (
     <Router>
       <Auth0ProviderWithHistory>
     <Component {...pageProps} />
     </Auth0ProviderWithHistory>
     </Router>
     )
}







// //! Updated Attempt. 


// import '../styles/globals.css';
// import type { AppProps } from 'next/app';
// import React from 'react';
// import {BrowserRouter as Router} from 'react-router-dom';
// // import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
// import Auth0ProviderWithHistory from '../src/auth/auth0-provider-with-history';


// export default function App({Component, pageProps} : AppProps){
//   return (
//     <Router>
//       <Auth0ProviderWithHistory>
//         <Component {...pageProps}/>
//       </Auth0ProviderWithHistory>
//     </Router>
//   )
// }

