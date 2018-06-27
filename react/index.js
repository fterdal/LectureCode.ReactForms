/* eslint react/prefer-stateless-function:0 */
import React from 'react'
import { render } from 'react-dom'

class BasicForm extends React.Component {
  render() {
    return (
    <form>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" />
        <button type="submit">Submit</button>
    </form>)
  }
}

const App = () => (
  <div className="container">
    <BasicForm />
  </div>
)

render(
  <App />,
  document.getElementById('app')
)
