import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Jsx02 from './jsx/Jsx02';
// import Jsx03 from './jsx/Jsx03';
// import Jsx04 from './jsx/Jsx04';
import Container from './props/Container';
// import Jsx05 from './jsx/Jsx05';
// import Jsx01 from './jsx/Jsx01';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Jsx01 /> */}
    {/* <Jsx02 /> */}
    {/* <Jsx03 /> */}
    {/* <Jsx04 /> */}
    {/* <Jsx05 /> */}
    <Container />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
