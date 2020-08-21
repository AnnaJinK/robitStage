import React, {PureComponent} from 'react';
import {Media} from 'react-breakpoints';
import PageTemplate from 'components/PageTemplate';
import Visual from 'components/Visual';
import * as ToyAPI from 'lib/api/toy';
import './Papertoy.scss';
import {withTranslation} from "react-i18next";

class Papertoy extends PureComponent {
    constructor() {
        super();
        this.state = {
            toyList: [],
            toyDetailList: [],
            toyListIdx: 0,
            isShow: false,
            propIdx: 0,
            bigImgSrc: '',
            isVideo: false,
            videoId: '',
            player: null,
        }
    }

    componentDidMount() {
        this.getToyList();
    };

    getToyList = async () => {
        try {
            let toys = await ToyAPI.sortByIndex();

            this.setState({
                toyList: toys.data.map((toy, index) => {
                    return this.setToyList(toy, index)
                })
            });

            this.setState({
                toyDetailList: toys.data
            });
        } catch (e) {
            console.log(e);
        }
    };


    handleChange = (idx) => {
        this.setState({
            toyListIdx: idx,
            isShow: true,
            propIdx: idx
        });
    };

    handleClose = () => {
        this.setState({
            isShow: false,
            bigImgSrc: '',
            isVideo: false
        });
    };

    handleClickImage = (src) => {
        this.setState({
            bigImgSrc: src,
            isVideo: false
        });
    };

    handleClickVideo = () => {
        this.setState({
            bigImgSrc: '',
            isVideo: true
        })
    };

    setToyList = (toy, index) => {
        const hasImage1Data = toy.image1.length > 0;
        let imgPath1 = '/uploads/' + toy.image1;

        return (
            toy.active ?
                (
                    <li key={toy._id} className={`list-toy__item${index === this.state.toyListIdx ? ` selected` : ''}`}
                        onClick={() => this.handleChange(index)}>
                        <div className="box-toy">
                            <div className="box-toy__image">
                                {
                                    hasImage1Data ? <img src={imgPath1} alt={toy.name}/> : <span>No Image</span>
                                }
                            </div>
                            <div className="box-toy__job">
                                <span>{toy.job}</span>
                            </div>
                            <div className="box-toy__name">
                                <span>{toy.name}</span>
                            </div>
                            <div className="box-toy__desc">{toy.descsum}</div>
                        </div>
                    </li>
                )
                : null
        )
    };

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    render() {
        const {t} = this.props;

        const title = {
            title: t('banner.title'),
            subtitle: t('banner.subtitle'),
            class: "papertoy"
        };

        const {toyList, toyDetailList, isShow, bigImgSrc, propIdx, isVideo} = this.state;
        return (
            <PageTemplate>
                <Visual {...title} />
                <div className="container-contents">
                    <div className="area area__papertoy">
                        <div className="area-inner">
                            <ul className="list-toy">
                                {toyList}
                            </ul>
                            <ul className="list-toy-detail">
                                {isShow ?
                                    toyDetailList.map((toy, index) => {
                                        const hasImage1Data = toy.image1.length > 0;
                                        const hasImage2Data = toy.image2.length > 0;
                                        const hasImage3Data = toy.image3.length > 0;
                                        const hasVideoLinkValue = toy.linktovideo.length > 0;

                                        let imageStr1 = hasImage1Data ? toy.image1 : null;
                                        let imageStr2 = hasImage2Data ? toy.image2 : null;
                                        let imageStr3 = hasImage3Data ? toy.image3 : null;

                                        let imgPath1 = hasImage1Data ? '/uploads/' + imageStr1 : '';
                                        let imgPath2 = hasImage2Data ? '/uploads/' + imageStr2 : '';
                                        let imgPath3 = hasImage3Data ? '/uploads/' + imageStr3 : '';

                                        let setVideoLinkValue = toy.linktovideo.length > 0 ? toy.linktovideo : 'https://www.youtube.com/embed/axgOoFPcRws';
                                        let setStoreLinkValue = toy.linktostore.length > 0 ? toy.linktostore : 'https://smartstore.naver.com/robotry0';

                                        if (bigImgSrc === null) {
                                            this.setState({
                                                bigImgSrc: ''
                                            });
                                        }

                                        if (propIdx === index) {
                                            return (
                                                toy.active ?
                                                    <li key={toy._id}>
                                                        <div className="box-toy-detail">
                                                            <div className="box-toy-detail__container">
                                                                <div className="box-toy-detail__inner-container">
                                                                    <button className="btn__close"
                                                                            onClick={() => this.handleClose()}>닫기
                                                                    </button>
                                                                    <div className="box-toy-detail__image">
                                    <span className="frame__image">
                                      {
                                          isVideo ?
                                              <Media>
                                                  {
                                                      ({breakpoints, currentBreakpoint}) =>
                                                          breakpoints[currentBreakpoint] > breakpoints.tablet ?
                                                              <iframe width="590" height="590"
                                                                      src={toy.linktovideo.length > 0 ? toy.linktovideo : setVideoLinkValue}
                                                                      frameBorder="0"
                                                                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                                      allowFullScreen title={toy.name}/>
                                                              :
                                                              <iframe width="266" height="266"
                                                                      src={toy.linktovideo.length > 0 ? toy.linktovideo : setVideoLinkValue}
                                                                      frameBorder="0"
                                                                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                                      allowFullScreen title={toy.name}/>
                                                  }
                                              </Media>
                                              :
                                              hasImage1Data ? <img src={bigImgSrc.length > 0 ? bigImgSrc : imgPath1}
                                                                   alt={toy.name}/> : <span>No Image</span>
                                      }
                                    </span>
                                                                    </div>
                                                                    <Media>
                                                                        {
                                                                            ({breakpoints, currentBreakpoint}) =>
                                                                                breakpoints[currentBreakpoint] > breakpoints.tablet ?
                                                                                    null :
                                                                                    <div className="box-container">
                                                                                        <div className="box__thumnails">
                                          <span className="frame__image">
                                            {
                                                hasImage1Data ? <img src={imgPath1} alt={toy.name}
                                                                     onClick={() => this.handleClickImage(imgPath1)}/> :
                                                    <span>No Image</span>
                                            }
                                          </span>
                                                                                        </div>
                                                                                        <div className="box__thumnails">
                                          <span className="frame__image">
                                            {
                                                hasImage2Data ? <img src={imgPath2} alt={toy.name}
                                                                     onClick={() => this.handleClickImage(imgPath2)}/> :
                                                    <span>No Image</span>
                                            }
                                          </span>
                                                                                        </div>
                                                                                        <div className="box__thumnails">
                                          <span className="frame__image">
                                            {
                                                hasImage3Data ? <img src={imgPath3} alt={toy.name}
                                                                     onClick={() => this.handleClickImage(imgPath3)}/> :
                                                    <span>No Image</span>
                                            }
                                          </span>
                                                                                        </div>
                                                                                        <div className="box__thumnails">
                                          <span className="frame__image">
                                            {
                                                hasVideoLinkValue ?
                                                    <span
                                                        className="frame__video"
                                                        onClick={() => this.handleClickVideo()}>
                                                   {hasImage1Data ?
                                                       <span className="layer__video">
                                                      <img src={imgPath1} alt={toy.name}/>
                                                    </span>
                                                       : <span>Video</span>}
                                                </span>
                                                    :
                                                    <span className="frame__video">
                                                <span>No Video</span>
                                              </span>
                                            }
                                          </span>
                                                                                        </div>
                                                                                    </div>
                                                                        }
                                                                    </Media>
                                                                    <div className="box-toy-detail__contents">
                                                                        <div className="box__title">
                                                                            <span
                                                                                className="title__job">[{toy.job}]</span>
                                                                            <strong
                                                                                className="title__name">{toy.name}</strong>
                                                                        </div>
                                                                        <div className="box__desc">
                                                                            <div className="frame__text">
                                                                                <span
                                                                                    className="toy__descsum">{toy.descsum}</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="box__toydesc">
                                                                            <strong
                                                                                className="title__toydesc">Character</strong>
                                                                            <div className="frame__text">
                                                                                {/* {toy.toydesc} */}
                                                                                {toy.toydesc.toString().split('\n').map((desc, index) => {
                                                                                    return (
                                                                                        <React.Fragment key={index}>
                                                                                            {desc}<br/>
                                                                                        </React.Fragment>
                                                                                    )
                                                                                })}
                                                                            </div>
                                                                        </div>
                                                                        <div className="box__mechanism">
                                                                            <strong
                                                                                className="title__mechanism">Mechanism</strong>
                                                                            <div className="frame__text">
                                                                                {toy.mechanism}
                                                                            </div>
                                                                        </div>
                                                                        <Media>
                                                                            {
                                                                                ({breakpoints, currentBreakpoint}) =>
                                                                                    breakpoints[currentBreakpoint] > breakpoints.tablet ?
                                                                                        <div className="box-container">
                                                                                            <div
                                                                                                className="box__thumnails">
                                            <span className="frame__image">
                                              {
                                                  hasImage1Data ? <img src={imgPath1} alt={toy.name}
                                                                       onClick={() => this.handleClickImage(imgPath1)}/> :
                                                      <span>No Image</span>
                                              }
                                            </span>
                                                                                            </div>
                                                                                            <div
                                                                                                className="box__thumnails">
                                            <span className="frame__image">
                                              {
                                                  hasImage2Data ? <img src={imgPath2} alt={toy.name}
                                                                       onClick={() => this.handleClickImage(imgPath2)}/> :
                                                      <span>No Image</span>
                                              }
                                            </span>
                                                                                            </div>
                                                                                            <div
                                                                                                className="box__thumnails">
                                            <span className="frame__image">
                                              {
                                                  hasImage3Data ? <img src={imgPath3} alt={toy.name}
                                                                       onClick={() => this.handleClickImage(imgPath3)}/> :
                                                      <span>No Image</span>
                                              }
                                            </span>
                                                                                            </div>
                                                                                            <div
                                                                                                className="box__thumnails">
                                                                                                {
                                                                                                    hasVideoLinkValue ?
                                                                                                        <span
                                                                                                            className="frame__video"
                                                                                                            onClick={() => this.handleClickVideo()}>
                                                   {hasImage1Data ?
                                                       <span className="layer__video">
                                                      <img src={imgPath1} alt={toy.name}/>
                                                    </span>
                                                       : <span>Video</span>}
                                                </span>
                                                                                                        :
                                                                                                        <span
                                                                                                            className="frame__video">
                                                <span>No Video</span>
                                              </span>
                                                                                                }
                                                                                            </div>
                                                                                        </div>
                                                                                        : null
                                                                            }
                                                                        </Media>
                                                                        <div className="box__button">
                                                                            <a href={setStoreLinkValue}
                                                                               className="btn__goToStore"
                                                                               target="_blank"
                                                                               rel="noopener noreferrer">
                                                                                <strong>네이버 스토어에서 구매하기</strong>
                                                                                <span>* 네이버 스토어로 이동합니다</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    : null
                                            )
                                        }
                                        return null;
                                    })
                                    : null
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </PageTemplate>
        );
    }
}

export default withTranslation('toy')(Papertoy);