import React, {Component} from 'react';
import {Media} from 'react-breakpoints';
import PageTemplate from 'components/PageTemplate';
import Visual from 'components/Visual';
import Slider from 'lib/Slider';
import './Portfolio.scss';
import {withTranslation} from "react-i18next";

class Portfolio extends Component {
    state = {
        exhibitionIdx: 0
    };

    handleChange = (idx) => {
        this.setState({
            exhibitionIdx: idx
        });
    };

    render() {
        const {t} = this.props;

        const outsourcingList = [
            {
                title: t('outsourcing.1.title'),
                place: t('outsourcing.1.place'),
                desc: t('outsourcing.1.description'),
                image: "img_portfolio_codablePaperKit.png"
            },
            {
                title: t('outsourcing.2.title'),
                place: t('outsourcing.2.place'),
                desc: t('outsourcing.2.description'),
                image: "img_portfolio_giantMagi.png"
            },
            {
                title: t('outsourcing.3.title'),
                place: t('outsourcing.3.place'),
                desc: t('outsourcing.3.description'),
                image: "img_portfolio_sushAutomata.png"
            },
            {
                title: t('outsourcing.4.title'),
                place: t('outsourcing.4.place'),
                desc: t('outsourcing.4.description'),
                image: "img_portfolio_nationalTreasurePaperToy.png"
            },
            {
                title: t('outsourcing.5.title'),
                place: t('outsourcing.5.place'),
                desc: t('outsourcing.5.description'),
                image: "img_portfolio_oneDayClass.png"
            },
        ];

        const eduList = [
            {date: 2020, place: t('education.12.place')},
            {date: 2020, place: t('education.11.place')},
            {date: 2020, place: t('education.10.place')},
            {date: 2020, place: t('education.9.place')},
            {date: 2020, place: t('education.8.place')},
            {date: 2019, place: t('education.7.place')},
            {date: 2019, place: t('education.6.place')},
            {date: 2019, place: t('education.5.place')},
            {date: 2018, place: t('education.4.place')},
            {date: 2018, place: t('education.3.place')},
            {date: 2017, place: t('education.2.place')},
            {date: 2017, place: t('education.1.place')},
        ];

        const exhibitionList = [
            {
                country: t('exhibition.country.1'),
                image: [
                    {
                        src: "img_portfolio_korea6.png",
                        alt: t('exhibition.image.6')
                    },
                    {
                        src: "img_portfolio_korea5.png",
                        alt: t('exhibition.image.5')
                    },
                    {
                        src: "img_portfolio_korea4.png",
                        alt: t('exhibition.image.4')
                    },
                    {
                        src: "img_portfolio_korea3.png",
                        alt: t('exhibition.image.3')
                    },
                    {
                        src: "img_portfolio_korea2.png",
                        alt: t('exhibition.image.2')
                    },
                    {
                        src: "img_portfolio_korea1.png",
                        alt: t('exhibition.image.1')
                    }

                ]
            },
            {
                country: t('exhibition.country.2'),
                image: [
                    {
                        src: "img_portfolio_malaysia.png",
                        alt: t('exhibition.c2.image.1')
                    }
                ]
            },
            {
                country: t('exhibition.country.3'),
                image: [
                    {
                        src: "img_portfolio_singapore_EduTECH.jpg",
                        alt: t('exhibition.c3.image.2')
                    },
                    {
                        src: "img_portfolio_singapore.png",
                        alt: t('exhibition.c3.image.1')
                    }
                ]
            }
        ];

        const title = {
            title: t('banner.title'),
            subtitle: t('banner.subtitle'),
            class: "portfolio"
        };

        const setExhibitionList = () => {
            return (
                exhibitionList.map((list, index) => {
                        return (
                            index === this.state.exhibitionIdx ?
                                index === 0 || index === 1 || index === 2 ?
                                <li key={index} className="box__contents-list">
                                        <Media>
                                            {
                                                ({breakpoints, currentBreakpoint}) =>
                                                    breakpoints[currentBreakpoint] > breakpoints.tablet ?
                                                        <Slider width="940px"
                                                                showStatus={false}
                                                                showThumbs={false}
                                                                showArrows={true}
                                                                showIndicators={false}
                                                                autoPlay={false}
                                                                interval={5000}
                                                                infiniteLoop>
                                                            {list.image.map((img, index) => (
                                                                <div key={index}>
                                                                    <div className="box__image">
                                                                        <img src={`/images/contents/${img.src}`}
                                                                             alt={img.alt}/>
                                                                    </div>
                                                                    <div className="box__text">
                                                                        <span
                                                                            className="text__status">{index + 1}/{list.image.length}</span>
                                                                        <span className="text__place">{img.alt}</span>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </Slider>
                                                        :
                                                        <Slider showStatus={false}
                                                                showThumbs={false}
                                                                showArrows={false}
                                                                showIndicators={true}
                                                                autoPlay={false}
                                                                interval={5000}
                                                                infiniteLoop>
                                                            {list.image.map((img, index) => (
                                                                <div key={index}>
                                                                    <div className="box__image">
                                                                        <img src={`/images/contents/${img.src}`}
                                                                             alt={img.alt}/>
                                                                    </div>
                                                                    <div className="box__text">
                                                                        <span className="text__place">{img.alt}</span>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </Slider>
                                            }
                                        </Media>
                                    </li>
                                    :
                                    <li key={index} className="box__contents-list">
                                        {list.image.map((img, index) => (
                                            <div key={index}>
                                                <div className="box__image">
                                                    <img src={`/images/contents/${img.src}`} alt={img.alt}/>
                                                </div>
                                                <div className="box__text">
                                                    <span className="text__place-full">{img.alt}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </li> 
                                : null              
                        )
                    }
                )
            )
        };

        return (
            <PageTemplate>
                <Visual {...title} />
                <div className="container-contents container-contents__portfolio">
                    <div className="area area__outsourcing">
                        <div className="area-inner">
                            <h1 className="area__title">Outsourcing</h1>
                            <Media>
                                {({breakpoints, currentBreakpoint}) =>
                                    breakpoints[currentBreakpoint] > breakpoints.tablet ?
                                        <Slider width="960px"
                                                showStatus={false}
                                                showThumbs={false}
                                                showArrows={true}
                                                showIndicators={false}
                                                autoPlay={false}
                                                interval={5000}
                                                infiniteLoop>
                                            {outsourcingList.map((list, index) => (
                                                <div key={index} className="box__slider-item">
                                                    <div className="box__text">
                                                        <span
                                                            className="status"><em>{index + 1}</em>/{outsourcingList.length}</span>
                                                        <h3>{list.title}</h3>
                                                        <strong>{list.place}</strong>
                                                        <span>
                                                            {list.desc.toString().split('\n').map((desc, index) => (
                                                                <React.Fragment key={index}>
                                                                    {desc}<br/>
                                                                </React.Fragment>
                                                            ))}
                                                        </span>
                                                    </div>
                                                    <div className="box__image">
                                                        <span className="frame__image">
                                                          <img src={`/images/contents/${list.image}`} alt={list.title}/>
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                        :
                                        <Slider showStatus={false}
                                                showThumbs={false}
                                                showArrows={false}
                                                showIndicators={true}
                                                autoPlay={false}
                                                interval={5000}
                                                infiniteLoop>
                                            {outsourcingList.map((list, index) => (
                                                <div key={index} className="box__slider-item">
                                                    <div className="box__image">
                                                        <span className="frame__image">
                                                          <img src={`/images/contents/${list.image}`} alt={list.title}/>
                                                        </span>
                                                    </div>
                                                    <div className="box__text">
                                                        <h3>{list.title}</h3>
                                                        <strong>{list.place}</strong>
                                                        <span>{list.desc.toString().split('\n').map((desc, index) => (
                                                            <React.Fragment key={index}>
                                                                {desc}<br/>
                                                            </React.Fragment>
                                                        ))}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                }
                            </Media>
                        </div>
                    </div>
                    <div className="area area__education">
                        <div className="area-inner">
                            <h1 className="area__title">Education</h1>
                            <ul className="area__info-list">{eduList.map((list, index) => {
                                return (
                                    <li key={index} className="info-list-item">
                                        <span>{list.date}</span>{list.place}
                                    </li>
                                )
                            })}
                            </ul>
                        </div>
                    </div>
                    <div className="area area__exhibition">
                        <div className="area-inner">
                            <h1 className="area__title">Exhibition</h1>
                            <div className="box__tab">
                                <ul>{exhibitionList.map((list, index) => {
                                    return (
                                        <li key={index} onClick={() => this.handleChange(index)}
                                            className={index === this.state.exhibitionIdx ? `tab__selected` : null}>
                                            <span>{list.country}</span>
                                        </li>
                                    )
                                })}
                                </ul>
                            </div>
                            <div className="box__contents">
                                <ul>
                                    {setExhibitionList()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </PageTemplate>
        )
    }
}

export default withTranslation('portfolio')(Portfolio);