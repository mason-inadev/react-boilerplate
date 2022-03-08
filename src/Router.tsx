import React from "react";
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from "./Layout";
import Home from "./pages/Home";
import About from './pages/About'
const Router = () => {
    return(
        <BrowserRouter>
            <Layout>
            <Routes>
                <Route path="/about" element={<About />}/>
                <Route path="/" element={<Home />}/>
            </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Router