import React from 'react';
import store from "./dux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import PageWrapper from './app/Components/PageWrapper';
import Home from './app/Pages/Home/Home';
import { ProjectsAndEngineeringItems, getLink } from './app/Pages/Home/ProjectsAndEngineering';
import EngineeringPage, { EngineeringPageWrapper } from './app/Pages/Engineering/EngineeringPage';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                    <Route path={getLink()} element={<PageWrapper><EngineeringPage /></PageWrapper>} />
                    {
                        ProjectsAndEngineeringItems.map(item => (
                            <Route path={item.link} element={<PageWrapper>
                                <EngineeringPageWrapper title={item.title} crumbs={[{ title: item.title, link: item.link }]}>
                                    {item.page}
                                </EngineeringPageWrapper>
                            </PageWrapper>} />
                        ))
                    }
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App;
