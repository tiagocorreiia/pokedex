import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import Routes from './routes'

// import Cake from './components/Cake'
// import IceCream from './components/IceCream'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Routes />
      </div>
    </Provider>
  )
}

export default App
