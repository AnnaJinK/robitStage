import React from 'react';
import { withBreakpoints } from 'react-breakpoints';
import './Visual.scss';

const Visual = (props) => {
  const { breakpoints, currentBreakpoint, ...title } = props

  return (
    <div className={`visual ${title.class}`}>
      {
        breakpoints[currentBreakpoint] > breakpoints.tablet ?
        <>
          <h1><div className = "visualTitle" dangerouslySetInnerHTML={{__html: title.title}}/></h1>
          <h2><div className = "visualSubtitle" dangerouslySetInnerHTML={{__html: title.subtitle}}/></h2><br/>
        </>
        :
        <>
          <h1>
            {
              title.title.toString().split('<br/>').map((title, index) => (
                <React.Fragment key={index}>
                {title}<br/>
                </React.Fragment>
              ))
            }
          </h1>
          <h2>
            {
              title.subtitle.toString().split('<br/>').map((subTitle, index) => (
                <React.Fragment key={index}>
                {subTitle}<br/>
                </React.Fragment>
              ))
            }
          </h2>
        </>
      }
    </div>
  );
};

Visual.defaultProps = {
  title: 'Robotry',
  subtitle: 'Robotry'
};

export default withBreakpoints(Visual);