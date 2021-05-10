import React from 'react';
import CreateUser from './components/create-user.component';
import UsersList from './components/users-list.component';
import { Switch, Route } from 'react-router';
import EditUser from './components/edit-user.component';

const App = () => {
  return(
    <Switch>
      <Route path='/' exact component={UsersList} />
      <Route path='/create' component={CreateUser} />
      <Route path='/edit/:id' component={EditUser} />
    </Switch>
  );
}

export default App;
