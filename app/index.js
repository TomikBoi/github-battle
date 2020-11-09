import React from 'react'
import ReactDOM from 'react-dom' //Allows render element to DOM
import Popular from './components/Popular'
import './index.css'
import Battle from './components/Battle'

//Component
//-State
//-Lifecycle
//-UI

// function isAuthed() {
//   return true
// }
// function isNew() {
//   return true
// }

// function showWarning() {
//   return true
// }

// Define component, App is the name
export default class App extends React.Component {
  render() {

    return (
      <div className='container'>
        <Battle />
      </div>
    )




    // const authed = isAuthed()
    // const firstLogin = isNew()

    // return (
    //   <div>
    //     <h1>👀</h1>
    //     {showWarning() === true
    //       ? <h3>🚨</h3>
    //       : null}
    //   </div>
    // )

    // if(firstLogin === true) {
    //   return <h1>Welcome!</h1>
    // } else if (authed === true) {
    //   return <h1>Welcome back!</h1>
    // } else {
    //   return <h1>Loign to see your dashboard</h1>
    // }

    // const name = 'Tom'

    //  return (
    //    <React.Fragment>
    //       <h1>Hello, {name}</h1>
    //       <p>Today is {new Date().toLocaleString()}</p>
    //       <p>What is 2 + 2? {2 + 2}</p>
    //    </React.Fragment>
    //  )

  }
}

ReactDOM.render(
  // React Element
  <App />, // When Use component
  // Where to render to the Element to
  document.getElementById('app')
)