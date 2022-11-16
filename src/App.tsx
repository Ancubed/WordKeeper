import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';

import { Provider } from 'react-redux'

import Home from './routes/Home'
import Favourites from './routes/Favourites'
import NotFound from './routes/NotFound'

import Header from './components/Header'
import Footer from './components/Footer'

import store from './redux/store'

const queryClient = new QueryClient();

const StyleProvider: React.FC<{ children: React.ReactNode[] | React.ReactNode }> = ({ children } : { children: React.ReactNode[] | React.ReactNode }) => {
    return (
        <>
            <Header className='font-sans text-lg px-12 m-1'/>
            <main className='font-sans px-12 m-1 mb-20 lg:px-64'>
                {children}
            </main>
            <Footer className='font-sans px-12 m-1'/>
        </>
    )
}

const ProviderWrapper: React.FC<{ children: React.ReactNode[] | React.ReactNode }> = ({ children } : { children: React.ReactNode[] | React.ReactNode }) => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <BrowserRouter>
                        <StyleProvider>
                            <Routes>
                                {children}
                            </Routes>
                        </StyleProvider>
                    </BrowserRouter>
                </QueryClientProvider>
            </Provider>
        </React.StrictMode>
    )
}

function App() {
  return (
    <ProviderWrapper>
        <Route path="/" element={<Home />}/>
        <Route path="/favourites" element={<Favourites />}/>
        <Route path="*" element={<NotFound />}/>
    </ProviderWrapper>      
  )
}

export default App
