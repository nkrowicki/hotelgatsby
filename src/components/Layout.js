import React from 'react';
import Header from './Header';
import {Helmet} from 'react-helmet';

const Layout = (props) => {
    return (
        <>
            <Helmet>
                <title>Gatsby Hotel</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            </Helmet>

            <Header />
            {props.children}
        </>
    );
}

export default Layout;