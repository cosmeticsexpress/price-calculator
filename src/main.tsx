import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App.tsx';
import './index.css';

if (window.location.port) {
  if (location.hostname === 'localhost')
    document.title = 'localhost | Cosmetics Express';
  else document.title = 'local network | Cosmetics Express';
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
