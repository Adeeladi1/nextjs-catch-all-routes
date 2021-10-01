import React from 'react';
import NavBar from './Layout';

const Layout =({children}) => {

    return (
        <>
             <NavBar/>
             {children}
        </>
    )
}

export default Layout;