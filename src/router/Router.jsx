import { Route, Routes } from 'react-router-dom';

import { Home } from '../Home';
import { Todo } from '../Todo';

export function Router() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
}
