import React from 'react'
import { Provider } from 'react-redux'
import Navbar from './components/navbar/Navbar'
import SearchContainer from './containers/SearchContainer'
import store from './store'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <SearchContainer />
    </Provider>
  )
}

export default App