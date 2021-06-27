import { cleanup, render } from '@testing-library/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { AdminRoom } from './pages/AdminRoom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';

describe('App', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/rooms/new" component={NewRoom}></Route>
            <Route path="/rooms/:id" component={Room}></Route>
            <Route path="/admin/rooms/:id" component={AdminRoom}></Route>
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    );

    expect(baseElement).toBeTruthy();
  });
});