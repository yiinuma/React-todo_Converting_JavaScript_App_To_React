import { Route, Routes } from 'react-router-dom';

import { Home } from '../routerTest/Home';
import { Page2 } from '../routerTest/Page2';
import { Parameter } from '../routerTest/Parameter';
import { Todo } from '../Todo';
import { page1Routes } from './Page1Routes';

export function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="todo" element={<Todo />} />
      <Route path="page1">
        {page1Routes.map((route) => (
          <Route key={route.path} exact={route.exact} path={route.path} element={route.children} />
        ))}
      </Route>
      <Route exact path="page2">
        <Route path="" element={<Page2 />} />
        <Route path=":id" element={<Parameter />} />
      </Route>
    </Routes>
  );
}
