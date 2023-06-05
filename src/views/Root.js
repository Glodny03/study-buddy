import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { users as usersData } from 'data/users';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import Navigation from 'components/organisms/Navigation/Navigation';
import Dashboard from './Dashboard';
import AddUser from './AddUser';

const googleFont = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };
    setUsers([newUser, ...users]);

    setFormValues(initialFormState);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Helmet>
          <link rel="stylesheet" href={googleFont} />
        </Helmet>
        <GlobalStyle />
        <Navigation />
        <Wrapper>
          <Switch>
            <Route path="/add-user">
              <AddUser formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange} />
            </Route>
            <Route path="/">
              <Dashboard deleteUser={deleteUser} users={users} />
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
