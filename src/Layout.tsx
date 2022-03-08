import React from "react";

const Layout = ({ children }) => {
    return(
        <>
        <h3>Top bar</h3>
        { children }
        <h3>Bottom bar</h3>
        </>
    )
}

export default Layout