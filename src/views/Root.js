import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import Navigation from 'components/organisms/Navigation/Navigation';
import Dashboard from './Dashboard';
import AddUser from './AddUser';
import UsersProvider from 'providers/UsersProvider';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UsersProvider>
        <Router>
          <Wrapper>
            <Navigation />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add-user" element={<AddUser />} />
            </Routes>
          </Wrapper>
        </Router>
      </UsersProvider>
    </ThemeProvider>
  );
};

export default Root;
