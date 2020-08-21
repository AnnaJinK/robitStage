import React from 'react';
import PageTemplate from 'components/PageTemplate';
import {NavLink} from 'react-router-dom';
import './Products.scss';
//import {useTranslation} from "react-i18next";

const Products = () => {
  //const {t} = useTranslation('toy');

  return (
    <PageTemplate>
      
        <div className="area__vision">
          <div className="box box__info">
            <h1>제품 소개</h1>
          </div>
        </div>
        <div className="area__product">
          <div className="color_Box">
            <div className="table_row">
              
            <div className="specBox4">
                <NavLink className="box" activeClassName="active"  to="/Toy">
                  <div className="wrap">
                    <div className="scale">
                      <div className="box__image">
                        <img src={`/images/contents/products/자산 4.png`} alt=""/>
                      </div>
                    </div>
                    <div className="wrap_text">움직이는 페이퍼토이 <br/> 보러가기</div>
                  </div>
                </NavLink> 
              </div>
              
              <div className="specBox3">
              <NavLink className="box" activeClassName="active"  to="/Book">
                  <div className="wrap">
                    <div className="scale">
                      <div className="box__image">
                        <img src={`/images/contents/products/3권.svg`} alt=""/>
                      </div>
                    </div>
                    <div className="wrap_text">타임메이커 보러가기</div>
                  </div>
                </NavLink>
              </div>

              <div className="specBox5">
              <NavLink className="box" activeClassName="active"  to="/robitStage">
                  <div className="wrap">
                    <div className="scale">
                      <div className="box__image">
                        <img src={`/images/contents/products/자산 5.png`} alt=""/>
                      </div>
                    </div>
                    <div className="wrap_text">로빗무대 보러가기</div>
                  </div>
                </NavLink>
              </div>
          
            </div>
          </div>
        </div>

        
   </PageTemplate>
  )
}
export default Products
