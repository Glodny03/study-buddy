import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate, // Importuj Navigate
} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import Dashboard from './Dashboard';
import AddUser from './AddUser';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route
                path="/"
                element={<Outlet />}
              >
                <Route path="/add-user" element={<AddUser />} />
                <Route
                  path="/"
                  element={<Navigate to="/group" />}
                />
              </Route>
              <Route path="/group" element={<Dashboard />} />
            </Routes>
          </Wrapper>
        </MainTemplate>
      </Router>
    </ThemeProvider>
  );
};

export default Root;
