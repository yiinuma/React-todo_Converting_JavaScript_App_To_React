import { Page1 } from '../routerTest/Page1';
import { Page1DetailA } from '../routerTest/Page1DetailA';
import { Page1DetailB } from '../routerTest/Page1DetailB';
import { Page404 } from '../routerTest/Page404';

export const page1Routes = [
  {
    path: '',
    exact: true,
    children: <Page1 />,
  },
  {
    path: 'detailA',
    exact: false,
    children: <Page1DetailA />,
  },
  {
    path: 'detailB',
    exact: false,
    children: <Page1DetailB />,
  },
  {
    path: '*',
    exact: false,
    children: <Page404 />,
  },
];
