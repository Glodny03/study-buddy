import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import Navigation from 'components/organisms/Navigation/Navigation';
import Dashboard from './Dashboard';
import AddUser from './AddUser';
import UsersProvider from 'providers/UsersProvider';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navigation />
        <UsersProvider>
          <Wrapper>
            <Switch>
              <Route path="/add-user">
                <AddUser />
              </Route>
              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
          </Wrapper>
        </UsersProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
