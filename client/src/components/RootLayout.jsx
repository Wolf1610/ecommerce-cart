import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';


import NavBar from './NavBar';


const RootLayout = () => {

            

    return (
        <>
             <NavBar />
            <main>
                <Outlet /> 
            </main>

        </>
    )
}

export default RootLayout;