import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.css';

class DesktopNav extends Component {
    _isMounted = false;
    state = {};

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

    render() {
        const {navExtendedItem, navGlobalItem, setLanguageCode, languageCode} = this.props;

        return (
            <header className={`header${this.state.scroll > this.state.top ? " fixed" : ""}`}>
                <div className="header__nav-extended" style={{position: 'relative'}}>
                    <div className="header-inner">
                        <ul className="nav-extended">
                            {navExtendedItem.map((item, index) => {
                                return (
                                    <li key={index} className={`nav-extended__item-${item.name}`}>
                                        <a href={item.url}
                                           title={`go to ${item.name}`}
                                           target="_blank"
                                           rel="noopener noreferrer">{item.name}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div style={
                        {
                            width: '80px',
                            position: 'absolute',
                            top: '5px',
                            right: '20px'
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
                </div>
                <div className="header__nav-global">
                    <div className="header-inner">
                        <h1><Link to={"/"}>Robotry</Link></h1>
                        <nav className="nav">
                            <div className="nav__menu">
                                <ul>                                
                                    {navGlobalItem.map((item, index) => {
                                        return (index === 1 ?
                                            <li className="dropdown" key={index} style={{zIndex: 999}}>
                                                
                                                <NavLink className="dropdown-menu" activeClassName="active" to={item.to}>
                                                {item.name}
                                                </NavLink>
                                                <div className="dropdown-content">
                                                    {navGlobalItem.map((item, index) => {
                                                        return (index === 2 || index === 3 || index === 4 ? 
                                                            <NavLink activeClassName="active" key={index} to={item.to}>{item.name}</NavLink>                                                            
                                                        : 
                                                        null)})}
                                                </div>
                                            </li>
                                            :
                                            index === 2 || index ===3 || index ===4 ? null :
                                            <li className="dropdown" key={index}>
                                                
                                                <NavLink className="dropdown-menu" activeClassName="active" to={item.to}>
                                                {item.name}
                                                </NavLink>
                                            </li>     
                                        )
                                    })}
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}
/**
 * <NavLink activeClassName="active"to={item.to}>{item.name}</NavLink>
 */
export default DesktopNav;