import React from 'react';
import store from "./dux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import PageWrapper from './app/Page/PageWrapper';

function Test() {
    return (
        <p>---</p>
    )
}


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageWrapper><Test></Test></PageWrapper>} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App;
