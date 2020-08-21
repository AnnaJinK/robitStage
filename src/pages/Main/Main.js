import React from 'react';
import {Link} from 'react-router-dom';
import {Media} from 'react-breakpoints';
import PageTemplate from 'components/PageTemplate';
import Slider from 'lib/Slider';
import './Main.scss';
import {useTranslation} from "react-i18next";

const Main = (props) => {
    const { t } = useTranslation('main');

    let list = [
        {
            title: t('banner.first.title'),
            subtitle: t('banner.first.subtitle'),
            link: [
                {text: t('banner.link.paper.toy'), to: "/Toy"},
                {text: t('banner.link.paper.book'), to: "/Book"}
            ]
        },
        {
            title: t('banner.second.title'),
            subtitle: t('banner.second.subtitle'),
            link: [
                {text: t('banner.link.paper.toy'), to: "/Toy"},
                {text: t('banner.link.paper.book'), to: "/Book"}
            ]
        }
    ];

    let awardsList = [
        {title: t('award.first.title'), reward: t('award.first.reward')},
        {title: t('award.second.title'), reward: t('award.second.reward')},
        {title: t('award.third.title'), reward: t('award.third.reward')},
        {title: t('award.forth.title'), reward: t('award.forth.reward')},
        {title: t('award.fifth.title'), reward: t('award.fifth.reward')},
        {title: t('award.sixth.title'), reward: t('award.sixth.reward')},
        {title: t('award.seventh.title'), reward: t('award.seventh.reward')},
        {title: t('award.eight.title'), reward: t('award.eight.reward')},
    ];

    const partnersList = [
        {name: t('partner.first.name'), class: "name__NUS"},
        {name: t('partner.second.name'), class: "name__iGroupKorea"},
        {name: t('partner,third,name'), class: "name__POSTECH"},
        {name: t('partner.forth.name'), class: "name__SeoulCam"},
        {name: t('partner.fifth.name'), class: "name__MainCon"},
    ];

    const partnersList1 = [
        { name: t('partner.sixth.name'), class: "name__KORAC" },
        { name: t('partner.seventh.name'), class: "name__kotra" },
        { name: t('partner.eight.name'), class: "name__KITA" },
        { name: t('partner.nine.name'), class: " name__uptownSeoul" },
        { name: t('partner.ten.name'), class: "name__MEMEWE" }
    ];

    return (
        <PageTemplate {...props}>
            <div className="container-slider">
                <div className="container-inner">
                    <Slider showThumbs={false} showArrows={false} autoPlay interval={5000} infiniteLoop>
                        {list.map((list, index) => (
                            <div key={index} className={`box__slider-item item__${index + 1}`}>
                                <Media>
                                    {({breakpoints, currentBreakpoint}) => (
                                        breakpoints[currentBreakpoint] > breakpoints.tablet ?
                                            <>
                                                <h1>{list.title}</h1>
                                                <h2 dangerouslySetInnerHTML={{__html: list.subtitle}}/>
                                            </>
                                            :
                                            <>
                                                <h1>
                                                    {
                                                        list.title.toString().split('\n').map((title, index) => (
                                                            <React.Fragment key={index}>
                                                                {title}<br/>
                                                            </React.Fragment>
                                                        ))
                                                    }
                                                </h1>
                                                <h2>
                                                    {
                                                        list.subtitle.toString().split('\n').map((subTitle, index) => (
                                                            <React.Fragment key={index}>
                                                                {subTitle}<br/>
                                                            </React.Fragment>
                                                        ))
                                                    }
                                                </h2>
                                            </>
                                    )}
                                </Media>
                                <div className="box__link">
                                    {list.link.map((link, index) => (
                                        <Link to={`${link.to}`} key={index}>{link.text}</Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="container-contents">
                <div className="area area__welcome">
                    <div className="area-inner">
                        <div className="area__contents">
                            <div className="box box__image">
                <span className="frame__image">
                  <span className="wrap__image">
                    <img src="/images/contents/img_main.png" alt="Welcome"/>
                  </span>
                </span>
                            </div>
                            <div className="box box__info">
                                <div className="box-inner__text">
                                    <h1>{t('greeting.title')}</h1>
                                    <Media>
                                        {({breakpoints, currentBreakpoint}) => (
                                            breakpoints[currentBreakpoint] > breakpoints.tablet ?
                                                <p dangerouslySetInnerHTML={{__html: t('greeting.first.description')}}/>
                                                :
                                                <p dangerouslySetInnerHTML={{__html: t('greeting.second.description')}}/>
                                        )}
                                    </Media>
                                </div>
                                <div className="box-inner__button">
                                    <Link to={'/about'}><span>+ More</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="area area__awards">
                    <div className="area-inner">
                        <h1 className="area__title">Awards</h1>
                        <div className="box__info">
                            <ul className="box__info-list">
                                {awardsList.map((award, index) => {
                                    return (
                                        <li key={index} className="box__info-list-item">
                                          <span>
                                            {award.title.toString().split('\n').map((title, index) => (
                                                <React.Fragment key={index}>
                                                    {title}<br/>
                                                </React.Fragment>
                                            ))}
                                          </span>
                                            <b>{award.reward}</b>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="area area__partners">
                    <h1 className="area__title">Partners</h1>
                    <div className="box__info">
                        <div className="area-inner">
                            <ul className="box__info-list">
                                {partnersList.map((item, index) => {
                                    return (
                                        <li key={index} className={`box__info-list-item ${item.class}`}>
                                            <span>{item.name}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="box__info_newLine">
                        <div className="area-inner">
                            <ul className="box__info-list">
                                {partnersList1.map((item, index) => {
                                    return (
                                        <li key={index} className={`box__info-list-item ${item.class}`}>
                                            <span>{item.name}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
};

export default Main;
