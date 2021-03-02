import React, { Component } from 'react';
import DateExample from './components/date-example';
import { Layout } from './components/Layout';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <DateExample />
      </Layout>
    );
  }
}
