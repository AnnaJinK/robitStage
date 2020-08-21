import React, {useState, useEffect} from 'react';
import {withBreakpoints} from 'react-breakpoints';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import './Header.scss';
import {useTranslation} from "react-i18next";

const Header = (props) => {
    const {t} = useTranslation('header');
    const {breakpoints, currentBreakpoint} = props;

    const {i18n} = useTranslation();
    const [languageCode, setLanguageCode] = useState(!localStorage.getItem('localeInfo') ? 'en' : localStorage.getItem('localeInfo'));

    const navGlobalItem = [
        
        {name: t('navigation.item.about'), to: '/about'},
        //{name: t('navigation.item.lead'), to: '/lid'},
        {name: t('navigation.item.products'), to: '/Products'},
        {name: t('navigation.item.paper.toy'), to: '/Toy'},
        {name: t('navigation.item.book'), to: '/Book'},
        {name: "로빗무대", to: '/robitStage'},
        {name: t('navigation.item.curriculum'), to: '/curriculum'},
        {name: t('navigation.item.notice'), to: '/Event'},
        {name: t('navigation.item.portfolio'), to: '/portfolio'},
        //{name: t('navigation.item.voucher'), to: '/voucher'},
        {name: t('navigation.item.contact'), to: '/contact'},
    ];

    const navExtendedItem = [
        {name: 'facebook', url: 'https://www.facebook.com/Robotry-361612367776153/'},
        {name: 'Instagram', url: 'https://www.instagram.com/robotry_/'},
        {name: 'Youtube', url: 'https://www.youtube.com/channel/UCf3HNigXyg7bPLpj1c-3QHw'},
        {name: 'KakaoTalkPlus', url: 'http://pf.kakao.com/_bexntj'},
        {name: 'Shop', url: 'https://smartstore.naver.com/robotry0'}
    ];

    useEffect(() => {
        const localeInfo = localStorage.getItem('localeInfo');
        const isFirst = localStorage.getItem('isFirst');

        if (isFirst === true) {
            setLanguageCode(navigator.language.includes('ko') ? 'ko' : 'en');
        } else {
            setLanguageCode(localeInfo);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('localeInfo', languageCode);
        localStorage.setItem('isFirst', false);

        i18n.changeLanguage(languageCode);
    }, [languageCode]);

    return (
        <>
            {
                breakpoints[currentBreakpoint] > breakpoints.tablet ?
                    <DesktopNav
                        navGlobalItem={navGlobalItem}
                        navExtendedItem={navExtendedItem}
                        languageCode={languageCode}
                        setLanguageCode={setLanguageCode}/>
                    :
                    <MobileNav
                        navGlobalItem={navGlobalItem}
                        navExtendedItem={navExtendedItem}
                        languageCode={languageCode}
                        setLanguageCode={setLanguageCode}/>
            }
        </>
    );
};

export default withBreakpoints(Header);
