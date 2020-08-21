import React from 'react';
import { Media } from 'react-breakpoints';
import PageTemplate from 'components/PageTemplate';
import Visual from 'components/Visual';
import './Notice.scss';
import {useTranslation} from "react-i18next";

const Notice = () => {

  const title = {
    title: "Event",
    subtitle: "",
    class: "Event"
  };
  const eventNotice =[
    {
      image: "img_cur.jpg",
    }
  ];

  return (
    <PageTemplate>
      <Visual {...title} />
      {eventNotice.map((list, index) => (
      <div className="container-contents">
        <div className="area area__Noticeinfo">
        <div className="area-inner">
          <h1 className="area__title">수강생 모집공고</h1>
            <div className="box box__info">
              <span className="box__info-image">
                <img src={`/images/contents/${list.image}`} alt="타임메이커" />
              </span>
            </div>
          </div>
        </div>
      </div>
    ))}
    </PageTemplate>
  )
};

export default Notice
