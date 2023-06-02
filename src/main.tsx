import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App.tsx';
import './index.css';

if (window.location.port) {
  if (location.hostname === 'localhost')
    document.title = 'localhost | Cosmetics Express';
  else if (
    location.hostname === '192.168.1.222' ||
    location.hostname === '192.168.128.1'
  )
    document.title = 'local network | Cosmetics Express';
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
