import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Page } from '../pages/Page';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/oi">
          <Page/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};