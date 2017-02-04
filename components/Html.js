import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom/server';
import Helmet from 'react-helmet';

export default class Html extends Component {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.node,
  };

  render() {
    const {assets, component} = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';
    const head = Helmet.rewind();

    return (
      <html>
        <head>
          {head.base.toComponent()}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </head>
        <body>
          <div id="container" dangerouslySetInnerHTML={{__html: content}}/>
          <script src={assets.javascript.app}/>
        </body>
      </html>
    );
  }
}
