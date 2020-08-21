import React, { Component, } from "react";
import GoogleAnalytics from "react-ga";

GoogleAnalytics.initialize('UA-137351356-1');

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    GoogleAnalytics.set({
      page,
      ...options,
    });
    GoogleAnalytics.pageview(page);
  };

  // eslint-disable-next-line
  const HOC = class extends Component {
    componentDidMount() {
      // eslint-disable-next-line
      const page = this.props.location.pathname + this.props.location.search;
      trackPage(page);
    }

    componentDidUpdate(prevProps) {
      const currentPage =
        prevProps.location.pathname + prevProps.location.search;
      const nextPage =
        this.props.location.pathname + this.props.location.search;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
};

export default withTracker;

var meta = document.createElement('meta');
    meta.setAttribute('name', 'naver-site-verification');
    meta.content = "75ed3a699ade4edb7b24609f7b788cf69589b807";
    document.getElementsByTagName('head')[0].appendChild(meta);