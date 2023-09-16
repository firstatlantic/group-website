import React from 'react';
import store from "./dux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import PageWrapper from './app/Components/PageWrapper';
import Home from './app/Pages/Home';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App;
