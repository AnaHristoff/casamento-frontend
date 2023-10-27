import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/App'

const Strict = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))