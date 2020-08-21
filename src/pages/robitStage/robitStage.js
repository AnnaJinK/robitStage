import React from 'react';
import PageTemplate from 'components/PageTemplate';
import Visual from 'components/Visual';
import './robitStage.scss';
//import { withTranslation } from 'react-i18next';

// class robitStage extends Component

const robitStage = () => {
    const title = {
        title: "로빗무대",
        subtitle: "로빗을 프로그래밍해보자!",
        class: "robitStage",
      };
    return (
        <PageTemplate>
            <Visual {...title}/>
            <div className="area area_robitStage" >
                <div className="box__image">
                    <img src={`/images/contents/robitStage/robitStage_1.png`} alt=""/>
                </div>
                <div className="box__text">
                    <div className="prefix01">로보트리의</div>
                    <div className="title01">로빗 무대</div>
                </div>
                <div className="box__image">
                    <img src={`/images/contents/robitStage/robitStage_2.png`} alt=""/>
                </div>
                <br/><br/><br/>
                <div className="box_whatIs">
                    <div className="one">Physical computing<p>로얄 보드와 아두이노를 합하여 만든 피지컬 컴퓨팅 제품입니다.</p></div>
                    <div className="two">Movement<p>로빗 무대는 다양란 센서와 액추에이터가 포함되어있어<br/>로빗의 움직임을 프로그래밍으로 구현할 수 있습니다.</p></div> 
                    <div className="three">Diversity<p>기존의 다양한 로빗 제품군들과 결합하여<br/>프로그래밍과 기계구조의 움직임을 함께 학습할 수 있게 되었습니다.</p></div>     
                </div>
                <div className="box__text">
                    <h2>로보트리는 우리 생활속 사물들의 작동을 학습 할수 있는<br/>피지컬 컴퓨팅 교구를 개발합니다.</h2>
                </div>
                <div className="box_robit_stage">
                        <div className="one">로빗 무대</div>
                        <div className="two">
                            <b>제품명</b> : 로빗 무대<br/>
                            <b>모델 번호</b> : RB-S01<br/><br/>
                            <strong>다양한 센서와 엑추에이터가 탑재되어<br/>있는 로빗 무대는 로빗과의 결합을 통해<br/>프로그래밍으로 로빗을 제어할수 있어요.<br/><br/>로빗들은 무대에 올라서서 화려한 LED<br/>조명을 받으며 노래를 부르기도 하고 자신의<br/>멋진 움직임을 뽐낼 수 있답니다.<br/>프로그래밍으로 로빗의 무대를 멋지게<br/>꾸며보세요!</strong>
                        </div>    
                </div>
                <div className="box__text">
                    <div className="prefix02">로빗 무대</div>
                    <div className="title02">제품 특징</div>
                </div>
                <div className="color_Box">
                    <div className="table_row">
                        <div className="specBox1">저렴한<br/>가격</div>
                        <div className="txtBox1">하드웨어적 성능보다 학습에 중점을 둔 피지컬 컴퓨팅 교구 <br/>로얄 보드로 되어있어 금속으로 된 제품 대비 저렴해요.</div>
                    </div><br/>
                    <div className="table_row">
                        <div className="specBox2">다양한<br/>콘텐츠</div>
                        <div className="txtBox2">다양한 EASY ver. 로빗 제품들과 결합이 가능하고<br/>3가지의 센서와 3가지의 액추에이터로 제어할수 있습니다.</div>
                    </div><br/>
                    <div className="table_row">
                        <div className="specBox3">조립식<br/>키트</div>
                        <div className="txtBox3">아이들이 직접 풀이나 가위 없이 조립하여 회로 지식을<br/>학습하고 프로그래밍을 통한 컴퓨팅 사고력을 기르게 됩니다.</div>
                    </div>
                </div>
                <div className="box__text">
                    <div className="prefix03">로빗 무대</div>
                    <div className="title03">디테일</div>
                </div>

                <div className="box__text">
                    <div className="question01">하드웨어가 어떻게 제어되는지 본적 있나요?</div>
                    
                    <div className="double_quotes">
                        <p>로봇의 하드웨어는 소프트웨어가 제어를 하게 되는데요.<br/>
                        하드웨어가 사람의 몸이라고 하면 소프트웨어는 사람의 생각이라고 할 수 있습니다.<br/>
                        소프트웨어는 프로그램과 데이터로 나뉠수 있어요.<br/>
                        여기서 프로그램은 약속된 규칙대로 주어진 일을 순차적으로 수행해 나가는 역할을 합니다.<br/>
                        그럼 데이터는 뭘까요? 데이터는 감각이라고 할수 있겠네요.<br/>
                        사람은 시각, 청각, 촉각, 미각과 같은 기관들로부터 무수한 데이터를 동시에 받고 처리할 수 <br/>
                        있습니다.</p>
                    </div>
                    
                    <div className="question02">그럼 로봇에게도 이런 것들이 가능하게 만들수 있을까요?</div>
                    <div className="ansQ02">로빗 무대는 로빗을 통애 로봇 제어를 경험할수 있도록 하는 첫걸음입니다.</div>
                </div>
                <div className="robit_stage_detail">
                    <img src={`/images/contents/robitStage/robitStage_svg_5.svg`} alt=""/>
                </div><br/><br/>

                <div className="box__text">
                    <div className="prefix04"></div>
                    <div className="title04">제품구성</div>
                </div><br/><br/>
                <div className="robit_stage_detail">
                    <img src={`/images/contents/robitStage/robitStage_svg_6.svg`} alt=""/>
                </div>
                <div className="box__text">
                    <div className="composition">
                        키트 구성품
                        <div className="components">설명서, 로얄 보드 키트 [P1, P2, P3], <br/>
                        초음파 센서, 빛 감지 센서, 소리 감지 센서,<br/>
                        LED, 모터, 스피커, 모터 드라이브, 아두이노 나노,<br/> 브레드보드</div>
                        <div className="caution"><b>주의!</b> <br/>모터가 돌아갈때 기어부분에 손을 대지 마세요. 다칠 위험이 있습니다.<br/>
                        부품에 날카로운 부분이 있을수 있습니다. <br/>주의하여 조립해 주세요.</div>
                        조립 소요시간
                    </div>
                    
                </div>
                <div className="circles">
                    <div className="circle01">
                        <p>성인<br/><strong>1시간</strong></p>
                    </div>
                    <div className="circle02">
                        <p>초등학교<br/>고학년<br/><strong>2시간</strong></p>
                    </div>
                </div>
                
                
            </div>

            
            
        </PageTemplate>
    );
}
export default robitStage;
//export default withTranslation('robitStage')(robitStage);