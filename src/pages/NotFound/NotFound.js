import React from 'react';
import PageTemplate from 'components/PageTemplate';
import './NotFound.scss';

const NotFound = () => {
  return (
    <PageTemplate>
      <div className="container-contents__boo">
        <div className="area__boo">
          <div className="boo">
            <div className="face"></div>
          </div>
          <div className="shadow"></div>
          <h1>Whoops!</h1>
          <p>
            We couldn't find the page you
            <br />
            were looking for.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}

export default NotFound;