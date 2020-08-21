import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
// import Form from 'react-bootstrap/Form';

class MobileNav extends Component {
    _isMounted = false;

    state = {
        isMenuExtended: false
    };

    handleScroll = () => {
        this.setState({scroll: window.scrollY});
    };

    componentDidMount() {
        this._isMounted = true;
        if (!this._isMounted) {
            return false;
        }

        const el = document.querySelectorAll('.header')[0];

        this.setState({top: el.offsetTop, height: el.offsetHeight});
        this.handleScroll();
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('onload', this.handleScroll);
    }

    componentDidUpdate() {
        if (!this._isMounted) {
            return false;
        }

        const el = document.querySelectorAll('.container')[0];

        this.state.scroll > this.state.top ?
            el.style.paddingTop = `${this.state.height}px` :
            el.style.paddingTop = 0;
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('onload', this.handleScroll);
        this._isMounted = false;
    }

    handleMenuButtonClick = () => {
        const isMenuExtended = this.state.isMenuExtended;

        this.setState({isMenuExtended: !isMenuExtended})
    };

    render() {
        const {navGlobalItem, navExtendedItem, languageCode, setLanguageCode} = this.props;

        return (
            <header
                className={`header${this.state.scroll > this.state.top ? " fixed" : ""}`}
                style={{position: 'relative'}}>
                <div className="header__logo">
                    <h1><Link to={"/"}>Robotry</Link></h1>
                </div>
                <button className={`btn__nav-toggle${this.state.isMenuExtended ? " extended" : ""}`} onClick={(e) => {
                    e.preventDefault();
                    this.handleMenuButtonClick();
                }}><span>menu</span></button>
                {
                    this.state.isMenuExtended ?
                        <div className="header__nav-mobile">
                            <div className="nav__mobile">
                                <nav className="nav">
                                    <div className="nav__menu">
                                        <ul>
                                            {navGlobalItem.map((item, index) => {
                                                return (index === 1 ? null:
                                                    <li key={index}><NavLink activeClassName="active"
                                                                             to={item.to}>{item.name}</NavLink></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </nav>
                                <ul className="nav-extended">
                                    {navExtendedItem.map((item, index) => {
                                        return (
                                            <li key={index} className={`nav-extended__item-${item.name}`}><a
                                                href={item.url} title={`go to ${item.name}`} target="_blank"
                                                rel="noopener noreferrer">{item.name}</a></li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        : null
                }
                <div className="form-group"
                     style={
                         {
                             width: '80px',
                             position: 'absolute',
                             top: '10px',
                             right: '10px',
                             zIndex: '999',
                         }
                     }>
                    <button
                        style={{
                            padding: '5px',
                            backgroundColor: 'white',
                            width: '75px',
                            marginTop: '3px',
                        }}
                        onClick={(event) => {
                            event.preventDefault();
                            setLanguageCode(languageCode === 'ko' ? 'en' : 'ko');
                        }}>{languageCode === 'ko' ? 'English' : '한국어'}</button>
                </div>
            </header>
        );
    }
}

export default MobileNav;