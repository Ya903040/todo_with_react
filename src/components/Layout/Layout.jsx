import React from "react";

const Layout = ({children}) => {
    return (
        <div className='h-screen text-white py-10'>
            {children}
        </div>
    )
}

export default Layout