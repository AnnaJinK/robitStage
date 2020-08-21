import React from 'react';
import {Media} from 'react-breakpoints';
import PageTemplate from 'components/PageTemplate';
import Visual from 'components/Visual';
import './Event.scss';

import {useTranslation} from "react-i18next";

const Event = () => {

    const {t} = useTranslation('Event');

    const title = {
        title: t('banner.title'),
        subtitle: t('banner.subtitle'),
        class: "event"
    };

    return (
        <PageTemplate>
            <Visual {...title} />
            <div className="box__image">
                <img src={`images/edu.png`} alt=""/>
            </div>
            
            <div className="container-contents">

                <div className="area area__LEFT">
                    <div className="area-inner">
                        <Media>
                            {
                                ({breakpoints, currentBreakpoint}) =>
                                    breakpoints[currentBreakpoint] > breakpoints.tablet ?
                                        <React.Fragment>
                                            
                                            <span className="box box__info-text">
                                                <strong dangerouslySetInnerHTML={{__html: t('event.Shopee.1')}}/>
                                                <span className="text__big">{t('event.Shopee.2')}</span><br/>
                                                <span dangerouslySetInnerHTML={{__html: t('event.Shopee.3')}}/><br/>
                                                <span dangerouslySetInnerHTML={{__html: t('event.Amazon.1')}}/><br/>
                                                <span className="blinking" dangerouslySetInnerHTML={{__html: t('event.Shopee.s.go')}}/><br/>
                                                <span className="blinking" dangerouslySetInnerHTML={{__html: t('event.Shopee.m.go')}}/><br/>
                                                <span className="blinking" dangerouslySetInnerHTML={{__html: t('event.Shopee.t.go')}}/>
                                            </span>
                                            <span className="box box__info-image">
                                            <a className="box" href= {'https://www.amazon.com/dp/B089Y2N155?ref=myi_title_dp' } target={'_blank'}>
                                              <div className="wrap0">
                                                <img src="/images/contents/img_wadiz.png" alt="STEM TOY"/>
                                                <div className="wrap0_text">{t('event.Amazon.go')}</div>
                                                </div>
                                              </a>
                                            </span>

                                        </React.Fragment>
                                        :
                                        <React.Fragment>
                                            <strong dangerouslySetInnerHTML={{__html: t('event.Shopee.1')}}/>
                                            <span className="box box__info-image">
                                            <a className="box" href= {'https://www.amazon.com/dp/B089Y2N155?ref=myi_title_dp' } target={'_blank'}>
                                              <img src="/images/contents/img_wadiz.png" alt="STEM TOY"/>
                                            </a>
                                            </span>
                                            <span className="box box__info-text">
                                                <span className="text__big"
                                                      dangerouslySetInnerHTML={{__html: t('event.Shopee.2')}}/><br/>
                                                <span dangerouslySetInnerHTML={{__html: t('event.Shopee.3')}}/><br/>
                                                <span dangerouslySetInnerHTML={{__html: t('event.Amazon.1')}}/><br/>
                                                <span dangerouslySetInnerHTML={{__html: t('event.Shopee.s.go')}}/><br/>
                                                <span dangerouslySetInnerHTML={{__html: t('event.Shopee.m.go')}}/><br/>
                                                <span dangerouslySetInnerHTML={{__html: t('event.Shopee.t.go')}}/>
                                            </span>
                                        </React.Fragment>
                            }
                        </Media>
                    </div>
                </div>


                
                <div className="area area__RIGHT">
                    <div className="area-inner">
                        <Media>
                            {
                                ({breakpoints, currentBreakpoint}) =>
                                    breakpoints[currentBreakpoint] > breakpoints.tablet ?
                                        <React.Fragment>
                                            
                                            <span className="box box__info-image">
                                              <a className="box" href= {'https://class101.app/e/robotry-rewardopen'} target={'_blank'}>
                                                <div className="wrap0">
                                                <img src="/images/contents/img_class_101.png" alt="STEM TOY"/>
                                                <div className="wrap0_text">클래스 101 수강 신청하러가기!</div>
                                                </div>
                                              </a>
                                            </span>
                                            <span className="box box__info-text">
                                                <strong dangerouslySetInnerHTML={{__html: t('benefit.first.1')}}/>
                                                <span className="text__big">{t('benefit.first.2')}</span><br/>
                                                <span dangerouslySetInnerHTML={{__html: t('benefit.first.3')}}/>
                                            </span>
                                        </React.Fragment>
                                        :
                                        <React.Fragment>
                                            <strong dangerouslySetInnerHTML={{__html: t('benefit.second.1')}}/>
                                            <span className="box box__info-image">
                                            <a className="box" href= {'https://class101.app/e/robotry-rewardopen'} target={'_blank'}>
                                              <img src="/images/contents/img_class_101.png" alt="STEM TOY"/>
                                            </a>
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
            </div>
        </PageTemplate>
    )
}

export default Event;
/*
<div className="area area__RIGHT">
    <div className="area-inner">
        <Media>
            {
                ({breakpoints, currentBreakpoint}) =>
                    breakpoints[currentBreakpoint] > breakpoints.tablet ?
                        <React.Fragment>
                            <span className="box box__info-image">
                            <a className="box" href= {'https://smartstore.naver.com/robotry0' } target={'_blank'}>
                                <div className="wrap0">
                                <img src="/images/contents/img_robit1p1.png" alt="STEM TOY"/>
                                <div className="wrap0_text">이벤트 참여하기!</div>
                                </div>
                                </a>
                            </span>
                            <span className="box box__info-text">
                                <strong dangerouslySetInnerHTML={{__html: t('event.robit1+1.title')}}/>
                                <span className="text__big"
                                    dangerouslySetInnerHTML={{__html: t('event.robit1+1.1')}}/>
                                <br/>
                                <span dangerouslySetInnerHTML={{__html: t('event.robit1+1.2')}}/>
                            </span>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <strong dangerouslySetInnerHTML={{__html: t('event.robit1+1.title')}}/>
                            <span className="box box__info-image">
                            <a className="box" href= {'https://smartstore.naver.com/robotry0'} target={'_blank'}>
                                <img src="/images/contents/img_robit1p1.png"
                                        alt="STEM TOY"/>
                                        </a>
                            </span>
                            <span className="box box__info-text">
                                <span className="text__big"
                                        dangerouslySetInnerHTML={{__html: t('event.robit1+1.1')}}/><br/>
                                <span dangerouslySetInnerHTML={{__html: t('event.robit1+1.2')}}/>
                            </span>
                        </React.Fragment>
            }
        </Media>
    </div>
</div>
*/