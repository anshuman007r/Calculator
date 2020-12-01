import React, { Component } from 'react'
import  Interface  from './component/Interface'
import { Provider } from 'react-redux'
import { store } from './storage/store'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Interface/>
      </Provider>
    )
  }
}
