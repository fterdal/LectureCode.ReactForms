/* eslint react/prefer-stateless-function:0 */
import React from 'react'
import { render } from 'react-dom'

class BasicForm extends React.Component {
  render() {
    return (
    <form>
        <input type="text" name="email" />
        <button type="submit" />
    </form>)
  }
}

const App = () => (
  <div>
    <BasicForm />
  </div>
)

render(
  <App />,
  document.getElementById('app')
)
