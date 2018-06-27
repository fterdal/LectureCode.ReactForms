/* eslint react/prefer-stateless-function:0 react/no-multi-comp:0 */
import React from 'react'
import { render } from 'react-dom'

// This form is the default HTML form.
class BasicForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" />
          <button type="submit">Submit</button>
        </form>
        <iframe src="https://giphy.com/embed/4hdWKFCCKcsbC" frameBorder="0" />
      </div>
    )
  }
}

class StatefulForm extends React.Component {
  constructor() {
    super()
    this.state = { email: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ email: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    console.log('form submitted with data:', this.state)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
        <iframe src="https://giphy.com/embed/3oEduY2IBr0s8AdrIk" frameBorder="0" />
      </div>
    )
  }
}

class ControlledForm extends React.Component {
  constructor() {
    super()
    this.state = { email: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ email: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    console.log('form submitted with data:', this.state)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
          <button type="submit">Submit</button>
        </form>
        <img src="/drake-does-react.png" />
      </div>
    )
  }
}

const App = () => (
  <div className="container">
    {/* <BasicForm /> */}
    <StatefulForm />
    {/* <ControlledForm /> */}
  </div>
)

render(
  <App />,
  document.getElementById('app')
)
