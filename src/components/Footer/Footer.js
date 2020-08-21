import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.scss';
import {useTranslation} from "react-i18next";

const Footer = (props) => {
    const { t } = useTranslation('footer');

    let navExtendedItem = [
        {name: 'facebook', url: 'https://www.facebook.com/Robotry-361612367776153/'},
        {name: 'Instagram', url: 'https://www.instagram.com/robotry_/'},
        {name: 'KakaoTalkPlus', url: 'http://pf.kakao.com/_bexntj'},
        {name: 'Shop', url: 'https://smartstore.naver.com/robotry0'}
    ];

    return (
        <footer className={`footer${props.extendClass ? ` ${props.extendClass}` : ''}`}>
            <div className="footer-inner">
                <Link to={'/'} className="footer__logo">Robotry</Link>
                <div className="footer__nav-extended">
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
                <div className="footer__info">
                    <p dangerouslySetInnerHTML={{__html: t('company.address')}}/>
                    <p dangerouslySetInnerHTML={{__html: t('register.number')}}/>
                    <p dangerouslySetInnerHTML={{__html: t('company.email')}}/>
                </div>
                <small>&copy; Robotry. All rights reserved.</small>
                
            </div>
        </footer>
    )
}
//<Link to={'/auth/login'} className="btn__login">{t('admin.login')}</Link>
export default Footer;