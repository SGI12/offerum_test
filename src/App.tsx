import React from 'react';
import { ResetCSSGLobalStyle } from './baseStyles/styles';
import { BackgroundCircle } from './components/BackgroundCircles';
import { Header } from './components/Header';

const App = () => {
    return (
        <div>
            <ResetCSSGLobalStyle/> 
            <BackgroundCircle/>
            <Header/>
        </div>
    );
};

export default App;