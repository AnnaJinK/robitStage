import React from 'react';
import PageTemplate from 'components/PageTemplate';
import Visual from 'components/Visual';
import './Book.scss';
import {useTranslation} from "react-i18next";

const Book = () => {
const { t } = useTranslation('book');


  const title = {
    title: "TIME MAKER",
    subtitle: t('page.greeting.subtitle'),
    class: "book"
  };

  return (
    <PageTemplate>
    <Visual {...title} />
    <div className="area__vision">
      <div className="box__info">
        <h2>Time Maker</h2>
      </div>
      <div className="area__book">
        <div className="color_Box">
          <div className="table_row">
            <div className="specBox1">
            <a className="box" href="https://smartstore.naver.com/robotry0/products/4791559058" target="_blank" rel="noopener noreferrer">
                  <div className="wrap">
                    <div className="scale">
                      <div className="box__image">
                        <img src={`/images/contents/products/1권.svg`} alt=""/>
                      </div>
                    </div>
                    <div className="wrap_text">제품 보러가기</div>
                  </div>
                </a> 
            </div>

            <div className="specBox2">
            <a className="box" href="https://smartstore.naver.com/robotry0/products/4939467341" target="_blank" rel="noopener noreferrer">
                  <div className="wrap">
                    <div className="scale">
                      <div className="box__image">
                        <img src={`/images/contents/products/2권.svg`} alt=""/>
                      </div>
                    </div>
                    <div className="wrap_text">제품 보러가기</div>
                  </div>
                </a> 
            </div>

            <div className="specBox3">
            <a className="box" href="https://smartstore.naver.com/robotry0/products/4940834691" target="_blank" rel="noopener noreferrer">
                  <div className="wrap">
                    <div className="scale">
                      <div className="box__image">
                        <img src={`/images/contents/products/3권.svg`} alt=""/>
                      </div>
                    </div>
                    <div className="wrap_text">제품 보러가기</div>
                  </div>
                </a> 
            </div>
          </div>

          <div className="table_row">
              
              <div className="txtBox1">
                도서 + 로빗 세트</div>
              
              <div className="txtBox2">

                도서 + 로빗 세트</div>
              
              <div className="txtBox3">

                도서 + 로빗 세트</div>
            </div>

        </div>
      </div>
    </div>
    </PageTemplate>
  )
};

export default Book