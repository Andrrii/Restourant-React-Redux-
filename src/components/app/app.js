import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import "./style.css"

import Background from './food-bg.jpg';

const App = () => {
    return (
        <div className="app bacg">
            <AppHeader total={50}/>
            <MainPage/>
            <CartPage/>
        </div>
    )
}

export default App