import React from 'react';
import {Media} from 'react-breakpoints';
import PageTemplate from 'components/PageTemplate';
import Visual from 'components/Visual';
import './Curriculum.scss';

import {useTranslation} from "react-i18next";
/*
function go_pop(){
 window.open("/test.html","new","width=500, height=1000, resizable=no, scrollbars=no, status=no, location=no, directories=no;");
}*/

const Curriculum = () => {

    const {t} = useTranslation('curriculum');

    let listArr = [
        {
            plan: [
                {list: t('plan.1.title1')},
                {list: t('plan.1.title2')},
                {list: t('plan.1.title3')},
                {list: t('plan.1.title4')},
            ]
        },
        {
            plan: [
                {list: t('plan.2.title1')},
                {list: t('plan.2.title2')},
                {list: t('plan.2.title3')},
            ]
        },
        {
            plan: [
                {list: t('plan.3.title1')},
                {list: t('plan.3.title2')},
                {list: t('plan.3.title3')},
            ]
        },
        {
            plan: [
                {list: t('plan.4.title1')},
                {list: t('plan.4.title2')},
                {list: t('plan.4.title3')},
            ]
        },
        {
            plan: [
                {list: t('plan.5.title1')},
                {list: t('plan.5.title2')},
                {list: t('plan.5.title3')},
            ]
        },
        {
            plan: [
                {list: t('plan.6.title1')},
                {list: t('plan.6.title2')},
            ]
        },
        {
            plan: [
                {list: t('plan.7.title1')},
                {list: t('plan.7.title2')},
            ]
        },
        {
            plan: [
                {list: t('plan.8.title1')},
                {list: t('plan.8.title2')},
            ]
        },
        {
            plan: [
                {list: t('plan.9.title1')},
                {list: t('plan.9.title2')},
            ]
        },
        {
            plan: [
                {list: t('plan.10.title1')},
                {list: t('plan.10.title2')},
                {list: t('plan.10.title3')},
            ]
        },
        {
            plan: [
                {list: t('plan.11.title1')},
                {list: t('plan.11.title2')},
            ]
        },
        {
            plan: [
                {list: t('plan.12.title1')},
                {list: t('plan.12.title2')},
                {list: t('plan.12.title3')},
            ]
        },
        {
            plan: [
                {list: t('plan.13.title1')},
                {list: t('plan.13.title2')},
            ]
        },
        {
            plan: [
                {list: t('plan.14.title1')},
                {list: t('plan.14.title2')},
            ]
        }
    ];

    const setPlanList = () => {
        return (
            listArr.map((plan, index) => {
                return (
                    <li key={index} className={`info-list-item item${index + 1}`}>
                        <h1>{index + 1}{t('plan.suffix')}</h1>
                        <ol className="info-list-inner">
                            {plan.plan.map((plan, index) => {
                                return (
                                    <li key={index} className="info-list-inner-item">
                                        {plan.list.toString().split('\n').map((list) => {
                                            return (
                                                <React.Fragment key={list}>
                                                    {list}<br/>
                                                </React.Fragment>
                                            )
                                        })}
                                    </li>
                                )
                            })}
                        </ol>
                    </li>
                )
            })
        );
    };

    const title = {
        title: t('banner.title'),
        subtitle:  t('banner.subtitle'),
        class: "curriculum"
    };

    return (
        <PageTemplate>
            <Visual {...title} />
            <div className="container-contents">
                <div className="area area__eduvision">
                    <div className="area-inner">
                        <Media>
                            {
                                ({breakpoints, currentBreakpoint}) =>
                                    breakpoints[currentBreakpoint] > breakpoints.tablet ?
                                        <React.Fragment>
                                            <span className="box box__info-text">
                                                <strong dangerouslySetInnerHTML={{__html: t('benefit.first.1')}}/>
                                                <span className="text__big">{t('benefit.first.2')}</span><br/>
                                                <span dangerouslySetInnerHTML={{__html: t('benefit.first.3')}}/>
                                            </span>
                                            <span className="box box__info-image">
                                                <img src="/images/contents/img_curriculum_top.png" alt="STEM TOY"/>
                                            </span>
                                        </React.Fragment>
                                        :
                                        <React.Fragment>
                                            <strong dangerouslySetInnerHTML={{__html: t('benefit.second.1')}}/>
                                            <span className="box box__info-image">
                                                <img src="/images/contents/img_curriculum_top.png"
                                                     alt="STEM TOY"/>
                                            </span>
                                            <span className="box box__info-text">
                                                <span className="text__big"
                                                      dangerouslySetInnerHTML={{__html: t('benefit.first.2')}}/><br/>
                                                <span dangerouslySetInnerHTML={{__html: t('benefit.second.2')}}/>
                                            </span>
                                        </React.Fragment>
                            }
                        </Media>
                    </div>
                </div>
                <div className="area area__stemtoy">
                    <div className="area-inner">
                        <Media>
                            {
                                ({breakpoints, currentBreakpoint}) =>
                                    breakpoints[currentBreakpoint] > breakpoints.tablet ?
                                        <React.Fragment>
                                            <span className="box box__info-image">
                                                <img src="/images/contents/img_curriculum_middle.png"
                                                     alt="STEM TOY"/>
                                            </span>
                                            <span className="box box__info-text">
                                              <strong dangerouslySetInnerHTML={{__html: t('benefit.third.title')}}/>
                                              <span className="text__big"
                                                    dangerouslySetInnerHTML={{__html: t('benefit.third.1')}}/>
                                              <br/><br/>
                                              <span dangerouslySetInnerHTML={{__html: t('benefit.third.2')}}/>
                                            </span>
                                        </React.Fragment>
                                        :
                                        <React.Fragment>
                                            <strong dangerouslySetInnerHTML={{__html: t('benefit.forth.title')}}/>
                                            <span className="box box__info-image">
                                                <img src="/images/contents/img_curriculum_middle.png"
                                                     alt="STEM TOY"/>
                                            </span>
                                            <span className="box box__info-text">
                                                <span className="text__big"
                                                      dangerouslySetInnerHTML={{__html: t('benefit.forth.1')}}/><br/>
                                                <span dangerouslySetInnerHTML={{__html: t('benefit.forth.2')}}/>
                                            </span>
                                        </React.Fragment>
                            }
                        </Media>
                    </div>
                </div>
                <div className="area area__plan">
                    <div className="area-inner">
                        <h1 className="area__title">{t('plan.title')}</h1>
                        <ul className="area__info-list">
                            {setPlanList()}
                            <li className="info-list-item__blank"/>
                        </ul>
                    </div>
                </div>
            </div>
        </PageTemplate>
    )
}

export default Curriculum;
