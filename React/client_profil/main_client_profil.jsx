import { createRoot } from 'react-dom/client';
import App from './App';
import Home from '../../React/src/Home';
import './index.css';

createRoot(document.getElementById('root')).render(
  <App>
    <Home />
  </App>
);
