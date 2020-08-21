import React, { Component } from 'react';
import { Media } from 'react-breakpoints';
import PageTemplate from 'components/PageTemplate';
import Visual from 'components/Visual';
import Slider from 'lib/Slider';
import './Voucher.scss';

class Voucher extends Component {
  state = {
    exhibitionIdx: 0
  }

  handleChange = (idx) => {
    this.setState({
      exhibitionIdx: idx
    })
  }

  render () {

    let voucherList = [
      {
        title: "Prin, Domi, Meta",
        place: "If you purchase 3 Angel series(Prin, Domi, Meta), you can get 10% off!",
        desc: "",
        image: "img_voucher_3_angel.png"
      },
      {
        title: "Sake, Tama",
        place: "If you purchase 2 Sushi series(Sake, Tama), you can get 10% off!",
        desc: "",
        image: "img_voucher_sake_tama.png"
      },
      {
        title: "Poli, Arr",
        place: "If you purchase 2 character(Poli-Police, Arr-Ditective), you can get 10% off!",
        desc: "",
        image: "img_voucher_poli_arr.png"
      }
    ]
    

  
  
    const title = {
      title: "voucher",
      subtitle: "Screenshot the voucher!",
      class: "voucher"
    };

    return (
      <PageTemplate>
        <Visual {...title} />
        <div className="container-contents container-contents__portfolio">
          <div className="area area__voucher">
            <div className="area-inner">
          <h1 className="area__title">Voucher</h1>
          <div className="box box__info">
                <h1>Screenshot the voucher!</h1>
                <p>If you show this voucher to us, there will be a 10% discount <br/>All three can be used at once<br/>It can only be used during the EduTech exhibition (11/5-6)</p>
                </div>
              <Media>
                {
                  ({ breakpoints, currentBreakpoint }) => 
                    breakpoints[currentBreakpoint] > breakpoints.tablet ?
                    <Slider width="960px" showStatus={false} showThumbs={false} showArrows={true} showIndicators={false} autoPlay={false} interval={5000} infiniteLoop>
                      {voucherList.map((list, index) => (
                        <div key={index} className="box__slider-item">
                          <div className="box__text">
                            <span className="status"><em>{index + 1}</em>/{voucherList.length}</span>
                            <h3>{list.title}<br/></h3>
                            <div className="box__image">
                            <span className="frame__image">
                              <img src={`/images/contents/${list.image}`} alt={list.title} />
                            </span>
                          </div>                          
                            <strong>{list.place}</strong>
                            <span>
                              {list.desc.toString().split('\n').map((desc, index) => (
                                <React.Fragment key={index}>
                                  {desc}<br/>
                                </React.Fragment>
                              ))}
                            </span>
                          </div>
                        </div>
                      ))}
                    </Slider>
                    :
                    <Slider showStatus={false} showThumbs={false} showArrows={false} showIndicators={true} autoPlay={false} interval={5000} infiniteLoop>
                      {voucherList.map((list, index) => (
                        <div key={index} className="box__slider-item">
                          <div className="box__image">
                            <span className="frame__image">
                              <img src={`/images/contents/${list.image}`} alt={list.title} />
                            </span>
                          </div>
                          <div className="box__text">
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
                        </div>
                      ))}
                    </Slider>
                }
              </Media>
            </div>
          </div>
        </div>
      </PageTemplate>
    )
  }
}

export default Voucher;