import React from 'react';
import { Media } from 'react-breakpoints';
import PageTemplate from 'components/PageTemplate';
import Visual from 'components/Visual';
import './Lid.scss';
import {useTranslation} from "react-i18next";

const Lid = () => {
  const { t } = useTranslation('lid');

  const graphList = [
    { target: t('graph.plastic.pack'), num: 184, class: "plasticpack" },
    { target: t('graph.bottle.caps'), num: 164, class: "bottlecaps" },
    { target: t('graph.straw'), num: 122, class: "straw" },
    { target: t('graph.lid'), num: 104, class: "lid" },
    { target: t('graph.plastic.bag'), num: 132, class: "plasticbag" },
    { target: t('graph.bottle'), num: 147, class: "bottle" }
  ];

  const benefitList = [
    { image: "factory", benefit: t('benefit.factory.title'), desc: t('benefit.factory.description') },
    { image: "making", benefit: t('benefit.making.title'), desc: t('benefit.making.description') },
    { image: "dvertising", benefit: t('benefit.advertising.title'), desc: t('benefit.advertising.description') }
  ];

  const subPcHeader = t('media.title');
  const subMobileHeader = t('media.tablet.title');

  const title = {
    title: t('page.greeting.title'),
    subtitle: t('page.greeting.subtitle'),
    class: "lid"
  };

  return (
    <PageTemplate>
      <Visual {...title} />
      <div className="container-contents">
        <div className="area area__lidvision">
          <div className="area-inner">
            <Media>
              {
                ({ breakpoints, currentBreakpoint }) =>
                breakpoints[currentBreakpoint] > breakpoints.tablet ?
                <h1 dangerouslySetInnerHTML={{__html: subMobileHeader}}/>
                :
                <h1 dangerouslySetInnerHTML={{__html: subPcHeader}}/>
              }
            </Media>
            <div className="box box__info">
              <div className="box__info-graph">
                <ul>
                  {
                    graphList.map((graph, index) => {
                      let percentage = (graph.num / 184) * 100;

                      return (
                        <li key={index}>
                          <span className={`box__info-image ${graph.class}`}>
                            <i><span>{percentage}</span>%</i>
                            <strong><span dangerouslySetInnerHTML={{__html : graph.target}}/></strong>
                          </span>
                        </li>
                      )
                    })
                  }
                </ul>
                <i className="box__info-target__text" dangerouslySetInnerHTML={{__html: t('icon.title')}}/>
              </div>
              <Media>
                {
                  ({ breakpoints, currentBreakpoint }) =>
                  breakpoints[currentBreakpoint] > breakpoints.tablet ?
                  <p dangerouslySetInnerHTML={{__html: t('media.tablet.description')}}/>
                  :
                  <p dangerouslySetInnerHTML={{__html: t('media.description')}}/>
                }
              </Media>
            </div>
          </div>
        </div>
        <div className="area area__lidinfo">
          <div className="area-inner">
            <h1>{t('lid.marketing.header')}</h1>
            <div className="box box__info">
              <span className="box__info-text1" dangerouslySetInnerHTML={{__html: t('lid.marketing.first')}}/>
              <span className="box__info-image">
                <img src="/images/contents/img_lid_aboutlid.png" alt="로보트리 페이퍼 리드" />
              </span>
              <span className="box__info-text2" dangerouslySetInnerHTML={{__html: t('lid.marketing.second')}}/>
            </div>
            <ul className="box__info-list">
              {
                benefitList.map((list, index) => {
                  return (
                    <li key={index} className="box__info-list-item">
                      <span className="box__image">
                        <img src={`/images/icons/icon_${list.image}.svg`} alt={list.benefit} />
                      </span>
                      <strong className="box__info-title">{list.benefit}</strong>
                      <span className="box__info-desc">
                        {list.desc.toString().split('\n').map((desc, index) => {
                          return (
                            <React.Fragment key={index}>
                              {desc}<br/>
                            </React.Fragment>
                          )
                        })}
                      </span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
};

export default Lid