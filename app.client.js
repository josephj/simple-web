import 'react-hot-loader/patch';
import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from 'components/App';

render(
  <AppContainer>
    <App/>
  </AppContainer>
, document.getElementById('container'));

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App.js').default;

    render((
      <AppContainer>
        <NextApp/>
      </AppContainer>
    ), document.getElementById('container'));
  })
}

