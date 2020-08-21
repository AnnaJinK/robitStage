import React from 'react';
import PageTemplate from 'components/PageTemplate';
import Visual from 'components/Visual';
import './About.scss';
import {useTranslation} from "react-i18next";

const About = () => {
const {t} = useTranslation('about');
  const visionList = [
    { title: t('vision.1.title'), desc: t('vision.1.description') },
    { title: t('vision.2.title'), desc: t('vision.2.description') },
    { title: t('vision.3.title'), desc: t('vision.3.description') },
  ];

  const memberList = [
    { title:t('member.1.title'), name: t('member.1.name'), position:t('member.1.position'), },
    { title:t('member.2.title'), name: t('member.2.name'), position:t('member.2.position'), },
    { title:t('member.3.title'), name: t('member.3.name'), position:t('member.3.position'), },

    { title:t('member.normal.1.title'), name: t('member.normal.1.name'), position:t('member.normal.1.position'), },
    { title:t('member.normal.2.title'), name: t('member.normal.2.name'), position:t('member.normal.2.position'), },
    { title:t('member.normal.2.title'), name: t('member.normal.3.name'), position:t('member.normal.2.position'), },

    { title:t('member.normal.3.title'), name: t('member.normal.4.name'), position:t('member.normal.3.position'), },
    { title:t('member.normal.4.title'), name: t('member.normal.5.name'), position:t('member.normal.4.position'), }
  ];

  const mediaList = [
  	{
      date: t('media.1.date'),
      title: t('media.1.title'),
      link: t('media.1.link')
    },
  	{
      date: t('media.2.date'),
      title: t('media.2.title'),
      link: t('media.2.link')
    },
    {
      date: t('media.3.date'),
      title: t('media.3.title'),
      link: t('media.3.link')
    },
    {
      date: t('media.4.date'),
      title: t('media.4.title'),
      link: t('media.4.link')
    },
    {
      date: t('media.5.date'),
      title: t('media.5.title'),
      link: t('media.5.link')
    },
    {
      date: t('media.6.date'),
      title: t('media.6.title'),
      link: t('media.6.link')
    },
    {
      date: t('media.7.date'),
      title: t('media.7.title'),
      link: t('media.7.link')
    },
    {
      date: t('media.8.date'),
      title: t('media.8.title'),
      link: t('media.8.link')
    },
    {
      date: t('media.9.date'),
      title: t('media.9.title'),
      link: t('media.9.link')
    }
  ]
  const set_HistoryList = () => {
    let year = 2020;
    let listArr = [
      {
        list: [
          {
            desc: [
              { text: t('history.contents.2020.1') },
              { text: t('history.contents.2020.2') },
              { text: t('history.contents.2020.3') },
              { text: t('history.contents.2020.4') },
            ],
            award: [
              { text: t('history.award.2020.1') },
              { text: t('history.award.2020.2') },
              { text: t('history.award.2020.3') },
            ]
          },
          {
            desc: [
              { text: t('history.contents.2019.1') },
              { text: t('history.contents.2019.2') },
              { text: t('history.contents.2019.3') },
              { text: t('history.contents.2019.4') },

            ],
            award: [
              { text: t('history.award.2019.1') },
              { text: t('history.award.2019.2') },
              { text: t('history.award.2019.3') },
              { text: t('history.award.2019.4') },
              { text: t('history.award.2019.5') },
              { text: t('history.award.2019.6') },
              { text: t('history.award.2019.7') },
              { text: t('history.award.2019.8') },
              { text: t('history.award.2019.9') },
            ]
          },
          {
            desc: [
              { text: t('history.contents.2018.1') },
              { text: t('history.contents.2018.2') },
              { text: t('history.contents.2018.3') },
              { text: t('history.contents.2018.4') },
              { text: t('history.contents.2018.5') },
              { text: t('history.contents.2018.6') },
              { text: t('history.contents.2018.7') },
              { text: t('history.contents.2018.8') },
              { text: t('history.contents.2018.9') },

              
            ],
            award: [
              { text: t('history.award.2018.1') },
              { text: t('history.award.2018.2') },
              { text: t('history.award.2018.3') },
              { text: t('history.award.2018.4') },
              { text: t('history.award.2018.5') },
              { text: t('history.award.2018.6') },
              { text: t('history.award.2018.7') },
              { text: t('history.award.2018.8') },
            ]
          },
          {
            desc: [
              { text: t('history.contents.2017.1') },
              { text: t('history.contents.2017.2') },
              { text: t('history.contents.2017.3') },
            ],
            award: [
              { text: t('history.award.2017.1') },
              { text: t('history.award.2017.2') },
              { text: t('history.award.2017.3') },
              { text: t('history.award.2017.4') },
            ]
          }
        ]
      }
    ];



    return (
      listArr.map((list, index) => {
        return (
          <div key={index}>
            {list.list.map((list, index) => {
              return ( index % 2 === 0 ?
                <React.Fragment key={index}>
                  <div className="container left">
                  <div className="content">
                    <h2>{year - index}</h2>
                    <h1 className="ACTIVITIES">{t('history.active')}</h1>
                      {list.desc.map((desc, index) => {
                          return (
                            <li key={index}>
                              {desc.text.toString().split('\n').map((desc, index) => {
                                  return (
                                    <React.Fragment key={index}>
                                      {desc}<br/>
                                    </React.Fragment>
                                  )
                                })}
                            </li>
                          )
                        })}
                        <h1 className="AWARDS">{t('history.award.and.investigation')}</h1>
                        {list.award.map((award, index) => {
                          return (
                            <li key={index}>
                              {award.text.toString().split('\n').map((award, index) => {
                                  return (
                                    <React.Fragment key={index}>
                                      {award}<br/>
                                    </React.Fragment>
                                  )
                                })}
                            </li>
                          )
                        })}
                  </div>
                  </div>
                </React.Fragment>
                :
                <React.Fragment key={index}>
                  <div className="container right">
                  <div className="content">
                    <h2>{year - index}</h2>
                    <h1 className="ACTIVITIES">{t('history.active')}</h1>
                      {list.desc.map((desc, index) => {
                          return (
                            <li key={index}>
                              {desc.text.toString().split('\n').map((desc, index) => {
                                  return (
                                    <React.Fragment key={index}>
                                      {desc}<br/>
                                    </React.Fragment>
                                  )
                                })}
                          </li>
                          )
                        })}
                        <h1 className="AWARDS">{t('history.award.and.investigation')}</h1>
                        {list.award.map((award, index) => {
                          return (
                            <li key={index}>
                              {award.text.toString().split('\n').map((award, index) => {
                                  return (
                                    <React.Fragment key={index}>
                                      {award}<br/>
                                    </React.Fragment>
                                  )
                                })}
                            </li>
                          )
                        })}
                  </div>
                  </div>
                </React.Fragment>
              )
            })}
          </div>
        )
      })
    )
  };
  const title = {
    title: t('title'),
    subtitle: t('subtitle'),
    class: "about"
  };

  return (
    <PageTemplate>
      <Visual {...title} />
      <div className="container-contents">
        <div className="area area__vision">
          <div className="area-inner">
            <h1 className="area__title">Vision</h1>
            <div className="box box__info">
              <h1>{t('vision.title')}</h1>
              <p dangerouslySetInnerHTML={{__html: t('vision.subtitle')}}/>
            </div>
            <ul>
              {visionList.map((list, index) => {
                return (
                  <li key={index} className="box__info-list-item">
                    <div>
                      <strong>{list.title}</strong>
                      <span>{list.desc}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        
        

        <div className="area area__members">
          <div className="area-inner">
            <h1 className="area__title">Members</h1>
            <ul>
              {memberList.map((list, index) => {
                return( parseInt(index/3)===0 ?
                  <li key={index}>
                    <span className="box">
                      <span className="box__image">
                        <img src={`/images/contents/img_about_member${1 + index}.png`}  alt={list.title} />
                      </span>
                      <span className="box__info">
                        <span className="box__info-title">{list.title}</span>
                        <strong className="box__info-name">{list.name}</strong>
                        <span className="box__info-position" dangerouslySetInnerHTML={{__html: list.position}}/>
                      </span>
                    </span>
                  </li>
                  :
                  <div className="table_row" key={index}></div>
                )
              })}
            </ul>
            <ul>
              {memberList.map((list, index) => {
                return( parseInt(index/3)===1 ?
                  <li key={index}>
                    <span className="box">
                      <span className="box__image">
                        <img src={`/images/contents/img_about_member${1 + index}.png`}  alt={list.title} />
                      </span>
                      <span className="box__info">
                        <span className="box__info-title" >{list.title}</span>
                        <strong className="box__info-name">{list.name}</strong>
                        <span className="box__info-position" dangerouslySetInnerHTML={{__html: list.position}}/>
                      </span>
                    </span>
                  </li>
                  :
                  <div className="table_row" key={index}></div>
                )
              })}
            </ul>
            <ul>
              {memberList.map((list, index) => {
                return( parseInt(index/3)===2 ?
                  <li key={index}>
                    <span className="box">
                      <span className="box__image">
                        <img src={`/images/contents/img_about_member${1 + index}.png`}  alt={list.title} />
                      </span>
                      <span className="box__info">
                        <span className="box__info-title">{list.title}</span>
                        <strong className="box__info-name">{list.name}</strong>
                        <span className="box__info-position" dangerouslySetInnerHTML={{__html: list.position}}/>
                      </span>
                    </span>
                  </li>
                  :
                  <div className="table_row" key={index}></div>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="area area__history">
        <h1 className="area__title">History</h1>
          <div className="timeline">
          {set_HistoryList()}
          </div>
        </div>


        <div className="area area__media">
          <div className="area-inner">
            <h1 className="area__title">Media</h1>
            <ul>
              {mediaList.map((media, index) => {
                return (
                  <li key={index}>
                    <a className="box" href={media.link} target="_blank" rel="noopener noreferrer">
                      <span className="box__image">
                        <img src={`/images/contents/img_about_media${1 + index}.png`}  alt={media.title} />
                      </span>
                      <span className="box__info">
                        <span className="box__info-date">{media.date}</span>
                        <strong className="box__info-title">{media.title}</strong>
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default About;
