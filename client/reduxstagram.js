import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import store from './store';
// import css
import css from './styles/style.styl';

// import react router deps

const router = (
    <Provider store={store}>
      <App/>
    </Provider>
)

render(router , document.getElementById('root'));