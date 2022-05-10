import React from 'react'
import ReactDOM from 'react-dom'

import '@styles/index.scss'

const App = () => {
  return <div>hello world</div>
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode><App /></React.StrictMode>
);
