import React from 'react';
import {useHistory} from 'react-router-dom';
import {AuthProvider} from '@auth0/auth0-react';



const AuthProviderWithHistory = ({children}) => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
}




const onRedirectCallback = (appState) => {
    const navigate = useHistory();
    navigate.push(appState?.returnTo || window.location.pathname);


return (
    <AuthProvider
    domain={domain}
    clientId={clientId}
    redirectUrl={window.location.origin}
    onRedirectCallback={onRedirectCallback}>
    {children}
    </AuthProvider>
);
}

export default Auth0ProviderWithHistory;