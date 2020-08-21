import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './PageTemplate.scss';

const PageTemplate = ({children}, props) => {
    return (
        <div className="wrap">
            <Header/>
            <div className="container">
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default PageTemplate;