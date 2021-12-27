import React, { FunctionComponent } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { MainLayout } from '../../modules/layout/MainLayout';
import { history, RoutePath } from '../../utils/history-provider';
import { Demo1 } from '../demo1';
import { Demo2 } from '../demo2';
import { NotFound } from './NotFound';

export interface RoutesProps { }

export const Routes: FunctionComponent<RoutesProps> = (props) => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          path={RoutePath.Demo1}
          component={WithMainLayout(Demo1)}
        />
        <Route
          path={RoutePath.Demo2}
          component={WithMainLayout(Demo2)}
        />
        <Route path="*" component={WithMainLayout(NotFound)} />
      </Switch>
    </Router>
  );
};

const WithMainLayout =
  (Component: FunctionComponent) =>
    ({ ...props }) => {
      return (
        <MainLayout>
          <Component {...props} />
        </MainLayout>
      );
    };
