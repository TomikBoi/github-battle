import React from 'react'
import ReactDOM from 'react-dom' //Allows render element to DOM
import './index.css'

//Component
//-State
//-Lifecycle
//-UI

// Define component, App is the name
class App extends React.Component {
  render() {
     return (
       <div>
         Hello Tom!
       </div>
     )
  }
}

ReactDOM.render(
  // React Element
  <App />, // When Use component
  // Where to render to the Element to
  document.getElementById('app')
)