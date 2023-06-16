import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App.tsx';
import './index.css';

const css = (from: string, to: string) =>
  `background: linear-gradient(to right, ${from}, ${to});
  color: white; 
  border-radius: 2em;
  padding: 0.5em;
  font-size: 6em; 
  font-weight: bold;
  font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";`;
console.log(`%cCosmetics Express`, css('#e6c462', '#876628'));
console.log(`%cנעם בכר`, css('steelblue', 'lightcoral'));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
