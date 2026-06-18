import { createRoot } from 'react-dom/client';
import App from '../src/App.jsx';
import Home from '../src/Home.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <App>
    <Home />
  </App>
);
