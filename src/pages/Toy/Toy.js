import React from 'react';
import PageTemplate from 'components/PageTemplate';
import Visual from 'components/Visual';
import './Toy.scss';
import {useTranslation} from "react-i18next";

const Toy = () => {
  const {t} = useTranslation('toy');

  const toyList1 = [
    {
      title: t('toy.magi.title'),
      name: t('toy.magi.name'),
      model: t('toy.magi.model'),
      extra: t('toy.magi.extra'),
      desc: t('toy.magi.desc'),
      image: "마기",
      link: 'https://smartstore.naver.com/robotry0/products/3454077585'
    },
    {
      title: t('toy.assi.title'),
      name: t('toy.assi.name'),
      model: t('toy.assi.model'),
      desc: t('toy.assi.desc'),
      image: "아씨",
      link: 'https://smartstore.naver.com/robotry0/products/4937864107'
    },
    {
      title: t('toy.poli.title'),
      name: t('toy.poli.name'),
      model: t('toy.poli.model'),
      desc: t('toy.poli.desc'),
      image: "포리",
      link: 'https://smartstore.naver.com/robotry0/products/3454185103'
    }
  ]
  const toyList2 = [
    {
      title: t('toy.poli.title'),
      name: t('toy.poli_e.name'),
      model: t('toy.poli_e.model'),
      desc: t('toy.poli.desc'),
      image: "이지포리",
      link: 'https://smartstore.naver.com/robotry0/products/4935991231'
    },
    {
      title: t('toy.arr.title'),
      name: t('toy.arr.name'),
      model: t('toy.arr.model'),
      desc: t('toy.arr.desc'),
      image: "아르",
      link: 'https://smartstore.naver.com/robotry0/products/3454299359'
    },
    {
      title: t('toy.chefu.title'),
      name: t('toy.chefu.name'),
      model: t('toy.chefu.model'),
      extra: t('toy.chefu.extra'),
      desc: t('toy.chefu.desc'),
      image: "쉐푸",
      link: 'https://smartstore.naver.com/robotry0/products/3454371491'
    }
  ]

  const toyList3 = [
    {
      title: t('toy.prin.title'),
      name: t('toy.prin.name'),
      model: t('toy.prin.model'),
      extra: t('toy.prin.extra'),
      desc: t('toy.prin.desc'),
      image: "프린",
      link: 'https://smartstore.naver.com/robotry0/products/3454413893'
    },
    {
      title: t('toy.meta.title'),
      name: t('toy.meta.name'),
      model: t('toy.meta.model'),
      extra: t('toy.meta.extra'),
      desc: t('toy.meta.desc'),
      image: "메타",
      link: 'https://smartstore.naver.com/robotry0/products/3454264636'
    },
    {
      title: t('toy.domi.title'),
      name: t('toy.domi.name'),
      model: t('toy.domi.model'),
      extra: t('toy.domi.extra'),
      desc: t('toy.domi.desc'),
      image: "도미",
      link: 'https://smartstore.naver.com/robotry0/products/4523217182'
    },
  ]

  const toyList4 = [
    {
      title: t('toy.sake.title'),
      name: t('toy.sake.name'),
      model: t('toy.sake.model'),
      desc: t('toy.sake.desc'),
      image: "사케",
      link: 'https://smartstore.naver.com/robotry0/products/4468940912'
    },
    {
      title: t('toy.tama.title'),
      name: t('toy.tama.name'),
      model: t('toy.tama.model'),
      desc: t('toy.tama.desc'),
      image: "타마",
      link: 'https://smartstore.naver.com/robotry0/products/4467299075'
    }
  ]

  const title = {
    title: t('banner.title'),
    subtitle: t('banner.subtitle'),
    class: "PaperToy"
  };
  return (
    <PageTemplate>
    <Visual {...title} />
    <div className="area area__papertoy">
      <div className="area-inner">
      <div className="box box__info">
        <h1>{t('banner.title')}</h1>
        </div>

          <ul>
            {toyList1.map((list, index) => {
              return (
                <li key={index}>
                  <a className="box" href={list.link} target="_blank" rel="noopener noreferrer">
                  <div className="wrap">
                  <div className="scale">
                  <span className="box__image">
                    <img src={`/images/contents/Robits/${list.image}.png`}  alt={list.title} />
                  </span>
                  </div>
                  <div className="wrap_text"> {t('toy.buy')}</div>
                  </div>
                  </a>
                  <span className="text">
                  <h3>{list.title.toString().split('\n').map((title, index) => (
                  <React.Fragment key={index}>{title}<br/></React.Fragment>))}</h3>
                  <strong>{list.name}</strong>
                  <strong>{list.model}</strong>
                  <strong>{list.extra}</strong>
                  <span>{list.desc.toString().split('\n').map((desc, index) => (
                  <React.Fragment key={index}>{desc}<br/></React.Fragment>))}</span>
                </span>
              </li>
             )
           })}
         </ul>

         <ul>
           {toyList2.map((list, index) => {
             return (
               <li key={index}>
               <a className="box" href={list.link} target="_blank" rel="noopener noreferrer">
               <div className="wrap">
               <div className="scale">
               <span className="box__image">
                 <img src={`/images/contents/Robits/${list.image}.png`}  alt={list.title} />
               </span>
               </div>
               <div className="wrap_text">{t('toy.buy')}</div>
               </div>
               </a>
                 <span className="text">
                 <h3>{list.title.toString().split('\n').map((title, index) => (
                 <React.Fragment key={index}>{title}<br/></React.Fragment>))}</h3>
                 <strong>{list.name}</strong>
                 <strong>{list.model}</strong>
                 <strong>{list.extra}</strong>
                 <span>{list.desc.toString().split('\n').map((desc, index) => (
                 <React.Fragment key={index}>{desc}<br/></React.Fragment>))}</span>
               </span>
             </li>
            )
          })}
        </ul>

        <ul>
          {toyList3.map((list, index) => {
            return (
              <li key={index}>
              <a className="box" href={list.link} target="_blank" rel="noopener noreferrer">
              <div className="wrap">
              <div className="scale">
              <span className="box__image">
                <img src={`/images/contents/Robits/${list.image}.png`}  alt={list.title} />
              </span>
              </div>
              <div className="wrap_text">{t('toy.buy')}</div>
              </div>
              </a>
                <span className="text">
                <h3>{list.title.toString().split('\n').map((title, index) => (
                <React.Fragment key={index}>{title}<br/></React.Fragment>))}</h3>
                <strong>{list.name}</strong>
                <strong>{list.model}</strong>
                <strong>{list.extra}</strong>
                <span>{list.desc.toString().split('\n').map((desc, index) => (
                <React.Fragment key={index}>{desc}<br/></React.Fragment>))}</span>
              </span>
            </li>
           )
         })}
       </ul>

       <ul>
         {toyList4.map((list, index) => {
           return (
             <li key={index}>
             <a className="box" href={list.link} target="_blank" rel="noopener noreferrer">
             <div className="wrap">
             <div className="scale">
             <span className="box__image">
               <img src={`/images/contents/Robits/${list.image}.png`}  alt={list.title} />
             </span>
             </div>
             <div className="wrap_text">{t('toy.buy')}</div>
             </div>
             </a>
               <span className="text">
               <h3>{list.title.toString().split('\n').map((title, index) => (
               <React.Fragment key={index}>{title}<br/></React.Fragment>))}</h3>
               <strong>{list.name}</strong>
               <strong>{list.model}</strong>
               <strong>{list.extra}</strong>
               <span>{list.desc.toString().split('\n').map((desc, index) => (
               <React.Fragment key={index}>{desc}<br/></React.Fragment>))}</span>
             </span>
           </li>
          )
        })}
      </ul>

       </div>
     </div>
   </PageTemplate>
  )
}
export default Toy
