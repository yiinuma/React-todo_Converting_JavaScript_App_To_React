import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import './style.css';

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
