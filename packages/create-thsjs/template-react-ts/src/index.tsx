import React from 'react'
import ReactDOM from 'react-dom/client'

import 'styles/index.scss'

const App = () => {
  return <div>hello world</div>
}

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode><App /></React.StrictMode>
);
