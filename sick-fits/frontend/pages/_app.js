/* eslint-disable react/jsx-props-no-spreading */
import App from 'next/app';
import Page from '../components/Page';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    );
  }
}
export default MyApp;
