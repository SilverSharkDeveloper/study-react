import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Jsx03 from './jsx/Jsx03';
import Jsx05 from './jsx/Jsx05';
import Jsx04 from './jsx/Jsx04';
import Contaioner from './props/Contaioner';
import Food from './map/basic/Food';
import UserContainer from './map/expert/UserContainer';
import Sounds from './state/basic/Sounds';
import Name from './ref/Name'
import Color from './state/basic/Color';
import Category from './clone-coding/Category';
import Check from './ref/Check';
import FoodContainer from './state/expert/FoodContainer';
import AnimalContainer from './context/task/AnimalContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import FontSize from './redux/task/components/FontSize';
import font from './redux/task/modules/font';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import App from './route/App';
import route from './route/modules/route';



const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(route, devToolsEnhancer());

root.render(
  // <React.StrictMode>
  <>
    {/* <App /> */}
    {/* <Jsx01></Jsx01> */}
    {/* <Jsx02></Jsx02> */}
    {/* <Jsx03></Jsx03> */}
    {/* <Jsx04></Jsx04> */}
    {/* <Jsx05></Jsx05> */}
    {/* <Contaioner></Contaioner> */}
    {/* <UserContainer/> */}
    {/* <Sounds></Sounds> */}
    {/* <Name></Name> */}
    {/* <Color></Color> */}
    {/* <Category/> */}
    {/* <Name></Name> */}
    {/* <Check></Check> */}
    {/* <FoodContainer></FoodContainer> */}
    {/* <AnimalContainer></AnimalContainer> */}
    {/* <Provider store={store}> */}
    {/* <App></App> */}
    {/* </Provider> */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
