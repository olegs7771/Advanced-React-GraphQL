/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

// Styles

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0,0,0,0.09)',
};

const StylePage = styled.div`
  background: white;
  color: black;
`;

const Inner = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  background: ${(props) => props.theme.red};
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  font-size:10px;
}
*,*:before,*:after{
  box-sizing:inherit;

}
body{
  padding:0;
  margin: 0;
  font-size: 1.5rem;
  line-height: 2;
}

`;

export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StylePage>
          <GlobalStyle />
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StylePage>
      </ThemeProvider>
    );
  }
}
