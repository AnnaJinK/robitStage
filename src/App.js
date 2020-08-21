import React from 'react';
import './i18n';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routers';
import {Provider} from 'react-redux';
import 'styles/base.scss';

const App = ({store}) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routers/>
            </BrowserRouter>
        </Provider>
    );
};

export default App;